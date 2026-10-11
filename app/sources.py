"""Optional Scapy live/PCAP sources; the rest of NetGuard works without Scapy."""

from __future__ import annotations

import threading
import time
from collections import defaultdict
from typing import Callable

from app.core import Flow


def flows_from_pcap(payload: bytes) -> list[Flow]:
    try:
        from scapy.all import IP, TCP, UDP, Ether, PcapReader
    except ImportError as exc:
        raise RuntimeError("PCAP support requires Scapy. Install requirements.txt") from exc

    import io
    packet_flows: dict[tuple, Flow] = {}
    flows: list[Flow] = []
    reader = PcapReader(io.BytesIO(payload))
    try:
        for packet in reader:
            if IP not in packet:
                continue
            ip = packet[IP]
            if TCP in packet:
                transport, protocol = packet[TCP], "TCP"
            elif UDP in packet:
                transport, protocol = packet[UDP], "UDP"
            else:
                continue
            src_port, dst_port = int(transport.sport), int(transport.dport)
            src_ep, dst_ep = (str(ip.src), src_port), (str(ip.dst), dst_port)
            canonical = tuple(sorted((src_ep, dst_ep))) + (protocol,)
            stamp = float(getattr(packet, "time", time.time()))
            flow = packet_flows.get(canonical)
            if flow is None or stamp - flow.ended > 2:
                if flow is not None:
                    flows.append(flow)
                flow = Flow(src=str(ip.src), dst=str(ip.dst), dport=dst_port, protocol=protocol, started=stamp, ended=stamp)
                packet_flows[canonical] = flow
            is_forward = (flow.src, flow.dport) == src_ep
            length = int(len(packet))
            flow.ended = stamp
            if is_forward:
                flow.forward_packets += 1
                flow.forward_bytes += length
            else:
                flow.backward_packets += 1
                flow.backward_bytes += length
            if protocol == "TCP":
                flags = int(transport.flags)
                flow.syn_count += int(bool(flags & 0x02))
                flow.ack_count += int(bool(flags & 0x10))
                flow.rst_count += int(bool(flags & 0x04))
                if flags & (0x01 | 0x04):
                    flows.append(flow)
                    packet_flows.pop(canonical, None)
    finally:
        reader.close()
    flows.extend(packet_flows.values())
    return sorted(flows, key=lambda item: item.started)


class CaptureSource:
    def __init__(self) -> None:
        self._sniffer = None
        self._sweeper: threading.Thread | None = None
        self._stop_event: threading.Event | None = None
        self._flush_remaining: Callable[[], None] | None = None
        self.running = False

    def start(self, interface: str | None, callback: Callable[[Flow], None]) -> None:
        try:
            from scapy.all import AsyncSniffer, IP, TCP, UDP
        except ImportError as exc:
            raise RuntimeError("Live capture requires Scapy and a supported capture driver (Npcap on Windows)") from exc
        if self.running:
            self.stop()
        active: dict[tuple, Flow] = {}
        lock = threading.Lock()

        def receive(packet) -> None:
            if IP not in packet or (TCP not in packet and UDP not in packet):
                return
            ip = packet[IP]
            transport = packet[TCP] if TCP in packet else packet[UDP]
            protocol = "TCP" if TCP in packet else "UDP"
            src_ep, dst_ep = (str(ip.src), int(transport.sport)), (str(ip.dst), int(transport.dport))
            key = tuple(sorted((src_ep, dst_ep))) + (protocol,)
            stamp = float(getattr(packet, "time", time.time()))
            completed: list[Flow] = []
            with lock:
                flow = active.get(key)
                if flow is None or stamp - flow.ended > 2:
                    if flow is not None:
                        completed.append(flow)
                    flow = Flow(src=str(ip.src), dst=str(ip.dst), dport=int(transport.dport), protocol=protocol, started=stamp, ended=stamp)
                    active[key] = flow
                forward = (flow.src, flow.dport) == src_ep
                length = int(len(packet))
                flow.ended = stamp
                if forward:
                    flow.forward_packets += 1
                    flow.forward_bytes += length
                else:
                    flow.backward_packets += 1
                    flow.backward_bytes += length
                if protocol == "TCP":
                    flags = int(transport.flags)
                    flow.syn_count += int(bool(flags & 2))
                    flow.ack_count += int(bool(flags & 16))
                    flow.rst_count += int(bool(flags & 4))
                    if flags & 5:
                        completed.append(flow)
                        active.pop(key, None)
            for item in completed:
                callback(item)

        stop_event = threading.Event()

        def flush_idle() -> None:
            while not stop_event.wait(.5):
                now = time.time()
                with lock:
                    expired = [key for key, flow in active.items() if now - flow.ended >= 2]
                    completed = [active.pop(key) for key in expired]
                for item in completed:
                    callback(item)

        def flush_remaining() -> None:
            with lock:
                completed = list(active.values())
                active.clear()
            for item in completed:
                callback(item)

        self._sniffer = AsyncSniffer(iface=interface or None, prn=receive, store=False, filter="ip and (tcp or udp)")
        try:
            self._sniffer.start()
        except Exception as exc:
            self._sniffer = None
            raise RuntimeError(f"Could not start capture: {exc}") from exc
        self.running = True
        self._stop_event = stop_event
        self._flush_remaining = flush_remaining
        self._sweeper = threading.Thread(target=flush_idle, name="netguard-flow-idle", daemon=True)
        self._sweeper.start()

    def stop(self) -> None:
        sniffer, self._sniffer = self._sniffer, None
        if sniffer is not None:
            try:
                sniffer.stop()
            except Exception:
                pass
        if self._stop_event is not None:
            self._stop_event.set()
        if self._sweeper is not None:
            self._sweeper.join(timeout=1)
        if self._flush_remaining is not None:
            self._flush_remaining()
        self._stop_event = None
        self._sweeper = None
        self._flush_remaining = None
        self.running = False

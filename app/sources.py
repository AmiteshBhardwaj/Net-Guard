"""Optional Scapy live/PCAP sources; the rest of NetGuard works without Scapy."""

from __future__ import annotations

import threading
import time
from collections import defaultdict
import random
from typing import Callable

from app.core import Flow, FlowTable, Packet, FIN, SYN, RST, ACK


import io
from pathlib import Path
from typing import Any

from app.core import Flow, FlowTable, Packet, FIN, SYN, RST, ACK, FEATURES


def get_active_interfaces() -> list[dict[str, Any]]:
    """Return available host interfaces with IP addresses and status."""
    names: list[str] = []
    default_iface: str | None = None
    try:
        from scapy.all import get_if_list, conf
        names = list(get_if_list())
        cand = getattr(conf, "iface", None)
        if cand:
            default_iface = getattr(cand, "name", str(cand))
    except Exception:
        names = ["lo", "eth0"]

    import socket
    results: list[dict[str, Any]] = []
    for name in names:
        ip = None
        try:
            import fcntl, struct
            s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
            ip = socket.inet_ntoa(fcntl.ioctl(
                s.fileno(),
                0x8915,  # SIOCGIFADDR
                struct.pack('256s', name[:15].encode('utf-8'))
            )[20:24])
        except Exception:
            pass

        is_up = True
        operstate_path = Path(f"/sys/class/net/{name}/operstate")
        if operstate_path.exists():
            try:
                is_up = operstate_path.read_text().strip().lower() in {"up", "unknown"}
            except Exception:
                pass

        results.append({
            "name": name,
            "ip": ip,
            "is_default": bool((default_iface and name == default_iface) or (not default_iface and ip and not ip.startswith("127."))),
            "is_up": is_up,
        })
    return results


def flows_from_csv(source: str | Path | bytes, limit: int = 5000) -> list[Flow]:
    """Load benchmark dataset CSV flows into NetGuard Flow objects."""
    import pandas as pd
    if isinstance(source, bytes):
        df = pd.read_csv(io.BytesIO(source), nrows=limit)
    else:
        df = pd.read_csv(source, nrows=limit)

    flows: list[Flow] = []
    now = time.time()
    cum_time = 0.0

    target_ips = {
        "Normal": ("192.168.10.50", "192.168.10.5"),
        "PortScan": ("192.168.10.150", "192.168.10.5"),
        "DoS/DDoS": ("192.168.10.200", "192.168.10.5"),
        "BruteForce": ("192.168.10.220", "192.168.10.5"),
    }

    for _, row in df.iterrows():
        label = str(row.get("target", "Normal"))
        src_ip, dst_ip = target_ips.get(label, ("192.168.10.100", "192.168.10.5"))
        dport = int(row.get("destination_port", 80))
        dur = float(row.get("duration_seconds", 0.05))
        fwd_pkts = int(row.get("forward_packets", 1))
        bwd_pkts = int(row.get("backward_packets", 0))
        fwd_bytes = int(row.get("forward_bytes", 60))
        bwd_bytes = int(row.get("backward_bytes", 0))
        syn_cnt = int(row.get("syn_count", 0))
        ack_cnt = int(row.get("ack_count", 0))
        rst_cnt = int(row.get("rst_count", 0))

        start_ts = now + cum_time
        end_ts = start_ts + max(0.001, dur)
        cum_time += min(max(dur, 0.01), 0.5)

        flow = Flow(
            src=src_ip,
            dst=dst_ip,
            dport=dport,
            sport=random.randint(40000, 65000),
            protocol="TCP",
            started=start_ts,
            ended=end_ts,
            forward_packets=fwd_pkts,
            backward_packets=bwd_pkts,
            forward_bytes=fwd_bytes,
            backward_bytes=bwd_bytes,
            syn_count=syn_cnt,
            ack_count=ack_cnt,
            rst_count=rst_cnt,
        )
        flows.append(flow)
    return flows


def flows_from_pcap(payload: bytes) -> list[Flow]:
    try:
        from scapy.all import IP, TCP, UDP, Ether, PcapReader
    except ImportError as exc:
        raise RuntimeError("PCAP support requires Scapy. Install requirements.txt") from exc

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
                # Client initiator heuristics: SYN packet or client high port to low server port
                is_init = True
                if protocol == "TCP" and (int(transport.flags) & 0x02) and not (int(transport.flags) & 0x10):
                    is_init = True
                elif dst_port < src_port:
                    is_init = True
                elif src_port < dst_port:
                    is_init = False
                client_ip, srv_ip = (str(ip.src), str(ip.dst)) if is_init else (str(ip.dst), str(ip.src))
                client_port, srv_port = (src_port, dst_port) if is_init else (dst_port, src_port)
                flow = Flow(src=client_ip, dst=srv_ip, dport=srv_port, sport=client_port, protocol=protocol, started=stamp, ended=stamp)
                packet_flows[canonical] = flow
            is_forward = (flow.src, flow.sport) == src_ep
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
        self.interface: str | None = None
        self.running = False

    def start(self, interface: str | None, callback: Callable[[Flow], None]) -> None:
        try:
            from scapy.all import AsyncSniffer, IP, TCP, UDP
        except ImportError as exc:
            raise RuntimeError("Live capture requires Scapy and a supported capture driver (Npcap on Windows)") from exc
        if self.running:
            self.stop()

        chosen_iface = interface
        if not chosen_iface or chosen_iface == "auto":
            candidates = [iface for iface in get_active_interfaces() if iface.get("is_up") and iface.get("ip") and not iface["ip"].startswith("127.")]
            if candidates:
                chosen_iface = candidates[0]["name"]
            else:
                chosen_iface = None

        self.interface = chosen_iface
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
                    # Determine client initiator
                    is_init = True
                    if protocol == "TCP" and (int(transport.flags) & 0x02) and not (int(transport.flags) & 0x10):
                        is_init = True
                    elif int(transport.dport) < int(transport.sport):
                        is_init = True
                    elif int(transport.sport) < int(transport.dport):
                        is_init = False
                    client_ip, srv_ip = (str(ip.src), str(ip.dst)) if is_init else (str(ip.dst), str(ip.src))
                    client_port, srv_port = (int(transport.sport), int(transport.dport)) if is_init else (int(transport.dport), int(transport.sport))
                    flow = Flow(src=client_ip, dst=srv_ip, dport=srv_port, sport=client_port, protocol=protocol, started=stamp, ended=stamp)
                    active[key] = flow
                forward = (flow.src, flow.sport) == src_ep
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

        self._sniffer = AsyncSniffer(iface=chosen_iface, prn=receive, store=False, filter="ip and (tcp or udp)")
        try:
            self._sniffer.start()
        except Exception as exc:
            self._sniffer = None
            raise RuntimeError(f"Could not start capture on {chosen_iface or 'default'}: {exc}") from exc
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


class DemoSource:
    """Continuously generates simulated office network telemetry in a background thread."""

    def __init__(self, callback: Callable[[Flow], None], get_blocked: Callable[[], set[str]] | None = None) -> None:
        self.callback = callback
        self.get_blocked = get_blocked
        self._thread: threading.Thread | None = None
        self._stop_event = threading.Event()
        self.running = False
        self.attack: dict | None = None
        self.acc = {"normal": 0.0, "dns": 0.0, "atk": 0.0}
        self.scan_port = 1
        self.clients = [f"10.0.0.{i}" for i in range(10, 31)]
        self.table = FlowTable()

    def set_attack(self, attack: dict | None) -> None:
        self.attack = attack

    def start(self) -> None:
        if self.running:
            return
        self._stop_event.clear()
        self.running = True
        self._thread = threading.Thread(target=self._run, name="netguard-demo-source", daemon=True)
        self._thread.start()

    def stop(self) -> None:
        if not self.running:
            return
        self._stop_event.set()
        if self._thread:
            self._thread.join(timeout=1.0)
        self.running = False
        self._thread = None

    def _count(self, name: str, rate: float, dt: float) -> int:
        self.acc[name] += rate * dt
        n = int(self.acc[name])
        self.acc[name] -= n
        return n

    def _emit_packet(self, p: Packet, blocked: set[str]) -> None:
        if p.src in blocked:
            return
        for f in self.table.add(p):
            self.callback(f)

    def _http(self, ts: float, src: str, dport: int, req: int, resp_pkts: int, resp_size: int, blocked: set[str]) -> None:
        sport = random.randint(40000, 60000)
        dst = "10.0.0.2"

        def emit(a, b, sp, dp, length, flags):
            nonlocal ts
            ts += random.uniform(0.001, 0.008)
            self._emit_packet(Packet(ts, a, b, sp, dp, "TCP", length, flags), blocked)

        emit(src, dst, sport, dport, 60, SYN)
        emit(dst, src, dport, sport, 60, SYN | ACK)
        emit(src, dst, sport, dport, 54, ACK)
        emit(src, dst, sport, dport, req, ACK)
        for _ in range(resp_pkts):
            emit(dst, src, dport, sport, resp_size, ACK)
        emit(src, dst, sport, dport, 54, FIN | ACK)
        emit(dst, src, dport, sport, 54, FIN | ACK)

    def _normal(self, now: float, dt: float, blocked: set[str]) -> None:
        for _ in range(self._count("normal", 6, dt)):
            self._http(now, random.choice(self.clients), random.choice([8080, 8080, 443]),
                       random.randint(300, 650), random.randint(2, 6), random.randint(600, 1450), blocked)
        for _ in range(self._count("dns", 4, dt)):
            src = random.choice(self.clients)
            sp = random.randint(40000, 60000)
            self._emit_packet(Packet(now, src, "10.0.0.1", sp, 53, "UDP", 74), blocked)
            self._emit_packet(Packet(now + 0.01, "10.0.0.1", src, 53, sp, "UDP", 120), blocked)

    def _attack(self, atk: dict, now: float, dt: float, blocked: set[str]) -> None:
        kind = atk.get("type")
        src = atk.get("src", "10.0.0.66")
        dst = atk.get("dst", "10.0.0.2")
        if kind == "portscan":
            for _ in range(self._count("atk", 100, dt)):
                p = self.scan_port
                self.scan_port = self.scan_port % 1000 + 1
                sp = random.randint(40000, 60000)
                self._emit_packet(Packet(now, src, dst, sp, p, "TCP", 60, SYN), blocked)
                self._emit_packet(Packet(now + 0.002, dst, src, p, sp, "TCP", 54, RST | ACK), blocked)
        elif kind == "bruteforce":
            for _ in range(self._count("atk", 10, dt)):
                self._http(now, src, 8080, 220, 1, 140, blocked)
        elif kind == "dos":
            for _ in range(self._count("atk", 160, dt)):
                sp = random.randint(40000, 60000)
                self._emit_packet(Packet(now, src, dst, sp, 8080, "TCP", 60, SYN), blocked)
                self._emit_packet(Packet(now + 0.001, dst, src, 8080, sp, "TCP", 60, SYN | ACK), blocked)
                self._emit_packet(Packet(now + 0.002, src, dst, sp, 8080, "TCP", 54, ACK), blocked)
                self._emit_packet(Packet(now + 0.003, src, dst, sp, 8080, "TCP", 800, ACK), blocked)
                self._emit_packet(Packet(now + 0.005, dst, src, 8080, sp, "TCP", 54, RST | ACK), blocked)

    def _run(self) -> None:
        last = time.time()
        while not self._stop_event.is_set():
            now = time.time()
            dt, last = now - last, now
            blocked = self.get_blocked() if self.get_blocked else set()
            self._normal(now, dt, blocked)
            if self.attack and self.attack.get("until", 0) > now:
                self._attack(self.attack, now, dt, blocked)
            elif self.attack and self.attack.get("until", 0) <= now:
                self.attack = None

            for f in self.table.expire(now):
                self.callback(f)
            time.sleep(0.05)


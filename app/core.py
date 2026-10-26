"""Flow features, flow table tracking, and explainable threat decisions."""

from __future__ import annotations

import ipaddress
import os
import time
import uuid
from collections import Counter, defaultdict, deque
from dataclasses import dataclass, field
from typing import Any

FIN, SYN, RST, ACK = 0x01, 0x02, 0x04, 0x10

FEATURES = [
    "destination_port", "duration_seconds", "forward_packets", "backward_packets",
    "forward_bytes", "backward_bytes", "bytes_per_second", "packets_per_second",
    "average_packet_size", "syn_count", "ack_count", "rst_count",
]
LABELS = ["Normal", "PortScan", "DoS/DDoS", "BruteForce"]
SEVERITY = {"Normal": "LOW", "PortScan": "HIGH", "DoS/DDoS": "CRITICAL", "BruteForce": "HIGH"}


@dataclass
class Packet:
    ts: float
    src: str
    dst: str
    sport: int
    dport: int
    proto: str = "TCP"  # "TCP" | "UDP" | "ICMP"
    length: int = 60
    flags: int = 0


@dataclass
class Flow:
    src: str
    dst: str
    dport: int
    sport: int | None = None
    protocol: str = "TCP"
    started: float = field(default_factory=time.time)
    ended: float = field(default_factory=time.time)
    forward_packets: int = 0
    backward_packets: int = 0
    forward_bytes: int = 0
    backward_bytes: int = 0
    syn_count: int = 0
    ack_count: int = 0
    rst_count: int = 0
    login_failures: int = 0
    request_count: int = 0
    flow_id: str = field(default_factory=lambda: uuid.uuid4().hex)

    def update(self, p: Packet) -> None:
        if p.src == self.src and (self.sport is None or p.sport == self.sport):
            self.forward_packets += 1
            self.forward_bytes += p.length
        else:
            self.backward_packets += 1
            self.backward_bytes += p.length
        if p.ts > self.ended:
            self.ended = p.ts
        if p.proto == "TCP":
            self.syn_count += int(bool(p.flags & SYN))
            self.ack_count += int(bool(p.flags & ACK))
            self.rst_count += int(bool(p.flags & RST))

    def features(self) -> list[float]:
        duration = max(0.001, self.ended - self.started)
        packets = self.forward_packets + self.backward_packets
        octets = self.forward_bytes + self.backward_bytes
        return [
            float(self.dport), duration, float(self.forward_packets), float(self.backward_packets),
            float(self.forward_bytes), float(self.backward_bytes), octets / duration,
            packets / duration, octets / max(packets, 1), float(self.syn_count),
            float(self.ack_count), float(self.rst_count),
        ]

    def as_dict(self) -> dict[str, Any]:
        return {
            "id": self.flow_id, "ts": self.ended, "src": self.src, "dst": self.dst,
            "dport": int(self.dport), "protocol": self.protocol,
            "features": dict(zip(FEATURES, self.features())),
            "login_failures": self.login_failures, "request_count": self.request_count,
            "pkts": self.forward_packets + self.backward_packets, "syn": self.syn_count,
        }


class FlowTable:
    """Groups packets into bidirectional flows, handles TCP lifecycle, and expires idle flows."""

    def __init__(self, idle: float = 1.0, active_max: float = 5.0, linger: float = 1.0):
        self.idle = idle
        self.active_max = active_max
        self.linger = linger
        self.flows: dict[tuple, Flow] = {}
        self.closed: dict[tuple, float] = {}

    def __len__(self) -> int:
        return len(self.flows)

    @staticmethod
    def _key(p: Packet) -> tuple:
        a, b = (p.src, p.sport), (p.dst, p.dport)
        return (p.proto, a, b) if a <= b else (p.proto, b, a)

    def add(self, p: Packet) -> list[Flow]:
        k = self._key(p)
        if k in self.closed:
            if p.ts < self.closed[k]:
                return []
            del self.closed[k]
        f = self.flows.get(k)
        if f is None:
            # For TCP, require SYN to open a clean new flow
            if p.proto == "TCP" and not (p.flags & SYN and not p.flags & ACK):
                return []
            f = Flow(src=p.src, dst=p.dst, sport=p.sport, dport=p.dport, protocol=p.proto,
                     started=p.ts, ended=p.ts)
            self.flows[k] = f
        f.update(p)
        if f.rst_count or (p.flags & FIN):
            del self.flows[k]
            self.closed[k] = p.ts + self.linger
            return [f]
        return []

    def expire(self, now: float) -> list[Flow]:
        out = []
        for k, f in list(self.flows.items()):
            if now - f.ended >= self.idle or now - f.started >= self.active_max:
                out.append(f)
                del self.flows[k]
        for k, t in list(self.closed.items()):
            if t < now:
                del self.closed[k]
        return out


class DecisionEngine:
    """Combines an optional trained model with deterministic, explainable rules."""

    def __init__(self, model: Any = None, threshold: float = 0.8, whitelist: set[str] | None = None):
        self.model = model
        self.threshold = threshold
        self.whitelist = whitelist if whitelist is not None else set()
        self.source_activity: dict[str, deque[tuple[float, int, int, int, int]]] = defaultdict(deque)
        self.model_activity: dict[str, deque[tuple[float, str]]] = defaultdict(deque)
        self.cooldowns: dict[tuple[str, str], float] = {}

    def decide(self, flow: Flow) -> dict[str, Any] | None:
        now = flow.ended
        if flow.src in self.whitelist:
            return None
        history = self.source_activity[flow.src]
        history.append((now, flow.dport, flow.login_failures, flow.request_count, flow.forward_packets))
        while history and now - history[0][0] > 5.0:
            history.popleft()

        ports = Counter(item[1] for item in history)
        distinct_ports = len(ports)
        login_count = sum(item[2] for item in history)
        requests = sum(item[3] for item in history)
        forward_packets = sum(item[4] for item in history)
        top_port, top_n = ports.most_common(1)[0]
        span = max(now - history[0][0], 0.001)
        eff_span = max(span, 1.0)

        label, probability, reasons = "Normal", 0.0, []

        # 0. ML model scoring
        ml_candidate, ml_confidence = None, 0.0
        if self.model is not None:
            try:
                row = [flow.features()]
                classes = list(self.model.classes_)
                probs = self.model.predict_proba(row)[0]
                index = int(probs.argmax())
                candidate, confidence = str(classes[index]), float(probs[index])
                if candidate in LABELS and confidence >= self.threshold:
                    activity = self.model_activity[flow.src]
                    activity.append((now, candidate))
                    while activity and now - activity[0][0] > 5:
                        activity.popleft()
                    repeated = sum(name == candidate for _, name in activity)
                    if candidate != "Normal" and repeated >= 2:
                        ml_candidate, ml_confidence = candidate, confidence
            except Exception:
                pass

        # 1. Port scan rule
        if distinct_ports >= 50 or (distinct_ports >= 20 and len(history) >= 20):
            rate = distinct_ports / eff_span
            label, probability = "PortScan", max(0.99, ml_confidence)
            reasons.append(f"{distinct_ports} different ports probed in {span:.1f}s")
            if ml_candidate == "PortScan":
                reasons.append(f"Random Forest confidence {ml_confidence:.0%}")

        # 2. DoS / flood rule
        elif top_n >= 50 or requests >= 60 or forward_packets >= 60:
            rate = max(top_n, requests, forward_packets) / eff_span
            label, probability = "DoS/DDoS", max(0.98, ml_confidence)
            count = max(top_n, requests, forward_packets)
            reasons.append(f"{count} connection requests to port {top_port} in {span:.1f}s ({rate:.0f}/sec)")
            if ml_candidate == "DoS/DDoS":
                reasons.append(f"Random Forest confidence {ml_confidence:.0%}")

        # 3. Brute force rule
        elif (login_count >= 8 and sum(item[2] > 0 for item in history) >= 3) or (top_n >= 20 and span >= 1.0 and top_n / eff_span <= 30):
            count = max(login_count, top_n)
            label, probability = "BruteForce", max(0.95, ml_confidence)
            reasons.append(f"{count} repeated connection attempts on port {top_port} in {span:.1f}s")
            if ml_candidate == "BruteForce":
                reasons.append(f"Random Forest confidence {ml_confidence:.0%}")

        # 4. Pure ML model detection
        elif ml_candidate is not None:
            label, probability = ml_candidate, ml_confidence
            reasons.append(f"Random Forest confidence {ml_confidence:.0%}")

        if label == "Normal" or probability < self.threshold:
            return None

        # Episode cooldowns (10s)
        key = (flow.src, label)
        if key in self.cooldowns and now - self.cooldowns[key] < 10.0:
            return None
        self.cooldowns[key] = now

        return {
            "id": uuid.uuid4().hex, "ts": now, "src": flow.src, "dst": flow.dst,
            "dport": int(flow.dport), "label": label, "prob": round(probability, 3),
            "severity": SEVERITY.get(label, "HIGH"), "reasons": reasons,
            "blocked": False, "protocol": flow.protocol,
        }


def private_target(value: str) -> str:
    """Accept loopback or RFC1918 IPv4 addresses only."""
    address = ipaddress.ip_address(value)
    allowed = [
        ipaddress.ip_network("10.0.0.0/8"), ipaddress.ip_network("172.16.0.0/12"),
        ipaddress.ip_network("192.168.0.0/16"), ipaddress.ip_network("127.0.0.0/8"),
    ]
    if address.version != 4 or not any(address in network for network in allowed):
        raise ValueError("Target must be an IPv4 private or loopback address")
    return str(address)


def env_whitelist() -> set[str]:
    return {part.strip() for part in os.getenv("NETGUARD_WHITELIST", "").split(",") if part.strip()}


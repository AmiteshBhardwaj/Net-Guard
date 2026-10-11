"""Flow features and explainable threat decisions."""

from __future__ import annotations

import ipaddress
import os
import time
import uuid
from collections import defaultdict, deque
from dataclasses import dataclass, field
from typing import Any

FEATURES = [
    "destination_port", "duration_seconds", "forward_packets", "backward_packets",
    "forward_bytes", "backward_bytes", "bytes_per_second", "packets_per_second",
    "average_packet_size", "syn_count", "ack_count", "rst_count",
]
LABELS = ["Normal", "PortScan", "DoS/DDoS", "BruteForce"]
SEVERITY = {"Normal": "LOW", "PortScan": "HIGH", "DoS/DDoS": "CRITICAL", "BruteForce": "HIGH"}


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
        }


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
        while history and now - history[0][0] > 5:
            history.popleft()

        ports = {item[1] for item in history}
        login_count = sum(item[2] for item in history)
        requests = sum(item[3] for item in history)
        forward_packets = sum(item[4] for item in history)
        label, probability, reasons = "Normal", 0.0, []
        if len(ports) >= 50 and len(history) >= 3:
            label, probability = "PortScan", 0.99
            reasons.append(f"{len(ports)} destination ports touched in 5 seconds")
        elif login_count >= 8 and sum(item[2] > 0 for item in history) >= 3:
            label, probability = "BruteForce", 0.98
            reasons.append(f"{login_count} failed login attempts in 5 seconds")
        elif requests >= 60 and sum(item[3] > 0 for item in history) >= 3:
            label, probability = "DoS/DDoS", 0.96
            reasons.append(f"{requests} requests sent in 5 seconds")
        elif forward_packets >= 60 and len(history) >= 3:
            label, probability = "DoS/DDoS", 0.96
            reasons.append(f"{forward_packets} forward packets sent in 5 seconds")
        elif self.model is not None:
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
                    if candidate != "Normal" and repeated >= 3:
                        label, probability = candidate, confidence
                        reasons.append(f"Model confidence {confidence:.0%} across 3+ flows in 5 seconds")
            except Exception:
                # A stale/incompatible model must not take down live monitoring.
                pass

        if label == "Normal" or probability < self.threshold:
            return None
        key = (flow.src, label)
        if key in self.cooldowns and now - self.cooldowns[key] < 10:
            return None
        self.cooldowns[key] = now
        return {
            "id": uuid.uuid4().hex, "ts": now, "src": flow.src, "dst": flow.dst,
            "dport": int(flow.dport), "label": label, "prob": round(probability, 3),
            "severity": SEVERITY[label], "reasons": reasons, "blocked": False,
            "protocol": flow.protocol,
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

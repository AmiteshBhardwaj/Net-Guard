"""Isolation Forest Anomaly Detection and Stream Simulation.

Ported and enhanced from the Cybersecurity Threat Detection and Response Dashboard.
Uses sklearn IsolationForest to model baseline traffic and detect anomalous outliers
in real-time simulated network telemetry.
"""

from __future__ import annotations

import time
import uuid
from typing import Any
import numpy as np
from sklearn.ensemble import IsolationForest

PROTOCOL_MAP = {
    0: "TCP",
    1: "UDP",
    2: "ANOMALOUS",
}


class IsolationThreatDetector:
    """Statistical and IsolationForest threat detection engine."""

    def __init__(self, contamination: float = 0.01, random_state: int = 42, training_samples: int = 1000):
        self.contamination = contamination
        self.random_state = random_state
        self.training_samples = training_samples
        self.model = IsolationForest(contamination=self.contamination, random_state=self.random_state)
        self.train_data = self.generate_normal_data(self.training_samples)
        self.model.fit(self.train_data)
        self.time_counter = 0

    def generate_normal_data(self, n: int) -> np.ndarray:
        """Generates n baseline normal traffic feature vectors.
        Features: [packet_size, src_port, dst_port, protocol].
        """
        rng = np.random.default_rng(self.random_state)
        packet_size = rng.normal(500, 50, n)
        src_port = rng.integers(1024, 65535, n)
        dst_port = rng.integers(20, 1024, n)
        protocol = rng.choice([0, 1], n)  # 0 for TCP, 1 for UDP
        return np.column_stack((packet_size, src_port, dst_port, protocol))

    def simulate_data_point(self, force_anomaly: bool | None = None) -> np.ndarray:
        """Simulates a network telemetry sample.

        10% probability of anomaly unless force_anomaly is explicitly set.
        """
        is_anom = force_anomaly if force_anomaly is not None else (np.random.rand() < 0.1)

        if is_anom:
            packet_size = float(np.random.normal(1000, 100))
            src_port = int(np.random.randint(1, 1024))
            dst_port = int(np.random.randint(1024, 65535))
            protocol = 2  # Anomalous protocol indicator
        else:
            packet_size = float(max(64.0, np.random.normal(500, 50)))
            src_port = int(np.random.randint(1024, 65535))
            dst_port = int(np.random.randint(20, 1024))
            protocol = int(np.random.choice([0, 1]))

        return np.array([packet_size, src_port, dst_port, protocol], dtype=float)

    def flow_to_point(self, flow: Any) -> np.ndarray:
        """Convert a live Flow into IsolationForest feature vector [packet_size, src_port, dst_port, protocol]."""
        pkts = max(1, getattr(flow, "forward_packets", 1) + getattr(flow, "backward_packets", 0))
        bytes_tot = getattr(flow, "forward_bytes", 60) + getattr(flow, "backward_bytes", 0)
        avg_pkt_size = float(bytes_tot / pkts)
        src_port = float(getattr(flow, "sport", 0) or 0)
        dst_port = float(getattr(flow, "dport", 80) or 80)
        proto_str = str(getattr(flow, "protocol", "TCP")).upper()
        proto_code = 0 if proto_str == "TCP" else (1 if proto_str == "UDP" else 2)
        return np.array([avg_pkt_size, src_port, dst_port, proto_code], dtype=float)

    def analyze_point(self, data_point: np.ndarray | list[float]) -> dict[str, Any]:
        """Runs IsolationForest anomaly detection and extracts explainability factors."""
        arr = np.asarray(data_point, dtype=float).reshape(1, -1)
        pred = self.model.predict(arr)[0]  # -1 for anomaly, 1 for normal
        raw_score = float(self.model.decision_function(arr)[0])
        is_anomaly = bool(pred == -1 or arr[0][3] == 2.0 or arr[0][0] > 900)

        packet_size = round(float(arr[0][0]), 1)
        src_port = int(arr[0][1])
        dst_port = int(arr[0][2])
        protocol_code = int(arr[0][3])
        protocol_name = PROTOCOL_MAP.get(protocol_code, f"UNKNOWN({protocol_code})")

        reasons = []
        if packet_size > 850:
            reasons.append(f"Abnormal packet size ({packet_size}B vs expected ~500B)")
        if src_port < 1024:
            reasons.append(f"Privileged/suspicious source port ({src_port})")
        if dst_port > 1024:
            reasons.append(f"Non-standard high destination port ({dst_port})")
        if protocol_code == 2:
            reasons.append("Irregular protocol signature (code 2 / anomaly flag)")

        if is_anomaly:
            if packet_size >= 1050 or protocol_code == 2:
                severity = "CRITICAL"
                confidence = min(0.99, max(0.85, 0.90 - raw_score))
            elif raw_score < -0.10:
                severity = "HIGH"
                confidence = min(0.95, max(0.80, 0.85 - raw_score))
            else:
                severity = "MEDIUM"
                confidence = min(0.90, max(0.75, 0.80 - raw_score))
            action = "Block suspicious traffic"
        else:
            severity = "LOW"
            confidence = min(0.99, max(0.80, 0.80 + raw_score))
            action = "Allow (Normal traffic)"

        self.time_counter += 1
        return {
            "id": uuid.uuid4().hex,
            "ts": time.time(),
            "time_step": self.time_counter,
            "packet_size": packet_size,
            "src_port": src_port,
            "dst_port": dst_port,
            "protocol": protocol_name,
            "protocol_code": protocol_code,
            "is_anomaly": is_anomaly,
            "anomaly_score": round(raw_score, 4),
            "confidence": round(confidence, 3),
            "severity": severity,
            "reasons": reasons,
            "action_taken": action,
            "raw_features": [packet_size, src_port, dst_port, protocol_code],
        }

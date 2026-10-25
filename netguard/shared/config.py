"""Shared settings. Every value can be overridden with an environment variable."""
import ipaddress
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
MODEL_DIR = ROOT / "model"

BACKEND_URL = os.getenv("NG_BACKEND", "http://127.0.0.1:8000")
VICTIM_HOST = os.getenv("NG_VICTIM_HOST", "127.0.0.1")
VICTIM_PORT = int(os.getenv("NG_VICTIM_PORT", "8080"))

# The ONE feature order shared by the flow builder, the detector and the ML trainer.
# Units: duration in seconds, sizes in bytes, rates per second.
FEATURES = [
    "dport", "duration", "fwd_pkts", "bwd_pkts", "fwd_bytes", "bwd_bytes",
    "bytes_per_s", "pkts_per_s", "avg_pkt_size", "syn_count", "ack_count", "rst_count",
]

# Detector tuning
CONF_THRESHOLD = float(os.getenv("NG_CONF", "0.80"))   # ML confidence needed to alert
MIN_FLOWS = int(os.getenv("NG_MIN_FLOWS", "3"))        # suspicious flows from one IP needed
WINDOW_S = 5.0                                         # sliding window per source IP
COOLDOWN_S = 10.0                                      # one alert per IP + attack type
SCAN_PORTS = 50                                        # distinct ports in the window
BRUTE_FLOWS = 25                                       # repeated attempts on one port
BRUTE_MIN_SPAN_S = 1.0                                 # avoids calling a ramping flood "brute force"
BRUTE_MAX_RATE = 30                                    # flows per second; faster than this is a flood, not guessing
DOS_FLOWS = 150                                        # connections to one port in the window
WHITELIST = {ip for ip in os.getenv("NG_WHITELIST", "").split(",") if ip}

# Demo generator
DEMO_ATTACKER = "10.0.0.66"
DEMO_SERVER = "10.0.0.2"

_PRIVATE = [ipaddress.ip_network(n) for n in
            ("127.0.0.0/8", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16")]


def is_private_ip(host: str) -> bool:
    """True only for loopback and RFC1918 addresses. Used by the attack simulator."""
    try:
        ip = ipaddress.ip_address(host)
    except ValueError:
        return False
    return any(ip in net for net in _PRIVATE)


def normalize_label(name) -> str:
    """Map dataset class names (CICIDS style) to the four labels the dashboard knows."""
    n = str(name).lower()
    if n in ("0", "benign", "normal"):
        return "Normal"
    if "scan" in n:
        return "PortScan"
    if "dos" in n or "flood" in n:
        return "DoS"
    if "patator" in n or "brute" in n:
        return "BruteForce"
    return str(name)


def severity(ratio: float) -> str:
    """ratio = how far past the alert threshold the evidence is."""
    if ratio < 1.5:
        return "LOW"
    if ratio < 3:
        return "MEDIUM"
    if ratio < 8:
        return "HIGH"
    return "CRITICAL"


def severity_from_prob(p: float) -> str:
    if p < 0.85:
        return "LOW"
    if p < 0.93:
        return "MEDIUM"
    if p < 0.98:
        return "HIGH"
    return "CRITICAL"


SEVERITY_ORDER = {"LOW": 1, "MEDIUM": 2, "HIGH": 3, "CRITICAL": 4}

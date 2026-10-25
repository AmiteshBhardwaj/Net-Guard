"""Packets -> bidirectional flows -> 12 features (the same ones the ML model is trained on)."""
from dataclasses import dataclass

FIN, SYN, RST, ACK = 0x01, 0x02, 0x04, 0x10


@dataclass
class Packet:
    ts: float
    src: str
    dst: str
    sport: int
    dport: int
    proto: str          # "TCP" | "UDP" | "ICMP"
    length: int
    flags: int = 0


@dataclass
class Flow:
    src: str            # initiator (sender of the first packet we saw)
    dst: str
    sport: int
    dport: int
    proto: str
    start: float
    last: float
    fwd_pkts: int = 0
    bwd_pkts: int = 0
    fwd_bytes: int = 0
    bwd_bytes: int = 0
    syn: int = 0
    ack: int = 0
    rst: int = 0
    fin: int = 0

    def update(self, p: Packet) -> None:
        if p.src == self.src and p.sport == self.sport:
            self.fwd_pkts += 1
            self.fwd_bytes += p.length
        else:
            self.bwd_pkts += 1
            self.bwd_bytes += p.length
        if p.ts > self.last:
            self.last = p.ts
        if p.proto == "TCP":
            self.syn += bool(p.flags & SYN)
            self.ack += bool(p.flags & ACK)
            self.rst += bool(p.flags & RST)
            self.fin += bool(p.flags & FIN)

    def features(self) -> dict:
        duration = max(self.last - self.start, 0.0)
        d = max(duration, 0.001)            # avoids division by zero on 1-packet flows
        pkts = self.fwd_pkts + self.bwd_pkts
        size = self.fwd_bytes + self.bwd_bytes
        return {
            "dport": self.dport,
            "duration": duration,
            "fwd_pkts": self.fwd_pkts,
            "bwd_pkts": self.bwd_pkts,
            "fwd_bytes": self.fwd_bytes,
            "bwd_bytes": self.bwd_bytes,
            "bytes_per_s": size / d,
            "pkts_per_s": pkts / d,
            "avg_pkt_size": size / pkts if pkts else 0.0,
            "syn_count": self.syn,
            "ack_count": self.ack,
            "rst_count": self.rst,
        }

    def to_event(self) -> dict:
        return {"ts": self.last, "src": self.src, "dst": self.dst, "dport": self.dport,
                "pkts": self.fwd_pkts + self.bwd_pkts, "syn": self.syn, "f": self.features()}


class FlowTable:
    """Groups packets into flows. A flow ends on RST, on FIN from both sides, or after going idle."""

    def __init__(self, idle: float = 1.0, active_max: float = 5.0, linger: float = 1.0):
        self.idle, self.active_max, self.linger = idle, active_max, linger
        self.flows: dict = {}
        self.closed: dict = {}      # recently closed flows: swallow their trailing ACKs

    def __len__(self) -> int:
        return len(self.flows)

    @staticmethod
    def _key(p: Packet):
        a, b = (p.src, p.sport), (p.dst, p.dport)
        return (p.proto, a, b) if a <= b else (p.proto, b, a)

    def add(self, p: Packet) -> list:
        k = self._key(p)
        if k in self.closed:
            if p.ts < self.closed[k]:
                return []
            del self.closed[k]
        f = self.flows.get(k)
        if f is None:
            # A TCP flow must open with a real SYN. Trailing ACK/FIN packets of connections that already
            # closed (or started before capture) would otherwise form fake reverse flows with random ports.
            if p.proto == "TCP" and not (p.flags & SYN and not p.flags & ACK):
                return []
            f = Flow(p.src, p.dst, p.sport, p.dport, p.proto, p.ts, p.ts)
            self.flows[k] = f
        f.update(p)
        if f.rst or f.fin >= 2:
            del self.flows[k]
            self.closed[k] = p.ts + self.linger
            return [f]
        return []

    def expire(self, now: float) -> list:
        out = []
        for k, f in list(self.flows.items()):
            if now - f.last >= self.idle or now - f.start >= self.active_max:
                out.append(f)
                del self.flows[k]
        for k, t in list(self.closed.items()):
            if t < now:
                del self.closed[k]
        return out

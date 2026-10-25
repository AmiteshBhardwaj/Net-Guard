"""Traffic sources. Each one is a thread that pushes ("packet", Packet) or ("flow", event) into a queue.

  DemoSource  synthetic traffic, needs nothing installed. Always labelled SIMULATED on the dashboard.
  LiveSource  real packets from a network interface (Scapy + Npcap on Windows, run as Administrator).
  PcapSource  replays a recorded .pcap through the same pipeline.
  CsvSource   replays rows of already-computed flow features.
"""
import queue
import random
import threading
import time

from shared import config as C
from .flows import ACK, FIN, RST, SYN, Packet


class _Source(threading.Thread):
    def __init__(self, q: queue.Queue):
        super().__init__(daemon=True)
        self.q = q
        self.stop_evt = threading.Event()

    def run(self):
        try:
            self.work()
        except Exception as e:                       # noqa: BLE001 - surface every failure on the dashboard
            self.put("error", f"{type(e).__name__}: {e}")

    def work(self):
        raise NotImplementedError

    def put(self, kind, obj):
        try:
            self.q.put_nowait((kind, obj))
        except queue.Full:
            pass                       # shed load instead of freezing the dashboard

    def stop(self):
        self.stop_evt.set()


# ----------------------------------------------------------------------------- demo
class DemoSource(_Source):
    """Looks like a small office network. Attacks are driven by the dashboard buttons."""

    def __init__(self, q, control):
        super().__init__(q)
        self.control = control
        self.acc = {"normal": 0.0, "dns": 0.0, "atk": 0.0}
        self.scan_port = 1
        self.clients = [f"10.0.0.{i}" for i in range(10, 31)]

    def work(self):
        last = time.time()
        while not self.stop_evt.is_set():
            now = time.time()
            dt, last = now - last, now
            self._normal(now, dt)
            atk = self.control.attack
            if atk and atk["until"] > now:
                self._attack(atk, now, dt)
            time.sleep(0.05)

    def _count(self, name, rate, dt):
        self.acc[name] += rate * dt
        n = int(self.acc[name])
        self.acc[name] -= n
        return n

    def _http(self, ts, src, dport, req, resp_pkts, resp_size):
        sport = random.randint(40000, 60000)
        dst = C.DEMO_SERVER

        def emit(a, b, sp, dp, length, flags):
            nonlocal ts
            ts += random.uniform(0.001, 0.012)
            self.put("packet", Packet(ts, a, b, sp, dp, "TCP", length, flags))

        emit(src, dst, sport, dport, 60, SYN)
        emit(dst, src, dport, sport, 60, SYN | ACK)
        emit(src, dst, sport, dport, 54, ACK)
        emit(src, dst, sport, dport, req, ACK)
        for _ in range(resp_pkts):
            emit(dst, src, dport, sport, resp_size, ACK)
        emit(src, dst, sport, dport, 54, FIN | ACK)
        emit(dst, src, dport, sport, 54, FIN | ACK)

    def _normal(self, now, dt):
        for _ in range(self._count("normal", 6, dt)):
            self._http(now, random.choice(self.clients), random.choice([8080, 8080, 443]),
                       random.randint(300, 650), random.randint(2, 6), random.randint(600, 1450))
        for _ in range(self._count("dns", 4, dt)):
            src = random.choice(self.clients)
            sp = random.randint(40000, 60000)
            self.put("packet", Packet(now, src, "10.0.0.1", sp, 53, "UDP", 74))
            self.put("packet", Packet(now + 0.01, "10.0.0.1", src, 53, sp, "UDP", 120))

    def _attack(self, atk, now, dt):
        kind, src = atk["type"], atk.get("src", C.DEMO_ATTACKER)
        if kind == "portscan":
            for _ in range(self._count("atk", 350, dt)):
                port, self.scan_port = self.scan_port, self.scan_port % 1000 + 1
                sport = random.randint(40000, 60000)
                self.put("packet", Packet(now, src, C.DEMO_SERVER, sport, port, "TCP", 60, SYN))
                self.put("packet", Packet(now + 0.001, C.DEMO_SERVER, src, port, sport, "TCP", 54, RST | ACK))
        elif kind == "bruteforce":
            for _ in range(self._count("atk", 12, dt)):
                self._http(now, src, C.VICTIM_PORT, 230, 1, 190)
        elif kind == "dos":
            for _ in range(self._count("atk", 220, dt)):
                self._http(now, src, C.VICTIM_PORT, 120, 1, 400)


# ----------------------------------------------------------------------------- live
def scapy_to_packet(pkt, ts):
    from scapy.all import ICMP, IP, TCP, UDP
    if IP not in pkt:
        return None
    ip = pkt[IP]
    if TCP in pkt:
        t = pkt[TCP]
        return Packet(ts, ip.src, ip.dst, int(t.sport), int(t.dport), "TCP", int(ip.len), int(t.flags))
    if UDP in pkt:
        u = pkt[UDP]
        return Packet(ts, ip.src, ip.dst, int(u.sport), int(u.dport), "UDP", int(ip.len))
    if ICMP in pkt:
        return Packet(ts, ip.src, ip.dst, 0, 0, "ICMP", int(ip.len))
    return None


class LiveSource(_Source):
    def __init__(self, q, iface=None, backend_port=8000):
        super().__init__(q)
        self.iface = iface or None
        self.backend_port = backend_port
        self.bpf = f"ip and not port {backend_port}"     # do not capture our own dashboard traffic

    def work(self):
        from scapy.all import sniff
        use_bpf = True

        def cb(pkt):
            p = scapy_to_packet(pkt, time.time())
            if p and (use_bpf or self.backend_port not in (p.sport, p.dport)):
                self.put("packet", p)

        stop = lambda _p: self.stop_evt.is_set()         # noqa: E731
        try:
            sniff(iface=self.iface, prn=cb, store=False, filter=self.bpf, stop_filter=stop)
        except Exception as e:                           # noqa: BLE001
            if "filter" not in str(e).lower():
                raise
            use_bpf = False                              # no libpcap: filter in Python instead
            sniff(iface=self.iface, prn=cb, store=False, stop_filter=stop)


class PcapSource(_Source):
    def __init__(self, q, path, speed=1.0):
        super().__init__(q)
        self.path, self.speed = path, max(speed, 0.1)

    def work(self):
        from scapy.all import PcapReader
        t0 = wall0 = None
        with PcapReader(str(self.path)) as reader:
            for pkt in reader:
                if self.stop_evt.is_set():
                    return
                t = float(pkt.time)
                if t0 is None:
                    t0, wall0 = t, time.time()
                wait = (t - t0) / self.speed - (time.time() - wall0)
                if wait > 0:
                    time.sleep(min(wait, 1.0))
                p = scapy_to_packet(pkt, time.time())
                if p:
                    self.put("packet", p)
        self.put("done", None)


class CsvSource(_Source):
    """CSV with the 12 feature columns. Optional: src, dst, ts.

    With a ts column the file is replayed at its recorded timing (speed = time multiplier, default 1).
    Without one, speed = rows per second (default 50).
    """

    def __init__(self, q, path, speed=None):
        super().__init__(q)
        self.path, self.speed = path, speed

    def _emit(self, df, j, row):
        f = {k: float(row[k]) for k in C.FEATURES}
        src = str(row["src"]) if "src" in df.columns else f"10.1.{(j // 200) % 250}.{j % 200 + 1}"
        dst = str(row["dst"]) if "dst" in df.columns else C.DEMO_SERVER
        self.put("flow", {"src": src, "dst": dst, "dport": int(f["dport"]),
                          "pkts": int(f["fwd_pkts"] + f["bwd_pkts"]), "syn": int(f["syn_count"]), "f": f})

    def work(self):
        import pandas as pd
        df = pd.read_csv(self.path)
        missing = [c for c in C.FEATURES if c not in df.columns]
        if missing:
            raise ValueError(f"CSV is missing columns: {missing}")
        if "ts" in df.columns:
            df = df.sort_values("ts").reset_index(drop=True)
            mult, t0, wall0 = max(self.speed or 1.0, 0.1), float(df["ts"].iloc[0]), time.time()
            for j, row in df.iterrows():
                if self.stop_evt.is_set():
                    return
                wait = (float(row["ts"]) - t0) / mult - (time.time() - wall0)
                if wait > 0:
                    time.sleep(min(wait, 1.0))
                self._emit(df, j, row)
        else:
            rate = max(self.speed or 50.0, 1.0)
            step = max(1, int(rate * 0.05))
            for i in range(0, len(df), step):
                if self.stop_evt.is_set():
                    return
                for j, row in df.iloc[i:i + step].iterrows():
                    self._emit(df, j, row)
                time.sleep(0.05)
        self.put("done", None)

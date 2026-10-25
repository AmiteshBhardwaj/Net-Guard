"""Run the detection pipeline:  python -m pipeline.run --source demo|live|pcap|csv

Normally the backend starts this for you when you pick a source on the dashboard.
"""
import argparse
import json
import queue
import threading
import time
import urllib.error
import urllib.request
from urllib.parse import urlparse

from shared import config as C
from .detector import Detector
from .flows import FlowTable
from .sources import CsvSource, DemoSource, LiveSource, PcapSource


def _http(method, url, body=None, timeout=2.0):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, method=method,
                                 headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read() or b"{}")


class Control(threading.Thread):
    """Polls the backend for the blocklist and for demo attacks. Exits the pipeline if the backend is gone."""

    def __init__(self, backend):
        super().__init__(daemon=True)
        self.url = backend + "/api/control"
        self.blocked: set = set()
        self.attack = None
        self.whitelist: set = set()
        self.failures = 0

    def run(self):
        while True:
            try:
                c = _http("GET", self.url)
                self.blocked, self.attack = set(c.get("blocked", [])), c.get("attack")
                self.whitelist = set(c.get("whitelist", []))
                self.failures = 0
            except Exception:
                self.failures += 1
            time.sleep(0.5)


class Sender(threading.Thread):
    def __init__(self, backend):
        super().__init__(daemon=True)
        self.backend, self.q = backend, queue.Queue(maxsize=500)

    def send(self, path, body):
        try:
            self.q.put_nowait((path, body))
        except queue.Full:
            pass

    def run(self):
        while True:
            path, body = self.q.get()
            try:
                _http("POST", self.backend + path, body)
            except Exception:
                pass


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--source", choices=["demo", "live", "pcap", "csv"], default="demo")
    ap.add_argument("--backend", default=C.BACKEND_URL)
    ap.add_argument("--iface", default=None)
    ap.add_argument("--path", default=None)
    ap.add_argument("--speed", type=float, default=None)
    a = ap.parse_args()

    ctl = Control(a.backend)
    ctl.start()
    sender = Sender(a.backend)
    sender.start()
    det = Detector()
    table = FlowTable()
    q: queue.Queue = queue.Queue(maxsize=60000)

    if a.source == "demo":
        src = DemoSource(q, ctl)
    elif a.source == "live":
        src = LiveSource(q, a.iface, urlparse(a.backend).port or 8000)
    elif a.source == "pcap":
        src = PcapSource(q, a.path, a.speed or 1.0)
    else:
        src = CsvSource(q, a.path, a.speed)
    src.start()
    sender.send("/api/pipeline", {"engine": det.engine, "source": a.source, "started": time.time()})

    pending: list = []
    last_tick = last_sec = time.time()
    pk = flagged_pk = dropped = flows_out = 0

    while True:
        # Do not run forever without a backend (it normally kills us on shutdown).
        if ctl.failures > 60:
            return
        batch = []
        try:
            batch.append(q.get(timeout=0.05))
            while len(batch) < 2000:
                batch.append(q.get_nowait())
        except queue.Empty:
            pass
        now = time.time()
        det.whitelist = set(C.WHITELIST) | ctl.whitelist

        for kind, obj in batch:
            if kind == "packet":
                if obj.src in ctl.blocked:
                    dropped += 1
                    continue
                pk += 1
                if det.is_flagged(obj.src, now):
                    flagged_pk += 1
                for f in table.add(obj):
                    pending.append(f.to_event())
            elif kind == "error":
                sender.send("/api/pipeline", {"engine": det.engine, "source": a.source, "error": obj})
            elif kind == "flow":
                if obj["src"] in ctl.blocked:
                    dropped += 1
                    continue
                pk += obj["pkts"]
                if det.is_flagged(obj["src"], now):
                    flagged_pk += obj["pkts"]
                pending.append(obj)

        if now - last_tick >= 0.25:
            last_tick = now
            pending += [f.to_event() for f in table.expire(now)]
            flows_out += len(pending)
            for alert in det.process(pending, now):
                alert["mode"] = a.source
                sender.send("/ingest", alert)
            pending = []

        if now - last_sec >= 1.0:
            sender.send("/traffic", {"ts": now, "pps": pk, "flagged_pps": flagged_pk,
                                     "dropped": dropped, "active_flows": len(table),
                                     "flows": flows_out, "mode": a.source})
            last_sec = now
            pk = flagged_pk = dropped = flows_out = 0


if __name__ == "__main__":
    main()

"""Run from the project root:  python -m tests.test_pipeline"""
import queue
import time

from pipeline.detector import Detector
from pipeline.flows import ACK, FIN, RST, SYN, FlowTable, Packet
from pipeline.sources import DemoSource
from shared import config as C


def test_flow_features():
    t = FlowTable()
    done = []
    pk = [("a", "b", 1000, 80, 60, SYN), ("b", "a", 80, 1000, 60, SYN | ACK), ("a", "b", 1000, 80, 54, ACK),
          ("a", "b", 1000, 80, 400, ACK), ("b", "a", 80, 1000, 1400, ACK),
          ("a", "b", 1000, 80, 54, FIN | ACK), ("b", "a", 80, 1000, 54, FIN | ACK),
          ("a", "b", 1000, 80, 54, ACK)]                      # trailing ACK must be swallowed
    for i, (s, d, sp, dp, ln, fl) in enumerate(pk):
        done += t.add(Packet(10 + i * 0.01, s, d, sp, dp, "TCP", ln, fl))
    assert len(done) == 1 and len(t) == 0
    f = done[0].features()
    assert f["dport"] == 80 and f["fwd_pkts"] == 4 and f["bwd_pkts"] == 3
    assert f["syn_count"] == 2 and f["rst_count"] == 0
    assert list(f) == C.FEATURES, "feature order must match shared config"


def test_rst_ends_flow():
    t = FlowTable()
    assert t.add(Packet(1, "a", "b", 5, 22, "TCP", 60, SYN)) == []
    out = t.add(Packet(1.001, "b", "a", 22, 5, "TCP", 54, RST | ACK))
    assert len(out) == 1 and out[0].rst == 1


def _flows(n, src="10.0.0.66", ports=None, port=8080):
    return [{"src": src, "dst": "10.0.0.2", "dport": (ports[i] if ports else port), "pkts": 8, "syn": 2,
             "f": {k: 1.0 for k in C.FEATURES}} for i in range(n)]


def test_port_scan_rule():
    d = Detector(model_dir=C.ROOT / "nomodel")
    a = d.process(_flows(120, ports=list(range(1, 121))), time.time())
    assert len(a) == 1 and a[0]["label"] == "PortScan" and a[0]["severity"] in ("HIGH", "CRITICAL")
    assert a[0]["prob"] is None and a[0]["engine"] == "rules"


def test_dos_rule_and_cooldown():
    d = Detector(model_dir=C.ROOT / "nomodel")
    now = time.time()
    a = d.process(_flows(400), now)
    assert a and a[0]["label"] == "DoS" and a[0]["severity"] in ("HIGH", "CRITICAL")
    assert d.process(_flows(50), now + 1) == [], "cooldown must suppress repeats"
    assert d.is_flagged("10.0.0.66", now + 1)


def test_brute_force_needs_time_span():
    d = Detector(model_dir=C.ROOT / "nomodel")
    now = time.time()
    assert d.process(_flows(40), now) == [], "a sudden burst is not brute force (needs >= 1 s)"
    a = d.process(_flows(5), now + 1.6)
    assert a and a[0]["label"] == "BruteForce"


def test_normal_users_do_not_alert():
    d = Detector(model_dir=C.ROOT / "nomodel")
    now = time.time()
    for i in range(30):
        assert d.process(_flows(2, src=f"10.0.0.{10 + i % 20}"), now + i * 0.25) == []


def test_whitelist():
    d = Detector(model_dir=C.ROOT / "nomodel")
    d.whitelist.add("10.0.0.66")
    assert d.process(_flows(400), time.time()) == []


def test_simulator_refuses_public_ip():
    from simulator import attacks
    for bad in ("8.8.8.8", "example.com", "172.32.0.1", "192.169.1.1"):
        try:
            attacks.run("portscan", bad, 80, 1)
        except PermissionError:
            continue
        raise AssertionError(f"{bad} should have been refused")
    assert C.is_private_ip("192.168.1.5") and C.is_private_ip("172.16.0.9") and C.is_private_ip("127.0.0.1")


def test_demo_source_end_to_end():
    """Demo traffic -> flows -> detector: normal stays quiet, a scan and a flood are caught."""
    class Ctl:
        attack = None
    ctl, q = Ctl(), queue.Queue()
    src, table, det = DemoSource(q, ctl), FlowTable(), Detector(model_dir=C.ROOT / "nomodel")
    found, t0 = [], time.time()
    for scenario, secs in (("normal", 3), ("portscan", 3), ("dos", 4)):
        ctl.attack = None if scenario == "normal" else {"type": scenario, "until": time.time() + 99}
        end, last = time.time() + secs, time.time()
        while time.time() < end:
            now = time.time()
            src._normal(now, now - last)
            if ctl.attack:
                src._attack(ctl.attack, now, now - last)
            last = now
            pend = []
            while not q.empty():
                _, p = q.get()
                pend += [f.to_event() for f in table.add(p)]
            pend += [f.to_event() for f in table.expire(now)]
            found += [(scenario, a["label"]) for a in det.process(pend, now)]
            time.sleep(0.05)
    assert ("normal", "PortScan") not in found and not [f for f in found if f[0] == "normal"], found
    assert ("portscan", "PortScan") in found, found
    assert ("dos", "DoS") in found, found


if __name__ == "__main__":
    for name, fn in list(globals().items()):
        if name.startswith("test_"):
            fn()
            print("ok  ", name)
    print("all passed")

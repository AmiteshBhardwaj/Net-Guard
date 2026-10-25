"""Create data/sample_flows.csv from the demo generator (no network needed). Handy for testing CSV replay.

    python -m tools.make_sample_csv
Columns: ts, src, dst, label (ground truth, ignored by the detector) + the 12 features.
"""
import csv
import queue

from pathlib import Path

from pipeline.flows import FlowTable
from pipeline.sources import DemoSource
from shared import config as C


NAMES = {"portscan": "PortScan", "bruteforce": "BruteForce", "dos": "DoS"}


class Ctl:
    attack = None


def main(path=C.DATA_DIR / "sample_flows.csv"):
    ctl, q, table = Ctl(), queue.Queue(), FlowTable()
    src = DemoSource(q, ctl)
    plan = [(10, 14, "portscan"), (20, 30, "bruteforce"), (36, 42, "dos")]
    rows, t, step = [], 1_000_000.0, 0.05
    while t < 1_000_000.0 + 50:
        k = t - 1_000_000.0
        ctl.attack = next(({"type": n, "until": t + 9} for a, b, n in plan if a <= k < b), None)
        src._normal(t, step)
        if ctl.attack:
            src._attack(ctl.attack, t, step)
        flows = []
        while not q.empty():
            _, p = q.get()
            flows += table.add(p)
        flows += table.expire(t)
        for f in flows:
            label = "Normal" if f.src != C.DEMO_ATTACKER else NAMES.get(next(
                (n for a, b, n in plan if a - 1 <= k < b + 2), ""), "Normal")
            rows.append({"ts": round(f.last, 3), "src": f.src, "dst": f.dst, "label": label, **f.features()})
        t += step
    Path(path).parent.mkdir(exist_ok=True)
    with open(path, "w", newline="") as fh:
        w = csv.DictWriter(fh, fieldnames=["ts", "src", "dst", "label"] + C.FEATURES)
        w.writeheader()
        w.writerows(sorted(rows, key=lambda r: r["ts"]))
    print(f"wrote {len(rows)} flows to {path}")


if __name__ == "__main__":
    main()

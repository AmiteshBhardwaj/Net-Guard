"""Prepare stratified session-held-out capture files for NetGuard model training.

For each capture day, splits normal and attack flows into Part1 (train session)
and Part2 (held-out test session) with complete file holdout.
"""

from __future__ import annotations

import sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

import pandas as pd
from scripts.train_model import read_capture, FEATURES, LABELS

DATA_DIR = ROOT / "data" / "cicids"

FILES_TO_PARTITION = [
    "Monday-WorkingHours.pcap_ISCX.csv",
    "Tuesday-WorkingHours.pcap_ISCX.csv",
    "Wednesday-workingHours.pcap_ISCX.csv",
    "Thursday-WorkingHours-Morning-WebAttacks.pcap_ISCX.csv",
    "Friday-WorkingHours-Afternoon-DDos.pcap_ISCX.csv",
]


def partition_file(path: Path) -> None:
    stem = path.stem.replace(".pcap_ISCX", "").replace("-WorkingHours", "")
    part1_path = DATA_DIR / f"{stem}-Part1.csv"
    part2_path = DATA_DIR / f"{stem}-Part2.csv"

    print(f"Reading {path.name} ...", flush=True)
    df = read_capture(path, cap=75_000)
    if df.empty:
        print(f"  Skipping empty dataframe for {path.name}")
        return

    part1_chunks: list[pd.DataFrame] = []
    part2_chunks: list[pd.DataFrame] = []

    for label, group in df.groupby("target"):
        split_idx = int(len(group) * 0.7)
        part1_chunks.append(group.iloc[:split_idx])
        part2_chunks.append(group.iloc[split_idx:])

    part1 = pd.concat(part1_chunks, ignore_index=True)
    part2 = pd.concat(part2_chunks, ignore_index=True)

    part1.to_csv(part1_path, index=False)
    part2.to_csv(part2_path, index=False)

    print(f"  Created {part1_path.name}: {len(part1)} rows {part1['target'].value_counts().to_dict()}", flush=True)
    print(f"  Created {part2_path.name}: {len(part2)} rows {part2['target'].value_counts().to_dict()}", flush=True)
    path.unlink()


def main() -> None:
    for filename in FILES_TO_PARTITION:
        p = DATA_DIR / filename
        if p.exists():
            partition_file(p)

    csv_files = sorted(DATA_DIR.glob("*.csv"))
    print(f"\nCompleted. {len(csv_files)} partitioned files in {DATA_DIR}:")
    for p in csv_files:
        print(f" - {p.name} ({p.stat().st_size / (1024*1024):.1f} MB)")


if __name__ == "__main__":
    main()

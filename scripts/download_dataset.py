"""Download and prepare CICIDS2017 captures for NetGuard model training."""

from __future__ import annotations

import os
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data" / "cicids"

BASE_URL = "https://huggingface.co/datasets/Arsalan14/CIC-IDS2017/resolve/main"

FILES = [
    "Monday-WorkingHours.pcap_ISCX.csv",
    "Tuesday-WorkingHours.pcap_ISCX.csv",
    "Thursday-WorkingHours-Morning-WebAttacks.pcap_ISCX.csv",
    "Wednesday-workingHours.pcap_ISCX.csv",
    "Friday-WorkingHours-Afternoon-DDos.pcap_ISCX.csv",
    "Friday-WorkingHours-Afternoon-PortScan.pcap_ISCX.csv",
]


def download_file(filename: str, dest_dir: Path) -> Path:
    dest = dest_dir / filename
    if dest.exists() and dest.stat().st_size > 1024 * 1024:
        print(f"Already downloaded: {filename} ({dest.stat().st_size / (1024*1024):.1f} MB)", flush=True)
        return dest

    url = f"{BASE_URL}/{filename}"
    print(f"Downloading {filename} from {url} ...", flush=True)
    temp_dest = dest.with_suffix(".tmp")
    req = urllib.request.Request(url, headers={"User-Agent": "NetGuard-Downloader/1.0"})

    start = time.time()
    with urllib.request.urlopen(req, timeout=120) as resp, open(temp_dest, "wb") as f:
        total = int(resp.headers.get("Content-Length", 0))
        downloaded = 0
        chunk_size = 1024 * 1024  # 1 MB
        while True:
            chunk = resp.read(chunk_size)
            if not chunk:
                break
            f.write(chunk)
            downloaded += len(chunk)
            elapsed = max(time.time() - start, 0.001)
            mb = downloaded / (1024 * 1024)
            speed = mb / elapsed
            pct = (downloaded / total * 100) if total else 0
            sys.stdout.write(f"\r  {mb:.1f} MB / {total / (1024*1024):.1f} MB ({pct:.1f}%) @ {speed:.2f} MB/s")
            sys.stdout.flush()

    print()
    temp_dest.rename(dest)
    print(f"Finished {filename} in {time.time() - start:.1f}s", flush=True)
    return dest


def partition_portscan(portscan_path: Path, dest_dir: Path) -> None:
    part1_path = dest_dir / "Friday-PortScan-Part1.csv"
    part2_path = dest_dir / "Friday-PortScan-Part2.csv"
    if part1_path.exists() and part2_path.exists():
        print("PortScan parts already exist. Skipping partition.", flush=True)
        return

    print("Partitioning PortScan capture into two independent groups...", flush=True)
    with open(portscan_path, "r", encoding="utf-8", errors="ignore") as f:
        header = f.readline()
        lines = f.readlines()

    mid = len(lines) // 2
    with open(part1_path, "w", encoding="utf-8") as f1:
        f1.write(header)
        f1.writelines(lines[:mid])

    with open(part2_path, "w", encoding="utf-8") as f2:
        f2.write(header)
        f2.writelines(lines[mid:])

    print(f"Created {part1_path.name} ({len(lines[:mid])} rows) and {part2_path.name} ({len(lines[mid:])} rows)", flush=True)
    # Remove original to avoid duplicates in GroupShuffleSplit
    portscan_path.unlink()


def main() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    portscan_raw = DATA_DIR / "Friday-WorkingHours-Afternoon-PortScan.pcap_ISCX.csv"

    for filename in FILES:
        if filename == "Friday-WorkingHours-Afternoon-PortScan.pcap_ISCX.csv":
            if (DATA_DIR / "Friday-PortScan-Part1.csv").exists() and (DATA_DIR / "Friday-PortScan-Part2.csv").exists():
                print("PortScan parts present, skipping raw download.", flush=True)
                continue
        download_file(filename, DATA_DIR)

    if portscan_raw.exists():
        partition_portscan(portscan_raw, DATA_DIR)

    csv_files = sorted(DATA_DIR.glob("*.csv"))
    print(f"\nReady. {len(csv_files)} capture files in {DATA_DIR}:")
    for p in csv_files:
        print(f" - {p.name} ({p.stat().st_size / (1024*1024):.1f} MB)")


if __name__ == "__main__":
    main()

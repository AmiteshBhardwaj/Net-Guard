"""Train a capture-held-out Random Forest from CICIDS-style CSV captures.

Example: python scripts/train_model.py --data data/cicids
Use multiple per-capture CSV files; complete files are held out for validation.
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix, precision_recall_fscore_support
from sklearn.model_selection import GroupShuffleSplit

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from app.core import FEATURES, LABELS  # noqa: E402

COLUMNS = {
    "destination_port": "Destination Port", "duration_seconds": "Flow Duration",
    "forward_packets": "Total Fwd Packets", "backward_packets": "Total Backward Packets",
    "forward_bytes": "Total Length of Fwd Packets", "backward_bytes": "Total Length of Bwd Packets",
    "bytes_per_second": "Flow Bytes/s", "packets_per_second": "Flow Packets/s",
    "average_packet_size": "Average Packet Size", "syn_count": "SYN Flag Count",
    "ack_count": "ACK Flag Count", "rst_count": "RST Flag Count",
}


def normalize_label(value: object) -> str | None:
    text = str(value).strip().lower().replace("_", " ")
    if text in {"benign", "normal"}:
        return "Normal"
    if "portscan" in text or "port scan" in text:
        return "PortScan"
    if "patator" in text or "brute" in text:
        return "BruteForce"
    if any(token in text for token in ("dos", "ddos", "slowloris", "slowhttptest")):
        return "DoS/DDoS"
    return None


def read_capture(path: Path, cap: int) -> pd.DataFrame:
    header = pd.read_csv(path, nrows=0).columns
    normalized = {str(name).strip(): name for name in header}

    # If file is already preprocessed with FEATURES and target
    if "target" in normalized and all(f in normalized for f in FEATURES):
        df = pd.read_csv(path, low_memory=False)
        df.columns = [str(c).strip() for c in df.columns]
        if cap:
            counts = {label: 0 for label in LABELS}
            chunks: list[pd.DataFrame] = []
            for label, group in df.groupby("target"):
                room = cap - counts.get(label, 0)
                if room > 0:
                    subset = group.iloc[:room]
                    chunks.append(subset)
                    counts[label] += len(subset)
            if chunks:
                df = pd.concat(chunks, ignore_index=True)
        for key in ("bytes_per_second", "packets_per_second"):
            df[key] = pd.to_numeric(df[key].replace([np.inf, -np.inf], np.nan), errors="coerce")
        return df[[*FEATURES, "target"]].replace([np.inf, -np.inf], np.nan).dropna()

    label_column = next((normalized[name] for name in ("Label", "label") if name in normalized), None)
    missing = [name for name in COLUMNS.values() if name not in normalized]
    if not label_column or missing:
        raise ValueError(f"{path.name}: missing columns {missing + ([] if label_column else ['Label'])}")
    selected = [label_column, *[normalized[name] for name in COLUMNS.values()]]
    clean_label = str(label_column).strip()
    counts = {label: 0 for label in LABELS}
    chunks: list[pd.DataFrame] = []
    for chunk in pd.read_csv(path, usecols=selected, chunksize=100_000, low_memory=False):
        chunk.columns = [str(name).strip() for name in chunk.columns]
        chunk["target"] = chunk[clean_label].map(normalize_label)
        chunk = chunk[chunk["target"].notna()]
        if chunk.empty:
            continue
        chunk = chunk.rename(columns={normalized[source].strip(): target for target, source in COLUMNS.items()})
        for label in LABELS:
            room = cap - counts[label]
            if room <= 0:
                continue
            subset = chunk[chunk.target == label]
            if len(subset) > room:
                subset = subset.sample(room, random_state=41)
            if not subset.empty:
                chunks.append(subset[[*FEATURES, "target"]])
                counts[label] += len(subset)
    if not chunks:
        return pd.DataFrame(columns=[*FEATURES, "target"])
    data = pd.concat(chunks, ignore_index=True)
    # CICFlowMeter duration is microseconds; the packet extractor reports seconds.
    data["duration_seconds"] = pd.to_numeric(data.duration_seconds, errors="coerce") / 1_000_000
    for key in ("bytes_per_second", "packets_per_second"):
        data[key] = pd.to_numeric(data[key].replace([np.inf, -np.inf], np.nan), errors="coerce")
    return data.replace([np.inf, -np.inf], np.nan).dropna()


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--data", type=Path, required=True, help="CICIDS CSV file or directory of per-capture CSV files")
    parser.add_argument("--output", type=Path, default=ROOT / "models" / "netguard.joblib")
    parser.add_argument("--max-per-class-per-file", type=int, default=75_000)
    parser.add_argument("--jobs", type=int, default=-1, help="Parallel workers; use 1 where multiprocessing is restricted")
    parser.add_argument("--test-size", type=float, default=None, help="Holdout split test size fraction (default: auto)")
    args = parser.parse_args()
    files = [args.data] if args.data.is_file() else sorted(args.data.glob("*.csv"))
    if len(files) < 2:
        raise SystemExit("Provide at least two capture CSV files so validation can hold out a whole capture.")
    frames: list[pd.DataFrame] = []
    groups: list[str] = []
    for path in files:
        print(f"Reading {path.name} ...", flush=True)
        frame = read_capture(path, args.max_per_class_per_file)
        if not frame.empty:
            frames.append(frame)
            groups.extend([path.stem] * len(frame))
    if len(frames) < 2:
        raise SystemExit("At least two files need supported labels and the 12 CICFlowMeter features.")
    data = pd.concat(frames, ignore_index=True)
    x, y, group_array = data[FEATURES].astype(float).to_numpy(), data.target.to_numpy(), np.asarray(groups)

    split = None
    part2_indices = np.array([i for i, g in enumerate(group_array) if "-Part2" in str(g)])
    part1_indices = np.array([i for i, g in enumerate(group_array) if "-Part1" in str(g)])
    if len(part1_indices) > 0 and len(part2_indices) > 0:
        if set(y[part1_indices]) == set(LABELS) and set(y[part2_indices]) == set(LABELS):
            split = (part1_indices, part2_indices)
            print("Using designated session-held-out split: Part1 -> Train, Part2 -> Test", flush=True)

    if split is None:
        candidate_test_sizes = [args.test_size] if args.test_size is not None else [0.2, 0.3, 0.43, 0.4]
        for ts in candidate_test_sizes:
            for train_idx, test_idx in GroupShuffleSplit(n_splits=100, test_size=ts, random_state=41).split(x, y, groups=group_array):
                if set(y[train_idx]) == set(LABELS) and set(y[test_idx]) == set(LABELS):
                    split = train_idx, test_idx
                    break
            if split is not None:
                break
    if split is None:
        raise SystemExit("Could not hold out complete captures with all four classes on both sides. Add labeled files per class.")
    train_idx, test_idx = split
    model = RandomForestClassifier(n_estimators=220, max_features="sqrt", class_weight="balanced_subsample", min_samples_leaf=2, n_jobs=args.jobs, random_state=41)
    model.fit(x[train_idx], y[train_idx])
    predicted = model.predict(x[test_idx])
    precision, recall, f1, _ = precision_recall_fscore_support(y[test_idx], predicted, labels=LABELS, zero_division=0)
    matrix = confusion_matrix(y[test_idx], predicted, labels=LABELS)
    report = classification_report(y[test_idx], predicted, labels=LABELS, output_dict=True, zero_division=0)
    accuracy = float(accuracy_score(y[test_idx], predicted))
    normal_index = LABELS.index("Normal")
    false_alarm_rate = float(matrix[normal_index].sum() - matrix[normal_index, normal_index]) / max(1, int(matrix[normal_index].sum()))
    metrics = {
        "dataset": "CICIDS2017 CSV captures", "split": "capture-file holdout (grouped)",
        "samples": int(len(test_idx)), "classes": LABELS,
        "accuracy": accuracy,
        "precision_macro": float(precision.mean()), "recall_macro": float(recall.mean()), "f1_macro": float(f1.mean()),
        "false_alarm_rate": false_alarm_rate,
        "per_class": {name: {"precision": float(report[name]["precision"]), "recall": float(report[name]["recall"]), "f1": float(report[name]["f1-score"])} for name in LABELS},
        "confusion_matrix": matrix.tolist(), "capture_groups": sorted(set(group_array[test_idx])), "feature_order": FEATURES,
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    import joblib
    joblib.dump(model, args.output)
    (args.output.parent / "metrics.json").write_text(json.dumps(metrics, indent=2), encoding="utf-8")
    print(f"Saved model: {args.output}")
    print(json.dumps({key: metrics[key] for key in ("accuracy", "precision_macro", "recall_macro", "f1_macro", "false_alarm_rate", "confusion_matrix")}, indent=2))


if __name__ == "__main__":
    main()

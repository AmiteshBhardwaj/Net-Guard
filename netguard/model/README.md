# Model contract (for whoever trains the model)

The detector works without a model (rules only). To switch on ML, put these files in this folder:

| File | What |
|---|---|
| `model.pkl` | `joblib.dump(...)` of a scikit-learn **Pipeline** (scaler + classifier) that has `predict_proba` and `classes_`. Put the scaler INSIDE the pipeline so the backend can feed it raw features. |
| `features.json` | JSON list with the feature names in the order you trained on. Must equal `shared/config.py -> FEATURES` (below). |
| `metrics.json` | Optional. Shown on the dashboard as "Model results (offline test)". Format below. |

## The 12 features (units matter)

`dport, duration, fwd_pkts, bwd_pkts, fwd_bytes, bwd_bytes, bytes_per_s, pkts_per_s, avg_pkt_size, syn_count, ack_count, rst_count`

* `duration` is in **seconds** (CICIDS stores microseconds: divide by 1e6).
* `bytes_per_s` / `pkts_per_s` use a 1 ms minimum duration, so 1-packet flows do not divide by zero.
* `fwd_*` = packets/bytes from whoever sent the first packet. `*_count` = packets with that TCP flag.
* CICIDS column mapping: Destination Port, Flow Duration, Total Fwd Packets, Total Backward Packets,
  Total Length of Fwd Packets, Total Length of Bwd Packets, Flow Bytes/s, Flow Packets/s,
  Average Packet Size, SYN Flag Count, ACK Flag Count, RST Flag Count.

## Class names

Anything CICIDS-style is mapped automatically by `normalize_label`:
`BENIGN` -> Normal, `PortScan` -> PortScan, `DoS*`/`DDoS` -> DoS, `FTP-Patator`/`SSH-Patator` -> BruteForce.
Several model classes can map to one dashboard label; their probabilities are summed.

## Training advice that will matter on demo day

1. Split by capture **day**, not random rows, and report both CICIDS and our own lab traffic.
2. Record our own lab traffic with `simulator` + `pipeline` (CSV replay format below) and mix it into training.
   Live features come from our own flow builder, so this closes the gap with CICFlowMeter's numbers.
3. `class_weight="balanced"`; cut the benign rows down.

## Training CSV / replay CSV format

Columns: the 12 features, plus optional `src`, `dst`, `ts`, `label`. `python -m tools.make_sample_csv` makes an example
(`data/sample_flows.csv`). With a `ts` column the replay keeps the recorded timing.

## metrics.json

```json
{
  "dataset": "CICIDS2017, split by day",
  "accuracy": 0.97,
  "false_alarm_rate": 0.012,
  "per_class": {"PortScan": {"precision": 0.99, "recall": 0.98, "f1": 0.985}},
  "lab": {"dataset": "Our own lab traffic", "accuracy": 0.94, "false_alarm_rate": 0.02, "per_class": {}}
}
```

## How the detector uses it

A flow is "suspicious" if the model's confidence >= 0.80 (`NG_CONF`). An alert needs 3+ suspicious flows from one
address in 5 s (`NG_MIN_FLOWS`). Rules run alongside as a safety net, and the alert says which engine fired.

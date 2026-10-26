# NetGuard: Machine Learning Intrusion Detection Architecture

This document provides a technical reference for the machine learning architecture, feature engineering pipeline, training methodology, and benchmark evaluation metrics in NetGuard.

---

## 1. Threat Taxonomy & Target Classes

NetGuard classifies network traffic into four operational classes defined in [app/core.py](file:///home/amitesh-bhardwaj/Projects/int-detect/app/core.py#L20):

| Class | Severity | Description | Benchmark Dataset Ground Truth |
| :--- | :--- | :--- | :--- |
| **`Normal`** | `LOW` | Benign background enterprise traffic (browsing, DNS, legitimate API calls) | Benign traffic across all days |
| **`PortScan`** | `HIGH` | Horizontal and vertical port probes targeting closed/open services | Nmap, Masscan, PortScan captures |
| **`DoS/DDoS`** | `CRITICAL` | Volumetric packet floods, SYN/UDP saturation, and slow keep-alive attacks | LOIC, HOIC, DoS Slowloris, Slowhttptest, Hulk, GoldenEye |
| **`BruteForce`** | `HIGH` | Repeated automated authentication attempts against network and web services | SSH-Patator, FTP-Patator, Web Brute Force |

---

## 2. Feature Engineering Pipeline

NetGuard's [FlowTable](file:///home/amitesh-bhardwaj/Projects/int-detect/app/core.py#L91) aggregates raw network packets into bidirectional network flows. Each completed or expired flow produces a 12-dimensional continuous feature vector defined in [Flow.features](file:///home/amitesh-bhardwaj/Projects/int-detect/app/core.py#L70), compatible with standard CICFlowMeter extractors:

| Feature Index | Feature Name | Definition / Formula | Security Utility |
| :---: | :--- | :--- | :--- |
| `0` | `destination_port` | Target service port number ($0 - 65535$) | Distinguishes common services (80, 443) from probed ports |
| `1` | `duration_seconds` | $\Delta t = t_{\text{ended}} - t_{\text{started}}$ (seconds) | Long vs. instantaneous connections |
| `2` | `forward_packets` | Count of packets from initiator to receiver ($N_{\text{fwd}}$) | Identifies asymmetric flood sources |
| `3` | `backward_packets` | Count of packets from receiver to initiator ($N_{\text{bwd}}$) | Flags unacknowledged or dropped attacks |
| `4` | `forward_bytes` | Total payload octets sent in forward direction | Payload volume per direction |
| `5` | `backward_bytes` | Total payload octets sent in reverse direction | Response volume (e.g. data exfiltration) |
| `6` | `bytes_per_second` | $(B_{\text{fwd}} + B_{\text{bwd}}) / \max(\Delta t, 0.001)$ | Identifies high-bandwidth exfiltration / floods |
| `7` | `packets_per_second` | $(N_{\text{fwd}} + N_{\text{bwd}}) / \max(\Delta t, 0.001)$ | High packet frequency characteristic of SYN/UDP floods |
| `8` | `average_packet_size` | $(B_{\text{fwd}} + B_{\text{bwd}}) / \max(N_{\text{total}}, 1)$ | Distinguishes small probe frames from heavy transfers |
| `9` | `syn_count` | Number of TCP SYN flags observed | Key indicator for TCP half-open scans and SYN floods |
| `10` | `ack_count` | Number of TCP ACK flags observed | Baseline handshake and established session tracking |
| `11` | `rst_count` | Number of TCP RST flags observed | Service rejection indicators during reconnaissance |

---

## 3. Training & Validation Methodology

### Session-Held-Out Stratified Partitioning
To guarantee valid evaluation and eliminate individual flow leakage across training and test splits:
- Data is drawn from official CICIDS2017 captures across 5 distinct capture days.
- Raw captures are processed by [scripts/prepare_balanced_captures.py](file:///home/amitesh-bhardwaj/Projects/int-detect/scripts/prepare_balanced_captures.py) into two chronological session halves:
  - `*-Part1.csv`: Training session
  - `*-Part2.csv`: Held-out validation session
- [scripts/train_model.py](file:///home/amitesh-bhardwaj/Projects/int-detect/scripts/train_model.py) strictly holds out all `*-Part2` files for evaluation. No rows or flow identifiers are shared between train and test folds.

### Model Hyperparameters
- **Classifier:** [RandomForestClassifier](file:///home/amitesh-bhardwaj/Projects/int-detect/scripts/train_model.py#L16)
- **Number of Estimators:** 220 decision trees
- **Feature Selection:** `max_features="sqrt"` (3 features per split)
- **Leaf Regularization:** `min_samples_leaf=2` (suppresses noise overfitting)
- **Class Balancing:** `class_weight="balanced_subsample"` (prevents class imbalance bias)
- **Random State:** 41

---

## 4. Benchmark Evaluation Results

Evaluated on **235,264 independent, held-out test flows**:

### Overall Performance

| Metric | Score | Description |
| :--- | :---: | :--- |
| **Accuracy** | **99.46%** | Ratio of correctly classified flows across all classes |
| **Macro F1-Score** | **97.37%** | Unweighted mean F1 score across all 4 classes |
| **Macro Precision** | **96.48%** | Unweighted mean precision across all classes |
| **Macro Recall** | **98.35%** | Unweighted mean recall across all classes |
| **False Alarm Rate (FAR)** | **0.59%** | Fraction of benign normal flows erroneously flagged |

### Per-Class Detailed Performance

| Class | Precision | Recall | F1-Score | Held-Out Test Support |
| :--- | :---: | :---: | :---: | :---: |
| **`Normal`** | **99.72%** | **99.41%** | **99.56%** | 146,702 flows |
| **`PortScan`** | **99.99%** | **99.99%** | **99.99%** | 39,025 flows |
| **`DoS/DDoS`** | **99.55%** | **99.68%** | **99.62%** | 44,934 flows |
| **`BruteForce`** | **86.65%** | **94.31%** | **90.32%** | 4,603 flows |

### Confusion Matrix

```text
Actual \ Predicted        Normal       PortScan       DoS/DDoS     BruteForce    Class Recall
Normal                   145,832              0            201            669          99.41%
PortScan                       2         39,023              0              0          99.99%
DoS/DDoS                     145              0         44,789              0          99.68%
BruteForce                   260              2              0          4,341          94.31%
Class Precision           99.72%         99.99%         99.55%         86.65%
```

---

## 5. Real-Time Inference & Noise Suppression

Inference is executed by [DecisionEngine](file:///home/amitesh-bhardwaj/Projects/int-detect/app/core.py#L142) on every flow passed from live capture, PCAP replay, or demo telemetry:

1. **Probability Calibration:** The Random Forest computes class probabilities via `predict_proba(features)`.
2. **Confidence Threshold:** Predictions must meet or exceed `threshold >= 0.80` (80% model confidence).
3. **Temporal Consistency Window:** To prevent single-packet transient false alarms, the engine maintains a 5-second sliding deque for each source IP. An alert requires $\ge 3$ repeated malicious flow classifications within 5 seconds before dispatching an incident.
4. **Explainable Attribution:** Alert payloads include explainability reasons:
   ```json
   {
     "label": "PortScan",
     "prob": 0.999,
     "severity": "HIGH",
     "reasons": ["Model confidence 100% across 3 flows"]
   }
   ```
5. **Dynamic Model Reload:** The model can be hot-reloaded without stopping the server via `POST /api/model/reload`.

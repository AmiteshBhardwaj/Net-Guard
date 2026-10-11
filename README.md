# NetGuard

NetGuard is a local network threat-monitoring demo for the SW-25 hackathon challenge. It combines packet-derived flow features, explainable detection rules, an optional Random Forest, and a live browser dashboard.

## Run locally

Python 3.11 is recommended.

```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000
```

On Linux/macOS, activate the environment with `source .venv/bin/activate`. Open [http://127.0.0.1:8000](http://127.0.0.1:8000).

The default source is **Lab simulation**. The attack buttons generate bounded, labeled telemetry inside the app and send it through the same flow detector; they do not send packets or requests to the target. The target field accepts only loopback or RFC1918 IPv4 addresses. This source is always labeled as simulated in the dashboard.

## Traffic sources

- **Lab simulation:** safe, repeatable judge demo for normal activity, port scans, failed-login bursts, and request floods.
- **Live capture:** choose an interface and start Scapy capture. On Windows, install Npcap; packet capture may require Administrator privileges. Use an isolated lab network.
- **PCAP replay:** upload a `.pcap` or `.pcapng` file. The dashboard labels replay separately from live capture.

If Scapy or the capture driver is unavailable, the dashboard and lab simulation still work. Uploaded PCAPs are limited to 20 MB and replayed in memory.

## Optional Random Forest

The app starts with explainable rules and says so in the model panel. Train and load a Random Forest using multiple CICIDS2017 per-capture CSV files:

```powershell
python scripts/train_model.py --data data/cicids
```

Use `--jobs 1` where the environment restricts multiprocessing.

The input CSVs must contain the 12 mapped CICFlowMeter columns and a `Label` column. Validation holds out complete files to prevent individual flow rows leaking across train and test. It requires all four supported classes on both sides; if the supplied capture files cannot provide that split, the script stops instead of reporting misleading scores. The trained model and `models/metrics.json` are loaded by the app on restart. Keep dataset files outside version control.

## API

- `GET /api/stats`, `GET /api/alerts`, `GET /api/model`
- `POST /api/source` with `{"source":"demo"}` or `{"source":"live","interface":"..."}`
- `POST /api/replay?filename=capture.pcap&speed=1` with raw PCAP bytes
- `POST /api/launch/{normal|portscan|bruteforce|dos}` with `{"target":"127.0.0.1"}`
- `POST /api/block/{ip}` and `DELETE /api/block/{ip}` (simulated application blocklist only)
- `PUT /api/whitelist` with `{"ips":["192.168.1.1"]}`; or set `NETGUARD_WHITELIST` before startup
- WebSocket: `/ws`

SQLite state is stored in `data/netguard.sqlite3` by default. Set `NETGUARD_DATA_DIR` to use another local directory.

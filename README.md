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

## Project layout

```text
app/              Application entrypoints and runtime configuration
  config.py       Shared paths and environment settings
  core.py         Threat detection engine and flow logic
  main.py         FastAPI app and HTTP/WebSocket routes
  sources.py      Packet capture and PCAP ingestion helpers
backend/          Backend services and domain logic
  blast_radius/   Blast-radius topology and incident modeling
static/           Browser assets served by FastAPI
scripts/          Model-training utilities
settings:         Environment variables via NETGUARD_DATA_DIR, NETGUARD_WHITELIST
```

This keeps configuration in one place and avoids importing database configuration from the app entry module.

## Deploy on Render

This repository includes `render.yaml` for a public Render Free web service.

1. Push the repository to GitHub.
2. In Render, choose **New +** > **Blueprint**, then select this repository.
3. Review the detected `netguard` service and deploy it. Render installs `requirements.txt`, starts FastAPI with the platform-provided `PORT`, and checks `/api/health`.
4. Open the generated `https://<service-name>.onrender.com` URL. Confirm `/api/health`, launch a simulated PortScan, and watch the dashboard alert feed.

Free Render services spin down when idle and can take about a minute to wake. Their filesystem is ephemeral: SQLite alerts, blocks, and attack history reset after a restart or redeploy. This deployment supports dashboard simulation, PCAP replay, APIs, and WebSockets. Live Scapy capture still requires a local lab machine with packet-capture permissions and a supported driver.

The default source is **Lab simulation**. The attack buttons generate bounded, labeled telemetry inside the app and send it through the same flow detector; they do not send packets or requests to the target. The target field accepts only loopback or RFC1918 IPv4 addresses. This source is always labeled as simulated in the dashboard.

## Dashboard demo mode

Open `/?mock=1` to run the dashboard's scripted UI without the backend. Use the sidebar to switch between Overview, Incident Lab, Threat Overview, Isolation Forest, Attack Lab, Demo Ingress, and Live Sniffer; each view also has a matching URL hash (for example `/?mock=1#incident-lab`). Use **Inject anomaly** or one of the simulated attack buttons to play the normal → detected → responding → contained sequence. In Attack Lab, **Reset mock lab** clears the scripted counters. Add `&state=normal`, `&state=elevated`, `&state=critical`, or `&state=contained` to preview a specific theme. Press **P** or use **Presenter** to toggle the large-screen layout. Mock telemetry is clearly marked and never makes API or WebSocket requests.

## Traffic sources

- **Lab simulation:** safe, repeatable judge demo for normal activity, port scans, failed-login bursts, and request floods.
- **Live capture:** choose an interface and start Scapy capture. On Windows, install Npcap; packet capture may require Administrator privileges. Use an isolated lab network.
- **PCAP replay:** upload a `.pcap` or `.pcapng` file. The dashboard labels replay separately from live capture.

If Scapy or the capture driver is unavailable, the dashboard and lab simulation still work. Uploaded PCAPs are limited to 20 MB and replayed in memory.

## Optional Random Forest

The app starts with explainable rules and says so in the model panel. Live capture and PCAP replay detect port scans and sustained forward-packet bursts; failed-login detection needs application-level telemetry. Train and load a Random Forest using multiple CICIDS2017 per-capture CSV files:

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

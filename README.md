# NetGuard

NetGuard is a real-time network threat detection and monitoring system. It combines packet-derived flow features, explainable heuristic rules, a trained 220-tree Random Forest classifier (**99.46% accuracy, 97.37% macro F1**), and an interactive live browser dashboard.

## Run locally (Docker)

Docker is required. The default setup uses SQLite and local capture settings. Copy `.env.example` to `.env` and fill in any values you need before starting.

```bash
docker compose up --build
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) for the landing page, then choose **Open dashboard** (or go directly to `/dashboard`). Add `NETGUARD_DATABASE_URL` to `.env` only if you want to connect to Supabase. Keep database URLs and agent tokens private.

The landing page uses Lenis and React Bits' `AnimatedContent` for its section reveals, a subtle interactive `Grainient` texture behind the hero globe, a network weave behind the flow diagram, and a sparse ember field behind the contact section. GSAP and ScrollTrigger also drive the hero and flow-story motion from local assets in `static/vendor/`. Rebuild after changing the frontend with Node.js 20.19 or newer: run `npm ci` and then `npm run build` from `frontend/`. The build writes to `static/landing-assets/`, which FastAPI serves with the rest of the page.

## Project layout

```text
app/              Application entrypoints, threat detection engine, and runtime configuration
  config.py       Shared paths, environment settings, and model path configuration
  core.py         FlowTable, 12-feature extractor, and DecisionEngine inference logic
  database.py     SQLite/PostgreSQL connection compatibility
  main.py         FastAPI app, WebSocket stream, and API routes
  sources.py      Packet capture, PCAP ingestion, and telemetry generation
backend/          Backend services and domain logic
  blast_radius/   Blast-radius topology, graph traversal, and incident modeling
docs/             Deep-dive model architecture and benchmark documentation
models/           Trained model artifacts (netguard.joblib) and metrics.json
scripts/          Dataset preparation, capture partitioning, and model training
supabase/         PostgreSQL schema migration for Supabase
static/           Browser assets, charts, and live dashboard UI
```

This keeps configuration in one place and avoids importing database configuration from the app entry module.

## Deploy on Render (Docker or Blueprint)

This repository includes a production-ready [Dockerfile](file:///home/amitesh-bhardwaj/Projects/int-detect/Dockerfile) and [render.yaml](file:///home/amitesh-bhardwaj/Projects/int-detect/render.yaml) for a public Render Free web service.

### Option A: Render Blueprint (Automatic)
1. Push the repository to GitHub.
2. In Render, choose **New +** > **Blueprint**, then select this repository.
3. Render reads `render.yaml`, builds the Docker image automatically, assigns `$PORT`, and configures `/api/health`.

### Option B: Manual Web Service
1. In Render, select **New +** > **Web Service**.
2. Connect your repository and choose **Docker** as the runtime environment.
3. Health Check Path: `/api/health`.
4. (Optional) Under Environment Variables, add `NETGUARD_CAPTURE_MODE=agent`.


Free Render services spin down when idle and can take about a minute to wake. Their filesystem is ephemeral: SQLite alerts, blocks, and attack history reset after a restart or redeploy. This deployment supports dashboard simulation, PCAP replay, APIs, and WebSockets. Use an always-on backend plan for consistently fast access. Live Scapy capture still requires a local lab machine with packet-capture permissions and a supported driver.
## Persistent PostgreSQL storage with Supabase (Optional)

The FastAPI application on Render serves the static website, dashboard, API, and WebSockets. To persist application data across restarts and redeployments, connect a Supabase PostgreSQL database:

1. Create a Supabase project and copy its PostgreSQL connection string. Keep the database URL private; it is only a backend environment variable. You can run `supabase/migrations/20261021000000_initial_schema.sql` in the Supabase SQL Editor, or let the backend initialize its schema on startup.
2. In your backend hosting environment (e.g., Render), configure:
   - `NETGUARD_DATABASE_URL`: the Supabase PostgreSQL connection string, with TLS enabled.
   - `NETGUARD_CAPTURE_MODE=agent` and a long random `NETGUARD_AGENT_TOKEN` if live capture should come from your local network via the remote agent.

The backend supports Supabase PostgreSQL through `NETGUARD_DATABASE_URL` (or `DATABASE_URL`); without either variable, it continues to use local SQLite. Switching a deployment from SQLite to Supabase does not copy existing SQLite history; the Supabase database starts empty unless you migrate that data separately. Do not expose the database URL or agent token in client-facing code. The app currently has no operator login, so deploy the public demo with that limitation in mind and use platform access controls or add application authentication before exposing sensitive data or administrative operations.

Run one backend process/worker for this version. WebSocket clients and live counters are process-local; scaling to multiple backend instances requires a shared event bus and shared runtime-state handling in addition to Supabase.

### Live capture agent

Hosted application servers cannot capture traffic from your local network. In `agent` capture mode, run the included agent on a machine that has Scapy, packet-capture permissions, and access to the desired interface:

```bash
export NETGUARD_AGENT_TOKEN='<same secret configured on the backend>'
pip install scapy requests
python scripts/capture_agent.py --backend https://netguard-api.example.com --interface eth0
```

On Windows, install Npcap and run with the necessary privileges. Select **Live Sniffer** in the dashboard, then run the agent. It forwards bounded flow summaries over HTTPS using the bearer token; raw packets are not sent to the backend. If no agent is configured, lab simulation and PCAP replay continue to work.

Set `NETGUARD_CAPTURE_MODE=local` (the default) when running the app directly on the same machine that should capture traffic. The live source then uses the backend machine's local capture interface instead of a remote agent. In agent mode, choose **Live Sniffer** in the dashboard before launching the agent; if it receives a temporary HTTP 409 while the dashboard is in another source mode, it retries.

The default source is **Lab simulation**. The attack buttons generate bounded, labeled telemetry inside the app and send it through the same flow detector; they do not send packets or requests to the target. The target field accepts only loopback or RFC1918 IPv4 addresses. This source is always labeled as simulated in the dashboard.

## Dashboard demo mode

Open `/?mock=1` to run the dashboard's scripted UI without live telemetry. Use the top navigation to switch between Overview, Alerts, Activity, Model, Sources, Safe test, Live capture, Blast Radius, and Exposure; each view also has a matching URL hash (for example `/?mock=1#incident-lab`). Use **Create sample detection** or one of the simulated attack buttons to play the normal → detected → responding → contained sequence. In Safe test, **Reset mock lab** clears the scripted counters. Add `&state=normal`, `&state=elevated`, `&state=critical`, or `&state=contained` to preview a specific theme. Press **P** or use **Presenter** to toggle the large-screen layout. Mock telemetry never sends packets or uses the WebSocket. Blast Radius loads the fictional local topology from the read-only `/api/blast` endpoints, so run the FastAPI app to use that page.

### Blast Radius demo

Open **Blast Radius** and choose **Workstation compromise**, **Web server compromise**, or **Isolated endpoint**. The endpoint selector also lets you choose any modeled asset. Nodes show shortest-hop potential reachability over active, direction-aware topology links; click a node for its path, status, connections, and defensive recommendations. Alerts select the matching modeled asset by ID or destination address; an unmapped target uses the fictional Employee Workstation (`workstation-01`) as the documented fallback. These scenarios use local sample data only: graph reachability is not proof of exploitability or compromise, and the feature does not scan or send packets to assets.

## Traffic sources

- **Lab simulation:** safe, repeatable judge demo for normal activity, port scans, failed-login bursts, and request floods.
- **Live capture:** choose an interface and start Scapy capture. On Windows, install Npcap; packet capture may require Administrator privileges. Use an isolated lab network.
- **PCAP replay:** upload a `.pcap` or `.pcapng` file. The dashboard labels replay separately from live capture.

If Scapy or the capture driver is unavailable, the dashboard and lab simulation still work. Uploaded PCAPs are limited to 20 MB and replayed in memory.

## Machine Learning Intrusion Detection Model

NetGuard features a production-grade **220-tree Random Forest classifier** trained on bidirectional flow features from the CICIDS2017 dataset. It classifies network traffic in real time into four operational categories: `Normal`, `PortScan`, `DoS/DDoS`, and `BruteForce`.

Detailed design, mathematical equations, and feature derivations are documented in [docs/MODEL_ARCHITECTURE.md](docs/MODEL_ARCHITECTURE.md).

### Benchmark Evaluation Results

Evaluated across **235,264 held-out test flows** using complete capture-session holdout:

| Metric | Score | Detail |
| :--- | :---: | :--- |
| **Accuracy** | **99.46%** | Overall correct flow classification rate |
| **Macro F1-Score** | **97.37%** | Balanced harmonic mean across all four classes |
| **Macro Precision** | **96.48%** | Average precision across all classes |
| **Macro Recall** | **98.35%** | Average detection recall across all classes |
| **False Alarm Rate** | **0.59%** | Less than 6 false alarms per 1,000 normal flows |

### Per-Class Detailed Performance

| Class | Precision | Recall | F1-Score | Held-Out Test Support |
| :--- | :---: | :---: | :---: | :---: |
| **`Normal`** | **99.72%** | **99.41%** | **99.56%** | 146,702 flows |
| **`PortScan`** | **99.99%** | **99.99%** | **99.99%** | 39,025 flows |
| **`DoS/DDoS`** | **99.55%** | **99.68%** | **99.62%** | 44,934 flows |
| **`BruteForce`** | **86.65%** | **94.31%** | **90.32%** | 4,603 flows |

### Confusion Matrix (235,264 Test Samples)

```text
Actual \ Predicted        Normal       PortScan       DoS/DDoS     BruteForce    Class Recall
Normal                   145,832              0            201            669          99.41%
PortScan                       2         39,023              0              0          99.99%
DoS/DDoS                     145              0         44,789              0          99.68%
BruteForce                   260              2              0          4,341          94.31%
Class Precision           99.72%         99.99%         99.55%         86.65%
```

### Feature Engineering Pipeline

NetGuard aggregates packets into bidirectional flows, extracting 12 CICFlowMeter-compatible features:
1. `destination_port`: Target port number
2. `duration_seconds`: Flow duration in seconds
3. `forward_packets`: Forward packet count ($N_{\text{fwd}}$)
4. `backward_packets`: Backward packet count ($N_{\text{bwd}}$)
5. `forward_bytes`: Forward octet volume
6. `backward_bytes`: Backward octet volume
7. `bytes_per_second`: Total bytes / duration
8. `packets_per_second`: Total packets / duration
9. `average_packet_size`: Total octets / total packets
10. `syn_count`: TCP SYN flag occurrences
11. `ack_count`: TCP ACK flag occurrences
12. `rst_count`: TCP RST flag occurrences

### Re-training & Reproducing the Model

To download data, partition into session holdout groups, and train:

```bash
# 1. Download CICIDS2017 capture CSV files
python scripts/download_dataset.py

# 2. Partition into chronological session-held-out pairs (Part1 and Part2)
python scripts/prepare_balanced_captures.py

# 3. Train the 220-tree Random Forest and generate models/netguard.joblib + metrics.json
python scripts/train_model.py --data data/cicids --jobs -1
```

The app automatically loads `models/netguard.joblib` on startup. To hot-reload a newly trained model without restarting uvicorn, send `POST /api/model/reload`.

## API

- `GET /api/stats` - Telemetry counters, active packet rate, and engine status
- `GET /api/alerts` - List of detected threats with severity, probability, and explainable reasons
- `GET /api/model` - Current model status and benchmark metrics from `models/metrics.json`
- `POST /api/model/reload` - Hot-reload model from `models/netguard.joblib` and broadcast to WebSocket clients
- `POST /api/source` - Switch traffic source: `{"source":"demo"}` or `{"source":"live","interface":"eth0"}`
- `POST /api/replay?filename=capture.pcap&speed=1` - Upload and replay raw PCAP byte stream
- `POST /api/launch/{normal|portscan|bruteforce|dos}` - Trigger bounded simulation attack against `{"target":"127.0.0.1"}`
- `POST /api/block/{ip}` and `DELETE /api/block/{ip}` - Manage simulated network firewall blocklist
- `POST /api/agent/flows` - Ingest batch flow telemetry from remote live capture agent
- `PUT /api/whitelist` - Update IP whitelist: `{"ips":["192.168.1.1"]}`
- WebSocket: `/ws` - Real-time stream of flow telemetry, threat alerts, and model status updates

SQLite state is stored in `data/netguard.sqlite3` by default. Set `NETGUARD_DATA_DIR` to use another local directory, or set `NETGUARD_DATABASE_URL` to use PostgreSQL.

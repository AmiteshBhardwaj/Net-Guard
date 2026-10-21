# NetGuard

NetGuard is a local network threat-monitoring demo for the SW-25 hackathon challenge. It combines packet-derived flow features, explainable detection rules, an optional Random Forest, and a live browser dashboard.

## Run locally

Python 3.11 is recommended.

```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --env-file .env --host 127.0.0.1 --port 8000
```

On Linux/macOS, activate the environment with `source .venv/bin/activate`, then run `python -m uvicorn app.main:app --env-file .env --host 127.0.0.1 --port 8000`. The local `.env` is ignored by Git; add `NETGUARD_DATABASE_URL` there if you want to connect this local backend to Supabase. Keep that connection string private. Open [http://127.0.0.1:8000](http://127.0.0.1:8000) for the landing page, then choose **Open dashboard** (or go directly to `/dashboard`).

The landing page bundles Lenis from `frontend/`. GSAP 3.12.5 and its matching ScrollTrigger plugin remain local assets in `static/vendor/` and choreograph the scroll-linked text and signal animations. Rebuild after changing the frontend with Node.js 20.19 or newer: run `npm ci` and then `npm run build` from `frontend/`. The build writes to `static/landing-assets/`, which FastAPI serves with the rest of the page.

## Project layout

```text
app/              Application entrypoints and runtime configuration
  config.py       Shared paths and environment settings
  core.py         Threat detection engine and flow logic
  database.py     SQLite/PostgreSQL connection compatibility
  main.py         FastAPI app and HTTP/WebSocket routes
  sources.py      Packet capture and PCAP ingestion helpers
backend/          Backend services and domain logic
  blast_radius/   Blast-radius topology and incident modeling
supabase/         PostgreSQL schema migration for Supabase
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
4. Open the generated `https://<service-name>.onrender.com` URL and choose **Open dashboard** (or add `/dashboard`). Confirm `/api/health`, launch a simulated PortScan, and watch the dashboard alert feed.

Free Render services spin down when idle and can take about a minute to wake. Their filesystem is ephemeral: SQLite alerts, blocks, and attack history reset after a restart or redeploy. This deployment supports dashboard simulation, PCAP replay, APIs, and WebSockets. Use an always-on backend plan for consistently fast access. Live Scapy capture still requires a local lab machine with packet-capture permissions and a supported driver.

## Deploy frontend on Vercel with Supabase

The Vercel deployment serves the static website and dashboard. The FastAPI application must still run on an always-on host that supports WebSockets, and Supabase PostgreSQL stores persistent application data. This keeps the browser UI, API, and database on the platforms that fit them.

1. Create a Supabase project and copy its PostgreSQL connection string. Keep the database URL private; it is only a backend environment variable. You can run `supabase/migrations/20261021000000_initial_schema.sql` in the Supabase SQL Editor, or let the backend initialize its schema on startup.
2. Deploy this repository's FastAPI app to a host that supports WebSockets (the included Render Blueprint can be used as a starting point; choose an always-on plan to avoid idle wake-up delays). Configure:
   - `NETGUARD_DATABASE_URL`: the Supabase PostgreSQL connection string, with TLS enabled.
   - `NETGUARD_CORS_ORIGINS`: comma-separated exact frontend origins, such as `https://your-project.vercel.app`. Add each production/custom domain used by the browser.
   - `NETGUARD_CAPTURE_MODE=agent` and a long random `NETGUARD_AGENT_TOKEN` if live capture should come from your local network. Do not use the token as a Vercel environment variable.
3. In Vercel, import this repository with the repository root as the project root. Set the build environment variable `NETGUARD_API_URL` to the backend's HTTPS origin (for example `https://netguard-api.example.com`, with no path). Vercel reads `vercel.json`, builds the landing-page assets, and writes the frontend into `vercel-dist/`.
4. Open `/`, `/dashboard`, or `/threat-dashboard` on the Vercel domain. Check `/api/health` directly on the backend and run a simulated attack from the dashboard.

The backend supports Supabase PostgreSQL through `NETGUARD_DATABASE_URL` (or `DATABASE_URL`); without either variable, it continues to use local SQLite. Switching a deployment from SQLite to Supabase does not copy existing SQLite history; the Supabase database starts empty unless you migrate that data separately. Do not expose the database URL or agent token in frontend code. The app currently has no operator login, so deploy the public demo with that limitation in mind and use platform access controls or add application authentication before exposing sensitive data or administrative operations.

Run one backend process/worker for this version. WebSocket clients and live counters are process-local; scaling to multiple backend instances requires a shared event bus and shared runtime-state handling in addition to Supabase.

### Live capture agent

Vercel and hosted application servers cannot capture traffic from your local network. In `agent` capture mode, run the included agent on a machine that has Scapy, packet-capture permissions, and access to the desired interface:

```bash
export NETGUARD_AGENT_TOKEN='<same secret configured on the backend>'
python scripts/capture_agent.py --backend https://netguard-api.example.com --interface eth0
```

On Windows, install Npcap and run with the necessary privileges. Select **Live Sniffer** in the dashboard, then run the agent. It forwards bounded flow summaries over HTTPS using the bearer token; raw packets are not sent to the backend. If no agent is configured, lab simulation and PCAP replay continue to work.

Set `NETGUARD_CAPTURE_MODE=local` (the default) when running the app directly on the same machine that should capture traffic. The live source then uses the backend machine's local capture interface instead of a remote agent. In agent mode, choose **Live Sniffer** in the dashboard before launching the agent; if it receives a temporary HTTP 409 while the dashboard is in another source mode, it retries.

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
- `POST /api/agent/flows` with an authenticated bounded batch (capture-agent mode only)
- `PUT /api/whitelist` with `{"ips":["192.168.1.1"]}`; or set `NETGUARD_WHITELIST` before startup
- WebSocket: `/ws`

SQLite state is stored in `data/netguard.sqlite3` by default. Set `NETGUARD_DATA_DIR` to use another local directory, or set `NETGUARD_DATABASE_URL` to use PostgreSQL.

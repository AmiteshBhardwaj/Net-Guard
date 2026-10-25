# NetGuard: real-time network intrusion dashboard (Bits2Wave SW-25)

Watches network traffic, flags port scans, brute force and DoS floods, explains every alert in plain English,
lets you block the attacker, and keeps a live score of "attacks launched vs attacks caught".

```
traffic source -> flow builder (12 features) -> detector (ML + rules + filters) -> backend -> dashboard
 demo | live | pcap | csv                                    FastAPI + WebSocket + SQLite     browser
```

## Quick start (works in 2 minutes, nothing to capture)

```bat
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn backend.main:app --port 8000
```
Open http://127.0.0.1:8000, press **Run port scan**, **Run brute force**, **Run DoS flood**.
The default source is **Simulated** and the dashboard says so in a banner. Never present it as live.

Run the tests any time:
```bat
python -m tests.test_pipeline
```

## Real traffic (Live capture)

You need two machines (or a VM): loopback traffic on Windows is not captured.

1. Install **Npcap** (tick "WinPcap API-compatible mode"). Open an **Administrator** terminal.
2. Victim machine/VM: `python -m victim.app --host 0.0.0.0 --port 8080`
3. Monitor machine (the one that sees the victim's traffic): `set NG_VICTIM_HOST=<victim private IP>` then start the backend.
4. Dashboard: **Live capture** -> pick the interface (leave blank for default) -> Start.
5. The attack buttons now launch the real simulator against `NG_VICTIM_HOST`.

Use a VirtualBox **host-only** network or a phone/laptop hotspot. College Wi-Fi usually blocks device-to-device traffic.
The simulator refuses any target that is not 127.x / 10.x / 172.16-31.x / 192.168.x and caps rate and duration.
Run it only against your own machines.

## Replay modes

* **PCAP replay**: put a `.pcap` in `data/`, choose it in the dialog.
* **CSV replay**: `python -m tools.make_sample_csv` makes `data/sample_flows.csv`. With a `ts` column it replays at recorded timing.

## Adding the trained model

Follow `model/README.md`. No code changes: drop `model.pkl`, `features.json`, `metrics.json` into `model/` and restart.
Each alert and the Live banner show the engine in use ("Rules" or "Model + rules"). The "Model results" card shows the offline scores.

## Settings (environment variables)

| Variable | Default | Meaning |
|---|---|---|
| `NG_SOURCE` | `demo` | source at startup |
| `NG_VICTIM_HOST` / `NG_VICTIM_PORT` | `127.0.0.1` / `8080` | where real attacks are aimed |
| `NG_CONF` | `0.80` | model confidence needed to flag a flow |
| `NG_MIN_FLOWS` | `3` | suspicious flows from one address needed to alert |
| `NG_WHITELIST` | empty | comma-separated IPs never flagged (gateway, DNS, your dashboard machine) |

Rule thresholds live in `shared/config.py`.

## How a detection works

* Flows are built from packets (a TCP flow must start with a SYN, so stray ACKs cannot fake a scan).
* Per source address, a 5-second window is judged by three independent rules (ports touched, connection count, connection rate)
  and, if present, the model. The strongest evidence wins.
* One alert per attack episode, until that address has been quiet for 10 s. A flood absorbs brute-force lookalikes.
* Every alert carries evidence bars ("198 connections, alert at 150") for the **Why it was flagged** panel.
* **Block address** puts the IP on a blocklist; the pipeline then drops its traffic (simulated block, no firewall changes).

## Folder map

| Folder | What | Owner idea |
|---|---|---|
| `pipeline/` | flows, detector, sources, runner | pipeline lead |
| `backend/` | API, WebSocket, SQLite, launch queue, scoreboard | backend |
| `frontend/` | dashboard (no build step, no CDN, works offline) | frontend |
| `simulator/`, `victim/` | safe attack scripts and target app | demo ops |
| `model/` | model contract and files | ML lead |
| `tests/`, `tools/` | tests, sample data | everyone |

## Demo checklist

- [ ] `python -m tests.test_pipeline` passes
- [ ] Reset scoreboard, then 3 of 3 caught with 0 false alarms in the banner source you will present
- [ ] Second laptop has the same code; a screen recording of a clean run is saved
- [ ] Backup PCAP/CSV in `data/`; if live capture fails, switch to replay and SAY it is a replay
- [ ] Whitelist the gateway/DNS; run "Normal browsing" for a minute and confirm no alerts
- [ ] Judges press the buttons themselves

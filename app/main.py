"""NetGuard API, event pipeline, and local dashboard host."""

from __future__ import annotations

import asyncio
import json
import os
import sqlite3
import threading
import time
import uuid
from collections import deque
from contextlib import contextmanager
from pathlib import Path
from typing import Any

from fastapi import FastAPI, HTTPException, Request, WebSocket, WebSocketDisconnect
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from app.config import DB_PATH, MODEL_PATH, ROOT, STATIC_DIR
from app.core import DecisionEngine, Flow, env_whitelist, private_target
from app.sources import CaptureSource, flows_from_pcap
from backend.blast_radius.router import router as blast_router
from backend.blast_radius.service import BlastService
from backend.blast_radius.topology import ensure_blast_schema, seed_demo_topology
from app.threat_dashboard_api import (
    init_db_tables,
    router as threat_dashboard_router,
    set_broadcaster,
    set_db_provider,
)

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = Path(os.getenv("NETGUARD_DATA_DIR", ROOT / "data"))
DB_PATH = DATA_DIR / "netguard.sqlite3"
MODEL_PATH = ROOT / "models" / "netguard.joblib"
DATA_DIR.mkdir(parents=True, exist_ok=True)


def load_model() -> Any:
    if not MODEL_PATH.exists():
        return None
    try:
        import joblib
        return joblib.load(MODEL_PATH)
    except Exception:
        return None


engine = DecisionEngine(load_model(), whitelist=env_whitelist())
app = FastAPI(title="NetGuard", version="1.0.0")
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")
app.include_router(blast_router)
capture = CaptureSource()
clients: set[WebSocket] = set()
client_lock = asyncio.Lock()
state_lock = threading.RLock()
state: dict[str, Any] = {
    "source": "demo", "interface": None, "packet_seconds": {},
    "flows_processed": 0, "blocked": set(), "active_attack_id": None,
    "active_attack_label": None, "model_status": "rules only",
    "whitelist": sorted(engine.whitelist),
}


@contextmanager
def db():
    connection = sqlite3.connect(DB_PATH, timeout=10)
    connection.row_factory = sqlite3.Row
    try:
        yield connection
        connection.commit()
    except Exception:
        connection.rollback()
        raise
    finally:
        connection.close()


def init_db() -> None:
    with db() as conn:
        conn.execute("CREATE TABLE IF NOT EXISTS alerts (id TEXT PRIMARY KEY, ts REAL, src TEXT, dst TEXT, dport INTEGER, label TEXT, prob REAL, severity TEXT, reasons TEXT, blocked INTEGER, protocol TEXT)")
        conn.execute("CREATE TABLE IF NOT EXISTS attacks (id TEXT PRIMARY KEY, ts REAL, attack TEXT, status TEXT, detected INTEGER DEFAULT 0)")
        conn.execute("CREATE TABLE IF NOT EXISTS blocks (ip TEXT PRIMARY KEY, ts REAL)")
        init_db_tables(conn)


init_db()
with db() as conn:
    state["blocked"].update(row[0] for row in conn.execute("SELECT ip FROM blocks").fetchall())
if engine.model is not None:
    state["model_status"] = "trained model loaded"


async def broadcast(payload: dict[str, Any]) -> None:
    message = json.dumps(payload)
    async with client_lock:
        dead: list[WebSocket] = []
        for socket in clients:
            try:
                await socket.send_text(message)
            except Exception:
                dead.append(socket)
        for socket in dead:
            clients.discard(socket)


app.state.blast_service = BlastService(broadcast, db)
set_broadcaster(broadcast)
set_db_provider(db)
app.include_router(threat_dashboard_router)


def remember_packet(ts: float, count: int) -> None:
    with state_lock:
        second = int(ts)
        counts = state["packet_seconds"]
        counts[second] = counts.get(second, 0) + count
        for old in [key for key in counts if second - key > 120]:
            counts.pop(old, None)


async def process_flow(flow: Flow) -> dict[str, Any] | None:
    remember_packet(time.time(), max(1, flow.forward_packets + flow.backward_packets))
    with state_lock:
        state["flows_processed"] += 1
        blocked = flow.src in state["blocked"]
    if blocked:
        return None
    alert = engine.decide(flow)
    if alert is None:
        await broadcast({"type": "flow", "ts": flow.ended, "src": flow.src, "label": "Normal"})
        return None
    with db() as conn:
        conn.execute("INSERT OR REPLACE INTO alerts VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", (
            alert["id"], alert["ts"], alert["src"], alert["dst"], alert["dport"],
            alert["label"], alert["prob"], alert["severity"], json.dumps(alert["reasons"]),
            int(alert["blocked"]), alert.get("protocol", "TCP"),
        ))
        with state_lock:
            active_id = state["active_attack_id"] if state["active_attack_label"] == alert["label"] else None
        if active_id:
            conn.execute("UPDATE attacks SET detected=1 WHERE id=?", (active_id,))
    await broadcast({"type": "alert", **alert})
    return alert


def on_live_flow(flow: Flow) -> None:
    # Capture callback runs on Scapy's worker thread. Schedule the shared
    # async pipeline on the server event loop.
    loop = getattr(app.state, "loop", None)
    if loop and loop.is_running():
        asyncio.run_coroutine_threadsafe(process_flow(flow), loop)


@app.on_event("startup")
async def startup() -> None:
    app.state.loop = asyncio.get_running_loop()
    app.state.blast_service = BlastService(broadcast, db)


class AttackRequest(BaseModel):
    target: str = "127.0.0.1"


class SourceRequest(BaseModel):
    source: str = Field(pattern="^(demo|live)$")
    interface: str | None = None


class WhitelistRequest(BaseModel):
    ips: list[str]


@app.get("/")
async def dashboard() -> FileResponse:
    return FileResponse(ROOT / "static" / "index.html")


@app.get("/threat-dashboard")
async def threat_dashboard_page() -> FileResponse:
    return FileResponse(ROOT / "static" / "threat_dashboard.html")


@app.get("/api/health")
async def health() -> dict[str, str]:
    return {"status": "ok", "service": "NetGuard"}


@app.get("/api/stats")
async def stats() -> dict[str, Any]:
    now = time.time()
    with state_lock:
        recent_packets = round(sum(count for second, count in state["packet_seconds"].items() if int(now) - second <= 1) / 2)
        source = state["source"]
        interface = state["interface"]
        flows_processed = state["flows_processed"]
        blocked_count = len(state["blocked"])
    with db() as conn:
        alerts = conn.execute("SELECT COUNT(*) FROM alerts").fetchone()[0]
        launched, detected = conn.execute("SELECT COUNT(*), COALESCE(SUM(detected),0) FROM attacks WHERE attack != 'Normal'").fetchone()
        types = conn.execute("SELECT label, COUNT(*) count FROM alerts GROUP BY label").fetchall()
    return {
        "source": source, "interface": interface, "packets_per_second": recent_packets,
        "flows_processed": flows_processed, "alerts": alerts, "blocked_ips": blocked_count,
        "attacks_launched": launched, "attacks_detected": detected,
        "detection_rate": round(detected / launched, 3) if launched else None,
        "model_status": state["model_status"], "type_counts": {r["label"]: r["count"] for r in types},
        "whitelist": state["whitelist"],
    }


@app.get("/api/alerts")
async def get_alerts(limit: int = 50) -> list[dict[str, Any]]:
    with db() as conn:
        rows = conn.execute("SELECT * FROM alerts ORDER BY ts DESC LIMIT ?", (min(max(limit, 1), 200),)).fetchall()
    return [{**dict(row), "reasons": json.loads(row["reasons"]), "blocked": bool(row["blocked"])} for row in rows]


@app.post("/api/source")
async def set_source(request: SourceRequest) -> dict[str, Any]:
    if capture.running:
        capture.stop()
    if request.source == "live":
        try:
            capture.start(request.interface, on_live_flow)
        except RuntimeError as exc:
            raise HTTPException(503, str(exc)) from exc
    with state_lock:
        state["source"] = request.source
        state["interface"] = request.interface if request.source == "live" else None
    await broadcast({"type": "source", "source": request.source, "interface": request.interface})
    return {"source": request.source, "interface": request.interface}


@app.post("/api/replay")
async def replay_pcap(request: Request, filename: str = "capture.pcap", speed: float = 1.0) -> dict[str, Any]:
    limit = 20 * 1024 * 1024
    if int(request.headers.get("content-length", "0") or 0) > limit:
        raise HTTPException(413, "PCAP upload is limited to 20 MB")
    chunks: list[bytes] = []
    size = 0
    async for chunk in request.stream():
        size += len(chunk)
        if size > limit:
            raise HTTPException(413, "PCAP upload is limited to 20 MB")
        chunks.append(chunk)
    payload = b"".join(chunks)
    if Path(filename).suffix.lower() not in {".pcap", ".pcapng"}:
        raise HTTPException(400, "Upload a .pcap or .pcapng file")
    try:
        flows = await asyncio.to_thread(flows_from_pcap, payload)
    except RuntimeError as exc:
        raise HTTPException(503, str(exc)) from exc
    except Exception as exc:
        raise HTTPException(400, f"Could not read capture: {exc}") from exc
    if capture.running:
        capture.stop()
    with state_lock:
        state["source"] = "pcap"
        state["interface"] = None
    rate = min(max(speed, 0.1), 10.0)
    last = None
    for flow in flows:
        if last is not None:
            await asyncio.sleep(min(max((flow.started - last) / rate, 0), 0.25))
        await process_flow(flow)
        last = flow.started
    await broadcast({"type": "replay_complete", "flows": len(flows), "source": "pcap"})
    return {"source": "pcap", "flows_replayed": len(flows), "speed": rate}


@app.post("/api/launch/{attack}")
async def launch_attack(attack: str, request: AttackRequest) -> dict[str, Any]:
    attack = attack.lower()
    if attack not in {"normal", "portscan", "bruteforce", "dos"}:
        raise HTTPException(404, "Choose normal, portscan, bruteforce, or dos")
    try:
        target = private_target(request.target)
    except ValueError as exc:
        raise HTTPException(400, str(exc)) from exc
    with state_lock:
        if state["active_attack_id"]:
            raise HTTPException(409, "A lab simulation is already running")
    if capture.running:
        capture.stop()
    with state_lock:
        state["source"] = "demo"
        state["interface"] = None
    run_id = uuid.uuid4().hex
    label = {"normal": "Normal", "portscan": "PortScan", "bruteforce": "BruteForce", "dos": "DoS/DDoS"}[attack]
    with db() as conn:
        conn.execute("INSERT INTO attacks(id,ts,attack,status,detected) VALUES(?,?,?,?,0)", (run_id, time.time(), label, "running"))
    with state_lock:
        state["active_attack_id"] = run_id
        state["active_attack_label"] = label
    src = "192.168.56.10"
    engine.source_activity.pop(src, None)
    engine.model_activity.pop(src, None)
    await broadcast({"type": "attack_started", "id": run_id, "attack": label, "source": "demo", "target": target})

    # Bounded in-process lab telemetry feeds the same flow builder/detector
    # path as packets. It creates no outbound traffic and cannot target a host.
    now = time.time()
    events: list[Flow] = []
    if attack == "normal":
        for index in range(5):
            events.append(Flow(src=src, dst=target, dport=8080, started=now + index * .03, ended=now + index * .03 + .02,
                               forward_packets=3, backward_packets=4, forward_bytes=400, backward_bytes=1200, ack_count=6, request_count=2))
    elif attack == "portscan":
        for index in range(60):
            events.append(Flow(src=src, dst=target, dport=1000 + index, started=now + index * .004, ended=now + index * .004 + .002,
                               forward_packets=1, forward_bytes=60, syn_count=1, rst_count=1))
    elif attack == "bruteforce":
        for index in range(4):
            events.append(Flow(src=src, dst=target, dport=8080, started=now + index * .04, ended=now + index * .04 + .02,
                               forward_packets=2, backward_packets=2, forward_bytes=180, backward_bytes=240, ack_count=3, login_failures=3))
    elif attack == "dos":
        for index in range(4):
            events.append(Flow(src=src, dst=target, dport=8080, started=now + index * .02, ended=now + index * .02 + .01,
                               forward_packets=15, backward_packets=2, forward_bytes=9000, backward_bytes=800, request_count=20, ack_count=15))
    for flow in events:
        await process_flow(flow)
        await asyncio.sleep(.003)
    with db() as conn:
        conn.execute("UPDATE attacks SET status='complete' WHERE id=?", (run_id,))
        detected = bool(conn.execute("SELECT detected FROM attacks WHERE id=?", (run_id,)).fetchone()[0])
    with state_lock:
        state["active_attack_id"] = None
        state["active_attack_label"] = None
    await broadcast({"type": "attack_complete", "id": run_id, "attack": label, "detected": detected})
    return {"id": run_id, "attack": label, "status": "complete", "detected": detected, "source": "demo", "target": target, "flows_generated": len(events)}


@app.post("/api/block/{ip}")
async def block_ip(ip: str) -> dict[str, Any]:
    try:
        safe_ip = private_target(ip)
    except ValueError as exc:
        raise HTTPException(400, str(exc)) from exc
    with state_lock:
        state["blocked"].add(safe_ip)
    with db() as conn:
        conn.execute("INSERT OR REPLACE INTO blocks VALUES (?,?)", (safe_ip, time.time()))
        conn.execute("UPDATE alerts SET blocked=1 WHERE src=?", (safe_ip,))
    await broadcast({"type": "blocked", "ip": safe_ip, "simulated": True})
    return {"ip": safe_ip, "blocked": True, "simulated": True}


@app.delete("/api/block/{ip}")
async def unblock_ip(ip: str) -> dict[str, Any]:
    with state_lock:
        state["blocked"].discard(ip)
    with db() as conn:
        conn.execute("DELETE FROM blocks WHERE ip=?", (ip,))
    await broadcast({"type": "unblocked", "ip": ip})
    return {"ip": ip, "blocked": False}


@app.put("/api/whitelist")
async def set_whitelist(request: WhitelistRequest) -> dict[str, Any]:
    parsed: set[str] = set()
    for ip in request.ips:
        try:
            parsed.add(private_target(ip))
        except ValueError as exc:
            raise HTTPException(400, f"Invalid trusted IP {ip}: {exc}") from exc
    engine.whitelist = parsed
    with state_lock:
        state["whitelist"] = sorted(parsed)
    await broadcast({"type": "whitelist", "ips": sorted(parsed)})
    return {"whitelist": sorted(parsed)}


@app.get("/api/model")
async def model_info() -> dict[str, Any]:
    metrics_path = ROOT / "models" / "metrics.json"
    metrics = json.loads(metrics_path.read_text()) if metrics_path.exists() else None
    return {"status": state["model_status"], "metrics": metrics}


@app.websocket("/ws")
async def websocket_feed(socket: WebSocket) -> None:
    await socket.accept()
    async with client_lock:
        clients.add(socket)
    try:
        while True:
            await socket.receive_text()
    except WebSocketDisconnect:
        pass
    finally:
        async with client_lock:
            clients.discard(socket)


@app.get("/api/interfaces")
async def interfaces() -> dict[str, Any]:
    try:
        from scapy.all import get_if_list
        names = get_if_list()
    except Exception:
        names = []
    return {"interfaces": names, "available": bool(names)}


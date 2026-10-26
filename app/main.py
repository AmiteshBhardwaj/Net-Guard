"""NetGuard API, event pipeline, and local dashboard host."""

from __future__ import annotations

import asyncio
import hmac
import json
import logging
import threading
import os
import time
import urllib.request
import uuid
from contextlib import asynccontextmanager, contextmanager
from pathlib import Path
from typing import Any

from fastapi import FastAPI, Header, HTTPException, Request, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from app.config import AGENT_TOKEN, CAPTURE_MODE, CORS_ORIGINS, DB_PATH, METRICS_PATH, MODEL_PATH, ROOT, STATIC_DIR
from app.core import DecisionEngine, Flow, env_whitelist, private_target, validate_ip
from app.database import connect_database
from app.sources import CaptureSource, DemoSource, flows_from_pcap, flows_from_csv, get_active_interfaces
from backend.blast_radius.router import router as blast_router
from backend.blast_radius.service import BlastService
from backend.blast_radius.topology import ensure_blast_schema, seed_demo_topology
from app.threat_dashboard_api import (
    init_db_tables,
    router as threat_dashboard_router,
    set_broadcaster,
    set_db_provider,
    ingest_flow_telemetry,
)

logger = logging.getLogger("netguard")
if CAPTURE_MODE not in {"local", "agent"}:
    raise ValueError("NETGUARD_CAPTURE_MODE must be 'local' or 'agent'")


def load_model() -> Any:
    if not MODEL_PATH.exists():
        return None
    try:
        import joblib
        return joblib.load(MODEL_PATH)
    except Exception:
        return None


async def _keep_alive_task(target_url: str, interval_seconds: int = 300) -> None:
    health_url = f"{target_url.rstrip('/')}/api/health"
    logger.info(
        "Keep-alive task started for %s (interval: %ds)",
        health_url,
        interval_seconds,
    )
    await asyncio.sleep(30)
    while True:
        try:
            loop = asyncio.get_running_loop()
            await loop.run_in_executor(
                None,
                lambda: urllib.request.urlopen(
                    urllib.request.Request(
                        health_url,
                        headers={"User-Agent": "NetGuard-KeepAlive/1.0"},
                    ),
                    timeout=10,
                ).read(),
            )
            logger.info("Keep-alive ping sent to %s", health_url)
        except Exception as exc:
            logger.warning("Keep-alive ping to %s failed: %s", health_url, exc)
        await asyncio.sleep(interval_seconds)


@contextmanager
def db():
    connection = connect_database(DB_PATH)
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
        conn.execute(
            "CREATE TABLE IF NOT EXISTS alerts (id TEXT PRIMARY KEY, ts DOUBLE PRECISION, src TEXT, dst TEXT, dport INTEGER, label TEXT, prob DOUBLE PRECISION, severity TEXT, reasons TEXT, blocked INTEGER, protocol TEXT)"
        )
        conn.execute(
            "CREATE TABLE IF NOT EXISTS attacks (id TEXT PRIMARY KEY, ts DOUBLE PRECISION, attack TEXT, status TEXT, detected INTEGER DEFAULT 0)"
        )
        conn.execute(
            "CREATE TABLE IF NOT EXISTS blocks (ip TEXT PRIMARY KEY, ts DOUBLE PRECISION)"
        )
        init_db_tables(conn)
        ensure_blast_schema(conn)
        seed_demo_topology(conn)


@asynccontextmanager
async def lifespan(application: FastAPI):
    # Store the running event loop so the Scapy capture thread can schedule coroutines.
    application.state.loop = asyncio.get_running_loop()
    application.state.blast_service = BlastService(broadcast, db)

    # Initialize database in executor to avoid blocking port bind on remote DB connection
    def _startup_db() -> None:
        try:
            init_db()
            with db() as conn:
                state["blocked"].update(
                    row["ip"]
                    for row in conn.execute("SELECT ip FROM blocks").fetchall()
                )
        except Exception as exc:
            logger.warning("Database initialization deferred/failed: %s", exc)

    loop = asyncio.get_running_loop()
    await loop.run_in_executor(None, _startup_db)

    if engine.model is not None:
        state["model_status"] = "trained model loaded"

    keep_alive_url = (
        os.getenv("NETGUARD_KEEP_ALIVE_URL")
        or os.getenv("RENDER_EXTERNAL_URL")
        or ""
    ).strip()
    task = None
    if keep_alive_url:
        task = asyncio.create_task(
            _keep_alive_task(keep_alive_url, interval_seconds=300)
        )
    if state["source"] == "demo":
        demo_source.start()
    elif state["source"] == "live":
        try:
            capture.start(state.get("interface"), on_live_flow)
            state["interface"] = capture.interface
        except Exception as exc:
            logger.warning("Could not auto-start live capture: %s", exc)
            state["source"] = "demo"
            demo_source.start()
    yield
    demo_source.stop()
    if capture.running:
        capture.stop()
    if task:
        task.cancel()
        try:
            await task
        except asyncio.CancelledError:
            pass
    from app.database import close_connection_pool

    close_connection_pool()


engine = DecisionEngine(load_model(), whitelist=env_whitelist())
app = FastAPI(title="NetGuard", version="1.0.0", lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")
app.include_router(blast_router)
capture = CaptureSource()
demo_source = DemoSource(lambda flow: on_live_flow(flow), get_blocked=lambda: state["blocked"])
clients: set[WebSocket] = set()
client_lock = asyncio.Lock()
state_lock = threading.RLock()

DEFAULT_SOURCE = os.getenv("NETGUARD_DEFAULT_SOURCE", "demo").strip().lower()
if DEFAULT_SOURCE not in {"demo", "live"}:
    DEFAULT_SOURCE = "demo"

state: dict[str, Any] = {
    "source": DEFAULT_SOURCE,
    "interface": None,
    "packet_seconds": {},
    "flows_processed": 0,
    "blocked": set(),
    "active_attack_id": None,
    "active_attack_label": None,
    "model_status": "rules only",
    "whitelist": sorted(engine.whitelist),
}


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
    try:
        await ingest_flow_telemetry(flow)
    except Exception:
        pass
    alert = engine.decide(flow)
    if alert is None:
        await broadcast({"type": "flow", "ts": flow.ended, "src": flow.src, "label": "Normal"})
        return None
    with db() as conn:
        conn.execute(
            """
            INSERT INTO alerts (id, ts, src, dst, dport, label, prob, severity, reasons, blocked, protocol)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                ts=excluded.ts, src=excluded.src, dst=excluded.dst, dport=excluded.dport,
                label=excluded.label, prob=excluded.prob, severity=excluded.severity,
                reasons=excluded.reasons, blocked=excluded.blocked, protocol=excluded.protocol
            """,
            (
                alert["id"], alert["ts"], alert["src"], alert["dst"], alert["dport"],
                alert["label"], alert["prob"], alert["severity"], json.dumps(alert["reasons"]),
                int(alert["blocked"]), alert.get("protocol", "TCP"),
            ),
        )
        with state_lock:
            active_id = state["active_attack_id"] if state["active_attack_label"] == alert["label"] else None
        if active_id:
            conn.execute("UPDATE attacks SET detected=1 WHERE id=?", (active_id,))
    blast_service = getattr(app.state, "blast_service", None)
    if blast_service:
        try:
            await blast_service.on_anomaly(alert)
        except Exception:
            pass
    await broadcast({"type": "alert", **alert})
    return alert


def on_live_flow(flow: Flow) -> None:
    # Capture callback runs on Scapy's worker thread. Schedule the shared
    # async pipeline on the server event loop.
    loop = getattr(app.state, "loop", None)
    if loop and loop.is_running():
        asyncio.run_coroutine_threadsafe(process_flow(flow), loop)


class AttackRequest(BaseModel):
    target: str = "127.0.0.1"


class SourceRequest(BaseModel):
    source: str = Field(pattern="^(demo|live|pcap|csv)$")
    interface: str | None = None


class WhitelistRequest(BaseModel):
    ips: list[str]


class AgentFlow(BaseModel):
    src: str
    dst: str
    dport: int = Field(ge=0, le=65535)
    sport: int | None = Field(default=None, ge=0, le=65535)
    protocol: str = "TCP"
    started: float
    ended: float
    forward_packets: int = Field(default=0, ge=0)
    backward_packets: int = Field(default=0, ge=0)
    forward_bytes: int = Field(default=0, ge=0)
    backward_bytes: int = Field(default=0, ge=0)
    syn_count: int = Field(default=0, ge=0)
    ack_count: int = Field(default=0, ge=0)
    rst_count: int = Field(default=0, ge=0)
    login_failures: int = Field(default=0, ge=0)
    request_count: int = Field(default=0, ge=0)

    def to_flow(self) -> Flow:
        return Flow(**self.model_dump())


class AgentFlowBatch(BaseModel):
    flows: list[AgentFlow] = Field(min_length=1, max_length=250)


@app.get("/")
@app.get("/landing")
async def landing_page(request: Request) -> FileResponse:
    return FileResponse(ROOT / "static" / "landing.html")


@app.get("/dashboard")
@app.get("/threat-dashboard")
async def dashboard_page(request: Request) -> FileResponse:
    return FileResponse(ROOT / "static" / "index.html")


@app.get("/api/health")
async def health(deep: bool = False) -> dict[str, str]:
    if not deep:
        return {"status": "ok", "service": "NetGuard"}
    db_status = "ok"
    try:
        with db() as conn:
            conn.execute("SELECT 1")
    except Exception as exc:
        db_status = f"unhealthy: {exc}"
    return {"status": "ok", "service": "NetGuard", "database": db_status}



@app.get("/api/stats")
async def stats() -> dict[str, Any]:
    now = time.time()
    with state_lock:
        counts = state["packet_seconds"]
        current_second = int(now)
        packet_history = [
            round((counts.get(second - 1, 0) + counts.get(second, 0)) / 2)
            for second in range(current_second - 59, current_second + 1)
        ]
        recent_packets = packet_history[-1]
        source = state["source"]
        interface = state["interface"]
        flows_processed = state["flows_processed"]
        blocked_count = len(state["blocked"])
    with db() as conn:
        alerts = conn.execute("SELECT COUNT(*) AS count FROM alerts").fetchone()["count"]
        attack_counts = conn.execute("SELECT COUNT(*) AS launched, COALESCE(SUM(detected),0) AS detected FROM attacks WHERE attack != 'Normal'").fetchone()
        launched, detected = attack_counts["launched"], attack_counts["detected"]
        types = conn.execute("SELECT label, COUNT(*) AS count FROM alerts GROUP BY label").fetchall()
    return {
        "source": source, "interface": interface, "packets_per_second": recent_packets,
        "packet_history": packet_history,
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
    if request.source == "demo":
        demo_source.start()
    elif request.source == "live":
        demo_source.stop()
        if CAPTURE_MODE == "agent":
            if not AGENT_TOKEN:
                raise HTTPException(503, "Live capture agent is not configured on this backend")
        else:
            try:
                capture.start(request.interface, on_live_flow)
            except RuntimeError as exc:
                raise HTTPException(503, str(exc)) from exc
    else:
        demo_source.stop()
    with state_lock:
        state["source"] = request.source
        state["interface"] = (capture.interface or request.interface) if request.source == "live" else None
        active_iface = state["interface"]
    await broadcast({"type": "source", "source": request.source, "interface": active_iface})
    return {"source": request.source, "interface": active_iface}


@app.post("/api/agent/flows")
async def ingest_agent_flows(
    batch: AgentFlowBatch,
    authorization: str | None = Header(default=None),
) -> dict[str, int]:
    if CAPTURE_MODE != "agent" or not AGENT_TOKEN:
        raise HTTPException(503, "Remote capture agent is not enabled")
    expected = f"Bearer {AGENT_TOKEN}"
    if authorization is None or not hmac.compare_digest(authorization, expected):
        raise HTTPException(401, "Invalid capture agent credentials")
    with state_lock:
        if state["source"] != "live":
            raise HTTPException(409, "Select live capture in the dashboard before sending flows")
    alerts = 0
    for item in batch.flows:
        if await process_flow(item.to_flow()) is not None:
            alerts += 1
    return {"flows_received": len(batch.flows), "alerts_created": alerts}


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


@app.post("/api/replay/csv")
async def replay_csv(
    request: Request,
    filename: str = "Friday-PortScan-Part2.csv",
    speed: float = 2.0,
    limit: int = 1000,
) -> dict[str, Any]:
    content_len = int(request.headers.get("content-length", "0") or 0)
    data_dir = ROOT / "data" / "cicids"
    if content_len > 0:
        body = await request.body()
        flows = await asyncio.to_thread(flows_from_csv, body, min(limit, 5000))
    else:
        clean_name = Path(filename).name
        csv_file = data_dir / clean_name
        if not csv_file.exists():
            raise HTTPException(404, f"Dataset file {clean_name} not found in data/cicids")
        flows = await asyncio.to_thread(flows_from_csv, csv_file, min(limit, 5000))
    if capture.running:
        capture.stop()
    demo_source.stop()
    with state_lock:
        state["source"] = "csv"
        state["interface"] = None
    rate = min(max(speed, 0.1), 50.0)
    last = None
    for flow in flows:
        if last is not None:
            await asyncio.sleep(min(max((flow.started - last) / rate, 0), 0.1))
        await process_flow(flow)
        last = flow.started
    await broadcast({"type": "replay_complete", "flows": len(flows), "source": "csv", "file": filename})
    return {"source": "csv", "flows_replayed": len(flows), "file": filename, "speed": rate}


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

    durations = {"normal": 3.0, "portscan": 3.5, "bruteforce": 4.0, "dos": 3.5}
    duration = durations.get(attack, 3.0)
    if state["source"] == "demo":
        demo_source.set_attack({"type": attack, "src": src, "dst": target, "until": time.time() + duration})
        await asyncio.sleep(duration)
        demo_source.set_attack(None)
    else:
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
        detected = bool(conn.execute("SELECT detected FROM attacks WHERE id=?", (run_id,)).fetchone()["detected"])
    with state_lock:
        state["active_attack_id"] = None
        state["active_attack_label"] = None
    await broadcast({"type": "attack_complete", "id": run_id, "attack": label, "detected": detected})
    return {"id": run_id, "attack": label, "status": "complete", "detected": detected, "source": "demo", "target": target}


@app.post("/api/block/{ip}")
async def block_ip(ip: str) -> dict[str, Any]:
    try:
        safe_ip = validate_ip(ip)
    except ValueError as exc:
        raise HTTPException(400, str(exc)) from exc
    with state_lock:
        state["blocked"].add(safe_ip)
    with db() as conn:
        conn.execute(
            "INSERT INTO blocks (ip, ts) VALUES (?, ?) ON CONFLICT(ip) DO UPDATE SET ts=excluded.ts",
            (safe_ip, time.time()),
        )
        conn.execute("UPDATE alerts SET blocked=1 WHERE src=?", (safe_ip,))
    blast_service = getattr(app.state, "blast_service", None)
    if blast_service:
        try:
            await blast_service.on_auto_block({"ip": safe_ip})
        except Exception:
            pass
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
            parsed.add(validate_ip(ip))
        except ValueError as exc:
            raise HTTPException(400, f"Invalid trusted IP {ip}: {exc}") from exc
    engine.whitelist = parsed
    with state_lock:
        state["whitelist"] = sorted(parsed)
    await broadcast({"type": "whitelist", "ips": sorted(parsed)})
    return {"whitelist": sorted(parsed)}


@app.get("/api/model")
async def model_info() -> dict[str, Any]:
    metrics = json.loads(METRICS_PATH.read_text()) if METRICS_PATH.exists() else None
    return {"status": state["model_status"], "metrics": metrics}


@app.post("/api/model/reload")
async def reload_model() -> dict[str, Any]:
    new_model = load_model()
    if new_model is None:
        raise HTTPException(status_code=404, detail="No trained model found")
    engine.model = new_model
    with state_lock:
        state["model_status"] = "trained model loaded"
    metrics = json.loads(METRICS_PATH.read_text()) if METRICS_PATH.exists() else None
    await broadcast({"type": "model_status", "status": state["model_status"], "metrics": metrics})
    return {"status": state["model_status"], "metrics": metrics}


@app.websocket("/ws")
async def websocket_feed(socket: WebSocket) -> None:
    origin = socket.headers.get("origin")
    scheme = "https" if socket.url.scheme == "wss" else "http"
    request_origin = f"{scheme}://{socket.headers.get('host', '')}"
    if origin and origin.rstrip("/") != request_origin.rstrip("/") and origin.rstrip("/") not in CORS_ORIGINS:
        await socket.close(code=1008)
        return
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
        items = get_active_interfaces()
        names = [i["name"] for i in items]
    except Exception:
        items = []
        names = []
    return {"interfaces": names, "details": items, "available": bool(names)}

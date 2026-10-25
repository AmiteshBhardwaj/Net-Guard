"""NetGuard backend.   Run from the project root:   uvicorn backend.main:app --port 8000"""
import asyncio
import json
import os
import re
import sqlite3
import subprocess
import sys
import time
from collections import deque
from contextlib import asynccontextmanager
from statistics import median

from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from shared import config as C

ROOT = C.ROOT
C.DATA_DIR.mkdir(exist_ok=True)

ATTACKS = {
    "portscan": {"label": "PortScan", "title": "Port scan", "duration": 4},
    "bruteforce": {"label": "BruteForce", "title": "Brute force", "duration": 10},
    "dos": {"label": "DoS", "title": "DoS flood", "duration": 6},
    "normal": {"label": None, "title": "Normal browsing", "duration": 8},
}
ATTRIBUTION_TAIL_S = 8       # an alert this long after a launch ends still counts for that launch
LAUNCH_GAP_S = 2.5           # breathing room between queued launches
MAX_QUEUE = 3


# --------------------------------------------------------------------------- state
class State:
    def __init__(self):
        self.mode = os.getenv("NG_SOURCE", "demo")
        self.params: dict = {}
        self.engine = "rules"
        self.pipeline_seen = 0.0
        self.blocked: dict = {}                      # ip -> time blocked
        self.autoblock = False
        self.attack = None                           # demo attack being generated right now
        self.launches: list = []
        self.traffic: deque = deque(maxlen=300)
        self.clients: set = set()
        self.next_launch = 1
        self.alert_count = 0
        self.false_alarms = 0
        self.proc = None
        self.error = None


S = State()
launch_q: asyncio.Queue = asyncio.Queue()
db = sqlite3.connect(str(C.DATA_DIR / "netguard.db"), check_same_thread=False)
db.execute("""CREATE TABLE IF NOT EXISTS alerts(
    id INTEGER PRIMARY KEY AUTOINCREMENT, ts REAL, src TEXT, label TEXT, severity TEXT, blob TEXT)""")
db.commit()


class AlertIn(BaseModel):
    ts: float
    src: str
    dst: str
    dport: int = 0
    label: str
    prob: float | None = None
    severity: str
    reasons: list[str] = Field(default_factory=list)
    evidence: list[dict] = Field(default_factory=list)
    engine: str = "rules"
    mode: str = "demo"
    blocked: bool = False


class TrafficIn(BaseModel):
    ts: float
    pps: int = 0
    flagged_pps: int = 0
    dropped: int = 0
    active_flows: int = 0
    flows: int = 0
    mode: str = "demo"


class SourceIn(BaseModel):
    mode: str
    iface: str | None = None
    path: str | None = None
    speed: float | None = None


# ------------------------------------------------------------------- helpers
async def broadcast(msg: dict):
    text = json.dumps(msg)
    dead = []
    for ws in list(S.clients):
        try:
            await ws.send_text(text)
        except Exception:
            dead.append(ws)
    for ws in dead:
        S.clients.discard(ws)


def public_launch(L: dict) -> dict:
    return {k: v for k, v in L.items() if not k.startswith("_")}


def scoreboard() -> dict:
    attacks = [L for L in S.launches if L["label"]]
    finished = [L for L in attacks if L["status"] in ("done", "error")]
    lat = [L["latency"] for L in attacks if L.get("latency") is not None]
    return {
        "launched": len(finished),
        "detected": sum(1 for L in finished if L.get("latency") is not None),
        "median_latency": round(median(lat), 2) if lat else None,
        "false_alarms": S.false_alarms,
        "alerts": S.alert_count,
        "blocked": len(S.blocked),
    }


def snapshot() -> dict:
    rows = db.execute("SELECT blob FROM alerts ORDER BY id DESC LIMIT 60").fetchall()
    return {
        "type": "hello",
        "alerts": [json.loads(r[0]) for r in rows],
        "traffic": list(S.traffic)[-180:],
        "launches": [public_launch(L) for L in S.launches[-12:]],
        "blocked": list(S.blocked),
        "autoblock": S.autoblock,
        "state": state_dict(),
        "score": scoreboard(),
        "model": read_model_metrics(),
    }


def state_dict() -> dict:
    return {"mode": S.mode, "params": S.params, "engine": S.engine,
            "pipeline_alive": time.time() - S.pipeline_seen < 5, "error": S.error}


def read_model_metrics():
    p = C.MODEL_DIR / "metrics.json"
    try:
        return json.loads(p.read_text()) if p.exists() else None
    except ValueError:
        return None


# ---------------------------------------------------------------- pipeline manager
def stop_pipeline():
    if S.proc and S.proc.poll() is None:
        S.proc.terminate()
        try:
            S.proc.wait(timeout=3)
        except subprocess.TimeoutExpired:
            S.proc.kill()
    S.proc = None


def start_pipeline(mode: str, params: dict):
    stop_pipeline()
    cmd = [sys.executable, "-m", "pipeline.run", "--source", mode, "--backend", C.BACKEND_URL]
    if params.get("iface"):
        cmd += ["--iface", params["iface"]]
    if params.get("path"):
        cmd += ["--path", params["path"]]
    if params.get("speed"):
        cmd += ["--speed", str(params["speed"])]
    log = open(C.DATA_DIR / "pipeline.log", "ab")
    S.proc = subprocess.Popen(cmd, cwd=str(ROOT), stdout=log, stderr=log)
    S.mode, S.params, S.error = mode, params, None


# ----------------------------------------------------------------- launch worker
def run_real_attack(kind: str, duration: float):
    from simulator import attacks
    attacks.run(kind, C.VICTIM_HOST, C.VICTIM_PORT, duration)


async def launch_worker():
    loop = asyncio.get_running_loop()
    while True:
        L = await launch_q.get()
        L["start"], L["status"] = time.time(), "running"
        await broadcast({"type": "launch", "launch": public_launch(L), "score": scoreboard()})
        try:
            if S.mode == "demo":
                S.attack = {"type": L["attack"], "src": C.DEMO_ATTACKER, "until": L["start"] + L["duration"]}
                await asyncio.sleep(L["duration"])
                S.attack = None
            else:
                await loop.run_in_executor(None, run_real_attack, L["attack"], L["duration"])
        except Exception as e:                                   # noqa: BLE001
            L["error"] = str(e)
        L["end"] = time.time()
        L["status"] = "error" if L.get("error") else "done"
        await broadcast({"type": "launch", "launch": public_launch(L), "score": scoreboard()})
        await asyncio.sleep(LAUNCH_GAP_S)


@asynccontextmanager
async def lifespan(_app):
    task = asyncio.create_task(launch_worker())
    start_pipeline(S.mode, {})
    yield
    task.cancel()
    stop_pipeline()


app = FastAPI(title="NetGuard", lifespan=lifespan)
app.mount("/static", StaticFiles(directory=str(ROOT / "frontend")), name="static")


@app.get("/")
def index():
    return FileResponse(ROOT / "frontend" / "index.html")


# ------------------------------------------------------------------- pipeline API
@app.get("/api/control")
def control():
    return {"blocked": list(S.blocked), "attack": S.attack, "whitelist": list(C.WHITELIST)}


@app.post("/api/pipeline")
async def pipeline_hello(body: dict):
    S.engine = body.get("engine", S.engine)
    S.error = body.get("error")
    S.pipeline_seen = time.time()
    await broadcast({"type": "state", "state": state_dict()})
    return {"ok": True}


@app.post("/traffic")
async def traffic(t: TrafficIn):
    S.pipeline_seen = time.time()
    d = t.model_dump()
    S.traffic.append(d)
    await broadcast({"type": "traffic", "traffic": d})
    return {"ok": True}


@app.post("/ingest")
async def ingest(a: AlertIn):
    d = a.model_dump()
    d["blocked"] = d["src"] in S.blocked
    # attribute to a launch: same attack type, inside its window
    attributed = False
    for L in reversed(S.launches):
        if not L["label"]:
            continue
        end = L.get("end") or time.time()
        if L.get("start") and L["start"] - 1 <= d["ts"] <= end + ATTRIBUTION_TAIL_S:
            attributed = True
            if L["label"] == d["label"] and L.get("latency") is None:
                L["latency"] = round(d["ts"] - L["start"], 2)
                L["detected_at"] = d["ts"]
                await broadcast({"type": "launch", "launch": public_launch(L), "score": scoreboard()})
            break
    d["attributed"] = attributed
    if not attributed:
        S.false_alarms += 1
    S.alert_count += 1
    cur = db.execute("INSERT INTO alerts(ts, src, label, severity, blob) VALUES (?,?,?,?,?)",
                     (d["ts"], d["src"], d["label"], d["severity"], "{}"))
    d["id"] = cur.lastrowid
    db.execute("UPDATE alerts SET blob=? WHERE id=?", (json.dumps(d), d["id"]))
    db.commit()
    await broadcast({"type": "alert", "alert": d, "score": scoreboard()})
    if S.autoblock and d["severity"] in ("HIGH", "CRITICAL") and d["src"] not in S.blocked:
        await block_ip(d["src"], auto=True)
    return {"ok": True, "id": d["id"]}


# -------------------------------------------------------------------- dashboard API
@app.post("/launch/{attack}")
async def launch(attack: str):
    if attack not in ATTACKS:
        raise HTTPException(404, "unknown attack")
    if S.mode not in ("demo", "live"):
        raise HTTPException(409, "Launch buttons work in Simulated or Live capture mode.")
    if launch_q.qsize() >= MAX_QUEUE:
        raise HTTPException(429, "Too many launches queued. Wait a moment.")
    spec = ATTACKS[attack]
    L = {"id": S.next_launch, "attack": attack, "title": spec["title"], "label": spec["label"],
         "duration": spec["duration"], "status": "queued", "start": None, "end": None,
         "latency": None, "detected_at": None, "error": None}
    S.next_launch += 1
    S.launches.append(L)
    await launch_q.put(L)
    await broadcast({"type": "launch", "launch": public_launch(L), "score": scoreboard()})
    return {"ok": True, "id": L["id"], "queued": launch_q.qsize()}


async def block_ip(ip: str, auto: bool = False):
    S.blocked[ip] = time.time()
    db_rows = db.execute("SELECT id, blob FROM alerts WHERE src=?", (ip,)).fetchall()
    for rid, blob in db_rows:
        d = json.loads(blob)
        d["blocked"] = True
        db.execute("UPDATE alerts SET blob=? WHERE id=?", (json.dumps(d), rid))
    db.commit()
    await broadcast({"type": "block", "ip": ip, "blocked": True, "auto": auto, "ts": time.time(),
                     "score": scoreboard()})


@app.post("/block/{ip}")
async def block(ip: str):
    if not re.fullmatch(r"[0-9a-fA-F:.]{3,45}", ip):
        raise HTTPException(400, "not an IP address")
    await block_ip(ip)
    return {"ok": True}


@app.post("/unblock/{ip}")
async def unblock(ip: str):
    S.blocked.pop(ip, None)
    await broadcast({"type": "block", "ip": ip, "blocked": False, "ts": time.time(), "score": scoreboard()})
    return {"ok": True}


@app.post("/api/autoblock/{flag}")
async def autoblock(flag: str):
    S.autoblock = flag == "on"
    await broadcast({"type": "autoblock", "autoblock": S.autoblock})
    return {"ok": True}


@app.post("/api/source")
async def set_source(s: SourceIn):
    if s.mode not in ("demo", "live", "pcap", "csv"):
        raise HTTPException(400, "unknown source")
    params: dict = {}
    if s.mode == "live" and s.iface:
        if not re.fullmatch(r"[\w .{}\-:()]{1,80}", s.iface):
            raise HTTPException(400, "bad interface name")
        params["iface"] = s.iface
    if s.mode in ("pcap", "csv"):
        if not s.path:
            raise HTTPException(400, "give a file name inside the data/ folder")
        full = (C.DATA_DIR / s.path).resolve()
        if C.DATA_DIR.resolve() not in full.parents or not full.is_file():
            raise HTTPException(400, f"file not found in data/: {s.path}")
        params["path"] = str(full)
        if s.speed:
            params["speed"] = s.speed
    S.attack = None
    start_pipeline(s.mode, params)
    await broadcast({"type": "state", "state": state_dict()})
    return {"ok": True}


@app.post("/api/reset")
async def reset():
    S.launches.clear()
    S.blocked.clear()
    S.traffic.clear()
    S.alert_count = S.false_alarms = 0
    db.execute("DELETE FROM alerts")
    db.commit()
    await broadcast(snapshot())
    return {"ok": True}


@app.get("/api/state")
def api_state():
    return snapshot()


@app.get("/api/alerts")
def api_alerts(limit: int = 50):
    rows = db.execute("SELECT blob FROM alerts ORDER BY id DESC LIMIT ?", (min(limit, 500),)).fetchall()
    return [json.loads(r[0]) for r in rows]


@app.get("/stats")
def stats():
    return scoreboard()


@app.websocket("/ws")
async def ws_endpoint(ws: WebSocket):
    await ws.accept()
    S.clients.add(ws)
    try:
        await ws.send_text(json.dumps(snapshot()))
        while True:
            await ws.receive_text()
    except WebSocketDisconnect:
        pass
    finally:
        S.clients.discard(ws)

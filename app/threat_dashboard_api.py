"""FastAPI router and real-time streaming pipeline for Threat Detection Dashboard.

Provides REST endpoints, database persistence, and WebSocket broadcasting for
Isolation Forest anomaly detection telemetry.
"""

from __future__ import annotations

import asyncio
import json
from typing import Any, Callable, Coroutine
from fastapi import APIRouter, Query
from pydantic import BaseModel, Field

from app.threat_detector import IsolationThreatDetector

router = APIRouter(prefix="/api/threat-dashboard", tags=["ThreatDashboard"])

_detector: IsolationThreatDetector | None = None


def get_detector() -> IsolationThreatDetector:
    global _detector
    if _detector is None:
        _detector = IsolationThreatDetector(
            contamination=0.01, random_state=42, training_samples=1000
        )
    return _detector


class _LazyDetectorProxy:
    def __getattr__(self, name: str) -> Any:
        return getattr(get_detector(), name)


detector = _LazyDetectorProxy()

_broadcast_callback: Callable[[dict[str, Any]], Coroutine[Any, Any, None]] | None = None
_db_context_fn: Callable[[], Any] | None = None
_stream_task: asyncio.Task[None] | None = None
_stream_active: bool = False
_stream_interval: float = 1.0


def set_broadcaster(cb: Callable[[dict[str, Any]], Coroutine[Any, Any, None]]) -> None:
    global _broadcast_callback
    _broadcast_callback = cb


def set_db_provider(db_fn: Callable[[], Any]) -> None:
    global _db_context_fn
    _db_context_fn = db_fn


def init_db_tables(conn: Any) -> None:
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS threat_detector_logs (
            id TEXT PRIMARY KEY,
            ts DOUBLE PRECISION,
            time_step INTEGER,
            packet_size DOUBLE PRECISION,
            src_port INTEGER,
            dst_port INTEGER,
            protocol TEXT,
            protocol_code INTEGER,
            is_anomaly INTEGER,
            anomaly_score DOUBLE PRECISION,
            confidence DOUBLE PRECISION,
            severity TEXT,
            reasons TEXT,
            action_taken TEXT
        )
        """
    )
    conn.execute("CREATE INDEX IF NOT EXISTS idx_tdl_ts ON threat_detector_logs(ts)")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_tdl_anomaly ON threat_detector_logs(is_anomaly)")


async def broadcast_event(payload: dict[str, Any]) -> None:
    if _broadcast_callback is not None:
        try:
            await _broadcast_callback(payload)
        except Exception:
            pass


def record_log(result: dict[str, Any]) -> None:
    if _db_context_fn is None:
        return
    with _db_context_fn() as conn:
        conn.execute(
            """
            INSERT INTO threat_detector_logs (
                id, ts, time_step, packet_size, src_port, dst_port,
                protocol, protocol_code, is_anomaly, anomaly_score,
                confidence, severity, reasons, action_taken
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                ts=excluded.ts, time_step=excluded.time_step,
                packet_size=excluded.packet_size, src_port=excluded.src_port,
                dst_port=excluded.dst_port, protocol=excluded.protocol,
                protocol_code=excluded.protocol_code, is_anomaly=excluded.is_anomaly,
                anomaly_score=excluded.anomaly_score, confidence=excluded.confidence,
                severity=excluded.severity, reasons=excluded.reasons,
                action_taken=excluded.action_taken
            """,
            (
                result["id"],
                result["ts"],
                result["time_step"],
                result["packet_size"],
                result["src_port"],
                result["dst_port"],
                result["protocol"],
                result["protocol_code"],
                1 if result["is_anomaly"] else 0,
                result["anomaly_score"],
                result["confidence"],
                result["severity"],
                json.dumps(result["reasons"]),
                result["action_taken"],
            ),
        )


async def execute_step(force_anomaly: bool | None = None) -> dict[str, Any]:
    sample = detector.simulate_data_point(force_anomaly=force_anomaly)
    analyzed = detector.analyze_point(sample)
    record_log(analyzed)
    await broadcast_event({
        "type": "threat_stream_point",
        "data": analyzed,
    })
    if analyzed["is_anomaly"]:
        await broadcast_event({
            "type": "threat_stream_alert",
            "alert": analyzed,
        })
    return analyzed


async def ingest_flow_telemetry(flow: Any) -> dict[str, Any]:
    sample = detector.flow_to_point(flow)
    analyzed = detector.analyze_point(sample)
    record_log(analyzed)
    await broadcast_event({
        "type": "threat_stream_point",
        "data": analyzed,
    })
    if analyzed["is_anomaly"]:
        await broadcast_event({
            "type": "threat_stream_alert",
            "alert": analyzed,
        })
    return analyzed


async def _stream_worker() -> None:
    global _stream_active
    while _stream_active:
        try:
            await execute_step()
        except asyncio.CancelledError:
            break
        except Exception:
            pass
        await asyncio.sleep(_stream_interval)


class SimulateRequest(BaseModel):
    force_anomaly: bool | None = None


class StreamRequest(BaseModel):
    interval: float = Field(default=1.0, ge=0.2, le=10.0)


@router.get("/stats")
async def get_stats() -> dict[str, Any]:
    if _db_context_fn is None:
        return {"status": "uninitialized"}

    with _db_context_fn() as conn:
        row_tot = conn.execute("SELECT COUNT(*) AS count FROM threat_detector_logs").fetchone()
        total = int(row_tot["count"]) if row_tot else 0
        row_anom = conn.execute("SELECT COUNT(*) AS count FROM threat_detector_logs WHERE is_anomaly=1").fetchone()
        anomalies = int(row_anom["count"]) if row_anom else 0
        row_avg = conn.execute("SELECT AVG(packet_size) AS average FROM (SELECT packet_size FROM threat_detector_logs ORDER BY ts DESC LIMIT 50)").fetchone()
        avg_packet = float(row_avg["average"]) if (row_avg and row_avg["average"] is not None) else 0.0
        
        severity_rows = conn.execute("SELECT severity, COUNT(*) AS count FROM threat_detector_logs GROUP BY severity").fetchall()
        protocol_rows = conn.execute("SELECT protocol, COUNT(*) AS count FROM threat_detector_logs GROUP BY protocol").fetchall()

    severity_counts = {row["severity"]: row["count"] for row in severity_rows}
    protocol_counts = {row["protocol"]: row["count"] for row in protocol_rows}

    return {
        "total_samples": total,
        "anomalies_detected": anomalies,
        "anomaly_rate": round((anomalies / total) * 100, 2) if total else 0.0,
        "avg_packet_size": round(avg_packet, 1),
        "stream_active": _stream_active,
        "stream_interval": _stream_interval,
        "model_status": "Isolation Forest Active",
        "model_contamination": detector.contamination,
        "training_samples": detector.training_samples,
        "severity_breakdown": severity_counts,
        "protocol_breakdown": protocol_counts,
    }


@router.get("/logs")
async def get_logs(
    limit: int = Query(50, ge=1, le=200),
    offset: int = Query(0, ge=0),
    is_anomaly: bool | None = None,
    severity: str | None = None,
    protocol: str | None = None,
) -> dict[str, Any]:
    if _db_context_fn is None:
        return {"items": [], "total": 0}

    query = "SELECT * FROM threat_detector_logs WHERE 1=1"
    params: list[Any] = []

    if is_anomaly is not None:
        query += " AND is_anomaly = ?"
        params.append(1 if is_anomaly else 0)
    if severity:
        query += " AND severity = ?"
        params.append(severity.upper())
    if protocol:
        query += " AND UPPER(protocol) = ?"
        params.append(protocol.upper())

    count_query = query.replace("SELECT *", "SELECT COUNT(*) AS count")

    query += " ORDER BY ts DESC LIMIT ? OFFSET ?"
    params_for_query = list(params) + [limit, offset]

    with _db_context_fn() as conn:
        row_cnt = conn.execute(count_query, params).fetchone()
        total = int(row_cnt["count"]) if row_cnt else 0
        rows = conn.execute(query, params_for_query).fetchall()

    items = []
    for r in rows:
        d = dict(r)
        d["reasons"] = json.loads(d["reasons"]) if d.get("reasons") else []
        d["is_anomaly"] = bool(d["is_anomaly"])
        items.append(d)

    return {"items": items, "total": total}


@router.post("/simulate")
async def simulate_point(req: SimulateRequest | None = None) -> dict[str, Any]:
    req_data = req or SimulateRequest()
    return await execute_step(force_anomaly=req_data.force_anomaly)


@router.post("/stream/start")
async def start_stream(req: StreamRequest | None = None) -> dict[str, Any]:
    global _stream_active, _stream_interval, _stream_task
    req_data = req or StreamRequest()
    _stream_interval = req_data.interval
    if not _stream_active:
        _stream_active = True
        _stream_task = asyncio.create_task(_stream_worker())
    return {"status": "started", "active": True, "interval": _stream_interval}


@router.post("/stream/stop")
async def stop_stream() -> dict[str, Any]:
    global _stream_active, _stream_task
    _stream_active = False
    if _stream_task and not _stream_task.done():
        _stream_task.cancel()
        _stream_task = None
    return {"status": "stopped", "active": False}


@router.delete("/logs")
async def clear_logs() -> dict[str, Any]:
    if _db_context_fn:
        with _db_context_fn() as conn:
            conn.execute("DELETE FROM threat_detector_logs")
    return {"status": "cleared"}


@router.get("/export")
async def export_logs() -> list[dict[str, Any]]:
    if _db_context_fn is None:
        return []
    with _db_context_fn() as conn:
        rows = conn.execute("SELECT * FROM threat_detector_logs ORDER BY ts DESC").fetchall()
    items = []
    for r in rows:
        d = dict(r)
        d["reasons"] = json.loads(d["reasons"]) if d.get("reasons") else []
        d["is_anomaly"] = bool(d["is_anomaly"])
        items.append(d)
    return items

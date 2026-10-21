from __future__ import annotations

import asyncio
import json
from typing import Any

from fastapi import APIRouter, Body, HTTPException, Query

from backend.blast_radius.engine import compute_blast_radius
from backend.blast_radius.models import Asset, BlastResult, Link, TopologyPayload
from backend.blast_radius.topology import ensure_blast_schema, load_assets, load_links, seed_demo_topology, validate_topology

router = APIRouter(prefix="/api/blast")


def _db_state() -> Any:
    from app.main import db

    return db()


def _blast_service() -> Any:
    import app.main

    return app.main.app.state.blast_service


@router.get("/topology")
def get_topology() -> dict[str, list[dict[str, Any]]]:
    with _db_state() as conn:
        ensure_blast_schema(conn)
        seed_demo_topology(conn)
        return {"assets": load_assets(conn), "links": load_links(conn)}


@router.put("/topology")
def put_topology(payload: dict[str, Any]) -> dict[str, list[dict[str, Any]]]:
    try:
        assets, links = validate_topology(payload)
    except ValueError as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from exc
    with _db_state() as conn:
        ensure_blast_schema(conn)
        conn.execute("DELETE FROM links")
        conn.execute("DELETE FROM assets")
        for asset in assets:
            conn.execute(
                "INSERT INTO assets (id, name, ip, zone, criticality, role, modeled, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                (asset["id"], asset["name"], asset["ip"], asset["zone"], int(asset["criticality"]), asset["role"], int(bool(asset.get("modeled", False))), asset.get("status", "healthy")),
            )
        for link in links:
            conn.execute(
                "INSERT INTO links (id, src, dst, ports, protocol, trust, weight, bidirectional, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (int(link["id"]), link["src"], link["dst"], json.dumps(link["ports"]), link["protocol"], link["trust"], float(link["weight"]), int(bool(link["bidirectional"])), int(bool(link["active"]))),
            )
        conn.commit()
    return {"assets": assets, "links": links}


@router.get("/radius/{asset_id}")
def get_radius(asset_id: str, quarantined: str = Query(default="")) -> dict[str, Any]:
    with _db_state() as conn:
        ensure_blast_schema(conn)
        assets = load_assets(conn)
        links = load_links(conn)
    blocked = {item.strip() for item in quarantined.split(",") if item.strip()}
    result = compute_blast_radius(asset_id, assets, links, blocked)
    return result


@router.get("/incidents")
def list_incidents(limit: int = 20) -> list[dict[str, Any]]:
    with _db_state() as conn:
        rows = conn.execute("SELECT * FROM blast_incidents ORDER BY ts_hit DESC LIMIT ?", (max(1, min(limit, 100)),)).fetchall()
    return [dict(row) for row in rows]


@router.get("/incidents/{incident_id}")
def incident_detail(incident_id: str) -> dict[str, Any]:
    with _db_state() as conn:
        row = conn.execute("SELECT * FROM blast_incidents WHERE id = ?", (incident_id,)).fetchone()
        if row is None:
            raise HTTPException(status_code=404, detail="Incident not found")
    return dict(row)


@router.post("/simulate")
async def simulate_blast(payload: dict[str, Any] | None = Body(default=None)) -> dict[str, Any]:
    item = payload or {}
    asset_id = str(item.get("asset_id", "dmz-server"))
    attack_type = str(item.get("attack_type", "PortScan"))
    service = _blast_service()
    if service is None:
        raise HTTPException(status_code=503, detail="Blast service unavailable")
    try:
        return await service.simulate_demo(asset_id, attack_type)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc


@router.post("/reset")
async def reset_blast() -> dict[str, Any]:
    service = _blast_service()
    if service is None:
        raise HTTPException(status_code=503, detail="Blast service unavailable")
    await service.reset()
    return {"ok": True, "restored": 1}

from __future__ import annotations

import asyncio
import json
import logging
import time
import uuid
from typing import Any, Callable

from backend.blast_radius.engine import compute_blast_radius
from backend.blast_radius.topology import load_assets, load_links, seed_demo_topology

logger = logging.getLogger("netguard.blast")


class BlastService:
    def __init__(self, broadcast: Callable[[dict[str, Any]], Any], db_factory: Callable[[], Any]) -> None:
        self.broadcast = broadcast
        self.db_factory = db_factory
        self.last_hit: dict[str, float] = {}

    def _resolve_asset_by_ip(self, target_ip: str | None, auto_create: bool = True) -> dict[str, Any] | None:
        if not target_ip:
            return None
        with self.db_factory() as conn:
            row = conn.execute("SELECT * FROM assets WHERE ip = ? LIMIT 1", (target_ip,)).fetchone()
            if row is None and auto_create:
                asset_id = f"host-{str(target_ip).replace('.', '-').replace(':', '-')}"
                name = f"Host ({target_ip})"
                s_ip = str(target_ip)
                zone = "Internal" if (s_ip.startswith("10.") or s_ip.startswith("192.168.") or s_ip.startswith("172.") or s_ip.startswith("127.")) else "External"
                role = "gateway" if s_ip.endswith(".1") else ("desktop" if zone == "Internal" else "remote")
                criticality = 4 if role == "gateway" else 2
                conn.execute(
                    "INSERT INTO assets (id, name, ip, zone, criticality, role, modeled, status) VALUES (?, ?, ?, ?, ?, ?, 1, 'healthy') ON CONFLICT(id) DO NOTHING",
                    (asset_id, name, s_ip, zone, criticality, role),
                )
                gw = conn.execute("SELECT id FROM assets WHERE role = 'gateway' LIMIT 1").fetchone()
                if gw and gw["id"] != asset_id:
                    link_id = abs(hash((gw["id"], asset_id))) % 1000000 + 500
                    conn.execute(
                        "INSERT INTO links (id, src, dst, ports, protocol, trust, weight, bidirectional, active) VALUES (?, ?, ?, ?, ?, ?, ?, 1, 1) ON CONFLICT(id) DO NOTHING",
                        (link_id, gw["id"], asset_id, json.dumps([80, 443]), "tcp", "medium", 1.0),
                    )
                conn.commit()
                row = conn.execute("SELECT * FROM assets WHERE id = ? LIMIT 1", (asset_id,)).fetchone()

            if row is None:
                return None
            return {
                "id": row["id"],
                "name": row["name"],
                "ip": row["ip"],
                "zone": row["zone"],
                "criticality": int(row["criticality"]),
                "role": row["role"],
                "modeled": bool(row["modeled"]),
                "status": row["status"],
            }

    def _compute_radius_for_asset(self, asset_id: str, quarantined: set[str] | None = None) -> dict[str, Any]:
        with self.db_factory() as conn:
            seed_demo_topology(conn)
            assets = load_assets(conn)
            links = load_links(conn)
            result = compute_blast_radius(asset_id, assets, links, quarantined or set())
            return result

    async def on_anomaly(self, event: dict[str, Any]) -> dict[str, Any] | None:
        target_ip = event.get("dst") or event.get("target") or event.get("source_ip")
        src_ip = event.get("src") or event.get("source_ip")
        if src_ip:
            self._resolve_asset_by_ip(str(src_ip), auto_create=True)
        asset = self._resolve_asset_by_ip(str(target_ip) if target_ip else None, auto_create=True)
        if asset is None:
            return None
        now = time.time()
        if self.last_hit.get(asset["id"]) and (now - self.last_hit[asset["id"]]) < 2:
            return None
        self.last_hit[asset["id"]] = now
        try:
            with self.db_factory() as conn:
                conn.execute("UPDATE assets SET status = 'targeted' WHERE id = ?", (asset["id"],))
                assets = load_assets(conn)
                links = load_links(conn)
                result = compute_blast_radius(asset["id"], assets, links, set())
                incident_id = uuid.uuid4().hex
                conn.execute(
                    "INSERT INTO blast_incidents (id, ts_hit, origin_asset, attack_type, mitre_id, source_ip, before_json) VALUES (?, ?, ?, ?, ?, ?, ?)",
                    (
                        incident_id,
                        now,
                        asset["id"],
                        event.get("label", "PortScan"),
                        event.get("mitre", "T1046"),
                        event.get("src") or event.get("source_ip"),
                        json.dumps(result),
                    ),
                )
            payload = {
                "type": "blast.computed",
                "incident_id": incident_id,
                "ts": now,
                "origin": asset["id"],
                "attack": {"type": event.get("label", "PortScan"), "mitre": event.get("mitre", "T1046"), "source_ip": event.get("src") or event.get("source_ip")},
                "nodes": result["nodes"],
                "edges": result["edges"],
                "summary": result["summary"],
            }
            await self.broadcast(payload)
            return payload
        except Exception:
            logger.exception("Blast radius anomaly hook failed")
            return None

    async def on_auto_block(self, event: dict[str, Any]) -> dict[str, Any] | None:
        target_ip = event.get("ip") or event.get("asset_ip") or event.get("target")
        asset = self._resolve_asset_by_ip(str(target_ip) if target_ip else None)
        if asset is None:
            return None
        try:
            with self.db_factory() as conn:
                conn.execute("UPDATE assets SET status = 'quarantined' WHERE id = ?", (asset["id"],))
                conn.execute("UPDATE links SET active = 0 WHERE src = ? OR dst = ?", (asset["id"], asset["id"]))
                assets = load_assets(conn)
                links = load_links(conn)
                severed_edges = [link["id"] for link in links if link["src"] == asset["id"] or link["dst"] == asset["id"]]
                before = compute_blast_radius(asset["id"], assets, links, set())
                after = compute_blast_radius(asset["id"], assets, links, {asset["id"]})
                ts_hit = time.time()
                incident_id = uuid.uuid4().hex
                reduction = 100.0
                if before["summary"].get("assets_at_risk", 0):
                    reduction = max(0.0, 100.0 * (1.0 - (after["summary"].get("assets_at_risk", 0) / before["summary"].get("assets_at_risk", 1))))
                row = conn.execute("SELECT id FROM blast_incidents WHERE origin_asset = ? ORDER BY ts_hit DESC LIMIT 1", (asset["id"],)).fetchone()
                if row is not None:
                    incident_id = row["id"]
                    conn.execute(
                        "UPDATE blast_incidents SET ts_contained = ?, after_json = ?, radius_reduction = ? WHERE id = ?",
                        (ts_hit, json.dumps(after), reduction, incident_id),
                    )
                else:
                    conn.execute(
                        "INSERT INTO blast_incidents (id, ts_hit, ts_contained, origin_asset, attack_type, mitre_id, source_ip, before_json, after_json, radius_reduction) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                        (incident_id, ts_hit, ts_hit, asset["id"], event.get("label", "PortScan"), "T1046", target_ip, json.dumps(before), json.dumps(after), reduction),
                    )
            payload = {
                "type": "blast.contained",
                "incident_id": incident_id,
                "ts": time.time(),
                "severed_edges": severed_edges,
                "quarantined": [asset["id"]],
                "after": after,
                "radius_reduction_pct": round(reduction, 2),
                "time_to_contain_ms": 1800,
            }
            await self.broadcast(payload)
            return payload
        except Exception:
            logger.exception("Blast radius containment hook failed")
            return None

    async def reset(self) -> None:
        with self.db_factory() as conn:
            conn.execute("UPDATE assets SET status = 'healthy'")
            conn.execute("UPDATE links SET active = 1")
            conn.execute("UPDATE blast_incidents SET ts_contained = NULL, after_json = NULL, radius_reduction = NULL")
        await self.broadcast({"type": "blast.reset"})

    async def simulate_demo(self, asset_id: str, attack_type: str = "PortScan") -> dict[str, Any]:
        with self.db_factory() as conn:
            seed_demo_topology(conn)
            asset_row = conn.execute("SELECT * FROM assets WHERE id = ?", (asset_id,)).fetchone()
            if asset_row is None:
                raise ValueError(f"Unknown asset id: {asset_id}")
        before_event = {"dst": asset_row["ip"], "label": attack_type, "mitre": "T1046", "src": "198.51.100.23"}
        await self.on_anomaly(before_event)
        await asyncio.sleep(0.4)
        result = self._compute_radius_for_asset(asset_id)
        await self.broadcast({"type": "blast.computed", "incident_id": uuid.uuid4().hex, "ts": time.time(), "origin": asset_id, "attack": {"type": attack_type, "mitre": "T1046", "source_ip": "198.51.100.23"}, "nodes": result["nodes"], "edges": result["edges"], "summary": result["summary"]})
        await asyncio.sleep(1.8)
        await self.on_auto_block({"ip": asset_row["ip"], "label": attack_type, "asset_ip": asset_row["ip"]})
        return {"status": "ok", "asset_id": asset_id, "attack_type": attack_type}

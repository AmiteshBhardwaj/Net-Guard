from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Any

DEFAULT_ASSETS = [
    {"id": "border-gateway", "name": "Border Gateway", "ip": "192.168.1.1", "zone": "Edge", "criticality": 5, "role": "gateway", "modeled": True, "status": "healthy"},
    {"id": "dmz-server", "name": "DMZ Target Server", "ip": "10.0.0.15", "zone": "DMZ", "criticality": 5, "role": "target", "modeled": True, "status": "healthy"},
    {"id": "core-cluster", "name": "Core Cluster Node", "ip": "10.0.0.80", "zone": "Internal", "criticality": 5, "role": "cluster", "modeled": True, "status": "healthy"},
    {"id": "db-primary", "name": "Database", "ip": "10.0.0.25", "zone": "Internal", "criticality": 4, "role": "database", "modeled": True, "status": "healthy"},
    {"id": "auth-server", "name": "Auth Server", "ip": "10.0.0.40", "zone": "Internal", "criticality": 4, "role": "auth", "modeled": True, "status": "healthy"},
    {"id": "backup-store", "name": "Backup Store", "ip": "10.0.0.55", "zone": "Internal", "criticality": 3, "role": "backup", "modeled": True, "status": "healthy"},
    {"id": "workstation-01", "name": "Employee Workstation", "ip": "10.0.0.70", "zone": "Internal", "criticality": 2, "role": "desktop", "modeled": True, "status": "healthy"},
]

DEFAULT_LINKS = [
    {"id": 1, "src": "border-gateway", "dst": "dmz-server", "ports": [80, 443], "protocol": "tcp", "trust": "high", "weight": 1.2, "bidirectional": True, "active": True},
    {"id": 2, "src": "dmz-server", "dst": "core-cluster", "ports": [445, 3389], "protocol": "tcp", "trust": "medium", "weight": 1.5, "bidirectional": True, "active": True},
    {"id": 3, "src": "core-cluster", "dst": "db-primary", "ports": [1433, 3306], "protocol": "tcp", "trust": "high", "weight": 1.8, "bidirectional": True, "active": True},
    {"id": 4, "src": "core-cluster", "dst": "auth-server", "ports": [389, 636], "protocol": "tcp", "trust": "medium", "weight": 1.3, "bidirectional": True, "active": True},
    {"id": 5, "src": "db-primary", "dst": "backup-store", "ports": [445], "protocol": "tcp", "trust": "low", "weight": 1.1, "bidirectional": True, "active": True},
    {"id": 6, "src": "auth-server", "dst": "workstation-01", "ports": [3389], "protocol": "tcp", "trust": "low", "weight": 1.0, "bidirectional": True, "active": True},
    {"id": 7, "src": "workstation-01", "dst": "dmz-server", "ports": [22, 8080], "protocol": "tcp", "trust": "medium", "weight": 0.9, "bidirectional": True, "active": True},
    {"id": 8, "src": "border-gateway", "dst": "workstation-01", "ports": [443], "protocol": "tcp", "trust": "low", "weight": 0.8, "bidirectional": True, "active": True},
]


def ensure_blast_schema(connection: Any) -> None:
    connection.execute(
        """
        CREATE TABLE IF NOT EXISTS assets (
            id TEXT PRIMARY KEY,
            name TEXT,
            ip TEXT,
            zone TEXT,
            criticality INTEGER,
            role TEXT,
            modeled INTEGER DEFAULT 0,
            status TEXT DEFAULT 'healthy'
        )
        """
    )
    connection.execute(
        """
        CREATE TABLE IF NOT EXISTS links (
            id INTEGER PRIMARY KEY,
            src TEXT,
            dst TEXT,
            ports TEXT,
            protocol TEXT,
            trust TEXT,
            weight DOUBLE PRECISION,
            bidirectional INTEGER DEFAULT 1,
            active INTEGER DEFAULT 1
        )
        """
    )
    connection.execute(
        """
        CREATE TABLE IF NOT EXISTS blast_incidents (
            id TEXT PRIMARY KEY,
            ts_hit DOUBLE PRECISION,
            ts_contained DOUBLE PRECISION,
            origin_asset TEXT,
            attack_type TEXT,
            mitre_id TEXT,
            source_ip TEXT,
            before_json TEXT,
            after_json TEXT,
            radius_reduction DOUBLE PRECISION
        )
        """
    )


def seed_demo_topology(connection: Any) -> int:
    ensure_blast_schema(connection)
    assets_rows = connection.execute("SELECT COUNT(*) AS count FROM assets").fetchone()["count"]
    if assets_rows:
        return 0
    for asset in DEFAULT_ASSETS:
        connection.execute(
            "INSERT INTO assets (id, name, ip, zone, criticality, role, modeled, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            (asset["id"], asset["name"], asset["ip"], asset["zone"], asset["criticality"], asset["role"], int(bool(asset["modeled"])), asset["status"]),
        )
    for link in DEFAULT_LINKS:
        connection.execute(
            "INSERT INTO links (id, src, dst, ports, protocol, trust, weight, bidirectional, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (link["id"], link["src"], link["dst"], json.dumps(link["ports"]), link["protocol"], link["trust"], link["weight"], int(bool(link["bidirectional"])), int(bool(link["active"]))),
        )
    connection.commit()
    return len(DEFAULT_ASSETS)


def load_assets(connection: Any) -> list[dict[str, object]]:
    rows = connection.execute("SELECT * FROM assets ORDER BY name").fetchall()
    return [
        {
            "id": row["id"],
            "name": row["name"],
            "ip": row["ip"],
            "zone": row["zone"],
            "criticality": int(row["criticality"]),
            "role": row["role"],
            "modeled": bool(row["modeled"]),
            "status": row["status"],
        }
        for row in rows
    ]


def load_links(connection: Any) -> list[dict[str, object]]:
    rows = connection.execute("SELECT * FROM links ORDER BY id").fetchall()
    links: list[dict[str, object]] = []
    for row in rows:
        links.append(
            {
                "id": int(row["id"]),
                "src": row["src"],
                "dst": row["dst"],
                "ports": json.loads(row["ports"] or "[]"),
                "protocol": row["protocol"],
                "trust": row["trust"],
                "weight": float(row["weight"]),
                "bidirectional": bool(row["bidirectional"]),
                "active": bool(row["active"]),
            }
        )
    return links


def validate_topology(payload: dict[str, object]) -> tuple[list[dict[str, object]], list[dict[str, object]]]:
    assets = payload.get("assets") or []
    links = payload.get("links") or []
    seen_ids: set[str] = set()
    for asset in assets:
        asset_id = str(asset["id"])
        if asset_id in seen_ids:
            raise ValueError(f"Duplicate asset id: {asset_id}")
        seen_ids.add(asset_id)
        if int(asset["criticality"]) < 1 or int(asset["criticality"]) > 5:
            raise ValueError(f"Asset {asset_id} criticality must be between 1 and 5")
        if str(asset["id"]) == str(asset["ip"]) or not str(asset["ip"]).strip():
            raise ValueError(f"Invalid asset IP for {asset_id}")
    valid_assets = [dict(asset) for asset in assets]
    safe_links: list[dict[str, object]] = []
    asset_ids = {str(asset["id"]) for asset in valid_assets}
    for link in links:
        src = str(link["src"])
        dst = str(link["dst"])
        if src == dst:
            raise ValueError(f"Self-link is not allowed: {src}")
        if src not in asset_ids or dst not in asset_ids:
            raise ValueError(f"Link references unknown asset: {src} -> {dst}")
        if "ports" not in link:
            link["ports"] = [80]
        if not isinstance(link["ports"], list):
            raise ValueError(f"Ports for {src}->{dst} must be a list")
        safe_links.append({
            "id": int(link.get("id", 0)),
            "src": src,
            "dst": dst,
            "ports": [int(port) for port in link["ports"]],
            "protocol": str(link.get("protocol", "tcp")),
            "trust": str(link.get("trust", "medium")),
            "weight": float(link.get("weight", 1.0)),
            "bidirectional": bool(link.get("bidirectional", True)),
            "active": bool(link.get("active", True)),
        })
    return valid_assets, safe_links


def main() -> int:
    if len(sys.argv) < 2 or sys.argv[1] != "seed":
        print("Usage: python -m backend.blast_radius.topology seed")
        return 1
    from app.config import DB_PATH
    from app.main import db

    with db() as conn:
        seeded = seed_demo_topology(conn)
    print(f"Seeded {seeded} assets into {DB_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

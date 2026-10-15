from __future__ import annotations

from typing import Any, Literal

from pydantic import BaseModel, Field


class Asset(BaseModel):
    id: str
    name: str
    ip: str
    zone: str
    criticality: int = Field(..., ge=1, le=5)
    role: str
    modeled: bool = False
    status: str = "healthy"


class Link(BaseModel):
    id: int | None = None
    src: str
    dst: str
    ports: list[int] = Field(default_factory=list)
    protocol: str = "tcp"
    trust: Literal["high", "medium", "low"] = "medium"
    weight: float = 1.0
    bidirectional: bool = True
    active: bool = True


class BlastNode(BaseModel):
    id: str
    name: str
    ip: str
    zone: str
    criticality: int
    hop: int
    ring: str
    risk: float
    status: str
    modeled: bool
    why_reachable: str
    path: list[str]
    path_ports: list[int]


class BlastEdge(BaseModel):
    src: str
    dst: str
    ports: list[int]
    trust: str
    risk: float
    active: bool


class BlastSummary(BaseModel):
    assets_at_risk: int
    total_assets: int
    highest_risk_asset: str | None = None
    likely_next_target: str | None = None
    likelihood_pct: float | None = None
    crown_jewels_exposed: int = 0
    max_hop: int = 0


class BlastResult(BaseModel):
    origin_id: str
    nodes: list[BlastNode]
    edges: list[BlastEdge]
    summary: BlastSummary


class TopologyPayload(BaseModel):
    assets: list[Asset]
    links: list[Link]


class IncidentEvent(BaseModel):
    asset_id: str
    attack_type: str = "PortScan"
    source_ip: str | None = None
    mitre_id: str | None = None


class BlastIncident(BaseModel):
    id: str
    ts_hit: float
    ts_contained: float | None = None
    origin_asset: str
    attack_type: str
    mitre_id: str | None = None
    source_ip: str | None = None
    before_json: str
    after_json: str | None = None
    radius_reduction: float | None = None


class ResetResponse(BaseModel):
    ok: bool = True
    restored: int = 0

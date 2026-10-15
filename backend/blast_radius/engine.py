from __future__ import annotations

import heapq
from collections import defaultdict
from typing import Any

from backend.blast_radius.models import BlastEdge, BlastNode, BlastResult, BlastSummary

TRUST_FACTOR = {"high": 1.0, "medium": 0.7, "low": 0.4}


def _clamp(value: float, minimum: float = 0.0, maximum: float = 1.0) -> float:
    return max(minimum, min(maximum, value))


def _link_descriptor(link: dict[str, Any], src_asset: dict[str, Any], dst_asset: dict[str, Any]) -> str:
    ports = link.get("ports") or []
    port_text = ", ".join(str(port) for port in ports[:3]) if ports else "any"
    return f"{src_asset['name']} -> {dst_asset['name']} over {link.get('protocol', 'tcp')}/{port_text}, {link.get('trust', 'medium')} trust link"


def _build_node(asset: dict[str, Any], hop: int, ring: str, risk: float, path: list[str], path_ports: list[int], why: str) -> dict[str, Any]:
    return {
        "id": asset["id"],
        "name": asset["name"],
        "ip": asset["ip"],
        "zone": asset["zone"],
        "criticality": int(asset["criticality"]),
        "hop": hop,
        "ring": ring,
        "risk": round(_clamp(risk), 4),
        "status": asset.get("status", "healthy"),
        "modeled": bool(asset.get("modeled", False)),
        "why_reachable": why,
        "path": path,
        "path_ports": sorted(set(path_ports)),
    }


def compute_blast_radius(origin_id: str, assets: list[dict[str, Any]], links: list[dict[str, Any]], quarantined: set[str] | None = None) -> dict[str, Any]:
    """Compute the reachable blast radius from a trusted asset."""
    quarantined = quarantined or set()
    asset_map = {asset["id"]: asset for asset in assets}
    if origin_id not in asset_map:
        return {"origin_id": origin_id, "nodes": [], "edges": [], "summary": {"assets_at_risk": 0, "total_assets": len(assets), "highest_risk_asset": None, "likely_next_target": None, "likelihood_pct": 0.0, "crown_jewels_exposed": 0, "max_hop": 0}}

    filtered_links = []
    quarantined_ids = set(quarantined)
    for link in links:
        if not link.get("active", True):
            continue
        if link.get("src") in quarantined_ids or link.get("dst") in quarantined_ids:
            continue
        if link.get("src") == link.get("dst"):
            continue
        if link.get("src") not in asset_map or link.get("dst") not in asset_map:
            continue
        filtered_links.append(link)

    adjacency: dict[str, list[tuple[float, str, dict[str, Any]]]] = defaultdict(list)
    for link in filtered_links:
        src_asset = asset_map[link["src"]]
        dst_asset = asset_map[link["dst"]]
        cost = 1.0 / (float(link.get("weight", 1.0)) * TRUST_FACTOR.get(link.get("trust", "medium"), 0.7))
        adjacency[link["src"]].append((cost, link["dst"], link))
        if bool(link.get("bidirectional", True)):
            adjacency[link["dst"]].append((cost, link["src"], {**link, "src": link["dst"], "dst": link["src"]}))

    distances: dict[str, float] = {origin_id: 0.0}
    previous: dict[str, tuple[str | None, dict[str, Any] | None]] = {origin_id: (None, None)}
    queue: list[tuple[float, str]] = [(0.0, origin_id)]

    while queue:
        cost, node_id = heapq.heappop(queue)
        if cost > distances.get(node_id, float("inf")):
            continue
        for step_cost, nxt, link in adjacency.get(node_id, []):
            new_cost = cost + step_cost
            if new_cost < distances.get(nxt, float("inf")):
                distances[nxt] = new_cost
                previous[nxt] = (node_id, link)
                heapq.heappush(queue, (new_cost, nxt))

    reachable = {asset_id: dist for asset_id, dist in distances.items() if asset_id != origin_id}
    nodes: list[dict[str, Any]] = []
    edges: list[dict[str, Any]] = []
    relevant_paths: dict[str, list[str]] = {}
    for asset_id in sorted(reachable, key=lambda item: (distances[item], item)):
        hop = 0
        current = asset_id
        path = [asset_id]
        while previous.get(current, (None, None))[0] is not None:
            prev, _ = previous[current]
            path.append(prev)
            current = prev
            hop += 1
        path.reverse()
        relevant_paths[asset_id] = path
        hop = max(1, hop)
        ring = "ORIGIN" if asset_id == origin_id else ("HOP_1" if hop == 1 else "HOP_2" if hop == 2 else "HOP_3_PLUS")
        path_links = []
        current_id = asset_id
        while previous.get(current_id, (None, None))[0] is not None:
            prev_id, link = previous[current_id]
            if link is not None:
                path_links.append(link)
            current_id = prev_id
        path_links.reverse()
        path_ports = []
        for link in path_links:
            for port in link.get("ports", []):
                path_ports.append(int(port))
        if not path_links:
            why = "Directly linked from origin host"
        else:
            first = path_links[0]
            first_src = first.get("src")
            first_dst = first.get("dst")
            src_asset = asset_map.get(first_src, {})
            dst_asset = asset_map.get(first_dst, {})
            trust = first.get("trust", "medium")
            port_text = ", ".join(str(port) for port in first.get("ports", [])[:3]) if first.get("ports") else "any"
            why = f"Reachable via {src_asset.get('name', first_src)} -> {dst_asset.get('name', first_dst)} over {first.get('protocol', 'tcp')}/{port_text}, {trust} trust link"
        path_trust = 1.0
        for link in path_links:
            path_trust *= TRUST_FACTOR.get(link.get("trust", "medium"), 0.7)
        proximity = 1.0 / max(hop, 1)
        criticality = asset_map[asset_id].get("criticality", 3) / 5.0
        risk = _clamp(0.05 * proximity + 0.65 * criticality + 0.30 * path_trust)
        nodes.append(_build_node(asset_map[asset_id], hop, ring, risk, path, path_ports, why))

    for link in filtered_links:
        edges.append({
            "src": link["src"],
            "dst": link["dst"],
            "ports": sorted({int(port) for port in (link.get("ports") or [])}),
            "trust": link.get("trust", "medium"),
            "risk": round(0.5 + (TRUST_FACTOR.get(link.get("trust", "medium"), 0.7) * float(link.get("weight", 1.0))) / 3.0, 4),
            "active": True,
        })

    if not nodes:
        summary = {
            "assets_at_risk": 0,
            "total_assets": len(assets),
            "highest_risk_asset": None,
            "likely_next_target": None,
            "likelihood_pct": 0.0,
            "crown_jewels_exposed": 0,
            "max_hop": 0,
        }
        return {"origin_id": origin_id, "nodes": [], "edges": edges, "summary": summary}

    sorted_nodes = sorted(nodes, key=lambda item: (item["risk"], item["hop"], item["id"]), reverse=True)
    highest_risk_asset = sorted_nodes[0]["id"]
    total_risk = sum(item["risk"] for item in sorted_nodes)
    likely = sorted_nodes[0]
    likelihood_pct = round((likely["risk"] / total_risk) * 100.0, 2) if total_risk else 0.0
    summary = {
        "assets_at_risk": len(sorted_nodes),
        "total_assets": len(assets),
        "highest_risk_asset": highest_risk_asset,
        "likely_next_target": likely["id"],
        "likelihood_pct": likelihood_pct,
        "crown_jewels_exposed": sum(1 for item in sorted_nodes if asset_map[item["id"]].get("criticality") == 5),
        "max_hop": max(item["hop"] for item in sorted_nodes),
    }

    return {"origin_id": origin_id, "nodes": nodes, "edges": edges, "summary": summary}


def validate_blast_result(result: dict[str, Any]) -> BlastResult:
    return BlastResult(
        origin_id=result["origin_id"],
        nodes=[BlastNode(**node) for node in result.get("nodes", [])],
        edges=[BlastEdge(**edge) for edge in result.get("edges", [])],
        summary=BlastSummary(**result["summary"]),
    )

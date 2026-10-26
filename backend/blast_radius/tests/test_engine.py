from __future__ import annotations

from backend.blast_radius.engine import compute_blast_radius


def test_no_links_returns_empty_risk():
    assets = [
        {"id": "a", "name": "A", "ip": "10.0.0.1", "zone": "Edge", "criticality": 3, "role": "a", "modeled": True, "status": "healthy"},
        {"id": "b", "name": "B", "ip": "10.0.0.2", "zone": "Internal", "criticality": 4, "role": "b", "modeled": True, "status": "healthy"},
    ]
    result = compute_blast_radius("a", assets, [])
    assert result["summary"]["assets_at_risk"] == 0
    assert result["summary"]["highest_risk_asset"] is None


def test_linear_chain_propagates_hop_depth():
    assets = [
        {"id": "a", "name": "A", "ip": "10.0.0.1", "zone": "Edge", "criticality": 3, "role": "a", "modeled": True, "status": "healthy"},
        {"id": "b", "name": "B", "ip": "10.0.0.2", "zone": "DMZ", "criticality": 4, "role": "b", "modeled": True, "status": "healthy"},
        {"id": "c", "name": "C", "ip": "10.0.0.3", "zone": "Internal", "criticality": 5, "role": "c", "modeled": True, "status": "healthy"},
    ]
    links = [
        {"id": 1, "src": "a", "dst": "b", "ports": [80], "protocol": "tcp", "trust": "medium", "weight": 1.0, "bidirectional": True, "active": True},
        {"id": 2, "src": "b", "dst": "c", "ports": [445], "protocol": "tcp", "trust": "medium", "weight": 1.0, "bidirectional": True, "active": True},
    ]
    result = compute_blast_radius("a", assets, links)
    assert {node["id"] for node in result["nodes"]} == {"b", "c"}
    assert result["summary"]["max_hop"] == 2
    assert result["summary"]["likely_next_target"] == "c"


def test_diamond_graph_prefers_highest_risk_path():
    assets = [
        {"id": "a", "name": "A", "ip": "10.0.0.1", "zone": "Edge", "criticality": 2, "role": "a", "modeled": True, "status": "healthy"},
        {"id": "b", "name": "B", "ip": "10.0.0.2", "zone": "DMZ", "criticality": 3, "role": "b", "modeled": True, "status": "healthy"},
        {"id": "c", "name": "C", "ip": "10.0.0.3", "zone": "DMZ", "criticality": 4, "role": "c", "modeled": True, "status": "healthy"},
        {"id": "d", "name": "D", "ip": "10.0.0.4", "zone": "Internal", "criticality": 5, "role": "d", "modeled": True, "status": "healthy"},
    ]
    links = [
        {"id": 1, "src": "a", "dst": "b", "ports": [80], "protocol": "tcp", "trust": "medium", "weight": 1.0, "bidirectional": True, "active": True},
        {"id": 2, "src": "a", "dst": "c", "ports": [443], "protocol": "tcp", "trust": "high", "weight": 1.0, "bidirectional": True, "active": True},
        {"id": 3, "src": "b", "dst": "d", "ports": [445], "protocol": "tcp", "trust": "low", "weight": 1.0, "bidirectional": True, "active": True},
        {"id": 4, "src": "c", "dst": "d", "ports": [3389], "protocol": "tcp", "trust": "high", "weight": 1.0, "bidirectional": True, "active": True},
    ]
    result = compute_blast_radius("a", assets, links)
    assert result["summary"]["assets_at_risk"] == 3
    assert result["summary"]["highest_risk_asset"] == "d"


def test_quarantined_middle_node_removes_path():
    assets = [
        {"id": "a", "name": "A", "ip": "10.0.0.1", "zone": "Edge", "criticality": 2, "role": "a", "modeled": True, "status": "healthy"},
        {"id": "b", "name": "B", "ip": "10.0.0.2", "zone": "DMZ", "criticality": 3, "role": "b", "modeled": True, "status": "healthy"},
        {"id": "c", "name": "C", "ip": "10.0.0.3", "zone": "Internal", "criticality": 5, "role": "c", "modeled": True, "status": "healthy"},
    ]
    links = [
        {"id": 1, "src": "a", "dst": "b", "ports": [80], "protocol": "tcp", "trust": "medium", "weight": 1.0, "bidirectional": True, "active": True},
        {"id": 2, "src": "b", "dst": "c", "ports": [445], "protocol": "tcp", "trust": "high", "weight": 1.0, "bidirectional": True, "active": True},
    ]
    result = compute_blast_radius("a", assets, links, {"b"})
    assert result["summary"]["assets_at_risk"] == 0


def test_origin_with_all_links_severed_is_isolated():
    assets = [
        {"id": "a", "name": "A", "ip": "10.0.0.1", "zone": "Edge", "criticality": 5, "role": "a", "modeled": True, "status": "healthy"},
        {"id": "b", "name": "B", "ip": "10.0.0.2", "zone": "Internal", "criticality": 4, "role": "b", "modeled": True, "status": "healthy"},
    ]
    links = [
        {"id": 1, "src": "a", "dst": "b", "ports": [22], "protocol": "tcp", "trust": "low", "weight": 1.0, "bidirectional": True, "active": True},
    ]
    result = compute_blast_radius("a", assets, links, {"b"})
    assert result["summary"]["assets_at_risk"] == 0
    assert result["nodes"] == []


def test_criticality_five_asset_risk_counts_as_crown_jewel():
    assets = [
        {"id": "a", "name": "A", "ip": "10.0.0.1", "zone": "Edge", "criticality": 2, "role": "a", "modeled": True, "status": "healthy"},
        {"id": "b", "name": "B", "ip": "10.0.0.2", "zone": "Internal", "criticality": 5, "role": "b", "modeled": True, "status": "healthy"},
    ]
    links = [{"id": 1, "src": "a", "dst": "b", "ports": [445], "protocol": "tcp", "trust": "high", "weight": 1.0, "bidirectional": True, "active": True}]
    result = compute_blast_radius("a", assets, links)
    assert result["summary"]["crown_jewels_exposed"] == 1


def test_directed_links_follow_shortest_hop_paths():
    assets = [
        {"id": "source", "name": "Source", "ip": "10.0.0.1", "zone": "Lab", "criticality": 2, "role": "desktop"},
        {"id": "relay", "name": "Relay", "ip": "10.0.0.2", "zone": "Lab", "criticality": 2, "role": "server"},
        {"id": "target", "name": "Target", "ip": "10.0.0.3", "zone": "Lab", "criticality": 5, "role": "database"},
        {"id": "isolated", "name": "Isolated", "ip": "10.0.0.4", "zone": "Lab", "criticality": 5, "role": "server"},
    ]
    links = [
        {"id": 1, "src": "source", "dst": "relay", "ports": [443], "protocol": "tcp", "trust": "low", "weight": 0.2, "bidirectional": False, "active": True},
        {"id": 2, "src": "relay", "dst": "target", "ports": [5432], "protocol": "tcp", "trust": "low", "weight": 0.2, "bidirectional": False, "active": True},
        {"id": 3, "src": "source", "dst": "target", "ports": [443], "protocol": "tcp", "trust": "high", "weight": 2.0, "bidirectional": False, "active": True},
        {"id": 4, "src": "isolated", "dst": "source", "ports": [22], "protocol": "tcp", "trust": "high", "weight": 1.0, "bidirectional": False, "active": True},
        {"id": 5, "src": "missing", "dst": "target", "ports": [22], "protocol": "tcp", "trust": "high", "weight": 1.0, "bidirectional": False, "active": True},
    ]

    result = compute_blast_radius("source", assets, links)
    nodes = {node["id"]: node for node in result["nodes"]}

    assert nodes["target"]["hop"] == 1
    assert nodes["target"]["path"] == ["source", "target"]
    assert nodes["relay"]["hop"] == 1
    assert "isolated" not in nodes

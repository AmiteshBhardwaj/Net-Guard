from __future__ import annotations

import json

from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_topology_route_seeded_and_valid():
    response = client.get("/api/blast/topology")
    assert response.status_code == 200
    body = response.json()
    assert body["assets"]
    assert any(asset["id"] == "dmz-server" for asset in body["assets"])
    assert next(asset for asset in body["assets"] if asset["id"] == "dmz-server")["ip"] == "10.0.2.14"
    assert body["links"]


def test_radius_route_works_for_known_asset():
    response = client.get("/api/blast/radius/dmz-server")
    assert response.status_code == 200
    body = response.json()
    assert body["origin_id"] == "dmz-server"
    assert body["summary"]["total_assets"] >= 1


def test_demo_endpoints_cover_workstation_web_and_isolated_scenarios():
    topology = client.get("/api/blast/topology").json()
    assert {"workstation-01", "dmz-server", "core-cluster", "db-primary", "isolated-workstation"} <= {
        asset["id"] for asset in topology["assets"]
    }

    workstation = client.get("/api/blast/radius/workstation-01").json()
    web_server = client.get("/api/blast/radius/dmz-server").json()
    isolated = client.get("/api/blast/radius/isolated-workstation").json()

    workstation_nodes = {node["id"]: node for node in workstation["nodes"]}
    web_nodes = {node["id"]: node for node in web_server["nodes"]}
    assert workstation_nodes["core-cluster"]["hop"] == 2
    assert "db-primary" in web_nodes
    assert isolated["nodes"] == []
    assert isolated["summary"]["max_hop"] == 0


def test_invalid_topology_rejected():
    response = client.put(
        "/api/blast/topology",
        json={
            "assets": [{"id": "x", "name": "X", "ip": "10.0.0.1", "zone": "Edge", "criticality": 9, "role": "bad", "modeled": True, "status": "healthy"}],
            "links": [],
        },
    )
    assert response.status_code == 422


def test_reset_route_returns_ok():
    response = client.post("/api/blast/reset")
    assert response.status_code == 200
    assert response.json()["ok"] is True

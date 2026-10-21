from __future__ import annotations

from fastapi.testclient import TestClient

import app.main as main


client = TestClient(main.app)


def test_capture_agent_endpoint_requires_token_and_accepts_bounded_flows(monkeypatch):
    monkeypatch.setattr(main, "CAPTURE_MODE", "agent")
    monkeypatch.setattr(main, "AGENT_TOKEN", "test-agent-token")
    monkeypatch.setitem(main.state, "source", "live")
    body = {
        "flows": [
            {
                "src": "198.51.100.10",
                "dst": "10.0.0.15",
                "dport": 443,
                "sport": 53000,
                "protocol": "TCP",
                "started": 10.0,
                "ended": 10.1,
                "forward_packets": 1,
                "backward_packets": 1,
                "forward_bytes": 60,
                "backward_bytes": 120,
            }
        ]
    }

    rejected = client.post("/api/agent/flows", json=body)
    accepted = client.post(
        "/api/agent/flows",
        json=body,
        headers={"Authorization": "Bearer test-agent-token"},
    )

    assert rejected.status_code == 401
    assert accepted.status_code == 200
    assert accepted.json()["flows_received"] == 1

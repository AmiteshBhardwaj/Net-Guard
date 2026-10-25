from __future__ import annotations

from fastapi.testclient import TestClient
import app.main as main


client = TestClient(main.app)


def test_landing_route_serves_standalone_landing_page():
    response_root = client.get("/")
    assert response_root.status_code == 200
    assert "Every alert" in response_root.text
    assert "has a trail" in response_root.text
    assert "landing-root" in response_root.text

    response_landing = client.get("/landing")
    assert response_landing.status_code == 200
    assert "Every alert" in response_landing.text


def test_dashboard_route_serves_dashboard_without_embedded_landing():
    response = client.get("/dashboard")
    assert response.status_code == 200
    assert "Network overview" in response.text
    assert 'data-dashboard="overview"' in response.text
    assert 'data-dashboard="landing"' not in response.text

    response_threat = client.get("/threat-dashboard")
    assert response_threat.status_code == 200
    assert 'data-dashboard="landing"' not in response_threat.text

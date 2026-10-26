from __future__ import annotations

import unittest
from pathlib import Path
from fastapi.testclient import TestClient

from app.core import Flow, validate_ip
from app.main import app, db
from app.sources import get_active_interfaces, flows_from_csv
from app.threat_dashboard_api import ingest_flow_telemetry
from backend.blast_radius.service import BlastService


class RealDataPipelineTests(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.client = TestClient(app)

    def test_validate_ip(self):
        # Private IPv4
        self.assertEqual(validate_ip("192.168.1.1"), "192.168.1.1")
        self.assertEqual(validate_ip("10.0.0.5"), "10.0.0.5")
        self.assertEqual(validate_ip("127.0.0.1"), "127.0.0.1")
        # Public IPv4
        self.assertEqual(validate_ip("8.8.8.8"), "8.8.8.8")
        self.assertEqual(validate_ip("142.250.190.46"), "142.250.190.46")
        # IPv6
        self.assertEqual(validate_ip("::1"), "::1")
        self.assertEqual(validate_ip("2001:4860:4860::8888"), "2001:4860:4860::8888")
        # Invalid IP
        with self.assertRaises(ValueError):
            validate_ip("not-an-ip")
        with self.assertRaises(ValueError):
            validate_ip("999.999.999.999")

    def test_get_active_interfaces(self):
        ifaces = get_active_interfaces()
        self.assertIsInstance(ifaces, list)
        self.assertGreater(len(ifaces), 0)
        names = [item["name"] for item in ifaces]
        self.assertTrue("lo" in names or "eth0" in names or "wlo1" in names)
        for item in ifaces:
            self.assertIn("name", item)
            self.assertIn("ip", item)
            self.assertIn("is_up", item)

    def test_flows_from_csv(self):
        csv_file = Path(__file__).resolve().parents[1] / "data" / "cicids" / "Friday-PortScan-Part2.csv"
        if csv_file.exists():
            flows = flows_from_csv(csv_file, limit=10)
            self.assertEqual(len(flows), 10)
            f = flows[0]
            self.assertIsInstance(f, Flow)
            self.assertGreater(f.dport, 0)
            feats = f.features()
            self.assertEqual(len(feats), 12)

    async def test_threat_dashboard_ingests_real_flow(self):
        flow = Flow(
            src="192.168.0.105", dst="192.168.0.1", dport=443, sport=54321,
            protocol="TCP", forward_packets=10, backward_packets=12,
            forward_bytes=1200, backward_bytes=8400,
        )
        analyzed = await ingest_flow_telemetry(flow)
        self.assertIn("is_anomaly", analyzed)
        self.assertIn("severity", analyzed)
        self.assertIn("confidence", analyzed)
        self.assertEqual(analyzed["protocol"], "TCP")

    def test_dynamic_asset_discovery(self):
        service = BlastService(lambda payload: None, db)
        real_ip = "192.168.100.42"
        asset = service._resolve_asset_by_ip(real_ip, auto_create=True)
        self.assertIsNotNone(asset)
        self.assertEqual(asset["ip"], real_ip)
        self.assertEqual(asset["zone"], "Internal")

        # Public IP discovery
        pub_ip = "198.51.100.99"
        pub_asset = service._resolve_asset_by_ip(pub_ip, auto_create=True)
        self.assertIsNotNone(pub_asset)
        self.assertEqual(pub_asset["ip"], pub_ip)
        self.assertEqual(pub_asset["zone"], "External")

    def test_unrestricted_ip_block_and_unblock(self):
        # Block a public IP
        pub_ip = "198.51.100.77"
        res = self.client.post(f"/api/block/{pub_ip}")
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertTrue(data["blocked"])
        self.assertEqual(data["ip"], pub_ip)

        # Unblock
        del_res = self.client.delete(f"/api/block/{pub_ip}")
        self.assertEqual(del_res.status_code, 200)
        self.assertFalse(del_res.json()["blocked"])

    def test_replay_csv_endpoint(self):
        res = self.client.post("/api/replay/csv?filename=Friday-PortScan-Part2.csv&speed=20&limit=5")
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertEqual(data["source"], "csv")
        self.assertEqual(data["flows_replayed"], 5)

    def test_interfaces_endpoint(self):
        res = self.client.get("/api/interfaces")
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertIn("interfaces", data)
        self.assertIn("details", data)
        self.assertTrue(data["available"])


if __name__ == "__main__":
    unittest.main()

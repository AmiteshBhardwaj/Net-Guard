from __future__ import annotations

import json
from pathlib import Path
import unittest
from fastapi.testclient import TestClient

from app.config import MODEL_PATH, ROOT
from app.core import DecisionEngine, Flow, LABELS
from app.main import app


class TrainedModelTests(unittest.TestCase):
    def test_model_files_exist(self):
        self.assertTrue(MODEL_PATH.exists(), f"Missing model binary at {MODEL_PATH}")
        metrics_file = ROOT / "models" / "metrics.json"
        self.assertTrue(metrics_file.exists(), f"Missing metrics file at {metrics_file}")
        data = json.loads(metrics_file.read_text(encoding="utf-8"))
        for required_key in ("accuracy", "precision_macro", "recall_macro", "f1_macro", "false_alarm_rate", "classes"):
            self.assertIn(required_key, data)
        self.assertEqual(data["classes"], LABELS)
        self.assertGreaterEqual(data["accuracy"], 0.95)
        self.assertGreaterEqual(data["f1_macro"], 0.95)
        self.assertLessEqual(data["false_alarm_rate"], 0.01)

    def test_decision_engine_inference(self):
        import joblib
        model = joblib.load(MODEL_PATH)
        engine = DecisionEngine(model=model, threshold=0.8)

        # Normal synthetic flow
        normal_flow = Flow(
            src="192.168.1.10", dst="192.168.1.1", dport=443, sport=52000,
            started=100.0, ended=101.0, forward_packets=5, backward_packets=4,
            forward_bytes=600, backward_bytes=2400, syn_count=1, ack_count=9, rst_count=0
        )
        row = [normal_flow.features()]
        probs = model.predict_proba(row)[0]
        self.assertEqual(len(probs), len(LABELS))
        # Confidence must be a valid probability sum ~ 1.0
        self.assertAlmostEqual(float(sum(probs)), 1.0, places=3)

    def test_api_model_routes(self):
        client = TestClient(app)
        # Test model reload
        reload_res = client.post("/api/model/reload")
        self.assertEqual(reload_res.status_code, 200)
        reload_data = reload_res.json()
        self.assertEqual(reload_data["status"], "trained model loaded")
        self.assertIsNotNone(reload_data["metrics"])

        # Test model info GET
        get_res = client.get("/api/model")
        self.assertEqual(get_res.status_code, 200)
        get_data = get_res.json()
        self.assertEqual(get_data["status"], "trained model loaded")
        self.assertIn("f1_macro", get_data["metrics"])


if __name__ == "__main__":
    unittest.main()

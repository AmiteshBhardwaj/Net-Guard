import unittest
import numpy as np

from app.threat_detector import IsolationThreatDetector


class IsolationThreatDetectorTests(unittest.TestCase):
    def setUp(self):
        self.detector = IsolationThreatDetector(contamination=0.01, random_state=42, training_samples=500)

    def test_model_initialization(self):
        self.assertIsNotNone(self.detector.model)
        self.assertEqual(len(self.detector.train_data), 500)

    def test_normal_traffic_detection(self):
        # A typical normal point: packet_size ~500, src_port >= 1024, dst_port in [20, 1024], protocol in (0, 1)
        point = np.array([500.0, 50000.0, 80.0, 0.0])
        result = self.detector.analyze_point(point)
        self.assertFalse(result["is_anomaly"])
        self.assertEqual(result["severity"], "LOW")
        self.assertIn("Allow", result["action_taken"])

    def test_anomalous_traffic_detection(self):
        # An extreme anomaly point: packet_size = 1200, low privileged src_port = 22, dst_port = 45000, protocol = 2
        anomaly_point = np.array([1200.0, 22.0, 45000.0, 2.0])
        result = self.detector.analyze_point(anomaly_point)
        self.assertTrue(result["is_anomaly"])
        self.assertEqual(result["severity"], "CRITICAL")
        self.assertIn("Block suspicious traffic", result["action_taken"])
        self.assertGreaterEqual(len(result["reasons"]), 1)

    def test_simulation_generates_valid_features(self):
        sample = self.detector.simulate_data_point()
        self.assertEqual(len(sample), 4)
        result = self.detector.analyze_point(sample)
        self.assertIn("packet_size", result)
        self.assertIn("severity", result)


if __name__ == "__main__":
    unittest.main()

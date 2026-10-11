from pathlib import Path
import tempfile
import unittest

from app.core import DecisionEngine, Flow
from app.sources import flows_from_pcap


class DetectionTests(unittest.TestCase):
    def test_pcap_keeps_initiator_packets_forward(self):
        from scapy.all import Ether, IP, TCP, wrpcap

        packets = [
            Ether(src="00:00:00:00:00:02", dst="00:00:00:00:00:03") / IP(src="10.0.0.2", dst="10.0.0.3") / TCP(sport=53000, dport=443, flags="S"),
            Ether(src="00:00:00:00:00:03", dst="00:00:00:00:00:02") / IP(src="10.0.0.3", dst="10.0.0.2") / TCP(sport=443, dport=53000, flags="SA"),
            Ether(src="00:00:00:00:00:02", dst="00:00:00:00:00:03") / IP(src="10.0.0.2", dst="10.0.0.3") / TCP(sport=53000, dport=443, flags="A"),
        ]
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "flow.pcap"
            wrpcap(str(path), packets)
            flows = flows_from_pcap(path.read_bytes())

        self.assertEqual(len(flows), 1)
        self.assertEqual(flows[0].sport, 53000)
        self.assertEqual(flows[0].forward_packets, 2)
        self.assertEqual(flows[0].backward_packets, 1)

    def test_packet_burst_detected_without_application_request_counts(self):
        engine = DecisionEngine()
        alerts = [engine.decide(Flow(
            src="10.0.0.2", dst="10.0.0.3", dport=8080 + index,
            started=float(index), ended=float(index), forward_packets=20,
        )) for index in range(3)]

        self.assertIsNone(alerts[0])
        self.assertIsNone(alerts[1])
        self.assertEqual(alerts[2]["label"], "DoS/DDoS")


if __name__ == "__main__":
    unittest.main()

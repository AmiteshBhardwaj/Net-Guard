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

    def test_flow_table_lifecycle(self):
        from app.core import FlowTable, Packet, SYN, ACK, RST
        table = FlowTable()
        # SYN from client
        flows = table.add(Packet(1.0, "10.0.0.5", "10.0.0.2", 45000, 80, "TCP", 60, SYN))
        self.assertEqual(len(flows), 0)
        self.assertEqual(len(table), 1)

        # SYN+ACK from server
        flows = table.add(Packet(1.01, "10.0.0.2", "10.0.0.5", 80, 45000, "TCP", 60, SYN | ACK))
        self.assertEqual(len(flows), 0)

        # RST ends flow
        flows = table.add(Packet(1.02, "10.0.0.5", "10.0.0.2", 45000, 80, "TCP", 54, RST))
        self.assertEqual(len(flows), 1)
        self.assertEqual(flows[0].rst_count, 1)
        self.assertEqual(flows[0].forward_packets, 2)
        self.assertEqual(flows[0].backward_packets, 1)

    def test_port_scan_detection(self):
        engine = DecisionEngine()
        src = "192.168.1.99"
        alerts = []
        for i in range(55):
            alert = engine.decide(Flow(
                src=src, dst="10.0.0.2", dport=1000 + i,
                started=100.0 + i * 0.01, ended=100.0 + i * 0.01 + 0.005,
                forward_packets=1,
            ))
            if alert:
                alerts.append(alert)
        self.assertTrue(any(a["label"] == "PortScan" for a in alerts))

    def test_demo_source_background(self):
        import time
        from app.sources import DemoSource
        received = []
        source = DemoSource(lambda f: received.append(f))
        source.start()
        time.sleep(0.3)
        source.stop()
        self.assertGreater(len(received), 0)


if __name__ == "__main__":
    unittest.main()


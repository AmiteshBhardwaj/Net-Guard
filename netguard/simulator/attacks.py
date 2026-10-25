"""Attack simulator for OUR OWN lab only.

Safety rules are enforced in code, not just in this comment:
  * refuses any target that is not loopback / 10.x / 172.16-31.x / 192.168.x
  * hard cap on duration and on request rate
Never run it against college Wi-Fi, the internet, or anyone else's machine.

CLI:  python -m simulator.attacks portscan --host 192.168.56.101 --port 8080 --duration 5
"""
import argparse
import http.client
import random
import socket
import threading
import time

from shared import config as C

MAX_DURATION_S = 15
MAX_RATE = 250          # connection attempts per second, all attacks


def _guard(host: str, duration: float) -> float:
    if not C.is_private_ip(host):
        raise PermissionError(
            f"Refusing to target {host}. Only private lab addresses are allowed "
            "(127.x, 10.x, 172.16-31.x, 192.168.x).")
    return max(1.0, min(float(duration), MAX_DURATION_S))


class _Pacer:
    """Keeps a loop at or below `rate` iterations per second (works even with coarse Windows timers)."""

    def __init__(self, rate):
        self.step, self.next = 1.0 / min(rate, MAX_RATE), time.perf_counter()

    def wait(self):
        self.next += self.step
        delay = self.next - time.perf_counter()
        if delay > 0:
            time.sleep(delay)


def port_scan(host, port, duration):
    end, pace, p = time.time() + duration, _Pacer(200), 1
    while time.time() < end:
        s = socket.socket()
        s.settimeout(0.2)
        try:
            s.connect_ex((host, p))
        finally:
            s.close()
        p = p % 1000 + 1
        pace.wait()


def brute_force(host, port, duration):
    end, pace = time.time() + duration, _Pacer(12)
    guesses = ["123456", "password", "admin", "letmein", "qwerty", "welcome", "dragon", "monkey"]
    while time.time() < end:
        try:
            c = http.client.HTTPConnection(host, port, timeout=2)
            body = f"username=admin&password={random.choice(guesses)}{random.randint(0, 999)}"
            c.request("POST", "/login", body, {"Content-Type": "application/x-www-form-urlencoded",
                                               "Connection": "close"})
            c.getresponse().read()
            c.close()
        except OSError:
            pass
        pace.wait()


def dos_flood(host, port, duration, workers=8, rate=200):
    end = time.time() + duration

    def worker():
        pace = _Pacer(rate / workers)
        while time.time() < end:
            try:
                c = http.client.HTTPConnection(host, port, timeout=2)
                c.request("GET", "/", headers={"Connection": "close"})
                c.getresponse().read()
                c.close()
            except OSError:
                pass
            pace.wait()

    threads = [threading.Thread(target=worker, daemon=True) for _ in range(workers)]
    [t.start() for t in threads]
    [t.join() for t in threads]


def normal_browsing(host, port, duration):
    end = time.time() + duration
    pages = ["/", "/products", "/about", "/products", "/"]
    while time.time() < end:
        try:
            c = http.client.HTTPConnection(host, port, timeout=2)
            c.request("GET", random.choice(pages), headers={"Connection": "close"})
            c.getresponse().read()
            c.close()
        except OSError:
            pass
        time.sleep(random.uniform(0.4, 1.2))


ATTACKS = {"portscan": port_scan, "bruteforce": brute_force, "dos": dos_flood, "normal": normal_browsing}


def run(kind: str, host: str, port: int, duration: float):
    duration = _guard(host, duration)
    if kind not in ATTACKS:
        raise ValueError(f"unknown attack '{kind}'")
    ATTACKS[kind](host, port, duration)


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("kind", choices=list(ATTACKS))
    ap.add_argument("--host", default=C.VICTIM_HOST)
    ap.add_argument("--port", type=int, default=C.VICTIM_PORT)
    ap.add_argument("--duration", type=float, default=5)
    a = ap.parse_args()
    run(a.kind, a.host, a.port, a.duration)

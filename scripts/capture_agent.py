"""Forward locally captured network flows to a NetGuard backend."""

from __future__ import annotations

import argparse
import json
import logging
import os
import queue
import sys
import time
from dataclasses import asdict
from ipaddress import ip_address
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlsplit
from urllib.request import Request, urlopen

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from app.core import Flow
from app.sources import CaptureSource

LOGGER = logging.getLogger("netguard.capture_agent")
MAX_BATCH_SIZE = 250


def send_batch(backend: str, token: str, flows: list[Flow]) -> None:
    payload = json.dumps({"flows": [asdict(flow) for flow in flows]}).encode("utf-8")
    request = Request(
        f"{backend.rstrip('/')}/api/agent/flows",
        data=payload,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    with urlopen(request, timeout=10) as response:
        if response.status != 200:
            raise RuntimeError(f"Capture backend returned HTTP {response.status}")


def run(backend: str, interface: str | None, token: str) -> None:
    pending: queue.Queue[Flow] = queue.Queue(maxsize=20_000)
    dropped = 0

    def enqueue(flow: Flow) -> None:
        nonlocal dropped
        try:
            pending.put_nowait(flow)
        except queue.Full:
            dropped += 1
            if dropped == 1 or dropped % 1000 == 0:
                LOGGER.warning("Capture queue is full; dropped %d flow(s)", dropped)

    capture = CaptureSource()
    capture.start(interface, enqueue)
    LOGGER.info("Capturing on %s and forwarding to %s", interface or "default interface", backend)
    batch: list[Flow] = []
    retry_delay = 1.0
    try:
        while True:
            try:
                batch.append(pending.get(timeout=1))
            except queue.Empty:
                if not batch:
                    continue
            while len(batch) < MAX_BATCH_SIZE:
                try:
                    batch.append(pending.get_nowait())
                except queue.Empty:
                    break
            if not batch:
                continue
            try:
                send_batch(backend, token, batch)
                batch.clear()
                retry_delay = 1.0
                continue
            except HTTPError as exc:
                details = exc.read().decode("utf-8", errors="replace")
                if exc.code < 500 and exc.code not in {408, 409, 429}:
                    raise RuntimeError(
                        f"Capture backend rejected flows (HTTP {exc.code}): {details}"
                    ) from exc
                LOGGER.error("Capture backend HTTP %d: %s", exc.code, details)
            except (TimeoutError, URLError, OSError) as exc:
                LOGGER.error("Could not reach capture backend: %s", exc)
            time.sleep(retry_delay)
            retry_delay = min(retry_delay * 2, 30.0)
    finally:
        capture.stop()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--backend", required=True, help="HTTPS URL of the NetGuard API backend")
    parser.add_argument("--interface", help="Local interface to capture; default is Scapy's default")
    args = parser.parse_args()

    token = os.getenv("NETGUARD_AGENT_TOKEN", "")
    if not token:
        parser.error("Set NETGUARD_AGENT_TOKEN in the local agent environment")
    backend = urlsplit(args.backend)
    host = backend.hostname or ""
    try:
        loopback = ip_address(host).is_loopback
    except ValueError:
        loopback = host == "localhost"
    if not host or backend.username or backend.password or backend.query or backend.fragment or backend.path not in {"", "/"}:
        parser.error("--backend must be an origin URL without credentials, path, query, or fragment")
    if backend.scheme != "https" and not (backend.scheme == "http" and loopback):
        parser.error("--backend must use HTTPS except for localhost development")

    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s %(levelname)s %(name)s: %(message)s",
    )
    try:
        run(args.backend.rstrip("/"), args.interface, token)
    except KeyboardInterrupt:
        LOGGER.info("Stopping capture agent")
    except (RuntimeError, OSError) as exc:
        LOGGER.error("Capture agent stopped: %s", exc)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

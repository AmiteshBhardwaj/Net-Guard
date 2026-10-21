"""Application configuration and filesystem layout."""

from __future__ import annotations

import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = Path(os.getenv("NETGUARD_DATA_DIR", ROOT / "data"))
DB_PATH = DATA_DIR / "netguard.sqlite3"
DATABASE_URL = os.getenv("NETGUARD_DATABASE_URL") or os.getenv("DATABASE_URL")
MODEL_PATH = ROOT / "models" / "netguard.joblib"
STATIC_DIR = ROOT / "static"
CORS_ORIGINS = [
    origin.strip().rstrip("/")
    for origin in os.getenv("NETGUARD_CORS_ORIGINS", "").split(",")
    if origin.strip()
]
CAPTURE_MODE = os.getenv("NETGUARD_CAPTURE_MODE", "local").strip().lower()
AGENT_TOKEN = os.getenv("NETGUARD_AGENT_TOKEN", "")

if not DATABASE_URL:
    DATA_DIR.mkdir(parents=True, exist_ok=True)

"""Application configuration and filesystem layout."""

from __future__ import annotations

import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = Path(os.getenv("NETGUARD_DATA_DIR", ROOT / "data"))
DB_PATH = DATA_DIR / "netguard.sqlite3"
DATABASE_URL = os.getenv("NETGUARD_DATABASE_URL") or os.getenv("DATABASE_URL")
MODEL_DIR = Path(os.getenv("NETGUARD_MODEL_DIR", ROOT / "models"))
if not (MODEL_DIR / "netguard.joblib").exists() and (DATA_DIR / "models" / "netguard.joblib").exists():
    MODEL_DIR = DATA_DIR / "models"

MODEL_PATH = Path(os.getenv("NETGUARD_MODEL_PATH", MODEL_DIR / "netguard.joblib"))
METRICS_PATH = MODEL_DIR / "metrics.json"
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

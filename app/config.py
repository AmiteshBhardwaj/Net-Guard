"""Application configuration and filesystem layout."""

from __future__ import annotations

import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = Path(os.getenv("NETGUARD_DATA_DIR", ROOT / "data"))
DB_PATH = DATA_DIR / "netguard.sqlite3"
MODEL_PATH = ROOT / "models" / "netguard.joblib"
STATIC_DIR = ROOT / "static"

DATA_DIR.mkdir(parents=True, exist_ok=True)

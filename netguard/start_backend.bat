@echo off
REM Run this in an ADMINISTRATOR terminal if you want Live capture (Npcap needs it).
cd /d %~dp0
python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000

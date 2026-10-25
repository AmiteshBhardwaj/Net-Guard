@echo off
REM Run this on the VICTIM machine/VM. Use --host 0.0.0.0 so the attacker can reach it.
cd /d %~dp0
python -m victim.app --host 0.0.0.0 --port 8080

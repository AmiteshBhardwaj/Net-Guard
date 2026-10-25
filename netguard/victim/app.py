"""Tiny web shop used as the attack target.   python -m victim.app [--host 0.0.0.0] [--port 8080]"""
import argparse
import time

from flask import Flask, request

app = Flask(__name__)
PAGE = "<!doctype html><title>Acme Store</title><h1>Acme Store</h1><p>{}</p>"


@app.get("/")
def home():
    return PAGE.format("Welcome. Browse <a href='/products'>products</a> or <a href='/about'>about us</a>.")


@app.get("/products")
def products():
    return PAGE.format("Kettle, lamp, desk, chair.")


@app.get("/about")
def about():
    return PAGE.format("A small shop for testing network intrusion detection.")


@app.post("/login")
def login():
    time.sleep(0.02)
    ok = request.form.get("username") == "admin" and request.form.get("password") == "hunter2"
    return ("welcome", 200) if ok else ("invalid credentials", 401)


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--host", default="127.0.0.1")
    ap.add_argument("--port", type=int, default=8080)
    a = ap.parse_args()
    print(f"Victim app on http://{a.host}:{a.port}  (lab use only)")
    app.run(host=a.host, port=a.port, threaded=True)

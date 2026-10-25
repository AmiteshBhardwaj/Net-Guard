"""Detector = ML model (if model/model.pkl exists) + rules + noise filters + explanations.

The rules make the system work today, and keep the demo safe if the model misses something.
Drop a trained model into model/ (see model/README.md) and the engine switches to ML+rules.
"""
import json
from collections import Counter, defaultdict, deque
from dataclasses import dataclass

from shared import config as C


@dataclass
class Rec:
    ts: float
    dport: int
    dst: str
    pkts: int
    syn: int
    ml_label: str
    ml_prob: float


class Detector:
    def __init__(self, model_dir=None):
        self.model = None
        self.groups: dict = {}                 # normalized label -> model class indexes
        self.order = list(C.FEATURES)
        self.metrics = None
        self._load(model_dir or C.MODEL_DIR)
        self.win = defaultdict(deque)          # src ip -> recent flows
        self.episode: dict = {}                # (src, label) -> last time this evidence was seen
        self.flagged_until: dict = {}          # src -> ts (used to colour traffic on the chart)
        self.whitelist = set(C.WHITELIST)
        self.conf = C.CONF_THRESHOLD

    # ------------------------------------------------------------------ model
    def _load(self, model_dir):
        path = model_dir / "model.pkl"
        if not path.exists():
            return
        import joblib
        self.model = joblib.load(path)
        feats = model_dir / "features.json"
        if feats.exists():
            self.order = json.loads(feats.read_text())
        for i, cls in enumerate(self.model.classes_):
            self.groups.setdefault(C.normalize_label(cls), []).append(i)

    @property
    def engine(self) -> str:
        return "ML+rules" if self.model is not None else "rules"

    def _predict(self, feats: list) -> list:
        if self.model is None:
            return [("Normal", 0.0)] * len(feats)
        import numpy as np
        X = np.array([[f[k] for k in self.order] for f in feats], dtype=float)
        X = np.nan_to_num(X, nan=0.0, posinf=1e12, neginf=0.0)
        if hasattr(self.model, "feature_names_in_"):          # trained on a DataFrame: keep column names
            import pandas as pd
            X = pd.DataFrame(X, columns=self.order)
        proba = self.model.predict_proba(X)
        out = []
        for row in proba:
            scores = {lab: float(row[idx].sum()) for lab, idx in self.groups.items()}
            lab = max(scores, key=scores.get)
            out.append((lab, scores[lab]))
        return out

    # --------------------------------------------------------------- pipeline
    def is_flagged(self, src: str, now: float) -> bool:
        return self.flagged_until.get(src, 0) > now

    def process(self, flows: list, now: float) -> list:
        """flows: dicts from Flow.to_event(). Returns a list of alert dicts."""
        touched = set()
        if flows:
            for fl, (lab, prob) in zip(flows, self._predict([x["f"] for x in flows])):
                if fl["src"] in self.whitelist:
                    continue
                ts = min(fl.get("ts", now), now)      # real flow time, so spans and rates are honest
                self.win[fl["src"]].append(
                    Rec(ts, fl["dport"], fl["dst"], fl["pkts"], fl["syn"], lab, prob))
                touched.add(fl["src"])
        for src in list(self.win):
            w = self.win[src]
            while w and w[0].ts < now - C.WINDOW_S:
                w.popleft()
            if not w:
                del self.win[src]
        alerts = []
        for src in touched:
            if src in self.win:
                a = self._evaluate(src, now)
                if a:
                    alerts.append(a)
        return alerts

    # ------------------------------------------------------------------ rules
    def _evaluate(self, src: str, now: float):
        recs = self.win[src]
        span = max(now - recs[0].ts, 0.001)
        ports = Counter(r.dport for r in recs)
        distinct = len(ports)
        top_port, top_n = ports.most_common(1)[0]
        top_span = max(now - min(r.ts for r in recs if r.dport == top_port), 0.001)
        last_dst = recs[-1].dst
        recent = sum(1 for r in recs if r.dport == top_port and r.ts >= now - 1.0)   # flows in the last second

        # Every rule is judged on its own evidence; the strongest one wins.
        cands = []   # (ratio, label, dport, reasons, evidence)
        if distinct >= C.SCAN_PORTS:
            once = [r.ts for r in recs if ports[r.dport] == 1]       # ports touched once = the sweep itself
            span = max(now - min(once), 0.001) if once else span
            eff = max(span, 1.0)          # never claim a rate measured over less than one second
            cands.append((self._ratio(distinct, C.SCAN_PORTS, eff), "PortScan", 0,
                          [f"{distinct} different ports probed in {max(span, 0.1):.1f} s"],
                          [self._ev("Distinct ports probed", distinct, C.SCAN_PORTS),
                           self._ev("Probes per second", distinct / eff, C.SCAN_PORTS / C.WINDOW_S)]))
        eff = max(top_span, 1.0)
        if top_n >= C.DOS_FLOWS:
            rate = max(top_n / eff, recent)       # old flows in the window must not hide how fast it is NOW
            cands.append((self._ratio(top_n, C.DOS_FLOWS, eff, rate), "DoS", top_port,
                          [f"{top_n} connections to port {top_port} in {max(top_span, 0.1):.1f} s (about {rate:.0f} per second)"],
                          [self._ev(f"Connections to port {top_port}", top_n, C.DOS_FLOWS),
                           self._ev("Connections per second", rate, C.DOS_FLOWS / C.WINDOW_S)]))
        elif top_n >= C.BRUTE_FLOWS and top_span >= C.BRUTE_MIN_SPAN_S and recent <= C.BRUTE_MAX_RATE:
            cands.append((self._ratio(top_n, C.BRUTE_FLOWS, eff), "BruteForce", top_port,
                          [f"{top_n} repeated connection attempts to port {top_port} in {max(top_span, 0.1):.1f} s"],
                          [self._ev(f"Attempts on port {top_port}", top_n, C.BRUTE_FLOWS),
                           self._ev("Attempts per second", top_n / eff, C.BRUTE_FLOWS / C.WINDOW_S)]))
        rule = max(cands, key=lambda c: c[0]) if cands else None

        ml = None     # (label, mean_prob, count)
        votes = Counter(r.ml_label for r in recs if r.ml_label != "Normal" and r.ml_prob >= self.conf)
        if votes:
            lab, k = votes.most_common(1)[0]
            if k >= C.MIN_FLOWS:
                probs = [r.ml_prob for r in recs if r.ml_label == lab and r.ml_prob >= self.conf]
                ml = (lab, sum(probs) / len(probs), k)

        if rule is None and ml is None:
            return None

        if rule:
            ratio, label, dport, reasons, evidence = rule
            sev = C.severity(ratio)
            prob, engine = None, "rules"
            if ml and ml[0] == label:
                engine, prob = "ML+rules", round(ml[1], 3)
                reasons = reasons + [f"Model agrees: {label} with {ml[1]:.0%} confidence over {ml[2]} flows"]
                evidence = evidence + [self._ev("Model confidence (%)", ml[1] * 100, self.conf * 100)]
                if C.SEVERITY_ORDER[C.severity_from_prob(ml[1])] > C.SEVERITY_ORDER[sev]:
                    sev = C.severity_from_prob(ml[1])
        else:
            label, prob, k = ml
            dport = top_port
            sev = C.severity_from_prob(prob)
            engine = "ML"
            reasons = [f"Model classified {k} flows from this address as {label} ({prob:.0%} confidence)"]
            evidence = [self._ev("Model confidence (%)", prob * 100, self.conf * 100),
                        self._ev("Suspicious flows", k, C.MIN_FLOWS)]

        self.flagged_until[src] = now + C.COOLDOWN_S + 2
        self._consume(src, label, dport, bool(rule))     # evidence is used up, so it can't mask the next attack
        # One alert per attack episode. An episode lasts until the evidence has been quiet for COOLDOWN_S.
        # A flood already being reported also explains any brute-force-looking leftovers on the same address.
        key = (src, label)
        prev = self.episode.get(key)
        self.episode[key] = now
        if prev is not None and now - prev < C.COOLDOWN_S:
            return None
        if label == "BruteForce" and now - self.episode.get((src, "DoS"), -1e9) < C.COOLDOWN_S:
            return None
        return {"ts": now, "src": src, "dst": last_dst, "dport": dport, "label": label,
                "prob": prob, "severity": sev, "reasons": reasons, "evidence": evidence,
                "engine": engine, "blocked": False}

    def _consume(self, src, label, dport, from_rule):
        w = self.win[src]
        if from_rule and label == "PortScan":
            w.clear()
        elif from_rule:
            self.win[src] = deque(r for r in w if r.dport != dport)
        else:
            self.win[src] = deque(r for r in w if r.ml_label != label)

    @staticmethod
    def _ratio(count, limit, eff_span, rate=None):
        """Severity driver: the larger of 'how many' and 'how fast' versus the alert threshold."""
        rate = count / eff_span if rate is None else rate
        return max(count / limit, rate / (limit / C.WINDOW_S))

    @staticmethod
    def _ev(name, value, limit):
        return {"name": name, "value": round(float(value), 1), "limit": round(float(limit), 1)}

(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const SEV = { LOW: 1, MEDIUM: 2, HIGH: 3, CRITICAL: 4 };
  const SEV_NAME = { LOW: "Low", MEDIUM: "Medium", HIGH: "High", CRITICAL: "Critical" };
  const TITLE = { PortScan: "Port scan", BruteForce: "Brute force", DoS: "DoS flood", Normal: "Normal" };
  const ENGINE = { rules: "Rules", ML: "Model", "ML+rules": "Model + rules" };
  const MODE_NAME = { demo: "Simulated traffic", live: "Live capture", pcap: "PCAP replay", csv: "CSV replay" };

  const S = {
    connected: false, alive: false, error: null, mode: "demo", engine: "rules", params: {},
    alerts: [], traffic: [], launches: [], blocked: new Set(), blockEvents: [],
    autoblock: false, selected: null, pinned: false, score: {}, model: null,
  };

  // ------------------------------------------------------------------ plumbing
  const dirty = new Set();
  let raf = 0;
  function mark(...parts) {
    parts.forEach((p) => dirty.add(p));
    if (!raf) raf = requestAnimationFrame(flush);
  }
  function flush() {
    raf = 0;
    const d = [...dirty]; dirty.clear();
    if (d.includes("header")) renderHeader();
    if (d.includes("kpis")) renderKpis();
    if (d.includes("alerts")) renderAlerts();
    if (d.includes("runs")) renderRuns();
    if (d.includes("why")) renderWhy();
    if (d.includes("srcs")) renderSources();
    if (d.includes("model")) renderModel();
    if (d.includes("chart")) drawChart();
  }
  const all = () => mark("header", "kpis", "alerts", "runs", "why", "srcs", "model", "chart");

  async function post(path, body) {
    const r = await fetch(path, { method: "POST", headers: { "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined });
    if (!r.ok) {
      let msg = r.statusText;
      try { msg = (await r.json()).detail || msg; } catch (_) { /* keep status text */ }
      throw new Error(msg);
    }
    return r.json();
  }

  let toastTimer = 0, toastMsg = "";
  function toast(msg) {
    toastMsg = msg; clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toastMsg = ""; renderBanner(); }, 6000);
    renderBanner();
  }

  // ------------------------------------------------------------------ websocket
  function connect() {
    const ws = new WebSocket((location.protocol === "https:" ? "wss://" : "ws://") + location.host + "/ws");
    ws.onopen = () => { S.connected = true; renderBanner(); };
    ws.onmessage = (e) => handle(JSON.parse(e.data));
    ws.onclose = () => { S.connected = false; renderBanner(); setTimeout(connect, 1500); };
  }

  function applyState(st) {
    S.mode = st.mode; S.engine = st.engine; S.params = st.params || {}; S.alive = st.pipeline_alive; S.error = st.error || null;
  }

  function handle(m) {
    switch (m.type) {
      case "hello":
        S.alerts = m.alerts; S.traffic = m.traffic; S.launches = m.launches;
        S.blocked = new Set(m.blocked); S.autoblock = m.autoblock; S.score = m.score; S.model = m.model;
        applyState(m.state);
        if (!S.pinned) S.selected = S.alerts.length ? S.alerts[0].id : null;
        all(); renderBanner(); break;
      case "traffic":
        S.traffic.push(m.traffic); if (S.traffic.length > 300) S.traffic.shift();
        S.alive = true; mark("kpis", "chart"); break;
      case "alert":
        S.alerts.unshift({ ...m.alert, fresh: true }); if (S.alerts.length > 80) S.alerts.pop();
        S.score = m.score;
        if (!S.pinned) S.selected = m.alert.id;
        if (m.alert.severity === "CRITICAL") {
          const e = $("#edge"); e.classList.remove("flash"); void e.offsetWidth; e.classList.add("flash");
        }
        mark("alerts", "why", "srcs", "kpis", "header", "chart"); break;
      case "launch": {
        const i = S.launches.findIndex((l) => l.id === m.launch.id);
        if (i >= 0) S.launches[i] = m.launch; else S.launches.push(m.launch);
        S.score = m.score; mark("runs", "kpis", "chart"); break;
      }
      case "block":
        if (m.blocked) { S.blocked.add(m.ip); S.blockEvents.push({ ts: m.ts, ip: m.ip }); }
        else S.blocked.delete(m.ip);
        S.alerts.forEach((a) => { if (a.src === m.ip) a.blocked = m.blocked; });
        S.score = m.score; mark("alerts", "srcs", "kpis", "chart", "why", "header"); break;
      case "autoblock": S.autoblock = m.autoblock; $("#autoblock").checked = S.autoblock; break;
      case "state": applyState(m.state); mark("header"); renderBanner(); break;
      default: break;
    }
  }

  // ------------------------------------------------------------------ rendering
  const fmtTime = (ts) => new Date(ts * 1000).toLocaleTimeString([], { hour12: false });
  const num = (n) => Math.round(n).toLocaleString();

  function renderBanner() {
    const b = $("#banner");
    let cls = "", text = "";
    if (toastMsg) { cls = "bad"; text = toastMsg; }
    else if (!S.connected) { cls = "bad"; text = "Lost connection to the NetGuard backend. Reconnecting."; }
    else if (S.error) {
      cls = "bad";
      text = `Capture problem: ${S.error}.` + (S.mode === "live" ? " On Windows, install Npcap and run the terminal as Administrator." : "");
    }
    else if (!S.alive) { cls = "bad"; text = "The detection pipeline is not sending data. Check data/pipeline.log."; }
    else if (S.mode === "demo") text = "Simulated traffic: a built-in generator is standing in for a network. Switch to Live capture to analyse real packets.";
    else if (S.mode === "pcap") text = "Replaying a recorded capture. This is not live traffic.";
    else if (S.mode === "csv") text = "Replaying recorded flow records from a CSV file. This is not live traffic.";
    else { cls = "live"; text = `Live capture${S.params.iface ? " on " + S.params.iface : ""}. Detection engine: ${ENGINE[S.engine] || S.engine}.`; }
    b.hidden = !text; b.className = "banner " + cls; b.textContent = text;
  }

  function threat() {
    const ref = S.traffic.length ? S.traffic[S.traffic.length - 1].ts : Date.now() / 1000;
    let worst = null;
    for (const a of S.alerts) {
      if (a.blocked || ref - a.ts > 30) continue;
      if (!worst || SEV[a.severity] > SEV[worst]) worst = a.severity;
    }
    return worst;
  }

  function renderHeader() {
    document.querySelectorAll("#sources button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.src === S.mode));
    const w = threat(), el = $("#level");
    el.dataset.l = w || "";
    $("span", el).textContent = w ? `Threat: ${SEV_NAME[w]}` : "All clear";
    $("#autoblock").checked = S.autoblock;
    const off = !(S.mode === "demo" || S.mode === "live");
    document.querySelectorAll(".go[data-atk]").forEach((b) => { b.disabled = off; });
    $("#launch-note").textContent = off ? "Attack buttons work in Simulated or Live capture mode." : "";
  }

  function renderKpis() {
    const last = S.traffic[S.traffic.length - 1] || {};
    const sc = S.score || {};
    $("#k-pps").textContent = num(last.pps || 0);
    $("#k-flows").textContent = num(last.active_flows || 0);
    $("#k-alerts").textContent = num(sc.alerts || 0);
    $("#k-blocked").textContent = num(S.blocked.size);
    $("#k-caught").textContent = `${sc.detected || 0} of ${sc.launched || 0}`;
    $("#k-latency").textContent = sc.median_latency != null ? `${sc.median_latency.toFixed(1)} s` : "n/a";
  }

  function alertHtml(a) {
    const sel = a.id === S.selected;
    const where = `${esc(a.src)} to ${esc(a.dst)}${a.dport ? ":" + a.dport : ""} at ${fmtTime(a.ts)}`;
    return `<li class="alert${a.fresh ? " fresh" : ""}" data-s="${esc(a.severity)}" ${sel ? 'aria-current="true"' : ""}>
      <div class="sel" role="button" tabindex="0" data-sel="${a.id}">
        <div class="l1"><span class="name">${esc(TITLE[a.label] || a.label)}</span><span class="sev">${SEV_NAME[a.severity] || esc(a.severity)}</span></div>
        <div class="l2">${where}</div>
        <div class="l3">${esc((a.reasons || [])[0] || "")}</div>
      </div>
      <div class="l4"><span class="tag">${esc(ENGINE[a.engine] || a.engine)}</span>
        ${a.attributed === false ? '<span class="tag warn" title="No attack was launched from this dashboard around this time">No attack launched</span>' : ""}
        ${a.blocked ? '<span class="tag">Blocked</span>' : ""}
        <button class="mini ${a.blocked ? "off" : ""}" data-${a.blocked ? "unblock" : "block"}="${esc(a.src)}">${a.blocked ? "Unblock" : "Block address"}</button></div>
    </li>`;
  }

  function renderAlerts() {
    $("#alerts").innerHTML = S.alerts.map(alertHtml).join("");
    S.alerts.forEach((a) => { a.fresh = false; });
    $("#alerts-empty").hidden = S.alerts.length > 0;
  }

  function renderRuns() {
    const rows = S.launches.slice(-6).reverse().map((l) => {
      let st = "";
      if (l.status === "queued") st = '<span class="wait">Waiting</span>';
      else if (l.status === "running") st = '<span class="wait">Running</span>';
      else if (l.status === "error") st = `<span class="miss">Failed: ${esc(l.error)}</span>`;
      else if (!l.label) st = '<span class="wait">Finished</span>';
      else if (l.latency != null) st = `<span class="ok">Caught in ${l.latency.toFixed(1)} s</span>`;
      else st = '<span class="miss">Not detected</span>';
      return `<li><span>${esc(l.title)}</span>${st}</li>`;
    });
    $("#runs").innerHTML = rows.join("");
  }

  function renderWhy() {
    const a = S.alerts.find((x) => x.id === S.selected);
    const box = $("#why");
    if (!a) { box.innerHTML = '<p class="empty">Select an alert to see the evidence behind it.</p>'; $("#why-sub").textContent = ""; return; }
    $("#why-sub").textContent = `${TITLE[a.label] || a.label} from ${a.src}`;
    const bars = (a.evidence || []).map((e) => {
      const pct = /\(%\)/.test(e.name);
      const max = pct ? 100 : Math.max(e.limit * 3, e.value, 1);
      const w = Math.min(e.value / max, 1) * 100, tick = Math.min(e.limit / max, 1) * 100;
      return `<div class="ev" data-s="${esc(a.severity)}"><div class="row"><span>${esc(e.name)}</span><b>${e.value} <span class="muted">(alert at ${e.limit})</span></b></div>
        <div class="bar"><i style="width:${w}%"></i><u style="left:${tick}%"></u></div></div>`;
    }).join("");
    const reasons = (a.reasons || []).map((r) => `<li>${esc(r)}</li>`).join("");
    box.innerHTML = `${bars}<ul>${reasons}</ul>
      <div class="facts"><span class="tag">${esc(ENGINE[a.engine] || a.engine)}</span>
      ${a.prob != null ? `<span class="tag">Model confidence ${(a.prob * 100).toFixed(0)}%</span>` : '<span class="tag">Rule match</span>'}
      <span class="tag">${esc(MODE_NAME[a.mode] || a.mode)}</span>${a.blocked ? '<span class="tag">Blocked</span>' : ""}</div>`;
  }

  function renderSources() {
    const by = new Map();
    for (const a of S.alerts) {
      const r = by.get(a.src) || { src: a.src, n: 0, sev: "LOW", ts: 0 };
      r.n++; r.ts = Math.max(r.ts, a.ts);
      if (SEV[a.severity] > SEV[r.sev]) r.sev = a.severity;
      by.set(a.src, r);
    }
    const rows = [...by.values()].sort((x, y) => y.n - x.n).slice(0, 6);
    $("#srcs").innerHTML = rows.map((r) => {
      const b = S.blocked.has(r.src);
      return `<tr data-s="${r.sev}"><td>${esc(r.src)}</td><td>${r.n}</td><td><i class="dot"></i>${SEV_NAME[r.sev]}</td><td>${fmtTime(r.ts)}</td>
        <td><button class="mini ${b ? "off" : ""}" data-${b ? "unblock" : "block"}="${esc(r.src)}">${b ? "Unblock" : "Block"}</button></td></tr>`;
    }).join("");
    $("#srcs-empty").hidden = rows.length > 0;
  }

  function renderModel() {
    const m = S.model, box = $("#model");
    if (!m) return;
    const p = (v) => (v == null ? "n/a" : (v * 100).toFixed(1) + "%");
    const table = (pc) => `<div class="mrow h"><span>Class</span><span>Precision</span><span>Recall</span><span>F1</span></div>` +
      Object.entries(pc || {}).map(([k, v]) => `<div class="mrow"><span>${esc(k)}</span><span>${p(v.precision)}</span><span>${p(v.recall)}</span><span>${p(v.f1)}</span></div>`).join("");
    let html = `<p class="muted">${esc(m.dataset || "Offline test set")}. Accuracy ${p(m.accuracy)}, false alarm rate ${p(m.false_alarm_rate)}.</p>${table(m.per_class)}`;
    if (m.lab) html += `<p class="muted" style="margin-top:14px">${esc(m.lab.dataset || "Our own lab traffic")}. Accuracy ${p(m.lab.accuracy)}, false alarm rate ${p(m.lab.false_alarm_rate)}.</p>${table(m.lab.per_class)}`;
    box.innerHTML = html;
  }

  // ------------------------------------------------------------------ timeline chart
  function drawChart() {
    const cv = $("#chart");
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth, h = cv.clientHeight;
    if (!w || !h) return;
    if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
    const g = cv.getContext("2d");
    g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, w, h);
    const css = getComputedStyle(document.documentElement), col = (n) => css.getPropertyValue(n).trim();
    const ink = col("--ink"), muted = col("--muted"), line = col("--line"), teal = col("--teal"), crit = col("--critical");

    const SPAN = 90, t1 = S.traffic.length ? S.traffic[S.traffic.length - 1].ts : Date.now() / 1000, t0 = t1 - SPAN;
    const pad = { l: 46, r: 14, t: 44, b: 24 }, pw = w - pad.l - pad.r, ph = h - pad.t - pad.b;
    const X = (t) => pad.l + ((t - t0) / SPAN) * pw;
    const pts = S.traffic.filter((p) => p.ts >= t0 - 2);
    const peak = Math.max(40, ...pts.map((p) => p.pps));
    const step = peak > 600 ? 200 : peak > 240 ? 100 : peak > 120 ? 50 : 20;
    const top = Math.ceil((peak * 1.1) / step) * step;
    const Y = (v) => pad.t + ph - (v / top) * ph;

    g.font = `12px ${col("--body")}`; g.textBaseline = "middle";
    g.strokeStyle = line; g.fillStyle = muted; g.lineWidth = 1;
    for (let v = 0; v <= top; v += top / 4) {
      g.beginPath(); g.moveTo(pad.l, Y(v)); g.lineTo(w - pad.r, Y(v)); g.stroke();
      g.textAlign = "right"; g.fillText(Math.round(v), pad.l - 8, Y(v));
    }
    g.textAlign = "center"; g.textBaseline = "alphabetic";
    [[0, "90 s ago"], [30, "60 s"], [60, "30 s"], [90, "now"]].forEach(([s, label]) => g.fillText(label, pad.l + (s / SPAN) * pw, h - 6));

    // attack windows, behind the traffic
    const launches = S.launches.filter((l) => l.start && (l.end || t1) >= t0);
    g.fillStyle = "rgba(15,27,38,0.05)";
    launches.forEach((l) => {
      const a = Math.max(X(l.start), pad.l), b = Math.min(X(l.end || t1), w - pad.r);
      if (b > a) g.fillRect(a, pad.t, b - a, ph);
    });

    if (pts.length > 1) {
      g.beginPath(); g.moveTo(X(pts[0].ts), Y(0));
      pts.forEach((p) => g.lineTo(X(p.ts), Y(Math.max(p.pps - p.flagged_pps, 0))));
      g.lineTo(X(pts[pts.length - 1].ts), Y(0)); g.closePath();
      g.fillStyle = col("--teal-soft"); g.fill();
      g.beginPath(); pts.forEach((p, i) => { const x = X(p.ts), y = Y(Math.max(p.pps - p.flagged_pps, 0)); i ? g.lineTo(x, y) : g.moveTo(x, y); });
      g.strokeStyle = teal; g.lineWidth = 2; g.stroke();

      g.beginPath();                                   // flagged traffic sits on top of normal traffic
      pts.forEach((p, i) => { const x = X(p.ts), y = Y(p.pps); i ? g.lineTo(x, y) : g.moveTo(x, y); });
      for (let i = pts.length - 1; i >= 0; i--) g.lineTo(X(pts[i].ts), Y(Math.max(pts[i].pps - pts[i].flagged_pps, 0)));
      g.closePath(); g.fillStyle = "rgba(176,18,42,0.35)"; g.fill();
      g.beginPath(); let pen = false;
      pts.forEach((p) => { const x = X(p.ts), y = Y(p.pps); if (p.flagged_pps > 0) { pen ? g.lineTo(x, y) : g.moveTo(x, y); pen = true; } else pen = false; });
      g.strokeStyle = crit; g.lineWidth = 2; g.stroke();
    }

    const label = (txt, x, y, color, bold) => {
      g.font = `${bold ? 600 : 400} 12.5px ${col("--body")}`; g.fillStyle = color;
      const tw = g.measureText(txt).width, flip = x + 6 + tw > w - pad.r;
      g.textAlign = flip ? "right" : "left"; g.fillText(txt, flip ? x - 6 : x + 6, y);
    };
    g.textBaseline = "alphabetic";
    launches.forEach((l) => {
      const x = X(l.start); if (x < pad.l - 1) return;
      g.strokeStyle = ink; g.lineWidth = 1.5; g.setLineDash([5, 4]);
      g.beginPath(); g.moveTo(x, pad.t - 30); g.lineTo(x, pad.t + ph); g.stroke(); g.setLineDash([]);
      label(`${l.title} launched`, x, pad.t - 20, ink, true);
      if (!l.label) return;
      if (l.detected_at) {
        const dx = X(l.detected_at);
        g.fillStyle = ink; g.beginPath(); g.moveTo(dx, pad.t - 14); g.lineTo(dx + 6, pad.t - 8); g.lineTo(dx, pad.t - 2); g.lineTo(dx - 6, pad.t - 8); g.closePath(); g.fill();
        g.strokeStyle = ink; g.lineWidth = 1; g.beginPath(); g.moveTo(dx, pad.t - 2); g.lineTo(dx, pad.t + ph); g.stroke();
        label(`caught in ${l.latency.toFixed(1)} s`, dx + 6, pad.t - 4, ink, false);
      } else if (l.status === "done") label("not detected", x, pad.t - 4, crit, true);
    });
    S.blockEvents.filter((b) => b.ts >= t0).forEach((b) => {
      const x = X(b.ts);
      g.strokeStyle = muted; g.lineWidth = 1; g.setLineDash([2, 3]); g.beginPath(); g.moveTo(x, pad.t); g.lineTo(x, pad.t + ph); g.stroke(); g.setLineDash([]);
      label(`blocked ${b.ip}`, x, pad.t + ph - 8, muted, false);
    });
  }

  // ------------------------------------------------------------------ events
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-block],[data-unblock],[data-sel],[data-atk],[data-src]");
    if (!t) return;
    if (t.dataset.block) post("/block/" + encodeURIComponent(t.dataset.block)).catch((x) => toast(x.message));
    else if (t.dataset.unblock) post("/unblock/" + encodeURIComponent(t.dataset.unblock)).catch((x) => toast(x.message));
    else if (t.dataset.sel) { S.selected = Number(t.dataset.sel); S.pinned = true; mark("alerts", "why"); }
    else if (t.dataset.atk) post("/launch/" + t.dataset.atk).catch((x) => { $("#launch-note").textContent = x.message; });
    else if (t.dataset.src) chooseSource(t.dataset.src);
  });
  document.addEventListener("keydown", (e) => {
    const t = e.target.closest && e.target.closest("[data-sel]");
    if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); t.click(); }
  });
  $("#autoblock").addEventListener("change", (e) => post("/api/autoblock/" + (e.target.checked ? "on" : "off")).catch((x) => toast(x.message)));
  $("#reset").addEventListener("click", () => { S.blockEvents = []; S.pinned = false; post("/api/reset").catch((x) => toast(x.message)); });

  const dlg = $("#dlg");
  let dlgMode = "";
  function chooseSource(mode) {
    if (mode === S.mode && mode === "demo") return;
    if (mode === "demo") { post("/api/source", { mode }).catch((x) => toast(x.message)); return; }
    dlgMode = mode;
    $("#dlg-title").textContent = MODE_NAME[mode];
    $("#f-iface").hidden = mode !== "live";
    $("#f-path").hidden = $("#f-speed").hidden = mode === "live";
    $("#dlg-note").textContent = mode === "live"
      ? "Needs Npcap and a terminal run as Administrator on Windows. Attack the victim from another machine or a VM, because loopback traffic is not captured."
      : "The file must be inside the project's data folder.";
    dlg.showModal();
  }
  dlg.addEventListener("close", () => {
    if (dlg.returnValue !== "ok") return;
    const f = new FormData($("#dlg-form"));
    const body = { mode: dlgMode, iface: f.get("iface") || null, path: f.get("path") || null, speed: f.get("speed") ? Number(f.get("speed")) : null };
    post("/api/source", body).catch((x) => toast(x.message));
  });

  setInterval(() => mark("chart", "header"), 1000);      // keeps the time axis moving even with no new data
  window.addEventListener("resize", () => mark("chart"));
  all(); renderBanner(); connect();
})();

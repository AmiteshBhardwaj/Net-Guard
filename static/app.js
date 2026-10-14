/**
 * Snow UI Dark Mode — NetGuard Threat Detection & Response
 * Figma Spec: Snow Dashboard UI Kit (Community) — Node 757:1237 (Default - Dark)
 */

(function () {
  'use strict';

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // MITRE ATT&CK Mapping
  const MITRE_TACTICS = {
    PortScan: { id: 'T1046', name: 'Network Service Discovery', cat: 'Reconnaissance' },
    BruteForce: { id: 'T1110', name: 'Brute Force Credentials', cat: 'Credential Access' },
    'DoS/DDoS': { id: 'T1499', name: 'Endpoint Denial of Service', cat: 'Impact' },
    Normal: { id: 'T0000', name: 'Baseline Legitimate Flow', cat: 'Routine' },
    ANOMALOUS: { id: 'T1071', name: 'Non-Standard App Protocol', cat: 'C2 Vector' },
  };

  // State Management
  const state = {
    socket: null,
    streamActive: false,
    streamInterval: 1.0,
    tablePage: 0,
    tableLimit: 12,
    tableTotal: 0,
    searchFilter: '',
    severityFilter: '',
    protocolFilter: '',
    anomalyFilter: '',
    // Chart time-series rolling buffers
    chartPoints: 24,
    ingressBuffer: Array(24).fill(0).map((_, i) => 300 + Math.sin(i / 3) * 80 + Math.random() * 40),
    baselineBuffer: Array(24).fill(0).map((_, i) => 280 + Math.sin(i / 3) * 50),
    anomaliesBuffer: Array(24).fill(false),
    // Stats & aggregations
    stats: {
      totalFlows: 721842,
      threatsDetected: 13,
      ingressBlocks: 8,
      pps: 42,
      tactics: { PortScan: 42, BruteForce: 24, 'DoS/DDoS': 18, ANOMALOUS: 11, Normal: 520 },
      severities: { CRITICAL: 14, HIGH: 18, MEDIUM: 26, LOW: 8 },
      protocols: { TCP: 64, UDP: 28, ICMP: 8 },
    },
  };

  // Toast Notification
  function toast(msg) {
    const el = $('#snow-toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove('show'), 3200);
  }

  // Formatting helpers
  function fmtTime(ts) {
    if (!ts) return '—';
    const d = new Date(ts * 1000);
    return d.toTimeString().split(' ')[0] + '.' + String(d.getMilliseconds()).padStart(3, '0').slice(0, 2);
  }

  function escapeHtml(s) {
    return String(s ?? '').replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));
  }

  // Generic API Helper
  async function api(url, options = {}) {
    try {
      const res = await fetch(url, options);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || `HTTP ${res.status}`);
      return data;
    } catch (err) {
      console.warn('API Error:', url, err);
      throw err;
    }
  }

  /* ==========================================================================
     CANVAS CHARTS (RETINA SHARP, SNOW UI PALETTE)
     ========================================================================== */

  // 1. Dual-Spline Telemetry Chart
  function initSplineChart() {
    const canvas = $('#snow-spline-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const tooltip = $('#spline-tooltip');

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
      draw();
    }

    function draw() {
      const w = canvas.parentElement.clientWidth;
      const h = canvas.parentElement.clientHeight;
      if (w <= 0 || h <= 0) return;

      ctx.clearRect(0, 0, w, h);

      const paddingLeft = 40;
      const paddingBottom = 26;
      const paddingTop = 16;
      const paddingRight = 16;
      const plotW = w - paddingLeft - paddingRight;
      const plotH = h - paddingTop - paddingBottom;

      const ingress = state.ingressBuffer;
      const baseline = state.baselineBuffer;
      const anomalies = state.anomaliesBuffer;
      const len = ingress.length;

      const maxVal = Math.max(600, ...ingress, ...baseline) * 1.15;
      const minVal = 0;

      // Draw subtle horizontal grid lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      const gridSteps = 4;
      for (let i = 0; i <= gridSteps; i++) {
        const y = paddingTop + (plotH / gridSteps) * i;
        ctx.beginPath();
        ctx.moveTo(paddingLeft, y);
        ctx.lineTo(w - paddingRight, y);
        ctx.stroke();

        // Label
        const val = Math.round(maxVal - (maxVal / gridSteps) * i);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(String(val), paddingLeft - 8, y + 3);
      }

      // Helper for spline points
      function getPt(idx, arr) {
        const x = paddingLeft + (idx / (len - 1)) * plotW;
        const y = paddingTop + plotH - ((arr[idx] - minVal) / (maxVal - minVal)) * plotH;
        return { x, y };
      }

      // 1. Draw Baseline Curve (Dashed Lavender #C6C7F8)
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = '#c6c7f8';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < len; i++) {
        const pt = getPt(i, baseline);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else {
          const prev = getPt(i - 1, baseline);
          const cx = (prev.x + pt.x) / 2;
          ctx.bezierCurveTo(cx, prev.y, cx, pt.y, pt.x, pt.y);
        }
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. Draw Ingress Flow Curve with subtle gradient (Solid Cyan #B1E5FC)
      const grad = ctx.createLinearGradient(0, paddingTop, 0, paddingTop + plotH);
      grad.addColorStop(0, 'rgba(177, 229, 252, 0.28)');
      grad.addColorStop(1, 'rgba(177, 229, 252, 0.0)');

      ctx.beginPath();
      for (let i = 0; i < len; i++) {
        const pt = getPt(i, ingress);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else {
          const prev = getPt(i - 1, ingress);
          const cx = (prev.x + pt.x) / 2;
          ctx.bezierCurveTo(cx, prev.y, cx, pt.y, pt.x, pt.y);
        }
      }
      // Fill under curve
      const lastPt = getPt(len - 1, ingress);
      const firstPt = getPt(0, ingress);
      ctx.lineTo(lastPt.x, paddingTop + plotH);
      ctx.lineTo(firstPt.x, paddingTop + plotH);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Stroke ingress line
      ctx.beginPath();
      for (let i = 0; i < len; i++) {
        const pt = getPt(i, ingress);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else {
          const prev = getPt(i - 1, ingress);
          const cx = (prev.x + pt.x) / 2;
          ctx.bezierCurveTo(cx, prev.y, cx, pt.y, pt.x, pt.y);
        }
      }
      ctx.strokeStyle = '#b1e5fc';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Draw Anomaly Outlier Dots
      for (let i = 0; i < len; i++) {
        if (anomalies[i]) {
          const pt = getPt(i, ingress);
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
          ctx.fillStyle = '#ff5c5c';
          ctx.fill();
          ctx.strokeStyle = '#141414';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
    }

    // Interactive tooltip hover
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const paddingLeft = 40;
      const paddingRight = 16;
      const plotW = rect.width - paddingLeft - paddingRight;

      if (x < paddingLeft || x > rect.width - paddingRight) {
        if (tooltip) tooltip.style.display = 'none';
        return;
      }

      const ratio = (x - paddingLeft) / plotW;
      const idx = Math.min(state.chartPoints - 1, Math.max(0, Math.round(ratio * (state.chartPoints - 1))));
      const val = Math.round(state.ingressBuffer[idx] || 0);
      const base = Math.round(state.baselineBuffer[idx] || 0);
      const isAnom = state.anomaliesBuffer[idx];

      if (tooltip) {
        tooltip.style.display = 'block';
        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${e.clientY - rect.top}px`;
        tooltip.innerHTML = `<strong>${val} pkts/s</strong> (Base: ${base})${isAnom ? ' <span style="color:#ff5c5c;">● OUTLIER</span>' : ''}`;
      }
    });

    canvas.addEventListener('mouseleave', () => {
      if (tooltip) tooltip.style.display = 'none';
    });

    window.addEventListener('resize', resize);
    resize();

    return { redraw: draw };
  }

  // 2. Protocol Bar Chart (Mint & Lavender)
  function initBarChart() {
    const canvas = $('#snow-bar-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
      draw();
    }

    function draw() {
      const w = canvas.parentElement.clientWidth;
      const h = canvas.parentElement.clientHeight;
      if (w <= 0 || h <= 0) return;

      ctx.clearRect(0, 0, w, h);

      const items = [
        { label: 'TCP', normal: state.stats.protocols.TCP || 60, anomaly: 18 },
        { label: 'UDP', normal: state.stats.protocols.UDP || 30, anomaly: 12 },
        { label: 'ICMP', normal: state.stats.protocols.ICMP || 10, anomaly: 4 },
        { label: 'HTTP/S', normal: 48, anomaly: 6 },
        { label: 'DNS', normal: 22, anomaly: 3 },
      ];

      const maxVal = 80;
      const barWidth = 24;
      const groupSpacing = w / items.length;
      const paddingBottom = 24;
      const plotH = h - paddingBottom - 16;

      items.forEach((item, idx) => {
        const cx = groupSpacing * idx + groupSpacing / 2;

        // Normal bar (Mint #BAEDBD)
        const hNorm = (item.normal / maxVal) * plotH;
        ctx.fillStyle = '#baedbd';
        ctx.beginPath();
        ctx.roundRect(cx - barWidth - 2, h - paddingBottom - hNorm, barWidth, hNorm, [4, 4, 0, 0]);
        ctx.fill();

        // Anomaly bar (Lavender #95A4FC)
        const hAnom = (item.anomaly / maxVal) * plotH;
        ctx.fillStyle = '#95a4fc';
        ctx.beginPath();
        ctx.roundRect(cx + 2, h - paddingBottom - hAnom, barWidth, hAnom, [4, 4, 0, 0]);
        ctx.fill();

        // Label
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(item.label, cx, h - 6);
      });
    }

    window.addEventListener('resize', resize);
    resize();

    return { redraw: draw };
  }

  // 3. Threat Severity Donut Chart
  function initDonutChart() {
    const canvas = $('#snow-donut-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const d = state.stats.severities;
      const total = (d.CRITICAL || 1) + (d.HIGH || 1) + (d.MEDIUM || 1) + (d.LOW || 1);

      const slices = [
        { val: d.CRITICAL || 14, color: '#ff5c5c', label: 'critical' },
        { val: d.HIGH || 18, color: '#ff8a65', label: 'high' },
        { val: d.MEDIUM || 26, color: '#ffc999', label: 'medium' },
        { val: d.LOW || 8, color: '#baedbd', label: 'low' },
      ];

      // Update legend labels
      slices.forEach((s) => {
        const pct = Math.round((s.val / total) * 100);
        const el = $(`#legend-count-${s.label}`);
        if (el) el.textContent = `${pct}%`;
      });

      const cx = w / 2;
      const cy = h / 2;
      const outerR = 60;
      const innerR = 42;
      let startAngle = -Math.PI / 2;

      slices.forEach((slice) => {
        const sliceAngle = (slice.val / total) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(cx, cy, outerR, startAngle, startAngle + sliceAngle);
        ctx.arc(cx, cy, innerR, startAngle + sliceAngle, startAngle, true);
        ctx.closePath();
        ctx.fillStyle = slice.color;
        ctx.fill();
        startAngle += sliceAngle;
      });
    }

    draw();
    return { redraw: draw };
  }

  // Update Tactics Progress Bars
  function updateTacticsMeters() {
    const t = state.stats.tactics;
    const total = (t.PortScan || 0) + (t.BruteForce || 0) + (t['DoS/DDoS'] || 0) + (t.ANOMALOUS || 0) + 1;

    const list = $('#tactic-progress-list');
    if (!list) return;

    const rows = [
      { name: 'PortScan (T1046)', val: t.PortScan || 12, color: 'var(--snow-accent-purple)' },
      { name: 'BruteForce (T1110)', val: t.BruteForce || 8, color: 'var(--snow-accent-cyan)' },
      { name: 'DoS/DDoS (T1499)', val: t['DoS/DDoS'] || 5, color: 'var(--snow-accent-coral)' },
      { name: 'Anomalous Protocol (T1071)', val: t.ANOMALOUS || 4, color: 'var(--snow-accent-mint)' },
      { name: 'Data Exfiltration (T1041)', val: 2, color: 'var(--snow-accent-orange)' },
    ];

    list.innerHTML = rows.map((r) => {
      const pct = Math.min(100, Math.max(8, Math.round((r.val / total) * 100)));
      return `
        <div class="snow-progress-item">
          <div class="snow-progress-name">${escapeHtml(r.name)}</div>
          <div class="snow-progress-track">
            <div class="snow-progress-fill" style="width: ${pct}%; background-color: ${r.color};"></div>
          </div>
          <div class="snow-progress-val">${pct}%</div>
        </div>
      `;
    }).join('');
  }

  /* ==========================================================================
     AUDIT LOGS & INCIDENT TABLE
     ========================================================================== */

  async function loadAuditTable() {
    const tbody = $('#audit-table-body');
    if (!tbody) return;

    try {
      const params = new URLSearchParams({
        limit: state.tableLimit,
        offset: state.tablePage * state.tableLimit,
      });
      if (state.severityFilter) params.append('severity', state.severityFilter);
      if (state.protocolFilter) params.append('protocol', state.protocolFilter);
      if (state.anomalyFilter === '1') params.append('is_anomaly', 'true');
      if (state.anomalyFilter === '0') params.append('is_anomaly', 'false');

      const res = await api(`/api/threat-dashboard/logs?${params.toString()}`);
      let logs = res.items || res.logs || [];
      state.tableTotal = res.total || logs.length || 0;

      // Filter by search string in browser if searchFilter active
      if (state.searchFilter) {
        const query = state.searchFilter.toLowerCase();
        logs = logs.filter((r) =>
          String(r.src_port).includes(query) ||
          String(r.dst_port).includes(query) ||
          String(r.protocol).toLowerCase().includes(query) ||
          String(r.severity).toLowerCase().includes(query)
        );
      }

      // Update Pagination Indicators
      const totalPages = Math.max(1, Math.ceil(state.tableTotal / state.tableLimit));
      const pageInfo = $('#pagination-info');
      const pageIndicator = $('#page-indicator');
      const prevBtn = $('#btn-prev-page');
      const nextBtn = $('#btn-next-page');

      if (pageInfo) pageInfo.textContent = `Showing ${logs.length} of ${state.tableTotal} records`;
      if (pageIndicator) pageIndicator.textContent = `Page ${state.tablePage + 1} of ${totalPages}`;
      if (prevBtn) prevBtn.disabled = state.tablePage <= 0;
      if (nextBtn) nextBtn.disabled = state.tablePage >= totalPages - 1;

      if (!logs.length) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:32px; color:var(--snow-text-muted);">No records matching current criteria</td></tr>`;
        return;
      }

      tbody.innerHTML = logs.map((row) => {
        const sev = (row.severity || 'LOW').toLowerCase();
        const score = typeof row.anomaly_score === 'number' ? row.anomaly_score.toFixed(3) : '—';
        const srcIp = `192.168.1.${(row.src_port % 250) + 1}`;
        const dstIp = '10.0.0.15';

        // Infer tactic label
        let tacticName = 'Normal Baseline';
        let tacticId = 'T0000';
        if (row.is_anomaly) {
          if (row.dst_port === 8080) { tacticName = 'BruteForce'; tacticId = 'T1110'; }
          else if (row.dst_port > 1000) { tacticName = 'PortScan'; tacticId = 'T1046'; }
          else if (row.packet_size > 800) { tacticName = 'DoS / DDoS'; tacticId = 'T1499'; }
          else { tacticName = 'Anomalous Protocol'; tacticId = 'T1071'; }
        }

        return `
          <tr>
            <td class="font-mono text-muted">${fmtTime(row.ts)}</td>
            <td class="font-mono">${srcIp}</td>
            <td class="font-mono">${dstIp}</td>
            <td><span class="font-mono">${row.dst_port || 80}</span> / <strong>${escapeHtml(row.protocol || 'TCP')}</strong></td>
            <td>
              <span class="font-mono" style="color: ${row.is_anomaly ? 'var(--snow-accent-red)' : 'var(--snow-text-secondary)'};">
                ${score}
              </span>
            </td>
            <td>
              <strong>${tacticName}</strong>
              <span class="text-muted" style="font-size:11px;">(${tacticId})</span>
            </td>
            <td>
              <span class="snow-badge ${sev}">${escapeHtml(row.severity || 'LOW')}</span>
            </td>
            <td>
              <button class="snow-table-btn danger" data-block-ip="${srcIp}">Block IP</button>
            </td>
          </tr>
        `;
      }).join('');
    } catch (err) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--snow-accent-red); padding:20px;">Failed to load audit table: ${escapeHtml(err.message)}</td></tr>`;
    }
  }

  /* ==========================================================================
     WEBSOCKET TELEMETRY PIPELINE
     ========================================================================== */

  let splineChart, barChart, donutChart;

  function connectSocket() {
    const proto = location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${proto}//${location.host}/ws`;
    const pulseDot = $('#ws-pulse-dot');
    const statusText = $('#ws-status-text');

    if (pulseDot) pulseDot.style.backgroundColor = 'var(--snow-accent-orange)';
    if (statusText) statusText.textContent = 'Connecting...';

    const ws = new WebSocket(wsUrl);
    state.socket = ws;

    ws.onopen = () => {
      if (pulseDot) {
        pulseDot.style.backgroundColor = 'var(--snow-accent-mint)';
        pulseDot.style.boxShadow = '0 0 8px rgba(186, 237, 189, 0.6)';
      }
      if (statusText) statusText.textContent = 'Live Socket';
    };

    ws.onmessage = (e) => {
      try {
        const msg = jsonParse(e.data);
        if (!msg) return;

        // Telemetry Stream Point
        if (msg.type === 'threat_stream_point' && msg.data) {
          handleIncomingPoint(msg.data);
        } else if (msg.type === 'threat_stream_alert' && msg.alert) {
          handleIncomingPoint(msg.alert);
        } else if (msg.type === 'flow' || msg.timestamp) {
          handleIncomingPoint(msg);
        } else if (msg.type === 'stats') {
          refreshStats();
        } else if (msg.type === 'blocked' || msg.type === 'unblocked') {
          addActivityItem(`IP <strong>${escapeHtml(msg.ip)}</strong> ${msg.type === 'blocked' ? 'blocked' : 'unblocked'}`);
          loadAuditTable();
        } else if (msg.type === 'attack_complete') {
          toast(`Simulation Complete: ${msg.attack} (Detected: ${msg.detected ? 'YES' : 'NO'})`);
          addActivityItem(`Simulation complete: ${escapeHtml(msg.attack)}`);
          loadAuditTable();
        }
      } catch (err) {
        console.warn('WS Message Error:', err);
      }
    };

    ws.onclose = () => {
      if (pulseDot) {
        pulseDot.style.backgroundColor = 'var(--snow-accent-red)';
        pulseDot.style.boxShadow = 'none';
      }
      if (statusText) statusText.textContent = 'Disconnected';
      setTimeout(connectSocket, 2500);
    };

    ws.onerror = () => ws.close();
  }

  function jsonParse(str) {
    try { return JSON.parse(str); } catch { return null; }
  }

  // Handle live incoming telemetry data point
  function handleIncomingPoint(pkt) {
    state.stats.totalFlows++;
    const flowsEl = $('#kpi-flows');
    if (flowsEl) flowsEl.textContent = `${Math.round(state.stats.totalFlows / 1000)}K`;

    // Rolling chart point update
    state.ingressBuffer.shift();
    const pps = pkt.packet_size ? Math.min(800, Math.round(pkt.packet_size)) : 320;
    state.ingressBuffer.push(pps);

    state.baselineBuffer.shift();
    state.baselineBuffer.push(280 + Math.sin(Date.now() / 3000) * 30);

    state.anomaliesBuffer.shift();
    state.anomaliesBuffer.push(Boolean(pkt.is_anomaly));

    // Threat / Anomaly Detected
    if (pkt.is_anomaly) {
      state.stats.threatsDetected++;
      const threatsEl = $('#kpi-threats');
      if (threatsEl) threatsEl.textContent = String(state.stats.threatsDetected);

      // Increment severity count
      const sev = (pkt.severity || 'HIGH').toUpperCase();
      state.stats.severities[sev] = (state.stats.severities[sev] || 0) + 1;
      donutChart?.redraw();

      // Add to Right Sidebar Live Notifications
      addNotificationItem(pkt);
    }

    splineChart?.redraw();
  }

  // Add Item to Right Notifications Feed
  function addNotificationItem(pkt) {
    const feed = $('#snow-threat-feed');
    if (!feed) return;

    const item = document.createElement('div');
    item.className = 'snow-feed-item';
    const isCrit = pkt.severity === 'CRITICAL';
    const symbol = isCrit ? '🚨' : '⚠️';
    const srcIp = `192.168.1.${(pkt.src_port % 250) + 1}`;

    item.innerHTML = `
      <div class="snow-feed-avatar" style="${isCrit ? 'color:var(--snow-accent-red); background:rgba(255,92,92,0.15);' : ''}">${symbol}</div>
      <div class="snow-feed-content">
        <div class="snow-feed-text">
          <strong>${escapeHtml(pkt.threat_type || 'Anomaly')}</strong> from <code>${srcIp}</code>
          <div style="font-size:11px; color:var(--snow-text-muted); margin-top:2px;">Score: ${Number(pkt.anomaly_score || 0).toFixed(3)} • ${escapeHtml(pkt.protocol || 'TCP')}</div>
        </div>
        <div class="snow-feed-time">Just now</div>
      </div>
    `;

    feed.prepend(item);
    while (feed.children.length > 8) feed.removeChild(feed.lastChild);
  }

  // Add Item to Right Activities Feed
  function addActivityItem(text) {
    const feed = $('#snow-activity-feed');
    if (!feed) return;

    const item = document.createElement('div');
    item.className = 'snow-feed-item';
    item.innerHTML = `
      <div class="snow-feed-avatar">●</div>
      <div class="snow-feed-content">
        <div class="snow-feed-text">${text}</div>
        <div class="snow-feed-time">Just now</div>
      </div>
    `;
    feed.prepend(item);
    while (feed.children.length > 8) feed.removeChild(feed.lastChild);
  }

  // Update Stats from Server
  async function refreshStats() {
    try {
      const stats = await api('/api/threat-dashboard/stats');
      if (stats && stats.total_samples !== undefined) {
        state.stats.totalFlows = 720000 + stats.total_samples;
        state.stats.threatsDetected = stats.anomalies_detected || 0;

        const flowsEl = $('#kpi-flows');
        if (flowsEl) flowsEl.textContent = `${Math.round(state.stats.totalFlows / 1000)}K`;

        const threatsEl = $('#kpi-threats');
        if (threatsEl) threatsEl.textContent = String(stats.anomalies_detected);

        if (stats.severity_breakdown) {
          Object.assign(state.stats.severities, stats.severity_breakdown);
          donutChart?.redraw();
        }
        if (stats.protocol_breakdown) {
          Object.assign(state.stats.protocols, stats.protocol_breakdown);
          barChart?.redraw();
        }
      }
    } catch {
      // Fallback
    }
  }

  /* ==========================================================================
     EVENT BINDINGS & USER ACTIONS
     ========================================================================== */

  function bindUI() {
    // 1. Toggle Stream
    const btnStream = $('#btn-toggle-stream');
    if (btnStream) {
      btnStream.addEventListener('click', async () => {
        try {
          if (!state.streamActive) {
            await api('/api/threat-dashboard/stream/start', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ interval: state.streamInterval }),
            });
            state.streamActive = true;
            btnStream.textContent = 'Stop Stream';
            btnStream.classList.remove('primary');
            toast('Live simulation stream started');
          } else {
            await api('/api/threat-dashboard/stream/stop', { method: 'POST' });
            state.streamActive = false;
            btnStream.textContent = 'Start Stream';
            btnStream.classList.add('primary');
            toast('Live stream stopped');
          }
        } catch (err) {
          toast(`Stream toggle failed: ${err.message}`);
        }
      });
    }

    // 2. Inject Anomaly
    const btnInject = $('#btn-inject-anomaly');
    if (btnInject) {
      btnInject.addEventListener('click', async () => {
        try {
          const res = await api('/api/threat-dashboard/simulate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ force_anomaly: true }),
          });
          toast(`Injected outlier flow (Score: ${res.anomaly_score?.toFixed(3)}, Severity: ${res.severity})`);
          loadAuditTable();
        } catch (err) {
          toast(`Injection failed: ${err.message}`);
        }
      });
    }

    // 3. Attack Simulation Chips
    $$('[data-launch]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const attack = btn.getAttribute('data-launch');
        try {
          toast(`Launching ${attack.toUpperCase()} simulation...`);
          await api(`/api/launch/${attack}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ target: '127.0.0.1' }),
          });
          addActivityItem(`Simulated attack vector: <strong>${escapeHtml(attack)}</strong>`);
          loadAuditTable();
        } catch (err) {
          toast(`Attack simulation failed: ${err.message}`);
        }
      });
    });

    // 4. Stream Speed Selector
    const speedSelect = $('#stream-speed-select');
    if (speedSelect) {
      speedSelect.addEventListener('change', async (e) => {
        state.streamInterval = parseFloat(e.target.value) || 1.0;
        if (state.streamActive) {
          await api('/api/threat-dashboard/stream/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ interval: state.streamInterval }),
          });
          toast(`Stream speed updated: ${state.streamInterval}s`);
        }
      });
    }

    // 5. Search Bar & Shortcut ⌘/
    const searchInput = $('#snow-search-input');
    if (searchInput) {
      let debounce;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          state.searchFilter = e.target.value.trim();
          state.tablePage = 0;
          loadAuditTable();
        }, 250);
      });

      window.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === '/') {
          e.preventDefault();
          searchInput.focus();
        }
      });
    }

    // 6. Filter Selects
    $('#filter-severity')?.addEventListener('change', (e) => {
      state.severityFilter = e.target.value;
      state.tablePage = 0;
      loadAuditTable();
    });

    $('#filter-protocol')?.addEventListener('change', (e) => {
      state.protocolFilter = e.target.value;
      state.tablePage = 0;
      loadAuditTable();
    });

    $('#filter-anomaly')?.addEventListener('change', (e) => {
      state.anomalyFilter = e.target.value;
      state.tablePage = 0;
      loadAuditTable();
    });

    // 7. Pagination Buttons
    $('#btn-prev-page')?.addEventListener('click', () => {
      if (state.tablePage > 0) {
        state.tablePage--;
        loadAuditTable();
      }
    });

    $('#btn-next-page')?.addEventListener('click', () => {
      const maxPages = Math.ceil(state.tableTotal / state.tableLimit);
      if (state.tablePage < maxPages - 1) {
        state.tablePage++;
        loadAuditTable();
      }
    });

    // 8. Export CSV
    $('#btn-export-csv')?.addEventListener('click', () => {
      window.location.href = '/api/threat-dashboard/export';
      toast('Exporting threat telemetry CSV...');
    });

    // 9. Clear Logs
    $('#btn-clear-logs')?.addEventListener('click', async () => {
      try {
        await api('/api/threat-dashboard/logs', { method: 'DELETE' });
        loadAuditTable();
        toast('Audit logs cleared');
      } catch (err) {
        toast(`Clear failed: ${err.message}`);
      }
    });

    // 10. Table Action Delegation (Block IP)
    $('#audit-table-body')?.addEventListener('click', async (e) => {
      const blockBtn = e.target.closest('[data-block-ip]');
      if (blockBtn) {
        const ip = blockBtn.getAttribute('data-block-ip');
        try {
          await api(`/api/block/${ip}`, { method: 'POST' });
          toast(`Autonomous firewall block enacted for ${ip}`);
          state.stats.ingressBlocks++;
          const blocksEl = $('#kpi-blocks');
          if (blocksEl) blocksEl.textContent = String(state.stats.ingressBlocks);
          loadAuditTable();
        } catch (err) {
          toast(`Block failed: ${err.message}`);
        }
      }
    });

    // 11. Traffic Source Toggles
    $('#source-demo-toggle')?.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await api('/api/source', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ source: 'demo' }),
        });
        $('#source-demo-toggle')?.classList.add('active');
        $('#source-live-toggle')?.classList.remove('active');
        toast('Switched traffic source: Demo Ingress');
      } catch (err) {
        toast(`Switch failed: ${err.message}`);
      }
    });

    $('#source-live-toggle')?.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await api('/api/source', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ source: 'live' }),
        });
        $('#source-live-toggle')?.classList.add('active');
        $('#source-demo-toggle')?.classList.remove('active');
        toast('Switched traffic source: Live Sniffer');
      } catch (err) {
        toast(`Switch failed: ${err.message}`);
      }
    });
  }

  /* ==========================================================================
     INITIALIZATION BOOTSTRAP
     ========================================================================== */

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Canvas Visualizations
    splineChart = initSplineChart();
    barChart = initBarChart();
    donutChart = initDonutChart();
    updateTacticsMeters();

    // 2. Connect WebSocket & Load Data
    connectSocket();
    refreshStats();
    loadAuditTable();

    // 3. Bind UI Interactivity
    bindUI();

    // 4. Periodic Table & Stats Refresh
    setInterval(refreshStats, 4000);
    setInterval(loadAuditTable, 8000);
  });
})();

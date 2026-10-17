// Threat Detection & Response Dashboard Web Logic
(function() {
  const $ = (selector) => document.querySelector(selector);
  
  // State
  const state = {
    series: [], // max 50 points: { time_step, packet_size, is_anomaly, severity, protocol, score }
    alerts: [], // last 25 anomaly alerts for feed
    stats: {},
    streamActive: false,
    streamInterval: 1.0,
    socket: null,
    tablePage: 0,
    tableLimit: 25,
    tableTotal: 0,
    searchQuery: '',
    filterAnomaly: '',
    filterSeverity: '',
    filterProtocol: ''
  };

  // Utilities
  function toast(message) {
    const el = $('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove('show'), 3500);
  }

  function fmtTime(ts) {
    if (!ts) return '—';
    const d = new Date(ts * 1000);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  function escapeHtml(str) {
    return String(str ?? '').replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  async function api(url, options = {}) {
    const resp = await fetch(url, options);
    const body = await resp.json().catch(() => ({ detail: resp.statusText }));
    if (!resp.ok) throw new Error(body.detail || `HTTP ${resp.status}`);
    return body;
  }

  // Real-time Canvas Line Chart
  function drawChart() {
    const canvas = $('#packet-chart');
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, rect.width * dpr);
    canvas.height = Math.max(1, rect.height * dpr);

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    // Grid lines & labels
    ctx.strokeStyle = '#1b2839';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 4]);

    const maxVal = 1400;
    const steps = [0, 400, 800, 1200];
    ctx.font = '9px "DM Mono", monospace';
    ctx.fillStyle = '#4c5e75';

    steps.forEach((val) => {
      const y = h - 18 - (val / maxVal) * (h - 32);
      ctx.beginPath();
      ctx.moveTo(35, y);
      ctx.lineTo(w, y);
      ctx.stroke();
      ctx.fillText(`${val}B`, 2, y + 3);
    });

    // Draw Anomaly Threshold guide line at 850B
    const threshY = h - 18 - (850 / maxVal) * (h - 32);
    ctx.strokeStyle = 'rgba(255, 111, 114, 0.4)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(35, threshY);
    ctx.lineTo(w, threshY);
    ctx.stroke();
    ctx.fillStyle = '#ff6f72';
    ctx.fillText('THRESHOLD 850B', w - 105, threshY - 4);

    ctx.setLineDash([]);

    const data = state.series;
    if (data.length < 2) return;

    const plotW = w - 45;
    const pts = data.map((d, i) => {
      const x = 40 + i * (plotW / (Math.max(data.length - 1, 1)));
      const clampedVal = Math.min(Math.max(d.packet_size, 0), maxVal);
      const y = h - 18 - (clampedVal / maxVal) * (h - 32);
      return { x, y, ...d };
    });

    // Area fill
    ctx.beginPath();
    pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
    ctx.lineTo(pts[pts.length - 1].x, h - 18);
    ctx.lineTo(pts[0].x, h - 18);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(88, 214, 174, 0.22)');
    grad.addColorStop(1, 'rgba(88, 214, 174, 0.01)');
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
    ctx.strokeStyle = '#58d6ae';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Data points
    pts.forEach((p) => {
      ctx.beginPath();
      if (p.is_anomaly) {
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#ff6f72';
        ctx.shadowColor = '#ff4f5e';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else {
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#68a4ff';
        ctx.fill();
      }
    });

    // Current latest value caption
    const last = pts[pts.length - 1];
    $('#chart-latest-stat').textContent = `Latest: ${last.packet_size}B (${last.is_anomaly ? 'ANOMALY' : 'NORMAL'})`;
  }

  // Update KPI Cards
  function updateKPIs(stats) {
    if (!stats) return;
    $('#kpi-total').textContent = stats.total_samples ?? 0;
    $('#kpi-anomalies').textContent = stats.anomalies_detected ?? 0;
    $('#kpi-rate').textContent = `${stats.anomaly_rate ?? 0}%`;
    $('#kpi-avg-size').textContent = `${stats.avg_packet_size ?? 0} B`;

    // Stream status indicator
    state.streamActive = !!stats.stream_active;
    state.streamInterval = stats.stream_interval || 1.0;
    updateStreamButton();

    if (stats.model_contamination !== undefined) {
      $('#spec-contamination').textContent = `${stats.model_contamination} (${Math.round(stats.model_contamination * 100)}%)`;
    }
    if (stats.training_samples !== undefined) {
      $('#spec-training').textContent = `${stats.training_samples} samples`;
    }
  }

  function updateStreamButton() {
    const btn = $('#toggle-stream-btn');
    const text = $('#btn-stream-text');
    const streamLabel = $('#stream-status-label');
    const streamPulse = $('#stream-pulse');

    if (state.streamActive) {
      btn.className = 'btn-primary btn-toggle-stream active';
      text.textContent = 'Pause Live Stream';
      streamLabel.textContent = `STREAMING (${state.streamInterval}s)`;
      streamPulse.style.background = 'var(--mint)';
      streamPulse.style.boxShadow = '0 0 10px #58d6ae';
    } else {
      btn.className = 'btn-primary btn-toggle-stream paused';
      text.textContent = 'Start Live Stream';
      streamLabel.textContent = 'STREAM: PAUSED';
      streamPulse.style.background = '#e7b35c';
      streamPulse.style.boxShadow = 'none';
    }
  }

  // Render Live Threat Feed cards
  function renderAlertFeed() {
    const list = $('#feed-stream-list');
    if (!list) return;

    if (!state.alerts.length) {
      list.innerHTML = `
        <div class="empty-state">
          <span>◈</span>
          <strong>No anomalies yet</strong>
          <p>Start the stream or inject an anomaly to see immediate threat triggers.</p>
        </div>`;
      return;
    }

    list.innerHTML = state.alerts.map(a => `
      <div class="feed-item ${a.is_anomaly ? 'anomaly' : ''}">
        <div class="feed-item-top">
          <div class="feed-title">
            <span class="badge ${a.severity}">${a.severity}</span>
            <span style="margin-left: 6px; font-weight: 600;">Anomaly Detected</span>
          </div>
          <span class="action-pill block">${escapeHtml(a.action_taken || 'Block suspicious traffic')}</span>
        </div>
        <div class="feed-reason">
          ${(a.reasons && a.reasons.length) ? a.reasons.map(r => escapeHtml(r)).join(' · ') : 'Statistical outlier detected by Isolation Forest'}
        </div>
        <div class="feed-meta">
          <span>Packet: <strong>${a.packet_size}B</strong> · Ports: ${a.src_port} → ${a.dst_port}</span>
          <span>Score: ${a.anomaly_score} · ${fmtTime(a.ts)}</span>
        </div>
      </div>
    `).join('');
  }

  function addAlertToFeed(alert) {
    if (!alert) return;
    state.alerts.unshift(alert);
    if (state.alerts.length > 25) state.alerts.pop();
    renderAlertFeed();
  }

  function addDataPoint(data) {
    if (!data) return;
    state.series.push(data);
    if (state.series.length > 50) state.series.shift();
    drawChart();

    if (data.is_anomaly) {
      addAlertToFeed(data);
    }
  }

  // Incident Table & Pagination
  async function loadLogs() {
    try {
      const params = new URLSearchParams({
        limit: state.tableLimit,
        offset: state.tablePage * state.tableLimit
      });
      if (state.filterAnomaly) params.set('is_anomaly', state.filterAnomaly);
      if (state.filterSeverity) params.set('severity', state.filterSeverity);
      if (state.filterProtocol) params.set('protocol', state.filterProtocol);

      const res = await api(`/api/threat-dashboard/logs?${params.toString()}`);
      state.tableTotal = res.total;
      renderTable(res.items);
      updatePagination();
    } catch (err) {
      console.error("Failed to load logs:", err);
    }
  }

  function renderTable(items) {
    const tbody = $('#incident-table-body');
    if (!tbody) return;

    $('#table-total-count').textContent = `${state.tableTotal} RECORDS`;

    if (!items || !items.length) {
      tbody.innerHTML = `
        <tr>
          <td colspan="9" style="text-align: center; color: var(--muted); padding: 30px;">
            No telemetry records match the current filters.
          </td>
        </tr>`;
      return;
    }

    // Filter by client search box if query present
    let filtered = items;
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      filtered = items.filter(it => 
        String(it.src_port).includes(q) ||
        String(it.dst_port).includes(q) ||
        String(it.protocol).toLowerCase().includes(q) ||
        (it.reasons || []).some(r => r.toLowerCase().includes(q))
      );
    }

    tbody.innerHTML = filtered.map(r => `
      <tr class="${r.is_anomaly ? 'anomaly-row' : ''}">
        <td style="font-family: var(--mono); font-size: 10px;">${fmtTime(r.ts)}</td>
        <td style="font-family: var(--mono); color: #8aa1be;">#${r.time_step}</td>
        <td><strong>${r.packet_size} B</strong></td>
        <td style="font-family: var(--mono);">${r.src_port}</td>
        <td style="font-family: var(--mono);">${r.dst_port}</td>
        <td>
          <span class="badge badge-protocol ${r.protocol_code === 2 ? 'anomaly' : ''}">${escapeHtml(r.protocol)}</span>
        </td>
        <td style="font-family: var(--mono); font-size: 10px; color: ${r.anomaly_score < 0 ? 'var(--coral)' : 'var(--mint)'};">
          ${r.anomaly_score > 0 ? '+' : ''}${r.anomaly_score}
        </td>
        <td><span class="badge ${r.severity}">${r.severity}</span></td>
        <td>
          <span class="action-pill ${r.is_anomaly ? 'block' : 'allow'}">
            ${escapeHtml(r.action_taken || (r.is_anomaly ? 'Block' : 'Allow'))}
          </span>
        </td>
      </tr>
    `).join('');
  }

  function updatePagination() {
    const start = state.tableTotal === 0 ? 0 : state.tablePage * state.tableLimit + 1;
    const end = Math.min((state.tablePage + 1) * state.tableLimit, state.tableTotal);
    $('#pagination-info').textContent = `Showing ${start}-${end} of ${state.tableTotal}`;

    $('#btn-prev').disabled = state.tablePage === 0;
    $('#btn-next').disabled = (state.tablePage + 1) * state.tableLimit >= state.tableTotal;
  }

  // WebSocket Connection
  function connectSocket() {
    const scheme = location.protocol === 'https:' ? 'wss' : 'ws';
    const socket = new WebSocket(`${scheme}://${location.host}/ws`);
    state.socket = socket;

    socket.onopen = () => {
      $('#connection-label').textContent = 'SOCKET CONNECTED';
      $('#ws-pulse').style.background = 'var(--mint)';
      $('#ws-status').textContent = 'connected';
      $('#ws-status').style.color = 'var(--mint)';
    };

    socket.onclose = () => {
      $('#connection-label').textContent = 'RECONNECTING';
      $('#ws-pulse').style.background = '#e7b35c';
      $('#ws-status').textContent = 'reconnecting';
      $('#ws-status').style.color = '';
      setTimeout(connectSocket, 2000);
    };

    socket.onerror = () => socket.close();

    socket.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.type === 'threat_stream_point') {
          addDataPoint(msg.data);
          // update total count quickly
          const curTotal = parseInt($('#kpi-total').textContent, 10) || 0;
          $('#kpi-total').textContent = curTotal + 1;
          if (msg.data.is_anomaly) {
            const curAnom = parseInt($('#kpi-anomalies').textContent, 10) || 0;
            $('#kpi-anomalies').textContent = curAnom + 1;
          }
        } else if (msg.type === 'threat_stream_alert') {
          addAlertToFeed(msg.alert);
          toast(`🚨 Anomaly Detected! Size: ${msg.alert.packet_size}B · Auto-mitigation: Blocked`);
        }
      } catch (err) {
        console.error("Error processing websocket payload:", err);
      }
    };
  }

  // Event Listeners & Actions
  async function toggleStream() {
    const btn = $('#toggle-stream-btn');
    btn.disabled = true;
    try {
      if (state.streamActive) {
        await api('/api/threat-dashboard/stream/stop', { method: 'POST' });
        state.streamActive = false;
        toast('Live stream paused');
      } else {
        const interval = parseFloat($('#stream-speed').value) || 1.0;
        await api('/api/threat-dashboard/stream/start', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ interval })
        });
        state.streamActive = true;
        toast(`Live stream started (${interval}s interval)`);
      }
      updateStreamButton();
    } catch (err) {
      toast(`Stream error: ${err.message}`);
    } finally {
      btn.disabled = false;
    }
  }

  async function injectAnomaly() {
    const btn = $('#inject-anomaly-btn');
    btn.disabled = true;
    try {
      const result = await api('/api/threat-dashboard/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ force_anomaly: true })
      });
      addDataPoint(result);
      toast(`Injected Anomaly: Packet ${result.packet_size}B · ${result.action_taken}`);
      refreshAll();
    } catch (err) {
      toast(`Failed to inject: ${err.message}`);
    } finally {
      btn.disabled = false;
    }
  }

  async function simulateNormal() {
    const btn = $('#simulate-normal-btn');
    btn.disabled = true;
    try {
      const result = await api('/api/threat-dashboard/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ force_anomaly: false })
      });
      addDataPoint(result);
      toast(`Simulated Normal Point: ${result.packet_size}B`);
      refreshAll();
    } catch (err) {
      toast(`Failed to simulate: ${err.message}`);
    } finally {
      btn.disabled = false;
    }
  }

  async function clearLogs() {
    if (!confirm('Are you sure you want to clear all telemetry and incident logs?')) return;
    try {
      await api('/api/threat-dashboard/logs', { method: 'DELETE' });
      state.series = [];
      state.alerts = [];
      drawChart();
      renderAlertFeed();
      await refreshAll();
      toast('Incident logs cleared');
    } catch (err) {
      toast(`Failed to clear: ${err.message}`);
    }
  }

  async function exportJson() {
    try {
      const data = await api('/api/threat-dashboard/export');
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `threat_detection_audit_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      toast('Exported incident audit JSON');
    } catch (err) {
      toast(`Failed to export: ${err.message}`);
    }
  }

  async function refreshAll() {
    try {
      const stats = await api('/api/threat-dashboard/stats');
      updateKPIs(stats);
      await loadLogs();
    } catch (err) {
      console.error("Refresh error:", err);
    }
  }

  // Setup DOM Handlers
  function initHandlers() {
    $('#toggle-stream-btn').addEventListener('click', toggleStream);
    $('#inject-anomaly-btn').addEventListener('click', injectAnomaly);
    $('#simulate-normal-btn').addEventListener('click', simulateNormal);
    $('#clear-logs-btn').addEventListener('click', clearLogs);
    $('#export-json-btn').addEventListener('click', exportJson);
    $('#refresh-button').addEventListener('click', () => { refreshAll(); toast('Refreshed stats'); });

    $('#stream-speed').addEventListener('change', async (e) => {
      const interval = parseFloat(e.target.value);
      state.streamInterval = interval;
      if (state.streamActive) {
        await api('/api/threat-dashboard/stream/start', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ interval })
        });
        toast(`Interval updated to ${interval}s`);
        updateStreamButton();
      }
    });

    // Filters
    $('#filter-anomaly').addEventListener('change', (e) => {
      state.filterAnomaly = e.target.value;
      state.tablePage = 0;
      loadLogs();
    });

    $('#filter-severity').addEventListener('change', (e) => {
      state.filterSeverity = e.target.value;
      state.tablePage = 0;
      loadLogs();
    });

    $('#filter-protocol').addEventListener('change', (e) => {
      state.filterProtocol = e.target.value;
      state.tablePage = 0;
      loadLogs();
    });

    $('#log-search').addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      loadLogs();
    });

    $('#btn-prev').addEventListener('click', () => {
      if (state.tablePage > 0) {
        state.tablePage--;
        loadLogs();
      }
    });

    $('#btn-next').addEventListener('click', () => {
      if ((state.tablePage + 1) * state.tableLimit < state.tableTotal) {
        state.tablePage++;
        loadLogs();
      }
    });

    window.addEventListener('resize', drawChart);
    $('#clock').textContent = new Intl.DateTimeFormat([], { dateStyle: 'medium' }).format(new Date());
  }

  // Initial load
  async function init() {
    initHandlers();
    drawChart();
    await refreshAll();

    // Prepopulate chart with recent log history if available
    try {
      const recent = await api('/api/threat-dashboard/logs?limit=50&offset=0');
      if (recent.items && recent.items.length) {
        state.series = recent.items.reverse().map(item => ({
          time_step: item.time_step,
          packet_size: item.packet_size,
          is_anomaly: item.is_anomaly,
          severity: item.severity,
          protocol: item.protocol,
          anomaly_score: item.anomaly_score
        }));
        drawChart();

        const anomalies = recent.items.filter(i => i.is_anomaly);
        anomalies.forEach(a => addAlertToFeed(a));
      }
    } catch (e) {}

    connectSocket();

    // Periodic refresh for table and stats
    setInterval(() => {
      refreshAll();
    }, 4000);
  }

  window.addEventListener('DOMContentLoaded', init);
})();

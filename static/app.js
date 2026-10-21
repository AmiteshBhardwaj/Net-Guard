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
    lenis: null,
    hiddenSeverities: new Set(),
    streamActive: false,
    streamInterval: 1.0,
    tablePage: 0,
    tableLimit: 12,
    tableTotal: 0,
    searchFilter: '',
    severityFilter: '',
    protocolFilter: '',
    anomalyFilter: '',
    // Sample-stream chart buffers start empty instead of showing invented history.
    chartPoints: 24,
    ingressBuffer: Array(24).fill(0),
    baselineBuffer: Array(24).fill(500),
    anomaliesBuffer: Array(24).fill(false),
    // Stats & aggregations
    stats: {
      totalFlows: 0,
      threatsDetected: 0,
      ingressBlocks: 0,
      pps: 0,
      severities: { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 },
      protocols: { TCP: 0, UDP: 0, ANOMALOUS: 0 },
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
      const res = await fetch(window.netguardApiUrl(url), options);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || `HTTP ${res.status}`);
      return data;
    } catch (err) {
      console.warn('API Error:', url, err);
      throw err;
    }
  }

  function themeColor(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function setTheme(theme, persist = true) {
    const selected = theme === 'dark' ? 'dark' : 'light';
    const isDark = selected === 'dark';
    document.documentElement.dataset.theme = selected;

    const toggle = $('#btn-theme-toggle');
    const label = $('#theme-toggle-label');
    if (label) label.textContent = isDark ? 'Light mode' : 'Dark mode';
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(isDark));
      toggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    }

    const themeMeta = $('meta[name="theme-color"]');
    if (themeMeta) themeMeta.content = themeColor('--snow-bg');

    if (persist) {
      try {
        localStorage.setItem('netguard-theme', selected);
      } catch (_) {}
    }

    splineChart?.redraw();
    barChart?.redraw();
    donutChart?.redraw();
  }

  function initializeThemeToggle() {
    const toggle = $('#btn-theme-toggle');
    let savedTheme = 'light';
    try {
      savedTheme = localStorage.getItem('netguard-theme') || 'light';
    } catch (_) {}

    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : savedTheme, false);
    toggle?.addEventListener('click', () => {
      setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }

  function initializeSmoothScrolling() {
    if (typeof window.Lenis !== 'function') return;

    state.lenis = new window.Lenis({
      autoRaf: true,
      anchors: true,
      respectReducedMotion: true,
    });
  }

  function initializeGsapMotion() {
    const gsap = window.gsap;
    if (!gsap || typeof gsap.matchMedia !== 'function') return;

    const motion = gsap.matchMedia();
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const intro = gsap.timeline({ defaults: { ease: 'power2.out' } });
      intro
        .from('.snow-page-heading .snow-page-eyebrow', { y: 7, autoAlpha: 0, duration: 0.32 })
        .from('.snow-page-heading h1', { y: 10, autoAlpha: 0, duration: 0.38 }, '-=0.16')
        .from('.snow-page-heading p', { y: 7, autoAlpha: 0, duration: 0.3 }, '-=0.2')
        .from('.snow-kpi-card', { y: 9, autoAlpha: 0, duration: 0.34, stagger: 0.055 }, '-=0.12');

      const targets = Array.from($$('.snow-middle-grid .snow-card-container, .snow-lower-grid .snow-card-container, .snow-table-card'));
      if (!targets.length) return () => intro.kill();

      gsap.set(targets, { autoAlpha: 0, y: 12 });
      let observer;
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            gsap.to(entry.target, {
              autoAlpha: 1,
              y: 0,
              duration: 0.42,
              ease: 'power2.out',
              clearProps: 'opacity,transform,visibility',
            });
          });
        }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });
        targets.forEach((target) => observer.observe(target));
      } else {
        gsap.to(targets, { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.06, clearProps: 'opacity,transform,visibility' });
      }

      return () => {
        observer?.disconnect();
        intro.kill();
        gsap.killTweensOf(targets);
        gsap.set(targets, { clearProps: 'opacity,transform,visibility' });
      };
    });
  }

  function animateFeedItem(item) {
    const gsap = window.gsap;
    if (!gsap || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.fromTo(item,
      { autoAlpha: 0, y: -6 },
      { autoAlpha: 1, y: 0, duration: 0.28, ease: 'power2.out', clearProps: 'opacity,transform,visibility' }
    );
  }

  function initializeScrollFeedback() {
    const progress = $('#page-scroll-progress');
    const toTop = $('#scroll-to-top');
    if (!progress && !toTop) return;

    const render = (position, limit) => {
      if (progress) progress.style.transform = `scaleX(${limit > 0 ? Math.min(1, position / limit) : 0})`;
      if (toTop) toTop.hidden = position < 360;
    };

    const updateFromWindow = () => {
      const limit = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      render(window.scrollY, limit);
    };

    if (state.lenis) {
      state.lenis.on('scroll', (lenis) => render(lenis.scroll, lenis.limit));
    } else {
      window.addEventListener('scroll', updateFromWindow, { passive: true });
    }
    window.addEventListener('resize', updateFromWindow, { passive: true });

    toTop?.addEventListener('click', () => {
      if (state.lenis) {
        state.lenis.scrollTo('top', { duration: 0.85 });
        return;
      }
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      window.scrollTo({ top: 0, behavior });
    });

    updateFromWindow();
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

      const maxVal = Math.max(1000, ...ingress, ...baseline) * 1.1;
      const minVal = 0;

      // Draw subtle horizontal grid lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = themeColor('--snow-chart-grid');
      const gridSteps = 4;
      for (let i = 0; i <= gridSteps; i++) {
        const y = paddingTop + (plotH / gridSteps) * i;
        ctx.beginPath();
        ctx.moveTo(paddingLeft, y);
        ctx.lineTo(w - paddingRight, y);
        ctx.stroke();

        // Label
        const val = Math.round(maxVal - (maxVal / gridSteps) * i);
        ctx.fillStyle = themeColor('--snow-chart-label');
        ctx.font = '10px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(String(val), paddingLeft - 8, y + 3);
      }

      // Helper for spline points
      function getPt(idx, arr) {
        const x = paddingLeft + (idx / (len - 1)) * plotW;
        const y = paddingTop + plotH - ((arr[idx] - minVal) / (maxVal - minVal)) * plotH;
        return { x, y };
      }

      // Expected packet-size baseline
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = themeColor('--snow-chart-baseline');
      ctx.lineWidth = 1.25;
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

      // Observed packet size
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
      ctx.strokeStyle = themeColor('--snow-accent-coral');
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw Anomaly Outlier Dots
      for (let i = 0; i < len; i++) {
        if (anomalies[i]) {
          const pt = getPt(i, ingress);
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
          ctx.fillStyle = themeColor('--snow-accent-red');
          ctx.fill();
          ctx.strokeStyle = themeColor('--snow-card');
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
        tooltip.innerHTML = `<strong>${val} B</strong> (baseline: ${base} B)${isAnom ? ' <span style="color:var(--snow-accent-red);">· FLAGGED</span>' : ''}`;
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
        { label: 'TCP', value: Number(state.stats.protocols.TCP) || 0 },
        { label: 'UDP', value: Number(state.stats.protocols.UDP) || 0 },
        { label: 'Other', value: Number(state.stats.protocols.ANOMALOUS) || 0 },
      ];

      const maxVal = Math.max(1, ...items.map((item) => item.value));
      const groupSpacing = w / items.length;
      const paddingBottom = 24;
      const plotH = h - paddingBottom - 16;
      const barWidth = Math.min(38, groupSpacing * 0.38);

      ctx.strokeStyle = themeColor('--snow-chart-grid');
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(12, h - paddingBottom);
      ctx.lineTo(w - 12, h - paddingBottom);
      ctx.stroke();

      items.forEach((item, idx) => {
        const cx = groupSpacing * idx + groupSpacing / 2;
        const barHeight = (item.value / maxVal) * plotH;
        ctx.fillStyle = themeColor('--snow-accent-cyan');
        ctx.beginPath();
        ctx.roundRect(cx - barWidth / 2, h - paddingBottom - barHeight, barWidth, barHeight, [4, 4, 0, 0]);
        ctx.fill();

        ctx.fillStyle = themeColor('--snow-chart-label');
        ctx.font = '10px monospace';
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
      const slices = [
        { val: Number(d.CRITICAL) || 0, color: themeColor('--snow-accent-red'), label: 'critical' },
        { val: Number(d.HIGH) || 0, color: themeColor('--snow-accent-coral'), label: 'high' },
        { val: Number(d.MEDIUM) || 0, color: themeColor('--snow-accent-orange'), label: 'medium' },
        { val: Number(d.LOW) || 0, color: themeColor('--snow-accent-mint'), label: 'low' },
      ];
      const visibleSlices = slices.filter((slice) => !state.hiddenSeverities.has(slice.label));
      const total = visibleSlices.reduce((sum, slice) => sum + slice.val, 0);

      slices.forEach((slice) => {
        const el = $(`#legend-count-${slice.label}`);
        if (el) el.textContent = String(slice.val);
      });

      const cx = w / 2;
      const cy = h / 2;
      const outerR = 60;
      const innerR = 42;
      if (!total) {
        ctx.beginPath();
        ctx.arc(cx, cy, (outerR + innerR) / 2, 0, Math.PI * 2);
        ctx.strokeStyle = themeColor('--snow-chart-empty-ring');
        ctx.lineWidth = outerR - innerR;
        ctx.stroke();
      } else {
        let startAngle = -Math.PI / 2;
        visibleSlices.forEach((slice) => {
          if (!slice.val) return;
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

      ctx.fillStyle = themeColor('--snow-text-primary');
      ctx.font = '600 18px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(total), cx, cy - 4);
      ctx.fillStyle = themeColor('--snow-text-muted');
      ctx.font = '9px monospace';
      ctx.fillText(state.hiddenSeverities.size ? 'VISIBLE' : 'SAMPLES', cx, cy + 12);
    }

    draw();
    return { redraw: draw };
  }

  /* ==========================================================================
     ALERT TABLE
     ========================================================================== */

  async function loadAuditTable() {
    const tbody = $('#audit-table-body');
    if (!tbody) return;

    try {
      let logs = await api('/api/alerts?limit=200');
      if (!Array.isArray(logs)) logs = [];
      if (state.severityFilter) logs = logs.filter((row) => row.severity === state.severityFilter);
      if (state.protocolFilter) logs = logs.filter((row) => row.protocol === state.protocolFilter);
      if (state.anomalyFilter === '1') logs = logs.filter((row) => row.blocked);
      if (state.anomalyFilter === '0') logs = logs.filter((row) => !row.blocked);
      if (state.searchFilter) {
        const query = state.searchFilter.toLowerCase();
        logs = logs.filter((r) =>
          [r.src, r.dst, r.dport, r.protocol, r.label, r.severity]
            .some((value) => String(value ?? '').toLowerCase().includes(query))
        );
      }
      state.tableTotal = logs.length;
      const start = state.tablePage * state.tableLimit;
      const pageLogs = logs.slice(start, start + state.tableLimit);

      const totalPages = Math.max(1, Math.ceil(state.tableTotal / state.tableLimit));
      const pageInfo = $('#pagination-info');
      const pageIndicator = $('#page-indicator');
      const prevBtn = $('#btn-prev-page');
      const nextBtn = $('#btn-next-page');

      if (pageInfo) {
        const first = state.tableTotal ? start + 1 : 0;
        const last = Math.min(start + pageLogs.length, state.tableTotal);
        pageInfo.textContent = `Showing ${first}–${last} of ${state.tableTotal} alerts`;
      }
      if (pageIndicator) pageIndicator.textContent = `Page ${state.tablePage + 1} of ${totalPages}`;
      if (prevBtn) prevBtn.disabled = state.tablePage <= 0;
      if (nextBtn) nextBtn.disabled = state.tablePage >= totalPages - 1;

      if (!pageLogs.length) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:32px; color:var(--snow-text-muted);">No alerts match these filters</td></tr>`;
        return;
      }

      tbody.innerHTML = pageLogs.map((row) => {
        const sev = (row.severity || 'LOW').toLowerCase();
        const confidence = Number.isFinite(Number(row.prob)) ? `${Math.round(Number(row.prob) * 100)}%` : '—';
        const tactic = MITRE_TACTICS[row.label] || { id: '—', name: row.label || 'Unknown detection' };
        const action = row.blocked
          ? `<button class="snow-table-btn" data-unblock-ip="${escapeHtml(row.src || '')}">Unblock</button>`
          : `<button class="snow-table-btn danger" data-block-ip="${escapeHtml(row.src || '')}">Block source</button>`;

        return `
          <tr>
            <td class="font-mono text-muted">${fmtTime(row.ts)}</td>
            <td class="font-mono">${escapeHtml(row.src || '—')}</td>
            <td class="font-mono">${escapeHtml(row.dst || '—')}</td>
            <td><span class="font-mono">${escapeHtml(row.dport ?? '—')}</span> / <strong>${escapeHtml(row.protocol || 'TCP')}</strong></td>
            <td class="font-mono">${confidence}</td>
            <td>
              <strong>${escapeHtml(tactic.name)}</strong>
              <span class="text-muted" style="font-size:10px;">(${escapeHtml(tactic.id)})</span>
            </td>
            <td>
              <span class="snow-badge ${sev}">${escapeHtml(row.severity || 'LOW')}</span>
            </td>
            <td>${action}</td>
          </tr>
        `;
      }).join('');
    } catch (err) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--snow-accent-red); padding:20px;">Failed to load alerts: ${escapeHtml(err.message)}</td></tr>`;
    }
  }

  /* ==========================================================================
     WEBSOCKET TELEMETRY PIPELINE
     ========================================================================== */

  let splineChart, barChart, donutChart;

  function connectSocket() {
    const wsUrl = window.netguardWebSocketUrl('/ws');
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
      if (statusText) statusText.textContent = 'Connected';
    };

    ws.onmessage = (e) => {
      try {
        const msg = jsonParse(e.data);
        if (!msg) return;

        // The sample stream feeds the packet-size charts.
        if (msg.type === 'threat_stream_point' && msg.data) {
          handleIncomingPoint(msg.data);
        } else if (msg.type === 'threat_stream_alert' && msg.alert) {
          addNotificationItem(msg.alert);
        } else if (msg.type === 'alert') {
          addNotificationItem(msg);
          refreshStats();
          loadAuditTable();
        } else if (msg.type === 'source') {
          refreshStats();
        } else if (msg.type === 'stats') {
          refreshStats();
        } else if (msg.type === 'blocked' || msg.type === 'unblocked') {
          addActivityItem(`IP <strong>${escapeHtml(msg.ip)}</strong> ${msg.type === 'blocked' ? 'blocked' : 'unblocked'}`);
          refreshStats();
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
    const emptyState = $('#chart-empty-state');
    if (emptyState) emptyState.hidden = true;

    // Rolling chart point update
    state.ingressBuffer.shift();
    const packetSize = Number(pkt.packet_size);
    state.ingressBuffer.push(Number.isFinite(packetSize) ? Math.min(1600, Math.max(0, packetSize)) : 0);

    state.baselineBuffer.shift();
    state.baselineBuffer.push(500 + Math.sin(Date.now() / 3000) * 8);

    state.anomaliesBuffer.shift();
    state.anomaliesBuffer.push(Boolean(pkt.is_anomaly));

    // Threat / Anomaly Detected
    if (pkt.is_anomaly) {
      // Increment severity count
      const sev = (pkt.severity || 'HIGH').toUpperCase();
      state.stats.severities[sev] = (state.stats.severities[sev] || 0) + 1;
      donutChart?.redraw();
    }

    splineChart?.redraw();
  }

  // Add Item to Right Notifications Feed
  function addNotificationItem(pkt) {
    const feed = $('#snow-threat-feed');
    if (!feed) return;

    const item = document.createElement('div');
    item.className = 'snow-feed-item';
    const isCrit = String(pkt.severity || '').toUpperCase() === 'CRITICAL';
    const title = pkt.threat_type || pkt.label || 'Anomaly';
    const source = pkt.src ? `from <code>${escapeHtml(pkt.src)}</code>` : `sample ${escapeHtml(pkt.time_step ?? '—')}`;
    const score = Number.isFinite(Number(pkt.prob))
      ? `${Math.round(Number(pkt.prob) * 100)}% confidence`
      : `score ${Number(pkt.anomaly_score || 0).toFixed(3)}`;
    feed.querySelector('.snow-feed-empty')?.remove();

    item.innerHTML = `
      <div class="snow-feed-avatar" style="${isCrit ? 'color:var(--snow-accent-red); background:var(--snow-badge-critical-bg);' : ''}">!</div>
      <div class="snow-feed-content">
        <div class="snow-feed-text">
          <strong>${escapeHtml(title)}</strong> ${source}
          <div class="snow-feed-time">${score} · ${escapeHtml(pkt.protocol || 'TCP')}</div>
        </div>
        <div class="snow-feed-time">Just now</div>
      </div>
    `;

    feed.prepend(item);
    animateFeedItem(item);
    while (feed.children.length > 8) feed.removeChild(feed.lastChild);
  }

  // Add Item to Right Activities Feed
  function addActivityItem(text) {
    const feed = $('#snow-activity-feed');
    if (!feed) return;
    feed.querySelector('.snow-feed-empty')?.remove();

    const item = document.createElement('div');
    item.className = 'snow-feed-item';
    item.innerHTML = `
      <div class="snow-feed-avatar">·</div>
      <div class="snow-feed-content">
        <div class="snow-feed-text">${text}</div>
        <div class="snow-feed-time">Just now</div>
      </div>
    `;
    feed.prepend(item);
    animateFeedItem(item);
    while (feed.children.length > 8) feed.removeChild(feed.lastChild);
  }

  // Update Stats from Server
  async function refreshStats() {
    const [runtime, samples] = await Promise.all([
      api('/api/stats').catch(() => null),
      api('/api/threat-dashboard/stats').catch(() => null),
    ]);

    if (runtime) {
      const flows = $('#kpi-flows');
      const alerts = $('#kpi-threats');
      const blocks = $('#kpi-blocks');
      if (flows) flows.textContent = Number(runtime.flows_processed || 0).toLocaleString();
      if (alerts) alerts.textContent = Number(runtime.alerts || 0).toLocaleString();
      if (blocks) blocks.textContent = Number(runtime.blocked_ips || 0).toLocaleString();

      const trained = runtime.model_status === 'trained model loaded';
      const engineName = trained ? 'Trained model' : 'Rules only';
      const engine = $('#kpi-engine');
      const engineBadge = $('#kpi-engine-badge');
      const runtimeEngine = $('#runtime-engine-text');
      if (engine) engine.textContent = engineName;
      if (engineBadge) engineBadge.textContent = trained ? 'Model loaded' : 'No model file';
      if (runtimeEngine) runtimeEngine.textContent = engineName;

      const source = runtime.source || 'demo';
      const sourceName = source === 'live' ? 'Live capture' : source === 'pcap' ? 'PCAP replay' : 'Lab simulation';
      const sourceText = $('#current-source-text');
      const sourceDot = $('#source-status-dot');
      if (sourceText) sourceText.textContent = sourceName;
      if (sourceDot) sourceDot.style.backgroundColor = source === 'live' ? 'var(--snow-accent-mint)' : 'var(--snow-accent-cyan)';
      $('#source-demo-toggle')?.classList.toggle('active', source !== 'live');
      $('#source-live-toggle')?.classList.toggle('active', source === 'live');
    }

    if (samples && samples.total_samples !== undefined) {
      state.stats.totalFlows = Number(samples.total_samples) || 0;
      state.stats.threatsDetected = Number(samples.anomalies_detected) || 0;
      const emptyState = $('#chart-empty-state');
      if (emptyState) emptyState.hidden = state.stats.totalFlows > 0;

      if (samples.severity_breakdown) {
        Object.assign(state.stats.severities, samples.severity_breakdown);
        donutChart?.redraw();
      }
      if (samples.protocol_breakdown) {
        Object.assign(state.stats.protocols, samples.protocol_breakdown);
        barChart?.redraw();
      }
      const protocolTotal = Object.values(state.stats.protocols).reduce((sum, value) => sum + Number(value || 0), 0);
      const protocolEmpty = $('#protocol-empty-state');
      if (protocolEmpty) protocolEmpty.hidden = protocolTotal > 0;
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
            btnStream.textContent = 'Stop sample stream';
            btnStream.classList.remove('primary');
            toast('Sample stream started');
          } else {
            await api('/api/threat-dashboard/stream/stop', { method: 'POST' });
            state.streamActive = false;
            btnStream.textContent = 'Start sample stream';
            btnStream.classList.add('primary');
            toast('Sample stream stopped');
          }
        } catch (err) {
          toast(`Stream toggle failed: ${err.message}`);
        }
      });
    }

    // 2. Inject a detector test event
    const btnInject = $('#btn-inject-anomaly');
    if (btnInject) {
      btnInject.addEventListener('click', async () => {
        try {
          const res = await api('/api/threat-dashboard/simulate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ force_anomaly: true }),
          });
          toast(`Test event recorded · ${res.severity} · score ${res.anomaly_score?.toFixed(3)}`);
          refreshStats();
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
          toast(`Starting ${attack} lab simulation…`);
          await api(`/api/launch/${attack}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ target: '127.0.0.1' }),
          });
          addActivityItem(`Lab simulation completed: <strong>${escapeHtml(attack)}</strong>`);
          refreshStats();
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
      toast(`Sample interval set to ${state.streamInterval}s`);
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

    $$('[data-severity-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const severity = button.dataset.severityToggle;
        if (state.hiddenSeverities.has(severity)) state.hiddenSeverities.delete(severity);
        else state.hiddenSeverities.add(severity);
        button.setAttribute('aria-pressed', String(!state.hiddenSeverities.has(severity)));
        donutChart?.redraw();
      });
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
    $('#btn-export-csv')?.addEventListener('click', async () => {
      try {
        const rows = await api('/api/alerts?limit=200');
        const columns = ['timestamp', 'source_ip', 'destination_ip', 'destination_port', 'protocol', 'detection', 'confidence', 'severity', 'blocked'];
        const escapeCsv = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;
        const csvRows = [columns, ...(Array.isArray(rows) ? rows.map((row) => [
          row.ts ? new Date(row.ts * 1000).toISOString() : '',
          row.src,
          row.dst,
          row.dport,
          row.protocol,
          row.label,
          row.prob,
          row.severity,
          row.blocked ? 'yes' : 'no',
        ]) : [])];
        const blob = new Blob([csvRows.map((row) => row.map(escapeCsv).join(',')).join('\n')], { type: 'text/csv;charset=utf-8' });
        const downloadUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `netguard-alerts-${new Date().toISOString().slice(0, 10)}.csv`;
        link.click();
        URL.revokeObjectURL(downloadUrl);
        toast(`Exported ${Array.isArray(rows) ? rows.length : 0} alerts`);
      } catch (err) {
        toast(`Export failed: ${err.message}`);
      }
    });

    // 9. Table source block actions
    $('#audit-table-body')?.addEventListener('click', async (e) => {
      const blockBtn = e.target.closest('[data-block-ip]');
      const unblockBtn = e.target.closest('[data-unblock-ip]');
      if (blockBtn || unblockBtn) {
        const isUnblock = Boolean(unblockBtn);
        const ip = (isUnblock ? unblockBtn : blockBtn).getAttribute(isUnblock ? 'data-unblock-ip' : 'data-block-ip');
        try {
          await api(`/api/block/${ip}`, { method: isUnblock ? 'DELETE' : 'POST' });
          toast(`${isUnblock ? 'Removed block for' : 'Blocked'} ${ip} in the application`);
          refreshStats();
          loadAuditTable();
        } catch (err) {
          toast(`Block failed: ${err.message}`);
        }
      }
    });

    // 10. Traffic source toggles
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
        toast('Traffic source set to lab simulation');
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
        toast('Traffic source set to live capture');
      } catch (err) {
        toast(`Switch failed: ${err.message}`);
      }
    });
  }

  /* ==========================================================================
     INITIALIZATION BOOTSTRAP
     ========================================================================== */

  document.addEventListener('DOMContentLoaded', () => {
    initializeSmoothScrolling();
    initializeScrollFeedback();
    initializeGsapMotion();

    // Bind the theme control first so unrelated dashboard startup cannot prevent it.
    initializeThemeToggle();

    // 1. Initialize Canvas Visualizations
    splineChart = initSplineChart();
    barChart = initBarChart();
    donutChart = initDonutChart();

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

(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mockMode = new URLSearchParams(location.search).get("mock") === "1";
  const state = {
    alerts: [],
    series: Array(60).fill(0),
    markers: Array(60).fill(false),
    stats: null,
    socket: null,
    pendingMessages: [],
    noticeDismissed: false,
    incident: null,
    incidentStartedAt: 0,
    attackStartedAt: 0,
    incidentDetectedAt: 0,
    responseStepTimes: [],
    chartFrame: 0,
    chartDirty: true,
    chartAnimationAt: 0,
    chartAnimating: false,
    chartSeeded: false,
    previousKpis: new Map(),
    responseTimers: [],
    mockBlocked: 0,
    activeAttack: "",
    mockTick: 0,
    chartWindow: 60,
    alertFilter: "all",
    presenterReturnDashboard: "",
    blastOrigin: "workstation-01",
    blastTopology: null,
    blastRadius: null,
    blastSelectedAsset: "workstation-01",
    blastRequest: 0,
    blastZoom: 1,
    blastSimulated: true,
    blastAlerted: false,
    mock: mockMode
  };
  const DEFAULT_BLAST_ORIGIN = "workstation-01";
  const BLAST_SCENARIOS = {
    "workstation-01": "Workstation compromise",
    "dmz-server": "Web server compromise",
    "isolated-workstation": "Isolated endpoint"
  };
  const ASSET_PRESENTATION = {
    "dmz-server": { name: "Web Server", type: "Web server" },
    "core-cluster": { name: "Application Server", type: "Application server" },
    "db-primary": { name: "Database Server", type: "Database server" },
    "auth-server": { name: "Authentication Server", type: "Authentication server" },
    "backup-store": { name: "File Server", type: "File server" },
    "workstation-01": { name: "Employee Workstation", type: "Employee workstation" },
    "workstation-02": { name: "Finance Workstation", type: "Employee workstation" },
    "isolated-workstation": { name: "Isolated Test Workstation", type: "Isolated workstation" }
  };
  const attackInfo = {
    portscan: { label: "PortScan", technique: "T1046", tactic: "Reconnaissance" },
    bruteforce: { label: "BruteForce", technique: "T1110", tactic: "Credential Access" },
    dos: { label: "DoS/DDoS", technique: "T1498", tactic: "Impact" }
  };
  const tacticColors = { PortScan: "#ff795c", BruteForce: "#d6a56f", "DoS/DDoS": "#cf7772", Normal: "#91b7a0" };
  const responseLabels = ["Anomaly scored", "Source IP identified", "Blocklist rule applied", "Flow handling updated", "Local response verified"];
  const dashboards = {
    overview: ["Overview", "See network activity and recent alerts."],
    "incident-lab": ["Alerts", "Review recent alerts and how NetGuard responded."],
    "threat-overview": ["Activity", "See how traffic and alerts have changed over time."],
    "isolation-forest": ["Detection model", "View active checks and model performance."],
    "attack-lab": ["Safe test", "Create sample traffic locally to check alert detection."],
    "blast-radius": ["Blast Radius", "Explore potential reachability from a selected endpoint."],
    exposure: ["Exposure", "See which monitored systems can reach one another."],
    "demo-ingress": ["Traffic source", "Choose demo traffic, a saved file, or live capture."],
    "live-sniffer": ["Live capture", "Choose a network interface or replay a capture file."]
  };
  let activeDashboard = "overview";

  function toast(message) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove("show"), 3200);
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function fmtAgo(value) {
    const seconds = Math.max(0, Math.floor(Date.now() / 1000 - Number(value || Date.now() / 1000)));
    return seconds < 60 ? `${seconds}s ago` : `${Math.floor(seconds / 60)}m ago`;
  }

  function setTheme(theme) {
    document.documentElement.dataset.threatState = theme;
    const label = { normal: "Monitoring", elevated: "Elevated activity", critical: "Under attack", contained: "Contained" }[theme];
    const status = $("#threat-label");
    if (status) status.textContent = label;
  }

  function setConnectionLabel(value) {
    const label = $("#connection-label");
    if (label) label.textContent = value;
  }

  function setDashboard(id, updateHash = true) {
    if (id === "landing") {
      location.href = "/";
      return;
    }
    const key = dashboards[id] ? id : "overview";
    activeDashboard = key;
    document.body.dataset.dashboard = key;
    window.dispatchEvent(new CustomEvent("dashboardchange", { detail: { id: key } }));
    $$("[data-dashboard]").forEach(view => {
      const active = view.dataset.dashboard === key;
      view.hidden = !active;
      view.classList.toggle("is-active", active);
    });
    $$("[data-dashboard-link]").forEach(link => {
      const active = link.dataset.dashboardLink === key;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    const pageHeading = $(".page-heading");
    if (pageHeading) pageHeading.hidden = false;
    const sourceNotice = $("#source-notice");
    if (sourceNotice) sourceNotice.hidden = state.noticeDismissed;
    const [title, description] = dashboards[key];
    $("#dashboard-title").textContent = title;
    $("#dashboard-description").textContent = description;
    $("#breadcrumb-page").textContent = title;
    if (updateHash && location.hash !== `#${key}`) history.replaceState(null, "", `#${key}`);
    if (key === "exposure") refreshBlastRadius();
    if (key === "blast-radius") refreshDetailedBlastRadius(state.blastOrigin);
    const activeLink = $(`[data-dashboard-link="${key}"]`);
    activeLink?.closest("details")?.removeAttribute("open");
    document.body.classList.remove("nav-open");
    requestAnimationFrame(() => scheduleChart());
  }

  function setNotice(source) {
    const el = $("#source-notice");
    if (!el || state.noticeDismissed) return;
    const copy = {
      demo: "<strong>Demo data</strong> Sample activity stays on this machine. No packets leave it.",
      live: "<strong>Live capture</strong> Packets are read from the selected interface. Capture may require administrator access.",
      pcap: "<strong>Capture file</strong> Recorded traffic is checked locally. This is not a live capture."
    };
    el.innerHTML = `<span>${copy[source] || copy.demo}</span><button id="notice-dismiss" aria-label="Dismiss">×</button>`;
    $("#notice-dismiss").onclick = () => {
      state.noticeDismissed = true;
      el.remove();
    };
  }

  function animateNumber(el, value) {
    if (!el) return;
    const target = Number(value) || 0;
    el.dataset.value = String(target);
    el.textContent = Math.round(target).toLocaleString();
  }

  function renderKpis(stats) {
    state.stats = stats;
    animateNumber($("#kpi-pps"), stats.flows_processed ?? 0);
    if ($("#kpi-rate")) $("#kpi-rate").textContent = Number(stats.packets_per_second || 0).toLocaleString();
    animateNumber($("#kpi-alerts"), stats.alerts ?? 0);
    animateNumber($("#kpi-blocked"), stats.blocked_ips ?? 0);
    const sideAlertCount = $("#side-alert-count");
    if (sideAlertCount) sideAlertCount.textContent = stats.alerts ?? 0;
    const trained = stats.model_status === "trained model loaded";
    const engineStatus = trained
      ? "Isolation Forest and rules are active" : "Rules are active. Model is not trained.";
    $("#model-status").textContent = engineStatus;
    $("#rail-engine-status").textContent = trained ? "MODEL + RULES" : "RULES ACTIVE";
    $("#model-dot").style.background = trained ? "var(--green)" : "var(--amber)";
    if ($("#engine-kpi-name")) $("#engine-kpi-name").textContent = trained ? "Isolation Forest" : "Rules";
    if ($("#engine-kpi-confidence")) $("#engine-kpi-confidence").textContent = trained ? "Model loaded" : "Rules active";
    if ($("#engine-kpi-caption")) $("#engine-kpi-caption").textContent = trained ? "Model and explainable rules" : "Model is not available";
    $("#overview-engine-status").textContent = engineStatus;
    $("#engine-overview-model").textContent = trained ? "Isolation Forest + rules" : "Explainable rules";
    $("#model-health").textContent = trained ? "Trained model loaded" : "Rules only · model not trained";
    $("#activity-model").textContent = trained ? "Isolation Forest + rules" : "Rules active";
    const sourceLabel = { live: "Live capture", pcap: "Capture file", demo: "Demo traffic" }[stats.source || "demo"];
    $("#overview-source").textContent = sourceLabel;
    $("#overview-telemetry").textContent = stats.source === "live"
      ? "Using packets read from the selected network interface."
      : stats.source === "pcap"
        ? "Using traffic from the selected capture file."
        : "Using sample traffic created locally for this session.";
    const metricSnapshot = {
      flowsProcessed: Number(stats.flows_processed) || 0,
      packetsPerSecond: Number(stats.packets_per_second) || 0,
      alerts: Number(stats.alerts) || 0,
      blockedSources: Number(stats.blocked_ips) || 0,
      engineName: trained ? "Isolation Forest" : "Rules",
      engineStatus: trained ? "Model loaded" : "Rules active",
      engineCaption: trained ? "Model and explainable rules" : "Model is not available",
      modelLoaded: trained,
      sourceLabel
    };
    window.__dashboardMetricSnapshot = metricSnapshot;
    window.dispatchEvent(new CustomEvent("dashboardstats", { detail: metricSnapshot }));
    renderTypes(stats.type_counts || {});
    if (stats.attacks_launched) {
      const pct = Math.round((stats.attacks_detected / stats.attacks_launched) * 100);
      $("#detection-score").textContent = `${stats.attacks_detected} / ${stats.attacks_launched}`;
      $("#score-bar").style.transform = `scaleX(${pct / 100})`;
      $("#score-caption").textContent = `${pct}% of simulated launches detected`;
    } else {
      $("#detection-score").textContent = "—";
      $("#score-bar").style.transform = "scaleX(0)";
      $("#score-caption").textContent = "No simulated attacks launched";
    }
    const source = stats.source || "demo";
    $("#source-select").value = source === "live" ? "live" : source === "pcap" ? "pcap" : "demo";
    setNotice(source);
    $(".threat-kpi")?.classList.toggle("has-threats", Number(stats.alerts) > 0);
  }

  function renderTypes(counts = {}) {
    const names = ["PortScan", "BruteForce", "DoS/DDoS"];
    const peak = Math.max(1, ...names.map(name => counts[name] || 0));
    const activeLabel = attackInfo[state.activeAttack]?.label;
    const ordered = names.sort((a, b) => {
      if (a === activeLabel) return -1;
      if (b === activeLabel) return 1;
      return (counts[b] || 0) - (counts[a] || 0);
    });
    const markup = ordered.map(name => {
      const count = counts[name] || 0;
      const scale = count ? Math.max(.025, count / peak) : 0;
      return `<button type="button" class="tactic-row${name === activeLabel ? " active" : ""}" data-name="${name}" data-tactic="${name}">
        <span class="tactic-name">${name}</span><div class="tactic-track"><div class="tactic-fill" style="--bar-color:${tacticColors[name]};--bar-scale:${scale}"></div></div>
        <strong class="tactic-count">${count}</strong></button>`;
    }).join("");
    ["#type-bars", "#threat-type-bars"].forEach(selector => {
      const container = $(selector);
      container.innerHTML = markup;
      $$(".tactic-row", container).forEach(row => {
        row.addEventListener("click", () => {
          setDashboard("threat-overview");
          $("#dashboard-search").value = row.dataset.tactic;
          $("#dashboard-search").dispatchEvent(new Event("input"));
        });
      });
    });
    $("#threat-breakdown").innerHTML = ordered.map(name =>
      `<div class="breakdown-item"><i style="--vector-color:${tacticColors[name]}"></i><span>${name}</span><strong>${counts[name] || 0}</strong></div>`
    ).join("");
  }

  function renderMetrics(model) {
    if (!model?.metrics) return;
    const metrics = model.metrics;
    $("#metric-precision").textContent = `${Math.round((metrics.precision_macro || 0) * 100)}%`;
    $("#metric-recall").textContent = `${Math.round((metrics.recall_macro || 0) * 100)}%`;
    $("#metric-f1").textContent = `${Math.round((metrics.f1_macro || 0) * 100)}%`;
    $("#metric-far").textContent = `${Math.round((metrics.false_alarm_rate || 0) * 100)}%`;
    $("#model-note").textContent = `${metrics.dataset || "Offline evaluation"} · ${metrics.split || "capture-group holdout"} · ${metrics.samples || 0} test flows`;
  }

  function renderBlastRadius(topology, radius) {
    const map = $("#blast-map");
    const list = $("#blast-node-list");
    if (!map || !list) return;
    const assets = topology?.assets || [];
    const nodes = radius?.nodes || [];
    const origin = radius?.origin_id || (assets[0] && assets[0].id) || "dmz-server";
    const risk = radius?.summary || {};
    $("#blast-origin").textContent = origin;
    $("#blast-assets-risk").textContent = risk.assets_at_risk ?? 0;
    $("#blast-likelihood").textContent = `${Math.round(Number(risk.likelihood_pct || 0))}%`;
    $("#blast-next-target").textContent = risk.likely_next_target || "—";
    $("#blast-badge").textContent = risk.assets_at_risk ? "ACTIVE" : "SEALED";

    const nodemap = new Map((assets || []).map(asset => [asset.id, asset]));
    map.innerHTML = nodes.length
      ? nodes.map(node => {
          const asset = nodemap.get(node.id) || {};
          return `<div class="map-node"><span>${asset.zone || "Zone"}</span><strong>${escapeHtml(node.name || node.id)}</strong><span class="node-risk">Risk ${Number(node.risk || 0).toFixed(2)}</span><span>Hop ${node.hop}</span></div>`;
        }).join("")
      : '<div class="map-loading">No reachable assets beyond the current origin.</div>';

    list.innerHTML = nodes.length
      ? nodes.map(node => `
        <div class="blast-node-item">
          <div class="node-top"><strong>${escapeHtml(node.name || node.id)}</strong><span>Hop ${node.hop}</span></div>
          <div class="node-meta">${escapeHtml(node.zone)} · ${escapeHtml(node.ip)} · risk ${(Number(node.risk || 0)).toFixed(2)}</div>
          <div class="node-meta">${escapeHtml(node.why_reachable || "Reachability inferred from topology.")}</div>
        </div>`).join("")
      : '<div class="blast-node-item"><div class="node-meta">No lateral expansion path is currently available.</div></div>';
  }

  function blastAssetName(asset) {
    return ASSET_PRESENTATION[asset.id]?.name || asset.name || asset.id;
  }

  function blastAssetType(asset) {
    return ASSET_PRESENTATION[asset.id]?.type || asset.role || asset.zone || "Network asset";
  }

  function setBlastMetric(id, value) {
    const element = $(`#${id}`);
    if (element) element.textContent = String(value);
  }

  function showBlastError(error) {
    const message = error?.message || "Unknown error";
    const graph = $("#blast-graph");
    if (graph) graph.innerHTML = `<p class="blast-empty blast-empty--error">Topology unavailable: ${escapeHtml(message)}. Check the local NetGuard API and retry.</p>`;
    const details = $("#blast-details-content");
    if (details) details.innerHTML = '<p>Asset details are unavailable until the topology API responds.</p>';
    const summary = $("#blast-risk-summary");
    if (summary) summary.textContent = `Analysis could not be updated: ${message}`;
    ["blast-metric-endpoint", "blast-metric-reachable", "blast-metric-critical", "blast-metric-hops"].forEach(id => setBlastMetric(id, "—"));
  }

  function renderBlastEndpointOptions(assets) {
    const endpoint = $("#blast-endpoint");
    if (!endpoint) return;
    endpoint.innerHTML = assets.map(asset =>
      `<option value="${escapeHtml(asset.id)}">${escapeHtml(blastAssetName(asset))} · ${escapeHtml(asset.ip || "No address")}</option>`
    ).join("");
    endpoint.value = state.blastOrigin;
  }

  function blastNodePositions(assets) {
    const known = {
      "border-gateway": [88, 250],
      "workstation-01": [115, 100],
      "workstation-02": [300, 95],
      "auth-server": [315, 250],
      "dmz-server": [315, 430],
      "core-cluster": [525, 250],
      "db-primary": [730, 135],
      "backup-store": [730, 365],
      "isolated-workstation": [520, 485]
    };
    return new Map(assets.map((asset, index) => [
      asset.id,
      known[asset.id] || [90 + (index % 4) * 210, 100 + Math.floor(index / 4) * 150]
    ]));
  }

  function blastRecommendation(asset, origin, node) {
    if (asset.id === origin.id) return "For a simulated alert, isolate the test endpoint in your response plan and validate its identity before taking action.";
    if (!node) return "Review access permissions and monitor for suspicious connections before changing controls.";
    if (asset.criticality >= 4) return "Restrict unnecessary network access, review service permissions, and monitor connections to this critical asset.";
    if (blastAssetType(asset).toLowerCase().includes("workstation")) return "Review endpoint access and monitor suspicious outbound or lateral connections.";
    return "Restrict unnecessary network access and review the permissions on this service.";
  }

  function renderBlastAssetDetails(assetId) {
    const content = $("#blast-details-content");
    const title = $("#blast-details-title");
    if (!content || !title || !state.blastTopology) return;
    const asset = state.blastTopology.assets.find(item => item.id === assetId);
    if (!asset) {
      title.textContent = "Asset not available";
      content.innerHTML = "<p>The selected asset is no longer present in the configured topology.</p>";
      return;
    }
    const radiusNode = state.blastRadius?.nodes?.find(node => node.id === assetId);
    const origin = state.blastTopology.assets.find(item => item.id === state.blastOrigin);
    if (!origin) return;
    const isOrigin = asset.id === state.blastOrigin;
    const path = isOrigin ? [origin.id] : radiusNode?.path || [];
    const hops = isOrigin ? 0 : radiusNode?.hop;
    const direct = state.blastTopology.links
      .filter(link => link.active !== false && (link.src === assetId || (link.bidirectional !== false && link.dst === assetId)))
      .map(link => state.blastTopology.assets.find(item => item.id === (link.src === assetId ? link.dst : link.src)))
      .filter(Boolean);
    const status = isOrigin && state.blastSimulated ? "Simulated compromise"
      : isOrigin && state.blastAlerted ? "Alerted"
      : ["targeted", "alerted"].includes(String(asset.status).toLowerCase()) ? "Alerted"
        : String(asset.status || "healthy").toLowerCase() === "quarantined" ? "Quarantined" : "Normal";
    const why = isOrigin
      ? "This is the selected starting endpoint for the scenario."
      : radiusNode
        ? `${hops === 1 ? "Directly reachable" : `Potentially reachable in ${hops} hops`} over the configured path ${path.map(id => blastAssetName(state.blastTopology.assets.find(item => item.id === id) || { id })).join(" → ")}.`
        : "No active directed path from the selected endpoint was found in the current graph.";
    const pathText = path.length ? path.map(id => blastAssetName(state.blastTopology.assets.find(item => item.id === id) || { id })).join(" → ") : "No path";
    title.textContent = blastAssetName(asset);
    content.innerHTML = `
      <dl class="blast-detail-list">
        <div><dt>Type</dt><dd>${escapeHtml(blastAssetType(asset))}</dd></div>
        <div><dt>Status</dt><dd><span class="blast-status blast-status--${status.toLowerCase().replaceAll(" ", "-")}">${escapeHtml(status)}</span></dd></div>
        <div><dt>Risk classification</dt><dd>${asset.criticality >= 4 ? "Critical" : asset.criticality >= 3 ? "Elevated" : "Standard"} · ${asset.criticality}/5</dd></div>
        <div><dt>Address / zone</dt><dd>${escapeHtml(asset.ip || "No address")} · ${escapeHtml(asset.zone || "Unassigned")}</dd></div>
        <div><dt>Connections</dt><dd>${direct.length ? direct.map(item => escapeHtml(blastAssetName(item))).join(", ") : "None configured"}</dd></div>
        <div><dt>Path from selected endpoint</dt><dd>${escapeHtml(pathText)}</dd></div>
        <div><dt>Reachability hops</dt><dd>${Number.isInteger(hops) ? hops : "Unreachable"}</dd></div>
        <div><dt>Why included</dt><dd>${escapeHtml(why)}</dd></div>
        <div><dt>Defensive recommendation</dt><dd>${escapeHtml(blastRecommendation(asset, origin, radiusNode))}</dd></div>
      </dl>`;
  }

  function renderDetailedBlastRadius(topology, radius) {
    const assets = topology.assets || [];
    const links = topology.links || [];
    const origin = assets.find(asset => asset.id === radius.origin_id);
    if (!origin) throw new Error("The selected endpoint is missing from the network topology.");
    const nodeById = new Map((radius.nodes || []).map(node => [node.id, node]));
    const positions = blastNodePositions(assets);
    const width = 900;
    const height = 540;
    const selected = assets.find(asset => asset.id === state.blastSelectedAsset) || origin;
    const selectedNode = nodeById.get(selected.id);
    const path = selected.id === origin.id ? [origin.id] : selectedNode?.path || [];
    const pathEdges = new Set(path.slice(1).map((id, index) => `${path[index]}>${id}`));
    const edgeMarkup = links.filter(link => link.active !== false && positions.has(link.src) && positions.has(link.dst)).map(link => {
      const [x1, y1] = positions.get(link.src);
      const [x2, y2] = positions.get(link.dst);
      const onPath = pathEdges.has(`${link.src}>${link.dst}`)
        || (link.bidirectional !== false && pathEdges.has(`${link.dst}>${link.src}`));
      const direct = nodeById.get(link.src)?.hop === 1 || nodeById.get(link.dst)?.hop === 1
        || link.src === origin.id || link.dst === origin.id;
      const direction = `${link.bidirectional !== false ? ' marker-start="url(#blast-arrow)"' : ""} marker-end="url(#blast-arrow)"`;
      return `<line class="blast-edge${direct ? " blast-edge--direct" : ""}${onPath ? " blast-edge--path" : ""}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"${direction}><title>${escapeHtml(blastAssetName(assets.find(asset => asset.id === link.src) || { id: link.src }))} to ${escapeHtml(blastAssetName(assets.find(asset => asset.id === link.dst) || { id: link.dst }))} · ${escapeHtml(link.protocol || "network")} ${link.ports?.length ? `ports ${escapeHtml(link.ports.join(", "))}` : ""}</title></line>`;
    }).join("");
    const nodeMarkup = assets.map(asset => {
      const [x, y] = positions.get(asset.id);
      const radiusNode = nodeById.get(asset.id);
      const isOrigin = asset.id === origin.id;
      const reachable = Boolean(radiusNode);
      const critical = Number(asset.criticality) >= 4;
      const status = isOrigin && state.blastSimulated ? "Simulated compromise"
        : isOrigin && state.blastAlerted ? "Alerted"
        : ["targeted", "alerted"].includes(String(asset.status).toLowerCase()) ? "Alerted"
          : String(asset.status || "healthy").toLowerCase() === "quarantined" ? "Quarantined" : "Normal";
      const classes = [
        "blast-node",
        isOrigin ? "blast-node--origin" : "",
        !isOrigin && reachable && radiusNode.hop === 1 ? "blast-node--direct" : "",
        !isOrigin && reachable && radiusNode.hop > 1 ? "blast-node--indirect" : "",
        !isOrigin && !reachable ? "blast-node--unreachable" : "",
        critical ? "blast-node--critical" : "",
        selected.id === asset.id ? "blast-node--selected" : "",
        status === "Alerted" || status === "Simulated compromise" ? "blast-node--alerted" : ""
      ].filter(Boolean).join(" ");
      const hopLabel = isOrigin ? "Source" : reachable ? `${radiusNode.hop} hop${radiusNode.hop === 1 ? "" : "s"}` : "Unreachable";
      const type = blastAssetType(asset);
      return `<g class="${classes}" data-blast-asset="${escapeHtml(asset.id)}" tabindex="0" role="button" aria-label="${escapeHtml(blastAssetName(asset))}, ${escapeHtml(type)}, ${escapeHtml(status)}, ${escapeHtml(hopLabel)}" transform="translate(${x} ${y})">
        <title>${escapeHtml(blastAssetName(asset))} · ${escapeHtml(type)} · ${escapeHtml(status)} · ${escapeHtml(hopLabel)}${critical ? " · Critical asset" : ""}</title>
        <circle class="blast-node__halo" r="48"></circle><circle class="blast-node__body" r="39"></circle>
        ${critical ? '<text class="blast-node__warning" x="29" y="-29">!</text>' : ""}
        <text class="blast-node__name" y="-8">${escapeHtml(blastAssetName(asset))}</text>
        <text class="blast-node__type" y="4">${escapeHtml(type)}</text>
        <text class="blast-node__status" y="16">${escapeHtml(status)}</text>
        <text class="blast-node__hop" y="27">${escapeHtml(hopLabel)}</text>
        <text class="blast-node__ip" y="37">${escapeHtml(asset.ip || "")}</text>
      </g>`;
    }).join("");
    const graph = $("#blast-graph");
    if (graph) graph.innerHTML = `<svg id="blast-graph-svg" class="blast-graph__svg" viewBox="0 0 ${width} ${height}" role="group" aria-label="Fictional network topology showing potential reachability from ${escapeHtml(blastAssetName(origin))}">
      <defs><marker id="blast-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
      <g class="blast-graph__edges">${edgeMarkup}</g><g class="blast-graph__nodes">${nodeMarkup}</g>
    </svg>`;
    renderBlastEndpointOptions(assets);
    const riskNodes = radius.nodes || [];
    const criticalCount = riskNodes.filter(node => Number(node.criticality) >= 4).length;
    setBlastMetric("blast-metric-endpoint", blastAssetName(origin));
    setBlastMetric("blast-metric-endpoint-status", state.blastSimulated ? "Simulated scenario · local sample only"
      : state.blastAlerted ? "Linked from a recent alert" : `Current status · ${origin.status || "normal"}`);
    setBlastMetric("blast-metric-reachable", riskNodes.length);
    setBlastMetric("blast-metric-critical", criticalCount);
    setBlastMetric("blast-metric-hops", radius.summary?.max_hop || 0);
    const riskSummary = $("#blast-risk-summary");
    if (riskSummary) {
      riskSummary.textContent = riskNodes.length
        ? `${riskNodes.length} asset${riskNodes.length === 1 ? "" : "s"} have a configured path from ${blastAssetName(origin)}; ${criticalCount} are rated critical (4–5/5). These are potential paths only, not proof of exploitability or compromise.`
        : `No assets are reachable from ${blastAssetName(origin)} using the current active directed links. Disconnected assets remain shown but muted.`;
    }
    const zoom = $("#blast-graph-svg");
    if (zoom) zoom.style.transform = `scale(${state.blastZoom})`;
    renderBlastAssetDetails(state.blastSelectedAsset);
  }

  async function refreshDetailedBlastRadius(originId = state.blastOrigin, options = {}) {
    const requestId = ++state.blastRequest;
    const graph = $("#blast-graph");
    if (graph) graph.innerHTML = '<p class="blast-empty">Loading fictional network topology…</p>';
    try {
      if (!state.blastTopology) state.blastTopology = await api("/api/blast/topology");
      const assets = state.blastTopology.assets || [];
      const selectedOrigin = assets.find(asset => asset.id === originId) || assets.find(asset => asset.id === DEFAULT_BLAST_ORIGIN) || assets[0];
      if (!selectedOrigin) throw new Error("No assets are configured in the network topology.");
      const radius = await api(`/api/blast/radius/${encodeURIComponent(selectedOrigin.id)}`);
      if (requestId !== state.blastRequest) return;
      state.blastOrigin = selectedOrigin.id;
      state.blastRadius = radius;
      state.blastSelectedAsset = assets.some(asset => asset.id === state.blastSelectedAsset) ? state.blastSelectedAsset : selectedOrigin.id;
      renderDetailedBlastRadius(state.blastTopology, radius);
      if (options.notify) toast(`Blast radius updated · ${blastAssetName(selectedOrigin)} · potential reachability only`);
    } catch (error) {
      if (requestId !== state.blastRequest) return;
      showBlastError(error);
      if (options.notify) toast(`Blast radius could not be updated · ${error.message}`);
    }
  }

  async function updateBlastRadiusFromAlert(alert) {
    try {
      if (!state.blastTopology) state.blastTopology = await api("/api/blast/topology");
      const assets = state.blastTopology.assets || [];
      const explicitId = alert.asset_id || alert.endpoint_id || alert.asset;
      const targetAddress = alert.dst || alert.target || alert.target_ip;
      const matchingAsset = assets.find(asset => asset.ip === targetAddress);
      const origin = assets.find(asset => asset.id === explicitId) || matchingAsset
        || assets.find(asset => asset.id === DEFAULT_BLAST_ORIGIN);
      if (!origin) throw new Error("No demo fallback endpoint is available in the topology.");
      state.blastSimulated = Boolean(alert.mock || String(alert.id).startsWith("mock-"));
      state.blastAlerted = !state.blastSimulated;
      state.blastSelectedAsset = origin.id;
      const scenario = $("#blast-scenario");
      if (scenario) scenario.value = BLAST_SCENARIOS[origin.id] ? origin.id : "";
      await refreshDetailedBlastRadius(origin.id, { notify: true });
    } catch (error) {
      showBlastError(error);
      toast(`Blast radius could not be updated · ${error.message}`);
    }
  }

  async function refreshBlastRadius() {
    try {
      const topology = await api("/api/blast/topology");
      const assets = topology?.assets || [];
      const origin = assets.find(asset => asset.id === "dmz-server") ? "dmz-server" : (assets[0] && assets[0].id) || "dmz-server";
      const radius = await api(`/api/blast/radius/${encodeURIComponent(origin)}`);
      renderBlastRadius(topology, radius);
    } catch (error) {
      const map = $("#blast-map");
      const list = $("#blast-node-list");
      if (map) map.innerHTML = '<div class="map-loading">Blast radius endpoint unavailable.</div>';
      if (list) list.innerHTML = '<div class="blast-node-item"><div class="node-meta">Unable to contact /api/blast/radius.</div></div>';
    }
  }

  async function api(url, options = {}) {
    const response = await fetch(window.netguardApiUrl(url), options);
    let body;
    try {
      body = await response.json();
    } catch {
      body = { detail: response.statusText };
    }
    if (!response.ok) throw new Error(body.detail || `Request failed (${response.status})`);
    return body;
  }

  async function refresh() {
    if (state.mock) return;
    try {
      const [stats, alerts, model] = await Promise.all([
        api("/api/stats"), api("/api/alerts"), api("/api/model")
      ]);
      if (!state.chartSeeded && Array.isArray(stats.packet_history)) {
        const history = stats.packet_history.slice(-60).map(value => Math.max(0, Number(value) || 0));
        state.series = [...Array(Math.max(0, 60 - history.length)).fill(0), ...history];
        state.markers = Array(60).fill(false);
        const firstSecond = Math.floor(Date.now() / 1000) - 59;
        alerts.forEach(alert => {
          const index = Math.floor(Number(alert.ts) || 0) - firstSecond;
          if (index >= 0 && index < state.markers.length) state.markers[index] = true;
        });
        state.chartSeeded = true;
        scheduleChart(true);
      }
      renderKpis(stats);
      state.alerts = alerts;
      renderAlerts();
      renderMetrics(model);
      await refreshBlastRadius();
      $("#activity-api").textContent = "API online · local telemetry";
      document.body.classList.add("is-loaded");
    } catch (error) {
      setConnectionLabel("API offline");
      $("#ws-status").textContent = "offline";
      $("#activity-api").textContent = "API offline";
      appendLog(`API unavailable · ${error.message}`, "alert-line");
    }
  }

  function appendLog(text, kind = "system-line") {
    const log = $("#attack-log");
    log.querySelector(".terminal-cursor")?.remove();
    const line = document.createElement("div");
    line.className = `terminal-line ${kind}`;
    const prefix = kind === "alert-line" ? "ALERT" : kind === "response-line" ? "AUTO" : "SYS";
    line.innerHTML = `<span>${prefix}</span>${escapeHtml(text)}<span class="terminal-cursor">▋</span>`;
    log.append(line);
    while (log.children.length > 35) log.firstElementChild.remove();
    log.scrollTop = log.scrollHeight;
  }

  function renderAlerts() {
    const list = $("#alert-list");
    $("#notification-count").textContent = state.alerts.length;
    const sideAlertCount = $("#side-alert-count");
    if (sideAlertCount) sideAlertCount.textContent = state.alerts.length;
    $("#filter-count-all").textContent = state.alerts.length;
    $("#filter-count-high").textContent = state.alerts.filter(alert => ["high", "critical"].includes(String(alert.severity || "").toLowerCase())).length;
    $("#filter-count-blocked").textContent = state.alerts.filter(alert => Boolean(alert.blocked)).length;
    if (!state.alerts.length) {
      list.innerHTML = '<div class="empty-state"><span>◈</span><strong>All quiet</strong><p>Detections will appear here as traffic is processed.</p></div>';
      $("#feed-total").textContent = "No detections yet";
      return;
    }
    list.innerHTML = state.alerts.slice(0, 24).map(alert => {
      const severity = escapeHtml(alert.severity || "medium").toLowerCase();
      const blocked = Boolean(alert.blocked);
      return `<div class="alert-row${alert.isNew ? " is-new" : ""}${severity === "high" || severity === "critical" ? " is-critical" : ""}" data-severity="${severity}" data-blocked="${blocked}">
        <i class="alert-stripe ${severity}"></i>
        <div class="alert-main">
          <div class="alert-first"><span class="severity ${severity}">${escapeHtml(severity)}</span><span class="alert-kind">${escapeHtml(alert.label)}</span></div>
          <div class="alert-reason">${escapeHtml((alert.reasons || []).join(" · "))}</div>
          <div class="alert-meta">${escapeHtml(alert.src)} → ${escapeHtml(alert.dst)}:${escapeHtml(alert.dport)} · ${Math.round((alert.prob || 0) * 100)}% confidence</div>
          <div class="alert-right"><span class="alert-time">${fmtAgo(alert.ts)}</span>${blocked ? '<span class="blocked-tag"><span class="shield-icon">⬡</span> Blocked locally</span>' : `<button class="block-button" data-ip="${escapeHtml(alert.src)}">Block</button>`}</div>
        </div></div>`;
    }).join("");
    list.querySelectorAll(".block-button").forEach(button => {
      button.onclick = () => blockIP(button.dataset.ip);
    });
    applyAlertFilters();
  }

  function applyAlertFilters() {
    const query = $("#dashboard-search").value.trim().toLowerCase();
    const rows = $$(".alert-row", $("#alert-list"));
    let visible = 0;
    rows.forEach(row => {
      const matchesSearch = !query || row.textContent.toLowerCase().includes(query);
      const matchesFilter = state.alertFilter === "all"
        || (state.alertFilter === "high" && ["high", "critical"].includes(row.dataset.severity))
        || (state.alertFilter === "blocked" && row.dataset.blocked === "true");
      row.hidden = !(matchesSearch && matchesFilter);
      if (!row.hidden) visible++;
    });
    $(".filter-empty", $("#alert-list"))?.remove();
    const isFiltered = state.alertFilter !== "all" || Boolean(query);
    if (isFiltered && !visible) {
      const empty = document.createElement("div");
      empty.className = "filter-empty";
      empty.textContent = "No detections match this view.";
      $("#alert-list").append(empty);
    }
    $("#feed-total").textContent = isFiltered
      ? `${visible} shown · ${state.alerts.length} total`
      : `${state.alerts.length} event${state.alerts.length === 1 ? "" : "s"}`;
  }

  function drawChart(progress = 1) {
    const canvases = [$("#traffic-chart"), $("#threat-chart"), $("#ingress-chart")]
      .filter(canvas => canvas && canvas.getBoundingClientRect().width > 0);
    if (!canvases.length) return;
    for (const canvas of canvases) {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) continue;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.round(rect.width * dpr);
      const height = Math.round(rect.height * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = rect.width, h = rect.height;
      ctx.clearRect(0, 0, w, h);
      const values = state.series.slice(-state.chartWindow);
      const markers = state.markers.slice(-state.chartWindow);
      const observedPeak = Math.max(0, ...values);
      const max = Math.max(10, Math.ceil(observedPeak / 40) * 40);
      const axis = canvas.closest(".chart-wrap")?.querySelector(".axis-labels");
      if (axis) axis.innerHTML = [max, Math.round(max * 2 / 3), Math.round(max / 3), 0].map(value => `<span>${value}</span>`).join("");
      if (canvas.id === "traffic-chart") {
        $("#chart-empty").classList.toggle("visible", !values.some(value => value > 0) && !markers.some(Boolean));
      }
      ctx.strokeStyle = "rgba(242,240,238,.075)";
      ctx.lineWidth = 1;
      for (let row = 0; row < 4; row++) {
        const y = 4 + row * (h - 8) / 3;
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      const step = w / Math.max(1, values.length - 1);
      const points = values.map((value, i) => ({
        x: i * step,
        y: h - 5 - value / max * (h - 16)
      }));
      const visibleCount = Math.max(1, Math.ceil(points.length * progress));
      const visiblePoints = points.slice(0, visibleCount);
      const hasActivity = values.some(value => value > 0) || markers.some(Boolean);
      if (hasActivity) {
        const fill = ctx.createLinearGradient(0, 0, 0, h);
        fill.addColorStop(0, "rgba(255,121,92,.16)");
        fill.addColorStop(1, "rgba(255,121,92,0)");
        ctx.beginPath();
        visiblePoints.forEach((point, i) => {
          if (!i) ctx.moveTo(point.x, point.y);
          else {
            const previous = visiblePoints[i - 1];
            const middleX = (previous.x + point.x) / 2;
            const middleY = (previous.y + point.y) / 2;
            ctx.quadraticCurveTo(previous.x, previous.y, middleX, middleY);
          }
        });
        const first = visiblePoints[0];
        const lastVisible = visiblePoints.at(-1);
        ctx.lineTo(lastVisible.x, lastVisible.y);
        ctx.lineTo(lastVisible.x, h);
        ctx.lineTo(first.x, h);
        ctx.closePath();
        ctx.fillStyle = fill;
        ctx.fill();

      }
      // Keep the zero-traffic state legible: draw the measured series even when
      // every sample is zero, so an idle dashboard still shows a real baseline.
      ctx.beginPath();
      visiblePoints.forEach((point, i) => i ? ctx.lineTo(point.x, point.y) : ctx.moveTo(point.x, point.y));
      ctx.lineWidth = hasActivity ? 1.7 : 1.5;
      ctx.strokeStyle = hasActivity ? "#ff795c" : "rgba(255,121,92,.68)";
      ctx.stroke();
      markers.slice(0, visibleCount).forEach((marked, i) => {
        if (!marked || !points[i]) return;
        ctx.beginPath(); ctx.arc(points[i].x, points[i].y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "#cf7772"; ctx.fill();
      });
      const head = visiblePoints.at(-1);
      if (hasActivity && head) {
        ctx.beginPath(); ctx.arc(head.x, head.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,121,92,.18)"; ctx.fill();
        ctx.beginPath(); ctx.arc(head.x, head.y, 2.7, 0, Math.PI * 2);
        ctx.fillStyle = "#f2f0ee"; ctx.fill();
      }
    }
    state.chartDirty = false;
  }

  function drawChartFrame(now) {
    state.chartFrame = 0;
    const progress = state.chartAnimating
      ? Math.min(1, Math.max(0, (now - state.chartAnimationAt) / 620))
      : 1;
    drawChart(progress);
    if (progress < 1) state.chartFrame = requestAnimationFrame(drawChartFrame);
    else state.chartAnimating = false;
  }

  function scheduleChart(animate = false) {
    state.chartDirty = true;
    if (animate && !reduceMotion) {
      state.chartAnimationAt = performance.now();
      state.chartAnimating = true;
    } else if (reduceMotion) {
      state.chartAnimating = false;
    }
    if (!state.chartFrame) state.chartFrame = requestAnimationFrame(drawChartFrame);
  }

  function setChartWindow(seconds) {
    state.chartWindow = Number(seconds) || 60;
    $("#chart-window-label").textContent = `${state.chartWindow} seconds`;
    $$('[data-chart-window]').forEach(button => {
      const active = Number(button.dataset.chartWindow) === state.chartWindow;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const marks = [1, .75, .5, .25, 0];
    $$(".chart-time").forEach(row => {
      row.querySelectorAll("span").forEach((label, index) => {
        label.textContent = index === marks.length - 1 ? "NOW" : `−${Math.round(state.chartWindow * marks[index])}s`;
      });
    });
    $("#chart-tooltip").classList.remove("visible");
    scheduleChart();
  }

  function showChartTooltip(event) {
    const canvas = event.currentTarget;
    const wrap = canvas.closest(".chart-wrap");
    const tooltip = $("#chart-tooltip");
    if (!wrap || !tooltip) return;
    const rect = canvas.getBoundingClientRect();
    const relativeX = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
    const values = state.series.slice(-state.chartWindow);
    const index = Math.max(0, Math.min(values.length - 1, Math.round(relativeX / Math.max(1, rect.width) * (values.length - 1))));
    const secondsAgo = Math.round((values.length - 1 - index) * (state.chartWindow / Math.max(1, values.length - 1)));
    tooltip.textContent = `${secondsAgo ? `${secondsAgo}s ago` : "Now"}  ·  ${Number(values[index] || 0).toLocaleString()} packets / sec`;
    const wrapRect = wrap.getBoundingClientRect();
    tooltip.style.left = `${Math.max(10, Math.min(wrap.clientWidth - 205, event.clientX - wrapRect.left + 12))}px`;
    tooltip.style.top = `${Math.max(8, Math.min(wrap.clientHeight - 42, event.clientY - wrapRect.top - 34))}px`;
    tooltip.classList.add("visible");
  }

  function pushPoint(value, isAlert = false) {
    const hadActivity = state.series.some(point => point > 0) || state.markers.some(Boolean);
    state.series.push(Math.max(0, Number(value) || 0));
    state.series.shift();
    state.markers.push(isAlert);
    state.markers.shift();
    scheduleChart(!hadActivity && (Number(value) > 0 || isAlert));
    if (isAlert) showChartPin();
  }

  function showChartPin() {
    const pins = [$("#chart-pin"), $("#ingress-chart-pin")].filter(Boolean);
    const label = attackInfo[state.activeAttack]?.label || state.incident?.label || "Anomaly";
    const technique = attackInfo[state.activeAttack]?.technique || "T1046";
    pins.forEach(pin => {
      pin.textContent = `${label} detected · ${technique}`;
      pin.classList.remove("visible");
      void pin.offsetWidth;
      pin.classList.add("visible");
      const wrap = pin.closest(".chart-wrap");
      const ripple = document.createElement("span");
      ripple.className = "chart-shockwave";
      ripple.style.left = `${Math.max(45, wrap.clientWidth * .78)}px`;
      ripple.style.top = `${Math.max(20, wrap.clientHeight * .35)}px`;
      wrap.append(ripple);
      setTimeout(() => ripple.remove(), 800);
    });
  }

  function setGauge(value) {
    const score = Math.min(1, Math.max(0, Number(value) || 0));
    $("#gauge-value").textContent = score.toFixed(2);
    $("#gauge-arc").style.strokeDashoffset = String(145 - score * 145);
    $("#anomaly-gauge").style.setProperty("--score-color", score >= .8 ? "var(--red)" : score >= .5 ? "var(--amber)" : "var(--cyan)");
    $("#gauge-needle").style.setProperty("--gauge-angle", `${-90 + score * 180}deg`);
  }

  function beginResponse(alert, mock = false) {
    state.responseTimers.forEach(clearTimeout);
    state.responseTimers = [];
    state.incident = { ...alert, blocked: false, mock };
    state.incidentStartedAt = performance.now();
    state.incidentDetectedAt = state.incidentStartedAt;
    state.responseStepTimes = [0];
    $("#incident-summary").hidden = true;
    $("#recommend-card").hidden = true;
    $("#network-map").classList.add("is-attacking");
    $("#network-map").classList.remove("is-contained");
    $$(".network-node").forEach(node => {
      node.classList.remove("quarantined");
      node.classList.toggle("targeted", node.dataset.node === "dmz");
    });
    $("#endpoint-target").textContent = alert.dst || "10.0.2.14";
    $("#endpoint-asset").classList.add("targeted");
    $(".endpoint-status").classList.add("targeted");
    $("#endpoint-label").textContent = mock ? "TARGETED · DEMO RESPONSE" : "TARGETED · 1 AT RISK";
    setTheme("critical");
    setGauge(alert.prob || .92);
    renderResponse(0, 0);
    openRecommendations(alert);
    $("#recommend-card").hidden = false;
    appendLog(`Anomaly scored ${(alert.prob || .92).toFixed(2)} · source ${alert.src}`, "alert-line");
    const sourceStep = setTimeout(() => {
      const elapsed = performance.now() - state.incidentStartedAt;
      state.responseStepTimes[1] = elapsed;
      renderResponse(1, elapsed);
      appendLog(`Source identified · ${alert.src}`, "response-line");
    }, 500);
    state.responseTimers.push(sourceStep);
    if (mock) {
      responseLabels.slice(2).forEach((_, index) => {
        const timer = setTimeout(() => {
          const elapsed = performance.now() - state.incidentStartedAt;
          state.responseStepTimes[index + 2] = elapsed;
          renderResponse(index + 2, elapsed);
          appendLog(`${responseLabels[index + 2]} · simulated response`, "response-line");
        }, 1100 + index * 560);
        state.responseTimers.push(timer);
      });
      const contained = setTimeout(() => completeContainment(alert, true), 3400);
      state.responseTimers.push(contained);
    } else {
      const actionRequired = setTimeout(() => {
        const elapsed = performance.now() - state.incidentStartedAt;
        state.responseStepTimes[2] = elapsed;
        renderResponse(2, elapsed);
        $("#response-elapsed").textContent = "ACTION REQUIRED";
      }, 500);
      state.responseTimers.push(actionRequired);
      appendLog("Response preview ready · block action requires operator approval", "response-line");
    }
  }

  function renderResponse(activeIndex, elapsedMs) {
    const list = $("#response-steps");
    list.innerHTML = responseLabels.map((label, index) => {
      const done = index < activeIndex;
      const active = index === activeIndex;
      const stepTime = active ? elapsedMs : state.responseStepTimes[index];
      const time = (done || active) && Number.isFinite(stepTime)
        ? `<span class="step-time">${Math.round(stepTime)}ms</span>` : "";
      return `<li class="response-step${done ? " done" : ""}${active ? " active" : ""}">${label}${time}</li>`;
    }).join("");
    list.style.setProperty("--progress-scale", String(Math.min(1, activeIndex / (responseLabels.length - 1))));
    $("#response-elapsed").textContent = elapsedMs ? `ELAPSED ${(elapsedMs / 1000).toFixed(1)}s` : "RESPONDING";
  }

  function resetIncidentVisuals() {
    state.responseTimers.forEach(clearTimeout);
    state.responseTimers = [];
    $("#incident-summary").hidden = true;
    $("#recommend-card").hidden = true;
    $("#incident-drawer").classList.remove("open");
    $("#incident-drawer").setAttribute("aria-hidden", "true");
    $("#network-map").classList.remove("is-attacking", "is-contained");
    $$(".network-node").forEach(node => node.classList.remove("targeted", "quarantined"));
    $(".endpoint-status").classList.remove("targeted");
    $("#endpoint-asset").classList.remove("targeted", "quarantined");
    $("#endpoint-target").textContent = "10.0.2.14";
    $("#endpoint-label").textContent = "3 HEALTHY";
    $("#response-steps").innerHTML = '<li class="response-idle">Awaiting a detection event</li>';
    $("#response-steps").style.setProperty("--progress-scale", "0");
    $("#response-elapsed").textContent = "STANDBY";
    $("#chart-pin").classList.remove("visible");
    setGauge(0);
    state.incident = null;
    state.responseStepTimes = [];
    state.incidentStartedAt = 0;
    state.incidentDetectedAt = 0;
    state.attackStartedAt = 0;
  }

  function openRecommendations(alert) {
    const type = attackInfo[state.activeAttack] || attackInfo.portscan;
    const source = String(alert.src || "192.168.1.200");
    $("#drawer-severity").textContent = String(alert.severity || "HIGH").toUpperCase();
    $("#drawer-asset").textContent = `${alert.dst || "10.0.2.14"} · monitored endpoint`;
    $("#mitre-chip").textContent = `MITRE ATT&CK · ${type.technique}`;
    const baseUrl = location.origin;
    const steps = [
      ["Review current alert evidence", `curl.exe ${baseUrl}/api/alerts`],
      ["Add the source to the local blocklist", `curl.exe -X POST ${baseUrl}/api/block/${encodeURIComponent(source)}`],
      ["Save the alert feed for review", `curl.exe -o netguard-alerts.json ${baseUrl}/api/alerts`]
    ];
    $("#recommend-steps").innerHTML = steps.map(([title, command]) =>
      `<li class="recommend-step"><div><strong>${escapeHtml(title)}</strong><code>${escapeHtml(command)}</code></div><button type="button" class="copy-command" data-command="${escapeHtml(command)}">COPY</button></li>`
    ).join("");
    $("#recommend-steps").querySelectorAll(".copy-command").forEach(button => {
      button.onclick = async () => {
        try {
          await navigator.clipboard.writeText(button.dataset.command);
          button.closest(".recommend-step").classList.add("completed");
          button.textContent = "COPIED";
          toast("Command copied");
        } catch (error) {
          toast(`Could not copy command: ${error.message}`);
        }
      };
    });
  }

  function completeContainment(alert, mock = false) {
    if (state.incident?.blocked && state.incident.src === alert.src) return;
    state.responseTimers.forEach(clearTimeout);
    state.responseTimers = [];
    if (!state.incident) state.incident = { ...alert, blocked: true, mock };
    state.incident.blocked = true;
    state.incident.mock = mock;
    if (mock) state.mockBlocked++;
    state.activeAttack = state.activeAttack || "portscan";
    state.stats = state.stats || {};
    state.stats.blocked_ips = mock ? state.mockBlocked : (state.stats.blocked_ips || 0) + 1;
    if (mock) state.stats.alerts = Math.max(state.stats.alerts || 0, state.alerts.length);
    renderKpis(state.stats);
    $("#network-map").classList.remove("is-attacking");
    $("#network-map").classList.add("is-contained");
    $$(".network-node").forEach(node => node.classList.toggle("quarantined", node.dataset.node === "dmz"));
    $(".endpoint-status").classList.remove("targeted");
    $("#endpoint-label").textContent = "QUARANTINED · 1 ISOLATED";
    $("#endpoint-asset").classList.remove("targeted");
    $("#endpoint-asset").classList.add("quarantined");
    $("#incident-summary").hidden = false;
    $("#recommend-card").hidden = false;
    $(".summary-kicker").textContent = mock ? "INCIDENT CONTAINED · MOCK" : "CONTAINED · LOCAL BLOCKLIST";
    $("#incident-summary h2").textContent = mock ? "Attack neutralized" : "Source blocked in application";
    $("#summary-attack").textContent = attackInfo[state.activeAttack]?.label || alert.label || "Anomaly";
    $("#summary-source").textContent = alert.src || "—";
    $("#summary-detect").textContent = state.attackStartedAt && state.incidentDetectedAt
      ? `${Math.max(1, Math.round(state.incidentDetectedAt - state.attackStartedAt))} ms` : "Unavailable";
    $("#summary-block").textContent = `${((performance.now() - state.incidentStartedAt) / 1000).toFixed(1)} s`;
    $("#summary-dropped").textContent = "Not measured";
    for (let index = 0; index < responseLabels.length; index++) {
      if (!Number.isFinite(state.responseStepTimes[index])) state.responseStepTimes[index] = performance.now() - state.incidentStartedAt;
    }
    renderResponse(responseLabels.length, performance.now() - state.incidentStartedAt);
    $("#response-elapsed").textContent = `BLOCKED IN ${((performance.now() - state.incidentStartedAt) / 1000).toFixed(1)}s`;
    setTheme("contained");
    appendLog(mock ? "Threat contained · mock defense flow complete" : "Source added to simulated application blocklist", "response-line");
    renderAlerts();
    state.attackStartedAt = 0;
  }

  function addAlert(alert, render = true, mock = false) {
    if (!alert || !alert.id || state.alerts.some(item => item.id === alert.id)) return false;
    alert.mock = Boolean(mock || alert.mock);
    alert.isNew = true;
    state.alerts.unshift(alert);
    state.alerts = state.alerts.slice(0, 60);
    state.stats = state.stats || { alerts: 0, blocked_ips: 0, type_counts: {} };
    state.stats.alerts = Math.max(Number(state.stats.alerts) || 0, state.alerts.length);
    state.stats.type_counts = state.stats.type_counts || {};
    state.stats.type_counts[alert.label] = (state.stats.type_counts[alert.label] || 0) + 1;
    const score = Number(alert.prob || .85);
    setGauge(score);
    pushPoint(Number(state.stats?.packets_per_second) || 0, true);
    if (render) {
      renderKpis(state.stats);
      renderAlerts();
    }
    appendLog(`${alert.label} detected · ${alert.src} → ${alert.dst}:${alert.dport}`, "alert-line");
    beginResponse(alert, mock);
    updateBlastRadiusFromAlert(alert);
    setTimeout(() => {
      const item = state.alerts.find(entry => entry.id === alert.id);
      if (item) item.isNew = false;
    }, 500);
    return true;
  }

  function processSocketMessage(message) {
    if (message.type === "alert") {
      addAlert(message, false);
      return "render";
    }
    if (message.type === "source") {
      setNotice(message.source);
      return "render";
    }
    if (message.type === "attack_started") {
      state.activeAttack = String(message.attack || "").toLowerCase();
      state.attackStartedAt = performance.now();
      $("#network-map").classList.add("is-attacking");
      setTheme("elevated");
      appendLog(`${message.attack} simulation started · target ${message.target}`, "system-line");
      return "render";
    }
    if (message.type === "attack_complete") {
      toast(`${message.attack}: ${message.detected ? "detected" : "not detected"} · simulated lab run`);
      if (!message.detected) {
        resetIncidentVisuals();
        setTheme("normal");
      }
      $$(".attack-button.is-loading").forEach(button => button.classList.remove("is-loading"));
      return "render";
    }
    if (message.type === "blocked") {
      toast(`${message.ip} added to simulated blocklist`);
      if (state.incident?.src === message.ip) completeContainment(state.incident, false);
      return "render";
    }
    if (message.type === "blast.computed" && message.origin) {
      state.blastSimulated = false;
      state.blastAlerted = true;
      state.blastSelectedAsset = message.origin;
      refreshDetailedBlastRadius(message.origin);
      return "";
    }
    if (message.type === "blast.contained" || message.type === "blast.reset") {
      state.blastTopology = null;
      refreshDetailedBlastRadius(state.blastOrigin);
      return "";
    }
    if (message.type === "flow") {
      return "flow";
    }
    return "";
  }

  function connectSocket() {
    if (state.mock) return;
    const socket = new WebSocket(window.netguardWebSocketUrl("/ws"));
    state.socket = socket;
    socket.onopen = () => {
      setConnectionLabel("Connected");
      $("#ws-status").textContent = "connected";
      document.documentElement.dataset.streaming = "true";
    };
    socket.onclose = () => {
      setConnectionLabel("Reconnecting");
      $("#ws-status").textContent = "reconnecting";
      document.documentElement.dataset.streaming = "false";
      setTimeout(connectSocket, 1800);
    };
    socket.onerror = () => socket.close();
    socket.onmessage = event => {
      try {
        state.pendingMessages.push(JSON.parse(event.data));
      } catch (error) {
        appendLog(`Invalid WebSocket event · ${error.message}`, "alert-line");
      }
    };
  }

  function flushSocketMessages() {
    if (!state.pendingMessages.length) return;
    const batch = state.pendingMessages.splice(0, 500);
    let shouldRender = false, hasAlert = false, flows = 0, lastFlow = 0;
    for (const message of batch) {
      const result = processSocketMessage(message);
      shouldRender ||= result === "render";
      hasAlert ||= message.type === "alert";
      if (result === "flow") {
        flows++;
        lastFlow = Number(state.stats?.packets_per_second || 0);
      }
    }
    if (flows) {
      const value = lastFlow || Number(state.stats?.packets_per_second) || flows;
      pushPoint(value);
      appendLog(`${flows} flow${flows === 1 ? "" : "s"} processed · ${value} packets/sec`, "system-line");
    }
    if (hasAlert && state.stats) renderKpis(state.stats);
    if (shouldRender) renderAlerts();
  }

  async function launch(attack, button) {
    if (attack !== "normal" && !isLocalLabTarget($("#target-ip").value)) {
      toast("Use a loopback or RFC1918 IPv4 address for lab simulations");
      return;
    }
    button.classList.add("is-loading");
    button.disabled = true;
    state.activeAttack = attack;
    if (state.mock) {
      if (attack === "normal") {
        resetIncidentVisuals();
        setTheme("normal");
        appendLog("Baseline traffic generated · no anomalies detected", "response-line");
        button.classList.remove("is-loading");
        button.disabled = false;
        return;
      }
      await runMockScenario(attack, button);
      return;
    }
    try {
      const target = $("#target-ip").value.trim();
      const result = await api(`/api/launch/${attack}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target })
      });
      $("#source-select").value = "demo";
      $("#capture-toggle").classList.remove("active");
      $("#capture-toggle").textContent = "Start capture";
      toast(`${result.attack}: ${result.detected ? "detected" : "not detected"} · simulated lab telemetry`);
      await refresh();
    } catch (error) {
      button.classList.remove("is-loading");
      toast(error.message);
    } finally {
      button.disabled = false;
      setTimeout(() => button.classList.remove("is-loading"), 6000);
    }
  }

  function isLocalLabTarget(value) {
    const parts = String(value).trim().split(".");
    if (parts.length !== 4 || parts.some(part => !/^\d{1,3}$/.test(part))) return false;
    const octets = parts.map(Number);
    if (octets.some(part => part > 255)) return false;
    return octets[0] === 10 || octets[0] === 127
      || (octets[0] === 172 && octets[1] >= 16 && octets[1] <= 31)
      || (octets[0] === 192 && octets[1] === 168);
  }

  async function runMockScenario(attack, button) {
    const type = attackInfo[attack] || attackInfo.portscan;
    state.activeAttack = attack;
    state.responseTimers.forEach(clearTimeout);
    resetIncidentVisuals();
    state.alerts = [];
    renderAlerts();
    $("#incident-drawer").classList.remove("open");
    $("#incident-drawer").setAttribute("aria-hidden", "true");
    $("#network-map").classList.remove("is-contained");
    setTheme("elevated");
    appendLog(`${type.label} scripted scenario started · MOCK MODE`, "system-line");
    state.attackStartedAt = performance.now();
    state.stats = state.stats || { packets_per_second: 18, flows_processed: 240, alerts: 0, blocked_ips: 0, type_counts: {}, attacks_launched: 0, attacks_detected: 0, source: "demo" };
    state.stats.attacks_launched = (state.stats.attacks_launched || 0) + 1;
    state.stats.packets_per_second = 148;
    state.stats.flows_processed += 460;
    renderKpis(state.stats);
    pushPoint(112);
    setGauge(.04);
    button.disabled = true;
    const alert = {
      id: `mock-${Date.now()}`,
      label: type.label,
      severity: "high",
      src: "192.168.1.200",
      dst: $("#target-ip").value.trim() || "10.0.2.14",
      dport: attack === "portscan" ? 443 : attack === "bruteforce" ? 22 : 80,
      prob: attack === "portscan" ? .97 : .94,
      reasons: [attack === "portscan" ? "High unique destination ports" : attack === "bruteforce" ? "Repeated failed logins" : "Abnormal request rate"],
      ts: Date.now() / 1000,
      blocked: false
    };
    const detection = setTimeout(() => {
      state.stats.alerts++;
      state.stats.attacks_detected++;
      addAlert(alert, true, true);
      showChartPin();
      button.classList.remove("is-loading");
    }, 720);
    state.responseTimers.push(detection);
    setTimeout(() => {
      button.disabled = false;
      button.classList.remove("is-loading");
    }, 4400);
  }

  async function blockIP(ip) {
    const confirmed = window.confirm(
      `Add ${ip} to NetGuard's local application blocklist? This does not change host firewall rules.`
    );
    if (!confirmed) return;
    try {
      if (state.mock) {
        const alert = state.alerts.find(item => item.src === ip);
        if (!alert) return;
        alert.blocked = true;
        renderAlerts();
        completeContainment(alert, true);
        toast(`${ip} added to mock blocklist`);
        return;
      }
      await api(`/api/block/${encodeURIComponent(ip)}`, { method: "POST" });
      state.alerts = state.alerts.map(alert => alert.src === ip ? { ...alert, blocked: true } : alert);
      renderAlerts();
      if (state.incident?.src === ip) completeContainment(state.incident, false);
      else toast(`${ip} added to simulated application blocklist`);
      await refresh();
    } catch (error) {
      toast(error.message);
    }
  }

  async function setSource(source) {
    if (source === "pcap") {
      $("#pcap-file").click();
      return;
    }
    if (state.mock) {
      if (source === "live") {
        $("#source-select").value = "demo";
        setNotice("demo");
        toast("Live capture is unavailable in UI mock mode");
        return;
      }
      $("#source-select").value = source;
      state.stats.source = source;
      setNotice(source);
      toast("Mock lab stream selected");
      return;
    }
    try {
      await api("/api/source", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source, interface: source === "live" ? $("#interface-select").value || null : null })
      });
      state.noticeDismissed = false;
      setNotice(source);
      const button = $("#capture-toggle");
      button.classList.toggle("active", source === "live");
      button.textContent = source === "live" ? "Stop capture" : "Start capture";
      toast(source === "live" ? "Live capture started" : "Lab simulation selected");
    } catch (error) {
      $("#source-select").value = "demo";
      toast(error.message);
    }
  }

  async function loadInterfaces() {
    if (state.mock) return;
    try {
      const data = await api("/api/interfaces");
      const select = $("#interface-select");
      select.innerHTML = '<option value="">Default interface</option>' + data.interfaces.map(name => `<option>${escapeHtml(name)}</option>`).join("");
    } catch (error) {
      $("#capture-help").textContent = `Interfaces unavailable · ${error.message}`;
    }
  }

  async function toggleCapture() {
    const button = $("#capture-toggle");
    if (state.mock) {
      toast("Live capture is unavailable in UI mock mode");
      return;
    }
    try {
      if (button.classList.contains("active")) {
        await api("/api/source", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ source: "demo" }) });
        button.classList.remove("active");
        button.textContent = "Start capture";
        $("#source-select").value = "demo";
        toast("Live capture stopped");
      } else {
        await api("/api/source", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ source: "live", interface: $("#interface-select").value || null })
        });
        button.classList.add("active");
        button.textContent = "Stop capture";
        $("#source-select").value = "live";
        toast("Live capture started");
      }
    } catch (error) {
      toast(error.message);
    }
  }

  async function replayCapture(event) {
    const file = event.target.files[0];
    if (!file) return;
    $("#pcap-name").textContent = file.name;
    if (state.mock) {
      toast(`Mock replay selected · ${file.name}`);
      return;
    }
    try {
      const speed = $("#replay-speed").value;
      const result = await api(`/api/replay?filename=${encodeURIComponent(file.name)}&speed=${encodeURIComponent(speed)}`, {
        method: "POST", headers: { "Content-Type": "application/octet-stream" }, body: await file.arrayBuffer()
      });
      $("#capture-toggle").classList.remove("active");
      $("#capture-toggle").textContent = "Start capture";
      state.noticeDismissed = false;
      setNotice("pcap");
      toast(`PCAP replay complete · ${result.flows_replayed} flows`);
      await refresh();
    } catch (error) {
      toast(error.message);
    }
  }

  function exportAlerts() {
    const blob = new Blob([JSON.stringify(state.alerts, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `netguard-alerts-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast("Alert feed exported");
  }

  function setPresenterMode(enabled) {
    if (enabled) state.presenterReturnDashboard = activeDashboard;
    document.body.classList.toggle("presenter-mode", enabled);
    $("#presenter-toggle")?.setAttribute("aria-pressed", String(enabled));
    setDashboard(enabled ? "overview" : state.presenterReturnDashboard || "overview");
    state.presenterReturnDashboard = "";
    requestAnimationFrame(() => scheduleChart());
  }

  function resetMockLab() {
    if (!state.mock) {
      toast("Reset is available in scripted mock mode only");
      return;
    }
    resetIncidentVisuals();
    state.alerts = [];
    state.activeAttack = "";
    state.mockBlocked = 0;
    state.mockTick = 0;
    state.series = Array(60).fill(0);
    state.markers = Array(60).fill(false);
    state.stats = {
      source: "demo", packets_per_second: 18, flows_processed: 240, alerts: 0, blocked_ips: 0,
      attacks_launched: 0, attacks_detected: 0, detection_rate: null,
      type_counts: { PortScan: 0, BruteForce: 0, "DoS/DDoS": 0 }, model_status: "rules only"
    };
    state.series.fill(state.stats.packets_per_second);
    scheduleChart();
    renderKpis(state.stats);
    renderAlerts();
    setTheme("normal");
    scheduleChart();
    appendLog("Mock lab reset · scripted telemetry counters cleared", "system-line");
  }

  function initMockMode() {
    document.documentElement.dataset.streaming = "true";
    setConnectionLabel("Mock mode");
    $("#ws-status").textContent = "mock telemetry";
    $("#source-notice").insertAdjacentHTML("afterend", '<div class="mock-banner">SCRIPTED UI MOCK · no backend requests are sent</div>');
    state.stats = {
      source: "demo", packets_per_second: 18, flows_processed: 240, alerts: 0, blocked_ips: 0,
      attacks_launched: 0, attacks_detected: 0, detection_rate: null,
      type_counts: { PortScan: 0, BruteForce: 0, "DoS/DDoS": 0 }, model_status: "rules only"
    };
    renderKpis(state.stats);
    renderTypes(state.stats.type_counts);
    renderAlerts();
    $("#reset-lab").hidden = false;
    setTheme("normal");
    document.body.classList.add("is-loaded");
    const requestedState = new URLSearchParams(location.search).get("state");
    if (["normal", "elevated", "critical", "contained"].includes(requestedState)) {
      setTheme(requestedState);
      if (requestedState === "critical" || requestedState === "contained") {
        const mockAlert = { id: `state-${requestedState}`, label: "PortScan", severity: "high", src: "192.168.1.200", dst: "10.0.2.14", dport: 443, prob: .97, reasons: ["Scripted mock state"], ts: Date.now() / 1000, blocked: requestedState === "contained" };
        state.alerts = [mockAlert];
        state.stats.alerts = 1;
        state.stats.type_counts.PortScan = 1;
        renderKpis(state.stats);
        renderAlerts();
        beginResponse(mockAlert, false);
        if (requestedState === "contained") {
          state.responseTimers.forEach(clearTimeout);
          setTimeout(() => completeContainment(mockAlert, true), 50);
        }
      }
    }
  }

  function bindEvents() {
    const bentoCards = $$(".dashboard-view[data-dashboard='overview'] .kpi-card, .dashboard-view[data-dashboard='overview'] .panel");
    bentoCards.forEach(card => {
      card.addEventListener("pointermove", event => {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty("--mb-x", `${(event.clientX - bounds.left).toFixed(1)}px`);
        card.style.setProperty("--mb-y", `${(event.clientY - bounds.top).toFixed(1)}px`);
        card.dataset.spotlight = "";
      });
      card.addEventListener("pointerleave", () => delete card.dataset.spotlight);
    });
    $("#source-select").addEventListener("change", event => setSource(event.target.value));
    $$("[data-attack]").forEach(button => button.addEventListener("click", () => launch(button.dataset.attack, button)));
    $("#inject-button").addEventListener("click", () => launch("portscan", $("#inject-button")));
    $$("[data-dashboard-target]").forEach(card => card.addEventListener("click", () => setDashboard(card.dataset.dashboardTarget)));
    $$("[data-chart-window]").forEach(button => button.addEventListener("click", () => setChartWindow(button.dataset.chartWindow)));
    $$("[data-alert-filter]").forEach(button => button.addEventListener("click", () => {
      state.alertFilter = button.dataset.alertFilter;
      $$("[data-alert-filter]").forEach(option => {
        const active = option === button;
        option.classList.toggle("active", active);
        option.setAttribute("aria-pressed", String(active));
      });
      applyAlertFilters();
    }));
    $("#traffic-chart").addEventListener("pointermove", showChartTooltip);
    $("#traffic-chart").addEventListener("pointerleave", () => $("#chart-tooltip").classList.remove("visible"));
    $("#capture-toggle").addEventListener("click", toggleCapture);
    $("#export-button").addEventListener("click", exportAlerts);
    $("#clear-feed").addEventListener("click", () => {
      state.alerts = [];
      renderAlerts();
    });
    $("#notice-dismiss").onclick = () => {
      state.noticeDismissed = true;
      $("#source-notice").remove();
    };
    $("#interface-select").addEventListener("change", () => {
      if ($("#capture-toggle").classList.contains("active")) setSource("live");
    });
    $("#pcap-file").addEventListener("change", replayCapture);
    $("#blast-scenario").addEventListener("change", event => {
      const origin = event.target.value;
      if (!origin) return;
      $("#blast-endpoint").value = origin;
      state.blastSimulated = true;
      state.blastAlerted = false;
      state.blastSelectedAsset = origin;
      state.blastZoom = 1;
      refreshDetailedBlastRadius(origin, { notify: true });
    });
    $("#blast-endpoint").addEventListener("change", event => {
      const origin = event.target.value;
      $("#blast-scenario").value = BLAST_SCENARIOS[origin] ? origin : "";
      state.blastSimulated = false;
      state.blastAlerted = false;
      state.blastSelectedAsset = origin;
      state.blastZoom = 1;
      refreshDetailedBlastRadius(origin, { notify: true });
    });
    $("#blast-graph").addEventListener("click", event => {
      const node = event.target.closest("[data-blast-asset]");
      if (!node) return;
      state.blastSelectedAsset = node.dataset.blastAsset;
      renderDetailedBlastRadius(state.blastTopology, state.blastRadius);
    });
    $("#blast-graph").addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const node = event.target.closest("[data-blast-asset]");
      if (!node) return;
      event.preventDefault();
      state.blastSelectedAsset = node.dataset.blastAsset;
      renderDetailedBlastRadius(state.blastTopology, state.blastRadius);
    });
    $("#blast-zoom-in").addEventListener("click", () => {
      state.blastZoom = Math.min(1.5, state.blastZoom + 0.1);
      const svg = $("#blast-graph-svg");
      if (svg) svg.style.transform = `scale(${state.blastZoom})`;
    });
    $("#blast-zoom-out").addEventListener("click", () => {
      state.blastZoom = Math.max(0.7, state.blastZoom - 0.1);
      const svg = $("#blast-graph-svg");
      if (svg) svg.style.transform = `scale(${state.blastZoom})`;
    });
    $("#blast-zoom-reset").addEventListener("click", () => {
      state.blastZoom = 1;
      state.blastSelectedAsset = state.blastOrigin;
      renderDetailedBlastRadius(state.blastTopology, state.blastRadius);
    });
    $$("[data-dashboard-link]").forEach(link => link.addEventListener("click", event => {
      event.preventDefault();
      setDashboard(link.dataset.dashboardLink);
    }));
    window.addEventListener("hashchange", () => setDashboard(location.hash.slice(1), false));
    $("#reset-lab").addEventListener("click", resetMockLab);
    $("#open-actions").addEventListener("click", () => {
      $("#incident-drawer").classList.add("open");
      $("#incident-drawer").setAttribute("aria-hidden", "false");
    });
    const closeDrawer = () => {
      $("#incident-drawer").classList.remove("open");
      $("#incident-drawer").setAttribute("aria-hidden", "true");
    };
    $("#close-actions").addEventListener("click", closeDrawer);
    $$(".drawer-backdrop, [data-close-drawer]").forEach(el => el.addEventListener("click", closeDrawer));
    window.addEventListener("keydown", event => {
      if (event.key.toLowerCase() === "p" && !event.repeat && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
        setPresenterMode(!document.body.classList.contains("presenter-mode"));
      }
      if (event.key === "Escape") closeDrawer();
    });
    const search = $("#dashboard-search");
    search.addEventListener("input", applyAlertFilters);
  }

  function init() {
    bindEvents();
    let initialKey = location.hash.slice(1);
    if (!initialKey || initialKey === "landing") {
      if (location.hash === "#landing") history.replaceState(null, "", "#overview");
      if (location.pathname === "/threat-dashboard") initialKey = "blast-radius";
      else initialKey = "overview";
    }
    setDashboard(initialKey, false);
    if (state.mock) {
      initMockMode();
    } else {
      refresh();
      connectSocket();
      loadInterfaces();
      setInterval(refresh, 2500);
      setInterval(flushSocketMessages, 100);
    }
    const observer = new ResizeObserver(() => scheduleChart());
    [$("#traffic-chart"), $("#threat-chart"), $("#ingress-chart")].filter(Boolean).forEach(canvas => observer.observe(canvas));
    scheduleChart();
    setInterval(() => {
      if (state.mock) {
        state.mockTick++;
        const activeAttack = state.incident && !state.incident.blocked ? state.activeAttack : "";
        const base = Number(state.stats?.packets_per_second || 18);
        const wave = (state.mockTick % 8) * 3;
        const value = activeAttack === "dos" ? 96 + wave
          : activeAttack === "bruteforce" ? 42 + (state.mockTick % 5) * 2
            : activeAttack === "portscan" ? 58 + wave : base;
        pushPoint(value);
      } else if (!state.pendingMessages.length) {
        pushPoint(Number(state.stats?.packets_per_second) || 0);
      }
    }, 1000);
    document.body.classList.add("is-loaded");
  }

  init();
})();

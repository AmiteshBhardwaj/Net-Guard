(() => {
  const configuredBase = String(window.NETGUARD_API_BASE || "").replace(/\/+$/, "");
  window.netguardApiUrl = (path) => `${configuredBase}${path.startsWith("/") ? path : `/${path}`}`;
  window.netguardWebSocketUrl = (path) => {
    const endpoint = new URL(window.netguardApiUrl(path), window.location.href);
    endpoint.protocol = endpoint.protocol === "https:" ? "wss:" : "ws:";
    return endpoint.toString();
  };
})();

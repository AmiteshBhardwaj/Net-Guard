import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const apiBase = process.env.NETGUARD_API_URL?.trim().replace(/\/+$/, "");
if (!apiBase) {
  throw new Error("Set NETGUARD_API_URL in Vercel to the public FastAPI backend URL.");
}

let backend;
try {
  backend = new URL(apiBase);
} catch {
  throw new Error("NETGUARD_API_URL must be a valid absolute URL.");
}
const localhost = ["localhost", "127.0.0.1", "::1"].includes(backend.hostname);
if (!["https:", ...(localhost ? ["http:"] : [])].includes(backend.protocol)) {
  throw new Error("NETGUARD_API_URL must use HTTPS except for localhost development.");
}
if (backend.username || backend.password || backend.search || backend.hash || backend.pathname !== "/") {
  throw new Error("NETGUARD_API_URL must be an origin URL without credentials, path, query, or fragment.");
}

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "frontend", "vercel-dist");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, "static"), resolve(output, "static"), { recursive: true });

const runtimeTemplate = await readFile(
  resolve(root, "static/netguard-runtime-config.js"),
  "utf8",
);
const runtimeConfig = `window.NETGUARD_API_BASE = ${JSON.stringify(apiBase)};\n${runtimeTemplate}`;
await writeFile(resolve(output, "static/netguard-runtime-config.js"), runtimeConfig);

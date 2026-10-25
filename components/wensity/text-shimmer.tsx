import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextShimmerProps {
  /** The string to render. */
  text: string;
  /** Tag rendered as the outer element. */
  as?: keyof React.JSX.IntrinsicElements;
  /** Full sweep cycle duration in seconds. Lower = faster. Default: 2.8s. */
  duration?: number;
  /** Resting fill color. Defaults to a theme-aware muted tone. */
  baseColor?: string;
  /** Bright highlight color. Defaults to a theme-aware foreground tone. */
  shimmerColor?: string;
  /** Band half-width scale (8–60). Converted to px from text length so the shine stays proportional. */
  spread?: number;
  /** Gradient angle in degrees (0 = left→right, 90 = top→bottom). */
  angle?: number;
  /** Sweep travel direction. */
  direction?: "left" | "right";
  /** Hold at the end of each sweep before restarting, in seconds. */
  delay?: number;
  /** Ping-pong the sweep instead of looping in one direction. */
  yoyo?: boolean;
  /** Pause the loop while the pointer is over the text. */
  pauseOnHover?: boolean;
  /**
   * Force the infinite loop paused. When omitted, the loop runs forever while
   * visible and auto-pauses when off-screen or the tab is hidden.
   */
  paused?: boolean;
  /** Optional Tailwind class for size, weight, tracking, etc. */
  className?: string;
}

const BASE_STYLE_ID = "wensity-text-shimmer-base";
const registeredDelays = new Set<string>();

/**
 * TextShimmer
 *
 * Infinite headline shimmer. Dual-layer paint: a solid base fill plus a
 * moving feathered highlight band, clipped with `background-clip: text`.
 * Only `background-position` animates.
 */
export function TextShimmer({
  text,
  as = "span",
  duration = 2.8,
  baseColor = "#71717a",
  shimmerColor = "rgba(255, 255, 255, 0.95)",
  spread = 32,
  angle = 90,
  direction = "left",
  delay = 0,
  yoyo = false,
  pauseOnHover = false,
  paused,
  className,
}: TextShimmerProps) {
  const nodeRef = React.useRef<HTMLElement | null>(null);
  const pausedPropRef = React.useRef(paused);
  const hoverPausedRef = React.useRef(false);
  const inViewRef = React.useRef(true);
  pausedPropRef.current = paused;

  const safeDuration = Math.max(1, duration);
  const safeDelay = Math.max(0, delay);
  const totalDuration = safeDuration + safeDelay;
  const sweepEnd = safeDelay > 0 ? Math.round((safeDuration / totalDuration) * 1000) / 10 : 100;
  const delayKey = String(sweepEnd);

  React.useLayoutEffect(() => {
    ensureBaseStyles();
    ensureDelayKeyframes(delayKey, sweepEnd);
  }, [delayKey, sweepEnd]);

  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let pageVisible = document.visibilityState !== "hidden";

    const syncPlayState = () => {
      const forced = pausedPropRef.current;
      const autoPause = !(inViewRef.current && pageVisible);
      const shouldPause =
        forced === true ||
        hoverPausedRef.current ||
        (forced !== false && autoPause);
      node.dataset.shimmerPaused = shouldPause ? "true" : "false";
    };

    if (paused === true) {
      syncPlayState();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        inViewRef.current = entries.some((entry) => entry.isIntersecting);
        syncPlayState();
      },
      { threshold: 0.01 },
    );

    const onVisibility = () => {
      pageVisible = document.visibilityState !== "hidden";
      syncPlayState();
    };

    if (paused !== false) {
      io.observe(node);
      document.addEventListener("visibilitychange", onVisibility);
    }

    syncPlayState();

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [paused]);

  const Tag = as as unknown as React.ComponentType<
    React.HTMLAttributes<HTMLElement> & {
      ref?: React.RefCallback<HTMLElement | null>;
      "data-shimmer-paused"?: "true" | "false";
      "data-shimmer-yoyo"?: "true" | "false";
      "data-shimmer-direction"?: "left" | "right";
      "data-shimmer-delay"?: string;
    }
  >;

  // Eased, proportional feather width (50px to 80px) for soft, seamless lighting
  const clampedSpread = Math.min(80, Math.max(16, spread));
  const bandPx = Math.max(48, Math.round((text.length || 1) * (clampedSpread / 4.5)));

  const syncHoverPause = (next: boolean) => {
    hoverPausedRef.current = next;
    const node = nodeRef.current;
    if (!node) return;

    const forced = pausedPropRef.current;
    if (forced === true) {
      node.dataset.shimmerPaused = "true";
      return;
    }
    if (forced === false) {
      node.dataset.shimmerPaused = next ? "true" : "false";
      return;
    }

    if (next) {
      node.dataset.shimmerPaused = "true";
      return;
    }

    const pageVisible = document.visibilityState !== "hidden";
    node.dataset.shimmerPaused =
      inViewRef.current && pageVisible ? "false" : "true";
  };

  return (
    <Tag
      ref={(node) => {
        nodeRef.current = node;
      }}
      data-shimmer-paused={paused === true ? "true" : "false"}
      data-shimmer-yoyo={yoyo ? "true" : "false"}
      data-shimmer-direction={direction}
      data-shimmer-delay={delayKey}
      onMouseEnter={
        pauseOnHover
          ? () => {
              syncHoverPause(true);
            }
          : undefined
      }
      onMouseLeave={
        pauseOnHover
          ? () => {
              syncHoverPause(false);
            }
          : undefined
      }
      className={cn("wensity-text-shimmer", className)}
      style={
        {
          "--wensity-shimmer-base": baseColor,
          "--wensity-shimmer-hi": shimmerColor,
          "--wensity-shimmer-duration": `${totalDuration}s`,
          "--wensity-shimmer-spread": `${bandPx}px`,
          // Layer 1: soft 5-stop feathered highlight. Layer 2: solid base fill.
          backgroundImage: [
            `linear-gradient(${angle}deg, rgba(255,255,255,0) calc(50% - var(--wensity-shimmer-spread)), rgba(255,255,255,0.18) calc(50% - var(--wensity-shimmer-spread) * 0.5), var(--wensity-shimmer-hi) 50%, rgba(255,255,255,0.18) calc(50% + var(--wensity-shimmer-spread) * 0.5), rgba(255,255,255,0) calc(50% + var(--wensity-shimmer-spread)))`,
            `linear-gradient(var(--wensity-shimmer-base), var(--wensity-shimmer-base))`,
          ].join(", "),
        } as React.CSSProperties
      }
    >
      {text}
    </Tag>
  );
}

function ensureBaseStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(BASE_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = BASE_STYLE_ID;
  style.textContent = BASE_STYLES;
  document.head.appendChild(style);
}

function ensureDelayKeyframes(delayKey: string, sweepEnd: number) {
  if (typeof document === "undefined") return;
  if (registeredDelays.has(delayKey)) return;
  registeredDelays.add(delayKey);

  const id = `wensity-text-shimmer-delay-${delayKey.replace(".", "_")}`;
  if (document.getElementById(id)) return;

  const style = document.createElement("style");
  style.id = id;
  style.textContent = `
.wensity-text-shimmer[data-shimmer-delay="${delayKey}"] {
  animation-name: wensity-text-shimmer-fwd-${delayKey.replace(".", "_")};
}
.wensity-text-shimmer[data-shimmer-delay="${delayKey}"][data-shimmer-direction="right"] {
  animation-name: wensity-text-shimmer-rev-${delayKey.replace(".", "_")};
}
@keyframes wensity-text-shimmer-fwd-${delayKey.replace(".", "_")} {
  0% { background-position: 130% center, 0 0; }
  ${sweepEnd}% { background-position: -30% center, 0 0; }
  100% { background-position: -30% center, 0 0; }
}
@keyframes wensity-text-shimmer-rev-${delayKey.replace(".", "_")} {
  0% { background-position: -30% center, 0 0; }
  ${sweepEnd}% { background-position: 130% center, 0 0; }
  100% { background-position: 130% center, 0 0; }
}
`;
  document.head.appendChild(style);
}

const BASE_STYLES = `
.wensity-text-shimmer {
  position: relative;
  display: inline-block;
  overflow: visible;
  line-height: 1.15;
  background-size: 260% 100%, 100% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  background-repeat: no-repeat, no-repeat;
  -webkit-text-fill-color: transparent;
  color: transparent;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  transform: translateZ(0);
  text-wrap: balance;
  --wensity-shimmer-base: #71717a;
  --wensity-shimmer-hi: rgba(255, 255, 255, 0.95);
  animation-duration: var(--wensity-shimmer-duration, 2.8s);
  animation-name: wensity-text-shimmer-fwd;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  animation-play-state: running;
  animation-direction: normal;
}
@keyframes wensity-text-shimmer-fwd {
  0% { background-position: 130% center, 0 0; }
  100% { background-position: -30% center, 0 0; }
}
.wensity-text-shimmer[data-shimmer-yoyo="true"] {
  animation-direction: alternate;
}
.wensity-text-shimmer[data-shimmer-direction="right"][data-shimmer-yoyo="true"] {
  animation-direction: alternate-reverse;
}
.wensity-text-shimmer[data-shimmer-paused="true"] {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .wensity-text-shimmer {
    animation: none !important;
    background-image: none !important;
    -webkit-text-fill-color: var(--wensity-shimmer-hi) !important;
    color: var(--wensity-shimmer-hi) !important;
  }
}
`;
export default TextShimmer;

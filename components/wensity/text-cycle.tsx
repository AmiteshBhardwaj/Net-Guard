"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TextCycleProps {
  /** Words to cycle through. */
  words?: string[];
  /** Hold time per word before advancing, in milliseconds. */
  interval?: number;
  /** Outer layout class (size, weight, tracking, color). */
  className?: string;
  /** Class applied to each character. */
  charClassName?: string;
  /** Pause the cycle. */
  paused?: boolean;
  /** Element to render, such as "h1" or "h2" for a heading. Default: `"span"`. */
  as?: keyof React.JSX.IntrinsicElements;
  /** Custom inline style. */
  style?: React.CSSProperties;
  /** Highlight color for characters in the first word. */
  firstWordColor?: string;
  /** Optional custom styles for the first word characters. */
  firstWordStyle?: React.CSSProperties;
  /** Optional custom class for the first word characters. */
  firstWordClassName?: string;
  /** Color for characters in the subsequent words. */
  restWordColor?: string;
  /** Optional custom styles for subsequent words. */
  restWordStyle?: React.CSSProperties;
  /** Optional custom class for subsequent words. */
  restWordClassName?: string;
}

const DEFAULT_WORDS = ["engineer", "developer", "designer"] as const;

let graphemeSegmenter: Intl.Segmenter | null = null;

function getGraphemeSegmenter(): Intl.Segmenter | null {
  if (typeof Intl === "undefined" || !("Segmenter" in Intl)) return null;
  graphemeSegmenter ??= new Intl.Segmenter("en", { granularity: "grapheme" });
  return graphemeSegmenter;
}

function splitIntoCharacters(value: string): string[] {
  const segmenter = getGraphemeSegmenter();
  if (segmenter) {
    return Array.from(segmenter.segment(value), ({ segment }) => segment);
  }
  return Array.from(value);
}

/**
 * TextCycle
 *
 * Cycles words on an interval with a per-character blur + slide stagger on
 * enter and exit. Reduced-motion safe: shows the current word statically.
 */
export function TextCycle({
  words: wordsProp,
  interval = 2500,
  className,
  charClassName,
  paused = false,
  as = "span",
  style,
  firstWordColor,
  firstWordStyle,
  firstWordClassName,
  restWordColor,
  restWordStyle,
  restWordClassName,
}: TextCycleProps) {
  const Tag = as as unknown as React.ComponentType<
    React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement | null> }
  >;
  const words = React.useMemo(() => {
    const cleaned = (wordsProp ?? [...DEFAULT_WORDS])
      .map((word) => word.trim())
      .filter(Boolean);
    return cleaned.length > 0 ? cleaned : [...DEFAULT_WORDS];
  }, [wordsProp]);

  const [index, setIndex] = React.useState(0);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  React.useEffect(() => {
    if (paused || reduceMotion || words.length <= 1) return;

    const hold = Math.max(400, interval);
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, hold);

    return () => window.clearInterval(timer);
  }, [interval, paused, reduceMotion, words.length]);

  const safeIndex = index % words.length;
  const current = words[safeIndex] ?? "";
  const chars = splitIntoCharacters(current);
  const firstSpaceIndex = chars.indexOf(" ");

  if (reduceMotion) {
    const firstWord = firstSpaceIndex === -1 ? current : current.slice(0, current.indexOf(" "));
    const restWords = firstSpaceIndex === -1 ? "" : current.slice(current.indexOf(" "));

    return (
      <Tag className={cn("inline-flex", className)} style={style} aria-live="polite" aria-atomic="true">
        <span
          className={cn(firstWordClassName)}
          style={{ color: firstWordColor || undefined, ...firstWordStyle }}
        >
          {firstWord}
        </span>
        {restWords ? (
          <span
            className={cn(restWordClassName)}
            style={{ color: restWordColor || undefined, ...restWordStyle }}
          >
            {restWords}
          </span>
        ) : null}
      </Tag>
    );
  }

  return (
    <Tag className={cn("inline-flex items-center justify-center text-center", className)} style={{ position: "relative", ...style }}>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {current}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={safeIndex}
          className="inline-flex items-center justify-center gap-[0.5px] py-[0.12em] leading-none text-center"
          initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -4, filter: "blur(4px)" }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        >
          {chars.map((char, i) => {
            const isFirstWord = firstSpaceIndex === -1 || i < firstSpaceIndex;
            const charStyle: React.CSSProperties = {
              color: isFirstWord
                ? (firstWordColor || undefined)
                : (restWordColor || undefined),
              ...(isFirstWord ? firstWordStyle : restWordStyle),
              ...(char === " " ? { width: "0.3em", display: "inline-block" } : {}),
            };

            return (
              <motion.span
                key={`${safeIndex}-${i}`}
                className={cn(
                  "inline-block",
                  charClassName,
                  isFirstWord ? firstWordClassName : restWordClassName
                )}
                style={charStyle}
                initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -4, filter: "blur(4px)" }}
                transition={{
                  delay: i * 0.02,
                  duration: 0.25,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </Tag>
  );
}

import React, { useState, useEffect, useRef } from "react";

export interface PhotoItem {
  readonly id: string | number;
  readonly src: string;
  readonly alt: string;
  readonly title?: string;
  readonly category?: string;
}

export interface CtaAction {
  readonly text: string;
  readonly href: string;
  readonly onClick?: () => void;
  readonly ariaLabel?: string;
}

export interface HeroSectionWithMorphingPhotoArcProps {
  readonly title?: string;
  readonly description?: string;
  readonly photos?: readonly PhotoItem[];
  readonly primaryCta?: CtaAction;
  readonly secondaryCta?: CtaAction;
  readonly className?: string;
}

export const DEFAULT_PHOTOS: readonly PhotoItem[] = [
  {
    id: "photo-1",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    alt: "High-density server telemetry rack",
    title: "Server Mesh",
    category: "Infrastructure",
  },
  {
    id: "photo-2",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    alt: "Real-time binary telemetry stream",
    title: "Binary Stream",
    category: "Detection",
  },
  {
    id: "photo-3",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    alt: "Macro hardware silicon logic core",
    title: "Silicon Core",
    category: "Hardware",
  },
  {
    id: "photo-4",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    alt: "Abstract wave and signal fluid dynamics",
    title: "Flow Dynamics",
    category: "Telemetry",
  },
  {
    id: "photo-5",
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    alt: "Traffic desk network operations console",
    title: "Traffic Desk",
    category: "Operations",
  },
  {
    id: "photo-6",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    alt: "Perimeter shield crystalline geometry",
    title: "Perimeter Shield",
    category: "Firewall",
  },
  {
    id: "photo-7",
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80",
    alt: "Neon flow packet trace visualization",
    title: "Packet Trace",
    category: "Forensics",
  },
  {
    id: "photo-8",
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    alt: "Anomaly scan detection matrix",
    title: "Anomaly Scan",
    category: "Classifier",
  },
  {
    id: "photo-9",
    src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
    alt: "Quantum blast radius graph topology",
    title: "Blast Radius",
    category: "Topology",
  },
  {
    id: "photo-10",
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    alt: "Optical transit gateway fiber junction",
    title: "Transit Gateway",
    category: "Routing",
  },
];

export function HeroSectionWithMorphingPhotoArc({
  title = "Every alert has a trail.",
  description = "Follow a network flow from first signal to rule match, with the evidence still in view. Interactive spatial telemetry and forensic image stream.",
  photos = DEFAULT_PHOTOS,
  primaryCta = {
    text: "Open traffic desk",
    href: "/dashboard",
    ariaLabel: "Open the traffic desk dashboard",
  },
  secondaryCta = {
    text: "See how a flow moves",
    href: "#workflow",
    ariaLabel: "See how a flow moves through the pipeline",
  },
  className = "",
}: HeroSectionWithMorphingPhotoArcProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const total = photos.length;
  const arcRadius = 520;
  const baseSpread = 0.17;
  // Morph spread based on scroll progress
  const activeSpread = baseSpread * (1 + scrollProgress * 0.45);

  return (
    <section
      ref={containerRef}
      aria-labelledby="hero-morphing-title"
      className={`relative min-h-[920px] w-full overflow-hidden bg-neutral-950 px-4 py-20 text-neutral-50 sm:px-6 lg:px-8 ${className}`}
    >
      {/* Background ambient radial lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(255,100,45,0.14),transparent_70%)]"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-3.5 py-1 text-xs font-semibold tracking-wide text-neutral-400 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#ff642d] shadow-[0_0_8px_#ff642d]" />
          NETWORK SIGNALS &bull; MORPHING ARC
        </div>

        {/* Title */}
        <h1
          id="hero-morphing-title"
          className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {title}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base text-neutral-400 sm:text-lg">
          {description}
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {primaryCta && (
            <a
              href={primaryCta.href}
              onClick={primaryCta.onClick}
              aria-label={primaryCta.ariaLabel ?? primaryCta.text}
              className="inline-flex items-center gap-2 rounded-full bg-[#ff642d] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(255,100,45,0.28)] transition-all hover:bg-[#ff7b49] hover:shadow-[0_10px_28px_rgba(255,100,45,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff642d] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              <span>{primaryCta.text}</span>
              <span aria-hidden="true">&nearr;</span>
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              onClick={secondaryCta.onClick}
              aria-label={secondaryCta.ariaLabel ?? secondaryCta.text}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-6 py-3 text-sm font-semibold text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              <span>{secondaryCta.text}</span>
              <span aria-hidden="true">&darr;</span>
            </a>
          )}
        </div>
      </div>

      {/* Morphing Photo Arc Display */}
      <div
        role="region"
        aria-label="Morphing photo gallery"
        className="relative mx-auto mt-16 h-[480px] w-full max-w-7xl overflow-visible"
        style={{ perspective: "1400px" }}
      >
        <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
          {photos.map((photo, i) => {
            const center = (total - 1) / 2;
            const offset = i - center;
            const angle = offset * activeSpread;
            const x = Math.sin(angle) * arcRadius;
            const y = (1 - Math.cos(angle)) * (arcRadius * 0.42);
            const rotZ = angle * (180 / Math.PI) * 0.75;
            const isHovered = activeIndex === i;

            return (
              <div
                key={photo.id}
                tabIndex={0}
                role="article"
                aria-label={`${photo.title ?? "Photo"} - ${photo.category ?? "Gallery item"}`}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(i)}
                onBlur={() => setActiveIndex(null)}
                className="group absolute h-64 w-44 cursor-pointer overflow-hidden rounded-2xl border border-neutral-800/90 bg-neutral-900 shadow-2xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff642d]"
                style={{
                  transform: `translate3d(${x}px, ${y + (isHovered ? -26 : 0)}px, ${isHovered ? 120 : 0}px) rotateZ(${rotZ}deg) scale(${isHovered ? 1.15 : 1})`,
                  zIndex: isHovered ? 50 : Math.round(50 - Math.abs(offset)),
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  {photo.category && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#ff8252]">
                      {photo.category}
                    </span>
                  )}
                  {photo.title && (
                    <p className="text-xs font-bold text-white truncate">
                      {photo.title}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HeroSectionWithMorphingPhotoArc;

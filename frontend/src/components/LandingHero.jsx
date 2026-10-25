import React, { Suspense, useEffect, useState } from 'react';
import Prism from './Prism.jsx';
import Hyperspeed from './Hyperspeed.jsx';
import TechText from './TechText.jsx';
import AnimatedContent from './AnimatedContent.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import { TextCycle } from '@/components/wensity/text-cycle.tsx';
import InfiniteMenu from './InfiniteMenu.jsx';
import PrismaticBurst from './PrismaticBurst.jsx';
import PillNav from './PillNav.jsx';

const ShieldLogo = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#38bdf8"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      width: '100%',
      height: '100%',
      display: 'block',
      filter: 'drop-shadow(0 0 6px rgba(56, 189, 248, 0.5))'
    }}
  >
    <path d="M12 3.5 20 7v5.4c0 4.5-3.1 7.1-8 8.6-4.9-1.5-8-4.1-8-8.6V7l8-3.5Z" />
    <path d="m8.5 12 2.2 2.2 4.8-5" />
  </svg>
);

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Stream Pipeline', href: '#pipeline' },
  { label: 'Dashboard', href: '/dashboard' }
];

const menuItems = [
  {
    image: '/static/menu/packet-flow.svg',
    link: '/dashboard',
    title: 'Flow Telemetry',
    description: 'Inspect live network packets with microsecond resolution and volumetric counters.'
  },
  {
    image: '/static/menu/anomaly-detect.svg',
    link: '/dashboard',
    title: 'ML Anomaly Engine',
    description: 'Random Forest and isolation classifiers flagging port scans and unusual spikes.'
  },
  {
    image: '/static/menu/signatures.svg',
    link: '/dashboard',
    title: 'Signature Rules',
    description: 'Deterministic rule engine matching CVEs, protocol exploits, and malicious payloads.'
  },
  {
    image: '/static/menu/pcap-replay.svg',
    link: '/dashboard',
    title: 'PCAP Replay Lab',
    description: 'Isolated test bench to inject historical captures and benchmark detectors.'
  },
  {
    image: '/static/menu/threat-radar.svg',
    link: '/dashboard',
    title: 'Threat Radar',
    description: 'Geo-distributed IP intelligence and automated blocklist orchestration.'
  },
  {
    image: '/static/menu/alert-trail.svg',
    link: '/dashboard',
    title: 'Decision Audit',
    description: 'Transparent audit logs explaining heuristic scores and trigger conditions.'
  }
];

export default function LandingHero() {
  const [activeTab, setActiveTab] = useState(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (hash === '#overview' || hash === '#capabilities' || hash === '#pipeline') {
      return hash;
    }
    return '#overview';
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#overview' || hash === '#capabilities' || hash === '#pipeline') {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      window.dispatchEvent(new Event('resize'));
    });
    return () => cancelAnimationFrame(raf);
  }, [activeTab]);

  const handleItemClick = (item, _index, event) => {
    if (item.href?.startsWith('#')) {
      event?.preventDefault?.();
      setActiveTab(item.href);
      try {
        window.history.replaceState(null, '', item.href);
      } catch {
        // ignore
      }
    }
  };

  const getTabStyle = (tabId, extraStyle = {}) => {
    const isActive = activeTab === tabId;
    return {
      position: isActive ? 'relative' : 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      minHeight: '100vh',
      opacity: isActive ? 1 : 0,
      pointerEvents: isActive ? 'auto' : 'none',
      visibility: isActive ? 'visible' : 'hidden',
      transition: 'opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.98) translateY(12px)',
      boxSizing: 'border-box',
      ...extraStyle,
    };
  };

  return (
    <div
      className="netguard-reactbits-landing"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '#07080c',
        color: '#f4f4f5',
        overflowX: 'hidden'
      }}
    >
      {/* Top Floating PillNav */}
      <header
        style={{
          position: 'fixed',
          top: '1.25rem',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 100,
          padding: '0 1rem',
          boxSizing: 'border-box',
          pointerEvents: 'none',
        }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          <PillNav
            logo={ShieldLogo}
            logoAlt="NetGuard"
            logoHref="#overview"
            items={navItems}
            activeHref={activeTab}
            onItemClick={handleItemClick}
            theme="dark"
            layout="split"
            itemStyle="pill"
            hoverEffect="fill"
            indicator="dot"
            highlightColor="#38bdf8"
            highlightTextColor="#07080c"
          />
        </div>
      </header>

      {/* Tab Panels */}
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
        {/* =========================================================================
            SECTION 1: HERO ENTRY (Prism 3D + NetGuard + Wensity TextCycle)
            ========================================================================= */}
        <section
          id="overview"
          className="rb-hero-section"
          aria-label="NetGuard Hero"
          style={getTabStyle('#overview', {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            padding: '6rem 1.5rem',
          })}
        >
          {/* React Bits Prism Optical Background */}
          <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
            <ErrorBoundary fallback={null}>
              <Suspense fallback={null}>
                <Prism
                  animationType="rotate"
                  timeScale={0.5}
                  height={3.5}
                  baseWidth={5.5}
                  scale={3.6}
                  hueShift={0}
                  colorFrequency={1}
                  glow={1}
                />
              </Suspense>
            </ErrorBoundary>
          </div>

          {/* Hero Interactive Overlay */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              maxWidth: '860px',
              margin: '0 auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'translateY(-1.5rem)',
              pointerEvents: 'auto',
            }}
          >
            {/* React Bits TechText Title */}
            <AnimatedContent distance={40} direction="vertical" duration={0.8} delay={0.1}>
              <h1
                aria-label="NetGuard"
                style={{
                  margin: 0,
                  width: '100%',
                  maxWidth: '860px',
                  height: '170px',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <TechText
                  text="NetGuard"
                  fontWeight={600}
                  fontSize={140}
                  color="#ffffff"
                  accentColor="#38bdf8"
                  reveal="letter"
                  dashLength={4}
                  dashGap={2}
                  specks={15}
                  intro="none"
                  introDuration={2}
                  clickKick
                  guides={false}
                />
              </h1>
            </AnimatedContent>

            {/* Wensity TextCycle Subtitle */}
            <AnimatedContent distance={30} direction="vertical" duration={0.8} delay={0.25}>
              <div
                style={{
                  marginTop: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  width: '100%',
                  minHeight: '2.5rem',
                  fontSize: 'clamp(1.2rem, 2.6vw, 1.75rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.4,
                }}
              >
                <ErrorBoundary fallback={<span style={{ color: '#38bdf8' }}>Watch <span style={{ color: '#ffffff' }}>Network traffic</span></span>}>
                  <Suspense fallback={<span style={{ color: '#38bdf8' }}>Watch <span style={{ color: '#ffffff' }}>Network traffic</span></span>}>
                    <TextCycle
                      words={[
                        "Watch Network traffic",
                        "Catch Attacks",
                        "See Alerts"
                      ]}
                      interval={2600}
                      firstWordColor="#38bdf8"
                      firstWordStyle={{
                        textShadow: '0 0 24px rgba(56, 189, 248, 0.45)',
                      }}
                      restWordColor="#ffffff"
                      charClassName="font-semibold"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                      }}
                    />
                  </Suspense>
                </ErrorBoundary>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: INTERACTIVE 3D SPHERE EXPLORER (InfiniteMenu + PrismaticBurst Background)
            ========================================================================= */}
        <section
          id="capabilities"
          className="rb-infinite-menu-section"
          aria-label="NetGuard Interactive Capabilities"
          style={getTabStyle('#capabilities', {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            background: '#07080c',
          })}
        >
          {/* React Bits PrismaticBurst Dynamic Ray Background */}
          <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
            <ErrorBoundary fallback={null}>
              <Suspense fallback={null}>
                <PrismaticBurst
                  colors={['#A855F7', '#7C3AED', '#6366F1']}
                  animationType="rotate3d"
                  intensity={2}
                  speed={0.5}
                  zoom={1}
                  rayWidth={1}
                  twist={0}
                  mouseInteraction
                  clickBurst
                  intro
                />
              </Suspense>
            </ErrorBoundary>
          </div>

          {/* React Bits InfiniteMenu 3D Spherical Showcase */}
          <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 2 }}>
            <ErrorBoundary fallback={null}>
              <Suspense fallback={null}>
                <InfiniteMenu
                  items={menuItems}
                  count={160}
                  tileSize={0.63}
                  roundness={0.2}
                  zoom={1.65}
                  pullBack={1}
                  stretch={0.6}
                  inertia={0.6}
                  autoplay={3}
                  grayscale={true}
                  dim={0.5}
                  intro={true}
                  showInfo={true}
                  theme="dark"
                  accentColor="#38bdf8"
                />
              </Suspense>
            </ErrorBoundary>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: HIGH-VELOCITY HYPERSPEED 3D BACKGROUND
            ========================================================================= */}
        <section
          id="pipeline"
          className="rb-stream-section"
          aria-label="High Velocity Stream Pipeline"
          style={getTabStyle('#pipeline', {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          })}
        >
          {/* React Bits Hyperspeed 3D Highway */}
          <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'auto' }}>
            <ErrorBoundary fallback={null}>
              <Suspense fallback={null}>
                <Hyperspeed
                  curve="winding"
                  curvature={1}
                  speed={1}
                  boost={3}
                  fov={90}
                  boostFov={130}
                  lanes={3}
                  roadWidth={10}
                  medianWidth={2}
                  density={40}
                  trailLength={1}
                  lightSize={1}
                  poles={20}
                  dust={100}
                  glow={0.6}
                  reflections={0.5}
                  roadOpacity={0.15}
                  steer={0.35}
                  tailColors={['#d856bf', '#6750a2', '#c247ac']}
                  headColors={['#03b3c3', '#0e5ea5', '#324555']}
                  poleColors={['#03b3c3']}
                  interactive
                />
              </Suspense>
            </ErrorBoundary>
          </div>
        </section>
      </div>
    </div>
  );
}

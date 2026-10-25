import React, { Suspense } from 'react';
import Prism from './Prism.jsx';
import Hyperspeed from './Hyperspeed.jsx';
import TechText from './TechText.jsx';
import AnimatedContent from './AnimatedContent.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import { TextCycle } from '@/components/wensity/text-cycle.tsx';
import InfiniteMenu from './InfiniteMenu.jsx';
import PrismaticBurst from './PrismaticBurst.jsx';

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
  return (
    <div className="netguard-reactbits-landing" style={{ width: '100%', background: '#07080c', color: '#f4f4f5' }}>
      {/* =========================================================================
          SECTION 1: HERO ENTRY (Prism 3D + NetGuard + Wensity TextCycle)
          ========================================================================= */}
      <section
        className="rb-hero-section"
        aria-label="NetGuard Hero"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          padding: '6rem 1.5rem',
          boxSizing: 'border-box',
        }}
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
            transform: 'translateY(-3.5rem)',
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
          SECTION 2: HIGH-VELOCITY HYPERSPEED 3D BACKGROUND
          ========================================================================= */}
      <section
        id="rb-stream-section"
        className="rb-stream-section"
        aria-label="High Velocity Stream Pipeline"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
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

      {/* =========================================================================
          SECTION 3: INTERACTIVE 3D SPHERE EXPLORER (InfiniteMenu + PrismaticBurst Background)
          ========================================================================= */}
      <section
        id="rb-infinite-menu-section"
        className="rb-infinite-menu-section"
        aria-label="NetGuard Interactive Capabilities"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          height: '750px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          boxSizing: 'border-box',
          background: '#07080c',
        }}
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
    </div>
  );
}


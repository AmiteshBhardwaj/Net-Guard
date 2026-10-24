import React, { useState } from 'react';
import Hyperspeed from './Hyperspeed.jsx';

export default function LandingHero() {
  const [isBoosting, setIsBoosting] = useState(false);

  return (
    <section
      className="hyperspeed-hero-section"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100vh - 160px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
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
          roadOpacity={0.1}
          steer={0.35}
          tailColors={['#d856bf', '#6750a2', '#c247ac']}
          headColors={['#03b3c3', '#0e5ea5', '#324555']}
          poleColors={['#03b3c3']}
          interactive
          onBoostStart={() => setIsBoosting(true)}
          onBoostEnd={() => setIsBoosting(false)}
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '860px',
          margin: '0 auto',
          padding: '3rem 1.5rem',
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'rgba(26, 29, 41, 0.75)',
            border: '1px solid rgba(154, 163, 255, 0.25)',
            backdropFilter: 'blur(10px)',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: isBoosting ? '#03b3c3' : '#9aa3ff',
            marginBottom: '20px',
            transition: 'all 0.3s ease',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: isBoosting ? '#03b3c3' : '#9aa3ff',
              boxShadow: isBoosting ? '0 0 10px #03b3c3' : '0 0 6px #9aa3ff',
            }}
          />
          {isBoosting ? 'WARP SPEED ENGAGED' : 'SPATIAL TELEMETRY · HOLD TO BOOST'}
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.08,
            margin: '0 0 20px',
            color: '#f3f4fa',
          }}
        >
          Every alert <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #03b3c3 0%, #9aa3ff 50%, #d856bf 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            has a trail
          </span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            lineHeight: 1.6,
            color: '#c0c4d4',
            maxWidth: '620px',
            margin: '0 auto 32px',
          }}
        >
          Follow network flows from first signal to detector decision. Explore NetGuard's safe lab, alert explanations, and local PCAP replay.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            pointerEvents: 'auto',
          }}
        >
          <a
            href="/dashboard"
            className="button"
            style={{
              background: '#9aa3ff',
              color: '#11131c',
              fontWeight: 700,
              padding: '14px 28px',
              borderRadius: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(154, 163, 255, 0.3)',
            }}
          >
            Open traffic desk <span style={{ fontSize: '15px' }}>↗</span>
          </a>
          <a
            href="https://github.com/AmiteshBhardwaj/int-detect"
            target="_blank"
            rel="noreferrer"
            className="button"
            style={{
              background: 'rgba(26, 29, 41, 0.85)',
              color: '#f3f4fa',
              border: '1px solid #454a61',
              padding: '14px 24px',
              borderRadius: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              backdropFilter: 'blur(8px)',
            }}
          >
            GitHub Repo <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

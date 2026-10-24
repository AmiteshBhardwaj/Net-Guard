import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import AnimatedContent from './AnimatedContent.jsx';
import Grainient from './Grainient.jsx';
import Particles from './Particles.jsx';
import WebThreads from './WebThreads.jsx';

export default function LandingContentMotion() {
  const [targets, setTargets] = useState([]);
  const [heroHost, setHeroHost] = useState(null);
  const [contactHost, setContactHost] = useState(null);
  const [threadHost, setThreadHost] = useState(null);

  useEffect(() => {
    setTargets(Array.from(document.querySelectorAll('[data-reveal]')));
    setHeroHost(document.querySelector('#hero-grainient'));
    setContactHost(document.querySelector('#contact-particles'));
    setThreadHost(document.querySelector('#workflow-threads'));
  }, []);

  return (
    <>
      {targets.map((target, index) => (
        <AnimatedContent
          key={target.id || `${target.className}-${index}`}
          target={target}
          distance={28}
          duration={0.72}
          ease="power3.out"
          stagger={0.07}
          threshold={0.14}
          once
        />
      ))}
      {heroHost && createPortal(
        <Grainient
          colors={['#11131c', '#1b130f', '#30160f', '#5a2413', '#aa4722']}
          type="radial"
          flow={0.24}
          scale={1.2}
          speed={0.14}
          silk={0.08}
          grainAmount={0.035}
          grainAnimated={false}
          contrast={0.78}
          saturation={0.72}
          interactive
          stir={0.5}
          clickSwirl={false}
          dpr={1.25}
          style={{ width: '100%', height: '100%' }}
        />,
        heroHost,
      )}
      {contactHost && createPortal(
        <Particles
          particleColors={['#ffc9a6', '#f28b5e', '#fff1df']}
          particleCount={72}
          particleSpread={13}
          speed={0.07}
          particleBaseSize={58}
          sizeRandomness={0.65}
          shape="circle"
          glow={0.18}
          twinkle={0.2}
          alphaParticles
          drift="up"
          driftSpeed={0.12}
          moveParticlesOnHover
          hoverEffect="parallax"
          particleHoverFactor={0.3}
          clickBurst={false}
          opacity={0.48}
          pixelRatio={1.25}
          style={{ width: '100%', height: '100%' }}
        />,
        contactHost,
      )}
      {threadHost && createPortal(
        <WebThreads
          colors={['#863316', '#f05a26', '#ffad6d']}
          coreColor="#ffd0aa"
          threadCount={8}
          speed={0.12}
          frequency={4.8}
          spread={0.16}
          taper={0.34}
          glow={0.018}
          falloff={0.7}
          brightness={0.48}
          opacity={0.58}
          depth={0.22}
          pulses={0.06}
          shimmer
          fade={0.34}
          grain={0.02}
          mouseStrength={0.42}
          dpr={1.5}
          style={{ width: '100%', height: '100%' }}
        />,
        threadHost,
      )}
    </>
  );
}

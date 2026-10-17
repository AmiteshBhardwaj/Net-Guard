import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider() {
  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const lenis = new Lenis({
      autoRaf: !gsap,
      anchors: true,
      lerp: 0.095,
      smoothWheel: true,
      respectReducedMotion: true,
    });

    let tickerCallback;
    const onScroll = (state) => {
      window.dispatchEvent(new CustomEvent('netguard:scroll-motion', { detail: state }));
    };
    if (ScrollTrigger) lenis.on('scroll', ScrollTrigger.update);
    lenis.on('scroll', onScroll);

    if (gsap) {
      tickerCallback = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    }

    window.netguardLenis = lenis;
    window.dispatchEvent(new CustomEvent('netguard:lenis-ready', { detail: { lenis } }));

    return () => {
      window.dispatchEvent(new CustomEvent('netguard:lenis-disposing', { detail: { lenis } }));
      if (ScrollTrigger) lenis.off('scroll', ScrollTrigger.update);
      lenis.off('scroll', onScroll);
      if (tickerCallback) {
        gsap.ticker.remove(tickerCallback);
        gsap.ticker.lagSmoothing(500, 33);
      }
      lenis.destroy();
      if (window.netguardLenis === lenis) delete window.netguardLenis;
    };
  }, []);

  return null;
}

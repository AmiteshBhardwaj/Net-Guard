(function () {
  'use strict';

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  let landingLenis = window.netguardLenis || null;
  let lenisScrollAttached = Boolean(landingLenis);
  let storyTimeline = null;
  let heroIconFloat = null;
  let storyFrame = 0;
  let lastScroll = window.scrollY;
  const velocitySurfaces = Array.from(document.querySelectorAll('[data-velocity-surface]'));
  const velocitySetters = gsap && !motionPreference.matches && !window.matchMedia('(pointer: coarse)').matches
    ? velocitySurfaces.map((surface) => gsap.quickTo(surface, 'skewY', { duration: 0.3, ease: 'power2.out' }))
    : [];

  if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  function updateVelocitySkew(velocity) {
    if (!velocitySetters.length) return;
    const skew = clamp((Number(velocity) || 0) * 0.008, -0.28, 0.28);
    velocitySetters.forEach((setSkew) => setSkew(skew));
  }

  window.addEventListener('netguard:lenis-ready', (event) => {
    landingLenis = event.detail?.lenis || window.netguardLenis || null;
    lenisScrollAttached = Boolean(landingLenis);
    scheduleScrollMotion(landingLenis?.scroll);
  }, { once: true });
  window.addEventListener('netguard:scroll-motion', (event) => {
    scheduleScrollMotion(event.detail?.scroll);
    updateVelocitySkew(event.detail?.velocity);
  });
  window.addEventListener('netguard:lenis-disposing', (event) => {
    if (event.detail?.lenis !== landingLenis) return;
    landingLenis = null;
    lenisScrollAttached = false;
  });

  const progressBar = document.querySelector('#page-progress-bar');
  const walkthrough = document.querySelector('.walkthrough');
  const storySteps = Array.from(document.querySelectorAll('.flow-step[data-step]'));
  const storyNodes = [
    document.querySelector('.route-origin'),
    document.querySelector('.route-detect'),
    document.querySelector('.route-review'),
  ];
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function scheduleScrollMotion(scrollValue) {
    if (Number.isFinite(scrollValue)) lastScroll = scrollValue;
    else lastScroll = window.scrollY;
    if (storyFrame) return;
    storyFrame = window.requestAnimationFrame(() => {
      storyFrame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? clamp(lastScroll / scrollable, 0, 1) : 0;
      if (progressBar) progressBar.style.width = (progress * 100).toFixed(2) + '%';

      if (!storyTimeline || !walkthrough || storyTimeline.scrollTrigger) return;
      const rect = walkthrough.getBoundingClientRect();
      const start = window.innerHeight * 0.76;
      const finish = -walkthrough.offsetHeight + window.innerHeight * 0.48;
      const localProgress = clamp((start - rect.top) / (start - finish), 0, 1);
      storyTimeline.progress(localProgress);
    });
  }

  function setStoryStage(progress) {
    const stage = progress < 0.34 ? 0 : progress < 0.72 ? 1 : 2;
    if (!walkthrough) return;
    walkthrough.dataset.storyStage = String(stage);
    storySteps.forEach((step, index) => {
      step.classList.toggle('is-current', index === stage);
      step.classList.toggle('is-passed', index < stage);
    });
    storyNodes.forEach((node, index) => {
      node?.classList.toggle('is-current', index === stage);
      node?.classList.toggle('is-passed', index < stage);
    });
  }

  function onNativeScroll() {
    if (!lenisScrollAttached) scheduleScrollMotion(window.scrollY);
  }
  window.addEventListener('scroll', onNativeScroll, { passive: true });
  if (landingLenis) scheduleScrollMotion(landingLenis.scroll);
  window.addEventListener('resize', () => scheduleScrollMotion(window.scrollY), { passive: true });

  const scenarios = {
    portscan: {
      description: 'One device probes many ports in seconds, checking which services respond. NetGuard groups those attempts by source and time window, then flags the behavior when the 50-port rule is met.',
      pattern: '50+ ports · 5 seconds',
      observed: 'Many destination ports from one source.',
      evaluated: 'Check for 50+ destination ports within five seconds.',
      result: 'Review the port-scan rule match in the alert log.',
      event: 'Port scan detected',
    },
    bruteforce: {
      description: 'Repeated failed sign-ins from one source can signal password guessing. The demo groups the attempts together so the event reads as one behavior instead of a noisy list of separate failures.',
      pattern: 'Repeated failures · one source',
      observed: 'Several login failures share one source.',
      evaluated: 'Group repeated failures by source.',
      result: 'Review the brute-force detection and source details.',
      event: 'Repeated login failures',
    },
    burst: {
      description: 'A sudden rise in requests can overwhelm a service or hide another action. NetGuard compares the short-window count with its threshold, then records the burst as one event that is easier to review.',
      pattern: '60+ requests · 5 seconds',
      observed: 'A high request count appears in a brief interval.',
      evaluated: 'Check for 60+ requests within five seconds.',
      result: 'Review the request-burst event in the alert log.',
      event: 'Request burst detected',
    },
  };

  const scenarioButtons = Array.from(document.querySelectorAll('[data-walkthrough]'));
  const scenarioFields = {
    description: document.querySelector('#scenario-description'),
    pattern: document.querySelector('#scenario-pattern'),
    observed: document.querySelector('#walkthrough-observed'),
    evaluated: document.querySelector('#walkthrough-evaluated'),
    result: document.querySelector('#walkthrough-result'),
  };

  function animateScenario(key) {
    const scenario = scenarios[key];
    if (!scenario) return;
    scenarioButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.walkthrough === key));
    });
    Object.entries(scenarioFields).forEach(([field, element]) => {
      if (element) element.textContent = scenario[field];
    });
    const eventName = document.querySelector('#visual-event-name');
    if (eventName) eventName.textContent = scenario.event;

    if (!gsap || motionPreference.matches) return;
    const summary = document.querySelector('#scenario-summary');
    const steps = document.querySelectorAll('.flow-step');
    gsap.killTweensOf([summary, ...steps]);
    gsap.fromTo(summary,
      { autoAlpha: 0.48, y: 8 },
      { autoAlpha: 1, y: 0, duration: 0.32, ease: 'power2.out', clearProps: 'opacity,transform,visibility' }
    );
    gsap.fromTo(steps,
      { autoAlpha: 0.66, x: 7 },
      { autoAlpha: 1, x: 0, duration: 0.34, stagger: 0.06, ease: 'power2.out', clearProps: 'opacity,transform,visibility' }
    );
    gsap.fromTo(eventName,
      { autoAlpha: 0.35, y: 5 },
      { autoAlpha: 1, y: 0, duration: 0.28, stagger: 0.04, ease: 'power2.out', clearProps: 'opacity,transform,visibility' }
    );
  }

  scenarioButtons.forEach((button) => {
    button.addEventListener('click', () => animateScenario(button.dataset.walkthrough));
  });
  document.querySelectorAll('[data-preview-scenario]').forEach((card) => {
    const previewScenario = () => animateScenario(card.dataset.previewScenario);
    card.addEventListener('pointerenter', previewScenario);
    card.addEventListener('focusin', previewScenario);
  });

  document.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open || !gsap || motionPreference.matches) return;
      const answer = item.querySelector('p');
      if (answer) gsap.fromTo(answer, { autoAlpha: 0, y: -6 }, { autoAlpha: 1, y: 0, duration: 0.26, ease: 'power2.out', clearProps: 'opacity,transform,visibility' });
    });
  });

  if (!gsap || typeof gsap.matchMedia !== 'function') return;

  const media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const introItems = document.querySelectorAll('.hero-copy .intro-item');
    const heroVisual = document.querySelector('.hero-visual-motion');
    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
    intro.from('.title-line-inner', {
      y: 16,
      autoAlpha: 0,
      duration: 0.72,
      stagger: 0.13,
      clearProps: 'transform,opacity,visibility',
    }, 0);
    intro.from(introItems, { autoAlpha: 0, y: 17, duration: 0.62, stagger: 0.09 }, 0.18);
    if (heroVisual) {
      intro.fromTo(heroVisual,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1.2, ease: 'power3.out', clearProps: 'opacity,visibility' },
        0.12
      );
    }
    const desktopMotion = window.matchMedia('(min-width: 761px) and (hover: hover) and (pointer: fine)').matches;
    if (desktopMotion) {
      const orbitIcons = document.querySelectorAll('.hero-orbit-icon');
      if (orbitIcons.length) {
        intro.from(orbitIcons, {
          autoAlpha: 0,
          scale: 0.72,
          x: (_, index) => index % 2 ? 18 : -18,
          y: (_, index) => index % 3 ? -14 : 14,
          duration: 0.68,
          stagger: { each: 0.1, from: 'random' },
          ease: 'back.out(1.65)',
          clearProps: 'opacity,visibility,transform',
        }, 0.42);
      }
      if (orbitIcons.length) {
        heroIconFloat = gsap.to(orbitIcons, {
          y: -9,
          rotation: 2,
          duration: 2.5,
          delay: 1.7,
          stagger: { each: 0.2, from: 'random' },
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }
    }
    const routeFill = document.querySelector('.route-progress span');
    const routeTraveler = document.querySelector('.route-traveler');
    const eventCard = document.querySelector('.visual-event-card');
    storyTimeline = gsap.timeline({
      paused: !ScrollTrigger,
      defaults: { ease: 'none' },
      scrollTrigger: ScrollTrigger ? {
        trigger: walkthrough,
        start: 'top 76%',
        end: 'bottom 52%',
        scrub: 0.55,
        invalidateOnRefresh: true,
      } : undefined,
      onUpdate: () => setStoryStage(storyTimeline.progress()),
    });
    storyTimeline
      .to(routeFill, { scaleX: 1, duration: 1 }, 0)
      .fromTo(routeTraveler,
        { left: '5%', autoAlpha: 0 },
        { left: '95%', autoAlpha: 1, duration: 1, ease: 'none' },
        0
      )
      .fromTo(eventCard,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.18, ease: 'power2.out' },
        0.76
      );
    setStoryStage(0);

    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
    gsap.set(revealItems, { autoAlpha: 0, y: 22 });
    const headingTweens = ScrollTrigger
      ? Array.from(document.querySelectorAll('[data-flow-heading]')).map((heading) => gsap.fromTo(
        heading.querySelectorAll('.heading-line-inner'),
        { y: 16, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'none',
          scrollTrigger: {
            trigger: heading,
            start: 'top 88%',
            end: 'top 48%',
            scrub: 0.55,
            invalidateOnRefresh: true,
          },
        }
      ))
      : [];

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        const visibleItems = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => {
            observer.unobserve(entry.target);
            return entry.target;
          });
        if (!visibleItems.length) return;
        gsap.to(visibleItems, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'opacity,transform,visibility',
        });
        visibleItems.forEach((item) => {
          if (item.matches('.capability-card')) {
            const particles = item.querySelectorAll('.art-burst');
            const floatingObject = item.querySelector('.detect-card, .pcap-file');
            if (particles.length) {
              gsap.fromTo(particles,
                { scale: 0.18, autoAlpha: 0 },
                { scale: 1, autoAlpha: 1, duration: 0.62, delay: 0.12, stagger: 0.11, ease: 'back.out(1.8)', clearProps: 'transform,opacity,visibility' }
              );
            }
            if (floatingObject) {
              gsap.fromTo(floatingObject,
                { y: 22, rotation: -15, scale: 0.92 },
                { y: 0, rotation: item.matches('.card-detect') ? -4 : -9, scale: 1, duration: 0.78, delay: 0.14, ease: 'power3.out', clearProps: 'transform' }
              );
            }
          }
          if (item.matches('.source-row')) {
            const icon = item.querySelector('.source-row-icon');
            if (icon) gsap.fromTo(icon,
              { rotation: -12, scale: 0.78 },
              { rotation: 0, scale: 1, duration: 0.58, delay: 0.12, ease: 'back.out(1.9)', clearProps: 'transform' }
            );
          }
        });
      }, { threshold: 0.13, rootMargin: '0px 0px -6% 0px' });
      revealItems.forEach((item) => observer.observe(item));
    } else {
      gsap.to(revealItems, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.09, clearProps: 'opacity,transform,visibility' });
    }

    return () => {
      observer?.disconnect();
      heroIconFloat?.kill();
      intro.kill();
      headingTweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
      storyTimeline.scrollTrigger?.kill();
      storyTimeline.kill();
      storyTimeline = null;
      gsap.killTweensOf(revealItems);
      gsap.set(revealItems, { clearProps: 'opacity,transform,visibility' });
    };
  });

  scheduleScrollMotion(window.scrollY);
})();

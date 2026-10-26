import React from 'react';
import { createRoot } from 'react-dom/client';
import 'lenis/dist/lenis.css';
import SmoothScrollProvider from './components/SmoothScrollProvider.jsx';
import LandingContentMotion from './components/LandingContentMotion.jsx';
import DashboardTopNav from './components/DashboardTopNav.jsx';
import DashboardSpecularEffects from './components/DashboardSpecularEffects.jsx';
import DashboardOverviewKpis from './components/DashboardOverviewKpis.jsx';

function mount(element, component) {
  if (element) createRoot(element).render(component);
}

function getInitialOverviewStats() {
  const readNumber = id => {
    const element = document.getElementById(id);
    const value = element?.dataset.value ?? element?.textContent ?? 0;
    return Number(String(value).replaceAll(',', '')) || 0;
  };
  const engineName = document.getElementById('engine-kpi-name')?.textContent?.trim() || 'Rules';
  return {
    flowsProcessed: readNumber('kpi-pps'),
    packetsPerSecond: readNumber('kpi-rate'),
    alerts: readNumber('kpi-alerts'),
    blockedSources: readNumber('kpi-blocked'),
    engineName,
    engineStatus: document.getElementById('engine-kpi-confidence')?.textContent?.trim() || 'Rules active',
    engineCaption: document.getElementById('engine-kpi-caption')?.textContent?.trim() || 'Model is not available',
    modelLoaded: engineName.includes('Forest'),
    sourceLabel: document.getElementById('overview-source')?.textContent?.trim() || 'Live capture',
  };
}

mount(
  document.querySelector('#smooth-scroll-root'),
  React.createElement(
    React.Fragment,
    null,
    React.createElement(SmoothScrollProvider),
    React.createElement(LandingContentMotion),
  ),
);

mount(
  document.querySelector('#dashboard-nav-root'),
  React.createElement(DashboardTopNav),
);

mount(
  document.querySelector('#overview-kpi-root'),
  React.createElement(DashboardOverviewKpis, { initialStats: getInitialOverviewStats() }),
);

mount(
  document.querySelector('#dashboard-specular-root'),
  React.createElement(DashboardSpecularEffects),
);

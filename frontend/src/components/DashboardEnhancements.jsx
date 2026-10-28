import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import HoldButton from './HoldButton.jsx';
import WarmTooltip, { WarmTooltipGroup } from './WarmTooltip.jsx';
import JellyRadio from './JellyRadio.jsx';
import CometDial from './CometDial.jsx';
import './DashboardEnhancements.css';

const TIPS = {
  normal: 'Baseline traffic, nothing suspicious',
  portscan: 'Simulates one host probing many ports',
  bruteforce: 'Simulates repeated failed logins',
  dos: 'Simulates a rate-limited traffic flood',
};

// Moves an element that already exists on the page (and keeps its click handlers) inside a React tree.
function NodeHost({ node, 'aria-describedby': describedBy }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    ref.current.appendChild(node);
  }, [node]);
  useEffect(() => {
    if (describedBy) node.setAttribute('aria-describedby', describedBy);
    else node.removeAttribute('aria-describedby');
  }, [node, describedBy]);
  return <span ref={ref} className="node-host" />;
}

function AttackTooltips({ nodes }) {
  return (
    <WarmTooltipGroup>
      {nodes.map(node => (
        <WarmTooltip key={node.dataset.attack} content={TIPS[node.dataset.attack] || 'Safe lab simulation'} side="top">
          <NodeHost node={node} />
        </WarmTooltip>
      ))}
    </WarmTooltipGroup>
  );
}

function BlockHold({ ip }) {
  return (
    <HoldButton
      size="sm"
      radius={4}
      backgroundColor="#1b1c1f"
      fillColor="#ff795c"
      textColor="#f2f0ee"
      fillTextColor="#171311"
      holdTime={900}
      doneLabel="Blocked"
      resetAfter={0}
      onHold={() => window.dispatchEvent(new CustomEvent('netguard:block', { detail: { ip } }))}
    >
      Hold to block
    </HoldButton>
  );
}

function PaceRadio({ select }) {
  const options = Array.from(select.options).map(o => ({ value: o.value, label: o.textContent }));
  return (
    <JellyRadio
      items={options}
      defaultValue={select.value}
      ariaLabel="Simulation pace"
      size="sm"
      radius={6}
      chipColor="#1b1c1f"
      activeColor="#ff795c"
      textColor="#c2bfbd"
      activeTextColor="#171311"
      onChange={value => {
        select.value = value;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }}
    />
  );
}

function DetectionDial() {
  const [snap, setSnap] = useState(() => window.__dashboardMetricSnapshot || null);
  useEffect(() => {
    const onStats = event => setSnap(event.detail);
    window.addEventListener('dashboardstats', onStats);
    return () => window.removeEventListener('dashboardstats', onStats);
  }, []);
  const launched = snap?.attacksLaunched || 0;
  const rate = launched ? snap.detectionRate : 0;
  return (
    <div className="detection-dial__body">
      <CometDial
        value={rate}
        unit="%"
        label="Detection rate"
        accent="#ff795c"
        ink="#f2f0ee"
        size={150}
        thickness={6}
        disabled
      />
      <p className="detection-dial__caption">
        <strong>Detection rate</strong>
        {launched
          ? `${snap.attacksDetected} of ${launched} simulated attacks caught`
          : 'Run a test on Safe test to measure it'}
      </p>
    </div>
  );
}

export default function setupDashboardEnhancements() {
  const alertList = document.querySelector('#alert-list');
  if (!alertList) return;

  // 1. Tooltips on the attack buttons.
  const attackBox = document.querySelector('.attack-buttons');
  if (attackBox) {
    const nodes = Array.from(attackBox.querySelectorAll(':scope > .attack-button[data-attack]'));
    if (nodes.length) createRoot(attackBox).render(<AttackTooltips nodes={nodes} />);
  }

  // 1b. Jelly Radio for the simulation pace. The original select stays hidden and keeps the real value.
  const paceSelect = document.querySelector('#replay-speed');
  if (paceSelect) {
    const host = document.createElement('span');
    host.className = 'pace-radio';
    paceSelect.after(host);
    paceSelect.hidden = true;
    createRoot(host).render(<PaceRadio select={paceSelect} />);
  }

  // 1c. Read-only detection-rate dial on the Overview page.
  const dialHost = document.querySelector('#detection-dial-root');
  if (dialHost) createRoot(dialHost).render(<DetectionDial />);

  // 2. Hold-to-block buttons. The alert list is redrawn often, so watch for new placeholders.
  const roots = new Map();
  const scan = () => {
    for (const [el, root] of roots) {
      if (!el.isConnected) {
        roots.delete(el);
        setTimeout(() => root.unmount(), 0);
      }
    }
    alertList.querySelectorAll('.block-hold:not([data-mounted])').forEach(el => {
      el.dataset.mounted = 'true';
      const root = createRoot(el);
      roots.set(el, root);
      root.render(<BlockHold ip={el.dataset.ip} />);
    });
  };
  new MutationObserver(scan).observe(alertList, { childList: true, subtree: true });
  scan();
}

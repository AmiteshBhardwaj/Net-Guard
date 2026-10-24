import { useEffect, useState } from 'react';
import TiltedCard from './TiltedCard.jsx';

const number = value => Number(value || 0).toLocaleString();
const clock = date => date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' });

const initialSnapshot = {
  flowsProcessed: 0,
  packetsPerSecond: 0,
  alerts: 0,
  blockedSources: 0,
  engineName: 'Rules',
  engineStatus: 'Rules active',
  engineCaption: 'Model is not available',
  sourceLabel: 'Demo traffic',
  modelLoaded: false,
};

function Explanation({ title, description, reading, capturedAt, sourceLabel }) {
  return (
    <div className="kpi-explanation">
      <span className="kpi-explanation__eyebrow">What this means</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="kpi-explanation__reading">
        <span>{capturedAt ? `At flip · ${clock(capturedAt)}` : 'Current reading'}</span>
        <strong>{reading}</strong>
      </div>
      <small>{sourceLabel}</small>
    </div>
  );
}

function MetricCard({ metric, title, value, footer, description, reading, stats, className = '' }) {
  const [snapshot, setSnapshot] = useState(null);

  const onFlip = flipped => {
    if (flipped) {
      setSnapshot({
        reading: reading(stats),
        description: description(stats),
        capturedAt: new Date(),
        sourceLabel: stats.sourceLabel,
      });
    } else {
      setSnapshot(null);
    }
  };

  return (
    <TiltedCard
      className={`kpi-card${className ? ` ${className}` : ''}`}
      captionText={`${title}. Click for details.`}
      showTooltip={false}
      containerWidth="100%"
      containerHeight="100%"
      imageWidth="100%"
      imageHeight="100%"
      rotateAmplitude={6}
      scaleOnHover={1.015}
      radius={14}
      style={{ '--kpi-index': metric }}
      smoothness={0.72}
      glare={0.2}
      glareColor="#ffc0ae"
      shadow={0.12}
      parallax={0.2}
      gyroscope={false}
      intro
      introDelay={metric * 75}
      backContent={(
        <Explanation
          title={title}
          description={snapshot?.description ?? description(stats)}
          reading={snapshot?.reading ?? reading(stats)}
          capturedAt={snapshot?.capturedAt}
          sourceLabel={snapshot?.sourceLabel ?? stats.sourceLabel}
        />
      )}
      onFlip={onFlip}
    >
      <div className="kpi-card__front">
        <span className="kpi-top">{title}</span>
        {value}
        <div className="kpi-foot">
          {footer}
          <span className="kpi-flip-hint" aria-hidden="true">Click for details <span>↗</span></span>
        </div>
      </div>
    </TiltedCard>
  );
}

export default function DashboardOverviewKpis({ initialStats = initialSnapshot }) {
  const [stats, setStats] = useState({ ...initialSnapshot, ...initialStats });

  useEffect(() => {
    const sync = event => setStats({ ...initialSnapshot, ...event.detail });
    window.addEventListener('dashboardstats', sync);
    if (window.__dashboardMetricSnapshot) {
      setStats({ ...initialSnapshot, ...window.__dashboardMetricSnapshot });
    }
    return () => window.removeEventListener('dashboardstats', sync);
  }, []);

  return (
    <section className="kpi-grid" aria-label="Network metrics">
      <MetricCard
        metric={0}
        title="Flows processed"
        stats={stats}
        value={<span className="kpi-value" id="kpi-pps">{number(stats.flowsProcessed)}</span>}
        footer={<><span className="subtle"><b id="kpi-rate">{number(stats.packetsPerSecond)}</b> packets per second</span></>}
        description={() => 'Total flow count for this session. The small value is the current packet rate.'}
        reading={current => `${number(current.flowsProcessed)} flows · ${number(current.packetsPerSecond)} packets/s`}
      />
      <MetricCard
        metric={1}
        title="Alerts"
        stats={stats}
        className="threat-kpi"
        value={<span className="kpi-value" id="kpi-alerts">{number(stats.alerts)}</span>}
        footer={<span className="subtle">Saved by NetGuard</span>}
        description={current => current.alerts > 0
          ? 'Saved alerts. Open Alerts for each source and reason.'
          : 'No alerts have been saved yet.'}
        reading={current => `${number(current.alerts)} ${current.alerts === 1 ? 'alert' : 'alerts'}`}
      />
      <MetricCard
        metric={2}
        title="Blocked sources"
        stats={stats}
        value={<span className="kpi-value" id="kpi-blocked">{number(stats.blockedSources)}</span>}
        footer={<span className="subtle">NetGuard local block list</span>}
        description={current => current.blockedSources > 0
          ? 'Sources on NetGuard’s local list. Your system firewall is unchanged.'
          : 'No sources listed. Your system firewall is unchanged.'}
        reading={current => `${number(current.blockedSources)} ${current.blockedSources === 1 ? 'source' : 'sources'}`}
      />
      <MetricCard
        metric={3}
        title="Detection method"
        stats={stats}
        value={<span className="kpi-value kpi-value--engine" id="engine-kpi-name">{stats.engineName}</span>}
        footer={<><span className="engine-kpi__status" id="engine-kpi-confidence">{stats.engineStatus}</span><span className="subtle" id="engine-kpi-caption">{stats.engineCaption}</span></>}
        description={current => current.modelLoaded
          ? 'Isolation Forest scores unusual traffic. Rules check known patterns too.'
          : 'Rules check known patterns. Anomaly scoring is off.'}
        reading={current => `${current.engineName} · ${current.engineStatus}`}
      />
    </section>
  );
}

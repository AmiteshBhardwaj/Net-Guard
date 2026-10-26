import { useEffect, useState } from 'react';
import GooeyNav from './GooeyNav.jsx';

const items = [
  { label: 'Overview', href: '#overview', id: 'overview' },
  { label: 'Activity', href: '#threat-overview', id: 'threat-overview' },
  { label: 'Alerts', href: '#incident-lab', id: 'incident-lab' },
  { label: 'Model', href: '#isolation-forest', id: 'isolation-forest' },
  { label: 'Sources', href: '#demo-ingress', id: 'demo-ingress' },
  { label: 'Safe test', href: '#attack-lab', id: 'attack-lab' },
  { label: 'Capture', href: '#live-sniffer', id: 'live-sniffer' },
  { label: 'Blast Radius', href: '#blast-radius', id: 'blast-radius' },
  { label: 'Exposure', href: '#exposure', id: 'exposure' },
];

const getCurrentRoute = () => window.location.hash.slice(1) || 'overview';

export default function DashboardTopNav() {
  const [route, setRoute] = useState(getCurrentRoute);
  const activeIndex = Math.max(0, items.findIndex(item => item.id === route));

  useEffect(() => {
    const sync = event => setRoute(event.detail?.id || getCurrentRoute());
    window.addEventListener('hashchange', sync);
    window.addEventListener('dashboardchange', sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('dashboardchange', sync);
    };
  }, []);

  return (
    <div className="dashboard-nav-scroll">
      <GooeyNav
        items={items}
        activeIndex={activeIndex}
        onChange={(_index, item) => setRoute(item.id)}
        ariaLabel="Dashboard sections"
        theme="dark"
        color="#ff795c"
        activeTextColor="#171311"
        colors={['#ff795c', '#d48c71', '#f3c4aa']}
        size="sm"
        frame
        animationTime={540}
        particleCount={16}
        className="dashboard-nav"
        style={{
          '--gn-frame': 'rgba(20, 21, 23, 0.96)',
          '--gn-frame-edge': 'rgba(255, 255, 255, 0.09)',
          '--gn-frame-highlight': 'rgba(255, 255, 255, 0.035)',
          '--gn-frame-shadow': '0 3px 12px rgba(0, 0, 0, 0.14)',
        }}
      />
    </div>
  );
}

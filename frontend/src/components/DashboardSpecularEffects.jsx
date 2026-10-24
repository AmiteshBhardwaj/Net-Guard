import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import SpecularButton from './SpecularButton.jsx';

const BUTTONS = '[data-specular]';

export default function DashboardSpecularEffects() {
  useEffect(() => {
    const roots = [];

    document.querySelectorAll(BUTTONS).forEach(button => {
      const radius = Number.parseFloat(window.getComputedStyle(button).borderTopLeftRadius) || 0;
      const mount = document.createElement('span');
      mount.className = 'specular-button__mount';
      button.appendChild(mount);
      const root = createRoot(mount);
      root.render(
        <SpecularButton
          hostElement={button}
          radius={radius}
          lineColor="#ffc1ae"
          baseColor="#754e43"
          intensity={0.82}
          idleIntensity={0.12}
          shineSize={12}
          shineFade={30}
          thickness={1.1}
          glow={0.72}
          proximity={160}
        />,
      );
      roots.push({ button, mount, root });
    });

    return () => {
      roots.forEach(({ button, mount, root }) => {
        root.unmount();
        mount.remove();
      });
    };
  }, []);

  return null;
}

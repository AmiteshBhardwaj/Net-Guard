import React from 'react';
import { createRoot } from 'react-dom/client';
import 'lenis/dist/lenis.css';
import SmoothScrollProvider from './components/SmoothScrollProvider.jsx';

function mount(element, component) {
  if (element) createRoot(element).render(component);
}

mount(document.querySelector('#smooth-scroll-root'), React.createElement(SmoothScrollProvider));

/**
 * SOC Mission Control 3D WebGL Engine (Three.js + GSAP)
 * Implements interactive dotted landmass globe, live ballistic attack arcs,
 * pulsing threat nodes, raycast inspection, and 3D topological depth visualizer.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.SOC3DEngine = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Strict Design Palette
  const PALETTE = {
    bg: 0x07090b,
    surface: 0x0e1216,
    raised: 0x151b21,
    hairline: 0x1f2830,
    textBone: 0xe9e4d8,
    textMuted: 0x8a9399,
    accent: 0xff5a1f, // Signal Orange
    critical: 0xff2d3d,
    high: 0xff7a1a,
    medium: 0xf2c230,
    low: 0x38d6a0,
    info: 0x5aa9ff,
  };

  // Known Global Telemetry Hubs (Lat, Lon, Label, Region)
  const GEO_HUBS = [
    { id: 'us-east', lat: 39.0438, lon: -77.4874, label: 'US-EAST (ASHBURN)', region: 'NORTH AMERICA', ip: '192.168.1.10' },
    { id: 'us-west', lat: 37.7749, lon: -122.4194, label: 'US-WEST (SF BAY)', region: 'NORTH AMERICA', ip: '10.0.12.44' },
    { id: 'us-central', lat: 41.8781, lon: -87.6298, label: 'US-CENTRAL (CHI)', region: 'NORTH AMERICA', ip: '192.168.56.10' },
    { id: 'eu-west', lat: 51.5074, lon: -0.1278, label: 'EU-WEST (LONDON)', region: 'EUROPE', ip: '172.16.4.101' },
    { id: 'eu-central', lat: 50.1109, lon: 8.6821, label: 'EU-CENTRAL (FRA)', region: 'EUROPE', ip: '172.16.8.20' },
    { id: 'eu-north', lat: 59.3293, lon: 18.0686, label: 'EU-NORTH (STO)', region: 'EUROPE', ip: '10.200.1.5' },
    { id: 'ap-east', lat: 35.6762, lon: 139.6503, label: 'AP-EAST (TOKYO)', region: 'ASIA-PACIFIC', ip: '10.10.30.88' },
    { id: 'ap-south', lat: 1.3521, lon: 103.8198, label: 'AP-SOUTH (SIN)', region: 'ASIA-PACIFIC', ip: '192.168.100.2' },
    { id: 'ap-aus', lat: -33.8688, lon: 151.2093, label: 'AP-SE (SYDNEY)', region: 'OCEANIA', ip: '10.0.40.12' },
    { id: 'sa-east', lat: -23.5505, lon: -46.6333, label: 'SA-EAST (SP)', region: 'SOUTH AMERICA', ip: '172.24.1.8' },
  ];

  function latLonToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -(radius * Math.sin(phi) * Math.cos(theta)),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  }

  // Simplified Landmass Polygon / Boundary Mask for Dotted Earth
  function isLandmass(lat, lon) {
    // North America
    if (lat >= 15 && lat <= 70 && lon >= -165 && lon <= -55) {
      if (lat >= 15 && lat <= 30 && lon <= -105) return false;
      return true;
    }
    // South America
    if (lat >= -55 && lat <= 12 && lon >= -82 && lon <= -34) return true;
    // Europe
    if (lat >= 35 && lat <= 70 && lon >= -10 && lon <= 45) return true;
    // Africa
    if (lat >= -35 && lat <= 36 && lon >= -18 && lon <= 51) return true;
    // Asia
    if (lat >= 5 && lat <= 75 && lon >= 45 && lon <= 150) {
      if (lat <= 25 && lon >= 120) return false; // Sea of Japan/Pacific gap
      return true;
    }
    // Australia
    if (lat >= -44 && lat <= -10 && lon >= 112 && lon <= 154) return true;
    // Japan / UK / Islands
    if (lat >= 30 && lat <= 46 && lon >= 129 && lon <= 146) return true;
    if (lat >= 50 && lat <= 59 && lon >= -8 && lon <= 2) return true;
    return false;
  }

  class GlobeEngine {
    constructor(containerEl, options = {}) {
      this.container = containerEl;
      this.options = Object.assign(
        {
          radius: 120,
          dotCount: 2600,
          onSelectIncident: null,
          prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        },
        options
      );

      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.globeGroup = null;
      this.nodeGroup = null;
      this.arcsGroup = null;
      this.activeArcs = [];
      this.pulseRings = [];
      this.interactiveObjects = [];

      this.raycaster = new THREE.Raycaster();
      this.mouse = new THREE.Vector2(-999, -999);
      this.isDragging = false;
      this.previousMousePosition = { x: 0, y: 0 };
      this.targetRotation = { x: 0.25, y: -0.85 };
      this.currentRotation = { x: 0.25, y: -0.85 };
      this.autoRotateSpeed = 0.0018;
      this.animFrameId = null;

      this.init();
    }

    init() {
      const width = this.container.clientWidth || 800;
      const height = this.container.clientHeight || 500;

      // Scene & Camera
      this.scene = new THREE.Scene();
      this.scene.fog = new THREE.FogExp2(PALETTE.bg, 0.0019);

      this.camera = new THREE.PerspectiveCamera(40, width / height, 1, 2000);
      this.camera.position.set(0, 30, 330);

      // WebGL Renderer
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.renderer.setClearColor(PALETTE.bg, 0);
      this.container.appendChild(this.renderer.domElement);

      // Groups
      this.globeGroup = new THREE.Group();
      this.nodeGroup = new THREE.Group();
      this.arcsGroup = new THREE.Group();

      this.globeGroup.add(this.nodeGroup);
      this.globeGroup.add(this.arcsGroup);
      this.scene.add(this.globeGroup);

      // Build 3D Entities
      this.buildAtmosphere();
      this.buildDottedLandmasses();
      this.buildGeoNodes();

      // Event Bindings
      this.bindEvents();

      // Start Render Loop
      this.animate();
    }

    buildAtmosphere() {
      // Inner deep core sphere
      const coreGeo = new THREE.SphereGeometry(this.options.radius * 0.985, 48, 48);
      const coreMat = new THREE.MeshBasicMaterial({
        color: PALETTE.surface,
        transparent: true,
        opacity: 0.94,
        wireframe: false,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      this.globeGroup.add(coreMesh);

      // Hairline Grid Rings
      const ringMat = new THREE.LineBasicMaterial({
        color: PALETTE.hairline,
        transparent: true,
        opacity: 0.45,
      });

      // Equator and Meridian circles
      const circleGeo = new THREE.BufferGeometry();
      const circlePts = [];
      const segs = 64;
      for (let i = 0; i <= segs; i++) {
        const theta = (i / segs) * Math.PI * 2;
        circlePts.push(Math.cos(theta) * (this.options.radius + 0.5), 0, Math.sin(theta) * (this.options.radius + 0.5));
      }
      circleGeo.setAttribute('position', new THREE.Float32BufferAttribute(circlePts, 3));
      const equator = new THREE.Line(circleGeo, ringMat);
      this.globeGroup.add(equator);

      // Polar Meridian
      const meridian = equator.clone();
      meridian.rotation.x = Math.PI / 2;
      this.globeGroup.add(meridian);
    }

    buildDottedLandmasses() {
      const count = this.options.dotCount;
      const positions = [];
      const colors = [];
      const sizes = [];

      const boneCol = new THREE.Color(PALETTE.textBone);
      const mutedCol = new THREE.Color(PALETTE.hairline);
      const accentCol = new THREE.Color(PALETTE.accent);

      // Fibonacci Spiral on Sphere
      const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2; // y from 1 to -1
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = phi * i;

        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        // Convert (x, y, z) unit vector to Lat, Lon
        const lat = 90 - Math.acos(y) * (180 / Math.PI);
        const lon = ((Math.atan2(z, -x) * (180 / Math.PI) + 360) % 360) - 180;

        const isLand = isLandmass(lat, lon);
        const r = this.options.radius;

        positions.push(x * r, y * r, z * r);

        if (isLand) {
          // Sharp land dots
          if (Math.random() < 0.04) {
            colors.push(accentCol.r, accentCol.g, accentCol.b);
            sizes.push(2.8);
          } else {
            colors.push(boneCol.r * 0.9, boneCol.g * 0.9, boneCol.b * 0.9);
            sizes.push(1.85);
          }
        } else {
          // Faint oceanic reference points
          colors.push(mutedCol.r * 0.5, mutedCol.g * 0.5, mutedCol.b * 0.5);
          sizes.push(0.9);
        }
      }

      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      // Dotted Particle Shader / Material
      const mat = new THREE.PointsMaterial({
        size: 2.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
      });

      const pointCloud = new THREE.Points(geom, mat);
      this.globeGroup.add(pointCloud);
    }

    buildGeoNodes() {
      GEO_HUBS.forEach((hub) => {
        const pos = latLonToVector3(hub.lat, hub.lon, this.options.radius + 1.2);

        // Core marker mesh
        const nodeGeo = new THREE.SphereGeometry(2.0, 12, 12);
        const nodeMat = new THREE.MeshBasicMaterial({
          color: PALETTE.accent,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.copy(pos);
        nodeMesh.userData = { hub, isNode: true };

        this.nodeGroup.add(nodeMesh);
        this.interactiveObjects.push(nodeMesh);

        // Surrounding pulse ring
        const ringGeo = new THREE.RingGeometry(2.5, 3.2, 24);
        const ringMat = new THREE.MeshBasicMaterial({
          color: PALETTE.accent,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.8,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.position.copy(pos);
        ringMesh.lookAt(new THREE.Vector3(0, 0, 0));
        ringMesh.userData = {
          baseScale: 1,
          maxScale: 2.8,
          currentScale: 1,
          opacity: 0.8,
        };

        this.nodeGroup.add(ringMesh);
        this.pulseRings.push(ringMesh);
      });
    }

    // Spawn animated 3D attack trajectory arc
    spawnAttackArc(telemetry = {}) {
      if (this.options.prefersReducedMotion) return;

      const srcHub = telemetry.srcHub || GEO_HUBS[Math.floor(Math.random() * GEO_HUBS.length)];
      let dstHub = telemetry.dstHub || GEO_HUBS[Math.floor(Math.random() * GEO_HUBS.length)];
      while (dstHub === srcHub) {
        dstHub = GEO_HUBS[Math.floor(Math.random() * GEO_HUBS.length)];
      }

      const severity = telemetry.severity || 'HIGH';
      let arcColor = PALETTE.high;
      if (severity === 'CRITICAL') arcColor = PALETTE.critical;
      else if (severity === 'MEDIUM') arcColor = PALETTE.medium;
      else if (severity === 'LOW') arcColor = PALETTE.low;

      const p1 = latLonToVector3(srcHub.lat, srcHub.lon, this.options.radius + 1.5);
      const p2 = latLonToVector3(dstHub.lat, dstHub.lon, this.options.radius + 1.5);

      // Arc elevation midpoint
      const dist = p1.distanceTo(p2);
      const altitude = this.options.radius + Math.max(16, dist * 0.28);
      const mid = p1.clone().add(p2).multiplyScalar(0.5).normalize().multiplyScalar(altitude);

      // Bezier curve
      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const points = curve.getPoints(40);
      const geom = new THREE.BufferGeometry().setFromPoints(points);

      // Arc line
      const mat = new THREE.LineBasicMaterial({
        color: arcColor,
        transparent: true,
        opacity: 0.75,
        linewidth: 1.5,
      });

      const line = new THREE.Line(geom, mat);
      this.arcsGroup.add(line);

      // Traveling pulse head
      const headGeo = new THREE.SphereGeometry(1.6, 8, 8);
      const headMat = new THREE.MeshBasicMaterial({ color: arcColor });
      const head = new THREE.Mesh(headGeo, headMat);
      head.position.copy(p1);
      this.arcsGroup.add(head);

      const arcItem = {
        line,
        head,
        curve,
        progress: 0,
        speed: 0.016 + Math.random() * 0.01,
        telemetry: {
          src: srcHub.ip,
          dst: dstHub.ip,
          srcLabel: srcHub.label,
          dstLabel: dstHub.label,
          severity,
          tactic: telemetry.tactic || 'T1046 Network Service Discovery',
          packet_size: telemetry.packet_size || 860,
        },
      };

      this.activeArcs.push(arcItem);
      this.interactiveObjects.push(line);
      line.userData = { arcItem, isArc: true };

      // Keep maximum 18 concurrent arcs
      if (this.activeArcs.length > 18) {
        const old = this.activeArcs.shift();
        this.disposeArc(old);
      }
    }

    disposeArc(arcItem) {
      if (!arcItem) return;
      this.arcsGroup.remove(arcItem.line);
      this.arcsGroup.remove(arcItem.head);
      const idx = this.interactiveObjects.indexOf(arcItem.line);
      if (idx !== -1) this.interactiveObjects.splice(idx, 1);
      arcItem.line.geometry.dispose();
      arcItem.line.material.dispose();
      arcItem.head.geometry.dispose();
      arcItem.head.material.dispose();
    }

    bindEvents() {
      const el = this.container;

      const onPointerDown = (e) => {
        this.isDragging = true;
        this.previousMousePosition = { x: e.clientX, y: e.clientY };
      };

      const onPointerMove = (e) => {
        const rect = el.getBoundingClientRect();
        this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

        if (this.isDragging) {
          const deltaX = e.clientX - this.previousMousePosition.x;
          const deltaY = e.clientY - this.previousMousePosition.y;

          this.targetRotation.y += deltaX * 0.005;
          this.targetRotation.x = Math.max(-0.9, Math.min(0.9, this.targetRotation.x + deltaY * 0.005));

          this.previousMousePosition = { x: e.clientX, y: e.clientY };
        }
      };

      const onPointerUp = () => {
        this.isDragging = false;
      };

      const onClick = () => {
        this.raycastCheck();
      };

      el.addEventListener('mousedown', onPointerDown);
      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('mouseup', onPointerUp);
      el.addEventListener('click', onClick);

      // Touch events
      el.addEventListener(
        'touchstart',
        (e) => {
          if (e.touches.length === 1) {
            onPointerDown(e.touches[0]);
          }
        },
        { passive: true }
      );
      window.addEventListener(
        'touchmove',
        (e) => {
          if (e.touches.length === 1) {
            onPointerMove(e.touches[0]);
          }
        },
        { passive: true }
      );
      window.addEventListener('touchend', onPointerUp);

      // Resize
      window.addEventListener('resize', () => this.onResize());
    }

    raycastCheck() {
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.interactiveObjects, true);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        if (hit.userData.isNode && this.options.onSelectIncident) {
          this.options.onSelectIncident({
            type: 'NODE',
            data: hit.userData.hub,
          });
        } else if (hit.userData.isArc && this.options.onSelectIncident) {
          this.options.onSelectIncident({
            type: 'ARC',
            data: hit.userData.arcItem.telemetry,
          });
        }
      }
    }

    onResize() {
      if (!this.container || !this.renderer || !this.camera) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;
      if (width === 0 || height === 0) return;

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    }

    animate() {
      this.animFrameId = requestAnimationFrame(() => this.animate());

      // Auto rotation & inertial damping
      if (!this.isDragging && !this.options.prefersReducedMotion) {
        this.targetRotation.y += this.autoRotateSpeed;
      }

      this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * 0.08;
      this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.08;

      this.globeGroup.rotation.x = this.currentRotation.x;
      this.globeGroup.rotation.y = this.currentRotation.y;

      // Animate Arcs
      for (let i = this.activeArcs.length - 1; i >= 0; i--) {
        const arc = this.activeArcs[i];
        arc.progress += arc.speed;

        if (arc.progress >= 1) {
          this.disposeArc(arc);
          this.activeArcs.splice(i, 1);
        } else {
          const pt = arc.curve.getPoint(arc.progress);
          arc.head.position.copy(pt);
          arc.line.material.opacity = Math.sin(arc.progress * Math.PI) * 0.85;
        }
      }

      // Animate Pulse Rings
      this.pulseRings.forEach((ring) => {
        const u = ring.userData;
        u.currentScale += 0.015;
        if (u.currentScale > u.maxScale) {
          u.currentScale = u.baseScale;
          u.opacity = 0.8;
        }
        u.opacity -= 0.007;
        ring.scale.set(u.currentScale, u.currentScale, 1);
        ring.material.opacity = Math.max(0, u.opacity);
      });

      this.renderer.render(this.scene, this.camera);
    }

    destroy() {
      if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
      this.activeArcs.forEach((a) => this.disposeArc(a));
      if (this.renderer && this.renderer.domElement) {
        this.container.removeChild(this.renderer.domElement);
        this.renderer.dispose();
      }
    }
  }

  // 3D Topology Depth Matrix (Secondary Depth Data Element)
  class TopologyMatrixEngine {
    constructor(canvasContainerEl) {
      this.container = canvasContainerEl;
      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.bars = [];
      this.animId = null;
      this.mouse = { x: 0, y: 0 };

      this.init();
    }

    init() {
      const w = this.container.clientWidth || 360;
      const h = this.container.clientHeight || 200;

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
      this.camera.position.set(24, 32, 44);
      this.camera.lookAt(0, 4, 0);

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(w, h);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.container.appendChild(this.renderer.domElement);

      // Grid Floor
      const grid = new THREE.GridHelper(36, 12, PALETTE.accent, PALETTE.hairline);
      grid.position.y = 0;
      this.scene.add(grid);

      // 6x6 Bar Grid
      const barGeo = new THREE.BoxGeometry(1.4, 1, 1.4);
      for (let x = -3; x <= 3; x++) {
        for (let z = -3; z <= 3; z++) {
          const mat = new THREE.MeshBasicMaterial({
            color: PALETTE.low,
            wireframe: false,
          });
          const mesh = new THREE.Mesh(barGeo, mat);
          mesh.position.set(x * 3.8, 0.5, z * 3.8);
          mesh.userData = { targetH: 2 + Math.random() * 8, curH: 1, color: PALETTE.low };
          this.scene.add(mesh);
          this.bars.push(mesh);
        }
      }

      this.container.addEventListener('mousemove', (e) => {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = (e.clientX - rect.left) / rect.width - 0.5;
        this.mouse.y = (e.clientY - rect.top) / rect.height - 0.5;
      });

      window.addEventListener('resize', () => {
        const nw = this.container.clientWidth;
        const nh = this.container.clientHeight;
        if (!nw || !nh) return;
        this.camera.aspect = nw / nh;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(nw, nh);
      });

      this.animate();
    }

    updateTelemetry(anomaliesDetected = 0) {
      this.bars.forEach((bar) => {
        const isSpike = Math.random() < Math.min(0.35, 0.05 + anomaliesDetected * 0.02);
        if (isSpike) {
          bar.userData.targetH = 8 + Math.random() * 14;
          bar.material.color.setHex(PALETTE.critical);
        } else {
          bar.userData.targetH = 1.5 + Math.random() * 4.5;
          bar.material.color.setHex(PALETTE.low);
        }
      });
    }

    animate() {
      this.animId = requestAnimationFrame(() => this.animate());

      // Subtle mouse tilt
      this.camera.position.x += (24 + this.mouse.x * 12 - this.camera.position.x) * 0.05;
      this.camera.position.y += (32 - this.mouse.y * 10 - this.camera.position.y) * 0.05;
      this.camera.lookAt(0, 4, 0);

      this.bars.forEach((bar) => {
        bar.userData.curH += (bar.userData.targetH - bar.userData.curH) * 0.08;
        bar.scale.y = Math.max(0.1, bar.userData.curH);
        bar.position.y = bar.scale.y * 0.5;
      });

      this.renderer.render(this.scene, this.camera);
    }

    destroy() {
      if (this.animId) cancelAnimationFrame(this.animId);
      if (this.renderer && this.renderer.domElement) {
        this.container.removeChild(this.renderer.domElement);
        this.renderer.dispose();
      }
    }
  }

  return {
    GlobeEngine,
    TopologyMatrixEngine,
    GEO_HUBS,
    PALETTE,
  };
});

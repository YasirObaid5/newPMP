import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ProjectAtmosphere = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas.parentElement;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    const points = [];

    camera.position.z = 6;
    for (let i = 0; i < 72; i += 1) {
      const angle = i * 2.399;
      const radius = 0.55 + (i % 12) * 0.16;
      points.push(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.62, (i % 7) * 0.08);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    const field = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ color: 0xc08b23, size: 0.026, transparent: true, opacity: 0.56 }),
    );
    scene.add(field);

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const target = { x: 0, y: 0 };
    const move = (event) => {
      const rect = host.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.22;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.14;
    };

    let frame;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animate = () => {
      field.rotation.z += 0.00045;
      field.rotation.x += (target.y - field.rotation.x) * 0.025;
      field.rotation.y += (target.x - field.rotation.y) * 0.025;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    resize();
    host.addEventListener('pointermove', move);
    window.addEventListener('resize', resize);
    if (reducedMotion) renderer.render(scene, camera);
    else animate();

    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener('pointermove', move);
      window.removeEventListener('resize', resize);
      geometry.dispose();
      field.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="pmp-atmosphere" aria-hidden="true" />;
};

export default ProjectAtmosphere;

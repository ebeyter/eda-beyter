"use client";

import { useEffect, useRef } from "react";

export function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent || !ctx) return;
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener("resize", resize);
    resize();

    const COUNT = 700;
    const points = Array.from({ length: COUNT }, (_, i) => {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        x: Math.cos(theta) * radiusAtY,
        y,
        z: Math.sin(theta) * radiusAtY,
      };
    });

    let angle = 0;
    let raf = 0;

    function frame() {
      if (!ctx) return;
      angle += reduceMotion ? 0 : 0.0018;

      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h;
      const R = Math.min(w, h * 2) * 0.44;

      const glow = ctx.createRadialGradient(
        cx,
        cy - R * 0.25,
        R * 0.05,
        cx,
        cy,
        R * 1.15
      );
      glow.addColorStop(0, "rgba(62, 140, 147, 0.35)");
      glow.addColorStop(1, "rgba(10, 30, 36, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.15, 0, Math.PI * 2);
      ctx.fill();

      const projected = points
        .map((p) => {
          const x = p.x * Math.cos(angle) - p.z * Math.sin(angle);
          const z = p.x * Math.sin(angle) + p.z * Math.cos(angle);
          return { sx: cx + x * R, sy: cy - p.y * R, z };
        })
        .sort((a, b) => a.z - b.z);

      projected.forEach((p) => {
        const depth = (p.z + 1) / 2;
        const size = 0.6 + depth * 1.5;
        const warm = depth > 0.6;
        ctx.beginPath();
        ctx.fillStyle = warm
          ? `rgba(243, 247, 245, ${0.3 + depth * 0.5})`
          : `rgba(62, 140, 147, ${0.25 + depth * 0.45})`;
        ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />
  );
}

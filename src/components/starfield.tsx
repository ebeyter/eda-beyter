"use client";

import { useEffect, useRef } from "react";

const STAR_COLORS = [
  "255, 255, 255",
  "203, 166, 247", // mauve
  "137, 180, 250", // blue
  "245, 194, 231", // pink
  "180, 190, 254", // lavender
];

type Star = { x: number; y: number; r: number; color: string; phase: number; speed: number };
type ShootingStar = { x: number; y: number; vx: number; vy: number; life: number; maxLife: number };

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];

    function initStars() {
      const count = Math.round((w * h) / 4200);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.5 + Math.random() * 1.3,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        phase: Math.random() * Math.PI * 2,
        speed: 0.015 + Math.random() * 0.025,
      }));
    }

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
      initStars();
    }

    window.addEventListener("resize", resize);
    resize();

    if (reduceMotion) {
      ctx.clearRect(0, 0, w, h);
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, 0.55)`;
        ctx.fill();
      });
      return () => window.removeEventListener("resize", resize);
    }

    let t = 0;
    let nextShootAt = 80 + Math.random() * 140;
    let raf = 0;

    function frame() {
      if (!ctx) return;
      t += 1;
      ctx.clearRect(0, 0, w, h);

      stars.forEach((s) => {
        const twinkle = 0.5 + 0.5 * Math.sin(t * s.speed + s.phase);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${0.2 + twinkle * 0.7})`;
        ctx.fill();
      });

      if (t > nextShootAt) {
        const fromLeft = Math.random() > 0.5;
        shootingStars.push({
          x: fromLeft ? -20 : w + 20,
          y: Math.random() * h * 0.45,
          vx: fromLeft ? 6 + Math.random() * 3 : -(6 + Math.random() * 3),
          vy: 2.5 + Math.random() * 1.5,
          life: 0,
          maxLife: 40 + Math.random() * 20,
        });
        nextShootAt = t + 200 + Math.random() * 280;
      }

      shootingStars.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.life += 1;
        const alpha = Math.max(1 - s.life / s.maxLife, 0);
        const tailX = s.x - s.vx * 4.5;
        const tailY = s.y - s.vy * 4.5;
        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        grad.addColorStop(1, "rgba(203, 166, 247, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      });
      shootingStars = shootingStars.filter(
        (s) => s.life < s.maxLife && s.x > -40 && s.x < w + 40
      );

      raf = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />;
}

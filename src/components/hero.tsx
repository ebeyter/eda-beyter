"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HeroOrbit } from "@/components/hero-orbit";

const fadeUp = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

function RippleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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

    const palette = [
      "203, 166, 247", // mauve
      "137, 180, 250", // blue
      "250, 179, 135", // peach
    ];
    const blobs = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 90 + Math.random() * 160,
      speed: 0.05 + Math.random() * 0.08,
      phase: Math.random() * Math.PI * 2,
      color: palette[i % palette.length],
    }));

    let t = 0;
    let raf = 0;
    function frame() {
      if (!ctx) return;
      t += 1;
      ctx.clearRect(0, 0, w, h);
      blobs.forEach((b) => {
        const cx = b.x * w + Math.sin(t * 0.004 * b.speed + b.phase) * 60;
        const cy = b.y * h + Math.cos(t * 0.003 * b.speed + b.phase) * 40;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, b.r);
        grad.addColorStop(0, `rgba(${b.color}, 0.3)`);
        grad.addColorStop(1, `rgba(${b.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, b.r, 0, Math.PI * 2);
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
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full opacity-60"
    />
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-crust via-base to-base px-0 pb-8 pt-16 text-foreground"
    >
      <RippleCanvas />
      <motion.div
        className="relative z-[2] mx-auto max-w-230 px-7 text-center"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-peach"
        >
          Istanbul, Turkey
        </motion.p>
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-3 text-[clamp(3.2rem,10vw,6.4rem)] font-bold text-foreground"
        >
          Eda Beyter
        </motion.h1>
      </motion.div>

      <div className="relative z-[2] mt-2">
        <HeroOrbit />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="-mt-2 text-center font-mono text-[0.8rem] uppercase tracking-[0.1em] text-subtext0"
        >
          Click the icons to get to know me better
        </motion.p>
      </div>
    </section>
  );
}

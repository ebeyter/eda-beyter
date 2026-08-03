"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { contact } from "@/lib/data";

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
      "203, 166, 247", // mauve/purple
      "137, 180, 250", // blue
      "245, 194, 231", // pink
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
      className="snap-page relative flex min-h-dvh flex-col justify-center overflow-hidden bg-gradient-to-b from-crust via-base to-base px-0 text-foreground"
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
          className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-pink"
        >
          Istanbul, Turkey
        </motion.p>
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-3 bg-gradient-to-r from-blue via-pink to-mauve bg-clip-text text-[clamp(3.4rem,11vw,7.2rem)] font-extrabold text-transparent"
        >
          Eda Beyter
        </motion.h1>
        <motion.a
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          href={`mailto:${contact.email}`}
          className="mt-4 inline-block text-[0.95rem] font-semibold text-subtext1 underline decoration-surface2 underline-offset-4 hover:text-mauve"
        >
          {contact.email}
        </motion.a>

        <motion.a
          href="#orbit"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue via-pink to-mauve px-7 py-3.5 text-[1.05rem] font-bold text-crust shadow-[0_10px_30px_rgba(203,166,247,0.35)]"
        >
          To discover more, click here
          <motion.span
            aria-hidden
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}

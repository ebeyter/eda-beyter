"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { roles } from "@/lib/data";

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

    const blobs = Array.from({ length: 6 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 90 + Math.random() * 160,
      speed: 0.05 + Math.random() * 0.08,
      phase: Math.random() * Math.PI * 2,
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
        grad.addColorStop(0, "rgba(62, 140, 147, 0.35)");
        grad.addColorStop(1, "rgba(62, 140, 147, 0)");
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
      className="absolute inset-0 h-full w-full opacity-55"
    />
  );
}

function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex min-h-[1.6em] items-center gap-2.5 text-[clamp(1.05rem,2.4vw,1.4rem)] text-foam-dim">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.26 }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="font-bold text-coral">_</span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-pool to-ink px-0 pb-21 pt-25 text-foam"
    >
      <RippleCanvas />
      <div className="relative z-[2] mx-auto max-w-[920px] px-7">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-gold">
            Istanbul, Turkey
          </p>
          <h1 className="mt-3.5 mb-1.5 text-[clamp(2.6rem,7vw,4.6rem)] font-medium text-white">
            Eda Beyter
          </h1>
          <RoleRotator />
          <p className="mt-5.5 max-w-[54ch] text-[1.02rem] text-foam-dim">
            Right now: running delegate logistics for a Model UN conference, leading a
            35-person entrepreneurship club, and managing her own equity portfolio —
            all at once, all in progress.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        role="img"
        aria-label="Illustrated portrait of Eda Beyter, arms crossed, in a blazer"
        className="absolute right-7.5 top-21 z-[2] hidden h-37 w-37 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,0.14),0_14px_30px_rgba(0,0,0,0.35)] sm:block"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="block h-full w-full">
          <defs>
            <radialGradient id="portraitBg" cx="35%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#1c5560" />
              <stop offset="100%" stopColor="#0a1e24" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="100" fill="url(#portraitBg)" />
          <path
            d="M60 70 C56 40 78 18 100 18 C123 18 145 41 140 72
               C146 95 150 130 146 168 L130 168
               C132 132 128 100 118 84
               C122 108 120 140 118 168 L82 168
               C80 138 78 106 82 84
               C72 100 68 132 70 168 L54 168
               C50 130 54 94 60 70 Z"
            fill="#0e2830"
          />
          <path
            d="M100 96 C78 96 62 106 52 124 C44 138 40 156 40 180 L160 180
               C160 156 156 138 148 124 C138 106 122 96 100 96 Z"
            fill="#132f36"
          />
          <path d="M78 100 L92 130 L84 152 L66 118 Z" fill="#0e2830" />
          <path d="M122 100 L108 130 L116 152 L134 118 Z" fill="#0e2830" />
          <path d="M50 150 L146 118 L150 132 L54 166 Z" fill="#16363e" />
          <path d="M150 150 L54 118 L50 132 L146 166 Z" fill="#123037" />
          <rect x="63" y="150" width="34" height="9" rx="3" transform="rotate(-14 63 150)" fill="#e7efec" opacity="0.9" />
          <rect x="103" y="150" width="34" height="9" rx="3" transform="rotate(14 137 150)" fill="#e7efec" opacity="0.9" />
          <ellipse cx="100" cy="88" rx="32" ry="38" fill="#caa07c" />
          <path d="M68 66 C64 90 66 112 74 128 C66 108 60 84 66 62 Z" fill="#0e2830" />
          <path d="M132 66 C136 90 134 112 126 128 C134 108 140 84 134 62 Z" fill="#0e2830" />
          <path d="M100 22 C80 22 66 38 64 58 C78 46 90 40 100 40 C110 40 122 46 136 58 C134 38 120 22 100 22 Z" fill="#0e2830" />
          <circle cx="128" cy="98" r="3" fill="#d9a441" />
          <path
            d="M100 96 C78 96 62 106 52 124 C44 138 40 156 40 180"
            fill="none"
            stroke="#ff6b45"
            strokeWidth="2"
            opacity="0.45"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}

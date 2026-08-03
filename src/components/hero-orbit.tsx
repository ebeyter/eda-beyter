"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { orbitItems, type OrbitItem } from "@/lib/data";

const DECOR_ARCS = [
  { diameter: "19rem", duration: 22, anim: "dome-ring-spin" },
  { diameter: "29rem", duration: 32, anim: "dome-ring-spin-rev" },
  { diameter: "40rem", duration: 46, anim: "dome-ring-spin" },
];

const RING_RADIUS = {
  1: { radius: "9.5rem", duration: 22, cw: true },
  2: { radius: "15rem", duration: 34, cw: false },
};

function OrbitNode({
  item,
  onSelect,
  delay,
}: {
  item: OrbitItem;
  onSelect: (item: OrbitItem) => void;
  delay: number;
}) {
  const ring = RING_RADIUS[item.ring];
  const spokeStyle = {
    height: ring.radius,
    animation: `${ring.cw ? "orbit-cw" : "orbit-ccw"} ${ring.duration}s linear infinite`,
    "--start-angle": `${item.angle}deg`,
  } as CSSProperties;
  const iconStyle = {
    animation: `${ring.cw ? "orbit-counter-cw" : "orbit-counter-ccw"} ${ring.duration}s linear infinite`,
    "--counter-offset": `${-item.angle}deg`,
  } as CSSProperties;

  return (
    <div className="absolute bottom-0 left-1/2 origin-bottom" style={spokeStyle}>
      <motion.button
        type="button"
        onClick={() => onSelect(item)}
        aria-label={`${item.label} — view details`}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay, ease: "backOut" }}
        className="group absolute left-0 top-0 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-surface0/90 text-2xl shadow-[0_6px_22px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-transform duration-200 hover:scale-115 active:scale-95 sm:h-18 sm:w-18 sm:text-3xl"
        style={{ ...iconStyle, borderColor: item.color }}
      >
        <span
          className="absolute inset-0 -z-10 rounded-full opacity-50 blur-lg transition-opacity duration-200 group-hover:opacity-90"
          style={{ backgroundColor: item.color }}
          aria-hidden
        />
        <span role="img" aria-hidden>
          {item.emoji}
        </span>
      </motion.button>
    </div>
  );
}

function WorldLine() {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden
      className="pointer-events-none absolute -left-6 top-6 h-full w-full opacity-70 sm:-left-10"
    >
      <path
        d="M40 340 C 90 260, 70 160, 150 90 C 210 40, 280 60, 330 30"
        fill="none"
        stroke="var(--color-peach)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="1 9"
        style={{ animation: "drift-line 6s ease-in-out infinite" }}
      />
      <circle cx="330" cy="30" r="3.5" fill="var(--color-peach)" />
    </svg>
  );
}

export function HeroOrbit() {
  const [selected, setSelected] = useState<OrbitItem | null>(null);

  return (
    <div className="relative mx-auto h-80 w-full max-w-165 sm:h-104">
      {DECOR_ARCS.map((arc, i) => (
        <motion.div
          key={arc.diameter}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 + i * 0.1 }}
          className="absolute bottom-0 left-1/2 rounded-full border border-mauve/25"
          style={{ width: arc.diameter, height: arc.diameter, animation: `${arc.anim} ${arc.duration}s linear infinite` }}
        />
      ))}

      <WorldLine />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 z-10 h-68 w-52 -translate-x-1/2 overflow-visible sm:h-84 sm:w-64"
      >
        <div
          className="relative h-full w-full"
          style={{
            maskImage:
              "radial-gradient(ellipse 65% 82% at 50% 36%, black 58%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 82% at 50% 36%, black 58%, transparent 100%)",
          }}
        >
          <Image
            src="/eda-portrait.jpg"
            alt="Eda Beyter"
            fill
            priority
            sizes="256px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-mauve/12 mix-blend-color" />
        </div>
      </motion.div>

      {orbitItems.map((item, i) => (
        <OrbitNode key={item.id} item={item} onSelect={setSelected} delay={0.55 + i * 0.13} />
      ))}

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="border-2 sm:max-w-md" style={{ borderColor: selected?.color }}>
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-xl"
                    style={{ backgroundColor: `color-mix(in srgb, ${selected.color} 22%, transparent)` }}
                  >
                    {selected.emoji}
                  </span>
                  <DialogTitle className="text-lg">{selected.label}</DialogTitle>
                </div>
                <DialogDescription>{selected.dialog.tagline}</DialogDescription>
              </DialogHeader>

              <ul className="list-disc space-y-1.5 pl-4.5 text-sm text-muted-foreground">
                {selected.dialog.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="rounded-lg border border-dashed border-surface2 bg-surface1 px-3.5 py-3 text-center text-xs text-muted-foreground">
                Photos coming soon
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

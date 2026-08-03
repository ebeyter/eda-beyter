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

const RINGS = [
  { ring: 1 as const, sizeClass: "h-56 w-56 sm:h-72 sm:w-72", duration: 22, cw: true },
  { ring: 2 as const, sizeClass: "h-88 w-88 sm:h-112 sm:w-112", duration: 34, cw: false },
];

function OrbitRing({
  sizeClass,
  duration,
  cw,
  items,
  onSelect,
  delayBase,
}: {
  sizeClass: string;
  duration: number;
  cw: boolean;
  items: OrbitItem[];
  onSelect: (item: OrbitItem) => void;
  delayBase: number;
}) {
  const orbitAnim = cw ? "orbit-cw" : "orbit-ccw";
  const counterAnim = cw ? "orbit-counter-cw" : "orbit-counter-ccw";

  return (
    <div
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border border-mauve/25 ${sizeClass}`}
    >
      {items.map((item, i) => (
        <div
          key={item.id}
          className="absolute left-1/2 top-0 flex h-1/2 origin-bottom flex-col items-center justify-start"
          style={
            {
              marginLeft: "-2rem",
              animation: `${orbitAnim} ${duration}s linear infinite`,
              "--start-angle": `${item.angle}deg`,
            } as CSSProperties
          }
        >
          <motion.button
            type="button"
            onClick={() => onSelect(item)}
            aria-label={`${item.label} — view details`}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: delayBase + i * 0.13, ease: "backOut" }}
            className="group relative z-10 -mt-8 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-surface0/90 text-2xl shadow-[0_6px_22px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-transform duration-200 hover:scale-115 active:scale-95"
            style={
              {
                animation: `${counterAnim} ${duration}s linear infinite`,
                "--counter-offset": `${-item.angle}deg`,
                borderColor: item.color,
              } as CSSProperties
            }
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
      ))}
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
    <div className="relative mx-auto h-52 w-full max-w-165 overflow-hidden sm:h-68">
      <WorldLine />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 z-10 h-44 w-34 -translate-x-1/2 translate-y-1/2 sm:h-56 sm:w-44"
      >
        <div
          aria-hidden
          className="absolute -inset-x-6 bottom-0 h-32 animate-pulse rounded-full bg-gradient-to-r from-blue via-pink to-mauve opacity-40 blur-3xl"
        />
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
            sizes="176px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-mauve/10 mix-blend-color" />
        </div>
      </motion.div>

      {RINGS.map((ring, i) => (
        <OrbitRing
          key={ring.ring}
          sizeClass={ring.sizeClass}
          duration={ring.duration}
          cw={ring.cw}
          items={orbitItems.filter((item) => item.ring === ring.ring)}
          onSelect={setSelected}
          delayBase={0.55 + i * 0.26}
        />
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

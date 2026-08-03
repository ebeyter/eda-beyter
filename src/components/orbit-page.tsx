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
import { SectionGlow } from "@/components/section-glow";

const ARCS = {
  inner: { sizeClass: "h-72 w-72 sm:h-88 sm:w-88", duration: 26, cw: true },
  outer: { sizeClass: "h-104 w-104 sm:h-128 sm:w-128", duration: 38, cw: false },
};

function OrbitIcon({ item }: { item: OrbitItem }) {
  if (item.iconType === "image") {
    return (
      <span className="relative block h-8 w-8 overflow-hidden rounded-full bg-white sm:h-9 sm:w-9">
        <Image src={item.icon} alt={item.label} fill sizes="36px" className="object-cover" />
      </span>
    );
  }
  return (
    <span role="img" aria-hidden>
      {item.icon}
    </span>
  );
}

function OrbitArc({
  arc,
  onSelect,
  delayBase,
}: {
  arc: "inner" | "outer";
  onSelect: (item: OrbitItem) => void;
  delayBase: number;
}) {
  const config = ARCS[arc];
  const items = orbitItems.filter((item) => item.arc === arc);
  const orbitAnim = config.cw ? "orbit-cw" : "orbit-ccw";
  const counterAnim = config.cw ? "orbit-counter-cw" : "orbit-counter-ccw";

  return (
    <div
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-mauve/20 ${config.sizeClass}`}
    >
      {items.map((item, i) => (
        <div
          key={item.id}
          className="absolute left-1/2 top-0 h-1/2 origin-bottom"
          style={
            {
              marginLeft: "-1.75rem",
              animation: `${orbitAnim} ${config.duration}s linear infinite`,
              "--start-angle": `${item.angle}deg`,
            } as CSSProperties
          }
        >
          <div
            className="-mt-7 flex flex-col items-center sm:-mt-8"
            style={
              {
                animation: `${counterAnim} ${config.duration}s linear infinite`,
                "--counter-offset": `${-item.angle}deg`,
              } as CSSProperties
            }
          >
            <motion.button
              type="button"
              onClick={() => onSelect(item)}
              aria-label={`${item.label} — view details`}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: delayBase + i * 0.1, ease: "backOut" }}
              className="group relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-surface0/90 text-xl shadow-[0_6px_22px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-transform duration-200 hover:scale-115 active:scale-95 sm:h-16 sm:w-16 sm:text-2xl"
              style={{ borderColor: item.color }}
            >
              <span
                className="absolute inset-0 -z-10 rounded-full opacity-50 blur-lg transition-opacity duration-200 group-hover:opacity-90"
                style={{ backgroundColor: item.color }}
                aria-hidden
              />
              <OrbitIcon item={item} />
            </motion.button>
            <span className="mt-1 whitespace-nowrap text-[0.62rem] font-bold uppercase tracking-wide text-subtext0 sm:text-[0.68rem]">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Portrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      className="absolute left-1/2 top-1/2 z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 sm:h-40 sm:w-40"
    >
      <div
        aria-hidden
        className="absolute -inset-6 animate-pulse rounded-full bg-gradient-to-r from-blue via-pink to-mauve opacity-40 blur-3xl"
      />
      <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Image
          src="/eda-portrait.jpg"
          alt="Eda Beyter"
          fill
          priority
          sizes="160px"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-mauve/10 mix-blend-color" aria-hidden />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 75% at 50% 32%, transparent 45%, var(--crust) 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function OrbitPage() {
  const [selected, setSelected] = useState<OrbitItem | null>(null);

  return (
    <section
      id="orbit"
      className="snap-page relative flex min-h-dvh flex-col justify-center overflow-hidden bg-crust py-16"
    >
      <SectionGlow variant="b" />
      <div className="relative z-10 mx-auto px-7 text-center">
        <h2 className="mx-auto max-w-[16ch] font-serif text-[clamp(1.6rem,4.2vw,2.6rem)] font-extrabold text-mauve">
          Click the icons to get to know me better
        </h2>
      </div>

      <div className="relative z-10 mx-auto mt-6 h-112 w-full max-w-165 sm:h-136">
        <OrbitArc arc="inner" onSelect={setSelected} delayBase={0.5} />
        <OrbitArc arc="outer" onSelect={setSelected} delayBase={0.8} />
        <Portrait />
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="border-2 sm:max-w-md" style={{ borderColor: selected?.color }}>
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full text-xl"
                    style={{ backgroundColor: `color-mix(in srgb, ${selected.color} 22%, transparent)` }}
                  >
                    <OrbitIcon item={selected} />
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
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

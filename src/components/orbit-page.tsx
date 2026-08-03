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
  inner: { sizeClass: "h-44 w-44 sm:h-68 sm:w-68", duration: 26, cw: true },
  outer: { sizeClass: "h-76 w-76 sm:h-116 sm:w-116", duration: 38, cw: false },
};

const ICON_SIZE = "h-10 w-10 sm:h-14 sm:w-14";
const ICON_CENTER = "-mt-5 sm:-mt-7";

function OrbitIcon({ item }: { item: OrbitItem }) {
  if (item.iconType === "image") {
    return (
      <span className="relative block h-5.5 w-5.5 overflow-hidden rounded-full bg-white sm:h-7.5 sm:w-7.5">
        <Image src={item.icon} alt={item.label} fill sizes="30px" className="object-cover" />
      </span>
    );
  }
  return (
    <span role="img" aria-hidden className="text-base sm:text-xl">
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
      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-mauve/20 ${config.sizeClass}`}
    >
      {items.map((item, i) => (
        <div
          key={item.id}
          className="pointer-events-auto absolute left-1/2 top-0 h-1/2 w-0 origin-bottom"
          style={
            {
              animation: `${orbitAnim} ${config.duration}s linear infinite`,
              "--start-angle": `${item.angle}deg`,
            } as CSSProperties
          }
        >
          <div
            className={`${ICON_CENTER} absolute left-0 top-0 flex flex-col items-center`}
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
              className={`${ICON_SIZE} group relative z-10 flex items-center justify-center rounded-full border-2 bg-surface0/90 shadow-[0_6px_22px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-transform duration-200 hover:scale-115 active:scale-95`}
              style={{ borderColor: item.color }}
            >
              <span
                className="absolute inset-0 -z-10 rounded-full opacity-50 blur-lg transition-opacity duration-200 group-hover:opacity-90"
                style={{ backgroundColor: item.color }}
                aria-hidden
              />
              <OrbitIcon item={item} />
            </motion.button>
            <span className="mt-1 whitespace-nowrap text-[0.56rem] font-bold italic uppercase tracking-wide text-subtext0 sm:text-[0.68rem]">
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
      className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-28 w-24 -translate-x-1/2 -translate-y-1/2 sm:h-36 sm:w-32"
    >
      <Image
        src="/eda-portrait-ai.png"
        alt="Eda Beyter"
        fill
        priority
        sizes="144px"
        className="object-contain"
      />
    </motion.div>
  );
}

export function OrbitPage() {
  const [selected, setSelected] = useState<OrbitItem | null>(null);

  return (
    <section
      id="orbit"
      className="snap-page relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-crust px-2 py-8"
    >
      <SectionGlow variant="b" />

      <div className="fixed inset-x-0 top-4 z-40 flex h-11 items-center justify-center px-20 sm:top-6">
        <h2 className="max-w-[34ch] truncate bg-gradient-to-r from-blue via-pink to-mauve bg-clip-text text-center text-[0.8rem] font-serif font-bold text-transparent sm:text-[0.95rem]">
          Click the icons to get to know me better
        </h2>
      </div>

      <div className="relative z-10 mx-auto mt-10 h-84 w-full max-w-165 sm:mt-4 sm:h-148">
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
              </DialogHeader>

              <DialogDescription className="text-[0.95rem] leading-relaxed text-foreground">
                {selected.dialog.body}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

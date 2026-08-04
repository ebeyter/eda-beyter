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

const RINGS = {
  inner: {
    ringClass: "h-[min(46vw,11rem)] w-[min(46vw,11rem)] sm:h-68 sm:w-68",
    radiusClass: "[--radius:min(23vw,5.5rem)] sm:[--radius:8.5rem]",
    duration: 26,
    cw: true,
  },
  outer: {
    ringClass: "h-[min(78vw,19rem)] w-[min(78vw,19rem)] sm:h-116 sm:w-116",
    radiusClass: "[--radius:min(39vw,9.5rem)] sm:[--radius:14.5rem]",
    duration: 38,
    cw: false,
  },
};

const ICON_SIZE = "h-10 w-10 sm:h-14 sm:w-14";

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

function OrbitNode({
  item,
  onSelect,
  delay,
}: {
  item: OrbitItem;
  onSelect: (item: OrbitItem) => void;
  delay: number;
}) {
  const ring = RINGS[item.arc];
  const anim = ring.cw ? "orbit-item-cw" : "orbit-item-ccw";

  return (
    <div
      className={`pointer-events-none absolute left-1/2 top-1/2 h-0 w-0 ${ring.radiusClass}`}
      style={
        {
          animation: `${anim} ${ring.duration}s linear infinite`,
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
        transition={{ duration: 0.5, delay, ease: "backOut" }}
        className={`${ICON_SIZE} group pointer-events-auto absolute left-0 top-0 z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border-2 bg-surface0/90 shadow-[0_6px_22px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-transform duration-200 hover:scale-115 active:scale-95`}
        style={{ borderColor: item.color }}
      >
        <span
          className="absolute inset-0 -z-10 rounded-full opacity-50 blur-lg transition-opacity duration-200 group-hover:opacity-90"
          style={{ backgroundColor: item.color }}
          aria-hidden
        />
        <OrbitIcon item={item} />
      </motion.button>
      <span className="pointer-events-none absolute left-0 top-[1.6rem] -translate-x-1/2 whitespace-nowrap font-serif text-[0.62rem] font-semibold uppercase tracking-[0.05em] text-subtext1 sm:top-[2.2rem] sm:text-[0.76rem]">
        {item.label}
      </span>
    </div>
  );
}

function DecorRing({ ring }: { ring: "inner" | "outer" }) {
  const config = RINGS[ring];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-mauve/20 ${config.ringClass}`}
    />
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

      <div className="absolute inset-x-0 top-4 z-10 flex justify-center px-16 sm:top-6">
        <h2 className="max-w-[20ch] bg-gradient-to-r from-blue via-pink to-mauve bg-clip-text text-center text-[0.8rem] font-serif font-bold text-transparent sm:max-w-[34ch] sm:text-[0.95rem]">
          Click the icons to get to know me better
        </h2>
      </div>

      <div className="relative z-10 mx-auto mt-10 h-84 w-full max-w-165 sm:mt-4 sm:h-148">
        <DecorRing ring="inner" />
        <DecorRing ring="outer" />
        {orbitItems.map((item, i) => (
          <OrbitNode key={item.id} item={item} onSelect={setSelected} delay={0.5 + i * 0.08} />
        ))}
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

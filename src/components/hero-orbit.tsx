"use client";

import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { Globe, Rocket, TrendingUp, Waves } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { orbitItems, type OrbitItem } from "@/lib/data";
import { ParticleSphere } from "@/components/particle-sphere";

const ICONS = {
  waves: Waves,
  "trending-up": TrendingUp,
  globe: Globe,
  rocket: Rocket,
};

const DECOR_ARCS = [
  { diameter: "17rem", duration: 22, anim: "dome-ring-spin" },
  { diameter: "27rem", duration: 32, anim: "dome-ring-spin-rev" },
  { diameter: "37rem", duration: 44, anim: "dome-ring-spin" },
];

const RING_RADIUS = {
  1: { radius: "8.5rem", duration: 22, cw: true },
  2: { radius: "13.5rem", duration: 32, cw: false },
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

  const Icon = ICONS[item.icon];

  return (
    <div className="absolute bottom-0 left-1/2 origin-bottom" style={spokeStyle}>
      <motion.button
        type="button"
        onClick={() => onSelect(item)}
        aria-label={`${item.label} — view details`}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay, ease: "backOut" }}
        className="group absolute left-0 top-0 z-20 flex h-12.5 w-12.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink/80 shadow-[0_4px_18px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-transform duration-200 hover:scale-115 active:scale-95"
        style={iconStyle}
      >
        <span
          className="absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-70"
          style={{ backgroundColor: item.color }}
          aria-hidden
        />
        <Icon size={20} strokeWidth={2} className="relative" style={{ color: item.color }} />
      </motion.button>
    </div>
  );
}

export function HeroOrbit() {
  const [selected, setSelected] = useState<OrbitItem | null>(null);

  return (
    <div className="relative mx-auto h-72 w-full max-w-155 sm:h-88">
      {DECOR_ARCS.map((arc, i) => (
        <motion.div
          key={arc.diameter}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 + i * 0.1 }}
          className="absolute bottom-0 left-1/2 rounded-full border border-white/12"
          style={{ width: arc.diameter, height: arc.diameter, animation: `${arc.anim} ${arc.duration}s linear infinite` }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="absolute inset-0 z-10"
      >
        <ParticleSphere />
      </motion.div>

      {orbitItems.map((item, i) => (
        <OrbitNode key={item.id} item={item} onSelect={setSelected} delay={0.5 + i * 0.12} />
      ))}

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-md">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full"
                    style={{ backgroundColor: `color-mix(in srgb, ${selected.color} 18%, transparent)` }}
                  >
                    {(() => {
                      const Icon = ICONS[selected.icon];
                      return <Icon size={18} style={{ color: selected.color }} />;
                    })()}
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

              <div className="rounded-lg border border-dashed border-rope bg-panel-tint px-3.5 py-3 text-center text-xs text-muted-foreground">
                Photos coming soon
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

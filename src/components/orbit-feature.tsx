"use client";

import { useState, type CSSProperties } from "react";
import { Globe, Rocket, TrendingUp, Waves } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { orbitItems, type OrbitItem } from "@/lib/data";
import { Reveal } from "@/components/reveal";

const ICONS = {
  waves: Waves,
  "trending-up": TrendingUp,
  globe: Globe,
  rocket: Rocket,
};

const DECOR_RINGS = [
  { size: "46%", duration: 22, anim: "ring-spin" },
  { size: "78%", duration: 32, anim: "ring-spin-rev" },
  { size: "100%", duration: 44, anim: "ring-spin" },
];

const RING_RADIUS = {
  1: { radius: "23%", duration: 22, cw: true },
  2: { radius: "39%", duration: 32, cw: false },
};

function OrbitNode({
  item,
  onSelect,
}: {
  item: OrbitItem;
  onSelect: (item: OrbitItem) => void;
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
    <div className="absolute bottom-1/2 left-1/2 origin-bottom" style={spokeStyle}>
      <button
        type="button"
        onClick={() => onSelect(item)}
        aria-label={`${item.label} — view details`}
        className="group absolute left-0 top-0 flex h-13 w-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-[0_4px_14px_var(--shadow-color)] transition-transform duration-200 hover:scale-115 active:scale-95"
        style={iconStyle}
      >
        <span
          className="absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-60"
          style={{ backgroundColor: item.color }}
          aria-hidden
        />
        <Icon size={22} strokeWidth={2} className="relative" style={{ color: item.color }} />
      </button>
    </div>
  );
}

export function OrbitFeature() {
  const [selected, setSelected] = useState<OrbitItem | null>(null);

  return (
    <section id="feature" className="py-16">
      <div className="mx-auto max-w-[920px] px-7">
        <Reveal>
          <div className="mb-7 flex items-baseline gap-4">
            <span className="whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-[0.08em] text-coral">
              Sana özel
            </span>
            <h2 className="text-[clamp(1.5rem,3.4vw,2.1rem)] font-medium">
              Four lanes, one swimmer
            </h2>
          </div>
          <p className="mb-2 max-w-[62ch] text-muted-foreground">
            Four things running in parallel right now — swimming, diplomacy, building, and
            investing — orbiting around the one person doing all of it. Tap a lane for details.
          </p>
        </Reveal>

        <div className="relative mx-auto my-2.5 aspect-square w-full max-w-105">
          {DECOR_RINGS.map((r) => (
            <div
              key={r.size}
              aria-hidden
              className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-rope"
              style={{ width: r.size, height: r.size, animation: `${r.anim} ${r.duration}s linear infinite` }}
            />
          ))}

          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 z-3 flex h-22 w-22 -translate-x-1/2 -translate-y-1/2 animate-[lane-pulse-glow_3.2s_ease-in-out_infinite] items-center justify-center rounded-full font-serif text-xl font-bold text-white"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, var(--color-pool-soft), var(--color-pool) 60%, var(--color-ink) 100%)",
            }}
          >
            EB
          </div>

          {orbitItems.map((item) => (
            <OrbitNode key={item.id} item={item} onSelect={setSelected} />
          ))}
        </div>

        <div className="mt-5.5 flex flex-wrap justify-center gap-x-4.5 gap-y-2.5">
          {orbitItems.map((item) => (
            <span key={item.id} className="flex items-center gap-2 text-[0.86rem] text-muted-foreground">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
              {item.label}
            </span>
          ))}
        </div>
      </div>

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
    </section>
  );
}

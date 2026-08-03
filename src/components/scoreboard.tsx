"use client";

import { stats } from "@/lib/data";
import { RevealGroup, RevealItem } from "@/components/reveal";

export function Scoreboard() {
  return (
    <div className="border-b border-panel-tint bg-card shadow-[0_1px_0_var(--shadow-color)]">
      <RevealGroup>
        <div className="mx-auto grid max-w-[920px] grid-cols-3 gap-y-5.5 px-7 py-7.5 sm:grid-cols-6">
          {stats.map((stat, i) => (
            <RevealItem
              key={stat.label}
              className={`px-1.5 py-2 text-center ${
                i !== stats.length - 1 ? "border-r border-panel-tint" : ""
              } ${i === 2 ? "border-r-0 sm:border-r" : ""}`}
            >
              <div className="font-mono text-[clamp(1.3rem,2.6vw,1.9rem)] font-bold tabular-nums text-pool">
                {stat.value}
              </div>
              <div className="mt-1 text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground">
                {stat.label}
              </div>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </div>
  );
}

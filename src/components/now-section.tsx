import { nowCards } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const ACCENTS = [
  { border: "border-blue", text: "text-blue", dot: "bg-blue" },
  { border: "border-pink", text: "text-pink", dot: "bg-pink" },
] as const;

function LiveDot({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`mr-1.5 inline-block h-2 w-2 shrink-0 animate-[lane-pulse_1.8s_ease-in-out_infinite] rounded-full motion-reduce:animate-none ${className}`}
    />
  );
}

export function NowSection() {
  return (
    <section id="now" className="snap-page flex min-h-dvh flex-col justify-center bg-base py-20">
      <div className="mx-auto max-w-230 px-7">
        <Reveal>
          <div className="mb-3 flex flex-wrap items-baseline gap-4">
            <span className="whitespace-nowrap font-mono text-[0.8rem] font-bold uppercase tracking-[0.08em] text-pink">
              Right now
            </span>
            <h2 className="bg-gradient-to-r from-blue to-mauve bg-clip-text text-[clamp(2.2rem,5.5vw,3.6rem)] font-extrabold text-transparent">
              What I&apos;ve been doing
            </h2>
          </div>
          <p className="mb-8 max-w-[62ch] text-muted-foreground">
            Two things running in parallel this season — both very much in progress.
          </p>
        </Reveal>

        <RevealGroup stagger={0.12}>
          <div className="flex flex-col gap-5">
            {nowCards.map((card, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              return (
                <RevealItem
                  key={card.org}
                  className={`rounded-2xl border-l-4 ${accent.border} bg-card p-7 shadow-[0_2px_10px_var(--shadow-color)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_var(--shadow-color)]`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="flex items-center text-[1.3rem] font-bold">
                      <LiveDot className={accent.dot} />
                      {card.org}
                    </h3>
                    <span className="whitespace-nowrap font-mono text-[0.78rem] text-muted-foreground">
                      {card.when}
                    </span>
                  </div>
                  <div className={`mb-2.5 mt-0.5 text-[0.92rem] font-semibold ${accent.text}`}>
                    {card.role}
                  </div>
                  <ul className="m-0 list-disc space-y-1.5 pl-4.5 text-muted-foreground">
                    {card.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </RevealItem>
              );
            })}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}

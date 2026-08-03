import { nowCards } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const ACCENTS = [
  { border: "border-mauve", text: "text-mauve", dot: "bg-mauve" },
  { border: "border-peach", text: "text-peach", dot: "bg-peach" },
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
    <section id="now" className="py-20">
      <div className="mx-auto max-w-230 px-7">
        <Reveal>
          <div className="mb-2 flex items-baseline gap-4">
            <span className="whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-[0.08em] text-peach">
              Right now
            </span>
            <h2 className="text-[clamp(1.7rem,3.8vw,2.4rem)] font-semibold">
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
                    <h3 className="flex items-center text-[1.15rem] font-semibold">
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
                  {card.teaser && (
                    <div className="mt-4.5 flex items-center gap-3.5 rounded-2xl border-[1.5px] border-dashed border-surface2 bg-surface0 px-5.5 py-4.5">
                      <LiveDot className={accent.dot} />
                      <p className="m-0 text-[0.94rem] text-muted-foreground">
                        <strong className="text-foreground">{card.teaser.strong}</strong>
                        {" — " + card.teaser.rest}
                      </p>
                    </div>
                  )}
                </RevealItem>
              );
            })}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}

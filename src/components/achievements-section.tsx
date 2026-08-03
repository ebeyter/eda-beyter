import { achievements } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionGlow } from "@/components/section-glow";

const CARD_ACCENTS = [
  "border-blue/40 hover:border-blue",
  "border-pink/40 hover:border-pink",
  "border-mauve/40 hover:border-mauve",
];

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="snap-page relative flex min-h-dvh flex-col justify-center overflow-hidden bg-mantle py-16"
    >
      <SectionGlow variant="a" />
      <div className="relative z-10 mx-auto max-w-230 px-7">
        <Reveal>
          <div className="mb-4 flex flex-wrap items-baseline gap-4">
            <span className="whitespace-nowrap font-mono text-[0.8rem] font-bold uppercase tracking-[0.08em] text-pink">
              A few wins
            </span>
            <h2 className="bg-gradient-to-r from-blue via-pink to-mauve bg-clip-text text-[clamp(1.9rem,4.8vw,3rem)] font-extrabold text-transparent">
              Stuff I&apos;m proud of
            </h2>
          </div>
        </Reveal>

        <RevealGroup stagger={0.06}>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <RevealItem
                key={a.what}
                className={`rounded-2xl border-2 bg-card p-5 shadow-[0_2px_10px_var(--shadow-color)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_var(--shadow-color)] ${CARD_ACCENTS[i % CARD_ACCENTS.length]}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-2xl" aria-hidden>
                    {a.emoji}
                  </span>
                  <span className="whitespace-nowrap font-mono text-[0.7rem] text-muted-foreground">
                    {a.when}
                  </span>
                </div>
                <h3 className="mt-2.5 text-[1rem] font-bold">{a.what}</h3>
                <p className="mt-1 text-[0.85rem] text-muted-foreground">{a.blurb}</p>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}

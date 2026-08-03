import { achievements } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const CARD_ACCENTS = [
  "border-blue/40 hover:border-blue",
  "border-pink/40 hover:border-pink",
  "border-mauve/40 hover:border-mauve",
];

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="snap-page flex min-h-dvh flex-col justify-center bg-mantle py-20"
    >
      <div className="mx-auto max-w-230 px-7">
        <Reveal>
          <div className="mb-3 flex flex-wrap items-baseline gap-4">
            <span className="whitespace-nowrap font-mono text-[0.8rem] font-bold uppercase tracking-[0.08em] text-pink">
              A few wins
            </span>
            <h2 className="bg-gradient-to-r from-mauve to-blue bg-clip-text text-[clamp(2.2rem,5.5vw,3.6rem)] font-extrabold text-transparent">
              Stuff I&apos;m proud of
            </h2>
          </div>
        </Reveal>

        <RevealGroup stagger={0.08}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {achievements.map((a, i) => (
              <RevealItem
                key={a.what}
                className={`rounded-2xl border-2 bg-card p-6 shadow-[0_2px_10px_var(--shadow-color)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_var(--shadow-color)] ${CARD_ACCENTS[i % CARD_ACCENTS.length]}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-3xl" aria-hidden>
                    {a.emoji}
                  </span>
                  <span className="whitespace-nowrap font-mono text-[0.72rem] text-muted-foreground">
                    {a.when}
                  </span>
                </div>
                <h3 className="mt-3 text-[1.1rem] font-bold">{a.what}</h3>
                <p className="mt-1.5 text-[0.92rem] text-muted-foreground">{a.blurb}</p>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}

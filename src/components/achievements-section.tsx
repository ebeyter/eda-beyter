import { achievements } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-16">
      <div className="mx-auto max-w-[920px] px-7">
        <Reveal>
          <div className="mb-7 flex items-baseline gap-4">
            <span className="whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-[0.08em] text-coral">
              Before now
            </span>
            <h2 className="text-[clamp(1.5rem,3.4vw,2.1rem)] font-medium">
              Achievements
            </h2>
          </div>
          <p className="mb-7.5 max-w-[62ch] text-muted-foreground">
            The record so far — finished, on paper, not currently in progress.
          </p>
        </Reveal>

        <RevealGroup stagger={0.04}>
          <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
            {achievements.map((item) => (
              <RevealItem key={item.what}>
                <li className="flex justify-between gap-4 border-b border-dashed border-panel-tint py-3.5 text-[0.92rem] last:border-b-0">
                  <span>
                    {item.what}
                    <span className="mt-0.5 block text-[0.82rem] text-muted-foreground">
                      {item.sub}
                    </span>
                  </span>
                  <span className="shrink-0 whitespace-nowrap font-mono text-[0.76rem] text-muted-foreground">
                    {item.when}
                  </span>
                </li>
              </RevealItem>
            ))}
          </ul>
        </RevealGroup>
      </div>
    </section>
  );
}

import { about } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-230 px-7">
        <Reveal>
          <span className="whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-[0.08em] text-peach">
            About
          </span>
        </Reveal>

        <RevealGroup stagger={0.1}>
          <div className="mt-3 mb-8 max-w-[24ch] text-[clamp(1.8rem,4.4vw,2.8rem)] font-medium leading-tight">
            <RevealItem>
              <span className="text-mauve">{about.greeting}</span>
            </RevealItem>
            {about.lines.map((line) => (
              <RevealItem key={line}>{line}</RevealItem>
            ))}
          </div>
        </RevealGroup>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-2.5">
            {about.interests.map((chip, i) => {
              const colors = ["border-sky/40 text-sky", "border-green/40 text-green", "border-peach/40 text-peach", "border-mauve/40 text-mauve", "border-pink/40 text-pink", "border-yellow/40 text-yellow"];
              return (
                <span
                  key={chip}
                  className={`rounded-full border bg-surface0 px-4 py-2 text-[0.88rem] font-medium ${colors[i % colors.length]}`}
                >
                  {chip}
                </span>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {about.languages.map((lang) => (
              <span
                key={lang.code}
                className="rounded-full border border-surface1 bg-surface0 px-4 py-2 text-[0.88rem]"
              >
                <b className="text-mauve">{lang.code}</b>{" "}
                <span className="text-muted-foreground">{lang.level}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

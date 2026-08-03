import { about } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const CHIP_COLORS = [
  "border-blue/40 text-blue",
  "border-pink/40 text-pink",
  "border-mauve/40 text-mauve",
];

export function AboutSection() {
  return (
    <section id="about" className="snap-page flex min-h-dvh flex-col justify-center bg-mantle py-20">
      <div className="mx-auto max-w-230 px-7">
        <Reveal>
          <span className="whitespace-nowrap font-mono text-[0.8rem] font-bold uppercase tracking-[0.08em] text-pink">
            About
          </span>
        </Reveal>

        <RevealGroup stagger={0.1}>
          <div className="mt-4 mb-9 max-w-[22ch] text-[clamp(2.6rem,7vw,4.6rem)] font-extrabold leading-[1.05]">
            <RevealItem>
              <span className="bg-gradient-to-r from-blue via-pink to-mauve bg-clip-text text-transparent">
                {about.greeting}
              </span>
            </RevealItem>
            {about.lines.map((line) => (
              <RevealItem key={line}>{line}</RevealItem>
            ))}
          </div>
        </RevealGroup>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-2.5">
            {about.interests.map((chip, i) => (
              <span
                key={chip}
                className={`rounded-full border bg-surface0 px-4 py-2 text-[0.95rem] font-bold ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {about.languages.map((lang) => (
              <span
                key={lang.code}
                className="rounded-full border border-surface1 bg-surface0 px-4 py-2 text-[0.95rem]"
              >
                <b className="text-blue">{lang.code}</b>{" "}
                <span className="text-muted-foreground">{lang.level}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

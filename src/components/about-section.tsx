import { about } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionGlow } from "@/components/section-glow";

const CHIP_COLORS = [
  "border-blue/40 text-blue",
  "border-pink/40 text-pink",
  "border-mauve/40 text-mauve",
];

export function AboutSection() {
  return (
    <section id="about" className="snap-page relative flex min-h-dvh flex-col justify-center bg-mantle py-16">
      <SectionGlow variant="a" />
      <div className="relative z-10 mx-auto max-w-230 px-7">
        <Reveal>
          <span className="whitespace-nowrap font-mono text-[0.8rem] font-bold uppercase tracking-[0.08em] text-pink">
            About
          </span>
        </Reveal>

        <RevealGroup stagger={0.08}>
          <div className="mt-3 mb-7 max-w-[22ch] text-[clamp(2.1rem,5.6vw,3.8rem)] font-extrabold leading-[1.08]">
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
                className={`rounded-full border bg-surface0 px-4 py-2 text-[0.9rem] font-bold ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-2.5">
            {about.languages.map((lang) => (
              <span
                key={lang.code}
                className="rounded-full border border-surface1 bg-surface0 px-4 py-2 text-[0.9rem]"
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

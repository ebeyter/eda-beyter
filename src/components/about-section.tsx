import { about } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-[920px] px-7">
        <Reveal>
          <div className="mb-7 flex items-baseline gap-4">
            <span className="whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-[0.08em] text-coral">
              About
            </span>
            <h2 className="text-[clamp(1.5rem,3.4vw,2.1rem)] font-medium">
              Hakkımda
            </h2>
          </div>

          <p className="mb-7.5 max-w-[62ch] whitespace-pre-line text-muted-foreground">
            {about.lede}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {about.interests.map((chip) => (
              <span
                key={chip}
                className="rounded-[10px] border border-panel-tint bg-card px-3.5 py-2 text-[0.88rem] shadow-[0_1px_2px_var(--shadow-color)]"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {about.languages.map((lang) => (
              <span
                key={lang.code}
                className="rounded-[10px] border border-panel-tint bg-card px-3.5 py-2 text-[0.88rem] shadow-[0_1px_2px_var(--shadow-color)]"
              >
                <b className="text-pool">{lang.code}</b> {lang.level}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

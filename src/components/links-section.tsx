import { links } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7 M7 7v.01 M12 17v-4.5a2 2 0 0 1 4 0V17 M12 12.5v4.5" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

const ICONS = { LinkedIn: LinkedInIcon, GitHub: GitHubIcon };

export function LinksSection() {
  return (
    <section id="links" className="py-16">
      <div className="mx-auto max-w-[920px] px-7">
        <Reveal>
          <div className="mb-7 flex items-baseline gap-4">
            <span className="whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-[0.08em] text-coral">
              Bağlantılar
            </span>
            <h2 className="text-[clamp(1.5rem,3.4vw,2.1rem)] font-medium">
              Find her elsewhere
            </h2>
          </div>
        </Reveal>

        <RevealGroup>
          <div className="flex flex-wrap gap-3.5">
            {links.map((link) => {
              const Icon = ICONS[link.name as keyof typeof ICONS];
              return (
                <RevealItem key={link.name} className="flex-1 basis-50">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-3 rounded-[14px] bg-card px-5 py-4.5 shadow-[0_1px_2px_var(--shadow-color)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_24px_var(--shadow-color)]"
                  >
                    <span className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full bg-panel-tint text-pool [&_svg]:h-4.5 [&_svg]:w-4.5">
                      <Icon />
                    </span>
                    <span>
                      <span className="block text-[0.96rem] font-bold">{link.name}</span>
                      <span className="text-[0.8rem] text-muted-foreground">{link.handle}</span>
                    </span>
                  </a>
                </RevealItem>
              );
            })}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}

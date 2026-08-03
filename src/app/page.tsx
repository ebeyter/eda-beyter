import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { NowSection } from "@/components/now-section";
import { AchievementsSection } from "@/components/achievements-section";
import { LinksSection } from "@/components/links-section";
import { ContactFooter } from "@/components/contact-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <div className="snap-pages h-dvh overflow-y-auto overflow-x-hidden">
        <Hero />
        <AboutSection />
        <NowSection />
        <AchievementsSection />
        <div className="snap-page flex min-h-dvh flex-col justify-center">
          <LinksSection />
          <ContactFooter />
        </div>
      </div>
    </>
  );
}

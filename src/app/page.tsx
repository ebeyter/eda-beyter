import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Scoreboard } from "@/components/scoreboard";
import { Rope } from "@/components/rope";
import { AboutSection } from "@/components/about-section";
import { NowSection } from "@/components/now-section";
import { AchievementsSection } from "@/components/achievements-section";
import { OrbitFeature } from "@/components/orbit-feature";
import { LinksSection } from "@/components/links-section";
import { ContactFooter } from "@/components/contact-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <Hero />
      <Scoreboard />
      <Rope />
      <AboutSection />
      <Rope />
      <NowSection />
      <Rope />
      <AchievementsSection />
      <Rope />
      <OrbitFeature />
      <Rope />
      <LinksSection />
      <Rope />
      <ContactFooter />
    </>
  );
}

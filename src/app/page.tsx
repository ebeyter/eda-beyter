import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { OrbitPage } from "@/components/orbit-page";
import { AchievementsSection } from "@/components/achievements-section";
import { ContactFooter } from "@/components/contact-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <div className="snap-pages h-dvh overflow-y-auto overflow-x-hidden">
        <Hero />
        <OrbitPage />
        <AchievementsSection />
        <ContactFooter />
      </div>
    </>
  );
}

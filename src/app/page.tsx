import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Rope } from "@/components/rope";
import { AboutSection } from "@/components/about-section";
import { NowSection } from "@/components/now-section";
import { LinksSection } from "@/components/links-section";
import { ContactFooter } from "@/components/contact-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <Hero />
      <Rope />
      <AboutSection />
      <Rope />
      <NowSection />
      <Rope />
      <LinksSection />
      <Rope />
      <ContactFooter />
    </>
  );
}

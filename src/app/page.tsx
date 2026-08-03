import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { OrbitPage } from "@/components/orbit-page";
import { ContactFooter } from "@/components/contact-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <div className="snap-pages h-dvh overflow-y-auto overflow-x-hidden">
        <Hero />
        <OrbitPage />
        <ContactFooter />
      </div>
    </>
  );
}

import { HeroSection } from "@/components/marketing/sections/hero-section";
import { FeaturesSection } from "@/components/marketing/sections/features-section";
import { SiteHeader } from "@/components/marketing/layout/site-header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  );
}

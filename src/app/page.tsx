import { HeroSection } from "@/components/marketing/sections/hero-section";
import { FeaturesSection } from "@/components/marketing/sections/features-section";
import { HowItWorksSection } from "@/components/marketing/sections/how-it-works-section";
import { PricingSection } from "@/components/marketing/sections/pricing-section";
import { TestimonialsSection } from "@/components/marketing/sections/testimonials-section";
import { SiteHeader } from "@/components/marketing/layout/site-header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
    </div>
  );
}

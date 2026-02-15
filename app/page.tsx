import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ProductsSection } from "@/components/home/products-section";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { QualitySection } from "@/components/home/quality-section";
import { MarketsSection } from "@/components/home/markets-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { CtaSection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <CapabilitiesSection />
        <QualitySection />
        <MarketsSection />
        <WhyChooseSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

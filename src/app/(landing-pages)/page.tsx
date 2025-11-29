import Footer from "@/components/UIs/landing/footer";
import TradingArea from "@/components/UIs/landing/trading-area";
import { HeroSection } from "@/components/UIs/landing/hero-section";
import { LifeEasySection } from "@/components/UIs/landing/life-easy-section";
import { FeatureSection } from "@/components/UIs/landing/feature-section";
import { HowItWorks } from "@/components/UIs/landing/how-it-works";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LifeEasySection />
      <FeatureSection />
      <HowItWorks />
      <TradingArea />
      <Footer />
    </>
  );
}

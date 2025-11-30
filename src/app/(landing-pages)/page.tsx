import Footer from "@/components/UIs/landing/footer";
import TradingArea from "@/components/UIs/landing/trading-area";
import { HeroSection } from "@/components/UIs/landing/hero-section";
import { LifeEasySection } from "@/components/UIs/landing/life-easy-section";
import { FeatureSection } from "@/components/UIs/landing/feature-section";
import { HowItWorks } from "@/components/UIs/landing/how-it-works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Giftcard Trading Platform",
  description:
    "Welcome to our Giftcard Trading Platform, where you can easily buy, sell, and trade giftcards with confidence. Explore our user-friendly interface, secure transactions, and a wide variety of giftcards to choose from. Join our community of satisfied users and start trading today!",
};
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

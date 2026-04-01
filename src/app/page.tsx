"use client";

import { useI18n } from "@/components/I18nProvider";
import { Navbar, Footer } from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import ResearchSection from "@/components/sections/ResearchSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  const { dict } = useI18n();

  return (
    <>
      <Navbar />
      <HeroSection dict={dict} />
      <TechnologiesSection dict={dict} />
      <ResearchSection dict={dict} />
      <CTASection dict={dict} />
      <Footer />
    </>
  );
}
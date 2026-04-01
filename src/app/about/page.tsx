"use client";

import { useI18n } from "@/components/I18nProvider";
import { Navbar, Footer } from "@/components/layout";
import { AboutHero, AboutTimeline, AboutTeam, AboutEthics, AboutCTA } from "@/components/sections";

export default function AboutPage() {
  const { dict } = useI18n();

  return (
    <>
      <Navbar />
      <AboutHero dict={dict} />
      <AboutTimeline dict={dict} />
      <AboutTeam dict={dict} />
      <AboutEthics dict={dict} />
      <AboutCTA dict={dict} />
      <Footer />
    </>
  );
}
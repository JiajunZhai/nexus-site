"use client";

import { useI18n } from "@/components/I18nProvider";
import { Navbar, Footer } from "@/components/layout";
import { CareersHero, CareersResearch, CareersCulture, CareersPositions } from "@/components/sections";

export default function CareersPage() {
  const { dict } = useI18n();

  return (
    <>
      <Navbar />
      <CareersHero dict={dict} />
      <CareersResearch dict={dict} />
      <CareersCulture dict={dict} />
      <CareersPositions dict={dict} />
      <Footer />
    </>
  );
}
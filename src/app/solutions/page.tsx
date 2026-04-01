"use client";

import { useI18n } from "@/components/I18nProvider";
import { Navbar, Footer } from "@/components/layout";
import { SolutionsHero, SolutionsProducts, SolutionsCTA } from "@/components/sections";

export default function SolutionsPage() {
  const { dict } = useI18n();

  return (
    <>
      <Navbar />
      <SolutionsHero dict={dict} />
      <SolutionsProducts dict={dict} />
      <SolutionsCTA dict={dict} />
      <Footer />
    </>
  );
}
"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface SolutionsHeroProps {
  dict: Dictionary;
}

export function SolutionsHero({ dict }: SolutionsHeroProps) {
  return (
    <header className="mb-32 pt-32 px-8 max-w-screen-2xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <span className="text-secondary font-label tracking-[0.2em] text-xs uppercase">
          {dict.solutions.hero.badge}
        </span>
        <h1 className="text-7xl md:text-8xl font-headline font-bold text-on-surface tracking-tighter leading-[0.9] max-w-4xl">
          {dict.solutions.hero.title} <br />
          <span className="text-primary italic">{dict.solutions.hero.titleGradient}</span>
        </h1>
        <p className="mt-8 text-on-surface-variant max-w-xl text-lg leading-relaxed">
          {dict.solutions.hero.description}
        </p>
      </motion.div>
    </header>
  );
}
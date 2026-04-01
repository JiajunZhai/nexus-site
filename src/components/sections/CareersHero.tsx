"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface CareersHeroProps {
  dict: Dictionary;
}

export function CareersHero({ dict }: CareersHeroProps) {
  return (
    <section className="px-8 max-w-screen-2xl mx-auto mb-32 pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-12 gap-12 items-end"
      >
        <div className="lg:col-span-8">
          <span className="text-secondary font-label text-sm uppercase tracking-[0.2em] mb-4 block">
            {dict.careers.hero.badge}
          </span>
          <h1 className="text-7xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9] text-on-background mb-8">
            {dict.careers.hero.title} <span className="text-gradient">{dict.careers.hero.titleGradient}</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed font-body">
            {dict.careers.hero.description}
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-4 flex justify-end"
        >
          <div className="w-full aspect-square glass-panel p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] group-hover:bg-primary/20 transition-all duration-500" />
            <div className="text-5xl font-headline font-light text-primary">01</div>
            <div className="font-headline text-2xl leading-tight">
              Join the next evolution of cognitive systems.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
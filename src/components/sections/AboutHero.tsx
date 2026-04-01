"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface AboutHeroProps {
  dict: Dictionary;
}

const aboutImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDpOeZBPzzBPnMRJSYzzJjtjI-Bnp4plvZMw06yEuE9QqwWgtaSm_XvxFF9wTGgREP3brNlZ0jXdbMCkBxE4u6Y4I437iYsf_4q0oDeaO5ifgwMMgSOMllTepPoHHrqPqrJyHGgIwSiBglriDLYYh1azNnt8rltEw1MA2VqdeNAcxvMK4sSY7stdMTI4GyeEPL-ljwBlc1L7MbxBSWu3x2-HzX_0jOxyK_o_CAtEqOGEOXqftlquVO6tSt3oBueMzmpMEukw50qNns";

export function AboutHero({ dict }: AboutHeroProps) {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 mb-40 pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-12 gap-12 items-start"
      >
        <div className="lg:col-span-8">
          <span className="inline-block text-secondary font-label text-sm uppercase tracking-[0.3em] mb-6">
            {dict.about.hero.badge}
          </span>
          <h1 className="text-7xl md:text-8xl font-headline font-bold text-on-surface leading-[0.9] tracking-tighter mb-12">
            {dict.about.hero.title} <span className="text-gradient">{dict.about.hero.titleGradient}</span>{" "}
            {dict.about.hero.suffix}
          </h1>
          <div className="max-w-2xl space-y-8 text-lg text-on-surface-variant leading-relaxed">
            <p>{dict.about.hero.description1}</p>
            <p>{dict.about.hero.description2}</p>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-4 mt-20 lg:mt-0 flex justify-end"
        >
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl border border-outline-variant/10">
            <img 
              alt="Abstract visualization" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" 
              src={aboutImage}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
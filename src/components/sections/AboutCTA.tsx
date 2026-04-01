"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface AboutCTAProps {
  dict: Dictionary;
}

export function AboutCTA({ dict }: AboutCTAProps) {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 py-20 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-headline font-bold text-on-surface mb-12"
      >
        {dict.about.cta.title}
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row gap-6 justify-center"
      >
        <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold font-headline hover:shadow-[0_0_30px_rgba(143,245,255,0.3)] transition-all">
          {dict.about.cta.primary}
        </button>
        <button className="border border-outline-variant/30 text-on-surface px-10 py-4 rounded-full font-bold font-headline hover:bg-surface-bright/10 transition-all">
          {dict.about.cta.secondary}
        </button>
      </motion.div>
    </section>
  );
}
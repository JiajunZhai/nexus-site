"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface SolutionsCTAProps {
  dict: Dictionary;
}

export function SolutionsCTA({ dict }: SolutionsCTAProps) {
  return (
    <section className="mt-48 text-center max-w-2xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-headline font-bold mb-6"
      >
        {dict.solutions.cta.title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-on-surface-variant mb-12"
      >
        {dict.solutions.cta.description}
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row justify-center gap-6"
      >
        <button className="bg-surface-bright/20 border border-outline-variant/30 px-8 py-3 font-headline font-bold tracking-tight hover:bg-surface-bright/40 transition-all">
          {dict.solutions.cta.primary}
        </button>
        <button className="text-primary font-headline font-bold flex items-center justify-center gap-2 px-8 py-3">
          {dict.solutions.cta.secondary} <span className="material-symbols-outlined">north_east</span>
        </button>
      </motion.div>
    </section>
  );
}
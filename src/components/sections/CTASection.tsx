"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface CTASectionProps {
  dict: Dictionary;
}

export default function CTASection({ dict }: CTASectionProps) {
  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-surface-container-high rounded-[2rem] p-16 md:p-24 text-center border border-outline-variant/10"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter mb-8 text-on-background">
              {dict.cta.title}
            </h2>
            <p className="text-on-surface-variant text-xl mb-12 font-body leading-relaxed">
              {dict.cta.description}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="synthetic-glow text-on-primary-container px-12 py-5 rounded-full font-bold text-lg font-headline transition-all w-full md:w-auto"
              >
                {dict.cta.primary}
              </motion.button>
              <motion.button 
                whileHover={{ x: 5 }}
                className="text-on-surface font-bold text-lg font-headline hover:text-primary transition-all flex items-center gap-2"
              >
                {dict.cta.secondary} 
                <span className="material-symbols-outlined">arrow_forward</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
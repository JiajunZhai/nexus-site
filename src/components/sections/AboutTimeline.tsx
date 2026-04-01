"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface AboutTimelineProps {
  dict: Dictionary;
}

const years = ["2020", "2022", "2023", "2024"] as const;

export function AboutTimeline({ dict }: AboutTimelineProps) {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 mb-40">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
      >
        <h2 className="text-5xl font-headline font-bold tracking-tight text-on-surface">
          {dict.about.timeline.title}
        </h2>
        <div className="text-on-surface-variant max-w-md font-body text-sm">
          {dict.about.timeline.description}
        </div>
      </motion.div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant/10">
          {years.map((year, i) => (
            <motion.div 
              key={year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 bg-background hover:bg-surface-container-low transition-colors duration-500 group"
            >
              <div className="text-primary font-headline text-4xl font-bold mb-12">{year}</div>
              <div className="mb-4 text-xs font-label uppercase tracking-widest text-secondary">
                {dict.about.timeline.milestones[year as keyof typeof dict.about.timeline.milestones].label}
              </div>
              <h3 className="text-xl font-headline font-semibold text-on-surface mb-4">
                {dict.about.timeline.milestones[year as keyof typeof dict.about.timeline.milestones].title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {dict.about.timeline.milestones[year as keyof typeof dict.about.timeline.milestones].description}
              </p>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-tighter">
                {dict.about.timeline.viewWhitepaper} <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
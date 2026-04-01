"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface CareersPositionsProps {
  dict: Dictionary;
}

const jobs = ["aiResearch", "neuralArchitect", "backendEngineer"] as const;

export function CareersPositions({ dict }: CareersPositionsProps) {
  const { positions } = dict.careers;

  return (
    <section className="px-8 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-16"
      >
        <h2 className="text-5xl font-headline font-bold tracking-tight">{positions.title}</h2>
        <div className="flex gap-2">
          <div className="h-1 w-12 bg-primary" />
          <div className="h-1 w-4 bg-outline-variant" />
        </div>
      </motion.div>

      <div className="space-y-1">
        {jobs.map((jobKey, i) => (
          <motion.div 
            key={jobKey}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group border-b border-outline-variant/20 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:px-6 transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-label text-primary-dim tracking-widest px-2 py-0.5 border border-primary-dim/30">
                  {positions.jobs[jobKey].tag}
                </span>
                <span className="text-xs font-label text-on-surface-variant">{positions.jobs[jobKey].location}</span>
              </div>
              <h3 className="text-3xl font-headline font-bold group-hover:text-primary transition-colors">
                {positions.jobs[jobKey].title}
              </h3>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-on-surface-variant text-sm font-body hidden md:block">
                {positions.jobs[jobKey].experience}
              </span>
              <button className="flex items-center gap-2 text-primary font-headline font-bold hover:gap-4 transition-all">
                {positions.cta} <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 glass-panel p-12 text-center"
      >
        <h4 className="text-2xl font-headline font-bold mb-4">{positions.general.title}</h4>
        <p className="text-on-surface-variant mb-8 font-body">{positions.general.description}</p>
        <button className="text-primary-dim border border-primary-dim/30 px-10 py-4 font-headline font-bold hover:bg-primary-dim hover:text-on-primary-fixed transition-all">
          {positions.general.button}
        </button>
      </motion.div>
    </section>
  );
}
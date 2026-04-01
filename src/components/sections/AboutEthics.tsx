"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface AboutEthicsProps {
  dict: Dictionary;
}

const pillars = [
  { key: "transparency", icon: "verified_user" },
  { key: "dataSovereignty", icon: "shield" },
  { key: "neutrality", icon: "balance" },
] as const;

export function AboutEthics({ dict }: AboutEthicsProps) {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 mb-40 mt-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-2xl p-12 md:p-20 relative overflow-hidden border border-outline-variant/5"
      >
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-8">
              {dict.about.ethics.title}
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>{dict.about.ethics.description}</p>
              <ul className="space-y-4">
                {pillars.map((pillar, i) => (
                  <li key={pillar.key} className="flex gap-4">
                    <span className="text-primary material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {pillar.icon}
                    </span>
                    <div>
                      <strong className="text-on-surface block font-headline">
                        {dict.about.ethics.pillars[pillar.key as keyof typeof dict.about.ethics.pillars].title}
                      </strong>
                      {dict.about.ethics.pillars[pillar.key as keyof typeof dict.about.ethics.pillars].description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 synthetic-glow opacity-10 blur-3xl animate-pulse" />
            <div className="bg-surface-container-highest/50 border border-outline-variant/20 rounded-xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <span className="material-symbols-outlined text-8xl text-primary-dim mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                <div className="text-sm font-label uppercase tracking-widest text-secondary">{dict.about.ethics.verifiedSystem}</div>
                <div className="text-xs text-outline mt-2 font-mono">{dict.about.ethics.systemStatus}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
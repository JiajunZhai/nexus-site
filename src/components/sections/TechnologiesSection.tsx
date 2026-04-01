"use client";

import { motion, type Variants } from "framer-motion";

type Dictionary = Record<string, any>;

interface TechnologiesSectionProps {
  dict: Dictionary;
}

const technologiesImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDfBHYPWUWAE9jJXjooENpTu3InI_J7xGVJsEwxXDD_IpdsyNIr-81l16ZDUVvPjKQ0wGri5LEfWO9Yggpwj7NYHnMLoavcZNChFCLlauIb_mDniN9FFScXq3K3NKXxHpiV6eM2CqIDtmvRDFxDpSbZiOPgTnYkEy1pn8QpNe1dlwO01ph-l94e_C_vY0RLqehWDTmNpGd4VhXtGTBeBzWJ249miC6X1-CaRSey8MCQcpE_RlaSz9fva2HmAPErpi0pebEp91Glm9Q";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export default function TechnologiesSection({ dict }: TechnologiesSectionProps) {
  return (
    <section className="py-32 bg-surface-dim relative">
      <div className="max-w-screen-2xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-3xl">
            <span className="text-secondary font-label text-sm font-bold tracking-widest uppercase mb-4 block">
              {dict.technologies.badge}
            </span>
            <h2 className="text-5xl font-headline font-bold tracking-tighter text-on-background leading-none">
              {dict.technologies.title}
            </h2>
          </div>
          <p className="text-on-surface-variant font-body text-lg max-w-md">
            {dict.technologies.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-xl flex flex-col justify-end p-12"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" 
              alt="Artificial synapses firing"
              src={technologiesImage}
            />
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">neurology</span>
              <h3 className="text-3xl font-headline font-bold mb-4">
                {dict.technologies.synapticEngine.title}
              </h3>
              <p className="text-on-surface-variant max-w-md leading-relaxed">
                {dict.technologies.synapticEngine.description}
              </p>
            </div>
          </motion.div>

          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="md:col-span-4 group relative overflow-hidden bg-surface-container-highest rounded-xl p-12 border border-outline-variant/10"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <span className="material-symbols-outlined text-5xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>dynamic_form</span>
              <div>
                <h3 className="text-2xl font-headline font-bold mb-3">
                  {dict.technologies.adaptiveLearning.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {dict.technologies.adaptiveLearning.description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="md:col-span-4 group relative overflow-hidden bg-surface-container rounded-xl p-12 border border-outline-variant/10"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <span className="material-symbols-outlined text-5xl text-tertiary">shield_with_heart</span>
              <div>
                <h3 className="text-2xl font-headline font-bold mb-3">
                  {dict.technologies.ethicsLogic.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {dict.technologies.ethicsLogic.description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="md:col-span-8 group relative overflow-hidden bg-surface-container-high rounded-xl flex items-center p-12"
          >
            <div className="grid grid-cols-2 gap-12 w-full">
              <div>
                <h3 className="text-4xl font-headline font-bold text-primary mb-2">99.9%</h3>
                <p className="text-sm font-label tracking-widest text-on-surface-variant uppercase">{dict.technologies.stats.inferenceAccuracy}</p>
              </div>
              <div>
                <h3 className="text-4xl font-headline font-bold text-secondary mb-2">1.2ms</h3>
                <p className="text-sm font-label tracking-widest text-on-surface-variant uppercase">{dict.technologies.stats.globalLatency}</p>
              </div>
              <div>
                <h3 className="text-4xl font-headline font-bold text-tertiary mb-2">ExaScale</h3>
                <p className="text-sm font-label tracking-widest text-on-surface-variant uppercase">{dict.technologies.stats.processingPower}</p>
              </div>
              <div>
                <h3 className="text-4xl font-headline font-bold text-white mb-2">Zero-Day</h3>
                <p className="text-sm font-label tracking-widest text-on-surface-variant uppercase">{dict.technologies.stats.deployment}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
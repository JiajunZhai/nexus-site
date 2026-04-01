"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface CareersResearchProps {
  dict: Dictionary;
}

const researchImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBRhD1azcy21QSbS262P6VN1EnBIrZYIS-CFEB_MYuSth7EnY_xPM-KdJT58UWifOCobuEtJJbjfngD1OvbbddSyfzbxqX-yvYn5rBUTtWvvQA3EWe7OYgl1E1nWHWPXggm9YepoY-oIR9dZnMzvB7keJYgUaOkIp0yPlOQw0jC2Nt6SgBofIcMHBdLTErDuB0PjgwDP1BbV61wWcOAlU258xtQBV9FDY0p_-CWWjitHavrKV4iITyLvAiUKaoHEjKR4eN8UmV2Oc4";

export function CareersResearch({ dict }: CareersResearchProps) {
  const { research } = dict.careers;

  return (
    <section className="px-8 max-w-screen-2xl mx-auto mb-40">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid lg:grid-cols-2 gap-24 items-center"
      >
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden">
            <img 
              alt="Laboratory" 
              className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700" 
              src={researchImage}
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -bottom-12 -right-12 w-64 h-64 glass-panel p-6 flex flex-col justify-end hidden md:flex"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-4">science</span>
            <h4 className="font-headline font-bold text-lg">{research.label}</h4>
            <p className="text-xs text-on-surface-variant mt-2 font-body">{research.subtitle}</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-headline font-bold tracking-tight leading-tight">
            {research.title}
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            {research.description}
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary mt-1">auto_awesome</span>
              <div>
                <span className="font-headline font-bold block">{research.features.alu.title}</span>
                <span className="text-sm text-on-surface-variant">{research.features.alu.description}</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary mt-1">memory</span>
              <div>
                <span className="font-headline font-bold block">{research.features.quantum.title}</span>
                <span className="text-sm text-on-surface-variant">{research.features.quantum.description}</span>
              </div>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
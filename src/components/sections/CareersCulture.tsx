"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface CareersCultureProps {
  dict: Dictionary;
}

const cultureImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuA3aEgcdNAlwRiHvzN6zfIid_UxM14rXx6MNC6N6OImY2PHZ04Wv5WrZIwORbPDB5xdtIw5QUNkdKChR-Z9UdsBVhspREEYI4yCyjiVI1DNl4RWA7dOfoiNsNDzovW0yU_urrLI93ZVvYk4cK4KHoU2lZEdJBwAv_r651IH2PLpQVlKJRwNzD5cY7ag3Xrna9K_7hjweXrcN6h9ruQRp4ojFNjU8Qsc9s0Qem6ODmPI_SzLLbNW2hgTBSpuo6K9m9x2J8iudZKYmWA";

export function CareersCulture({ dict }: CareersCultureProps) {
  const { culture } = dict.careers;

  return (
    <section className="bg-surface-container-low py-32 px-8 mb-40">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-headline font-bold tracking-tight text-center">{culture.title}</h2>
          <p className="text-center text-on-surface-variant mt-4 max-w-xl mx-auto">{culture.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 glass-panel p-10 flex flex-col justify-between"
          >
            <div>
              <span className="text-primary font-label text-xs tracking-widest uppercase mb-4 block">{culture.manifesto.label}</span>
              <h3 className="text-4xl font-headline font-bold leading-tight">{culture.manifesto.title}</h3>
            </div>
            <div className="space-y-4">
              <p className="text-on-surface-variant">{culture.manifesto.description}</p>
              <img 
                alt="Culture" 
                className="w-full h-48 object-cover mt-4 opacity-40" 
                src={cultureImage}
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 glass-panel p-10 flex flex-col justify-center gap-4 bg-primary/5"
          >
            <span className="material-symbols-outlined text-primary text-5xl">diversity_3</span>
            <h3 className="text-2xl font-headline font-bold">{culture.hybrid.title}</h3>
            <p className="text-on-surface-variant">{culture.hybrid.description}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-10 flex flex-col justify-end gap-2 group hover:bg-surface-bright/20 transition-colors"
          >
            <span className="material-symbols-outlined text-secondary text-3xl mb-4">terminal</span>
            <span className="font-headline font-bold">{culture.open.title}</span>
            <span className="text-xs text-on-surface-variant">{culture.open.description}</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel p-10 flex flex-col justify-end gap-2 group hover:bg-surface-bright/20 transition-colors"
          >
            <span className="material-symbols-outlined text-tertiary text-3xl mb-4">fitness_center</span>
            <span className="font-headline font-bold">{culture.wellness.title}</span>
            <span className="text-xs text-on-surface-variant">{culture.wellness.description}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
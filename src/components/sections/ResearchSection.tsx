"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface ResearchSectionProps {
  dict: Dictionary;
}

const researchImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuB-W6R764aCcJhCd-8LCo57EwPUEuPGfuYM8ZHpkToc1tfp2IMmz0sKHsqGL3OEFcHwW2CjtAzKU08OqGQfUXiolz2ppvj7gjEDXFrj2Ct0vgt5f6ONhlN5-WQYAA_6E-yVHgjt-4xYqzFWs6T6oeoxR_NRqO1b5DmRJxk4A1kSNqcNLpf3X7VWUNuvj5O45Bq-DgHmp1GcqNoUZHlCDDmqIyBJhae6b3aGSkyOfjU9OhrTU-px4aEYYj77OsAMixbljAckLdMdcTc";

const projects = [
  { key: "1", color: "text-primary", icon: "01" },
  { key: "2", color: "text-secondary", icon: "02" },
  { key: "3", color: "text-tertiary", icon: "03" },
] as const;

export default function ResearchSection({ dict }: ResearchSectionProps) {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <img 
              className="rounded-2xl shadow-2xl relative z-10 w-full aspect-[4/5] object-cover" 
              alt="Modern minimalist research laboratory"
              src={researchImage}
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-12 -right-12 glass-panel p-8 rounded-xl z-20 border border-outline-variant/20 max-w-[280px]"
            >
              <p className="text-primary font-bold text-sm mb-2 font-headline uppercase tracking-widest">
                {dict.researchSection.mission.label}
              </p>
              <h4 className="text-xl font-headline font-bold leading-tight">
                {dict.researchSection.mission.title}
              </h4>
              <p className="text-on-surface-variant text-sm mt-3 font-body">
                {dict.researchSection.mission.description}
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            <div>
              <h2 className="text-5xl font-headline font-bold tracking-tighter mb-8 leading-tight">
                {dict.researchSection.title}
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                {dict.researchSection.description}
              </p>
            </div>

            <div className="space-y-8">
              {projects.map((project, i) => (
                <motion.div 
                  key={project.key}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <span className={`font-headline text-2xl font-bold ${project.color}`}>
                    {project.icon}
                  </span>
                  <div>
                    <h4 className={`text-xl font-headline font-bold group-hover:text-${project.color.replace('text-', '')} transition-colors`}>
                      {dict.researchSection.projects[project.key].title}
                    </h4>
                    <p className="text-on-surface-variant mt-2">
                      {dict.researchSection.projects[project.key].description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface HeroSectionProps {
  dict: Dictionary;
}

const heroImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuA1SStsCUx6ulVHenfFofmqGkzg3xMW67bnOJ-ktA5tNjk-JboeeIcUo0VtdKSsgKD85KxxTM_i7waLR1nBDas6KqmqeCEcGH0-TLRZX5KHUhpZ5YonWSu6QTg1GZdld4jHiTlhg7B7PV2yubt8ttkPz__owbHJjXsTwhXqp12R9X4wYgUZLOiwj1zxb3QproTHHvrkXan5RkHw5lFbbiWXiPNUrrKW1Mxg8voIGodNxpZh3O_zZGksB4r1MXf6TNuwBolOQwqyfiE";

export default function HeroSection({ dict }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-secondary rounded-full blur-[100px]"
        />
        <img 
          className="w-full h-full object-cover opacity-40 mix-blend-screen" 
          alt="Abstract 3d visualization of a glowing neural network core"
          src={heroImage}
        />
      </div>
      
      <div className="relative z-10 max-w-screen-xl px-8 w-full text-left md:grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] font-label uppercase"
          >
            {dict.hero.badge}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-on-background mb-8"
          >
            {dict.hero.title} <br />
            <span className="text-gradient">{dict.hero.titleGradient}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed"
          >
            {dict.hero.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <button className="synthetic-glow text-on-primary-container px-10 py-5 rounded-full font-bold text-lg font-headline transition-all hover:shadow-[0_0_30px_rgba(143,245,255,0.4)] hover:-translate-y-1 active:scale-95">
              {dict.hero.ctaPrimary}
            </button>
            <button className="px-10 py-5 rounded-full border border-outline-variant text-on-surface font-bold text-lg font-headline hover:bg-surface-bright/20 transition-all">
              {dict.hero.ctaSecondary}
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{dict.hero.scrollLabel}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
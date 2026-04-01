"use client";

import { useI18n } from "@/components/I18nProvider";
import { Navbar, Footer } from "@/components/layout";

interface ResearchDict {
  title: string;
  description: string;
  features: {
    alu: { title: string; description: string };
    quantum: { title: string; description: string };
  };
  label: string;
}

export default function ResearchPage() {
  const { dict } = useI18n();
  const t = (dict as any).research as ResearchDict;

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
        <header className="mb-32">
          <span className="text-secondary font-label tracking-[0.2em] text-xs uppercase block mb-4">
            {t.label}
          </span>
          <h1 className="text-7xl md:text-8xl font-headline font-bold text-on-surface tracking-tighter leading-[0.9] max-w-4xl mb-8">
            {t.title}
          </h1>
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
            {t.description}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-panel p-8 border border-outline-variant/20 rounded-xl">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">auto_awesome</span>
            <h3 className="text-2xl font-headline font-bold mb-4">{t.features.alu.title}</h3>
            <p className="text-on-surface-variant">{t.features.alu.description}</p>
          </div>
          <div className="glass-panel p-8 border border-outline-variant/20 rounded-xl">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">memory</span>
            <h3 className="text-2xl font-headline font-bold mb-4">{t.features.quantum.title}</h3>
            <p className="text-on-surface-variant">{t.features.quantum.description}</p>
          </div>
        </div>

        <div className="mt-20 glass-panel p-12 border border-outline-variant/20 rounded-2xl text-center">
          <h3 className="text-3xl font-headline font-bold mb-4">Join Our Research</h3>
          <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
            We invest in long-horizon neural exploration. Here, you'll have access to 100+ Petaflops of dedicated compute.
          </p>
          <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold font-headline hover:shadow-[0_0_30px_rgba(143,245,255,0.3)] transition-all">
            Explore Open Positions
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
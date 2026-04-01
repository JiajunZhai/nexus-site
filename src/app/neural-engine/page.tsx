"use client";

import { useI18n } from "@/components/I18nProvider";
import { Navbar, Footer } from "@/components/layout";

interface NeuralEngineDict {
  badge: string;
  title: string;
  titleGradient: string;
  description: string;
  features: {
    core: { title: string; description: string; items: string[] };
    performance: { title: string; description: string; items: string[] };
  };
  cta: string;
}

export default function NeuralEnginePage() {
  const { dict } = useI18n();
  const t = (dict as any).neuralEngine as NeuralEngineDict;

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
        <header className="mb-32">
          <span className="text-secondary font-label tracking-[0.2em] text-xs uppercase block mb-4">
            {t.badge}
          </span>
          <h1 className="text-7xl md:text-8xl font-headline font-bold text-on-surface tracking-tighter leading-[0.9] max-w-4xl mb-8">
            {t.title} <span className="text-primary italic">{t.titleGradient}</span>
          </h1>
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
            {t.description}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-panel p-8 border border-outline-variant/20 rounded-xl">
            <h3 className="text-2xl font-headline font-bold mb-4">{t.features.core.title}</h3>
            <p className="text-on-surface-variant mb-6">{t.features.core.description}</p>
            <div className="space-y-4">
              {t.features.core.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel p-8 border border-outline-variant/20 rounded-xl">
            <h3 className="text-2xl font-headline font-bold mb-4">{t.features.performance.title}</h3>
            <p className="text-on-surface-variant mb-6">{t.features.performance.description}</p>
            <div className="space-y-4">
              {t.features.performance.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">speed</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="synthetic-glow text-on-primary-container px-12 py-5 rounded-full font-bold text-lg font-headline transition-all hover:shadow-[0_0_30px_rgba(143,245,255,0.4)]">
            {t.cta}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
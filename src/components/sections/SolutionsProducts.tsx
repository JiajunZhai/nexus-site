"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface SolutionsProductsProps {
  dict: Dictionary;
}

const productImages = {
  neuralEngine: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOAw1VO27j6cf_Dsj4Keg3p-TUf-t9pO_CnUmwRGQyg6JzEJy7cQXEYPlvlK9fRUK1RYWLXSCS7YBbBLzz73QxtYpyWPkXwzKRUIaHEBrNpB5KQPsiToJPNSVr4ngbUAAAWW6-WlU4gI4hisitPprvaAo7dGlIL-3U9xERsao3s4VnSHM5f7mLLddzXmbfqa5Cka3i5929AAD1W0tyDWjDoIl9eQ_62PZhpiEkwbjzFyhIsHbct5Gcin1_6g-9Z06PjLxY_Y2CH-g",
  predictiveVision: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg8t6vJ229IsY4TiF98N91ilZvhIuOrETMQvjZ4bpEZCXJXwmXpdDkyo-rUNZf1F-aqy62aibHkLzJ6GuZUvZBAntQDffcNkki3SXkq4kgxY1cevqOAAaU28drODUAjuTHvNXY9XbEElayFhTYayjhFJjNwa2vsZYQ5BHs62ca27wYtVYpE1b0T7hQWoNtDVng65bcFH79zgzPpGlm1xbfbCM9ZgkuK3SF1ofGcdKmsbC8mbqtB7JLl8fLuPP2aV9rVYqj-yFv9uU",
};

export function SolutionsProducts({ dict }: SolutionsProductsProps) {
  const { products } = dict.solutions;

  return (
    <div className="grid grid-cols-12 gap-y-32 gap-x-8">
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="col-span-12 lg:col-span-10 lg:col-start-2 grid grid-cols-12 gap-8 items-center"
      >
        <div className="col-span-12 md:col-span-6 relative order-2 md:order-1">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          <div className="glass-panel p-8 border border-outline-variant/20 rounded-lg relative z-10">
            <div className="flex items-center justify-between mb-8">
              <span className="text-primary font-headline font-bold text-3xl">{products.neuralEngine.number}</span>
              <span className="text-secondary font-label text-xs tracking-widest">{products.neuralEngine.version}</span>
            </div>
            <h2 className="text-4xl font-headline font-bold mb-4">{products.neuralEngine.title}</h2>
            <div className="space-y-6 text-on-surface-variant">
              <p className="text-sm">{products.neuralEngine.description}</p>
              <div className="pt-6 border-t border-outline-variant/10">
                <h3 className="text-on-surface font-label text-xs tracking-widest mb-4">TECHNICAL SPECIFICATIONS</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-low p-3">
                    <div className="text-[10px] text-outline mb-1">{products.neuralEngine.specs.latency}</div>
                    <div className="text-primary font-mono text-lg">{products.neuralEngine.specs.latencyValue}</div>
                  </div>
                  <div className="bg-surface-container-low p-3">
                    <div className="text-[10px] text-outline mb-1">{products.neuralEngine.specs.concurrency}</div>
                    <div className="text-primary font-mono text-lg">{products.neuralEngine.specs.concurrencyValue}</div>
                  </div>
                  <div className="bg-surface-container-low p-3">
                    <div className="text-[10px] text-outline mb-1">{products.neuralEngine.specs.encryption}</div>
                    <div className="text-primary font-mono text-lg">{products.neuralEngine.specs.encryptionValue}</div>
                  </div>
                  <div className="bg-surface-container-low p-3">
                    <div className="text-[10px] text-outline mb-1">{products.neuralEngine.specs.stability}</div>
                    <div className="text-primary font-mono text-lg">{products.neuralEngine.specs.stabilityValue}</div>
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-8 flex items-center gap-2 group text-primary font-headline text-sm font-bold">
              {products.neuralEngine.cta}
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 order-1 md:order-2 h-full min-h-[400px]">
          <div className="w-full h-full bg-surface-container-highest rounded-lg overflow-hidden relative border border-outline-variant/20 group">
            <img 
              alt="AI Visualization" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              src={productImages.neuralEngine}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex justify-between items-end">
                <div className="bg-surface-container-highest/80 backdrop-blur-md p-4 border border-primary/20">
                  <div className="w-32 h-12 flex items-end gap-1">
                    <div className="w-2 bg-primary/40 h-1/2" />
                    <div className="w-2 bg-primary/60 h-3/4" />
                    <div className="w-2 bg-primary h-full" />
                    <div className="w-2 bg-primary/80 h-2/3" />
                    <div className="w-2 bg-primary/30 h-1/4" />
                  </div>
                  <div className="text-[8px] text-primary mt-2 font-mono">CORE_PULSE_MONITOR [ACTIVE]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="col-span-12 lg:col-span-10 lg:col-start-1 grid grid-cols-12 gap-8 items-center"
      >
        <div className="col-span-12 md:col-span-6 h-full min-h-[400px]">
          <div className="w-full h-full bg-surface-container-highest rounded-lg overflow-hidden relative border border-outline-variant/20 group">
            <img 
              alt="Vision System" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              src={productImages.predictiveVision}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-0 w-full h-px bg-secondary/50 shadow-[0_0_10px_#ac8aff]" />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 relative">
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />
          <div className="glass-panel p-8 border border-outline-variant/20 rounded-lg relative z-10">
            <div className="flex items-center justify-between mb-8">
              <span className="text-secondary font-headline font-bold text-3xl">{products.predictiveVision.number}</span>
              <span className="text-primary font-label text-xs tracking-widest">{products.predictiveVision.version}</span>
            </div>
            <h2 className="text-4xl font-headline font-bold mb-4">{products.predictiveVision.title}</h2>
            <div className="space-y-6 text-on-surface-variant">
              <p className="text-sm">{products.predictiveVision.description}</p>
              <div className="pt-6 border-t border-outline-variant/10">
                <h3 className="text-on-surface font-label text-xs tracking-widest mb-4">SENSOR NODES</h3>
                <ul className="space-y-3 font-mono text-xs">
                  <li className="flex justify-between items-center py-2 border-b border-outline-variant/5">
                    <span className="text-outline">{products.predictiveVision.specs.scanDepth}</span>
                    <span className="text-secondary">{products.predictiveVision.specs.scanDepthValue}</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-outline-variant/5">
                    <span className="text-outline">{products.predictiveVision.specs.objectIdAcc}</span>
                    <span className="text-secondary">{products.predictiveVision.specs.objectIdAccValue}</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-outline">{products.predictiveVision.specs.refreshRate}</span>
                    <span className="text-secondary">{products.predictiveVision.specs.refreshRateValue}</span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="mt-8 flex items-center gap-2 group text-secondary font-headline text-sm font-bold">
              {products.predictiveVision.cta}
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">visibility</span>
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="col-span-12 lg:col-span-8 lg:col-start-3"
      >
        <div className="bg-surface-container p-12 border-x border-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <span className="text-primary font-headline font-bold text-3xl mb-4 block">{products.autonomousLogic.number}</span>
              <h2 className="text-5xl font-headline font-bold mb-6 tracking-tight">{products.autonomousLogic.title}</h2>
              <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">{products.autonomousLogic.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="p-6 bg-surface-container-high/50 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary mb-4">memory</span>
                  <div className="font-headline font-bold text-sm mb-1 uppercase tracking-tighter">{products.autonomousLogic.features.modular.title}</div>
                  <div className="text-[10px] text-outline leading-tight">{products.autonomousLogic.features.modular.description}</div>
                </div>
                <div className="p-6 bg-surface-container-high/50 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary mb-4">security</span>
                  <div className="font-headline font-bold text-sm mb-1 uppercase tracking-tighter">{products.autonomousLogic.features.isolated.title}</div>
                  <div className="text-[10px] text-outline leading-tight">{products.autonomousLogic.features.isolated.description}</div>
                </div>
                <div className="p-6 bg-surface-container-high/50 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary mb-4">bolt</span>
                  <div className="font-headline font-bold text-sm mb-1 uppercase tracking-tighter">{products.autonomousLogic.features.fast.title}</div>
                  <div className="text-[10px] text-outline leading-tight">{products.autonomousLogic.features.fast.description}</div>
                </div>
              </div>
              <button className="synthetic-glow text-on-primary-container px-10 py-4 font-bold tracking-tight text-lg transition-all hover:shadow-[0_0_30px_rgba(143,245,255,0.4)] active:scale-95 font-headline">
                {products.autonomousLogic.cta}
              </button>
            </div>
            <div className="w-full md:w-64 space-y-4">
              <div className="p-4 bg-black/40 border border-primary/20 rounded">
                <div className="flex justify-between text-[10px] font-mono text-primary/60 mb-2">
                  <span>{products.autonomousLogic.status.label}</span>
                  <span>{products.autonomousLogic.status.value}</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[88%]" />
                </div>
              </div>
              <div className="p-4 bg-black/40 border border-secondary/20 rounded">
                <div className="flex justify-between text-[10px] font-mono text-secondary/60 mb-2">
                  <span>{products.autonomousLogic.status.load}</span>
                  <span>{products.autonomousLogic.status.loadValue}</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[42%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
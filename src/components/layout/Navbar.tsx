"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/components/I18nProvider";

const navLinks = [
  { key: "solutions", href: "/solutions" },
  { key: "neuralEngine", href: "/neural-engine" },
  { key: "research", href: "/research" },
  { key: "about", href: "/about" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { dict, locale, setLocale } = useI18n();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-xl shadow-[0_0_20px_rgba(0,240,255,0.05)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-cyan-400 font-headline">
          NexusSite
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`font-medium font-headline tracking-tight transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : "text-slate-400 hover:text-cyan-300"
              }`}
            >
              {dict.nav[link.key as keyof typeof dict.nav]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLocale("en")}
              className={`text-xs font-medium px-2 py-1 rounded transition-all ${
                locale === "en" 
                  ? "bg-primary/20 text-primary" 
                  : "text-slate-500 hover:text-white"
              }`}
            >
              EN
            </button>
            <span className="text-slate-600">/</span>
            <button
              onClick={() => setLocale("zh")}
              className={`text-xs font-medium px-2 py-1 rounded transition-all ${
                locale === "zh" 
                  ? "bg-primary/20 text-primary" 
                  : "text-slate-500 hover:text-white"
              }`}
            >
              中文
            </button>
          </div>
          <button className="text-slate-400 font-medium px-4 py-2 hover:text-white transition-all text-sm font-headline">
            {dict.nav.login}
          </button>
          <button className="bg-primary text-on-primary-container font-bold px-6 py-2.5 rounded-full text-sm font-headline tracking-tight transition-transform active:scale-95 shadow-[0_0_15px_rgba(143,245,255,0.3)]">
            {dict.nav.getAccess}
          </button>
        </div>
      </div>
    </nav>
  );
}
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export function Footer() {
  const { dict } = useI18n();

  return (
    <footer className="w-full border-t border-slate-800/30 bg-slate-950">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-screen-2xl mx-auto gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-lg font-black text-cyan-400 font-headline">
            NexusSite
          </div>
          <p className="text-slate-500 text-sm font-body tracking-wide max-w-xs">
            {dict.footer.copyright}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <Link href="#" className="text-slate-500 text-sm font-body tracking-wide hover:text-white transition-all opacity-80 hover:opacity-100">
            {dict.footer.links.apiDocs}
          </Link>
          <Link href="#" className="text-slate-500 text-sm font-body tracking-wide hover:text-white transition-all opacity-80 hover:opacity-100">
            {dict.footer.links.ethics}
          </Link>
          <Link href="#" className="text-slate-500 text-sm font-body tracking-wide hover:text-white transition-all opacity-80 hover:opacity-100">
            {dict.footer.links.status}
          </Link>
          <Link href="#" className="text-slate-500 text-sm font-body tracking-wide hover:text-white transition-all opacity-80 hover:opacity-100">
            {dict.footer.links.privacy}
          </Link>
        </div>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-cyan-400 transition-colors">terminal</span>
          <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-cyan-400 transition-colors">share</span>
          <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-cyan-400 transition-colors">public</span>
        </div>
      </div>
    </footer>
  );
}
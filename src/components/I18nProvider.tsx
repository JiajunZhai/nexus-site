"use client";

import { useState, createContext, useContext } from "react";

type Dictionary = Record<string, any>;

interface I18nContextType {
  locale: "en" | "zh";
  dict: Dictionary;
  setLocale: (locale: "en" | "zh") => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}

import en from "@/lib/translations/en.json";
import zh from "@/lib/translations/zh.json";

const dictionaries: Record<string, Dictionary> = { en, zh };

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<"en" | "zh">("en");

  return (
    <I18nContext.Provider value={{ locale, dict: dictionaries[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}
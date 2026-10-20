import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { T } from "../data/content.js";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("lang") || "en"; } catch { return "en"; }
  });

  // Keep <html> in sync: language, reading direction (right-to-left for Dari), page title
  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang === "fa" ? "fa-AF" : "en";
    el.dir = lang === "fa" ? "rtl" : "ltr";
    document.title = T[lang]["meta.title"];
    try { localStorage.setItem("lang", lang); } catch { /* ignore */ }
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    setLang,
    toggle: () => setLang((l) => (l === "en" ? "fa" : "en")),
    // t("key") gives the text in the current language (falls back to English)
    t: (key) => T[lang][key] ?? T.en[key] ?? key,
  }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

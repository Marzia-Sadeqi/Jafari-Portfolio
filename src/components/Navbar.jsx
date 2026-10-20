import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useLang } from "../hooks/useLang.jsx";
import useActiveSection from "../hooks/useActiveSection.js";
import { NAV } from "../data/content.js";
import { spring } from "./motion.js";

export default function Navbar() {
  const { t, toggle, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...spring, delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-blush bg-milk/90 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" dir="ltr" className="flex items-center gap-2 text-lg font-extrabold text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brown text-sm text-milk">FJ</span>
          Fatima
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((id) => (
            <a key={id} href={`#${id}`} className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${active === id ? "text-ink" : "text-brown hover:text-ink"}`}>
              {active === id && (
                <motion.span layoutId="nav-pill" transition={spring} className="absolute inset-0 -z-10 rounded-full bg-blush" />
              )}
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" onClick={toggle} aria-label={t("lang.switch")}
            className="flex items-center gap-1.5 rounded-full border border-taupe px-3 py-2 text-sm font-semibold text-brown transition-colors hover:bg-blush">
            <Globe size={16} /> {lang === "en" ? "دری" : "EN"}
          </button>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full text-brown hover:bg-blush lg:hidden"
            aria-label={t("menu")} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile" className="overflow-hidden border-t border-blush lg:hidden"
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
              {NAV.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${active === id ? "bg-blush text-ink" : "text-brown hover:bg-cream"}`}>
                    {t(`nav.${id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

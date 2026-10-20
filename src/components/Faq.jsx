import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLang } from "../hooks/useLang.jsx";
import { FAQ_COUNT } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { ease } from "./motion.js";

export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState(1); // one answer open at a time

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading label={t("faq.label")} title={t("faq.title")} text={t("faq.text")} />
        <div className="space-y-3">
          {Array.from({ length: FAQ_COUNT }, (_, i) => i + 1).map((n) => {
            const isOpen = open === n;
            return (
              <Reveal key={n} delay={(n - 1) * 0.05}>
                <div className="card overflow-hidden">
                  <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? 0 : n)}
                    className="flex w-full items-center gap-4 p-5 text-start">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blush text-sm font-bold text-brown">{n}</span>
                    <span className="flex-1 font-semibold text-ink">{t(`q${n}`)}</span>
                    <ChevronDown size={20} className={`text-taupe transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }} className="overflow-hidden">
                        <p className="px-5 pb-5 ps-[4.25rem] leading-relaxed text-brown">{t(`a${n}`)}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

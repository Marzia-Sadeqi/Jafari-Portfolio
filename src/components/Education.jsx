import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ChevronDown, GraduationCap } from "lucide-react";
import { useLang } from "../hooks/useLang.jsx";
import { EDUCATION } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import { ease, spring, viewport } from "./motion.js";

function Entry({ item }) {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const inProgress = item.status === "progress";

  return (
    <li className="group relative ps-16 pb-8 last:pb-0">
      {/* marker on the line: grows when the card is hovered or the entry is in progress */}
      <motion.span
        initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={viewport} transition={{ ...spring, delay: 0.1 }}
        className={`absolute start-0 top-2 grid h-10 w-10 place-items-center rounded-full border-4 border-cream transition-all duration-300 group-hover:scale-110 group-hover:bg-brown group-hover:text-milk ${inProgress ? "bg-brown text-milk" : "bg-blush text-brown"}`}
      >
        <GraduationCap size={18} />
        {inProgress && <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-taupe/40 motion-reduce:hidden" />}
      </motion.span>

      <motion.div
        initial={{ opacity: 0, x: lang === "fa" ? -36 : 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewport}
        transition={{ duration: 0.6, ease, delay: 0.05 }}
      >
        <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)}
          className="card w-full p-5 text-start transition-shadow hover:shadow-lg hover:shadow-mist">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blush px-3 py-1 text-xs font-bold text-brown">{t(`edu.type.${item.type}`)}</span>
                {inProgress && <span className="rounded-full bg-brown px-3 py-1 text-xs font-bold text-milk">{t("edu.progress")}</span>}
              </div>
              <h3 className="text-lg font-bold text-ink">{t(`${item.id}.title`)}</h3>
              <p className="mt-1 text-sm font-medium text-brown">{t(`${item.id}.org`)}</p>
            </div>
            <ChevronDown size={20} className={`mt-1 shrink-0 text-taupe transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease }} className="overflow-hidden">
                <div className="mt-4 border-t border-blush pt-4 text-sm leading-relaxed text-brown">
                  <p>{item.dates || t("edu.dates")}</p>
                  {inProgress && <p className="mt-1">{t("edu7.note")}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>
    </li>
  );
}

export default function Education() {
  const { t } = useLang();
  const ref = useRef(null);
  // The line draws itself while you scroll through the list
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const draw = useSpring(scrollYProgress, { stiffness: 110, damping: 24 });

  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading label={t("edu.label")} title={t("edu.title")} text={t("edu.text")} />

        <div ref={ref} className="relative">
          <span aria-hidden="true" className="absolute bottom-2 start-5 top-2 w-0.5 -translate-x-1/2 bg-blush rtl:translate-x-1/2" />
          <motion.span aria-hidden="true" style={{ scaleY: draw }}
            className="absolute bottom-2 start-5 top-2 w-0.5 origin-top -translate-x-1/2 bg-taupe rtl:translate-x-1/2" />
          <ol>{EDUCATION.map((item) => <Entry key={item.id} item={item} />)}</ol>
        </div>
      </div>
    </section>
  );
}

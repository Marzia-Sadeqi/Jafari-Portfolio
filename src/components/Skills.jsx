import { motion } from "framer-motion";
import { ArrowUpRight, Layers, Lightbulb, PenTool } from "lucide-react";
import { useLang } from "../hooks/useLang.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { fadeUp, stagger, viewport } from "./motion.js";

const CARDS = [
  { key: "s1", Icon: PenTool, chips: true },
  { key: "s2", Icon: Layers, chips: true },
  { key: "s3", Icon: Lightbulb, chips: false },
];

export default function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="bg-milk py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading label={t("skills.label")} title={t("skills.title")} text={t("skills.text")} />

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={viewport} className="grid gap-6 md:grid-cols-3">
          {CARDS.map(({ key, Icon, chips }) => (
            <motion.article key={key} variants={fadeUp} whileHover={{ y: -8 }} className="card p-7">
              <motion.span whileHover={{ rotate: -8, scale: 1.08 }} className="grid h-14 w-14 place-items-center rounded-2xl bg-blush text-brown">
                <Icon size={26} />
              </motion.span>
              <h3 className="mt-5 text-xl font-bold text-ink">{t(`${key}.title`)}</h3>
              {chips ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {t(`${key}.text`).split("·").map((s) => (
                    <li key={s} className="rounded-full border border-blush bg-cream px-3 py-1.5 text-sm font-medium text-brown">{s.trim()}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 leading-relaxed text-brown">{t(`${key}.text`)}</p>
              )}
            </motion.article>
          ))}
        </motion.div>

        <Reveal className="mt-10 text-center">
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#contact" className="btn btn-primary">
            {t("skills.cta")} <ArrowUpRight size={18} className="rtl:-scale-x-100" />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}

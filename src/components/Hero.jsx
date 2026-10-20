import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLang } from "../hooks/useLang.jsx";
import { img } from "../data/content.js";
import { ease, spring } from "./motion.js";

const word = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

// Simple hero: text on one side, photo on the other
export default function Hero() {
  const { t } = useLang();
  const { scrollY } = useScroll();
  const lift = useTransform(scrollY, [0, 500], [0, -36]);   // photo moves up slowly while scrolling

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 sm:pt-32">

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } } }}>
          <motion.span variants={word} className="inline-flex items-center gap-2 rounded-full border border-taupe bg-milk px-4 py-1.5 text-sm font-semibold text-brown">
            <Sparkles size={16} /> {t("hero.badge")}
          </motion.span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] text-ink sm:text-6xl">
            <motion.span variants={word} className="block">{t("hero.hi")}</motion.span>
            <motion.span variants={word} className="block text-taupe">{t("hero.name")}</motion.span>
          </h1>

          <motion.p variants={word} className="mt-6 max-w-lg text-lg leading-relaxed text-brown">{t("hero.lead")}</motion.p>

          <motion.div variants={word} className="mt-8 flex flex-wrap gap-3">
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#projects" className="btn btn-primary">
              {t("hero.cta1")} <ArrowRight size={18} className="rtl:rotate-180" />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#contact" className="btn btn-ghost">
              {t("hero.cta2")}
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: lift }}
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl border-8 border-milk bg-mist shadow-[0_30px_60px_-30px] shadow-taupe">
            <img src={img("Fatima.jpeg")} alt={t("hero.alt")} className="h-full w-full object-cover"
              onError={(e) => { e.currentTarget.style.display = "none"; }} />
          </div>

          {/* one small floating note (the only continuous animation) */}
          <motion.div
            animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 start-[-1.5rem] rounded-2xl border border-blush bg-milk px-5 py-3 shadow-lg shadow-mist"
          >
            <span className="font-hand text-2xl text-brown">{t("hero.note")}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

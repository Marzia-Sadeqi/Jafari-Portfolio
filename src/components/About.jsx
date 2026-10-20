import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { useLang } from "../hooks/useLang.jsx";
import { img } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import TiltCard from "./TiltCard.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { fadeUp, scaleIn, stagger, viewport } from "./motion.js";

const HIGHLIGHTS = [
  { key: "about.c1", Icon: MapPin },
  { key: "about.c2", Icon: Briefcase },
  { key: "about.c3", Icon: GraduationCap },
];

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="bg-milk py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal variants={scaleIn}>
            <TiltCard className="mx-auto max-w-xs">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border-8 border-cream bg-blush shadow-[0_24px_50px_-28px] shadow-taupe">
                <img src={img("Fatima.jpeg")} alt={t("hero.alt")} loading="lazy" className="h-full w-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = "none"; }} />
              </div>
            </TiltCard>
          </Reveal>

          <div>
            <SectionHeading center={false} label={t("about.label")} title={t("about.title")} />
            <Reveal><p className="-mt-6 text-lg leading-relaxed text-brown">{t("about.p1")}</p></Reveal>
            <Reveal delay={0.1}><p className="mt-4 text-lg leading-relaxed text-brown">{t("about.p2")}</p></Reveal>
          </div>
        </div>

        <motion.ul variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={viewport} className="mt-14 grid gap-5 sm:grid-cols-3">
          {HIGHLIGHTS.map(({ key, Icon }) => (
            <motion.li key={key} variants={fadeUp} whileHover={{ y: -6 }} className="card flex items-start gap-4 p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blush text-brown"><Icon size={22} /></span>
              <div>
                <h3 className="font-bold text-ink">{t(`${key}.t`)}</h3>
                <p className="mt-1 text-sm leading-relaxed text-brown">{t(`${key}.d`)}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

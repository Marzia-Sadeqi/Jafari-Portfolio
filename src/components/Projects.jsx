import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Eye, ImageOff, Users, Palette } from "lucide-react";
import { useLang } from "../hooks/useLang.jsx";
import { PROJECTS, img } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import TiltCard from "./TiltCard.jsx";
import Modal from "./Modal.jsx";
import { ease } from "./motion.js";

const SHOW_FIRST = 6; // how many projects are visible before "Show more"

// Picture with a soft placeholder if the file is missing
function ProjectImage({ project, title, className, fitClass, lazy = true }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="grid h-full w-full place-items-center bg-mist text-taupe">
        <ImageOff size={36} aria-hidden="true" />
      </div>
    );
  }
  return (
    <img src={img(project.image)} alt={title} loading={lazy ? "lazy" : undefined}
      className={`${fitClass} ${className || ""}`} onError={() => setFailed(true)} />
  );
}

// Small row: target audience + program
function Meta({ project }) {
  const { t } = useLang();
  return (
    <ul className="mt-4 space-y-1.5 text-sm text-brown">
      <li className="flex items-start gap-2"><Users size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
        <span><b className="font-semibold text-ink">{t("projects.aud")}:</b> {t(`${project.id}.aud`)}</span></li>
      <li className="flex items-start gap-2"><Palette size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
        <span><b className="font-semibold text-ink">{t("projects.prog")}:</b> {project.program}</span></li>
    </ul>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const { t } = useLang();
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease, delay: (index % 3) * 0.08 }}
    >
      <TiltCard className="card group h-full overflow-hidden">
        <button type="button" onClick={() => onOpen(project)} className="block w-full text-start" aria-label={`${t("projects.cta")}: ${t(`${project.id}.title`)}`}>
          <div className="relative aspect-[4/3] overflow-hidden bg-mist">
            <ProjectImage project={project} title={t(`${project.id}.title`)}
              fitClass={project.fit === "contain" ? "h-full w-full object-contain p-3" : "h-full w-full object-cover"}
              className="transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute start-4 top-4 rounded-full bg-milk px-3 py-1 text-xs font-bold text-brown">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-ink">{t(`${project.id}.title`)}</h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-brown">{t(`${project.id}.text`)}</p>
            <Meta project={project} />
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brown transition-colors group-hover:text-ink">
              <Eye size={16} /> {t("projects.cta")}
            </span>
          </div>
        </button>
      </TiltCard>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useLang();
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);
  const shown = expanded ? PROJECTS : PROJECTS.slice(0, SHOW_FIRST);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading label={t("projects.label")} title={t("projects.title")} text={t("projects.text")} />

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false}>
            {shown.map((p, i) => <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />)}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 text-center">
          <motion.button whileTap={{ scale: 0.97 }} type="button" className="btn btn-ghost" aria-expanded={expanded}
            onClick={() => setExpanded((e) => !e)}>
            {expanded ? t("projects.less") : t("projects.more")}
            <ChevronDown size={18} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
          </motion.button>
        </div>
      </div>

      <Modal open={!!selected} onClose={close} label={selected ? t(`${selected.id}.title`) : ""}>
        {selected && (
          <div>
            <div className="overflow-hidden rounded-2xl bg-cream">
              <div className="h-[50vh] sm:h-[60vh]"><ProjectImage project={selected} title={t(`${selected.id}.title`)} fitClass="h-full w-full object-contain" lazy={false} /></div>
            </div>
            <h3 className="mt-5 pe-12 text-2xl font-extrabold text-ink">{t(`${selected.id}.title`)}</h3>
            <p className="mt-2 leading-relaxed text-brown">{t(`${selected.id}.text`)}</p>
            <Meta project={selected} />
          </div>
        )}
      </Modal>
    </section>
  );
}

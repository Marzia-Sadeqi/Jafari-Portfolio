import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Award, ImagePlus } from "lucide-react";
import { useLang } from "../hooks/useLang.jsx";
import { CERTIFICATES, img } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import TiltCard from "./TiltCard.jsx";
import Modal from "./Modal.jsx";
import { fadeUp, stagger, viewport } from "./motion.js";

// Shows the real picture if one is set in data/content.js, otherwise a clear placeholder
function Preview({ cert, image = cert.image, large = false }) {
  const { t } = useLang();
  if (image) {
    return <img src={img(`certificates/${image}`)} alt={t(`${cert.from}.title`)} loading={large ? "eager" : "lazy"} className="h-full w-full object-contain" />;
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-mist p-4 text-center text-brown">
      <ImagePlus size={large ? 44 : 30} className="text-taupe" />
      <span className={large ? "text-base font-medium" : "text-xs font-medium"}>{t("cert.placeholder")}</span>
    </div>
  );
}

export default function Certificates() {
  const { t } = useLang();
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(0);                  // which page is shown in the popup
  const close = useCallback(() => setSelected(null), []);
  const open = (cert) => { setPage(0); setSelected(cert); };

  // All pages of the selected certificate: the main picture first, then any "extra" pages
  const pages = selected ? [{ image: selected.image, label: "cert.diploma" }, ...(selected.extra || [])] : [];

  return (
    <section id="certificates" className="bg-milk py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading label={t("cert.label")} title={t("cert.title")} text={t("cert.text")} />

        <motion.ul variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={viewport} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATES.map((cert) => (
            <motion.li key={cert.id} variants={fadeUp}>
              <TiltCard className="h-full" max={9}>
                <motion.button type="button" whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }} onClick={() => open(cert)}
                  aria-label={`${t("cert.open")}: ${t(`${cert.from}.title`)}`}
                  className="card flex h-full w-full flex-col p-4 text-start transition-shadow hover:shadow-xl hover:shadow-mist">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-cream"><Preview cert={cert} /></div>
                  <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-blush px-3 py-1 text-xs font-bold text-brown">
                    <Award size={14} /> {t(`${cert.from}.org`)}
                  </span>
                  <h3 className="mt-3 font-bold leading-snug text-ink">{t(`${cert.from}.title`)}</h3>
                </motion.button>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <Modal open={!!selected} onClose={close} label={selected ? t(`${selected.from}.title`) : ""}>
        {selected && (
          <div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-cream"><Preview cert={selected} image={pages[page]?.image} large /></div>
            {pages.length > 1 && (
              <div role="tablist" aria-label={t("cert.pages")} className="mt-4 flex flex-wrap gap-2">
                {pages.map((p, i) => (
                  <button key={p.label} type="button" role="tab" aria-selected={page === i} onClick={() => setPage(i)}
                    className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${page === i ? "bg-brown text-milk" : "bg-blush text-brown hover:bg-mist"}`}>
                    {t(p.label)}
                  </button>
                ))}
              </div>
            )}
            <h3 className="mt-5 pe-12 text-2xl font-extrabold text-ink">{t(`${selected.from}.title`)}</h3>
            <p className="mt-1 font-medium text-brown">{t(`${selected.from}.org`)}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}

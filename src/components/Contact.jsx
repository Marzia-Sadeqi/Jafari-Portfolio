import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useLang } from "../hooks/useLang.jsx";
import { FORMSPREE_URL, OWNER_EMAIL, PHONE, T, WHATSAPP } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import { fadeUp, stagger, viewport } from "./motion.js";

// The message always shows the project type in English so Fatima can read it easily
const T_EN = (key) => T.en[key];
const OPTIONS = ["o1", "o2", "o3", "o4", "o5", "o6"];
const field = "mt-1.5 w-full rounded-xl border border-mist bg-cream px-4 py-3 text-ink placeholder:text-clay focus:border-brown focus:outline-none";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // 1. Check that every field is filled in correctly
    let valid = true;
    form.querySelectorAll("input, select, textarea").forEach((f) => {
      const ok = f.checkValidity();
      f.setAttribute("aria-invalid", String(!ok));
      f.classList.toggle("!border-brown", !ok);
      if (!ok) valid = false;
    });
    if (!valid) return setStatus({ type: "error", msg: t("f.invalid") });

    // 2. Send the message to Formspree (it forwards it to Fatima's e-mail)
    setSending(true);
    setStatus({ type: "", msg: "" });
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),            // sends name, email, project, message
      });
      if (!res.ok) throw new Error("Formspree error");
      setStatus({ type: "success", msg: t("f.ok") });
      form.reset();
    } catch {
      setStatus({ type: "error", msg: t("f.fail") });
    } finally {
      setSending(false);
    }
    return undefined;
  };

  const LINKS = [
    { href: `tel:+93${PHONE.slice(1)}`, Icon: Phone, text: PHONE },
    { href: WHATSAPP, Icon: MessageCircle, text: "WhatsApp", ext: true },
    { href: `mailto:${OWNER_EMAIL}`, Icon: Mail, text: OWNER_EMAIL },
  ];

  return (
    <section id="contact" className="bg-milk py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <Reveal><p className="label">{t("contact.label")}</p></Reveal>
          <Reveal delay={0.08}><h2 className="title mt-3">{t("contact.title")}</h2></Reveal>
          <Reveal delay={0.16}><p className="mt-4 max-w-md text-lg leading-relaxed text-brown">{t("contact.text")}</p></Reveal>

          <motion.ul variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewport} className="mt-8 space-y-3">
            {LINKS.map(({ href, Icon, text, ext }) => (
              <motion.li key={text} variants={fadeUp}>
                <motion.a whileHover={{ x: 6 }} href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 text-brown transition-colors hover:text-ink">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-blush"><Icon size={20} /></span>
                  <bdi className="font-medium">{text}</bdi>
                </motion.a>
              </motion.li>
            ))}
            <motion.li variants={fadeUp} className="flex items-center gap-4 text-brown">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-blush"><MapPin size={20} /></span>
              <span className="font-medium">{t("contact.loc")}</span>
            </motion.li>
          </motion.ul>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="card space-y-5 p-6 sm:p-8">
            <label className="block text-sm font-semibold text-ink">{t("f.name")}
              <input name="name" type="text" required placeholder={t("f.nameph")} className={field} /></label>
            <label className="block text-sm font-semibold text-ink">{t("f.email")}
              <input name="email" type="email" required dir="auto" placeholder="name@example.com" className={field} /></label>
            <label className="block text-sm font-semibold text-ink">{t("f.type")}
              <select name="project" required defaultValue="" className={field}>
                <option value="" disabled>{t("f.choose")}</option>
                {OPTIONS.map((o) => <option key={o} value={T_EN(o)}>{t(o)}</option>)}
              </select></label>
            <label className="block text-sm font-semibold text-ink">{t("f.msg")}
              <textarea name="message" rows={5} required placeholder={t("f.msgph")} className={field} /></label>

            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} type="submit" disabled={sending}
              className="btn btn-primary w-full disabled:opacity-60">
              <Send size={18} className="rtl:-scale-x-100" /> {sending ? t("f.sending") : t("f.send")}
            </motion.button>

            <div role="status" aria-live="polite" className="min-h-[1.5rem]">
              <AnimatePresence mode="wait">
                {status.msg && (
                  <motion.p key={status.type + status.msg} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className={`rounded-xl px-4 py-3 text-sm font-medium ${status.type === "success" ? "bg-blush text-ink" : "border border-brown text-brown"}`}>
                    {status.msg}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
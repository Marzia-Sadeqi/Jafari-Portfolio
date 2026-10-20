import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLang } from "../hooks/useLang.jsx";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-mist bg-blush py-3 text-center">
      <div className="mx-auto max-w-6xl px-5">

        <motion.button whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn btn-ghost mx-auto mt-6">
          <ArrowUp size={16} /> {t("footer.top")}
        </motion.button>

        <p dir="ltr" className="mt-8 text-sm text-brown">© {new Date().getFullYear()} Fatima Jafari</p>
      </div>
    </footer>
  );
}

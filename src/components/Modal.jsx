import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLang } from "../hooks/useLang.jsx";
import { spring } from "./motion.js";

// Popup window: closes with Esc, the X button, or a click on the blurred background.
export default function Modal({ open, onClose, label, children }) {
  const { t } = useLang();
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";        // stop the page from scrolling behind
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink/30 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog" aria-modal="true" aria-label={label}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-milk p-5 shadow-2xl sm:p-6"
            initial={{ opacity: 0, scale: 0.92, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }} transition={spring}
            onClick={(e) => e.stopPropagation()}      // clicking the card must not close it
          >
            <button
              ref={closeRef} type="button" onClick={onClose} aria-label={t("close")}
              className="absolute end-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-cream text-brown transition-colors hover:bg-blush"
            >
              <X size={20} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

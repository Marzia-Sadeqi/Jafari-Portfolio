// Shared animation settings, so every section moves in the same calm way
export const ease = [0.22, 1, 0.36, 1];
export const viewport = { once: true, margin: "-80px" };

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};
export const stagger = (gap = 0.1, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});
export const spring = { type: "spring", stiffness: 260, damping: 24 };

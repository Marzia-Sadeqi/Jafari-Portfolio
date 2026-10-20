import { motion, useScroll, useSpring } from "framer-motion";

// Thin bar at the top that shows how far you have scrolled
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div aria-hidden="true" style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-taupe rtl:origin-right" />;
}

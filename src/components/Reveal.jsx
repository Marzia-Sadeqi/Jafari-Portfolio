import { motion } from "framer-motion";
import { fadeUp, viewport } from "./motion.js";

// Fades and slides its content up when it enters the screen
export default function Reveal({ children, delay = 0, className = "", variants = fadeUp, as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

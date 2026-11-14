"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before animating. */
  delay?: number;
  duration?: number;
  /** Starting offset in pixels. */
  x?: number;
  y?: number;
  scale?: number;
};

/**
 * Fades its children in the first time they scroll into view.
 * The only client code a section needs, so the section itself stays a server component.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 20,
  scale = 1,
}: RevealProps) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

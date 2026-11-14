"use client";

import { useEffect, useRef } from "react";

/**
 * A brighter patch of grid that follows the cursor across its section.
 * Decorative only: it does nothing on touch devices or when the visitor
 * prefers reduced motion. Place it inside a positioned <section>.
 */
export function Spotlight({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    const host = layer?.closest("section");
    if (!layer || !host) return;

    const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let frame = 0;

    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = host.getBoundingClientRect();
        layer.style.setProperty("--mx", `${event.clientX - box.left}px`);
        layer.style.setProperty("--my", `${event.clientY - box.top}px`);
        layer.dataset.active = "true";
      });
    };

    const leave = () => {
      cancelAnimationFrame(frame);
      layer.dataset.active = "false";
    };

    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <div ref={ref} aria-hidden="true" className={`spotlight ${className}`} />;
}

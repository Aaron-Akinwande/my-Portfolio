"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type RoleRotatorProps = {
  /** Pre-rendered roles. All of them are in the HTML; one is visible at a time. */
  items: ReactNode[];
  /** Milliseconds each role stays on screen. */
  interval?: number;
  className?: string;
};

export function RoleRotator({
  items,
  interval = 3000,
  className = "",
}: RoleRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((current) => (current + 1) % items.length),
      interval,
    );
    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <div className={`grid ${className}`}>
      {items.map((item, i) => (
        <div
          key={i}
          aria-hidden={i !== index}
          className={`col-start-1 row-start-1 transition-all duration-500 ${
            i === index
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

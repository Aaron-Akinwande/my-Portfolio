"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import type { MouseEvent } from "react";

import { themeCanvas } from "@/lib/theme";
import type { Theme } from "@/lib/theme";

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Private mode: the choice just won't persist.
  }
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((meta) => meta.setAttribute("content", themeCanvas[theme]));
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const next: Theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reducedMotion) {
      apply(next);
      return;
    }

    // The new theme spreads out in a circle from the button.
    const box = event.currentTarget.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    const radius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    );

    document.startViewTransition(() => apply(next)).ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 480,
          easing: "cubic-bezier(0.2, 0.7, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className={`inline-flex size-11 items-center justify-center rounded-xl text-muted transition-colors duration-200 hover:bg-surface-raised hover:text-ink ${className}`}
    >
      {/* Both icons render; CSS shows the one for the theme you would switch to. */}
      <MoonIcon aria-hidden="true" className="size-5 dark:hidden" />
      <SunIcon aria-hidden="true" className="hidden size-5 dark:block" />
    </button>
  );
}

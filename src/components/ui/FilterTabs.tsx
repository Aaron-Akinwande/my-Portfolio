"use client";

import { AnimatePresence, motion } from "motion/react";
import { Fragment, useState } from "react";
import type { ReactNode } from "react";

export type FilterTab = {
  id: string;
  label: string;
  /** Tailwind gradient stops for the active pill, e.g. "from-primary to-secondary". */
  accent: string;
};

export type FilterItem = {
  key: string;
  track: string;
  /** Rendered on the server, so cards add no client JavaScript. */
  node: ReactNode;
};

type FilterTabsProps = {
  /** The first tab shows everything. */
  tabs: FilterTab[];
  items: FilterItem[];
  /** Accessible name for the group of filter buttons. */
  label: string;
  /** Unique per instance, so the active pill animates within its own group. */
  layoutId: string;
  tabsClassName?: string;
  panelClassName?: string;
};

export function FilterTabs({
  tabs,
  items,
  label,
  layoutId,
  tabsClassName = "",
  panelClassName = "",
}: FilterTabsProps) {
  const [active, setActive] = useState(tabs[0].id);

  const visible =
    active === tabs[0].id
      ? items
      : items.filter((item) => item.track === active);

  return (
    <>
      <div role="group" aria-label={label} className={tabsClassName}>
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(tab.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                isActive
                  ? "text-dark border-transparent"
                  : "text-tertiary border-border-slate hover:text-light hover:border-primary/40"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId={layoutId}
                  className={`absolute inset-0 rounded-full bg-linear-to-r ${tab.accent}`}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          className={panelClassName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {visible.map((item) => (
            <Fragment key={item.key}>{item.node}</Fragment>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

"use client";

import { Fragment, useState } from "react";
import type { ReactNode } from "react";

export type FilterTab = {
  id: string;
  label: string;
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
  /** Plural noun for the result count read to screen readers, e.g. "projects". */
  noun: string;
  tabsClassName?: string;
  panelClassName?: string;
};

export function FilterTabs({
  tabs,
  items,
  label,
  noun,
  tabsClassName = "",
  panelClassName = "",
}: FilterTabsProps) {
  const [active, setActive] = useState(tabs[0].id);
  // The first render is static; only later changes animate in.
  const [changed, setChanged] = useState(false);

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
              onClick={() => {
                setActive(tab.id);
                setChanged(true);
              }}
              className={`inline-flex min-h-11 items-center rounded-full border px-5 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "border-transparent bg-accent text-on-accent"
                  : "border-line text-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {visible.length} of {items.length} {noun}
      </p>

      <div
        key={active}
        className={`${panelClassName} ${changed ? "animate-rise" : ""}`}
      >
        {visible.map((item) => (
          <Fragment key={item.key}>{item.node}</Fragment>
        ))}
      </div>
    </>
  );
}

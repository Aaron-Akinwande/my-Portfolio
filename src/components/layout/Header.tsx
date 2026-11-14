"use client";

import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { SectionLink } from "@/components/ui/SectionLink";
import { sections, site } from "@/content/site";
import type { SectionId } from "@/content/site";

/**
 * Tracks whether the page has scrolled and which home-page section is in view.
 * Positions are read on scroll rather than observed once, because the header
 * outlives route changes and the sections may not exist yet when it re-runs.
 */
function useScrollState() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 50);

      let current: SectionId | null = null;
      if (pathname === "/") {
        // The last section whose top has passed 40% of the viewport is "current".
        const line = window.innerHeight * 0.4;
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element && element.getBoundingClientRect().top <= line) {
            current = section.id;
          }
        }
      }
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    const settle = setTimeout(schedule, 300);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(settle);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return { scrolled, active };
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { scrolled, active } = useScrollState();

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        solid
          ? "bg-dark/95 backdrop-blur-md shadow-lg shadow-primary/10 border-border-slate"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="relative max-w-7xl mx-auto flex items-center justify-between py-5 md:px-10 px-7">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="group font-bold text-2xl flex items-center gap-2"
        >
          <span className="w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <span className="text-dark font-bold text-xl">A</span>
          </span>
          <span className="text-light group-hover:text-primary transition-colors duration-300">
            {site.shortName}
            <span className="text-primary">.</span>
          </span>
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden w-7 h-7 text-light hover:text-primary transition-colors"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </button>

        <nav
          id="primary-nav"
          aria-label="Primary"
          className={`absolute left-0 top-full w-full px-7 pb-6 bg-dark/98 backdrop-blur-md border-b border-border-slate shadow-lg transition-all duration-300 lg:static lg:w-auto lg:p-0 lg:bg-transparent lg:backdrop-blur-none lg:border-0 lg:shadow-none lg:visible lg:opacity-100 lg:translate-y-0 ${
            open
              ? "visible opacity-100 translate-y-0"
              : "invisible opacity-0 -translate-y-2"
          }`}
        >
          <ul className="lg:flex lg:items-center">
            {sections.map((section) => {
              const isActive = active === section.id;
              return (
                <li
                  key={section.id}
                  className="lg:ml-6 lg:my-0 my-6 text-base font-medium"
                >
                  <SectionLink
                    section={section.id}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setOpen(false)}
                    className={`relative group transition-colors duration-300 hover:text-primary ${
                      isActive ? "text-primary" : "text-tertiary"
                    }`}
                  >
                    {section.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </SectionLink>
                </li>
              );
            })}
            <li className="lg:ml-6 lg:my-0 mt-7">
              <SectionLink
                section="contact"
                onClick={() => setOpen(false)}
                className="inline-block px-6 py-2.5 bg-linear-to-r from-primary to-primary-hover text-dark rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Hire Me
              </SectionLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

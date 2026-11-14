"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { button } from "@/components/ui/styles";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigation, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-lg bg-accent font-display text-lg font-bold text-on-accent transition-[rotate] duration-300 group-hover:-rotate-6"
          >
            A
          </span>
          <span className="font-display text-xl font-bold text-ink">
            {site.shortName}
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const current = isCurrent(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center rounded-lg px-3.5 text-[0.9375rem] font-medium transition-colors duration-200 hover:text-ink ${
                      current ? "bg-surface-raised text-ink" : "text-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Link href="/contact" className={`${button("primary")} max-md:hidden`}>
            Hire me
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-11 items-center justify-center rounded-xl text-ink transition-colors duration-200 hover:bg-surface-raised md:hidden"
          >
            {open ? (
              <XMarkIcon aria-hidden="true" className="size-6" />
            ) : (
              <Bars3Icon aria-hidden="true" className="size-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        aria-label="Primary"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-canvas shadow-card md:hidden"
      >
        <Container className="py-4">
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => {
              const current = isCurrent(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-12 items-center rounded-lg px-3 text-base font-medium transition-colors duration-200 ${
                      current ? "bg-surface-raised text-ink" : "text-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`${button("primary", "lg")} mt-4 w-full`}
          >
            Hire me
          </Link>
        </Container>
      </nav>
    </header>
  );
}

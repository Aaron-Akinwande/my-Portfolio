"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

import type { SectionId } from "@/content/site";

type SectionLinkProps = Omit<ComponentProps<"a">, "href"> & {
  section: SectionId;
};

/**
 * Link to a section of the home page.
 * On the home page it is a plain anchor, so the browser scrolls smoothly.
 * Anywhere else it routes to the home page and lands on the section.
 */
export function SectionLink({ section, children, ...props }: SectionLinkProps) {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <a href={`#${section}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={`/#${section}`} {...props}>
      {children}
    </Link>
  );
}

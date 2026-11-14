import { ViewTransition } from "react";
import type { ReactNode } from "react";

/**
 * Wraps a page so it fades and rises in when you navigate to it, and fades
 * out when you leave. The header and footer stay put. Styles live in
 * globals.css under "Page transitions".
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}

/**
 * Gives a project's image one identity across pages, so it travels from its
 * card to the project page instead of being swapped.
 */
export function SharedProjectImage({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  return (
    <ViewTransition name={`project-image-${slug}`} share="morph" default="none">
      {children}
    </ViewTransition>
  );
}

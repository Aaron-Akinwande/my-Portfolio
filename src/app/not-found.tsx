import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { PageTransition } from "@/components/ui/PageTransition";
import { button } from "@/components/ui/styles";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageTransition>
      <section className="relative isolate">
        <div
          aria-hidden="true"
          className="blueprint fade-edges absolute inset-0 -z-10"
        />
        <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-sm font-bold text-link">404</p>
      <h1 className="mt-3 text-title font-bold text-ink">Page not found</h1>
      <p className="mt-4 max-w-md text-lead text-muted">
        That page doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className={button("primary")}>
          Back to home
        </Link>
        <Link href="/projects" className={button("secondary")}>
          See projects
        </Link>
      </div>
        </Container>
      </section>
    </PageTransition>
  );
}

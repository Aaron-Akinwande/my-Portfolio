import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

/** Closing band. Uses the accent as its background, so its buttons are inverted. */
export function ContactCta() {
  return (
    <section id="contact" aria-labelledby="cta-title">
      <Container>
        <div className="grain reveal relative isolate overflow-hidden rounded-3xl bg-accent px-6 py-14 text-center text-on-accent sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="blueprint-on-accent scroll-grid fade-edges absolute inset-0 -z-10"
          />
          <h2 id="cta-title" className="mx-auto max-w-2xl text-heading font-bold">
            Have a project or a role in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lead opacity-85">
            I&apos;m always glad to talk about new projects, front-end or cloud
            opportunities, or ideas worth building.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-on-accent px-6 font-medium text-accent transition-[opacity,scale] duration-200 hover:opacity-90 active:scale-[0.98]"
            >
              Get in touch
              <ArrowRightIcon
                aria-hidden="true"
                className="size-5 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-on-accent/40 px-6 font-medium break-all transition-colors duration-200 hover:border-on-accent"
            >
              {site.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

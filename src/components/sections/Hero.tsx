import {
  ArrowDownRightIcon,
  ArrowDownTrayIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import portrait from "@/assets/aaron-akinwande-ajose.jpg";
import { Container } from "@/components/ui/Container";
import { Spotlight } from "@/components/ui/Spotlight";
import { button, chip } from "@/components/ui/styles";
import { experiences } from "@/content/experience";
import { site } from "@/content/site";

/** Verifiable facts. The team count follows the experience list, so it never goes stale. */
const facts = [
  { value: "3+", label: "Years of experience" },
  { value: String(experiences.length), label: "Product teams" },
  { value: "KCNA", label: "Kubernetes certified" },
];

/** Entrance order: each piece rises in a beat after the one before. */
const rise = (delayMs: number) => ({
  className: "animate-rise",
  style: { animationDelay: `${delayMs}ms` },
});

const headline = ["Front-end", "developer", "building", "fast,"];
const WORD_START = 180;
const WORD_STEP = 70;
const wordDelay = (index: number) => `${WORD_START + index * WORD_STEP}ms`;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden border-b border-line"
    >
      {/* Texture: a blueprint grid that drifts on scroll and lights up under the cursor. */}
      <div aria-hidden="true" className="fade-edges absolute inset-0 -z-10">
        <div className="blueprint scroll-grid absolute inset-0" />
        <Spotlight className="scroll-grid" />
      </div>

      <Container className="grid items-center gap-14 py-14 sm:py-20 md:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <div className="min-w-0">
          <p {...rise(0)} className={`${chip()} mb-6 animate-rise`}>
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-success" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            {site.availability}
          </p>

          <h1 id="hero-title">
            <span
              {...rise(90)}
              className="mb-4 block animate-rise font-sans text-lead font-medium text-muted"
            >
              {site.name}
            </span>
            <span className="block text-display font-bold text-ink">
              {headline.map((word, index) => (
                <span key={word}>
                  <span
                    className="inline-block animate-rise"
                    style={{ animationDelay: wordDelay(index) }}
                  >
                    {word}
                  </span>{" "}
                </span>
              ))}
              <span
                className="inline-block animate-rise"
                style={{ animationDelay: wordDelay(headline.length) }}
              >
                <span className="marker rounded-lg px-2">accessible</span>
              </span>{" "}
              <span
                className="inline-block animate-rise"
                style={{ animationDelay: wordDelay(headline.length + 1) }}
              >
                interfaces
              </span>
            </span>
          </h1>

          <p
            {...rise(620)}
            className="mt-6 max-w-xl animate-rise text-lead text-muted"
          >
            {site.intro}
          </p>

          <div {...rise(720)} className="mt-8 flex animate-rise flex-wrap gap-3">
            <Link href="/projects" className={`${button("primary", "lg")} group`}>
              View my work
              <ArrowRightIcon
                aria-hidden="true"
                className="size-5 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <a
              href={site.cvUrl}
              download="Aaron_Akinwande_CV"
              rel="noopener noreferrer"
              className={`${button("secondary", "lg")} group`}
            >
              <ArrowDownTrayIcon
                aria-hidden="true"
                className="size-5 transition-transform duration-200 group-hover:translate-y-0.5"
              />
              Download CV
            </a>
          </div>

          <dl
            {...rise(820)}
            className="mt-12 grid max-w-lg animate-rise grid-cols-3 gap-4 border-t border-line pt-6"
          >
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-xs text-muted sm:text-sm">
                  {fact.label}
                </dt>
                <dd className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* No delay here: the portrait is the largest element, so it should paint first. */}
        <div
          {...rise(0)}
          className="relative mx-auto w-full max-w-xs animate-rise md:max-w-none"
        >
          {/* Backing block: shifts as the hero scrolls past. */}
          <div
            aria-hidden="true"
            className="scroll-parallax absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-highlight"
          />
          <Image
            src={portrait}
            alt={`Portrait of ${site.name}`}
            preload
            placeholder="blur"
            sizes="(min-width: 768px) 340px, 320px"
            className="relative aspect-[4/5] w-full rounded-3xl border border-line object-cover"
          />

          {/* Stamp: the lettering turns as the page scrolls. */}
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-3 size-24 drop-shadow-lg sm:-left-9 sm:size-32"
          >
            <svg viewBox="0 0 120 120" className="scroll-spin size-full">
              <defs>
                <path
                  id="stamp-ring"
                  d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
                />
              </defs>
              <circle cx="60" cy="60" r="60" className="fill-accent" />
              <circle
                cx="60"
                cy="60"
                r="27"
                fill="none"
                strokeDasharray="2 4"
                className="stroke-on-accent/50"
              />
              <text className="fill-on-accent font-display text-[11px] font-bold tracking-[0.12em] uppercase">
                <textPath href="#stamp-ring" textLength="262" lengthAdjust="spacing">
                  Front-end • Cloud • Lagos • Open to work •
                </textPath>
              </text>
            </svg>
            <ArrowDownRightIcon className="absolute inset-0 m-auto size-7 text-on-accent" />
          </div>
        </div>
      </Container>
    </section>
  );
}

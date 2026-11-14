import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CheckIcon,
  CloudIcon,
  CodeBracketIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactCta } from "@/components/sections/ContactCta";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  PageTransition,
  SharedProjectImage,
} from "@/components/ui/PageTransition";
import { button, cardInteractive, chip } from "@/components/ui/styles";
import { getProject, projects } from "@/content/projects";
import { buildMetadata, projectJsonLd } from "@/lib/seo";

type Props = PageProps<"/projects/[slug]">;

/** Only the projects in src/content/projects.ts exist; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    type: "article",
  });
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const previous = projects[index - 1];
  const next = projects[index + 1];
  const { live, code, caseStudy } = project.links;
  const contain = project.imageFit === "contain";

  return (
    <PageTransition>
      <JsonLd data={projectJsonLd(project)} />

      <article>
        <Container width="prose">
          <nav aria-label="Breadcrumb" className="pt-8 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/projects"
                  className="transition-colors hover:text-ink"
                >
                  Projects
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {project.title}
              </li>
            </ol>
          </nav>

          <header className="animate-rise pt-10 pb-10">
            <span className={chip(project.track === "Cloud" ? "default" : "solid")}>
              {project.track} project
            </span>
            <h1 className="mt-5 text-title font-bold break-words text-ink">
              {project.title}
            </h1>
            <p className="mt-5 text-lead text-muted">{project.description}</p>
            {project.role && (
              <p className="mt-4 text-ink">
                <span className="font-semibold">My role: </span>
                {project.role}
              </p>
            )}
          </header>

          <SharedProjectImage slug={project.slug}>
            <div className="overflow-hidden rounded-2xl border border-line bg-paper">
              {project.image ? (
              <Image
                src={project.image}
                alt={project.imageAlt ?? project.title}
                preload
                placeholder="blur"
                sizes="(min-width: 896px) 832px, 100vw"
                className={`h-auto w-full ${contain ? "p-4 sm:p-8" : ""}`}
              />
            ) : (
              <div className="flex h-56 items-center justify-center bg-surface-raised">
                <CloudIcon aria-hidden="true" className="size-16 text-muted/60" />
              </div>
            )}
            </div>
          </SharedProjectImage>

          <div className="grid gap-10 py-12 md:grid-cols-3">
            <section aria-labelledby="highlights-title" className="md:col-span-2">
              <h2 id="highlights-title" className="text-2xl font-bold text-ink">
                Highlights
              </h2>
              <ul className="mt-5 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-muted">
                    <CheckIcon
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 text-link"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="stack-title">
              <h2 id="stack-title" className="text-2xl font-bold text-ink">
                Stack
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className={chip()}>
                    {tag}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="flex flex-wrap gap-3">
            {live && (
              <a href={live} {...external} className={button("primary")}>
                Visit live site
                <ArrowTopRightOnSquareIcon aria-hidden="true" className="size-5" />
              </a>
            )}
            {code && (
              <a href={code} {...external} className={button("secondary")}>
                <CodeBracketIcon aria-hidden="true" className="size-5" />
                View code
              </a>
            )}
            {caseStudy && (
              <a
                href={caseStudy}
                {...external}
                className={button(live ? "secondary" : "primary")}
              >
                <DocumentTextIcon aria-hidden="true" className="size-5" />
                Read case study
              </a>
            )}
            {!live && !code && !caseStudy && (
              <p className={`${chip("outline")} px-4 py-2 text-sm`}>
                Write-up coming soon
              </p>
            )}
          </div>

          <nav
            aria-label="More projects"
            className="mt-14 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
          >
            {previous ? (
              <Link
                href={`/projects/${previous.slug}`}
                className={`${cardInteractive} group p-5`}
              >
                <span className="flex items-center gap-2 text-sm text-muted">
                  <ArrowLeftIcon
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                  />
                  Previous project
                </span>
                <span className="mt-1 block font-semibold text-ink">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <span className="max-sm:hidden" />
            )}
            {next && (
              <Link
                href={`/projects/${next.slug}`}
                className={`${cardInteractive} group p-5 sm:text-right`}
              >
                <span className="flex items-center gap-2 text-sm text-muted sm:justify-end">
                  Next project
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
                <span className="mt-1 block font-semibold text-ink">
                  {next.title}
                </span>
              </Link>
            )}
          </nav>
        </Container>
      </article>

      <div className="mt-24">
        <ContactCta />
      </div>
    </PageTransition>
  );
}

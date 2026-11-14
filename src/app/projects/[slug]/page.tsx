import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  CloudIcon,
  CodeBracketIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/ui/JsonLd";
import { trackStyles } from "@/components/ui/ProjectCard";
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
  const style = trackStyles[project.track];
  const { live, code, caseStudy } = project.links;

  return (
    <article className="relative overflow-hidden">
      <JsonLd data={projectJsonLd(project)} />

      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto md:px-10 px-7 pt-32 pb-20">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-tertiary">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/#projects"
                className="hover:text-primary transition-colors"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-light">
              {project.title}
            </li>
          </ol>
        </nav>

        <header className="mb-10 animate-fade-up">
          <span
            className={`inline-block px-3 py-1 border text-xs font-semibold rounded-full mb-5 ${style.tag}`}
          >
            {project.track} project
          </span>
          <h1 className="text-light font-bold text-[clamp(1.75rem,8.5vw,2.25rem)] md:text-5xl leading-tight break-words mb-5">
            {project.title}
          </h1>
          <p className="text-tertiary text-lg leading-relaxed">
            {project.description}
          </p>
          {project.role && (
            <p className="text-light/90 mt-4">
              <span className="text-primary font-semibold">My role: </span>
              {project.role}
            </p>
          )}
        </header>

        <div className="rounded-2xl overflow-hidden border border-border-slate bg-dark-secondary mb-12">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.title}
              preload
              placeholder="blur"
              sizes="(min-width: 896px) 816px, 100vw"
              className="w-full h-auto"
            />
          ) : (
            <div className="h-56 flex items-center justify-center">
              <CloudIcon className="w-20 h-20 text-secondary/30" />
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <section aria-labelledby="highlights-title" className="md:col-span-2">
            <h2
              id="highlights-title"
              className="text-light font-bold text-2xl mb-5"
            >
              Highlights
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-tertiary leading-relaxed"
                >
                  <CheckCircleIcon className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="stack-title">
            <h2 id="stack-title" className="text-light font-bold text-2xl mb-5">
              Stack
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className={`px-3 py-1 border text-xs font-medium rounded-full ${style.tag}`}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="flex flex-wrap gap-3 mb-16">
          {live && (
            <a
              href={live}
              {...external}
              className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary to-primary-hover text-dark rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Visit Live Site</span>
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </a>
          )}
          {code && (
            <a
              href={code}
              {...external}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-border-slate text-light rounded-lg font-semibold hover:bg-white/10 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <CodeBracketIcon className="w-5 h-5" />
              <span>View Code</span>
            </a>
          )}
          {caseStudy && (
            <a
              href={caseStudy}
              {...external}
              className="flex items-center gap-2 px-6 py-3 bg-secondary/10 border border-secondary/30 text-secondary rounded-lg font-semibold hover:bg-secondary/20 hover:border-secondary/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <DocumentTextIcon className="w-5 h-5" />
              <span>Read Case Study</span>
            </a>
          )}
          {!live && !code && !caseStudy && (
            <p className="px-6 py-3 bg-dark-tertiary border border-border-slate text-tertiary rounded-lg font-medium">
              Write-up coming soon
            </p>
          )}
        </div>

        <nav
          aria-label="More projects"
          className="grid sm:grid-cols-2 gap-4 border-t border-border-slate pt-8 mb-12"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group p-5 bg-dark-secondary border border-border-slate rounded-xl hover:border-primary/40 transition-colors duration-300"
            >
              <span className="flex items-center gap-2 text-tertiary text-sm mb-1">
                <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Previous project
              </span>
              <span className="text-light font-semibold group-hover:text-primary transition-colors">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="group p-5 bg-dark-secondary border border-border-slate rounded-xl hover:border-primary/40 transition-colors duration-300 sm:text-right"
            >
              <span className="flex items-center gap-2 text-tertiary text-sm mb-1 sm:justify-end">
                Next project
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-light font-semibold group-hover:text-primary transition-colors">
                {next.title}
              </span>
            </Link>
          )}
        </nav>

        <div className="text-center bg-linear-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
          <h2 className="text-light font-bold text-2xl mb-3">
            Have a project — or a role — in mind?
          </h2>
          <p className="text-tertiary mb-6">Let&apos;s talk about it.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-primary to-secondary text-dark rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            Get in touch
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

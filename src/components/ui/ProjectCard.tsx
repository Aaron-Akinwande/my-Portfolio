import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CloudIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import type { Project, ProjectTrack } from "@/content/projects";

export const trackStyles: Record<
  ProjectTrack,
  { badge: string; tag: string }
> = {
  Frontend: {
    badge: "bg-primary/90",
    tag: "bg-primary/10 border-primary/20 text-primary",
  },
  Cloud: {
    badge: "bg-secondary/90",
    tag: "bg-secondary/10 border-secondary/20 text-secondary",
  },
};

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const style = trackStyles[project.track];
  const href = `/projects/${project.slug}`;
  const { code, live, caseStudy } = project.links;

  return (
    <article
      className="group relative bg-dark-secondary border border-border-slate rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-dark-tertiary">
        {project.image ? (
          <Link href={href} aria-label={`${project.title}: project details`}>
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.title}
              sizes="(min-width: 768px) 50vw, 100vw"
              placeholder="blur"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark-secondary via-dark-secondary/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                <EyeIcon className="w-8 h-8 text-dark" />
              </div>
            </div>
          </Link>
        ) : (
          <Link
            href={href}
            aria-label={`${project.title}: project details`}
            className="w-full h-full flex items-center justify-center"
          >
            <CloudIcon className="w-16 h-16 text-secondary/30" />
          </Link>
        )}

        <div
          className={`absolute top-4 right-4 px-3 py-1.5 backdrop-blur-xs rounded-full ${style.badge}`}
        >
          <span className="text-dark text-xs font-bold">{project.track}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-light font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
          <Link href={href}>{project.title}</Link>
        </h3>

        <p className="text-tertiary leading-relaxed mb-4 text-sm line-clamp-3">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className={`px-3 py-1 border text-xs font-medium rounded-full ${style.tag}`}
            >
              {tag}
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="group/more inline-flex items-center gap-1.5 text-sm font-semibold text-light hover:text-primary transition-colors duration-300 mb-5"
        >
          View project details
          <ArrowRightIcon className="w-4 h-4 group-hover/more:translate-x-1 transition-transform" />
        </Link>

        <div className="flex gap-3">
          {code && (
            <a
              href={code}
              {...external}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-primary to-primary-hover text-dark rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <CodeBracketIcon className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {live && (
            <a
              href={live}
              {...external}
              className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 backdrop-blur-xs border border-border-slate text-light rounded-lg font-semibold text-sm hover:bg-white/10 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Live Demo</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          )}
          {caseStudy && (
            <a
              href={caseStudy}
              {...external}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary/10 border border-secondary/30 text-secondary rounded-lg font-semibold text-sm hover:bg-secondary/20 hover:border-secondary/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <DocumentTextIcon className="w-4 h-4" />
              <span>Read Case Study</span>
            </a>
          )}
          {!code && !live && !caseStudy && (
            <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-dark-tertiary border border-border-slate text-tertiary rounded-lg font-medium text-sm">
              <span>Write-up Coming Soon</span>
            </div>
          )}
        </div>
      </div>

      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-linear-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
    </article>
  );
}

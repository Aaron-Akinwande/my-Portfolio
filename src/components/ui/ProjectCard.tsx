import { ArrowUpRightIcon, CloudIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import { SharedProjectImage } from "@/components/ui/PageTransition";
import { cardInteractive, chip } from "@/components/ui/styles";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  /** Larger type and a wider image, for the lead card in the featured grid. */
  size?: "default" | "large";
  /** `sizes` hint for the image; depends on the grid the card sits in. */
  sizes?: string;
  /** Preload the image when the card is above the fold. */
  preload?: boolean;
  /** Shape of the image frame. Defaults to a 16:10 box. */
  imageClassName?: string;
  className?: string;
};

/**
 * Image frame shared by cards and the project page. Diagrams sit whole on a
 * white backing so they read in both themes; screenshots fill the frame.
 */
export function ProjectImage({
  project,
  sizes,
  preload = false,
  className = "",
}: Pick<ProjectCardProps, "project" | "sizes" | "preload" | "className">) {
  if (!project.image) {
    return (
      <div
        className={`flex items-center justify-center bg-surface-raised ${className}`}
      >
        <CloudIcon aria-hidden="true" className="size-14 text-muted/60" />
      </div>
    );
  }

  const contain = project.imageFit === "contain";

  return (
    <SharedProjectImage slug={project.slug}>
      <div className={`relative overflow-hidden bg-paper ${className}`}>
        <Image
          src={project.image}
          alt={project.imageAlt ?? project.title}
          fill
          sizes={sizes}
          preload={preload}
          placeholder="blur"
          className={`transition-[scale] duration-500 ease-out group-hover:scale-[1.04] ${
            contain ? "object-contain p-3" : "object-cover object-top"
          }`}
        />
      </div>
    </SharedProjectImage>
  );
}

/** A whole-card link to a project page. */
export function ProjectCard({
  project,
  size = "default",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  preload = false,
  imageClassName = "aspect-[16/10]",
  className = "",
}: ProjectCardProps) {
  const large = size === "large";

  return (
    <article
      className={`${cardInteractive} group relative flex flex-col overflow-hidden ${className}`}
    >
      <ProjectImage
        project={project}
        sizes={sizes}
        preload={preload}
        className={`border-b border-line ${imageClassName}`}
      />

      <div className="flex flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className={chip(project.track === "Cloud" ? "default" : "solid")}>
            {project.track}
          </span>
          <ArrowUpRightIcon
            aria-hidden="true"
            className="size-5 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
          />
        </div>

        <h3
          className={`font-bold text-ink ${large ? "text-2xl sm:text-3xl" : "text-xl"}`}
        >
          {/* The link stretches over the whole card. */}
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {project.title}
          </Link>
        </h3>

        <p className={`text-muted ${large ? "text-base" : "line-clamp-3 text-sm"}`}>
          {project.summary}
        </p>

        <ul className="mt-1 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className={chip("outline")}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

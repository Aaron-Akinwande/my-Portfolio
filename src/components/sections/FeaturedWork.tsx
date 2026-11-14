import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { arrowLink } from "@/components/ui/styles";
import { featuredProjects } from "@/content/projects";

/** Column spans on the 12-column desktop grid: wide, narrow, narrow, wide. */
const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

const wide = "(min-width: 1024px) 660px, (min-width: 768px) 50vw, 100vw";
const narrow = "(min-width: 1024px) 470px, (min-width: 768px) 50vw, 100vw";

export function FeaturedWork() {
  return (
    <section
      id="projects"
      aria-labelledby="work-title"
      className="py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title="Projects I've shipped and deployed"
          lead="A mix of production front-end applications and hands-on AWS infrastructure builds."
          action={
            <Link href="/projects" className={arrowLink}>
              All projects
              <ArrowRightIcon
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          }
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              size={index === 0 ? "large" : "default"}
              sizes={spans[index].endsWith("7") ? wide : narrow}
              imageClassName="aspect-[16/10] lg:aspect-auto lg:h-72"
              className={`reveal ${spans[index]}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

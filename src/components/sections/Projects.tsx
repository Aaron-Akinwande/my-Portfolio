import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import { FilterTabs } from "@/components/ui/FilterTabs";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, projectTabs } from "@/content/projects";
import { site } from "@/content/site";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-dark relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto md:px-10 px-7 py-20 relative z-10">
        <SectionHeading
          id="projects-title"
          eyebrow="Portfolio"
          title="Featured Projects"
          lead="From production frontend applications to hands-on AWS infrastructure builds — here's a mix of what I've shipped and deployed."
          className="mb-10"
        />

        <FilterTabs
          label="Filter projects"
          layoutId="activeProjectTab"
          tabs={projectTabs}
          tabsClassName="flex flex-wrap gap-3 mb-10"
          panelClassName="grid grid-cols-1 md:grid-cols-2 gap-8"
          items={projects.map((project, index) => ({
            key: project.slug,
            track: project.track,
            node: <ProjectCard project={project} index={index} />,
          }))}
        />

        <Reveal delay={0.2} className="mt-12 text-center">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 backdrop-blur-xs border border-border-slate text-light rounded-lg font-medium hover:bg-white/10 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>View More Projects</span>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

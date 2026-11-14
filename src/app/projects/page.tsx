import { ContactCta } from "@/components/sections/ContactCta";
import { Container } from "@/components/ui/Container";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageTransition } from "@/components/ui/PageTransition";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PageHeader } from "@/components/ui/SectionHeading";
import { projects, projectTabs } from "@/content/projects";
import { buildMetadata, projectsJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Front-end and cloud projects by Aaron Akinwande-Ajose: production React and Next.js applications, plus AWS, Terraform and Kubernetes infrastructure builds.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageTransition>
      <JsonLd data={projectsJsonLd()} />

      <Container>
        <PageHeader
          eyebrow="Portfolio"
          title="Projects"
          lead="From production front-end applications to hands-on AWS infrastructure builds, here's a mix of what I've shipped and deployed."
        />

        <FilterTabs
          label="Filter projects"
          noun="projects"
          tabs={projectTabs}
          tabsClassName="mb-8 flex flex-wrap gap-2"
          panelClassName="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          items={projects.map((project, index) => ({
            key: project.slug,
            track: project.track,
            node: <ProjectCard project={project} preload={index < 3} />,
          }))}
        />
      </Container>

      <div className="mt-24">
        <ContactCta />
      </div>
    </PageTransition>
  );
}

import { notFound } from "next/navigation";

import { getProject, projects } from "@/content/projects";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Project by Aaron Akinwande-Ajose";
export const size = ogSize;
export const contentType = ogContentType;
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return renderOgImage({
    eyebrow: `${project.track} project`,
    title: project.title,
    subtitle: project.summary,
    tags: project.tags,
    accent: project.track === "Cloud" ? "secondary" : "primary",
  });
}

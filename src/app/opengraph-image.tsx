import { site } from "@/content/site";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = site.title;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Portfolio",
    title: "Front-End Developer & Growing Cloud Engineer",
    subtitle: "Fast, accessible interfaces and the infrastructure they run on. Lagos, Nigeria.",
    tags: ["React", "Next.js", "Tailwind CSS", "AWS", "Terraform"],
  });
}

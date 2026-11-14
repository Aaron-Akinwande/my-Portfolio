import { site } from "@/content/site";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Projects | " + site.name;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Portfolio",
    title: "Projects",
    subtitle: "Production front-end applications and hands-on AWS infrastructure builds.",
    tags: ["React", "Next.js", "AWS", "Terraform", "Kubernetes"],
  });
}

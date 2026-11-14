import { site } from "@/content/site";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "About Aaron | " + site.name;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "About",
    title: "About Aaron",
    subtitle: "First-class Computer Science graduate, front-end developer, KCNA certified. Lagos, Nigeria.",
    tags: ["3+ years", "React", "Next.js", "KCNA"],
  });
}

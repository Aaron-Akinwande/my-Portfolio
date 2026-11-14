import { site } from "@/content/site";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Let's work together | " + site.name;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "Let's work together",
    subtitle: "Open to front-end and cloud roles, and freelance projects.",
    tags: ["Full-time", "Freelance"],
  });
}

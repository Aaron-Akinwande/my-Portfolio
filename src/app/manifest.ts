import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0f1215",
    theme_color: "#0f1215",
    icons: [{ src: "/icon-512.png", sizes: "512x512", type: "image/png" }],
  };
}

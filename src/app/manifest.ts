import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { themeCanvas } from "@/lib/theme";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: themeCanvas.dark,
    theme_color: themeCanvas.dark,
    icons: [{ src: "/icon-512.png", sizes: "512x512", type: "image/png" }],
  };
}

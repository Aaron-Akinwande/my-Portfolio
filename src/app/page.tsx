import { ContactCta } from "@/components/sections/ContactCta";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Hero } from "@/components/sections/Hero";
import { LatestRoles } from "@/components/sections/LatestRoles";
import { SkillTicker } from "@/components/sections/SkillTicker";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageTransition } from "@/components/ui/PageTransition";
import { site } from "@/content/site";
import { buildMetadata, homeJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <PageTransition>
      <JsonLd data={homeJsonLd()} />
      <Hero />
      <SkillTicker />
      <FeaturedWork />
      <WhatIDo />
      <LatestRoles />
      <ContactCta />
    </PageTransition>
  );
}

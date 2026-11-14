import type { Metadata } from "next";

import portrait from "@/assets/aaron-akinwande-ajose.jpg";
import { projects } from "@/content/projects";
import type { Project } from "@/content/projects";
import { site, socials } from "@/content/site";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

type PageMeta = {
  /** Omit on the home page to use the site title as is. */
  title?: string;
  description: string;
  /** Path of the page, starting with "/". Becomes the canonical URL. */
  path: string;
  type?: "website" | "article" | "profile";
};

/** Title, description, canonical URL and social tags for one page. */
export function buildMetadata({
  title,
  description,
  path,
  type = "website",
}: PageMeta): Metadata {
  const socialTitle = title ? `${title} | ${site.name}` : site.title;

  return {
    title: title ?? { absolute: site.title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      locale: "en_NG",
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

type Crumb = { name: string; path: string };

function breadcrumbs(trail: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      }),
    ),
  };
}

const graph = (...nodes: Record<string, unknown>[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});

/** Each page is read on its own, so pages that describe Aaron carry the full node. */
function person() {
  return {
    "@type": "Person",
    "@id": personId,
    name: site.name,
    alternateName: [site.fullName, site.displayName, "Aaron Akinwande"],
    givenName: site.givenName,
    familyName: site.familyName,
    url: siteUrl,
    image: absoluteUrl(portrait.src),
    jobTitle: site.jobTitle,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressCountry: site.location.countryCode,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: site.education,
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: site.certification.name,
      recognizedBy: {
        "@type": "Organization",
        name: site.certification.issuer,
      },
    },
    knowsAbout: [...site.knowsAbout],
    sameAs: socials
      .filter((social) => social.id !== "email")
      .map((social) => social.url),
  };
}

const personRef = { "@id": personId };

const website = () => ({
  "@type": "WebSite",
  "@id": websiteId,
  url: siteUrl,
  name: site.name,
  description: site.description,
  inLanguage: "en",
  publisher: personRef,
});

/** Home: the site and the person behind it. */
export const homeJsonLd = () => graph(website(), person());

/** About: a profile page whose main entity is the person. */
export const aboutJsonLd = () =>
  graph(
    {
      "@type": "ProfilePage",
      "@id": `${absoluteUrl("/about")}#profile`,
      url: absoluteUrl("/about"),
      name: `About ${site.name}`,
      isPartOf: { "@id": websiteId },
      about: personRef,
      mainEntity: personRef,
    },
    person(),
    breadcrumbs([{ name: "About", path: "/about" }]),
  );

/** Projects index: a collection listing every project page. */
export const projectsJsonLd = () =>
  graph(
    {
      "@type": "CollectionPage",
      "@id": `${absoluteUrl("/projects")}#collection`,
      url: absoluteUrl("/projects"),
      name: `Projects by ${site.name}`,
      isPartOf: { "@id": websiteId },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: absoluteUrl(`/projects/${project.slug}`),
        })),
      },
    },
    breadcrumbs([{ name: "Projects", path: "/projects" }]),
  );

export const contactJsonLd = () =>
  graph(
    {
      "@type": "ContactPage",
      "@id": `${absoluteUrl("/contact")}#contact`,
      url: absoluteUrl("/contact"),
      name: `Contact ${site.name}`,
      isPartOf: { "@id": websiteId },
      about: personRef,
    },
    breadcrumbs([{ name: "Contact", path: "/contact" }]),
  );

export function projectJsonLd(project: Project) {
  const path = `/projects/${project.slug}`;
  const url = absoluteUrl(path);
  const links = [
    project.links.live,
    project.links.code,
    project.links.caseStudy,
  ].filter(Boolean);

  return graph(
    {
      "@type": "CreativeWork",
      "@id": `${url}#project`,
      url,
      name: project.title,
      description: project.summary,
      keywords: project.tags.join(", "),
      inLanguage: "en",
      isPartOf: { "@id": websiteId },
      creator: {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: siteUrl,
      },
      ...(project.image && { image: absoluteUrl(project.image.src) }),
      ...(links.length > 0 && { sameAs: links }),
    },
    breadcrumbs([
      { name: "Projects", path: "/projects" },
      { name: project.title, path },
    ]),
  );
}

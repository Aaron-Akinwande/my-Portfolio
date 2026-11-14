import type { Metadata } from "next";

import portrait from "@/assets/aaron-akinwande-ajose.jpg";
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
  type?: "website" | "article";
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

/** WebSite, ProfilePage and Person for the home page. */
export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: site.name,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: site.title,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
      },
      {
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
      },
    ],
  };
}

/** CreativeWork and BreadcrumbList for a project page. */
export function projectJsonLd(project: Project) {
  const url = absoluteUrl(`/projects/${project.slug}`);
  const links = [
    project.links.live,
    project.links.code,
    project.links.caseStudy,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
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
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: absoluteUrl("/#projects"),
          },
          { "@type": "ListItem", position: 3, name: project.title, item: url },
        ],
      },
    ],
  };
}

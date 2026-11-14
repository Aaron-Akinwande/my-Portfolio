import { ClockIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

import { ContactForm } from "@/components/ui/ContactForm";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { LocalTime } from "@/components/ui/LocalTime";
import { PageTransition } from "@/components/ui/PageTransition";
import { PageHeader } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { card, chip } from "@/components/ui/styles";
import { site, socials } from "@/content/site";
import { buildMetadata, contactJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Aaron Akinwande-Ajose about front-end or cloud roles and freelance projects, by email, contact form or social profiles.",
  path: "/contact",
});

const profiles = socials.filter((social) => social.id !== "email");

export default function ContactPage() {
  return (
    <PageTransition>
      <JsonLd data={contactJsonLd()} />

      <Container>
        <PageHeader
          eyebrow="Contact"
          title="Let's work together"
          lead="Have a project or a role in mind? Send a message and I'll get back to you as soon as I can."
        >
          <p className={`${chip()} mt-6`}>
            <span aria-hidden="true" className="size-2 rounded-full bg-success" />
            {site.availability}
          </p>
        </PageHeader>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:items-start">
          <div className="space-y-6">
            <dl className={`${card} divide-y divide-line`}>
              <div className="flex gap-3 p-5">
                <EnvelopeIcon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-link" />
                <div className="min-w-0">
                  <dt className="text-sm text-muted">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-block py-0.5 font-medium break-all text-ink transition-colors hover:text-link"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3 p-5">
                <MapPinIcon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-link" />
                <div>
                  <dt className="text-sm text-muted">Location</dt>
                  <dd className="font-medium text-ink">
                    {site.location.city}, {site.location.country}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3 p-5">
                <ClockIcon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-link" />
                <div>
                  <dt className="text-sm text-muted">My local time</dt>
                  <dd>
                    <LocalTime className="font-medium text-ink" />
                  </dd>
                </div>
              </div>
            </dl>

            <section aria-labelledby="profiles-title" className={`${card} p-5`}>
              <h2
                id="profiles-title"
                className="font-sans text-sm font-semibold text-ink"
              >
                Elsewhere
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {profiles.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="flex min-h-11 items-center gap-3 rounded-xl border border-line bg-canvas px-3.5 font-medium text-ink transition-colors duration-200 hover:border-line-strong"
                    >
                      <SocialIcon id={social.id} className="text-lg text-link" />
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section aria-labelledby="form-title" className={`${card} p-6 sm:p-8`}>
            <h2 id="form-title" className="text-2xl font-bold text-ink">
              Send me a message
            </h2>
            <p className="mt-2 mb-6 text-muted">
              Tell me a little about what you need.
            </p>
            <ContactForm fallbackEmail={site.email} />
          </section>
        </div>
      </Container>
    </PageTransition>
  );
}

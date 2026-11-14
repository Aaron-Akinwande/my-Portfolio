import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  ArrowRightIcon,
  MapPinIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import portrait from "@/assets/aaron-akinwande-ajose.jpg";
import { ContactCta } from "@/components/sections/ContactCta";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageTransition } from "@/components/ui/PageTransition";
import { PageHeader, SectionHeading } from "@/components/ui/SectionHeading";
import { button, card, chip } from "@/components/ui/styles";
import { experiences } from "@/content/experience";
import { site } from "@/content/site";
import { skillGroups } from "@/content/skills";
import { aboutJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "About Aaron Akinwande-Ajose, a first-class Computer Science graduate and KCNA-certified front-end developer in Lagos, Nigeria with 3+ years in React.",
  path: "/about",
  type: "profile",
});

const trackLabel = {
  Frontend: "Frontend",
  Cloud: "Cloud",
  Shared: "Tooling",
} as const;

const details = [
  {
    Icon: AcademicCapIcon,
    label: "Education",
    value: `First-class degree in Computer Science, ${site.education}`,
  },
  {
    Icon: ShieldCheckIcon,
    label: "Certification",
    value: `${site.certification.name}, ${site.certification.issuer}`,
  },
  {
    Icon: MapPinIcon,
    label: "Location",
    value: `${site.location.city}, ${site.location.country}`,
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <JsonLd data={aboutJsonLd()} />

      <Container>
        <PageHeader
          eyebrow="About"
          title="About me"
          lead={`Hi, I'm ${site.fullName}, a front-end developer with over 3 years of hands-on experience building responsive, high-performance web applications.`}
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I build fast, accessible interfaces with React.js, Next.js and
              Tailwind CSS — and I&apos;m learning to run the infrastructure
              they live on.
            </p>
            <p>
              Alongside shipping production frontend work, I&apos;ve been
              deliberately building toward Cloud and DevOps engineering: earning
              a Kubernetes and Cloud Native Associate certification and getting
              hands-on with AWS, Terraform, Linux, and Nginx.
            </p>
            <p>
              My approach combines strategic performance optimization with
              systems-level thinking — I&apos;ve worked within microfrontend
              architectures and large, distributed codebases, which has
              naturally pulled my curiosity toward how applications are
              deployed, scaled, and kept running.
            </p>
            <p>
              I&apos;m a first-class graduate in Computer Science from Lagos
              State University, where I built a strong foundation in algorithms,
              data structures, and software engineering principles.
            </p>

            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href={site.cvUrl}
                download="Aaron_Akinwande_CV"
                rel="noopener noreferrer"
                className={button("primary")}
              >
                <ArrowDownTrayIcon aria-hidden="true" className="size-5" />
                Download CV
              </a>
              <Link href="/contact" className={button("secondary")}>
                Get in touch
                <ArrowRightIcon aria-hidden="true" className="size-5" />
              </Link>
            </div>
          </div>

          <aside className="space-y-5">
            <Image
              src={portrait}
              alt={`Portrait of ${site.name}`}
              placeholder="blur"
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 384px, 90vw"
              className="aspect-[4/5] w-full max-w-sm rounded-3xl border border-line object-cover"
            />
            <dl className={`${card} max-w-sm divide-y divide-line`}>
              {details.map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-3 p-4">
                  <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-link" />
                  <div>
                    <dt className="text-sm text-muted">{label}</dt>
                    <dd className="font-medium text-ink">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <section id="skills" aria-labelledby="skills-title" className="pt-24">
          <SectionHeading
            id="skills-title"
            eyebrow="Skills"
            title="Skills and tools"
            lead="A front-end skill set, backed by growing cloud and infrastructure expertise."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.category} className={`${card} reveal p-6`}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-ink">{group.category}</h3>
                  <span className={chip("outline")}>{trackLabel[group.track]}</span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map(({ name, description, Icon }) => (
                    <li
                      key={name}
                      title={description}
                      className={`${chip()} bg-canvas px-3.5 py-1.5 text-sm`}
                    >
                      <Icon aria-hidden="true" className="size-4" />
                      {name}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-title"
          className="pt-24"
        >
          <SectionHeading
            id="experience-title"
            eyebrow="Career path"
            title="Work experience"
            lead="Three years of shipping production frontend work, with a track record of taking on distributed, large-scale systems."
          />
          <ol className="border-t border-line">
            {experiences.map((role) => (
              <li
                key={role.company}
                className="reveal grid gap-4 border-b border-line py-8 md:grid-cols-[13rem_1fr] md:gap-8"
              >
                <p className="text-sm text-muted">
                  <span className="font-medium text-ink">{role.dates}</span>
                  <br />
                  {role.location}
                </p>
                <div>
                  <h3 className="text-xl font-bold text-ink">{role.role}</h3>
                  <p className="mt-1 font-medium text-link">{role.company}</p>
                  <ul className="mt-4 space-y-2">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-muted">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-line-strong"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {role.systemsTag && (
                      <li className={chip("solid")}>{role.systemsTag}</li>
                    )}
                    {role.stack.map((tech) => (
                      <li key={tech} className={chip("outline")}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Container>

      <div className="mt-24">
        <ContactCta />
      </div>
    </PageTransition>
  );
}

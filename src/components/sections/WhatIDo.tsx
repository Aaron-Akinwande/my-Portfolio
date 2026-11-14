import {
  ArrowRightIcon,
  CloudIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { arrowLink, chip } from "@/components/ui/styles";
import { skillGroups } from "@/content/skills";

const [frontendGroup, cloudGroup] = skillGroups;

const tracks = [
  {
    title: "Front-end development",
    Icon: CodeBracketIcon,
    body: "Responsive, high-performance web applications with React.js, Next.js and Tailwind CSS, built to be accessible and easy to maintain.",
    skills: frontendGroup.items.slice(0, 6),
  },
  {
    title: "Cloud and DevOps",
    Icon: CloudIcon,
    body: "Hands-on with AWS, Terraform, Linux and Nginx, backed by a Kubernetes and Cloud Native Associate certification.",
    skills: cloudGroup.items.slice(0, 6),
  },
];

export function WhatIDo() {
  return (
    <section
      aria-labelledby="what-title"
      className="relative isolate border-y border-line bg-surface py-16 sm:py-24"
    >
      <div aria-hidden="true" className="dots fade-edges absolute inset-0 -z-10" />
      <Container>
        <SectionHeading
          id="what-title"
          eyebrow="What I do"
          title="Front-end first, with growing cloud skills"
          lead="A front-end skill set, backed by growing cloud and infrastructure expertise."
          action={
            <Link href="/about#skills" className={arrowLink}>
              All skills
              <ArrowRightIcon
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          {tracks.map(({ title, Icon, body, skills }) => (
            <article
              key={title}
              className="group reveal rounded-2xl border border-line bg-canvas p-6 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-card sm:p-8"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-surface-raised text-ink transition-[rotate,background-color,color] duration-300 group-hover:-rotate-6 group-hover:bg-accent group-hover:text-on-accent">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-muted">{body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {skills.map(({ name, Icon: SkillIcon }) => (
                  <li key={name} className={chip()}>
                    <SkillIcon aria-hidden="true" className="size-3.5" />
                    {name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

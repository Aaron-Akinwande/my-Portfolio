import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { arrowLink } from "@/components/ui/styles";
import { experiences } from "@/content/experience";

const latest = experiences.slice(0, 2);

export function LatestRoles() {
  return (
    <section aria-labelledby="roles-title" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="roles-title"
          eyebrow="Experience"
          title="Where I've worked lately"
          action={
            <Link href="/about#experience" className={arrowLink}>
              Full experience
              <ArrowRightIcon
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          }
        />

        <ol className="divide-y divide-line border-y border-line">
          {latest.map((role) => (
            <li
              key={role.company}
              className="reveal grid gap-2 py-7 sm:grid-cols-[1fr_auto] sm:gap-8"
            >
              <div>
                <h3 className="text-xl font-bold text-ink">{role.role}</h3>
                <p className="mt-1 font-medium text-link">{role.company}</p>
                <p className="mt-3 max-w-2xl text-muted">{role.bullets[0]}</p>
              </div>
              <p className="text-sm text-muted sm:text-right">
                {role.dates}
                <br />
                {role.location}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

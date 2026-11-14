import { ArrowUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { navigation, site, socials } from "@/content/site";

/** Set at build time in next.config.ts, so the footer stays fully static. */
const year = process.env.NEXT_PUBLIC_BUILD_YEAR;

const footerLink =
  "inline-block py-1 text-muted transition-colors duration-200 hover:text-ink";

const iconButton =
  "flex size-11 items-center justify-center rounded-xl border border-line text-muted transition-colors duration-200 hover:border-line-strong hover:text-ink";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-bold text-ink">
              {site.name}
            </p>
            <p className="mt-3 max-w-sm text-muted">
              Front-end developer building fast, accessible interfaces, and
              growing into the cloud infrastructure that runs them.
            </p>
          </div>

          <nav aria-labelledby="footer-pages">
            <h2
              id="footer-pages"
              className="font-sans text-sm font-semibold text-ink"
            >
              Pages
            </h2>
            <ul className="mt-3 space-y-1">
              <li>
                <Link href="/" className={footerLink}>
                  Home
                </Link>
              </li>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLink}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-sm font-semibold text-ink">
              Get in touch
            </h2>
            <div className="mt-3 space-y-1">
              <a
                href={`mailto:${site.email}`}
                className={`${footerLink} break-all`}
              >
                {site.email}
              </a>
              <p className="py-1 text-muted">
                {site.location.city}, {site.location.country}
              </p>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={social.name}
                    className={iconButton}
                  >
                    <SocialIcon id={social.id} className="text-lg" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-center text-sm text-muted sm:text-left">
            © {year} {site.name}. Built with Next.js and Tailwind CSS.
          </p>
          <a href="#top" aria-label="Back to top" className={iconButton}>
            <ArrowUpIcon aria-hidden="true" className="size-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}

import { ArrowUpIcon } from "@heroicons/react/24/outline";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLink } from "@/components/ui/SectionLink";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { sections, site, socials } from "@/content/site";

const quickLinks = sections.filter((section) => section.id !== "contact");

/** Set at build time in next.config.ts, so the footer stays fully static. */
const year = process.env.NEXT_PUBLIC_BUILD_YEAR;

export function Footer() {

  return (
    <footer className="bg-dark border-t border-border-slate relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto md:px-10 px-7 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-dark font-bold text-xl">A</span>
              </div>
              <span className="text-light font-bold text-2xl">
                {site.shortName}
                <span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-tertiary leading-relaxed mb-4">
              Frontend Developer building fast, accessible interfaces — and
              growing into the cloud infrastructure that runs them.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium">
                Frontend Developer
              </span>
              <span className="px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-medium">
                Growing Cloud Engineer
              </span>
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal delay={0.1}>
            <nav aria-labelledby="footer-links">
              <h2
                id="footer-links"
                className="text-light font-semibold text-lg mb-4"
              >
                Quick Links
              </h2>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <SectionLink
                      section={link.id}
                      className="text-tertiary hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </SectionLink>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.2}>
            <h2 className="text-light font-semibold text-lg mb-4">
              Get in Touch
            </h2>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${site.email}`}
                className="text-tertiary hover:text-primary transition-colors duration-300 block break-all"
              >
                {site.email}
              </a>
              <p className="text-tertiary">
                {site.location.city}, {site.location.country}
              </p>
            </div>

            <ul className="flex gap-3 flex-wrap">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={social.name}
                    className="w-10 h-10 bg-white/5 backdrop-blur-xs border border-border-slate rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <SocialIcon
                      id={social.id}
                      className="text-tertiary group-hover:text-primary text-lg transition-colors"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="h-px bg-linear-to-r from-transparent via-border-slate to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-tertiary text-sm text-center md:text-left">
            © {year} {site.displayName}. All rights reserved.
          </p>

          <p className="text-tertiary/60 text-sm">
            Built with Next.js & Tailwind CSS
          </p>

          <a
            href="#top"
            aria-label="Scroll to top"
            className="group w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            <ArrowUpIcon className="w-5 h-5 text-dark group-hover:animate-bounce" />
          </a>
        </div>
      </div>
    </footer>
  );
}

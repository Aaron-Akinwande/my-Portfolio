import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { site, socials } from "@/content/site";

const contactSocials = socials.filter((social) =>
  ["facebook", "instagram", "email", "linkedin"].includes(social.id),
);

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-dark relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto md:px-10 px-7 py-20 relative z-10">
        <SectionHeading
          id="contact-title"
          eyebrow="Get In Touch"
          title="Let's Work Together"
          lead="Have a project — or a role — in mind? Let's talk about it."
          align="center"
          className="mb-16"
        />

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <Reveal x={-30} y={0} duration={0.7} className="lg:w-2/5">
            <div className="bg-linear-to-br from-dark-secondary to-dark-tertiary border border-border-slate rounded-2xl p-8 mb-8">
              <h3 className="text-light font-bold text-2xl mb-4">
                Connect with me
              </h3>
              <p className="text-tertiary leading-relaxed mb-8">
                I&apos;m always excited to discuss new projects, frontend or
                cloud opportunities, or ideas worth building. Let&apos;s talk.
              </p>

              <p className="text-tertiary text-sm font-semibold uppercase tracking-wider mb-4">
                Follow Me
              </p>
              <ul className="flex flex-wrap gap-3 sm:gap-4">
                {contactSocials.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer me"
                      aria-label={social.name}
                      className="group relative w-12 h-12 bg-white/5 backdrop-blur-xs border border-border-slate rounded-xl flex items-center justify-center hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                    >
                      <SocialIcon
                        id={social.id}
                        className="text-primary text-2xl group-hover:scale-110 transition-transform"
                      />
                      <span className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="bg-linear-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-5">
                <p className="text-tertiary text-sm mb-1">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-light font-semibold hover:text-primary transition-colors break-all"
                >
                  {site.email}
                </a>
              </div>
              <div className="bg-linear-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-5">
                <p className="text-tertiary text-sm mb-1">Location</p>
                <p className="text-light font-semibold">
                  {site.location.city}, {site.location.country}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal x={30} y={0} duration={0.7} className="lg:w-3/5">
            <div className="bg-linear-to-br from-dark-secondary to-dark-tertiary border border-border-slate rounded-2xl p-8">
              <h3 className="text-light font-bold text-2xl mb-2">
                Send me a message
              </h3>
              <p className="text-tertiary mb-8">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible
              </p>

              <ContactForm fallbackEmail={site.email} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

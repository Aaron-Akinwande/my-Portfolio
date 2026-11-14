import {
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/content/experience";
import type { ExperienceTrack } from "@/content/experience";

const trackStyles: Record<ExperienceTrack, { badge: string; dot: string }> = {
  Frontend: {
    badge: "bg-primary/10 text-primary border-primary/30",
    dot: "bg-primary",
  },
  Cloud: {
    badge: "bg-secondary/10 text-secondary border-secondary/30",
    dot: "bg-secondary",
  },
  Both: {
    badge:
      "bg-linear-to-r from-primary/10 to-secondary/10 text-light border-primary/30",
    dot: "bg-linear-to-r from-primary to-secondary",
  },
};

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="bg-dark relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto md:px-10 px-7 py-20">
        <SectionHeading
          id="experience-title"
          eyebrow="Career Path"
          title="Work Experience"
          lead="Three years of shipping production frontend work — with a track record of taking on distributed, large-scale systems."
          className="mb-16"
        />

        <div className="relative">
          <div className="absolute left-[15px] md:left-1/2 top-2 bottom-2 w-px bg-border-slate md:-translate-x-1/2" />

          <ol className="space-y-10">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const style = trackStyles[exp.track];

              return (
                <li key={exp.company}>
                  <Reveal
                    y={30}
                    delay={index * 0.1}
                    className={`relative flex flex-col items-start gap-6 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`absolute left-0 md:left-1/2 top-2 w-[31px] h-[31px] md:-translate-x-1/2 rounded-full ${style.dot} flex items-center justify-center ring-4 ring-dark z-10`}
                    >
                      <BriefcaseIcon className="w-4 h-4 text-dark" />
                    </div>

                    <div className="hidden md:block md:w-1/2" />

                    <div className="pl-14 md:pl-0 md:w-1/2">
                      <article
                        className={`group bg-dark-secondary border border-border-slate rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 ${
                          isEven ? "md:mr-8" : "md:ml-8"
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold border ${style.badge}`}
                          >
                            {exp.track}
                          </span>
                          {exp.systemsTag && (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-secondary/10 text-secondary border-secondary/30">
                              {exp.systemsTag}
                            </span>
                          )}
                        </div>

                        <h3 className="text-light font-bold text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-semibold mb-3">
                          {exp.company}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-tertiary text-sm mb-4">
                          <div className="flex items-center gap-1.5">
                            <CalendarIcon className="w-4 h-4" />
                            <span>{exp.dates}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPinIcon className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {exp.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="text-tertiary text-sm leading-relaxed flex items-start gap-2"
                            >
                              <span
                                aria-hidden="true"
                                className="text-primary mt-1.5 shrink-0"
                              >
                                ▹
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <ul className="flex flex-wrap gap-2">
                          {exp.stack.map((tech) => (
                            <li
                              key={tech}
                              className="px-2.5 py-1 bg-dark-tertiary border border-border-slate text-tertiary text-xs rounded-md"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const experiences = [
  {
    company: "Peerless",
    role: "Frontend Web Developer",
    location: "Lagos, Nigeria",
    dates: "Apr 2026 – Jul 2026",
    track: "Frontend",
    systemsTag: "Distributed Systems",
    bullets: [
      "Built and maintained UI for Mizan, a Shariah-compliant core banking platform serving institutions across West/East Africa and the Middle East.",
      "Built and scaled features within a microfrontend architecture, enabling independent module development across a large, distributed codebase.",
      "Integrated RESTful APIs across multiple modules to support real-time banking data flows.",
    ],
    stack: ["React.js", "Microfrontends", "REST APIs", "Unit Testing"],
  },
  {
    company: "NGBookings.com Limited",
    role: "Frontend Web Developer",
    location: "Lagos, Nigeria",
    dates: "Jun 2025 – Mar 2026",
    track: "Frontend",
    systemsTag: "Distributed Systems",
    bullets: [
      "Developed user-facing features across four platforms — Guest, Travel Agent, Partners, and Admin — using Next.js.",
      "Collaborated with backend engineers to integrate RESTful APIs, ensuring consistency across a large, cross-functional team.",
      "Implemented responsive, accessible, performance-driven UI components across evolving product requirements.",
    ],
    stack: ["Next.js", "SEO", "REST APIs", "Agile/Scrum"],
  },
  {
    company: "Zenon",
    role: "Frontend Web Developer (Contract)",
    location: "Lagos, Nigeria",
    dates: "Jun 2025 – Oct 2025",
    track: "Frontend",
    bullets: [
      "Developed and enhanced an e-commerce platform connecting dealers with customers via an integrated rider network.",
      "Implemented site-wide state management with Redux, promoting data consistency across React components.",
      "Refactored the customer module's frontend interface to align with updated UI/UX specifications.",
    ],
    stack: ["React.js", "Redux", "Tailwind CSS", "Git"],
  },
  {
    company: "PureJim Ltd",
    role: "Junior Frontend Developer",
    location: "Lagos, Nigeria",
    dates: "Sep 2023 – Jan 2025",
    track: "Frontend",
    bullets: [
      "Developed and maintained responsive web applications using React.js, Next.js, and Tailwind CSS.",
      "Optimized web applications for maximum speed and scalability.",
      "Integrated RESTful APIs for dynamic data rendering, improving user interaction by 30% through consistent cross-platform performance.",
    ],
    stack: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    company: "Darey.IO",
    role: "Frontend Developer Intern",
    location: "Lagos, Nigeria",
    dates: "Aug 2023 – Dec 2023",
    track: "Frontend",
    bullets: [
      "Assisted senior developers in adding features and fixing bugs on the website.",
      "Mentored by senior developers, accelerating skill development in React.js and Angular through hands-on projects.",
    ],
    stack: ["React.js", "Angular"],
  },
];

const trackStyles = {
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
      "bg-gradient-to-r from-primary/10 to-secondary/10 text-light border-primary/30",
    dot: "bg-gradient-to-r from-primary to-secondary",
  },
};

const Experience = () => {
  return (
    <div
      className="md:px-10 px-7 py-20 bg-dark relative overflow-hidden"
      id="experience"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Career Path
            </span>
          </div>
          <h1 className="text-light font-bold text-4xl md:text-5xl mb-4">
            Work Experience
          </h1>
          <p className="text-tertiary text-lg md:w-2/3 leading-relaxed">
            Three years of shipping production frontend work — with a track
            record of taking on distributed, large-scale systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] md:left-1/2 top-2 bottom-2 w-px bg-border-slate md:-translate-x-1/2"></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const style = trackStyles[exp.track as keyof typeof trackStyles];

              return (
                <motion.div
                  key={exp.company}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 md:left-1/2 top-2 w-[31px] h-[31px] md:-translate-x-1/2 rounded-full ${style.dot} flex items-center justify-center ring-4 ring-dark z-10`}
                  >
                    <BriefcaseIcon className="w-4 h-4 text-dark" />
                  </div>

                  {/* Spacer for desktop alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Card */}
                  <div className="pl-14 md:pl-0 md:w-1/2">
                    <div
                      className={`group bg-dark-secondary border border-border-slate rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 ${
                        isEven ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      {/* Badges */}
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

                      {/* Role & Company */}
                      <h3 className="text-light font-bold text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold mb-3">
                        {exp.company}
                      </p>

                      {/* Meta */}
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

                      {/* Bullets */}
                      <ul className="space-y-2 mb-4">
                        {exp.bullets.map((bullet, bIndex) => (
                          <li
                            key={bIndex}
                            className="text-tertiary text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5 flex-shrink-0">
                              ▹
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-dark-tertiary border border-border-slate text-tertiary text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

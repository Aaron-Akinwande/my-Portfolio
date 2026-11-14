import {
  AcademicCapIcon,
  BriefcaseIcon,
  CloudIcon,
  CodeBracketIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site, stats } from "@/content/site";

const [projectsStat, yearsStat, satisfactionStat] = stats;

const aboutStats = [
  { ...yearsStat, Icon: BriefcaseIcon },
  { ...projectsStat, Icon: CodeBracketIcon },
  { ...satisfactionStat, Icon: SparklesIcon },
];

const strengths = [
  { label: "Clean Code", value: "100%" },
  { label: "Responsive", value: "100%" },
  { label: "Performance", value: "95%" },
  { label: "Accessibility", value: "98%" },
];

const frontend = "text-primary font-semibold";
const cloud = "text-secondary font-semibold";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-dark relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto md:px-10 px-7 pt-20 pb-10 relative z-10">
        <SectionHeading id="about-title" eyebrow="Get to know me" title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <Reveal x={-30} y={0} delay={0.2} duration={0.7} className="space-y-6">
            <div className="bg-linear-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 backdrop-blur-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <AcademicCapIcon className="w-7 h-7 text-dark" />
                </div>
                <div>
                  <h3 className="text-light font-semibold text-lg mb-2">
                    Educational Background
                  </h3>
                  <p className="text-tertiary leading-relaxed">
                    First-class graduate in Computer Science from Lagos State
                    University, where I built a strong foundation in algorithms,
                    data structures, and software engineering principles — later
                    reinforced by a Kubernetes and Cloud Native Associate
                    certification from the Linux Foundation.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-light font-semibold text-xl">My Journey</h3>
              <p className="text-tertiary leading-relaxed">
                Hi, I&apos;m{" "}
                <span className="text-light font-semibold">{site.fullName}</span>
                , a Frontend Developer with over 3 years of hands-on experience
                building responsive, high-performance web applications with{" "}
                <span className={frontend}>React.js</span>,{" "}
                <span className={frontend}>Next.js</span>, and{" "}
                <span className={frontend}>Tailwind CSS</span>.
              </p>
              <p className="text-tertiary leading-relaxed">
                I build fast, accessible interfaces — and I&apos;m learning to
                run the infrastructure they live on. Alongside shipping
                production frontend work, I&apos;ve been deliberately building
                toward Cloud and DevOps engineering: earning a{" "}
                <span className={cloud}>
                  Kubernetes and Cloud Native Associate
                </span>{" "}
                certification and getting hands-on with{" "}
                <span className={cloud}>AWS</span>,{" "}
                <span className={cloud}>Terraform</span>,{" "}
                <span className={cloud}>Linux</span>, and{" "}
                <span className={cloud}>Nginx</span>.
              </p>
              <p className="text-tertiary leading-relaxed">
                My approach combines strategic performance optimization with
                systems-level thinking — I&apos;ve worked within microfrontend
                architectures and large, distributed codebases, which has
                naturally pulled my curiosity toward how applications are
                deployed, scaled, and kept running.
              </p>
            </div>
          </Reveal>

          {/* Highlights */}
          <Reveal x={30} y={0} delay={0.3} duration={0.7} className="space-y-6">
            <div className="relative bg-linear-to-br from-dark-secondary to-dark-tertiary border border-primary/20 rounded-2xl p-8 overflow-hidden group hover:border-primary/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-6xl md:text-7xl font-extrabold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    3+
                  </div>
                  <div className="h-16 w-1 bg-linear-to-b from-primary to-secondary rounded-full" />
                  <div>
                    <p className="text-light font-semibold text-lg">Years of</p>
                    <p className="text-tertiary">Experience</p>
                  </div>
                </div>
                <p className="text-tertiary leading-relaxed">
                  Translating complex requirements into clean, maintainable code
                  — with a growing focus on the infrastructure that supports it.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-secondary border border-primary/20 rounded-xl p-4 hover:border-primary/40 transition-colors duration-300">
                <CodeBracketIcon className="w-6 h-6 text-primary mb-2" />
                <div className="text-light font-semibold text-sm mb-1">
                  Frontend
                </div>
                <div className="text-tertiary text-xs">
                  React, Next.js, Tailwind
                </div>
              </div>
              <div className="bg-dark-secondary border border-secondary/20 rounded-xl p-4 hover:border-secondary/40 transition-colors duration-300">
                <CloudIcon className="w-6 h-6 text-secondary mb-2" />
                <div className="text-light font-semibold text-sm mb-1">
                  Cloud & DevOps
                </div>
                <div className="text-tertiary text-xs">
                  AWS, Docker, Terraform
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {strengths.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={0.4 + index * 0.1}
                  duration={0.5}
                  className="bg-dark-secondary border border-border-slate rounded-xl p-4 hover:border-primary/40 transition-colors duration-300"
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {item.value}
                  </div>
                  <div className="text-tertiary text-sm">{item.label}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          {aboutStats.map(({ value, longLabel, Icon }, index) => (
            <Reveal
              key={longLabel}
              delay={0.2 + index * 0.1}
              duration={0.5}
              className="relative bg-linear-to-br from-dark-secondary to-dark-tertiary border border-border-slate rounded-2xl p-6 group hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-light mb-1">{value}</div>
                  <div className="text-tertiary text-sm">{longLabel}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

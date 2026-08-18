import React from "react";
import Services from "./Services";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  SparklesIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience", icon: BriefcaseIcon },
    { number: "20+", label: "Projects Completed", icon: CodeBracketIcon },
    { number: "100%", label: "Client Satisfaction", icon: SparklesIcon },
  ];

  return (
    <div
      className="md:px-10 px-7 py-20 bg-dark relative overflow-hidden"
      id="about"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Get to know me
            </span>
          </div>
          <h1 className="text-light font-bold text-4xl md:text-5xl">
            About Me
          </h1>
        </motion.div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
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
                Hi, I'm{" "}
                <span className="text-light font-semibold">
                  Akinwande-Ajose Aaron Olayinka
                </span>
                , a Frontend Developer with over 3 years of hands-on experience
                building responsive, high-performance web applications with{" "}
                <span className="text-primary font-semibold">React.js</span>,{" "}
                <span className="text-primary font-semibold">Next.js</span>, and{" "}
                <span className="text-primary font-semibold">Tailwind CSS</span>
                .
              </p>
              <p className="text-tertiary leading-relaxed">
                I build fast, accessible interfaces — and I'm learning to run
                the infrastructure they live on. Alongside shipping production
                frontend work, I've been deliberately building toward Cloud and
                DevOps engineering: earning a{" "}
                <span className="text-secondary font-semibold">
                  Kubernetes and Cloud Native Associate
                </span>{" "}
                certification and getting hands-on with{" "}
                <span className="text-secondary font-semibold">AWS</span>,{" "}
                <span className="text-secondary font-semibold">Terraform</span>,{" "}
                <span className="text-secondary font-semibold">Linux</span>, and{" "}
                <span className="text-secondary font-semibold">Nginx</span>.
              </p>
              <p className="text-tertiary leading-relaxed">
                My approach combines strategic performance optimization with
                systems-level thinking — I've worked within microfrontend
                architectures and large, distributed codebases, which has
                naturally pulled my curiosity toward how applications are
                deployed, scaled, and kept running.
              </p>
            </div>
          </motion.div>

          {/* Right column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="space-y-6"
          >
            {/* Experience highlight */}
            <div className="relative bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-primary/20 rounded-2xl p-8 overflow-hidden group hover:border-primary/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    3+
                  </div>
                  <div className="h-16 w-1 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
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

            {/* Dual-track focus card */}
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

            {/* Core strengths */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Clean Code", value: "100%" },
                { label: "Responsive", value: "100%" },
                { label: "Performance", value: "95%" },
                { label: "Accessibility", value: "98%" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="bg-dark-secondary border border-border-slate rounded-xl p-4 hover:border-primary/40 transition-colors duration-300"
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {item.value}
                  </div>
                  <div className="text-tertiary text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="relative bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-border-slate rounded-2xl p-6 group hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-light mb-1">
                    {stat.number}
                  </div>
                  <div className="text-tertiary text-sm">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <Services />
        </motion.div>
      </div>
    </div>
  );
};

export default About;

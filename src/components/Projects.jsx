import React from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

const Projects = () => {
  const projects = [
    {
      title: "Exodus Consulting Limited",
      description:
        "EXODUS is a strategy and people advisory firm operating at the intersection of strategy, systems, and execution.",
      photo: "/exodus.png",
      git: "https://github.com/Aaron-Akinwande/exodus-consulting",
      url: "https://www.exodusconsults.com/",
      tags: ["Next.js", "Consulting", "SEO Optimized"],
    },
    {
      title: "419Watch",
      description:
        "A full-stack credit card fraud detection system built with FastAPI and Next.js that uses a Random Forest machine learning model to analyse single and batch transactions with real-time fraud insights and dashboard analytics.",
      photo: "/fraudwatch.png",
      git: "https://github.com/Aaron-Akinwande/fraud-detection",
      url: "https://419-watch.vercel.app/",
      tags: ["Next.js", "FastAPI", "Machine Learning", "Fraud Detection"],
    },
    {
      title: "Zenon",
      description:
        "A technology solutions platform that provides custom software development, expert consulting, and innovative digital solutions to help businesses adapt and grow.",
      photo: "/zenon.png",
      git: "https://github.com/zenon-systems/zenon-web-app",
      url: "https://zenon.systems/",
      tags: ["React", "API", "Responsive"],
    },
    {
      title: "EasySCH",
      description:
        "A school management website that allows administrators and teachers to perform their duties effectively.",
      photo: "/sms-dash.jpg",
      git: "https://github.com/Community-With-No-Name/sms",
      url: "https://www.easysch.com/best-college/login",
      tags: ["Dashboard", "Admin Panel", "Management"],
    },
  ];

  return (
    <div
      className="md:px-10 px-7 py-20 bg-[#0a0a12] relative overflow-hidden"
      id="projects"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

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
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Portfolio
            </span>
          </div>
          <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">
            Featured Projects
          </h1>
          <p className="text-gray-400 text-lg md:w-2/3 leading-relaxed">
            I have worked on many projects over the course of being a Web
            Developer. Here are a few of my live, real-world projects that
            showcase my skills and expertise.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <a href={project.url} target="_blank" rel="noreferrer">
                  <img
                    src={project.photo}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1e] via-[#0f0f1e]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* View icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <EyeIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </a>

                {/* Featured badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full">
                  <span className="text-white text-xs font-semibold">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 hover:border-primary/50 transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>Live Demo</span>
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* View more section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="https://github.com/Aaron-Akinwande"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 hover:border-primary/50 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>View More Projects</span>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

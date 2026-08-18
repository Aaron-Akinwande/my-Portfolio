import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EyeIcon,
  DocumentTextIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

const projects = [
  // ---------- CLOUD PROJECTS ----------
  {
    title: "Secure Web App Deployment on AWS",
    description:
      "Designed and deployed a secure multi-tier AWS architecture using a bastion host, private EC2 instances, and an Application Load Balancer. Automated server provisioning with Ansible and enforced least-privilege security groups.",
    photo: "/devProj1.png",
    track: "Cloud",
    caseStudy:
      "https://medium.com/@aaronakinwande/building-a-secure-highly-available-aws-web-infrastructure-with-bastion-ansible-and-load-58bb3812c729",
    tags: ["AWS", "Ansible", "Bastion Host", "Load Balancer"],
  },
  {
    title: "Terraform Cloud Infrastructure Deployment",
    description:
      "Provisioned a custom multi-AZ VPC architecture with Infrastructure as Code, deploying Bastion, Web, and Database EC2 instances via Terraform with automated Apache and PostgreSQL configuration.",
    photo: "/devProj2.png",
    track: "Cloud",
    caseStudy:
      "https://medium.com/@aaronakinwande/building-a-secure-highly-available-aws-infrastructure-with-terraform-from-scratch-07afafa250b4",
    tags: ["Terraform", "AWS", "VPC", "IaC"],
  },
  {
    title: "Project Bedrock — EKS Microservices",
    description:
      "Production-grade EKS deployment with pod-level security groups, IAM-mapped RBAC access, full-stack observability via CloudWatch, an event-driven Lambda pipeline, and a GitHub Actions CI/CD workflow for Terraform.",
    // photo: "/eks-bedrock.png",
    track: "Cloud",
    tags: ["EKS", "Kubernetes", "Lambda", "CI/CD", "Terraform"],
  },

  // ---------- FRONTEND ----------
  {
    title: "419Watch — Fraud Detection System",
    description:
      "A full-stack credit card fraud detection system built with FastAPI and Next.js that uses a Random Forest machine learning model to analyze single and batch transactions with real-time fraud insights.",
    photo: "/fraudwatch.png",
    track: "Frontend",
    git: "https://github.com/Aaron-Akinwande/fraud-detection",
    url: "https://419-watch.vercel.app/",
    tags: ["Next.js", "FastAPI", "Machine Learning"],
  },

  {
    title: "NGBookings.com",
    description:
      "A multi-platform travel booking web app serving Guest, Travel Agent, Partner, and Admin users, built with Next.js for fast, SEO-optimized experiences with reservation management and analytics dashboards.",
    photo: "/ngb.png",
    track: "Frontend",
    url: "https://ngbookings.com/",
    tags: ["Next.js", "Travel", "SEO Optimized"],
  },
  {
    title: "Exodus Consulting Limited",
    description:
      "A strategy and people advisory firm's web presence, built at the intersection of strategy, systems, and execution.",
    photo: "/exodus.png",
    track: "Frontend",
    git: "https://github.com/Aaron-Akinwande/exodus-consulting",
    url: "https://www.exodusconsults.com/",
    tags: ["Next.js", "SEO Optimized"],
  },
  {
    title: "Zenon",
    description:
      "A technology solutions platform providing custom software development, expert consulting, and digital solutions to help businesses adapt and grow.",
    photo: "/zenon.png",
    track: "Frontend",
    git: "https://github.com/zenon-systems/zenon-web-app",
    url: "https://zenon.systems/",
    tags: ["React", "API", "Responsive"],
  },
  {
    title: "Herald — API Testing Tool",
    description:
      "A browser-based API testing tool inspired by Postman. Supports HTTP method selection, dynamic headers, JSON body editing, response viewing, request history, collections, and environment variables.",
    photo: "/Herald.png",
    track: "Frontend",
    git: "https://github.com/Aaron-Akinwande/Herald",
    url: "https://herald-sage.vercel.app/",
    tags: ["React", "Developer Tool"],
  },
  {
    title: "EasySCH",
    description:
      "A school management website that allows administrators and teachers to perform their duties effectively.",
    photo: "/sms-dash.jpg",
    track: "Frontend",
    git: "https://github.com/Community-With-No-Name/sms",
    url: "https://www.easysch.com/best-college/login",
    tags: ["Dashboard", "Admin Panel"],
  },
];

const tabs = ["All", "Frontend", "Cloud"];

const trackStyles = {
  Frontend: {
    badge: "bg-primary/90",
    tagText: "text-primary",
    tagBorder: "border-primary/20",
    tagBg: "bg-primary/10",
  },
  Cloud: {
    badge: "bg-secondary/90",
    tagText: "text-secondary",
    tagBorder: "border-secondary/20",
    tagBg: "bg-secondary/10",
  },
  // "Full-stack": {
  //   badge: "bg-gradient-to-r from-primary to-secondary",
  //   tagText: "text-light",
  //   tagBorder: "border-border-slate",
  //   tagBg: "bg-dark-tertiary",
  // },
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.track === activeTab);

  return (
    <div
      className="md:px-10 px-7 py-20 bg-dark relative overflow-hidden"
      id="projects"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Portfolio
            </span>
          </div>
          <h1 className="text-light font-bold text-4xl md:text-5xl mb-4">
            Featured Projects
          </h1>
          <p className="text-tertiary text-lg md:w-2/3 leading-relaxed">
            From production frontend applications to hands-on AWS infrastructure
            builds — here's a mix of what I've shipped and deployed.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  isActive
                    ? "text-dark border-transparent"
                    : "text-tertiary border-border-slate hover:text-light hover:border-primary/40"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeProjectTab"
                    className={`absolute inset-0 rounded-full ${
                      tab === "Cloud"
                        ? "bg-gradient-to-r from-secondary to-secondary-hover"
                        : tab === "Frontend"
                          ? "bg-gradient-to-r from-primary to-primary-hover"
                          : "bg-gradient-to-r from-primary to-secondary"
                    }`}
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => {
              const style = trackStyles[project.track];
              const hasImage = !!project.photo;

              return (
                <motion.div
                  key={project.title}
                  className="group relative bg-dark-secondary border border-border-slate rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {/* Image container */}
                  <div className="relative h-56 overflow-hidden bg-dark-tertiary">
                    {hasImage ? (
                      <a
                        href={project.url || project.caseStudy || "#"}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={project.photo}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-dark-secondary/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                            <EyeIcon className="w-8 h-8 text-dark" />
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <CloudIcon className="w-16 h-16 text-secondary/30" />
                      </div>
                    )}

                    {/* Track badge */}
                    <div
                      className={`absolute top-4 right-4 px-3 py-1.5 backdrop-blur-sm rounded-full ${style.badge}`}
                    >
                      <span className="text-dark text-xs font-bold">
                        {project.track}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-light font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-tertiary leading-relaxed mb-4 text-sm line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 border text-xs font-medium rounded-full ${style.tagBg} ${style.tagBorder} ${style.tagText}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      {project.git && (
                        <a
                          href={project.git}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary-hover text-dark rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                          <CodeBracketIcon className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 backdrop-blur-sm border border-border-slate text-light rounded-lg font-semibold text-sm hover:bg-white/10 hover:border-primary/50 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                          <span>Live Demo</span>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                      {project.caseStudy && (
                        <a
                          href={project.caseStudy}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary/10 border border-secondary/30 text-secondary rounded-lg font-semibold text-sm hover:bg-secondary/20 hover:border-secondary/50 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                          <DocumentTextIcon className="w-4 h-4" />
                          <span>Read Case Study</span>
                        </a>
                      )}
                      {!project.git && !project.url && !project.caseStudy && (
                        <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-dark-tertiary border border-border-slate text-tertiary rounded-lg font-medium text-sm">
                          <span>Write-up Coming Soon</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* View more section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="https://github.com/Aaron-Akinwande"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 backdrop-blur-sm border border-border-slate text-light rounded-lg font-medium hover:bg-white/10 hover:border-primary/50 transform hover:-translate-y-0.5 transition-all duration-300"
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

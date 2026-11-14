import type { StaticImageData } from "next/image";

import watch419 from "@/assets/projects/419watch.png";
import awsSecureDeployment from "@/assets/projects/aws-secure-deployment.png";
import easysch from "@/assets/projects/easysch.jpg";
import exodusConsulting from "@/assets/projects/exodus-consulting.png";
import herald from "@/assets/projects/herald.png";
import ngbookings from "@/assets/projects/ngbookings.jpg";
import terraformInfrastructure from "@/assets/projects/terraform-infrastructure.png";
import zenon from "@/assets/projects/zenon.jpg";

export type ProjectTrack = "Frontend" | "Cloud";

export type Project = {
  slug: string;
  title: string;
  track: ProjectTrack;
  /** Card copy and the opening paragraph of the project page. */
  description: string;
  /** One sentence for the meta description and social card. */
  summary: string;
  /** Optional line about my part in the work. */
  role?: string;
  highlights: string[];
  tags: string[];
  image?: StaticImageData;
  imageAlt?: string;
  /** "contain" keeps a diagram whole on a white card; screenshots default to "cover". */
  imageFit?: "cover" | "contain";
  /** Shown in the featured grid on the home page. */
  featured?: boolean;
  links: {
    live?: string;
    code?: string;
    caseStudy?: string;
  };
};

export const projectTabs = [
  { id: "All", label: "All" },
  { id: "Frontend", label: "Frontend" },
  { id: "Cloud", label: "Cloud" },
];

export const projects: Project[] = [
  // ---------- Cloud ----------
  {
    slug: "secure-web-app-deployment-aws",
    featured: true,
    title: "Secure Web App Deployment on AWS",
    track: "Cloud",
    description:
      "Designed and deployed a secure multi-tier AWS architecture using a bastion host, private EC2 instances, and an Application Load Balancer. Automated server provisioning with Ansible and enforced least-privilege security groups.",
    summary:
      "A secure, multi-tier AWS architecture with a bastion host, private EC2 web servers and an Application Load Balancer, provisioned with Ansible.",
    highlights: [
      "Web servers run on private EC2 instances that are only reachable through a bastion host.",
      "An Application Load Balancer sits in front of the private instances and handles incoming traffic.",
      "Server provisioning is automated with Ansible instead of manual setup.",
      "Security groups follow least privilege between each tier.",
    ],
    tags: ["AWS", "Ansible", "Bastion Host", "Load Balancer"],
    image: awsSecureDeployment,
    imageFit: "contain",
    imageAlt:
      "Architecture diagram of a VPC with a bastion host and Application Load Balancer in public subnets and two NGINX web servers in private subnets across two availability zones",
    links: {
      caseStudy:
        "https://medium.com/@aaronakinwande/building-a-secure-highly-available-aws-web-infrastructure-with-bastion-ansible-and-load-58bb3812c729",
    },
  },
  {
    slug: "terraform-cloud-infrastructure",
    title: "Terraform Cloud Infrastructure Deployment",
    track: "Cloud",
    description:
      "Provisioned a custom multi-AZ VPC architecture with Infrastructure as Code, deploying Bastion, Web, and Database EC2 instances via Terraform with automated Apache and PostgreSQL configuration.",
    summary:
      "A multi-AZ AWS VPC with bastion, web and database EC2 instances, defined in Terraform with automated Apache and PostgreSQL setup.",
    highlights: [
      "A custom VPC spread across multiple availability zones, defined entirely as code.",
      "Separate bastion, web and database EC2 instances deployed through Terraform.",
      "Apache and PostgreSQL are installed and configured automatically during provisioning.",
    ],
    tags: ["Terraform", "AWS", "VPC", "IaC"],
    image: terraformInfrastructure,
    imageFit: "contain",
    imageAlt:
      "Architecture diagram of a VPC with an Application Load Balancer, bastion host and NAT gateways above two Apache web servers and a PostgreSQL database server",
    links: {
      caseStudy:
        "https://medium.com/@aaronakinwande/building-a-secure-highly-available-aws-infrastructure-with-terraform-from-scratch-07afafa250b4",
    },
  },
  {
    slug: "project-bedrock-eks-microservices",
    title: "Project Bedrock — EKS Microservices",
    track: "Cloud",
    description:
      "Production-grade EKS deployment with pod-level security groups, IAM-mapped RBAC access, full-stack observability via CloudWatch, an event-driven Lambda pipeline, and a GitHub Actions CI/CD workflow for Terraform.",
    summary:
      "A production-grade Amazon EKS microservices deployment with pod-level security groups, IAM-mapped RBAC, CloudWatch observability and Terraform CI/CD.",
    highlights: [
      "An Amazon EKS cluster with security groups applied at pod level.",
      "Kubernetes RBAC access mapped to IAM identities.",
      "Observability across the stack through CloudWatch.",
      "An event-driven pipeline built on Lambda.",
      "A GitHub Actions workflow that runs the Terraform changes.",
    ],
    tags: ["EKS", "Kubernetes", "Lambda", "CI/CD", "Terraform"],
    links: {},
  },

  // ---------- Frontend ----------
  {
    slug: "419watch-fraud-detection",
    featured: true,
    title: "419Watch — Fraud Detection System",
    track: "Frontend",
    description:
      "A full-stack credit card fraud detection system built with FastAPI and Next.js that uses a Random Forest machine learning model to analyze single and batch transactions with real-time fraud insights.",
    summary:
      "A full-stack credit card fraud detection app built with Next.js and FastAPI, using a Random Forest model to analyse single and batch transactions.",
    highlights: [
      "A Next.js front end working with a FastAPI back end.",
      "A Random Forest model analyses transactions one at a time or in batches.",
      "Results are presented as real-time fraud insights.",
    ],
    tags: ["Next.js", "FastAPI", "Machine Learning"],
    image: watch419,
    imageAlt: "Screenshot of the 419Watch fraud detection web app",
    links: {
      code: "https://github.com/Aaron-Akinwande/fraud-detection",
      live: "https://419-watch.vercel.app/",
    },
  },
  {
    slug: "ngbookings",
    featured: true,
    title: "NGBookings.com",
    track: "Frontend",
    description:
      "A multi-platform travel booking web app serving Guest, Travel Agent, Partner, and Admin users, built with Next.js for fast, SEO-optimized experiences with reservation management and analytics dashboards.",
    summary:
      "A multi-platform travel booking web app for guests, travel agents, partners and admins, built with Next.js for fast, SEO-optimised pages.",
    role: "Frontend Web Developer at NGBookings.com Limited, Jun 2025 to Mar 2026.",
    highlights: [
      "User-facing features across four platforms: Guest, Travel Agent, Partners and Admin.",
      "RESTful API integration alongside the back-end engineers.",
      "Responsive, accessible UI components, with reservation management and analytics dashboards.",
    ],
    tags: ["Next.js", "Travel", "SEO Optimized"],
    image: ngbookings,
    imageAlt: "Screenshot of the NGBookings.com travel booking website",
    links: {
      live: "https://ngbookings.com/",
    },
  },
  {
    slug: "exodus-consulting",
    title: "Exodus Consulting Limited",
    track: "Frontend",
    description:
      "A strategy and people advisory firm's web presence, built at the intersection of strategy, systems, and execution.",
    summary:
      "The website for Exodus Consulting Limited, a strategy and people advisory firm, built with Next.js and optimised for search.",
    highlights: [
      "A marketing site for a strategy and people advisory firm.",
      "Built with Next.js and optimised for search engines.",
    ],
    tags: ["Next.js", "SEO Optimized"],
    image: exodusConsulting,
    imageAlt: "Screenshot of the Exodus Consulting Limited website",
    links: {
      code: "https://github.com/Aaron-Akinwande/exodus-consulting",
      live: "https://www.exodusconsults.com/",
    },
  },
  {
    slug: "zenon",
    title: "Zenon",
    track: "Frontend",
    description:
      "A technology solutions platform providing custom software development, expert consulting, and digital solutions to help businesses adapt and grow.",
    summary:
      "The web app for Zenon, a technology solutions company offering custom software development, consulting and digital solutions.",
    highlights: [
      "A React front end for a technology solutions company.",
      "Connected to the platform's API.",
      "Responsive across phone, tablet and desktop.",
    ],
    tags: ["React", "API", "Responsive"],
    image: zenon,
    imageAlt: "Screenshot of the Zenon website",
    links: {
      code: "https://github.com/zenon-systems/zenon-web-app",
      live: "https://zenon.systems/",
    },
  },
  {
    slug: "herald-api-testing-tool",
    featured: true,
    title: "Herald — API Testing Tool",
    track: "Frontend",
    description:
      "A browser-based API testing tool inspired by Postman. Supports HTTP method selection, dynamic headers, JSON body editing, response viewing, request history, collections, and environment variables.",
    summary:
      "A browser-based API testing tool inspired by Postman, with request history, collections and environment variables, built with React.",
    highlights: [
      "Choose the HTTP method, add headers dynamically and edit a JSON body.",
      "View the response in the browser.",
      "Request history, saved collections and environment variables.",
    ],
    tags: ["React", "Developer Tool"],
    image: herald,
    imageAlt: "Screenshot of the Herald API testing tool",
    links: {
      code: "https://github.com/Aaron-Akinwande/Herald",
      live: "https://herald-sage.vercel.app/",
    },
  },
  {
    slug: "easysch",
    title: "EasySCH",
    track: "Frontend",
    description:
      "A school management website that allows administrators and teachers to perform their duties effectively.",
    summary:
      "A school management web app with dashboards that help administrators and teachers carry out their day-to-day work.",
    highlights: [
      "A web app for school administrators and teachers.",
      "Dashboard and admin panel views.",
    ],
    tags: ["Dashboard", "Admin Panel"],
    image: easysch,
    imageAlt: "Screenshot of the EasySCH school management dashboard",
    links: {
      code: "https://github.com/Community-With-No-Name/sms",
      live: "https://www.easysch.com/best-college/login",
    },
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

/** Home page order: the first one gets the large card. */
const featuredOrder = [
  "ngbookings",
  "secure-web-app-deployment-aws",
  "419watch-fraud-detection",
  "herald-api-testing-tool",
];

export const featuredProjects = featuredOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project?.featured));

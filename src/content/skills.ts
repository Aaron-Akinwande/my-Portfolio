import type { IconType } from "react-icons";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaLinux,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import { HiServer } from "react-icons/hi";
import { MdBackup, MdDns, MdSecurity } from "react-icons/md";
import {
  SiEslint,
  SiKubernetes,
  SiNextdotjs,
  SiNginx,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import {
  TbChartBar,
  TbCloudComputing,
  TbNetwork,
  TbShieldLock,
} from "react-icons/tb";

export type SkillTrack = "Frontend" | "Cloud" | "Shared";

export type Skill = {
  name: string;
  description: string;
  Icon: IconType;
};

export type SkillGroup = {
  category: string;
  track: SkillTrack;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend Development",
    track: "Frontend",
    items: [
      { name: "React.js", description: "Building dynamic, component-based user interfaces", Icon: FaReact },
      { name: "Next.js", description: "Server-side rendering and static site generation", Icon: SiNextdotjs },
      { name: "Tailwind CSS", description: "Utility-first CSS for rapid UI development", Icon: SiTailwindcss },
      { name: "JavaScript", description: "Modern ES6+ JavaScript development", Icon: FaJsSquare },
      { name: "TypeScript", description: "Type-safe JavaScript for scalable applications", Icon: SiTypescript },
      { name: "HTML5", description: "Semantic and accessible markup", Icon: FaHtml5 },
      { name: "CSS3", description: "Advanced styling and animations", Icon: FaCss3Alt },
      { name: "Redux", description: "State management for complex applications", Icon: SiRedux },
    ],
  },
  {
    category: "Cloud & DevOps",
    track: "Cloud",
    items: [
      { name: "AWS", description: "Cloud infrastructure and serverless solutions", Icon: FaAws },
      { name: "Docker", description: "Containerization and microservices deployment", Icon: FaDocker },
      { name: "Linux", description: "System administration and server management", Icon: FaLinux },
      { name: "Kubernetes", description: "Container orchestration and scaling", Icon: SiKubernetes },
      { name: "CI/CD", description: "Automated testing and deployment pipelines", Icon: TbCloudComputing },
      { name: "Terraform", description: "Infrastructure as code provisioning", Icon: SiTerraform },
      { name: "Nginx", description: "Web server and reverse proxy configuration", Icon: SiNginx },
      { name: "Git", description: "Version control and collaboration", Icon: FaGitAlt },
    ],
  },
  {
    category: "Network & Security",
    track: "Cloud",
    items: [
      { name: "Network Config", description: "Network architecture and configuration", Icon: TbNetwork },
      { name: "VPC Setup", description: "Virtual private cloud design and implementation", Icon: HiServer },
      { name: "Load Balancing", description: "Traffic distribution and high availability", Icon: TbChartBar },
      { name: "SSL/TLS", description: "Certificate management and secure connections", Icon: TbShieldLock },
      { name: "Firewall", description: "Security groups and network access control", Icon: MdSecurity },
      { name: "DNS", description: "Domain management and routing configuration", Icon: MdDns },
      { name: "Monitoring", description: "CloudWatch, Prometheus, and alerting systems", Icon: TbChartBar },
      { name: "Backup & Recovery", description: "Data protection and disaster recovery strategies", Icon: MdBackup },
    ],
  },
  {
    category: "Development Tools",
    track: "Shared",
    items: [
      { name: "Postman", description: "API testing and development", Icon: SiPostman },
      { name: "GitHub", description: "Code repository and collaboration platform", Icon: FaGithub },
      { name: "Figma", description: "UI/UX design and prototyping", Icon: FaFigma },
      { name: "npm/yarn", description: "Package management for Node.js", Icon: FaNpm },
      { name: "Webpack", description: "Module bundling and optimization", Icon: SiWebpack },
      { name: "ESLint", description: "Code quality and linting", Icon: SiEslint },
    ],
  },
];

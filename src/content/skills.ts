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
  color: string;
};

export type SkillGroup = {
  category: string;
  track: SkillTrack;
  items: Skill[];
};

export const skillTabs = [
  { id: "All", label: "All Skills", accent: "from-primary to-secondary" },
  { id: "Frontend", label: "Frontend", accent: "from-primary to-primary-hover" },
  { id: "Cloud", label: "Cloud & DevOps", accent: "from-secondary to-secondary-hover" },
  { id: "Shared", label: "Tooling", accent: "from-tertiary to-light" },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend Development",
    track: "Frontend",
    items: [
      { name: "React.js", description: "Building dynamic, component-based user interfaces", Icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", description: "Server-side rendering and static site generation", Icon: SiNextdotjs, color: "#f1f5f9" },
      { name: "Tailwind CSS", description: "Utility-first CSS for rapid UI development", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", description: "Modern ES6+ JavaScript development", Icon: FaJsSquare, color: "#F7DF1E" },
      { name: "TypeScript", description: "Type-safe JavaScript for scalable applications", Icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", description: "Semantic and accessible markup", Icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", description: "Advanced styling and animations", Icon: FaCss3Alt, color: "#1572B6" },
      { name: "Redux", description: "State management for complex applications", Icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    category: "Cloud & DevOps",
    track: "Cloud",
    items: [
      { name: "AWS", description: "Cloud infrastructure and serverless solutions", Icon: FaAws, color: "#FF9900" },
      { name: "Docker", description: "Containerization and microservices deployment", Icon: FaDocker, color: "#2496ED" },
      { name: "Linux", description: "System administration and server management", Icon: FaLinux, color: "#FCC624" },
      { name: "Kubernetes", description: "Container orchestration and scaling", Icon: SiKubernetes, color: "#326CE5" },
      { name: "CI/CD", description: "Automated testing and deployment pipelines", Icon: TbCloudComputing, color: "#2dd4bf" },
      { name: "Terraform", description: "Infrastructure as code provisioning", Icon: SiTerraform, color: "#7B42BC" },
      { name: "Nginx", description: "Web server and reverse proxy configuration", Icon: SiNginx, color: "#009639" },
      { name: "Git", description: "Version control and collaboration", Icon: FaGitAlt, color: "#F05032" },
    ],
  },
  {
    category: "Network & Security",
    track: "Cloud",
    items: [
      { name: "Network Config", description: "Network architecture and configuration", Icon: TbNetwork, color: "#2dd4bf" },
      { name: "VPC Setup", description: "Virtual private cloud design and implementation", Icon: HiServer, color: "#5eead4" },
      { name: "Load Balancing", description: "Traffic distribution and high availability", Icon: TbChartBar, color: "#10B981" },
      { name: "SSL/TLS", description: "Certificate management and secure connections", Icon: TbShieldLock, color: "#f59e0b" },
      { name: "Firewall", description: "Security groups and network access control", Icon: MdSecurity, color: "#EF4444" },
      { name: "DNS", description: "Domain management and routing configuration", Icon: MdDns, color: "#3B82F6" },
      { name: "Monitoring", description: "CloudWatch, Prometheus, and alerting systems", Icon: TbChartBar, color: "#14B8A6" },
      { name: "Backup & Recovery", description: "Data protection and disaster recovery strategies", Icon: MdBackup, color: "#a78bfa" },
    ],
  },
  {
    category: "Development Tools",
    track: "Shared",
    items: [
      { name: "Postman", description: "API testing and development", Icon: SiPostman, color: "#FF6C37" },
      { name: "GitHub", description: "Code repository and collaboration platform", Icon: FaGithub, color: "#f1f5f9" },
      { name: "Figma", description: "UI/UX design and prototyping", Icon: FaFigma, color: "#F24E1E" },
      { name: "npm/yarn", description: "Package management for Node.js", Icon: FaNpm, color: "#CB3837" },
      { name: "Webpack", description: "Module bundling and optimization", Icon: SiWebpack, color: "#8DD6F9" },
      { name: "ESLint", description: "Code quality and linting", Icon: SiEslint, color: "#4B32C3" },
    ],
  },
];

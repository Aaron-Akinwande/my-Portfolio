export type ExperienceTrack = "Frontend" | "Cloud" | "Both";

export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  track: ExperienceTrack;
  systemsTag?: string;
  bullets: string[];
  stack: string[];
};

export const experiences: Experience[] = [
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

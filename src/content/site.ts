export type SocialId = "linkedin" | "github" | "medium" | "instagram" | "facebook" | "email";

export type Social = {
  id: SocialId;
  name: string;
  url: string;
};

export const site = {
  /** Name used in titles, metadata and structured data. */
  name: "Aaron Akinwande-Ajose",
  /** Name as shown in the hero and footer. */
  displayName: "Akinwande-Ajose Aaron",
  fullName: "Akinwande-Ajose Aaron Olayinka",
  givenName: "Aaron",
  familyName: "Akinwande-Ajose",
  shortName: "Aaron",
  jobTitle: "Front-End Developer",
  title: "Aaron Akinwande-Ajose | Front-End Developer in Lagos, Nigeria",
  description:
    "Aaron Akinwande-Ajose is a front-end developer in Lagos, Nigeria building fast, accessible React and Next.js interfaces, with growing AWS and DevOps skills.",
  tagline:
    "I build fast, accessible interfaces — and I'm learning to run the infrastructure they live on.",
  availability: "Available for Full-time and Freelance",
  email: "aaronakinwande@gmail.com",
  location: { city: "Lagos", country: "Nigeria", countryCode: "NG" },
  cvUrl:
    "https://drive.google.com/uc?export=download&id=1tFP4fV2pp4YyeZIrYgoBNPfOaFoWs9kE",
  githubUrl: "https://github.com/Aaron-Akinwande",
  googleVerification: "oASNw5scgUKNmoXQBGkuN_nbsKWCNMb3OEVJProVkFs",
  education: "Lagos State University",
  certification: {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "The Linux Foundation",
  },
  knowsAbout: [
    "Front-end development",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web accessibility",
    "Web performance",
    "Amazon Web Services",
    "Terraform",
    "Kubernetes",
    "Docker",
    "DevOps",
  ],
} as const;

export const roles = [
  { text: "Front-End Developer", track: "Frontend" },
  { text: "Growing Cloud Engineer", track: "Cloud" },
] as const;

export const stats = [
  { value: "20+", label: "Projects Done", longLabel: "Projects Completed" },
  { value: "3+", label: "Years Experience", longLabel: "Years Experience" },
  { value: "100%", label: "Client Satisfaction", longLabel: "Client Satisfaction" },
] as const;

export const socials: Social[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aaron-akinwande-ajose-720b18288",
  },
  { id: "github", name: "GitHub", url: "https://github.com/Aaron-Akinwande" },
  { id: "medium", name: "Medium", url: "https://medium.com/@aaronakinwande" },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/aaron_akinwande/",
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://web.facebook.com/aaron.akinwande/",
  },
  { id: "email", name: "Email", url: "mailto:aaronakinwande@gmail.com" },
];

/** Sections of the home page, in the order they appear. */
export const sections = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "services", name: "Services" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

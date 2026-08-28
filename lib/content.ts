export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "HTML", "CSS", "YAML"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "FastAPI",
      "Spring Boot",
      "Tailwind CSS",
      "Chakra UI",
      "NextAuth",
      "Bootstrap",
      "Ant Design",
      "Sass",
      "Resend",
      "Pydantic",
      "Pytest",
      "Jest",
      "React Testing Library",
      "EJS",
      "jQuery",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Mongoose", "SQL", "NoSQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Vercel", "Databricks"],
  },
  {
    title: "Tools & IDEs",
    skills: ["Git", "GitHub", "GitLab", "VS Code", "PyCharm", "Figma", "Jira", "Postman", "Jupyter Notebook"],
  },
  {
    title: "Practices",
    skills: [
      "Agile",
      "RESTful API Design",
      "Authentication & Authorization",
      "Observability",
      "Test-Driven Development",
      "Clean Architecture",
      "Performance Tuning",
      "Scalability",
    ],
  },
];

export const allSkills: string[] = Array.from(
  new Set(skillGroups.flatMap((group) => group.skills))
);

export type ExperienceRole = {
  title: string;
  company: string;
  timeframe: string;
  highlights: string[];
};

export const experience: ExperienceRole[] = [
  {
    title: "Senior Associate Software Engineer",
    company: "Amgen",
    timeframe: "Oct 2022 — Dec 2025",
    highlights: [
      "Led full-stack development for a proprietary business analytics platform used in executive decision making.",
      "Re-architected ETL and API layers to improve data retrieval speed by 63%.",
      "Implemented automated testing and CI/CD pipelines, reducing regression bugs by 92%.",
      "Collaborated with data engineering, analytics, and DevOps teams to improve performance, scalability, and reliability.",
    ],
  },
];

export const certifications: string[] = [
  "SAFe 5 Practitioner",
  "SAFe 5 Agile Software Engineer",
  "Advanced React by Meta",
  "AWS Solutions Architect (in progress)",
];

export const resumeUrl =
  "https://docs.google.com/document/d/e/2PACX-1vRLUWCD9iOwOk0RZbmal_23kDpqp2jHNgw2vPlLURkHEwRvX6i-C67hxe7qxg3SbsRM50NMhiQAO32X/pub";

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  description: string;
  outcome?: string;
  stack: string[];
  image?: string;
  links: ProjectLink[];
  status?: "in-development";
};

export type ProjectGroup = {
  title: string;
  description: string;
  projects: Project[];
};

export const projectGroups: ProjectGroup[] = [
  {
    title: "Featured Work",
    description:
      "Current production work that reflects how I build today: modern React architecture, secure integrations, and deployment-aware engineering.",
    projects: [
      {
        title: "DialecTrek",
        description:
          "Multilingual language-learning platform with a server-rendered Next.js frontend and FastAPI backend, starting with a verb conjugation drill tool built to expand into vocabulary, grammar, and more.",
        outcome: "Under active development, with new languages and features shipping regularly.",
        stack: ["Next.js 16", "TypeScript", "React 19", "Vitest", "FastAPI", "Python", "Pydantic", "Docker", "AWS Lambda"],
        image: "/dialectrek.png",
        status: "in-development",
        links: [
          { label: "Live site", url: "https://dialectrek.com/" },
          { label: "Frontend", url: "https://github.com/mdowney421/conjugation-website-ui" },
          { label: "Backend", url: "https://github.com/mdowney421/conjugation-website-api" },
        ],
      },
      {
        title: "62 Moons Band Website",
        description:
          "Production-ready band website with a protected admin workflow for managing upcoming shows, GitHub-backed content publishing, typed domain logic, and Vercel analytics/observability.",
        outcome: "Ships new content safely through a protected admin workflow and GitHub-backed publishing pipeline.",
        stack: ["Next.js 16", "TypeScript", "React 19", "Tailwind CSS 4", "NextAuth", "Resend", "Vercel"],
        image: "/62moons.png",
        links: [
          { label: "Live site", url: "https://62moonsband.com/" },
          { label: "View code", url: "https://github.com/mdowney421/62-moons" },
        ],
      },
      {
        title: "Grandma's Card Box",
        description:
          "Full-stack recipe-sharing app with real account auth (JWT, bcrypt, email verification), direct-to-S3 photo uploads, a searchable recipe API, and a serverless Express backend on AWS Lambda behind API Gateway.",
        outcome: "Runs a full production auth and storage pipeline on serverless AWS infrastructure.",
        stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "Express", "MongoDB", "AWS Lambda", "AWS S3"],
        image: "/grandmascardbox.jpeg",
        links: [
          { label: "Live site", url: "https://grandmascardbox.com/" },
          { label: "Frontend", url: "https://github.com/mdowney421/grandmas-card-box-ui" },
          { label: "Backend", url: "https://github.com/mdowney421/grandmas-card-box-api" },
        ],
      },
    ],
  },
];

export const totalProjects = projectGroups.reduce((sum, group) => sum + group.projects.length, 0);

export const social = {
  email: "mattdowney421@gmail.com",
  github: "https://www.github.com/mdowney421",
  linkedin: "https://www.linkedin.com/in/matthewpdowney/",
};

export type Service = {
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    title: "Full-Stack Web Applications",
    description:
      "End-to-end product builds — from data model to deployed UI — using modern, maintainable stacks like Next.js, React, and Node.js.",
    deliverables: ["Production-ready React/Next.js frontends", "Typed APIs and backend services", "Database design & data modeling"],
  },
  {
    title: "API & Systems Architecture",
    description:
      "Backend systems and integrations built to scale, with clean boundaries, sensible auth, and infrastructure that doesn't fall over.",
    deliverables: ["RESTful API design", "Cloud infrastructure on AWS", "Authentication & authorization"],
  },
  {
    title: "Modernization & Consulting",
    description:
      "Audits and upgrades for existing codebases — performance, developer experience, and reliability improvements grounded in real metrics.",
    deliverables: ["Performance & architecture audits", "CI/CD and automated testing", "Legacy migration planning"],
  },
  {
    title: "Ongoing Support & Partnership",
    description:
      "A long-term technical partner for teams who need senior-level engineering on call, without the overhead of a full-time hire.",
    deliverables: ["Post-launch maintenance", "Iterative feature delivery", "Technical advisory & code review"],
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { title: "Discover & Scope", description: "We define the problem, constraints, and success criteria before a line of code is written." },
  { title: "Design & Architect", description: "Data models, API contracts, and system architecture get sketched out and stress-tested on paper first." },
  { title: "Build & Iterate", description: "Working software ships early and often, with tight feedback loops instead of a single big reveal." },
  { title: "Test & Launch", description: "Automated tests, CI/CD, and a deliberate rollout plan keep launch day boring — in the best way." },
  { title: "Support & Scale", description: "Post-launch monitoring, iteration, and architecture reviews as real usage and requirements grow." },
];

export const stats = [
  { value: "63%", label: "Faster data retrieval after re-architecting a production ETL & API layer" },
  { value: "92%", label: "Fewer regression bugs after building out CI/CD and automated testing" },
  { value: `${totalProjects}+`, label: "Full-stack projects shipped end to end" },
  { value: `${allSkills.length}+`, label: "Languages, frameworks & tools across the stack" },
];

export type SkillItem = {
  name: string;
  icon?: string; // standard class/identifier, or path to SVG/icon
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: SkillItem[];
};

const skillsData: SkillCategory[] = [
  {
    id: "programing_language",
    title: "Programing Languages",
    skills: [
      { name: "C++", icon: "cpp" },
      { name: "C#", icon: "cs" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
    ],
  },

  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "NestJS", icon: "nestjs" },
      { name: "RESTful API", icon: "api" },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQL Server", icon: "sqlserver" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
    ],
  }
];

export default skillsData;

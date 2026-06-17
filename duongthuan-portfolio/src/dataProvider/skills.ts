export type SkillItem = {
  name: string;
  icon?: string;
  level: "Beginner" | "Basic" | "Intermediate" | "Advanced" | "Expert";
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: SkillItem[];
};

const skillsData: SkillCategory[] = [
  {
    id: "programming_language",
    title: "Programming Languages",
    skills: [
      {
        name: "C++",
        icon: "/skills/programming_languages/cpp.svg",
        level: "Intermediate",
      },
      {
        name: "C#",
        icon: "/skills/programming_languages/csharp.svg",
        level: "Intermediate",
      },
      {
        name: "JavaScript",
        icon: "/skills/programming_languages/javascript.svg",
        level: "Intermediate",
      },
      {
        name: "TypeScript",
        icon: "/skills/programming_languages/typescript.svg",
        level: "Basic",
      },
    ],
  },

  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        icon: "skills/frontend_developments/html5.svg",
        level: "Basic",
      },
      {
        name: "CSS3",
        icon: "skills/frontend_developments/css.svg",
        level: "Basic",
      },
      {
        name: "React.js",
        icon: "skills/frontend_developments/react.svg",
        level: "Intermediate",
      },
      {
        name: "Next.js",
        icon: "skills/frontend_developments/nextjs.svg",
        level: "Beginner",
      },
      {
        name: "Tailwind CSS",
        icon: "skills/frontend_developments/tailwindcss.svg",
        level: "Basic",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      {
        name: "ASP .NET",
        icon: "/skills/backend_developments/dotnet.svg",
        level: "Intermediate",
      },
      {
        name: "Node.js",
        icon: "/skills/backend_developments/nodejs.svg",
        level: "Beginner",
      },
      {
        name: "Express.js",
        icon: "/skills/backend_developments/expressjs.svg",
        level: "Basic",
      },
      {
        name: "RESTful API",
        icon: "/skills/backend_developments/rest-api.svg",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      {
        name: "PostgreSQL",
        icon: "/skills/databases/postgresql.svg",
        level: "Intermediate",
      },
      {
        name: "SQL Server",
        icon: "/skills/databases/sql-server.svg",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    skills: [
      {
        name: "Docker",
        icon: "/skills/devops/docker.svg",
        level: "Basic",
      },
      {
        name: "Kubernetes",
        icon: "/skills/devops/k8s.svg",
        level: "Basic",
      },
      {
        name: "GitHub Action",
        icon: "/skills/devops/github-action.svg",
        level: "Basic",
      },
    ],
  },
];

export default skillsData;

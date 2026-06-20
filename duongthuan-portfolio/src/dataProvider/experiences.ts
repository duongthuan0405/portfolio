export type ExperienceInformation = {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  type:
    | "Internship"
    | "Full-time"
    | "Part-time"
    | "Freelance"
    | "Club/Lab"
    | "Academic";
  startAt: Date;
  endAt: Date | null;
  description: string[];
  technologies: string[];
  logo?: string;
};

const experiences: ExperienceInformation[] = [
  {
    id: "exp-1",
    title: "Backend Developer Intern",
    company: "Example Tech Solution",
    companyUrl: "https://example.com",
    location: "Ho Chi Minh City, Vietnam (Hybrid)",
    type: "Internship",
    startAt: new Date(2025, 11, 1), // Dec 2025
    endAt: null, // Present
    description: [
      "Designed and developed scalable RESTful APIs using ASP.NET Core and Entity Framework Core.",
      "Optimized database queries and schema designs in PostgreSQL, improving response time by 20%.",
      "Integrated third-party payment gateways and authentication systems (OAuth2, JWT).",
      "Containerized applications using Docker and deployed them to Kubernetes staging environments.",
    ],
    technologies: ["ASP.NET Core", "PostgreSQL", "Docker", "Kubernetes", "Git"],
    logo: "/experiences/company_logo.png",
  },
  {
    id: "exp-2",
    title: "Fullstack Developer & Mentor",
    company: "UIT Software Engineering Club",
    companyUrl: "https://se.uit.edu.vn",
    location: "VNUHCM - University of Information Technology",
    type: "Club/Lab",
    startAt: new Date(2024, 9, 1), // Oct 2024
    endAt: new Date(2025, 10, 30), // Nov 2025
    description: [
      "Co-led the development of internal club web applications using React.js and Express.js.",
      "Mentored 20+ junior students in web development fundamentals, Git workflows, and API design.",
      "Set up CI/CD pipelines using GitHub Actions to automate linting, testing, and deployment to VPS.",
    ],
    technologies: [
      "React.js",
      "Express.js",
      "MongoDB",
      "GitHub Actions",
      "Node.js",
    ],
    logo: "/experiences/uit_club.png",
  },
  {
    id: "exp-3",
    title: "Freelance Backend Developer",
    company: "Freelance Projects",
    location: "Ho Chi Minh City, Vietnam (Remote)",
    type: "Freelance",
    startAt: new Date(2024, 2, 1), // Mar 2024
    endAt: new Date(2024, 8, 30), // Sep 2024
    description: [
      "Built customized web solutions and e-commerce APIs for local clients using ASP.NET Core.",
      "Ensured code quality and security standards, implementing input validation, logging, and rate-limiting.",
      "Successfully deployed and maintained projects on cloud hosting platforms.",
    ],
    technologies: ["ASP.NET Core", "SQL Server", "Docker", "Nginx"],
    logo: "/experiences/freelance.png",
  },
];

export default experiences;

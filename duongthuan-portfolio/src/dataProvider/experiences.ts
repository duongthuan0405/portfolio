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
  descriptions: string[];
  technologies: string[];
  logo?: string;
};

const experiences: ExperienceInformation[] = [
  {
    id: "exp-academic-be",
    title: "Academic Backend Developer",
    company: "University of Information Technology - VNUHCM",
    companyUrl: "https://www.uit.edu.vn/",
    location: "Ho Chi Minh City, Vietnam",
    type: "Academic",
    startAt: new Date(2023, 8, 1),
    endAt: null,
    descriptions: [
      "Designed and implemented RESTful APIs using ASP.NET Core with EF Core and Express.js with Prisma for academic and course projects.",
      "Designed database schemas and managed data persistence with relational databases (SQL Server, PostgreSQL) and optimized query performance using Redis caching.",
      "Secured API endpoints by implementing authentication and authorization mechanisms (JWT, Middleware validation) and verified API behaviors using Postman.",
      "Integrated MoMo payment gateway API into e-commerce web applications to process online transactions securely.",
      "Built real-time features using SignalR and integrated message queues with RabbitMQ for asynchronous microservices communication.",
      "Containerized applications using Docker, deployed and orchestrated services with Kubernetes, set up CI/CD pipelines with GitHub Actions, and managed source code with Git.",
    ],
    technologies: [
      "ASP.NET Core",
      "Express.js",
      "SQL Server",
      "PostgreSQL",
      "Redis",
      "RESTful API",
      "JWT",
      "EF Core",
      "Prisma",
      "SignalR",
      "RabbitMQ",
      "MoMo API",
      "Git",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Postman",
    ],
    logo: "/experiences/uit.png",
  },
  {
    id: "exp-academic-fe",
    title: "Academic Frontend Developer",
    company: "University of Information Technology - VNUHCM",
    companyUrl: "https://www.uit.edu.vn/",
    location: "Ho Chi Minh City, Vietnam",
    type: "Academic",
    startAt: new Date(2023, 8, 1),
    endAt: null,
    descriptions: [
      "Built interactive, responsive, and cross-browser compatible user interfaces using React.js, HTML5/CSS3, and JavaScript/TypeScript.",
      "Managed application state and client-side routing to deliver smooth, highly performant user experiences.",
      "Integrated backend RESTful APIs and handled data fetching, error handling, and state synchronization.",
      "Utilized Docker for containerizing frontend development environments, configured CI/CD workflows with GitHub Actions, and managed version control using Git.",
    ],
    technologies: [
      "React.js",
      "HTML5/CSS3",
      "JavaScript",
      "TypeScript",
      "Git",
      "GitHub Actions",
      "Docker",
    ],
  },
  {
    id: "exp-fulltime-lorem",
    title: "Lorem Full-time Title",
    company: "Lorem Corp",
    companyUrl: "https://google.com",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    startAt: new Date(2025, 0, 1),
    endAt: new Date(2026, 4, 30),
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    technologies: ["React", "Node.js", "Docker"],
    logo: "/experiences/uit.png",
  },
  {
    id: "exp-parttime-lorem",
    title: "Lorem Part-time Title",
    company: "Lorem App Studio",
    location: "Remote",
    type: "Part-time",
    startAt: new Date(2024, 6, 1),
    endAt: new Date(2024, 11, 31),
    descriptions: [
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    technologies: ["React Native", "TypeScript"],
    logo: "/experiences/uit.png",
  },
  {
    id: "exp-internship-lorem",
    title: "Lorem Internship Title",
    company: "Lorem Startup",
    location: "Ho Chi Minh City, Vietnam",
    type: "Internship",
    startAt: new Date(2024, 2, 1),
    endAt: new Date(2024, 5, 1),
    descriptions: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    logo: "/experiences/uit.png",
  },
  {
    id: "exp-freelance-lorem",
    title: "Lorem Freelance Title",
    company: "Lorem Self-Employed",
    location: "Remote",
    type: "Freelance",
    startAt: new Date(2023, 0, 1),
    endAt: new Date(2023, 7, 31),
    descriptions: [
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    technologies: ["WordPress", "Tailwind CSS"],
    logo: "/experiences/uit.png",
  },
  {
    id: "exp-club-lorem",
    title: "Lorem Club Tech Lead",
    company: "Lorem Developer Club",
    location: "Ho Chi Minh City, Vietnam",
    type: "Club/Lab",
    startAt: new Date(2022, 9, 1),
    endAt: null,
    descriptions: [
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    ],
    technologies: ["Git", "Mentoring"],
    logo: "/experiences/uit.png",
  },
];

export default experiences;

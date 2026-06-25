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
  }
];

export default experiences;

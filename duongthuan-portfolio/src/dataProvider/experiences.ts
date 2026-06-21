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
    id: "exp-academic-be",
    title: "Academic Backend Developer",
    company: "University of Information Technology - VNUHCM",
    location: "Ho Chi Minh City, Vietnam",
    type: "Academic",
    startAt: new Date(2023, 8, 1),
    endAt: null,
    description: [
      "Designed and implemented RESTful APIs using ASP.NET Core and Express.js for academic and course projects.",
      "Designed database schemas and managed data persistence with relational (SQL Server) and non-relational (MongoDB) databases.",
      "Secured API endpoints by implementing authentication and authorization mechanisms (JWT, Middleware validation).",
      "Worked with team members using Git/GitHub for version control and software project workflows.",
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
      "Git",
      "Docker",
      "Kubernetes",
      "Postman",
    ],
    logo: "/educations/uit.png",
  },
  {
    id: "exp-academic-fe",
    title: "Academic Frontend Developer",
    company: "University of Information Technology - VNUHCM",
    location: "Ho Chi Minh City, Vietnam",
    type: "Academic",
    startAt: new Date(2023, 8, 1),
    endAt: null,
    description: [
      "Built interactive and responsive user interfaces using React.js for various course projects.",
      "Managed application state and client-side routing to deliver smooth user experiences.",
      "Integrated backend RESTful APIs and handled data fetching, error handling, and state synchronization.",
      "Collaborated on frontend layout design, ensuring consistent styling and usability.",
    ],
    technologies: [
      "React.js",
      "HTML5/CSS3",
      "JavaScript",
      "TypeScript",
      "Git",
      "Docker",
    ],
    logo: "/educations/uit.png",
  },
];

export default experiences;

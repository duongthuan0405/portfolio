export type ProjectLanguage = {
  name: string;
  percent: number;
  color: string; // Tailwind color class or hex code
};

export type GitHubLink = {
  name: string;
  url: string;
};

export type ProjectInformation = {
  id: string;
  title: string;
  date: Date;
  category: string; // e.g. "Puzzle/Adventure", "Web Application"
  status: "In progress" | "Completed";
  features: string[];
  contributions: string[];
  tags: string[]; // tech stack tags
  languages: ProjectLanguage[];
  githubUrls: GitHubLink[];
  demoUrl?: string;
  downloadUrl?: string;
};

const unsorted_projects: ProjectInformation[] = [
  {
    id: "chat-mcsv",
    title: "Real-time Chat Microservice System",
    date: new Date(2026, 4, 1),
    category: "Realtime Web Application",
    status: "Completed",
    features: [
      "Microservices Architecture: Architected a decoupled system comprising .NET Core (Auth, Chat) and Go (Friendship, Conversation) services to ensure independence, fault tolerance, and resource optimization.",
      "Real-time Messaging & Presence: Built sub-second real-time message delivery and notification logic using WebSockets and SignalR, supporting private chats, group conversations.",
      "Event-Driven Coordination: Integrated RabbitMQ as a message broker to enable event-driven service synchronization, such as automatically creating conversation rooms when friend requests are accepted.",
      "Orchestration & Configuration: Containerized all services using Docker and deployed them to a Kubernetes (k3s) cluster with Helm Charts, ConfigMaps, and Secrets for secure environment and credential management.",
      "Prometheus & Grafana Observability: Configured Prometheus metrics extraction for both .NET and Go backends, building custom dashboards in Grafana to monitor API latencies, error rates, and system health.",
      "Automated CI/CD Workflows: Designed GitHub Actions pipelines to automate compilation, unit testing, Docker image building/pushing to registries, and deployment updates directly to the k3s cluster.",
      "Load Testing with k6: Developed comprehensive performance scripts using k6 to simulate concurrent user loads, verifying API throughput and diagnosing bottlenecks.",
    ],
    contributions: [
      "Backend Developer (specifically Chat & Notification Services) & DevOps Engineer.",
      "Built the complete backend for the ASP.NET Core Web API-based Chat and Notification services.",
      "Configured Ingress API Gateway routing for all backend services.",
      "Managed Docker containerization and wrote Kubernetes manifests.",
      "Set up automated GitHub Actions CI/CD workflows for the developed services.",
    ],
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "MUI",
      "TypeScript",
      "C#",
      "SignalR",
      "Go",
      "RabbitMQ",
      "PostgreSQL",
      "EF Core",
      "Docker",
      "Kubernetes",
      "Nginx Ingress",
      "GitHub Actions",
    ],
    languages: [
      { name: "C#", percent: 40, color: "#178600" },
      { name: "Go", percent: 30, color: "#00ADD8" },
      { name: "TypeScript", percent: 20, color: "#3178c6" },
      { name: "CSS", percent: 5, color: "#563d7c" },
      { name: "HTML", percent: 5, color: "#e34c26" },
    ],
    githubUrls: [
      { name: "Project", url: "https://github.com/duongthuan0405/Chat_Microservices" },
    ],
  },

  {
    id: "techsales",
    title: "TechSales E-Commerce Platform",
    date: new Date(2026, 4, 1),
    category: "E-Commerce",
    status: "Completed",
    features: [
      "Clean Architecture: Developed a modular, maintainable, and scalable enterprise e-commerce platform using Clean Architecture (.NET Core Web API) and React (Vite, TypeScript, Tailwind CSS).",
      "E-Commerce Core Modules: Implemented end-to-end shopping flows including product catalog browsing, cart operations, checkout processes, voucher discounts, shipping address books, and product reviews.",
      "Role-Based Access Control (RBAC): Engineered a secure authentication flow using JWT and fine-grained permissions to partition access across 4 portals: Customer, Sales, Technical, and Business/Admin.",
      "Gateway Payment System: Integrated MoMo gateways utilizing the Strategy & Factory Design Patterns to dynamically handle transactions, refunds, and webhooks.",
      "Redis Distributed Caching: Configured Redis as a distributed caching layer to store active product listings, categories, and system settings, significantly reducing database read latencies.",
      "Audit Logging & Statistics: Built a centralized Audit Logging system to track critical operations (e.g., price modifications, order updates) alongside reporting services to support administrative decisions.",
      "Background Services & SMTP OTP: Created custom helper services to queue background operations, delivering automated SMTP emails and OTP codes for account registration and password resets.",
      "Role-Specific Dashboards: Designed highly interactive, responsive dashboards for Business, Technical, and Sales operations using Shadcn UI, Tailwind CSS, and chart visualization components.",
    ],
    contributions: [
      "Fullstack Developer; collaborated with AI Agent Antigravity to build role-based frontend layouts and component interactions.",
      "Developed core backend modules including Authentication, Catalog Management, Orders, Address Book, Online Payments, Statistics, Redis caching, and Audit Logging."
    ],
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "C#",
      "ASP.NET Core Web API",
      "EF Core",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Serilog",
      "MoMo API",
    ],
    languages: [
      { name: "C#", percent: 55, color: "#178600" },
      { name: "TypeScript", percent: 35, color: "#3178c6" },
      { name: "CSS", percent: 5, color: "#563d7c" },
      { name: "HTML", percent: 5, color: "#e34c26" },
    ],
    githubUrls: [
      { name: "Frontend", url: "https://github.com/duongthuan0405/TechSales_FE" },
      { name: "Backend", url: "https://github.com/duongthuan0405/TechSales_BE_and_Diagrams" },
    ],
  },

  {
    id: "quiz-platform",
    title: "Online Quiz & Test Platform",
    date: new Date(2026, 0, 1),
    category: "AI-Powered Web Application",
    status: "Completed",
    features: [
      "AI-Powered Quiz Generation: Integrated Google Gemini 2.5 Flash API to parse uploaded texts or documents, dynamically generating multiple-choice questions based on custom categories and rule parameters.",
      "Live Assessment & Auto-Submit: Engineered a background worker using .NET Hosted Services to monitor active exam sessions and automatically submit candidates' work upon timer expiration.",
      "Submission Review & Grading: Created an interactive sheet page for candidates to review graded answers, view detailed explanations, and receive instant score feedback.",
      "Excel Data Import & Export: Developed helper modules for bulk importing participants from Excel files (.xlsx) and exporting quiz statistics, grades, and detailed performance analysis.",
      "Invitation & Delivery Services: Designed invitation link generation and automated dispatch workflows utilizing custom background SMTP email queues.",
      "Visual Analytics & Statistics: Built interactive dashboards featuring dynamic graphs to track completion rates, score distributions, and comprehensive item analysis for creator insights.",
      "Secure Auth & OTP Verification: Implemented secure stateless authentication using JWT coupled with email OTP verification for registration and account recovery.",
    ],
    contributions: [
      "Fullstack Developer: Built core Backend modules including Authentication (JWT, email OTP), Quiz Management, Document/Image Storage processors, and Google Gemini AI integration.",
      "API Integration: Connected and integrated Frontend pages with Backend APIs using Axios and React Query for seamless data flow.",
    ],
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "C#",
      "ASP.NET Core Web API",
      "EF Core",
      "PostgreSQL",
      "JWT",
      ".NET Hosted Service",
      "SMTP",
      "Google Gemini API",
      "React Query",
      "Axios",
    ],
    languages: [
      { name: "C#", percent: 50, color: "#178600" },
      { name: "TypeScript", percent: 40, color: "#3178c6" },
      { name: "CSS", percent: 5, color: "#563d7c" },
      { name: "HTML", percent: 5, color: "#e34c26" },
    ],
    githubUrls: [
      { name: "Frontend", url: "https://github.com/duongthuan0405/Project_SE347_Web_FE" },
      { name: "Backend", url: "https://github.com/duongthuan0405/Project_SE347_Web_BE" },
    ],
  },
];

const projects = unsorted_projects.sort(function (a, b) {
  if (a.date < b.date) return 1; // Sort newest first
  if (a.date > b.date) return -1;
  return 0;
});

export default projects;

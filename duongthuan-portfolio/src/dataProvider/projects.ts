export type ProjectLanguage = {
  name: string;
  percent: number;
  color: string; // Tailwind color class or hex code
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
  githubUrl: string;
  demoUrl?: string;
  downloadUrl?: string;
};

const unsorted_projects: ProjectInformation[] = [
  {
    id: "proj-lorem-1",
    title: "Lorem Ipsum Dolor Sit Amet",
    date: new Date(2026, 4, 1),
    category: "Consectetur Adipiscing",
    status: "In progress",
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    ],
    contributions: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    tags: ["Lorem", "Ipsum", "Dolor"],
    languages: [
      { name: "TypeScript", percent: 80, color: "#3178c6" },
      { name: "HTML", percent: 20, color: "#e34c26" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://google.com",
  },
  {
    id: "proj-lorem-2",
    title: "Quis Autem Vel Eum Iure",
    date: new Date(2026, 5, 15),
    category: "Reprehenderit Qui In",
    status: "Completed",
    features: [
      "At vero eos et accusamus et iusto odio dignissimos ducimus.",
      "Qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      "Quos dolores et quas molestias excepturi sint occaecati cupiditate.",
    ],
    contributions: [
      "Et harum quidem rerum facilis est et expedita distinctio.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
    ],
    tags: ["Sit", "Amet", "Consectetur"],
    languages: [
      { name: "JavaScript", percent: 60, color: "#f1e05a" },
      { name: "CSS", percent: 40, color: "#563d7c" },
    ],
    githubUrl: "https://github.com",
    downloadUrl: "https://google.com",
  },
];

const projects = unsorted_projects.sort(function (a, b) {
  if (a.date < b.date) return 1; // Sort newest first
  if (a.date > b.date) return -1;
  return 0;
});

export default projects;

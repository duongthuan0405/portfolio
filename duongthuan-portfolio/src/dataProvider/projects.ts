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
 
];

const projects = unsorted_projects.sort(function (a, b) {
  if (a.date < b.date) return 1; // Sort newest first
  if (a.date > b.date) return -1;
  return 0;
});

export default projects;

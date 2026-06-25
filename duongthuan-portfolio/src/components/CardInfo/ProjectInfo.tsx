import { ProjectInformation } from "@/dataProvider/projects";
import { FaCalendarAlt } from "react-icons/fa";
import { FaGithub, FaDownload } from "react-icons/fa6";
import { PiVideoFill } from "react-icons/pi";

type ProjectInfoProps = {
  project: ProjectInformation;
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};

const ProjectInfo = function ({ project }: ProjectInfoProps) {
  return (
    <div
      key={project.id}
      className="bg-linear-to-br from-foreground/5 to-foreground/10 border-2 border-foreground/10 hover:border-foreground/20 rounded-2xl p-6 transition-all duration-300 flex flex-col gap-5 shadow-sm hover:shadow-md backdrop-blur-xs group"
    >
      {/* Header: Title, Category, Status & Date */}
      <div className="flex flex-col gap-1 w-full">
        <h3 className="font-bold text-2xl text-foreground tracking-tight transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md">
            {project.category}
          </span>
          <span
            className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md ${
              project.status === "In progress"
                ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
            }`}
          >
            {project.status}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground tracking-wider">
          <FaCalendarAlt className="size-3.5 shrink-0" />
          <span>{formatDate(project.date)}</span>
        </div>
      </div>

      {/* Key Features */}
      {project.features && project.features.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-bold text-muted-foreground/80 uppercase tracking-wider">
            Key Features
          </span>
          <ul className="list-disc pl-5 text-base text-foreground space-y-1">
            {project.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Contributions */}
      {project.contributions && project.contributions.length > 0 && (
        <div className="flex flex-col gap-1.5 border-t border-foreground/5 pt-3">
          <span className="text-sm font-bold text-muted-foreground/80 uppercase tracking-wider">
            Contributions
          </span>
          <ul className="list-disc pl-5 text-base text-foreground leading-relaxed space-y-1.5">
            {project.contributions.map((contrib, idx) => (
              <li key={idx}>{contrib}</li>
            ))}
          </ul>
        </div>
      )}

      {/* GitHub Language Bar */}
      <div className="flex flex-col gap-1.5 mt-auto border-t border-foreground/5 pt-3">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {project.languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-1.5">
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: lang.color }}
              />
              <span className="text-sm text-muted-foreground font-medium">
                {lang.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-foreground/10 border border-foreground/10 text-foreground px-3 py-1 rounded-lg text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-foreground/5">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group/link"
        >
          <FaGithub className="size-4" />
          GitHub
        </a>

        {project.downloadUrl && (
          <a
            href={project.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group/link"
          >
            <FaDownload className="size-3.5" />
            Download
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group/link"
          >
            <PiVideoFill  className="size-4" />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectInfo;

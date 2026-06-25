"use client";

import ProjectInfo from "@/components/CardInfo/ProjectInfo";
import projects from "@/dataProvider/projects";

const ProjectsSection = function () {
  return (
    <section
      id="projects"
      className="flex flex-col items-center gap-10 w-full sm:px-10 lg:px-15 xl:px-30"
    >
      <div className="text-4xl font-bold">PROJECTS</div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-10 w-full">
          {projects.map((proj) => {
            return <ProjectInfo project={proj} key={proj.id} />;
          })}
        </div>
      ) : (
        <p className="text-muted-foreground italic text-base text-center">No projects data available.</p>
      )}
    </section>
  );
};

export default ProjectsSection;

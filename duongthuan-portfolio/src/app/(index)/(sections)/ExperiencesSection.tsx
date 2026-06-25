"use client";

import ExperienceInfo from "@/components/CardInfo/ExperienceInfo";
import experiences from "@/dataProvider/experiences";

const ExperiencesSection = function () {
  return (
    <section
      id="experiences"
      className="flex flex-col items-center gap-10 w-full sm:px-10 lg:px-15 xl:px-30"
    >
      <div className="text-4xl font-bold">EXPERIENCES</div>

      {experiences.length > 0 ? (
        <div className="w-full flex flex-col gap-12">
          {experiences.map((exp) => {
            return <ExperienceInfo experience={exp} key={exp.id} />;
          })}
        </div>
      ) : (
        <p className="text-muted-foreground italic text-base text-center">No experiences data available.</p>
      )}
    </section>
  );
};

export default ExperiencesSection;

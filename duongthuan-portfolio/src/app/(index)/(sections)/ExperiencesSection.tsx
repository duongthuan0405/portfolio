"use client";

import ExperienceInfo from "@/components/CardInfo/ExperienceInfo";
import experiences from "@/dataProvider/experiences";
import { Briefcase } from "lucide-react";

const ExperiencesSection = function () {
  return (
    <section
      id="experiences"
      className="flex flex-col items-center gap-10 w-full sm:px-10 lg:px-15 xl:px-30"
    >
      <div className="text-4xl font-bold">EXPERIENCES</div>

      <div className="w-full flex flex-col gap-12">
        {experiences.map((exp) => {
          return <ExperienceInfo experience={exp} key={exp.id} />;
        })}
      </div>
    </section>
  );
};

export default ExperiencesSection;

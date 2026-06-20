"use client";

import ExperienceInfo from "@/components/CardInfo/ExperienceInfo";
import experiences from "@/dataProvider/experiences";
import { Briefcase } from "lucide-react";

const ExperiencesSection = function () {
  return (
    <section
      id="experiences"
      className="flex flex-col items-center gap-10 w-full py-10 sm:px-10 lg:px-15 xl:px-30"
    >
      <div className="text-4xl font-bold">EXPERIENCES</div>

      <div className="border-l border-foreground/20 w-full pl-8 md:pl-10 flex flex-col gap-12">
        {experiences.map((exp) => {
          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-13 md:-left-15 bg-background border-2 border-foreground/30 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background group-hover:scale-125 transition-all duration-300 rounded-full p-1.5 flex items-center justify-center">
                <Briefcase className="size-6 text-foreground/70 group-hover:text-background" />
              </div>

              <ExperienceInfo experience={exp} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperiencesSection;

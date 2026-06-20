import { SkillCategory } from "@/dataProvider/skills";
import SkillItemCard from "./SkillItemCard";
import { Briefcase } from "lucide-react";

export type SkillCategoryCardProps = {
  skillCategory: SkillCategory;
};

const SkillCardCategory = function ({ skillCategory }: SkillCategoryCardProps) {
  return (
    <div className="w-full space-y-5 relative group">
      <div className="absolute -left-13 md:-left-15 bg-background border-2 border-foreground/30 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background group-hover:scale-125 transition-all duration-300 rounded-full p-1.5 flex items-center justify-center">
        <skillCategory.icon className="size-6 text-foreground/70 group-hover:text-background" />
      </div>

      <h1 className="text-xl font-bold">{skillCategory.title}</h1>
      <div className="grid xl:grid-cols-4 grid-cols-2 sm:grid-cols-3 gap-5 lg:gap-15">
        {skillCategory.skills.map(function (skill, i) {
          return <SkillItemCard skillItem={skill} key={skill.name} />;
        })}
      </div>
    </div>
  );
};

export default SkillCardCategory;

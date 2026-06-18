import { SkillCategory } from "@/dataProvider/skills";
import SkillItemCard from "./SkillItemCard";

export type SkillCategoryCardProps = {
  skillCategory: SkillCategory;
};

const SkillCardCategory = function ({ skillCategory }: SkillCategoryCardProps) {
  return (
    <div className="w-full space-y-5">
      <h1 className="text-xl font-bold">{skillCategory.title}</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 lg:gap-10">
        {skillCategory.skills.map(function (skill, i) {
          return <SkillItemCard skillItem={skill} key={skill.name} />;
        })}
      </div>
    </div>
  );
};

export default SkillCardCategory;

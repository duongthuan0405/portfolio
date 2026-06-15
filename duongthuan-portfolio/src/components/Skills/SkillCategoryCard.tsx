import { SkillCategory } from "@/dataProvider/skills";

export type SkillCategoryCardProps = {
  skillCategory: SkillCategory;
};

const SkillCardCategory = function ({ skillCategory }: SkillCategoryCardProps) {
  return (
    <div className="bg-amber-200 w-full">
      <h1>{skillCategory.title}</h1>
      {skillCategory.skills.map(function (skill, i) {
        return <div key={skill.name}>{skill.name}</div>;
      })}
    </div>
  );
};

export default SkillCardCategory;

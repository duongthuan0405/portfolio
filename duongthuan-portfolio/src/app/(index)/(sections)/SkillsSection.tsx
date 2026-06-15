import SkillCardCategory from "@/components/Skills/SkillCategoryCard";
import skillsData from "@/dataProvider/skills";

const SkillsSection = function () {
  return (
    <section id="skills" className="flex flex-col items-center gap-10 w-full">
      <div className="text-4xl font-bold ">SKILLS</div>
      <div className="flex flex-col gap-10 w-full lg:px-40 px-5">
        {skillsData.map(function (s, i) {
          return <SkillCardCategory skillCategory={s} key={s.id} />;
        })}
      </div>
    </section>
  );
};

export default SkillsSection;

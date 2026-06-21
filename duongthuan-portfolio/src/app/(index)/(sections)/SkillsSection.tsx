import SkillCardCategory from "@/components/Skills/SkillCategoryCard";
import skillsData from "@/dataProvider/skills";

const SkillsSection = function () {
  return (
    <section
      id="skills"
      className="flex flex-col items-center gap-10 w-full pl-5 md:pl-10 lg:pl-15 xl:pl-20 md:pr-5 lg:pr-7.5 xl:pr-10"
    >
      <div className="text-4xl font-bold ">SKILLS</div>
      <div className="flex flex-col gap-8 w-full border-l border-foreground/20 pl-8 md:pl-10">
        {skillsData.map(function (s, i) {
          return <SkillCardCategory skillCategory={s} key={s.id} />;
        })}
      </div>
    </section>
  );
};

export default SkillsSection;

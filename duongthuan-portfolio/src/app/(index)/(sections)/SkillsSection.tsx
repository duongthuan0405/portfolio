import SkillCardCategory from "@/components/Skills/SkillCategoryCard";
import skillsData from "@/dataProvider/skills";

const SkillsSection = function () {
  return (
    <section
      id="skills"
      className="flex flex-col items-center gap-10 w-full lg:px-10 xl:px-20"
    >
      <div className="text-4xl font-bold ">SKILLS</div>
      {skillsData.length > 0 ? (
        <div className="flex flex-col gap-8 w-full border-l border-foreground/20 pl-8 md:pl-10">
          {skillsData.map(function (s, i) {
            return <SkillCardCategory skillCategory={s} key={s.id} />;
          })}
        </div>
      ) : (
        <p className="text-muted-foreground italic text-base text-center">No skills data available.</p>
      )}
    </section>
  );
};

export default SkillsSection;

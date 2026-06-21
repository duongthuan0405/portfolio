import { SkillItem } from "@/dataProvider/skills";

type SkillItemCardProps = {
  skillItem: SkillItem;
};
const SkillItemCard = function ({ skillItem }: SkillItemCardProps) {
  return (
    <div className="flex flex-col gap-1 items-center text-center text-base md:text-lg lg:text-lg xl:text-xl">
      <img
        src={skillItem.icon}
        alt={skillItem.name}
        className="bg-card-skill/90 rounded-2xl p-5 aspect-square w-full"
      />
      <p className="font-semibold">{skillItem.name}</p>
      <p>{skillItem.level}</p>
    </div>
  );
};

export default SkillItemCard;

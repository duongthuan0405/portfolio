"use client";

import AchievementInfo from "@/components/CardInfo/AchievementInfo";
import achievements from "@/dataProvider/achievements";

const AchievementsSection = function () {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center gap-10 w-full py-5"
    >
      <div className="text-4xl font-bold">ACHIEVEMENTS</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {achievements.map((ach) => {
          return <AchievementInfo achievement={ach} key={ach.id} />;
        })}
      </div>
    </section>
  );
};

export default AchievementsSection;

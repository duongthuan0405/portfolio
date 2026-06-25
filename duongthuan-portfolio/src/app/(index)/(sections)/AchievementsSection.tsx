"use client";

import AchievementInfo from "@/components/CardInfo/AchievementInfo";
import achievements from "@/dataProvider/achievements";

const AchievementsSection = function () {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center gap-10 w-full"
    >
      <div className="text-4xl font-bold">ACHIEVEMENTS</div>

      {achievements.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {achievements.map((ach) => {
            return <AchievementInfo achievement={ach} key={ach.id} />;
          })}
        </div>
      ) : (
        <p className="text-muted-foreground italic text-base text-center">No achievements data available.</p>
      )}
    </section>
  );
};

export default AchievementsSection;

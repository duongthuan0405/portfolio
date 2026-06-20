import HomeSection from "@/app/(index)/(sections)/HomeSection";
import AchievementsSection from "@/app/(index)/(sections)/AchievementsSection";
import AboutSection from "@/app/(index)/(sections)/AboutSection";
import ExperiencesSection from "@/app/(index)/(sections)/ExperiencesSection";
import ProjectsSection from "@/app/(index)/(sections)/ProjectsSection";
import SkillsSection from "./(sections)/SkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-15 px-10 md:px-20 lg:px-30 w-full">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <AchievementsSection />
      <ProjectsSection />
    </div>
  );
}

import HomeSection from "@/app/(index)/(sections)/HomeSection";
import AchievementsSection from "@/app/(index)/(sections)/AchievementsSection";
import AboutSection from "@/app/(index)/(sections)/AboutSection";
import ExperiencesSection from "@/app/(index)/(sections)/ExperiencesSection";
import ProjectsSection from "@/app/(index)/(sections)/ProjectsSection";
import SkillsSection from "./(sections)/SkillsSection";

const SectionDivider = () => (
  <div className="relative w-full max-w-5xl my-4">
    <div className="absolute inset-0 h-[3px] bg-linear-to-r from-transparent via-foreground/35 to-transparent blur-sm" />
    <div className="relative h-[2px] bg-linear-to-r from-transparent via-foreground/25 to-transparent" />
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-10 px-10 md:px-20 lg:px-30 w-full">
      <HomeSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ExperiencesSection />
      <SectionDivider />
      <AchievementsSection />
      <SectionDivider />
      <ProjectsSection />
      <div></div>
    </div>
  );
}

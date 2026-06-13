import {
  Home,
  CircleUserRound,
  Cpu,
  Briefcase,
  Trophy,
  FolderGit2,
} from "lucide-react";

export type HeaderItem = {
  display: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const headerItems: HeaderItem[] = [
  {
    display: "Home",
    href: "#home",
    icon: Home,
  },
  {
    display: "About",
    href: "#about",
    icon: CircleUserRound,
  },
  {
    display: "Skills",
    href: "#skills",
    icon: Cpu,
  },
  {
    display: "Experiences",
    href: "#experiences",
    icon: Briefcase,
  },
  {
    display: "Achievements",
    href: "#achievements",
    icon: Trophy,
  },
  {
    display: "Projects",
    href: "#projects",
    icon: FolderGit2,
  },
];

export default headerItems;

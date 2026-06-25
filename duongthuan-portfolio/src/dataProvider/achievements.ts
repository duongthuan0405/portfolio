export type AchievementInformation = {
  id: string;
  title: string;
  issuer: string;
  date: Date;
  description?: string;
  certificateUrl?: string;
  image?: string;
  iconType: "trophy" | "award" | "certificate" | "star";
};

const unsorted_achievements: AchievementInformation[] = [
  {
    id: "ach-star-lorem",
    title: "Lorem Star Achievement Title",
    issuer: "Lorem Issuer Org",
    date: new Date(2026, 1, 28),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    image: "/achievements/very_good_25_26.jpg",
    iconType: "star",
  },
  {
    id: "ach-trophy-lorem",
    title: "Lorem Trophy Achievement Title",
    issuer: "Lorem Trophy Issuer",
    date: new Date(2025, 11, 15),
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/achievements/excellent_23_24.jpg",
    iconType: "trophy",
  },
  {
    id: "ach-award-lorem",
    title: "Lorem Award Achievement Title",
    issuer: "Lorem Award Issuer",
    date: new Date(2025, 7, 31),
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/achievements/very_good_24_25.jpg",
    iconType: "award",
  },
  {
    id: "ach-certificate-lorem",
    title: "Lorem Certificate Achievement Title",
    issuer: "Lorem Certificate Issuer",
    date: new Date(2024, 5, 20),
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/achievements/excellent_23_24.jpg",
    iconType: "certificate",
  },
];

const achievements = unsorted_achievements.sort(function (a, b) {
  if (a.date < b.date) return -1;
  if (a.date > b.date) return 1;
  return 0;
});

export default achievements;

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
    id: "ach-very-good-25-26-sem1",
    title: "Very Good Student - Semester 1, Academic Year 2025-2026",
    issuer: "University of Information Technology (UIT)",
    date: new Date(2026, 1, 28), // February 2026 (End of Semester 1, 2025-2026)
    description:
      "Awarded by the university for achieving the title of 'Very Good Student' in both academic studies and training activities for Semester 1 of the 2025-2026 academic year.",
    image: "/achievements/very_good_25_26.jpg",
    iconType: "star",
  },
  {
    id: "ach-excellent-23-24",
    title: "Excellent Student - Academic Year 2023-2024",
    issuer: "University of Information Technology (UIT)",
    date: new Date(2024, 7, 31), // August 2024 (End of academic year 2023-2024)
    description:
      "Awarded by the university for achieving the title of 'Excellent Student' in both academic studies and training activities for the 2023-2024 academic year.",
    image: "/achievements/excellent_23_24.jpg",
    iconType: "star",
  },
  {
    id: "ach-very-good-24-25",
    title: "Very Good Student - Academic Year 2024-2025",
    issuer: "University of Information Technology (UIT)",
    date: new Date(2025, 7, 31), // August 2025 (End of academic year 2024-2025)
    description:
      "Awarded by the university for achieving the title of 'Very Good Student' in both academic studies and training activities for the 2024-2025 academic year.",
    image: "/achievements/very_good_24_25.jpg",
    iconType: "star",
  },
];

const achievements = unsorted_achievements.sort(function (a, b) {
  if (a.date < b.date) return -1;
  if (a.date > b.date) return 1;
  return 0;
});

export default achievements;

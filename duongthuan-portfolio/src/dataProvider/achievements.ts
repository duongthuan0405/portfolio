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

const achievements: AchievementInformation[] = [
  {
    id: "ach-1",
    title: "Academic Excellence Scholarship",
    issuer: "University of Information Technology (UIT)",
    date: new Date(2025, 4, 1), // May 2025
    description: "Awarded for outstanding academic performance with a semester GPA in the top 5% of the Software Engineering department.",
    image: "/achievements/scholarship_uit.png",
    iconType: "trophy"
  },
  {
    id: "ach-2",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: new Date(2025, 8, 15), // Sep 2025
    description: "Demonstrates overall understanding of AWS Cloud platform, covering basic cloud services and security architecture.",
    certificateUrl: "https://aws.amazon.com/verification",
    image: "/achievements/aws_ccp.png",
    iconType: "certificate"
  },
  {
    id: "ach-3",
    title: "Consolation Prize in UIT Hackathon",
    issuer: "UIT Dev Club & Faculty of Software Engineering",
    date: new Date(2024, 10, 20), // Nov 2024
    description: "Developed a smart scheduling system for university students using ASP.NET Core and React in 48 hours.",
    image: "/achievements/uit_hackathon.png",
    iconType: "award"
  }
];

export default achievements;

export type EducationInformation = {
  university: string;
  degree: string;
  fieldOfStudy: string;
  startAt: Date;
  endAt: Date;
  gpa: string;
  image?: string;
};

const educations: EducationInformation[] = [
  {
    university: "University of Information Technology - VNUHCM",
    degree: "Bachelor",
    fieldOfStudy: "Software Engineering",
    startAt: new Date(2023, 8, 1),
    endAt: new Date(2027, 6, 31),
    gpa: "8.97/10.0",
    image: "/uit.png",
  },
];

export default educations;

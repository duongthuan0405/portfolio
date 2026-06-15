export type MySelfInformation = {
  fullName: string;
  position: [string];
  short_bio: string;
  long_bio: string[];
  dateOfBirth: Date;
  location: string;
  hometown: string;
  phone: string;
  avatar_home: string;
  avatar_about: string;
};

const mySelfInformation: MySelfInformation = {
  fullName: "Duong Quoc Thuan",
  position: ["Software Developer"],
  short_bio:
    "I specialize in backend development, and I also have some experience with frontend development.",
  dateOfBirth: new Date(2005, 3, 14),
  long_bio: [
    "Hi, I'm Duong Quoc Thuan, a third-year Software Engineering student currently studying and living in Ho Chi Minh City, Vietnam. I am passionate about building reliable and scalable software solutions, with a primary focus on backend development.",
    "My main expertise lies in ASP.NET, with a basic understanding of Express.js, where I have experience developing web applications and RESTful APIs.",
    "In addition to backend development, I have worked with React.js for frontend projects and am currently exploring Next.js and React Native to broaden my skills in modern web and mobile development.",
    "I also have hands-on experience with CI/CD automation using GitHub Actions and deploying containerized applications on Kubernetes. I enjoy learning new technologies, improving development workflows, and continuously growing as a software engineer.",
  ],
  location: "Ho Chi Minh City, Vietnam",
  hometown: "Tan Thanh Commune, Tay Ninh Province, Vietnam",
  phone: "0357 429 477",
  avatar_home: "/avatars/about.png",
  avatar_about: "/avatars/about.png",
};

export default mySelfInformation;

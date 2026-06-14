import EducationInfo from "@/components/CardInfo/DetailInfo";
import MySelfInfo from "@/components/CardInfo/MySelfInfo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import educations, {
  type EducationInformation,
} from "@/dataProvider/education";
import mySelfInformation, { MySelfInformation } from "@/dataProvider/mySelf";

const AboutSection = function () {
  const mySelfInfo: MySelfInformation = mySelfInformation;
  const educationInfo: EducationInformation[] = educations;
  return (
    <section id="about" className="flex flex-col items-center gap-10">
      <div className="text-4xl font-bold">About Me</div>

      <div className="flex gap-10 flex-col lg:flex-row w-full items-center">
        <div className="w-full h-full flex-3">
          <MySelfInfo mySelfInfo={mySelfInfo} />
          {educations.map(function (e, i) {
            return <EducationInfo educationInfo={e} key={`education_info_${i}`} />;
          })}
        </div>

        <div className="w-full flex justify-end flex-2">
          <Avatar className="size-100 hover:scale-105 transition-all duration-500">
            <div className="bg-foreground size-full p-1 rounded-full">
              <div className="bg-background size-full p-1 rounded-full">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="w-full h-full"
                />
                <AvatarFallback className="w-full h-full">
                  {mySelfInfo.fullName}
                </AvatarFallback>
              </div>
            </div>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

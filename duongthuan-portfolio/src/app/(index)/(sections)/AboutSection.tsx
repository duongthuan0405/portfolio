import LongBio from "@/components/CardInfo/LongBio";
import MySelfInfo from "@/components/CardInfo/MySelfInfo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import educations, {
  type EducationInformation,
} from "@/dataProvider/education";
import mySelfInformation, { MySelfInformation } from "@/dataProvider/mySelf";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import EducationInfo from "@/components/CardInfo/EducationInfo";

const AboutSection = function () {
  const mySelfInfo: MySelfInformation = mySelfInformation;
  const educationInfoList: EducationInformation[] = educations;
  return (
    <section id="about" className="flex flex-col items-center gap-10">
      <div className="text-4xl font-bold">ABOUT ME</div>

      <div className="flex gap-10 flex-col lg:flex-row w-full items-center">
        <div className="w-full flex flex-col justify-start items-center flex-4 gap-10">
          <Avatar className="size-80 hover:scale-105 transition-all duration-500">
            <div className="bg-foreground size-full p-1 rounded-full">
              <div className="bg-background size-full p-1 rounded-full">
                <AvatarImage
                  src={mySelfInformation.avatar_about}
                  className="w-full h-full"
                />
                <AvatarFallback className="w-full h-full">
                  {mySelfInfo.fullName}
                </AvatarFallback>
              </div>
            </div>
          </Avatar>

          <MySelfInfo mySelfInformation={mySelfInfo} />
        </div>

        <div className="w-full h-full flex-5 gap-5 flex flex-col">
          <LongBio mySelfInfo={mySelfInfo} />

          <div className="flex flex-col gap-2.5">
            <h1 className="font-semibold text-xl">Educational journey</h1>
            <EducationInfo educationInfoList={educationInfoList} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

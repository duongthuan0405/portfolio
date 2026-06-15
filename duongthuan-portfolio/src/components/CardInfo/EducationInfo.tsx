"use client";
import { type EducationInformation } from "@/dataProvider/education";
import { MySelfInformation } from "@/dataProvider/mySelf";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useEffect, useState } from "react";

type EducationInfoProps = {
  educationInfoList: EducationInformation[];
};

const EducationInfo = function ({ educationInfoList }: EducationInfoProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        opts={{
          loop: true,
        }}
        className="flex flex-col gap-1"
        setApi={setApi}
      >
        <CarouselContent className="m-0">
          {educationInfoList.map(function (educationInfo, i) {
            return (
              <CarouselItem
                key={`education_info_${i}`}
                className="rounded-2xl flex flex-col lg:flex-row items-stretch gap-0.5 overflow-hidden p-0"
              >
                <div className="bg-linear-to-br from-foreground/10 to-foreground/20 lg:flex-8 p-3 flex flex-col gap-1">
                  <div className="flex gap-1 flex-wrap">
                    <h1 className="font-bold">{"Education: "}</h1>
                    <p>{educationInfo.university}</p>
                  </div>

                  <div className="flex gap-1 flex-wrap">
                    <h1 className="font-bold">{"Major: "}</h1>
                    <p>{educationInfo.fieldOfStudy}</p>
                  </div>

                  <div className="flex gap-1 flex-wrap">
                    <h1 className="font-bold">{"Degree: "}</h1>
                    <p>{educationInfo.degree}</p>
                  </div>

                  <div className="flex gap-1 flex-wrap">
                    <h1 className="font-bold">{"GPA: "}</h1>
                    <p>{educationInfo.gpa}</p>
                  </div>

                  <div className="flex gap-1 flex-wrap">
                    <h1 className="font-bold">{"Education Period: "}</h1>
                    <p>
                      {educationInfo.startAt.getFullYear()} -{" "}
                      {educationInfo.endAt.getFullYear()}{" "}
                      {educationInfo.endAt < new Date() ? "" : "(Expected)"}
                    </p>
                  </div>
                </div>

                <div className="bg-white lg:flex-3 max-lg:aspect-square self-stretch relative">
                  <img
                    src={educationInfo.image ?? "no"}
                    alt={educationInfo.university}
                    className="w-full h-full object-cover absolute top-0 left-0"
                  ></img>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div className="flex items-center justify-center gap-4 py-2 mt-1">
          <CarouselPrevious className="static translate-y-0" />
          <span className="text-sm text-muted-foreground select-none">
            {current} of {count}
          </span>
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default EducationInfo;

/*

<div className="flex flex-col p-6 gap-1 bg-linear-to-br from-foreground/5 to-foreground/15 lg:rounded-l-2xl max-lg:rounded-t-2xl flex-3">
                  
                </div>

                <div className="flex-3 lg:flex-1 max-lg:rounded-b-2xl max-lg:min-h-100 max-lg:w-full lg:rounded-r-2xl overflow-hidden relative">
                  <img
                    src={educationInfo.image}
                    alt={educationInfo.university}
                    className="object-cover absolute w-full h-full"
                  ></img>
                </div>

*/

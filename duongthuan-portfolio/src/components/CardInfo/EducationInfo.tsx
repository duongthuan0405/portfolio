"use client";

import { type EducationInformation } from "@/dataProvider/education";
import { MySelfInformation } from "@/dataProvider/mySelf";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
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
      <Carousel className="flex flex-col gap-1" setApi={setApi}>
        <CarouselContent>
          {educationInfoList.map(function (educationInfo, i) {
            return (
              <CarouselItem key={`education_info_${i}`}>
                <div className="flex gap-2">
                  <h1>{"Education: "}</h1>
                  <p>{educationInfo.university}</p>
                </div>

                <div className="flex gap-2">
                  <h1>{"Major: "}</h1>
                  <p>{educationInfo.fieldOfStudy}</p>
                </div>

                <div className="flex gap-2">
                  <h1>{"Degree: "}</h1>
                  <p>{educationInfo.degree}</p>
                </div>

                <div className="flex gap-2">
                  <h1>{"Education Period: "}</h1>
                  <p>
                    {educationInfo.startAt.getFullYear()} -{" "}
                    {educationInfo.endAt.getFullYear()}{" "}
                    {educationInfo.endAt < new Date() ? "" : "(Expected)"}
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="py-2 text-center text-sm text-muted-foreground">
        {current} of {count}
      </div>
    </div>
  );
};

export default EducationInfo;

"use client";
import { type EducationInformation } from "@/dataProvider/education";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useEffect, useState } from "react";
import {
  FaUniversity,
  FaBookOpen,
  FaCertificate,
  FaAward,
  FaCalendarAlt,
} from "react-icons/fa"
import { TbZoomScan } from "react-icons/tb";

type EducationInfoProps = {
  educationInfoList: EducationInformation[];
};

const EducationInfo = function ({ educationInfoList }: EducationInfoProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

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
            const formatPeriod = (start: Date, end: Date) => {
              const formatOption: Intl.DateTimeFormatOptions = { month: "short", year: "numeric" };
              return `${start.toLocaleDateString("en-US", formatOption)} - ${end.toLocaleDateString("en-US", formatOption)}`;
            };

            return (
              <CarouselItem
                key={`education_info_${i}`}
                className="rounded-2xl flex flex-col lg:flex-row items-stretch gap-0 overflow-hidden p-0 border-2 border-foreground/10 hover:border-foreground/20 transition-all duration-300 backdrop-blur-xs"
              >
                <div className="bg-linear-to-br from-foreground/5 to-foreground/10 lg:flex-2 px-3 py-6 flex flex-col gap-1">
                  <div className="flex gap-1 flex-wrap items-center">
                    <p>
                      <FaUniversity className="mr-1.5 inline" />
                      <span className="font-bold">Education: </span>
                      {educationInfo.university}
                    </p>
                  </div>

                  <div className="flex gap-1 flex-wrap items-center">
                    <p>
                      <FaBookOpen className="mr-1.5 inline" />
                      <span className="font-bold">Major: </span>
                      {educationInfo.fieldOfStudy}
                    </p>
                  </div>

                  <div className="flex gap-1 flex-wrap items-center">
                    <p>
                      <FaCertificate className="mr-1.5 inline" />
                      <span className="font-bold">Degree: </span>
                      {educationInfo.degree}
                    </p>
                  </div>

                  <div className="flex gap-1 flex-wrap items-center">
                    <p>
                      <FaAward className="mr-1.5 inline" />
                      <span className="font-bold">GPA: </span>
                      {educationInfo.gpa}
                    </p>
                  </div>

                  <div className="flex gap-1 flex-wrap items-center">
                    <p>
                      <FaCalendarAlt className="mr-1.5 inline" />
                      <span className="font-bold">Education Period: </span>
                      {formatPeriod(educationInfo.startAt, educationInfo.endAt)}
                      {educationInfo.endAt < new Date() ? "" : " (Expected)"}
                    </p>
                  </div>
                </div>

                <div 
                  className="bg-white lg:flex-1 max-lg:aspect-square self-stretch relative cursor-pointer group"
                  onClick={() => setModalImage({ src: educationInfo.image ?? "", title: educationInfo.university })}
                >
                  <img
                    src={educationInfo.image ?? "no"}
                    alt={educationInfo.university}
                    className="w-full h-full object-cover absolute top-0 left-0 transition-transform duration-500 peer"
                  ></img>
                  <div className="absolute top-2.5 right-2.5 bg-background/90 text-foreground p-1 rounded-lg border border-foreground/10 shadow-md hover:scale-105 transition-all opacity-100 lg:opacity-0 lg:hover:scale-105 lg:group-hover:opacity-100  duration-300">
                    <TbZoomScan className="size-6" />
                  </div>
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

      {modalImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
          onClick={() => setModalImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-10 right-0 text-white bg-black hover:bg-white/50 p-1 duration-300 transition-colors z-51 rounded-full"
              onClick={() => setModalImage(null)}
            >
              <span className="sr-only">Close</span>
              <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={modalImage.src}
              alt={modalImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl bg-background p-2"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationInfo;

import { AchievementInformation } from "@/dataProvider/achievements";
import { ExternalLink } from "lucide-react";
import { FaAward, FaStar, FaTrophy } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { useState } from "react";
import { TbZoomScan } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";

type AchievementInfoProps = {
  achievement: AchievementInformation;
};

const getIcon = (type: string) => {
  switch (type) {
    case "trophy":
      return <FaTrophy className="size-6 text-amber-500" />;
    case "award":
      return <FaAward className="size-6 text-blue-500" />;
    case "certificate":
      return <PiCertificateFill className="size-6 text-emerald-500" />;
    case "star":
      return <FaStar className="size-6 text-purple-500" />;
    default:
      return <FaAward className="size-6 text-zinc-500" />;
  }
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};

const AchievementInfo = function ({ achievement }: AchievementInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        key={achievement.id}
        className="bg-linear-to-br from-foreground/5 to-foreground/10 border-2 border-foreground/10 hover:border-foreground/20 rounded-2xl p-5 transition-all duration-300 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-3 group"
      >
        {/* Optional Achievement Image */}

        <div 
          className="w-full aspect-3/2 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-foreground/5 relative cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-cover transition-transform duration-500"
            onError={(e) => {
              // Hide containing element if image fails to load
              e.currentTarget.parentElement!.style.display = "none";
            }}
          />
          <div className="absolute top-2.5 right-2.5 bg-background/90 text-foreground p-1 rounded-lg border border-foreground/10 shadow-md hover:scale-105 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 duration-300">
            <TbZoomScan className="size-6" />
          </div>
        </div>

      {/* Header: Icon and Title */}
      <div className="flex gap-4 items-start">
        <div className="p-2.5 rounded-full bg-background border border-foreground/10 group-hover:scale-110 transition-transform duration-300 shadow-xs shrink-0">
          {getIcon(achievement.iconType)}
        </div>
        <h3 className="font-bold text-lg text-foreground tracking-tight">
          {achievement.title}
        </h3>
      </div>

      {/* Issuer and Date */}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold text-muted-foreground/90">
          {achievement.issuer}
        </p>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground tracking-wider">
          <FaCalendarAlt className="size-3.5 shrink-0" />
          <span>{formatDate(achievement.date)}</span>
        </div>
      </div>

      {/* Description */}
      {achievement.description && (
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {achievement.description}
        </p>
      )}

      {/* Certificate Action Link */}
      {achievement.certificateUrl && (
        <div className="pt-2 mt-auto">
          <a
            href={achievement.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold inline-flex items-center gap-1.5 text-foreground hover:underline transition-all"
          >
            View Certificate
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      )}
    </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-10 right-0 text-white bg-black hover:bg-white/50 p-1 duration-300 transition-colors z-51 rounded-full"
              onClick={() => setIsModalOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={achievement.image}
              alt={achievement.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl bg-background p-2"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AchievementInfo;

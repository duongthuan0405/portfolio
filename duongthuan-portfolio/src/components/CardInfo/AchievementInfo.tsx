import { AchievementInformation } from "@/dataProvider/achievements";
import { Award, ExternalLink } from "lucide-react";
import { FaAward, FaStar, FaTrophy } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";

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
      return <Award className="size-6 text-zinc-500" />;
  }
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const AchievementInfo = function ({ achievement }: AchievementInfoProps) {
  return (
    <div
      key={achievement.id}
      className="bg-linear-to-br from-foreground/5 to-foreground/10 border-2 border-foreground/10 hover:border-foreground/20 rounded-2xl p-5 transition-all duration-300 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-3 group"
    >
      {/* Optional Achievement Image */}

      <div className="w-full aspect-video rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-foreground/5 relative">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Hide containing element if image fails to load
            e.currentTarget.parentElement!.style.display = "none";
          }}
        />
      </div>

      {/* Header: Icon, Date and Title */}
      <div className="flex gap-4 items-start">
        <div className="p-2.5 rounded-full bg-background border border-foreground/10 group-hover:scale-110 transition-transform duration-300 shadow-xs">
          {getIcon(achievement.iconType)}
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {formatDate(achievement.date)}
          </span>
          <h3 className="font-bold text-lg text-foreground tracking-tight mt-0.5">
            {achievement.title}
          </h3>
          <p className="text-sm font-semibold text-muted-foreground/80">
            {achievement.issuer}
          </p>
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
  );
};

export default AchievementInfo;

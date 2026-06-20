import { ExperienceInformation } from "@/dataProvider/experiences";
import { Calendar, ExternalLink, MapPin } from "lucide-react";

type ExperienceInfoProps = {
  experience: ExperienceInformation;
};

const formatPeriod = (start: Date, end: Date | null) => {
  const format = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };
  return `${format(start)} - ${end ? format(end) : "Present"}`;
};

const ExperienceInfo = function ({ experience }: ExperienceInfoProps) {
  return (
    <div className="bg-linear-to-br from-foreground/5 to-foreground/10 border-2 border-foreground/10 hover:border-foreground/20 rounded-2xl p-6 transition-all duration-300 backdrop-blur-xs flex flex-col gap-3 shadow-sm hover:shadow-md">
      {/* Header Information */}
      <div className="flex flex-col items-center md:flex-row gap-4">
        <div className="size-35 rounded-xl overflow-hidden bg-white dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-foreground/10 shadow-xs">
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="size-full object-contain p-1.5"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <h3 className="text-2xl font-bold wrap-break-word text-foreground">
            {experience.role}
          </h3>
          <div className="flex flex-wrap items-left gap-y-1.5 gap-x-5 text-base font-semibold text-muted-foreground">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground hover:underline flex items-center gap-1 transition-colors"
              >
                <p className="shrink">{experience.company}</p>
                <ExternalLink className="size-3.5 inline shrink-0" />
              </a>
            ) : (
              <p>{experience.company}</p>
            )}

            <p className="bg-foreground/15 text-foreground px-2.5 py-0.5 rounded-full font-medium w-fit">
              {experience.type}
            </p>
          </div>

          {/* Period and Location */}
          <div className="flex flex-col text-sm text-muted-foreground gap-1 py-1 shrink-0">
            <div className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              <span>{formatPeriod(experience.startAt, experience.endAt)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="size-4 shrink-0 min-w-0" />
              <span className="wrap-break-word">{experience.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 pt-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-foreground/10 border border-foreground/10 text-foreground px-3 py-1 rounded-lg text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Job Description Points */}
      <ul className="list-disc pl-5 text-foreground space-y-1.5 text-sm md:text-base leading-relaxed">
        {experience.description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceInfo;

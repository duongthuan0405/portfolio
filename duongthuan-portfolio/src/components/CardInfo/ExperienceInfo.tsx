import { ExternalLink } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ExperienceInformation } from "@/dataProvider/experiences";

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

const getTypeStyle = (type: ExperienceInformation["type"]) => {
  switch (type) {
    case "Full-time":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    case "Part-time":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
    case "Internship":
      return "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20";
    case "Freelance":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
    case "Club/Lab":
      return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
    case "Academic":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    default:
      return "bg-foreground/10 text-foreground border-foreground/20";
  }
};

const ExperienceInfo = function ({ experience }: ExperienceInfoProps) {
  return (
    <div className="bg-linear-to-br from-foreground/5 to-foreground/10 border-2 border-foreground/10 hover:border-foreground/20 rounded-2xl p-6 transition-all duration-300 backdrop-blur-xs shadow-sm hover:shadow-md">
      <Collapsible className="flex flex-col gap-3">
        <CollapsibleTrigger asChild>
          <div className="flex justify-between group">
            {/* Header Information */}
            <div className="flex-1">
              <div className="flex flex-col items-center md:flex-row gap-4 grow">
                <div className="size-35 rounded-xl overflow-hidden bg-white dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-foreground/10 shadow-xs">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="size-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <h3 className="text-2xl font-bold wrap-break-word text-foreground text-center md:text-left">
                    {experience.title}
                  </h3>
                  <div className="flex flex-wrap items-left gap-y-1.5 gap-x-5 text-base font-semibold text-muted-foreground ">
                    {experience.companyUrl ? (
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground hover:underline flex items-center gap-2 transition-colors"
                      >
                        <p className="flex-1">{experience.company}</p>
                        <ExternalLink className="size-3.5 inline shrink-0" />
                      </a>
                    ) : (
                      <p>{experience.company}</p>
                    )}

                    <p className={`border text-xs px-2.5 py-0.5 rounded-full font-semibold w-fit tracking-wider uppercase ${getTypeStyle(experience.type)}`}>
                      {experience.type}
                    </p>
                  </div>

                  {/* Period and Location */}
                  <div className="flex flex-col text-sm text-muted-foreground gap-1 py-1 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="size-4" />
                      <span>
                        {formatPeriod(experience.startAt, experience.endAt)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaLocationDot className="size-4 shrink-0 min-w-0" />
                      <span className="wrap-break-word">
                        {experience.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-3">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-foreground/10 border border-foreground/10 text-foreground px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <FaChevronDown className="group-data-[state=open]:rotate-180 shrink-0"></FaChevronDown>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent asChild>
          {/* Job Description Points */}
          <ul className="list-disc pl-5 pt-4 mt-2 border-t border-foreground/20 text-foreground space-y-1.5 text-base leading-relaxed">
            {experience.descriptions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ExperienceInfo;

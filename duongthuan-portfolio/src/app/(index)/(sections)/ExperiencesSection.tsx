"use client";

import experiences from "@/dataProvider/experiences";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperiencesSection = function () {
  const formatPeriod = (start: Date, end: Date | null) => {
    const format = (date: Date) => {
      return date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });
    };
    return `${format(start)} - ${end ? format(end) : "Present"}`;
  };

  return (
    <section
      id="experiences"
      className="flex flex-col items-center gap-10 w-full py-10"
    >
      <div className="text-4xl font-bold">EXPERIENCES</div>

      <div className="relative border-l border-foreground/10 w-full pl-6 md:pl-8 flex flex-col gap-12">
        {experiences.map((exp) => {
          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-10 md:-left-12 bg-background border-2 border-foreground/30 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background group-hover:scale-125 transition-all duration-300 rounded-full p-1.5 flex items-center justify-center">
                <Briefcase className="size-3.5 text-foreground/70 group-hover:text-background" />
              </div>

              {/* Card Container */}
              <div className="bg-linear-to-br from-foreground/5 to-foreground/10 border-2 border-foreground/10 hover:border-foreground/20 rounded-2xl p-6 transition-all duration-300 backdrop-blur-xs flex flex-col gap-4 shadow-sm hover:shadow-md">
                {/* Header Information */}
                <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {exp.logo && (
                      <div className="size-12 rounded-xl overflow-hidden bg-white dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-foreground/10 shadow-xs">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="size-full object-contain p-1.5"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-base font-semibold text-muted-foreground mt-0.5">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground hover:underline inline-flex items-center gap-1 transition-colors"
                          >
                            {exp.company}
                            <ExternalLink className="size-3.5 inline" />
                          </a>
                        ) : (
                          <span>{exp.company}</span>
                        )}
                        <span className="text-foreground/30">•</span>
                        <span className="bg-foreground/10 dark:bg-foreground/15 text-foreground px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Period and Location */}
                  <div className="flex flex-col text-sm text-muted-foreground lg:items-end gap-1 text-left lg:text-right">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="size-4" />
                      <span>{formatPeriod(exp.startAt, exp.endAt)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="size-4 shrink-0 min-w-0" />
                      <span className="wrap-break-word">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Job Description Points */}
                <ul className="list-disc pl-5 text-muted-foreground space-y-1.5 text-sm md:text-base leading-relaxed">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-foreground/5 dark:bg-foreground/10 border border-foreground/10 text-foreground px-3 py-1 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperiencesSection;

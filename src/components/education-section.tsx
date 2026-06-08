"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import Image from "next/image";
const education = [
  {
    id: "edu1",
    degree: "Master of Business Administration (STEM MBA)",
    institution: "Ivy College of Business, Iowa State University",
    duration: "Aug 2023 - May 2025",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg",
  },
  {
    id: "edu2",
    degree: "Master of Science in Information Systems (STEM)",
    institution: "Ivy College of Business, Iowa State University",
    duration: "Aug 2024 - May 2025",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg",
  },
  {
    id: "edu3",
    degree: "Bachelor of Technology, Computer Science",
    institution: "Pragati Engineering College (JNTUK)",
    duration: "2017 - 2021",
    imageUrl: "/pragati_logo.png",
  },
];

export function EducationSection() {
  return (
    <SectionWrapper id="education">
      <SectionTitle>Education</SectionTitle>
      <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">
        Academic foundation combining business strategy, technology, and
        analytics.
      </p>

      <div className="mt-12 space-y-4">
        {education.map((edu, i) => (
          <div
            key={edu.id}
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors duration-300"
          >
            <div className="relative shrink-0 h-14 w-14 rounded-lg bg-background border border-border/50 flex items-center justify-center overflow-hidden p-2">
              <Image
                src={edu.imageUrl}
                alt={`${edu.institution} logo`}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-foreground leading-snug">
                {edu.degree}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                {edu.institution}
              </p>
            </div>

            <span className="text-sm text-muted-foreground tabular-nums shrink-0">
              {edu.duration}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionType,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { GraduationCap, CalendarDays } from 'lucide-react';
import Image from 'next/image'; // Import next/image
import React, { useMemo } from "react";
import { cn } from "@/lib/utils"; // Import cn

const education = [
  {
    id: "edu1",
    degree: "Master of Business Administration (STEM MBA)",
    institution: "Ivy College of Business, Iowa State University",
    duration: "Aug 2023 - May 2025",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg", // Consistent logo
    description: "This program is focused on developing leadership skills and business acumen with a strong emphasis on STEM principles.",
  },
  {
    id: "edu2",
    degree: "Master of Science in Information Systems (STEM)",
    institution: "Ivy College of Business, Iowa State University",
    duration: "Aug 2024 - May 2025",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg", // Consistent logo
    description: "This program focuses on data analytics, business intelligence, and information management, emphasizing the use of technology to solve business problems.",

  },
  {
    id: "edu3",
    degree: "Bachelor of Technology, Computer Science",
    institution: "Pragati Engineering College (JNTUK)",
    duration: "2017 - 2021",
    imageUrl: null, // No logo for this one
    description: "This program provided a comprehensive foundation in computer science, covering programming, algorithms, data structures, and systems design.",
  },
];


export function EducationSection() {

  return (
    // Use a subtle background gradient for the section
    <SectionWrapper id="education" className="bg-gradient-to-b from-card/5 via-secondary/10 to-card/5 dark:from-card/10 dark:via-secondary/15 dark:to-card/10">
      <SectionTitle>Education</SectionTitle>
      {/* Container for responsive layout - defaults to mobile layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

        {/* Mobile Card Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 gap-6 ">
            {education.map((edu) => (
              <div key={edu.id} className={cn(
                // Base card styling: subtle background, standard radius and border
                "flex flex-col bg-card/95 dark:bg-secondary/70 mac-shadow border border-border/20 dark:border-border/30 transition-all duration-300 ease-out",
                // Hover effect: slight lift and border highlight
                "group hover:shadow-lg hover:-translate-y-1"
              )}>
                <div className="flex-row items-center space-y-0 px-4 pt-4 pb-2">
                  {/* Image */}
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-all duration-300">
                    {edu.imageUrl ? (
                                            <Image
                                                src={edu.imageUrl}
                                                alt={`${edu.institution} logo`}
                                                width={40}
                                                height={40}
                                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                                                data-ai-hint="university logo"
                                            />
                                        ) : (
                                            <GraduationCap className="h-7 w-7 text-primary transition-colors duration-300" />
                                        )}
                  </div>
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-foreground/80 dark:text-foreground/75">
                    <CalendarDays className="h-4 w-4 opacity-80" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> 
          {/* Desktop Accordion Layout */}
          <div className="hidden lg:block w-full">
              <Accordion type="multiple" className="w-full">
                  {education.map((edu) => (
                      <AccordionItem
                          key={edu.id}
                          value={edu.id}
                          className={cn("border-b border-border/20 dark:border-border/30 bg-card/95 dark:bg-secondary/70")}
                      >
                          <AccordionTrigger className="p-0 hover:no-underline">
                              {/* Image */}
                              <div className="flex items-center p-4 justify-center w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-all duration-300">
                                  {edu.imageUrl ? (
                                      <Image src={edu.imageUrl} alt={`${edu.institution} logo`} width={40} height={40} className="object-contain transition-transform duration-300 group-hover:scale-110" data-ai-hint="university logo" />
                                  ) : (
                                      <GraduationCap className="h-7 w-7 text-primary transition-colors duration-300" />
                                  )}
                              </div>
                              {/* Text Content */}
                              <div className="flex-1 pl-4">
                                  <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                              </div>
                              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-foreground/80 dark:text-foreground/75 pr-4">
                                  <CalendarDays className="h-4 w-4 opacity-80" />
                                  <span>{edu.duration}</span>
                              </div>
                          </AccordionTrigger>
                      </AccordionItem>
                  ))}
              </Accordion>
          </div>
      </div>

              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionWrapper>
  );
}

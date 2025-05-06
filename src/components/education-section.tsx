
"use client";
import { GraduationCap } from 'lucide-react';
import React from "react";
import { cn } from "@/lib/utils"; // Import cn
import Image from 'next/image'; // Import next/image

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
    imageUrl: "https://pragati.ac.in/wp-content/uploads/2022/10/pragati-logo-JK-2-1536x572.png", // Updated logo URL
    description: "This program provided a comprehensive foundation in computer science, covering programming, algorithms, data structures, and systems design.",
  },
];


export function EducationSection() {

  return (
    <div id="education" className="bg-gradient-to-b from-card/5 via-secondary/10 to-card/5 dark:from-card/10 dark:via-secondary/15 dark:to-card/10 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      {/* Container for responsive layout */}
      <div className="container px-4 md:px-6 max-w-5xl mx-auto"> {/* Constrain width */}
        {/* Mobile Card Layout - Remains the same */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 gap-6">
            {education.map((edu) => (
              <div key={edu.id} className={cn(
                "flex flex-col bg-card/95 dark:bg-secondary/70 mac-shadow border border-border/20 dark:border-border/30 transition-all duration-300 ease-out",
                "group hover:shadow-lg hover:-translate-y-1"
              )}>
                <div className="flex items-center space-x-4 px-4 pt-4 pb-2">
                  {/* Container for logo/icon - Conditionally larger for edu3 */}
                  <div className={cn(
                    "flex items-center justify-center group-hover:scale-110 transition-all duration-300 shrink-0 p-1",
                    edu.id === 'edu3'
                      ? "w-12 h-12 md:w-16 md:h-16" // Larger container for edu3 on mobile/md
                      : "w-10 h-10 md:w-12 md:h-12" // Standard container size
                  )}>
                    {edu.imageUrl ? (
                      <Image src={edu.imageUrl} alt={`${edu.institution} logo`}
                       width={edu.id === 'edu3' ? 56 : 40} // Larger image for edu3
                       height={edu.id === 'edu3' ? 56 : 40} // Larger image for edu3
                       className="object-contain transition-transform duration-300 group-hover:scale-110" data-ai-hint="university logo" />
                    ) : (
                      <GraduationCap className="h-7 w-7 text-primary transition-colors duration-300" />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-1">
                  <p className="text-xs text-muted-foreground">{edu.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Static Layout (Replaces Accordion) */}
        <div className="hidden lg:block w-full space-y-4"> {/* Use space-y for gap */}
            {education.map((edu) => (
              // Replaces AccordionItem - Use a styled div for the container
              <div key={edu.id} className={cn(
                "border border-border/20 dark:border-border/30 rounded-lg bg-card/90 dark:bg-secondary/60 mac-shadow overflow-hidden",
                "transition-all duration-300 ease-out hover:border-primary/40 dark:hover:border-accent/60 transform hover:-translate-y-0.5" // Keep hover effect
              )}>
                {/* Replaces AccordionTrigger - Use a styled div for the header content */}
                 <div className="p-4 md:p-6 flex items-center gap-4 w-full"> {/* Keep existing layout */}
                       {/* Container for logo/icon - Conditionally larger for edu3 */}
                      <div className={cn(
                        "flex items-center justify-center group-hover:scale-110 transition-all duration-300 shrink-0 p-2",
                        edu.id === 'edu3'
                          ? "w-20 h-20 md:w-24 md:h-24" // Larger container for edu3 on desktop
                          : "w-16 h-16 md:w-20 md:h-20" // Standard container size
                      )}>
                        {edu.imageUrl ? (
                          <Image src={edu.imageUrl} alt={`${edu.institution} logo`}
                            width={edu.id === 'edu3' ? 72 : 60} // Larger image for edu3
                            height={edu.id === 'edu3' ? 72 : 60} // Larger image for edu3
                            className="object-contain transition-transform duration-300 group-hover:scale-110" data-ai-hint="university logo" />
                        ) : (
                          <GraduationCap className="h-8 w-8 text-primary transition-colors duration-300" />
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base md:text-lg font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">{edu.institution}</p>
                      </div>
                      <div className="text-right ml-auto shrink-0">
                         <p className="text-xs md:text-sm text-muted-foreground">{edu.duration}</p>
                      </div>
                      {/* Removed ChevronDown icon */}
                 </div>
                 {/* Removed AccordionContent as it was empty for desktop */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );

};

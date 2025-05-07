// src/components/education-section.tsx
"use client";
import { GraduationCap } from 'lucide-react';
import React from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image';

const education = [
  {
    id: "edu1",
    degree: "Master of Business Administration (STEM MBA)",
    institution: "Ivy College of Business, Iowa State University",
    duration: "Aug 2023 - May 2025",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg",
    description: "This program is focused on developing leadership skills and business acumen with a strong emphasis on STEM principles.",
  },
  {
    id: "edu2",
    degree: "Master of Science in Information Systems (STEM)",
    institution: "Ivy College of Business, Iowa State University",
    duration: "Aug 2024 - May 2025",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg",
    description: "This program focuses on data analytics, business intelligence, and information management, emphasizing the use of technology to solve business problems.",
  },
  {
    id: "edu3",
    degree: "Bachelor of Technology, Computer Science",
    institution: "Pragati Engineering College (JNTUK)",
    duration: "2017 - 2021",
    imageUrl: "https://pragati.ac.in/wp-content/uploads/2022/10/pragati-logo-JK-2-1536x572.png",
    description: "This program provided a comprehensive foundation in computer science, covering programming, algorithms, data structures, and systems design.",
  },
];

export function EducationSection() {
  return (
    <div id="education" className="bg-gradient-to-b from-card/5 via-secondary/10 to-card/5 dark:from-card/10 dark:via-secondary/15 dark:to-card/10 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        {/* Mobile Card Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 gap-6">
            {education.map((edu) => (
              <div key={edu.id} className={cn(
                "flex flex-col bg-card/95 dark:bg-secondary/70 mac-shadow border border-border/20 dark:border-border/30 transition-all duration-300 ease-out",
                "group hover:shadow-lg hover:-translate-y-1"
              )}>
                <div className="flex items-center space-x-4 px-4 pt-4 pb-2">
                  <div className={cn(
                    "flex items-center justify-center group-hover:scale-110 transition-all duration-300 shrink-0 p-1 rounded-md",
                    edu.id === 'edu3'
                      ? "w-18 h-18 md:w-24 md:h-24"
                      : "w-10 h-10 md:w-12 md:h-12"
                  )}>
                    {edu.imageUrl ? (
                      <Image src={edu.imageUrl} alt={`${edu.institution} logo`}
                       width={edu.id === 'edu3' ? 84 : 40}
                       height={edu.id === 'edu3' ? 84 : 40}
                       sizes={edu.id === 'edu3' ? "(max-width: 768px) 84px, 108px" : "(max-width: 768px) 40px, 60px"} // Added sizes prop
                       className="object-contain transition-transform duration-300 group-hover:scale-110" data-ai-hint="university logo" 
                       style={{ height: 'auto' }} />
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

        {/* Desktop Static Layout */}
        <div className="hidden lg:block w-full space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className={cn(
                "border border-border/20 dark:border-border/30 rounded-lg bg-card/90 dark:bg-secondary/60 mac-shadow overflow-hidden",
                "transition-all duration-300 ease-out hover:border-primary/40 dark:hover:border-accent/60 transform hover:-translate-y-0.5"
              )}>
                 <div className="p-4 md:p-6 flex items-center gap-4 w-full">
                      <div className={cn(
                        "flex items-center justify-center group-hover:scale-110 transition-all duration-300 shrink-0 p-2 rounded-lg",
                        edu.id === 'edu3'
                          ? "w-[108px] h-[108px]"
                          : "w-16 h-16 md:w-20 md:h-20"
                      )}>
                        {edu.imageUrl ? (
                          <Image src={edu.imageUrl} alt={`${edu.institution} logo`}
                            width={edu.id === 'edu3' ? 108 : 60}
                            height={edu.id === 'edu3' ? 108 : 60}
                            sizes={edu.id === 'edu3' ? "108px" : "60px"} // Added sizes prop
                            className="object-contain transition-transform duration-300 group-hover:scale-110" data-ai-hint="university logo" 
                            style={{ height: 'auto' }} />
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
                 </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

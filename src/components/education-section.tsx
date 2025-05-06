"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    imageUrl: null, // No logo for this one
    description: "This program provided a comprehensive foundation in computer science, covering programming, algorithms, data structures, and systems design.",
  },
];


export function EducationSection() {

  return (
    <div id="education" className="bg-gradient-to-b from-card/5 via-secondary/10 to-card/5 dark:from-card/10 dark:via-secondary/15 dark:to-card/10 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      {/* Container for responsive layout - defaults to mobile layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {/* Mobile Card Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 gap-6">
            {education.map((edu) => (
              <div key={edu.id} className={cn(
                // Base card styling: subtle background, standard radius and border
                "flex flex-col bg-card/95 dark:bg-secondary/70 mac-shadow border border-border/20 dark:border-border/30 transition-all duration-300 ease-out",
                // Hover effect: slight lift and border highlight
                "group hover:shadow-lg hover:-translate-y-1"
              )}>
                <div className="flex items-center space-x-4 px-4 pt-4 pb-2">
                  {/* Image */}
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-all duration-300">
                    {edu.imageUrl ? (
                      <Image src={edu.imageUrl} alt={`${edu.institution} logo`} width={40} height={40} className="object-contain transition-transform duration-300 group-hover:scale-110" data-ai-hint="university logo" />
                    ) : (
                      <GraduationCap className="h-7 w-7 text-primary transition-colors duration-300" />
                    )}
                  </div>
                  {/* Text Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  </div>
                </div>
                {/* Add duration for mobile view */}
                <div className="px-4 pb-4 pt-1">
                  <p className="text-xs text-muted-foreground">{edu.duration}</p>
                  {/* Optional: Add description if needed */}
                  {/* <p className="text-xs text-muted-foreground mt-2">{edu.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Desktop Accordion Layout */}
        <div className="hidden lg:block w-full lg:col-span-3"> {/* Ensure it spans full width on large screens */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {education.map((edu) => (
              <AccordionItem key={edu.id} value={edu.id} className={cn(
                "border border-border/20 dark:border-border/30 rounded-lg bg-card/90 dark:bg-secondary/60 mac-shadow overflow-hidden",
                "transition-all duration-300 ease-out hover:border-primary/40 dark:hover:border-accent/60 transform hover:-translate-y-0.5"
              )}>
                <AccordionTrigger className="p-4 md:p-6 text-left hover:no-underline hover:bg-accent/5 dark:hover:bg-accent/10 transition-colors data-[state=open]:bg-accent/10 dark:data-[state=open]:bg-accent/15">
                    <div className="flex items-center gap-4 w-full">
                      <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 group-hover:scale-110 transition-all duration-300 shrink-0 bg-primary/10 dark:bg-primary/20 p-2 rounded-full"> {/* Increased size */}
                        {edu.imageUrl ? (
                          <Image src={edu.imageUrl} alt={`${edu.institution} logo`} width={60} height={60} className="object-contain transition-transform duration-300 group-hover:scale-110" data-ai-hint="university logo" /> /* Increased size */
                        ) : (
                          <GraduationCap className="h-8 w-8 text-primary transition-colors duration-300" /> /* Increased size */
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
                </AccordionTrigger>
                <AccordionContent className="p-4 md:p-6 pt-0 border-t border-border/20 dark:border-border/30 bg-card/50 dark:bg-secondary/30">
                   {/* Description removed from desktop view */}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );

};

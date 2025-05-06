import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { GraduationCap, CalendarDays } from 'lucide-react';
import Image from 'next/image'; // Import next/image
import * as React from "react";
import { cn } from "@/lib/utils"; // Import cn

const education = [
  {
    id: "edu1",
    degree: "Master of Business Administration (STEM MBA)",
    institution: "Ivy College of Business, Iowa State University",
    years: "Aug 2023 - May 2025",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg", // Consistent logo
  },
  {
    id: "edu2",
    degree: "Master of Science in Information Systems (STEM)",
    institution: "Ivy College of Business, Iowa State University",
    years: "Aug 2024 - May 2025",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg", // Consistent logo
  },
  {
    id: "edu3",
    degree: "Bachelor of Technology, Computer Science",
    institution: "Pragati Engineering College (JNTUK)",
    years: "2017 - 2021",
    imageUrl: null, // No logo for this one
  },
];

export function EducationSection() {
  return (
    // Use a subtle background gradient for the section
    <SectionWrapper id="education" className="bg-gradient-to-b from-card/5 via-secondary/10 to-card/5 dark:from-card/10 dark:via-secondary/15 dark:to-card/10">
      <SectionTitle>Education</SectionTitle>
       {/* Keep the 3-column grid layout for larger screens */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {education.map((edu, index) => (
            // Simplified Card Styling: cleaner background, softer shadow, subtle hover
            <Card
              key={edu.id}
              className={cn(
                 // Base card styling: subtle background, standard radius and border
                 "flex flex-col bg-card/95 dark:bg-secondary/70 mac-shadow border border-border/20 dark:border-border/30 transition-all duration-300 ease-out",
                 // Hover effect: slight lift and border highlight
                 "hover:shadow-lg hover:border-primary/40 dark:hover:border-primary/50 transform hover:-translate-y-1.5", // Slightly increased lift
                 // Ensure consistent height if needed, or let content dictate
                 "group" // Add group for potential group-hover effects if desired later
              )}
              // Apply animation delay for staggered effect
              style={{ '--animation-delay': `${150 + index * 100}ms` } as React.CSSProperties}
            >
               {/* Refined Card Header Layout */}
               <CardHeader className="flex flex-row items-center gap-4 p-5 md:p-6 pb-3"> {/* Centered alignment */}
                  {/* Icon/Logo Container */}
                  <div className="bg-primary/15 dark:bg-primary/25 p-2.5 rounded-lg shrink-0 w-14 h-14 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/25 dark:group-hover:bg-primary/30"> {/* Slightly larger icon bg */}
                     {edu.imageUrl ? (
                         <Image
                           src={edu.imageUrl}
                           alt={`${edu.institution} logo`}
                           width={40} // Adjusted size for better visibility
                           height={40}
                           className="object-contain transition-transform duration-300 group-hover:scale-110" // Subtle hover scale
                           data-ai-hint="university logo"
                         />
                       ) : (
                         <GraduationCap className="h-7 w-7 text-primary transition-colors duration-300" /> // Larger icon
                       )}
                  </div>
                   {/* Text Content */}
                   <div className="flex-1">
                       <CardTitle as="h3" className="text-base md:text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">{edu.degree}</CardTitle>
                       <CardDescription className="text-sm md:text-base text-muted-foreground mt-1.5">{edu.institution}</CardDescription> {/* Slightly more margin */}
                   </div>
               </CardHeader>
               {/* Card Content for Years - Consistent Padding */}
               <CardContent className="p-5 md:p-6 pt-2 mt-auto"> {/* Use mt-auto to push to bottom */}
                    <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-foreground/80 dark:text-foreground/75">
                        <CalendarDays className="h-4 w-4 opacity-80" /> {/* Slightly less muted */}
                        <span>{edu.years}</span>
                    </div>
               </CardContent>
            </Card>
          ))}
      </div>
    </SectionWrapper>
  );
}

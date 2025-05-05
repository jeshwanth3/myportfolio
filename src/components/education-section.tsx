import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { GraduationCap, CalendarDays } from 'lucide-react';
import Image from 'next/image'; // Import next/image

const education = [
  {
    id: "edu1",
    degree: "Master of Business Administration (STEM MBA)",
    institution: "Ivy College of Business, Iowa State University",
    years: "Aug 2023 - May 2025",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg", // Added logo URL
  },
  {
    id: "edu2",
    degree: "Master of Science in Information Systems (STEM)",
    institution: "Ivy College of Business, Iowa State University",
    years: "Aug 2024 - May 2025",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg", // Added logo URL
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
    // Slightly different background gradient for visual separation
    <SectionWrapper id="education" className="bg-gradient-to-b from-card/5 via-secondary/15 to-card/5 dark:from-card/10 dark:via-secondary/25 dark:to-card/10">
      <SectionTitle>Education</SectionTitle>
       {/* Consistent gap for grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {education.map((edu, index) => (
            // Enhanced Card Styling with unique hover effect using accent color
            <Card
              key={edu.id}
              // Apply subtle gradient background, enhanced shadow, and border effect on hover
              className="flex flex-col bg-gradient-to-br from-card/90 to-secondary/80 dark:from-secondary/60 dark:to-card/70 mac-shadow border border-border/20 dark:border-border/30 transition-all duration-300 ease-out hover:shadow-lg hover:border-accent/50 dark:hover:border-primary/60 transform hover:-translate-y-2 group"
              // Staggered animation delay for each card
              style={{ '--animation-delay': `${150 + index * 100}ms` } as React.CSSProperties}
            >
               {/* Improved Card Header Layout - Icon treatment */}
               <CardHeader className="flex flex-row items-start gap-4 p-5 md:p-6 pb-3">
                  {/* Icon container with background matching card but slightly different opacity */}
                  <div className="bg-primary/15 dark:bg-primary/20 p-3 rounded-lg mt-0.5 shrink-0 group-hover:bg-accent/20 dark:group-hover:bg-accent/25 transition-colors duration-300 w-12 h-12 flex items-center justify-center">
                     {/* Conditionally render image or fallback icon */}
                     {edu.imageUrl ? (
                         <Image
                           src={edu.imageUrl}
                           alt={`${edu.institution} logo`}
                           width={24} // Adjust size as needed
                           height={24} // Adjust size as needed
                           className="object-contain group-hover:scale-110 transition-transform duration-300" // Added hover effect
                           data-ai-hint="university logo" // AI Hint
                         />
                       ) : (
                         <GraduationCap className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                       )}
                  </div>
                   <div className="flex-1">
                       <CardTitle as="h3" className="text-lg md:text-xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">{edu.degree}</CardTitle>
                       <div className="flex items-center mt-1.5 gap-2"> {/* Wrapper for institution */}
                           <CardDescription className="text-sm md:text-base text-muted-foreground">{edu.institution}</CardDescription>
                       </div>
                   </div>
               </CardHeader>
               {/* Consistent Padding for Content - Added year display with icon */}
               <CardContent className="p-5 md:p-6 pt-2 flex-1 flex flex-col justify-end"> {/* Ensure content takes space and aligns year at bottom */}
                    <div className="flex items-center gap-2 text-sm md:text-base font-medium text-foreground/80 dark:text-foreground/75 mt-auto"> {/* Use mt-auto to push to bottom */}
                        <CalendarDays className="h-4 w-4 opacity-70" />
                        <span>{edu.years}</span>
                    </div>
               </CardContent>
            </Card>
          ))}
      </div>
    </SectionWrapper>
  );
}

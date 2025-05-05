import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { GraduationCap } from 'lucide-react';

const education = [
  {
    id: "edu1",
    degree: "Master of Business Administration (STEM MBA)",
    institution: "Iowa State University, Ivy College of Business",
    years: "August 2023 to May 2025",
  },
  {
    id: "edu2",
    degree: "Master of Science in Information Systems (STEM)",
    institution: "Iowa State University, Ivy College of Business",
    years: "August 2024 - May 2025",
  },
  {
    id: "edu3",
    degree: "Bachelor of Technology, Computer Science",
    institution: "Pragati Engineering College (JNTUK)",
    years: "2017 - 2021",
  },
];

export function EducationSection() {
  return (
    <SectionWrapper id="education" className="bg-secondary/20 dark:bg-card/25">
      <SectionTitle>Education</SectionTitle>
       {/* Consistent gap for grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {education.map((edu) => (
            // Enhanced Card Styling with consistent hover effect using accent color
            <Card
              key={edu.id}
              className="bg-card/95 dark:bg-secondary/70 mac-shadow transition-all duration-300 ease-out hover:shadow-lg hover:border-primary/40 dark:hover:border-accent/60 transform hover:-translate-y-1.5"
            >
               {/* Improved Card Header Layout */}
               <CardHeader className="flex flex-row items-start gap-4 p-5 md:p-6 pb-3">
                  <div className="bg-primary/15 dark:bg-primary/25 p-2.5 rounded-full mt-0.5 shrink-0"> {/* Adjusted margin & padding */}
                      <GraduationCap className="h-5 w-5 text-primary" /> {/* Consistent icon size and color */}
                  </div>
                   <div className="flex-1">
                       <CardTitle as="h3" className="text-lg md:text-xl font-semibold leading-snug text-foreground">{edu.degree}</CardTitle>
                       <CardDescription className="text-sm md:text-base text-muted-foreground mt-1.5">{edu.institution}</CardDescription> {/* Slightly increased top margin */}
                   </div>
               </CardHeader>
               {/* Consistent Padding for Content */}
               <CardContent className="p-5 md:p-6 pt-0">
                   <p className="text-sm md:text-base font-medium text-foreground/85 dark:text-foreground/75">{edu.years}</p> {/* Slightly adjusted text color */}
               </CardContent>
            </Card>
          ))}
      </div>
    </SectionWrapper>
  );
}

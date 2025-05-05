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
    <SectionWrapper id="education" className="bg-secondary/20 dark:bg-card/25"> {/* Adjusted background */}
      <SectionTitle>Education</SectionTitle>
       {/* Grid layout adjusts for mobile */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {education.map((edu) => (
            <Card
              key={edu.id}
              className="bg-card/95 dark:bg-secondary/70 mac-shadow transition-all duration-300 ease-out hover:shadow-lg hover:border-primary/40 dark:hover:border-accent/60 transform hover:-translate-y-1.5" // Enhanced card style
            >
               <CardHeader className="flex flex-row items-start gap-4 p-5 md:p-6 pb-3">
                  <div className="bg-primary/15 dark:bg-primary/25 p-2.5 rounded-full mt-0.5 shrink-0"> {/* Adjusted icon bg */}
                      <GraduationCap className="h-5 w-5 text-primary" /> {/* Use primary color */}
                  </div>
                   <div className="flex-1">
                       <CardTitle as="h3" className="text-base md:text-lg font-semibold leading-snug text-foreground">{edu.degree}</CardTitle> {/* Changed to h3 */}
                       <CardDescription className="text-xs md:text-sm text-muted-foreground mt-1.5">{edu.institution}</CardDescription> {/* Adjusted spacing */}
                   </div>
               </CardHeader>
               <CardContent className="p-5 md:p-6 pt-0">
                   <p className="text-xs md:text-sm font-medium text-foreground/85 dark:text-foreground/75">{edu.years}</p> {/* Adjusted text color */}
               </CardContent>
            </Card>
          ))}
      </div>
    </SectionWrapper>
  );
}

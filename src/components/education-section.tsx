import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Master of Business Administration (STEM MBA)",
    institution: "Iowa State University, Ivy College of Business",
    years: "Expected Dec 2024", // Adjust as needed
  },
  {
    degree: "Master of Science in Information Systems (STEM)",
    institution: "Iowa State University, Ivy College of Business",
    years: "Expected Dec 2024", // Adjust as needed
  },
  {
    degree: "Bachelor of Technology, Computer Science",
    institution: "Pragati Engineering College (JNTUK)",
    years: "2017 - 2021", // Adjust as needed
  },
];

export function EducationSection() {
  return (
    <SectionWrapper id="education" className="bg-secondary/20 dark:bg-card/30"> {/* Subtle background contrast */}
      <SectionTitle>Education</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {education.map((edu, index) => (
          <Card key={index} className="bg-card/90 dark:bg-secondary/60 mac-shadow hover:border-primary/40 dark:hover:border-accent/60 transition-all duration-300 ease-out hover:shadow-lg transform hover:-translate-y-1"> {/* Use mac-shadow, added transform, use new theme colors */}
            <CardHeader className="p-5 md:p-6"> {/* Adjusted padding */}
              <div className="flex items-start gap-4 mb-1"> {/* Align items start, reduced mb */}
                 <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full mt-0.5 shrink-0"> {/* Icon background using primary color */}
                    <GraduationCap className="h-5 w-5 text-primary " />
                 </div>
                 <div className="flex-1"> {/* Allow text to wrap */}
                    <CardTitle className="text-base md:text-lg font-semibold leading-snug text-foreground">{edu.degree}</CardTitle> {/* Adjusted size and leading */}
                    <CardDescription className="text-xs md:text-sm text-muted-foreground mt-1">{edu.institution}</CardDescription>
                 </div>
              </div>
            </CardHeader>
            <CardContent className="p-5 md:p-6 pt-0"> {/* Adjusted padding */}
              <p className="text-xs md:text-sm font-medium text-foreground/80 dark:text-foreground/70">{edu.years}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

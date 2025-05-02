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
    <SectionWrapper id="education" className="bg-secondary/30 dark:bg-card/50"> {/* Subtle background contrast */}
      <SectionTitle>Education</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {education.map((edu, index) => (
          <Card key={index} className="bg-card dark:bg-secondary/50 mac-shadow hover:border-primary/30 transition-all duration-300 ease-out"> {/* Use mac-shadow */}
            <CardHeader className="p-4 md:p-6"> {/* Adjusted padding */}
              <div className="flex items-start gap-3 mb-2"> {/* Align items start for better layout */}
                 <GraduationCap className="h-6 w-6 text-primary mt-1 shrink-0" /> {/* Added margin-top */}
                 <div className="flex-1"> {/* Allow text to wrap */}
                    <CardTitle className="text-base md:text-lg font-semibold leading-snug text-foreground">{edu.degree}</CardTitle> {/* Adjusted size and leading */}
                    <CardDescription className="text-xs md:text-sm text-muted-foreground mt-1">{edu.institution}</CardDescription>
                 </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0"> {/* Adjusted padding */}
              <p className="text-xs md:text-sm font-medium text-foreground/80 dark:text-foreground/70">{edu.years}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { GraduationCap, CalendarDays } from 'lucide-react'; // Added CalendarDays for visual variety

const education = [
  {
    id: "edu1",
    degree: "Master of Business Administration (STEM MBA)",
    institution: "Ivy College of Business, Iowa State University",
    years: "Aug 2023 - May 2025",
  },
  {
    id: "edu2",
    degree: "Master of Science in Information Systems (STEM)",
    institution: "Ivy College of Business, Iowa State University",
    years: "Aug 2024 - May 2025",
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
              className="bg-gradient-to-br from-card/90 to-secondary/80 dark:from-secondary/60 dark:to-card/70 mac-shadow border border-border/20 dark:border-border/30 transition-all duration-300 ease-out hover:shadow-lg hover:border-accent/50 dark:hover:border-primary/60 transform hover:-translate-y-2 group"
              // Staggered animation delay for each card
              style={{ '--animation-delay': `${150 + index * 100}ms` } as React.CSSProperties}
            >
               {/* Improved Card Header Layout - Icon treatment */}
               <CardHeader className="flex flex-row items-start gap-4 p-5 md:p-6 pb-3">
                  {/* Icon container with background matching card but slightly different opacity */}
                  <div className="bg-primary/15 dark:bg-primary/20 p-3 rounded-lg mt-0.5 shrink-0 group-hover:bg-accent/20 dark:group-hover:bg-accent/25 transition-colors duration-300">
                      <GraduationCap className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                   <div className="flex-1">
                       <CardTitle as="h3" className="text-lg md:text-xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">{edu.degree}</CardTitle>
                       <CardDescription className="text-sm md:text-base text-muted-foreground mt-1.5">{edu.institution}</CardDescription>
                   </div>
               </CardHeader>
               {/* Consistent Padding for Content - Added year display with icon */}
               <CardContent className="p-5 md:p-6 pt-2">
                    <div className="flex items-center gap-2 text-sm md:text-base font-medium text-foreground/80 dark:text-foreground/75 mt-2">
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

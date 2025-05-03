import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { GraduationCap } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const education = [
  {
    id: "edu1",
    degree: "Master of Business Administration (STEM MBA)",
    institution: "Iowa State University, Ivy College of Business",
    years: "Expected Dec 2024",
  },
  {
    id: "edu2",
    degree: "Master of Science in Information Systems (STEM)",
    institution: "Iowa State University, Ivy College of Business",
    years: "Expected Dec 2024",
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
    <SectionWrapper id="education" className="bg-secondary/20 dark:bg-card/30">
      <SectionTitle>Education</SectionTitle>
       {/* Wrap education cards in Accordion for consistency */}
       <Accordion type="single" collapsible className="w-full space-y-4">
          {education.map((edu, index) => (
            <AccordionItem key={edu.id} value={edu.id} className="border border-border/30 dark:border-border/50 rounded-lg bg-card/90 dark:bg-secondary/60 mac-shadow transition-all duration-300 ease-out overflow-hidden hover:border-accent/50 dark:hover:border-accent/70 transform hover:-translate-y-0.5">
              <AccordionTrigger className="p-4 md:p-6 text-left hover:no-underline hover:bg-accent/10 dark:hover:bg-accent/15 transition-colors data-[state=open]:bg-accent/15 dark:data-[state=open]:bg-accent/20 hover:text-accent dark:hover:text-accent dark:data-[state=open]:text-accent">
                 <div className="flex items-start gap-4 w-full">
                    <div className="mt-1 shrink-0 bg-accent/10 dark:bg-accent/20 p-2 rounded-full">
                        <GraduationCap className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-base md:text-lg font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">{edu.institution}</p>
                    </div>
                 </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 md:p-6 pt-0 border-t border-border/30 dark:border-border/40 bg-card/50 dark:bg-secondary/30">
                  <p className="text-xs md:text-sm font-medium text-foreground/80 dark:text-foreground/70">{edu.years}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </SectionWrapper>
  );
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    id: "exp1",
    title: "Lead Business Analyst (Product Manager)",
    company: "CyBIZ Lab, Iowa State University",
    location: "Ames, IA",
    duration: "Aug 2023 - Present",
    description: "Drove product strategy for transit optimization tools, aligning stakeholders and leveraging data for impactful feature delivery.",
    achievements: [
      "Developed roadmap for transit optimization tools, resulting in a 20% reduction in average commute times and boosted user satisfaction.",
      "Conducted 15+ user interviews and stakeholder workshops, leading to a 25% increase in feature adoption.",
      "Led integration of real-time data feeds for an Incident Management Dashboard, reducing response times by 80%.",
      "Defined and monitored 10+ KPIs, contributing to a 15% reduction in commuter delays.",
      "Translated complex transportation data into actionable insights for product development.",
    ],
    icon: <Briefcase className="h-5 w-5 text-accent" /> // Use accent color for icon
  },
  {
    id: "exp2",
    title: "Business Analyst Intern",
    company: "Able Up Iowa",
    location: "Ames, IA",
    duration: "May 2023 - Aug 2023",
    description: "Analyzed insurance data, automated ETL pipelines, and developed BI dashboards to provide key business insights.",
    achievements: [
        "Processed over 100K records to generate insights into insurer trends and performance.",
        "Designed and implemented serverless Azure ETL pipelines, reducing data processing time by 50%.",
        "Created Power BI reports visualizing 15+ KPIs for operational monitoring.",
        "Developed Azure-based workflows for seamless data integration from various sources.",
        "Presented analytical findings and recommendations to cross-functional teams.",
    ],
    icon: <Briefcase className="h-5 w-5 text-accent" /> // Use accent color for icon
  },
  {
    id: "exp3",
    title: "Associate Software Engineer",
    company: "Accenture",
    location: "India",
    duration: "Aug 2021 - Jun 2022",
    description: "Contributed to SaaS product development, focusing on automation, backlog management, and CI/CD implementation.",
    achievements: [
      "Achieved 100% automation of data ingestion processes, saving 200+ manual hours monthly and increasing productivity by over 90%.",
      "Collaborated with product teams on Blue Yonder SaaS backlog grooming, contributing to a 20% reduction in incident tickets.",
      "Implemented automated deployment pipelines using Azure DevOps, improving release efficiency by 40%.",
      "Resolved over 40 critical production issues for the SaaS platform, ensuring stability.",
    ],
    icon: <Briefcase className="h-5 w-5 text-accent" /> // Use accent color for icon
  },
   {
    id: "exp4",
    title: "Data Analyst Intern",
    company: "WNS Global Service",
    location: "India",
    duration: "May 2019 - Jul 2019",
    description: "Supported ETL processes, performed ad-hoc analysis, and identified market trends.",
    achievements: [
        "Assisted in maintaining ETL pipelines, improving dashboard refresh efficiency by 30%.",
        "Responded to 20+ weekly ad-hoc data analysis queries from business users.",
        "Identified key market trends and presented data-backed recommendations.",
    ],
    icon: <Briefcase className="h-5 w-5 text-accent" /> // Use accent color for icon
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-secondary/10 dark:bg-card/20">
      <SectionTitle>Work Experience</SectionTitle>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {experiences.map((exp) => (
          <AccordionItem key={exp.id} value={exp.id} className="border border-border/30 dark:border-border/50 rounded-lg bg-card/90 dark:bg-secondary/60 mac-shadow transition-all duration-300 ease-out overflow-hidden hover:border-accent/50 dark:hover:border-accent/70 transform hover:-translate-y-0.5"> {/* Updated hover border to accent */}
            <AccordionTrigger className="p-4 md:p-6 text-left hover:no-underline hover:bg-accent/10 dark:hover:bg-accent/15 transition-colors data-[state=open]:bg-accent/15 dark:data-[state=open]:bg-accent/20 hover:text-accent dark:hover:text-accent dark:data-[state=open]:text-accent"> {/* Use accent color for hover and open states */}
               <div className="flex items-start gap-4 w-full">
                  {/* Ensure icon background uses accent theme color */}
                  <div className="mt-1 shrink-0 bg-accent/10 dark:bg-accent/20 p-2 rounded-full">
                      {exp.icon}
                  </div>
                  <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold text-foreground">{exp.title}</h3>
                      <div className="text-xs md:text-sm text-muted-foreground mt-1 flex flex-col sm:flex-row sm:items-center sm:gap-x-3 gap-y-0.5 flex-wrap">
                          <span className="font-medium text-foreground/90">{exp.company}</span>
                          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {exp.location}</span>
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {exp.duration}</span>
                      </div>
                  </div>
               </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 md:p-6 pt-0 border-t border-border/30 dark:border-border/40 bg-card/50 dark:bg-secondary/30">
              <p className="mb-3 text-sm md:text-base text-foreground/80 dark:text-foreground/75">{exp.description}</p>
              <ul className="list-disc space-y-1.5 pl-5 text-xs md:text-sm text-foreground/85 dark:text-foreground/80">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}

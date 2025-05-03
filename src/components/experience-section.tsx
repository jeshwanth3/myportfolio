import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    icon: <Briefcase className="h-5 w-5 text-primary" />
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
    icon: <Briefcase className="h-5 w-5 text-primary" />
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
    icon: <Briefcase className="h-5 w-5 text-primary" />
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
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-secondary/10 dark:bg-card/20">
      <SectionTitle>Work Experience</SectionTitle>
      <Tabs defaultValue={experiences[0].id} className="w-full">
        {/* Ensure grid adjusts for mobile */}
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 h-auto p-1 bg-muted/50 dark:bg-muted/30 rounded-lg mb-6">
          {experiences.map((exp) => (
             <TabsTrigger
               key={exp.id}
               value={exp.id}
               // Adjusted padding and text size for better mobile experience
               className="px-3 py-3 sm:py-2.5 text-sm sm:text-sm font-medium leading-tight whitespace-normal text-muted-foreground data-[state=active]:bg-background dark:data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm rounded-md transition-all duration-200 ease-in-out"
            >
               {exp.company}
            </TabsTrigger>
          ))}
        </TabsList>
        {experiences.map((exp) => (
          <TabsContent key={exp.id} value={exp.id}>
            <Card className="bg-card/90 dark:bg-secondary/60 mac-shadow border border-border/20 dark:border-border/30">
              <CardHeader className="p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 bg-primary/10 dark:bg-primary/20 p-2 rounded-full">
                      {exp.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle as="h3" className="text-lg md:text-xl font-semibold text-foreground">{exp.title}</CardTitle> {/* Changed to h3 */}
                    <div className="text-sm text-muted-foreground mt-1.5 flex flex-col sm:flex-row sm:items-center sm:gap-x-4 gap-y-1 flex-wrap">
                      <span className="font-medium text-foreground/90">{exp.company}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {exp.location}</span>
                      <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {exp.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-5 md:p-6 pt-0">
                <p className="mb-4 text-sm md:text-base text-foreground/80 dark:text-foreground/75">{exp.description}</p>
                <ul className="list-disc space-y-1.5 pl-5 text-xs md:text-sm text-foreground/85 dark:text-foreground/80">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </SectionWrapper>
  );
}

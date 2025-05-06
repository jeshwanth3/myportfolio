
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    id: "exp1",
    title: "Lead Business Analyst (Product Manager)",
    company: "CyBIZ Lab, Iowa State University",
    location: "Ames, IA, USA",
    duration: "Aug 2024 - Present",
    // Updated description to highlight PM focus
    description: "Spearheading product strategy and execution for data-driven transit optimization tools, focusing on user-centric design and measurable impact.",
    // Updated achievements to emphasize PM responsibilities and quantify results
    achievements: [
      "Defined product vision and roadmap for transit optimization tools, leveraging data-backed strategies and machine learning insights to reduce average commute times by 20% and enhance customer satisfaction.",
      "Led 15+ user interviews and stakeholder workshops, translating insights into prioritized features that drove a 25% increase in user adoption and improved market fit.",
      "Developed and launched a real-time Incident Management Dashboard using Power BI, reducing emergency response times by 80% and improving operational decision-making.",
      "Established and monitored 10+ key performance indicators (KPIs) to track product success, guiding data-driven iterations that resulted in a 15% decrease in commuter delays.",
      "Translated complex transportation data into actionable product insights, informing roadmap prioritization and feature enhancements to optimize city-wide transit efficiency.",
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
  {
    id: "exp2",
    title: "Business Analyst Intern",
    company: "Able Up Iowa",
    location: "Ames, IA, USA",
    duration: "Jun 2024 - Aug 2024",
    // Updated description
    description: "Leveraged data analysis and technical skills to extract insights, streamline data workflows, and support data-driven decision-making for a non-profit organization.",
    // Updated achievements
    achievements: [
        "Analyzed over 100,000 demographic records using Python (Pandas, Matplotlib) to uncover key insurer trends and user behaviors, informing strategic business decisions.",
        "Engineered serverless ETL pipelines in Azure Data Factory, achieving a 50% reduction in data processing time and improving data availability for BI platforms.",
        "Designed and deployed Power BI dashboards featuring 15+ critical KPIs, empowering stakeholders with real-time data for faster, more accurate decision-making.",
        "Developed scalable Azure-based workflows, ensuring robust cloud data integration and enhancing real-time data accessibility across analytics systems.",
        "Presented data-driven findings and recommendations to cross-functional teams, facilitating alignment between data insights and organizational objectives.",
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
  {
    id: "exp3",
    title: "Associate Software Engineer",
    company: "Accenture",
    location: "India",
    duration: "Oct 2021 - Jul 2023",
    // Updated description
    description: "Contributed to SaaS product development, focusing on process automation, enhancing platform features, implementing CI/CD pipelines, and resolving critical production issues.",
    // Updated achievements
    achievements: [
      "Automated 100% of data ingestion tasks via SQL procedures, saving over 200+ manual hours monthly and boosting team productivity by 90%.",
      "Collaborated with Product Owners on Blue Yonder SaaS backlog refinement, contributing to feature enhancements that reduced incident tickets by 20%.",
      "Developed and maintained CI/CD pipelines using Azure DevOps and Oracle Cloud, improving deployment frequency and release efficiency by 40%.",
      "Resolved 40+ high-priority SaaS production issues using custom PL/SQL queries, enhancing system stability by 20% and improving demand forecasting accuracy.",
      "Mentored 4 junior engineers on technical skills and best practices, resulting in a 40% reduction in team incident backlogs and receiving the 'Skillful Award'.",
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
   {
    id: "exp4",
    title: "Data Analyst Intern",
    company: "WNS Global Service",
    location: "India",
    duration: "Jan 2021 - Jun 2021",
    // Updated description
    description: "Supported data analysis initiatives by assisting with ETL pipeline maintenance, conducting ad-hoc analysis, and developing data visualizations to identify market trends.",
    // Updated achievements
    achievements: [
        "Assisted in ETL pipeline design and maintenance, optimizing report generation processes and reducing data latency by 30% for key dashboards.",
        "Handled 20+ ad-hoc analysis requests weekly, providing timely insights that facilitated faster, data-informed business decisions across departments.",
        "Developed insightful data visualizations and reports using Excel and Tableau, enabling leadership to better understand performance metrics and market dynamics.",
        "Identified emerging market trends through data analysis, delivering actionable recommendations that directly supported client engagement strategies.",
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-secondary/10 dark:bg-card/15">
      <SectionTitle>Work Experience</SectionTitle>
      <Tabs defaultValue={experiences[0].id} className="w-full">
        {/* Enhanced TabsList Styling - Use grid-cols-2 on small screens */}
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 h-auto p-1.5 bg-muted/60 dark:bg-muted/40 rounded-lg mb-8">
          {experiences.map((exp) => (
             <TabsTrigger
               key={exp.id}
               value={exp.id}
               // Improved Tab Trigger Styling - ensure text wraps nicely
               className="px-3.5 py-3 sm:py-2.5 text-sm sm:text-base font-medium leading-tight whitespace-normal text-muted-foreground data-[state=active]:bg-card dark:data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-md rounded-md transition-all duration-300 ease-in-out text-center" // Added text-center
            >
               {exp.title} {/* Use Job Roles for Tabs */}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* Enhanced Card Styling within TabsContent */}
        {experiences.map((exp) => (
          <TabsContent key={exp.id} value={exp.id}>
            <Card className="bg-card/95 dark:bg-secondary/70 mac-shadow border border-border/25 dark:border-border/35 transition-all duration-300 ease-out">
              <CardHeader className="p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 bg-primary/15 dark:bg-primary/25 p-2.5 rounded-full">
                      {exp.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle as="h3" className="text-lg md:text-xl font-semibold text-foreground">{exp.title}</CardTitle>
                    <div className="text-sm text-muted-foreground mt-2 flex flex-col sm:flex-row sm:items-center sm:gap-x-4 gap-y-1.5 flex-wrap"> {/* Ensure consistent spacing */}
                      <span className="font-medium text-foreground/95">{exp.company}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 opacity-80" /> {exp.location}</span> {/* Increased icon opacity */}
                      <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 opacity-80" /> {exp.duration}</span> {/* Increased icon opacity */}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-5 md:p-6 pt-0">
                <p className="mb-5 text-base md:text-lg text-foreground/80 dark:text-foreground/75">{exp.description}</p>
                {/* Improved list styling */}
                <ul className="list-disc space-y-2 pl-5 text-sm md:text-base text-foreground/85 dark:text-foreground/80">
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


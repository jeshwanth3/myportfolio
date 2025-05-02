import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Lead Business Analyst (Product Manager)",
    company: "CyBIZ Lab, Iowa State University",
    location: "Ames, IA",
    duration: "Aug 2023 - Present",
    description: "Drove product strategy for transit optimization tools, aligning stakeholders and leveraging data for impactful feature delivery.",
    achievements: [
      "Product Strategy & Roadmapping: Developed roadmap for transit optimization tools, resulting in a 20% reduction in average commute times and boosted user satisfaction.",
      "User Research & Stakeholder Alignment: Conducted 15+ user interviews and stakeholder workshops, leading to a 25% increase in feature adoption.",
      "Live Data Integration: Led integration of real-time data feeds for an Incident Management Dashboard, reducing response times by 80%.",
      "KPI & Success Metrics: Defined and monitored 10+ KPIs, contributing to a 15% reduction in commuter delays.",
      "Data-Driven Decision Making: Translated complex transportation data into actionable insights for product development.",
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
  {
    title: "Business Analyst Intern",
    company: "Able Up Iowa",
    location: "Ames, IA",
    duration: "May 2023 - Aug 2023",
    description: "Analyzed insurance data, automated ETL pipelines, and developed BI dashboards to provide key business insights.",
    achievements: [
        "Data Analytics & Reporting: Processed over 100K records to generate insights into insurer trends and performance.",
        "ETL Pipeline Automation: Designed and implemented serverless Azure ETL pipelines, reducing data processing time by 50%.",
        "BI Dashboarding: Created Power BI reports visualizing 15+ KPIs for operational monitoring.",
        "Cloud Data Integration: Developed Azure-based workflows for seamless data integration from various sources.",
        "Insight Presentation: Presented analytical findings and recommendations to cross-functional teams.",
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
  {
    title: "Associate Software Engineer",
    company: "Accenture",
    location: "India",
    duration: "Aug 2021 - Jun 2022",
    description: "Contributed to SaaS product development, focusing on automation, backlog management, and CI/CD implementation.",
    achievements: [
      "Automation Excellence: Achieved 100% automation of data ingestion processes, saving 200+ manual hours monthly and increasing productivity by over 90%.",
      "Backlog Management: Collaborated with product teams on Blue Yonder SaaS backlog grooming, contributing to a 20% reduction in incident tickets.",
      "CI/CD Implementation: Implemented automated deployment pipelines using Azure DevOps, improving release efficiency by 40%.",
      "Issue Resolution: Resolved over 40 critical production issues for the SaaS platform, ensuring stability.",
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
   {
    title: "Data Analyst Intern",
    company: "WNS Global Service",
    location: "India",
    duration: "May 2019 - Jul 2019",
    description: "Supported ETL processes, performed ad-hoc analysis, and identified market trends.",
    achievements: [
        "ETL Workflow Support: Assisted in maintaining ETL pipelines, improving dashboard refresh efficiency by 30%.",
        "Ad-Hoc Analysis Requests: Responded to 20+ weekly ad-hoc data analysis queries from business users.",
        "Trend Analysis & Recommendations: Identified key market trends and presented data-backed recommendations.",
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
             {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
               {exp.icon}
            </div>

             {/* Card */}
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span>{exp.company}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {exp.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {exp.duration}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground/80">{exp.description}</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/90">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

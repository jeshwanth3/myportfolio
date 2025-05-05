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
    description: "Defining product vision and roadmap for transit optimization tools, leveraging data-backed strategies and machine learning insights.",
    achievements: [
      "Defined product vision and roadmap for transit optimization tools, leveraging data-backed strategies and machine learning insights to reduce commute times by 20%, improving customer satisfaction and operational efficiency.",
      "Led 15+ user and stakeholder interviews, uncovering pain points and prioritizing user-centric features, which drove a 25% increase in adoption, enhancing user engagement and the tool's market fit.",
      "Developed a real-time Incident Management Dashboard in Power BI, integrating streaming data to reduce emergency response times by 80%, ensuring service continuity, and improving decision-making for operational teams.",
      "Monitored 10+ KPIs to track product performance, enabling iterative improvements that led to a 15% reduction in commuter delays through data-driven iterative product enhancements and optimization.",
      "Translated transportation data into actionable insights, guiding the product team on feature enhancements, roadmap priorities, and planning, ensuring city-wide transit improvements and greater system efficiency.",
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" /> // Consistent icon size and color
  },
  {
    id: "exp2",
    title: "Business Analyst Intern",
    company: "Able Up Iowa",
    location: "Ames, IA, USA",
    duration: "Jun 2024 - Aug 2024",
    description: "Processed demographic records, built ETL pipelines, designed Power BI reports, and developed Azure workflows.",
    achievements: [
        "Processed 100K+ demographic records using Python (Pandas, Matplotlib) to extract deep insights into insurer trends and user behaviors, enabling more precise business decision-making across multiple departments.",
        "Built serverless ETL pipelines in Azure Data Factory, reducing data processing time by 50%, enhancing workflow efficiency and streamlining the transfer of data across various business intelligence platforms.",
        "Designed Power BI reports with 15+ critical KPIs, enabling stakeholders to make data-driven decisions faster and more accurately, improving overall operational efficiency across business units and leadership teams.",
        "Developed scalable Azure-based workflows, ensuring seamless cloud data integration and real-time data availability across analytics platforms and internal business systems for enhanced reporting and decision-making.",
        "Presented key findings to cross-functional teams, aligning data insights with goals, and improving decision-making and execution.",
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" /> // Consistent icon size and color
  },
  {
    id: "exp3",
    title: "Associate Software Engineer",
    company: "Accenture",
    location: "India",
    duration: "Oct 2021 - Jul 2023",
    description: "Automated data ingestion, collaborated on SaaS backlog, developed CI/CD pipelines, resolved production issues, and mentored engineers.",
    achievements: [
      "Automated 100% of data ingestion tasks using SQL procedures, saving over 200+ manual hours/month, which increased productivity by 90% across teams and optimized the overall business data pipeline efficiency.",
      "Collaborated with product owners to enhance Blue Yonder SaaS backlog features, reducing incident tickets by 20% and improving release velocity, enabling faster product deployment and smoother updates.",
      "Developed CI/CD pipelines using Azure DevOps, GitHub, and Oracle Cloud, improving release efficiency by 40%, accelerating product updates and automating deployment processes for continuous integration and delivery.",
      "Resolved 40+ SaaS production issues using custom PL/SQL queries, improving demand forecasting, enhancing system stability by 20%, and ensuring minimal disruptions to production systems and customer experience.",
      "Mentored 4+ engineers, receiving the Skillful Award for reducing knowledge gaps and incident backlogs by 40% through effective mentorship, proactive guidance, and collaborative teamwork.",
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" /> // Consistent icon size and color
  },
   {
    id: "exp4",
    title: "Data Analyst Intern",
    company: "WNS Global Service",
    location: "India",
    duration: "Jan 2021 - Jun 2021",
    description: "Assisted in ETL pipeline design/maintenance, handled ad-hoc analysis, developed visualizations, and identified market trends.",
    achievements: [
        "Assisted in designing and maintaining ETL pipelines, optimizing recurring report processes, and reducing data lag by 30%, improving dashboard refresh efficiency and data availability across key teams and stakeholders.",
        "Handled 20+ ad-hoc analysis requests weekly, delivering quick-turnaround insights that helped enable faster decision-making and improve strategic business decisions across multiple departments and leadership teams.",
        "Developed visualizations and reports using Excel and Tableau, helping leadership teams better interpret data and gain real-time insights into market shifts and performance metrics for strategic decision-making.",
        "Identified emerging market trends through thorough data analysis, offering actionable recommendations that supported client engagement strategies, leading to improved market positioning and business growth.",
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" /> // Consistent icon size and color
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-secondary/10 dark:bg-card/15">
      <SectionTitle>Work Experience</SectionTitle>
      <Tabs defaultValue={experiences[0].id} className="w-full">
        {/* Enhanced TabsList Styling */}
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 h-auto p-1.5 bg-muted/60 dark:bg-muted/40 rounded-lg mb-8">
          {experiences.map((exp) => (
             <TabsTrigger
               key={exp.id}
               value={exp.id}
               // Improved Tab Trigger Styling
               className="px-3.5 py-3 sm:py-2.5 text-sm sm:text-base font-medium leading-tight whitespace-normal text-muted-foreground data-[state=active]:bg-card dark:data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-md rounded-md transition-all duration-300 ease-in-out"
            >
               {exp.title}
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

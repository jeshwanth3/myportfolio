import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: "proj1",
    title: "Data-Driven Transit Optimization Platform", // Enhanced title
    // Rewritten description emphasizing strategy and user value
    description: "Spearheaded the conceptualization and development of an interactive analytics platform, enabling data-informed transit route optimization and enhancing commuter experience through reduced wait times.",
    technologies: ["Product Strategy", "Data Analytics", "Python", "SQL", "Power BI", "Azure Data Factory", "User-Centric Design"], // Added PM skills
    githubUrl: null, // Assuming no public repo for this specific internal tool
    liveUrl: null, // Assuming no public live demo
  },
  {
    id: "proj2",
    title: "Proj2",
    // title: "Non-Profit Insurer Data Intelligence Solution", // Enhanced title
    // Rewritten description emphasizing impact and efficiency
    description: "Architected and implemented a scalable Azure-based ETL pipeline and BI dashboard suite, transforming raw insurance data into actionable insights and reducing data processing overhead by 50%.",
    technologies: ["ETL Architecture", "Cloud Data Integration", "Azure Data Factory", "Azure Databricks", "Power BI", "Stakeholder Management", "Python"], // Added PM skills
    githubUrl: null, // Assuming internal project
    liveUrl: null, // Assuming internal project
  },
  {
    id: "proj3",
    title: "Personal Portfolio (This Website!)", // Kept title concise
    // Rewritten description focusing on purpose and tech stack demonstration
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4169028628.
    description: "Designed and engineered a dynamic personal portfolio leveraging modern web technologies (Next.js, React, TypeScript) to effectively communicate my learnings, skills, and projects.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Responsive Design", "UI/UX"], // Added relevant skills
    githubUrl: "https://github.com/jeshwanth3", // Replace with actual URL
    liveUrl: "#", // Link to the site itself
  },
  // Example of adding another project (if needed)
  // {
  //   id: "proj4",
  //   title: "SaaS Platform Feature Enhancement Initiative",
  //   description: "Led cross-functional team efforts in refining backlog priorities and implementing key feature enhancements for a Blue Yonder SaaS product, resulting in a 20% decrease in high-priority incident tickets.",
  //   technologies: ["SaaS Product Management", "Agile Development", "Backlog Prioritization", "CI/CD", "Azure DevOps", "PL/SQL"],
  //   githubUrl: null,
  //   liveUrl: null,
  // },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-card/10 dark:bg-secondary/15">
      <SectionTitle>Key Projects & Initiatives</SectionTitle> {/* Updated Section Title */}
      {/* Grid layout remains the same */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          // Enhanced Card Styling - Use accent color for border on hover
          <Card
            key={project.id}
            className="flex flex-col bg-card/95 dark:bg-secondary/70 mac-shadow transition-all duration-300 ease-out hover:shadow-lg hover:border-primary/40 dark:hover:border-primary/60 transform hover:-translate-y-1.5"
             // Staggered animation delay for each card
             style={{ '--animation-delay': `${150 + index * 100}ms` } as React.CSSProperties}
          >
            <CardHeader className="p-5 md:p-6 pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="shrink-0 bg-primary/15 dark:bg-primary/25 p-2.5 rounded-full">
                  <FolderGit2 className="h-5 w-5 text-primary" /> {/* Consistent icon size and color */}
                </div>
                <div className="flex-1">
                   <CardTitle as="h3" className="text-lg md:text-xl font-semibold text-foreground">{project.title}</CardTitle>
                </div>
              </div>
              <CardDescription className="text-base text-muted-foreground pt-1 leading-relaxed">{project.description}</CardDescription> {/* Improved line height */}
            </CardHeader>
            <CardContent className="flex-1 p-5 md:p-6 pt-0">
              {/* Enhanced Badge Styling - Use accent color on hover */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm font-normal border border-transparent bg-muted/70 dark:bg-muted/50 hover:border-primary/40 dark:hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/15 hover:text-primary dark:hover:text-primary transition-all duration-200 px-2.5 py-1 rounded" // Adjusted padding and hover effect
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {/* Enhanced Footer Button Styling - Use accent color on hover */}
            <CardFooter className="p-5 md:p-6 pt-4 border-t border-border/20 dark:border-border/30 mt-auto flex justify-end gap-3">
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" passHref>
                  <Button variant="ghost" size="sm" className="text-xs h-8 px-3 text-muted-foreground hover:text-primary dark:hover:text-primary hover:bg-primary/15 dark:hover:bg-primary/20 rounded-md">
                    GitHub <ExternalLink className="ml-1.5 h-3.5 w-3.5 opacity-80" /> {/* Increased icon opacity */}
                  </Button>
                </Link>
              )}
              {project.liveUrl && (
                <Link href={project.liveUrl} target={project.liveUrl === '#' ? '_self' : '_blank'} rel="noopener noreferrer" passHref>
                  <Button variant="outline" size="sm" className="text-xs h-8 px-3 bg-background/60 hover:bg-primary/15 hover:text-primary dark:bg-secondary/60 dark:hover:bg-primary/20 dark:hover:text-primary rounded-md border-border hover:border-primary/50">
                    {project.liveUrl === '#' ? 'View Site' : 'Live Demo'} <ExternalLink className="ml-1.5 h-3.5 w-3.5 opacity-80" /> {/* Increased icon opacity */}
                  </Button>
                </Link>
              )}
               {/* Display message if no links are available */}
              {!project.githubUrl && !project.liveUrl && (
                <span className="text-xs text-muted-foreground italic">Internal Project (No public links)</span>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

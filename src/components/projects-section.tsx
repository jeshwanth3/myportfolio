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
    title: "Transit Optimization Dashboard",
    description: "Developed an interactive dashboard visualizing key transit KPIs, enabling data-driven optimization decisions for CyRide.",
    technologies: ["Python", "SQL", "Power BI", "Azure Data Factory", "Data Analytics"],
    githubUrl: "https://github.com/your-username/transit-dashboard", // Replace with actual URL if available
    liveUrl: null,
  },
  {
    id: "proj2",
    title: "Insurance Data ETL Pipeline",
    description: "Automated ETL processes for insurance data using Azure services, significantly reducing processing time and improving data accuracy for Able Up Iowa.",
    technologies: ["Azure Data Factory", "Azure Data Bricks", "ETL", "Python", "SQL"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: "proj3",
    title: "Portfolio Website (This Site!)",
    description: "Built a personal portfolio website using modern web technologies to showcase skills and experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    githubUrl: "https://github.com/your-username/portfolio-website", // Replace with actual URL
    liveUrl: "#",
  },
  // Add more projects as needed
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-card/10 dark:bg-secondary/15">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col bg-card/95 dark:bg-secondary/70 mac-shadow transition-all duration-300 ease-out hover:shadow-lg hover:border-primary/40 dark:hover:border-accent/60 transform hover:-translate-y-1.5"
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
              <CardDescription className="text-base text-muted-foreground pt-1">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-5 md:p-6 pt-0">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm font-normal border border-transparent bg-muted/70 dark:bg-muted/50 hover:border-accent/40 dark:hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/15 hover:text-accent dark:hover:text-accent transition-all duration-200 px-2.5 py-1 rounded"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
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
                  <Button variant="outline" size="sm" className="text-xs h-8 px-3 bg-background/60 hover:bg-accent/15 hover:text-accent dark:bg-secondary/60 dark:hover:bg-accent/20 dark:hover:text-accent rounded-md border-border hover:border-accent/50">
                    {project.liveUrl === '#' ? 'View Site' : 'Live Demo'} <ExternalLink className="ml-1.5 h-3.5 w-3.5 opacity-80" /> {/* Increased icon opacity */}
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

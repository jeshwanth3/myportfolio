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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col bg-card/90 dark:bg-secondary/60 mac-shadow transition-all duration-300 ease-out hover:shadow-lg hover:border-primary/40 dark:hover:border-accent/60 transform hover:-translate-y-1"
          >
            <CardHeader className="p-5 md:p-6 pb-4">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-1 shrink-0 bg-primary/10 dark:bg-primary/20 p-2 rounded-full">
                  <FolderGit2 className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                   <CardTitle className="text-lg md:text-xl font-semibold text-foreground">{project.title}</CardTitle>
                </div>
              </div>
              <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-5 md:p-6 pt-0">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-normal border border-transparent hover:border-accent/40 dark:hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/15 hover:text-accent dark:hover:text-accent transition-all duration-200 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-5 md:p-6 pt-4 border-t border-border/20 dark:border-border/30 mt-auto flex justify-end gap-2">
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" passHref>
                  <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-muted-foreground hover:text-primary dark:hover:text-primary hover:bg-primary/15 dark:hover:bg-primary/20">
                    GitHub <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              )}
              {project.liveUrl && (
                <Link href={project.liveUrl} target={project.liveUrl === '#' ? '_self' : '_blank'} rel="noopener noreferrer" passHref>
                  <Button variant="outline" size="sm" className="text-xs h-7 px-2 bg-background/50 hover:bg-accent/10 hover:text-accent dark:bg-secondary/50 dark:hover:bg-accent/15 dark:hover:text-accent">
                    {project.liveUrl === '#' ? 'View Site' : 'Live Demo'} <ExternalLink className="ml-1 h-3 w-3" />
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

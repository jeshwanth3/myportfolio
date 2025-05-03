import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink } from 'lucide-react'; // Use FolderGit2 or similar relevant icon
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const projects = [
  {
    id: "proj1",
    title: "Transit Optimization Dashboard",
    shortDescription: "Developed an interactive dashboard visualizing key transit KPIs for CyRide.", // Shorter description for trigger
    longDescription: "Developed an interactive dashboard visualizing key transit KPIs, enabling data-driven optimization decisions for CyRide.",
    technologies: ["Python", "SQL", "Power BI", "Azure Data Factory", "Data Analytics"],
    githubUrl: "https://github.com/your-username/transit-dashboard", // Optional: Replace with actual URL
    liveUrl: null, // Optional: Replace with actual URL
  },
  {
    id: "proj2",
    title: "Insurance Data ETL Pipeline",
    shortDescription: "Automated ETL processes for insurance data using Azure services for Able Up Iowa.",
    longDescription: "Automated ETL processes for insurance data using Azure services, significantly reducing processing time and improving data accuracy for Able Up Iowa.",
    technologies: ["Azure Data Factory", "Azure Data Bricks", "ETL", "Python", "SQL"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: "proj3",
    title: "Portfolio Website (This Site!)",
    shortDescription: "Built a personal portfolio website using modern web technologies.",
    longDescription: "Built a personal portfolio website using modern web technologies to showcase skills and experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    githubUrl: "https://github.com/your-username/portfolio-website", // Optional: Replace with actual URL
    liveUrl: "#", // Link to the current site
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-card/10 dark:bg-secondary/15">
      <SectionTitle>Projects</SectionTitle>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {projects.map((project) => (
          <AccordionItem key={project.id} value={project.id} className="border border-border/30 dark:border-border/50 rounded-lg bg-card/90 dark:bg-secondary/60 mac-shadow transition-all duration-300 ease-out overflow-hidden hover:border-accent/50 dark:hover:border-accent/70 transform hover:-translate-y-0.5">
            <AccordionTrigger className="p-4 md:p-6 text-left hover:no-underline hover:bg-accent/10 dark:hover:bg-accent/15 transition-colors data-[state=open]:bg-accent/15 dark:data-[state=open]:bg-accent/20 hover:text-accent dark:hover:text-accent dark:data-[state=open]:text-accent">
               <div className="flex items-start gap-4 w-full">
                  <div className="mt-1 shrink-0 bg-accent/10 dark:bg-accent/20 p-2 rounded-full">
                      <FolderGit2 className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold text-foreground">{project.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">{project.shortDescription}</p>
                  </div>
               </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 md:p-6 pt-0 border-t border-border/30 dark:border-border/40 bg-card/50 dark:bg-secondary/30">
                <p className="mb-3 text-sm md:text-base text-foreground/80 dark:text-foreground/75">{project.longDescription}</p>
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
                 <div className="flex justify-end gap-2">
                    {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" passHref>
                        <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-muted-foreground hover:text-accent hover:bg-accent/15 dark:hover:text-accent dark:hover:bg-accent/20">
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
                 </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}
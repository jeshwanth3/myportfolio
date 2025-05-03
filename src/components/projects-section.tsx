import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink } from 'lucide-react'; // Use FolderGit2 or similar relevant icon
import Link from 'next/link';

// Define dummy project data (replace with actual data)
const projects = [
  {
    id: "proj1",
    title: "Transit Optimization Dashboard",
    description: "Developed an interactive dashboard visualizing key transit KPIs, enabling data-driven optimization decisions for CyRide.",
    technologies: ["Python", "SQL", "Power BI", "Azure Data Factory", "Data Analytics"],
    githubUrl: "https://github.com/your-username/transit-dashboard", // Optional: Replace with actual URL
    liveUrl: null, // Optional: Replace with actual URL
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
    githubUrl: "https://github.com/your-username/portfolio-website", // Optional: Replace with actual URL
    liveUrl: "#", // Link to the current site
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-card/10 dark:bg-secondary/15">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col bg-card/90 dark:bg-secondary/60 mac-shadow hover:border-accent/60 dark:hover:border-accent/70 transition-all duration-300 ease-out hover:shadow-lg transform hover:-translate-y-1"> {/* Use accent hover border and added transform */}
            <CardHeader className="p-5 md:p-6 pb-3">
              <div className="flex items-center gap-4 mb-2">
                 {/* Use accent theme color for icon background/text */}
                 <div className="bg-accent/10 dark:bg-accent/20 p-2 rounded-full shrink-0">
                   <FolderGit2 className="h-5 w-5 text-accent dark:text-accent" />
                 </div>
                <CardTitle className="text-base md:text-lg font-semibold text-foreground">{project.title}</CardTitle>
              </div>
              <CardDescription className="text-xs md:text-sm text-muted-foreground">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-5 md:p-6 pt-0 flex-grow">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary" // Use secondary variant which pulls from theme
                    // Use accent color for hover state and standard xs size
                    className="text-xs font-normal border border-transparent hover:border-accent/40 dark:hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/15 hover:text-accent dark:hover:text-accent transition-all duration-200 px-2 py-0.5 rounded" // Changed from text-[11px] md:text-xs to text-xs
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 md:p-5 pt-0 mt-auto flex justify-end gap-2">
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" passHref>
                  {/* Ensure ghost button hover uses accent */}
                  <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-muted-foreground hover:text-accent hover:bg-accent/15 dark:hover:text-accent dark:hover:bg-accent/20">
                    GitHub <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              )}
              {project.liveUrl && (
                 <Link href={project.liveUrl} target={project.liveUrl === '#' ? '_self' : '_blank'} rel="noopener noreferrer" passHref>
                    {/* Ensure outline button hover uses accent */}
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


    
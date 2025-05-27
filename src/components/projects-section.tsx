import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink } from 'lucide-react';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
};

const projects: Project[] = [
  {
    id: "proj 1",
    title: "FitTracker",
    description: "FitTracker is an AI-driven fitness app that delivers personalized health insights. It features adaptive workout plans, real-time feedback, and gamified challenges, boosting user engagement by 30% in its first quarter.",
    technologies: ["Product Management", "PRD", "Figma", "UI/UX", "AI", "Agile"],
    liveUrl: "/public/FIt Tracker PRD.pdf",
  },
  {
    id: "proj 2",
    title: "CrashInsight: Iowa Vehicle Crash Data Analysis Tool",
    description: "CrashInsight is a cloud-based data analysis tool built entirely on Azure. It processes and visualizes Iowa vehicle crash data to uncover patterns and improve road safety. The tool integrates Azure Data Factory for ETL, Azure SQL Database for storage, and Power BI for interactive dashboards, providing actionable insights for policymakers.",
    technologies: ["Azure Data Factory", "Azure SQL Database", "Power BI", "Python", "Data Analytics", "ETL Pipelines", "Data Visualization"],
    githubUrl: null,
    liveUrl: "/public/Project_Deliverable_final.pdf",
  },
  {
    id: "proj 3",
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built from scratch with a focus on user experience. Features include dark/light theme support, responsive design, optimized performance, and smooth animations. Implemented with best practices in web development and design principles.",
    technologies: ["React","TypeScript","Next.js","Tailwind CSS","UI/UX","Responsive Design","Accessibility"],
    githubUrl: "https://github.com/jeshwanth3/myportfolio.com", // Replace with your actual GitHub URL
    liveUrl: "https://www.saijeswanthgoud.com", // Replace with your actual deployed URL
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-card/10 dark:bg-secondary/15">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="project-card"
            style={{ '--animation-delay': `${150 + index * 100}ms` } as React.CSSProperties}
          >
            <CardHeader className="p-5 md:p-6 pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="shrink-0 bg-primary/15 dark:bg-primary/25 p-2.5 rounded-full">
                  <FolderGit2 className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-foreground">{project.title}</CardTitle>
                </div>
              </div>
              <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-5 md:p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-normal border border-transparent bg-muted/70 dark:bg-muted/50 hover:border-primary/40 dark:hover:border-primary/50 hover:bg-primary/10 dark:hover:bg-primary/15 hover:text-primary dark:hover:text-primary transition-all duration-200 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-5 md:p-6 pt-4 border-t border-border/20 dark:border-border/30 mt-auto">
              {!project.githubUrl && !project.liveUrl && (
                <span className="text-xs text-muted-foreground italic">Internal Project (Documentation Available on Request)</span>
              )}
              {(project.githubUrl || project.liveUrl) && (
                <div className="flex gap-3 ml-auto">
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="text-xs h-8 px-3">
                        GitHub <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="text-xs h-8 px-3">
                        Live Demo <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  )}
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
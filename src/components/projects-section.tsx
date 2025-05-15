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
    title: "AI-Powered Transit Optimization Platform",
    description: "Led the development of an innovative transit optimization platform using machine learning and real-time data analytics. Reduced average commute times by 20% and improved route efficiency through predictive analytics.",
    technologies: ["Product Strategy", "AI/ML", "Python", "Data Analytics", "Power BI", "Azure", "User Research"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: "proj2",
    title: "Insurance Analytics Dashboard",
    description: "Architected a comprehensive analytics solution for insurance data processing, implementing automated ETL pipelines and interactive dashboards that reduced data processing time by 50%.",
    technologies: ["Azure Data Factory", "Python", "Power BI", "SQL", "Data Pipeline", "Analytics"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: "proj3",
    title: "SaaS Product Enhancement Initiative",
    description: "Spearheaded the enhancement of a Blue Yonder SaaS product, implementing key features and optimizations that resulted in a 20% reduction in incident tickets and improved user satisfaction.",
    technologies: ["Product Management", "Azure DevOps", "SQL", "API Integration", "Agile"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: "proj4",
    title: "AI-Driven Market Analysis Tool",
    description: "Developed an AI-powered market analysis tool that leverages NLP and machine learning to provide real-time market insights and competitor analysis, enhancing strategic decision-making.",
    technologies: ["AI/ML", "NLP", "Python", "Data Science", "Market Research", "Product Strategy"],
    githubUrl: null,
    liveUrl: null,
  }
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-card/10 dark:bg-secondary/15">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="project-grid">
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
                  <CardTitle className="text-lg font-semibold text-foreground line-clamp-2">{project.title}</CardTitle>
                </div>
              </div>
              <CardDescription className="text-sm text-muted-foreground line-clamp-3">{project.description}</CardDescription>
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
                      <Button variant="outline" size="sm" className="text-xs h-8 px-3">
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
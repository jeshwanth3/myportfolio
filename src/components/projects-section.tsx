import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  moreDetails: string | null;
  thumbnail: string;
};

const projects: Project[] = [
  {
    id: "proj1",
    title: "FitTracker",
    description: "FitTracker is an AI-driven fitness app that delivers personalized health insights. It features adaptive workout plans, real-time feedback, and gamified challenges, boosting user engagement by 30% in its first quarter.",
    technologies: ["Product Management", "PRD", "Figma", "UI/UX", "AI", "Agile"],
    githubUrl: null,
    liveUrl: null,
    moreDetails: "/FIt%20Tracker%20PRD.pdf",
    thumbnail: "/thumbnails/proj1.png"
  },
  {
    id: "proj2",
    title: "CrashInsight: Iowa Vehicle Crash Data Analysis Tool",
    description: "CrashInsight is a cloud-based data analysis tool built entirely on Azure. It processes and visualizes Iowa vehicle crash data to uncover patterns and improve road safety. The tool integrates Azure Data Factory for ETL, Azure SQL Database for storage, and Power BI for interactive dashboards, providing actionable insights for policymakers.",
    technologies: ["Azure Data Factory", "Azure SQL Database", "Power BI", "Python", "Data Analytics", "ETL Pipelines", "Data Visualization"],
    githubUrl: null,
    liveUrl: null,
    moreDetails: "/Project_Deliverable_final.pdf",
    thumbnail: "/thumbnails/proj2.png"
  },
  {
    id: "proj3",
    title: "Personal Portfolio Website",
    description: "Designed and developed a modern, responsive portfolio website using Next.js 13, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and a clean, professional design that effectively showcases projects and skills.",
    technologies: ["Next.js 13", "TypeScript", "Tailwind CSS", "UI/UX Design", "Responsive Design", "Web Development"],
    githubUrl: "https://github.com/jeshwanth3/myportfolio",
    liveUrl: "https://www.saijeshwanthgoud.com/",
    moreDetails: null,
    thumbnail: "/thumbnails/portfolio.png"
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-card/10 dark:bg-secondary/15">
      <SectionTitle>My Work</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-card/80 via-background/80 to-card/40 dark:from-secondary/20 dark:via-card/80 dark:to-background border border-border/20 dark:border-border/30 shadow-lg hover:shadow-xl p-6 md:p-8"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-t-lg mb-4">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority={project.id === "proj1"}
              />
            </div>
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-foreground mb-1">{project.title}</CardTitle>
                </div>
              </div>
              <CardDescription className="text-sm text-muted-foreground mb-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-0 mb-2">
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
            <CardFooter className="p-0 flex justify-end">
              {project.moreDetails && (
                <Link href={project.moreDetails} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-xs h-8 px-3">
                    More Details <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
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
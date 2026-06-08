"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  moreDetails: string | null;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "proj1",
    title: "FitTracker",
    description:
      "AI-driven fitness app delivering personalized health insights with adaptive workout plans, real-time feedback, and gamified challenges. Boosted user engagement by 30% in its first quarter.",
    technologies: [
      "Product Management",
      "PRD",
      "Figma",
      "UI/UX",
      "AI",
      "Agile",
    ],
    githubUrl: null,
    liveUrl: null,
    moreDetails: "/FIt%20Tracker%20PRD.pdf",
    featured: true,
  },
  {
    id: "proj2",
    title: "CrashInsight",
    description:
      "Cloud-based data analysis tool built on Azure. Processes and visualizes Iowa vehicle crash data to uncover patterns. Integrates Azure Data Factory for ETL, Azure SQL Database, and Power BI for interactive dashboards.",
    technologies: [
      "Azure Data Factory",
      "Azure SQL Database",
      "Power BI",
      "Python",
      "Data Analytics",
      "ETL Pipelines",
    ],
    githubUrl: null,
    liveUrl: null,
    moreDetails: "/Project_Deliverable_final.pdf",
    featured: true,
  },
  {
    id: "proj3",
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and component-driven architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX Design",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/jeshwanth3/myportfolio",
    liveUrl: "https://www.saijeshwanthgoud.com/",
    moreDetails: null,
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle>Projects</SectionTitle>
      <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">
        Product-led initiatives showcasing innovation, impact, and user-centric
        design.
      </p>

      <div className="mt-12 space-y-5">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors duration-300 p-6 md:p-8 space-y-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                {project.featured && (
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-3 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <FolderGit2 className="h-4 w-4 mr-1.5" />
                      Source
                    </Button>
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-3 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      Live
                    </Button>
                  </Link>
                )}
                {project.moreDetails && (
                  <Link
                    href={project.moreDetails}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-3 text-sm text-primary hover:text-primary hover:bg-primary/10"
                    >
                      View Details
                      <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="rounded-md px-2 py-0.5 text-xs font-medium bg-secondary text-muted-foreground border-0"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

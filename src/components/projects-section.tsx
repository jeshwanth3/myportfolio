"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink, Sparkles, Rocket } from 'lucide-react';
import { SectionNavButton } from "@/components/section-nav-button";
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
  featured?: boolean;
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
    thumbnail: "/thumbnails/proj1.png",
    featured: true
  },
  {
    id: "proj2",
    title: "CrashInsight: Iowa Vehicle Crash Data Analysis Tool",
    description: "CrashInsight is a cloud-based data analysis tool built entirely on Azure. It processes and visualizes Iowa vehicle crash data to uncover patterns and improve road safety. The tool integrates Azure Data Factory for ETL, Azure SQL Database for storage, and Power BI for interactive dashboards, providing actionable insights for policymakers.",
    technologies: ["Azure Data Factory", "Azure SQL Database", "Power BI", "Python", "Data Analytics", "ETL Pipelines", "Data Visualization"],
    githubUrl: null,
    liveUrl: null,
    moreDetails: "/Project_Deliverable_final.pdf",
    thumbnail: "/thumbnails/proj2.png",
    featured: true
  },
  {
    id: "proj3",
    title: "Personal Portfolio Website",
    description: "Designed and developed a modern, responsive portfolio website using Next.js 13, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and a clean, professional design that effectively showcases projects and skills.",
    technologies: ["Next.js 13", "TypeScript", "Tailwind CSS", "UI/UX Design", "Responsive Design", "Web Development"],
    githubUrl: "https://github.com/jeshwanth3/myportfolio",
    liveUrl: "https://www.saijeshwanthgoud.com/",
    moreDetails: null,
    thumbnail: "/thumbnails/portfolio.png",
    featured: false
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="relative bg-gradient-to-b from-card/10 via-background to-card/5 py-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px] floating-animation"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] floating-animation" style={{ animationDelay: '3s' } as React.CSSProperties}></div>
      </div>

      <div className="relative z-10">
        <SectionTitle>
          <span className="inline-flex items-center gap-3">
            <Rocket className="h-8 w-8 text-primary" />
            Featured Projects
          </span>
        </SectionTitle>
        
        <p className="text-center text-muted-foreground text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Product-led initiatives showcasing innovation, impact, and user-centric design
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] rounded-3xl bg-gradient-to-br from-card/90 via-card/80 to-background/90 border border-border/30 hover:border-primary/50 shadow-xl hover:shadow-2xl backdrop-blur-sm stagger-fade-in ${project.featured ? 'ring-2 ring-primary/20' : ''}`}
              style={{ '--stagger-delay': index } as React.CSSProperties}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-5 right-5 z-20">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-lg px-3 py-1.5 font-semibold rounded-xl text-xs">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              {/* Project thumbnail */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority={project.id === "proj1"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Overlay icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card/80 backdrop-blur-sm">
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="border-primary/40 hover:bg-primary/20">
                        <FolderGit2 className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </Link>
                  )}
                  {project.moreDetails && (
                    <Link href={project.moreDetails} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="border-primary/40 hover:bg-primary/20">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              <CardHeader className="p-6 pb-4">
                <div className="mb-2">
                  <CardTitle className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-[11px] sm:text-xs font-medium border border-border/40 bg-background/70 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 px-2.5 py-1 rounded-lg stagger-fade-in"
                      style={{ '--stagger-delay': techIndex } as React.CSSProperties}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge
                      variant="secondary"
                      className="text-[11px] sm:text-xs font-medium border border-border/40 bg-background/70 backdrop-blur-sm px-2.5 py-1 rounded-lg"
                    >
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex justify-end">
                {project.moreDetails && (
                  <Link href={project.moreDetails} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-[11px] sm:text-xs h-8 px-3 hover:bg-primary/10 hover:text-primary group/btn"
                    >
                      View Details
                      <ExternalLink className="ml-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </Button>
                  </Link>
                )}
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-[11px] sm:text-xs h-8 px-3 hover:bg-primary/10 hover:text-primary group/btn"
                    >
                      Live Site
                      <ExternalLink className="ml-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </Button>
                  </Link>
                )}
              </CardFooter>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>

      <SectionNavButton nextSection="skills" />
    </SectionWrapper>
  );
}

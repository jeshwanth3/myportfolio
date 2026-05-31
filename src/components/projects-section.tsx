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
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { MouseEvent } from 'react';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 }
  }
};

function ProjectCard({ project }: { project: Project }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      className={`group relative h-full flex flex-col overflow-hidden rounded-[2rem] bg-card/60 border border-border/40 hover:border-primary/50 shadow-xl backdrop-blur-xl transition-colors duration-500`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100 z-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0,149,255,0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-5 right-5 z-20">
          <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-[0_0_15px_rgba(0,149,255,0.5)] px-3 py-1.5 font-bold rounded-xl text-xs uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="h-3 w-3 mr-1.5 animate-pulse" />
            Featured
          </Badge>
        </div>
      )}

      {/* Project thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden border-b border-border/20 z-10">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 filter saturate-100 group-hover:saturate-125 group-hover:scale-110"
          priority={project.id === "proj1"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>

        {/* Overlay buttons grid on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-card/40 backdrop-blur-sm z-20">
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button size="icon" className="h-12 w-12 rounded-full bg-background/80 hover:bg-primary text-foreground hover:text-primary-foreground hover:scale-110 shadow-xl border border-white/10 transition-all duration-300">
                <FolderGit2 className="h-5 w-5" />
              </Button>
            </Link>
          )}
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button size="icon" className="h-12 w-12 rounded-full bg-primary hover:bg-primary hover:scale-110 shadow-[0_0_20px_rgba(0,149,255,0.5)] text-primary-foreground transition-all duration-300">
                <ExternalLink className="h-5 w-5" />
              </Button>
            </Link>
          )}
          {project.moreDetails && (
            <Link href={project.moreDetails} target="_blank" rel="noopener noreferrer">
              <Button size="icon" className="h-12 w-12 rounded-full bg-background/80 hover:bg-accent hover:scale-110 text-foreground hover:text-accent-foreground shadow-xl border border-white/10 transition-all duration-300">
                <ExternalLink className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-8 relative z-10">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300 line-clamp-2 leading-tight">
            {project.title}
          </h3>
        </div>
        <CardDescription className="text-base text-muted-foreground/90 line-clamp-3 mb-6" style={{ lineHeight: '1.7' }}>
          {project.description}
        </CardDescription>

        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-semibold border border-primary/20 bg-primary/5 hover:bg-primary/20 hover:text-primary transition-all duration-300 px-3 py-1.5 rounded-lg shadow-sm"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge
              variant="secondary"
              className="text-xs font-semibold border border-border/40 bg-background/50 px-3 py-1.5 rounded-lg"
            >
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </div>

      {/* Bottom glowing animated line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="relative bg-gradient-to-b from-card/10 via-background to-card/5 py-24 overflow-hidden min-h-screen">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] mix-blend-screen"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <SectionTitle>
            <span className="inline-flex items-center gap-3">
              <Rocket className="h-8 w-8 text-primary" />
              Featured Projects
            </span>
          </SectionTitle>

          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mt-4" style={{ lineHeight: '1.7' }}>
            Product-led initiatives showcasing innovation, impact, and user-centric design
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full flex justify-center pt-24 relative z-20"
      >
        <SectionNavButton nextSection="skills" />
      </motion.div>
    </SectionWrapper>
  );
}

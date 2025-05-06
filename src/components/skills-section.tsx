"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
// Import necessary icons
import {
  Rocket, // Strategy
  ClipboardList, // Execution
  Database, // Technical/Data
  Settings, // Tools/Methodologies
  Cloud, // Cloud
  BrainCircuit, // ML specific
  Users, // User/Team specific
  BarChart3, // Analytics
  Workflow, // PLM
  Target, // Prioritization
  MousePointerClick, // Discovery
  TestTube, // A/B Testing
  LayoutGrid, // Platforms
  Presentation, // Stakeholder
  Code // General Tech
 } from 'lucide-react';

// Updated skill categories reflecting PM focus areas
const skillCategories = [
  {
    id: "skills1",
    title: "Product Strategy & Leadership",
    icon: <Rocket className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Product Lifecycle Management (PLM)", icon: <Workflow className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Product Vision & Roadmapping", icon: <Rocket className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Go-to-Market (GTM) Strategy", icon: <Rocket className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Competitive Analysis", icon: <BarChart3 className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Stakeholder Alignment", icon: <Presentation className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Cross-Functional Team Leadership", icon: <Users className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
    ],
  },
  {
    id: "skills2",
    title: "Execution & User Focus",
    icon: <ClipboardList className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Agile & Scrum Methodologies", icon: <Settings className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Product Discovery & User Research", icon: <Users className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "User Stories & Feature Prioritization", icon: <Target className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Backlog Grooming & Management", icon: <ClipboardList className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "A/B Testing & Experimentation", icon: <TestTube className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
    ],
  },
  {
    id: "skills3",
    title: "Technical & Data Acumen",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Python, SQL, R", icon: <Code className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Data Visualization & Analytics", icon: <BarChart3 className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "ETL & Data Pipelines", icon: <Workflow className="inline-block h-4 w-4 mr-1.5 opacity-85" /> }, // Reusing Workflow icon
      { name: "Machine Learning Concepts", icon: <BrainCircuit className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Big Data Technologies", icon: <Database className="inline-block h-4 w-4 mr-1.5 opacity-85" /> }, // Reusing Database icon
      { name: "API Integration & Management", icon: <Code className="inline-block h-4 w-4 mr-1.5 opacity-85" /> }, // Reusing Code icon
    ],
  },
  {
    id: "skills4",
    title: "Tools & Platforms",
    icon: <LayoutGrid className="h-6 w-6 text-primary" />, // Changed from Settings
    skills: [
      "Jira", "Confluence", "Trello", // Agile/Collaboration
      "Figma", "Miro", "Productboard", // Design/Roadmapping
      "Power BI", "Excel", "MS Office Suite", // Analytics/Office
      "Google Analytics", "Amplitude" // Product Analytics
    ],
  },
  {
    id: "skills5", // Updated ID
    title: "Cloud & Data Engineering",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    skills: [
      "Microsoft Azure (Data Factory, Databricks, Fabric, Synapse)",
      "Snowflake",
      "Oracle Cloud Infrastructure (OCI)",
      "CI/CD Automation",
      "Informatica",
    ],
  },
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-background to-card/15 dark:from-card/15 dark:to-background">
      <SectionTitle>Core Competencies</SectionTitle> {/* Updated Title */}
      {/* Grid layout: 1 column on small screens, 2 columns on medium screens, consider 3 for large? Sticking to 2 for now */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> {/* Updated to lg:grid-cols-3 */}
        {skillCategories.map((category, index) => (
          // Enhanced Card Styling - consistent with other sections
          <Card
            key={category.id}
            className="flex flex-col bg-card/95 dark:bg-secondary/70 mac-shadow transition-all duration-300 ease-out hover:shadow-lg hover:border-primary/40 dark:hover:border-primary/60 transform hover:-translate-y-1.5"
             // Apply staggered animation delay
             style={{ '--animation-delay': `${150 + index * 100}ms` } as React.CSSProperties}
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-4 p-5 md:p-6"> {/* Consistent padding */}
              <div className="bg-primary/15 dark:bg-primary/25 p-2.5 rounded-full"> {/* Slightly larger icon background */}
                {category.icon}
              </div>
              <CardTitle as="h3" className="text-lg md:text-xl font-semibold text-foreground">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-5 md:p-6 pt-0 flex-1"> {/* Use flex-1 to allow badges to fill space */}
              {/* Enhanced Badge Styling & Spacing */}
              <div className="flex flex-wrap gap-2.5"> {/* Increased gap slightly */}
                {category.skills.map((skill) => (
                  <Badge
                    key={typeof skill === 'string' ? skill : skill.name}
                    variant="secondary"
                    // Refined Badge Appearance - consistent hover effect
                    className="text-sm md:text-base font-medium bg-muted/70 dark:bg-muted/50 text-muted-foreground dark:text-foreground/80 border border-transparent hover:border-primary/50 dark:hover:border-primary/60 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary transition-all duration-200 flex items-center gap-1.5 px-3.5 py-1.5 rounded-md" // Ensure badges are readable and consistently styled
                  >
                    {/* Render icon if skill is an object */}
                    {typeof skill === 'string' ? skill : <>{skill.icon} {skill.name}</>}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

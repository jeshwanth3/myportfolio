import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cpu, Briefcase, Settings, Cloud, Workflow, BarChart, Users, Rocket, Target, ClipboardList, MousePointerClick, TestTube, Zap, LayoutGrid, Presentation, BrainCircuit } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const skillCategories = [
  {
    id: "skills1",
    title: "Technical & Data Skills",
    icon: <Code className="h-6 w-6 text-accent" />, // Use accent color
    skills: ["Python", "SQL", "R", "ETL", "Excel", "Big Data", {name: "Machine Learning", icon: <BrainCircuit className="inline-block h-4 w-4 mr-1 opacity-80" />}, "Data Visualization & Analytics", "APIs"],
  },
  {
    id: "skills2",
    title: "Product Management",
    icon: <Briefcase className="h-6 w-6 text-accent" />, // Use accent color
    skills: [
      { name: "Product Lifecycle Management (PLM)", icon: <Workflow className="inline-block h-4 w-4 mr-1 opacity-80" /> },
      { name: "Product Vision & Roadmapping", icon: <Rocket className="inline-block h-4 w-4 mr-1 opacity-80" /> },
      { name: "Agile & Scrum", icon: <Settings className="inline-block h-4 w-4 mr-1 opacity-80" /> },
      { name: "Product Discovery", icon: <MousePointerClick className="inline-block h-4 w-4 mr-1 opacity-80" /> },
      { name: "Backlog Grooming", icon: <ClipboardList className="inline-block h-4 w-4 mr-1 opacity-80" /> },
      { name: "Feature Prioritization", icon: <Target className="inline-block h-4 w-4 mr-1 opacity-80" /> },
      { name: "User Stories", icon: <Users className="inline-block h-4 w-4 mr-1 opacity-80" /> },
      { name: "A/B Testing", icon: <TestTube className="inline-block h-4 w-4 mr-1 opacity-80" /> },
      { name: "Cross Functional Team Leadership", icon: <Users className="inline-block h-4 w-4 mr-1 opacity-80" /> },
      { name: "Go-to-Market Strategy", icon: <Rocket className="inline-block h-4 w-4 mr-1 opacity-80" /> },
      { name: "Stakeholder Alignment", icon: <Presentation className="inline-block h-4 w-4 mr-1 opacity-80" /> },
      { name: "User Research", icon: <Users className="inline-block h-4 w-4 mr-1 opacity-80" /> },
      { name: "Competitive Analysis", icon: <BarChart className="inline-block h-4 w-4 mr-1 opacity-80" /> },
    ],
  },
  {
    id: "skills3",
    title: "Tools & Platforms",
    icon: <LayoutGrid className="h-6 w-6 text-accent" />, // Use accent color
    skills: ["Jira", "Figma", "Trello", "Confluence", "Productboard", "Miro", "Power BI", "MS Office Suite", "Google Analytics", "Amplitude"],
  },
  {
    id: "skills4",
    title: "Cloud & Infrastructure",
    icon: <Cloud className="h-6 w-6 text-accent" />, // Use accent color
    skills: ["Snowflake", "Microsoft Azure (Data Factory, Data Bricks, Fabric, Synapse)", "Informatica", "CI/CD Automation", "Oracle Cloud"],
  },
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-background to-card/20 dark:from-card/20 dark:to-background">
      <SectionTitle>Skills</SectionTitle>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {skillCategories.map((category) => (
          <AccordionItem key={category.id} value={category.id} className="border border-border/30 dark:border-border/50 rounded-lg bg-card/90 dark:bg-secondary/60 mac-shadow transition-all duration-300 ease-out overflow-hidden hover:border-accent/50 dark:hover:border-accent/70 transform hover:-translate-y-0.5">
            <AccordionTrigger className="p-4 md:p-6 text-left hover:no-underline hover:bg-accent/10 dark:hover:bg-accent/15 transition-colors data-[state=open]:bg-accent/15 dark:data-[state=open]:bg-accent/20 hover:text-accent dark:hover:text-accent dark:data-[state=open]:text-accent">
               <div className="flex items-start gap-4 w-full">
                  <div className="mt-1 shrink-0 bg-accent/10 dark:bg-accent/20 p-2 rounded-full">
                      {category.icon}
                  </div>
                  <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold text-foreground">{category.title}</h3>
                      {/* Optional: Add a short description/summary of skills here if needed */}
                  </div>
               </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 md:p-6 pt-0 border-t border-border/30 dark:border-border/40 bg-card/50 dark:bg-secondary/30">
               <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                   <Badge
                    key={typeof skill === 'string' ? skill : skill.name}
                    variant="secondary" // Use secondary variant which pulls from theme
                    // Use accent color for hover state
                    className="text-xs md:text-sm font-normal border border-transparent hover:border-accent/40 dark:hover:border-accent/50 hover:bg-accent/10 dark:hover:bg-accent/15 hover:text-accent dark:hover:text-accent transition-all duration-200 flex items-center gap-1.5 px-3 py-1 rounded-md"
                  >
                     {typeof skill === 'string' ? skill : <>{skill.icon} {skill.name}</>}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}


    
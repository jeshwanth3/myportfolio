import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cpu, Briefcase, Settings, Cloud, Workflow, BarChart, Users, Rocket, Target, ClipboardList, MousePointerClick, TestTube, Zap, LayoutGrid, Presentation, BrainCircuit } from 'lucide-react';

const skillCategories = [
  {
    title: "Technical & Data Skills",
    icon: <Code className="h-6 w-6 text-accent" />, // Use accent color
    skills: ["Python", "SQL", "R", "ETL", "Excel", "Big Data", {name: "Machine Learning", icon: <BrainCircuit className="inline-block h-4 w-4 mr-1 opacity-80" />}, "Data Visualization & Analytics", "APIs"],
  },
  {
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
    title: "Tools & Platforms",
    icon: <LayoutGrid className="h-6 w-6 text-accent" />, // Use accent color
    skills: ["Jira", "Figma", "Trello", "Confluence", "Productboard", "Miro", "Power BI", "MS Office Suite", "Google Analytics", "Amplitude"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="h-6 w-6 text-accent" />, // Use accent color
    skills: ["Snowflake", "Microsoft Azure (Data Factory, Data Bricks, Fabric, Synapse)", "Informatica", "CI/CD Automation", "Oracle Cloud"],
  },
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-background to-card/20 dark:from-card/20 dark:to-background">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {skillCategories.map((category) => (
          <Card key={category.title} className="bg-card/90 dark:bg-secondary/60 mac-shadow hover:border-accent/60 dark:hover:border-accent/70 transition-all duration-300 ease-out hover:shadow-lg transform hover:-translate-y-1"> {/* Updated hover border */}
             <CardHeader className="flex flex-row items-center gap-4 pb-3 p-5 md:p-6">
                {/* Use accent color for icon background/text */}
                <div className="bg-accent/10 dark:bg-accent/20 p-2 rounded-full">
                    {category.icon}
                </div>
              <CardTitle className="text-lg md:text-xl font-semibold text-foreground">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-5 md:p-6 pt-0">
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
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}


    
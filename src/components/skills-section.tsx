import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Code, Briefcase, Settings, Cloud, Workflow, BarChart, Users, Rocket, Target, ClipboardList, MousePointerClick, TestTube, LayoutGrid, Presentation, BrainCircuit } from 'lucide-react'; // Keep relevant icons

const skillCategories = [
  {
    id: "skills1",
    title: "Technical & Data Skills",
    icon: <Code className="h-6 w-6 text-primary" />, // Consistent icon styling
    skills: ["Python", "SQL", "R", "ETL", "Excel", "Big Data", {name: "Machine Learning", icon: <BrainCircuit className="inline-block h-4 w-4 mr-1.5 opacity-85" />}, "Data Visualization & Analytics", "APIs"], // Added slightly more margin
  },
  {
    id: "skills2",
    title: "Product Management",
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Product Lifecycle Management (PLM)", icon: <Workflow className="inline-block h-4 w-4 mr-1.5 opacity-85" /> }, // Increased icon size slightly, added margin
      { name: "Product Vision & Roadmapping", icon: <Rocket className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Agile & Scrum", icon: <Settings className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Product Discovery", icon: <MousePointerClick className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Backlog Grooming", icon: <ClipboardList className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Feature Prioritization", icon: <Target className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "User Stories", icon: <Users className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "A/B Testing", icon: <TestTube className="inline-block h-4 w-4 mr-1.5 opacity-85" /> },
      { name: "Cross Functional Team Leadership", icon: <Users className="inline-block h-4 w-4 mr-1.5 opacity-85" /> }, // Use Users icon
      { name: "Go-to-Market Strategy", icon: <Rocket className="inline-block h-4 w-4 mr-1.5 opacity-85" /> }, // Use Rocket icon
      { name: "Stakeholder Alignment", icon: <Presentation className="inline-block h-4 w-4 mr-1.5 opacity-85" /> }, // Use Presentation icon
      { name: "User Research", icon: <Users className="inline-block h-4 w-4 mr-1.5 opacity-85" /> }, // Use Users icon
      { name: "Competitive Analysis", icon: <BarChart className="inline-block h-4 w-4 mr-1.5 opacity-85" /> }, // Use BarChart icon
    ],
  },
  {
    id: "skills3",
    title: "Tools & Platforms",
    icon: <LayoutGrid className="h-6 w-6 text-primary" />,
    skills: ["Jira", "Figma", "Trello", "Confluence", "Productboard", "Miro", "Power BI", "MS Office Suite", "Google Analytics", "Amplitude"],
  },
  {
    id: "skills4",
    title: "Cloud & Infrastructure",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    skills: ["Snowflake", "Microsoft Azure (Data Factory, Data Bricks, Fabric, Synapse)", "Informatica", "CI/CD Automation", "Oracle Cloud"],
  },
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-background to-card/15 dark:from-card/15 dark:to-background">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {skillCategories.map((category) => (
          // Enhanced Card Styling
          <Card
            key={category.id}
            className="bg-card/95 dark:bg-secondary/70 mac-shadow transition-all duration-300 ease-out hover:shadow-lg hover:border-primary/40 dark:hover:border-accent/60 transform hover:-translate-y-1.5"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-4 p-5 md:p-6"> {/* Consistent padding */}
              <div className="bg-primary/15 dark:bg-primary/25 p-2.5 rounded-full"> {/* Slightly larger icon background */}
                {category.icon}
              </div>
              <CardTitle as="h3" className="text-lg md:text-xl font-semibold text-foreground">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-5 md:p-6 pt-0">
              {/* Enhanced Badge Styling & Spacing */}
              <div className="flex flex-wrap gap-2.5"> {/* Increased gap slightly */}
                {category.skills.map((skill) => (
                  <Badge
                    key={typeof skill === 'string' ? skill : skill.name}
                    variant="secondary"
                    // Refined Badge Appearance
                    className="text-sm md:text-base font-medium bg-muted/70 dark:bg-muted/50 text-muted-foreground dark:text-foreground/80 border border-transparent hover:border-accent/50 dark:hover:border-accent/60 hover:bg-accent/10 dark:hover:bg-accent/20 hover:text-accent dark:hover:text-accent transition-all duration-200 flex items-center gap-1.5 px-3.5 py-1.5 rounded-md" // Ensure badges are readable and consistently styled
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

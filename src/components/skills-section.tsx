import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cpu, Briefcase, Settings, Cloud, Workflow, BarChart, Users, Rocket, Target, ClipboardList, MousePointerClick, TestTube, Zap, LayoutGrid, Presentation } from 'lucide-react'; // Import more icons

const skillCategories = [
  {
    title: "Technical Skills",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["Python", "SQL", "R", "ETL", "Excel", "Big Data", "Machine Learning", "Data Visualization & Analytics", "APIs"],
  },
  {
    title: "Product Management",
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Product Lifecycle Management (PLM)", icon: <Workflow className="inline-block h-4 w-4 mr-1" /> },
      { name: "Product Vision & Roadmapping", icon: <Rocket className="inline-block h-4 w-4 mr-1" /> },
      { name: "Agile & Scrum", icon: <Settings className="inline-block h-4 w-4 mr-1" /> },
      { name: "Product Discovery", icon: <MousePointerClick className="inline-block h-4 w-4 mr-1" /> },
      { name: "Backlog grooming", icon: <ClipboardList className="inline-block h-4 w-4 mr-1" /> },
      { name: "Feature Prioritization", icon: <Target className="inline-block h-4 w-4 mr-1" /> },
      { name: "User Stories", icon: <Users className="inline-block h-4 w-4 mr-1" /> },
      { name: "A/B Testing", icon: <TestTube className="inline-block h-4 w-4 mr-1" /> },
      { name: "Cross Functional Team Leadership", icon: <Users className="inline-block h-4 w-4 mr-1" /> },
      { name: "Go-to-Market Strategy", icon: <Rocket className="inline-block h-4 w-4 mr-1" /> },
      { name: "Stakeholder Alignment", icon: <Presentation className="inline-block h-4 w-4 mr-1" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <LayoutGrid className="h-6 w-6 text-primary" />,
    skills: ["Jira", "Figma", "Trello", "Confluence", "Productboard", "Miro", "Power BI", "MS Office Suite"],
  },
  {
    title: "Cloud Technologies",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    skills: ["Snowflake", "Microsoft Azure (Data Factory, Data Bricks, Fabric, Synapse)", "Informatica", "CI/CD Automation", "Amplitude", "Google Analytics", "Oracle Cloud"],
  },
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-secondary">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {skillCategories.map((category) => (
          <Card key={category.title} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              {category.icon}
              <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm flex items-center gap-1">
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

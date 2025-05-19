import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from 'lucide-react';

const skillCategories = [
  {
    id: "skills1",
    title: "Product Strategy & AI",
    icon: <Sparkles className="h-6 w-6 text-blue-400" />,
    description: "Crafting AI-driven product visions! 🚀",
    skills: [
      "Product Vision & Roadmapping",
      "AI/ML Product Strategy",
      "Market Research & Analysis",
      "Feature Prioritization",
      "Product Lifecycle Management",
      "AI Integration Planning"
    ]
  },
  {
    id: "skills3",
    title: "End-to-End Product Management",
    skills: [
      "Product Ideation & Vision",
      "Roadmap Planning",
      "User-Centered Design",
      "MVP Development",
      "Cross-Functional Team Leadership",
      "Go-to-Market Strategy",
      "Iterative Product Improvement"
    ]
  },
  {
    id: "skills4",
    title: "Cloud-Based Data Analysis",
    skills: ["Azure Data Factory", "Azure SQL Database", "Power BI", "ETL Pipelines", "Data Visualization", "Cloud Architecture"]
  }
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-background to-card/15 dark:from-card/15 dark:to-background">
      <SectionTitle>Skills & Expertise ✨</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card
            key={category.id}
            className="group hover:scale-[1.02] transition-all duration-300 bg-card/95 dark:bg-secondary/70 border-border/25 dark:border-border/35 hover:shadow-lg hover:shadow-primary/10"
            style={{ '--animation-delay': `${150 + index * 100}ms` } as React.CSSProperties}
          >
            <CardHeader className="space-y-1 p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-background/80 group-hover:bg-primary/10 transition-colors duration-300">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </div>
              <p className="text-muted-foreground text-sm">{category.description}</p>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-2.5 py-1 text-sm bg-background/50 hover:bg-primary/10 transition-colors duration-200"
                  >
                    {skill}
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
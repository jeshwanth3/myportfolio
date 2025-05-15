"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Rocket,
  Users,
  LineChart,
  Code,
  Cloud,
  Lightbulb,
  Target,
  Puzzle,
  Zap
} from 'lucide-react';

const skillCategories = [
  {
    id: "skills1",
    title: "Product Strategy",
    icon: <Rocket className="h-6 w-6 text-blue-400" />,
    description: "Crafting the roadmap to product success! 🚀",
    skills: [
      "Product Vision & Roadmapping",
      "Go-to-Market Strategy",
      "Feature Prioritization",
      "Competitive Analysis",
      "Product Lifecycle Management"
    ]
  },
  {
    id: "skills2",
    title: "User-Centric Design",
    icon: <Users className="h-6 w-6 text-green-400" />,
    description: "Making products people love to use! 💚",
    skills: [
      "User Research",
      "Journey Mapping",
      "Usability Testing",
      "Design Thinking",
      "User Feedback Analysis"
    ]
  },
  {
    id: "skills3",
    title: "Data & Analytics",
    icon: <LineChart className="h-6 w-6 text-purple-400" />,
    description: "Turning data into decisions! 📊",
    skills: [
      "SQL & Python",
      "A/B Testing",
      "Product Analytics",
      "Data Visualization",
      "KPI Definition & Tracking"
    ]
  },
  {
    id: "skills4",
    title: "Technical Skills",
    icon: <Code className="h-6 w-6 text-yellow-400" />,
    description: "Speaking the language of developers! 💻",
    skills: [
      "API Integration",
      "Azure Cloud Services",
      "CI/CD Pipelines",
      "System Architecture",
      "Technical Documentation"
    ]
  },
  {
    id: "skills5",
    title: "Leadership",
    icon: <Brain className="h-6 w-6 text-pink-400" />,
    description: "Building & inspiring great teams! 🎯",
    skills: [
      "Cross-functional Leadership",
      "Stakeholder Management",
      "Agile Methodologies",
      "Team Mentoring",
      "Strategic Planning"
    ]
  }
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-background to-card/15 dark:from-card/15 dark:to-background">
      <SectionTitle>What I Bring to the Table ✨</SectionTitle>
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
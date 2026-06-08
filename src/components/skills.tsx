"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, Activity, Layers, Code2, Cloud, Cpu } from "lucide-react";

const skillCategories = [
  {
    id: "skills-req",
    title: "Business Analysis & Requirements",
    description: "Structured requirements and traceability for complex systems.",
    icon: ClipboardList,
    skills: [
      "Requirements elicitation",
      "BRD / FRD",
      "User stories",
      "Use cases",
      "RTM",
      "Business rules",
    ],
  },
  {
    id: "skills-agile",
    title: "Agile Delivery & Tools",
    description: "Driving Agile execution and continuous delivery.",
    icon: Activity,
    skills: [
      "Scrum / Kanban",
      "Jira / Confluence",
      "Sprint planning",
      "Backlog refinement",
      "Release planning",
      "Cross-functional collaboration",
    ],
  },
  {
    id: "skills-process",
    title: "Process & Workflow Optimization",
    description: "Mapping and automating processes for higher efficiency.",
    icon: Layers,
    skills: [
      "Process mapping",
      "Gap analysis",
      "Root cause analysis",
      "UAT coordination",
      "Data quality checks",
      "SOP documentation",
    ],
  },
  {
    id: "skills-test",
    title: "Testing & Delivery",
    description: "Ensuring release readiness with robust validation.",
    icon: ClipboardList,
    skills: [
      "UAT planning",
      "Test scenarios",
      "Defect tracking",
      "Regression testing",
      "Release readiness",
      "Data validation",
    ],
  },
  {
    id: "skills-tech",
    title: "Technical & Cloud",
    description: "Modern cloud and analytics toolset for enterprise delivery.",
    icon: Cloud,
    skills: [
      "Python",
      "SQL",
      "Power BI",
      "Azure Synapse",
      "Snowflake",
      "Informatica / ETL",
    ],
  },
  {
    id: "skills-ai",
    title: "AI & Automation",
    description: "Designing AI-enabled workflows and predictive solutions.",
    icon: Cpu,
    skills: [
      "Generative AI",
      "LLMs",
      "NLP",
      "AI Agents",
      "Predictive modeling",
      "Intelligent document processing",
    ],
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-background via-card/5 to-background py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle>Skills & Expertise</SectionTitle>
        <p className="mt-4 max-w-3xl text-muted-foreground" style={{ lineHeight: '1.85' }}>
          Full-stack business analysis and AI transformation capabilities built for enterprise delivery, report automation, process excellence, and modern cloud solutions.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="overflow-hidden rounded-[2rem] border border-border/50 bg-card/80 shadow-lg">
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground">{category.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="rounded-full bg-background/80 px-3 py-1 text-sm font-medium text-foreground border border-border/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

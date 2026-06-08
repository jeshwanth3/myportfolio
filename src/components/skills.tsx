"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
const skillGroups = [
  {
    id: "analysis",
    title: "Business Analysis & Requirements",
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
    id: "agile",
    title: "Agile Delivery & Tools",
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
    id: "process",
    title: "Process & Workflow",
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
    id: "testing",
    title: "Testing & Delivery",
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
    id: "technical",
    title: "Technical & Cloud",
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
    id: "ai",
    title: "AI & Automation",
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
    <SectionWrapper id="skills">
      <SectionTitle>Skills</SectionTitle>
      <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">
        Full-stack business analysis and AI transformation capabilities.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <div
            key={group.id}
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-foreground">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-md px-3 py-1.5 text-sm font-medium bg-card text-muted-foreground border border-border/50 hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

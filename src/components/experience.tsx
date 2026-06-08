"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
const experiences = [
  {
    id: "centene",
    title: "Business Analyst",
    company: "Centene Corporation",
    location: "Phoenix, AZ",
    duration: "Jul 2025 - Present",
    bullets: [
      "Led stakeholder interviews across claims and member services to gather functional requirements for an AI-powered prior authorization workflow, defining business rules and exception handling criteria that accelerated authorization turnaround by 40%.",
      "Drove AS-IS/TO-BE process mapping and gap analysis for a member services workflow redesign, delivering BRDs, FRDs, and RTMs that eliminated 3 manual handoffs.",
      "Coordinated UAT across Agile SDLC cycles for quarterly releases and AI feature rollouts, authoring 120+ test scenarios and managing defect triage in JIRA.",
      "Developed SQL-based data extracts and Power BI dashboards tracking claims denial rates and provider KPIs, surfacing a $1.2M overpayment pattern for corrective action.",
      "Partnered with data science and engineering to define functional requirements and HIPAA guardrails for a GenAI member chatbot, guiding phased rollout across 3 service lines.",
    ],
  },
  {
    id: "cybiz",
    title: "IT Business Analyst",
    company: "CyBIZ Lab",
    location: "USA",
    duration: "Aug 2024 - May 2025",
    bullets: [
      "Translated business requirements into technical specifications and UML diagrams, enabling delivery of an API-integrated module with AI-enhanced data processing.",
      "Structured 30+ user stories and acceptance criteria in JIRA, reducing requirement-related rework by 30% across four releases.",
      "Built Tableau dashboards and Excel analytical models with SQL data, giving leadership real-time visibility into adoption trends.",
      "Authored SOPs, workflow documentation, and BPMN models for release planning across three client environments.",
      "Performed root cause analysis on workflow management, recommending AI-based data classification strategies that cut manual reconciliation by 35%.",
    ],
  },
  {
    id: "ableup",
    title: "Technical Business Analyst Intern",
    company: "Able Up Iowa",
    location: "USA",
    duration: "Jun 2024 - Aug 2024",
    bullets: [
      "Analyzed 280K+ borrower records using SQL and Python, translating risk segmentation findings into decision rules that improved loan approvals by 12%.",
      "Defined KPI logic and built a Power BI Impact Dashboard to support securing a $500K CDFI award.",
      "Defined data intake requirements and validation rules for an Azure Data Factory ETL pipeline, reducing processing time by 50%.",
      "Developed a data governance framework in Azure Databricks to flag inconsistencies across 15+ sources, improving data accuracy by 30%.",
    ],
  },
  {
    id: "accenture",
    title: "Associate Business Analyst",
    company: "Accenture",
    location: "India",
    duration: "Oct 2021 - Jul 2023",
    bullets: [
      "Spearheaded analysis for a cloud-based SCP platform serving 150+ clients, delivering BRDs and FRDs that supported launch of a Business Planning module generating $2M in revenue.",
      "Conducted stakeholder workshops with 40+ planners, validating wireframes in Figma to improve adoption by 25%.",
      "Documented business rules and data standards for demand planning workflows, driving 35% planning efficiency improvement.",
      "Built Power BI and Tableau dashboards by defining KPI logic and validating metrics with SQL against SAP and Snowflake sources.",
      "Partnered with engineering on ERP data ingestion automation, improving forecast accuracy by 20% across 30+ distribution centers.",
    ],
  },
];

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle>Experience</SectionTitle>
      <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">
        Business analysis leadership across healthcare, enterprise IT, and
        supply chain with a focus on AI-enabled workflows.
      </p>

      <div className="mt-12 space-y-10">
        {experiences.map((exp, i) => (
          <article
            key={exp.id}
            className="relative pl-6 border-l-2 border-border/60 hover:border-primary/60 transition-colors duration-300"
          >
            <div className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-primary" />

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.title}
                </h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>

              <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {exp.duration}
                </span>
              </div>
            </div>

            <ul className="space-y-2.5">
              {exp.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/40"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

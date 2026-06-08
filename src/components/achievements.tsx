"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, ShieldCheck, Award } from "lucide-react";
const achievements = [
  {
    id: "achievement-1",
    title: "AI-powered Prior Authorization",
    description:
      "Accelerated prior authorization turnaround by 40% through stakeholder-driven requirements, business rules, and exception handling.",
    tags: ["GenAI", "Automation", "Healthcare"],
    icon: Zap,
  },
  {
    id: "achievement-2",
    title: "Data-Driven Dashboards",
    description:
      "$1.2M overpayment pattern surfaced with SQL and Power BI, enabling cross-functional corrective action and better claims oversight.",
    tags: ["Power BI", "SQL", "Analytics"],
    icon: TrendingUp,
  },
  {
    id: "achievement-3",
    title: "AI Chatbot Functional Specs",
    description:
      "Defined HIPAA guardrails and intent mapping for a GenAI member chatbot rollout across three service lines.",
    tags: ["LLM", "HIPAA", "Chatbot"],
    icon: ShieldCheck,
  },
  {
    id: "achievement-4",
    title: "Operational Efficiency Gains",
    description:
      "Cut manual reconciliation by 35% and eliminated 3 manual handoffs through process redesign and AI-enabled workflow automation.",
    tags: ["Process", "UAT", "Automation"],
    icon: Award,
  },
];

export function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionTitle>Key Achievements</SectionTitle>
      <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">
        Measurable outcomes from AI, automation, and analytics initiatives.
      </p>

      <div className="mt-12 grid gap-px bg-border/40 rounded-xl overflow-hidden md:grid-cols-2">
        {achievements.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-background p-6 md:p-8 space-y-4 hover:bg-card transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-md px-2 py-0.5 text-xs font-medium bg-secondary text-muted-foreground border-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

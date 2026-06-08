"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, LightningBolt, ShieldCheck, TrendingUp } from "lucide-react";

const achievements = [
  {
    id: "achievement-1",
    title: "AI-powered Prior Authorization",
    description: "Accelerated prior authorization turnaround by 40% through stakeholder-driven requirements, business rules, and exception handling.",
    tags: ["GenAI", "Automation", "Healthcare"],
    icon: LightningBolt,
  },
  {
    id: "achievement-2",
    title: "Data-Driven Dashboards",
    description: "$1.2M overpayment pattern surfaced with SQL and Power BI, enabling cross-functional corrective action and better claims oversight.",
    tags: ["Power BI", "SQL", "Analytics"],
    icon: TrendingUp,
  },
  {
    id: "achievement-3",
    title: "AI Chatbot Functional Specs",
    description: "Defined HIPAA guardrails and intent mapping for a GenAI member chatbot rollout across three service lines.",
    tags: ["LLM", "HIPAA", "Chatbot"],
    icon: ShieldCheck,
  },
  {
    id: "achievement-4",
    title: "Operational Efficiency Gains",
    description: "Cut manual reconciliation by 35% and eliminated 3 manual handoffs through process redesign and AI-enabled workflow automation.",
    tags: ["Process", "UAT", "Automation"],
    icon: Award,
  },
];

export function Achievements() {
  return (
    <SectionWrapper id="achievements" className="bg-gradient-to-b from-background via-card/10 to-background py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle>Key Achievements</SectionTitle>
        <p className="mt-4 max-w-3xl text-muted-foreground" style={{ lineHeight: '1.85' }}>
          Highlighting measurable outcomes from AI, automation, process, and analytics initiatives that shaped delivery and stakeholder impact.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <Card key={achievement.id} className="rounded-[2rem] border border-border/50 bg-card/80 shadow-xl">
                <CardHeader className="flex items-start gap-4 p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <CardTitle className="text-lg font-semibold text-foreground">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm leading-7 text-muted-foreground">{achievement.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {achievement.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-foreground border border-border/30">
                        {tag}
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

"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const metrics = [
  { label: "4+ Years", detail: "Business Analysis", icon: Briefcase },
  { label: "40%", detail: "Workflow efficiency gain", icon: Zap },
  { label: "$1.2M", detail: "Overpayment recovery", icon: TrendingUp },
  { label: "150+", detail: "Global clients supported", icon: Users },
];

const strengths = [
  "Requirements Engineering",
  "GenAI Workflows",
  "Agile Delivery",
  "Process Automation",
  "Data Visualization",
  "UAT Coordination",
];

export function Summary() {
  return (
    <SectionWrapper id="summary" className="pt-12 md:pt-20">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary tracking-wide uppercase">
              Senior Business Analyst
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Sai Jeshwanth
              <br />
              Goud Illuri
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[58ch]">
              4+ years leading requirements elicitation, AI-powered workflow
              automation, and stakeholder-driven solution design across
              healthcare, supply chain, and enterprise IT.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <a
              href="tel:+16464501960"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4 text-primary" />
              +1 (646) 450-1960
            </a>
            <a
              href="mailto:jeshwanthgoud2@gmail.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4 text-primary" />
              jeshwanthgoud2@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              USA
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="#experience">
              <Button className="rounded-lg px-6 h-10 bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                View Experience
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                className="rounded-lg px-6 h-10 border-border hover:border-primary/50 hover:text-primary font-medium"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border/60 bg-card p-4 space-y-2"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <p className="text-xl font-bold text-foreground tabular-nums">
                    {metric.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {metric.detail}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl border border-border/60 bg-card p-5 space-y-3">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Core Strengths
            </p>
            <div className="flex flex-wrap gap-2">
              {strengths.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-md px-2.5 py-1 text-xs font-medium bg-secondary text-foreground border-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

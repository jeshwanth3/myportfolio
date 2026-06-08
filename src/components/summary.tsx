"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Briefcase, Sparkles, BarChart3 } from "lucide-react";

const summaryText = `Senior Business Analyst with 4+ years of experience leading requirements elicitation, AI-powered workflow automation, and stakeholder-driven solution design across healthcare, supply chain, and enterprise IT environments. Adept at defining functional specifications for GenAI chatbots, intelligent document processing, and predictive modeling initiatives while delivering BRDs, FRDs, user stories, and RTMs that accelerate Agile delivery.`;

const contactItems = [
  { label: "+1 (646) 450-1960", icon: Phone, href: "tel:+16464501960" },
  { label: "jeshwanthgoud2@gmail.com", icon: Mail, href: "mailto:jeshwanthgoud2@gmail.com" },
  { label: "USA", icon: Briefcase, href: "#" },
];

const metrics = [
  { label: "4+ Years", value: "Business Analysis", icon: Briefcase },
  { label: "40%", value: "Workflow efficiency", icon: Sparkles },
  { label: "$1.2M", value: "Overpayment recovery", icon: BarChart3 },
  { label: "150+", value: "Global clients supported", icon: Sparkles },
];

export function Summary() {
  return (
    <SectionWrapper id="summary" className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle>Professional Summary</SectionTitle>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] items-start mt-10">
          <div className="space-y-8">
            <p className="text-[var(--large-size)] leading-8 text-muted-foreground" style={{ lineHeight: '1.85' }}>
              {summaryText}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-2xl font-semibold text-foreground">{metric.label}</p>
                        <p className="text-sm text-muted-foreground">{metric.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="#experience" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto rounded-2xl px-8 py-5 bg-primary text-primary-foreground border border-primary/30 hover:bg-primary/90">
                  View Experience
                </Button>
              </Link>
              <Link href="#contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto rounded-2xl px-8 py-5 border-border/50 hover:border-primary/70">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/80 p-8 shadow-xl">
            <div className="space-y-6">
              <div className="rounded-3xl bg-primary/10 p-6">
                <h2 className="text-lg font-semibold text-foreground">Sai Jeshwanth Goud Illuri</h2>
                <p className="text-sm text-muted-foreground">Business Analyst</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Contact</h3>
                <div className="space-y-3">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a key={item.label} href={item.href} className="flex items-center gap-3 rounded-2xl border border-border/50 bg-background/80 px-4 py-3 text-sm text-foreground transition hover:border-primary/70 hover:bg-primary/5">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Summary</h3>
                <div className="rounded-3xl border border-border/50 bg-background/80 p-5 text-sm leading-7 text-foreground">
                  <p>Experienced in partnering with data science and engineering teams to translate AI/ML capabilities into actionable business requirements, leveraging SQL, Python, Power BI, and Tableau to drive digital transformations.</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Core Strengths</h3>
                <div className="flex flex-wrap gap-2">
                  {["Requirements", "GenAI", "Agile Delivery", "Automation", "Data Visualization", "UAT"].map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1 text-xs font-semibold bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

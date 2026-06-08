"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Calendar } from "lucide-react";
import Link from "next/link";
const contactLinks = [
  {
    label: "Email",
    detail: "Quick response",
    href: "mailto:jeshwanthgoud2@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    detail: "Connect professionally",
    href: "https://www.linkedin.com/in/jeshwanth-goud/",
    icon: Linkedin,
  },
  {
    label: "Schedule a Call",
    detail: "Book a time slot",
    href: "https://calendly.com/jeshwanthgoud2",
    icon: Calendar,
  },
];

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <SectionTitle align="center">Get in Touch</SectionTitle>
          <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Ready to discuss your next big product idea? Let's connect and
            create meaningful impact.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">
                    {link.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{link.detail}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div>
          <Link href="mailto:jeshwanthgoud2@gmail.com">
            <Button className="rounded-lg px-8 h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base">
              <Mail className="h-4 w-4 mr-2" />
              Send an Email
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}

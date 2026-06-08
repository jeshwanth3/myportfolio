"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jeshwanth-goud/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/jeshwanth3",
    icon: Github,
  },
  {
    name: "Email",
    url: "mailto:jeshwanthgoud2@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {currentYear !== null ? currentYear : "..."} Sai Jeshwanth Goud
          Illuri
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

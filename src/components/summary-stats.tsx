
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, FolderGit2, Rocket } from 'lucide-react';
import type React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
  delay?: string; // Add delay prop
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, className, delay }) => {
  return (
    <Card
      className={`bg-card/80 dark:bg-secondary/50 backdrop-blur-sm border border-border/20 dark:border-border/30 p-5 md:p-6 text-center flex flex-col items-center justify-center space-y-3 rounded-xl mac-shadow transition-all duration-300 ease-out hover:shadow-lg hover:border-primary/30 dark:hover:border-primary/40 transform hover:-translate-y-1 group ${className}`}
      // Apply animation delay using CSS variable
      style={{ '--animation-delay': delay } as React.CSSProperties}
    >
      <div className="bg-primary/15 dark:bg-primary/20 p-3 rounded-full group-hover:bg-primary/25 transition-colors duration-300">
        {icon}
      </div>
      <CardContent className="p-0 flex flex-col items-center">
        <p className="text-3xl md:text-4xl font-bold text-primary group-hover:text-primary transition-colors duration-300">
          {value}
        </p>
        <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-medium">
          {label}
        </p>
      </CardContent>
    </Card>
  );
};


export function SummaryStats() {
  const stats = [
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      value: "3+",
      label: "Years Experience",
      delay: "300ms", // Stagger delay
    },
    {
      icon: <FolderGit2 className="h-6 w-6 text-primary" />,
      value: "5+",
      label: "Projects Delivered", // Updated label
       delay: "450ms", // Stagger delay
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      value: "Ready",
      label: "Available for Hire", // Or "Seeking Opportunities"
       delay: "600ms", // Stagger delay
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-10 md:mt-16">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          delay={stat.delay} // Pass delay to StatCard
          className="animate-slide-in-bottom" // Apply animation class
        />
      ))}
    </div>
  );
}

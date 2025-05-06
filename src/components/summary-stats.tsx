import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, FolderGit2, Rocket } from 'lucide-react';
import * as React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon?: React.ReactNode;
  value: string;
  label: string;
  className?: string;
  delay?: string;
}

// Updated StatCard styling based on the reference image
const StatCard: React.FC<StatCardProps> = ({ icon, value, label, className, delay }) => {
  return (
    <Card
      // Adjusted styling: darker bg, less padding, rounded corners, subtle shadow
      className={cn(
        "bg-card/70 dark:bg-secondary/40 backdrop-blur-sm border border-border/15 dark:border-border/25 p-4 text-center flex flex-col items-center justify-center space-y-1.5 rounded-lg shadow-sm transition-all duration-300 ease-out group", // Use rounded-lg, adjust space
        "hover:shadow-md hover:border-primary/25 dark:hover:border-primary/35 transform hover:-translate-y-0.5", // Softer hover effect
        "min-h-[90px]", // Slightly reduced min height
        className
      )}
      // Apply animation delay using CSS variable
      style={{ '--animation-delay': delay } as React.CSSProperties}
    >
      {/* Icon styling */}
      {icon && (
        <div className="bg-primary/10 dark:bg-primary/15 p-2 rounded-md group-hover:bg-primary/20 transition-colors duration-300 mb-1"> {/* Changed to rounded-md */}
          {React.cloneElement(icon as React.ReactElement, { className: "h-4 w-4 text-primary" })} {/* Reduced icon size */}
        </div>
      )}
      <CardContent className="p-0 flex flex-col items-center">
        {/* Adjusted font size for value, use primary color */}
        <p className="text-xl md:text-2xl font-bold text-primary group-hover:text-primary transition-colors duration-300"> {/* Reduced size */}
          {value}
        </p>
        {/* Adjusted font size/tracking for label */}
        <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-normal font-medium"> {/* Reduced tracking and size */}
          {label}
        </p>
      </CardContent>
    </Card>
  );
};


export function SummaryStats() {
  const stats = [
    {
      icon: <Briefcase />,
      value: "3+",
      label: "Years of Experience",
      delay: "300ms",
    },
    {
      icon: <FolderGit2 />,
      value: "15+",
      label: "Projects Delivered",
       delay: "450ms",
    },
    {
      icon: <Rocket />,
      value: "Ready",
      label: "Available for Hire",
       delay: "600ms",
    },
  ];

  return (
    // Remove top margin (mt-*), grid layout adjusted for integration
    <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-5"> {/* Reduced gap */}
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          delay={stat.delay}
          className="animate-slide-in-bottom" // Apply animation class
        />
      ))}
    </div>
  );
}

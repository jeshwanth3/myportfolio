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
        "group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-card/80 via-background/80 to-card/40 dark:from-secondary/20 dark:via-card/80 dark:to-background border border-border/20 dark:border-border/30 shadow-lg hover:shadow-xl p-6 md:p-8 min-h-[90px] flex flex-col items-center justify-center space-y-1.5 rounded-lg backdrop-blur-sm",
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
        {/* Reduced size from text-xl md:text-2xl to text-lg md:text-xl */}
        <p className="text-lg md:text-xl font-bold text-primary group-hover:text-primary transition-colors duration-300">
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
      value: "4.5+",
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
      value: "Available", // Updated value from Ready to Available
      label: "For Hire", // Updated label from Available for Hire to For Hire
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


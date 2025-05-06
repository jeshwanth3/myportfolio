import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, FolderGit2, Rocket } from 'lucide-react';
import * as React from "react"; // Added missing React import
import { cn } from "@/lib/utils"; // Import cn utility

interface StatCardProps {
  icon?: React.ReactNode; // Make icon optional
  value: string;
  label: string;
  className?: string;
  delay?: string; // Add delay prop
}

// Updated StatCard to match the image style
const StatCard: React.FC<StatCardProps> = ({ icon, value, label, className, delay }) => {
  return (
    <Card
      // Use rounded-xl for squarer corners, adjusted padding, bg, shadow
      className={cn(
        "bg-card/80 dark:bg-secondary/50 backdrop-blur-sm border border-border/20 dark:border-border/30 p-4 md:p-5 text-center flex flex-col items-center justify-center space-y-2 rounded-xl mac-shadow transition-all duration-300 ease-out group",
        "hover:shadow-lg hover:border-primary/30 dark:hover:border-primary/40 transform hover:-translate-y-1", // Keep subtle hover effect
        className
      )}
      // Apply animation delay using CSS variable
      style={{ '--animation-delay': delay } as React.CSSProperties}
    >
      {/* Conditionally render icon */}
      {icon && (
        <div className="bg-primary/15 dark:bg-primary/20 p-2 rounded-full group-hover:bg-primary/25 transition-colors duration-300 mb-1">
          {React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5 text-primary" })}
        </div>
      )}
      <CardContent className="p-0 flex flex-col items-center">
        {/* Larger font size for value, use primary color */}
        <p className="text-3xl md:text-4xl font-bold text-primary group-hover:text-primary transition-colors duration-300 mb-0.5">
          {value}
        </p>
        {/* Smaller, uppercase font for label */}
        <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">
          {label}
        </p>
      </CardContent>
    </Card>
  );
};


export function SummaryStats() {
  const stats = [
    {
      icon: <Briefcase />, // Pass only the icon component
      value: "3+",
      label: "Years Experience",
      delay: "300ms", // Stagger delay
    },
    {
      icon: <FolderGit2 />, // Pass only the icon component
      value: "5+",
      label: "Projects Delivered", // Updated label
       delay: "450ms", // Stagger delay
    },
    {
      icon: <Rocket />, // Pass only the icon component
      value: "Ready",
      label: "Available for Hire", // Or "Seeking Opportunities"
       delay: "600ms", // Stagger delay
    },
  ];

  return (
    // Reduced top margin significantly, ensure grid layout works well
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-12 md:mt-16 lg:mt-20">
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

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, FolderGit2, Rocket } from 'lucide-react';
import * as React from "react"; // Added missing React import

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
      // Adjusted padding, changed to rounded-lg for squarer look, adjusted space
      className={`bg-card/80 dark:bg-secondary/50 backdrop-blur-sm border border-border/20 dark:border-border/30 p-3 md:p-4 text-center flex flex-col items-center justify-center space-y-2 rounded-lg mac-shadow transition-all duration-300 ease-out hover:shadow-lg hover:border-primary/30 dark:hover:border-primary/40 transform hover:-translate-y-1 group ${className}`}
      // Apply animation delay using CSS variable
      style={{ '--animation-delay': delay } as React.CSSProperties}
    >
      {/* Adjusted icon container size */}
      <div className="bg-primary/15 dark:bg-primary/20 p-2 rounded-full group-hover:bg-primary/25 transition-colors duration-300">
        {/* Icon size adjusted if necessary - using h-5 w-5 */}
        {React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5 text-primary" })}
      </div>
      <CardContent className="p-0 flex flex-col items-center">
        {/* Reduced font size for value */}
        <p className="text-xl md:text-2xl font-bold text-primary group-hover:text-primary transition-colors duration-300">
          {value}
        </p>
        {/* Reduced font size for label */}
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
    // Reduced top margin significantly for better integration
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
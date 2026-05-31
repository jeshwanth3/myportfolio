"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, FolderGit2, Rocket, TrendingUp } from 'lucide-react';
import * as React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon?: React.ReactNode;
  value: string;
  label: string;
  className?: string;
  delay?: string;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, className, delay, color = "primary" }) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-500 hover:scale-[1.03] rounded-2xl bg-gradient-to-br from-card/95 via-card/85 to-background/90 border border-border/30 hover:border-primary/50 shadow-lg hover:shadow-xl backdrop-blur-md",
        "min-h-[120px] flex flex-col items-center justify-center space-y-2.5 p-5",
        className
      )}
      style={{ '--animation-delay': delay } as React.CSSProperties}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-3">
        {/* Icon with glow effect */}
        {icon && (
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2.5 rounded-xl group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 shadow-md group-hover:shadow-lg border border-primary/10">
              {React.cloneElement(icon as React.ReactElement, { 
                className: "h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" 
              })}
            </div>
            {/* Pulse indicator */}
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-primary rounded-full opacity-0 group-hover:opacity-100"></div>
          </div>
        )}

        <CardContent className="p-0 flex flex-col items-center space-y-1">
          {/* Value with gradient and larger font */}
          <p className="text-[var(--large-size)] font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent number-stat group-hover:scale-110 transition-transform duration-300">
            {value}
          </p>
          
          {/* Label */}
          <p className="text-[var(--small-size)] text-muted-foreground font-semibold tracking-wide text-center px-2">
            {label}
          </p>
        </CardContent>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Card>
  );
};

export function SummaryStats() {
  const stats = [
    {
      icon: <Briefcase />,
      value: "4.5+",
      label: "Years Experience",
      delay: "300ms",
    },
    {
      icon: <TrendingUp />,
      value: "15+",
      label: "Products Delivered",
      delay: "450ms",
    },
    {
      icon: <Rocket />,
      value: "Available",
      label: "For Opportunities",
      delay: "600ms",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          delay={stat.delay}
          className="stagger-fade-in"
        />
      ))}
    </div>
  );
}

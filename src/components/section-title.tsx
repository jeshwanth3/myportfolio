"use client";

import { cn } from "@/lib/utils";
import type React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
    return (
        <div className="relative mb-12 md:mb-16">
            <h2
                className={cn(
                    "text-[var(--h2-size)] font-bold tracking-tight text-center relative pb-6 animate-fade-in",
                    "bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent",
                    className
                )}
                {...props}
            >
                {children}
            </h2>
            
            {/* Enhanced underline with gradient and glow */}
            <div className="flex items-center justify-center gap-2 mt-4">
                <div className="h-[3px] w-12 bg-gradient-to-r from-transparent to-primary/50 rounded-full"></div>
                <div className="relative h-1 w-20 bg-gradient-to-r from-primary via-accent to-primary rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-md opacity-60"></div>
                </div>
                <div className="h-[3px] w-12 bg-gradient-to-l from-transparent to-primary/50 rounded-full"></div>
            </div>
        </div>
    );
}

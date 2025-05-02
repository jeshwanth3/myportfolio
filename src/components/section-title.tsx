import { cn } from "@/lib/utils";
import type React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
    return (
        <h2
            className={cn(
              "text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-8 md:mb-12 text-primary dark:text-primary text-center relative pb-2", // Adjusted font weight, bottom margin, added relative positioning and padding-bottom
              "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-16 after:bg-primary/50 dark:after:bg-primary/70", // Added underline element
              className
            )}
            {...props}
        >
            {children}
        </h2>
    );
}
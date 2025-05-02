import { cn } from "@/lib/utils";
import type React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
    return (
        <h2
            className={cn(
              // Use primary color for text and underline accent in both modes
              "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-10 md:mb-16 text-primary dark:text-primary text-center relative pb-3",
              "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[3px] after:w-20 after:bg-primary/80 dark:after:bg-primary/80 after:rounded-full", // Changed dark underline to primary
              className
            )}
            {...props}
        >
            {children}
        </h2>
    );
}

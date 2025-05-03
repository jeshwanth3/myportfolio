import { cn } from "@/lib/utils";
import type React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
    return (
        <h2
            className={cn(
              // Use foreground for main text, primary for the underline accent
              "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-10 md:mb-16 text-foreground dark:text-foreground text-center relative pb-3",
              // Adjusted underline to use primary color and slightly reduced width/opacity
              "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[3px] after:w-16 after:bg-primary/70 dark:after:bg-primary/70 after:rounded-full",
              className
            )}
            {...props}
        >
            {children}
        </h2>
    );
}

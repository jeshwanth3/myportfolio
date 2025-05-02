import { cn } from "@/lib/utils";
import type React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
    return (
        <h2
            className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-primary text-center", className)}
            {...props}
        >
            {children}
        </h2>
    );
}

"use client";

import { cn } from "@/lib/utils";
import type React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  align?: "left" | "center";
}

export function SectionTitle({
  children,
  className,
  align = "left",
  ...props
}: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-bold tracking-tight text-foreground",
        align === "center" && "text-center",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

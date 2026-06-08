"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import { useAppearOnScroll } from "@/hooks/use-appear-on-scroll";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
}

export function SectionWrapper({
  children,
  id,
  className,
  ...props
}: SectionWrapperProps) {
  const [ref, isVisible] = useAppearOnScroll<HTMLElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "py-20 md:py-28",
        isVisible ? "animate-fade-in" : "opacity-0",
        className
      )}
      {...props}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">{children}</div>
    </section>
  );
}

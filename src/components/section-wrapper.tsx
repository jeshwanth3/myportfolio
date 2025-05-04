'use client'; // <-- Make it a client component

import type React from 'react';
import { cn } from '@/lib/utils';
import { useAppearOnScroll } from '@/hooks/use-appear-on-scroll'; // <-- Import the hook

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
  animationClassName?: string; // Optional prop for specific animation
  delay?: string; // Optional delay for staggered effect
}

export function SectionWrapper({
  children,
  id,
  className,
  animationClassName = 'animate-fade-in', // Default to fade-in
  delay = '150ms', // Default delay
  ...props
}: SectionWrapperProps) {
  // Use 15% visibility threshold, trigger animation only once
  const [ref, isVisible] = useAppearOnScroll<HTMLElement>({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id={id}
      ref={ref} // Attach the ref from the hook
      className={cn(
        'py-16 md:py-20 lg:py-24 opacity-0', // Start hidden
        // Rely solely on the animation class for the reveal transition
        isVisible && animationClassName, // Apply animation class when visible
        className
      )}
      // Apply delay using CSS variable defined in globals.css
      style={{ '--animation-delay': delay } as React.CSSProperties}
      {...props}
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

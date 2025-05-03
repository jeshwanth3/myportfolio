import type React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
}

export function SectionWrapper({ children, id, className, ...props }: SectionWrapperProps) {
  return (
    <section
      id={id}
      // Increased vertical padding, added animate-fade-in for entrance
      className={cn(
        'py-16 md:py-20 lg:py-24 animate-fade-in',
        // Add view-timeline for potential future scroll-driven animations
        // Note: Browser support for view-timeline is still evolving.
        // This is added preemptively for potential future enhancements.
        '[view-timeline-name:--section-scroll]',
        className
      )}
      {...props}
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto"> {/* Ensure content stays within reasonable width */}
        {children}
      </div>
    </section>
  );
}

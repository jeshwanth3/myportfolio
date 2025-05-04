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
      // Reduced vertical padding for a tighter layout, kept fade-in animation
      className={cn(
        'py-12 md:py-16 lg:py-20 animate-fade-in', // Use the existing fade-in animation
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

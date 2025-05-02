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
      // Reduced vertical padding: py-10 md:py-14 lg:py-16
      className={cn('py-10 md:py-14 lg:py-16 animate-fade-in', className)}
      {...props}
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto"> {/* Ensure content stays within reasonable width */}
        {children}
      </div>
    </section>
  );
}

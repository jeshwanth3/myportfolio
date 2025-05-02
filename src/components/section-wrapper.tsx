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
      className={cn('py-12 md:py-20 lg:py-24 animate-fade-in', className)}
      {...props}
    >
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}

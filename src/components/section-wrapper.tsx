// src/components/section-wrapper.tsx
'use client';

import type React from 'react';
import { cn } from '@/lib/utils';
import { useAppearOnScroll } from '@/hooks/use-appear-on-scroll';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
  animationClassName?: string;
  delay?: string;
}

export function SectionWrapper({
  children,
  id,
  className,
  animationClassName = 'animate-fade-in', // Default to fade-in
  delay = '150ms',
  ...props
}: SectionWrapperProps) {
  const [ref, isVisible] = useAppearOnScroll<HTMLElement>({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'py-10 md:py-12 lg:py-14 opacity-0 transition-opacity duration-700 ease-in-out',
        isVisible && animationClassName,
        className
      )}
      style={{ '--animation-delay': delay } as React.CSSProperties}
      {...props}
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

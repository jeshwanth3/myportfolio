// src/components/back-to-top-button.tsx
'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    const scrolled = window.pageYOffset;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrolled / height) * 100;
    
    setScrollProgress(progress);
    setIsVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility(); // Initial check

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        className={cn(
          'relative h-14 w-14 rounded-full p-0 shadow-2xl transition-all duration-500 ease-out overflow-hidden group',
          'bg-gradient-to-br from-card/95 to-background/95 hover:from-primary hover:to-accent',
          'text-primary hover:text-primary-foreground',
          'border-2 border-border/30 hover:border-primary/50',
          'backdrop-blur-lg',
          'hover:scale-110 hover:rotate-12 active:scale-95',
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-50 pointer-events-none'
        )}
        aria-label="Scroll to top"
      >
        {/* Circular progress indicator */}
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-border/20"
          />
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 26}`}
            strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
            className="text-primary transition-all duration-300"
            strokeLinecap="round"
          />
        </svg>

        {/* Icon */}
        <ArrowUp className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-1" />

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
      </Button>
    </div>
  );
}

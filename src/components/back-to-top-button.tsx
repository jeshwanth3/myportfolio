// src/components/back-to-top-button.tsx
'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Show button when page is scrolled down
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50"> {/* Fixed position */}
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        className={cn(
          'h-10 w-10 rounded-full p-2 shadow-lg transition-all duration-300 ease-in-out',
          'bg-card/80 hover:bg-primary/90 text-primary hover:text-primary-foreground', // Themed colors
          'border border-border hover:border-primary/50', // Themed border
          'backdrop-blur-md', // Glassmorphism effect
          'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background', // Focus styling
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none' // Visibility transition
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}

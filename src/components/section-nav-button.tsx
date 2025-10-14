"use client";

import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SectionNavButtonProps {
  nextSection: string;
}

export function SectionNavButton({ nextSection }: SectionNavButtonProps) {
  return (
    <div className="flex justify-center mt-12 md:mt-16">
      <Link href={`#${nextSection}`} passHref>
        <Button
          variant="ghost"
          size="icon"
          className="group relative rounded-full w-14 h-14 bg-gradient-to-br from-primary/15 to-accent/15 hover:from-primary/25 hover:to-accent/25 border-2 border-primary/30 hover:border-primary/50 text-primary transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl overflow-hidden"
          aria-label={`Navigate to ${nextSection} section`}
        >
          {/* Animated background pulse */}
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-100"></div>
          
          {/* Icon with bounce animation */}
          <ChevronDown className="h-6 w-6 relative z-10 animate-bounce group-hover:animate-none transition-transform duration-300 group-hover:translate-y-1" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300"></div>
        </Button>
      </Link>
    </div>
  );
}

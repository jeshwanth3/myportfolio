"use client";

import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SectionNavButtonProps {
  nextSection: string;
}

export function SectionNavButton({ nextSection }: SectionNavButtonProps) {
  return (
    <div className="flex justify-center mt-8">
      <Link href={`#${nextSection}`} passHref>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-10 h-10 bg-primary/10 hover:bg-primary/20 text-primary animate-bounce"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </Link>
    </div>
  );
}

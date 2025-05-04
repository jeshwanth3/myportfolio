'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Terminal } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { cn } from "@/lib/utils";


const navItems = [
  { label: 'Summary', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 ease-in-out", // Increased duration
        isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/20 shadow-md" : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        {/* Logo / Name */}
        <Link href="/" className="flex items-center space-x-2 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Terminal className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" /> {/* Slightly larger icon */}
          <span className={cn(
              "text-xl sm:text-2xl font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:brightness-125 transition-all duration-300",
               isScrolled ? "" : "animate-glow" // Only glow when not scrolled
               )}>
            Sai Jeshwanth Goud Illuri
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                 "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ease-out", // Added transition-all
                 "text-muted-foreground hover:text-foreground hover:bg-accent/10 dark:hover:bg-accent/15",
                 isScrolled ? "" : "hover:shadow-sm" // Subtle shadow on hover when not scrolled
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors duration-200 h-10 w-10 rounded-full" // Rounded trigger
              >
                <Menu className="h-6 w-6" />
                <VisuallyHidden>Toggle Menu</VisuallyHidden>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] max-w-[380px] bg-background/95 border-l border-border/30 backdrop-blur-xl p-0 flex flex-col" // Full height flex column
              title="Mobile Navigation" // Added title prop for accessibility
            >
              <SheetHeader className="border-b border-border/20 p-4">
                 <div className="flex items-center justify-between">
                     <Link href="/" className="flex items-center space-x-2.5 group" onClick={closeSheet}>
                         <Terminal className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                         <span className="text-lg font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:brightness-125 transition-all duration-300">
                         Sai J. G. Illuri {/* Shortened name for sheet header */}
                         </span>
                     </Link>
                    <Button variant="ghost" className="h-8 w-8 p-0" size="icon" onClick={closeSheet}>
                       <X className="h-5 w-5 text-muted-foreground" />
                       <VisuallyHidden>Close Menu</VisuallyHidden>
                    </Button>
                  </div>
                  {/* Explicit title and description for screen readers */}
                  <VisuallyHidden>
                     <SheetTitle id="mobile-nav-title">Mobile Navigation Menu</SheetTitle>
                     <SheetDescription id="mobile-nav-description">Links to different sections of the portfolio website.</SheetDescription>
                  </VisuallyHidden>
              </SheetHeader>
              {/* Mobile Navigation Links - Takes remaining space */}
              <nav className="flex-1 flex flex-col justify-center p-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeSheet}
                    className="block w-full px-4 py-3 text-lg font-medium text-foreground hover:bg-accent/10 dark:hover:bg-accent/15 hover:text-accent dark:hover:text-accent rounded-md transition-all duration-200 text-center"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              {/* Optional: Add a footer inside the sheet */}
              <div className="p-4 border-t border-border/20 mt-auto text-center text-xs text-muted-foreground">
                 Navigate Sections
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

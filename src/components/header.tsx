'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Send } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { cn } from "@/lib/utils";

const navItems = [
  { label: 'About', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setOpen(false);

  const handleMobileLinkClick = (href: string) => {
    closeSheet();
    // Wait for sheet to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100); // Adjust delay as needed
  };


  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
      isScrolled
        ? "glassmorphism-heavy shadow-xl" // Heavy glassmorphism when scrolled
        : "bg-gradient-to-b from-background/80 via-background/30 to-transparent border-b border-transparent" // Subtle gradient otherwise
    )}>
      <div className="container flex h-20 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto"> {/* Increased height */}

        {/* Name/Logo */}
        <Link href="/" className="flex items-center space-x-3 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Updated text styling: Larger font, gradient text with animation */}
          <span className={cn(
              "text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-text-slow", // Gradient text effect
              "group-hover:brightness-125 transition-all duration-300" // Subtle brightness increase on hover
            )}
          >
            Sai Jeshwanth Goud Illuri
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2"> {/* Reduced gap slightly */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleMobileLinkClick(item.href); }}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ease-out relative group", // Adjusted padding and base text size
                "text-muted-foreground hover:text-foreground", // Modern hover effect
                "overflow-hidden" // Needed for the underline effect
              )}
            >
               <span className="relative z-10">{item.label}</span>
               {/* Underline animation - more futuristic */}
               <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          ))}
          {/* Desktop Contact Button */}
          <Link href="#contact" passHref>
             <Button
               variant="outline"
               size="sm"
                // Enhanced button style - Fixed hover state
               className="ml-4 px-4 py-2 h-9 shadow-sm hover:shadow-md transition-all hover:scale-105 transform duration-200 border-primary/40 hover:border-primary/70 text-primary hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground" // Fixed hover text color issue
             >
                 Get In Touch <Send className="ml-1.5 h-3.5 w-3.5" />
             </Button>
          </Link>
        </nav>


        {/* Mobile Navigation Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors duration-200 h-10 w-10 rounded-full"
              >
                <Menu className="h-6 w-6" />
                <VisuallyHidden>Toggle Menu</VisuallyHidden>
              </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-[85vw] max-w-[380px] bg-background/90 border-l border-border/30 backdrop-blur-xl p-0 flex flex-col glassmorphism-heavy" // Apply heavy glassmorphism
                title="Main Navigation" // Added title prop for accessibility
            >
               <SheetHeader className="border-b border-border/20 p-4">
                 <div className="flex items-center justify-between">
                   <Link href="/" className="flex items-center space-x-2.5 group" onClick={(e) => { e.preventDefault(); handleMobileLinkClick('/'); }}>
                      {/* Mobile menu name uses gradient too */}
                     <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary group-hover:brightness-110 transition-all">
                        Sai Jeshwanth Goud Illuri
                     </span>
                   </Link>
                   <Button variant="ghost" className="h-8 w-8 p-0" size="icon" onClick={closeSheet}>
                     <X className="h-5 w-5 text-muted-foreground" />
                     <VisuallyHidden>Close Menu</VisuallyHidden>
                   </Button>
                 </div>
               </SheetHeader>

              {/* Mobile Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center p-4 space-y-2"> {/* Center links vertically */}
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleMobileLinkClick(item.href); }}
                    className="block w-full px-4 py-3 text-lg font-medium text-foreground hover:bg-accent/10 dark:hover:bg-accent/15 hover:text-accent dark:hover:text-primary rounded-md transition-all duration-200 text-center"
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Mobile Contact Button */}
                 <Link
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleMobileLinkClick('#contact'); }}
                     className="block w-full px-4 py-3 text-lg font-medium text-foreground hover:bg-accent/10 dark:hover:bg-accent/15 hover:text-accent dark:hover:text-primary rounded-md transition-all duration-200 text-center mt-4 border-t border-border/20 pt-6" // Add separator and spacing
                  >
                    Contact Me <Send className="inline-block ml-1.5 h-4 w-4 align-middle" />
                  </Link>
              </nav>

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

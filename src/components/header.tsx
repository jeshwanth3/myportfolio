
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { cn } from "@/lib/utils";

const navItems = [
  { label: 'About', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact Me', href: '#contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setOpen(false);

  // Function to handle smooth scroll and close sheet
  const handleMobileLinkClick = (href: string) => {
    closeSheet();
    // Delay scroll slightly to allow sheet to close visually first
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        // Use smooth scroll behavior
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
         // Fallback for links like "/"
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100); // Small delay
  };


  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
      isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/20 shadow-md" : "bg-transparent border-b border-transparent" // Increased blur and background on scroll
    )}>
      <div className="container flex h-20 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto"> {/* Increased height */}
        <Link href="/" className="flex items-center space-x-2.5 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Increased font size for name */}
          <span className={cn("text-2xl sm:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300", isScrolled ? "" : "animate-glow")}>
            Sai Jeshwanth Goud Illuri
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6"> {/* Adjusted gap */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              // Desktop links also use smooth scroll for consistency (if needed, but native browser behavior is usually fine)
              // onClick={(e) => { e.preventDefault(); handleMobileLinkClick(item.href); }} // Optional: Uncomment if desktop smooth scroll needed
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ease-out relative", // Adjusted padding and base text size
                "text-muted-foreground hover:text-foreground", // Modern hover effect
                "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out", // Underline animation
                "hover:after:scale-x-100"
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
                className="text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors duration-200 h-10 w-10 rounded-full" // Ensure sufficient size and rounded corners
              >
                <Menu className="h-6 w-6" />
                <VisuallyHidden>Toggle Menu</VisuallyHidden>
              </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-[85vw] max-w-[380px] bg-background/95 border-l border-border/30 backdrop-blur-xl p-0 flex flex-col" // Use background with opacity and blur
                title="Main Navigation" // Added title prop for accessibility
            >
               <SheetHeader className="border-b border-border/20 p-4">
                 <div className="flex items-center justify-between">
                   {/* Simplified title in mobile menu */}
                   <Link href="/" className="flex items-center space-x-2.5 group" onClick={(e) => { e.preventDefault(); handleMobileLinkClick('/'); }}>
                     <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                       Sai J. G. Illuri
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
                    // Use the handler for smooth scroll and sheet closing
                    onClick={(e) => { e.preventDefault(); handleMobileLinkClick(item.href); }}
                    className="block w-full px-4 py-3 text-lg font-medium text-foreground hover:bg-accent/10 dark:hover:bg-accent/15 hover:text-accent dark:hover:text-primary rounded-md transition-all duration-200 text-center" // Larger text, centered
                  >
                    {item.label}
                  </Link>
                ))}
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

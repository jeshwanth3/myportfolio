
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Send } from 'lucide-react'; // Added Send icon
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { cn } from "@/lib/utils";

const navItems = [
  { label: 'About', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  // { label: 'Contact Me', href: '#contact' }, // Removed contact from nav, added dedicated button
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
        // Use smooth scroll behavior with start alignment
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
         // Fallback for links like "/"
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150); // Slightly increased delay for smoother visual transition
  };


  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
      isScrolled
        ? "bg-background/95 backdrop-blur-xl border-b border-border/20 shadow-lg" // Enhanced blur and shadow on scroll
        : "bg-gradient-to-b from-background/80 via-background/50 to-transparent border-b border-transparent" // Subtle gradient when at top
    )}>
      <div className="container flex h-20 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto"> {/* Increased height */}

        {/* Name/Logo */}
        <Link href="/" className="flex items-center space-x-2.5 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Increased font size, refined glow */}
          <span className={cn(
              "text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300",
              !isScrolled && "animate-glow" // Apply glow only when at the top
            )}
          >
            Sai Jeshwanth Goud Illuri {/* Updated Name */}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2"> {/* Reduced gap slightly */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              // Desktop links also use smooth scroll
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
               className="ml-4 px-4 py-2 h-9 shadow-sm hover:shadow-md transition-all hover:scale-105 transform duration-200 bg-card/50 hover:bg-accent/20 hover:text-accent border-primary/30 hover:border-primary/60 dark:bg-secondary/50 dark:hover:bg-accent/25 dark:hover:text-accent dark:border-primary/40 dark:hover:border-primary/70 text-primary hover:text-accent dark:text-primary dark:hover:text-accent"
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
                        Sai Jeshwanth Goud Illuri {/* Updated Name */}
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


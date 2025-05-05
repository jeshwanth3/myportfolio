// src/components/header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Send } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"; // Import SheetTitle
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
  const [open, setOpen] = useState(false); // State for mobile menu sheet
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Trigger effect slightly earlier
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setOpen(false); // Function to close the sheet

  const handleMobileLinkClick = (href: string) => {
    closeSheet(); // Close the sheet when a link is clicked
    // Wait slightly for animation before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        // Adjust scroll position to account for sticky header height
        const headerOffset = 80; // Approximate height of the sticky header + some buffer
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
             top: offsetPosition,
             behavior: 'smooth'
        });
      } else if (href === '/') {
         window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top for home link
      }
    }, 100); // Reduced Delay slightly
  };


  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out", // Faster transition
      // Apply heavier glassmorphism and shadow when scrolled
      isScrolled
        ? "glassmorphism-heavy shadow-lg border-b border-border/15" // Increased blur and subtle border
        : "bg-gradient-to-b from-background/80 via-background/30 to-transparent border-b border-transparent" // Start more transparent
    )}>
      {/* Slightly reduced height */}
      <div className="container flex h-[72px] items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">

        {/* Enhanced Logo/Name Styling */}
        <Link href="/" className="flex items-center space-x-3 group" onClick={(e) => { e.preventDefault(); handleMobileLinkClick('/'); }}>
          <span className={cn(
              "text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-text-slow", // Use the defined gradient animation
              "group-hover:brightness-110 transition-all duration-300" // Subtle brightness on hover
            )}
          >
            Sai Jeshwanth Goud Illuri
          </span>
        </Link>

        {/* Desktop Navigation - Refined Hover Effect */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5"> {/* Slightly adjusted gap */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleMobileLinkClick(item.href); }}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ease-out relative group", // Adjusted padding
                "text-muted-foreground hover:text-foreground", // More direct hover color
                "overflow-hidden"
              )}
            >
               <span className="relative z-10">{item.label}</span>
               {/* Subtle underline reveal */}
               <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-primary origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          ))}
          <Link href="#contact" passHref>
             {/* Enhanced "Get In Touch" Button */}
             <Button
               variant="outline"
               size="sm"
               onClick={(e) => { e.preventDefault(); handleMobileLinkClick('#contact'); }}
               className="ml-4 px-4 py-2 h-9 shadow-sm hover:shadow-md transition-all hover:scale-105 transform duration-200 border-primary/40 hover:border-primary/70 text-primary hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground bg-gradient-to-r from-background/60 via-card/30 to-background/60 hover:from-accent/15 hover:via-accent/5 hover:to-accent/15 dark:from-secondary/50 dark:via-card/20 dark:to-secondary/50 dark:hover:from-accent/20 dark:hover:via-accent/10 dark:hover:to-accent/20" // Refined gradient and hover
             >
                 Get In Touch With Me <Send className="ml-1.5 h-3.5 w-3.5" /> {/* Updated Button Text */}
             </Button>
          </Link>
        </nav>

        {/* Mobile Navigation - Sheet */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground h-10 w-10 rounded-full" // Simplified styles
              >
                <Menu className="h-6 w-6" />
                <VisuallyHidden>Toggle Menu</VisuallyHidden>
              </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-[80vw] max-w-[340px] bg-background/85 border-l border-border/25 backdrop-blur-xl p-0 flex flex-col glassmorphism-heavy" // Apply heavy glassmorphism, slightly less width
                title="Main Navigation" // Accessible title for screen readers
            >
               {/* Sheet Header */}
               <SheetHeader className="border-b border-border/20 p-4">
                 <div className="flex items-center justify-between">
                   <Link href="/" className="flex items-center space-x-2 group" onClick={(e) => { e.preventDefault(); handleMobileLinkClick('/'); }}>
                     <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary group-hover:brightness-110 transition-all">
                        Sai Jeshwanth Goud Illuri
                     </span>
                   </Link>
                   <Button variant="ghost" className="h-8 w-8 p-0" size="icon" onClick={closeSheet}>
                     <X className="h-5 w-5 text-muted-foreground" />
                     <VisuallyHidden>Close Menu</VisuallyHidden>
                   </Button>
                 </div>
               </SheetHeader>

              {/* Mobile Navigation Links - Adjusted size and padding */}
              <nav className="flex-1 flex flex-col justify-center p-4 space-y-1.5">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleMobileLinkClick(item.href); }}
                    className="block w-full px-3 py-2.5 text-base font-medium text-foreground hover:bg-accent/10 dark:hover:bg-accent/15 hover:text-accent dark:hover:text-primary rounded-md transition-all duration-200 text-center" // Adjusted text size and padding
                  >
                    {item.label}
                  </Link>
                ))}
                 {/* Contact Link in Mobile Menu */}
                 <Link
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleMobileLinkClick('#contact'); }}
                     className="block w-full px-3 py-2.5 text-base font-medium text-foreground hover:bg-accent/10 dark:hover:bg-accent/15 hover:text-accent dark:hover:text-primary rounded-md transition-all duration-200 text-center mt-3 border-t border-border/15 pt-5" // Separator adjusted
                  >
                    Contact Me <Send className="inline-block ml-1 h-3.5 w-3.5 align-middle" />
                  </Link>
              </nav>

              {/* Subtle Footer in Sheet */}
              <div className="p-3 border-t border-border/15 mt-auto text-center text-xs text-muted-foreground">
                 Navigate Sections
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    
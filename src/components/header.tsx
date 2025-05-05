// src/components/header.tsx
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
  const [open, setOpen] = useState(false); // State for mobile menu sheet
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5); // Trigger effect almost immediately
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
      // FIX: Check if href is '/' before attempting querySelector
      if (href === '/') {
         window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top for home link
         return; // Exit early
      }

      // Proceed with querySelector only if href is not '/'
      const element = document.querySelector(href);
      if (element) {
        // Adjust scroll position to account for sticky header height
        const headerOffset = 75; // Adjusted height of the sticky header + buffer
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
             top: offsetPosition,
             behavior: 'smooth'
        });
      }
    }, 100); // Keep slight delay
  };


  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
      // Apply heavier glassmorphism and shadow when scrolled - Enhanced effect
      isScrolled
        ? "glassmorphism-heavy shadow-xl border-b border-border/10" // Deeper shadow, more subtle border
        : "bg-gradient-to-b from-background/50 via-background/10 to-transparent border-b border-transparent" // Start more transparent
    )}>
      {/* Slightly increased height */}
      <div className="container flex h-[75px] items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">

        {/* Enhanced Logo/Name Styling - Larger, Gradient Text */}
        <Link href="/" className="flex items-center space-x-3 group" onClick={(e) => { e.preventDefault(); handleMobileLinkClick('/'); }}>
          <span className={cn(
<<<<<<< HEAD
              // Apply gradient text - Emphasizing Blue to Teal, removed glow
              "text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/70 to-accent", // Adjusted gradient stops, removed animate-glow
              "group-hover:brightness-150 transition-all duration-300" // Brighter hover effect
=======
              "text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 animate-gradient-text-slow", // Use primary color gradient
              "group-hover:brightness-125 transition-all duration-300" // Brighter glow on hover
>>>>>>> f53313c (Make the following changes:)
            )}
          >
            Sai Jeshwanth Goud Illuri
          </span>
        </Link>

        {/* Desktop Navigation - Refined Hover Effect & Spacing */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2"> {/* Slightly increased gap */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleMobileLinkClick(item.href); }}
              className="block px-3 py-2 text-white text-base font-medium rounded-md hover:bg-accent/10 transition"
            >
               <span className="relative z-10">{item.label}</span>
               {/* Underline reveal from center */}
               <span className="absolute bottom-0 left-1/2 right-1/2 h-[2px] bg-primary transition-all duration-300 ease-out group-hover:left-0 group-hover:right-0"></span>
            </Link>
          ))}
          <Link href="#contact" passHref>
<<<<<<< HEAD
<<<<<<< HEAD
             {/* Enhanced "Get In Touch" Button - Outline Style */}
             <Button
                variant="outline"
                size="sm"
                onClick={(e) => { e.preventDefault(); handleMobileLinkClick('#contact'); }}
                className="ml-5 px-5 py-2 h-9 shadow-sm hover:shadow-md transition-all hover:scale-[1.04] transform duration-300 border-primary/50 hover:border-primary hover:bg-primary/15 hover:text-primary" // Changed hover effect to primary
=======
             {/* Enhanced "Get In Touch" Button - Primary Glow & Gradient */}
             <Button
               variant="default"
               size="sm"
               onClick={(e) => { e.preventDefault(); handleMobileLinkClick('#contact'); }}
               className="ml-5 px-5 py-2 h-9 shadow-md hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-[1.04] transform duration-300 button-glow bg-gradient-to-r from-primary via-primary/90 to-accent/80 hover:from-primary/90 hover:to-accent" // Added gradient and enhanced hover glow
>>>>>>> 12d0f7e (Make the following changes:)
=======
             {/* Enhanced "Get In Touch" Button - Outline Style */}
             <Button
                variant="outline"
                size="sm"
                onClick={(e) => { e.preventDefault(); handleMobileLinkClick('#contact'); }}
<<<<<<< HEAD
                className="ml-5 px-5 py-2 h-9 shadow-sm hover:shadow-md transition-all hover:scale-[1.04] transform duration-300 border-primary/50 hover:border-accent hover:bg-accent/15 hover:text-accent" // Changed to outline, subtle border and hover effect
>>>>>>> 697708f (Make the following changes:)
=======
                className="ml-5 px-5 py-2 h-9 shadow-sm hover:shadow-md transition-all hover:scale-[1.04] transform duration-300 border-primary/50 hover:border-primary hover:bg-primary/15 hover:text-primary" // Changed hover effect to primary
>>>>>>> f53313c (Make the following changes:)
             >
                 Get In Touch With Me <Send className="ml-2 h-4 w-4" /> {/* Adjusted icon size slightly */}
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
                className="w-[85vw] max-w-[360px] bg-background/90 border-l border-border/20 backdrop-blur-2xl p-0 flex flex-col glassmorphism-heavy" // Apply heavy glassmorphism, slightly wider
                title="Main Navigation" // Accessible title for screen readers
            >
               {/* Sheet Header - More prominent */}
               <SheetHeader className="border-b border-border/25 p-5 bg-gradient-to-b from-card/50 to-transparent">
                 <div className="flex items-center justify-between">
                   <Link href="/" className="flex items-center space-x-2.5 group" onClick={(e) => { e.preventDefault(); handleMobileLinkClick('/'); }}>
                     <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 group-hover:brightness-110 transition-all">
                        Sai J. G. Illuri {/* Shorter name for mobile */}
                     </span>
                   </Link>
                   <Button variant="ghost" className="h-9 w-9 p-0 rounded-full" size="icon" onClick={closeSheet}>
                     <X className="h-5 w-5 text-muted-foreground" />
                     <VisuallyHidden>Close Menu</VisuallyHidden>
                   </Button>
                 </div>
               </SheetHeader>

              {/* Mobile Navigation Links - Centered, Larger Text */}
              <nav className="flex-1 flex flex-col justify-center p-6 space-y-2.5">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleMobileLinkClick(item.href); }}
                    className="block w-full px-4 py-3 text-lg font-medium text-foreground hover:bg-primary/10 dark:hover:bg-primary/15 hover:text-primary dark:hover:text-primary rounded-lg transition-all duration-200 text-center" // Larger text, padding, use primary on hover
                  >
                    {item.label}
                  </Link>
                ))}
                 {/* Contact Link in Mobile Menu - Styled as button */}
                 <Link
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleMobileLinkClick('#contact'); }}
                     className="block w-full px-4 py-3 text-lg font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-200 text-center mt-6 border-t border-border/20 pt-6" // Separator adjusted, button-like style
                  >
                    Contact Me <Send className="inline-block ml-1.5 h-4 w-4 align-middle" />
                  </Link>
              </nav>

              {/* Subtle Footer in Sheet */}
              <div className="p-4 border-t border-border/15 mt-auto text-center text-xs text-muted-foreground/80">
                 Navigate Sections
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

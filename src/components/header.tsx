'use client'; // Add use client directive for interactive components like Sheet

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"; // Import DialogTitle and DialogDescription
import { Menu, Terminal, X } from 'lucide-react'; // Added Terminal icon
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden"; // Import VisuallyHidden
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/menubar"; // Import Menubar components

const desktopNavItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const mobileNavItems = [
  { label: 'Summary', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];


export function Header() {
  const [open, setOpen] = useState(false);

  const closeSheet = () => setOpen(false); // Helper function to close sheet

  return (
    // Apply glassmorphism, increased blur, subtle background, increased height
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50 glassmorphism">
      {/* Increased height to h-20 */}
      <div className="container flex h-20 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        <Link href="/" className="mr-4 flex items-center space-x-2 group">
          <Terminal className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
          {/* Updated Name with Gradient and glow, Increased font size */}
          <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:brightness-125 transition-all duration-300 animate-glow">
            Sai Jeshwanth Goud Illuri
          </span>
        </Link>
        {/* Desktop Navigation - Replaced with Menubar */}
        <Menubar className="hidden md:flex">
          <MenubarMenu>
            <MenubarTrigger>Sections</MenubarTrigger>
            <MenubarContent>
              {desktopNavItems.map((item) => (
                <MenubarItem key={item.label} asChild>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        {/* Mobile Navigation Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors duration-200 h-10 w-10">
                <Menu className="h-6 w-6" />
                <VisuallyHidden>Toggle Menu</VisuallyHidden> {/* Accessibility */}
              </Button>
            </SheetTrigger>
             <SheetContent
                forceMount // Ensure content is always mounted for animations
                side="right"
                className="w-[80vw] max-w-[350px] bg-card/90 dark:bg-background/95 border-l border-border/20 dark:border-border/30 backdrop-blur-lg"
                aria-labelledby="mobile-nav-title" // Use a specific ID for title
                aria-describedby="mobile-nav-description" // Use a specific ID for description
             >
               <SheetHeader className="border-b border-border/20 pb-4">
                 {/* Visually hidden title for accessibility */}
                 <VisuallyHidden>
                   <DialogTitle id="mobile-nav-title">
                      Mobile Navigation Menu
                   </DialogTitle>
                 </VisuallyHidden>
                 {/* Add a visually hidden description for screen readers */}
                  <DialogDescription id="mobile-nav-description" className="sr-only"> {/* Ensure id matches aria-describedby */}
                    Mobile navigation menu containing links to different sections of the portfolio.
                  </DialogDescription>
                 <div className="flex items-center justify-between px-4">
                    {/* The main clickable header link */}
                    <Link href="/" className="flex items-center space-x-2.5 px-2 py-3 group" onClick={closeSheet}>
                        <Terminal className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                        <span className="text-2xl font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:brightness-125 transition-all duration-300 animate-glow">
                        Sai Jeshwanth Goud Illuri
                        </span>
                    </Link>
                   <Button variant="ghost" className="h-8 w-8 p-0" size="icon" onClick={closeSheet}>
                      <X className="h-5 w-5" />
                      <VisuallyHidden>Close Menu</VisuallyHidden> {/* Accessibility */}
                   </Button>
                 </div>
               </SheetHeader>
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col justify-center items-center mt-6">
                {mobileNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeSheet} // Close sheet on link click
                    className="block w-full px-4 py-3 text-xl font-medium text-foreground hover:bg-accent/10 dark:hover:bg-accent/20 hover:text-accent dark:hover:text-accent transition-all duration-200 border-b border-border/20 dark:border-border/30 last:border-b-0" // Added borders, removed index check
                  >
                    <div className="w-full text-center">
                      {item.label}
                    </div>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

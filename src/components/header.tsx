'use client'; // Add use client directive for interactive components like Sheet

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { label: 'Summary', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 glassmorphism">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          {/* Removed User Icon */}
          {/* Updated Name with Gradient */}
          <span className="text-lg font-bold sm:inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300"> {/* Updated gradient to use primary and secondary */}
            Sai Jeshwanth Goud Illuri
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4 decoration-primary/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-[300px] sm:w-[350px] bg-card/95 dark:bg-card/95 border-l border-border/30 dark:border-border/40 glassmorphism"
                aria-describedby="mobile-nav-description"
            >
              <SheetHeader> {/* Keep header for accessibility */}
                 <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                 <SheetDescription id="mobile-nav-description" className="sr-only">Links to different sections of the portfolio.</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-12">
                 <Link href="/" className="mb-6 flex items-center space-x-2.5 px-2 group">
                   {/* Removed User Icon from mobile menu */}
                   <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300"> {/* Updated gradient */}
                     Sai Jeshwanth Goud Illuri
                   </span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    // Use accent for hover background and foreground for text
                    className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent/15 hover:text-accent-foreground rounded-md transition-colors duration-200"
                  >
                    {item.label}
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

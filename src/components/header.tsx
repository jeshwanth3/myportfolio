'use client'; // Add use client directive for interactive components like Sheet

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Terminal } from 'lucide-react'; // Added Terminal icon for a futuristic touch

const navItems = [
  { label: 'Summary', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    // Apply glassmorphism, increased blur, subtle background, slightly taller
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50 glassmorphism">
      {/* Increased height to h-20 */}
      <div className="container flex h-20 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          {/* Terminal Icon */}
          <Terminal className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
          {/* Updated Name with Gradient and glow */}
          <span className="text-lg font-semibold sm:inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:brightness-125 transition-all duration-300 animate-glow">
            Sai Jeshwanth Goud Illuri
          </span>
        </Link>
        <nav className="hidden gap-8 md:flex"> {/* Increased gap */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              // Subtle hover effect, using accent color
              className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-accent hover:scale-105 relative group"
            >
              {item.label}
              {/* Underline animation */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              {/* Updated hover state for mobile trigger */}
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors duration-200">
                <Menu className="h-6 w-6" /> {/* Slightly larger icon */}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                // Modernized Sheet styling
                className="w-[300px] sm:w-[350px] bg-card/90 dark:bg-background/95 border-l border-border/20 dark:border-border/30 backdrop-blur-lg"
                aria-describedby="mobile-nav-description"
            >
              {/* Keep header for accessibility, but hide visual title */}
               <SheetHeader className="border-b border-border/20 pb-4">
                 <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                 <SheetDescription id="mobile-nav-description" className="sr-only">Links to different sections of the portfolio.</SheetDescription>
                 {/* Mobile menu title with icon */}
                 <Link href="/" className="flex items-center space-x-2.5 px-2 group">
                   <Terminal className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                   <span className="text-lg font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:brightness-125 transition-all duration-300 animate-glow">
                     Sai Jeshwanth Goud Illuri
                   </span>
                </Link>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                {/* Correctly map and render navItems for the mobile menu */}
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    // Updated mobile link styling
                    className="block px-4 py-3 text-base font-medium text-foreground hover:bg-accent/10 dark:hover:bg-accent/20 hover:text-accent dark:hover:text-accent rounded-lg transition-all duration-200"
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

'use client'; // Add use client directive for interactive components like Sheet

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, User } from 'lucide-react'; // Added User icon

const navItems = [
  { label: 'Summary', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 glassmorphism"> {/* Enhanced glassmorphism */}
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto"> {/* Increased height, max-width, centered */}
        <Link href="/" className="mr-6 flex items-center space-x-2.5 group"> {/* Adjusted spacing */}
           {/* User Icon instead of SVG logo */}
           <div className="p-1.5 rounded-full bg-gradient-to-tr from-primary to-accent group-hover:animate-glow transition-all duration-300 ease-out transform group-hover:scale-110"> {/* Updated gradient */}
            <User className="h-5 w-5 text-primary-foreground" />
           </div>
          {/* Updated Name with Gradient */}
          <span className="text-lg font-bold sm:inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300"> {/* Updated gradient */}
            Sai Jeshwanth Goud Illuri
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4 decoration-primary/50" // Added hover underline
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
            {/* Apply dark mode styles to SheetContent */}
            <SheetContent
                side="right"
                className="w-[300px] sm:w-[350px] bg-card/95 dark:bg-card/95 border-l border-border/30 dark:border-border/40 glassmorphism"
                aria-label="Mobile Navigation Menu" // Add accessible label
            >
              <nav className="flex flex-col gap-4 mt-12"> {/* Increased top margin */}
                 <Link href="/" className="mb-6 flex items-center space-x-2.5 px-2 group"> {/* Increased bottom margin */}
                    <div className="p-1.5 rounded-full bg-gradient-to-tr from-primary to-accent group-hover:animate-glow transition-all duration-300 ease-out transform group-hover:scale-110"> {/* Updated gradient */}
                        <User className="h-5 w-5 text-primary-foreground" />
                    </div>
                   {/* Updated Name with Gradient for Mobile Menu */}
                   <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300"> {/* Updated gradient */}
                     Sai Jeshwanth Goud Illuri
                   </span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent/10 dark:hover:bg-accent/20 hover:text-accent-foreground dark:hover:text-primary rounded-md transition-colors duration-200" // Adjusted padding, size, hover effect
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

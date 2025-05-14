"use client";

import type React, { MouseEvent as ReactMouseEvent } from 'react';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle
} from '@/components/ui/sheet';
import { VisuallyHidden } from '@/components/ui/visually-hidden';
import { Menu, X, Send, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useActiveSection } from '@/hooks/use-active-section';

const navItems = [
  { label: 'About', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(
    navItems.map((item) => item.href).concat(['#contact']),
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = useCallback(
    (event: ReactMouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
      event.preventDefault();
      
      if (href === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (mobileMenuOpen) setMobileMenuOpen(false);
        return;
      }

      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
      
      if (mobileMenuOpen) {
        setTimeout(() => {
          setMobileMenuOpen(false);
        }, 300); // Delay closing to allow animation to complete
      }
    },
    [mobileMenuOpen]
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 ease-in-out',
        isScrolled
          ? 'glassmorphism-heavy shadow-lg border-b border-border/10'
          : 'bg-gradient-to-b from-background/70 via-background/30 to-transparent border-b border-transparent',
      )}
    >
      <div className="container flex h-[75px] items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-3 group"
          onClick={(e) => handleNavLinkClick(e, '/')}
        >
          <span className={cn(
            'text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text',
            'bg-gradient-to-r from-teal-400 via-blue-500 to-blue-600',
            'group-hover:brightness-110 transition-all duration-300',
            'animate-gradient-text-slow',
          )}>
            Sai Jeshwanth Goud Illuri
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className={cn(
                  'group relative px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ease-out',
                  isActive
                    ? 'text-primary bg-primary/15'
                    : 'text-foreground/85 hover:text-primary hover:bg-primary/10',
                  'active:scale-95',
                )}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={cn(
                    'absolute bottom-0 left-1/2 right-1/2 h-[2px] bg-primary transition-all duration-300 ease-out',
                    isActive || 'group-hover:left-0 group-hover:right-0',
                  )}
                />
              </Link>
            );
          })}

          <Link href="#contact" passHref>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => handleNavLinkClick(e, '#contact')}
              className={cn(
                'ml-5 px-5 py-2 h-9 shadow-sm hover:shadow-md transition-all hover:scale-[1.04] transform duration-300',
                'border-primary/50 hover:border-primary',
                'hover:bg-primary/15',
                'text-primary hover:text-primary',
                activeSection === '#contact'
                  ? 'bg-primary/15 text-primary ring-2 ring-primary/50 ring-offset-2 ring-offset-background'
                  : 'bg-background/60 dark:bg-secondary/60',
                'active:scale-95',
              )}
            >
              Get In Touch With Me <Send className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="fixed right-4 top-4 z-50 h-11 w-11 rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 transition-transform duration-300 rotate-90 group-hover:rotate-180" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                )}
                <VisuallyHidden>Toggle Navigation Menu</VisuallyHidden>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={cn(
                'w-full sm:w-[350px] p-0 flex flex-col',
                'glassmorphism-heavy',
              )}
            >
              <div className="border-b border-border/25 p-5 bg-gradient-to-b from-card/50 to-transparent">
                <SheetTitle asChild>
                  <VisuallyHidden>Navigation Menu</VisuallyHidden>
                </SheetTitle>
                <Link
                  href="/"
                  className="flex items-center space-x-2.5 group"
                  onClick={(e) => handleNavLinkClick(e, '/')}
                >
                  <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 group-hover:brightness-110 transition-all">
                    Sai J. G. Illuri
                  </span>
                </Link>
              </div>

              <nav className="flex-1 flex flex-col p-6 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href;
                  return (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavLinkClick(e, item.href)}
                        className={cn(
                          'flex items-center justify-between p-4 text-base font-medium transition-all duration-300 rounded-md group',
                          isActive
                            ? 'bg-primary/15 text-primary font-semibold'
                            : 'text-foreground/90 hover:bg-primary/10 hover:text-primary',
                          'active:scale-95',
                        )}
                        style={{ '--animation-delay': `${150 + index * 50}ms` } as React.CSSProperties}
                      >
                        {item.label}
                        <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </SheetClose>
                  );
                })}

                <div className="border-b border-border/20 pt-2" />

                <SheetClose asChild>
                  <Link
                    href="#contact"
                    onClick={(e) => handleNavLinkClick(e, "#contact")}
                    className={cn(
                      'flex items-center justify-center w-full mt-4 py-4 text-base font-medium rounded-md transition-all duration-300 group',
                      activeSection === '#contact'
                        ? 'bg-primary text-primary-foreground ring-2 ring-primary/50 ring-offset-2 ring-offset-background'
                        : 'border border-primary text-primary hover:bg-primary/15',
                      'active:scale-95',
                    )}
                  >
                    Get In Touch{' '}
                    <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </SheetClose>
              </nav>

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
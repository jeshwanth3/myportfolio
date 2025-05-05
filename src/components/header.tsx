// src/components/header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { VisuallyHidden } from '@/components/ui/visually-hidden';
import { cn } from '@/lib/utils';

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
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMobileLinkClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur transition-shadow',
        isScrolled ? 'shadow-sm' : ''
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold">
          Sai Jeshwanth Goud Illuri
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:underline"
              scroll={false}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              title="Main Navigation"
              className="w-64 bg-background/90 backdrop-blur-lg border-l border-border/20 p-4"
            >
              {/* REQUIRED for accessibility */}
              <SheetTitle>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </SheetTitle>

              <SheetHeader className="mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </SheetHeader>

              <div className="space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleMobileLinkClick(item.href)}
                    className="w-full text-left text-base font-medium hover:text-accent transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
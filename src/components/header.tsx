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
  SheetClose, // ← import SheetClose
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
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    // no need to setOpen(false) manually if we wrap in <SheetClose>
  };

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur transition-shadow',
        isScrolled ? 'shadow-sm' : ''
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Sai Jeshwanth Goud Illuri
        </Link>

        {/* Desktop Nav */}
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
              className="
                w-64
                bg-background/90
                backdrop-blur-lg
                border-l border-border/20
                p-4
                flex flex-col
                overflow-y-auto
                z-50
              "
            >
              {/* REQUIRED for a11y */}
              <SheetTitle>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </SheetTitle>

              <SheetHeader className="mb-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-foreground">Menu</span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="h-5 w-5 text-foreground" />
                  </Button>
                </SheetClose>
              </SheetHeader>

              <nav className="flex-1 flex flex-col space-y-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileLinkClick(item.href);
                      }}
                      className="
                        block
                        px-3 py-2
                        text-foreground
                        text-base font-medium
                        rounded-md
                        hover:bg-accent/10
                        transition
                      "
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

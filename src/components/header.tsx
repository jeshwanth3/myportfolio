
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeSheet = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="flex justify-between items-center h-16 px-4">
        <span className="text-xl font-bold text-black">Simple Header</span>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className="text-black bg-gray-200">
              <Menu />
              <VisuallyHidden>Open Menu</VisuallyHidden>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white text-black p-6">
            <VisuallyHidden>
              <SheetTitle>Menu</SheetTitle>
            </VisuallyHidden>
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="p-2 bg-gray-100 border">About</a>
              <a href="#projects" className="p-2 bg-gray-100 border">Projects</a>
              <a href="#contact" className="p-2 bg-gray-100 border">Contact</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
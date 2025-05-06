"use client";


import type React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, Send } from "lucide-react";
import { VisuallyHidden } from "@/components/ui/visually-hidden"; // Ensure VisuallyHidden is imported
import { cn } from "@/lib/utils";
 

const navItems = [
  { label: "About", href: "#summary" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

interface HeaderProps {
  setOpen: (open: boolean) => void;
}

export function Header({ setOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Trigger effect slightly later
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Combined click handler for both desktop and mobile
  const handleNavLinkClick = (
    href: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault(); // Prevent default anchor behavior
    setOpen(false);
     // Use requestAnimationFrame for smoother scrolling after potential state updates
    requestAnimationFrame(() => {

      if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;

      }

      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  };

  return ( // Add setOpen to the header
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out", // Standard transition
        // Apply heavier glassmorphism and shadow when scrolled - Enhanced effect
        isScrolled
          ? "glassmorphism-heavy shadow-xl border-b border-border/15" // Use heavy glassmorphism
          : "bg-gradient-to-b from-background/60 via-background/20 to-transparent border-b border-transparent" // Start more transparent}
      )}
    >
      {/* Increased height */}
      <div className="container flex h-[75px] items-center justify-between px-4 md:px-6 max-w-7xl mx-auto"> 
        {/* Enhanced Logo/Name Styling - Larger, Gradient Text */}
        <Link
          href="/"
          className="flex items-center space-x-3 group"
          onClick={(e) => handleNavLinkClick("/", e) }
        >


          <span className={cn(
              // Apply gradient text 
              "text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700",
              "group-hover:brightness-125 transition-all duration-300" // Brighter hover effect
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
              href={item.href} // Corrected
              onClick={(e) => handleNavLinkClick(item.href, e) }
              // Updated desktop nav link style
              className="group relative px-3 py-2 text-base font-medium text-foreground/85 rounded-md transition-all duration-300 ease-out hover:text-primary hover:bg-primary/10"
            >
              <span className="relative z-10">{item.label}</span>
              {/* Underline reveal from center */}
              <span className="absolute bottom-0 left-1/2 right-1/2 h-[2px] bg-primary transition-all duration-300 ease-out group-hover:left-0 group-hover:right-0"></span>
            </Link>
          ))}

          <Link href="#contact" passHref>
            {/* Enhanced "Get In Touch" Button - Outline Style */}
            <Button
              variant="outline"
              size="sm"
              onClick={(e) =>
                handleNavLinkClick(
                  "#contact", e,
                )
              } // Cast event type for consistency
              className="ml-5 px-5 py-2 h-9 shadow-sm hover:shadow-md transition-all hover:scale-[1.04] transform duration-300 border-primary/50 hover:border-primary hover:bg-primary/15 hover:text-primary" // Changed hover effect to primary
            >
              Get In Touch With Me <Send className="ml-2 h-4 w-4" />{" "}
              {/* Adjusted icon size slightly */}
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation - Sheet */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Sheet component manages the mobile menu */}
          <Dialog.Root open={open} onOpenChange={setOpen} >
            <Dialog.Trigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground h-10 w-10 rounded-full" // Simplified styles
              >
                <Menu className="h-6 w-6" />
                <VisuallyHidden>Toggle Menu</VisuallyHidden>
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <Dialog.Content
                className={cn(
                  "fixed z-50 gap-4 bg-background/95 p-6 shadow-xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-400 data-[state=open]:duration-500 backdrop-blur-xl",
                  "inset-y-0 right-0 h-full w-3/4 border-l border-border/20 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm rounded-l-lg",
                  "w-[85vw] max-w-[360px] bg-background/90 border-l border-border/20 backdrop-blur-2xl p-0 flex flex-col glassmorphism-heavy",
                )}
              >
                <VisuallyHidden>
                  <Dialog.Title>Mobile Menu</Dialog.Title>
                </VisuallyHidden>
                <Dialog.Description className="sr-only">
                  Mobile Menu Navigation
                </Dialog.Description>
                {/* DialogHeader - More prominent */}
                <div className="border-b border-border/25 p-5 bg-gradient-to-b from-card/50 to-transparent flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center space-x-2.5 group"
                    onClick={(e) => handleNavLinkClick("/", e)}
                  >
                    <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 group-hover:brightness-125 transition-all">
                      Sai J. G. Illuri{/* Shorter name for mobile */}
                    </span>
                  </Link>
                  <Dialog.Close asChild>
                    <Button
                      variant="ghost"
                      className="h-9 w-9 p-0 rounded-full"
                      size="icon"
                      onClick={() => setOpen(false)}
                    >
                      <X className="h-5 w-5 text-muted-foreground" />
                      <VisuallyHidden>Close Menu</VisuallyHidden>
                    </Button>
                  </Dialog.Close>
                </div>
                {/* Mobile Navigation Links - Centered, Larger Text */}
                <nav className="flex-1 flex flex-col p-6 space-y-4">
                  {/* Map through navItems to create links */}
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href} // Corrected
                      onClick={(e) => handleNavLinkClick(item.href, e) } // Add setOpen
                      className={cn(
                        "block w-full p-6 text-lg font-medium text-foreground hover:bg-primary/10 transition-colors duration-300",
                        "border-b border-border/25", // Separator adjusted, button-like style
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-b border-border/25"></div>
                  {/* Contact Link in Mobile Menu - Styled as button */}
                  <Link
                    href="#contact"
                    onClick={(e) => handleNavLinkClick("#contact", e) } // Use combined click handler
                    className="block w-full px-4 py-3 text-lg font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-200 text-center mt-6 border-t border-border/20 pt-6" // Separator adjusted, button-like style
                  >
                    Contact Me{" "}
                    <Send className="inline-block ml-1.5 h-4 w-4 align-middle" />
                  </Link>
                </nav>
                {/* Subtle Footer in Dialog */}
                <div className="p-4 border-t border-border/15 mt-auto text-center text-xs text-muted-foreground/80">
                  Navigate Sections
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
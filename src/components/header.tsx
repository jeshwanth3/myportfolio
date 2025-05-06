"use client";
import type React, { MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as Dialog from "@radix-ui/react-dialog"; // Use Dialog for mobile sheet
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Menu, X, Send } from "lucide-react";
import { cn } from "@/lib/utils"; // Import cn utility

const navItems = [
  { label: "About", href: "#summary"},
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
]

interface HeaderProps {
  setOpen: (open: boolean) => void;
}

export function Header({ setOpen }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false); // State for mobile menu
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Trigger effect slightly later
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (event: ReactMouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    event.preventDefault(); // Prevent default jump
    setMobileMenuOpen(false); // Close mobile menu on link click

    // Use requestAnimationFrame for smoother scrolling after state updates
    requestAnimationFrame(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80; // Updated offset to match header height (h-[75px] approx 4.7rem -> ~75px) + buffer
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else if (href === "/") { // Handle scroll to top for home link
         window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out", // Consistent transition
        // Apply heavier glassmorphism and shadow when scrolled - Enhanced effect
        isScrolled
          ? "glassmorphism-heavy shadow-lg border-b border-border/10" // Slightly reduced border opacity
          : "bg-gradient-to-b from-background/70 via-background/30 to-transparent border-b border-transparent" // Start slightly more opaque
      )}
    >
      {/* Increased height */}
      <div className="container flex h-[75px] items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        {/* Enhanced Logo/Name Styling - Larger, Gradient Text */}
        <Link
          href="/"
          className="flex items-center space-x-3 group"
          onClick={(e) => handleNavLinkClick(e, "/")} // Scroll to top on logo click
        >
          <span
            className={cn(
              "text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700", // Teal-Blue Gradient
              "group-hover:brightness-110 transition-all duration-300" // Subtler hover effect
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
              href={item.href} // Ensure href is used
              onClick={(e) => handleNavLinkClick(e, item.href)}
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
              onClick={(e) => handleNavLinkClick(e, "#contact")}
              className="ml-4 px-4 py-2 h-9 shadow-sm hover:shadow-md transition-all hover:scale-[1.03] transform duration-300 border-primary/50 hover:border-primary hover:bg-primary/15 hover:text-primary" // Subtle hover effect
            >
              Get In Touch With Me <Send className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation - Sheet */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Use Dialog component for the mobile menu */}
          <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
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
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" /> {/* Increased blur */}
              <Dialog.Content
                className={cn(
                   // Common styles for the dialog content
                   "fixed z-50 gap-4 bg-background/90 p-6 shadow-xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-400 backdrop-blur-lg", // Adjusted duration
                   // Specific styles for the right-side sheet
                   "inset-y-0 right-0 h-full w-3/4 border-l border-border/20 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
                   // Further refinement for glassmorphism and layout
                   "w-[85vw] max-w-[360px] p-0 flex flex-col", // Removed explicit glassmorphism class
                   "glassmorphism-heavy" // Applied heavy glassmorphism effect
                )}
              >
                 <Dialog.Title asChild>
                   <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
                 </Dialog.Title>
                <VisuallyHidden>
                 <Dialog.Description>
                    Navigate through the portfolio sections.
                 </Dialog.Description>
                </VisuallyHidden>

                {/* DialogHeader - More prominent */}
                <div className="border-b border-border/25 p-5 bg-gradient-to-b from-card/50 to-transparent flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center space-x-2.5 group"
                    onClick={(e) => handleNavLinkClick(e, "/")}
                  >
                    <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 group-hover:brightness-110 transition-all">
                      Sai J. G. Illuri {/* Shorter name for mobile */}
                    </span>
                  </Link>
                  <Dialog.Close asChild>
                    <Button variant="ghost" className="h-9 w-9 p-0 rounded-full">
                      <X className="h-5 w-5 text-muted-foreground" />
                      <VisuallyHidden>Close Menu</VisuallyHidden>
                    </Button>
                  </Dialog.Close>
                </div>

                <nav className="flex-1 flex flex-col p-6 space-y-1.5"> {/* Reduced space slightly */}
                  {/* Map through navItems to create links */}
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost" // Use ghost for subtle interaction
                      className="justify-start p-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200" // Slightly smaller text
                      onClick={(e) => handleNavLinkClick(e, item.href)} // Ensure correct handler is used
                    >
                      {item.label}
                    </Button>
                  ))}
                   <div className="border-b border-border/20 pt-2"></div> {/* Subtle Separator */}
                  {/* Contact Link in Mobile Menu - Styled as button */}
                   <Button
                     variant="default" // Use default variant for emphasis
                     className="w-full mt-6 py-3 text-base font-medium" // Adjusted text size
                     onClick={(e) => handleNavLinkClick(e, "#contact")} // Ensure correct handler is used
                   >
                     Contact Me{" "}
                     <Send className="inline-block ml-1.5 h-4 w-4 align-middle" />
                   </Button>
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


'use client';
import type React, { MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"; // Updated import to use SheetClose
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Menu, X, Send } from "lucide-react";
import { cn } from "@/lib/utils"; // Import cn utility
import { useActiveSection } from "@/hooks/use-active-section"; // Import the new hook

const navItems = [
  { label: "About", href: "#summary"},
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
]

// Removed unused HeaderProps interface as setOpen is managed internally by Sheet

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false); // State for mobile menu
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(['#summary', '#experience', '#projects', '#skills', '#education', '#contact']); // Use the hook


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Trigger effect slightly later
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const handleNavLinkClick = (event: ReactMouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    // Special handling for scrolling to the top
    if (href === "/") {
       event.preventDefault(); // Prevent default jump only for hash links
       window.scrollTo({ top: 0, behavior: "smooth" });
       setMobileMenuOpen(false); // Close mobile menu on link click
       return; // Exit early
    }

    if (href.startsWith('#')) {
        event.preventDefault(); // Prevent default jump only for hash links
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
        }
        });
    } else {
       // For non-hash links (if any added later), allow default behavior
       setMobileMenuOpen(false); // Close mobile menu on link click
    }
  };


  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out", // Faster transition
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
              "text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text", // Base styles
              "bg-gradient-to-r from-teal-400 via-blue-500 to-blue-600", // Teal-Blue Gradient
              "group-hover:brightness-110 transition-all duration-300", // Subtler hover effect
              "animate-gradient-text-slow" // Apply subtle gradient animation
            )}
          >
            Sai Jeshwanth Goud Illuri
          </span>
        </Link>

        {/* Desktop Navigation - Refined Hover Effect & Spacing */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2"> {/* Slightly increased gap */}
          {navItems.map((item) => {
             const isActive = activeSection === item.href;
             return (
                <Link
                   key={item.label}
                   href={item.href}
                   onClick={(e) => handleNavLinkClick(e, item.href)}
                   // Updated desktop nav link style with active state
                   className={cn(
                     "group relative px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ease-out",
                     isActive
                       ? "text-primary bg-primary/15" // Active state styles
                       : "text-foreground/85 hover:text-primary hover:bg-primary/10", // Default and hover styles
                     "active:scale-95" // Add subtle scale down on click
                   )}
                >
                   <span className="relative z-10">{item.label}</span>
                   {/* Underline reveal from center - show when active or hovered */}
                   <span className={cn(
                      "absolute bottom-0 left-1/2 right-1/2 h-[2px] bg-primary transition-all duration-300 ease-out",
                      (isActive || "group-hover:left-0 group-hover:right-0") // Apply underline on hover OR if active
                   )}></span>
                </Link>
             );
          })}

          <Link href="#contact" passHref>
            {/* Enhanced "Get In Touch" Button - Outline Style */}
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => handleNavLinkClick(e, "#contact")}
              className={cn(
                  "ml-5 px-5 py-2 h-9 shadow-sm hover:shadow-md transition-all hover:scale-[1.04] transform duration-300", // Base styles
                  "border-primary/50 hover:border-primary", // Border styles
                  "hover:bg-primary/15", // Background hover
                  "text-primary hover:text-primary", // Text color
                   activeSection === '#contact' ? 'bg-primary/15 text-primary ring-2 ring-primary/50 ring-offset-2 ring-offset-background' : 'bg-background/60 dark:bg-secondary/60', // Highlight contact button if active, else themed background
                   "active:scale-95" // Add subtle scale down on click
                   )}
            >
              Get In Touch With Me <Send className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation - Sheet using Radix UI Primitives */}
         <div className="flex items-center gap-2 md:hidden">
           <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
             <SheetTrigger asChild>
               <Button
                 variant="ghost"
                 size="icon"
                 className="text-muted-foreground h-10 w-10 rounded-full" // Simplified styles
               >
                 <Menu className="h-6 w-6" />
                 <VisuallyHidden>Toggle Menu</VisuallyHidden>
               </Button>
             </SheetTrigger>
             <SheetContent
               side="right" // Specify side for clarity
               className={cn(
                   // Common styles from ui/sheet.tsx, plus heavy glassmorphism
                   "w-[85vw] max-w-[360px] p-0 flex flex-col", // Width and layout
                   "glassmorphism-heavy" // Applied heavy glassmorphism effect
                 )}
             >
               {/* Sheet Header - More prominent */}
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
                  <SheetClose asChild>
                    <Button variant="ghost" className="h-9 w-9 p-0 rounded-full">
                      <X className="h-5 w-5 text-muted-foreground" />
                      <VisuallyHidden>Close Menu</VisuallyHidden>
                    </Button>
                  </SheetClose>
               </div>

               <nav className="flex-1 flex flex-col p-6 space-y-1.5"> {/* Reduced space slightly */}
                 {/* Map through navItems to create links */}
                 {navItems.map((item) => {
                   const isActive = activeSection === item.href;
                   return (
                       <Button
                         key={item.label}
                         variant="ghost" // Use ghost for subtle interaction
                         className={cn(
                           "justify-start p-3 text-base font-medium transition-colors duration-200", // Slightly smaller text
                            isActive
                              ? "bg-primary/15 text-primary" // Active styles for mobile
                              : "text-foreground hover:bg-primary/10 hover:text-primary",
                            "active:scale-95" // Add subtle scale down on click
                         )}
                         onClick={(e) => handleNavLinkClick(e, item.href)} // Ensure correct handler is used
                       >
                         {item.label}
                       </Button>
                   );
                 })}
                 <div className="border-b border-border/20 pt-2"></div> {/* Subtle Separator */}
                {/* Contact Link in Mobile Menu - Styled as button */}
                 <Button
                   variant={activeSection === '#contact' ? 'default' : 'outline'} // Conditional variant based on active state
                   className={cn(
                       "w-full mt-6 py-3 text-base font-medium", // Adjusted text size
                        activeSection === '#contact'
                        ? 'bg-primary text-primary-foreground' // Use default active styles
                        : 'border-primary/50 text-primary hover:bg-primary/15', // Outline styles
                        "active:scale-95" // Add subtle scale down on click
                     )}
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
               {/* VisuallyHidden title and description for accessibility */}
               <VisuallyHidden>
                    <h2>Mobile Navigation Menu</h2> {/* Changed from h2 id */}
               </VisuallyHidden>
               <VisuallyHidden>
                    <p>Navigate through the portfolio sections.</p> {/* Changed from p id */}
               </VisuallyHidden>
             </SheetContent>
           </Sheet>
         </div>
       </div>
    </header>
  );
}

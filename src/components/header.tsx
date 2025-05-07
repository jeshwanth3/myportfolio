'use client';
import type React, { MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Menu, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import * as SheetPrimitive from "@radix-ui/react-dialog";


const navItems = [
  { label: "About", href: "#summary"},
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(navItems.map(item => item.href).concat(['#contact']));


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const handleNavLinkClick = useCallback((event: ReactMouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    setMobileMenuOpen(false); // Close menu on any link click

    if (href === "/") {
       event.preventDefault();
       window.scrollTo({ top: 0, behavior: "smooth" });
       return;
    }

    if (href.startsWith('#')) {
        event.preventDefault();
        // Use requestAnimationFrame to ensure DOM is updated before scrolling
        requestAnimationFrame(() => {
          const element = document.querySelector(href);
          if (element) {
              const headerOffset = 80; // Approximate height of the sticky header + some buffer
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

              window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
              });
          }
        });
    }
  }, []);


  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "glassmorphism-heavy shadow-lg border-b border-border/10"
          : "bg-gradient-to-b from-background/70 via-background/30 to-transparent border-b border-transparent"
      )}
    >
      <div className="container flex h-[75px] items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-3 group"
          onClick={(e) => handleNavLinkClick(e, "/")}
        >
          <span
            className={cn(
              "text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text",
              "bg-gradient-to-r from-teal-400 via-blue-500 to-blue-600", // Blue-teal gradient
              "group-hover:brightness-110 transition-all duration-300",
              "animate-gradient-text-slow" // Use a slower, more subtle gradient animation
            )}
          >
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
                     "group relative px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ease-out",
                     isActive
                       ? "text-primary bg-primary/15" // Active state with subtle background
                       : "text-foreground/85 hover:text-primary hover:bg-primary/10", // Hover state
                     "active:scale-95" // Click feedback
                   )}
                >
                   <span className="relative z-10">{item.label}</span>
                   {/* Underline effect for active/hovered item */}
                   <span className={cn(
                      "absolute bottom-0 left-1/2 right-1/2 h-[2px] bg-primary transition-all duration-300 ease-out",
                      (isActive || "group-hover:left-0 group-hover:right-0")
                   )}></span>
                </Link>
             );
          })}

          <Link href="#contact" passHref>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => handleNavLinkClick(e, "#contact")}
              className={cn(
                  "ml-5 px-5 py-2 h-9 shadow-sm hover:shadow-md transition-all hover:scale-[1.04] transform duration-300",
                  "border-primary/50 hover:border-primary", // Themed border
                  "hover:bg-primary/15", // Hover background
                  "text-primary hover:text-primary", // Text color
                   activeSection === '#contact' ? 'bg-primary/15 text-primary ring-2 ring-primary/50 ring-offset-2 ring-offset-background' : 'bg-background/60 dark:bg-secondary/60',
                   "active:scale-95" // Click feedback
                   )}
            >
              Get In Touch With Me <Send className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </nav>

         <div className="flex items-center gap-2 md:hidden">
           <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
             <SheetTrigger asChild>
               <Button
                 variant="ghost"
                 size="icon"
                 className="text-muted-foreground h-10 w-10 rounded-full"
               >
                 <Menu className="h-6 w-6" />
                 <VisuallyHidden>Toggle Menu</VisuallyHidden>
               </Button>
             </SheetTrigger>
             <SheetContent
               side="right"
               className={cn(
                   "w-[85vw] max-w-[360px] p-0 flex flex-col",
                   "glassmorphism-heavy" // Apply glassmorphism to the sheet
                 )}
             >
               <SheetPrimitive.Title asChild>
                    <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
                </SheetPrimitive.Title>
                <VisuallyHidden>
                    <p>Navigate through the portfolio sections.</p>
                </VisuallyHidden>
               <div className="border-b border-border/25 p-5 bg-gradient-to-b from-card/50 to-transparent flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center space-x-2.5 group"
                    onClick={(e) => handleNavLinkClick(e, "/")}
                  >
                    {/* Using a shorter version of the name for mobile menu header if preferred */}
                    <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 group-hover:brightness-110 transition-all">
                      Sai J. G. Illuri
                    </span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" className="h-9 w-9 p-0 rounded-full">
                      <X className="h-5 w-5 text-muted-foreground" />
                      <VisuallyHidden>Close Menu</VisuallyHidden>
                    </Button>
                  </SheetClose>
               </div>

               <nav className="flex-1 flex flex-col p-6 space-y-1.5">
                 {navItems.map((item) => {
                   const isActive = activeSection === item.href;
                   return (
                    <SheetClose asChild key={item.label}>
                       <Button
                         variant="ghost"
                         className={cn(
                           "justify-start p-3 text-base font-medium transition-colors duration-200",
                            isActive
                              ? "bg-primary/15 text-primary"
                              : "text-foreground hover:bg-primary/10 hover:text-primary",
                            "active:scale-95"
                         )}
                         onClick={(e) => handleNavLinkClick(e, item.href)}
                       >
                         {item.label}
                       </Button>
                    </SheetClose>
                   );
                 })}
                 <div className="border-b border-border/20 pt-2"></div>
                 <SheetClose asChild>
                  <Button
                    variant={activeSection === '#contact' ? 'default' : 'outline'}
                    className={cn(
                        "w-full mt-6 py-3 text-base font-medium",
                          activeSection === '#contact'
                          ? 'bg-primary text-primary-foreground' // Active contact button style
                          : 'border-primary/50 text-primary hover:bg-primary/15', // Default contact button style
                          "active:scale-95"
                      )}
                    onClick={(e) => handleNavLinkClick(e, "#contact")}
                  >
                    Contact Me{" "}
                    <Send className="inline-block ml-1.5 h-4 w-4 align-middle" />
                  </Button>
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

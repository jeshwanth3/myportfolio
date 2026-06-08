"use client";

import { type MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

const navItems = [
  { label: "About", href: "#summary" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(
    navItems.map((item) => item.href).concat(["#contact"])
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = useCallback(
    (
      event: ReactMouseEvent<HTMLAnchorElement | HTMLButtonElement>,
      href: string
    ) => {
      event.preventDefault();

      if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (mobileMenuOpen) setMobileMenuOpen(false);
        return;
      }

      if (href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }

      if (mobileMenuOpen) {
        setTimeout(() => setMobileMenuOpen(false), 300);
      }
    },
    [mobileMenuOpen]
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
          onClick={(e) => handleNavLinkClick(e, "/")}
        >
          SJ
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Link href="#contact" passHref>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => handleNavLinkClick(e, "#contact")}
              className={cn(
                "ml-4 h-8 px-4 text-sm font-medium rounded-md transition-all duration-200",
                "border-primary/40 text-primary hover:bg-primary/10 hover:border-primary",
                activeSection === "#contact" && "bg-primary/10 border-primary"
              )}
            >
              Contact
            </Button>
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-foreground"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
                <VisuallyHidden>Toggle Navigation Menu</VisuallyHidden>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[300px] p-0 bg-background border-l border-border/50"
            >
              <SheetTitle asChild>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </SheetTitle>

              <nav className="flex flex-col p-6 pt-12 gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavLinkClick(e, item.href)}
                        className={cn(
                          "flex items-center justify-between p-3 text-base font-medium rounded-lg transition-colors",
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        {item.label}
                        <ArrowRight className="h-4 w-4 opacity-40" />
                      </Link>
                    </SheetClose>
                  );
                })}

                <div className="border-t border-border/30 my-3" />

                <SheetClose asChild>
                  <Link
                    href="#contact"
                    onClick={(e) => handleNavLinkClick(e, "#contact")}
                    className={cn(
                      "flex items-center justify-center p-3 text-base font-medium rounded-lg transition-colors",
                      "border border-primary/40 text-primary hover:bg-primary/10"
                    )}
                  >
                    Contact
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

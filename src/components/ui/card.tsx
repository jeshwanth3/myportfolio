import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Added transition for smoother hover effects and larger rounded corners
      "rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)} // Standard padding
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// Updated typing for CardTitle ref to support both heading and div elements
const CardTitle = React.forwardRef<
  HTMLHeadingElement | HTMLDivElement, // Ref can point to a HeadingElement or a DivElement
  React.HTMLAttributes<HTMLElement> & { as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" } // Props include common attributes and the 'as' prop
>(({ className, as: Tag = "div", ...props }, ref) => ( // Default to 'div' for semantic flexibility
  <Tag
    ref={ref}
    className={cn(
      // Adjusted font size and weight slightly for better hierarchy
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)} // Standard muted text
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} /> // Standard padding
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)} // Standard padding
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

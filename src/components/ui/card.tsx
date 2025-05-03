import * as React from "react"
import { Slot } from "@radix-ui/react-slot"; // Import Slot
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Use theme radius, refined border and shadow
      "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)} // Standard padding
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement, // Change element type to div
  React.HTMLAttributes<HTMLHeadingElement> & { as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" } // Add 'as' prop
>(({ className, as: Tag = "div", ...props }, ref) => ( // Default to 'div', allow custom tag
  <Tag // Use the determined Tag
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight", // Adjusted size
      className
    )}
    {...props}
   />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)} // Standard muted text
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} /> // Standard padding
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)} // Standard padding
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

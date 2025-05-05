"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border/30 dark:border-border/50", className)} // Use themed border with adjusted opacity
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        // Enhanced hover and open state styling
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:no-underline hover:bg-accent/5 dark:hover:bg-accent/15 data-[state=open]:bg-accent/10 dark:data-[state=open]:bg-accent/20 [&[data-state=open]>svg]:rotate-180",
        "p-4 md:p-6 text-left", // Consistent padding
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 text-primary" /> {/* Adjusted icon size */}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        // Refined background and border styling
        "bg-card/50 dark:bg-secondary/30 border-t border-border/30 dark:border-border/40",
        className
        )}
    {...props}
  >
    {/* Consistent padding */}
    <div className={cn("pb-4 pt-4 px-4 md:px-6", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

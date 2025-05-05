
"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
// Import DialogTitle and DialogDescription from radix-ui
import { DialogTitle as RadixDialogTitle, DialogDescription as RadixDialogDescription } from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils"
import { VisuallyHidden } from "./visually-hidden" // Ensure VisuallyHidden is imported

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      // Adjusted background color and added backdrop blur
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", // Adjusted background and blur
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  // Enhanced base styles with more blur
  "fixed z-50 gap-4 bg-background dark:bg-background/95 p-6 shadow-xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 backdrop-blur-xl", // Increased blur
  {
    variants: {
      side: {
        // Adjusted border opacity and added rounded corners
        top: "inset-x-0 top-0 border-b dark:border-border/20 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top rounded-b-lg", // Adjusted border
        bottom:
          "inset-x-0 bottom-0 border-t dark:border-border/20 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom rounded-t-lg", // Adjusted border
        left: "inset-y-0 left-0 h-full w-3/4 border-r dark:border-border/20 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm rounded-r-lg", // Adjusted border
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l dark:border-border/20 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm rounded-l-lg", // Adjusted border
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
      title?: string; // Add optional title prop for accessibility
    }

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, title, ...props }, ref) => {
    // Generate a unique ID for the title if a title prop is provided
    const titleId = title ? `sheet-title-${React.useId()}` : undefined;
    return (
    <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content
            ref={ref}
            className={cn(sheetVariants({ side }), className, 'relative')} // Ensure relative positioning
            aria-describedby={undefined} // Remove default aria-describedby
            aria-labelledby={titleId} // Use generated titleId if title prop exists
            {...props}
        >
             {/* Add visually hidden title if provided */}
             {title && (
               <VisuallyHidden>
                  <RadixDialogTitle id={titleId}>{title}</RadixDialogTitle>
               </VisuallyHidden>
             )}


            {children}

            {/* Close Button remains */}
            <SheetPrimitive.Close
                className={cn(
                    // Consistent close button styling
                    'absolute right-4 top-4 rounded-sm p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none',
                    // Use themed secondary background/text for open state
                    'data-[state=open]:bg-secondary data-[state=open]:text-muted-foreground dark:data-[state=open]:bg-secondary dark:data-[state=open]:text-muted-foreground'
                )}
            >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </SheetPrimitive.Close>

        </SheetPrimitive.Content>
    </SheetPortal>
)});
SheetContent.displayName = SheetPrimitive.Content.displayName;

// Export SheetHeader, SheetFooter, SheetTitle, and SheetDescription
const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left", // Adjusted padding/margin via className if needed
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

// Use imported RadixDialogTitle and RadixDialogDescription for semantic correctness
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof RadixDialogTitle>,
  React.ComponentPropsWithoutRef<typeof RadixDialogTitle>
>(({ className, ...props }, ref) => (
  <RadixDialogTitle
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = RadixDialogTitle.displayName;


const SheetDescription = React.forwardRef<
  React.ElementRef<typeof RadixDialogDescription>,
  React.ComponentPropsWithoutRef<typeof RadixDialogDescription>
>(({ className, ...props }, ref) => (
  <RadixDialogDescription
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = RadixDialogDescription.displayName;


export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader, // Export SheetHeader
  SheetFooter, // Export SheetFooter
  SheetTitle, // Export SheetTitle
  SheetDescription, // Export SheetDescription
};

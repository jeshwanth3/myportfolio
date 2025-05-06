import * as React from "react";
import { cn } from "@/lib/utils"; // Ensure cn utility is imported

// Use Radix UI's VisuallyHidden for accessibility best practices
import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden';

const VisuallyHidden = React.forwardRef<
  React.ElementRef<typeof VisuallyHiddenPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof VisuallyHiddenPrimitive.Root>
>(({ className, ...props }, ref) => (
  <VisuallyHiddenPrimitive.Root
    ref={ref}
    className={cn(
      // Use Radix's recommended styles, potentially add Tailwind equivalents if needed
      // But Radix often handles this internally.
      // Example Tailwind equivalents (if needed, but Radix usually sufficient):
      // "absolute border-0 h-px w-px overflow-hidden whitespace-nowrap p-0 m-[-1px]",
      className
    )}
    {...props}
  />
));
VisuallyHidden.displayName = VisuallyHiddenPrimitive.Root.displayName;

export { VisuallyHidden };

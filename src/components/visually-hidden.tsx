tsx
import * as React from "react";

import { cn } from "@/lib/utils";

export const VisuallyHidden = React.forwardRef<
  React.ElementRef<"span">,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "absolute border-0 h-px w-px overflow-hidden whitespace-nowrap p-0",
      "-focus:outline-none -focus:ring-2 -focus:ring-ring -focus:ring-offset-2",
      className
    )}
    {...props}
  />
));
VisuallyHidden.displayName = "VisuallyHidden";
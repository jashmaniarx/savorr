import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium font-poppins transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bright-orange focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-bright-orange text-dark-burgundy hover:bg-burnt-orange hover:shadow-warm hover:scale-[1.02] active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-hover",
        outline:
          "border border-card-border bg-glass-bg/20 backdrop-blur-sm text-foreground hover:bg-bright-orange/20 hover:border-bright-orange hover:shadow-warm",
        secondary:
          "bg-surface text-secondary-foreground hover:bg-surface-hover hover:shadow-card",
        ghost: "hover:bg-bright-orange/20 hover:text-bright-orange",
        link: "text-bright-orange underline-offset-4 hover:underline hover:text-burnt-orange",
        hero: "bg-gradient-primary text-dark-burgundy shadow-warm hover:shadow-hover hover:scale-[1.02] active:scale-[0.98] border border-bright-orange/30",
        glow: "bg-bright-orange text-dark-burgundy shadow-warm animate-warm-glow hover:animate-none hover:shadow-hover hover:scale-[1.02]"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

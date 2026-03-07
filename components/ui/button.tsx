import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold tracking-wide transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "btn-conic-border rounded-full border border-teal-300/30 bg-gradient-to-br from-[#1c1c1c] to-[#0d0d0d] text-primary-foreground font-[var(--font-head)] uppercase tracking-[0.14em] text-[0.78rem] font-bold shadow-lg shadow-teal-900/30 hover:border-teal-300/70",
        destructive:
          "rounded-full bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "rounded-full border border-teal-300/25 bg-transparent text-slate-200 font-[var(--font-head)] uppercase tracking-[0.14em] text-[0.78rem] font-bold hover:border-teal-300/60 hover:text-teal-300 hover:bg-teal-500/10",
        secondary:
          "rounded-full border border-white/10 bg-secondary text-secondary-foreground hover:bg-zinc-800",
        ghost:
          "rounded-full hover:bg-accent/30 hover:text-accent-foreground dark:hover:bg-accent/40",
        link: "text-primary underline-offset-4 hover:text-white hover:underline",
      },
      size: {
        default: "h-9 px-6 py-2 has-[>svg]:px-5",
        sm: "h-8 gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-10 px-8 has-[>svg]:px-6",
        icon: "size-9 rounded-full",
        "icon-sm": "size-8 rounded-full",
        "icon-lg": "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

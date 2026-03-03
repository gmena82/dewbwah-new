import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold tracking-wide transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "relative isolate overflow-hidden border border-teal-300/30 bg-gradient-to-br from-zinc-900 to-zinc-950 text-primary-foreground shadow-lg shadow-teal-900/30 hover:border-teal-300/70 hover:shadow-teal-500/25 before:absolute before:inset-[-2px] before:rounded-md before:bg-[conic-gradient(from_var(--btn-angle,0deg),transparent_0%,transparent_25%,#1BBED3_40%,#ffffff_50%,#1BBED3_60%,transparent_75%,transparent_100%)] before:[animation:btn-rotate_3s_linear_infinite] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-teal-300/25 bg-black/35 text-slate-200 shadow-xs hover:border-teal-300/60 hover:bg-teal-500/10 hover:text-white",
        secondary:
          "border border-white/10 bg-secondary text-secondary-foreground hover:bg-zinc-800",
        ghost:
          "hover:bg-accent/30 hover:text-accent-foreground dark:hover:bg-accent/40",
        link: "text-primary underline-offset-4 hover:text-white hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
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

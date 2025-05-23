import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Purple & Violet themed button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[#b983ff] focus-visible:ring-[#b983ff]/60 focus-visible:ring-[3px] aria-invalid:ring-[#e259ec]/30 dark:aria-invalid:ring-[#e259ec]/50 aria-invalid:border-[#e259ec]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-[#a259ec] via-[#7c3aed] to-[#b983ff] text-white shadow-xs hover:from-[#7c3aed] hover:to-[#a259ec] focus-visible:ring-[#b983ff]/70",
        destructive:
          "bg-gradient-to-br from-[#e259ec] to-[#c026d3] text-white shadow-xs hover:from-[#c026d3] hover:to-[#e259ec] focus-visible:ring-[#e259ec]/30 dark:focus-visible:ring-[#e259ec]/50 dark:bg-[#e259ec]/90",
        outline:
          "border border-[#b983ff] bg-transparent text-[#b983ff] shadow-xs hover:bg-[#b983ff]/10 hover:text-[#a259ec] dark:bg-[#1a1026] dark:border-[#b983ff] dark:hover:bg-[#b983ff]/20",
        secondary:
          "bg-gradient-to-br from-[#7c3aed] to-[#a259ec] text-white shadow-xs hover:from-[#a259ec] hover:to-[#7c3aed]",
        ghost:
          "hover:bg-[#b983ff]/10 hover:text-[#a259ec] dark:hover:bg-[#a259ec]/20",
        link: "text-[#b983ff] underline-offset-4 hover:underline hover:text-[#a259ec]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
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
  variant,
  size,
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
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
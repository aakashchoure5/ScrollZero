import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#2DD4BF] to-[#3B82F6] text-white shadow-lg shadow-cyan-500/30 hover:scale-[1.02] hover:shadow-cyan-400/40",
        secondary:
          "border border-zinc-300/70 bg-white/70 text-zinc-900 backdrop-blur hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-100 dark:hover:bg-zinc-900",
        ghost:
          "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-12 px-8 text-base",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-zinc-200/60 bg-white/80 p-6 shadow-sm shadow-zinc-900/5 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/75",
        className
      )}
      {...props}
    />
  );
}

"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const LogoButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  function LogoButton({ className, ...props }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className={cn("font-display text-sm font-semibold text-foreground px-3", className)}
        {...props}
      >
        Ilham
      </button>
    );
  }
);

"use client";

import { forwardRef, useEffect, useState, type ButtonHTMLAttributes } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { EASE_IN_OUT } from "@/lib/motion";

const EASE_IN_OUT_CSS = `cubic-bezier(${EASE_IN_OUT.join(",")})`;
const TRANSITION_MS = 450;

// The image's own box stays fixed at the small (h-14) size at all times, so it
// never triggers a resize the navbar's ResizeObserver would pick up mid-animation
// — the "big" state is purely a visual `scale()`, keeping it perfectly in step
// with the logo's slide-into-pill transform (same duration + easing).
const LARGE_SCALE = 3;

interface LogoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  large?: boolean;
}

export const LogoButton = forwardRef<HTMLButtonElement, LogoButtonProps>(
  function LogoButton({ className, large = false, ...props }, ref) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    const logoSrc = mounted && resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg";

    return (
      <button
        ref={ref}
        type="button"
        aria-label="Ilham Muhammad"
        className={cn("flex items-center px-3", className)}
        {...props}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Ilham Muhammad"
          className="h-8 w-8 lg:h-10 lg:w-10 rounded-md origin-left"
          style={{
            transform: large ? `scale(${LARGE_SCALE})` : "scale(1)",
            transition: `transform ${TRANSITION_MS}ms ${EASE_IN_OUT_CSS}`,
          }}
        />
      </button>
    );
  }
);

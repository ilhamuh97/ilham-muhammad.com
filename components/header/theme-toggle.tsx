"use client";

import { forwardRef, useEffect, useState, type CSSProperties } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  style?: CSSProperties;
}

export const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(function ThemeToggle(
  { className, style },
  ref
) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // next-themes resolves the real theme after mount; rendering the icon before
  // that would make the client's first paint diverge from the server's and
  // trigger a hydration mismatch, so this guard is required, not optional.
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      style={style}
      className={cn(
        "h-8 w-8 flex items-center justify-center rounded-full text-foreground/70 hover:text-foreground hover:bg-muted",
        className
      )}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
});

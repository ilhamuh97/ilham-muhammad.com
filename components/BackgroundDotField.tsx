"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import DotField from "@/components/DotField";

export function BackgroundDotField() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia("(max-width: 640px)");
    setIsMobile(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const dotColors = isDark
    ? { gradientFrom: "rgba(212, 212, 212, 0.4)", gradientTo: "rgba(163, 163, 163, 0.18)" }
    : { gradientFrom: "rgba(38, 38, 38, 0.35)", gradientTo: "rgba(82, 82, 82, 0.15)" };

  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, black 35%, transparent 70%)",
        maskImage: "radial-gradient(ellipse at center, black 0%, black 35%, transparent 70%)",
      }}
    >
      <DotField
        dotRadius={isMobile ? 1.2 : 1.5}
        dotSpacing={isMobile ? 20 : 30}
        cursorRadius={isMobile ? 260 : 500}
        bulgeStrength={isMobile ? 40 : 65}
        glow={false}
        sparkle
        {...dotColors}
      />
    </div>
  );
}

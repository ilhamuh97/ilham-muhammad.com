"use client";

import { forwardRef, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/navigation";

interface NavLinksProps {
  activeSection: string;
  layoutId: string;
  onNavigate: (id: string) => void;
  className?: string;
  style?: CSSProperties;
}

export const NavLinks = forwardRef<HTMLElement, NavLinksProps>(function NavLinks(
  { activeSection, layoutId, onNavigate, className, style },
  ref
) {
  return (
    <nav ref={ref} style={style} className={cn("flex items-center gap-1", className)}>
      {navigationItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={cn(
            "relative rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors",
            activeSection === item.id ? "text-background" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {activeSection === item.id && (
            <motion.span
              layoutId={layoutId}
              className="absolute inset-0 rounded-full bg-foreground"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </button>
      ))}
    </nav>
  );
});

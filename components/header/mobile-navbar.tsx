"use client";

import { Menu, X } from "lucide-react";
import { LogoButton } from "./logo-button";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

interface MobileNavbarProps {
  activeSection: string;
  isMenuOpen: boolean;
  onNavigate: (id: string) => void;
  onToggleMenu: () => void;
}

/** Mobile & tablet navbar (below `lg`): always the floating pill, unaffected by scroll. */
export function MobileNavbar({ activeSection, isMenuOpen, onNavigate, onToggleMenu }: MobileNavbarProps) {
  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 lg:hidden">
      <div className="flex items-center gap-1 rounded-full border border-border/60 bg-background/50 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5 dark:shadow-black/20 px-2 py-1.5">
        <LogoButton onClick={() => onNavigate("hero")} />

        <NavLinks
          activeSection={activeSection}
          layoutId="nav-pill"
          onNavigate={onNavigate}
          className="hidden md:flex"
        />

        <div className="flex items-center gap-1 pl-1">
          <ThemeToggle className="transition-colors" />

          <button
            onClick={onToggleMenu}
            aria-label="Toggle menu"
            className="md:hidden h-8 w-8 flex items-center justify-center rounded-full text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}

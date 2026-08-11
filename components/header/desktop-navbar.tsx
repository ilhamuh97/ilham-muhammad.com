"use client";

import { useRef } from "react";
import { EASE_IN_OUT } from "@/lib/motion";
import { LogoButton } from "./logo-button";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import { useDesktopNavbarGeometry } from "./use-desktop-navbar-geometry";
import { useScrolledPastTop } from "./use-scrolled-past-top";

const EASE_IN_OUT_CSS = `cubic-bezier(${EASE_IN_OUT.join(",")})`;
const TRANSITION_MS = 450;

interface DesktopNavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

/**
 * Desktop navbar (`lg` and up): a transparent, full-width bar at the top of the page
 * that morphs into the floating pill once the page is scrolled. Every element keeps
 * its own fixed position and slides via a CSS transform driven by measured geometry —
 * there's no layout-animation reflow, so nothing jumps or restretches mid-transition.
 */
export function DesktopNavbar({ activeSection, onNavigate }: DesktopNavbarProps) {
  const scrolled = useScrolledPastTop();

  const barRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const geometry = useDesktopNavbarGeometry({ bar: barRef, logo: logoRef, nav: navRef, toggle: toggleRef });

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 hidden lg:block">
      <div ref={barRef} className="relative mx-auto h-11">
        <div
          aria-hidden
          style={{
            width: geometry.pillWidth,
            transition: `transform ${TRANSITION_MS}ms ${EASE_IN_OUT_CSS}, opacity 350ms ${EASE_IN_OUT_CSS}`,
            transform: `translate(-50%, -50%) scale(${scrolled ? 1 : 0.92})`,
            opacity: scrolled ? 1 : 0,
          }}
          className="absolute left-1/2 top-1/2 h-11 rounded-full border border-border/60 bg-background/50 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5 dark:shadow-black/20"
        />

        <LogoButton
          ref={logoRef}
          large={!scrolled}
          onClick={() => onNavigate("hero")}
          style={{
            transition: `transform ${TRANSITION_MS}ms ${EASE_IN_OUT_CSS}, color 150ms`,
            transform: `translate(${scrolled ? geometry.logoOffset : 0}px, -50%)`,
          }}
          className="absolute left-6 lg:left-10 top-1/2"
        />

        <NavLinks
          ref={navRef}
          activeSection={activeSection}
          layoutId="nav-pill-desktop"
          onNavigate={onNavigate}
          style={{
            transition: `transform ${TRANSITION_MS}ms ${EASE_IN_OUT_CSS}`,
            transform: `translate(calc(-50% + ${scrolled ? geometry.navOffset : 0}px), -50%)`,
          }}
          className="absolute left-1/2 top-1/2"
        />

        <ThemeToggle
          ref={toggleRef}
          style={{
            transition: `transform ${TRANSITION_MS}ms ${EASE_IN_OUT_CSS}, color 150ms, background-color 150ms`,
            transform: `translate(${scrolled ? geometry.toggleOffset : 0}px, -50%)`,
          }}
          className="absolute right-6 lg:right-10 top-1/2"
        />
      </div>
    </header>
  );
}

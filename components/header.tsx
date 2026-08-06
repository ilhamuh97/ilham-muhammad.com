"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";
import { navigationItems } from "@/data/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // next-themes resolves the real theme after mount; rendering the icon before
  // that would make the client's first paint diverge from the server's and
  // trigger a hydration mismatch, so this guard is required, not optional.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const mainEl = document.querySelector("main");
    if (!mainEl) return;

    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: mainEl, threshold: [0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const mainElement = document.querySelector("main");
    const section = document.getElementById(sectionId);

    if (mainElement && section) {
      mainElement.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <>
      <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4">
        <div className="flex items-center gap-1 rounded-full border border-border/60 bg-background/50 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5 dark:shadow-black/20 px-2 py-1.5">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-display text-sm font-semibold text-foreground px-3"
          >
            Ilham
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors",
                  activeSection === item.id
                    ? "text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1 pl-1">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="h-8 w-8 flex items-center justify-center rounded-full text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              className="md:hidden h-8 w-8 flex items-center justify-center rounded-full text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-foreground flex flex-col items-center justify-center gap-8"
          >
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 + 0.1, duration: 0.4, ease: EASE_OUT }}
                onClick={() => scrollToSection(item.id)}
                className="font-display text-4xl font-medium text-background"
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

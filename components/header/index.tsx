"use client";

import { useEffect, useState } from "react";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileMenu } from "./mobile-menu";
import { MobileNavbar } from "./mobile-navbar";
import { useActiveSection } from "./use-active-section";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

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

  return (
    <>
      <MobileNavbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onNavigate={scrollToSection}
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
      />
      <DesktopNavbar activeSection={activeSection} onNavigate={scrollToSection} />
      <MobileMenu isOpen={isMenuOpen} onNavigate={scrollToSection} />
    </>
  );
}

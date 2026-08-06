"use client";

import { useEffect, useState } from "react";
import { navigationItems } from "@/data/navigation";

/** Tracks which section is currently ≥50% visible in `main`, for nav highlighting. */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

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

  return activeSection;
}

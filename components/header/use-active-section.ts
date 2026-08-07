"use client";

import { useEffect, useState } from "react";
import { navigationItems } from "@/data/navigation";

/** Tracks whichever section is most visible in `main`, for nav highlighting. */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const mainEl = document.querySelector("main");
    if (!mainEl) return;

    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId: string | null = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        // Extra gap/transition sections between snap points can leave every tracked
        // section briefly under-visible mid-scroll; only switch once something is
        // clearly ahead, so the pill doesn't reset instead of just staying put.
        if (bestId) setActiveSection(bestId);
      },
      { root: mainEl, threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}

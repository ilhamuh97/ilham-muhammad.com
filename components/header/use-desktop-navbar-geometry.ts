"use client";

import {type RefObject, useEffect, useState} from "react";

interface DesktopNavbarRefs {
  bar: RefObject<HTMLDivElement | null>;
  logo: RefObject<HTMLButtonElement | null>;
  nav: RefObject<HTMLElement | null>;
  toggle: RefObject<HTMLButtonElement | null>;
}

interface DesktopNavbarGeometry {
  logoOffset: number;
  navOffset: number;
  toggleOffset: number;
  pillWidth: number;
}

const LEFT_GAP = 4; // gap-1 between the logo and nav in the pill
const RIGHT_GAP = 8; // gap-1 + pl-1 between the nav and toggle in the pill
const PILL_PADDING = 8; // px-2 in the pill

/**
 * Measures the desktop bar's natural (untransformed) layout so the logo/nav/toggle
 * know exactly how far to slide inward to form a pill centered on the bar, matching
 * the gaps and padding of the existing mobile/tablet pill exactly.
 */
export function useDesktopNavbarGeometry({ bar, logo, nav, toggle }: DesktopNavbarRefs): DesktopNavbarGeometry {
  const [geometry, setGeometry] = useState<DesktopNavbarGeometry>({
    logoOffset: 0,
    navOffset: 0,
    toggleOffset: 0,
    pillWidth: 0,
  });

  useEffect(() => {
    const recompute = () => {
      const barEl = bar.current;
      const logoEl = logo.current;
      const navEl = nav.current;
      const toggleEl = toggle.current;
      if (!barEl || !logoEl || !navEl || !toggleEl) return;

      const center = barEl.offsetWidth / 2;
      const clusterWidth = logoEl.offsetWidth + LEFT_GAP + navEl.offsetWidth + RIGHT_GAP + toggleEl.offsetWidth;
      const targetLogoLeft = center - clusterWidth / 2;
      const targetNavLeft = targetLogoLeft + logoEl.offsetWidth + LEFT_GAP;
      const targetToggleLeft = targetNavLeft + navEl.offsetWidth + RIGHT_GAP;

      // nav is permanently centered via left-1/2 + translate(-50%), so its natural
      // (unscrolled) visual left edge is `center - navWidth / 2`, not its offsetLeft.
      const navNaturalLeft = center - navEl.offsetWidth / 2;

      setGeometry({
        logoOffset: targetLogoLeft - logoEl.offsetLeft,
        navOffset: targetNavLeft - navNaturalLeft,
        toggleOffset: targetToggleLeft - toggleEl.offsetLeft,
        pillWidth: clusterWidth + PILL_PADDING * 2,
      });
    };

    recompute();
    document.fonts?.ready?.then(recompute).catch(() => {});

    const observer = new ResizeObserver(recompute);
    [bar.current, logo.current, nav.current, toggle.current].forEach((el) => el && observer.observe(el));
    window.addEventListener("resize", recompute);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", recompute);
    };
  }, [bar, logo, nav, toggle]);

  return geometry;
}

"use client";

import { useEffect, useState } from "react";

/** True once `main` has been scrolled past `threshold` px from the top. */
export function useScrolledPastTop(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const mainEl = document.querySelector("main");
    if (!mainEl) return;

    const handleScroll = () => setScrolled(mainEl.scrollTop > threshold);
    handleScroll();
    mainEl.addEventListener("scroll", handleScroll, { passive: true });
    return () => mainEl.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}

"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";
import { GitHubLink } from "@/components/github-link";
import { SectionTransition } from "@/components/section-transition";
import { ScrollToTop } from "@/components/scroll-to-top";
import LoadingScreen from "@/components/LoadingScreen";

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />
      <Header />
      <main
        className="h-dvh overflow-y-scroll scroll-smooth"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <Hero loaded={loaded} />
        <SectionTransition variant="toMuted" />
        <Journey />
        <SectionTransition variant="toBackground" />
        <Projects />
        <SectionTransition variant="toMuted" />
        <GitHubLink />
      </main>
      <ScrollToTop />
    </>
  );
}

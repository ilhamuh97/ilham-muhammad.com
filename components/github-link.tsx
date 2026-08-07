"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import { githubSectionMeta, githubRepo, githubCopyright } from "@/data/github";
import DotField from "@/components/DotField";

export function GitHubLink() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia("(max-width: 640px)");
    setIsMobile(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const dotColors = isDark
    ? { gradientFrom: "rgba(212, 212, 212, 0.4)", gradientTo: "rgba(163, 163, 163, 0.18)" }
    : { gradientFrom: "rgba(38, 38, 38, 0.35)", gradientTo: "rgba(82, 82, 82, 0.15)" };

  return (
    <section
      id="github"
      className="h-dvh flex flex-col px-6 lg:px-10 pt-24 pb-8 relative overflow-hidden bg-muted/40"
      style={{ scrollSnapAlign: "start" }}
    >
      {mounted && (
        <div
          className="absolute inset-0 z-0"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 25%)",
            maskImage: "linear-gradient(to bottom, transparent, black 25%)",
          }}
        >
          <DotField
            dotRadius={isMobile ? 1.2 : 1.5}
            dotSpacing={isMobile ? 20 : 30}
            cursorRadius={isMobile ? 260 : 500}
            bulgeStrength={isMobile ? 40 : 65}
            glow={false}
            sparkle
            {...dotColors}
          />
        </div>
      )}
      <span
        aria-hidden
        className="absolute right-2 top-8 select-none pointer-events-none font-display font-medium text-foreground/5 leading-none"
        style={{ fontSize: "clamp(6rem, 14vw, 11rem)" }}
      >
        {githubSectionMeta.index}
      </span>

      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            {githubSectionMeta.kicker}
          </p>
          <h2 className="font-display font-medium text-foreground text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-10">
            {githubSectionMeta.heading}
          </h2>

          <a
            href={githubRepo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 rounded-lg border border-border px-8 py-5 transition-all duration-300 hover:border-accent hover:bg-background/40 hover:backdrop-blur-md hover:shadow-lg"
          >
            <FaGithub className="w-8 h-8 text-foreground group-hover:text-accent transition-colors" />
            <div className="text-left">
              <p className="font-medium text-foreground">{githubRepo.label}</p>
              <p className="text-sm text-muted-foreground">{githubRepo.subLabel}</p>
            </div>
          </a>
        </motion.div>
      </div>

      <div className="pt-6 w-full border-t border-border relative z-10">
        <p className="text-xs sm:text-sm text-muted-foreground text-center font-mono">
          {githubCopyright}
        </p>
      </div>
    </section>
  );
}

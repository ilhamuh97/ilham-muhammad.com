"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";
import { projects, projectsSectionMeta } from "@/data/projects";

export function Projects() {
  const [selected, setSelected] = useState(0);
  const current = projects[selected];
  const previewImage = current.detail?.images?.[0];

  return (
    <section
      id="projects"
      className="h-dvh flex flex-col px-6 lg:px-10 pt-24 pb-10 relative overflow-hidden bg-background"
      style={{ scrollSnapAlign: "start" }}
    >
      <span
        aria-hidden
        className="absolute right-2 top-8 select-none pointer-events-none font-display font-medium text-foreground/5 leading-none"
        style={{ fontSize: "clamp(6rem, 14vw, 11rem)" }}
      >
        {projectsSectionMeta.index}
      </span>

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col flex-1 min-h-0">
        <div className="flex-shrink-0 mb-6 sm:mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            {projectsSectionMeta.kicker}
          </p>
          <h2 className="font-display font-medium text-foreground text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            {projectsSectionMeta.heading}
          </h2>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 overflow-y-auto scrollbar-hide lg:overflow-visible">
          <div className="lg:col-span-5 lg:h-full lg:overflow-y-auto lg:scrollbar-hide border-t border-border">
            {projects.map((project, index) => (
              <button
                key={project.name}
                onClick={() => setSelected(index)}
                onMouseEnter={() => setSelected(index)}
                className={cn(
                  "w-full flex items-center gap-4 py-4 border-b border-border text-left transition-colors",
                  selected === index ? "bg-muted/60" : "hover:bg-muted/30"
                )}
              >
                <span className="font-mono text-xs text-muted-foreground w-6 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full shrink-0",
                    project.status === "in-progress" ? "bg-accent" : "bg-muted-foreground"
                  )}
                />
                <span className="flex-1 font-display text-sm sm:text-base text-foreground truncate">
                  {project.name}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground shrink-0 hidden sm:block">
                  {project.techStack.length} stack
                </span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 lg:h-full lg:overflow-y-auto lg:scrollbar-hide">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                className="pt-6 lg:pt-0"
              >
                {previewImage && (
                  <div className="relative aspect-video rounded-lg border border-border overflow-hidden mb-6">
                    <Image
                      src={previewImage}
                      alt={`${current.name} screenshot`}
                      fill
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-foreground">
                    {current.name}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                    {current.status === "in-progress"
                      ? "In progress"
                      : current.status === "planned"
                      ? "Planned"
                      : "Done"}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-xl">
                  {current.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {current.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="font-mono text-[11px] rounded-full font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  {current.link && (
                    <a
                      href={current.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </a>
                  )}
                  {current.slug && current.detail && (
                    <Link
                      href={`/projects/${current.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

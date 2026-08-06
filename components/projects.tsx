"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";
import { projects, projectsSectionMeta } from "@/data/projects";
import type { Project } from "@/app/types/project";

const STATUS_LABEL: Record<Project["status"], string> = {
  done: "Done",
  "in-progress": "In progress",
  planned: "Planned",
};

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function ProjectCard({ project }: { project: Project }) {
  const thumbnail = project.detail?.images?.[0];
  const hasLinks = Boolean(project.link || (project.slug && project.detail));

  return (
    <div className="group flex flex-col h-full rounded-lg border border-border bg-background overflow-hidden transition-colors hover:border-accent/50 hover:bg-muted/30">
      <div className="relative aspect-video border-b border-border overflow-hidden bg-muted">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={`${project.name} screenshot`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-display font-medium text-accent/25 dark:text-accent/35 select-none"
              style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}
            >
              {getInitials(project.name)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full shrink-0",
              project.status === "in-progress" ? "bg-accent" : "bg-muted-foreground"
            )}
          />
          <h3 className="font-display text-base sm:text-lg font-medium text-foreground truncate">
            {project.name}
          </h3>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground mb-2">
          {STATUS_LABEL[project.status]}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="font-mono text-[10px] rounded-full font-normal"
            >
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge
              variant="outline"
              className="font-mono text-[10px] rounded-full font-normal text-muted-foreground"
            >
              +{project.techStack.length - 4}
            </Badge>
          )}
        </div>

        {hasLinks && (
          <div className="flex items-center gap-4 mt-auto pt-3 border-t border-border">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                View Project
              </a>
            )}
            {project.slug && project.detail && (
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                Case Study
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    const card = track?.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveIndex(clamped);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const trackLeft = track.getBoundingClientRect().left;
    let nearestIndex = 0;
    let nearestDistance = Infinity;
    Array.from(track.children).forEach((child, index) => {
      const distance = Math.abs(child.getBoundingClientRect().left - trackLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });
    setActiveIndex(nearestIndex);
  };

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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="flex-1 min-h-0 flex flex-col justify-center"
        >
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-1 px-1"
          >
            {projects.map((project) => (
              <div
                key={project.name}
                className="shrink-0 snap-start w-[85%] sm:w-[calc((100%_-_1.25rem)/2)] lg:w-[calc((100%_-_3rem)/3)]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-5 sm:mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous project"
              className="h-9 w-9 rounded-full shrink-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-1.5">
              {projects.map((project, index) => (
                <button
                  key={project.name}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to ${project.name}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    index === activeIndex
                      ? "w-6 bg-accent"
                      : "w-1.5 bg-border hover:bg-muted-foreground"
                  )}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex === projects.length - 1}
              aria-label="Next project"
              className="h-9 w-9 rounded-full shrink-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Code,
  Lightbulb,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectDetailProps } from "@/app/types/project";
import { EASE_OUT } from "@/lib/motion";

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { detail } = project;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % detail.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + detail.images.length) % detail.images.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest">
                Back to Projects
              </span>
            </Link>

            {project.link && (
              <Button asChild variant="outline" size="sm">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Project
                </a>
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-12"
        >
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="font-display font-semibold text-foreground text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                {project.name}
              </h1>
              <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground border border-border rounded-full px-2 py-0.5">
                {project.status === "done" ? "Completed" : "In progress"}
              </span>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="relative max-w-4xl">
            <div className="relative aspect-video rounded-lg border border-border overflow-hidden">
              <Image
                src={detail.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain"
              />

              {detail.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}
            </div>

            {detail.images.length > 1 && (
              <div className="flex justify-center mt-4 gap-2">
                {detail.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "w-6 bg-accent"
                        : "w-1.5 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Show screenshot ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
        >
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">
                <Target className="w-3.5 h-3.5" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="features">
                <Sparkles className="w-3.5 h-3.5" />
                Features
              </TabsTrigger>
              <TabsTrigger value="tech">
                <Code className="w-3.5 h-3.5" />
                Tech Stack
              </TabsTrigger>
              <TabsTrigger value="challenges">
                <Lightbulb className="w-3.5 h-3.5" />
                Challenges
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-display font-medium">
                    Project Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {detail.fullDescription.split("\n\n").map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-display font-medium">
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {detail.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05, ease: EASE_OUT }}
                        className="flex items-start gap-3 py-2 border-b border-border last:border-b-0"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tech">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-display font-medium">
                    Technology Stack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {Object.entries(detail.technologies).map(
                      ([category, techs], categoryIndex) => (
                        <motion.div
                          key={category}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: categoryIndex * 0.05, ease: EASE_OUT }}
                          className="space-y-3"
                        >
                          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                            {category}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="font-mono text-[11px] rounded-full font-normal"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="challenges">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-display font-medium">
                    Challenges &amp; Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {detail.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05, ease: EASE_OUT }}
                        className="flex items-start gap-3 py-2 border-b border-border last:border-b-0"
                      >
                        <Lightbulb className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
}

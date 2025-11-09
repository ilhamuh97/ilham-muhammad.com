"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Clock,
  CheckCircle,
  Sparkles,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const projects = [
  {
    slug: "classifyai",
    name: "ClassifyAI",
    link: "https://classify-ai.vercel.app/",
    techStack: ["React", "Tensorflow.js", "p5.js", "Ant Design", "ApexCharts"],
    description:
      "The ClassifyAI web-based application enables users to create image classification models through a simple, code-free interface, accessible on both desktop and mobile devices. It guides users through four main steps: class creation, parameter setup, training, and real-time prediction testing.",
    status: "done",
  },
  {
    slug: "saso-ecommerce",
    name: "SASO E-Commerce",
    link: "https://saso.iwkz.de/",
    techStack: ["Next.js", "Node.js", "Ant Design", "MongoDB", "express.js"],
    description:
      "This website was developed as an ordering system for food and drinks at the annual SASO food festival organized by IWKZ e.V., first launched at SASO 2022. Initially serving a single event, the project later evolved into the IW-Commerce website with enhanced functionality to support multiple events.",
    status: "done",
  },
  {
    slug: "chat-app",
    name: "Chat App",
    link: "https://chat-app-ie23.onrender.com/",
    techStack: ["Next.js", "Node.js", "socket.io", "DaisyUI", "MongoDB", "express.js"],
    description:
      "A realtime chat application developed with React.js and Node.js, featuring a clean DaisyUI interface and MongoDB-based message storage. This project was built for learning purposes to understand realtime web communication uisng socket.io and full-stack integration.",
    status: "done",
  },
  {
    slug: "",
    name: "IW-Commerce",
    link: null,
    techStack: ["Next.js", "Node.js", "Supabase", "express.js"],
    description:
      "IW-Commerce is the second version of the SASO E-commerce website, featuring an improved UI/UX, enhanced functionalities, and support for multiple events. The website is currently under development.",
    status: "ongoing",
  },
  {
    slug: "preattentive-test",
    name: "Preattentive Test",
    link: "https://ilhamuh97.github.io/preattentive-test/",
    techStack: ["p5.js", "HTML", "CSS", "JavaScript"],
    description:
      "This is a small project developed to create a website that tests preattentive vision. The website aims to explore how preattentive processing functions in the human visual system.",
    status: "done",
  },
  {
    slug: "",
    name: "Hanoi Visualizer",
    link: "https://hanoi-viz.netlify.app/",
    techStack: ["SVG.js", "HTML", "CSS", "JavaScript"],
    description:
      "Hanoi Visualizer is a campus project that animates the execution of code for the Tower of Hanoi game. It helps visualize how the algorithm works step by step.",
    status: "done",
  },
  {
    slug: "",
    name: "Histogram",
    link: "https://show-histogram.netlify.app/",
    techStack: ["highcharts", "HTML", "CSS", "JavaScript"],
    description:
      "This website is a simple project that visualizes the distribution of data in a histogram format. It allows users to input data and see how it is represented graphically.",
    status: "done",
  },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section
      id="projects"
      className="h-dvh flex items-center justify-center px-4 pt-16 pb-6 relative overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Enhanced Brown Earth Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-300 to-red-400 dark:from-amber-950 dark:via-orange-950 dark:to-red-950">
        <div className="absolute inset-0 opacity-70 dark:opacity-25">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-300/60 via-transparent to-orange-300/60"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-400/70 to-transparent rounded-full blur-3xl animate-float-left"></div>
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-red-400/70 to-transparent rounded-full blur-3xl animate-float-up"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-amber-300/50 to-orange-300/50 rounded-full blur-2xl animate-float-right"
            style={{ animationDelay: "5s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-tl from-red-300/50 to-amber-300/50 rounded-full blur-2xl animate-float-down"
            style={{ animationDelay: "7s" }}
          ></div>
          <div
            className="absolute top-2/3 left-2/3 w-56 h-56 bg-gradient-to-br from-orange-300/50 to-red-300/50 rounded-full blur-2xl animate-float-circle"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/2 w-48 h-48 bg-gradient-to-tl from-yellow-300/40 to-orange-300/40 rounded-full blur-3xl animate-float-left"
            style={{ animationDelay: "9s" }}
          ></div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-800 to-orange-800 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent animate-fade-in-down drop-shadow-sm">
          My Projects
        </h2>

        <div className="relative">
          {/* Floating Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-20">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-amber-300/70 dark:border-amber-700/50 text-amber-800 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl pointer-events-auto -translate-x-5"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-amber-300/70 dark:border-amber-700/50 text-amber-800 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl pointer-events-auto translate-x-5"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Card className="min-h-[350px] bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm border-white/60 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in-up flex flex-col">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl flex items-center gap-2">
                    {currentProject.slug !== "" ? (
                      <>
                        <Search className="w-5 h-5 text-orange-700 dark:text-orange-300" />
                        <Link
                          href={`/projects/${currentProject.slug}`}
                          className="bg-gradient-to-r from-amber-800 to-orange-800 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent hover:from-amber-700 hover:to-orange-700 dark:hover:from-amber-300 dark:hover:to-orange-300 transition-all duration-200 cursor-pointer"
                        >
                          {currentProject.name}
                        </Link>
                      </>
                    ) : (
                      <span className="bg-gradient-to-r from-amber-800 to-orange-800 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent hover:from-amber-700 hover:to-orange-700 dark:hover:from-amber-300 dark:hover:to-orange-300 transition-all duration-200 cursor-pointer">
                        {currentProject.name}
                      </span>
                    )}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    {currentProject.status === "done" ? (
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Done
                      </Badge>
                    ) : (
                      <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 shadow-lg">
                        <Clock className="w-3 h-3 mr-1" />
                        In Progress
                      </Badge>
                    )}
                  </div>
                </div>

                {currentProject.link && (
                  <div className="flex items-center gap-2">
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 dark:text-amber-400 hover:text-orange-700 dark:hover:text-orange-400 text-xs sm:text-sm lg:text-base flex items-center gap-1 font-semibold hover:scale-105 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </div>
                )}
              </CardHeader>

              <CardContent className="flex flex-col flex-1">
                {/* Description - Takes up available space */}
                <div className="flex-1">
                  <CardDescription className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800 dark:text-gray-300">
                    {currentProject.description}
                  </CardDescription>
                </div>

                {/* Tech Stack - Always at bottom */}
                <div className="mt-6 pt-4 border-t border-amber-200 dark:border-amber-800">
                  <p className="text-xs sm:text-sm lg:text-base font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.techStack.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-950 dark:to-orange-950 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {/* Dot Indicators */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-amber-600 to-orange-600 shadow-lg"
                      : "bg-amber-300 dark:bg-amber-700 hover:bg-amber-400 dark:hover:bg-amber-600"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

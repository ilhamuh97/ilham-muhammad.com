"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function Hero() {
  return (
    <section
      id="hero"
      className="
        h-dvh flex items-center justify-center px-4 py-8 relative overflow-hidden
      "
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Enhanced Blue Sky Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-blue-300 to-cyan-400 dark:from-sky-900 dark:via-sky-800 dark:to-cyan-900">
        <div className="absolute inset-0 opacity-80 dark:opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-300/60 via-transparent to-cyan-300/60"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-sky-400/70 to-transparent rounded-full blur-3xl animate-float-up"></div>
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-cyan-400/70 to-transparent rounded-full blur-3xl animate-float-right"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-300/60 to-sky-300/60 rounded-full blur-2xl animate-float-circle"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-tl from-indigo-300/50 to-blue-300/50 rounded-full blur-3xl animate-float-down"
            style={{ animationDelay: "5s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-gradient-to-br from-sky-300/50 to-cyan-300/50 rounded-full blur-2xl animate-float-left"
            style={{ animationDelay: "7s" }}
          ></div>
        </div>
      </div>

      <div className="max-w-md mx-auto text-center space-y-6 relative z-10">
        <div className="relative w-48 h-48 mx-auto group">
          <div
            className="
              relative w-full h-full cursor-pointer transform transition-all duration-300 hover:scale-110 hover:rotate-3
              rounded-full border-4 border-white dark:border-white shadow-2xl
              bg-center bg-cover
              bg-[url('/assets/ilham-muhammad-day.jpg')]
              dark:bg-[url('/assets/ilham-muhammad-night.jpg')]
            "
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg animate-fade-in-up">
            Hi, my name is{" "}
            <span className="text-yellow-200 dark:text-yellow-400 hover:text-yellow-300 dark:hover:text-yellow-500  transition-all duration-300">
              Ilham
            </span>
          </h1>

          <p
            className="text-white/95 dark:text-white/95 text-sm sm:text-base leading-relaxed animate-fade-in-up drop-shadow-md"
            style={{ animationDelay: "0.2s" }}
          >
            I am a{" "}
            <span className="text-cyan-200 dark:text-cyan-400 font-semibold hover:text-cyan-300  transition-all duration-300 dark:hover:text-cyan-500">
              website developer
            </span>{" "}
            with a strong interest in visual computing, including fields like
            computer vision, image processing, and data visualization.
          </p>

          {/* Icon buttons */}
          <div
            className="flex justify-center gap-6 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://www.linkedin.com/in/ilhammuhammad-735b2b187/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-blue-600 transition-colors"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com/ilhamuh97"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-gray-800 transition-colors"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="mailto:ilham_muhammad@hotmail.com"
              aria-label="Email"
              className="text-white hover:text-green-600 transition-colors"
            >
              <FaEnvelope className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

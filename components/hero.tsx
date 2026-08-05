"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { revealContainer, revealItem } from "@/lib/motion";
import TextType from "@/components/TextType";
import SideRays from "@/components/SideRays";
import {
  heroSectionMeta,
  heroKicker,
  heroIntroTexts,
  heroBio,
  heroSocialLinks,
} from "@/data/hero";

interface HeroProps {
  loaded?: boolean;
}

export function Hero({ loaded = true }: HeroProps) {
  return (
    <section
      id="hero"
      className="h-dvh relative flex items-center px-6 lg:px-10 overflow-hidden bg-background"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SideRays
          origin="top-left"
          rayColor1="#f97316"
          rayColor2="#e5e5e5"
          intensity={1.1}
          spread={1.5}
          speed={1.2}
          saturation={1.1}
          blend={0.5}
          falloff={2.2}
          opacity={0.45}
        />
      </div>

      <span
        aria-hidden
        className="absolute right-2 top-16 lg:top-8 select-none pointer-events-none font-display font-medium text-foreground/5 leading-none"
        style={{ fontSize: "clamp(6rem, 14vw, 11rem)" }}
      >
        {heroSectionMeta.index}
      </span>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={revealContainer}
          className="order-2 lg:col-span-5 lg:order-2 flex flex-col items-center lg:items-end gap-6"
        >
          <motion.div
            variants={revealItem}
            className="relative w-36 h-36 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl border border-border overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105 bg-[url('/assets/ilham-muhammad-day.jpg')] dark:bg-[url('/assets/ilham-muhammad-night.jpg')]"
            />
          </motion.div>

          <motion.div variants={revealItem} className="flex items-center gap-4 sm:gap-5">
            <a
              href={heroSocialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href={heroSocialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href={heroSocialLinks.email}
              aria-label="Email"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={revealContainer}
          className="order-1 lg:col-span-7 lg:order-1 space-y-6"
        >
          <motion.p
            variants={revealItem}
            className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground"
          >
            {heroKicker}
          </motion.p>

          <motion.h1
            variants={revealItem}
            className="font-display font-semibold text-foreground leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            {loaded && (
                <TextType
                    text={heroIntroTexts}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    deletingSpeed={50}
                    cursorBlinkDuration={0.5}
                    className="text-4xl font-bold md:text-6xl"
                />
            )}
          </motion.h1>

          <motion.p
            variants={revealItem}
            className="max-w-xl text-sm sm:text-lg leading-relaxed text-muted-foreground"
          >
            {heroBio.map((segment, index) =>
              "break" in segment ? (
                <br key={index} />
              ) : (
                <span
                  key={index}
                  className={segment.emphasis ? "text-accent font-medium" : undefined}
                >
                  {segment.text}
                </span>
              )
            )}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { personalData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";
import { Download, Mail, MapPin, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 via-background to-background" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(251,191,36,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.2) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glowing Hero Avatar */}
        {personalData.avatarUrl && (
          <FadeIn>
            <div className="mb-6 inline-block relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 opacity-60 blur-md group-hover:opacity-100 transition duration-500" />
              <img
                src={personalData.avatarUrl}
                alt={personalData.name}
                className="relative w-auto h-auto max-w-[240px] sm:max-w-[300px] max-h-[420px] rounded-2xl object-contain border-2 border-orange-400/80 shadow-2xl shadow-orange-500/30"
              />
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.05}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-sm text-muted-foreground mb-6 glass-card">
            <MapPin size={14} className="text-orange-400" />
            {personalData.location}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              {personalData.name}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-2">
            {personalData.tagline}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-8">
            {personalData.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
              render={<a href={personalData.cvUrl} download />}
              nativeButton={false}
            >
              <Download size={18} className="mr-2" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500/20 hover:bg-orange-500/5 hover:border-orange-500/40 transition-all duration-300"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail size={18} className="mr-2" />
              Contact Me
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex items-center justify-center gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-orange-400 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-300"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-orange-400 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-300"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-orange-400 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} className="text-orange-400/40" />
      </motion.div>
    </section>
  );
}

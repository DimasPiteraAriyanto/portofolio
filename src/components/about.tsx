"use client";

import { personalData } from "@/lib/data";
import { CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";
import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
              <User size={20} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent ml-4" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="glass-card rounded-xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar */}
                <div className="shrink-0">
                  <div className="relative group">
                    <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 opacity-50 blur-md group-hover:opacity-100 transition duration-500" />
                    {personalData.avatarUrl ? (
                      <img
                        src={personalData.avatarUrl}
                        alt={personalData.name}
                        className="relative w-48 sm:w-56 h-auto aspect-[2/3] max-h-80 sm:max-h-96 rounded-2xl object-cover object-center border border-orange-400/50 shadow-xl"
                      />
                    ) : (
                      <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 flex items-center justify-center">
                        <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-orange-400 to-amber-300 bg-clip-text text-transparent">
                          {personalData.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bio */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
                    {personalData.tagline}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {personalData.bio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available for hire
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import { experiences } from "@/lib/data";
import { CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
              <Briefcase size={20} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent ml-4" />
          </div>
        </FadeIn>

        <StaggerContainer className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-amber-500/30 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                      <Briefcase size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-card rounded-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {exp.position}
                          </h3>
                          <p className="text-orange-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-orange-500/5 border border-orange-500/10 px-3 py-1 rounded-full w-fit">
                          {exp.duration}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.descriptions.map((desc, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400/60 mt-1.5 shrink-0" />
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

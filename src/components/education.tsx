"use client";

import { education } from "@/lib/data";
import { CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
              <GraduationCap size={20} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent ml-4" />
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-6">
          {education.map((edu, index) => (
            <StaggerItem key={index}>
              <div className="glass-card rounded-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                        <GraduationCap size={18} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          {edu.institution}
                        </h3>
                        <p className="text-orange-400 font-medium text-sm">
                          {edu.degree}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground bg-orange-500/5 border border-orange-500/10 px-3 py-1 rounded-full w-fit">
                      {edu.year}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-sm text-muted-foreground mt-3 ml-0 sm:ml-[52px]">
                      {edu.description}
                    </p>
                  )}
                </CardContent>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

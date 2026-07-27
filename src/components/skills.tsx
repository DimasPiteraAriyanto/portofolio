"use client";

import { skillCategories } from "@/lib/data";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Sparkles } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
              <Sparkles size={20} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Skills & Tech Stack</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent ml-4" />
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <StaggerItem key={category.title}>
                <div className="glass-card rounded-xl h-full transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 text-orange-400 group-hover:from-orange-500/20 group-hover:to-amber-500/20 transition-all duration-300">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-accent/80 hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/30 border border-transparent transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

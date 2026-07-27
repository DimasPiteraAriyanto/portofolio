"use client";

import { useState } from "react";
import { projects, ProjectItem } from "@/lib/data";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Rocket, ExternalLink, Image as ImageIcon, Eye } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Lightbox } from "@/components/lightbox";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const handleOpenGallery = (project: ProjectItem, index: number = 0) => {
    setSelectedProject(project);
    setInitialImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
              <Rocket size={20} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent ml-4" />
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Beberapa project yang pernah saya kerjakan. Setiap project dilengkapi
            dengan interactive gallery & screenshots. Klik pada project untuk melihat detail.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const firstImage = project.images?.[0];
            return (
              <StaggerItem key={index}>
                <div className="glass-card rounded-xl h-full flex flex-col group transition-all duration-300 overflow-hidden">
                  {/* Image Preview Banner */}
                  {firstImage && (
                    <div
                      onClick={() => handleOpenGallery(project, 0)}
                      className="relative h-48 sm:h-52 w-full overflow-hidden cursor-pointer group/img bg-black/40"
                    >
                      <img
                        src={firstImage.url}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover/img:opacity-60 transition-opacity" />

                      {/* View Gallery Badge Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-90 group-hover/img:scale-100 transition-transform">
                          <Eye size={14} />
                          View Gallery ({project.images.length})
                        </span>
                      </div>

                      {/* Photo Count Badge */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 backdrop-blur-md border border-orange-500/20 text-orange-300 flex items-center gap-1.5">
                        <ImageIcon size={12} />
                        {project.images.length} Photos
                      </div>
                    </div>
                  )}

                  {/* Colored bar separator */}
                  <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-amber-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3
                        onClick={() => handleOpenGallery(project, 0)}
                        className="text-lg font-semibold group-hover:text-orange-400 transition-colors cursor-pointer"
                      >
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-1 shrink-0">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md text-muted-foreground hover:text-orange-400 hover:bg-orange-400/10 transition-all"
                            title="Live Demo"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                            title="GitHub Repository"
                          >
                            <GithubIcon size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-orange-500/10">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="text-xs bg-orange-500/5 border border-orange-500/10 text-orange-300/80"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <button
                        onClick={() => handleOpenGallery(project, 0)}
                        className="text-xs font-medium text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-colors ml-auto"
                      >
                        Screenshots &rarr;
                      </button>
                    </div>
                  </CardContent>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-orange-500/20 hover:border-orange-500/40 hover:bg-orange-500/5"
              render={
                <a
                  href="https://github.com/DimasPiteraAriyanto"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
            >
              <GithubIcon size={18} className="mr-2" />
              View More on GitHub
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Gallery Lightbox Modal */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        project={selectedProject}
        initialIndex={initialImageIndex}
      />
    </section>
  );
}

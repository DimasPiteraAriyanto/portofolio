"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from "lucide-react";
import { ProjectItem } from "@/lib/data";
import { GithubIcon } from "@/components/icons";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem | null;
  initialIndex?: number;
}

export function Lightbox({
  isOpen,
  onClose,
  project,
  initialIndex = 0,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const handleNext = useCallback(() => {
    if (!project || !project.images.length) return;
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  }, [project]);

  const handlePrev = useCallback(() => {
    if (!project || !project.images.length) return;
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  }, [project]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !project || !project.images.length) return null;

  const currentImage = project.images[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl glass-card border border-orange-500/30 overflow-hidden shadow-2xl shadow-orange-500/10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-orange-500/15 bg-background/50 backdrop-blur-md">
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                {project.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                Screenshot {currentIndex + 1} of {project.images.length}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 transition-all"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-orange-500/20 text-muted-foreground hover:text-foreground hover:bg-orange-500/5 transition-all"
                >
                  <GithubIcon size={14} />
                  GitHub
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-orange-500/10 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Main Image Viewer */}
          <div className="relative flex-1 min-h-[300px] sm:min-h-[420px] bg-black/60 flex items-center justify-center overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentImage.url}
                alt={currentImage.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="max-h-[60vh] w-auto object-contain select-none"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-3 rounded-full bg-background/60 backdrop-blur-md border border-orange-500/20 text-foreground hover:text-orange-400 hover:border-orange-500/50 hover:bg-background/90 transition-all opacity-80 group-hover:opacity-100 shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-3 rounded-full bg-background/60 backdrop-blur-md border border-orange-500/20 text-foreground hover:text-orange-400 hover:border-orange-500/50 hover:bg-background/90 transition-all opacity-80 group-hover:opacity-100 shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            {/* Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-12 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Maximize2 size={14} className="text-orange-400" />
                <h4 className="text-sm font-semibold text-white">
                  {currentImage.title}
                </h4>
              </div>
              <p className="text-xs text-muted-foreground/90 max-w-3xl">
                {currentImage.caption}
              </p>
            </div>
          </div>

          {/* Thumbnail Bar */}
          {project.images.length > 1 && (
            <div className="flex items-center justify-center gap-3 p-4 bg-background/40 backdrop-blur-md border-t border-orange-500/15 overflow-x-auto">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border transition-all ${
                    idx === currentIndex
                      ? "border-orange-400 ring-2 ring-orange-500/30 scale-105"
                      : "border-border opacity-60 hover:opacity-100 hover:border-orange-500/30"
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

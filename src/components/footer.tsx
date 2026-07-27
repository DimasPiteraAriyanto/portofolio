"use client";

import { personalData } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="mb-8 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {personalData.name}. Built with{" "}
            <Heart size={12} className="inline text-orange-400 fill-orange-400" />{" "}
            using Next.js
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-orange-400 hover:bg-orange-500/5 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-orange-400 hover:bg-orange-500/5 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2 rounded-lg text-muted-foreground hover:text-orange-400 hover:bg-orange-500/5 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

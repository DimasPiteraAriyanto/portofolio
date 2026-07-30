"use client";

import { personalData } from "@/lib/data";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";
import { Mail, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
              <Send size={20} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Get In Touch</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent ml-4" />
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Tertarik untuk bekerja sama atau punya pertanyaan? Jangan ragu untuk
            menghubungi saya melalui channel di bawah ini.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Email Card */}
          <FadeIn delay={0.1}>
            <a href={`mailto:${personalData.email}`} className="block h-full">
              <div className="glass-card rounded-xl group cursor-pointer h-full transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 text-orange-400 group-hover:from-orange-500/20 group-hover:to-amber-500/20 transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-0.5">
                      Email
                    </p>
                    <p className="font-medium group-hover:text-orange-400 transition-colors">
                      {personalData.email}
                    </p>
                  </div>
                </CardContent>
              </div>
            </a>
          </FadeIn>

          {/* Location Card */}
          <FadeIn delay={0.15}>
            <div className="glass-card rounded-xl h-full">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 text-emerald-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-0.5">
                    Location
                  </p>
                  <p className="font-medium">{personalData.location}</p>
                </div>
              </CardContent>
            </div>
          </FadeIn>

          {/* GitHub Card */}
          <FadeIn delay={0.2}>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="glass-card rounded-xl group cursor-pointer h-full transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gray-500/10 to-gray-600/10 text-gray-400 group-hover:text-foreground transition-colors">
                    <GithubIcon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-0.5">
                      GitHub
                    </p>
                    <p className="font-medium group-hover:text-orange-400 transition-colors">
                      {personalData.github.replace("https://", "")}
                    </p>
                  </div>
                </CardContent>
              </div>
            </a>
          </FadeIn>

          {/* LinkedIn Card */}
          <FadeIn delay={0.25}>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="glass-card rounded-xl group cursor-pointer h-full transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-600/10 text-orange-400 group-hover:from-orange-500/20 group-hover:to-amber-600/20 transition-all">
                    <LinkedinIcon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-0.5">
                      LinkedIn
                    </p>
                    <p className="font-medium group-hover:text-orange-400 transition-colors">
                      {personalData.linkedin.replace("https://", "")}
                    </p>
                  </div>
                </CardContent>
              </div>
            </a>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href={`mailto:${personalData.email}`}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 cursor-pointer"
            >
              <Mail size={18} className="mr-2" />
              Send me an Email
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

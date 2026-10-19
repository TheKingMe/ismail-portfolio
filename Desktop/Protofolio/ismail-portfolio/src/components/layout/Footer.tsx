"use client";

import { Terminal, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { portfolioContent } from "@/data/portfolio-content";

export function Footer() {
  const { profile } = portfolioContent;

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/70 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-sm relative overflow-hidden transition-colors duration-300">
      {/* Decorative gradient glow at footer bottom */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/10 dark:bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-slate-900 dark:text-white font-bold text-lg tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-md leading-relaxed text-sm">
              {profile.valueProposition}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Quick Jump Links */}
          <div className="space-y-3">
            <h4 className="text-slate-900 dark:text-white font-semibold text-xs tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#overview" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Skills Matrix
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Enterprise Work
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  SaaS & E-Commerce
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="space-y-3">
            <h4 className="text-slate-900 dark:text-white font-semibold text-xs tracking-wider uppercase">
              Connect & Verify
            </h4>
            <div className="flex flex-col space-y-2.5">
              <a
                href={`https://wa.me/${profile.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors font-medium"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp: {profile.phone}</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span>LinkedIn Network</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>{profile.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © 2025 {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">
              Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
            </span>
            <a
              href="/#overview"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors inline-flex items-center gap-1 shadow-2xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

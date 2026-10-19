"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  AlertCircle,
  Lightbulb,
  Trophy,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { portfolioContent, Project } from "@/data/portfolio-content";

type FilterType = "all" | "enterprise" | "saas" | "data-cloud" | "ecommerce" | "ai-hardware";

export function ProjectGrid() {
  const { projects } = portfolioContent;
  const [filter, setFilter] = useState<FilterType>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filterTabs: { key: FilterType; label: string; count: number }[] = [
    { key: "all", label: "All Case Studies", count: projects.length },
    {
      key: "enterprise",
      label: "Enterprise LMS",
      count: projects.filter((p) => p.category === "enterprise").length,
    },
    {
      key: "saas",
      label: "Full-Stack SaaS",
      count: projects.filter((p) => p.category === "saas").length,
    },
    {
      key: "data-cloud",
      label: "Data & Cloud",
      count: projects.filter((p) => p.category === "data-cloud").length,
    },
    {
      key: "ecommerce",
      label: "Freelance & E-Com",
      count: projects.filter((p) => p.category === "ecommerce").length,
    },
    {
      key: "ai-hardware",
      label: "AI & Embedded IoT",
      count: projects.filter((p) => p.category === "ai-hardware").length,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredProjects.length);
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const getCategoryBadgeVariant = (
    category: Project["category"]
  ): "default" | "primary" | "secondary" | "outline" | "success" | "warning" | "glow" => {
    switch (category) {
      case "enterprise":
        return "primary";
      case "saas":
        return "secondary";
      case "data-cloud":
        return "glow";
      case "ecommerce":
        return "warning";
      case "ai-hardware":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900/40 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="glow" size="sm">
                <FolderGit2 className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                Featured Case Studies
              </Badge>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                ARCHITECTURE, SCALE & COMMERCIAL REVENUE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Selected Enterprise & SaaS Deployments
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Real-world software architectures delivering low-latency operations, resilient data
              workflows, and high-converting commercial e-commerce engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 p-1.5 rounded-2xl backdrop-blur-md shadow-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleFilterChange(tab.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                  filter === tab.key
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-slate-900"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    filter === tab.key
                      ? "bg-indigo-700 text-indigo-100"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {paginatedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex"
              >
                <div className="w-full flex flex-col justify-between rounded-3xl bg-slate-50/90 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700/90 transition-all duration-300 shadow-sm dark:shadow-xl overflow-hidden group">
                  {/* Card Top Header */}
                  <div className="p-6 sm:p-8 pb-4">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={getCategoryBadgeVariant(project.category)}
                          size="sm"
                        >
                          {project.categoryLabel}
                        </Badge>
                      </div>

                      {project.featuredMetric && (
                        <div className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-semibold flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                          <span>{project.featuredMetric.value}</span>
                          <span className="text-slate-500 dark:text-slate-400 font-normal">
                            {project.featuredMetric.label}
                          </span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Problem & Solution Sections */}
                  <div className="px-6 sm:px-8 py-2 space-y-4 flex-1">
                    {/* Problem Box */}
                    <div className="rounded-2xl bg-rose-50/80 dark:bg-rose-950/15 border border-rose-200 dark:border-rose-500/20 p-4 space-y-1.5">
                      <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-semibold text-xs uppercase tracking-wider">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>The Problem</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution Box */}
                    <div className="rounded-2xl bg-cyan-50/80 dark:bg-cyan-950/15 border border-cyan-200 dark:border-cyan-500/20 p-4 space-y-1.5">
                      <div className="flex items-center gap-2 text-cyan-800 dark:text-cyan-300 font-semibold text-xs uppercase tracking-wider">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Architectural Solution</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Architecture & Engineering Highlights
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                        {project.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 text-xs font-mono text-slate-700 dark:text-slate-200 shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact Box */}
                    <div className="rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/30 p-4 space-y-1.5 mt-2">
                      <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                        <Trophy className="w-3.5 h-3.5" />
                        <span>Business & Technical Impact</span>
                      </div>
                      <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200/90 font-medium leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer / Quick Action */}
                  <div className="p-6 sm:p-8 pt-4 border-t border-slate-200 dark:border-slate-800/60 mt-4 flex items-center justify-between gap-2">
                    <Link
                      href={`/projects/${project.id === "stock-saas" ? "stocksaas" : project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 px-3.5 py-1.5 rounded-lg shadow-2xs"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                    </Link>

                    <a
                      href="/#contact"
                      className="text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      Inquire &rarr;
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
              Showing{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                {startIndex + 1}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                {endIndex}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                {filteredProjects.length}
              </span>{" "}
              case studies
            </div>

            <nav
              aria-label="Project pagination"
              className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 p-1.5 rounded-2xl backdrop-blur-md shadow-xs"
            >
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 hover:text-slate-950 dark:hover:text-white"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-8 h-8 rounded-xl text-xs font-medium transition-all flex items-center justify-center ${
                      currentPage === pageNumber
                        ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30 font-semibold"
                        : "text-slate-700 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900 hover:text-slate-950 dark:hover:text-white"
                    }`}
                    aria-current={currentPage === pageNumber ? "page" : undefined}
                    aria-label={`Page ${pageNumber}`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 hover:text-slate-950 dark:hover:text-white"
                aria-label="Next page"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}

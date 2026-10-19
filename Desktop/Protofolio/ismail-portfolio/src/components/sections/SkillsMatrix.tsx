"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Cloud,
  TrendingUp,
  Cpu,
  Database,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { portfolioContent } from "@/data/portfolio-content";

export function SkillsMatrix() {
  const { skillsMatrix } = portfolioContent;
  const [activeLens, setActiveLens] = useState<"all" | "enterprise" | "freelance">("all");

  const categories = [
    {
      key: "frontend",
      data: skillsMatrix.frontend,
      icon: Code,
      accentBorder: "border-cyan-500/30",
      accentGlow: "group-hover:shadow-cyan-500/10",
      iconColor: "text-cyan-600 dark:text-cyan-400",
      chipClass:
        "bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-500/30 dark:hover:bg-cyan-900/50",
      enterpriseSkills: ["React", "Angular", "Tailwind CSS"],
      freelanceSkills: ["Next.js", "React Native", "Tailwind CSS"],
    },
    {
      key: "backend",
      data: skillsMatrix.backend,
      icon: Server,
      accentBorder: "border-indigo-500/30",
      accentGlow: "group-hover:shadow-indigo-500/10",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      chipClass:
        "bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-500/30 dark:hover:bg-indigo-900/50",
      enterpriseSkills: ["Java", "Spring Boot", "Node.js"],
      freelanceSkills: ["Node.js", "Express", "PHP"],
    },
    {
      key: "dataCloud",
      data: skillsMatrix.dataCloud,
      icon: Cloud,
      accentBorder: "border-emerald-500/30",
      accentGlow: "group-hover:shadow-emerald-500/10",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      chipClass:
        "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-500/30 dark:hover:bg-emerald-900/50",
      enterpriseSkills: ["PostgreSQL", "Docker", "Apache Airflow"],
      freelanceSkills: ["AWS (Amplify, S3)", "Docker", "PostgreSQL"],
    },
    {
      key: "digitalBusiness",
      data: skillsMatrix.digitalBusiness,
      icon: TrendingUp,
      accentBorder: "border-amber-500/30",
      accentGlow: "group-hover:shadow-amber-500/10",
      iconColor: "text-amber-600 dark:text-amber-400",
      chipClass:
        "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-500/30 dark:hover:bg-amber-900/50",
      enterpriseSkills: [],
      freelanceSkills: ["Meta Ads Manager", "Shopify", "YouCan"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-100/50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="sm">
                <Cpu className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                Technical Competencies
              </Badge>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                PROVEN ARCHITECTURES & TOOLING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skills Matrix & Domain Expertise
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Carefully calibrated stack covering enterprise-level reliability, distributed data
              orchestration, and modern digital commerce conversion tooling.
            </p>
          </div>

          {/* Interactive Lens Switcher */}
          <div className="flex items-center bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-1 rounded-xl self-start md:self-auto shadow-xs">
            <button
              onClick={() => setActiveLens("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeLens === "all"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveLens("enterprise")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeLens === "enterprise"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              Enterprise Lens
            </button>
            <button
              onClick={() => setActiveLens("freelance")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeLens === "freelance"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              Freelance & Growth
            </button>
          </div>
        </div>

        {/* 4 Categorized Columns / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group h-full"
              >
                <div
                  className={`h-full flex flex-col rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/90 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 shadow-xs dark:shadow-lg ${cat.accentGlow}`}
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-950 border ${cat.accentBorder} flex items-center justify-center`}
                    >
                      <Icon className={`w-5 h-5 ${cat.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Tier 1
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                    {cat.data.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                    {cat.data.description}
                  </p>

                  {/* Skills Chips */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                    <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider block mb-2">
                      Core Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cat.data.skills.map((skill) => {
                        const isEnterprise = cat.enterpriseSkills.includes(skill);
                        const isFreelance = cat.freelanceSkills.includes(skill);

                        const isHighlighted =
                          activeLens === "all" ||
                          (activeLens === "enterprise" && isEnterprise) ||
                          (activeLens === "freelance" && isFreelance);

                        return (
                          <div
                            key={skill}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 cursor-default flex items-center gap-1.5 ${
                              isHighlighted
                                ? cat.chipClass
                                : "bg-slate-100/60 dark:bg-slate-950/30 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800/50 opacity-40"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                            <span>{skill}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout / Architecture Guarantee */}
        <div className="mt-12 rounded-2xl bg-indigo-50/70 dark:bg-gradient-to-r dark:from-indigo-950/40 dark:via-slate-900/60 dark:to-cyan-950/40 border border-indigo-200 dark:border-indigo-500/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Enterprise Quality Standards & Clean Architecture
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Type-safe pipelines, containerized microservices, high-test coverage, and compliant payment flows.
              </p>
            </div>
          </div>
          <a
            href="/#projects"
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 flex items-center gap-1 shrink-0"
          >
            Inspect implementation projects &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

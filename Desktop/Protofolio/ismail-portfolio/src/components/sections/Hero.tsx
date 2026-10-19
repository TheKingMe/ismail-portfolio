"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Layers,
  Sparkles,
  Server,
  ShoppingCart,
  CheckCircle2,
  Cpu,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioContent } from "@/data/portfolio-content";

export function Hero() {
  const { profile, stats } = portfolioContent;

  return (
    <section
      id="overview"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background ambient glowing mesh & grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-cyan-500/10 dark:from-indigo-600/15 dark:via-purple-600/10 dark:to-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/10 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Badges / Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-700/70 text-xs text-slate-700 dark:text-slate-300 backdrop-blur-md shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-800 dark:text-slate-200">{profile.status}</span>
          </div>

          <Badge variant="primary" size="sm" className="hidden sm:inline-flex">
            <Sparkles className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
            Dual-Focus: Enterprise Scale & Growth E-Com
          </Badge>
        </motion.div>

        {/* Main Grid: Headline & Dual Persona Value Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
                  {profile.name}
                </span>
                <span className="h-px w-8 bg-indigo-500/40" />
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {profile.title}
                </span>
              </div>

              {/* Exact Value Proposition from prompt */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Building scalable web applications,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-300 dark:to-cyan-400">
                  data pipelines
                </span>
                , and high-converting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400">
                  e-commerce ecosystems
                </span>
                .
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              Architecting mission-critical distributed systems for enterprise teams while
              crafting revenue-driven custom storefronts, SaaS engines, and paid digital acquisition
              funnels for growing e-commerce businesses.
            </motion.p>

            {/* CTAs: Exact 2 required buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                href="/#projects"
                variant="primary"
                size="lg"
                leftIcon={<Layers className="w-4 h-4" />}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Enterprise Work
              </Button>

              <Button
                href="/#contact"
                variant="secondary"
                size="lg"
                leftIcon={<Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
              >
                Hire for Freelance
              </Button>
            </motion.div>

            {/* Micro verification pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-3 text-xs text-slate-500 dark:text-slate-400"
            >
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                Spring Boot & Cloud Scale
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                End-to-End Next.js / React
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                Meta Ads & High-ROAS Funnels
              </span>
            </motion.div>
          </div>

          {/* Right Column: Interactive Dual-Track Architecture Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-indigo-200 via-slate-200 to-slate-300/40 dark:from-indigo-500/30 dark:via-slate-700/50 dark:to-slate-800/20 shadow-xl dark:shadow-2xl dark:shadow-indigo-950/40">
              <div className="rounded-3xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl p-6 sm:p-7 space-y-6 border border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                      ismail-portfolio.matrix
                    </span>
                  </div>
                  <Badge variant="outline" size="sm" className="font-mono text-[10px]">
                    PROD-READY
                  </Badge>
                </div>

                {/* Track 1: Enterprise Recruiter Value */}
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-indigo-200/80 dark:border-indigo-500/20 p-4.5 space-y-2.5 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <Server className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        Enterprise Architecture Track
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-indigo-700 dark:text-indigo-300/80 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded">
                      SCALE & ETL
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Zero-downtime migrations, Spring Boot microservices, Apache Airflow workflows,
                    and PostgreSQL data modeling built for reliability.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Spring Boot", "Airflow", "PostgreSQL", "Docker", "Angular"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 text-[11px] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Track 2: Freelance Client Value */}
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-cyan-200/80 dark:border-cyan-500/20 p-4.5 space-y-2.5 hover:border-cyan-400 dark:hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                        <ShoppingCart className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        Freelance & SaaS Engine Track
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-300/80 bg-cyan-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded">
                      REVENUE & CRO
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Custom COD inventory systems, fast Shopify/YouCan storefronts, and high-ROAS Meta
                    Ad tracking (CAPI) tailored to drive real sales.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Next.js", "Shopify", "YouCan", "Meta CAPI", "COD Invoicing"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 text-[11px] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" /> Full-Stack Rigor
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Commercial Impact
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quantitative Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-200 dark:border-slate-800/80 pt-10"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800/60 shadow-xs hover:border-slate-300 dark:hover:border-slate-700/80 transition-all hover:-translate-y-0.5"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-600 dark:from-white dark:via-slate-100 dark:to-indigo-200 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-300 mt-1">
                {stat.label}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                {stat.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { Hero } from "@/components/sections/Hero";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { ContactForm } from "@/components/sections/ContactForm";
import { Badge } from "@/components/ui/badge";
import { portfolioContent } from "@/data/portfolio-content";
import {
  Server,
  TrendingUp,
  CheckCircle2,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/icons";

export default function Home() {
  const { testimonials } = portfolioContent;

  return (
    <div className="flex flex-col gap-0 transition-colors duration-300">
      {/* Hero Section */}
      <Hero />

      {/* Dual Advantage Architecture Breakdown */}
      <section className="py-20 bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/80 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="primary" size="sm">
              The Dual-Engine Advantage
            </Badge>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight sm:text-4xl">
              Why Companies & Founders Choose Ismail
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Most developers only know code, while most marketers only understand ads. Ismail
              unifies deep backend software architecture with conversion-focused digital commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Enterprise Recruiters & Tech Leads */}
            <div className="rounded-3xl bg-white dark:bg-slate-950/80 border border-indigo-200 dark:border-indigo-500/30 p-8 space-y-6 relative overflow-hidden group hover:border-indigo-400 dark:hover:border-indigo-500/50 shadow-xs dark:shadow-none transition-all">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 dark:bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                    Enterprise Engineering Lens
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    For Tech Directors & Engineering Leads
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Need an engineer who writes clean, testable code that integrates seamlessly into
                complex CI/CD pipelines and enterprise architectures?
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">Spring Boot & Microservices:</strong> Robust REST
                    APIs, secure JWT/RBAC auth, and asynchronous event processing.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">Data Pipeline Reliability:</strong> Automated
                    Airflow DAGs, PostgreSQL database indexing, and containerized Docker environments.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">Enterprise Frontends:</strong> Modular Angular and
                    Next.js applications with design-system consistency and accessibility.
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="/projects/novitus"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                >
                  Review Novitus Platform Enterprise Case Study &rarr;
                </a>
              </div>
            </div>

            {/* For Freelance E-Commerce & SaaS Clients */}
            <div className="rounded-3xl bg-white dark:bg-slate-950/80 border border-cyan-200 dark:border-cyan-500/30 p-8 space-y-6 relative overflow-hidden group hover:border-cyan-400 dark:hover:border-cyan-500/50 shadow-xs dark:shadow-none transition-all">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600/10 dark:bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
                    Commercial Growth Lens
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    For E-Commerce Brands & SaaS Founders
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Need a technical partner who doesn't just build pages, but builds conversion engines
                that reduce checkout friction and maximize ad return?
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">Cash on Delivery (COD) Automation:</strong> Bespoke
                    invoicing, stock allocation, and shipping reconciliation with StockSaaS logic.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">High-Converting Storefronts:</strong> Custom
                    Shopify and YouCan setups with 1-click mobile checkouts and sub-second loading speeds.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">Data-Driven Meta Acquisition:</strong> Server-side
                    Meta Conversions API (CAPI) setups to stop ad signal decay and lift ROAS.
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="/projects/stocksaas"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300"
                >
                  Read StockSaaS Logistics Case Study &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <SkillsMatrix />

      {/* Featured Projects Grid Section */}
      <ProjectGrid />

      {/* Testimonial & Industry Feedback Strip */}
      <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
              Endorsements
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Trusted by Technical Leads & Business Owners
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-indigo-500/30 dark:text-indigo-500/40" />
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.author}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.role} • {t.company}
                    </p>
                  </div>
                  <Badge variant="outline" size="sm">
                    Verified Colleague
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-gradient-to-b from-slate-50 via-indigo-50/50 to-slate-50 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-950 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ready to Accelerate Your Architecture or E-Commerce Growth?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Whether you need a dedicated senior full-stack engineer or a battle-tested e-commerce
            growth technologist, let's discuss your timeline and deliverables.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button
              href={`https://wa.me/${portfolioContent.profile.whatsappNumber}?text=${encodeURIComponent(
                "Hello Ismail! I saw your portfolio and would like to discuss an opportunity."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              leftIcon={<WhatsAppIcon className="w-4 h-4 text-emerald-300" />}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30"
            >
              Chat on WhatsApp
            </Button>
            <Button
              href="/#contact"
              variant="outline"
              size="lg"
            >
              Send Project Brief
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}

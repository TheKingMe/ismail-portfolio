"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  Mail,
  MessageSquare,
  ArrowUpRight,
  PhoneCall,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioContent } from "@/data/portfolio-content";

export function ContactForm() {
  const { profile } = portfolioContent;
  const whatsappNumber = profile.whatsappNumber || "212681508291";
  const formattedPhone = profile.phone || "+212 681 508 291";

  const [inquiryType, setInquiryType] = useState<
    "enterprise" | "freelance" | "saas" | "advisory"
  >("enterprise");

  const [formState, setFormState] = useState({
    name: "",
    organization: "",
    timeline: "Immediate / Next 30 Days",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const inquiryLabels: Record<string, string> = {
      enterprise: "Enterprise Role / Contract",
      freelance: "Freelance E-Commerce / Storefront",
      saas: "Full-Stack SaaS Platform",
      advisory: "CRO & Performance Consulting",
    };

    const textLines = [
      `*Hello Ismail!*`,
      ``,
      `I saw your portfolio and would like to discuss an opportunity:`,
      ``,
      `*Name:* ${formState.name.trim()}`,
      formState.organization ? `*Company / Store:* ${formState.organization.trim()}` : null,
      `*Inquiry Type:* ${inquiryLabels[inquiryType] || inquiryType}`,
      `*Timeline:* ${formState.timeline}`,
      ``,
      `*Project Details:*`,
      formState.message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");

    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textLines)}`;
    setGeneratedWhatsAppUrl(waUrl);
    setIsSubmitted(true);

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-100/50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-600/5 dark:bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="success" size="sm">
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Direct WhatsApp Engagement
            </Badge>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              FASTEST RESPONSE TIME • GMT / CET / US TIME ZONES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let’s Discuss Your Architecture or E-Commerce Growth
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Message Ismail directly on WhatsApp at{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
              {formattedPhone}
            </span>
            . Fill out the quick brief below to pre-populate your project details, or tap the instant chat button.
          </p>
        </div>

        {/* Quick 1-Click WhatsApp Direct Chat Banner */}
        <div className="mb-10 rounded-2xl p-[1px] bg-gradient-to-r from-emerald-500/40 via-teal-500/30 to-indigo-500/40 shadow-sm">
          <div className="rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    Need an immediate reply?
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Start a direct WhatsApp conversation with Ismail Mamad at{" "}
                  <strong className="text-slate-900 dark:text-white font-mono">{formattedPhone}</strong>
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hello Ismail! I saw your portfolio and would like to connect about an opportunity or project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-600/25 transition-all shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Direct Line
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Ismail Mamad
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Full-Stack Software Engineer & Digital Solutions Builder based in Morocco,
                  collaborating with teams worldwide across GMT/CET and US-compatible time zones.
                </p>
              </div>

              {/* Direct Info list */}
              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                {/* WhatsApp Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">
                      WhatsApp & Mobile
                    </span>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium font-mono text-emerald-600 dark:text-emerald-400 hover:underline transition-colors"
                    >
                      {formattedPhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">
                      Location & Working Model
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {profile.location}
                    </span>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">
                      Response Speed
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      Usually within a few hours on WhatsApp
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono block mb-3">
                  Professional Verification
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white flex items-center justify-center gap-2 transition-all shadow-2xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white flex items-center justify-center gap-2 transition-all shadow-2xs"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* SLA / Assurance badge */}
            <div className="rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 p-5 flex items-center gap-3.5 shadow-xs">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Dual-Discipline Advantage:
                </strong>{" "}
                Clean maintainable software architecture combined with actual business growth
                experience.
              </p>
            </div>
          </div>

          {/* Right Column: WhatsApp Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-8 backdrop-blur-xl shadow-sm dark:shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    WhatsApp Message Ready!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-slate-900 dark:text-white font-semibold">{formState.name}</span>.
                    Your project details have been formatted for WhatsApp.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    {generatedWhatsAppUrl && (
                      <a
                        href={generatedWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-600/30 transition-all"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Open WhatsApp Chat Again</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({
                          name: "",
                          organization: "",
                          timeline: "Immediate / Next 30 Days",
                          message: "",
                        });
                      }}
                    >
                      Reset / Send Another
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type Radio / Pill Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      I am reaching out regarding:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { key: "enterprise", label: "Enterprise Role" },
                        { key: "freelance", label: "Freelance E-Com" },
                        { key: "saas", label: "SaaS Platform" },
                        { key: "advisory", label: "Consulting / CRO" },
                      ].map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => setInquiryType(item.key as any)}
                          className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition-all ${
                            inquiryType === item.key
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                              : "bg-slate-50 dark:bg-slate-950/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        Company / Store Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Novitus Labs / Apex Store"
                        value={formState.organization}
                        onChange={(e) =>
                          setFormState({ ...formState, organization: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Timeline Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Target Timeline
                    </label>
                    <select
                      value={formState.timeline}
                      onChange={(e) =>
                        setFormState({ ...formState, timeline: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    >
                      <option>Immediate / Next 30 Days</option>
                      <option>Next Quarter (1-3 months)</option>
                      <option>Exploring / Long-term hire</option>
                    </select>
                  </div>

                  {/* Message / Scope */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Project Details or Job Role Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Outline the architecture challenge, key technologies, or commercial goals..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-sm font-semibold shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Send Project Brief via WhatsApp</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>

                  <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
                    Clicking will open WhatsApp with your message pre-formatted. Direct communication with Ismail Mamad.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  ArrowLeft,
  Calendar,
  Trophy,
  Zap,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  Lock,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioContent } from "@/data/portfolio-content";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found | Ismail Mamad",
    };
  }

  const { frontmatter } = project;

  return {
    title: `${frontmatter.title} | Case Study by Ismail Mamad`,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      images: [
        {
          url: frontmatter.featuredImage,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
  };
}

const mdxComponents = {
  Badge,
  Callout: ({
    type = "info",
    children,
  }: {
    type?: "info" | "warning" | "success";
    children: React.ReactNode;
  }) => {
    const styles = {
      info: "border-indigo-200 dark:border-indigo-500/30 bg-indigo-50/70 dark:bg-indigo-950/20 text-indigo-900 dark:text-indigo-200",
      warning: "border-amber-200 dark:border-amber-500/30 bg-amber-50/70 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200",
      success: "border-emerald-200 dark:border-emerald-500/30 bg-emerald-50/70 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200",
    };
    return (
      <div className={`my-6 rounded-2xl border p-5 text-sm leading-relaxed ${styles[type]}`}>
        {children}
      </div>
    );
  },
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;
  const { projects } = portfolioContent;
  const currentIndex = projects.findIndex(
    (p) =>
      p.id === slug ||
      (p.id === "stocksaas" && slug === "stock-saas") ||
      (p.id === "novitus" && slug === "novitus-platform")
  );
  const currentProject = currentIndex >= 0 ? projects[currentIndex] : null;

  const liveUrl =
    frontmatter.liveUrl ||
    (currentProject?.liveUrl && currentProject.liveUrl !== "#" ? currentProject.liveUrl : undefined);

  const githubUrl =
    frontmatter.githubUrl ||
    (currentProject?.githubUrl && currentProject.githubUrl !== "#" ? currentProject.githubUrl : undefined);

  const isPrivateRepo =
    frontmatter.isPrivateRepo !== undefined
      ? frontmatter.isPrivateRepo
      : (!githubUrl && (frontmatter.category?.toLowerCase().includes("enterprise") || slug === "novitus" || slug === "novitus-platform"));

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors group px-3.5 py-2 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Studies</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="space-y-6 pb-10 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-3">
            {frontmatter.category && (
              <Badge variant="primary" size="md">
                {frontmatter.category}
              </Badge>
            )}

            {frontmatter.date && (
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={frontmatter.date}>{frontmatter.date}</time>
              </div>
            )}

            {frontmatter.featuredMetric && (
              <div className="ml-auto px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-semibold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>{frontmatter.featuredMetric.value}</span>
                <span className="text-slate-500 dark:text-slate-400 font-normal">
                  {frontmatter.featuredMetric.label}
                </span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {frontmatter.title}
            </h1>
            {frontmatter.subtitle && (
              <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium">
                {frontmatter.subtitle}
              </p>
            )}
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {frontmatter.description}
          </p>

          {/* Action Links Bar: Live Demo & GitHub Repo */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Live Demo / Storefront</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-95 shadow-2xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}

            {isPrivateRepo && (
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono shadow-2xs">
                <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Enterprise IP / Client NDA Protected</span>
              </div>
            )}
          </div>

          {/* Tech Stack Badges */}
          {frontmatter.techStack.length > 0 && (
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Technologies & Architecture
              </span>
              <div className="flex flex-wrap gap-2">
                {frontmatter.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs font-mono text-slate-700 dark:text-slate-200 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Impact Banner */}
          {frontmatter.impact && (
            <div className="rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/30 p-4.5 flex items-start gap-3">
              <Trophy className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 block mb-0.5">
                  Verified Outcome
                </span>
                <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200/90 font-medium leading-relaxed">
                  {frontmatter.impact}
                </p>
              </div>
            </div>
          )}
        </header>

        {/* MDX Content Area with Tailwind Typography Prose */}
        <div className="pt-10">
          <div
            className="prose prose-slate dark:prose-invert prose-indigo max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
              prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-200 dark:prose-h2:border-slate-800/80 prose-h2:pb-3 prose-h2:mt-10
              prose-h3:text-xl prose-h3:text-indigo-600 dark:prose-h3:text-indigo-300 prose-h3:mt-8
              prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-base
              prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:text-indigo-500 dark:hover:prose-a:text-indigo-300
              prose-strong:text-slate-900 dark:prose-strong:text-white
              prose-code:text-indigo-600 dark:prose-code:text-indigo-300 prose-code:font-mono prose-code:bg-slate-100 dark:prose-code:bg-slate-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-slate-900 dark:prose-pre:bg-slate-900/90 prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-2xl
              prose-blockquote:border-l-indigo-500 prose-blockquote:bg-slate-100/70 dark:prose-blockquote:bg-slate-900/40 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-xl prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-300
              prose-table:text-sm prose-th:text-slate-900 dark:prose-th:text-white prose-th:border-slate-200 dark:prose-th:border-slate-800 prose-td:border-slate-200 dark:prose-td:border-slate-800/60"
          >
            <MDXRemote source={content} components={mdxComponents} />
          </div>
        </div>

        {/* Sequential Case Study Pagination Navigation */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Case Study Navigation
            </span>
            {currentIndex >= 0 && (
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Project {currentIndex + 1} of {projects.length}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="group p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-2 shadow-2xs"
              >
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>Previous Case Study</span>
                </div>
                <div className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                  {prevProject.title}
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="group p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-2 text-right sm:items-end shadow-2xs"
              >
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <span>Next Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                  {nextProject.title}
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>
        </div>

        {/* Call to Action Footer */}
        <footer className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Interested in similar architectural results?
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Ismail Mamad is available for senior engineering contracts and digital solutions scoping.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button href="/#contact" variant="primary" size="md">
              Start Project Inquiry
            </Button>
            <Button href="/#projects" variant="outline" size="md">
              More Case Studies
            </Button>
          </div>
        </footer>
      </div>
    </article>
  );
}

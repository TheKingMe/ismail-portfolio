import React from "react";

export default function LoadingProject() {
  return (
    <article className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-pulse">
        {/* Back Link Skeleton */}
        <div className="mb-8">
          <div className="w-36 h-9 rounded-lg bg-slate-200 dark:bg-slate-800/80" />
        </div>

        {/* Header Skeleton */}
        <header className="space-y-6 pb-10 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-24 h-6 rounded-full bg-indigo-200/60 dark:bg-indigo-900/40" />
              <div className="w-20 h-4 rounded-md bg-slate-200 dark:bg-slate-800/70" />
            </div>
            <div className="w-28 h-6 rounded-full bg-slate-200 dark:bg-slate-800/80" />
          </div>

          <div className="space-y-3">
            <div className="w-3/4 h-10 rounded-xl bg-slate-300 dark:bg-slate-800" />
            <div className="w-1/2 h-6 rounded-lg bg-slate-200 dark:bg-slate-850" />
          </div>

          <div className="space-y-2 max-w-3xl">
            <div className="w-full h-4 rounded-md bg-slate-200 dark:bg-slate-800/70" />
            <div className="w-5/6 h-4 rounded-md bg-slate-200 dark:bg-slate-800/70" />
            <div className="w-2/3 h-4 rounded-md bg-slate-200 dark:bg-slate-800/70" />
          </div>

          {/* Action buttons skeleton */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="w-36 h-9 rounded-xl bg-indigo-300/50 dark:bg-indigo-900/50" />
            <div className="w-36 h-9 rounded-xl bg-slate-200 dark:bg-slate-800/80" />
          </div>

          {/* Tech stack badges skeleton */}
          <div className="space-y-2 pt-2">
            <div className="w-28 h-3 rounded-sm bg-slate-200 dark:bg-slate-800/60" />
            <div className="flex flex-wrap gap-2">
              <div className="w-16 h-7 rounded-lg bg-slate-200 dark:bg-slate-800/80" />
              <div className="w-24 h-7 rounded-lg bg-slate-200 dark:bg-slate-800/80" />
              <div className="w-20 h-7 rounded-lg bg-slate-200 dark:bg-slate-800/80" />
              <div className="w-16 h-7 rounded-lg bg-slate-200 dark:bg-slate-800/80" />
            </div>
          </div>
        </header>

        {/* Content Skeleton */}
        <div className="pt-10 space-y-6">
          <div className="w-48 h-8 rounded-lg bg-slate-300 dark:bg-slate-800" />
          <div className="space-y-2.5">
            <div className="w-full h-4 rounded-md bg-slate-200 dark:bg-slate-800/70" />
            <div className="w-full h-4 rounded-md bg-slate-200 dark:bg-slate-800/70" />
            <div className="w-4/5 h-4 rounded-md bg-slate-200 dark:bg-slate-800/70" />
          </div>

          <div className="w-40 h-7 rounded-lg bg-slate-300 dark:bg-slate-800 mt-8" />
          <div className="space-y-2.5">
            <div className="w-full h-4 rounded-md bg-slate-200 dark:bg-slate-800/70" />
            <div className="w-5/6 h-4 rounded-md bg-slate-200 dark:bg-slate-800/70" />
          </div>
        </div>
      </div>
    </article>
  );
}

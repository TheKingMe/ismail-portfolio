import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "interactive" | "glass" | "gradient-border";
  glowColor?: "indigo" | "cyan" | "emerald" | "amber";
}

export function Card({
  variant = "default",
  glowColor = "indigo",
  className = "",
  children,
  ...props
}: CardProps) {
  const baseStyles =
    "rounded-2xl transition-all duration-300 relative overflow-hidden";

  const glowStyles = {
    indigo: "hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-indigo-500/40",
    cyan: "hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/40",
    emerald: "hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/40",
    amber: "hover:shadow-lg hover:shadow-amber-500/10 dark:hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:border-amber-500/40",
  };

  const variantStyles = {
    default:
      "bg-white border border-slate-200/90 shadow-xs dark:bg-slate-900/80 dark:border-slate-800/80 backdrop-blur-sm",
    interactive:
      `bg-white/95 border border-slate-200/90 shadow-sm hover:shadow-md dark:bg-slate-900/70 dark:border-slate-800/80 backdrop-blur-md hover:-translate-y-1 ${glowStyles[glowColor]}`,
    glass:
      "bg-white/80 dark:bg-slate-950/40 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700/80",
    "gradient-border":
      "bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/80 p-[1px] rounded-2xl",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pb-3 flex flex-col space-y-1.5 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-xl font-bold tracking-tight text-slate-900 dark:text-white ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pt-3 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`p-6 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/40 mt-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

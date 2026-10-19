import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "outline" | "success" | "warning" | "glow";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full transition-colors duration-200 tracking-wide";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs gap-1",
    md: "px-2.5 py-1 text-xs gap-1.5",
    lg: "px-3.5 py-1.5 text-sm gap-2",
  };

  const variantStyles = {
    default:
      "bg-slate-100 text-slate-700 border border-slate-200/90 hover:border-slate-300 dark:bg-slate-800/90 dark:text-slate-300 dark:border-slate-700/60 dark:hover:border-slate-600 dark:hover:text-slate-100",
    primary:
      "bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/30 dark:hover:bg-indigo-500/20 dark:hover:border-indigo-400",
    secondary:
      "bg-cyan-50 text-cyan-700 border border-cyan-200 hover:bg-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30 dark:hover:bg-cyan-500/20 dark:hover:border-cyan-400",
    outline:
      "bg-transparent text-slate-600 border border-slate-300 hover:border-slate-400 dark:text-slate-400 dark:border-slate-700 dark:hover:border-slate-500 dark:hover:text-slate-200",
    success:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30",
    warning:
      "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30",
    glow:
      "bg-indigo-50/80 text-indigo-700 border border-indigo-200 shadow-xs dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-500/50 dark:shadow-[0_0_12px_rgba(99,102,241,0.25)]",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

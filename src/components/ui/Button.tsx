"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-body font-bold transition-all duration-300 rounded-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light shadow-soft",
    secondary: "bg-secondary text-white hover:bg-secondary-light shadow-soft",
    accent: "bg-accent text-primary hover:bg-accent-light shadow-soft",
    ghost: "bg-transparent text-primary hover:bg-surface",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizes = {
    sm: "px-5 py-2 text-[10px] uppercase tracking-widest",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-sm", // Reduced from text-base
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`;

  const content = (
    <span className="flex items-center justify-center gap-2 whitespace-nowrap">
      {children}
    </span>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={combinedClassName}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {content}
    </button>
  );
}

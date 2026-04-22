import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function Heading({
  children,
  as: Component = "h2",
  className = "",
  subtitle,
  centered = false,
}: HeadingProps) {
  const alignClass = centered ? "text-center mx-auto" : "text-left";
  
  // Dramatically reduced font sizes to avoid "giant" look and text breaking
  const sizes = {
    h1: "text-4xl md:text-5xl lg:text-6xl", // Was 8xl
    h2: "text-3xl md:text-4xl lg:text-5xl", // Was 6xl
    h3: "text-xl md:text-2xl lg:text-3xl",  // Was 4xl
    h4: "text-lg md:text-xl",
  };

  return (
    <div className={`mb-12 md:mb-16 ${alignClass} ${className} w-full max-w-3xl`}>
      {subtitle && (
        <span className="inline-block font-body text-[10px] md:text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">
          {subtitle}
        </span>
      )}
      <Component 
        className={`font-heading font-bold text-primary leading-[1.2] tracking-tight ${sizes[Component]} ${className}`}
        style={{ textWrap: "balance" } as any} // Prevents "broken" words/orphans
      >
        {children}
      </Component>
    </div>
  );
}

import type React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  badge?: string;
}

function Heading({ children, className = "", badge }: HeadingProps) {
  return (
    <div className="space-y-1 w-full">
      {badge && (
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
          {badge}
        </span>
      )}
      <h2
        className={`font-display font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-xl sm:text-2xl leading-snug ${className}`}
      >
        {children}
      </h2>
    </div>
  );
}

export default Heading;


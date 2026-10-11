import React from "react";

export default function Discription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed text-sm sm:text-base max-w-2xl ${className}`}
    >
      {children}
    </p>
  );
}


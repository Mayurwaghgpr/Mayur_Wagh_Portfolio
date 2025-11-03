import React from "react";

export default function Discription({
  children,
  className = "sm:text-sm text-xs",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-slate-300/60  font-thin  leading-relaxed ${className}`}
    >
      {children}
    </div>
  );
}

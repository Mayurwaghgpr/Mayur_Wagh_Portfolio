import React from "react";

export default function Discription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-slate-300 font-normal leading-relaxed text-sm sm:text-base max-w-3xl ${className}`}
    >
      {children}
    </div>
  );
}

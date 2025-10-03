import React from "react";

export default function Discription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-slate-300/60 mb-4 font-thin sm:text-sm text-xs leading-relaxed  ">
      {children}
    </div>
  );
}

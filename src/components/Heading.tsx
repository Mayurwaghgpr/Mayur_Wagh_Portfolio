import type React from "react";

function Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative border-inherit">
      <h2
        className={`font-bold tracking-tight text-slate-100 text-lg sm:text-xl md:text-2xl w-fit ${className}`}
      >
        {children}
      </h2>
    </div>
  );
}

export default Heading;

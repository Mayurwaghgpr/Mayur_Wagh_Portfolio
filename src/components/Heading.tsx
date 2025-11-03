import type React from "react";

function Heading({
  children,
  className = "xl:text-lg sm:text-xs text-base ",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative  rounded-lg   border-inherit  text-xl">
      <div
        className={`font-bold  rounded-lg border-inherit w-fit ${className} `}
      >
        {children}
      </div>
    </div>
  );
}

export default Heading;

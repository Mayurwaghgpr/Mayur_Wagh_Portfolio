import type React from "react";

function Heading({
  children,
  className = "xl:text-xl sm:text-lg text-base ",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative bg-white w-fit rounded-lg text-black  border-inherit ">
      <div className=" absolute inset-0  bg-gradient-to-r from-cyan-300  to-purple-300 rounded-lg animate-pulse"></div>
      <div
        className={`font-semibold bg-white/85 backdrop-blur-sm p-2 rounded-lg border-inherit border -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0  w-fit ${className} `}
      >
        {children}
      </div>
    </div>
  );
}

export default Heading;

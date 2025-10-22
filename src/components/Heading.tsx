import type React from "react";

function Heading({
  children,
  className = "xl:text-xl sm:text-lg text-base ",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`font-semibold ${className} `}>{children}</div>;
}

export default Heading;

import type React from "react";

function Heading({ children }: { children: React.ReactNode }) {
  return <div className="font-semibold sm:text-2xl text-lg  ">{children}</div>;
}

export default Heading;

import { useState, useEffect, useMemo } from "react";

import Heading from "./Heading";
import useIcon from "../hooks/useIcon";
import type { TechObj } from "../types";
import Discription from "./Discription";
import { GrTechnology } from "react-icons/gr";

function TechStacks() {
  const [mounted, setMounted] = useState(false);
  const icons = useIcon();
  useEffect(() => {
    setMounted(true);
  }, []);

  const technologies: TechObj[] = useMemo(
    () => [
      {
        icon: "reactjs",
        text: "React.js",
        color: "text-cyan-400",
        category: "Frontend",
        description: "Building dynamic and interactive user interfaces",
      },
      {
        icon: "redux",
        text: "Redux",
        color: "text-purple-400",
        category: "Frontend",
        description: "Manages state globaly ",
      },
      {
        icon: "reactq",
        text: "React quary",
        color: "text-amber-400",
        category: "Frontend",
        description: "Help to make api request effectively",
      },
      {
        icon: "tailwind",
        text: "Tailwind CSS",
        color: "text-sky-400",
        category: "Frontend",
        description: "Help to make api request effectively",
      },
      {
        icon: "javascript",
        text: "javascript",
        color: "text-yellow-400",
        category: "Frontend",
        description: "",
      },
      {
        icon: "typescript",
        text: "Typescript",
        color: "text-blue-400",
        category: "Frontend",
        description: "",
      },
      {
        icon: "nextjs",
        text: "Next.js",
        color: "text-white",
        category: "Frontend",
        description: "Production-ready React applications with SSR/SSG",
      },
      {
        icon: "nodejs",
        text: "Node.js",
        color: "text-green-400",
        category: "Backend",
        description: "Scalable server-side JavaScript runtime",
      },
      {
        icon: "express",
        text: "Express.js",
        color: "text-slate-300",
        category: "Backend",
        description: "Minimal and flexible Node.js web framework",
      },
      {
        icon: "oauth",
        text: "OAuth",
        color: "text-slate-300",
        category: "Backend",
        description:
          "To implement thired party authentication with google, gitub,etc. ",
      },
      {
        icon: "postgresql",
        text: "PostgreSQL",
        color: "text-blue-400",
        category: "Database",
        description: "Powerful open-source relational database",
      },
      {
        icon: "mongodb",
        text: "MongoDB",
        color: "text-green-400",
        category: "Database",
        description: "Flexible document-based NoSQL database",
      },
      {
        icon: "redis",
        text: "Redis",
        color: "text-red-400",
        category: "Database",
        description: "High-performance in-memory data store",
      },
      {
        icon: "docker",
        text: "Docker",
        color: "text-blue-400",
        category: "DevOps",
        description: "Containerization for consistent deployments",
      },
      {
        icon: "kubernetes",
        text: "Kubernetes",
        color: "text-blue-300",
        category: "DevOps",
        description: "Orchestrating containerized applications",
      },
      {
        icon: "socketio",
        text: "Socket.io",
        color: "text-slate-200",
        category: "Backend",
        description: "Real-time bidirectional event-based communication",
      },
      {
        icon: "postman",
        text: "postman",
        color: "text-orange-500",
        category: "Backend",
        description: "Testing apis and apis documentation",
      },
      {
        icon: "geminiAi",
        text: "Google Gemini",
        color:
          "bg-gradient-to-br from-blue-400 via-pink-600/50 to-white bg-clip-text text-clip text-transperent ",
        category: "Backend",
        description: "Testing apis and apis documentation",
      },
    ],
    []
  );

  return (
    <section id="techstacks" className=" w-full">
      <div className="relative z-10 gap-5  flex flex-col items-start ">
        {/* Enhanced Header Section */}
        <div className="text-start space-y-2 ">
          <Heading className="flex items-center gap-1">
            {" "}
            <GrTechnology /> Skills
          </Heading>
          <Discription>
            Technologies I leverage to build scalable, performant, and modern
            applications that solve real-world problems
          </Discription>
        </div>

        {/* Enhanced Tech Grid */}
        <div className="flex items-center justify-start gap-5 flex-wrap sm:w-10/12 ">
          {technologies.map((tech, idx) => (
            <div
              key={`${tech.text}`}
              className="group relative "
              style={{
                animationDelay: `${idx * 100}ms`,
                opacity: mounted ? 1 : 0,
                transform: mounted
                  ? "translateY(0) scale(1)"
                  : "translateY(30px) scale(0.9)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Main Card */}
              <div className=" flex justify-center  relative  ">
                {/* Icon Section */}
                <div className="relative flex items-center justify-center peer">
                  <div className="relative group">
                    {/* Icon Background Effects */}
                    <div className="absolute inset-0 group-hover:opacity-100 opacity-0 bg-gradient-to-r from-blue-600/50 to-blue-600/50 rounded-full blur-md group-hover:blur-xl transition-all duration-300 scale-150 "></div>
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full group-hover:scale-125 transition-transform duration-500 blur-sm"></div> */}

                    {/* Main Icon */}
                    <div className="relative border  backdrop-blur-sm rounded-full   p-2 transition-all duration-300">
                      <span
                        className={`sm:text-lg text-sm ${tech.color} transition-all duration-500 group-hover:scale-110 block drop-shadow-2xl`}
                      >
                        {icons[tech.icon]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`absolute transition-all duration-300 peer-hover:opacity-100 peer-hover:pointer-events-auto pointer-events-none opacity-0 ${tech.text}  bg-white text-black p-1 rounded-lg text-nowrap before:w-2 before:h-2 before:absolute before:-bottom-0.5  before:rotate-45 before:left-[45%] before:bg-white -top-8   text-center space-y-4 `}
                >
                  <h3 className=" text-xs  transition-colors duration-300">
                    {tech.text}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" absolute bottom-0 h-[0.4px] bg-gradient-to-r from-transparent via-cyan-50/30 to-transparent w-full"></div>
    </section>
  );
}

export default TechStacks;

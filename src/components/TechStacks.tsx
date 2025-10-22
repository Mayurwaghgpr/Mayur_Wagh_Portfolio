import { useState, useEffect, useMemo } from "react";

import Heading from "./Heading";
import useIcon from "../hooks/useIcon";
import type { TechObj } from "../types";

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
    <section id="techstacks" className=" w-full py-20 ">
      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden  ">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10  flex flex-col items-center">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2  mb-8 ">
            <Heading>Technology Stack</Heading>
          </div>

          <p className=" text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Technologies I leverage to build scalable, performant, and modern
            applications that solve real-world problems
          </p>
        </div>

        {/* Enhanced Tech Grid */}
        <div className="flex items-center justify-center gap-8 space-y-1 flex-wrap  sm:px-0 px-4">
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
              <div className="relative ">
                {/* Icon Section */}
                <div className="relative flex items-center justify-center mb-6">
                  <div className="relative group">
                    {/* Icon Background Effects */}
                    <div className="absolute inset-0 group-hover:opacity-100 opacity-0 bg-gradient-to-r from-blue-600/50 to-blue-600/50 rounded-full blur-md group-hover:blur-xl transition-all duration-300 scale-150 "></div>
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full group-hover:scale-125 transition-transform duration-500 blur-sm"></div> */}

                    {/* Main Icon */}
                    <div className="relative border  backdrop-blur-sm rounded-full sm:p-4 p-2 transition-all duration-300">
                      <span
                        className={`sm:text-2xl text-xl ${tech.color} transition-all duration-500 group-hover:scale-110 block drop-shadow-2xl`}
                      >
                        {icons[tech.icon]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center space-y-4">
                  <h3 className="sm:text-sm text-xs font-medium text-slate-100 group-hover:text-white transition-colors duration-300">
                    {tech.text}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStacks;

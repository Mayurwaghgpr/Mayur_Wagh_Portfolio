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
        icon: "graphql",
        text: "GraphQL",
        color: "text-pink-400",
        category: "Backend",
        description:
          "Query language for APIs and a runtime for fulfilling queries",
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
          "bg-gradient-to-br from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent",
        category: "Backend",
        description: "AI Integration & APIs",
      },
    ],
    []
  );

  return (
    <section id="techstacks" className="relative w-full py-10">
      <div className="relative z-10 gap-6 flex flex-col items-start">
        {/* Header Section */}
        <div className="text-start space-y-2">
          <Heading className="flex items-center gap-2 text-purple-400">
            <GrTechnology className="text-xl" />
            <span>Skills & Tech Stack</span>
          </Heading>
          <Discription>
            Technologies I leverage to build scalable, performant, and modern full-stack applications.
          </Discription>
        </div>

        {/* Tech Grid Pills */}
        <div className="flex items-center justify-start gap-3 sm:gap-4 flex-wrap w-full">
          {technologies.map((tech, idx) => (
            <div
              key={`${tech.text}-${idx}`}
              className="group relative"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted
                  ? "translateY(0) scale(1)"
                  : "translateY(20px) scale(0.95)",
                transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 30}ms`,
              }}
            >
              {/* Skill Pill Card */}
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-800/60 shadow-md transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-0.5 cursor-default">
                <span className={`text-lg sm:text-xl ${tech.color} drop-shadow`}>
                  {icons[tech.icon]}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                  {tech.text}
                </span>

                {/* Subtle Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent w-full"></div>
    </section>
  );
}

export default TechStacks;

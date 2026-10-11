import { useState, useMemo } from "react";
import Heading from "./Heading";
import useIcon from "../hooks/useIcon";
import type { TechObj, TechCategory } from "../types";
import { GrTechnology } from "react-icons/gr";

function TechStacks() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("All");
  const icons = useIcon();

  const technologies: TechObj[] = useMemo(
    () => [
      // Frontend
      {
        icon: "reactjs",
        text: "React.js",
        color: "text-cyan-400",
        category: "Frontend",
        description: "Component-driven user interfaces, custom hooks, and state management",
      },
      {
        icon: "nextjs",
        text: "Next.js",
        color: "text-white",
        category: "Frontend",
        description: "Server-side rendering (SSR), static site generation, and optimized routing",
      },
      {
        icon: "typescript",
        text: "TypeScript",
        color: "text-blue-400",
        category: "Frontend",
        description: "Strict compile-time type safety for scalable, self-documenting codebases",
      },
      {
        icon: "javascript",
        text: "JavaScript (ES6+)",
        color: "text-yellow-400",
        category: "Frontend",
        description: "Async/await patterns, closures, event loop architecture, and modern syntax",
      },
      {
        icon: "tailwind",
        text: "Tailwind CSS",
        color: "text-sky-400",
        category: "Frontend",
        description: "Design-system tokens, responsive layouts, and utility-first UI styling",
      },
      {
        icon: "redux",
        text: "Redux & Toolkit",
        color: "text-purple-400",
        category: "Frontend",
        description: "Predictable centralized state architecture for complex application data flows",
      },
      {
        icon: "reactq",
        text: "React Query",
        color: "text-amber-400",
        category: "Frontend",
        description: "Declarative server-state caching, background revalidation, and optimistic updates",
      },

      // Backend
      {
        icon: "nodejs",
        text: "Node.js",
        color: "text-emerald-400",
        category: "Backend",
        description: "Event-driven, non-blocking asynchronous server runtime for distributed services",
      },
      {
        icon: "express",
        text: "Express.js",
        color: "text-slate-300",
        category: "Backend",
        description: "Middleware-based RESTful API framework with input validation and error handling",
      },
      {
        icon: "graphql",
        text: "GraphQL",
        color: "text-pink-400",
        category: "Backend",
        description: "Strictly-typed schemas and Apollo Server resolvers eliminating over-fetching",
      },
      {
        icon: "socketio",
        text: "Socket.io & WebSockets",
        color: "text-slate-200",
        category: "Backend",
        description: "Full-duplex bidirectional event pipelines for real-time messaging and telemetry",
      },
      {
        icon: "jwt",
        text: "JWT & Security",
        color: "text-amber-300",
        category: "Backend",
        description: "Stateless token-based authentication and role-based access control (RBAC)",
      },
      {
        icon: "oauth",
        text: "OAuth 2.0",
        color: "text-indigo-300",
        category: "Backend",
        description: "Third-party social authentication with Google, GitHub, and secure session management",
      },

      // Database
      {
        icon: "postgresql",
        text: "PostgreSQL",
        color: "text-sky-400",
        category: "Database",
        description: "ACID-compliant relational database, indexing, foreign keys, and complex joins",
      },
      {
        icon: "mongodb",
        text: "MongoDB",
        color: "text-emerald-400",
        category: "Database",
        description: "Document-oriented data models, aggregation pipelines, and flexible document schemas",
      },
      {
        icon: "redis",
        text: "Redis",
        color: "text-red-400",
        category: "Database",
        description: "In-memory caching layer, Pub/Sub message broker, and rate-limiting store",
      },

      // DevOps
      {
        icon: "docker",
        text: "Docker",
        color: "text-blue-400",
        category: "DevOps",
        description: "Containerization ensuring reproducible environments from development to production",
      },
      {
        icon: "kubernetes",
        text: "Kubernetes",
        color: "text-blue-300",
        category: "DevOps",
        description: "Container orchestration, rolling updates, and scalable service discovery",
      },
      {
        icon: "git",
        text: "Git & GitHub",
        color: "text-orange-400",
        category: "DevOps",
        description: "Version control, branching strategies, code reviews, and automated CI/CD actions",
      },
      {
        icon: "postman",
        text: "Postman",
        color: "text-orange-500",
        category: "DevOps",
        description: "API contract testing, integration suites, and automated endpoint documentation",
      },

      // AI & Cloud
      {
        icon: "geminiAi",
        text: "Google Gemini AI",
        color: "text-indigo-400",
        category: "AI & Cloud",
        description: "Integration of LLMs, structured outputs, prompt engineering, and automated analysis",
      },
      {
        icon: "vercel",
        text: "Vercel & Cloud Deploy",
        color: "text-white",
        category: "AI & Cloud",
        description: "Edge networks, serverless functions, continuous deployments, and CDN caching",
      },
    ],
    []
  );

  const categories: TechCategory[] = ["All", "Frontend", "Backend", "Database", "DevOps", "AI & Cloud"];

  const filteredTechnologies = useMemo(() => {
    if (activeCategory === "All") return technologies;
    return technologies.filter((tech) => tech.category === activeCategory);
  }, [technologies, activeCategory]);

  return (
    <section id="skills" className="relative w-full py-12 md:py-16 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-20">
      <div className="space-y-8">
        
        {/* Section Heading & Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Heading badge="Core Competencies">
              <span className="flex items-center gap-2.5">
                <GrTechnology className="text-zinc-700 dark:text-zinc-300 text-2xl sm:text-3xl" />
                <span>Technical Stack & Systems</span>
              </span>
            </Heading>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Languages, frameworks, databases, and architectural tools I leverage daily to engineer production web systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 active:scale-95 ${
                  activeCategory === cat
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid with Smooth Fade on Category Switch */}
        <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 animate-fade-in">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={index}
              className="group p-4 rounded-xl bg-white dark:bg-zinc-900/40 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-200 flex items-start gap-3.5 shadow-sm"
            >
              {/* Icon Container */}
              <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xl shrink-0 group-hover:scale-105 transition-transform duration-200">
                <span className={tech.color}>
                  {icons[tech.icon as keyof typeof icons]}
                </span>
              </div>

              {/* Text Info */}
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display font-medium text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors truncate">
                    {tech.text}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 shrink-0">
                    {tech.category}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal line-clamp-2">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechStacks;

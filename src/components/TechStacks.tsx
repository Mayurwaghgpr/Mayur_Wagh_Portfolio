import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Heading from "./Heading";
import useIcon from "../hooks/useIcon";
import { useTheme } from "../hooks/useTheme";
import type { TechObj, TechCategory } from "../types";
import { GrTechnology } from "react-icons/gr";
import { FiZap } from "react-icons/fi";

// Semantic constellation anchors for 22 technologies widely spread out across full canvas
const nodeCoordinates: { id: string; u: number; v: number }[] = [
  // Frontend Cluster (Left)
  { id: "tailwind", u: 0.06, v: 0.16 },
  { id: "nextjs", u: 0.22, v: 0.12 },
  { id: "reactjs", u: 0.14, v: 0.35 },
  { id: "javascript", u: 0.05, v: 0.54 },
  { id: "typescript", u: 0.20, v: 0.53 },
  { id: "redux", u: 0.07, v: 0.76 },
  { id: "reactq", u: 0.22, v: 0.72 },
  { id: "vercel", u: 0.15, v: 0.90 },

  // Backend Cluster (Center)
  { id: "express", u: 0.40, v: 0.13 },
  { id: "nodejs", u: 0.35, v: 0.34 },
  { id: "graphql", u: 0.54, v: 0.22 },
  { id: "socketio", u: 0.48, v: 0.46 },
  { id: "jwt", u: 0.34, v: 0.68 },
  { id: "oauth", u: 0.50, v: 0.70 },
  { id: "geminiAi", u: 0.40, v: 0.88 },

  // Database Cluster (Right-Center)
  { id: "postgresql", u: 0.68, v: 0.15 },
  { id: "redis", u: 0.66, v: 0.42 },
  { id: "mongodb", u: 0.65, v: 0.68 },

  // DevOps Cluster (Right)
  { id: "kubernetes", u: 0.86, v: 0.16 },
  { id: "docker", u: 0.82, v: 0.42 },
  { id: "postman", u: 0.94, v: 0.56 },
  { id: "git", u: 0.82, v: 0.82 },
];

function TechStacks() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("All");
  const [hoveredTech, setHoveredTech] = useState<TechObj | null>(null);

  const icons = useIcon();
  const { theme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodeElsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Simulation state stored in ref for 60fps animation without React re-renders
  const simState = useRef<{
    width: number;
    height: number;
    mouse: { x: number; y: number; active: boolean };
    nodes: {
      tech: TechObj;
      id: string;
      u: number;
      v: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      speedX: number;
      speedY: number;
      phaseX: number;
      phaseY: number;
    }[];
  }>({
    width: 800,
    height: 500,
    mouse: { x: -1000, y: -1000, active: false },
    nodes: [],
  });

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
        color: "text-zinc-900 dark:text-white",
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
        text: "JavaScript",
        color: "text-amber-400",
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
        color: "text-zinc-600 dark:text-zinc-300",
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
        text: "Socket.io",
        color: "text-zinc-700 dark:text-zinc-200",
        category: "Backend",
        description: "Full-duplex bidirectional event pipelines for real-time messaging and telemetry",
      },
      {
        icon: "jwt",
        text: "JWT & RBAC",
        color: "text-amber-300",
        category: "Backend",
        description: "Stateless token-based authentication and role-based access control boundaries",
      },
      {
        icon: "oauth",
        text: "OAuth 2.0",
        color: "text-indigo-300",
        category: "Backend",
        description: "Third-party social authentication with Google, GitHub, and session tokens",
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
        color: "text-rose-500",
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
        text: "Google Gemini",
        color: "text-indigo-400",
        category: "AI & Cloud",
        description: "Integration of LLMs, structured outputs, prompt engineering, and automated analysis",
      },
      {
        icon: "vercel",
        text: "Vercel & Cloud",
        color: "text-zinc-900 dark:text-white",
        category: "AI & Cloud",
        description: "Edge networks, serverless functions, continuous deployments, and CDN caching",
      },
    ],
    []
  );

  // Initialize node positions
  useEffect(() => {
    simState.current.nodes = technologies.map((tech, i) => {
      const coord = nodeCoordinates.find((c) => c.id === tech.icon) || {
        u: ((i % 5) + 0.5) / 5,
        v: (Math.floor(i / 5) + 0.5) / 5,
      };
      return {
        tech,
        id: tech.icon,
        u: coord.u,
        v: coord.v,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        speedX: 0.0008 + (i % 6) * 0.0002,
        speedY: 0.0010 + (i % 5) * 0.0002,
        phaseX: i * 0.8,
        phaseY: i * 1.1,
      };
    });
  }, [technologies]);

  // Main 60fps Spiderweb Physics & Canvas Render Loop
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high-DPI crisp canvas rendering
    const handleResize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      simState.current.width = rect.width;
      simState.current.height = rect.height;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const isDarkMode = theme === "dark";

    const animate = (time: number) => {
      const { width, height, mouse, nodes } = simState.current;
      if (width <= 0 || height <= 0) {
        animId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Node size and padding based on screen size
      const isMobile = width < 640;
      const radius = isMobile ? 22 : 26;
      const padding = radius + 12;
      // Denser spiderweb reach thresholds for spread-out layout
      const maxDist = isMobile ? 190 : 255;
      const mouseDist = isMobile ? 170 : 230;

      // 1. Calculate positions with organic zero-gravity floating oscillation
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Base anchor in current viewport
        const baseX = padding + node.u * (width - 2 * padding);
        const baseY = padding + node.v * (height - 2 * padding);

        // Harmonic floating drift
        const driftX = Math.sin(time * node.speedX + node.phaseX) * 9;
        const driftY = Math.cos(time * node.speedY + node.phaseY) * 9;

        let posX = baseX + driftX;
        let posY = baseY + driftY;

        // Gentle cursor avoidance / magnetic ripple
        if (mouse.active) {
          const dx = posX - mouse.x;
          const dy = posY - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist > 0 && dist < 80) {
            const force = (1 - dist / 80) * 12;
            posX += (dx / dist) * force;
            posY += (dy / dist) * force;
          }
        }

        // Clamp inside container
        node.x = Math.max(padding, Math.min(width - padding, posX));
        node.y = Math.max(padding, Math.min(height - padding, posY));

        // Directly update DOM element transform for GPU acceleration without React re-rendering
        const el = nodeElsRef.current[i];
        if (el) {
          el.style.transform = `translate3d(${node.x - radius}px, ${node.y - radius}px, 0)`;
        }
      }

      // 2. Draw dense, ultra-thin spiderweb network connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const isHoveredEdge =
              (hoveredTech && (hoveredTech.text === a.tech.text || hoveredTech.text === b.tech.text)) || false;

            const isMatchingCategory =
              activeCategory === "All" ||
              (a.tech.category === activeCategory && b.tech.category === activeCategory);

            const ratio = dist / maxDist;
            let alpha = Math.pow(1 - ratio, 1.15) * (isDarkMode ? 0.38 : 0.3);
            let lineWidth = 0.55; // Ultra-thin delicate spider silk thread

            if (isHoveredEdge) {
              alpha = (1 - ratio) * 0.95;
              lineWidth = 1.0;
            } else if (!isMatchingCategory) {
              alpha *= 0.15;
            }

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            if (isHoveredEdge) {
              ctx.strokeStyle = isDarkMode
                ? `rgba(250, 250, 250, ${alpha})`
                : `rgba(24, 24, 27, ${alpha})`;
            } else {
              ctx.strokeStyle = isDarkMode
                ? `rgba(161, 161, 170, ${alpha})`
                : `rgba(113, 113, 122, ${alpha})`;
            }

            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        }
      }

      // 3. Draw dynamic cursor spiderweb links when moving mouse
      if (mouse.active) {
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouseDist) {
            const alpha = Math.pow(1 - dist / mouseDist, 1.2) * 0.7;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(node.x, node.y);
            ctx.strokeStyle = isDarkMode
              ? `rgba(244, 244, 245, ${alpha})`
              : `rgba(24, 24, 27, ${alpha})`;
            ctx.lineWidth = 0.6; // Very thin silk laser link
            ctx.stroke();
          }
        }

        // Spiderweb subtle ring around cursor
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
        ctx.strokeStyle = isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(24, 24, 27, 0.15)";
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Luminous cursor center dot
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode ? "rgba(255, 255, 255, 0.9)" : "rgba(24, 24, 27, 0.9)";
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, [theme, activeCategory, hoveredTech]);

  // Mouse & Touch Tracking handlers
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    simState.current.mouse.x = e.clientX - rect.left;
    simState.current.mouse.y = e.clientY - rect.top;
    simState.current.mouse.active = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    simState.current.mouse.active = false;
    simState.current.mouse.x = -1000;
    simState.current.mouse.y = -1000;
    setHoveredTech(null);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    simState.current.mouse.x = touch.clientX - rect.left;
    simState.current.mouse.y = touch.clientY - rect.top;
    simState.current.mouse.active = true;
  }, []);

  const handleTouchEnd = useCallback(() => {
    simState.current.mouse.active = false;
  }, []);

  const categories: TechCategory[] = ["All", "Frontend", "Backend", "Database", "DevOps", "AI & Cloud"];

  return (
    <section id="skills" className="relative w-full py-12 md:py-16 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-20">
      <div className="space-y-6">
        
        {/* Section Heading & Sleek Minimalist Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <Heading badge="Core Competencies">
              <span className="flex items-center gap-2.5">
                <GrTechnology className="text-zinc-700 dark:text-zinc-300 text-xl sm:text-2xl" />
                <span>Technical Stack & Systems</span>
              </span>
            </Heading>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Technologies, frameworks, and tools I leverage to engineer resilient architectures and build scalable web applications.
            </p>
          </div>

          {/* Clean Minimalist Category Filters (No horizontal scroll, wraps naturally) */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 py-0.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs transition-all duration-200 font-medium ${
                    isActive
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Floating Spiderweb Network Canvas */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[520px] sm:h-[580px] md:h-[620px] overflow-hidden cursor-crosshair select-none"
        >
            {/* HTML5 Canvas Drawing Real-time Spiderweb Edges & Cursor Beams */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none"
            />

            {/* Floating Circular Tech Nodes */}
            {technologies.map((tech, index) => {
              const isMatch = activeCategory === "All" || tech.category === activeCategory;
              const isHovered = hoveredTech?.text === tech.text;

              return (
                <div
                  key={tech.text}
                  ref={(el) => (nodeElsRef.current[index] = el)}
                  onMouseEnter={() => setHoveredTech(tech)}
                  onTouchStart={() => setHoveredTech(tech)}
                  className={`
                    absolute top-0 left-0 flex flex-col items-center justify-center
                    transition-opacity duration-300 will-change-transform z-10
                    ${isMatch ? "opacity-100" : "opacity-20 pointer-events-none blur-[0.5px] scale-90"}
                  `}
                >
                  {/* Circular Icon Bubble */}
                  <div
                    className={`
                      w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center
                      backdrop-blur-md transition-all duration-200 shadow-xs
                      ${
                        isHovered
                          ? "scale-125 bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 shadow-md ring-4 ring-zinc-400/20 dark:ring-zinc-600/30"
                          : "bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:scale-110"
                      }
                    `}
                  >
                    <span className={`text-lg sm:text-xl ${tech.color}`}>
                      {icons[tech.icon as keyof typeof icons]}
                    </span>
                  </div>

                  {/* Micro Name Label */}
                  <span
                    className={`
                      mt-1 px-1.5 py-0.5 rounded-full text-[10px] font-mono tracking-tight text-center truncate max-w-[80px] pointer-events-none transition-colors
                      ${
                        isHovered
                          ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold"
                          : "text-zinc-500 dark:text-zinc-400 bg-white/70 dark:bg-zinc-950/70 border border-zinc-200/60 dark:border-zinc-800/60"
                      }
                    `}
                  >
                    {tech.text}
                  </span>
                </div>
              );
            })}

            {/* Dynamic Hover Detail Card / Interactive Tooltip */}
            {hoveredTech ? (
              <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-auto sm:max-w-md p-3.5 sm:p-4 rounded-xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-lg animate-fade-in pointer-events-auto z-20">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xl shrink-0">
                    <span className={hoveredTech.color}>
                      {icons[hoveredTech.icon as keyof typeof icons]}
                    </span>
                  </div>
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-display font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                        {hoveredTech.text}
                      </h4>
                      <span className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full border border-zinc-200/70 dark:border-zinc-700/70">
                        {hoveredTech.category}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {hoveredTech.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Helpful Floating Hint in Corner */
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-1.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/70 dark:border-zinc-800/70 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 pointer-events-none flex items-center gap-2 z-20">
                <FiZap className="text-amber-500 text-xs animate-bounce" />
                <span>Move cursor to weave spiderweb links • Hover circular nodes to inspect</span>
              </div>
            )}
          </div>

      </div>
    </section>
  );
}

export default TechStacks;


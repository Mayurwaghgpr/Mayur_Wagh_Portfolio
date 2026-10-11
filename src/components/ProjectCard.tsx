import { useState, useEffect } from "react";
import useIcon from "../hooks/useIcon";
import type { ProjectType } from "commons_in_portfolio";
import TimeAgo from "./TimeAgo";
import { FiGithub } from "react-icons/fi";

function ProjectCard({
  title,
  description,
  links,
  images,
  technologies,
  githubStatus,
}: ProjectType) {
  const icons = useIcon();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Derive a clean mock browser URL from liveLink or title
  const liveLinkObj = links?.find((l) => l.linkName.toLowerCase().includes("live"));
  const githubLinkObj = links?.find((l) => l.linkName.toLowerCase().includes("git"));

  const displayUrl = liveLinkObj?.url
    ? liveLinkObj.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : githubLinkObj?.url
    ? githubLinkObj.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : `${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.dev`;

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <article className="group relative w-full rounded-2xl bg-white dark:bg-zinc-900/40 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 shadow-sm overflow-hidden flex flex-col justify-between">
      
      {/* macOS Style Mockup Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 text-xs">
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 border border-rose-600/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 border border-amber-600/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
        </div>

        {/* Clean URL bar pill */}
        <div className="mx-2 px-3 py-0.5 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 truncate max-w-[200px] sm:max-w-[280px]">
          {displayUrl}
        </div>

        <div className="w-6 shrink-0" />
      </div>

      <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">
        
        {/* Screenshot Viewport Container */}
        <div className="relative overflow-hidden rounded-xl h-48 sm:h-52 w-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/90 group/img">
          {images && images.length > 0 ? (
            images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`${title} preview screenshot ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ${
                  index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                }`}
                loading="lazy"
              />
            ))
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 text-xs gap-1 font-mono">
              <span>{title}</span>
              <span className="text-[10px] text-zinc-400">Production Web Application</span>
            </div>
          )}

          {/* Carousel Dot Indicators */}
          {images && images.length > 1 && (
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-white/90 dark:bg-zinc-950/80 px-2.5 py-1 rounded-full backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-sm">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-zinc-900 dark:bg-zinc-100 w-4" : "bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 w-1.5"
                  }`}
                  aria-label={`Switch to screenshot ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project Header & Narrative */}
        <div className="space-y-2 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-semibold text-lg sm:text-xl text-zinc-900 dark:text-zinc-100 transition-colors">
              {title}
            </h3>

            {githubStatus && (
              <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-xs shrink-0 font-mono bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-800">
                <TimeAgo date={githubStatus} />
              </div>
            )}
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
          {technologies &&
            technologies.slice(0, 8).map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 rounded text-xs font-mono font-medium"
              >
                <span className="text-xs text-zinc-400">
                  {icons[tech.technology as keyof typeof icons]}
                </span>
                <span>{tech.displayName || tech.technology}</span>
              </span>
            ))}
          {technologies && technologies.length > 8 && (
            <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-950/50 text-zinc-500 rounded text-xs font-mono">
              +{technologies.length - 8}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
          <div className="flex items-center gap-2">
            {liveLinkObj && (
              <a
                href={liveLinkObj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 text-xs font-medium transition-all shadow-sm group/btn"
              >
                <span>Live Demo</span>
                <span className="font-mono text-xs transition-transform duration-150 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">↗</span>
              </a>
            )}

            {githubLinkObj && (
              <a
                href={githubLinkObj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white text-xs font-medium transition-all shadow-sm"
              >
                <FiGithub className="text-xs" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}

export default ProjectCard;

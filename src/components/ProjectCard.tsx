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

  const liveLinkObj = links?.find((l) => l.linkName.toLowerCase().includes("live"));
  const githubLinkObj = links?.find((l) => l.linkName.toLowerCase().includes("git"));

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <article className="group relative w-full flex flex-col justify-between space-y-4">
      {/* Screenshot Viewport Container */}
      <div className="relative overflow-hidden rounded-xl h-48 sm:h-56 w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 transition-colors duration-300">
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
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-white/90 dark:bg-zinc-950/80 px-2.5 py-1 rounded-full backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xs">
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

      {/* Project Details - Blended with background */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-semibold text-lg text-zinc-900 dark:text-zinc-100 transition-colors">
              {title}
            </h3>

            {githubStatus && (
              <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-xs shrink-0 font-mono">
                <TimeAgo date={githubStatus} />
              </div>
            )}
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {technologies &&
            technologies.slice(0, 8).map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800/60 text-zinc-600 dark:text-zinc-400 rounded-md text-xs font-mono font-medium"
              >
                <span className="text-xs text-zinc-400">
                  {icons[tech.technology as keyof typeof icons]}
                </span>
                <span>{tech.displayName || tech.technology}</span>
              </span>
            ))}
          {technologies && technologies.length > 8 && (
            <span className="px-2 py-0.5 bg-zinc-100/70 dark:bg-zinc-900/70 text-zinc-500 rounded text-xs font-mono">
              +{technologies.length - 8}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2 pt-2">
          {liveLinkObj && (
            <a
              href={liveLinkObj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 text-xs font-medium transition-all shadow-xs active:scale-95 group/btn"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white text-xs font-medium transition-all border border-zinc-200/60 dark:border-zinc-800/60 active:scale-95"
            >
              <FiGithub className="text-xs" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

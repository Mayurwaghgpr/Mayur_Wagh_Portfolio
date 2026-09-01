import { useState, useEffect } from "react";
import useIcon from "../hooks/useIcon";
import type { ProjectType } from "commons_in_portfolio";
import TimeAgo from "./TimeAgo";

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

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative group w-full border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-cyan-500/10 hover:border-slate-700 transition-all duration-500 overflow-hidden flex flex-col justify-between">
      <div className="relative flex flex-col items-start gap-4 p-5 sm:p-6 w-full">
        
        {/* Image Carousel Header */}
        <div className="relative overflow-hidden rounded-xl group/img h-48 sm:h-52 w-full shrink-0 border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10" />

          {images && images.length > 0 ? (
            images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={title}
                className={`absolute inset-0 w-full h-full object-cover object-top transform group-hover/img:scale-105 transition-all duration-700 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))
          ) : (
            <div className="w-full h-full bg-slate-800/50 flex items-center justify-center text-slate-500 text-sm">
              No Preview Available
            </div>
          )}

          {/* Carousel indicators */}
          {images && images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-slate-950/60 px-2 py-1 rounded-full backdrop-blur-sm border border-slate-800">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-cyan-400 w-4"
                      : "bg-slate-500 hover:bg-slate-400 w-1.5"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Title & Description */}
        <div className="space-y-2 w-full">
          <h3 className="font-bold text-lg sm:text-xl text-slate-100 group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 font-normal">
            {description}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 w-full border-t border-slate-800/60">
          <span className="text-xs font-semibold text-slate-400 mr-1">Tech:</span>
          {technologies &&
            technologies.slice(0, 10).map((tech, index) => (
              <div key={index} className="group/tech relative">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-slate-300 rounded-full text-xs font-medium transition-colors">
                  <span className="text-sm">
                    {icons[tech.technology as keyof typeof icons]}
                  </span>
                  <span>{tech.displayName || tech.technology}</span>
                </span>
              </div>
            ))}
          {technologies && technologies.length > 10 && (
            <span className="px-2 py-1 bg-slate-800 text-slate-400 rounded-full text-xs font-medium">
              +{technologies.length - 10}
            </span>
          )}
        </div>

        {/* Links & Activity */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 w-full border-t border-slate-800/60 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">Links:</span>
            {links && links.length > 0 ? (
              links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 rounded-xl transition-all duration-200 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${link.linkName}`}
                >
                  <span className="text-sm">
                    {icons[link.linkName as keyof typeof icons]}
                  </span>
                  <span className="capitalize">{link.linkName}</span>
                </a>
              ))
            ) : (
              <span className="text-slate-500 italic">No links available</span>
            )}
          </div>

          {githubStatus && (
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <span>{icons["github"]}</span>
              <span>Updated:</span>
              <TimeAgo date={githubStatus} className="text-slate-300 font-medium" />
            </div>
          )}
        </div>
      </div>

      {/* Hover bottom gradient line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default ProjectCard;

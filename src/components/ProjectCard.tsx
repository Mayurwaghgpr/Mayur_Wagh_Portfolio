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
    <div className="relative group  max-w-[40rem] w-full max-h-[40rem] border-inherit bg-black border   backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden">
      <div className="relative flex flex-col items-start justify-center gap-4 w-full h-full p-6">
        <div className="flex  flex-col justify-center sm:items-start items-center gap-6 w-full">
          {/* Image Section with Enhanced Styling */}
          <div className="relative overflow-hidden rounded-xl group/img h-52  w-full shrink-0">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10" />

            {images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={title}
                className={`absolute inset-0 w-full h-full object-cover object-center transform group-hover/img:scale-110 transition-all duration-700 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Image indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white w-6"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Description with fade effect */}
          <div className="relative flex-row gap-4 overflow-hidden min-w-[70%]">
            {" "}
            {/* Header */}
            <div className="w-full">
              <h3 className="font-bold  sm:text-lg text-base bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-white group-hover:to-blue-200 transition-all duration-500">
                {title}
              </h3>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed line-clamp-7">
              {description}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>

        {/* Technologies with enhanced styling */}
        <div className="relative flex justify-start items-center flex-wrap gap-2 w-full">
          <span className="text-xs font-medium text-gray-400">Tech Stack:</span>
          {technologies.slice(0, 15).map((tech, index) => (
            <div key={index} className="group/tech relative">
              <div className="flex items-center text-base gap-2 p-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-full transition-all duration-300 cursor-default">
                <span className="flex text-xs peer w-fit">
                  {icons[tech.technology as keyof typeof icons]}
                </span>
              </div>

              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 sm:px-3 sm:py-1.5 px-1.5 py-0.5 bg-black/90 backdrop-blur-sm border border-purple-500/30 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-30">
                <span className=" text-[8px] leading-3 text-white">
                  {tech.displayName}
                </span>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-r border-b border-purple-500/30 rotate-45" />
              </div>
            </div>
          ))}
          {technologies.length > 15 && (
            <span className="flex items-center gap-2 p-1 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-full transition-all duration-300 cursor-default text-[10px] leading-3">
              {" "}
              +{technologies.slice(15).length}{" "}
            </span>
          )}
        </div>

        {/* Links with enhanced buttons */}
        <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-3 w-full">
          <div className="flex items-center gap-3">
            {" "}
            <span className="sm:text-sm text-xs font-medium text-gray-400">
              Links:
            </span>
            {links.length > 0 &&
              links.map((link, index) => {
                return (
                  <a
                    key={index}
                    href={link.url}
                    className="group/btn flex items-center justify-center gap-2 p-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/40 border border-purple-500/30 hover:border-purple-400/60 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                    aria-label={`View ${link.linkName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-xs group-hover/btn:scale-110 transition-transform duration-300">
                      {icons[link.linkName as keyof typeof icons]}
                    </span>
                  </a>
                );
              })}
          </div>
          <div className="text-xs flex sm:justify-center items-center gap-2">
            {githubStatus && (
              <>
                {icons["github"]}
                <span className="sm:text-sm text-xs font-medium text-gray-400">
                  updated:
                </span>
                {githubStatus && (
                  <TimeAgo date={githubStatus} className=" opacity-50" />
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default ProjectCard;

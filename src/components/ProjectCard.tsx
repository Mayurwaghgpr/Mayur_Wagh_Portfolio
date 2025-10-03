import { BiCalendar } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "../types";
import useIcon from "../hooks/useIcon";

function ProjectCard({
  title,
  date,
  description,
  liveUrl,
  preview,
  tags,
  githubUrl,
}: Project) {
  const icons = useIcon();

  return (
    <div className="group relative border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden min-w-[22rem] h-[28rem]">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 flex flex-col h-full">
        {/* Preview */}
        <div>
          <img src={preview} alt="" />
        </div>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-bold text-xl pr-2  transition-colors duration-300">
            {title}
          </h3>
          {date && (
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 bg-gray-900/5 dark:bg-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm shrink-0">
              <BiCalendar className="w-3 h-3 mr-1.5" />
              {date}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-4 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="relative flex flex-wrap gap-2 mb-6  w-full">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="relative  flex justify-between items-center p-2 text-xs bg-gray-900/30 rounded-full border border-purple-500/20 transition-all duration-700 ease-in-out "
            >
              {/* Icon always visible */}
              <span className="flex peer w-fit">{icons[tag.icon]}</span>

              {/* Text smoothly appears when width expands */}
              <span className=" absolute -top-8 left-0  whitespace-nowrap opacity-0 transition-opacity duration-300 w-fit rounded-lg border p-1 text-xs  peer-hover:opacity-100">
                {tag.text}
              </span>
            </span>
          ))}
          {/* 
          {tags.length > 4 && (
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
              +{tags.length - 4} more
            </span>
          )} */}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {githubUrl && (
            <a
              href={githubUrl}
              className="relative flex items-center justify-center group/btn  text-xl opacity-50 hover:opacity-100 overflow-hidden transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="View source code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="relative z-10" />
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              className="relative flex items-center justify-center text-xl opacity-50 hover:opacity-100 group/btn overflow-hidden transition-all duration-300 hover:scale-110 focus:outline-none "
              aria-label="View live project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="relative z-10" />
            </a>
          )}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r blur-sm from-purple-500/50 via-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
export default ProjectCard;

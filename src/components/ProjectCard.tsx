import { BiCalendar } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";


function ProjectCard({ 
  title = "Sample Project",
  description = "This is a sample project description that showcases the key features and technologies used in this project.",
  tags = ["React", "TypeScript", "Tailwind"],
  githubUrl = "#",
  liveUrl = "#",
  date = "2024"
}) {
  return (
    <div className="group relative border bg-black/20 p-3 backdrop-blur-sm h-[25rem] w-[20rem] rounded-xl  shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">

      {/* Content */}
      <div className="p-4 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg  leading-tight line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center text-xs  ml-2">
            <BiCalendar className="w-3 h-3 mr-1" />
            {date}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm  mb-3 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
              +{tags.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-2 mt-auto">
          <a
            href={githubUrl}
            className="flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            aria-label="View source code"
          >
            <BsGithub className="w-4 h-4 text-gray-700" />
          </a>
          <a
            href={liveUrl}
            className="flex items-center justify-center w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-200"
            aria-label="View live project"
          >
            <FiExternalLink className="w-4 h-4 text-blue-700" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard
import { MdLocationOn, MdTimeline } from "react-icons/md";
import Heading from "../../../components/Heading";
import Discription from "../../../components/Discription";
const experiences = [
  {
    title: "Software Developer Intern",
    company: "Webseeder Ltd",
    period: "Dec 2024 - Sept 2025",
    location: "Remote",
    description: (
      <ul className=" list-disc">
        {" "}
        <li>Built and maintained LMS, CRM, and GPS apps using MERN stack.</li>
        <li> secure REST APIs (JWT & OAuth) with role-based access. </li>
        <li>
          {" "}
          Optimized MongoDB & PostgreSQL queries, improving performance by 30%.{" "}
        </li>
        <li>
          Implemented real-time chats & notifications with Redis + Socket.io.
        </li>{" "}
        <li>Collaborated with teams, delivering features 20% faster.</li>{" "}
      </ul>
    ),
    technologies: ["React", "Node.js", "Express", "MongoDB", "Next.js"],
  },
  {
    title: "Python Developer Intern",
    company: "Borse Automation Pvt Ltd",
    period: "Aug 2023 - Jan 2024",
    location: "Nashik, India",
    description: (
      <ul className=" list-disc">
        {" "}
        <li>Developed vehicle dashcam with OpenCV (face detection).</li>
        <li>
          Built PyQt desktop apps for sensor monitoring, reducing manual work.
        </li>
        <li>
          Improved application responsiveness, boosting efficiency by 30%.
        </li>
      </ul>
    ),
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
];

function Experience() {
  return (
    <div className="flex flex-col justify-center items-start gap-5 w-full ">
      <Heading>Work Experience</Heading>
      <div className="relative flex flex-col items-start justify-start gap-4  w-full h-full">
        {/* Timeline line */}
        <div className="absolute   left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent"></div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative flex items-start gap-5 w-full h-full"
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="sm:w-5 sm:h-5 h-5 w-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                <MdTimeline className="text-white sm:text-sm text-xs" />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col space-y-1 transition-all duration-300">
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between ">
                  <h3 className="sm:text-base text-sm font-bold text-white transition-colors">
                    {exp.title}
                  </h3>
                  <span className="sm:text-xs text-[8px] leading-[.5rem] font-light opacity-50  ">
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-4 ">
                  <span className="text-blue-300 font-medium sm:text-sm text-xs">
                    {exp.company}
                  </span>
                  <span className="text-slate-400 sm:text-xs text-[8px] leading-[.5rem] flex items-center gap-1">
                    <MdLocationOn className="" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <Discription className="sm:text-xs text-[8px] leading-[.5rem]">
                {exp.description}
              </Discription>

              {/* <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span 
                          key={techIdx}
                          className="px-3 py-1 bg-purple-900/30 text-purple-200 text-xs rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

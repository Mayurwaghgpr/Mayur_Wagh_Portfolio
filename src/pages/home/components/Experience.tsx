import { MdLocationOn, MdOutlineWorkOutline, MdTimeline } from "react-icons/md";
import Heading from "../../../components/Heading";
const experiences = [
  {
    title: "Backend Developer ",
    company: "SecurityBoat",
    period: "Nov 2025 - present",
    location: "Pune, India",
    description: (
      <ul className=" list-disc">
        {" "}
        <li>
          Developed GraphQl and RESTful APIs using Node.js, Apollo server,
          Express,PostgreSql and MongoDB.
        </li>
      </ul>
    ),
    technologies: ["React", "Node.js", "Express", "MongoDB", "Next.js"],
  },
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
    <section className="relative flex flex-col justify-center items-start gap-6 w-full py-10">
      <Heading className="flex items-center gap-2 text-cyan-400">
        <MdOutlineWorkOutline className="text-xl" />
        <span>Work Experience</span>
      </Heading>

      <div className="relative flex flex-col items-start justify-start gap-8 w-full h-full pl-2 sm:pl-4">
        {/* Timeline vertical line */}
        <div className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-60"></div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative flex items-start gap-4 sm:gap-6 w-full group"
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0 mt-1">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-slate-900 border-2 border-cyan-400 group-hover:border-purple-400 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md shadow-cyan-500/20">
                <MdTimeline className="text-cyan-300 group-hover:text-purple-300 text-xs sm:text-sm transition-colors" />
              </div>
            </div>

            {/* Card Content */}
            <div className="flex-1 bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 group-hover:border-slate-700/80 rounded-2xl p-5 shadow-lg transition-all duration-300 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/60 pb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-cyan-400 font-semibold text-xs sm:text-sm">
                      {exp.company}
                    </span>
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                      <MdLocationOn className="text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-medium text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/50 w-fit">
                  {exp.period}
                </span>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal [&_ul]:pl-5 [&_li]:mb-1">
                {exp.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent w-full"></div>
    </section>
  );
}

export default Experience;

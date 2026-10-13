import { MdLocationOn, MdOutlineWorkOutline } from "react-icons/md";
import Heading from "../../../components/Heading";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Backend Developer",
    company: "SecurityBoat",
    period: "Nov 2025 – Present",
    location: "Pune, India",
    type: "Full-Time",
    highlights: [
      "Architected Apollo GraphQL servers and robust RESTful API services using Node.js, Express, PostgreSQL, and MongoDB.",
      "Engineered secure authentication workflows featuring JWT tokens, session management, and granular role-based access control (RBAC).",
      "Designed and optimized database schemas and relational queries for enterprise security analytics and reporting workflows.",
    ],
    technologies: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB", "TypeScript", "Apollo Server"],
  },
  {
    title: "Software Developer Intern",
    company: "Webseeder Ltd",
    period: "Dec 2024 – Sept 2025",
    location: "Remote",
    type: "Internship",
    highlights: [
      "Engineered full-stack features for client-facing LMS, CRM, and real-time GPS tracking platforms using the MERN stack.",
      "Architected secure RESTful APIs with JWT and OAuth 2.0 verification, enforcing strict role-based authorization boundaries.",
      "Optimized complex MongoDB aggregation pipelines and PostgreSQL indexes, cutting query response latencies by ~30%.",
      "Implemented real-time bidirectional communication and live notifications utilizing Redis Pub/Sub and Socket.io.",
      "Collaborated in Agile sprints with cross-functional engineering teams, accelerating release cycles by 20%.",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "Socket.io"],
  },
  {
    title: "Python Developer Intern",
    company: "Borse Automation Pvt Ltd",
    period: "Aug 2023 – Jan 2024",
    location: "Nashik, India",
    type: "Internship",
    highlights: [
      "Developed intelligent vehicle dashcam software integrating OpenCV and computer vision models for driver face and attentiveness detection.",
      "Engineered desktop GUIs in PyQt5 for real-time industrial sensor telemetry, eliminating repetitive manual verification.",
      "Optimized multi-threaded video stream processing, boosting application frame-rate throughput and efficiency by 30%.",
    ],
    technologies: ["Python", "OpenCV", "PyQt5", "WebSockets", "Computer Vision"],
  },
];

function Experience() {
  return (
    <section id="experience" className="relative w-full py-12 md:py-16 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-20">
      <div className="space-y-10">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <Heading badge="Track Record">
              <span className="flex items-center gap-2.5">
                <MdOutlineWorkOutline className="text-zinc-700 dark:text-zinc-300 text-xl sm:text-2xl" />
                <span>Work Experience</span>
              </span>
            </Heading>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Proven engineering contributions across high-throughput backends, full-stack web applications, and automation systems.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 w-fit">
            3 Roles • 2+ Years Total
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative space-y-8">
          {/* Vertical continuous guide line mathematically centered through dot column (12px) */}
          <div className="absolute left-3 top-6 bottom-6 w-px bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
              
              {/* Timeline Indicator Dot */}
              <div className="w-6 shrink-0 flex justify-center mt-1 relative z-10">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white dark:bg-zinc-950 border-2 border-zinc-300 dark:border-zinc-700 group-hover:border-zinc-900 dark:group-hover:border-zinc-100 transition-colors flex items-center justify-center shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-zinc-400 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 transition-colors" />
                </div>
              </div>

              {/* Content Container - Blended with background without card box */}
              <div className="flex-1 space-y-3.5 pb-8 last:pb-0">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-zinc-200/60 dark:border-zinc-800/60 pb-3">
                  <div>
                    <h3 className="font-display font-semibold text-base sm:text-lg text-zinc-900 dark:text-zinc-100 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5 text-xs">
                      <span className="font-medium text-zinc-800 dark:text-zinc-200">{exp.company}</span>
                      <span className="text-zinc-400">•</span>
                      <span className="text-zinc-500 dark:text-zinc-400 flex items-center gap-1 font-mono">
                        <MdLocationOn className="text-zinc-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-0.5 rounded-full border border-zinc-200/70 dark:border-zinc-800/70 w-fit">
                    {exp.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 font-bold shrink-0 mt-0.5">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="font-mono text-xs text-zinc-400 mr-1">Stack:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full bg-zinc-100/70 dark:bg-zinc-900/70 border border-zinc-200/50 dark:border-zinc-800/50 text-xs font-mono text-zinc-600 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;


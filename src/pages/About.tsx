import Heading from "../components/Heading";
import GithubHeatMap from "../components/GithubHeatMap";
import { FaLightbulb } from "react-icons/fa";

export default function About() {
  const storySections = [
    {
      step: "01",
      title: "Curiosity & First Steps",
      text: (
        <>
          Hey there! I'm <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Mayur Wagh</span>, a
          passionate Software Developer who loves learning and building innovative software.
          My journey in tech began with curiosity and a simple goal — write some code, pass exams,
          and get a job. But everything changed when I got an opportunity to work as a{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">Python Developer Intern</span> at a
          small startup during my Master’s at{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">Sandip University, Nashik</span>.
          That experience gave me real-world exposure to development — how to approach problems,
          learn effectively, and build practical solutions.
        </>
      ),
      tags: ["Master's at Sandip University, Nashik", "Python Developer Intern", "Early Foundations"],
    },
    {
      step: "02",
      title: "Computer Vision & JavaScript Exploration",
      text: (
        <>
          I worked on projects using Python libraries like{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">OpenCV</span>,{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">PyQt</span>,{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">WebSockets</span>, and{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">YOLO</span>, which deepened my
          understanding of software development. At the same time, I developed a strong interest
          in <span className="font-semibold text-zinc-800 dark:text-zinc-200">JavaScript</span>, so I began
          learning it alongside my internship.
        </>
      ),
      tags: ["OpenCV", "PyQt", "YOLO", "WebSockets", "JavaScript"],
    },
    {
      step: "03",
      title: "Transition to Full-Stack & 'Spread'",
      text: (
        <>
          After completing my internship and Master’s degree, I fully dedicated myself to
          learning <span className="font-semibold text-zinc-800 dark:text-zinc-200">JavaScript</span>,
          frameworks, and full-stack development. One of my major full-stack projects is{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">“Spread”</span> — a publishing platform
          for developers. Through Spread, I learned how to build and scale applications,
          integrating features like authentication, notifications, real-time messaging, and more.
        </>
      ),
      tags: ["Full-Stack", "Spread Platform", "WebSockets", "Authentication", "Scalability"],
    },
    {
      step: "04",
      title: "Production Startup Systems",
      text: (
        <>
          After several months of learning and building, I landed a remote{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">Software Developer Internship</span> with
          an Indore-based startup. There, I worked on multiple live projects, including LMS,
          CRMs, GPS tracking systems, AI Chatbots, and School Management platforms. I also
          interacted directly with clients to gather requirements and implement new features.
        </>
      ),
      tags: ["LMS", "CRM", "GPS Tracking", "AI Chatbots", "Client Collaboration"],
    },
    {
      step: "05",
      title: "Systems, Caching & Real-Time Engineering",
      text: (
        <>
          Throughout my journey, I’ve developed systems involving notifications, messaging, post
          creation, Kanban views, Redis caching, AI integrations, and GPS tracking. Every project
          taught me something new and strengthened my passion for building impactful digital
          solutions.
        </>
      ),
      tags: ["Redis Caching", "Real-Time Messaging", "Kanban Workflows", "AI Integration"],
    },
    {
      step: "06",
      title: "Looking Forward",
      text: (
        <>
          I’ve come a long way from just “writing code to pass exams” — now, I’m constantly
          learning, creating, and looking for new challenges and opportunities to grow as a
          developer.
        </>
      ),
      tags: ["Continuous Growth", "Engineering Rigor", "Open to Opportunities"],
    },
  ];

  return (
    <div id="about" className="w-full py-8 md:py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3 max-w-2xl">
        <Heading badge="About Me">
          <span className="flex items-center gap-2.5">
            <FaLightbulb className="text-zinc-700 dark:text-zinc-300 text-2xl sm:text-3xl" />
            <span>My Developer Journey</span>
          </span>
        </Heading>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
          How curiosity evolved into full-stack engineering, real-time systems, and scalable product architecture.
        </p>
      </div>

      {/* Story Timeline Cards */}
      <div className="space-y-4">
        {storySections.map((section, index) => (
          <div
            key={index}
            className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900/40 hover:bg-zinc-50/70 dark:hover:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-200 shadow-sm space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800/80 pb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400 font-semibold bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                  Step {section.step}
                </span>
                <h3 className="font-display font-semibold text-base sm:text-lg text-zinc-900 dark:text-zinc-100">
                  {section.title}
                </h3>
              </div>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
              {section.text}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              {section.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/50 text-xs font-mono text-zinc-600 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Activity Heatmap */}
      <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <GithubHeatMap />
      </div>
    </div>
  );
}

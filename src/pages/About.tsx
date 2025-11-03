import { FaLightbulb } from "react-icons/fa";
import Heading from "../components/Heading";
import GithubHeatMap from "../components/GithubHeatMap";

function About() {
  const storySections = [
    {
      image: "/emoji1.png",
      text: (
        <>
          Hey there! I'm{" "}
          <span className="text-cyan-400 font-semibold">Mayur Wagh</span>, a
          passionate Software Developer who loves learning and building
          innovative software. My journey in tech began with curiosity and a
          simple goal — write some code, pass exams, and get a job. But
          everything changed when I got an opportunity to work as a{" "}
          <span className="font-semibold text-purple-400">
            Python Developer Intern
          </span>{" "}
          at a small startup during my Master’s. That experience gave me
          real-world exposure to development — how to approach problems, learn
          effectively, and build practical solutions.
        </>
      ),
    },
    {
      image: "/emoji2.png",
      text: (
        <>
          I worked on projects using Python libraries like{" "}
          <span className="font-semibold text-blue-400">OpenCV</span>,{" "}
          <span className="font-semibold text-blue-400">PyQt</span>,{" "}
          <span className="font-semibold text-blue-400">WebSockets</span>, and{" "}
          <span className="font-semibold text-blue-400">YOLO</span>, which
          deepened my understanding of software development. At the same time, I
          developed a strong interest in{" "}
          <span className="font-semibold text-yellow-400">JavaScript</span>, so
          I began learning it alongside my internship.
        </>
      ),
    },
    {
      image: "/emoji3.png",
      text: (
        <>
          After completing my internship and Master’s degree, I fully dedicated
          myself to learning{" "}
          <span className="font-semibold text-yellow-400">JavaScript</span>,
          frameworks, and full-stack development. One of my major full-stack
          projects is{" "}
          <span className="font-semibold text-cyan-400">“Spread”</span> — a
          publishing platform for developers. Through Spread, I learned how to
          build and scale applications, integrating features like
          authentication, notifications, real-time messaging, and more.
        </>
      ),
    },
    {
      image: "/emoji4.png",
      text: (
        <>
          After several months of learning and building, I landed a remote{" "}
          <span className="font-semibold text-purple-400">
            Software Developer Internship
          </span>{" "}
          with an Indore-based startup. There, I worked on multiple live
          projects, including LMS, CRMs, GPS tracking systems, AI Chatbots, and
          School Management platforms. I also interacted directly with clients
          to gather requirements and implement new features.
        </>
      ),
    },
    {
      image: "/emoji5.png",
      text: (
        <>
          Throughout my journey, I’ve developed systems involving notifications,
          messaging, post creation, Kanban views, Redis caching, AI
          integrations, and GPS tracking. Every project taught me something new
          and strengthened my passion for building impactful digital solutions.
        </>
      ),
    },
    {
      image: "/emoji6.png",
      text: (
        <>
          I’ve come a long way from just “writing code to pass exams” — now, I’m
          constantly learning, creating, and looking for new challenges and
          opportunities to grow as a developer.
        </>
      ),
    },
  ];

  return (
    <section id="about" className="w-full min-h-screen  relative py-20">
      <div className="relative z-10 space-y-10 mx-auto">
        {/* Header */}
        <Heading>
          <div className="flex items-center justify-start gap-2">
            <FaLightbulb />
            My Story
          </div>
        </Heading>

        {/* Story Section */}
        <div className=" bg-slate-800/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/20 min-h-[500px]">
          <div className="space-y-20 animate-fadeIn">
            <div className=" max-w-none lg:text-base sm:text-sm text-xs">
              {storySections.map((section, index) => (
                <div
                  key={index}
                  className="flex items-center mb-6 gap-6 flex-col sm:flex-row"
                >
                  {section.image && (
                    <img
                      src={section.image}
                      // alt={`story-${index}`}
                      className="w-20  object-cover"
                    />
                  )}
                  <p className="text-slate-300 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
            <GithubHeatMap />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

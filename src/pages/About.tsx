import { FaRocket, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen sm:max-w-4xl mx-auto relative overflow-hidden"
    >
      <div className="relative z-10 space-y-10 mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <div
            key={"story"}
            className={`
                flex items-center w-fit mx-auto gap-2 sm:px-6 sm:py-3 px-3 py-1.5 sm:text-base text-sm rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/40

              `}
          >
            <FaLightbulb />
            My Story
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-slate-800/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/20 min-h-[500px]">
          <div className="space-y-6 animate-fadeIn ">
            <div className=" max-w-none lg:text-base sm:text-sm text-xs">
              <p className=" text-slate-300 leading-relaxed mb-6">
                Hey there! I'm{" "}
                <span className="text-cyan-400 font-semibold">Mayur Wagh</span>,
                a passionate Software Developer who loves learning and building
                innovative software. My journey in tech began with curiosity and
                a simple goal — write some code, pass exams, and get a job. But
                everything changed when I got an opportunity to work as a{" "}
                <span className="font-semibold text-purple-400">
                  Python Developer Intern
                </span>{" "}
                at a small startup during my Master’s. That experience gave me
                real-world exposure to development — how to approach problems,
                learn effectively, and build practical solutions.
              </p>
              <p className="text-slate-300">
                I worked on projects using Python libraries like{" "}
                <span className="font-semibold text-blue-400">OpenCV</span>,{" "}
                <span className="font-semibold text-blue-400">PyQt</span>,{" "}
                <span className="font-semibold text-blue-400">WebSockets</span>,
                and <span className="font-semibold text-blue-400">YOLO</span>,
                which deepened my understanding of software development. At the
                same time, I developed a strong interest in{" "}
                <span className="font-semibold text-yellow-400">
                  JavaScript
                </span>
                , so I began learning it alongside my internship.
              </p>
              <br />

              <p className="text-slate-300">
                After completing my internship and Master’s degree, I fully
                dedicated myself to learning{" "}
                <span className="font-semibold text-yellow-400">
                  JavaScript
                </span>
                , frameworks, and full-stack development. One of my major
                full-stack projects is{" "}
                <span className="font-semibold text-cyan-400">“Spread”</span> —
                a publishing platform for developers. Through Spread, I learned
                how to build and scale applications, integrating features like
                authentication, notifications, real-time messaging, and more.
              </p>
              <br />

              <p className="text-slate-300">
                After several months of learning and building, I landed a remote{" "}
                <span className="font-semibold text-purple-400">
                  Software Developer Internship
                </span>{" "}
                with an Indore-based startup. There, I worked on multiple live
                projects, including LMS, CRMs, GPS tracking systems, AI
                Chatbots, and School Management platforms. I also interacted
                directly with clients to gather requirements and implement new
                features.
              </p>
              <br />
              <p className="text-slate-300">
                Throughout my journey, I’ve developed systems involving
                notifications, messaging, post creation, Kanban views, Redis
                caching, AI integrations, and GPS tracking. Every project taught
                me something new and strengthened my passion for building
                impactful digital solutions.
              </p>
              <br />

              <p className="text-slate-300">
                I’ve come a long way from just “writing code to pass exams” —
                now, I’m constantly learning, creating, and looking for new
                challenges and opportunities to grow as a developer.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FaRocket className="text-purple-400" />
                    My Mission
                  </h3>
                  <p className="text-slate-300">
                    To create technology that bridges the gap between complex
                    problems and elegant solutions. I believe in writing clean,
                    maintainable code that not only works — but tells a story.
                  </p>
                </div>

                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FaLightbulb className="text-blue-400" />
                    My Approach
                  </h3>
                  <p className="text-slate-300">
                    I focus on understanding the 'why' and 'how' behind every
                    project. Whether it’s optimizing performance or crafting
                    user interfaces, I aim to build solutions that are
                    technically challenging and creatively satisfying.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Quick Facts
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-300">1+</div>
                    <div className="text-sm text-slate-400">
                      Years Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-300">8+</div>
                    <div className="text-sm text-slate-400">
                      Projects Completed
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-300">10+</div>
                    <div className="text-sm text-slate-400">Technologies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-300">∞</div>
                    <div className="text-sm text-slate-400">Water Consumed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import { FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import profileImage from "../../../assets/image/profileimage.png";
import { GoArrowDown } from "react-icons/go";
import Discription from "../../../components/Discription";
import { FiMail } from "react-icons/fi";

function Intro() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="intro" className="relative  h-screen w-fit py-20 ">
      <div className="relative z-10 flex justify-center items-center px-4 h-full w-full">
        <div className="container flex lg:flex-row flex-col-reverse justify-center items-center gap-12 lg:gap-20 sm:px-20 w-full">
          {/* Text Content */}
          <article
            className={`
              space-y-8
            transition-all duration-1000 ease-out transform
            ${mounted ? "" : "opacity-0"}
            overflow-hidden order-2 lg:order-1
          `}
          >
            <div className="space-y-6 ">
              <div className="space-y-5">
                <h2 className="text-2xl lg:text-4xl font-bold text-slate-100">
                  Driven by tech,I'm a{" "}
                  <span className=" text-transparent bg-clip-text text-clip bg-gradient-to-r from-cyan-200 via-blue-500 to-blue-400 ">
                    Software Developer
                  </span>
                </h2>
                <Discription>
                  Passionate about technologies, building digital Solutions with
                  strong expertise in the MERN stack and experience building
                  scalable full stack web applications.I enjoy solving problems,
                  learning new technologies, and creating impactful digital
                  solutions.I focus on writing clean, efficient code and
                  continuously upskilling to deliver high quality software.
                </Discription>
              </div>
            </div>
            <h3 className="text-slate-300 text-xs">
              Trying make something different in shadows 🥷🏻
            </h3>
          </article>

          {/* Profile Image Section */}
          <div className="flex justify-center items-center relative order-1 lg:order-2">
            <div className="relative">
              <div
                className={`
                absolute inset-0 transition-all duration-1000 ease-out
           scale-110
              `}
              >
                <div className="absolute inset-0 border-2 border-cyan-500 rounded-full "></div>
                <div className="absolute inset-2 border-2 border-blue-500/70 rounded-full "></div>
                <div className="absolute inset-4 border border-sky-500/50 rounded-full "></div>
              </div>

              {/* Profile Image */}
              <div
                className={`
                  relative transition-all duration-700 ease-out transform
                  w-48 h-48 lg:w-60 lg:h-60

                  rounded-full overflow-hidden cursor-pointer group
                  shadow-2xl shadow-purple-500/30 hover:shadow-purple-400/40
                  ring-4 ring-purple-500/40 hover:ring-purple-400/60
                  ${
                    mounted
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }
                `}
                style={{ transitionDelay: mounted ? "300ms" : "0ms" }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-transparent to-blue-600/30 group-hover:from-purple-500/40 group-hover:to-blue-500/40 transition-all duration-500 rounded-full z-10"></div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full z-20"></div>

                {/* Image */}
                <img
                  className="w-full h-full object-cover object-center"
                  src={profileImage}
                  alt="Mayur Wagh"
                />
              </div>

              {/* Social Icons Container */}
              <div
                className={`
                absolute inset-0 transition-all duration-700 ease-out

              `}
              >
                <div className="relative w-full h-full">
                  {/* GitHub */}
                  <a
                    className="absolute -top-4 -left-4 p-4 bg-slate-800/80 backdrop-blur-sm text-slate-200 hover:bg-slate-700 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 rounded-full shadow-lg shadow-black/30 border border-slate-600/50 group"
                    href="https://github.com/mayurwaghgpr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    style={{ transitionDelay: "100ms" }}
                  >
                    <FaGithub className="text-xl" />
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                      GitHub
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    className="absolute top-1/2 -left-8 -translate-y-1/2 p-4 bg-slate-800/80 backdrop-blur-sm text-slate-200 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-x-2 rounded-full shadow-lg shadow-black/30 border border-slate-600/50 group"
                    href="https://linkedin.com/in/mayur-wagh-751b8a24b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    style={{ transitionDelay: "200ms" }}
                  >
                    <GrLinkedinOption className="text-xl" />
                    <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 bg-slate-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                      LinkedIn
                    </div>
                  </a>

                  {/* Twitter */}
                  <a
                    className="absolute -bottom-4 -left-4 p-4 bg-slate-800/80 backdrop-blur-sm text-slate-200 hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:translate-y-2 rounded-full shadow-lg shadow-black/30 border border-slate-600/50 group"
                    href="https://twitter.com/mayurwagh152064"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                  >
                    <FaXTwitter className="text-xl" />
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                      Twitter
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    className="absolute top-1/2 -right-8 -translate-y-1/2 p-4 bg-slate-800/80 backdrop-blur-sm text-slate-200 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:translate-x-2 rounded-full shadow-lg shadow-black/30 border border-slate-600/50 group"
                    href="mailto:mayur2002wagh@gmail.com"
                    aria-label="Email"
                  >
                    <FiMail />
                    <div className="absolute top-1/2 left-20 transform -translate-y-1/2 bg-slate-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                      Email
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 w-full text-xl">
        {/* Scroll indicator */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <GoArrowDown className=" text-slate-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default Intro;

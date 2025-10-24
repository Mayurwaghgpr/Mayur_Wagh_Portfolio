import { FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import profileImage from "../../../assets/image/profileimage.png";
import Discription from "../../../components/Discription";
import { FiMail } from "react-icons/fi";
type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
  position: string; // positioning classes
  hoverColor: string; // hover background color
  tooltipPosition: string; // tooltip placement classes
};
function Intro() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/mayurwaghgpr",
      label: "GitHub",
      icon: <FaGithub />,
      position: "absolute -top-4 -left-4",
      hoverColor: "hover:bg-slate-700",
      tooltipPosition: "absolute -top-12 left-1/2 -translate-x-1/2",
    },
    {
      href: "https://linkedin.com/in/mayur-wagh-751b8a24b/",
      label: "LinkedIn",
      icon: <GrLinkedinOption />,
      position: "absolute top-1/2 -left-8 -translate-y-1/2",
      hoverColor: "hover:bg-blue-600",
      tooltipPosition: "absolute top-1/2 -left-20 -translate-y-1/2",
    },
    {
      href: "https://twitter.com/mayurwagh152064",
      label: "Twitter",
      icon: <FaXTwitter />,
      position: "absolute -bottom-4 -left-4",
      hoverColor: "hover:bg-blue-400",
      tooltipPosition: "absolute -bottom-12 left-1/2 -translate-x-1/2",
    },
    {
      href: "mailto:mayur2002wagh@gmail.com",
      label: "Email",
      icon: <FiMail />,
      position: "absolute top-1/2 -right-8 -translate-y-1/2",
      hoverColor: "hover:bg-purple-600",
      tooltipPosition: "absolute top-1/2 left-10 -translate-y-1/2",
    },
  ];

  return (
    <section id="intro" className="relative max-w-4xl mx-auto sm:py-36">
      <div className="relative z-10 flex justify-center items-center  h-full ">
        <div className="container flex lg:flex-row flex-col-reverse justify-center sm:items-start items-center gap-12 lg:gap-20  w-full">
          {/* Profile image section */}
          <div className="flex justify-center items-center relative ">
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
                  w-32 h-32 lg:w-40 lg:h-40

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
                <div className="relative w-full h-full text-sm">
                  {socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className={`${link.position} group p-2 bg-slate-800/80 backdrop-blur-sm 
            text-slate-200 ${link.hoverColor} hover:text-white 
            transition-all duration-300 transform hover:scale-110 
            rounded-full shadow-lg shadow-black/30 border border-slate-600/50`}
                      style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                    >
                      {link.icon}
                      {/* Tooltip */}
                      <div
                        className={`${link.tooltipPosition} bg-slate-700 text-white px-2 py-1 
              rounded text-xs opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 whitespace-nowrap shadow-lg`}
                      >
                        {link.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Text Content */}
          <article
            className={`
              space-y-8
            transition-all duration-1000 ease-out transform
            ${mounted ? "" : "opacity-0"}
            overflow-hidden
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
                  strong knowledge in the MERN stack and experience building
                  scalable full stack web applications.I enjoy solving problems,
                  learning new technologies, and creating impactful digital
                  solutions.I focus on writing clean, efficient code and
                  continuously upskilling to deliver high quality software.
                </Discription>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-between gap-4 sm:items-center text-xs">
              <h3 className="text-slate-300 ">
                Trying make something different in shadows 🥷🏻
              </h3>
              <a
                href="https://drive.google.com/file/d/1DCGMGJg8fRBmb9dRIp1JckDsVFDOrrp-/view?usp=drive_link"
                download
              >
                <button className=" border rounded-lg px-3 py-2 font-bold">
                  Download CV{" "}
                </button>
              </a>
            </div>
          </article>
        </div>
      </div>
      {/* <div className="absolute bottom-8 w-full text-xl">
        Scroll indicator
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <GoArrowDown className=" text-slate-400 animate-bounce" />
        </div>
      </div> */}
    </section>
  );
}

export default Intro;

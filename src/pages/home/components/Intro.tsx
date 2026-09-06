import { FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import profileImageFallback from "/profileimage.png";
import Discription from "../../../components/Discription";
import { FiMail } from "react-icons/fi";
import { TbFileCv } from "react-icons/tb";
import axiosInstance from "../../../utils/axiosInstance";

type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
  position: string;
  hoverColor: string;
  tooltipPosition: string;
};

function Intro() {
  const [mounted, setMounted] = useState(false);

  const { data: profile } = useQuery<any>({
    queryKey: ["candidateProfile"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get<{ data: any }>("/candidate-profile/get");
        return res?.data?.data;
      } catch {
        return null;
      }
    },
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const fullName = profile?.fullName || "Mayur Wagh";
  const firstName = fullName.split(" ")[0] || "Mayur";
  const role = profile?.currentRole || "Full Stack Developer";
  const avatar = profile?.avatarUrl || profileImageFallback;
  const bio =
    profile?.summary ||
    "Passionate about engineering digital solutions with strong expertise in the MERN stack, GraphQL, PostgreSQL, and scalable web applications. I focus on writing clean, robust code and building impactful products that solve real-world problems.";
  const rawResumeUrl =
    profile?.resumeFileUrl ||
    profile?.resumes?.[0]?.resumeUrl ||
    "https://drive.google.com/file/d/1qFCRRd40MiC1-ej4xK_vGzcClNdkCtep/view?usp=drive_link";

  const backendOrigin = (import.meta.env.VITE_BASE_URL || "http://localhost:5500").replace(/\/api\/?$/, "");
  const resumeUrl = rawResumeUrl.startsWith("/api")
    ? `${backendOrigin}${rawResumeUrl}`
    : rawResumeUrl;

  const socialLinks: SocialLink[] = [
    {
      href: profile?.socialLinks?.github || "https://github.com/mayurwaghgpr",
      label: "GitHub",
      icon: <FaGithub />,
      position: "absolute -top-4 -left-4",
      hoverColor: "hover:bg-slate-700",
      tooltipPosition: "absolute -top-12 left-1/2 -translate-x-1/2",
    },
    {
      href: profile?.socialLinks?.linkedin || "https://linkedin.com/in/mayur-wagh-751b8a24b/",
      label: "LinkedIn",
      icon: <GrLinkedinOption />,
      position: "absolute top-1/2 -left-12 -translate-y-1/2",
      hoverColor: "hover:bg-blue-600",
      tooltipPosition: "absolute top-1/2 -left-20 -translate-y-1/2",
    },
    {
      href: profile?.socialLinks?.twitter || "https://twitter.com/mayurwagh152064",
      label: "Twitter",
      icon: <FaXTwitter />,
      position: "absolute -bottom-4 -left-4",
      hoverColor: "hover:bg-blue-400",
      tooltipPosition: "absolute -bottom-12 left-1/2 -translate-x-1/2",
    },
    {
      href: profile?.email ? `mailto:${profile.email}` : "mailto:mayur2002wagh@gmail.com",
      label: "Email",
      icon: <FiMail />,
      position: "absolute -bottom-12 left-14",
      hoverColor: "hover:bg-purple-600",
      tooltipPosition: "absolute top-1/2 left-10 -translate-y-1/2",
    },
  ];

  return (
    <section id="intro" className="relative w-full py-12 md:py-16">
      <div className="relative z-10 flex justify-center items-center h-full w-full">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10 lg:gap-14">

          {/* Profile image section */}
          <div className="flex justify-center items-center relative w-fit shrink-0 my-6 md:my-0">
            {/* Sonar Radar Ping Wave */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping opacity-30 pointer-events-none" style={{ animationDuration: '3.5s' }} />

            {/* Sci-Fi Rotating Dashed HUD Ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-cyan-500/40 animate-[spin_20s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-8 rounded-full border border-dotted border-purple-500/30 animate-[spin_35s_linear_infinite_reverse] pointer-events-none" />

            {/* Ambient decorative glowing rings */}
            <div className="absolute inset-0 transition-all duration-1000 ease-out scale-110 pointer-events-none">
              <div className="absolute inset-0 border-2 border-cyan-500/60 rounded-full"></div>
              <div className="absolute inset-2 border-2 border-blue-500/50 rounded-full"></div>
              <div className="absolute inset-4 border border-sky-500/40 rounded-full"></div>
            </div>

            {/* Profile Image Avatar */}
            <div
              className={`
                relative transition-all duration-700 ease-out transform
                w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40
                z-10 rounded-full overflow-hidden cursor-pointer group
                shadow-2xl shadow-purple-500/30 hover:shadow-cyan-400/50
                ring-4 ring-purple-500/40 hover:ring-cyan-400/80
              `}
              style={{ transitionDelay: mounted ? "300ms" : "0ms" }}
            >
              {/* Animated sweep shine on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-transparent to-cyan-500/30 group-hover:from-purple-500/40 group-hover:to-cyan-400/40 transition-all duration-500 rounded-full z-10"></div>
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full z-20"></div>

              <img
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                src={avatar}
                alt={fullName}
              />
            </div>

            {/* Social Icons Container with Entrance Rotation & Scale Transition */}
            <div
              className={`
                absolute inset-0 transition-all duration-700 ease-out z-20
                ${mounted ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -z-10 -rotate-45"}
              `}
            >
              <div className="relative w-full h-full text-sm">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`${link.position} group p-2.5 bg-slate-900/90 backdrop-blur-md 
                    text-slate-200 ${link.hoverColor} hover:text-white 
                    transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5
                    rounded-full shadow-lg shadow-black/50 border border-slate-700/80 hover:shadow-cyan-500/20`}
                  >
                    <span className="text-base">{link.icon}</span>
                    {/* Tooltip */}
                    <div
                      className={`${link.tooltipPosition} bg-slate-800 text-slate-100 px-2.5 py-1 
                      rounded-lg text-xs opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 whitespace-nowrap shadow-xl border border-slate-700 pointer-events-none z-30`}
                    >
                      {link.label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Text Content */}
          <article
            className={`
              flex-1 w-full space-y-6 text-center md:text-left
              transition-all duration-1000 ease-out transform
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <div className="space-y-4">
              {/* Live Status Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-semibold shadow-md shadow-emerald-950/40 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for New Roles & Projects</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
                Hey, I'm {firstName},{" "}
                <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                  {role}
                </span>
              </h1>
              <Discription className="mx-auto md:mx-0">
                {bio}
              </Discription>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80">
              <span className="text-xs sm:text-sm text-slate-400 font-medium">
                Trying to make something different in shadows 🥷🏻
              </span>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/60 shadow-md hover:shadow-cyan-500/20 transition-all duration-300 group overflow-hidden cursor-pointer"
              >
                {/* Shine Sweep Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <TbFileCv className="text-base text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Download CV</span>
              </a>
            </div>
          </article>
        </div>
      </div>
      <div className="absolute bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent w-full"></div>
    </section>
  );
}

export default Intro;

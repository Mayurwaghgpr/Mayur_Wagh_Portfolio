import { FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiArrowDownRight } from "react-icons/fi";
import { TbFileCv } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import profileImageFallback from "/profileimage.png";
import axiosInstance from "../../../utils/axiosInstance";
import type { CandidateProfile } from "../../../types";

function Intro() {
  const { data: profile } = useQuery<CandidateProfile | null>({
    queryKey: ["candidateProfile"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get<{ data: CandidateProfile }>("/candidate-profile/get");
        return res?.data?.data || null;
      } catch {
        return null;
      }
    },
    staleTime: 1000 * 60 * 5,
  });

  const fullName = profile?.fullName || "Mayur Wagh";
  const firstName = fullName.split(" ")[0] || "Mayur";
  const avatar = profile?.avatarUrl || profileImageFallback;
  const role = "Full Stack Developer";

  const bio =
    "I build software that is fast, resilient, and built to scale. From robust backend architectures to intuitive digital experiences, I focus on solving complex problems and turning ambitious ideas into reliable, high performance products.";

  const rawResumeUrl =
    profile?.resumeFileUrl ||
    profile?.resumes?.[0]?.resumeUrl ||
    "https://drive.google.com/file/d/1qFCRRd40MiC1-ej4xK_vGzcClNdkCtep/view?usp=drive_link";

  const backendOrigin = (import.meta.env.VITE_BASE_URL || "http://localhost:5500").replace(/\/api\/?$/, "");
  const resumeUrl = rawResumeUrl.startsWith("/api")
    ? `${backendOrigin}${rawResumeUrl}`
    : rawResumeUrl;

  const githubUrl = profile?.socialLinks?.github || "https://github.com/mayurwaghgpr";
  const linkedinUrl = profile?.socialLinks?.linkedin || "https://linkedin.com/in/mayur-wagh-751b8a24b/";
  const twitterUrl = profile?.socialLinks?.twitter || "https://twitter.com/mayurwagh152064";
  const emailUrl = profile?.email ? `mailto:${profile.email}` : "mailto:mayur2002wagh@gmail.com";

  return (
    <section id="intro" className="relative w-full pt-8 pb-14 md:py-16 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">

        {/* Left Column: Narrative & Identity */}
        <div className="flex-1 space-y-6">

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-zinc-800 dark:text-zinc-200">Available for New Roles & Projects</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.18] transition-colors">
              Hey, I'm {firstName}
            </h1>


            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal transition-colors">
              {bio}
            </p>
          </div>

          {/* Primary Action Calls */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-medium text-sm transition-all duration-200 shadow-sm active:scale-95 group"
            >
              <span>See My Work</span>
              <FiArrowDownRight className="text-base group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium text-sm transition-all duration-200 shadow-sm active:scale-95 group"
            >
              <TbFileCv className="text-base text-zinc-500 dark:text-zinc-400 group-hover:scale-110 transition-transform" />
              <span>Download CV</span>
            </a>

            <a
              href={emailUrl}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-medium transition-colors"
            >
              <FiMail className="text-base" />
              <span>mayur2002wagh@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Right Column: Circular Avatar & Social Links */}
        <div className="w-full lg:w-auto shrink-0 flex flex-col items-center">
          <div className="flex flex-col items-center group">
            {/* Circular Profile Avatar without enclosing card frame */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800 group-hover:ring-zinc-400 dark:group-hover:ring-zinc-600 transition-all duration-300 shadow-md bg-zinc-100 dark:bg-zinc-900">
              <img
                src={avatar}
                alt={fullName}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Direct Title below without 'Role:' label */}
            <div className="mt-3.5 text-center">
              <span className="font-display font-medium text-sm sm:text-base text-zinc-700 dark:text-zinc-300 tracking-tight transition-colors">
                {role}
              </span>
            </div>
          </div>

          {/* Social Row with smooth micro-interactions */}
          <div className="flex items-center gap-2 mt-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
            >
              <GrLinkedinOption className="text-lg" />
            </a>
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
            >
              <FaXTwitter className="text-lg" />
            </a>
            <a
              href={emailUrl}
              aria-label="Send Email"
              className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
            >
              <FiMail className="text-lg" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Intro;

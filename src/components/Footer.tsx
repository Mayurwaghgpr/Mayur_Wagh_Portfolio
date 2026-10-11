import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import profileImageFallback from "/profileimage.png";
import axiosInstance from "../utils/axiosInstance";
import type { CandidateProfile } from "../types";

function Footer() {
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

  const name = profile?.fullName || "Mayur Wagh";
  const avatar = profile?.avatarUrl || profileImageFallback;
  const role = profile?.currentRole || "Full Stack Developer";
  const github = profile?.socialLinks?.github || "https://github.com/Mayurwaghgpr";
  const twitter = profile?.socialLinks?.twitter || "https://x.com/mayurwagh152064";
  const linkedin = profile?.socialLinks?.linkedin || "https://www.linkedin.com/in/mayur-wagh-751b8a24b/";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full pt-14 pb-10 border-t border-zinc-200 dark:border-zinc-800 mt-16 text-zinc-500 dark:text-zinc-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Identity */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full overflow-hidden ring-1 ring-zinc-300 dark:ring-zinc-700 bg-zinc-100 dark:bg-zinc-900 shrink-0">
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <span className="font-display font-medium text-zinc-900 dark:text-zinc-100 text-sm block">
              {name}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono block">
              {role}
            </span>
          </div>
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all text-sm"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all text-sm"
              aria-label="LinkedIn"
            >
              <BsLinkedin />
            </a>
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all text-sm"
              aria-label="Twitter / X"
            >
              <BsTwitterX />
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white text-xs font-mono transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <FiArrowUp className="text-xs" />
          </button>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/60 text-xs text-zinc-500 font-mono">
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        <p>Built with React, Next-gen Tailwind & TypeScript</p>
      </div>
    </footer>
  );
}

export default Footer;

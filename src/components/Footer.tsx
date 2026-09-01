import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import useIcon from "../hooks/useIcon";
import axiosInstance from "../utils/axiosInstance";

function Footer() {
  const icons = useIcon();

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

  const name = profile?.fullName || "Mayur Wagh";
  const github = profile?.socialLinks?.github || "https://github.com/Mayurwaghgpr";
  const twitter = profile?.socialLinks?.twitter || "https://x.com/mayurwagh152064";
  const linkedin = profile?.socialLinks?.linkedin || "https://www.linkedin.com/in/mayur-wagh-751b8a24b/";

  return (
    <footer className="w-full pt-16 pb-8 border-t border-slate-800/80 flex flex-col items-center justify-center gap-6 mt-16 text-slate-400">
      <div className="flex items-center gap-3">
        <img
          className="w-7 h-7 object-contain"
          src="/emoji6.png"
          alt="Avatar"
        />
        <span className="font-bold text-slate-200 text-sm tracking-wide">
          {name}
        </span>
      </div>

      <div className="flex items-center gap-5 text-lg">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all duration-200 hover:scale-110 shadow-sm"
          aria-label="GitHub"
        >
          {icons["github"]}
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all duration-200 hover:scale-110 shadow-sm"
          aria-label="Twitter / X"
        >
          <BsTwitterX />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-blue-400 transition-all duration-200 hover:scale-110 shadow-sm"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>
      </div>

      <p className="text-xs text-slate-500 font-medium">
        © {new Date().getFullYear()} {name}. Built with React & Tailwind CSS.
      </p>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import profileImageFallback from "/profileimage.png";
import axiosInstance from "../utils/axiosInstance";
import type { CandidateProfile } from "../types";

function NameHeader() {
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

  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-100/70 hover:bg-zinc-200/70 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800 transition-all duration-200 backdrop-blur-md shadow-sm"
      aria-label="Mayur Wagh - Back to homepage"
    >
      <div className="relative w-6 h-6 rounded-full overflow-hidden ring-1 ring-zinc-300 dark:ring-zinc-700 group-hover:ring-zinc-500 transition-all shrink-0">
        <img
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          src={avatar}
          alt={name}
        />
      </div>

      <div className="flex items-center gap-2">
        <span className="font-display font-semibold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 transition-colors tracking-tight">
          {name}
        </span>
        <span className="relative flex h-2 w-2" title="Available for opportunities">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      </div>
    </Link>
  );
}

export default NameHeader;


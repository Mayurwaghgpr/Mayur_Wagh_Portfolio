import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import profileImageFallback from "/profileimage.png";
import axiosInstance from "../utils/axiosInstance";

function NameHeader() {
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
  const avatar = profile?.avatarUrl || profileImageFallback;

  return (
    <div className="flex justify-center gap-3 items-center overflow-hidden p-2.5 py-1.5 rounded-full text-white border w-fit bg-black bg-opacity-20 z-40 backdrop-blur-xl border-slate-800">
      <Link to={"/"} className="flex items-center gap-3 w-full h-full">
        <div className="relative sm:w-6 sm:h-6 w-5 h-5 rounded-full overflow-hidden shrink-0">
          <img
            className="w-full h-full object-cover object-center"
            src={avatar}
            alt={name}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 w-full animate-pulse pointer-events-none"></div>

        <h1 className="text-xs sm:font-bold font-semibold tracking-tight">{name}</h1>
      </Link>
    </div>
  );
}

export default NameHeader;

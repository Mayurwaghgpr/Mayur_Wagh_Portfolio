import { useEffect, useState } from "react";

function CardSkeleton({}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative group  max-w-[40rem] w-full max-h-[40rem] border-inherit bg-black border   backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden">
      <div className="relative flex flex-col items-start justify-center gap-4 w-full h-full p-6">
        <div className="flex  flex-col justify-center sm:items-start items-center gap-6 w-full">
          {/* Image Section with Enhanced Styling */}
          <div className="relative overflow-hidden rounded-xl group/img h-52  w-full shrink-0">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10" />

            {/* Image indicators */}
            {
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {Array(3)
                  .fill(null)
                  .map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white w-6"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
              </div>
            }
          </div>

          {/* Description with fade effect */}
          <div className="relative flex-grow overflow-hidden min-w-[70%] space-y-2 animate-pulse">
            <p className="text-xs text-gray-300 leading-relaxed line-clamp-7 bg-gray-600/30 w-full h-3 rounded-full"></p>
            <p className="text-xs text-gray-300 leading-relaxed line-clamp-7 bg-gray-600/30 w-full h-3 rounded-full"></p>
            <p className="text-xs text-gray-300 leading-relaxed line-clamp-7 bg-gray-600/30 w-full h-3 rounded-full"></p>
            <p className="text-xs text-gray-300 leading-relaxed line-clamp-7 bg-gray-600/30 w-full h-3 rounded-full"></p>
            {/* <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent" /> */}
          </div>
        </div>

        {/* Technologies with enhanced styling */}
        <div className="relative flex justify-start items-center flex-wrap gap-2 w-full">
          <span className="text-xs font-medium text-gray-400">Tech Stack:</span>
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="group/tech relative animate-pulse">
                <div className="flex items-center text-base gap-2 p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-full transition-all duration-300 cursor-default">
                  <span className="flex text-xs peer w-fit"></span>
                </div>
              </div>
            ))}
        </div>

        {/* Links with enhanced buttons */}
        <div className="flex items-center gap-3">
          <span className="sm:text-sm text-xs font-medium text-gray-400">
            Links:
          </span>
          {Array(2)
            .fill(null)
            .map((_, index) => {
              return (
                <span
                  key={index}
                  className="group/btn flex items-center justify-center gap-2 p-3 animate-pulse bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/40 border border-purple-500/30 hover:border-purple-400/60 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <span className="text-xs group-hover/btn:scale-110 transition-transform duration-300"></span>
                </span>
              );
            })}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default CardSkeleton;

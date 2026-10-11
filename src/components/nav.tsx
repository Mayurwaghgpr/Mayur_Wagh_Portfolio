import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import { TbFileCv } from "react-icons/tb";
import { FiSun, FiMoon } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import useIcon from "../hooks/useIcon";
import NameHeader from "./NameHeader";
import axiosInstance from "../utils/axiosInstance";
import type { CandidateProfile } from "../types";
import { useTheme } from "../hooks/useTheme";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const icons = useIcon();
  const { theme, toggleTheme } = useTheme();

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

  const rawResumeUrl =
    profile?.resumeFileUrl ||
    profile?.resumes?.[0]?.resumeUrl ||
    "https://drive.google.com/file/d/1qFCRRd40MiC1-ej4xK_vGzcClNdkCtep/view?usp=drive_link";

  const backendOrigin = (import.meta.env.VITE_BASE_URL || "http://localhost:5500").replace(/\/api\/?$/, "");
  const resumeUrl = rawResumeUrl.startsWith("/api")
    ? `${backendOrigin}${rawResumeUrl}`
    : rawResumeUrl;

  const navLinks = [
    { icon: "home", name: "Overview", href: "/" },
    { icon: "about", name: "About", href: "/about" },
    { icon: "contact", name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`
        sticky top-4 w-full z-50 transition-all duration-300
        ${mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
      `}
    >
      <div
        className={`
          flex items-center justify-between gap-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full
          transition-all duration-300 backdrop-blur-xl border
          ${
            isScrolled
              ? "bg-white/90 dark:bg-zinc-950/90 border-zinc-200 dark:border-zinc-800 shadow-md shadow-zinc-200/50 dark:shadow-black/40"
              : "bg-white/75 dark:bg-zinc-950/70 border-zinc-200/80 dark:border-zinc-800/80 shadow-sm"
          }
        `}
      >
        <NameHeader />

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/80 p-1 rounded-full border border-zinc-200 dark:border-zinc-800"
        >
          {navLinks.map((link) => {
            const isActive = link.href === location.pathname;
            return (
              <NavLink
                key={link.name}
                to={link.href}
                className={`
                  relative flex items-center gap-2 px-3.5 py-1.5 rounded-full font-medium text-xs tracking-tight
                  transition-all duration-300 ease-out border
                  ${
                    isActive
                      ? "text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-800 shadow-sm border-zinc-200 dark:border-zinc-700 font-semibold"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white/60 dark:hover:bg-zinc-800/40 border-transparent"
                  }
                `}
              >
                <span className="text-sm opacity-80 transition-transform duration-200 group-hover:scale-110">
                  {icons[link.icon as keyof typeof icons]}
                </span>
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Right Actions: Resume & Theme Switcher */}
        <div className="hidden md:flex items-center gap-2">
          {/* Smooth Rotating Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="relative p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 active:scale-95 group overflow-hidden"
          >
            <div className="relative w-4 h-4 flex items-center justify-center">
              <FiSun
                className={`absolute inset-0 m-auto text-sm transition-all duration-300 transform ${
                  theme === "dark"
                    ? "rotate-0 scale-100 opacity-100 text-amber-400"
                    : "-rotate-90 scale-0 opacity-0"
                }`}
              />
              <FiMoon
                className={`absolute inset-0 m-auto text-sm transition-all duration-300 transform ${
                  theme === "light"
                    ? "rotate-0 scale-100 opacity-100 text-zinc-700"
                    : "rotate-90 scale-0 opacity-0"
                }`}
              />
            </div>
          </button>

          {/* Resume Quick Action */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 text-xs font-medium transition-all duration-200 group shadow-sm active:scale-95"
          >
            <TbFileCv className="text-sm group-hover:scale-110 transition-transform" />
            <span>Resume</span>
            <span className="text-[10px] opacity-70 group-hover:translate-x-0.5 transition-transform">↗</span>
          </a>
        </div>

        {/* Mobile Menu & Theme Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 active:scale-95 overflow-hidden"
          >
            <div className="relative w-4 h-4 flex items-center justify-center">
              <FiSun
                className={`absolute inset-0 m-auto text-sm transition-all duration-300 transform ${
                  theme === "dark"
                    ? "rotate-0 scale-100 opacity-100 text-amber-400"
                    : "-rotate-90 scale-0 opacity-0"
                }`}
              />
              <FiMoon
                className={`absolute inset-0 m-auto text-sm transition-all duration-300 transform ${
                  theme === "light"
                    ? "rotate-0 scale-100 opacity-100 text-zinc-700"
                    : "rotate-90 scale-0 opacity-0"
                }`}
              />
            </div>
          </button>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className="p-2 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm active:scale-95 transition-transform"
          >
            <TbFileCv />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="relative p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 active:scale-95"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <HiMenu
                className={`absolute inset-0 m-auto text-lg transition-all duration-300 transform ${
                  isMobileMenuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <HiX
                className={`absolute inset-0 m-auto text-lg transition-all duration-300 transform ${
                  isMobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer with smooth expand & fade transition */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-out
          ${
            isMobileMenuOpen
              ? "max-h-80 opacity-100 translate-y-0 mt-2 pointer-events-auto"
              : "max-h-0 opacity-0 -translate-y-2 mt-0 pointer-events-none"
          }
        `}
      >
        <div className="p-3 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = link.href === location.pathname;
            return (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200
                  ${
                    isActive
                      ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold border border-zinc-200 dark:border-zinc-700"
                      : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white border border-transparent"
                  }
                `}
              >
                <span className="text-base text-zinc-400">
                  {icons[link.icon as keyof typeof icons]}
                </span>
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Nav;


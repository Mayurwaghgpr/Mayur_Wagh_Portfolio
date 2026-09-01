import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import useIcon from "../hooks/useIcon";
import NameHeader from "./NameHeader";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const icons = useIcon();

  const navLinks = [
    { icon: "home", name: "Home", href: "/", id: "home" },
    { icon: "about", name: "About", href: "/about", id: "about" },
    // {icon:"", name: "Projects", href: "/projects", id: "projects" },
    { icon: "contact", name: "Contact", href: "/contact", id: "contact" },
  ];

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header
      className={`
        sticky top-4 w-full z-50 
        transition-all duration-500 ease-out flex items-center justify-between
        ${mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
        ${isScrolled ? "py-1" : "py-2"}
      `}
    >
      <NameHeader />
      
      {/* Desktop Navigation */}
      <div
        className={`
          relative bg-slate-950/70 backdrop-blur-md border border-slate-800/80
          px-4 py-1.5 rounded-full shadow-lg shadow-black/40
          transition-all duration-300 hover:border-slate-700
          hidden md:block
        `}
      >
        <nav className="relative flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = link.href === location.pathname;
            return (
              <NavLink
                key={link.name}
                to={link.href}
                className={`
                  relative flex items-center justify-center gap-2 px-4 py-1.5 rounded-full font-medium 
                  transition-all duration-300 text-xs tracking-wide group cursor-pointer
                  ${
                    isActive
                      ? "text-white bg-slate-800/80 border border-slate-700/60 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }
                `}
              >
                {/* Active/Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-sm">
                  {icons[link.icon as keyof typeof icons]}
                </span>
                <span className="relative z-10">{link.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Mobile Navigation Button & Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="relative flex items-center justify-center p-2.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-slate-200 hover:text-white transition-all duration-300 shadow-md"
        >
          {isMobileMenuOpen ? (
            <HiX className="text-xl text-purple-400" />
          ) : (
            <HiMenu className="text-xl" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`
            fixed inset-0 z-40 transition-all duration-300
            ${
              isMobileMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
          `}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Menu Card */}
          <div
            className={`
              absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-2xl 
              border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-2
              transition-all duration-300 transform
              ${
                isMobileMenuOpen
                  ? "translate-y-0 scale-100 opacity-100"
                  : "-translate-y-4 scale-95 opacity-0"
              }
            `}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = link.href === location.pathname;
                return (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200
                      ${
                        isActive
                          ? "text-white bg-slate-800/90 border border-slate-700 shadow-inner"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      }
                    `}
                  >
                    <span className="text-base text-purple-400">
                      {icons[link.icon as keyof typeof icons]}
                    </span>
                    <span>{link.name}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;

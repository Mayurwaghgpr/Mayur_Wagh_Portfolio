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
        sticky top-5 w-full   transform  z-50 
        transition-all duration-500 ease-out flex  justify-between
        ${mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
        ${isScrolled ? "scale-95" : "scale-100"}
      
      `}
    >
      <NameHeader />
      <div
        className={`
          relative bg-black/70   backdrop-blur-sm border
          px-5 py-2 rounded-full shadow-2xl shadow-black/20
          transition-all duration-300
           hover:shadow-cyan-500/20
             hidden md:block
        `}
      >
        <nav className="relative flex items-center gap-2">
          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.href === location.pathname;
              return (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={`
                      relative flex items-center justify-center gap-2 px-4 py-1  rounded-xl font-medium transition-all duration-300 
                      text-xs tracking-wide group cursor-pointer
                      ${
                        isActive
                          ? "text-white bg-gray-400/40 "
                          : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                      }
                    `}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>{" "}
                  <span className="relative z-10">
                    {icons[link.icon as keyof typeof icons]}
                  </span>
                  <span className="relative z-10">{link.name}</span>
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between p-2.5 border rounded-full ">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`
               relative flex items-center h-fit justify-center p-2 rounded-lg transition-all duration-300 
    
              `}
          >
            <div
              className={`${
                isMobileMenuOpen
                  ? "bg-purple-600 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <HiMenu
                className={` absolute inset-0 ${
                  isMobileMenuOpen
                    ? "rotate-180 opacity-0"
                    : "rotate-0 opacity-100"
                }`}
              />
              <HiX
                className={`absolute inset-0 ${
                  isMobileMenuOpen
                    ? "rotate-0 opacity-100"
                    : "rotate-180 opacity-0"
                }`}
              />
            </div>
          </button>
        </div>

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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Menu Content */}
          <div
            className={`
            absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl 
            border border-slate-700/50 rounded-2xl p-6 shadow-2xl
            transition-all duration-300
            ${
              isMobileMenuOpen
                ? "translate-y-0 scale-100"
                : "-translate-y-4 scale-95"
            }
          `}
          >
            <nav className="space-y-2">
              {navLinks.map((link, index) => {
                const isActive = link.href === location.pathname;
                return (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    className={`
                      block px-4 py-3 rounded-xl font-medium transition-all duration-300
                      ${
                        isActive
                          ? "text-white bg-gray-800 shadow-lg "
                          : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      transform: isMobileMenuOpen
                        ? "translateX(0)"
                        : "translateX(-20px)",
                      opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {isActive && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                      <span>{link.name}</span>
                    </div>
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

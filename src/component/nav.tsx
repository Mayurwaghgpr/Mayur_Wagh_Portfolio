import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Nav() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#intro', id: 'intro' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Tech Stack', href: '#techstacks', id: 'techstacks' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header className={`
        fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 
        transition-all duration-500 ease-out
        ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
        ${isScrolled ? 'scale-95' : 'scale-100'}
        hidden md:block
      `}>
        <div className={`
          relative bg-black bg-opacity-20  backdrop-blur-xl border border-slate-700/50 
          rounded-full px-8 py-4 shadow-2xl shadow-black/20
          transition-all duration-300
          
          hover:scale-105 hover:shadow-purple-500/20
        `}>

          <nav className="relative flex items-center gap-2">
            {/* Logo/Name */}
            <div className="flex items-center mr-6">
              <h1 className="text-lg font-bold  text-white  font-mono tracking-wider">
                Mayur Wagh
              </h1>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href, link.id);
                    }}
                    className={`
                      relative px-4 py-2 rounded-full font-medium transition-all duration-300 
                      text-sm tracking-wide group cursor-pointer
                      ${isActive 
                        ? 'text-white bg-gray-400/20 ' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 50}ms`
                    }}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
                    )}
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    </div>
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header Bar */}
        <header className={`
          fixed bottom-5 left-0 right-0 z-50  rounded-full  mx-10
          bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50
          transition-all duration-300
          ${isScrolled ? 'bg-slate-900/98 shadow-lg shadow-black/20' : ''}
        `}>
          <div className="flex items-center justify-between px-4 py-3">
            {/* Mobile Logo */}
            <h1 className="text-sm font-bold text-white font-mono">
              Mayur Wagh
            </h1>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
               relative flex items-center h-fit justify-center p-2 rounded-lg transition-all duration-300 
    
              `}
            >
              <div className={`${isMobileMenuOpen 
                  ? 'bg-purple-600 text-white' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}>
                <HiMenu className={` absolute inset-0 ${isMobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
                <HiX className={`absolute inset-0 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} />
              </div>
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 z-40 transition-all duration-300
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Content */}
          <div className={`
            absolute bottom-28 left-4 right-4 bg-slate-900/95 backdrop-blur-xl 
            border border-slate-700/50 rounded-2xl p-6 shadow-2xl
            transition-all duration-300
            ${isMobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'}
          `}>
            <nav className="space-y-2">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href, link.id);
                    }}
                    className={`
                      block px-4 py-3 rounded-xl font-medium transition-all duration-300
                      ${isActive 
                        ? 'text-white bg-gray-800 shadow-lg ' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                      opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {isActive && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      <span>{link.name}</span>
                    </div>
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Spacer for mobile */}
      <div className="md:hidden h-20"></div>
    </>
  );
}

export default Nav;
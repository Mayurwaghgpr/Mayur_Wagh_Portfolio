import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Nav() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Tech Stack', href: '#techstacks', id: 'techstacks' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
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

  return (
    <>
      {/* Desktop Navigation */}
      <header className={`
        fixed top-5 right-10 transform -translate-x-1/2 z-50 
        transition-all duration-500 ease-out
        ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
        ${isScrolled ? 'scale-95' : 'scale-100'}
        hidden md:block
      `}>
        <div className={`
          relative bg-black bg-opacity-20  backdrop-blur-xl border
          rounded-full px-8 py-3 shadow-2xl shadow-black/20
          transition-all duration-300
          
          hover:scale-105 hover:shadow-purple-500/20
        `}>

          <nav className="relative flex items-center gap-2">
            {/* Navigation Links */}
            <div className="flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`
                      relative px-4 py-1 rounded-full font-medium transition-all duration-300 
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
                  </Link>
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
          fixed top-2 right-0 z-50  rounded-full  mx-5
          bg-black bg-opacity-20 backdrop-blur-xl border 
          transition-all duration-300
          ${isScrolled ? 'bg-slate-900/98 shadow-lg shadow-black/20' : ''}
        `}>
          <div className="flex items-center justify-between p-2.5">

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
            absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl 
            border border-slate-700/50 rounded-2xl p-6 shadow-2xl
            transition-all duration-300
            ${isMobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'}
          `}>
            <nav className="space-y-2">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
  
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
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
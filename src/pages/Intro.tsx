import { FaGithub,} from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import profileImage from "../assets/image/profileimage.png";


function Intro() {
  const [expand, setExpand] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="intro" className="relative w-screen min-h-screen overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <div className="container flex lg:flex-row flex-col justify-center items-center gap-12 lg:gap-20 max-w-7xl">
          
          {/* Text Content */}
          <article className={`
            transition-all duration-1000 ease-out transform
            
            ${expand 
              ? "lg:w-1/2 w-full opacity-100 translate-x-0 scale-100" 
              : "w-0 lg:w-0 opacity-0 -translate-x-12 scale-95"
            } 
            ${mounted ? '' : 'opacity-0'}
            overflow-hidden order-2 lg:order-1
          `}>
            <div className="space-y-6 p-6 lg:p-8 mx-2">
              <div className="space-y-2">
                <h1 className="text-2xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-blue-300 whitespace-nowrap leading-tight">
                  Mayur Wagh
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full shadow-lg shadow-purple-500/30"></div>
              </div>
              
              <div className="space-y-3">
                <h2 className="text-xl lg:text-2xl font-bold text-slate-100 whitespace-nowrap">
                  Full Stack Developer
                </h2>
                <h3 className="text-lg lg:text-xl text-purple-300 whitespace-nowrap font-medium text-wrap">
                  Passionate about Web Technologies
                </h3>
                <h4 className="text-sm lg:text-lg text-slate-300 whitespace-nowrap">
                  Building Digital Solutions
                </h4>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex gap-4 pt-6 sm:text-sm text-xs">
                <button className="sm:px-6 sm:py-3 px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/40 hover:shadow-purple-400/60">
                  View My Work
                </button>
                <button className="sm:px-6 sm:py-3 px-3 py-2 border-2 border-purple-400 text-purple-300 font-semibold rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-600 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  Get In Touch
                </button>
              </div>
            </div>
          </article>
          
          {/* Profile Image Section */}
          <div className="flex justify-center items-center relative order-1 lg:order-2">
            <div className="relative">
              
              {/* Animated rings around profile */}
              <div className={`
                absolute inset-0 transition-all duration-1000 ease-out
                ${expand ? "opacity-100 scale-110" : "opacity-0 scale-100"}
              `}>
                <div className="absolute inset-0 border-2 border-purple-500/50 rounded-full " style={{animationDuration: '20s'}}></div>
                <div className="absolute inset-2 border-2 border-blue-500/50 rounded-full " style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                <div className="absolute inset-4 border border-pink-500/50 rounded-full " style={{animationDuration: '10s'}}></div>
              </div>
              
              {/* Profile Image */}
              <div 
                onClick={() => setExpand(!expand)} 
                className={`
                  relative transition-all duration-700 ease-out transform
                  w-48 h-48 lg:w-60 lg:h-60
                  ${!expand ? "lg:scale-110 hover:scale-115 z-20" : "lg:scale-100 hover:scale-105"}
                  rounded-full overflow-hidden cursor-pointer group
                  shadow-2xl shadow-purple-500/30 hover:shadow-purple-400/40
                  ring-4 ring-purple-500/40 hover:ring-purple-400/60
                  ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: mounted ? '300ms' : '0ms' }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-transparent to-blue-600/30 group-hover:from-purple-500/40 group-hover:to-blue-500/40 transition-all duration-500 rounded-full z-10"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full z-20"></div>
                
                {/* Image */}
                <img
                  className="w-full h-full object-cover object-center"
                  src={profileImage}
                  alt="Mayur Wagh"
                />
                
                {/* Click indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  <div className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <span className="text-white font-medium text-sm">
                      {expand ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Social Icons Container */}
              <div className={`
                absolute inset-0 transition-all duration-700 ease-out
                ${expand ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              `}>
                <div className="relative w-full h-full">
                  
                  {/* GitHub */}
                  <a 
                    className="absolute -top-4 -left-4 p-4 bg-slate-800/80 backdrop-blur-sm text-slate-200 hover:bg-slate-700 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 rounded-full shadow-lg shadow-black/30 border border-slate-600/50 group"
                    href="https://github.com/mayurwaghgpr"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    style={{ transitionDelay: expand ? '100ms' : '0ms' }}
                  >
                    <FaGithub className="text-xl" />
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                      GitHub
                    </div>
                  </a>
                  
                  {/* LinkedIn */}
                  <a  
                    className="absolute top-1/2 -left-8 -translate-y-1/2 p-4 bg-slate-800/80 backdrop-blur-sm text-slate-200 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-x-2 rounded-full shadow-lg shadow-black/30 border border-slate-600/50 group"
                    href="https://linkedin.com/in/mayur-wagh-751b8a24b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    style={{ transitionDelay: expand ? '200ms' : '0ms' }}
                  >
                    <GrLinkedinOption className="text-xl" />
                    <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 bg-slate-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                      LinkedIn
                    </div>
                  </a>
                  
                  {/* Twitter */}
                  <a 
                    className="absolute -bottom-4 -left-4 p-4 bg-slate-800/80 backdrop-blur-sm text-slate-200 hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:translate-y-2 rounded-full shadow-lg shadow-black/30 border border-slate-600/50 group"
                    href="https://twitter.com/mayurwagh152064"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                    style={{ transitionDelay: expand ? '300ms' : '0ms' }}
                  >
                    <FaXTwitter className="text-xl" />
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                      Twitter
                    </div>
                  </a>
                  
                  {/* Email */}
                  <a 
                    className="absolute top-1/2 -right-8 -translate-y-1/2 p-4 bg-slate-800/80 backdrop-blur-sm text-slate-200 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:translate-x-2 rounded-full shadow-lg shadow-black/30 border border-slate-600/50 group"
                    href="mailto:mayur2002wagh@gmail.com"
                    aria-label="Email"
                    style={{ transitionDelay: expand ? '400ms' : '0ms' }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <div className="absolute top-1/2 left-20 transform -translate-y-1/2 bg-slate-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                      Email
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default Intro
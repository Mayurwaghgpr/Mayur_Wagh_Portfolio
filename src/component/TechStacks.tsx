import React, { useState, useEffect, useMemo } from "react";
import { RiNextjsFill, RiNodejsFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import { SiExpress, SiMongodb, SiSocketdotio } from "react-icons/si";
import { BiLogoKubernetes, BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";

type TechObj = {
  icon: React.ReactNode;
  text: string;
  color: string;
  category: string;
  description: string;
};

function TechStacks() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const technologies: TechObj[] = useMemo(() =>  [
    {
      icon: <FaReact />,
      text: "React.js",
      color: "text-cyan-400",
      category: "Frontend",
      description: "Building dynamic and interactive user interfaces",
    },
    {
      icon: <RiNextjsFill />,
      text: "Next.js",
      color: "text-white",
      category: "Frontend",
      description: "Production-ready React applications with SSR/SSG",
    },
    {
      icon: <RiNodejsFill />,
      text: "Node.js",
      color: "text-green-400",
      category: "Backend",
      description: "Scalable server-side JavaScript runtime",
    },
    {
      icon: <SiExpress />,
      text: "Express.js",
      color: "text-slate-300",
      category: "Backend",
      description: "Minimal and flexible Node.js web framework",
    },
    {
      icon: <BiLogoPostgresql />,
      text: "PostgreSQL",
      color: "text-blue-400",
      category: "Database",
      description: "Powerful open-source relational database",
    },
    {
      icon: <SiMongodb />,
      text: "MongoDB",
      color: "text-green-400",
      category: "Database",
      description: "Flexible document-based NoSQL database",
    },
    {
      icon: <DiRedis />,
      text: "Redis",
      color: "text-red-400",
      category: "Database",
      description: "High-performance in-memory data store",
    },
    {
      icon: <FaDocker />,
      text: "Docker",
      color: "text-blue-400",
      category: "DevOps",
      description: "Containerization for consistent deployments",
    },
    {
      icon: <BiLogoKubernetes />,
      text: "Kubernetes",
      color: "text-blue-300",
      category: "DevOps",
      description: "Orchestrating containerized applications",
    },
    {
      icon: <SiSocketdotio />,
      text: "Socket.io",
      color: "text-slate-200",
      category: "Backend",
      description: "Real-time bidirectional event-based communication",
    },
  ], []);

  const categories = ["All", "Frontend", "Backend", "Database", "DevOps"];

  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  // const getCategoryColor = (category: string) => {
  //   const colors = {
  //     Frontend: "bg-cyan-600",
  //     Backend: "bg-green-600",
  //     Database: "bg-blue-600",
  //     DevOps: "bg-purple-600",
  //     All: "bg-slate-600",
  //   };
  //   return colors[category as keyof typeof colors] || "bg-slate-600";
  // };

  const getCategoryGradient = (category: string) => {
    const gradients = {
      Frontend: "from-cyan-600 to-cyan-700",
      Backend: "from-green-600 to-green-700",
      Database: "from-blue-600 to-blue-700",
      DevOps: "from-purple-600 to-purple-700",
      All: "from-slate-600 to-slate-700",
    };
    return (
      gradients[category as keyof typeof gradients] ||
      "from-slate-600 to-slate-700"
    );
  };

  const getCategoryShadowColor = (category: string) => {
    const shadows = {
      Frontend: "shadow-cyan-500/40",
      Backend: "shadow-green-500/40",
      Database: "shadow-blue-500/40",
      DevOps: "shadow-purple-500/40",
      All: "shadow-slate-500/40",
    };
    return shadows[category as keyof typeof shadows] || "shadow-slate-500/40";
  };

  return (
    <section
      id="techstacks"
      className="py-20 px-4 w-full min-h-screen relative overflow-hidden"
    >


      {/* Enhanced Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-800/40 to-blue-800/40 backdrop-blur-md border border-purple-500/30 sm:px-6 sm:py-3 px-3 py-1.5 rounded-full mb-8 shadow-lg shadow-purple-500/20">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="sm:text-sm text-xs font-semibold text-purple-200 tracking-wider uppercase">
              Technology Stack
            </span>
          </div>
          
          <h2 className="text-lg md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-blue-300 mb-6 leading-tight">
            Tech Arsenal
          </h2>
          
          <p className=" text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Technologies I leverage to build scalable, performant, and modern applications that solve real-world problems
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            const count = category === "All" 
              ? technologies.length 
              : technologies.filter((t) => t.category === category).length;
            
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={` 
                  group sm:px-6 sm:py-3 px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-md
                  ${
                    isActive
                      ? `bg-gradient-to-r ${getCategoryGradient(category)} text-white shadow-xl ${getCategoryShadowColor(category)} border border-white/20`
                      : "bg-slate-800/60 text-slate-300 border-2 border-slate-600/40 hover:border-slate-500/60 hover:bg-slate-700/60 hover:shadow-lg hover:shadow-slate-500/20"
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <span className="sm:text-sm text-xs">{category}</span>
                  <span className={`
                    text-xs px-2 py-1 rounded-full transition-all duration-300
                    ${isActive 
                      ? 'bg-white/20 text-white/80' 
                      : 'bg-slate-700/60 text-slate-400 group-hover:bg-slate-600/60 group-hover:text-slate-300'
                    }
                  `}>
                    {count}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Enhanced Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mb-20 px-10">
          {filteredTechnologies.map((tech, idx) => (
            <div
              key={`${tech.text}-${selectedCategory}`}
              className="group relative"
              style={{
                animationDelay: `${idx * 100}ms`,
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={() => setHoveredTech(tech.text)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-600/30 rounded-3xl sm:p-8 p-4 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-3 cursor-pointer overflow-hidden">
                
                {/* Category Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${getCategoryGradient(tech.category)} text-white text-xs sm:px-3 sm:py-1.5 p-1.5 rounded-full font-medium shadow-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                  {tech.category}
                </div>

                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-purple-500/10"></div>

                {/* Icon Section */}
                <div className="relative flex items-center justify-center mb-6">
                  <div className="relative">
                    {/* Icon Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300 scale-150"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                    
                    {/* Main Icon */}
                    <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl sm:p-6 p-3 group-hover:bg-slate-700/60 transition-all duration-300">
                      <span className={`sm:text-2xl text-xl ${tech.color} transition-all duration-500 group-hover:scale-110 block drop-shadow-2xl`}>
                        {tech.icon}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center space-y-4">
                  <h3 className="sm:text-xl text-md font-bold text-slate-100 group-hover:text-white transition-colors duration-300">
                    {tech.text}
                  </h3>
                  <p className="sm:text-sm text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 min-h-[2.5rem]">
                    {tech.description}
                  </p>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 animate-pulse"></div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12"></div>
                </div>
              </div>

              {/* Floating Tooltip */}
              {hoveredTech === tech.text && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full z-20 animate-fadeIn">
                  <div className="bg-slate-800/95 backdrop-blur-md text-white px-4 py-2 rounded-lg shadow-xl border border-slate-600/50 text-sm font-medium whitespace-nowrap">
                    Click to learn more
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-r border-b border-slate-600/50"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {categories.slice(1).map((category, idx) => {
            const count = technologies.filter(
              (tech) => tech.category === category
            ).length;
            return (
              <div 
                key={category} 
                className="text-center group cursor-pointer"
                style={{
                  animationDelay: `${idx * 200}ms`,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease-out'
                }}
              >
                <div className="relative mb-4">

                  
                  {/* Main Circle */}
                  <div className={`
                    relative sm:w-20 sm:h-20 h-10 w-10 bg-gradient-to-br ${getCategoryGradient(category)} 
                    rounded-full flex items-center justify-center mx-auto shadow-2xl 
                    group-hover:scale-110 group-hover:shadow-3xl transition-all duration-300
                    border-2 border-white/10 group-hover:border-white/20
                    ${getCategoryShadowColor(category)}
                  `}>
                    <span className="sm:text-3xl text-xl font-black text-white drop-shadow-lg">
                      {count}
                    </span>
                  </div>
                </div>

                <h4 className="sm:text-lg text-md font-bold text-slate-200 group-hover:text-white transition-colors duration-300 mb-2">
                  {category}
                </h4>
                <p className="sm:text-sm text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {count === 1 ? 'Technology' : 'Technologies'}
                </p>
              </div>
            );
          })}
        </div>
      </div>

   
    </section>
  );
}

export default TechStacks;
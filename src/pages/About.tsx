import { useState} from 'react';
import {   FaBriefcase, FaRocket, FaLightbulb } from 'react-icons/fa';
import { MdTimeline, MdLocationOn } from 'react-icons/md';


function About() {
  // const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('story');

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  const tabs = [
    { id: 'story', label: 'My Story', icon: <FaLightbulb /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    // { id: 'interests', label: 'Interests', icon: <FaHeart /> }
  ];

  const experiences = [
    {
      title: "Software Developer intern",
      company: "Webseeder Ltd",
      period: "2024 - 2025",
      location: "Remote",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Built web application serving 100k+ users.",
      technologies: ["React", "Node.js", "Express","MongoDB","Next.js"]
    },
    {
      title: "Python Developer intern",
      company: "Borse Automation Pvt Ltd",
      period: "2023 - 2024",
      location: "Nashik, India",
      description: " .",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'story':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Hey there! I'm <span className="text-purple-300 font-semibold">Mayur Wagh</span>, a passionate Software Developer
                with a love for creating digital experiences that matter. My journey in tech started with curiosity and has evolved 
                into a career dedicated to building innovative solutions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FaRocket className="text-purple-400" />
                    My Mission
                  </h3>
                  <p className="text-slate-300">
                    To create technology that bridges the gap between complex problems and elegant solutions. 
                    I believe in writing clean, maintainable code that not only works but tells a story.
                  </p>
                </div>
                
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FaLightbulb className="text-blue-400" />
                    My Approach
                  </h3>
                  <p className="text-slate-300">
                    I focus on understanding the 'why' behind every project. Whether it's optimizing performance 
                    or designing user interfaces, I strive for solutions that are both technically sound and user-friendly.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-300">1+</div>
                    <div className="text-sm text-slate-400">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-300">8+</div>
                    <div className="text-sm text-slate-400">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-300">10+</div>
                    <div className="text-sm text-slate-400">Technologies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-300">∞</div>
                    <div className="text-sm text-slate-400">Water Consumed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
              
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative flex items-start gap-6 pb-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <MdTimeline className="text-white text-sm" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 group hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-purple-300 font-medium">{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-blue-300 font-medium">{exp.company}</span>
                      <span className="text-slate-400 text-sm flex items-center gap-1">
                        <MdLocationOn className="text-xs" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span 
                          key={techIdx}
                          className="px-3 py-1 bg-purple-900/30 text-purple-200 text-xs rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      // case 'interests':
      //   return (
      //     <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
      //       {interests.map((interest, idx) => (
      //         <div 
      //           key={idx}
      //           className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 group hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105"
      //           style={{
      //             animationDelay: `${idx * 100}ms`,
      //             opacity: mounted ? 1 : 0,
      //             transform: mounted ? 'translateY(0)' : 'translateY(20px)',
      //             transition: 'all 0.6s ease-out'
      //           }}
      //         >
      //           <div className="flex items-center gap-4 mb-4">
      //             <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white text-xl">
      //               {interest.icon}
      //             </div>
      //             <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
      //               {interest.title}
      //             </h3>
      //           </div>
      //           <p className="text-slate-300 leading-relaxed">{interest.description}</p>
      //         </div>
      //       ))}
      //     </div>
      //   );

      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-10  w-full min-h-screen  relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        {/* <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-800/30 to-blue-800/30 backdrop-blur-sm border border-purple-500/20 sm:px-4 sm:py-2 px-2 py-1 rounded-full mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="sm:text-sm text-xs font-semibold text-purple-200 tracking-wider uppercase">
              About Me
            </span>
          </div>

          <h1 className="text-xl md:text-2xl lg:text-4xl  font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-blue-300 mb-6">
            Get to Know Me
          </h1>
        </div> */}

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-end gap-2 mb-12 w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 sm:px-6 sm:py-3 px-3 py-1.5 sm:text-base text-sm rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm
                ${activeTab === tab.id 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/40' 
                  : 'bg-slate-800/50 text-slate-300 border border-slate-600/50 hover:border-slate-500/70 hover:bg-slate-700/50'
                }
              `}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-800/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/20 min-h-[500px]">
          {renderTabContent()}
        </div>
      </div>

    </section>
  );
}

export default About;

import { MdLocationOn, MdTimeline } from 'react-icons/md';
  const experiences = [
    {
      title: "Software Developer intern",
      company: "Webseeder Ltd",
      period: "2024 - 2025",
      location: "Remote",
      description: `– Designed and maintained 3+ enterprise-grade applications (LMS, CRM, GPS) using MERN stack, serving 1000+
users.
– Engineered and integrated REST APIs with JWT & OAuth, securing 100% multi-role access control.
– Optimized MongoDB & PostgreSQL queries, reducing API response times by 30% and boosting scalability.
– Built real-time notifications, chats, and comments using Redis + Socket.io, increasing user engagement by 45%.
– Collaborated in cross-functional teams, delivering features 20% faster than project deadlines.`,
      technologies: ["React", "Node.js", "Express","MongoDB","Next.js"]
    },
    {
      title: "Python Developer intern",
      company: "Borse Automation Pvt Ltd",
      period: "2023 - 2024",
      location: "Nashik, India",
      description: `– Developed a Python-based vehicle dashcam using OpenCV,real-time face detection.
– Built PyQt desktop apps for sensor monitoring, reducing manual inspection efforts by 40%.
– Enhanced application responsiveness, improving production efficiency by 30%.`,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
  ];
function Experience() {
  return (
      <div className="flex flex-col justify-center items-start gap-5 animate-fadeIn mx-auto min-h-screen ">
          <h1 className='font-semibold sm:text-xl text-lg ' > Work Experience</h1>
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
                      <h3 className="text-xl font-bold text-white transition-colors">
                        {exp.title}
                      </h3>
                      <span className="text-xs font-light opacity-50  ">{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-blue-300 font-medium">{exp.company}</span>
                      <span className="text-slate-400 text-sm flex items-center gap-1">
                        <MdLocationOn className="text-xs" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-slate-300/50 mb-4 font-light text-sm leading-relaxed">{exp.description}</p>
                    
                    {/* <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span 
                          key={techIdx}
                          className="px-3 py-1 bg-purple-900/30 text-purple-200 text-xs rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}

export default Experience
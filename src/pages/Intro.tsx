import { FaGithub } from "react-icons/fa";
import profileImage from "../assets/image/profileimage.png";
import { GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

function Intro() {
  const [expand, setExpand] = useState<boolean>(false);
  
  return (
    <section className="w-screen justify-center items-center h-screen bg-white">
      <div className="container flex sm:flex-row flex-col justify-center items-center h-1/2 sm:mx-32">
        <article className={`transition-all duration-500  ${expand ? "w-full opacity-100" : "w-0 opacity-0"} p-10`}>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 whitespace-nowrap">Mayur Wagh</h1>
            <h2 className="text-2xl font-medium text-gray-700 whitespace-nowrap">Full Stack Developer</h2>
            <h3 className="text-xl text-gray-500 whitespace-nowrap">Passionate about Web Technologies</h3>
            <h4 className="text-lg text-gray-400 whitespace-nowrap">Building Digital Solutions</h4>
          </div>
        </article>
        
        <div className="flex justify-center items-center pt-20 w-full">
          <div className="relative">
            {/* Profile Image */}
            <div 
              onClick={() => setExpand(!expand)} 
              className={` relative transition-all duration-500 sm:w-64 sm:h-64 w-32 h-32 ${!expand ? "sm:scale-150" : "sm:scale-100"} rounded-full overflow-hidden cursor-pointer group z-10`}
            >
              <div className="absolute w-full h-full z-20 transition-all duration-300 group-hover:bg-black/30 rounded-full"></div>
              <img
                className="w-full h-full object-cover object-center"
                src={profileImage}
                alt="Mayur Wagh"
              />
            </div>
            
            {/* Social Icons - Outside image container for better positioning */}
            <div className={`absolute z-0 inset-0 transition-all duration-500 ${expand ? "opacity-100 scale-100" : "opacity-0 scale-75"} `}>
              {/* GitHub */}
              <a 
                className="absolute sm:bottom-32 bottom-16 -left-8 sm:text-2xl  text-text-tertiary hover:text-accent-500 cursor-pointer transition-all duration-300 transform hover:scale-110" 
                href="https://github.com/mayurwaghgpr"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              
              {/* LinkedIn */}
              <a  
                className="absolute sm:bottom-20 bottom-8 -left-7 sm:text-2xl text-text-tertiary hover:text-accent-500 cursor-pointer transition-all duration-300 transform hover:scale-110" 
                href="https://linkedin.com/in/mayur-wagh-751b8a24b/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <GrLinkedinOption />
              </a>
              
              {/* Twitter */}
              <a 
                className="absolute sm:bottom-9 bottom-0 sm:-left-4 -left-2 sm:text-2xl text-text-tertiary hover:text-accent-500 cursor-pointer transition-all duration-300 transform hover:scale-110"  
                href="https://twitter.com/mayurwagh152064"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;

import { Link } from "react-router-dom";
import profileImage from "/profileimage.png";
function NameHeader() {
  return (
    <div className=' fixed top-5 sm:left-[20%] left-2 flex justify-center gap-3 items-center overflow-hidden  p-4 py-2 rounded-full  text-white border w-fit bg-black bg-opacity-20 z-40 backdrop-blur-xl'>
      <Link to={"/"} className='flex items-center gap-3 w-full h-full'>
        <div className="relative sm:w-8 sm:h-8 w-5 h-5 rounded-full overflow-hidden ">
          <img
            className="w-full h-full object-cover object-center"
            src={profileImage}
            alt="Mayur Wagh"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 w-full animate-pulse"></div>
        
        <h1 className='sm:text-sm text-xs sm:font-bold font-semibold'>Mayur Wagh</h1>
        </Link>
      </div>
  )
}

export default NameHeader

import Nav from './component/nav'
import TechStacks from './component/TechStacks'
import About from './pages/Aboute'
import Intro from './pages/Intro'
import profileImage from "/profileimage.png";

function App() {
  return (
    <main className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/80'>
      <div>
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-[1px] h-[1px] bg-white rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
      <div className=' fixed sm:left-[20%] left-2 flex justify-center gap-3 items-center overflow-hidden  p-4 py-2 rounded-full sm:mt-10 mt-2 text-white border w-fit bg-black bg-opacity-20 z-40 backdrop-blur-xl'>
        <div className="relative sm:w-8 sm:h-8 w-5 h-5 rounded-full overflow-hidden ">
          <img
            className="w-full h-full object-cover object-center"
            src={profileImage}
            alt="Mayur Wagh"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 w-full animate-pulse"></div>
        
        <h1 className='sm:text-sm text-xs sm:font-bold font-semibold'>Mayur Wagh</h1>
      </div>
      <Nav />
      <Intro />
      <TechStacks />
      <About/>
    </main>
  )
}

export default App

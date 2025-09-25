
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Nav from './component/nav'
import Home from './pages/Home';

import Footer from './component/footer';
import NameHeader from './component/NameHeader';
import BgStarAnimation from './component/BgStarAnimation';
import { ImSpinner2 } from 'react-icons/im';

const About = lazy(()=>import("./pages/About"))

function App() {
  return (
    <main className='w-full h-screen py-20  bg-gradient-to-b from-black via-black to-gray-900 text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/80'>
      <BgStarAnimation/>
      <NameHeader/>
      <Nav />
      <Suspense  fallback={      <div className='fixed left-0 top-0 bottom-0 right-0 z-50 w-full flex justify-center items-center '><ImSpinner2  className='animate-spin  text-purple-500 text-4xl' /></div>
}>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
        <Footer />
      </Suspense>
    </main>
  )
}

export default App

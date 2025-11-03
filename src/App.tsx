import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/home/Home";
import BgStarAnimation from "./components/BgStarAnimation";
import Footer from "./components/Footer";
import ScreenLoader from "./components/ScreenLoader";
import Nav from "./components/nav";
import Contact from "./pages/Contact";

const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <main className="w-full max-h-screen  bg-gradient-to-b from-transparent via-transparent to-sky-700/25  text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/80">
      <BgStarAnimation />
      <div className=" sm:max-w-4xl pb-20 sm:mx-auto px-5 ">
        <Nav />
        <Suspense fallback={<ScreenLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}

export default App;

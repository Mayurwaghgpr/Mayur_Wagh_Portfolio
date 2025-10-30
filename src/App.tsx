import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/home/Home";
import BgStarAnimation from "./components/BgStarAnimation";
import Footer from "./components/Footer";
import ScreenLoader from "./components/ScreenLoader";
import Nav from "./components/nav";
import Contact from "./pages/Contact";
import SmoothScroll from "./components/SmoothScroll";

const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <>
      <SmoothScroll />

      <main className=" relative w-full min-h-screen  border-inherit  bg-gradient-to-b from-transparent via-transparent   text-white snap-y snap-mandatory   z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/80">
        <BgStarAnimation />
        <div className=" sm:max-w-[50rem] pb-20 mx-auto">
          <Nav />
          <Suspense fallback={<ScreenLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
            </Routes>
            <Footer />
          </Suspense>
        </div>
      </main>
    </>
  );
}

export default App;

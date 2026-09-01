import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/home/Home";
// import BgStarAnimation from "./components/BgStarAnimation";
import Footer from "./components/Footer";
import ScreenLoader from "./components/ScreenLoader";
import Nav from "./components/nav";
import Contact from "./pages/Contact";

const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <main className="min-h-screen w-full relative text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      {/* Ambient gradient glow backdrop */}
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
        <div className="h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-4">
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

import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import ScreenLoader from "./components/ScreenLoader";
import Nav from "./components/nav";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";

const About = lazy(() => import("./pages/About"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <main className="min-h-screen w-full relative bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <ScrollToTop />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-4">
          <Nav />
          <div key={location.pathname} className="animate-page-enter">
            <Suspense fallback={<ScreenLoader />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </Suspense>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;


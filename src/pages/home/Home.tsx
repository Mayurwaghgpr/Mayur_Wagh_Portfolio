import Intro from "./components/Intro";
import Experience from "./components/Experience";
import TechStacks from "../../components/TechStacks";
import Projects from "../Projects";

function Home() {
  return (
    <div className="relative w-full">
      <Intro />
      <Experience />
      <TechStacks />
      <Projects />
    </div>
  );
}

export default Home;

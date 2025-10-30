import TechStacks from "../../components/TechStacks";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "../Projects";

function Home() {
  return (
    <div className=" relative space-y-20 w-full py-20 ">
      <Intro />

      <Experience />
      <TechStacks />

      <Projects />
    </div>
  );
}

export default Home;

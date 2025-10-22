import TechStacks from "../../components/TechStacks";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "../Projects";

function Home() {
  return (
    <div className=" relative space-y-20 w-full sm:max-w-6xl px-5  mx-auto">
      {" "}
      <Intro />
      <Experience />
      <TechStacks />
      <Projects />
    </div>
  );
}

export default Home;

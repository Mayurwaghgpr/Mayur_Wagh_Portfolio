import TechStacks from "../../components/TechStacks";
import Intro from "./components/Intro";
import Experience from "./components/Experience";

function Home() {
  return (
    <div className=" relative space-y-10 w-full max-w-4xl  mx-auto">
      {" "}
      <Intro />
      <Experience />
      <TechStacks />
    </div>
  );
}

export default Home;

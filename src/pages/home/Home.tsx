import TechStacks from "../../components/TechStacks";
import Intro from "./components/Intro";
import Experience from "./components/Experience";

function Home() {
  return (
    <div className=" relative  space-y-20 w-full max-w-5xl  sm:px-20 px-5 py-28 mx-auto">
      {" "}
      <Intro />
      <Experience />
      <TechStacks />
    </div>
  );
}

export default Home;

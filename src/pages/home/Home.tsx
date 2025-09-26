import TechStacks from "../../components/TechStacks";
import Intro from "./components/Intro";
import Experience from "./components/Experience";

function Home() {
  return (
    <div className=" relative space-y-4 max-w-4xl sm:px-0 px-5 mx-auto">
      {" "}
      <Intro />
      <Experience/>
      <TechStacks />

    </div>
  );
}

export default Home;

import { use } from "react";
import type { ITechnology } from "../../types/techonlogyType";
import TechnologyCards from "./TechnologyCards";


interface TechnologyProps {
  techonlogyPromise: Promise<ITechnology[]>;
   stack: ITechnology[];
  setStack: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const Technology = ({ techonlogyPromise ,stack, setStack }: TechnologyProps) => {
  const technology = use(techonlogyPromise);

  return (
    <section className="container mx-auto my-8 ">
      <h2 className="text-4xl font-bold ">
        Explore the <span className="text-[#d248b9]">Technologies</span>
      </h2>
      <p className="text-gray-500 mx-4 my-3">Pick one technology per category to build your ideal stack.</p>

      <TechnologyCards technology={technology} stack={stack} setStack={setStack} />

    </section>
  );
};

export default Technology;
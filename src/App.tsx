import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technology from "./components/Technology/Technology";
import Stack from "./components/Technology/Stack";
import type { ITechnology } from "./types/techonlogyType";
import Footer from "./components/Technology/footer";

const technologyFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const techonlogyPromise = technologyFetch();

  const [stack, setStack] = useState<ITechnology[]>([]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#eed9e4] via-[#aaa2d6] to-[#eef6ff]" >
        <Nav />
        <Banner />

        <Suspense fallback={<h2>Technology Loading......</h2>}>
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <Technology
                techonlogyPromise={techonlogyPromise}
                stack={stack}
                setStack={setStack}
              />
            </div>

            <div className="w-full lg:w-80 mt-6 lg:mt-30">
              <Stack stack={stack} setStack={setStack} />
            </div>
          </div>
        </Suspense>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

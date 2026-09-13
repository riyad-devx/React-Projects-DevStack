import bannerLogo from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="min-h-100 my-7 container mx-auto flex items-center justify-center">
      <div className="w-1/2 ">
        <h2 className="font-bold text-5xl text-black">Build Your Ideal</h2>

        <h2 className="font-bold text-5xl bg-gradient-to-r from-red-500 via-pink-400 to-purple-700 bg-clip-text text-transparent">
          Development Stack
        </h2>

        <p className="pt-8 pb-11">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-4 ">
          <button className="btn h-14 rounded-xl border-0 px-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-lg hover:shadow-xl hover:-translate-y-1">
            Explore Technologies
          </button>

          <button className="btn h-14 rounded-xl px-8 border-gray-300 bg-white text-gray-700 text-lg hover:shadow-xl hover:-translate-y-1">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-1/2 flex justify-center">
        <img src={bannerLogo} alt="" />
      </div>
    </div>
  );
};

export default Banner;

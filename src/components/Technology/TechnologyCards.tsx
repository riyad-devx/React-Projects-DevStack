import { toast } from "react-toastify";
import type { ITechnology } from "../../types/techonlogyType";

interface TechnologyCardsProps {
  technology: ITechnology[];
  stack: ITechnology[];
  setStack: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const TechnologyCards = ({
  technology,
  stack,
  setStack,
}: TechnologyCardsProps) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technology.map((technologys) => (
        <div
          key={technologys.id}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 flex flex-col"
        >
          <div className="flex justify-between">
            <img
              src={technologys.icon}
              alt={technologys.name}
              className="w-14 h-14 object-contain"
            />

            <span className="badge bg-gray-100 text-green-600 border border-amber-300">
              {technologys.badge}
            </span>
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            {technologys.name}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {technologys.category}
          </p>

          <p className="mt-4 text-gray-600">
            {technologys.description}
          </p>

          <div className="divider"></div>

          <div className="mt-5 flex items-center justify-between gap-2">
            <span className="badge bg-gray-50 text-gray-500 border">
              {technologys.category}
            </span>

            <span className="text-xs">{technologys.difficulty}</span>npn

            <span>⭐ {technologys.rating}</span>
          </div>

          <div className="flex justify-center mt-auto pt-8">
            <button
              onClick={() => {
                const alreadyAdded = stack.some(
                  (item) => item.id === technologys.id,
                );

                if (alreadyAdded) {
                  toast.warning(
                    "This technology is already in your stack!",
                  );
                  return;
                }

                setStack([...stack, technologys]);

                toast.success(
                  `${technologys.name} added to your stack!`,
                );
              }}
              className="btn bg-black text-white border-none rounded-xl px-20"
            >
              {stack.some(
                (item) => item.id === technologys.id,
              )
                ? "✓ Added to Stack"
                : "Add to Stack"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologyCards;
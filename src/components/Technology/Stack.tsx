import type { ITechnology } from "../../types/techonlogyType";

interface StackProps {
  stack: ITechnology[];
  setStack: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

export default function YourStackCard({ stack, setStack }: StackProps) {
  const handleRemove = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="max-w-md w-full p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-6">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[#0b132a] tracking-tight">
          Your Stack
        </h2>

        <p className="text-slate-400 text-lg font-normal">
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} Technology Selected`}
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="w-full py-8 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center">
          <span className="text-slate-400 text-lg">
            Your stack is empty.
          </span>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between p-4 border rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-10 h-10 object-contain"
                />

                <div>
                  <h3 className="font-bold">{technology.name}</h3>
                  <p className="text-sm text-slate-400">
                    {technology.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleRemove(technology.id)}
                className="text-red-500 text-xl"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={handleRemoveAll}
            className="w-full py-3 rounded-xl border border-red-200 text-red-500"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}
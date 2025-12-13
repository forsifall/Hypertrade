import { Cpu, TrendingUp, Wallet, Zap } from "lucide-react";

// --- Advantages Section ---
// eslint-disable-next-line
export default function AdvantagesPage ({ translationData }: { translationData: any }) {
  // eslint-disable-next-line
  const advantages = translationData.advantages.items.map((item: any, idx: number) => ({
    ...item,
    icon:
      idx === 0 ? (
        <TrendingUp className="text-green-400" size={32} />
      ) : idx === 1 ? (
        <Cpu className="text-pink-400" size={32} />
      ) : idx === 2 ? (
        <Zap className="text-yellow-400" size={32} />
      ) : (
        <Wallet className="text-blue-400" size={32} />
      ),
  }));

  return (
    <section id="advantages" className="py-20 bg-hyper-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {translationData.advantages.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {translationData.advantages.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* eslint-disable-next-line */}
          {advantages.map((adv: any, idx: number) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl hover:bg-hyper-800/50 transition-colors border-l-4 border-l-hyper-accent/50 hover:border-l-hyper-accent"
            >
              <div className="flex items-start gap-4">
                <div className="bg-hyper-900 p-3 rounded-xl border border-gray-800">
                  {adv.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {adv.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Cpu, Layers, Mail, Search, Users } from "lucide-react";

// --- About Page Content ---
// eslint-disable-next-line
export default async function AboutPage ({translationData}:{translationData:any}) { 

  return (
    <section className="py-24 bg-hyper-900 min-h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {translationData.about.title} <span className="text-hyper-accent">Hypertrade</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {translationData.about.subtitle}
          </p>
        </div>

        {/* Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              {translationData.about.techTitle}
            </h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>{translationData.about.techDesc}</p>
              <ul className="space-y-4 mt-4">
                <li className="flex gap-3">
                  <Search
                    className="text-hyper-secondary flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <strong className="text-white block">{translationData.about.scan}</strong>
                    {translationData.about.scanDesc}
                  </div>
                </li>
                <li className="flex gap-3">
                  <Layers
                    className="text-hyper-secondary flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <strong className="text-white block">
                      {translationData.about.split}
                    </strong>
                    {translationData.about.splitDesc}
                  </div>
                </li>
                <li className="flex gap-3">
                  <Cpu
                    className="text-hyper-secondary flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <strong className="text-white block">
                      {translationData.about.invisium}
                    </strong>
                    {translationData.about.invisiumDesc}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            {/* Abstract visualization of aggregation */}
            <div className="glass-panel p-8 rounded-2xl border border-hyper-secondary/30 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-hyper-secondary/20 blur-3xl rounded-full"></div>
              <h3 className="text-xl font-bold mb-6 text-center">Router R1</h3>
              <div className="flex justify-between items-center mb-8">
                <div className="flex flex-col gap-2">
                  <div className="bg-hyper-800 p-3 rounded-lg text-center text-sm border border-gray-700">
                    HyperCore
                  </div>
                  <div className="bg-hyper-800 p-3 rounded-lg text-center text-sm border border-gray-700">
                    Hyperswap
                  </div>
                  <div className="bg-hyper-800 p-3 rounded-lg text-center text-sm border border-gray-700">
                    DEXs
                  </div>
                </div>
                <div className="h-[120px] w-px bg-gradient-to-b from-transparent via-hyper-accent to-transparent"></div>
                <div className="bg-hyper-900 border border-hyper-accent p-6 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                  <div className="text-center font-bold text-hyper-accent text-lg">
                    Hypertrade
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-1">
                    Smart Router
                  </div>
                </div>
                <div className="h-[120px] w-px bg-gradient-to-b from-transparent via-hyper-accent to-transparent"></div>
                <div className="bg-white text-hyper-900 font-bold p-4 rounded-xl shadow-lg">
                  User
                </div>
              </div>
              <div className="text-center text-sm text-gray-400">
                Atomic Execution & Route Optimization
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Users className="text-hyper-accent" size={32} />
            {translationData.about.teamTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Member 1 */}
            <div className="glass-panel p-8 rounded-2xl text-center group hover:border-hyper-accent/50 transition-colors">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-900 to-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-blue-400 mb-6 border-2 border-blue-500/30 group-hover:scale-105 transition-transform">
                AM
              </div>
              <h4 className="text-xl font-bold text-white mb-1">
                {translationData.about.team.m1.name}
              </h4>
              <p className="text-hyper-accent text-sm uppercase tracking-wider mb-4 font-semibold">
                {translationData.about.team.m1.role}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {translationData.about.team.m1.bio}
              </p>
              <a
                href="mailto:a.morozov@hypertrade.ru"
                className="text-sm text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={14} /> a.morozov@hypertrade.ru
              </a>
            </div>

            {/* Member 2 */}
            <div className="glass-panel p-8 rounded-2xl text-center group hover:border-hyper-accent/50 transition-colors">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-900 to-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-purple-400 mb-6 border-2 border-purple-500/30 group-hover:scale-105 transition-transform">
                DS
              </div>
              <h4 className="text-xl font-bold text-white mb-1">
                {translationData.about.team.m2.name}
              </h4>
              <p className="text-hyper-accent text-sm uppercase tracking-wider mb-4 font-semibold">
                {translationData.about.team.m2.role}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {translationData.about.team.m2.bio}
              </p>
              <a
                href="mailto:d.sokolov@hypertrade.ru"
                className="text-sm text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={14} /> d.sokolov@hypertrade.ru
              </a>
            </div>

            {/* Member 3 */}
            <div className="glass-panel p-8 rounded-2xl text-center group hover:border-hyper-accent/50 transition-colors">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-900 to-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-pink-400 mb-6 border-2 border-pink-500/30 group-hover:scale-105 transition-transform">
                EV
              </div>
              <h4 className="text-xl font-bold text-white mb-1">
                {translationData.about.team.m3.name}
              </h4>
              <p className="text-hyper-accent text-sm uppercase tracking-wider mb-4 font-semibold">
                {translationData.about.team.m3.role}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {translationData.about.team.m3.bio}
              </p>
              <a
                href="mailto:e.volkova@hypertrade.ru"
                className="text-sm text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={14} /> e.volkova@hypertrade.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

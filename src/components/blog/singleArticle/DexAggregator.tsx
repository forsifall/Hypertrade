"use client"
import BackButton from "@/components/ui/BackButton";
import { AlertCircle, ArrowLeft, Calendar, CheckCircle, Clock, Cpu, Layers, Navigation, Search, Zap } from "lucide-react";

// --- Single Blog Article Component (DEX Aggregator) ---
// eslint-disable-next-line
export const ArticleDexAggregator = ({translationData}:{translationData:any}) => {
  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className="h-64 md:h-80 w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-hyper-900 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label={translationData.articleDex.back} />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-hyper-accent mb-4">
             <span className="bg-hyper-accent/10 px-3 py-1 rounded-full border border-hyper-accent/20">{translationData.articleDex.metaCategory}</span>
             <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> {translationData.articleDex.metaTime}</span>
             <span className="flex items-center gap-1 text-gray-400"><Calendar size={14} /> 10.12.2025</span>
           </div>
           <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
             {translationData.articleDex.title}
           </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-hyper-accent pl-6 italic">
            {translationData.articleDex.intro}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Layers className="text-hyper-secondary" /> {translationData.articleDex.whatIsTitle}
          </h2>
          <p>{translationData.articleDex.whatIsDesc}</p>
          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <h4 className="font-bold text-white mb-2">{translationData.articleDex.analogyTitle}</h4>
            <p className="text-sm text-gray-400 m-0">{translationData.articleDex.analogyDesc}</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
             <AlertCircle className="text-red-400" /> {translationData.articleDex.problemTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{translationData.articleDex.scenario1}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex justify-between"><span>DEX:</span> <span className="text-white">Hyperswap</span></li>
                <li className="flex justify-between"><span>{translationData.articleDex.liquidity}:</span> <span>$500,000</span></li>
                <li className="flex justify-between"><span>{translationData.articleDex.yourOrder}:</span> <span>2%</span></li>
                <li className="flex justify-between font-bold text-red-300"><span>{translationData.articleDex.priceImpact}:</span> <span>~3.5%</span></li>
                <li className="flex justify-between border-t border-red-900/30 pt-2"><span>{translationData.articleDex.receive}:</span> <span className="text-white">9,650 XYZ</span></li>
                <li className="text-center bg-red-900/20 text-red-300 py-1 rounded mt-2 text-xs font-bold">{translationData.articleDex.loss}: $350</li>
              </ul>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{translationData.articleDex.scenario2}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex justify-between"><span>DEX:</span> <span className="text-white">Aggregated</span></li>
                <li className="flex justify-between"><span>{translationData.articleDex.liquidity}:</span> <span>Global</span></li>
                <li className="flex justify-between"><span>Route:</span> <span>Split-routing</span></li>
                <li className="flex justify-between font-bold text-green-300"><span>{translationData.articleDex.priceImpact}:</span> <span>~1.2%</span></li>
                <li className="flex justify-between border-t border-green-900/30 pt-2"><span>{translationData.articleDex.receive}:</span> <span className="text-white">9,880 XYZ</span></li>
                <li className="text-center bg-green-900/20 text-green-300 py-1 rounded mt-2 text-xs font-bold">{translationData.articleDex.savings}: $230</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
             <Zap className="text-yellow-400" /> {translationData.articleDex.howWorksTitle}
          </h2>
          
          <div className="space-y-8 not-prose mb-12">
             <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
               <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Search size={20} className="text-hyper-accent"/> {translationData.articleDex.step1}</h3>
             </div>
             <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
               <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Navigation size={20} className="text-blue-400"/> {translationData.articleDex.step2}</h3>
             </div>
             <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
               <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Cpu size={20} className="text-purple-400"/> {translationData.articleDex.step3}</h3>
             </div>
             <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
               <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><CheckCircle size={20} className="text-green-400"/> {translationData.articleDex.step4}</h3>
             </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{translationData.articleDex.reasonsTitle}</h2>
          <div className="space-y-6 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {translationData.articleDex.reasons.map((reason:any, idx: number) => (
              <div key={idx} className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-hyper-accent hover:bg-hyper-800/40 transition-colors">
                <h4 className="font-bold text-white text-lg mb-2">{reason.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.content}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{translationData.articleDex.mathTitle}</h2>
          <div className="overflow-x-auto not-prose mb-12">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="border-b border-gray-700">
                   <th className="p-4 text-gray-400 font-medium">{translationData.articleDex.traderType}</th>
                   <th className="p-4 text-gray-400 font-medium">{translationData.articleDex.turnover}</th>
                   <th className="p-4 text-red-400 font-medium">{translationData.articleDex.losses}</th>
                   <th className="p-4 text-green-400 font-medium">{translationData.articleDex.savingsYear}</th>
                 </tr>
               </thead>
               <tbody className="text-sm">
                 <tr className="border-b border-gray-800 bg-hyper-800/20">
                   <td className="p-4 text-white">Small</td>
                   <td className="p-4 text-gray-300">$10,000</td>
                   <td className="p-4 text-red-300">$100 / mo</td>
                   <td className="p-4 text-green-300 font-bold">$840</td>
                 </tr>
                 <tr className="border-b border-gray-800">
                   <td className="p-4 text-white">Medium</td>
                   <td className="p-4 text-gray-300">$100,000</td>
                   <td className="p-4 text-red-300">$1,000 / mo</td>
                   <td className="p-4 text-green-300 font-bold">$8,400</td>
                 </tr>
                 <tr className="bg-hyper-800/20">
                   <td className="p-4 text-white">Large</td>
                   <td className="p-4 text-gray-300">$1,000,000</td>
                   <td className="p-4 text-red-300">$10,000 / mo</td>
                   <td className="p-4 text-green-300 font-bold">$84,000</td>
                 </tr>
               </tbody>
             </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{translationData.articleDex.conclusionTitle}</h2>
          <p className="text-gray-300 mb-8">{translationData.articleDex.conclusionText}</p>

          <div className="bg-gradient-to-r from-hyper-accent/20 to-hyper-secondary/20 p-8 rounded-2xl border border-hyper-accent/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{translationData.articleDex.startSavingTitle}</h3>
             <button className="bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
               {translationData.cta.btn}
             </button>
          </div>
        </article>
      </div>
    </section>
  );
};
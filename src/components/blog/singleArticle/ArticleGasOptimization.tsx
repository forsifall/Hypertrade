import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { AlertCircle, ArrowLeft, Calendar, Clock, Cpu, Layers, Search, Zap, Wallet, LineChart, Shield, Timer, TrendingDown, BarChart3, Bell, FileText, Users } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

export const ArticleGasOptimization = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "gas-optimization-hyperliquid");
  
  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-15"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label="Назад к статьям" />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-green-400 mb-4">
             <span className="bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">{post.category}</span>
             <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> {post.readTime}</span>
             <span className="flex items-center gap-1 text-gray-400"><Calendar size={14} /> {post.date}</span>
           </div>
           <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
             {post.title}
           </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-green-500 pl-6 italic">
            {post.excerpt}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <AlertCircle className="text-green-400" /> Введение: почему gas fees важны
          </h2>
          <p>{post.introParagraph}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{post.comparisonTables.noOptimization.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.comparisonTables.noOptimization.items.map((item: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.label}</span> 
                    <span className="text-white">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post.comparisonTables.withOptimization.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.comparisonTables.withOptimization.items.map((item: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.label}</span> 
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <h4 className="font-bold text-white mb-2">{post.learningPoints.title}</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-400">
                {/* eslint-disable-next-line */}
              {post.learningPoints.items.map((item: any, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-green-400">✅</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Cpu className="text-blue-400" /> {post.sections.howGasWorks.title}
          </h2>
          <p>{post.sections.howGasWorks.content}</p>
          
          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                    {/* eslint-disable-next-line */}
                  {post.sections.howGasWorks.table.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.howGasWorks.table.rows.map((row: any, rowIndex: number) => (
                  // eslint-disable-next-line
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800 bg-hyper-800/20" : "border-b border-gray-800"}>
                    {/* eslint-disable-next-line */}
                    {row.map((cell: any, cellIndex: number) => (
                      <td key={cellIndex} className="p-4" dangerouslySetInnerHTML={{ __html: cell }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Layers className="text-purple-400" /> {post.sections.factorsAffectingGas.title}
          </h2>
          
          <div className="space-y-8 not-prose mb-12">
            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingDown size={20} className="text-red-400"/> 
                {post.sections.factorsAffectingGas.subsections.complexity.title}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                        {/* eslint-disable-next-line */}
                      {post.sections.factorsAffectingGas.subsections.complexity.table.headers.map((header: any, index: number) => (
                        <th key={index} className="p-3 text-gray-400">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* eslint-disable-next-line */}
                    {post.sections.factorsAffectingGas.subsections.complexity.table.rows.map((row: any, rowIndex: number) => (
                      // eslint-disable-next-line
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800" : "border-b border-gray-800 bg-hyper-800/20"}>
                        {/* eslint-disable-next-line */}
                        {row.map((cell: any, cellIndex: number) => (
                          <td key={cellIndex} className="p-3" dangerouslySetInnerHTML={{ __html: cell }} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Timer size={20} className="text-yellow-400"/> 
                {post.sections.factorsAffectingGas.subsections.congestion.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-yellow-900/10 p-4 rounded-lg">
                  <h4 className="text-yellow-400 font-bold mb-2">{post.sections.factorsAffectingGas.subsections.congestion.peak.title}</h4>
                  <p className="text-sm text-gray-400">{post.sections.factorsAffectingGas.subsections.congestion.peak.time}</p>
                  <p className="text-sm text-yellow-300 mt-2">{post.sections.factorsAffectingGas.subsections.congestion.peak.price}</p>
                </div>
                <div className="bg-blue-900/10 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-bold mb-2">{post.sections.factorsAffectingGas.subsections.congestion.offPeak.title}</h4>
                  <p className="text-sm text-gray-400">{post.sections.factorsAffectingGas.subsections.congestion.offPeak.time}</p>
                  <p className="text-sm text-blue-300 mt-2">{post.sections.factorsAffectingGas.subsections.congestion.offPeak.price}</p>
                </div>
              </div>
            </div>

            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 size={20} className="text-green-400"/> 
                {post.sections.factorsAffectingGas.subsections.gasLimit.title}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                        {/* eslint-disable-next-line */}
                      {post.sections.factorsAffectingGas.subsections.gasLimit.table.headers.map((header: any, index: number) => (
                        <th key={index} className="p-3 text-gray-400">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* eslint-disable-next-line */}
                    {post.sections.factorsAffectingGas.subsections.gasLimit.table.rows.map((row: any, rowIndex: number) => (
                      // eslint-disable-next-line
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800" : "border-b border-gray-800 bg-hyper-800/20"}>
                        {/* eslint-disable-next-line */}
                        {row.map((cell: any, cellIndex: number) => (
                          <td key={cellIndex} className="p-3" dangerouslySetInnerHTML={{ __html: cell }} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post.sections.optimalTradingTime.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4">{post.sections.optimalTradingTime.cheapest.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.sections.optimalTradingTime.cheapest.items.map((item: any, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-400">✅</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4">{post.sections.optimalTradingTime.mostExpensive.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.sections.optimalTradingTime.mostExpensive.items.map((item: any, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-red-400">❌</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.sections.optimizationTechniques.title}</h2>
          <div className="space-y-6 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {post.sections.optimizationTechniques.items.map((item: any, index: number) => {
              const icons = [Timer, LineChart, Shield, Search];
              const Icon = icons[index];
              const iconColors = ["text-blue-400", "text-purple-400", "text-yellow-400", "text-cyan-400"];
              
              return (
                <div key={index} className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-green-500 hover:bg-hyper-800/40 transition-colors">
                  <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                    <Icon className={iconColors[index]} size={18} /> {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.sections.gasCostComparison.title}</h2>
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                    {/* eslint-disable-next-line */}
                  {post.sections.gasCostComparison.table.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.gasCostComparison.table.rows.map((row: any, rowIndex: number) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800 bg-hyper-800/20" : "border-b border-gray-800"}>
                    {/* eslint-disable-next-line */}
                    {row.map((cell: any, cellIndex: number) => (
                      <td key={cellIndex} className="p-4" dangerouslySetInnerHTML={{ __html: cell }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Bell className="text-yellow-400" /> {post.sections.monitoringTools.title}
          </h2>
          
          <div className="space-y-6 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {post.sections.monitoringTools.items.map((item: any, index: number) => {
              const icons = [LineChart, Zap, Users];
              const Icon = icons[index];
              const iconColors = ["text-green-400", "text-blue-400", "text-purple-400"];
              
              return (
                <div key={index} className="bg-hyper-800/30 border border-gray-700 p-5 rounded-xl">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Icon size={20} className={iconColors[index]}/> {item.title}
                  </h4>
                  {item.url && <p className="text-gray-400 text-sm mb-2">{item.url}</p>}
                  <p className="text-gray-300 text-sm">{item.description}</p>
                  {item.example && <p className="text-gray-300 text-sm mt-2">{item.example}</p>}
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{post.sections.conclusion.title}</h2>
          
          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <h4 className="font-bold text-white mb-4">{post.sections.conclusion.principles.title}</h4>
            <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
              {post.sections.conclusion.principles.items.map((item: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✅</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-8 rounded-2xl border border-green-500/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.sections.cta.title}</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-8">
               <div className="bg-hyper-800/50 p-4 rounded-lg">
                 <p className="text-sm text-gray-300 mb-2">{post.sections.cta.checkGas}</p>
                 <p className="text-xs text-gray-400">{post.sections.cta.checkGasUrl}</p>
               </div>
               <div className="bg-hyper-800/50 p-4 rounded-lg">
                 <p className="text-sm text-gray-300 mb-2">{post.sections.cta.useHypertrade}</p>
                 <p className="text-xs text-gray-400">{post.sections.cta.useHypertradeUrl}</p>
               </div>
             </div>
             <Link href={`/${lang}`}>
               <button className="bg-green-500 text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-green-400 transition-colors shadow-lg shadow-green-500/20">
                 {post.sections.cta.buttonText}
               </button>
             </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h4 className="text-lg font-bold text-white mb-4">{post.sections.resources.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400 mb-1">{post.sections.resources.monitoring}</p>
                {/* eslint-disable-next-line */}
                {post.sections.resources.monitoringItems.map((item: any, index: number) => (
                  <p key={index} className="text-gray-300">• {item}</p>
                ))}
              </div>
              <div>
                <p className="text-gray-400 mb-1">{post.sections.resources.tools}</p>
                {/* eslint-disable-next-line */}
                {post.sections.resources.toolItems.map((item: any, index: number) => (
                  <p key={index} className="text-gray-300">• {item}</p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
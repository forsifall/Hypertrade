import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { Zap, TrendingUp, BarChart3, Cpu, Shield, AlertTriangle, Clock, DollarSign, ArrowRightLeft, Cctv } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

export const ArticleArbitrageGuide = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "arbitrage-guide-hyperliquid");
  
  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-15"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label="Назад к статьям" />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-green-400 mb-4">
             <span className="bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">{post.category}</span>
             <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> {post.readTime}</span>
             <span className="flex items-center gap-1 text-gray-400"><DollarSign size={14} /> {post.date}</span>
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

          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <h4 className="font-bold text-white mb-4">{post.arbitrageOpportunities.title}</h4>
            <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
              {post.arbitrageOpportunities.reasons.map((reason: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>
                    <strong>{reason.title}</strong> {reason.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post.sections.arbitrageTypes.title}
          </h2>

          <div className="space-y-8 not-prose my-12">
            {/* eslint-disable-next-line */}
            {post.sections.arbitrageTypes.types.map((arbType: any, index: number) => {
              const icons = [ArrowRightLeft, TrendingUp];
              const Icon = icons[index];
              const iconColors = ["text-blue-400", "text-purple-400"];
              
              return (
                <div key={index} className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Icon size={20} className={iconColors[index]}/> {arbType.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{arbType.description}</p>
                  
                  {/* Для spot арбитража (первый элемент) */}
                  {arbType.type === "spot" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-900/10 p-4 rounded-lg">
                        <p className="text-sm text-blue-300 font-semibold mb-1">{arbType.example.title}</p>
                        <ul className="text-xs text-gray-400 space-y-1">
                            {/* eslint-disable-next-line */}
                          {arbType.example.details.map((detail: any, detailIndex: number) => (
                            <li key={detailIndex}>• {detail}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-900/50 p-4 rounded-lg">
                        <p className="text-sm text-gray-300 mb-1">{arbType.profitCalculation.title}</p>
                        <ul className="text-xs text-gray-400">
                            {/* eslint-disable-next-line */}
                          {arbType.profitCalculation.items.map((item: any, itemIndex: number) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    // Для funding rate арбитража (второй элемент)
                    <div className="bg-purple-900/10 p-4 rounded-lg">
                      <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: arbType.fundingRateExample }} />
                      <p className="text-xs text-gray-400 mt-1">{arbType.strategy}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Cctv className="text-red-400" /> {post.sections.manualArbitrageChallenges.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
            {/* eslint-disable-next-line */}
            {post.sections.manualArbitrageChallenges.challenges.map((challenge: any, index: number) => (
              <div key={index} className="bg-red-900/10 p-4 rounded-lg">
                <h4 className="text-red-400 font-bold mb-2">{challenge.title}</h4>
                <p className="text-xs text-gray-400">{challenge.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Cpu className="text-cyan-400" /> {post.sections.buildingBot.title}
          </h2>
          <p>{post.sections.buildingBot.content}</p>
          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                    {/* eslint-disable-next-line */}
                  {post.sections.buildingBot.comparisonTable.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* eslint-disable-next-line */}
                {post.sections.buildingBot.comparisonTable.rows.map((row: any, rowIndex: number) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800" : "border-b border-gray-800 bg-hyper-800/20"}>
                    {/* eslint-disable-next-line */}
                    {row.map((cell: any, cellIndex: number) => (
                      <td key={cellIndex} className="p-4" dangerouslySetInnerHTML={{ __html: cell }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400">{post.sections.buildingBot.costs}</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Shield className="text-green-400" /> {post.sections.hypertradeSolution.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.hypertradeSolution.content }} />

          <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl my-8">
            <h4 className="text-green-400 font-bold mb-4">{post.sections.hypertradeSolution.mechanisms.title}</h4>
            <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
              {post.sections.hypertradeSolution.mechanisms.points.map((point: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">{index + 1}.</span>
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 not-prose mb-12">
            <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-green-500 hover:bg-hyper-800/40 transition-colors">
              <h4 className="font-bold text-white text-lg mb-2">{post.sections.hypertradeSolution.useCase.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: post.sections.hypertradeSolution.useCase.description }} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{post.sections.comparison.title}</h2>
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                    {/* eslint-disable-next-line */}
                  {post.sections.comparison.table.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* eslint-disable-next-line */}
                {post.sections.comparison.table.rows.map((row: any, rowIndex: number) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800" : "border-b border-gray-800 bg-hyper-800/20"}>
                    {/* eslint-disable-next-line */}
                    {row.map((cell: any, cellIndex: number) => (
                      <td key={cellIndex} className="p-4" dangerouslySetInnerHTML={{ __html: cell }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-8 rounded-2xl border border-green-500/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.sections.cta.title}</h3>
             <p className="text-gray-300 mb-6">{post.sections.cta.description}</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* eslint-disable-next-line */}
               {post.sections.cta.benefits.map((benefit: any, index: number) => (
                 <div key={index} className="bg-hyper-800/50 p-4 rounded-lg">
                   <p className="text-sm text-gray-300 mb-1">{benefit.title}</p>
                   <p className="text-xs text-gray-400">{benefit.description}</p>
                 </div>
               ))}
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
                {/* eslint-disable-next-line */}
              {post.sections.resources.categories.map((category: any, index: number) => (
                <div key={index}>
                  <p className="text-gray-400 mb-1">{category.title}</p>
                  {/* eslint-disable-next-line */}
                  {category.items.map((item: any, itemIndex: number) => (
                    <p key={itemIndex} className="text-gray-300">• {item}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { BarChart, Calendar, Clock, Cpu, Eye, LineChart, PieChart, TrendingUp, Zap, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

export const ArticleLiquidityAnalysis = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "liquidity-analysis-guide");
  
  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label={post.backButton} />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-blue-400 mb-4">
             <span className="bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">{post.category}</span>
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
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-blue-400 pl-6 italic">
            {post.excerpt}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{post.comparison.without.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {post.comparison.without.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-300 mr-2">•</span> 
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post.comparison.with.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {post.comparison.with.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-300 mr-2">•</span> 
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-900/20 to-blue-900/20 p-6 rounded-xl border border-amber-700/30 mb-8">
            <h4 className="text-amber-300 font-bold mb-2">{post.comparison.annualDifference.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded">
                <div className="text-red-300 font-bold">{post.comparison.annualDifference.traderA.label}</div>
                <div className="text-white">{post.comparison.annualDifference.traderA.value}</div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded">
                <div className="text-green-300 font-bold">{post.comparison.annualDifference.traderB.label}</div>
                <div className="text-white">{post.comparison.annualDifference.traderB.value}</div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded">
              <div className="text-hyper-accent font-bold text-lg">{post.comparison.annualDifference.savings.value}</div>
              <div className="text-gray-400 text-sm">{post.comparison.annualDifference.savings.note}</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Eye className="text-hyper-accent" /> {post.whatIsLiquidity.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post.whatIsLiquidity.highLiquidity.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {post.whatIsLiquidity.highLiquidity.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-300 mr-2">•</span> 
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-green-900/20 rounded text-center">
                <div className="text-green-300 font-bold">{post.whatIsLiquidity.highLiquidity.summary}</div>
              </div>
            </div>

            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{post.whatIsLiquidity.lowLiquidity.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {post.whatIsLiquidity.lowLiquidity.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-300 mr-2">•</span> 
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-red-900/20 rounded text-center">
                <div className="text-red-300 font-bold">{post.whatIsLiquidity.lowLiquidity.summary}</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <BarChart className="text-blue-400" /> {post.readingCharts.title}
          </h2>

          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <h4 className="font-bold text-white mb-4">{post.readingCharts.orderBookChart.title}</h4>
            <div className="relative h-48 bg-gray-900/50 rounded-lg p-4 mb-4">
              <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
                <div className="w-1/2 h-full flex flex-col justify-end">
                  <div className="bg-green-900/40 h-3/4 rounded-tl" style={{clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)'}}></div>
                  <div className="text-center text-xs text-gray-400 mt-2">{post.readingCharts.orderBookChart.bidSide}</div>
                </div>
                <div className="w-1/2 h-full flex flex-col justify-end">
                  <div className="bg-red-900/40 h-4/5 rounded-tr" style={{clipPath: 'polygon(0% 0%, 100% 100%, 100% 100%, 0% 100%)'}}></div>
                  <div className="text-center text-xs text-gray-400 mt-2">{post.readingCharts.orderBookChart.askSide}</div>
                </div>
              </div>
              <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-amber-400"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-black px-2 py-1 rounded text-xs font-bold">
                {post.readingCharts.orderBookChart.currentPrice}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-900/20 p-4 rounded">
                <h5 className="text-green-300 font-bold mb-2">{post.readingCharts.orderBookChart.highLiquidity.title}</h5>
                <ul className="text-xs space-y-1 text-gray-300">
                  {post.readingCharts.orderBookChart.highLiquidity.points.map((point: string, index: number) => (
                    <li key={index}>• {point}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-900/20 p-4 rounded">
                <h5 className="text-red-300 font-bold mb-2">{post.readingCharts.orderBookChart.lowLiquidity.title}</h5>
                <ul className="text-xs space-y-1 text-gray-300">
                  {post.readingCharts.orderBookChart.lowLiquidity.points.map((point: string, index: number) => (
                    <li key={index}>• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.tradingTimes.title}</h2>
          
          <div className="bg-gray-900/50 p-6 rounded-xl mb-8">
            <h4 className="text-white font-bold mb-4">{post.tradingTimes.heatmapTitle}</h4>
            <div className="space-y-2">
                {/* eslint-disable-next-line */}
              {post.tradingTimes.timeSlots.map((slot: any, index: number) => {
                const widths = ["40%", "100%", "60%"];
                const colors = ["bg-red-500", "bg-green-500", "bg-amber-500"];
                const textColors = ["text-red-400", "text-green-400", "text-amber-400"];
                
                return (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-800/50 rounded">
                    <div className="text-gray-300">{slot.time}</div>
                    <div className="flex items-center">
                      <div className="w-32 h-4 bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full ${colors[index]}`} style={{width: widths[index]}}></div>
                      </div>
                      <span className={`ml-2 ${textColors[index]} font-bold`}>{slot.percentage}</span>
                    </div>
                    <div className={textColors[index]}>{slot.label}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded">
              <h4 className="text-hyper-accent font-bold">{post.tradingTimes.conclusion}</h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{post.timeComparison.lowLiquidityTime.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.timeComparison.lowLiquidityTime.metrics.map((metric: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{metric.label}</span> 
                    <span className={index === 1 ? "text-red-300" : index === 2 ? "text-red-300" : index === 3 ? "text-red-300" : "text-white"}>
                      {metric.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post.timeComparison.optimalTime.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.timeComparison.optimalTime.metrics.map((metric: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{metric.label}</span> 
                    <span className={index === 1 ? "text-green-300" : index === 2 ? "text-green-300" : index === 3 ? "text-green-300" : "text-white"}>
                      {metric.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 p-6 rounded-xl border border-amber-700/30 text-center">
            <div className="text-hyper-accent text-2xl font-bold mb-2">{post.timeComparison.savings.value}</div>
            <div className="text-gray-300">{post.timeComparison.savings.note}</div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="text-green-400" /> {post.practicalGuide.title}
          </h2>

          <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl my-8">
            <h4 className="text-white font-bold mb-4">{post.practicalGuide.checklistTitle}</h4>
            <div className="space-y-4">
                {/* eslint-disable-next-line */}
              {post.practicalGuide.items.map((item: any, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="bg-hyper-900 text-hyper-accent rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">□</div>
                  <div>
                    <div className="text-white">{item.step}</div>
                    <div className="text-gray-400 text-sm mt-1" dangerouslySetInnerHTML={{ __html: item.details }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post.hypertradeAdvantages.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4">{post.hypertradeAdvantages.withoutHypertrade.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {post.hypertradeAdvantages.withoutHypertrade.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-300 mr-2">•</span> 
                    <span>{item}</span>
                  </li>
                ))}
                <li className="border-t border-red-900/30 pt-3">
                  <div className="flex justify-between">
                    <span className="text-white">{post.hypertradeAdvantages.withoutHypertrade.time.split(":")[0]}:</span>
                    <span className="text-red-300 font-bold">{post.hypertradeAdvantages.withoutHypertrade.time.split(":")[1]}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-white">{post.hypertradeAdvantages.withoutHypertrade.risk.split(":")[0]}:</span>
                    <span className="text-red-300">{post.hypertradeAdvantages.withoutHypertrade.risk.split(":")[1]}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4">{post.hypertradeAdvantages.withHypertrade.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {post.hypertradeAdvantages.withHypertrade.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-300 mr-2">•</span> 
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
                <li className="border-t border-green-900/30 pt-3">
                  <div className="flex justify-between">
                    <span className="text-white">{post.hypertradeAdvantages.withHypertrade.time.split(":")[0]}:</span>
                    <span className="text-green-300 font-bold">{post.hypertradeAdvantages.withHypertrade.time.split(":")[1]}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-white">{post.hypertradeAdvantages.withHypertrade.risk.split(":")[0]}:</span>
                    <span className="text-green-300">{post.hypertradeAdvantages.withHypertrade.risk.split(":")[1]}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.comparisonTable.title}</h2>
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  {post.comparisonTable.headers.map((header: string, index: number) => (
                    <th key={index} className={`p-4 ${index === 1 ? "text-red-400" : index === 2 ? "text-green-400" : index === 3 ? "text-hyper-accent" : "text-gray-400"} font-medium`}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.comparisonTable.rows.map((row: any, rowIndex: number) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800" : "border-b border-gray-800 bg-hyper-800/20"}>
                    <td className="p-4 text-white">{row.task}</td>
                    <td className="p-4 text-red-300">{row.manual}</td>
                    <td className="p-4 text-green-300">{row.hypertrade}</td>
                    <td className="p-4 text-green-400 font-bold">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-hyper-accent/20 to-blue-500/20 p-8 rounded-2xl border border-hyper-accent/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.cta.title}</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* eslint-disable-next-line */}
               {post.cta.actions.map((action: any, index: number) => (
                 <div key={index} className="bg-gray-900/50 p-4 rounded-lg">
                   <div className="text-hyper-accent font-bold mb-2">{action.title}</div>
                   <div className="text-gray-300 text-sm">{action.description}</div>
                   <div className="text-green-400 text-xs mt-1">{action.subtext}</div>
                 </div>
               ))}
             </div>
             <Link href={`/${lang}`}>
               <button className="bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
                 {post.cta.button}
               </button>
             </Link>
             <div className="mt-6">
               <div className="text-white font-bold text-lg">{post.cta.stats.main}</div>
               <div className="text-gray-300 mt-2">{post.cta.stats.note}</div>
               <div className="text-hyper-accent font-bold mt-3">{post.cta.stats.conclusion}</div>
             </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 not-prose">
            <h4 className="text-gray-400 text-sm mb-4">{post.resources.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {/* eslint-disable-next-line */}
              {post.resources.categories.map((category: any, index: number) => (
                <div key={index} className="space-y-2">
                  <div className="text-gray-500 font-medium">{category.title}</div>
                  {category.links.map((link: string, linkIndex: number) => (
                    <a key={linkIndex} href="#" className="text-hyper-accent hover:text-cyan-300 block">
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-900/50 rounded-lg text-center">
            <div className="text-gray-400 text-sm">{post.seriesInfo}</div>
          </div>
        </article>
      </div>
    </section>
  );
};
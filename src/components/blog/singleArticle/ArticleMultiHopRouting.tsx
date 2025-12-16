import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { ArrowRight, Calculator, Cpu, Layers, TrendingUp, Zap, CheckCircle, BarChart, DollarSign, PieChart, Route, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

export const ArticleMultiHopRouting = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "multi-hop-routing-guide");
  
  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label={post.backButton} />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-400 mb-4">
             <span className="bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">{post.category}</span>
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
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-emerald-400 pl-6 italic">
            {post.excerpt}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{post.comparison.directSwap.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.comparison.directSwap.metrics.map((metric: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{metric.label}</span> 
                    <span className={
                      index === 1 ? "text-red-300" : 
                      index === 2 ? "text-red-400 font-bold" : 
                      index === 3 ? "text-red-300" : 
                      "text-white"
                    }>
                      {metric.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post.comparison.multiHop.title}</h4>
              <div className="space-y-4">
                <div className="text-sm">
                  <div className="text-gray-400 mb-1">{post.comparison.multiHop.hop1.label}</div>
                  <div className="flex justify-between">
                    <span>{post.comparison.multiHop.hop1.liquidityLabel}</span> 
                    <span className="text-green-300">{post.comparison.multiHop.hop1.liquidityValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{post.comparison.multiHop.hop1.impactLabel}</span> 
                    <span className="text-green-300">{post.comparison.multiHop.hop1.impactValue}</span>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-400 mb-1">{post.comparison.multiHop.hop2.label}</div>
                  <div className="flex justify-between">
                    <span>{post.comparison.multiHop.hop2.liquidityLabel}</span> 
                    <span className="text-amber-300">{post.comparison.multiHop.hop2.liquidityValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{post.comparison.multiHop.hop2.impactLabel}</span> 
                    <span className="text-amber-300">{post.comparison.multiHop.hop2.impactValue}</span>
                  </div>
                </div>
                <div className="border-t border-green-900/30 pt-3">
                  <div className="flex justify-between font-bold">
                    <span>{post.comparison.multiHop.summary.combinedLabel}</span>
                    <span className="text-green-400">{post.comparison.multiHop.summary.combinedValue}</span>
                  </div>
                  <div className="flex justify-between font-bold mt-1">
                    <span>{post.comparison.multiHop.summary.lossLabel}</span>
                    <span className="text-green-300">{post.comparison.multiHop.summary.lossValue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 p-6 rounded-xl border border-emerald-700/30 text-center mb-8">
            <div className="text-3xl font-bold text-emerald-300 mb-2">{post.comparison.savings.value}</div>
            <div className="text-white">{post.comparison.savings.description}</div>
            <div className="text-gray-300 text-sm mt-2">{post.comparison.savings.note}</div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Route className="text-hyper-accent" /> {post.whatIsMultiHop.title}
          </h2>

          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <h4 className="font-bold text-white mb-3">Определение</h4>
            <p className="text-gray-300 mb-4">
              {post.whatIsMultiHop.definition}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 p-4 rounded">
                <h5 className="text-red-300 font-bold mb-2">{post.whatIsMultiHop.directExchange.title}</h5>
                <div className="text-sm text-gray-300">
                  <div>{post.whatIsMultiHop.directExchange.example}</div>
                  <div>{post.whatIsMultiHop.directExchange.rate}</div>
                  <div>{post.whatIsMultiHop.directExchange.fee}</div>
                  <div className="text-red-300 font-bold mt-2">{post.whatIsMultiHop.directExchange.total}</div>
                </div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded">
                <h5 className="text-green-300 font-bold mb-2">{post.whatIsMultiHop.multiHopExchange.title}</h5>
                <div className="text-sm text-gray-300">
                  <div>{post.whatIsMultiHop.multiHopExchange.example}</div>
                  <div>{post.whatIsMultiHop.multiHopExchange.step1}</div>
                  <div>{post.whatIsMultiHop.multiHopExchange.step2}</div>
                  <div className="text-green-300 font-bold mt-2">{post.whatIsMultiHop.multiHopExchange.total}</div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-emerald-900/20 rounded text-center">
              <div className="text-emerald-300 font-bold">{post.whatIsMultiHop.savings}</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.math.title}</h2>

          <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl my-8">
            <h4 className="text-white font-bold mb-4">{post.math.formulaTitle}</h4>
            <div className="bg-hyper-900 p-4 rounded-lg mb-4">
              <div className="text-hyper-accent font-mono text-center">
                {post.math.formula}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 p-4 rounded">
                <h5 className="text-amber-300 font-bold mb-2">{post.math.calculationExample.title}</h5>
                <div className="text-sm space-y-2">
                  <div>{post.math.calculationExample.hop1}</div>
                  <div>{post.math.calculationExample.hop2}</div>
                  <div className="border-t border-gray-700 pt-2">
                    <div>{post.math.calculationExample.formula}</div>
                    <div className="text-green-300 font-bold">{post.math.calculationExample.result}</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded">
                <h5 className="text-emerald-300 font-bold mb-2">{post.math.vsDirect.title}</h5>
                <div className="text-sm space-y-2">
                  <div className="text-red-300 font-bold text-xl">{post.math.vsDirect.directImpact}</div>
                  <div className="border-t border-gray-700 pt-2">
                    <div className="text-emerald-300 font-bold">{post.math.vsDirect.savings}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Layers className="text-blue-400" /> {post.tokenSelection.title}
          </h2>

          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  {post.tokenSelection.tableHeaders.map((header: string, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.tokenSelection.tokens.map((token: any, index: number) => (
                  <tr key={index} className={`border-b border-gray-800 ${index === 0 ? 'bg-emerald-900/10' : ''}`}>
                    <td className="p-4 text-white font-bold">{token.tier}</td>
                    <td className="p-4 text-white">{token.name}</td>
                    <td className={`p-4 ${index <= 1 ? 'text-emerald-300' : 'text-amber-300'}`}>{token.liquidity}</td>
                    <td className={`p-4 ${index <= 1 ? 'text-emerald-300' : 'text-amber-300'}`}>{token.pairs}</td>
                    <td className="p-4 text-gray-300">{token.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 p-6 rounded-xl border border-amber-700/30 mb-8">
            <h4 className="text-amber-300 font-bold mb-3">{post.tokenSelection.whyHype.title}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {post.tokenSelection.whyHype.points.map((point: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-300 mr-2">•</span> 
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-center">
              <div className="text-white font-bold">{post.tokenSelection.whyHype.bestPractice}</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.decisionTree.title}</h2>

          <div className="bg-gray-900/50 p-6 rounded-xl mb-8">
            <h4 className="text-white font-bold mb-4">{post.decisionTree.decisionTreeTitle}</h4>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">{post.decisionTree.start}</div>
                <div className="text-white">{post.decisionTree.startQuestion}</div>
              </div>
              
              <div className="flex items-center ml-8">
                <div className="text-gray-400 mr-4">↓</div>
                <div className="bg-gray-800 p-3 rounded">{post.decisionTree.checkStep}</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-16">
                <div className="bg-red-900/20 p-4 rounded">
                  <div className="text-red-300 font-bold mb-2">{post.decisionTree.noPath.title}</div>
                </div>
                <div className="bg-amber-900/20 p-4 rounded">
                  <div className="text-amber-300 font-bold mb-2">{post.decisionTree.yesPath.title}</div>
                  <div className="text-sm text-gray-300">{post.decisionTree.yesPath.question}</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Cpu className="text-purple-400" /> {post.hypertradeAutomation.title}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">{post.hypertradeAutomation.step1.number}</div>
                <h3 className="text-xl font-bold text-white">{post.hypertradeAutomation.step1.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-900/10 p-4 rounded">
                  <h4 className="text-red-300 font-bold mb-3">{post.hypertradeAutomation.step1.withoutHypertrade.title}</h4>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {post.hypertradeAutomation.step1.withoutHypertrade.points.map((point: string, index: number) => (
                      <li key={index}>• {point}</li>
                    ))}
                    <li className="border-t border-red-900/30 pt-2">
                      <div className="font-bold text-white">{post.hypertradeAutomation.step1.withoutHypertrade.time}</div>
                      <div className="text-red-300">{post.hypertradeAutomation.step1.withoutHypertrade.risk}</div>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-900/10 p-4 rounded">
                  <h4 className="text-green-300 font-bold mb-3">{post.hypertradeAutomation.step1.withHypertrade.title}</h4>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {post.hypertradeAutomation.step1.withHypertrade.points.map((point: string, index: number) => (
                      <li key={index}>• {point}</li>
                    ))}
                    <li className="border-t border-green-900/30 pt-2">
                      <div className="font-bold text-white">{post.hypertradeAutomation.step1.withHypertrade.time}</div>
                      <div className="text-green-300">{post.hypertradeAutomation.step1.withHypertrade.accuracy}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.realCases.title}</h2>

          <div className="space-y-6 not-prose mb-12">
            <div className="bg-gradient-to-r from-gray-900 to-hyper-900 border border-gray-700 p-6 rounded-xl">
              <h4 className="text-amber-400 font-bold text-lg mb-3">{post.realCases.case2.title}</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-900/10 p-4 rounded">
                  <div className="text-red-300 font-bold mb-2">{post.realCases.case2.directSwap.title}</div>
                  <div className="text-red-300 text-sm">{post.realCases.case2.directSwap.impact}</div>
                  <div className="text-white font-bold mt-2">{post.realCases.case2.directSwap.loss}</div>
                </div>
                <div className="bg-amber-900/10 p-4 rounded">
                  <div className="text-amber-300 font-bold mb-2">{post.realCases.case2.multiHop.title}</div>
                  <div className="text-amber-300 text-sm">{post.realCases.case2.multiHop.impact}</div>
                  <div className="text-white font-bold mt-2">{post.realCases.case2.multiHop.loss}</div>
                </div>
                <div className="bg-green-900/10 p-4 rounded">
                  <div className="text-green-300 font-bold mb-2">{post.realCases.case2.hypertradeHybrid.title}</div>
                  <div className="text-green-300 text-sm">{post.realCases.case2.hypertradeHybrid.impact}</div>
                  <div className="text-white font-bold mt-2">{post.realCases.case2.hypertradeHybrid.loss}</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded">
                <div className="flex justify-between">
                  <span className="text-white">{post.realCases.case2.savings.label}</span>
                  <span className="text-green-400 font-bold">{post.realCases.case2.savings.value}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-hyper-accent/20 to-emerald-500/20 p-8 rounded-2xl border border-hyper-accent/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.cta.title}</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* eslint-disable-next-line */}
               {post.cta.actions.map((action: any, index: number) => (
                 <div key={index} className="bg-gray-900/50 p-4 rounded-lg">
                   <div className="text-hyper-accent font-bold mb-2">{action.title}</div>
                   <div className="text-gray-300 text-sm">{action.description}</div>
                   <div className="text-cyan-400 text-xs mt-1">{action.subtext}</div>
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
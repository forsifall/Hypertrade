import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { AlertTriangle, Clock, Calendar, Shield, Zap, Target, Lock, PieChart, DollarSign, Cpu, AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

// --- Single Blog Article Component (MEV Protection) ---
// eslint-disable-next-line
export const ArticleMEVProtection = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "mev-protection-guide");

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className="h-64 md:h-80 w-full bg-gradient-to-r from-red-900 via-orange-900 to-hyper-900 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
          <BackButton label={post?.backButtonLabel || "Назад"} />
          <div className="flex flex-wrap gap-4 text-sm font-medium text-red-400 mb-4">
            <span className="bg-red-400/10 px-3 py-1 rounded-full border border-red-400/20">{post?.category}</span>
            <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> {post?.readTime}</span>
            <span className="flex items-center gap-1 text-gray-400"><Calendar size={14} /> {post?.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {post?.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-red-400 pl-6 italic">
            {post?.introQuote}
          </p>

          <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl mb-8 not-prose">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><AlertTriangle className="text-red-400" /> {post?.coldStats.title}</h3>
            <ul className="space-y-2 text-gray-300">
              {post?.coldStats.items.map((item: string, index: number) => (
                <li key={index} className="flex items-start"><span className="text-red-300 mr-2">•</span> <span className="font-bold" dangerouslySetInnerHTML={{ __html: item }}></span></li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Shield className="text-hyper-accent" /> {post?.mevDefinition.title}
          </h2>

          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <h4 className="font-bold text-white mb-3">{post?.mevDefinition.definitionTitle}</h4>
            <p className="text-gray-300 mb-4">{post?.mevDefinition.definitionText}</p>
            <div className="bg-hyper-900 p-4 rounded-lg">
              <div className="text-cyan-300 font-mono text-sm">
                <div>{post?.mevDefinition.processTitle}</div>
                {post?.mevDefinition.processSteps.map((step: string, index: number) => (
                  <div key={index} className="mt-2 text-red-300" dangerouslySetInnerHTML={{ __html: step }}></div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Target className="text-red-400" /> {post?.attackTypes.title}
          </h2>

          <div className="space-y-8 not-prose mb-12">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><AlertCircle className="text-red-400" /> {post?.attackTypes.sandwich.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-900/50 p-4 rounded">
                  <div className="text-red-300 font-bold mb-2">{post?.attackTypes.sandwich.frontrun}</div>
                  <div className="text-xs text-gray-300">{post?.attackTypes.sandwich.frontrunDesc}</div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded">
                  <div className="text-amber-300 font-bold mb-2">{post?.attackTypes.sandwich.victim}</div>
                  <div className="text-xs text-gray-300">{post?.attackTypes.sandwich.victimDesc}</div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded">
                  <div className="text-green-300 font-bold mb-2">{post?.attackTypes.sandwich.backrun}</div>
                  <div className="text-xs text-gray-300">{post?.attackTypes.sandwich.backrunDesc}</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-black/30 rounded">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{post?.attackTypes.sandwich.yourLossLabel}</span>
                  <span className="text-red-300 font-bold">$2,380 (на $50k свопе)</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-400">{post?.attackTypes.sandwich.botProfitLabel}</span>
                  <span className="text-green-300 font-bold">+$200</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post?.mevStats.title}</h2>
          
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  {post?.mevStats.tableHeaders.map((header: string, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post?.mevStats.tableRows.map((row: any, index: number) => (
                  <tr key={index} className={`border-b border-gray-800 ${index % 2 === 1 ? 'bg-hyper-800/20' : ''}`}>
                    <td className="p-4 text-white">{row.size}</td>
                    <td className="p-4 text-amber-300">{row.loss}</td>
                    <td className="p-4 text-amber-300">{row.percent}</td>
                    <td className="p-4 text-red-300">{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Lock className="text-green-400" /> {post?.protectionStrategies.title}
          </h2>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">{post?.protectionStrategies.slippageStrategy.title}</h3>
          <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl my-6">
            <h4 className="text-green-400 font-bold mb-3">{post?.protectionStrategies.slippageStrategy.settingsTitle}</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    {post?.protectionStrategies.slippageStrategy.tableHeaders.map((header: string, index: number) => (
                      <th key={index} className="p-3 text-gray-400 font-medium">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                    {/* eslint-disable-next-line */}
                  {post?.protectionStrategies.slippageStrategy.tableRows.map((row: any, index: number) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="p-3 text-white">{row.token}</td>
                      <td className="p-3 text-green-300">{row.slippage}</td>
                      <td className="p-3 text-gray-300">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-red-900/20 border border-red-900/30 rounded">
              <h4 className="text-red-300 font-bold mb-2">{post?.protectionStrategies.slippageStrategy.criticalRuleTitle}</h4>
              <p className="text-white">{post?.protectionStrategies.slippageStrategy.criticalRule1}</p>
              <p className="text-gray-300 text-sm mt-1">{post?.protectionStrategies.slippageStrategy.criticalRule2}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post?.hyperliquidAdvantage.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{post?.hyperliquidAdvantage.ethereumColumn.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {post?.hyperliquidAdvantage.ethereumColumn.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start"><span className="text-red-300 mr-2">•</span> <span className="text-white" dangerouslySetInnerHTML={{ __html: item }}></span></li>
                ))}
              </ul>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post?.hyperliquidAdvantage.hyperliquidColumn.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {post?.hyperliquidAdvantage.hyperliquidColumn.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start"><span className="text-green-300 mr-2">•</span> <span className="text-white" dangerouslySetInnerHTML={{ __html: item }}></span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-6 rounded-xl border border-cyan-700/30 my-8">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Cpu className="text-cyan-400"/> {post?.hyperliquidAdvantage.deterministicTitle}</h3>
            <div className="mt-4 bg-hyper-900 p-4 rounded-lg">
              <div className="text-cyan-300 font-mono text-sm">
                <div>{post?.hyperliquidAdvantage.hyperBftRulesTitle}</div>
                {post?.hyperliquidAdvantage.hyperBftRules.map((rule: string, index: number) => (
                  <div key={index} className="mt-2 text-green-300" dangerouslySetInnerHTML={{ __html: rule }}></div>
                ))}
              </div>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              {post?.hyperliquidAdvantage.deterministicText}
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post?.comparisonTable.title}</h2>
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  {post?.comparisonTable.headers.map((header: string, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post?.comparisonTable.rows.map((row: any, index: number) => (
                  <tr key={index} className={`border-b border-gray-800 ${index % 2 === 1 ? 'bg-hyper-800/20' : ''}`}>
                    <td className="p-4 text-white">{row.param}</td>
                    <td className="p-4 text-red-300">{row.ethereumUniswap}</td>
                    <td className="p-4 text-red-300">{row.ethereum1inch}</td>
                    <td className="p-4 text-green-300">{row.hyperliquid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="text-green-400" /> {post?.checklist.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <h4 className="text-white font-bold mb-4">{post?.checklist.allTraders.title}</h4>
              <ul className="space-y-3 text-sm">
                {post?.checklist.allTraders.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-hyper-accent mr-2">□</span>
                    <span className="text-gray-300" dangerouslySetInnerHTML={{ __html: item }}></span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <h4 className="text-white font-bold mb-4">{post?.checklist.largeTraders.title}</h4>
              <ul className="space-y-3 text-sm">
                {post?.checklist.largeTraders.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-hyper-accent mr-2">□</span>
                    <span className="text-gray-300" dangerouslySetInnerHTML={{ __html: item }}></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-red-700/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post?.cta.title}</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* eslint-disable-next-line */}
               {post?.cta.steps.map((step: any, index: number) => (
                 <div key={index} className="bg-gray-900/50 p-4 rounded-lg">
                   <div className="text-hyper-accent font-bold mb-2">{step.number}</div>
                   <div className="text-gray-300 text-sm">{step.text}</div>
                   <div className="text-cyan-400 text-xs mt-1">{step.subtext}</div>
                 </div>
               ))}
             </div>
             <Link href={`/${lang}/trade`} className="inline-block bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
               {post?.cta.button}
             </Link>
             <div className="mt-4 text-gray-400 text-sm">
               {post?.cta.stats}
             </div>
             <div className="text-red-300 text-sm mt-2 font-bold">{post?.cta.warning}</div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 not-prose">
            <h4 className="text-gray-400 text-sm mb-4">{post?.links.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="text-gray-500 font-medium">{post?.links.hyperliquidTitle}</div>
                {post?.links.hyperliquidLinks.map((link: string, index: number) => (
                  <a key={index} href="#" className="text-hyper-accent hover:text-cyan-300 block">{link}</a>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-gray-500 font-medium">{post?.links.mevResearchTitle}</div>
                {post?.links.mevResearchLinks.map((link: string, index: number) => (
                  <a key={index} href="#" className="text-hyper-accent hover:text-cyan-300 block">{link}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-900/50 rounded-lg text-center">
            <div className="text-gray-400 text-sm">{post?.seriesInfo}</div>
          </div>
        </article>
      </div>
    </section>
  );
};
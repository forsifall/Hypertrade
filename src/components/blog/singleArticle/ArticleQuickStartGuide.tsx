import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { Zap, Clock, CheckCircle, Settings, ArrowRight, Wallet, Link as LinkIcon, Cpu, BarChart, DollarSign } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

export const ArticleQuickStartGuide = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "quick-start-guide");
  
  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label={post.backButton} />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-purple-400 mb-4">
             <span className="bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">{post.category}</span>
             <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> {post.readTime}</span>
             <span className="flex items-center gap-1 text-gray-400">{post.date}</span>
           </div>
           <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
             {post.title}
           </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-purple-400 pl-6 italic">
            {post.excerpt}
          </p>

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-700/30 mb-8">
            <h4 className="text-blue-300 font-bold mb-3">{post.whatYouGet.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.whatYouGet.items.map((item: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Wallet className="text-hyper-accent" /> {post.preparation.title}
          </h2>

          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <h4 className="font-bold text-white mb-4">{post.preparation.checklistTitle}</h4>
            <div className="space-y-4">
                {/* eslint-disable-next-line */}
              {post.preparation.items.map((item: any, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="bg-hyper-900 text-hyper-accent rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">{item.number}</div>
                  <div>
                    <div className="text-white">{item.title}</div>
                    <div className="text-gray-400 text-sm mt-1">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <LinkIcon className="text-blue-400" /> {post.networkSetup.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post.networkSetup.autoOption.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {post.networkSetup.autoOption.steps.map((step: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-300 mr-2">{index + 1}.</span> 
                    <span dangerouslySetInnerHTML={{ __html: step }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-900/10 border border-amber-900/30 p-6 rounded-xl">
              <h4 className="text-amber-400 font-bold mb-4 border-b border-amber-900/30 pb-2">{post.networkSetup.manualOption.title}</h4>
              <div className="bg-hyper-900 p-4 rounded-lg">
                <div className="text-xs space-y-1">
                  <div className="text-gray-400">Network Name: <span className="text-white">{post.networkSetup.manualOption.config.networkName}</span></div>
                  <div className="text-gray-400">RPC URL: <span className="text-cyan-300">{post.networkSetup.manualOption.config.rpcUrl}</span></div>
                  <div className="text-gray-400">Chain ID: <span className="text-white">{post.networkSetup.manualOption.config.chainId}</span></div>
                  <div className="text-gray-400">Currency Symbol: <span className="text-white">{post.networkSetup.manualOption.config.currencySymbol}</span></div>
                  <div className="text-gray-400">Explorer: <span className="text-cyan-300">{post.networkSetup.manualOption.config.explorer}</span></div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post.firstSwap.title}
          </h2>

          <div className="space-y-8 not-prose mb-12">
            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3.1</div>
                <h3 className="text-xl font-bold text-white">{post.firstSwap.step31.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-4 rounded">
                  <h4 className="text-cyan-300 font-bold mb-2">{post.firstSwap.step31.from.title}</h4>
                  <div className="text-sm text-gray-300">
                    <div>{post.firstSwap.step31.from.example}</div>
                    <div className="mt-2">{post.firstSwap.step31.from.quickButtons}</div>
                    <div className="flex gap-2 mt-1">
                      {post.firstSwap.step31.from.buttons.map((button: string, index: number) => (
                        <span key={index} className="bg-gray-800 px-2 py-1 rounded text-xs">{button}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded">
                  <h4 className="text-green-300 font-bold mb-2">{post.firstSwap.step31.to.title}</h4>
                  <div className="text-sm text-gray-300">
                    <div>{post.firstSwap.step31.to.example}</div>
                    <div className="mt-2">{post.firstSwap.step31.to.expectedOutput}</div>
                    <div className="text-white font-bold mt-1">{post.firstSwap.step31.to.value}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3.2</div>
                <h3 className="text-xl font-bold text-white">{post.firstSwap.step32.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    {/* eslint-disable-next-line */}
                  {post.firstSwap.step32.metrics.map((metric: any, index: number) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-400">{metric.label}</span>
                      <span className={
                        metric.value.includes("✅") ? "text-green-400 font-bold" : "text-white"
                      }>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-hyper-900 p-4 rounded">
                  <h4 className="text-amber-300 font-bold mb-2">{post.firstSwap.step32.routeBreakdown.title}</h4>
                  <div className="text-sm space-y-2">
                    {/* eslint-disable-next-line */}
                    {post.firstSwap.step32.routeBreakdown.routes.map((route: any, index: number) => (
                      <div key={index} className="flex justify-between">
                        <span>{route.name}</span>
                        <span className="text-white">{route.percentage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3.3</div>
                <h3 className="text-xl font-bold text-white">{post.firstSwap.step33.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-4 rounded">
                  <h4 className="text-cyan-300 font-bold mb-2">{post.firstSwap.step33.slippage.title}</h4>
                  <div className="flex gap-2 flex-wrap">
                    {post.firstSwap.step33.slippage.options.map((option: string, index: number) => (
                      <span 
                        key={index} 
                        className={`px-3 py-1 rounded text-sm ${
                          option === "Auto" 
                            ? "bg-hyper-accent/20 text-cyan-300" 
                            : "bg-gray-800 text-white"
                        }`}
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    {post.firstSwap.step33.slippage.tips.map((tip: string, index: number) => (
                      <div key={index}>{tip}</div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded">
                  <h4 className="text-green-300 font-bold mb-2">{post.firstSwap.step33.priceComparison.title}</h4>
                  <div className="text-sm space-y-1">
                    {/* eslint-disable-next-line */}
                    {post.firstSwap.step33.priceComparison.comparisons.map((comparison: any, index: number) => (
                      <div key={index} className="flex justify-between">
                        <span>{comparison.name}</span>
                        <span className={
                          comparison.value.includes("✅") ? "text-green-400" : "text-white"
                        }>
                          {comparison.value}
                        </span>
                      </div>
                    ))}
                    <div className="border-t border-gray-700 pt-2">
                      <div className="flex justify-between font-bold">
                        <span>{post.firstSwap.step33.priceComparison.savings.label}</span>
                        <span className="text-green-400">{post.firstSwap.step33.priceComparison.savings.value}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-6 rounded-xl border border-green-700/30 mb-8">
            <h4 className="text-green-300 font-bold mb-3">{post.successMessage.title}</h4>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">{post.successMessage.swapTitle}</div>
              <div className="text-gray-300 mb-4">{post.successMessage.swapDetails}</div>
              <div className="text-green-400 font-bold text-lg">{post.successMessage.savings}</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Cpu className="text-purple-400" /> {post.usefulTips.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <h4 className="text-cyan-300 font-bold mb-3">{post.usefulTips.tip1.title}</h4>
              <div className="space-y-2 text-sm">
                {/* eslint-disable-next-line */}
                {post.usefulTips.tip1.slippageSettings.map((setting: any, index: number) => {
                  let color = "text-green-300";
                  if (index === 1) color = "text-amber-300";
                  if (index === 2) color = "text-orange-300";
                  
                  return (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-400">{setting.pair}</span>
                      <span className={color}>{setting.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <h4 className="text-amber-300 font-bold mb-3">{post.usefulTips.tip2.title}</h4>
              <div className="space-y-2 text-sm">
                {/* eslint-disable-next-line */}
                {post.usefulTips.tip2.balanceRecommendations.map((rec: any, index: number) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-400">{rec.activity}</span>
                    <span className="text-white">{rec.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.troubleshooting.title}</h2>
          
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  {post.troubleshooting.tableHeaders.map((header: string, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.troubleshooting.issues.map((issue: any, index: number) => (
                  <tr key={index} className={`border-b border-gray-800 ${index % 2 === 1 ? 'bg-hyper-800/20' : ''}`}>
                    <td className="p-4 text-white">{issue.problem}</td>
                    <td className="p-4 text-red-300">{issue.cause}</td>
                    <td className="p-4 text-green-300">{issue.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-hyper-accent/20 to-purple-500/20 p-8 rounded-2xl border border-hyper-accent/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.cta.title}</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* eslint-disable-next-line */}
               {post.cta.steps.map((step: any, index: number) => (
                 <div key={index} className="bg-gray-900/50 p-4 rounded-lg">
                   <div className="text-hyper-accent font-bold mb-2">{step.title}</div>
                   <div className="text-gray-300 text-sm">
                     {step.time || step.description}
                   </div>
                 </div>
               ))}
             </div>
             <Link href={`/${lang}`}>
               <button className="bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
                 {post.cta.button}
               </button>
             </Link>
             <div className="mt-4 text-gray-400 text-sm">
               {post.cta.url}
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
            <div className="text-gray-400 text-sm">{post.footer}</div>
          </div>
        </article>
      </div>
    </section>
  );
};
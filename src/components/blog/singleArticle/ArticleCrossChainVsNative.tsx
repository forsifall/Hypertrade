import BackButton from "@/components/ui/BackButton";
import { AlertTriangle, BadgeIcon, Lock, Shield, Unlock, Zap, Cpu, Server, Key, Database, AlertCircle, Globe, ShieldCheck, Timer, Wallet } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { Language } from "@/app/translations";

export const ArticleCrossChainVsNative = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "cross-chain-vs-native-security");
  
  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label="Назад к статьям" />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-amber-400 mb-4">
             <span className="bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">{post.category}</span>
             <span className="flex items-center gap-1 text-gray-400"><Shield size={14} /> {post.readTime}</span>
             <span className="flex items-center gap-1 text-gray-400"><Globe size={14} /> {post.date}</span>
           </div>
           <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
             {post.title}
           </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-amber-500 pl-6 italic">
            {post.excerpt}
          </p>

          <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl my-8">
            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><AlertTriangle className="text-red-400" /> {post.statistics.title}</h4>
            <p className="text-sm text-gray-300 m-0" dangerouslySetInnerHTML={{ __html: post.statistics.content }} />
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <BadgeIcon className="text-orange-400" /> {post.sections.crossChainBasics.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.crossChainBasics.content }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
            <div className="bg-hyper-800/30 p-5 rounded-xl border border-gray-700">
              <h4 className="text-amber-300 font-bold mb-3">{post.sections.crossChainBasics.howItWorks.title}</h4>
              <ol className="text-sm text-gray-300 space-y-2 list-decimal pl-4">
                {/* eslint-disable-next-line */}
                {post.sections.crossChainBasics.howItWorks.steps.map((step: any, index: number) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="bg-red-900/10 p-5 rounded-xl border border-red-900/30">
              <h4 className="text-red-300 font-bold mb-3">{post.sections.crossChainBasics.keyRisk.title}</h4>
              <p className="text-sm text-gray-300">{post.sections.crossChainBasics.keyRisk.content}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <ShieldCheck className="text-red-400" /> {post.sections.vulnerabilities.title}
          </h2>
          
          <div className="space-y-6 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {post.sections.vulnerabilities.vulnerabilitiesList.map((vulnerability: any, index: number) => {
              const icons = [Key, Cpu];
              const Icon = icons[index];
              const iconColors = ["text-red-400", "text-yellow-400"];
              
              return (
                <div key={index} className="bg-hyper-800/30 border border-gray-700 p-5 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    {/* <Icon size={20} className={iconColors[index]}/> {vulnerability.title} */}
                  </h3>
                  <p className="text-gray-400 mb-3">{vulnerability.description}</p>
                  <div className="bg-gray-900/50 p-4 rounded-lg">
                    {/* <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: vulnerability.example }} /> */}
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Database className="text-purple-400" /> {post.sections.wrappedTokenRisks.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose">
            {/* eslint-disable-next-line */}
            {post.sections.wrappedTokenRisks.risks.map((risk: any, index: number) => (
              <div key={index} className="bg-red-900/10 p-4 rounded-lg">
                <h4 className="text-red-400 font-bold mb-2">{risk.title}</h4>
                <p className="text-xs text-gray-400">{risk.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-cyan-400" /> {post.sections.nativeAggregators.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.nativeAggregators.content }} />

          <div className="bg-cyan-900/10 border border-cyan-900/30 p-6 rounded-xl my-8">
            <h4 className="text-cyan-400 font-bold mb-4">{post.sections.nativeAggregators.architecture.title}</h4>
            <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
              {post.sections.nativeAggregators.architecture.points.map((point: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">{index + 1}.</span>
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Shield className="text-green-400" /> {post.sections.comparison.title}
          </h2>
          
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                    {/* eslint-disable-next-line */}
                  {post.sections.comparison.table.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium bg-hyper-800/50">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* eslint-disable-next-line */}
                {post.sections.comparison.table.rows.map((row: any, rowIndex: number) => (
                  // eslint-disable-next-line
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

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Timer className="text-blue-400" /> {post.sections.whenToUse.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.whenToUse.content }} />
          
          <div className="space-y-6 not-prose my-8">
            <div className="bg-hyper-800/30 border border-gray-700 p-5 rounded-xl">
              <h4 className="text-white font-bold mb-3">{post.sections.whenToUse.checklist.title}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-amber-300 mb-1">{post.sections.whenToUse.checklist.beforeUse.title}</p>
                  <ul className="text-gray-400 space-y-1 list-disc pl-5">
                    {/* eslint-disable-next-line */}
                    {post.sections.whenToUse.checklist.beforeUse.items.map((item: any, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-amber-300 mb-1">{post.sections.whenToUse.checklist.duringUse.title}</p>
                  <ul className="text-gray-400 space-y-1 list-disc pl-5">
                    {/* eslint-disable-next-line */}
                    {post.sections.whenToUse.checklist.duringUse.items.map((item: any, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-8 rounded-2xl border border-amber-500/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.sections.philosophy.title}</h3>
             <p className="text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: post.sections.philosophy.content }} />
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* eslint-disable-next-line */}
               {post.sections.philosophy.recommendations.map((recommendation: any, index: number) => (
                 <div key={index} className="bg-hyper-800/50 p-4 rounded-lg text-left">
                   <p className="text-sm text-gray-300 mb-1"><strong>{recommendation.title}</strong></p>
                   <p className="text-xs text-gray-400">{recommendation.description}</p>
                 </div>
               ))}
             </div>

             <Link href={`/${lang}`}>
               <button className="bg-amber-500 text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
                 {post.sections.philosophy.buttonText}
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
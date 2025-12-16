import BackButton from "@/components/ui/BackButton";
import { BarChart3, BookOpen, CircleDollarSign, Coins, Cpu, Globe, Layers, PieChart, Shield, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { Language } from "@/app/translations";

export const ArticleDexComparison = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "dex-comparison-hyperliquid");
  
  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-15"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label="Назад к статьям" />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-purple-400 mb-4">
             <span className="bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">{post.category}</span>
             <span className="flex items-center gap-1 text-gray-400"><BookOpen size={14} /> {post.readTime}</span>
             <span className="flex items-center gap-1 text-gray-400"><Coins size={14} /> {post.date}</span>
           </div>
           <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
             {post.title}
           </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-purple-500 pl-6 italic">
            {post.excerpt}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Globe className="text-purple-400" /> {post.sections.introduction.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.introduction.content }} />
          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <h4 className="font-bold text-white mb-4 flex items-center gap-2"><PieChart className="text-blue-400"/> {post.sections.introduction.tvlDistribution.title}</h4>
            <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
              {post.sections.introduction.tvlDistribution.items.map((item: any, index: number) => (
                <li key={index} className="flex justify-between">
                  <span className={index === 4 ? "text-gray-400" : index === 0 ? "text-blue-300" : index === 1 ? "text-green-300" : index === 2 ? "text-yellow-300" : "text-pink-300"}>
                    {item.label}
                  </span> 
                  <span className={index === 4 ? "text-gray-400" : "text-white"}>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Layers className="text-blue-400" /> {post.sections.hypercore.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.hypercore.description }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-blue-900/10 border border-blue-900/30 p-6 rounded-xl">
              <h4 className="text-blue-400 font-bold mb-4">{post.sections.hypercore.strengths.title}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.sections.hypercore.strengths.items.map((item: any, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-400">→</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4">{post.sections.hypercore.weaknesses.title}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.sections.hypercore.weaknesses.items.map((item: any, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-400">→</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-hyper-800/30 p-4 rounded-lg mb-8">
            <h4 className="text-white font-bold mb-2">{post.sections.hypercore.useCase.title}</h4>
            <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: post.sections.hypercore.useCase.description }} />
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-green-400" /> {post.sections.hyperswap.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.hyperswap.description }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4">{post.sections.hyperswap.strengths.title}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.sections.hyperswap.strengths.items.map((item: any, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-400">→</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4">{post.sections.hyperswap.weaknesses.title}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.sections.hyperswap.weaknesses.items.map((item: any, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-400">→</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-hyper-800/30 p-4 rounded-lg mb-8">
            <h4 className="text-white font-bold mb-2">{post.sections.hyperswap.useCase.title}</h4>
            <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: post.sections.hyperswap.useCase.description }} />
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <TrendingUp className="text-yellow-400" /> {post.sections.kittenswap.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.kittenswap.description }} />
          
          <div className="space-y-6 not-prose mb-8">
            <div className="bg-hyper-800/30 border border-gray-700 p-5 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><CircleDollarSign size={20} className="text-yellow-400"/> {post.sections.kittenswap.features.title}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.kittenswap.features.items.map((feature: any, index: number) => (
                  <div key={index}>
                    <p className="text-yellow-300 font-semibold">{feature.title}</p>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-hyper-800/30 p-4 rounded-lg mb-8">
            <h4 className="text-white font-bold mb-2">{post.sections.kittenswap.useCase.title}</h4>
            <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: post.sections.kittenswap.useCase.description }} />
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Shield className="text-pink-400" /> {post.sections.prjx.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.prjx.description }} />
          <div className="bg-pink-900/10 border border-pink-900/30 p-6 rounded-xl my-8">
            <h4 className="text-pink-400 font-bold mb-4">{post.sections.prjx.warning.title}</h4>
            <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: post.sections.prjx.warning.content }} />
          </div>

          <div className="bg-hyper-800/30 p-4 rounded-lg mb-8">
            <h4 className="text-white font-bold mb-2">{post.sections.prjx.useCase.title}</h4>
            <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: post.sections.prjx.useCase.description }} />
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Cpu className="text-cyan-400" /> {post.sections.hypertrade.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.hypertrade.description }} />
          <p>{post.sections.hypertrade.content}</p>
          
          <div className="bg-cyan-900/10 border border-cyan-900/30 p-6 rounded-xl my-8">
            <h4 className="text-cyan-400 font-bold mb-4">{post.sections.hypertrade.technologies.title}</h4>
            <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
              {post.sections.hypertrade.technologies.items.map((tech: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">{tech.title}</span>
                  <span>{tech.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-hyper-800/30 p-4 rounded-lg mb-8">
            <h4 className="text-white font-bold mb-2">{post.sections.hypertrade.useCase.title}</h4>
            <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: post.sections.hypertrade.useCase.description }} />
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.sections.comparisonTable.title}</h2>
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                    {/* eslint-disable-next-line */}
                  {post.sections.comparisonTable.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium bg-hyper-800/50">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* eslint-disable-next-line */}
                {post.sections.comparisonTable.rows.map((row: any, rowIndex: number) => (
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

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.sections.conclusion.title}</h2>
          
          <div className="space-y-6 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {post.sections.conclusion.recommendations.map((rec: any, index: number) => {
              const borderColors = ["border-cyan-500", "border-blue-500", "border-yellow-500", "border-pink-500"];
              return (
                <div key={index} className="bg-hyper-800/20 p-5 rounded-lg border-l-4 hover:bg-hyper-800/40 transition-colors" style={{ borderLeftColor: borderColors[index] }}>
                  <h4 className="font-bold text-white text-lg mb-2">{rec.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{rec.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl border border-cyan-500/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.sections.cta.title}</h3>
             <p className="text-gray-300 mb-6">{post.sections.cta.description}</p>
             <Link href={`/${lang}`}>
               <button className="bg-cyan-500 text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20">
                 {post.sections.cta.buttonText}
               </button>
             </Link>
             <p className="text-xs text-gray-400 mt-4">{post.sections.cta.url}</p>
          </div>
        </article>
      </div>
    </section>
  );
};
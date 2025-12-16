import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { Calculator, Calendar, Clock, DollarSign, LineChart, PieChart, Target, TrendingDown, TrendingUp, Zap, BarChart3, Shield } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

export const ArticleDCAStrategy = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "dca-strategy-guide");
  
  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label="Назад к статьям" />
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
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-blue-500 pl-6 italic">
            {post.excerpt}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <DollarSign className="text-blue-400" /> {post.sections.introduction.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.introduction.content }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{post.sections.introduction.comparisons.lumpSum.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.sections.introduction.comparisons.lumpSum.items.map((item: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.label}</span> 
                    <span className="text-white">{item.value}</span>
                  </li>
                ))}
                <li className="flex justify-between font-bold text-red-300 border-t border-red-900/30 pt-2">
                  <span>Июнь (цена $25k):</span> 
                  <span>{post.sections.introduction.comparisons.lumpSum.items[3].value}</span>
                </li>
                <li className="text-center bg-red-900/20 text-red-300 py-1 rounded mt-2 text-xs font-bold list-none">
                  {post.sections.introduction.comparisons.lumpSum.loss}
                </li>
              </ul>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post.sections.introduction.comparisons.dca.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.sections.introduction.comparisons.dca.items.map((item: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.label}</span> 
                    <span className={index === 0 ? "text-white" : ""}>{item.value}</span>
                  </li>
                ))}
                <li className="text-center bg-green-900/20 text-green-300 py-1 rounded mt-2 text-xs font-bold list-none">
                  {post.sections.introduction.comparisons.dca.advantage}
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <h4 className="font-bold text-white mb-4">{post.sections.introduction.effectiveness.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                {/* eslint-disable-next-line */}
                {post.sections.introduction.effectiveness.points.slice(0, 3).map((point: any, index: number) => (
                  <p key={index} className="text-gray-400 mb-1" dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </div>
              <div>
                {/* eslint-disable-next-line */}
                {post.sections.introduction.effectiveness.points.slice(3).map((point: any, index: number) => (
                  <p key={index} className="text-gray-400 mb-1" dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post.sections.hypertradeIntegration.title}
          </h2>
          <p>{post.sections.hypertradeIntegration.content}</p>

          <div className="space-y-6 not-prose my-8">
            <div className="bg-hyper-800/30 border border-gray-700 p-5 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Target size={20} className="text-green-400"/> {post.sections.hypertradeIntegration.advantages.title}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.hypertradeIntegration.advantages.items.map((item: any, index: number) => (
                  <div key={index}>
                    <p className="text-green-300 font-semibold">{item.title}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Calculator className="text-purple-400" /> {post.sections.frequencyStrategies.title}
          </h2>
          
          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                    {/* eslint-disable-next-line */}
                  {post.sections.frequencyStrategies.frequencyTable.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.frequencyStrategies.frequencyTable.rows.map((row: any, rowIndex: number) => (
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

          <div className="bg-hyper-800/30 p-5 rounded-xl my-8">
            <h4 className="text-white font-bold mb-3">{post.sections.frequencyStrategies.advancedStrategies.title}</h4>
            <div className="space-y-4 text-sm">
                {/* eslint-disable-next-line */}
              {post.sections.frequencyStrategies.advancedStrategies.strategies.map((strategy: any, index: number) => (
                <div key={index}>
                  <p className="text-amber-300 font-semibold">{strategy.title}</p>
                  <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: strategy.description }} />
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <LineChart className="text-cyan-400" /> {post.sections.comparison.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.comparison.content }} />
          
          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                    {/* eslint-disable-next-line */}
                  {post.sections.comparison.scenariosTable.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.comparison.scenariosTable.rows.map((row: any, rowIndex: number) => (
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

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.sections.setup.title}</h2>
          <div className="space-y-6 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {post.sections.setup.steps.map((step: any, index: number) => {
              const icons = [Shield, BarChart3, PieChart];
              const Icon = icons[index];
              const iconColors = ["text-blue-400", "text-green-400", "text-purple-400"];
              
              return (
                <div key={index} className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-blue-500 hover:bg-hyper-800/40 transition-colors">
                  <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                    <Icon size={18} className={iconColors[index]} /> {step.title}
                  </h4>
                  {step.methods ? (
                    <>
                      <ul className="text-gray-400 text-sm list-disc pl-5 space-y-1">
                        {/* eslint-disable-next-line */}
                        {step.methods.map((method: any, methodIndex: number) => (
                          <li key={methodIndex} dangerouslySetInnerHTML={{ __html: method }} />
                        ))}
                      </ul>
                      <p className="text-xs text-amber-400 mt-2">{step.note}</p>
                    </>
                  ) : (
                    <p className="text-gray-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: step.description }} />
                  )}
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{post.sections.psychology.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.psychology.content }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
            {/* eslint-disable-next-line */}
            {post.sections.psychology.commonMistakes.map((mistake: any, index: number) => (
              <div key={index} className="bg-red-900/10 p-4 rounded-lg">
                <h4 className="text-red-400 font-bold mb-2">{mistake.title}</h4>
                <p className="text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: mistake.description }} />
              </div>
            ))}
          </div>
          <div className="bg-blue-900/10 border border-blue-900/30 p-5 rounded-xl mt-4">
            <h4 className="text-blue-400 font-bold mb-2">{post.sections.psychology.mindset.title}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
              {post.sections.psychology.mindset.points.map((point: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-8 rounded-2xl border border-blue-500/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.sections.cta.title}</h3>
             <p className="text-gray-300 mb-6">{post.sections.cta.description}</p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* eslint-disable-next-line */}
               {post.sections.cta.steps.map((step: any, index: number) => (
                 <div key={index} className="bg-hyper-800/50 p-3 rounded-lg">
                   <p className="text-sm text-gray-300 mb-1">{step.title}</p>
                   <p className="text-xs text-gray-400">{step.description}</p>
                 </div>
               ))}
             </div>
             <Link href={`/${lang}`}>
               <button className="bg-blue-500 text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-blue-400 transition-colors shadow-lg shadow-blue-500/20">
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
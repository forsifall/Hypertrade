import BackButton from "@/components/ui/BackButton";
import { Settings, AlertTriangle, DollarSign, TrendingUp, BarChart3, Shield, Zap, Cpu, Clock, PieChart } from "lucide-react";
import { Language } from "@/app/translations";
import Link from "next/link";
import { getBlogPosts } from "../data";

export const ArticleSlippageSettings = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "slippage-settings-guide");
  
  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-15"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label="Назад к статьям" />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-blue-400 mb-4">
             <span className="bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">{post.category}</span>
             <span className="flex items-center gap-1 text-gray-400"><Settings size={14} /> {post.readTime}</span>
             <span className="flex items-center gap-1 text-gray-400"><DollarSign size={14} /> {post.date}</span>
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

          <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl my-8">
            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><AlertTriangle className="text-red-400" /> {post.costOfError.title}</h4>
            <p className="text-sm text-gray-300 m-0" dangerouslySetInnerHTML={{ __html: post.costOfError.content }} />
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <PieChart className="text-blue-400" /> {post.sections.slippageSettings.title}
          </h2>
          
          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                    {/* eslint-disable-next-line */}
                  {post.sections.slippageSettings.table.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.slippageSettings.table.rows.map((row: any, rowIndex: number) => (
                  // eslint-disable-next-line
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800 bg-hyper-800/20" : "border-b border-gray-800"}>
                    <td className="p-4 text-white">
                      <span className={row.color}>{row.type}</span><br/>
                      <span className="text-xs text-gray-400">{row.subtype}</span>
                    </td>
                    <td className={`p-4 ${row.color} font-bold`}>{row.slippage}</td>
                    <td className="p-4 text-gray-300" dangerouslySetInnerHTML={{ __html: row.description }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-cyan-400" /> {post.sections.hypertradeSetup.title}
          </h2>
          
          <div className="space-y-6 not-prose my-8">
            {/* eslint-disable-next-line */}
            {post.sections.hypertradeSetup.steps.map((step: any, index: number) => {
              const icons = [Cpu, Shield, BarChart3];
              const Icon = icons[index];
              const iconColors = ["text-cyan-400", "text-green-400", "text-yellow-400"];
              
              return (
                <div key={index} className="bg-hyper-800/30 border border-gray-700 p-5 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Icon size={20} className={iconColors[index]}/> {step.title}
                  </h3>
                  {step.items ? (
                    <ul className="text-gray-400 text-sm space-y-2 list-disc pl-5">
                        {/* eslint-disable-next-line */}
                      {step.items.map((item: any, itemIndex: number) => (
                        <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: step.description }} />
                  )}
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <AlertTriangle className="text-red-400" /> {post.sections.criticalErrors.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
            {/* eslint-disable-next-line */}
            {post.sections.criticalErrors.errors.map((error: any, index: number) => (
              <div key={index} className="bg-red-900/10 p-4 rounded-lg">
                <h4 className="text-red-400 font-bold mb-2">{error.title}</h4>
                <p className="text-xs text-gray-400">{error.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-900/10 border border-blue-900/30 p-5 rounded-xl mt-4">
            <h4 className="text-blue-400 font-bold mb-2">{post.sections.criticalErrors.solution.title}</h4>
            <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: post.sections.criticalErrors.solution.content }} />
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.sections.practicalScenarios.title}</h2>
          <div className="space-y-6 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {post.sections.practicalScenarios.scenarios.map((scenario: any, index: number) => (
              <div key={index} className={`bg-hyper-800/20 p-5 rounded-lg border-l-4 hover:bg-hyper-800/40 transition-colors ${scenario.borderColor}`}>
                <h4 className="font-bold text-white text-lg mb-2">{scenario.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: scenario.description }} />
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-8 rounded-2xl border border-blue-500/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.sections.cta.title}</h3>
             <p className="text-gray-300 mb-6">{post.sections.cta.description}</p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {/* eslint-disable-next-line */}
               {post.sections.cta.savings.map((saving: any, index: number) => {
                 const textColors = ["text-green-300", "text-blue-300", "text-yellow-300", "text-orange-300"];
                 return (
                   <div key={index} className="bg-hyper-800/50 p-3 rounded-lg">
                     <p className={`text-sm ${textColors[index]} mb-1`}>{saving.type}</p>
                     <p className="text-xs text-gray-400">{saving.percentage}</p>
                   </div>
                 );
               })}
             </div>
             <Link href={`/${lang}`}>
               <button className="bg-blue-500 text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-blue-400 transition-colors shadow-lg shadow-blue-500/20">
                 {post.sections.cta.buttonText}
               </button>
             </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h4 className="text-lg font-bold text-white mb-4">{post.sections.recommendations.title}</h4>
            <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
              {post.sections.recommendations.items.map((recommendation: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className={recommendation.iconColor}>✅</span>
                  <span>
                    <strong>{recommendation.title}</strong> <span dangerouslySetInnerHTML={{ __html: recommendation.content }} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
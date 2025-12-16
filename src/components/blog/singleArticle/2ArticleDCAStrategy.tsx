import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { Calendar, Clock, TrendingUp, DollarSign, Zap, BarChart, CheckCircle, Calculator, Target, ArrowRight, PieChart, LineChart } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

export const ArticleDCAStrategy2 = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "dca-strategy-guide2");
  
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

          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-6 rounded-xl border border-blue-700/30 mb-8">
            <h4 className="text-blue-300 font-bold mb-3">{post.advantages.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* eslint-disable-next-line */}
              {post.advantages.benefits.map((benefit: any, index: number) => (
                <div key={index} className="bg-gray-900/50 p-3 rounded">
                  <div className={`font-bold ${index === 0 ? 'text-green-300' : 'text-cyan-300'}`}>
                    {benefit.label}
                  </div>
                  <div className="text-gray-300 text-sm">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <TrendingUp className="text-hyper-accent" /> {post.whatIsDCA.title}
          </h2>

          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <h4 className="font-bold text-white mb-3">{post.whatIsDCA.statisticsTitle}</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    {post.whatIsDCA.tableHeaders.map((header: string, index: number) => (
                      <th key={index} className="p-3 text-gray-400 font-medium">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                    {/* eslint-disable-next-line */}
                  {post.whatIsDCA.tableRows.map((row: any, index: number) => {
                    const bgColor = index === 0 ? 'bg-green-900/10' : '';
                    const returnColor = index === 0 ? 'text-green-300' : index === 1 ? 'text-amber-300' : 'text-orange-300';
                    const ratingColor = index === 0 ? 'bg-green-900/30 text-green-300' : 
                                       index === 1 ? 'bg-amber-900/30 text-amber-300' : 
                                       'bg-orange-900/30 text-orange-300';
                    
                    return (
                      <tr key={index} className={`border-b border-gray-800 ${bgColor}`}>
                        <td className="p-3 text-white">{row.frequency}</td>
                        <td className={`p-3 ${returnColor} font-bold`}>{row.return}</td>
                        <td className={`p-3 ${returnColor}`}>{row.volatility}</td>
                        <td className="p-3">
                          <span className={`${ratingColor} px-2 py-1 rounded text-xs`}>
                            {row.rating}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-green-900/20 rounded text-center">
              <div className="text-green-300 font-bold">{post.whatIsDCA.conclusion}</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.optimalSettings.title}</h2>

          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  {post.optimalSettings.tableHeaders.map((header: string, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.optimalSettings.tableRows.map((row: any, index: number) => {
                  const frequencyColor = index === 0 ? 'text-green-300' : index === 1 ? 'text-amber-300' : 'text-orange-300';
                  
                  return (
                    <tr key={index} className={`border-b border-gray-800 ${index % 2 === 1 ? 'bg-hyper-800/20' : ''}`}>
                      <td className="p-4 text-white">{row.token}</td>
                      <td className={`p-4 ${frequencyColor}`}>{row.frequency}</td>
                      <td className="p-4 text-white">{row.amount}</td>
                      <td className="p-4 text-gray-300">{row.logic}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post.hypertradeOptimization.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{post.hypertradeOptimization.withoutHypertrade.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.hypertradeOptimization.withoutHypertrade.metrics.map((metric: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{metric.label}</span> 
                    <span className={
                      index === 1 ? "text-red-300" : 
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
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post.hypertradeOptimization.withHypertrade.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.hypertradeOptimization.withHypertrade.metrics.map((metric: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{metric.label}</span> 
                    <span className={
                      index === 0 ? "text-cyan-300" : 
                      index === 2 ? "text-green-300" : 
                      index === 3 ? "text-white" : 
                      index === 4 ? "text-green-300" : 
                      "text-white"
                    }>
                      {metric.value}
                    </span>
                  </li>
                ))}
                {post.hypertradeOptimization.withHypertrade.metrics[5] && (
                  <li className="text-xs text-gray-400 mt-1">
                    {post.hypertradeOptimization.withHypertrade.metrics[5].note}
                  </li>
                )}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.comparison.title}</h2>
          
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  {post.comparison.tableHeaders.map((header: string, index: number) => (
                    <th key={index} className={`p-4 ${
                      index === 1 ? "text-green-400" : 
                      index === 2 ? "text-amber-400" : 
                      index === 3 ? "text-red-400" : 
                      "text-gray-400"
                    } font-medium`}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.comparison.tableRows.map((row: any, rowIndex: number) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800" : "border-b border-gray-800 bg-hyper-800/20"}>
                    <td className="p-4 text-white">{row.parameter}</td>
                    <td className="p-4 text-green-300">{row.hypertrade}</td>
                    <td className="p-4 text-amber-300">{row.cex}</td>
                    <td className="p-4 text-red-300">{row.uniswap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Calculator className="text-purple-400" /> {post.caseStudy.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{post.caseStudy.withoutHypertrade.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.caseStudy.withoutHypertrade.metrics.map((metric: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{metric.label}</span> 
                    <span className={
                      index === 0 ? "text-red-300" : 
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
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post.caseStudy.withHypertrade.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.caseStudy.withHypertrade.metrics.map((metric: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{metric.label}</span> 
                    <span className={
                      index === 0 ? "text-green-300" : 
                      index === 3 ? "text-white" : 
                      index === 4 ? "text-green-300" : 
                      "text-white"
                    }>
                      {metric.value}
                    </span>
                  </li>
                ))}
                {/* Обработка note из последнего элемента */}
                {post.caseStudy.withHypertrade.metrics.length > 4 && post.caseStudy.withHypertrade.metrics[4].note && (
                  <li className="text-xs text-gray-400 mt-1">
                    {post.caseStudy.withHypertrade.metrics[4].note}
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 p-6 rounded-xl border border-amber-700/30 text-center mb-8">
            <div className="text-amber-300 text-2xl font-bold mb-2">{post.caseStudy.roi.value}</div>
            <div className="text-white">{post.caseStudy.roi.description}</div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="text-green-400" /> {post.checklist.title}
          </h2>

          <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl my-8">
            <h4 className="text-white font-bold mb-4">{post.checklist.preparationTitle}</h4>
            <div className="space-y-4">
                {/* eslint-disable-next-line */}
              {post.checklist.items.map((item: any, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="bg-hyper-900 text-hyper-accent rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">[ ]</div>
                  <div>
                    <div className="text-white">{item.step}</div>
                    <div className="text-gray-400 text-sm mt-1">{item.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-hyper-accent/20 to-blue-500/20 p-8 rounded-2xl border border-hyper-accent/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.cta.title}</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* eslint-disable-next-line */}
               {post.cta.steps.map((step: any, index: number) => (
                 <div key={index} className="bg-gray-900/50 p-4 rounded-lg">
                   <div className="text-hyper-accent font-bold mb-2">{step.title}</div>
                   <div className="text-gray-300 text-sm">{step.description}</div>
                   <div className={`text-xs mt-1 ${
                     index === 0 ? 'text-blue-400' : 
                     index === 1 ? 'text-cyan-400' : 
                     'text-green-400'
                   }`}>
                     {step.subtext}
                   </div>
                 </div>
               ))}
             </div>
             <Link href={`/${lang}`}>
               <button className="bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
                 {post.cta.button}
               </button>
             </Link>
             <div className="mt-6">
               <div className="text-white font-bold text-lg">{post.cta.quote}</div>
               <div className="text-gray-300 mt-2">{post.cta.stats}</div>
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
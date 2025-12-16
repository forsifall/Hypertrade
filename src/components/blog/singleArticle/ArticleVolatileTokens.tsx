import BackButton from "@/components/ui/BackButton";
import { AlertCircle, ArrowLeft, BarChart, Calendar, CheckCircle, Clock, DollarSign, LineChart, Shield, Target, TrendingDown, TrendingUp, Zap } from "lucide-react";
import { Language } from "@/app/translations";
import Link from "next/link";
import { getBlogPosts } from "../data";

export const ArticleVolatileTokens = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "volatile-tokens-trading");
  
  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label={post.backButton} />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-amber-400 mb-4">
             <span className="bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">{post.category}</span>
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
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-amber-400 pl-6 italic">
            {post.excerpt}
          </p>

          <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl mb-8 not-prose">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><AlertCircle className="text-red-400" /> {post.sections.statistics.title}</h3>
            <ul className="space-y-2 text-gray-300">
                {/* eslint-disable-next-line */}
              {post.sections.statistics.items.map((item: any, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-300 mr-2">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <TrendingDown className="text-red-400" /> Реальные кейсы провала
          </h2>
          
          <div className="space-y-6 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {post.sections.failureCases.cases.map((failureCase: any, index: number) => (
              <div key={index} className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
                <h4 className="text-red-400 font-bold mb-3">{failureCase.title}</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                    {/* eslint-disable-next-line */}
                  {failureCase.items.map((item: any, itemIndex: number) => (
                    <li key={itemIndex} className="flex justify-between">
                      <span>{item.label}</span> 
                      <span className={itemIndex === failureCase.items.length - 1 ? "text-red-300 font-bold" : item.value.includes("+") ? "text-green-400" : item.value.includes("-") ? "text-red-400" : "text-white"}>
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <BarChart className="text-hyper-accent" /> Что такое волатильность и как её измерять
          </h2>

          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <h4 className="font-bold text-white mb-2">Определение волатильности</h4>
            <p className="text-gray-300 mb-4">{post.sections.volatilityDefinition.definition}</p>
            <div className="bg-hyper-900 p-4 rounded-lg">
              <p className="text-hyper-accent font-mono text-sm">{post.sections.volatilityDefinition.formula}</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">{post.sections.volatilityDefinition.classification.title}</h3>
          <div className="overflow-x-auto not-prose mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                    {/* eslint-disable-next-line */}
                  {post.sections.volatilityDefinition.classification.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.volatilityDefinition.classification.rows.map((row: any, rowIndex: number) => {
                  const riskColors = ["text-green-300", "text-amber-300", "text-orange-300", "text-red-300"];
                  const riskBgColors = ["bg-green-900/30", "bg-amber-900/30", "bg-orange-900/30", "bg-red-900/30"];
                  
                  return (
                    // eslint-disable-next-line
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800" : "border-b border-gray-800 bg-hyper-800/20"}>
                      <td className="p-4 text-white">{row[0]}</td>
                      <td className={`p-4 ${riskColors[rowIndex]}`}>{row[1]}</td>
                      <td className="p-4 text-gray-300">{row[2]}</td>
                      <td className="p-4">
                        <span className={`${riskBgColors[rowIndex]} ${riskColors[rowIndex]} px-2 py-1 rounded`}>
                          {row[3]}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Shield className="text-green-400" /> {post.sections.tradingStrategies.title}
          </h2>

          <h3 className="text-xl font-bold text-white mt-8 mb-4 flex items-center gap-2">{post.sections.tradingStrategies.strategies[0].title}</h3>
          <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl my-6">
            <h4 className="text-green-400 font-bold mb-2">Формула расчёта размера позиции:</h4>
            <div className="bg-hyper-900 p-4 rounded-lg mb-4">
              <p className="text-hyper-accent font-mono text-sm">{post.sections.tradingStrategies.strategies[0].formula}</p>
            </div>
          </div>

          <h4 className="font-bold text-white mb-4">{post.sections.tradingStrategies.strategies[0].adaptation.title}</h4>
          <div className="overflow-x-auto not-prose mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                    {/* eslint-disable-next-line */}
                  {post.sections.tradingStrategies.strategies[0].adaptation.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.tradingStrategies.strategies[0].adaptation.rows.map((row: any, rowIndex: number) => {
                  const riskColors = ["text-green-300", "text-amber-300", "text-orange-300", "text-red-300"];
                  
                  return (
                    // eslint-disable-next-line
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800" : "border-b border-gray-800 bg-hyper-800/20"}>
                      <td className="p-4 text-white">{row[0]}</td>
                      <td className={`p-4 ${riskColors[rowIndex]} font-bold`}>{row[1]}</td>
                      <td className="p-4 text-gray-300">{row[2]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl my-8 not-prose">
            <h4 className="text-blue-300 font-bold mb-2">Результат:</h4>
            <p className="text-gray-300">{post.sections.tradingStrategies.strategies[0].result}</p>
          </div>

          <h3 className="text-xl font-bold text-white mt-12 mb-4 flex items-center gap-2">{post.sections.tradingStrategies.strategies[1].title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post.sections.tradingStrategies.strategies[1].examples.correct.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.sections.tradingStrategies.strategies[1].examples.correct.items.map((item: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.label}</span> 
                    <span className={index === 3 ? "text-green-400" : item.value.includes("(") ? "text-red-300" : item.value.includes("$") ? "text-white" : "text-green-300"}>
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{post.sections.tradingStrategies.strategies[1].examples.incorrect.title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {/* eslint-disable-next-line */}
                {post.sections.tradingStrategies.strategies[1].examples.incorrect.items.map((item: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.label}</span> 
                    <span className={index === 3 ? "text-red-400" : item.value.includes("(") ? "text-red-300" : item.value.includes("$") ? "text-white" : "text-green-300"}>
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mt-12 mb-4 flex items-center gap-2">{post.sections.tradingStrategies.strategies[2].title}</h3>
          <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl my-8">
            <div className="space-y-3">
                {/* eslint-disable-next-line */}
              {post.sections.tradingStrategies.strategies[2].distribution.map((item: any, index: number) => (
                <div key={index} className={`flex justify-between items-center p-3 ${index === 3 ? "bg-red-900/20 rounded border border-red-900/30" : "bg-gray-900/50 rounded"}`}>
                  <span className="text-gray-300">{item.category}</span>
                  <span className={`${item.color} font-bold`}>{item.percentage}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post.sections.hypertradeImportance.title}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {post.sections.hypertradeImportance.features.map((feature: any, index: number) => {
              const icons = [Target, DollarSign];
              const Icon = icons[index];
              const iconColors = ["text-hyper-accent", "text-green-400"];
              
              return (
                <div key={index} className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Icon className={iconColors[index]}/> {feature.title}
                  </h3>
                  
                  {feature.comparison ? (
                    <div className="overflow-x-auto mt-4">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-gray-700">
                            {/* eslint-disable-next-line */}
                            {feature.comparison.headers.map((header: any, headerIndex: number) => (
                              <th key={headerIndex} className="p-3 text-gray-400 font-medium text-sm">{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                            {/* eslint-disable-next-line */}
                          {feature.comparison.rows.map((row: any, rowIndex: number) => (
                            // eslint-disable-next-line
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800" : "border-b border-gray-800 bg-hyper-800/20"}>
                                {/* eslint-disable-next-line */}
                              {row.map((cell: any, cellIndex: number) => (
                                <td key={cellIndex} className="p-3" dangerouslySetInnerHTML={{ __html: cell }} />
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="mt-4 p-4 bg-hyper-900 rounded-lg">
                      <h4 className="text-white font-bold mb-2">{feature.description}</h4>
                      <div className="space-y-2 text-sm">
                        {/* eslint-disable-next-line */}
                        {feature.routing.map((route: any, routeIndex: number) => (
                          <div key={routeIndex} className="flex justify-between">
                            <span className="text-gray-400">{route.path}</span>
                            <span className={routeIndex === 0 ? "text-green-300" : routeIndex === 1 ? "text-blue-300" : "text-purple-300"}>
                              {route.benefit}
                            </span>
                          </div>
                        ))}
                        <div className="flex justify-between border-t border-gray-700 pt-2">
                          <span className="text-white font-bold">Экономия на $10k свопе:</span>
                          <span className="text-green-400 font-bold">{feature.savings}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.sections.comparison.title}</h2>
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                    {/* eslint-disable-next-line */}
                  {post.sections.comparison.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.comparison.rows.map((row: any, rowIndex: number) => (
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

          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-8 rounded-2xl border border-amber-500/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.sections.cta.title}</h3>
             <div className="space-y-4 mb-6">
                {/* eslint-disable-next-line */}
               {post.sections.cta.steps.map((step: any, index: number) => (
                 <div key={index} className="flex items-center justify-center gap-2 text-gray-300">
                   <CheckCircle className="text-green-400"/> {step}
                 </div>
               ))}
             </div>
             <Link href={`/${lang}`}>
               <button className="bg-amber-500 text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
                 {post.sections.cta.buttonText}
               </button>
             </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 not-prose">
            <h4 className="text-gray-400 text-sm mb-4">{post.sections.resources.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {/* eslint-disable-next-line */}
              {post.sections.resources.links.map((link: any, index: number) => (
                <a key={index} href="#" className="text-hyper-accent hover:text-cyan-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
import BackButton from "@/components/ui/BackButton";
import { BarChart, Calculator, CheckCircle, Clock, Code, Cpu, DollarSign, Download, Layers, LineChart, PieChart, Zap } from "lucide-react";
import { Language } from "@/app/translations";
import Link from "next/link";
import { getBlogPosts } from "../data";

// Компонент для иконки календаря
const Calendar = ({ size }: { size: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

export const ArticleSplitRouting2 = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "split-routing-guide2");
  
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
             <span className="flex items-center gap-1 text-gray-400"><Calendar size={14} /> {post.date}</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{post.sections.comparison.without.title}</h4>
              <div className="space-y-3 text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.comparison.without.items.map((item: any, index: number) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.label}</span> 
                    <span className={item.label.includes("Price") ? "text-red-400 font-bold" : item.label.includes("Потери") ? "text-red-300" : "text-white"}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post.sections.comparison.with.title}</h4>
              <div className="space-y-3 text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.comparison.with.items.map((item: any, index: number) => {
                  // Пропускаем route optimization - он обрабатывается отдельно
                  if (index >= 3 && index <= 6) return null;
                  
                  if (item.label === "Route optimization:" && item.value === "") {
                    return (
                      <div key={index}>
                        <div className="text-gray-400 text-xs">{item.label}</div>
                        <div className="space-y-1 text-xs mt-1">
                            {/* eslint-disable-next-line */}
                          {post.sections.comparison.with.items 
                          // eslint-disable-next-line 
                            .filter((_:any, i:any) => i >= 3 && i <= 6)
                            // eslint-disable-next-line 
                            .map((route: any, routeIndex: number) => (
                              <div key={routeIndex} className="flex justify-between">
                                <span>{route.label}</span>
                                <span>{route.value}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    );
                  }
                  
                  if (item.label === "Route optimization:" || item.label.includes("• ")) {
                    return null;
                  }
                  
                  return (
                    <div key={index} className="flex justify-between">
                      <span>{item.label}</span> 
                      <span className={
                        item.label.includes("Price") ? "text-green-400 font-bold" : 
                        item.label.includes("Ваша") ? "text-green-300" : 
                        item.label.includes("Примечание") ? "text-gray-400 text-xs" : 
                        "text-white"
                      }>
                        {item.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
            <h4 className="text-blue-300 font-bold mb-2">{post.sections.comparison.annualVolume.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                {/* eslint-disable-next-line */}
              {post.sections.comparison.annualVolume.stats.map((stat: any, index: number) => (
                <div key={index} className="bg-gray-900/50 p-3 rounded">
                  <div className={index === 0 ? "text-red-300 font-bold" : index === 1 ? "text-green-300 font-bold" : "text-hyper-accent font-bold"}>
                    {stat.label}
                  </div>
                  <div className="text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <PieChart className="text-hyper-accent" /> {post.sections.whatIsSplitRouting.title}
          </h2>

          <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl my-8">
            <h4 className="font-bold text-white mb-4">{post.sections.whatIsSplitRouting.liquidityProblem.title}</h4>
            <div className="space-y-3 text-sm">
                {/* eslint-disable-next-line */}
              {post.sections.whatIsSplitRouting.liquidityProblem.sources.map((source: any, index: number) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-900/50 rounded">
                  <span>{source.name}</span>
                  <span className={source.color}>{source.tvl}</span>
                </div>
              ))}
              <div className="border-t border-gray-700 pt-3 flex justify-between">
                <span className="font-bold">Total:</span>
                <span className="text-white font-bold">{post.sections.whatIsSplitRouting.liquidityProblem.total}</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Cpu className="text-purple-400" /> {post.sections.technicalMechanics.title}
          </h2>

          <div className="space-y-8 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {post.sections.technicalMechanics.steps.map((step: any, index: number) => (
              <div key={index} className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className={index === 0 ? "bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold" : "bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                
                {step.code ? (
                  <div className="bg-hyper-900 p-4 rounded-lg font-mono text-sm">
                    {step.code.split('\n').map((line: string, lineIndex: number) => (
                      <div key={lineIndex} className={line.includes("User") ? "text-cyan-300" : "text-gray-400"}>
                        {line}
                      </div>
                    ))}
                  </div>
                ) : step.routes ? (
                  <div className="bg-hyper-900 p-4 rounded-lg">
                    <h4 className="text-white font-bold mb-2">Результат для $50,000 свопа:</h4>
                    <div className="space-y-3 text-sm">
                        {/* eslint-disable-next-line */}
                      {step.routes.map((route: any, routeIndex: number) => (
                        <div key={routeIndex} className="flex justify-between">
                          <span className="text-gray-400">{route.source}</span>
                          <span className="text-white">{route.amount}</span>
                        </div>
                      ))}
                      <div className="border-t border-gray-700 pt-3 flex justify-between">
                        <span className="text-white font-bold">Total Expected Output:</span>
                        <span className="text-green-400 font-bold">{step.total}</span>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.sections.savingsMath.title}</h2>
          
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  {post.sections.savingsMath.headers.map((header: string, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.savingsMath.rows.map((row: any, rowIndex: number) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800" : "border-b border-gray-800 bg-hyper-800/20"}>
                    <td className="p-4 text-white">{row.parameter}</td>
                    <td className="p-4">
                      <div className="text-red-300">{row.singleDex.split('\n')[0]}</div>
                      <div className="text-gray-400 text-xs">{row.singleDex.split('\n')[1]}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-green-300">{row.splitRouting.split('\n')[0]}</div>
                      <div className="text-gray-400 text-xs">{row.splitRouting.split('\n')[1]}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-green-400 font-bold">{row.savings.split('\n')[0]}</div>
                      <div className="text-gray-400 text-xs">{row.savings.split('\n')[1]}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post.sections.hypertradeAdvantages.title}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {post.sections.hypertradeAdvantages.advantages.map((advantage: any, index: number) => {
              const gradients = ["from-cyan-900/20 to-blue-900/20", "from-purple-900/20 to-pink-900/20"];
              const borderColors = ["border-cyan-700/30", "border-purple-700/30"];
              const icons = [Layers, Code];
              const Icon = icons[index];
              const iconColors = ["text-cyan-400", "text-purple-400"];
              
              return (
                <div key={index} className={`bg-gradient-to-r ${gradients[index]} border ${borderColors[index]} p-6 rounded-xl`}>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Icon className={iconColors[index]}/> {advantage.title}
                  </h3>
                  
                  {advantage.comparison ? (
                    <div className="overflow-x-auto mt-4">
                      <table className="w-full text-left border-collapse text-sm">
                        <thead>
                          <tr className="border-b border-gray-700">
                            {advantage.comparison.headers.map((header: string, headerIndex: number) => (
                              <th key={headerIndex} className="p-3 text-gray-400 font-medium">{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                            {/* eslint-disable-next-line */}
                          {advantage.comparison.rows.map((row: any[], rowIndex: number) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800" : "border-b border-gray-800 bg-hyper-800/20"}>
                              {row.map((cell: string, cellIndex: number) => (
                                <td key={cellIndex} className="p-3" dangerouslySetInnerHTML={{ __html: cell }} />
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-900/50 p-4 rounded">
                        <h4 className="text-cyan-300 font-bold text-sm mb-2">{advantage.orderBook.title}</h4>
                        <ul className="space-y-1 text-xs text-gray-300">
                          {advantage.orderBook.points.map((point: string, pointIndex: number) => (
                            <li key={pointIndex}>• {point}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-900/50 p-4 rounded">
                        <h4 className="text-blue-300 font-bold text-sm mb-2">{advantage.ammPools.title}</h4>
                        <ul className="space-y-1 text-xs text-gray-300">
                          {advantage.ammPools.points.map((point: string, pointIndex: number) => (
                            <li key={pointIndex}>• {point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.sections.practicalCases.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {post.sections.practicalCases.cases.map((caseItem: any, index: number) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-hyper-900 border border-gray-700 p-6 rounded-xl">
                <div className={index === 0 ? "text-amber-400 font-bold text-lg mb-3" : "text-cyan-400 font-bold text-lg mb-3"}>
                  {caseItem.title}
                </div>
                <div className="space-y-3">
                  {caseItem.description && (
                    <div className="text-sm text-gray-400">{caseItem.description}</div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Без split-routing:</span>
                    <span className="text-red-300">{caseItem.without}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">С split-routing:</span>
                    <span className="text-green-300">{caseItem.with}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                    <div className="flex justify-between font-bold">
                      <span className="text-white">Экономия:</span>
                      <span className="text-green-400">{caseItem.savings}</span>
                    </div>
                    {caseItem.roi && (
                      <div className="text-xs text-gray-400">{caseItem.roi}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.sections.aggregatorComparison.title}</h2>
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  {post.sections.aggregatorComparison.headers.map((header: string, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.sections.aggregatorComparison.rows.map((row: any[], rowIndex: number) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "border-b border-gray-800" : "border-b border-gray-800 bg-hyper-800/20"}>
                    {row.map((cell: string, cellIndex: number) => (
                      <td key={cellIndex} className="p-4" dangerouslySetInnerHTML={{ __html: cell }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-hyper-accent/20 to-purple-500/20 p-8 rounded-2xl border border-hyper-accent/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.sections.cta.title}</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* eslint-disable-next-line */}
               {post.sections.cta.steps.map((step: any, index: number) => (
                 <div key={index} className="bg-gray-900/50 p-4 rounded-lg">
                   <div className="text-hyper-accent font-bold mb-2">{step.title}</div>
                   <div className="text-gray-300 text-sm">{step.description}</div>
                 </div>
               ))}
             </div>
             <Link href={`/${lang}`}>
               <button className="bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
                 {post.sections.cta.buttonText}
               </button>
             </Link>
             <div className="mt-4 text-gray-400 text-sm">
               {post.sections.cta.note}
             </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 not-prose">
            <h4 className="text-gray-400 text-sm mb-4">{post.sections.resources.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {/* eslint-disable-next-line */}
              {post.sections.resources.categories.map((category: any, index: number) => (
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
        </article>
      </div>
    </section>
  );
};
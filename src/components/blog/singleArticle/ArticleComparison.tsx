import BackButton from "@/components/ui/BackButton";
import { CheckCircle, XCircle, Zap, Shield, Target, BarChart, Layers, Clock, Calendar, DollarSign, Cpu, Globe, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { Language } from "@/app/translations";

// --- Single Blog Article Component (Comparison) ---
export const ArticleComparison = ({lang}:{lang:Language}) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr:any) => curr.id === "dex-aggregator-comparison");
  
  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className="h-64 md:h-80 w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-hyper-900 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label={post.backButton} />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-hyper-accent mb-4">
             <span className="bg-hyper-accent/10 px-3 py-1 rounded-full border border-hyper-accent/20">{post.category}</span>
             <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> {post.readTime}</span>
             <span className="flex items-center gap-1 text-gray-400"><Calendar size={14} /> {post.date}</span>
           </div>
           <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
             {post.title}
           </h1>
           <p className="text-xl text-gray-300 mt-4">{post.subtitle}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-6 rounded-2xl border border-indigo-700/30 mb-8 not-prose">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3"><Target className="text-hyper-accent" />{post.introduction.title}</h3>
            <p className="text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: post.introduction.text }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-green-900/10 p-4 rounded-lg">
                <h5 className="text-green-400 font-bold mb-2">{post.introduction.withHypertrade.title}</h5>
                <p className="text-sm text-gray-300">{post.introduction.withHypertrade.text}</p>
              </div>
              <div className="bg-red-900/10 p-4 rounded-lg">
                <h5 className="text-red-400 font-bold mb-2">{post.introduction.withoutHypertrade.title}</h5>
                <p className="text-sm text-gray-300">{post.introduction.withoutHypertrade.text}</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Globe className="text-blue-400" /> {post.keyDifference.title}
          </h2>
          
          <p className="mb-6" dangerouslySetInnerHTML={{ __html: post.keyDifference.text }} />

          <div className="bg-hyper-800/30 p-6 rounded-xl my-6">
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Layers size={20} className="text-purple-400"/>{post.keyDifference.whatItMeansTitle}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                {post.keyDifference.advantages.map((advantage:string, index:number) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300" dangerouslySetInnerHTML={{ __html: advantage }} />
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {post.keyDifference.disadvantages.map((disadvantage:string, index:number) => (
                  <div key={index} className="flex items-start gap-2">
                    <XCircle size={18} className="text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300" dangerouslySetInnerHTML={{ __html: disadvantage }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <BarChart className="text-cyan-400" /> {post.comparisonTable.title}
          </h2>

          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-4 text-gray-400 font-medium">{post.comparisonTable.headers[0]}</th>
                  <th className="p-4 text-hyper-accent font-medium">{post.comparisonTable.headers[1]}</th>
                  <th className="p-4 text-blue-400 font-medium">{post.comparisonTable.headers[2]}</th>
                  <th className="p-4 text-green-400 font-medium">{post.comparisonTable.headers[3]}</th>
                  <th className="p-4 text-yellow-400 font-medium">{post.comparisonTable.headers[4]}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.comparisonTable.rows.map((row:any, index:number) => (
                  <tr key={index} className={`border-b border-gray-800 ${index % 2 === 0 ? 'bg-hyper-800/20' : ''}`}>
                    <td className="p-4 text-white font-medium">{row.parameter}</td>
                    <td className="p-4">
                      {row.hypertrade.includes("Да") || row.hypertrade.includes("Нативная") ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle size={16} className={row.hypertrade === "Нативная" ? "text-green-400" : row.parameter === "Симуляция сделки" ? "text-cyan-400" : "text-green-400"} /> 
                          <span className={`${row.hypertrade === "Нативная" ? "text-green-300 font-bold" : row.parameter === "Точность котировок" ? "text-cyan-300 font-bold" : ""}`}>{row.hypertrade}</span>
                        </div>
                      ) : (
                        <span className={row.hypertrade === "0%" ? "text-green-300 font-bold" : ""}>{row.hypertrade}</span>
                      )}
                    </td>
                    <td className="p-4">
                      {row.oneinch === "Нет" ? (
                        <div className="flex items-center gap-2"><XCircle size={16} className="text-red-400" /> <span className="text-red-300">Нет</span></div>
                      ) : row.oneinch.includes("0.3%") ? (
                        <span className="text-yellow-300">{row.oneinch}</span>
                      ) : (
                        <span className="text-gray-300">{row.oneinch}</span>
                      )}
                    </td>
                    <td className="p-4">
                      {row.jupiter === "Нет" ? (
                        <div className="flex items-center gap-2"><XCircle size={16} className="text-red-400" /> <span className="text-red-300">Нет</span></div>
                      ) : row.jupiter.includes("Да") ? (
                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> <span>{row.jupiter}</span></div>
                      ) : (
                        <span className="text-gray-300">{row.jupiter}</span>
                      )}
                    </td>
                    <td className="p-4">
                      {row.matcha === "Нет" ? (
                        <div className="flex items-center gap-2"><XCircle size={16} className="text-red-400" /> <span className="text-red-300">Нет</span></div>
                      ) : row.matcha.includes("Да") ? (
                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> <span>{row.matcha}</span></div>
                      ) : (
                        <span className="text-gray-300">{row.matcha}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post.uniqueTechnologies.title}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {post.uniqueTechnologies.technologies.map((tech:any, index:number) => (
              <div key={index} className={`
                ${index === 0 ? 'bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-l-4 border-cyan-400' : ''}
                ${index === 1 ? 'bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border-l-4 border-purple-400' : ''}
                ${index === 2 ? 'bg-gradient-to-r from-hyper-800/20 to-gray-800/20 border-l-4 border-hyper-accent' : ''}
                p-5 rounded-xl
              `}>
                <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                  {index === 0 && <Cpu size={20} className="text-cyan-400" />}
                  {index === 1 && <DollarSign size={20} className="text-green-400" />}
                  {index === 2 && <Layers size={20} className="text-hyper-accent" />}
                  {tech.name}
                </h4>
                <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: tech.description }} />
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <TrendingUp className="text-green-400" /> {post.realSavings.title}
          </h2>

          <div className="bg-hyper-800/30 p-6 rounded-xl mb-8">
            <h4 className="text-lg font-bold text-white mb-4">{post.realSavings.scenario}</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    {post.realSavings.tableHeaders.map((header:string, index:number) => (
                      <th key={index} className="p-3 text-gray-400 font-medium text-left">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                        {/* eslint-disable-next-line */}
                  {post.realSavings.rows.map((row:any, index:number) => (
                    <tr key={index} className={`
                      ${index === post.realSavings.rows.length - 1 ? '' : 'border-b border-gray-800'}
                      ${index === 0 ? 'bg-green-900/10' : ''}
                    `}>
                      <td className="p-3 font-bold text-white">{row.platform}</td>
                      <td className={`p-3 ${
                        row.hiddenLosses === "0.1%" ? "text-green-300" :
                        row.hiddenLosses === "0.3%" ? "text-yellow-300" :
                        "text-yellow-300"
                      }`}>{row.hiddenLosses}</td>
                      <td className={`p-3 ${
                        row.platformFee === "0%" ? "text-green-300 font-bold" :
                        row.platformFee.includes("0.5%") ? "text-yellow-300" :
                        "text-green-300"
                      }`}>{row.platformFee}</td>
                      <td className={`p-3 ${
                        row.annualLosses.includes("$2,400") ? "text-green-300 font-bold" :
                        "text-red-300"
                      }`}>{row.annualLosses}</td>
                      <td className="p-3">
                        {row.savings === "—" ? "—" : <span className="text-green-300 font-bold">{row.savings}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Shield className="text-blue-400" /> {post.conclusion.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
            <div className="bg-gradient-to-br from-indigo-900/30 to-transparent p-6 rounded-xl border border-indigo-700/30">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Users className="text-cyan-400" /> {post.conclusion.leaderTitle}</h4>
              <ul className="space-y-3">
                {post.conclusion.leaderPoints.map((point:string, index:number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300" dangerouslySetInnerHTML={{ __html: point }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-900/30 to-transparent p-6 rounded-xl border border-gray-700/30">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Globe className="text-yellow-400" /> {post.conclusion.alternativesTitle}</h4>
              <ul className="space-y-3">
                {post.conclusion.alternativesPoints.map((point:string, index:number) => (
                  <li key={index} className="flex items-start gap-2">
                    {point.startsWith("→") ? (
                      <span className="text-gray-400 ml-7" dangerouslySetInnerHTML={{ __html: point }} />
                    ) : (
                      <>
                        <XCircle size={18} className="text-red-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300" dangerouslySetInnerHTML={{ __html: point }} />
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-hyper-accent/20 to-indigo-500/20 p-8 rounded-2xl border border-hyper-accent/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.cta.title}</h3>
             <p className="text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: post.cta.text }} />
             <div className="space-y-4 mb-6 text-left bg-black/30 p-4 rounded-lg inline-block">
                {post.cta.steps.map((step:string, index:number) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-green-400" />
                    <span dangerouslySetInnerHTML={{ __html: step }} />
                  </div>
                ))}
             </div>
             <br/>
             <Link href={`/${lang}`} className="inline-block bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20 mt-4">
               {post.cta.buttonText}
             </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 not-prose">
            <div className="flex flex-wrap gap-4 justify-center">
              {post.footer.socialLinks.map((link:string, index:number) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">{post.footer.updateInfo}<br/>{post.footer.author}</p>
          </div>
        </article>
      </div>
    </section>
  );
};
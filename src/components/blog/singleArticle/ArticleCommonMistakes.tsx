import BackButton from "@/components/ui/BackButton";
import { AlertTriangle, Shield, Zap, CheckCircle, XCircle, Lock, DollarSign, Settings, Eye, FileText, Search, BarChart, Users, Clock, Calendar, Fingerprint, Wallet } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { Language } from "@/app/translations";

// --- Single Blog Article Component (Common Mistakes) ---
export const ArticleCommonMistakes = ({lang}:{lang:Language}) => {
        {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr:any) => curr.id === "common-dex-mistakes");
  
  // Добавляем проверку, чтобы избежать ошибок при отсутствии данных
  if (!post) {
    return <div>Статья не найдена</div>;
  }
  
  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className="h-64 md:h-80 w-full bg-gradient-to-r from-amber-900 via-orange-900 to-hyper-900 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
          <BackButton label={post.backButton} />
          <div className="flex flex-wrap gap-4 text-sm font-medium text-hyper-accent mb-4">
            <span className="bg-hyper-accent/10 px-3 py-1 rounded-full border border-hyper-accent/20">{post.category}</span>
            <span className="flex items-center gap-1 text-gray-400">
              <Clock size={14} /> {post.readTime}
            </span>
            <span className="flex items-center gap-2 text-gray-400">
              <Calendar size={14} /> {post.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-300 mt-4">{post.subtitle}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-r from-amber-900/30 to-red-900/30 p-6 rounded-2xl border border-amber-700/30 mb-8 not-prose">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="text-red-400" />{post.introduction.title}
            </h3>
            <p className="text-gray-300 mb-4">
              {post.introduction.text}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-red-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-red-300 mb-2">
                  <XCircle size={16} /> <span className="font-bold">{post.introduction.lossExample.title}</span>
                </div>
                <p className="text-sm text-gray-300">{post.introduction.lossExample.text}</p>
              </div>
              <div className="bg-green-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-green-300 mb-2">
                  <CheckCircle size={16} /> <span className="font-bold">{post.introduction.goodNews.title}</span>
                </div>
                <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: post.introduction.goodNews.text }} />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Shield className="text-blue-400" /> {post.securityMistakes.title}
          </h2>

          <div className="space-y-8 not-prose mb-12">
            <div className="bg-hyper-800/30 border-l-4 border-red-500 p-5 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Lock size={20} className="text-red-400"/>{post.securityMistakes.mistake1.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-900/10 p-4 rounded-lg">
                  <h5 className="text-red-300 font-bold mb-2">{post.securityMistakes.mistake1.danger.title}</h5>
                  <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: post.securityMistakes.mistake1.danger.text }} />
                  <div className="text-xs text-red-400 mt-2 font-mono p-2 bg-black/30 rounded">{post.securityMistakes.mistake1.danger.example}</div>
                </div>
                <div className="bg-green-900/10 p-4 rounded-lg">
                  <h5 className="text-green-300 font-bold mb-2">{post.securityMistakes.mistake1.solution.title}</h5>
                  <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: post.securityMistakes.mistake1.solution.text }} />
                  <div className="text-xs text-green-400 mt-2">{post.securityMistakes.mistake1.solution.tip}</div>
                </div>
              </div>
            </div>

            <div className="bg-hyper-800/30 border-l-4 border-orange-500 p-5 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Eye size={20} className="text-orange-400"/>{post.securityMistakes.mistake2.title}
              </h4>
              <div className="space-y-4">
                <p className="text-gray-300">{post.securityMistakes.mistake2.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-green-900/20 p-3 rounded-lg">
                    <div className="text-green-400 font-bold">{post.securityMistakes.mistake2.official.title}</div>
                    <div className="text-gray-300 font-mono text-xs break-all">{post.securityMistakes.mistake2.official.url}</div>
                  </div>
                  <div className="bg-red-900/20 p-3 rounded-lg">
                    <div className="text-red-400 font-bold">{post.securityMistakes.mistake2.phishing.title}</div>
                    <div className="text-gray-400 text-xs" dangerouslySetInnerHTML={{ __html: post.securityMistakes.mistake2.phishing.examples }} />
                  </div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <h5 className="text-yellow-300 font-bold mb-2">{post.securityMistakes.mistake2.protection.title}</h5>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {post.securityMistakes.mistake2.protection.tips.map((tip:string, index:number) => (
                      <li key={index} className="flex items-start gap-2">{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Settings className="text-cyan-400" /> {post.swapSettingsMistakes.title}
          </h2>

          <div className="space-y-8 not-prose mb-12">
            <div className="bg-hyper-800/30 border-l-4 border-purple-500 p-5 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <BarChart size={20} className="text-purple-400"/>{post.swapSettingsMistakes.mistake5.title}
              </h4>
              <p className="text-gray-300 mb-4">{post.swapSettingsMistakes.mistake5.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-900/10 p-4 rounded-lg">
                  <h5 className="text-red-300 font-bold mb-2">{post.swapSettingsMistakes.mistake5.badExample.title}</h5>
                  <div className="space-y-2 text-sm">
                    <div>Ожидаемый доход: <span className="text-white">{post.swapSettingsMistakes.mistake5.badExample.details.expected}</span></div>
                    <div>MEV sandwich-атака: <span className="text-red-300">{post.swapSettingsMistakes.mistake5.badExample.details.mevLoss}</span></div>
                    <div className="pt-2 border-t border-red-900/30 font-bold">Фактический доход: <span className="text-red-400">{post.swapSettingsMistakes.mistake5.badExample.details.actual}</span></div>
                    <div className="text-center bg-red-900/20 text-red-300 py-1 rounded mt-2 text-xs">{post.swapSettingsMistakes.mistake5.badExample.details.loss}</div>
                  </div>
                </div>
                <div className="bg-green-900/10 p-4 rounded-lg">
                  <h5 className="text-green-300 font-bold mb-2">{post.swapSettingsMistakes.mistake5.goodExample.title}</h5>
                  <div className="space-y-2 text-sm">    {/* eslint-disable-next-line */}
                    {post.swapSettingsMistakes.mistake5.goodExample.pairs?.map((pair:any, index:number) => (
                      <div key={index} className="flex justify-between">
                        <span>{pair.pair}:</span> 
                        <span className={`
                          ${pair.color === 'green' ? 'text-green-400' : ''}
                          ${pair.color === 'yellow' ? 'text-yellow-400' : ''}
                          ${pair.color === 'orange' ? 'text-orange-400' : ''}
                          ${pair.color === 'red' ? 'text-red-400' : ''}
                        `}>{pair.range}</span>
                      </div>
                    ))}
                    <div className="text-xs text-gray-400 mt-3">{post.swapSettingsMistakes.mistake5.goodExample.tip}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-hyper-800/30 border-l-4 border-red-400 p-5 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <AlertTriangle size={20} className="text-red-300"/>{post.swapSettingsMistakes.mistake6.title}
              </h4>
              <p className="text-gray-300 mb-4">{post.swapSettingsMistakes.mistake6.description}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      {post.swapSettingsMistakes.mistake6.table.headers.map((header:string, index:number) => (
                        <th key={index} className="p-2 text-gray-400 font-medium">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>    
                    {/* eslint-disable-next-line */}
                    {post.swapSettingsMistakes.mistake6.table.rows.map((row:any, index:number) => (
                      <tr key={index} className={index === post.swapSettingsMistakes.mistake6.table.rows.length - 1 ? '' : 'border-b border-gray-800'}>
                        <td className={`p-2 ${row.color === 'green' ? 'text-green-400' : row.color === 'red' ? 'text-red-400' : 'text-gray-300'} font-bold`}>{row.impact}</td>
                        <td className="p-2 text-gray-300">{row.action}</td>
                        <td className="p-2">
                          <span className={row.color === 'green' ? 'text-green-400' : row.color === 'red' ? 'text-red-400' : 'text-gray-300'}>{row.risk}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                <span dangerouslySetInnerHTML={{ __html: post.swapSettingsMistakes.mistake6.advice }} />
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Wallet className="text-yellow-400" /> {post.tokenMistakes.title}
          </h2>

          <div className="space-y-8 not-prose mb-12">
            <div className="bg-hyper-800/30 border-l-4 border-pink-500 p-5 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Search size={20} className="text-pink-400"/>{post.tokenMistakes.mistake9.title}
              </h4>
              <p className="text-gray-300 mb-4">{post.tokenMistakes.mistake9.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-900/10 p-4 rounded-lg">
                  <h5 className="text-red-400 font-bold mb-2">{post.tokenMistakes.mistake9.scamTypes.title}</h5>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {post.tokenMistakes.mistake9.scamTypes.types.map((type:string, index:number) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: type }} />
                    ))}
                  </ul>
                </div>
                <div className="bg-green-900/10 p-4 rounded-lg">
                  <h5 className="text-green-400 font-bold mb-2">{post.tokenMistakes.mistake9.verification.title}</h5>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {post.tokenMistakes.mistake9.verification.steps.map((step:string, index:number) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: post.tokenMistakes.mistake9.importantRule }} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Users className="text-indigo-400" /> {post.strategyMistakes.title}
          </h2>

          <div className="space-y-8 not-prose mb-12">
            <div className="bg-hyper-800/30 border-l-4 border-indigo-500 p-5 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Zap size={20} className="text-indigo-400"/>{post.strategyMistakes.mistake12.title}
              </h4>
              <p className="text-gray-300 mb-4">{post.strategyMistakes.mistake12.description}</p>
              <div className="bg-black/40 p-4 rounded-lg mb-4">
                <h5 className="text-yellow-300 font-bold mb-2">{post.strategyMistakes.mistake12.scenario.title}</h5>
                <div className="text-sm space-y-2">
                  {post.strategyMistakes.mistake12.scenario.steps.map((step:string, index:number) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: step }} />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-900/20 p-4 rounded-lg">
                  <h5 className="text-indigo-300 font-bold mb-2">{post.strategyMistakes.mistake12.avoidance.title}</h5>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {post.strategyMistakes.mistake12.avoidance.tips.map((tip:string, index:number) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: tip }} />
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-900/20 p-4 rounded-lg">
                  <h5 className="text-purple-300 font-bold mb-2">{post.strategyMistakes.mistake12.buffettRule.title}</h5>
                  <p className="text-sm text-gray-300 italic">{post.strategyMistakes.mistake12.buffettRule.quote}</p>
                  <p className="text-xs text-gray-400 mt-2">{post.strategyMistakes.mistake12.buffettRule.explanation}</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.checklist.title}</h2>
          <div className="bg-gradient-to-r from-gray-800 to-hyper-900/50 p-6 rounded-2xl border border-gray-700 not-prose">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* eslint-disable-next-line */}
              {post.checklist.sections.map((section:any, sectionIndex:number) => (
                <div key={sectionIndex}>
                  <h5 className="text-white font-bold mb-4 flex items-center gap-2">
                    {sectionIndex === 0 && <Shield size={18} className="text-blue-400"/>}
                    {sectionIndex === 1 && <Settings size={18} className="text-cyan-400"/>}
                    {sectionIndex === 2 && <AlertTriangle size={18} className="text-yellow-400"/>}
                    {section.title}
                  </h5>
                  <ul className="space-y-3 text-sm">
                    {section.items.map((item:string, itemIndex:number) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" /> 
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">{post.checklist.tip}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 p-8 rounded-2xl border border-amber-700/30 text-center not-prose mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">{post.cta.title}</h3>
            <p className="text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: post.cta.text }} />
            <div className="space-y-4 mb-6 text-left bg-black/30 p-4 rounded-lg inline-block">
              {post.cta.steps.map((step:string, index:number) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  {index === 0 && <Fingerprint size={16} className="text-green-400" />}
                  {index === 1 && <FileText size={16} className="text-blue-400" />}
                  {index === 2 && <DollarSign size={16} className="text-yellow-400" />}
                  <span dangerouslySetInnerHTML={{ __html: step }} />
                </div>
              ))}
            </div>
            <br />
            <Link href={`/${lang}`} className="inline-block bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20 mt-4">
              {post.cta.buttonText}
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 not-prose">
            <div className="flex flex-wrap gap-4 justify-center">
              {post.footer?.socialLinks?.map((link:string, index:number) => (
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
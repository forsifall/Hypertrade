import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { PieChart, Zap, Target, BarChart, Layers, DollarSign, TrendingDown, Shield, Cpu, Navigation, CheckCircle, AlertCircle, Clock, Calendar, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

// --- Single Blog Article Component (Split-Routing) ---
export const ArticleSplitRouting = ({lang}:{lang:Language}) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr:any) => curr.id === "split-routing-guide");
  
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
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3"><AlertCircle className="text-red-400" />{post.introduction.title}</h3>
            <p className="text-gray-300 mb-4">
              {post.introduction.text}
            </p>
            <div className="mt-4 space-y-2">
              {post.introduction.points.map((point:string, index:number) => (
                <div key={index} className="flex items-start gap-2 text-gray-300">❌ {point}</div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{post.problemSolution.problemTitle}</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span>{post.problemSolution.problemDetails.swap}</span> <span className="text-white">{post.problemSolution.problemDetails.result}</span></div>
                <div className="flex justify-between"><span>Price Impact:</span> <span className="text-red-300 font-bold">{post.problemSolution.problemDetails.priceImpact}</span></div>
                <div className="flex justify-between border-t border-red-900/30 pt-2"><span>Потери:</span> <span className="text-red-300 font-bold">{post.problemSolution.problemDetails.losses}</span></div>
                <div className="text-center bg-red-900/20 text-red-300 py-1 rounded mt-2 text-xs">{post.problemSolution.problemDetails.label}</div>
              </div>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post.problemSolution.solutionTitle}</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span>{post.problemSolution.solutionDetails.swap}</span> <span className="text-white">{post.problemSolution.solutionDetails.result}</span></div>
                <div className="flex justify-between"><span>Price Impact:</span> <span className="text-green-300">{post.problemSolution.solutionDetails.priceImpact}</span></div>
                <div className="flex justify-between border-t border-green-900/30 pt-2"><span>Экономия:</span> <span className="text-green-300 font-bold">{post.problemSolution.solutionDetails.savings}</span></div>
                <div className="text-center bg-green-900/20 text-green-300 py-1 rounded mt-2 text-xs font-bold">{post.problemSolution.solutionDetails.label}</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <PieChart className="text-purple-400" /> {post.whatIs.title}
          </h2>
          
          <p className="mb-6">
            <strong>Split-routing</strong> — {post.whatIs.text}
          </p>

          <div className="bg-hyper-800/30 p-6 rounded-xl my-6">
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Zap size={20} className="text-yellow-400"/>{post.whatIs.howItWorksTitle}</h4>
            <div className="space-y-4">
              {post.whatIs.steps.map((step:string, index:number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-purple-900/30 rounded-full p-2 mt-1">
                    {index === 0 && <Layers size={16} className="text-purple-400" />}
                    {index === 1 && <PieChart size={16} className="text-blue-400" />}
                    {index === 2 && <Cpu size={16} className="text-green-400" />}
                    {index === 3 && <CheckCircle size={16} className="text-hyper-accent" />}
                  </div>
                  <div><span className="font-bold text-purple-400">{index + 1}.</span> {step}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <BarChart className="text-cyan-400" /> {post.technicalDetails.title}
          </h2>

          <div className="space-y-8 not-prose mb-12">
            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Navigation size={20} className="text-blue-400"/>{post.technicalDetails.stage1.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm mt-4">
                {/* eslint-disable-next-line */}
                {post.technicalDetails.stage1.dexes.map((dex:any, index:number) => (
                  <div key={index} className={`
                    ${index === 0 ? 'bg-indigo-900/30' : ''}
                    ${index === 1 ? 'bg-purple-900/30' : ''}
                    ${index === 2 ? 'bg-pink-900/30' : ''}
                    ${index === 3 ? 'bg-blue-900/30' : ''}
                    p-3 rounded-lg
                  `}>
                    <div className={`
                      ${index === 0 ? 'text-indigo-300' : ''}
                      ${index === 1 ? 'text-purple-300' : ''}
                      ${index === 2 ? 'text-pink-300' : ''}
                      ${index === 3 ? 'text-blue-300' : ''}
                      font-bold
                    `}>{dex.name}</div>
                    <div className="text-gray-400 text-xs">{dex.details}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><TrendingDown size={20} className="text-orange-400"/>{post.technicalDetails.stage2.title}</h3>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="p-2 text-gray-400 font-medium">{post.technicalDetails.stage2.tableHeaders[0]}</th>
                      <th className="p-2 text-gray-400 font-medium">{post.technicalDetails.stage2.tableHeaders[1]}</th>
                      <th className="p-2 text-gray-400 font-medium">{post.technicalDetails.stage2.tableHeaders[2]}</th>
                      <th className="p-2 text-gray-400 font-medium">{post.technicalDetails.stage2.tableHeaders[3]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* eslint-disable-next-line */}
                    {post.technicalDetails.stage2.tableRows.map((row:any, index:number) => (
                      <tr key={index} className={index === post.technicalDetails.stage2.tableRows.length - 1 ? '' : 'border-b border-gray-800'}>
                        <td className={`p-2 ${
                          row.dex === 'HyperCore Spot' ? 'text-indigo-300' :
                          row.dex === 'Hyperswap' ? 'text-purple-300' :
                          'text-pink-300'
                        }`}>{row.dex}</td>
                        <td className={`p-2 ${
                          row.impact50k.includes('❌') ? 'text-red-600' :
                          row.impact50k.includes('2.1%') ? 'text-orange-400' :
                          row.impact50k.includes('1.8%') ? 'text-yellow-400' :
                          'text-green-400'
                        }`}>{row.impact50k}</td>
                        <td className={`p-2 ${
                          row.impact100k.includes('❌') ? 'text-red-600' :
                          row.impact100k.includes('5.8%') ? 'text-red-600' :
                          row.impact100k.includes('4.5%') ? 'text-red-400' :
                          row.impact100k.includes('0.6%') ? 'text-yellow-400' :
                          'text-green-400'
                        }`}>{row.impact100k}</td>
                        <td className={`p-2 ${
                          row.impact150k.includes('❌') ? 'text-red-700' :
                          row.impact150k.includes('15.3%') ? 'text-red-700' :
                          row.impact150k.includes('8.2%') ? 'text-red-600' :
                          row.impact150k.includes('1.2%') ? 'text-orange-400' :
                          'text-green-400'
                        }`}>{row.impact150k}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Target className="text-green-400" /> {post.realExamples.title}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            <div className="bg-hyper-800/20 p-6 rounded-xl border-l-4 border-yellow-400">
              <h4 className="text-yellow-400 font-bold mb-4">{post.realExamples.example1.title}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-900/10 p-4 rounded-lg">
                  <h5 className="text-red-400 font-bold mb-2">{post.realExamples.example1.withoutSplit.title}</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>Получите:</span> <span className="text-white">{post.realExamples.example1.withoutSplit.youGet}</span></div>
                    <div className="flex justify-between"><span>Price Impact:</span> <span className="text-red-300">{post.realExamples.example1.withoutSplit.priceImpact}</span></div>
                    <div className="flex justify-between"><span>Потери:</span> <span className="text-red-300 font-bold">{post.realExamples.example1.withoutSplit.losses}</span></div>
                  </div>
                </div>
                <div className="bg-green-900/10 p-4 rounded-lg">
                  <h5 className="text-green-400 font-bold mb-2">{post.realExamples.example1.withSplit.title}</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>Получите:</span> <span className="text-white">{post.realExamples.example1.withSplit.youGet}</span></div>
                    <div className="flex justify-between"><span>Price Impact:</span> <span className="text-green-300">{post.realExamples.example1.withSplit.priceImpact}</span></div>
                    <div className="flex justify-between"><span>Потери:</span> <span className="text-green-300">{post.realExamples.example1.withSplit.losses}</span></div>
                    <div className="flex justify-between border-t border-green-900/30 pt-2">
                      <span className="font-bold">Экономия:</span>
                      <span className="text-green-300 font-bold">{post.realExamples.example1.withSplit.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <div className="flex items-center gap-2"><ArrowRight size={14} /> {post.realExamples.example1.distribution}</div>
              </div>
            </div>

            <div className="bg-hyper-800/20 p-6 rounded-xl border-l-4 border-red-400">
              <h4 className="text-red-400 font-bold mb-4">{post.realExamples.example2.title}</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-900/10 p-4 rounded-lg">
                  <h5 className="text-red-600 font-bold mb-2 text-sm">{post.realExamples.example2.onlyHyperswap.title}</h5>
                  <div className="space-y-1 text-xs">
                    <div>Получите: <span className="text-white">{post.realExamples.example2.onlyHyperswap.youGet}</span></div>
                    <div>Impact: <span className="text-red-500">{post.realExamples.example2.onlyHyperswap.impact}</span></div>
                    <div>Потери: <span className="text-red-500">{post.realExamples.example2.onlyHyperswap.losses}</span></div>
                  </div>
                </div>
                <div className="bg-yellow-900/10 p-4 rounded-lg">
                  <h5 className="text-yellow-400 font-bold mb-2 text-sm">{post.realExamples.example2.onlySpot.title}</h5>
                  <div className="space-y-1 text-xs">
                    <div>Получите: <span className="text-white">{post.realExamples.example2.onlySpot.youGet}</span></div>
                    <div>Impact: <span className="text-yellow-400">{post.realExamples.example2.onlySpot.impact}</span></div>
                    <div>Потери: <span className="text-yellow-400">{post.realExamples.example2.onlySpot.losses}</span></div>
                  </div>
                </div>
                <div className="bg-green-900/10 p-4 rounded-lg">
                  <h5 className="text-green-400 font-bold mb-2 text-sm">{post.realExamples.example2.splitRouting.title}</h5>
                  <div className="space-y-1 text-xs">
                    <div>Получите: <span className="text-white">{post.realExamples.example2.splitRouting.youGet}</span></div>
                    <div>Impact: <span className="text-green-400">{post.realExamples.example2.splitRouting.impact}</span></div>
                    <div>Потери: <span className="text-green-400">{post.realExamples.example2.splitRouting.losses}</span></div>
                    <div className="font-bold text-green-300">Экономия: {post.realExamples.example2.splitRouting.savings}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Shield className="text-cyan-400" /> {post.benefitAnalysis.title}
          </h2>

          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-4 text-gray-400 font-medium">{post.benefitAnalysis.tableHeaders[0]}</th>
                  <th className="p-4 text-gray-400 font-medium">{post.benefitAnalysis.tableHeaders[1]}</th>
                  <th className="p-4 text-gray-400 font-medium">{post.benefitAnalysis.tableHeaders[2]}</th>
                  <th className="p-4 text-green-400 font-medium">{post.benefitAnalysis.tableHeaders[3]}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.benefitAnalysis.tableRows.map((row:any, index:number) => (
                  <tr key={index} className={index === post.benefitAnalysis.tableRows.length - 1 ? '' : `border-b border-gray-800 ${index % 2 === 0 ? 'bg-hyper-800/20' : ''}`}>
                    <td className="p-4 text-white">{row.orderSize}</td>
                    <td className={`p-4 ${row.impactWithout.includes('18.2%') ? 'text-red-400' : 'text-gray-300'}`}>{row.impactWithout}</td>
                    <td className="p-4 text-gray-300">{row.impactWith}</td>
                    <td className={`p-4 ${row.orderSize === '$500,000' ? 'text-green-300 font-bold' : 'text-green-300'}`}>{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 p-6 rounded-2xl border border-purple-700/30 not-prose mb-8">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3"><Users className="text-blue-400" />{post.targetAudience.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* eslint-disable-next-line */}
              {post.targetAudience.groups.map((group:any, index:number) => (
                <div key={index} className="bg-hyper-800/30 p-4 rounded-lg">
                  <div className={`
                    ${index === 0 ? 'text-yellow-400' : ''}
                    ${index === 1 ? 'text-blue-400' : ''}
                    ${index === 2 ? 'text-green-400' : ''}
                    ${index === 3 ? 'text-cyan-400' : ''}
                    font-bold mb-2
                  `}>{group.name}</div>
                  <p className="text-gray-400 text-sm">{group.description}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <DollarSign className="text-yellow-400" /> {post.howToUse.title}
          </h2>

          <div className="space-y-4 not-prose mb-8">
                {/* eslint-disable-next-line */}
            {post.howToUse.steps.map((step:any, index:number) => (
              <div key={index} className="flex items-start gap-3 bg-hyper-800/20 p-4 rounded-lg">
                <div className="bg-indigo-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">{step.step}</div>
                <div>
                  <h4 className="font-bold text-white">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                  {step.simulation && (
                    <div className="bg-black/50 p-4 rounded-lg mt-2 text-sm">
                      <div className="text-green-400 font-bold">{step.simulation.result}</div>
                      <div className="text-gray-400">{step.simulation.comparison}</div>
                      <div className="text-cyan-400 mt-2">{step.simulation.priceImpact}</div>
                      <div className="text-green-300">{step.simulation.savings}</div>
                      <div className="text-gray-400 mt-2">{step.simulation.routeTitle}</div>
                      <div className="text-gray-300 ml-4">{step.simulation.route1}</div>
                      <div className="text-gray-300 ml-4">{step.simulation.route2}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <AlertCircle className="text-orange-400" /> {post.faq.title}
          </h2>

          <div className="space-y-6 not-prose mb-12">
                {/* eslint-disable-next-line */}
            {post.faq.questions.map((item:any, index:number) => (
              <div key={index} className="bg-hyper-800/20 p-5 rounded-lg">
                <h4 className="font-bold text-white mb-2">{index + 1}. {item.question}</h4>
                <p className="text-gray-400 text-sm whitespace-pre-line">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-indigo-900/20 to-hyper-accent/20 p-8 rounded-2xl border border-indigo-500/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.conclusion.ctaTitle}</h3>
             <p className="text-gray-300 mb-6">
               {post.conclusion.ctaText}
             </p>
             <div className="space-y-3 mb-6 text-sm">
               {post.conclusion.steps.map((step:string, index:number) => (
                 <div key={index} className="flex items-center justify-center gap-2 text-gray-300">{step}</div>
               ))}
             </div>
             <Link href={`/${lang}`} className="inline-block bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
               {post.conclusion.buttonText}
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
import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { AlertTriangle, Cpu, Database, Globe, Lock, Shield, Server, ShieldAlert, Zap, CheckCircle, XCircle, BarChart3, Cctv, Users, FileText, BookOpen } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

export const ArticleRoutingSecurity = ({ lang }: { lang: Language }) => {
        {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "routing-security-comparison");
  
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
             <span className="flex items-center gap-1 text-gray-400"><BookOpen size={14} /> {post.readTime}</span>
             <span className="flex items-center gap-1 text-gray-400"><Shield size={14} /> {post.date}</span>
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
            <Server className="text-red-400" /> {post.sections.centralized.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.centralized.content }} />

          <div className="space-y-8 not-prose my-12">
                {/* eslint-disable-next-line */}
            {post.sections.centralized.risks.map((risk: any, index: number) => {
              const icons = [XCircle, Cctv, AlertTriangle];
              const Icon = icons[index];
              const iconColors = ["text-red-400", "text-yellow-400", "text-orange-400"];
              
              return (
                <div key={index} className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Icon size={20} className={iconColors[index]}/> {risk.title}
                  </h3>
                  <p className="text-gray-400 mb-3">{risk.description}</p>
                  <div className="bg-gray-900/50 p-4 rounded-lg">
                    <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: risk.example }} />
                    {risk.metric && <p className="text-sm text-amber-300 mt-1" dangerouslySetInnerHTML={{ __html: risk.metric }} />}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-900/10 border border-blue-900/30 p-6 rounded-xl my-8">
            <h4 className="text-blue-400 font-bold mb-2">{post.sections.centralized.advantages.title}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
                    {/* eslint-disable-next-line */}
              {post.sections.centralized.advantages.items.map((item: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-400">✅</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 mt-3">{post.sections.centralized.advantages.conclusion}</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Globe className="text-green-400" /> {post.sections.decentralized.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: post.sections.decentralized.content }} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">
                {/* eslint-disable-next-line */}
            {post.sections.decentralized.problems.map((problem: any, index: number) => (
              <div key={index} className="bg-red-900/10 p-4 rounded-lg">
                <h4 className="text-red-400 font-bold mb-2">{problem.title}</h4>
                <p className="text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: problem.description }} />
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Cpu className="text-cyan-400" /> {post.sections.hypertradeModel.title}
          </h2>
          <p>{post.sections.hypertradeModel.content}</p>

          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                        {/* eslint-disable-next-line */}
                  {post.sections.hypertradeModel.comparisonTable.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium bg-hyper-800/50">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                    {/* eslint-disable-next-line */}
                {post.sections.hypertradeModel.comparisonTable.rows.map((row: any, rowIndex: number) => (
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

          <div className="space-y-6 not-prose mb-12">
                {/* eslint-disable-next-line */}
            {post.sections.hypertradeModel.components.map((component: any, index: number) => {
              const icons = [Database, Zap, Lock];
              const Icon = icons[index];
              const iconColors = ["text-cyan-400", "text-amber-400", "text-green-400"];
              
              return (
                <div key={index} className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-cyan-500 hover:bg-hyper-800/40 transition-colors">
                  <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                    <Icon className={iconColors[index]} size={18} /> {component.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: component.description }} />
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.sections.comparison.title}</h2>
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                        {/* eslint-disable-next-line */}
                  {post.sections.comparison.headers.map((header: any, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium bg-hyper-800/50">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                    {/* eslint-disable-next-line */}
                {post.sections.comparison.rows.map((row: any, rowIndex: number) => (
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

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{post.sections.realScenarios.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4">{post.sections.realScenarios.centralizedScenario.title}</h4>
              <p className="text-sm text-gray-400 mb-3" dangerouslySetInnerHTML={{ __html: post.sections.realScenarios.centralizedScenario.description }} />
              <ul className="space-y-2 text-sm text-gray-300">
                    {/* eslint-disable-next-line */}
                {post.sections.realScenarios.centralizedScenario.items.map((item: any, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-400">❌</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <li className="text-center bg-red-900/20 text-red-300 py-1 rounded mt-2 text-xs font-bold list-none">{post.sections.realScenarios.centralizedScenario.loss}</li>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4">{post.sections.realScenarios.hypertradeScenario.title}</h4>
              <p className="text-sm text-gray-400 mb-3" dangerouslySetInnerHTML={{ __html: post.sections.realScenarios.hypertradeScenario.description }} />
              <ul className="space-y-2 text-sm text-gray-300">
                    {/* eslint-disable-next-line */}
                {post.sections.realScenarios.hypertradeScenario.items.map((item: any, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <li className="text-center bg-green-900/20 text-green-300 py-1 rounded mt-2 text-xs font-bold list-none">{post.sections.realScenarios.hypertradeScenario.savings}</li>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Users className="text-blue-400" /> {post.sections.faq.title}
          </h2>
          
          <div className="space-y-6 not-prose mb-12">
                {/* eslint-disable-next-line */}
            {post.sections.faq.questions.map((qa: any, index: number) => (
              <div key={index} className="bg-hyper-800/30 border border-gray-700 p-5 rounded-xl">
                <h4 className="text-white font-bold mb-3">{qa.question}</h4>
                <p className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: qa.answer }} />
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-8 rounded-2xl border border-amber-500/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.sections.philosophy.title}</h3>
             <p className="text-gray-300 mb-6">{post.sections.philosophy.description}</p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* eslint-disable-next-line */}
               {post.sections.philosophy.whenToUse.map((useCase: any, index: number) => (
                 <div key={index} className="bg-hyper-800/50 p-4 rounded-lg text-left">
                   <p className="text-sm text-gray-300 mb-1"><strong>{useCase.title}</strong></p>
                   <p className="text-xs text-gray-400">{useCase.description}</p>
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
              <div>
                <p className="text-gray-400 mb-1">{post.sections.resources.official.title}</p>
                    {/* eslint-disable-next-line */}
                {post.sections.resources.official.items.map((item: any, index: number) => (
                  <p key={index} className="text-gray-300">• {item}</p>
                ))}
              </div>
              <div>
                <p className="text-gray-400 mb-1">{post.sections.resources.security.title}</p>
                    {/* eslint-disable-next-line */}
                {post.sections.resources.security.items.map((item: any, index: number) => (
                  <p key={index} className="text-gray-300">• {item}</p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
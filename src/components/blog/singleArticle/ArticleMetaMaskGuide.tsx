import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { CheckCircle, Settings, Link as LinkIcon, Zap, AlertCircle, Clock, Smartphone, Shield } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

export const ArticleMetaMaskGuide = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "metamask-guide");
  
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
             <span className="flex items-center gap-1 text-gray-400">{post.date}</span>
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

          <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 p-6 rounded-xl border border-amber-700/30 mb-8">
            <h4 className="text-amber-300 font-bold mb-3">{post.checklist.title}</h4>
            <div className="space-y-3">
              {post.checklist.items.map((item: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className={index === 3 ? "text-blue-400" : "text-green-400"} size={20} />
                  <span className={index === 3 ? "text-gray-300" : "text-white"}>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-red-900/20 rounded">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-red-400 mt-0.5" size={18} />
                <div>
                  <div className="text-red-300 font-bold">{post.checklist.warning.title}</div>
                  <div className="text-gray-300 text-sm">{post.checklist.warning.text}</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-green-400" /> {post.method1.title}
          </h2>

          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <h4 className="text-xl font-bold text-white">{post.method1.step1.title}</h4>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg text-center mb-4">
              <div className="text-cyan-300 text-lg">{post.method1.step1.url}</div>
              <div className="text-gray-400 text-sm">{post.method1.step1.description}</div>
            </div>

            <div className="space-y-6">
                {/* eslint-disable-next-line */}
              {post.method1.steps.map((step: any, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-0.5">
                    {step.number}
                  </div>
                  <div>
                    <div className="text-white">{step.title}</div>
                    <div className="text-gray-400 text-sm mt-1">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-900/20 rounded text-center">
              <div className="text-green-300 font-bold">{post.method1.successMessage}</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Settings className="text-blue-400" /> {post.method2.title}
          </h2>

          <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl my-8">
            <h4 className="text-white font-bold mb-4">{post.method2.title2}</h4>
            <div className="bg-hyper-900 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Network Name:</div>
                  <div className="text-white font-mono bg-gray-800 px-3 py-2 rounded">
                    {post.method2.networkConfig.networkName}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Chain ID:</div>
                  <div className="text-white font-mono bg-gray-800 px-3 py-2 rounded">
                    {post.method2.networkConfig.chainId}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-gray-400 text-sm mb-1">New RPC URL:</div>
                  <div className="text-cyan-300 font-mono bg-gray-800 px-3 py-2 rounded text-sm break-all">
                    {post.method2.networkConfig.rpcUrl}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Currency Symbol:</div>
                  <div className="text-white font-mono bg-gray-800 px-3 py-2 rounded">
                    {post.method2.networkConfig.currencySymbol}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-gray-400 text-sm mb-1">Block Explorer URL:</div>
                  <div className="text-cyan-300 font-mono bg-gray-800 px-3 py-2 rounded text-sm">
                    {post.method2.networkConfig.explorer}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="text-gray-300">{post.method2.instructions}</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Smartphone className="text-purple-400" /> {post.method3.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-gradient-to-br from-gray-900 to-purple-900/30 border border-gray-700 p-6 rounded-xl">
              <h4 className="text-cyan-300 font-bold mb-3">{post.method3.optionA.title}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {post.method3.optionA.steps.map((step: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-300 mr-2">{index + 1}.</span> 
                    <span dangerouslySetInnerHTML={{ __html: step }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-blue-900/30 border border-gray-700 p-6 rounded-xl">
              <h4 className="text-blue-300 font-bold mb-3">{post.method3.optionB.title}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {post.method3.optionB.steps.map((step: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-300 mr-2">{index + 1}.</span> 
                    <span dangerouslySetInnerHTML={{ __html: step }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.troubleshooting.title}</h2>
          
          <div className="overflow-x-auto not-prose mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  {post.troubleshooting.tableHeaders.map((header: string, index: number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.troubleshooting.issues.map((issue: any, index: number) => {
                  const priorityClass = issue.priorityColor === "red" 
                    ? "bg-red-900/30 text-red-300" 
                    : "bg-amber-900/30 text-amber-300";
                  
                  return (
                    <tr key={index} className={`border-b border-gray-800 ${index % 2 === 1 ? 'bg-hyper-800/20' : ''}`}>
                      <td className="p-4 text-white">{issue.problem}</td>
                      <td className="p-4 text-green-300">{issue.solution}</td>
                      <td className="p-4">
                        <span className={`${priorityClass} px-2 py-1 rounded text-xs`}>
                          {issue.priority}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Shield className="text-green-400" /> {post.securityTips.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-gradient-to-br from-gray-900 to-red-900/20 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-300 font-bold mb-3">{post.securityTips.doNot.title}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {post.securityTips.doNot.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-300 mr-2">•</span> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-green-900/20 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-300 font-bold mb-3">{post.securityTips.do.title}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {post.securityTips.do.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-300 mr-2">•</span> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-hyper-accent/20 to-amber-500/20 p-8 rounded-2xl border border-hyper-accent/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.cta.title}</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
               <div className="bg-gray-900/50 p-4 rounded-lg">
                 <div className="text-hyper-accent font-bold mb-2">{post.cta.basicSetup.title}</div>
                 {post.cta.basicSetup.items.map((item: string, index: number) => (
                   <div key={index} className="text-gray-300 text-sm">{item}</div>
                 ))}
               </div>
               <div className="bg-gray-900/50 p-4 rounded-lg">
                 <div className="text-hyper-accent font-bold mb-2">{post.cta.connection.title}</div>
                 {post.cta.connection.items.map((item: string, index: number) => (
                   <div key={index} className="text-gray-300 text-sm">{item}</div>
                 ))}
               </div>
             </div>
             <Link href={`/${lang}`}>
               <button className="bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
                 {post.cta.button}
               </button>
             </Link>
             <div className="mt-6">
               <div className="text-white font-bold text-lg">{post.cta.successMessage}</div>
               <div className="text-gray-300 mt-2">{post.cta.description}</div>
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
            <div className="text-gray-400 text-sm">{post.footer}</div>
          </div>
        </article>
      </div>
    </section>
  );
};
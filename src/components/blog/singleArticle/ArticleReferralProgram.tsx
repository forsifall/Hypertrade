import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { DollarSign, TrendingUp, Users, Share2, BarChart, Zap, Target, CheckCircle, Clock, Calendar, Rocket, Award } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

// --- Single Blog Article Component (Referral Program) ---
export const ArticleReferralProgram = ({lang}:{lang:Language}) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr:any) => curr.id === "referral-program-guide");
  
  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className="h-64 md:h-80 w-full bg-gradient-to-r from-amber-900 via-yellow-900 to-hyper-900 relative">
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
          <div className="bg-gradient-to-r from-amber-900/30 to-yellow-900/30 p-6 rounded-2xl border border-amber-700/30 mb-8 not-prose">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3"><DollarSign className="text-green-400" />{post.introduction.title}</h3>
            <p className="text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: post.introduction.text }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-3">
                {post.introduction.benefits.map((benefit:string, index:number) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <h5 className="text-yellow-300 font-bold mb-2">{post.introduction.example.title}</h5>
                <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: post.introduction.example.description }} />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <TrendingUp className="text-green-400" /> {post.earningsTable.title}
          </h2>

          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  {post.earningsTable.headers.map((header:string, index:number) => (
                    <th key={index} className="p-4 text-gray-400 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* eslint-disable-next-line */}
                {post.earningsTable.rows.map((row:any, index:number) => (
                  <tr key={index} className={`
                    ${index === 0 ? 'border-b border-gray-800 bg-yellow-900/10' : ''}
                    ${index === 1 ? 'border-b border-gray-800 bg-gray-800/20' : ''}
                    ${index === 2 ? 'border-b border-gray-800 bg-amber-900/10' : ''}
                    ${index === 3 ? 'border-b border-gray-800 bg-blue-900/10' : ''}
                    ${index === 4 ? 'bg-purple-900/10' : ''}
                  `}>
                    <td className={`
                      p-4 font-bold
                      ${row.level === 'Bronze' ? 'text-yellow-200' : ''}
                      ${row.level === 'Silver' ? 'text-gray-300' : ''}
                      ${row.level === 'Gold' ? 'text-amber-300' : ''}
                      ${row.level === 'Platinum' ? 'text-blue-300' : ''}
                      ${row.level === 'Diamond' ? 'text-purple-300' : ''}
                    `}>{row.level}</td>
                    <td className={`
                      p-4
                      ${row.commission === '0.05%' ? 'text-yellow-400' : ''}
                      ${row.commission === '0.07%' ? 'text-gray-300' : ''}
                      ${row.commission === '0.10%' ? 'text-amber-400' : ''}
                      ${row.commission === '0.12%' ? 'text-blue-400' : ''}
                      ${row.commission === '0.15%' ? 'text-purple-400' : ''}
                    `}>{row.commission}</td>
                    <td className="p-4 text-gray-300">{row.volume}</td>
                    <td className={`
                      p-4
                      ${row.income.includes('🔥') ? 'text-green-300 font-bold' : 'text-green-300'}
                      ${row.income === '$6,000' ? 'font-bold' : ''}
                    `}>{row.income}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-6 rounded-2xl border border-green-700/30 not-prose mb-8">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-3"><Users className="text-green-400" />{post.lifetimeCommissions.title}</h4>
            <p className="text-gray-300 mb-4">{post.lifetimeCommissions.text}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                {/* eslint-disable-next-line */}
              {post.lifetimeCommissions.months.map((month:any, index:number) => (
                <div key={index} className="bg-black/30 p-4 rounded-lg">
                  <div className="text-cyan-300 font-bold text-xl">{month.month}</div>
                  <div className="text-gray-300 text-sm">{month.description}</div>
                  <div className={`
                    ${index === 2 ? 'text-green-300 font-bold text-sm' : 'text-green-300 text-sm'}
                  `}>{month.income}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4 text-center">{post.lifetimeCommissions.tip}</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Rocket className="text-red-400" /> {post.stepByStep.title}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            <div className="flex items-start gap-4 bg-hyper-800/30 p-5 rounded-xl">
              <div className="bg-amber-900 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{post.stepByStep.step1.title}</h4>
                <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: post.stepByStep.step1.description }} />
                <div className="bg-black/40 p-3 rounded-lg mt-3 font-mono text-sm">
                  <div className="text-gray-400">{post.stepByStep.step1.example.text}</div>
                  <div className="text-cyan-300" dangerouslySetInnerHTML={{ __html: post.stepByStep.step1.example.link }} />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-hyper-800/30 p-5 rounded-xl">
              <div className="bg-amber-900 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{post.stepByStep.step2.title}</h4>
                <p className="text-gray-300">{post.stepByStep.step2.description}</p>
                <a href={post.stepByStep.step2.linkUrl} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mt-2">
                  <Share2 size={16} /> {post.stepByStep.step2.linkText}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-hyper-800/30 p-5 rounded-xl">
              <div className="bg-amber-900 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{post.stepByStep.step3.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                    {/* eslint-disable-next-line */}
                  {post.stepByStep.step3.channels.map((channel:any, index:number) => (
                    <div key={index} className={`
                      ${channel.name === 'Twitter' ? 'bg-blue-900/20' : ''}
                      ${channel.name === 'YouTube' ? 'bg-red-900/20' : ''}
                      ${channel.name === 'Telegram' ? 'bg-purple-900/20' : ''}
                      p-3 rounded-lg
                    `}>
                      <div className={`
                        ${channel.name === 'Twitter' ? 'text-blue-300' : ''}
                        ${channel.name === 'YouTube' ? 'text-red-300' : ''}
                        ${channel.name === 'Telegram' ? 'text-purple-300' : ''}
                        font-bold
                      `}>{channel.name}</div>
                      <div className="text-gray-300 text-xs">{channel.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post.promotionStrategies.title}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-5 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2"><Target size={20} className="text-blue-400" /> {post.promotionStrategies.strategy1.title}</h4>
              <p className="text-gray-300 text-sm mb-3">{post.promotionStrategies.strategy1.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="text-cyan-300 font-bold text-sm">{post.promotionStrategies.strategy1.whaleExample.title}</h5>
                  <div className="text-xs space-y-1">
                    {post.promotionStrategies.strategy1.whaleExample.details.map((detail:string, index:number) => (
                      <div key={index} dangerouslySetInnerHTML={{ __html: detail }} />
                    ))}
                  </div>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="text-gray-400 font-bold text-sm">{post.promotionStrategies.strategy1.whereToFind.title}</h5>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {post.promotionStrategies.strategy1.whereToFind.places.map((place:string, index:number) => (
                      <li key={index}>{place}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-5 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2"><Award size={20} className="text-purple-400" /> {post.promotionStrategies.strategy2.title}</h4>
              <p className="text-gray-300 text-sm mb-3">{post.promotionStrategies.strategy2.description}</p>
              <div className="bg-black/40 p-4 rounded-lg">
                <h5 className="text-yellow-300 font-bold mb-2">{post.promotionStrategies.strategy2.contest.title}</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-sm">
                    {/* eslint-disable-next-line */}
                  {post.promotionStrategies.strategy2.contest.prizes.map((prize:any, index:number) => (
                    <div key={index} className={`
                      ${index === 0 ? 'bg-yellow-900/20' : ''}
                      ${index === 1 ? 'bg-gray-800/40' : ''}
                      ${index === 2 ? 'bg-amber-900/20' : ''}
                      p-3 rounded-lg
                    `}>
                      <div className={`
                        ${index === 0 ? 'text-yellow-300' : ''}
                        ${index === 1 ? 'text-gray-300' : ''}
                        ${index === 2 ? 'text-amber-300' : ''}
                      `}>{prize.place}</div>
                      <div className="text-white font-bold">{prize.reward}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">{post.promotionStrategies.strategy2.contest.note}</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <BarChart className="text-cyan-400" /> {post.tracking.title}
          </h2>

          <div className="bg-gradient-to-r from-gray-800 to-hyper-900/50 p-6 rounded-2xl border border-gray-700 not-prose mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                {/* eslint-disable-next-line */}
              {post.tracking.stats.map((stat:any, index:number) => (
                <div key={index} className="bg-black/30 p-4 rounded-lg">
                  <div className={`
                    ${index === 0 ? 'text-cyan-300' : ''}
                    ${index === 1 ? 'text-green-300' : ''}
                    ${index === 2 ? 'text-yellow-300' : ''}
                    ${index === 3 ? 'text-green-400' : ''}
                    font-bold text-2xl
                  `}>{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href={post.tracking.dashboardUrl} className="text-cyan-400 hover:text-cyan-300 underline">{post.tracking.dashboardLink}</a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 p-8 rounded-2xl border border-amber-700/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.cta.title}</h3>
             <p className="text-gray-300 mb-6">
               {post.cta.text}
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                   {/* eslint-disable-next-line */}
                {post.cta.benefits.map((benefit:any, index:number) => (
                  <div key={index} className="bg-black/30 p-4 rounded-lg">
                    <div className="text-green-300 font-bold mb-2">{benefit.title}</div>
                    <div className="text-gray-400 text-sm">{benefit.description}</div>
                  </div>
                ))}
             </div>
             <Link href={`/${lang}`} className="inline-block bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-500/20">
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
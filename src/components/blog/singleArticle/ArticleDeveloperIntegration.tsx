import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import {
  Cpu,
  Code,
  Zap,
  CheckCircle,
  FileCode,
  Terminal,
  Database,
  Layers,
  Shield,
  Rocket,
  Clock,
  Calendar,
  Users,
} from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

// --- Single Blog Article Component (Developer Integration) ---
export const ArticleDeveloperIntegration = ({ lang }: { lang: Language }) => {
    
  const post = getBlogPosts(lang).find(
    // eslint-disable-next-line
    (curr:any) => curr.id === "developer-integration-guide"
  );

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className="h-64 md:h-80 w-full bg-gradient-to-r from-emerald-900 via-teal-900 to-hyper-900 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
          <BackButton label={post.backButton} />
          <div className="flex flex-wrap gap-4 text-sm font-medium text-hyper-accent mb-4">
            <span className="bg-hyper-accent/10 px-3 py-1 rounded-full border border-hyper-accent/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-gray-400">
              <Clock size={14} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-gray-400">
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
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 p-6 rounded-2xl border border-emerald-700/30 mb-8 not-prose">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Cpu className="text-cyan-400" />
              {post.introduction.title}
            </h3>
            <p className="text-gray-300 mb-4">{post.introduction.text}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-red-900/10 p-4 rounded-lg">
                <h5 className="text-red-300 font-bold mb-2">
                  {post.introduction.fromScratch.title}
                </h5>
                <ul className="text-sm text-gray-300 space-y-1">
                  {post.introduction.fromScratch.items.map(
                    (item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>
              <div className="bg-green-900/10 p-4 rounded-lg">
                <h5 className="text-green-300 font-bold mb-2">
                  {post.introduction.withHypertrade.title}
                </h5>
                <ul className="text-sm text-gray-300 space-y-1">
                  {post.introduction.withHypertrade.items.map(
                    (item: string, index: number) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Rocket className="text-yellow-400" /> {post.quickStart.title}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            <div className="bg-hyper-800/30 border-l-4 border-yellow-500 p-5 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Terminal size={20} className="text-yellow-400" />
                {post.quickStart.step1.title}
              </h4>
              <div className="bg-black/50 p-4 rounded-lg font-mono text-sm">
                <div className="text-gray-400">
                  {post.quickStart.step1.typescript}
                </div>
                <div className="text-green-400">
                  {post.quickStart.step1.npm}
                </div>
                <div className="text-gray-400 mt-2"># или</div>
                <div className="text-green-400">
                  {post.quickStart.step1.yarn}
                </div>
                <div className="text-gray-400 mt-2">
                  {post.quickStart.step1.react}
                </div>
                <div className="text-green-400">
                  {post.quickStart.step1.reactInstall}
                </div>
              </div>
            </div>

            <div className="bg-hyper-800/30 border-l-4 border-blue-500 p-5 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Shield size={20} className="text-blue-400" />
                {post.quickStart.step2.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h5 className="text-blue-300 font-bold mb-2">
                    {post.quickStart.step2.publicApi.title}
                  </h5>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {post.quickStart.step2.publicApi.items.map(
                      (item: string, index: number) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <h5 className="text-cyan-300 font-bold mb-2">
                    {post.quickStart.step2.keyApi.title}
                  </h5>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {post.quickStart.step2.keyApi.items.map(
                      (item: string, index: number) => (
                        <li
                          key={index}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-hyper-800/30 border-l-4 border-green-500 p-5 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Code size={20} className="text-green-400" />
                {post.quickStart.step3.title}
              </h4>
              <div className="bg-black/50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-purple-400">
                  {post.quickStart.step3.code.import}
                </div>
                <div className="text-white">
                  {" "}
                  {post.quickStart.step3.code.importModule}{" "}
                </div>
                <div className="text-purple-400">
                  {post.quickStart.step3.code.from}
                </div>
                <div className="text-green-300">
                  {post.quickStart.step3.code.fromModule}
                </div>
                <div className="text-gray-400 mt-2">
                  {post.quickStart.step3.code.function}
                </div>
                <div className="text-yellow-300">
                  {post.quickStart.step3.code.functionName}
                </div>
                <div className="text-gray-400">() {`{`}</div>
                <div className="text-purple-400 ml-4">
                  {post.quickStart.step3.code.return}
                </div>
                <div className="text-white ml-4">(</div>
                <div className="text-white ml-8">
                  {post.quickStart.step3.code.widget}
                </div>
                <div className="text-gray-400 ml-12">
                  {post.quickStart.step3.code.params.defaultTokenIn}
                </div>
                <div className="text-green-300">
                  {post.quickStart.step3.code.values.tokenIn}
                </div>
                <div className="text-gray-400 ml-12">
                  {post.quickStart.step3.code.params.defaultTokenOut}
                </div>
                <div className="text-green-300">
                  {post.quickStart.step3.code.values.tokenOut}
                </div>
                <div className="text-gray-400 ml-12">
                  {post.quickStart.step3.code.params.theme}
                </div>
                <div className="text-green-300">
                  {post.quickStart.step3.code.values.theme}
                </div>
                <div className="text-white ml-8">{`/>`}</div>
                <div className="text-white ml-4">)</div>
                <div className="text-gray-400">{`}`}</div>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                {post.quickStart.step3.tip}
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <FileCode className="text-purple-400" />{" "}
            {post.apiCapabilities.title}
          </h2>

          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  {post.apiCapabilities.table.headers.map(
                    (header: string, index: number) => (
                      <th key={index} className="p-4 text-gray-400 font-medium">
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="text-sm">
                {post.apiCapabilities.table.rows.map(
                    // eslint-disable-next-line 
                  (row: any, index: number) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? "border-b border-gray-800 bg-hyper-800/20"
                          : "border-b border-gray-800"
                      }
                    >
                      <td className="p-4 text-white font-bold">{row.method}</td>
                      <td className="p-4 text-gray-300 font-mono text-xs">
                        {row.endpoint}
                      </td>
                      <td className="p-4 text-gray-300">{row.description}</td>
                      <td className="p-4">
                        <span
                          className={`
                        ${row.complexity === "★☆☆☆☆" ? "text-green-400" : ""}
                        ${row.complexity === "★★☆☆☆" ? "text-yellow-400" : ""}
                      `}
                        >
                          {row.complexity}
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 p-6 rounded-2xl border border-purple-700/30 not-prose mb-8">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
              <Database className="text-blue-400" />{" "}
              {post.apiCapabilities.apiExample.title}
            </h4>
            <div className="bg-black/50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="text-gray-400">{`{`}</div>
              <div className="text-gray-400 ml-4">
                {"tokenIn: "}
                <span className="text-green-300">
                  {post.apiCapabilities.apiExample.json.tokenIn}
                </span>
                ,
              </div>
              <div className="text-gray-400 ml-4">
                {"tokenOut:"}
                <span className="text-green-300">
                  {post.apiCapabilities.apiExample.json.tokenOut}
                </span>
                ,
              </div>
              <div className="text-gray-400 ml-4">{"amountOutHuman:"}
                <span className="text-yellow-300">
                  {post.apiCapabilities.apiExample.json.amountOutHuman}
                </span>
                ,
              </div>
              <div className="text-gray-400 ml-4">
                {"priceImpact: "}
                <span className="text-yellow-300">
                  {post.apiCapabilities.apiExample.json.priceImpact}
                </span>
                ,
              </div>
              <div className="text-gray-400 ml-4">{"route:"} [</div>
              {post.apiCapabilities.apiExample.json.route.map(
                (route: string, index: number) => (
                  <div key={index} className="text-gray-400 ml-8">
                    {route}
                    {index <
                    post.apiCapabilities.apiExample.json.route.length - 1
                      ? ","
                      : ""}
                  </div>
                )
              )}
              <div className="text-gray-400 ml-4">],</div>
              <div className="text-gray-400 ml-4">{"savings:"} {`{`}</div>
              <div className="text-gray-400 ml-8">
                {"amountUSD: "}
                <span className="text-yellow-300">
                  {post.apiCapabilities.apiExample.json.savings.amountUSD}
                </span>
                ,
              </div>
              <div className="text-gray-400 ml-8">
                {"percentage: "}
                <span className="text-yellow-300">
                  {post.apiCapabilities.apiExample.json.savings.percentage}
                </span>
              </div>
              <div className="text-gray-400 ml-4">{`}`}</div>
              <div className="text-gray-400">{`}`}</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Layers className="text-cyan-400" /> {post.bestPractices.title}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            <div className="bg-hyper-800/20 p-5 rounded-lg border border-cyan-700/30">
              <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                <Shield size={20} className="text-cyan-400" />{" "}
                {post.bestPractices.errorHandling.title}
              </h4>
              <p className="text-gray-400 text-sm mb-3">
                {post.bestPractices.errorHandling.description}
              </p>
              <div className="bg-black/40 p-4 rounded-lg font-mono text-xs">
                <div className="text-gray-400">
                  {post.bestPractices.errorHandling.code.try}
                </div>
                <div className="text-white ml-4">
                  {post.bestPractices.errorHandling.code.const}
                </div>
                <div className="text-gray-400 ml-8">
                  {post.bestPractices.errorHandling.code.params}
                </div>
                <div className="text-white ml-4">;</div>
                <div className="text-gray-400">
                  {post.bestPractices.errorHandling.code.catch}
                </div>
                <div className="text-yellow-400 ml-4">
                  {post.bestPractices.errorHandling.code.insufficientLiquidity}
                </div>
                <div className="text-red-300 ml-8">
                  {post.bestPractices.errorHandling.code.alerts.liquidity}
                </div>
                <div className="text-yellow-400 ml-4">
                  {post.bestPractices.errorHandling.code.highPriceImpact}
                </div>
                <div className="text-red-300 ml-8">
                  {post.bestPractices.errorHandling.code.alerts.priceImpact}
                </div>
                <div className="text-yellow-400 ml-4">{`}`}</div>
                <div className="text-gray-400">{`}`}</div>
              </div>
            </div>

            <div className="bg-hyper-800/20 p-5 rounded-lg border border-green-700/30">
              <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                <Users size={20} className="text-green-400" />{" "}
                {post.bestPractices.uxRecommendations.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm mb-2">
                    {post.bestPractices.uxRecommendations.alwaysShow.title}
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {post.bestPractices.uxRecommendations.alwaysShow.items.map(
                      (item: string, index: number) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">
                    {post.bestPractices.uxRecommendations.gasOptimization.title}
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {post.bestPractices.uxRecommendations.gasOptimization.items.map(
                      (item: string, index: number) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post.referralProgram.title}
          </h2>

          <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 p-6 rounded-2xl border border-yellow-700/30 not-prose mb-8">
            <h4 className="text-lg font-bold text-white mb-4">
              {post.referralProgram.monetization}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                {/* eslint-disable-next-line */}
              {post.referralProgram.stats.map((stat: any, index: number) => (
                <div key={index} className="bg-black/30 p-4 rounded-lg">
                  <div
                    className={`
                    ${index === 0 ? "text-yellow-300" : ""}
                    ${index === 1 ? "text-cyan-300" : ""}
                    ${index === 2 ? "text-green-300" : ""}
                    font-bold text-xl
                  `}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-black/40 rounded-lg">
              <h5 className="text-white font-bold mb-2">
                {post.referralProgram.example.title}
              </h5>
              <p
                className="text-sm text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: post.referralProgram.example.calculation,
                }}
              />
              <a
                href={post.referralProgram.example.linkUrl}
                className="inline-block mt-3 text-cyan-400 hover:text-cyan-300 underline"
              >
                {post.referralProgram.example.link}
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 p-8 rounded-2xl border border-emerald-700/30 text-center not-prose mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              {post.cta.title}
            </h3>
            <p className="text-gray-300 mb-6">{post.cta.text}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* eslint-disable-next-line */}
              {post.cta.links.map((link: any, index: number) => (
                <a
                  key={index}
                  href={link.url}
                  className="bg-black/30 p-4 rounded-lg hover:bg-black/50 transition-colors"
                >
                  <div
                    className={`
                      ${index === 0 ? "text-emerald-300" : ""}
                      ${index === 1 ? "text-cyan-300" : ""}
                      ${index === 2 ? "text-blue-300" : ""}
                      font-bold mb-2
                    `}
                  >
                    {link.title}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {link.description}
                  </div>
                </a>
              ))}
            </div>
            <Link
              href={`/${lang}`}
              className="inline-block bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
            >
              {post.cta.buttonText}
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 not-prose">
            <div className="flex flex-wrap gap-4 justify-center">
              {post.footer.socialLinks.map((link: string, index: number) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              {post.footer.updateInfo}
              <br />
              {post.footer.author}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

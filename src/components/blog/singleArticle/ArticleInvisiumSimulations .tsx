import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { Cpu, Shield, Zap, Target, BarChart, Clock, Calendar, CheckCircle, AlertCircle, Layers, Search, Navigation, PieChart, Users, Globe, Lock, Brain } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

// --- Single Blog Article Component (Invisium Simulations) ---
export const ArticleInvisiumSimulations = ({lang}:{lang:Language}) => {
    // eslint-disable-next-line
  const post = getBlogPosts(lang).find((curr:any) => curr.id === "invisium-simulations");
  
  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className="h-64 md:h-80 w-full bg-gradient-to-r from-cyan-900 via-blue-900 to-hyper-900 relative">
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
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-2xl border border-cyan-700/30 mb-8 not-prose">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3"><AlertCircle className="text-cyan-400" />{post.problemTitle}</h3>
            <p className="text-gray-300">
              {post.problemText}
            </p>
            <div className="mt-4 space-y-2">
              {post.problemPoints.map((point:string, index:number) => (
                <div key={index} className="flex items-start gap-2 text-gray-300">⚠️ {point}</div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Cpu className="text-cyan-400" /> {post.whatIsTitle}
          </h2>
          
          <p className="mb-6">
            <strong>Invisium Simulations</strong> — {post.whatIsText}
          </p>

          <div className="bg-hyper-800/30 p-6 rounded-xl my-6">
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Zap size={20} className="text-yellow-400"/>{post.howItWorksTitle}</h4>
            <div className="space-y-4">
              {post.howItWorksSteps.map((step:string, index:number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-cyan-900/30 rounded-full p-2 mt-1">
                    {index === 0 && <Search size={16} className="text-cyan-400" />}
                    {index === 1 && <Navigation size={16} className="text-blue-400" />}
                    {index === 2 && <Cpu size={16} className="text-purple-400" />}
                    {index === 3 && <BarChart size={16} className="text-green-400" />}
                    {index === 4 && <CheckCircle size={16} className="text-hyper-accent" />}
                  </div>
                  <div><span className="font-bold text-cyan-400">{index + 1}.</span> {step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">{post.traditionalDexTitle}</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span>Показанная котировка:</span> <span className="text-white">10,000 USDC → 8.234 ETH</span></div>
                <div className="flex justify-between"><span>Фактический результат:</span> <span className="text-white">10,000 USDC → 8.156 ETH</span></div>
                <div className="flex justify-between border-t border-red-900/30 pt-2"><span>Потеря:</span> <span className="text-red-300 font-bold">-0.078 ETH (-$196)</span></div>
                <div className="text-center bg-red-900/20 text-red-300 py-1 rounded mt-2 text-xs">Непредсказуемый результат</div>
              </div>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">{post.invisiumTitle}</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span>Симуляция показала:</span> <span className="text-white">10,000 USDC → 8.214 ETH</span></div>
                <div className="flex justify-between"><span>Фактический результат:</span> <span className="text-white">10,000 USDC → 8.211 ETH</span></div>
                <div className="flex justify-between border-t border-green-900/30 pt-2"><span>Разница:</span> <span className="text-green-300">-0.003 ETH (-$7.50)</span></div>
                <div className="flex justify-between"><span>Точность:</span> <span className="text-green-300 font-bold">99.96%</span></div>
                <div className="text-center bg-green-900/20 text-green-300 py-1 rounded mt-2 text-xs font-bold">Экономия: $188.50</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Brain className="text-purple-400" /> {post.technicalDetailsTitle}
          </h2>

          <div className="space-y-8 not-prose mb-12">
            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Globe size={20} className="text-blue-400"/>{post.pathfindingTitle}</h3>
              <p className="text-gray-400 mb-4">{post.pathfindingText}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-hyper-900/50 p-3 rounded-lg text-center">
                  <div className="text-cyan-400 font-bold">HyperCore Spot</div>
                  <div className="text-gray-400 text-xs">Order Book</div>
                </div>
                <div className="bg-hyper-900/50 p-3 rounded-lg text-center">
                  <div className="text-cyan-400 font-bold">Hyperswap</div>
                  <div className="text-gray-400 text-xs">AMM, Uniswap V2</div>
                </div>
                <div className="bg-hyper-900/50 p-3 rounded-lg text-center">
                  <div className="text-cyan-400 font-bold">Kittenswap</div>
                  <div className="text-gray-400 text-xs">AMM</div>
                </div>
                <div className="bg-hyper-900/50 p-3 rounded-lg text-center">
                  <div className="text-cyan-400 font-bold">Prjx</div>
                  <div className="text-gray-400 text-xs">AMM</div>
                </div>
              </div>
            </div>

            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Cpu size={20} className="text-purple-400"/>{post.simulationTitle}</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start gap-2">1. Создаёт виртуальную копию текущего состояния блокчейна</div>
                <div className="flex items-start gap-2">2. Запускает тестовую транзакцию в этой виртуальной среде</div>
                <div className="flex items-start gap-2">3. Анализирует результат: сколько токенов получено, какой price impact, slippage</div>
                <div className="flex items-start gap-2">4. Учитывает gas cost для каждого hop</div>
                <div className="flex items-start gap-2">5. Повторяет для всех маршрутов</div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-4 text-gray-400 font-medium">Маршрут</th>
                  <th className="p-4 text-gray-400 font-medium">Симулированный результат</th>
                  <th className="p-4 text-gray-400 font-medium">Price Impact</th>
                  <th className="p-4 text-gray-400 font-medium">Gas Cost</th>
                  <th className="p-4 text-green-400 font-medium">Итоговая выгода</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-800 bg-hyper-800/20">
                  <td className="p-4 text-white">Direct via Hyperswap</td>
                  <td className="p-4 text-gray-300">8.156 ETH</td>
                  <td className="p-4 text-gray-300">1.2%</td>
                  <td className="p-4 text-gray-300">1.5 HYPE</td>
                  <td className="p-4 text-gray-300">8.154 ETH</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-white">Multi-hop via HYPE</td>
                  <td className="p-4 text-gray-300">8.201 ETH</td>
                  <td className="p-4 text-gray-300">0.8%</td>
                  <td className="p-4 text-gray-300">2.1 HYPE</td>
                  <td className="p-4 text-gray-300">8.198 ETH</td>
                </tr>
                <tr className="border-b border-gray-800 bg-hyper-800/20">
                  <td className="p-4 text-white font-bold">Split: 60% Spot + 40% Hyperswap</td>
                  <td className="p-4 text-gray-300 font-bold">8.214 ETH</td>
                  <td className="p-4 text-gray-300">0.5%</td>
                  <td className="p-4 text-gray-300">1.8 HYPE</td>
                  <td className="p-4 text-green-300 font-bold">8.211 ETH ✅ BEST</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-2">Выбор: Split-routing даёт +0.057 ETH (+$142.50) по сравнению с простым обменом через Hyperswap.</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Shield className="text-green-400" /> {post.benefitsTitle}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-cyan-400 hover:bg-hyper-800/40 transition-colors">
              <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2"><Target size={18} /> {post.benefit1Title}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div className="bg-red-900/10 p-4 rounded-lg">
                  <h5 className="text-red-400 font-bold mb-2">Без Invisium</h5>
                  <p className="text-sm text-gray-300">Показано ~40.8 ETH → получаете 40.2 ETH ❌</p>
                  <div className="text-xs text-red-400 mt-2">Стратегия сорвалась</div>
                </div>
                <div className="bg-green-900/10 p-4 rounded-lg">
                  <h5 className="text-green-400 font-bold mb-2">С Invisium</h5>
                  <p className="text-sm text-gray-300">Симуляция 40.6 ETH → получаете 40.58 ETH ✅</p>
                  <div className="text-xs text-green-400 mt-2">Стратегия выполнена</div>
                </div>
              </div>
            </div>

            <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-green-400 hover:bg-hyper-800/40 transition-colors">
              <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2"><BarChart size={18} /> {post.benefit2Title}</h4>
              <div className="mt-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Без симуляции (средний unexpected slippage)</span>
                  <span className="text-red-400 font-bold">0.5-2% ($50-200 на $10k)</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">С Invisium (средний unexpected slippage)</span>
                  <span className="text-green-400 font-bold">0.01-0.1% ($1-10 на $10k)</span>
                </div>
                <div className="text-center bg-green-900/20 text-green-300 py-2 rounded mt-3 text-sm">
                  Годовая экономия (100 свопов по $10k): <span className="font-bold">$4,900</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Navigation className="text-blue-400" /> {post.howToUseTitle}
          </h2>

          <div className="space-y-4 not-prose mb-8">
            <div className="flex items-start gap-3 bg-hyper-800/20 p-4 rounded-lg">
              <div className="bg-cyan-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-white">Шаг 1: Откройте Hypertrade</h4>
                <p className="text-gray-400 text-sm">Перейдите на https://ht.xyz и подключите EVM-кошелёк (MetaMask, WalletConnect и т.д.)</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-hyper-800/20 p-4 rounded-lg">
              <div className="bg-cyan-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold text-white">Шаг 2: Выберите токены и введите сумму</h4>
                <p className="text-gray-400 text-sm">Token In: USDC, Token Out: ETH, Amount: 10,000 USDC</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-hyper-800/20 p-4 rounded-lg">
              <div className="bg-cyan-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-white">Шаг 3: Дождитесь симуляции (1-3 секунды)</h4>
                <div className="bg-black/50 p-4 rounded-lg mt-2 text-sm">
                  <div className="text-green-400 font-bold">💰 You will receive: 8.211 ETH</div>
                  <div className="text-cyan-400 text-xs">✅ Simulated with 99.8% accuracy</div>
                  <div className="text-gray-400 mt-2">📊 Price Impact: 0.5%</div>
                  <div className="text-gray-400">⚠️ Slippage Tolerance: 1.0%</div>
                  <div className="text-gray-400">⛽ Network Fee: ~1.8 HYPE (~$4.50)</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Layers className="text-yellow-400" /> {post.comparisonTitle}
          </h2>

          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-4 text-gray-400 font-medium">Параметр</th>
                  <th className="p-4 text-red-400 font-medium">Традиционный DEX</th>
                  <th className="p-4 text-green-400 font-medium">Hypertrade Invisium</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-800 bg-hyper-800/20">
                  <td className="p-4 text-white">Точность котировки</td>
                  <td className="p-4 text-gray-300">90-95% (ориентировочно)</td>
                  <td className="p-4 text-green-300 font-bold">99.5-99.9%</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-white">Предсказание price impact</td>
                  <td className="p-4 text-gray-300">Приблизительно</td>
                  <td className="p-4 text-green-300 font-bold">Точно на основе симуляции</td>
                </tr>
                <tr className="border-b border-gray-800 bg-hyper-800/20">
                  <td className="p-4 text-white">Multi-hop support</td>
                  <td className="p-4 text-gray-300">Показ без гарантий</td>
                  <td className="p-4 text-green-300 font-bold">Полная симуляция каждого hop</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-white">Учёт gas cost</td>
                  <td className="p-4 text-gray-300">Показ отдельно</td>
                  <td className="p-4 text-green-300 font-bold">Включён в итоговый расчёт</td>
                </tr>
                <tr className="border-b border-gray-800 bg-hyper-800/20">
                  <td className="p-4 text-white">Стоимость</td>
                  <td className="p-4 text-gray-300">Комиссии DEX</td>
                  <td className="p-4 text-green-300 font-bold">Бесплатно (0% комиссия)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <AlertCircle className="text-orange-400" /> {post.faqTitle}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            {post.faqQuestions.map((question:string, index:number) => (
              <div key={index} className="bg-hyper-800/20 p-5 rounded-lg">
                <h4 className="font-bold text-white mb-2">{index + 1}. {question}</h4>
                <p className="text-gray-400 text-sm">Текст ответа для вопроса {index + 1}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.conclusionTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4">Традиционные DEX</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">❌ Unexpected slippage (0.5-5% потерь)</li>
                <li className="flex items-start gap-2">❌ Непредсказуемый результат</li>
                <li className="flex items-start gap-2">❌ Потерям от MEV-атак</li>
                <li className="flex items-start gap-2">❌ Неоптимальным маршрутам</li>
              </ul>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4">Hypertrade с Invisium</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">✅ Точность 99.5-99.9%</li>
                <li className="flex items-start gap-2">✅ Защита от unexpected slippage</li>
                <li className="flex items-start gap-2">✅ Оптимизация multi-hop маршрутов</li>
                <li className="flex items-start gap-2">✅ 0% platform fee</li>
                <li className="flex items-start gap-2">✅ Сравнение альтернативных путей</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-900/20 to-hyper-accent/20 p-8 rounded-2xl border border-cyan-500/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.ctaTitle}</h3>
             <p className="text-gray-300 mb-6">
               {post.ctaText}
             </p>
             <div className="space-y-3 mb-6 text-sm">
               {post.ctaSteps.map((step:string, index:number) => (
                 <div key={index} className="flex items-center justify-center gap-2 text-gray-300">{index + 1}. {step}</div>
               ))}
             </div>
             <Link href={`/${lang}`} className="inline-block bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
               {post.ctaButton}
             </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 not-prose">
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Telegram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Копировать ссылку</a>
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">{post.updateInfo}<br/>{post.author}</p>
          </div>
        </article>
      </div>
    </section>
  );
};
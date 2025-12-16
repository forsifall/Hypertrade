import BackButton from "@/components/ui/BackButton";
import { AlertCircle, ArrowLeft, Calendar, CheckCircle, Clock, Layers, Navigation, Search, Zap, BarChart, TrendingDown, DollarSign, Shield, Target, PieChart, Cpu, Users, Globe, Watch } from "lucide-react";
import { getBlogPosts } from "../data";
import { Language } from "@/app/translations";
import Link from "next/link";

// --- Single Blog Article Component (Price Impact) ---
// eslint-disable-next-line
export default function ArticlePriceImpact ({lang}:{lang:Language}) {
// eslint-disable-next-line
    const post = getBlogPosts(lang).find((curr:any) => curr.id === "price-impact-guide");

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className="h-64 md:h-80 w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-hyper-900 relative">
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
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-hyper-accent pl-6 italic">
            {post.excerpt}
          </p>

          <div className="space-y-6 mb-12 not-prose">
            <div className="bg-gradient-to-r from-purple-900/30 to-hyper-900/30 p-6 rounded-2xl border border-purple-700/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3"><Target className="text-hyper-accent" />{post.learnTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">• {post.learnPoints[0]}</li>
                  <li className="flex items-start gap-2">• {post.learnPoints[1]}</li>
                  <li className="flex items-start gap-2">• {post.learnPoints[2]}</li>
                </ul>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">• {post.learnPoints[3]}</li>
                  <li className="flex items-start gap-2">• {post.learnPoints[4]}</li>
                  <li className="flex items-start gap-2">• {post.learnPoints[5]}</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post.definitionTitle}
          </h2>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Определение</h3>
          <p className="mb-6">
            {post.definitionText}
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">{post.analogyTitle}</h3>
          <p className="mb-4">{post.analogyText}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-blue-900/10 border border-blue-900/30 p-6 rounded-xl">
              <h4 className="text-blue-400 font-bold mb-4 border-b border-blue-900/30 pb-2">{post.scenario1Title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex justify-between"><span>Цена:</span> <span className="text-white">$1 за яблоко</span></li>
                <li className="flex justify-between"><span>Вы платите:</span> <span>$1</span></li>
                <li className="flex justify-between font-bold text-blue-300"><span>Price impact:</span> <span>0%</span></li>
              </ul>
            </div>

            <div className="bg-purple-900/10 border border-purple-900/30 p-6 rounded-xl">
              <h4 className="text-purple-400 font-bold mb-4 border-b border-purple-900/30 pb-2">{post.scenario2Title}</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex justify-between"><span>Первое яблоко:</span> <span className="text-white">$1.00</span></li>
                <li className="flex justify-between"><span>100-е яблоко:</span> <span>$1.10</span></li>
                <li className="flex justify-between"><span>500-е яблоко:</span> <span>$1.30</span></li>
                <li className="flex justify-between"><span>1000-е яблоко:</span> <span>$1.50</span></li>
                <li className="flex justify-between border-t border-purple-900/30 pt-2"><span>Средняя цена:</span> <span className="text-white">$1.25</span></li>
                <li className="flex justify-between"><span>Вы заплатили:</span> <span>$1,250 вместо $1,000</span></li>
                <li className="text-center bg-purple-900/20 text-purple-300 py-1 rounded mt-2 text-xs font-bold">Price impact: 25%!</li>
              </ul>
            </div>
          </div>

<div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
  <h4 className="font-bold text-white mb-4">{post.visualizationTitle}</h4>
  <p className="text-sm text-gray-400 mb-6">{post.visualizationDesc}</p>

  <div className="space-y-4">

    <div>
      <div className="flex justify-between mb-1 text-sm text-gray-300">
        <span>Малый ордер</span>
        <span>~1% пула</span>
      </div>
      <div className="h-4 rounded-full bg-gray-700/50 overflow-hidden">
        <div className="h-4 bg-gradient-to-r from-green-400 to-green-600 w-[20%]"></div>
      </div>
    </div>

    <div>
      <div className="flex justify-between mb-1 text-sm text-gray-300">
        <span>Средний ордер</span>
        <span>~5% пула</span>
      </div>
      <div className="h-4 rounded-full bg-gray-700/50 overflow-hidden">
        <div className="h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 w-[50%]"></div>
      </div>
    </div>

    <div>
      <div className="flex justify-between mb-1 text-sm text-gray-300">
        <span>Крупный ордер</span>
        <span>~20% пула</span>
      </div>
      <div className="h-4 rounded-full bg-gray-700/50 overflow-hidden">
        <div className="h-4 bg-gradient-to-r from-red-400 to-red-600 w-[90%]"></div>
      </div>
    </div>
  </div>

  <p className="text-sm text-gray-400 mt-4">
    Пример: Чем больше ваш ордер относительно ликвидности пула, тем сильнее повышается цена — и тем выше ваш price impact.
  </p>
</div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
             <AlertCircle className="text-red-400" /> {post.mechanicsTitle}
          </h2>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">{post.ammTitle}</h3>
          <p className="mb-4">{post.ammText}</p>
          
          <div className="bg-hyper-800/30 p-6 rounded-xl my-6">
            <h4 className="text-lg font-bold text-white mb-3">{post.componentsTitle}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-hyper-900/50 p-4 rounded-lg">
                <h5 className="font-bold text-hyper-accent mb-2">1. Пул ликвидности</h5>
                <p className="text-sm text-gray-300">Пример пула ETH/USDC:<br/>100 ETH × 350,000 USDC = 35,000,000 (константа k)<br/>Цена: 1 ETH = 3,500 USDC</p>
              </div>
              <div className="bg-hyper-900/50 p-4 rounded-lg">
                <h5 className="font-bold text-hyper-accent mb-2">2. Формула постоянного произведения</h5>
                <p className="text-sm text-gray-300">x × y = k (константа)<br/>x = количество токена A (ETH)<br/>y = количество токена B (USDC)<br/>k = константа (не меняется)</p>
              </div>
              <div className="bg-hyper-900/50 p-4 rounded-lg">
                <h5 className="font-bold text-hyper-accent mb-2">3. Как меняется цена при свопе</h5>
                <p className="text-sm text-gray-300">Вы продаете 10 ETH:<br/>ДО: 100 ETH × 350,000 USDC<br/>ПОСЛЕ: 110 ETH × 318,182 USDC<br/>Потери: 3,182 USDC (9.1% price impact!)</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mt-8 mb-4 flex items-center gap-2"><BarChart className="text-blue-400" /> {post.comparisonTitle}</h3>
          
          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-4 text-gray-400 font-medium">Характеристика</th>
                  <th className="p-4 text-blue-400 font-medium">Price Impact</th>
                  <th className="p-4 text-purple-400 font-medium">Slippage</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-800 bg-hyper-800/20">
                  <td className="p-4 text-white">Что это</td>
                  <td className="p-4 text-gray-300">Изменение цены из-за ВАШЕГО ордера</td>
                  <td className="p-4 text-gray-300">Изменение цены между подачей и исполнением</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-white">Причина</td>
                  <td className="p-4 text-gray-300">Размер вашего ордера vs ликвидность</td>
                  <td className="p-4 text-gray-300">Другие трейдеры, волатильность рынка</td>
                </tr>
                <tr className="border-b border-gray-800 bg-hyper-800/20">
                  <td className="p-4 text-white">Когда возникает</td>
                  <td className="p-4 text-gray-300">Всегда при больших ордерах</td>
                  <td className="p-4 text-gray-300">Может быть даже на малых</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-white">Можно избежать?</td>
                  <td className="p-4 text-gray-300">Нет (только минимизировать)</td>
                  <td className="p-4 text-gray-300">Частично (через slippage tolerance)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
             <TrendingDown className="text-orange-400" /> {post.factorsTitle}
          </h2>

          <div className="space-y-8 not-prose mb-12">
            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><DollarSign size={20} className="text-green-400"/> Фактор 1: Размер вашего ордера</h3>
              <div className="mt-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">0.1 ETH (0.1% пула)</span>
                  <span className="text-green-400 font-bold">~0.05% ✅</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">1 ETH (1% пула)</span>
                  <span className="text-green-400 font-bold">~0.5% ✅</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">5 ETH (5% пула)</span>
                  <span className="text-yellow-400 font-bold">~2.5% ⚠️</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">20 ETH (20% пула)</span>
                  <span className="text-red-400 font-bold">~11% 🚫</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">50 ETH (50% пула)</span>
                  <span className="text-red-600 font-bold">~33% 💀</span>
                </div>
              </div>
            </div>

            <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Layers size={20} className="text-blue-400"/> Фактор 2: Глубина ликвидности пула</h3>
              <p className="text-gray-400 mb-4">Чем больше ликвидности — тем меньше price impact.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-900/10 p-4 rounded-lg">
                  <h4 className="text-green-400 font-bold mb-2">Пул A (Глубокий)</h4>
                  <p className="text-sm">Ликвидность: 1,000 ETH<br/>Ордер: 10 ETH (1%)<br/>Impact: <span className="text-green-400">~0.5% ✅</span></p>
                </div>
                <div className="bg-yellow-900/10 p-4 rounded-lg">
                  <h4 className="text-yellow-400 font-bold mb-2">Пул B (Средний)</h4>
                  <p className="text-sm">Ликвидность: 100 ETH<br/>Ордер: 10 ETH (10%)<br/>Impact: <span className="text-yellow-400">~5% ⚠️</span></p>
                </div>
                <div className="bg-red-900/10 p-4 rounded-lg">
                  <h4 className="text-red-400 font-bold mb-2">Пул C (Мелкий)</h4>
                  <p className="text-sm">Ликвидность: 20 ETH<br/>Ордер: 10 ETH (50%)<br/>Impact: <span className="text-red-400">~33% 💀</span></p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
             <DollarSign className="text-green-400" /> {post.examplesTitle}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">Пример 1: Малый ордер — почти нет потерь</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400 mb-2">Условия:</p>
                  <p className="text-white">Пара: ETH/USDC<br/>Пул: 500 ETH<br/>Ордер: 1 ETH (0.2%)</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Результат:</p>
                  <p className="text-white">Price Impact: 0.11%<br/>Потери: $4<br/><span className="text-green-400">✅ На малых ордерах impact незначителен</span></p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900/10 border border-yellow-900/30 p-6 rounded-xl">
              <h4 className="text-yellow-400 font-bold mb-4 border-b border-yellow-900/30 pb-2">Пример 2: Средний ордер — заметные потери</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400 mb-2">Условия:</p>
                  <p className="text-white">Пара: ETH/USDC<br/>Пул: 200 ETH<br/>Ордер: 10 ETH (5%)</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Результат:</p>
                  <p className="text-white">Price Impact: 2.5%<br/>Потери: $880<br/><span className="text-yellow-400">⚠️ На 5% от пула начинаются серьезные потери</span></p>
                </div>
              </div>
            </div>

            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">Пример 3: Крупный ордер — катастрофические потери</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400 mb-2">Условия:</p>
                  <p className="text-white">Пара: ALT/USDC<br/>Пул: 50 ETH<br/>Ордер: 20 ETH (40%!)</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Результат:</p>
                  <p className="text-white">Price Impact: 28%<br/>Потери: $5,600<br/><span className="text-red-400">🚫 Никогда не делайте ордера 10% от ликвидности</span></p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
             <Shield className="text-cyan-400" /> {post.strategiesTitle}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-hyper-accent hover:bg-hyper-800/40 transition-colors">
              <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2"><Navigation size={18} /> Стратегия 1: Используйте DEX-агрегатор</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Почему агрегаторы эффективнее: split-routing делит ваш ордер между несколькими DEX, каждая часть имеет меньший impact, суммарный impact ниже. Используйте Hypertrade: агрегирует HyperCore Spot + все DEX на Hyperliquid.</p>
            </div>

            <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-blue-400 hover:bg-hyper-800/40 transition-colors">
              <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2"><PieChart size={18} /> Стратегия 2: Разделите крупный ордер на несколько мелких</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Суть: Вместо одного большого ордера — несколько маленьких с паузами. Оптимальная стратегия: размер порции ≤3% от ликвидности пула, пауза между 3-10 минут.</p>
            </div>

            <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-green-400 hover:bg-hyper-800/40 transition-colors">
              <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2"><Layers size={18} /> Стратегия 3: Выбирайте пулы с глубокой ликвидностью</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Как найти: проверьте TVL пула. Отлично: TVL  $10M ✅, Хорошо: $1M-$10M ⭐, Избегайте: TVL  🚫</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
             <AlertCircle className="text-red-400" /> {post.redFlagsTitle}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            <div className="bg-red-900/10 border border-red-900/30 p-5 rounded-lg">
              <h4 className="text-red-400 font-bold mb-2">Признак 1: Impact 5% — остановитесь и подумайте</h4>
              <p className="text-gray-400 text-sm">Если видите impact 5%, спросите себя: действительно ли мне нужно исполнить сейчас? Могу ли разделить на несколько ордеров?</p>
            </div>

            <div className="bg-yellow-900/10 border border-yellow-900/30 p-5 rounded-lg">
              <h4 className="text-yellow-400 font-bold mb-2">Признак 2: Impact сильно отличается от slippage</h4>
              <p className="text-gray-400 text-sm">Подозрительно: Price Impact 0.5%, Slippage tolerance 5%. Возможные причины: очень волатильный токен, боты-снайперы ждут вашей транзакции.</p>
            </div>

            <div className="bg-purple-900/10 border border-purple-900/30 p-5 rounded-lg">
              <h4 className="text-purple-400 font-bold mb-2">Признак 3: Impact растет нелинейно</h4>
              <p className="text-gray-400 text-sm">Тест: 1 ETH → Impact 0.5%, 2 ETH → Impact 1.2% (должно быть ~1%). Это означает: Пул слишком мелкий!</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-8">{post.conclusionTitle}</h2>
          
          <div className="bg-gradient-to-r from-hyper-accent/20 to-purple-500/20 p-6 rounded-2xl border border-hyper-accent/30 not-prose mb-8">
            <h3 className="text-xl font-bold text-white mb-4">{post.keyTakeawaysTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">✅ Price impact — это реальные потери денег</li>
                <li className="flex items-start gap-2">✅ Чем больше ордер → экспоненциально выше impact</li>
                <li className="flex items-start gap-2">✅ Агрегаторы снижают impact через split-routing на 50-80%</li>
                <li className="flex items-start gap-2">✅ Мониторьте индикаторы перед каждым свопом</li>
              </ul>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">✅ Impact 5% — красный флаг, остановитесь</li>
                <li className="flex items-start gap-2">✅ Разделяйте крупные ордера на несколько меньших</li>
                <li className="flex items-start gap-2">✅ Выбирайте глубокую ликвидность для больших сумм</li>
                <li className="flex items-start gap-2">✅ Используйте правильные инструменты для минимизации потерь</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-hyper-accent/20 to-hyper-secondary/20 p-8 rounded-2xl border border-hyper-accent/30 text-center not-prose mt-12">
             <h3 className="text-2xl font-bold text-white mb-4">{post.ctaTitle}</h3>
             <p className="text-gray-300 mb-6">{post.ctaDesc}</p>
             <Link href={`/${lang}`} className="bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
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
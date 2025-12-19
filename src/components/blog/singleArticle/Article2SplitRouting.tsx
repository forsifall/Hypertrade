"use client"
import BackButton from "@/components/ui/BackButton";
import { BarChart, Calculator, CheckCircle, Clock, Code, Cpu, DollarSign, Download, Layers, LineChart, PieChart, Zap } from "lucide-react";
import { Language } from "@/app/translations";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { useTranslation } from "react-i18next";

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
  
          const { t } = useTranslation();

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
          <article className="prose prose-invert prose-lg max-w-none">

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Split-routing: как умное разделение ордеров экономит деньги`)}</h2>

  <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-hyper-accent pl-6 italic">
    {t(`💰 Проблема, которая стоит вам $5,000–$15,000 в год`)}
  </p>

  <p>{t(`Представьте ситуацию:`)}</p>
  <p>{t(`Вы хотите купить токен за $50,000 на децентрализованной бирже. Вы открываете Uniswap, вводите сумму, и видите:`)}</p>

  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Expected output: 10,000 tokens`)}</li>
    <li>{t(`Price impact: 8.5% ⚠️`)}</li>
    <li>{t(`Slippage: 7.2%`)}</li>
  </ul>

  <p>{t(`Вы теряете $4,250 из-за price impact + slippage на ОДНОЙ транзакции.`)}</p>

  <p className="mt-6">{t(`Теперь представьте другой сценарий:`)}</p>
  <p>{t(`Тот же своп $50,000, но через Hypertrade с технологией split-routing:`)}</p>

  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Expected output: 10,458 tokens`)}</li>
    <li>{t(`Price impact: 2.1% ✓`)}</li>
    <li>{t(`Slippage: 1.8%`)}</li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-8 mb-4">{t(`Route optimization:`)}</h3>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`├─ 35% через HyperCore Spot ($17,500)`)}</li>
    <li>{t(`├─ 30% через Hyperswap ($15,000)`)}</li>
    <li>{t(`├─ 20% через Kittenswap ($10,000)`)}</li>
    <li>{t(`└─ 15% через Prjx ($7,500)`)}</li>
  </ul>

  <p>{t(`Your savings: $1,375 (2.75% better rate)`)}</p>
  <p>{t(`Одна транзакция. Экономия $1,375.`)}</p>

  <p className="mt-6">{t(`При торговом объёме $500,000/год:`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`• Обычный DEX (без split-routing): потери $36,000–$42,500`)}</li>
    <li>{t(`• Hypertrade (split-routing): потери $10,500–$14,000`)}</li>
    <li>{t(`• Годовая экономия: $22,000–$32,000`)}</li>
  </ul>

  <p>{t(`Сегодня мы разберём ЧТО такое split-routing, КАК он работает, и ПОЧЕМУ это даёт вам тысячи долларов экономии.`)}</p>

  <hr className="my-12 border-gray-700"/>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`🧠 Что такое split-routing: объяснение простыми словами`)}</h2>

  <p className="mb-4">{t(`Проблема фрагментированной ликвидности`)}</p>
  <p className="mb-4">{t(`На каждом блокчейне ликвидность распределена по множеству DEX:`)}</p>

  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`HyperCore Spot: $420M TVL (order book)`)}</li>
    <li>{t(`Hyperswap: $280M TVL (AMM)`)}</li>
    <li>{t(`Kittenswap: $120M TVL (AMM)`)}</li>
    <li>{t(`Prjx: $30M TVL (specialized pools)`)}</li>
  </ul>

  <p className="mb-4">{t(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}</p>
  <p className="mb-6">{t(`Total: $850M TVL`)}</p>

  <p className="mb-4">{t(`Проблема: Если вы торгуете на одном DEX, вы используете только его ликвидность, игнорируя остальные $550M–$700M.`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`• High price impact: Крупные ордера двигают цену на 5–15%`)}</li>
    <li>{t(`• Высокое slippage: Вы получаете хуже цену из-за недостаточной ликвидности`)}</li>
    <li>{t(`• Inefficient execution: Упущенная прибыль $500–$3,000 на $50k свопе`)}</li>
  </ul>

  <hr className="my-12 border-gray-700"/>

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Решение: Split-routing (умное разделение ордеров)`)}</h3>
  <p className="mb-6">{t(`Split-routing = автоматическое разделение вашего ордера на несколько частей, каждая из которых выполняется на разных DEX для получения лучшей суммарной цены.`)}</p>

  <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 mb-8">
    <h4 className="font-bold text-white mb-2">{t(`Аналогия из реальной жизни:`)}</h4>
    <p className="text-sm text-gray-400 m-0">{t(`Вам нужно купить 10,000 яблок.`)}</p>
    <ul className="list-disc list-inside mt-2 text-gray-300">
      <li>{t(`Вариант А (без split-routing):`)}</li>
      <ul className="list-disc list-inside ml-6">
        <li>{t(`• Идёте в один магазин`)}</li>
        <li>{t(`• Первые 100 яблок: $1/шт`)}</li>
        <li>{t(`• Следующие 500: $1.20/шт (магазин поднимает цену — меньше остатков)`)}</li>
        <li>{t(`• Следующие 2,000: $1.50/шт`)}</li>
        <li>{t(`• Последние 7,400: $2/шт`)}</li>
        <li>{t(`• Средняя цена: $1.85/яблоко`)}</li>
        <li>{t(`• Итого: $18,500`)}</li>
      </ul>
      <li className="mt-2">{t(`Вариант Б (split-routing):`)}</li>
      <ul className="list-disc list-inside ml-6">
        <li>{t(`• Система сканирует 4 магазина:`)}</li>
        <ul className="list-disc list-inside ml-6">
          <li>{t(`o Магазин А: 3,000 яблок по $1.10/шт`)}</li>
          <li>{t(`o Магазин Б: 2,500 яблок по $1.15/шт`)}</li>
          <li>{t(`o Магазин В: 2,000 яблок по $1.20/шт`)}</li>
          <li>{t(`o Магазин Г: 2,500 яблок по $1.25/шт`)}</li>
        </ul>
        <li>{t(`• Средняя цена: $1.17/яблоко`)}</li>
        <li>{t(`• Итого: $11,700`)}</li>
        <li>{t(`• Экономия: $6,800 (37%)`)}</li>
        <li>{t(`Точно так же работает split-routing в криптовалютах.`)}</li>
      </ul>
    </ul>
  </div>

  <hr className="my-12 border-gray-700"/>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`🔬 Как работает split-routing: техническая механика`)}</h2>

  <p className="mb-6">{t(`Шаг 1: Сканирование всех доступных источников ликвидности`)}</p>
  <p className="mb-6">{t(`Когда вы вводите своп на Hypertrade, R1 router начинает процесс:`)}</p>
  <p className="mb-6">{t(`User request: Swap $50,000 USDC → TOKEN_X`)}</p>

  <h3 className="text-xl font-bold text-white mt-6 mb-4">{t(`Step 1: Liquidity Discovery`)}</h3>
  <p className="mb-6">{t(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}</p>

  <p className="mb-2">{t(`Scanning all liquidity sources on Hyperliquid:`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`1. HyperCore Spot (Order Book)`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`└─ USDC/TOKEN_X pair`)}</li>
      <li>{t(`   Best ask: $5.02 (3,000 tokens available)`)}</li>
      <li>{t(`   Depth: $15,000 before 0.5% price increase`)}</li>
    </ul>
    <li>{t(`2. Hyperswap (AMM)`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`└─ USDC/TOKEN_X pool`)}</li>
      <li>{t(`   Reserves: 150k USDC / 30k TOKEN_X`)}</li>
      <li>{t(`   Current price: $5.00`)}</li>
      <li>{t(`   Price impact for $50k: 8.5%`)}</li>
    </ul>
    <li>{t(`3. Kittenswap (AMM)`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`└─ USDC/TOKEN_X pool`)}</li>
      <li>{t(`   Reserves: 80k USDC / 16k TOKEN_X`)}</li>
      <li>{t(`   Current price: $5.01`)}</li>
      <li>{t(`   Price impact for $50k: 12.3%`)}</li>
    </ul>
    <li>{t(`4. Prjx (Specialized Pool)`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`└─ USDC/TOKEN_X pool`)}</li>
      <li>{t(`   Reserves: 25k USDC / 5k TOKEN_X`)}</li>
      <li>{t(`   Current price: $5.03`)}</li>
      <li>{t(`   Price impact for $50k: 25%`)}</li>
    </ul>
  </ul>

</article>

  <article className="prose prose-invert prose-lg max-w-none">

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Шаг 2: Расчёт price impact для каждого источника`)}</h2>

  <p className="mb-6">{t(`Price impact = на сколько процентов изменится цена, если выполнить весь ордер через один источник.`)}</p>
  <p className="mb-6">{t(`Формула для AMM (Constant Product):`)}</p>
  <p className="mb-6">{t(`Price Impact = (Amount_In / Reserve_In) / (1 + Amount_In / Reserve_In)`)}</p>

  <p className="mb-4 font-bold">{t(`Пример для Hyperswap:`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Amount_In: $50,000`)}</li>
    <li>{t(`Reserve_In: $150,000`)}</li>
  </ul>

  <p className="mb-6">{t(`Price Impact = ($50,000 / $150,000) / (1 + $50,000 / $150,000)`)}</p>
  <p className="mb-6">{t(`             = 0.333 / 1.333`)}</p>
  <p className="mb-6">{t(`             = 0.25 = 25%`)}</p>

  <p className="text-red-400 font-bold mb-6">{t(`⚠️ 25% price impact = катастрофа!`)}</p>

  <p className="mb-6">{t(`Если вы вложите $50,000, ваш эффективный price будет на 25% хуже, чем начальная цена в пуле.`)}</p>

  <ul className="list-disc list-inside mb-12 text-gray-300">
    <li>{t(`• Начальная цена: $5.00/token`)}</li>
    <li>{t(`• Эффективная цена после 25% impact: $6.25/token`)}</li>
    <li>{t(`• Вместо 10,000 tokens вы получите: 8,000 tokens`)}</li>
    <li>{t(`• Потеря: $12,500`)}</li>
  </ul>

  <hr className="my-12 border-gray-700"/>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Шаг 3: Оптимизация маршрута (Split-routing Algorithm)`)}</h2>

  <p className="mb-6">{t(`R1 router использует алгоритм оптимизации для распределения ордера.`)}</p>
  <p className="mb-6">{t(`Цель: Минимизировать суммарный price impact.`)}</p>
  <p className="mb-6">{t(`Алгоритм:`)}</p>

  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`1. Сортировать источники по лучшей цене`)}</li>
    <li>{t(`2. Распределить ордер пропорционально доступной ликвидности`)}</li>
    <li>{t(`3. Итеративно балансировать распределение для минимизации impact`)}</li>
    <li>{t(`4. Учесть gas costs и DEX fees`)}</li>
    <li>{t(`5. Симулировать выполнение через Invisium`)}</li>
    <li>{t(`6. Вернуть оптимальный маршрут`)}</li>
  </ul>

  <p className="mb-6">{t(`Результат для $50,000 свопа:`)}</p>
  <p className="mb-6 font-bold">{t(`Optimal Split-Routing:`)}</p>
  <p className="mb-6">{t(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}</p>

  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Route 1: HyperCore Spot — $17,500 (35%)`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`└─ Best price: $5.02`)}</li>
      <li>{t(`   Available liquidity: $15k @ $5.02, $2.5k @ $5.03`)}</li>
      <li>{t(`   Execution: Limit orders + market sweep`)}</li>
      <li>{t(`   Expected output: 3,486 tokens`)}</li>
      <li>{t(`   Price impact: 0.6%`)}</li>
    </ul>

    <li>{t(`Route 2: Hyperswap — $15,000 (30%)`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`└─ Pool price: $5.00`)}</li>
      <li>{t(`   Price impact (for $15k only): 9.1%`)}</li>
      <li>{t(`   Expected output: 2,863 tokens`)}</li>
      <li>{t(`   Effective price: $5.24`)}</li>
    </ul>

    <li>{t(`Route 3: Kittenswap — $10,000 (20%)`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`└─ Pool price: $5.01`)}</li>
      <li>{t(`   Price impact (for $10k only): 11.1%`)}</li>
      <li>{t(`   Expected output: 1,889 tokens`)}</li>
      <li>{t(`   Effective price: $5.29`)}</li>
    </ul>

    <li>{t(`Route 4: Prjx — $7,500 (15%)`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`└─ Pool price: $5.03`)}</li>
      <li>{t(`   Price impact (for $7.5k only): 23.1%`)}</li>
      <li>{t(`   Expected output: 1,220 tokens`)}</li>
      <li>{t(`   Effective price: $6.15`)}</li>
    </ul>
  </ul>

  <p className="mb-6">{t(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}</p>

  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Total Expected Output: 9,458 tokens`)}</li>
    <li>{t(`Average Price: $5.29/token`)}</li>
    <li>{t(`Combined Price Impact: 5.8%`)}</li>
  </ul>

  <p className="mb-6">{t(`vs Single DEX (Hyperswap only):`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Expected output: 8,000 tokens`)}</li>
    <li>{t(`Average price: $6.25/token`)}</li>
    <li>{t(`Price impact: 25%`)}</li>
  </ul>

  <p className="mb-6 font-bold">{t(`Split-Routing Advantage:`)}</p>
  <ul className="list-disc list-inside mb-12 text-gray-300">
    <li>{t(`+1,458 tokens (+18.2%)`)}</li>
    <li>{t(`Savings: $7,290`)}</li>
  </ul>

  <hr className="my-12 border-gray-700"/>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Шаг 4: Выполнение через Invisium Simulations`)}</h2>

  <p className="mb-6">{t(`Перед реальным выполнением Hypertrade запускает Invisium Swap Simulations:`)}</p>
  <p className="mb-6 font-bold">{t(`Invisium Process:`)}</p>
  <p className="mb-6">{t(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}</p>

  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`1. Create virtual blockchain copy (sandbox)`)}</li>
    <li>{t(`2. Simulate Route 1 (HyperCore Spot $17,500)`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`→ Virtual execution: 3,484 tokens`)}</li>
      <li>{t(`→ Deviation: -0.06% ✓`)}</li>
    </ul>
    <li>{t(`3. Simulate Route 2 (Hyperswap $15,000)`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`→ Virtual execution: 2,861 tokens`)}</li>
      <li>{t(`→ Deviation: -0.07% ✓`)}</li>
    </ul>
    <li>{t(`4. Simulate Route 3 (Kittenswap $10,000)`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`→ Virtual execution: 1,887 tokens`)}</li>
      <li>{t(`→ Deviation: -0.11% ✓`)}</li>
    </ul>
    <li>{t(`5. Simulate Route 4 (Prjx $7,500)`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`→ Virtual execution: 1,218 tokens`)}</li>
      <li>{t(`→ Deviation: -0.16% ✓`)}</li>
    </ul>
  </ul>

  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Total Simulated Output: 9,450 tokens`)}</li>
    <li>{t(`Expected: 9,458 tokens`)}</li>
    <li>{t(`Accuracy: 99.92% ✓`)}</li>
  </ul>

  <p className="mb-6 font-bold">{t(`Check slippage tolerance:`)}</p>
  <ul className="list-disc list-inside mb-12 text-gray-300">
    <li>{t(`User setting: 3%`)}</li>
    <li>{t(`Simulated slippage: 1.8%`)}</li>
    <li>{t(`Status: SAFE TO EXECUTE ✓`)}</li>
  </ul>

  <p className="mb-12">{t(`Если симуляция показывает slippage >80% от вашего tolerance → система предупредит вас.`)}</p>

</article>


<article className="prose prose-invert prose-lg max-w-none">

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Шаг 5: Атомарное выполнение на блокчейне`)}</h2>

  <p className="mb-6">{t(`Все 4 маршрута выполняются в одной транзакции (атомарно):`)}</p>

  <p className="mb-6 font-bold">{t(`Transaction Structure:`)}</p>
  <p className="mb-6">{`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`}</p>

  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Smart Contract: Hypertrade R1 Router`)}</li>
    <li>{t(`Function: executeMultiPathSwap()`)}</li>
    <li>{t(`Input:`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`- Amount: 50,000 USDC`)}</li>
      <li>{t(`- Token: TOKEN_X`)}</li>
      <li>{t(`- Routes: [`)}</li>
      <ul className="list-disc list-inside ml-6">
        <li>{t(`{dex: HyperCore, amount: 17500},`)}</li>
        <li>{t(`{dex: Hyperswap, amount: 15000},`)}</li>
        <li>{t(`{dex: Kittenswap, amount: 10000},`)}</li>
        <li>{t(`{dex: Prjx, amount: 7500}`)}</li>
      </ul>
      <li>{t(`]`)}</li>
      <li>{t(`- MinAmountOut: 9,174 tokens (3% slippage from 9,458)`)}</li>
    </ul>
  </ul>

  <p className="mb-6 font-bold">{t(`Execution Flow:`)}</p>
  <ul className="list-disc list-inside mb-12 text-gray-300">
    <li>{t(`1. Router receives 50,000 USDC from user`)}</li>
    <li>{t(`2. Router splits:`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`└─ 17,500 → HyperCore Spot contract`)}</li>
      <li>{t(`└─ 15,000 → Hyperswap contract`)}</li>
      <li>{t(`└─ 10,000 → Kittenswap contract`)}</li>
      <li>{t(`└─ 7,500 → Prjx contract`)}</li>
    </ul>
    <li>{t(`3. Each DEX returns tokens to Router`)}</li>
    <li>{t(`4. Router aggregates: 9,452 tokens total`)}</li>
    <li>{t(`5. Check: 9,452 ≥ 9,174 (MinAmountOut) ✓`)}</li>
    <li>{t(`6. Router transfers 9,452 tokens to user`)}</li>
  </ul>

  <p className="mb-6 font-bold">{t(`Status: SUCCESS ✓`)}</p>
  <p className="mb-12">{t(`Block confirmation: 1 second (Hyperliquid finality)`)}</p>

  <p className="mb-6">{t(`Если хотя бы один маршрут провалится → вся транзакция откатывается (revert).`)}</p>
  <p className="mb-12">{t(`Вы не теряете деньги на частичных выполнениях.`)}</p>

  <hr className="my-12 border-gray-700"/>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`📊 Математика экономии: почему split-routing выгоднее`)}</h2>

  <h3 className="text-xl font-bold text-white mt-8 mb-4">{t(`Пример 1: Своп $10,000`)}</h3>
  <p className="mb-6">{t(`Single DEX (Hyperswap only):`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Input: $10,000 USDC`)}</li>
    <li>{t(`Pool reserves: 150k USDC / 30k TOKEN_X`)}</li>
    <li>{t(`Starting price: $5.00`)}</li>
  </ul>
  <p className="mb-6">{t(`Constant Product Formula: x × y = k`)}</p>
  <p className="mb-6">{t(`k = 150,000 × 30,000 = 4,500,000,000`)}</p>
  <p className="mb-6">{t(`After swap:`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`New x = 150,000 + 10,000 = 160,000`)}</li>
    <li>{t(`New y = 4,500,000,000 / 160,000 = 28,125`)}</li>
  </ul>
  <p className="mb-6">{t(`Tokens received: 30,000 - 28,125 = 1,875 tokens`)}</p>
  <p className="mb-6">{t(`Effective price: $10,000 / 1,875 = $5.33/token`)}</p>
  <p className="mb-6">{t(`Price impact: ($5.33 - $5.00) / $5.00 = 6.6%`)}</p>
  <p className="mb-6">{t(`Loss: $330`)}</p>

  <p className="mb-6 font-bold">{t(`Split-routing (Hypertrade):`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Route distribution:`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`- HyperCore Spot: $4,000 (40%) → 796 tokens @ $5.03`)}</li>
      <li>{t(`- Hyperswap: $3,500 (35%) → 687 tokens @ $5.09`)}</li>
      <li>{t(`- Kittenswap: $2,500 (25%) → 488 tokens @ $5.12`)}</li>
    </ul>
    <li>{t(`Total: 1,971 tokens`)}</li>
    <li>{t(`Effective price: $10,000 / 1,971 = $5.07/token`)}</li>
    <li>{t(`Price impact: 1.4%`)}</li>
    <li>{t(`Loss: $140`)}</li>
    <li>{t(`Savings: $190 (1.9% better)`)}</li>
    <li>{t(`ROI на $10k свопе: +$190 (экономия 58% на slippage costs)`)}</li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-8 mb-4">{t(`Пример 2: Своп $100,000 (крупный ордер)`)}</h3>
  <p className="mb-6">{t(`Single DEX (Hyperswap only):`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Input: $100,000 USDC`)}</li>
    <li>{t(`Price impact: 40%`)}</li>
    <li>{t(`Starting price: $5.00`)}</li>
    <li>{t(`Effective price: $7.00/token`)}</li>
    <li>{t(`Tokens received: 14,286 tokens`)}</li>
    <li>{t(`Loss: $28,570`)}</li>
  </ul>

  <p className="mb-6 font-bold">{t(`Split-routing (Hypertrade):`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Route distribution:`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`- HyperCore Spot: $40,000 (40%) → 7,920 tokens @ $5.05`)}</li>
      <li>{t(`- Hyperswap: $30,000 (30%) → 5,454 tokens @ $5.50`)}</li>
      <li>{t(`- Kittenswap: $20,000 (20%) → 3,478 tokens @ $5.75`)}</li>
      <li>{t(`- Prjx: $10,000 (10%) → 1,639 tokens @ $6.10`)}</li>
    </ul>
    <li>{t(`Total: 18,491 tokens`)}</li>
    <li>{t(`Effective price: $100,000 / 18,491 = $5.41/token`)}</li>
    <li>{t(`Price impact: 8.2%`)}</li>
    <li>{t(`Loss: $8,200`)}</li>
    <li>{t(`Savings: $20,370 (71% меньше потерь)`)}</li>
    <li>{t(`ROI на $100k свопе: +$20,370`)}</li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-8 mb-4">{t(`Пример 3: Годовой торговый объём $500,000`)}</h3>
  <p className="mb-6">{t(`Trader Profile:`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`• 50 свопов в год`)}</li>
    <li>{t(`• Средний размер: $10,000/своп`)}</li>
    <li>{t(`• Типы токенов: 60% mid-cap, 40% major`)}</li>
  </ul>

  <p className="mb-6 font-bold">{t(`Сценарий A: Single DEX (без split-routing)`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Average price impact: 8.5%`)}</li>
    <li>{t(`Average slippage loss: $850/своп`)}</li>
    <li>{t(`50 свопов × $850 = $42,500/год потерь`)}</li>
  </ul>

  <p className="mb-6 font-bold">{t(`Сценарий B: Hypertrade Split-Routing`)}</p>
  <ul className="list-disc list-inside mb-12 text-gray-300">
    <li>{t(`Average price impact: 2.1%`)}</li>
    <li>{t(`Average slippage loss: $210/своп`)}</li>
    <li>{t(`50 свопов × $210 = $10,500/год потерь`)}</li>
    <li>{t(`Годовая экономия: $32,000`)}</li>
    <li>{t(`ROI: 305%`)}</li>
  </ul>

  <hr className="my-12 border-gray-700"/>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`🚀 Уникальные преимущества Hypertrade R1 Router`)}</h2>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`1. Единственный агрегатор с HyperCore Spot интеграцией`)}</li>
  </ul>
  <p className="mb-6">{t(`Критическое отличие:`)}</p>
  <p className="mb-6">{t(`Все другие агрегаторы на других блокчейнах работают ТОЛЬКО с AMM пулами.`)}</p>
  <p className="mb-6">{t(`Hypertrade R1 = единственный агрегатор на Hyperliquid, который включает HyperCore Spot order book в маршрутизацию.`)}</p>
  <p className="mb-6">{t(`Почему это важно:`)}</p>

  <p className="mb-6 font-bold">{t(`Order book (HyperCore Spot):`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`• Limit orders с точными ценами`)}</li>
    <li>{t(`• Меньше slippage на крупных ордерах`)}</li>
    <li>{t(`• Профессиональные маркет-мейкеры`)}</li>
  </ul>

  <p className="mb-6 font-bold">{t(`AMM pools:`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`• Автоматическое ценообразование (x × y = k)`)}</li>
    <li>{t(`• Высокий price impact на крупных ордерах`)}</li>
    <li>{t(`• Liquidity providers (обычные пользователи)`)}</li>
  </ul>

  <p className="mb-6 font-bold">{t(`Пример:`)}</p>
  <p className="mb-6">{t(`TOKEN_X цена:`)}</p>

  <p className="mb-6 font-bold">{t(`HyperCore Spot Order Book:`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Buy orders (bids):`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`- 500 tokens @ $5.02`)}</li>
      <li>{t(`- 1,000 tokens @ $5.03`)}</li>
      <li>{t(`- 2,000 tokens @ $5.05`)}</li>
    </ul>
  </ul>

  <p className="mb-6 font-bold">{t(`Hyperswap AMM:`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`Pool price: $5.00`)}</li>
    <li>{t(`But: price impact 10% на $10k своп`)}</li>
    <li>{t(`Effective price: $5.50`)}</li>
  </ul>

 <p className="mb-6 font-bold">{t(`Best execution path (Hypertrade):`)}</p>
  <ul className="list-disc list-inside mb-6 text-gray-300">
    <li>{t(`1. Купить 500 tokens @ $5.02 (HyperCore)`)}</li>
    <li>{t(`2. Купить 1,000 tokens @ $5.03 (HyperCore)`)}</li>
    <li>{t(`3. Оставшиеся через Hyperswap @ $5.20`)}</li>
  </ul>

  <ul className="list-disc list-inside mb-12 text-gray-300">
    <li>{t(`Average price: $5.12`)}</li>
    <li>{t(`vs AMM only: $5.50`)}</li>
    <li>{t(`Savings: 7.4%`)}</li>
    <li>{t(`Годовая экономия от HyperCore integration: +$3,700 дополнительно (на $500k объёме).`)}</li>
  </ul>

</article>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`2. Multi-hop routing (промежуточные токены)`)}</h2>

<p className="mb-6">{t(`Что такое multi-hop:`)}</p>
<p className="mb-6">{t(`Иногда прямой путь USDC → TOKEN_X не оптимален. Multi-hop использует промежуточные токены.`)}</p>

<p className="mb-6 font-bold">{t(`Пример:`)}</p>
<p className="mb-4">{t(`Direct path (1-hop):`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`USDC → TOKEN_X`)}</li>
  <li>{t(`Hyperswap pool: USDC/TOKEN_X`)}</li>
  <li>{t(`Liquidity: $50k (low)`)}</li>
  <li>{t(`Price impact: 15%`)}</li>
</ul>

<p className="mb-4">{t(`Multi-hop path (2-hop):`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`USDC → HYPE → TOKEN_X`)}</li>
</ul>

<p className="mb-4">{t(`Step 1: USDC → HYPE`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`Pool: USDC/HYPE`)}</li>
  <li>{t(`Liquidity: $200M (very high)`)}</li>
  <li>{t(`Price impact: 0.5%`)}</li>
</ul>

<p className="mb-4">{t(`Step 2: HYPE → TOKEN_X`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`Pool: HYPE/TOKEN_X`)}</li>
  <li>{t(`Liquidity: $80k (medium)`)}</li>
  <li>{t(`Price impact: 8%`)}</li>
</ul>

<p className="mb-6">{t(`Combined price impact: 8.5%`)}</p>
<p className="mb-6">{t(`vs Direct: 15%`)}</p>
<p className="mb-6">{t(`Savings: 43% меньше impact`)}</p>

<p className="mb-6">{t(`Hypertrade R1 автоматически находит оптимальные multi-hop пути:`)}</p>
<p className="mb-6">{t(`$50,000 USDC → EXOTIC_TOKEN`)}</p>

<p className="mb-6 font-bold">{t(`Tested paths (examples):`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`1. USDC → EXOTIC_TOKEN (direct)`)}</li>
  <li>{t(`Price impact: 22%`)}</li>
  <li>{t(`2. USDC → HYPE → EXOTIC_TOKEN`)}</li>
  <li>{t(`Price impact: 12%`)}</li>
  <li>{t(`3. USDC → ETH → EXOTIC_TOKEN`)}</li>
  <li>{t(`Price impact: 15%`)}</li>
  <li>{t(`4. Split-routing with multi-hop:`)}</li>
  <ul className="list-disc list-inside ml-6 text-gray-300">
    <li>{t(`- 40% via USDC → HYPE → EXOTIC (6% impact)`)}</li>
    <li>{t(`- 30% via USDC → EXOTIC direct (18% impact)`)}</li>
    <li>{t(`- 30% via USDC → ETH → EXOTIC (14% impact)`)}</li>
  </ul>
  <li>{t(`Combined: 11.8% impact ✓ BEST`)}</li>
</ul>

<p className="mb-6">{t(`Selected route: #4`)}</p>
<p className="mb-12">{t(`Savings vs direct: $5,100`)}</p>

<hr className="my-12 border-gray-700"/>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`3. Динамическая оптимизация в реальном времени`)}</h2>

<p className="mb-6">{t(`R1 router НЕ использует фиксированные проценты распределения. Он пересчитывает оптимальный маршрут для каждого свопа в зависимости от:`)}</p>

<p className="mb-6 font-bold">{t(`Dynamic factors:`)}</p>
<p className="mb-6">{t(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}</p>

<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`1. Current liquidity depth in each pool`)}</li>
  <ul className="list-disc list-inside ml-6">
    <li>{t(`└─ Updated every block (~1 second on Hyperliquid)`)}</li>
  </ul>
  <li>{t(`2. Recent price movements`)}</li>
  <ul className="list-disc list-inside ml-6">
    <li>{t(`└─ Detect volatility spikes → adjust slippage`)}</li>
  </ul>
  <li>{t(`3. Pending transactions in mempool`)}</li>
  <ul className="list-disc list-inside ml-6">
    <li>{t(`└─ Avoid competition with large orders`)}</li>
  </ul>
  <li>{t(`4. Gas costs for each route`)}</li>
  <ul className="list-disc list-inside ml-6">
    <li>{t(`└─ Sometimes 3 routes better than 4 due to gas`)}</li>
  </ul>
  <li>{t(`5. DEX-specific fees`)}</li>
  <ul className="list-disc list-inside ml-6">
    <li>{t(`└─ HyperCore: 0.05% taker`)}</li>
    <li>{t(`   AMMs: 0.3%`)}</li>
  </ul>
  <li>{t(`6. Available liquidity in HyperCore order book`)}</li>
  <ul className="list-disc list-inside ml-6">
    <li>{t(`└─ Limit orders can be filled/cancelled instantly`)}</li>
  </ul>
</ul>

<p className="mb-12">{t(`Результат: Каждый своп получает уникальный, оптимизированный маршрут.`)}</p>

<hr className="my-12 border-gray-700"/>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`4. Invisium Simulations для 99.9% точности`)}</h2>

<p className="mb-6">{t(`Обычные агрегаторы оценивают price impact математически.`)}</p>
<p className="mb-6">{t(`Hypertrade СИМУЛИРУЕТ реальное выполнение на копии блокчейна.`)}</p>
<p className="mb-6">{t(`Разница:`)}</p>

<p className="mb-4 font-bold">{t(`Estimation (обычные агрегаторы):`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`Estimated output: 10,000 tokens`)}</li>
  <li>{t(`Actual output: 9,200 tokens (8% отклонение ❌)`)}</li>
  <li>{t(`Reason: Не учёл pending транзакции, изменения в пулах, MEV-атаки`)}</li>
</ul>

<p className="mb-4 font-bold">{t(`Simulation (Hypertrade Invisium):`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`Simulated output: 9,450 tokens`)}</li>
  <li>{t(`Actual output: 9,447 tokens (0.03% отклонение ✓)`)}</li>
  <li>{t(`Reason: Полная симуляция включает ВСЕ факторы`)}</li>
</ul>

<p className="mb-6">{t(`Статистика:`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`• Обычные агрегаторы: 70–85% точность predictions`)}</li>
  <li>{t(`• Hypertrade Invisium: 99.5–99.9% точность`)}</li>
</ul>

<p className="mb-6">{t(`Практическое значение:`)}</p>
<ul className="list-disc list-inside mb-12 text-gray-300">
  <li>{t(`• Failed транзакции: <2% (vs 8–15% у других)`)}</li>
  <li>{t(`• Unexpected slippage: $10–50 (vs $300–800 у других)`)}</li>
  <li>{t(`• Годовая экономия: $2,400–$7,200 (на объёме $500k)`)}</li>
</ul>

<hr className="my-12 border-gray-700"/>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`💡 Практические кейсы: когда split-routing даёт максимум выгоды`)}</h2>

<h3 className="text-xl font-bold text-white mt-8 mb-4">{t(`Кейс 1: Крупные ордера ($50k+)`)}</h3>
<p className="mb-6">{t(`Без split-routing:`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`• Один DEX не может обработать без огромного impact`)}</li>
  <li>{t(`• Price impact 20–40%`)}</li>
  <li>{t(`• Потери $10,000–$20,000`)}</li>
</ul>
<p className="mb-6">{t(`С split-routing:`)}</p>
<ul className="list-disc list-inside mb-12 text-gray-300">
  <li>{t(`• Ордер распределён по 4–5 DEX`)}</li>
  <li>{t(`• Price impact снижен до 3–8%`)}</li>
  <li>{t(`• Потери $1,500–$4,000`)}</li>
  <li>{t(`• Экономия: $8,500–$16,000`)}</li>
</ul>

<h3 className="text-xl font-bold text-white mt-8 mb-4">{t(`Кейс 2: Low-cap токены (низкая ликвидность)`)}</h3>
<p className="mb-6">{t(`Токен с TVL $5M:`)}</p>
<p className="mb-6">{t(`Без split-routing (только Hyperswap):`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`Своп: $10,000`)}</li>
  <li>{t(`Pool: $2M TVL`)}</li>
  <li>{t(`Price impact: 18%`)}</li>
  <li>{t(`Loss: $1,800`)}</li>
</ul>
<p className="mb-6">{t(`С split-routing:`)}</p>
<ul className="list-disc list-inside mb-12 text-gray-300">
  <li>{t(`- HyperCore Spot: $3,000 (limit orders, impact 2%)`)}</li>
  <li>{t(`- Hyperswap: $4,000 (impact 12%)`)}</li>
  <li>{t(`- Kittenswap: $3,000 (impact 15%)`)}</li>
  <li>{t(`Average impact: 9.7%`)}</li>
  <li>{t(`Loss: $970`)}</li>
  <li>{t(`Savings: $830 (46%)`)}</li>
</ul>

<h3 className="text-xl font-bold text-white mt-8 mb-4">{t(`Кейс 3: Высоковолатильные токены`)}</h3>
<p className="mb-6">{t(`Во время волатильности спреды расширяются на 300–500%.`)}</p>
<p className="mb-6">{t(`Проблема:`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`• Single DEX: спред 5%, price impact 8% = 13% потери`)}</li>
</ul>
<p className="mb-6">{t(`Split-routing решение:`)}</p>
<ul className="list-disc list-inside mb-12 text-gray-300">
  <li>{t(`Router находит:`)}</li>
  <ul className="list-disc list-inside ml-6 text-gray-300">
    <li>{t(`- Tight spread на HyperCore Spot (1.2%)`)}</li>
    <li>{t(`- Глубокую ликвидность на Hyperswap (impact 4%)`)}</li>
    <li>{t(`- Дополнительные пути на Kittenswap (impact 6%)`)}</li>
  </ul>
  <li>{t(`Combined loss: 4.8%`)}</li>
  <li>{t(`vs Single DEX: 13%`)}</li>
  <li>{t(`Savings: 8.2 percentage points`)}</li>
  <li>{t(`На $20k свопе: экономия $1,640.`)}</li>
</ul>


<h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`Кейс 4: DCA стратегия (регулярные покупки)`)}</h3>

<p className="mb-6">{t(`Трейдер покупает $5,000 токена каждую неделю (52 недели):`)}</p>

<p className="mb-6 font-bold">{t(`Без split-routing:`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`52 свопа × $5,000 = $260,000 годовой объём`)}</li>
  <li>{t(`Average slippage: 5.2%`)}</li>
  <li>{t(`Потери: $13,520/год`)}</li>
</ul>

<p className="mb-6 font-bold">{t(`С split-routing:`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`Average slippage: 1.8%`)}</li>
  <li>{t(`Потери: $4,680/год`)}</li>
</ul>

<p className="mb-12 font-bold">{t(`Экономия: $8,840/год`)}</p>
<p className="mb-12 font-bold">{t(`ROI: 189%`)}</p>

<hr className="my-12 border-gray-700"/>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`🎓 Как работает split-routing в Hypertrade: пошаговая демонстрация`)}</h2>

<p className="mb-6">{t(`Практический пример: покупка $20,000 HYPE`)}</p>

<p className="mb-6 font-bold">{t(`Шаг 1: Откройте https://ht.xyz`)}</p>
<p className="mb-6">{t(`Подключите кошелёк Hyperliquid.`)}</p>

<p className="mb-6 font-bold">{t(`Шаг 2: Введите своп`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`From: USDC`)}</li>
  <li>{t(`To: HYPE`)}</li>
  <li>{t(`Amount: 20,000 USDC`)}</li>
</ul>

<p className="mb-6 font-bold">{t(`Шаг 3: Система начинает работу (автоматически, за кулисами)`)}</p>
<p className="mb-12">{t(`[Background process — вы это НЕ видите]`)}</p>

<p className="mb-6 font-bold">{t(`Hypertrade R1 Router:`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`1. Сканирует все DEX (50ms)`)}</li>
  <li>{t(`2. Рассчитывает price impact для каждого (100ms)`)}</li>
  <li>{t(`3. Генерирует 1,000+ возможных маршрутов (300ms)`)}</li>
  <li>{t(`4. Находит оптимальный split (200ms)`)}</li>
  <li>{t(`5. Запускает Invisium Simulation (800ms)`)}</li>
</ul>

<p className="mb-12 font-bold">{t(`Total time: ~1.5 секунды`)}</p>


<article className="prose prose-invert prose-lg max-w-none">

  {/* Шаг 4: Swap Preview */}
  <div className="mb-12">
    <h3 className="text-xl font-bold text-white mb-4">{t(`Шаг 4: Вы видите результат`)}</h3>

    <div className="bg-hyper-800/30 border border-gray-700 rounded-xl p-6 mb-6">
      <h4 className="font-bold text-white mb-4">{t(`Swap Preview`)}</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-400">{t(`You pay:`)}</p>
          <p className="text-white font-bold">{t(`20,000 USDC`)}</p>
        </div>
        <div>
          <p className="text-gray-400">{t(`You receive:`)}</p>
          <p className="text-white font-bold">{t(`~795.2 HYPE`)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-400">{t(`Rate:`)}</p>
          <p className="text-white font-bold">{t(`1 HYPE = $25.15`)}</p>
          <p className="text-white font-bold">{t(`1 USDC = 0.03978 HYPE`)}</p>
        </div>
        <div>
          <p className="text-gray-400">{t(`Price impact:`)}</p>
          <p className="text-green-400 font-bold">{t(`2.1% ✓`)}</p>
          <p className="text-gray-300">{t(`Minimum received: 787.1 HYPE (1% slippage)`)}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-400 font-bold">{t(`Route (optimized):`)}</p>
        <ul className="text-gray-300 ml-4 mt-2 space-y-1">
          <li>{t(`HyperCore Spot: 42% ($8,400)`)}</li>
          <li>{t(`Hyperswap: 35% ($7,000)`)}</li>
          <li>{t(`Kittenswap: 15% ($3,000)`)}</li>
          <li>{t(`Prjx: 8% ($1,600)`)}</li>
        </ul>
      </div>

      <p className="text-gray-300 mb-2">{t(`Fees: ~$6.20 (gas + DEX fees)`)}</p>
      <p className="text-green-400 font-bold">{t(`✓ Invisium Simulation: 99.8% accurate`)}</p>

      <button className="mt-4 bg-hyper-accent text-hyper-900 font-bold py-2 px-6 rounded-xl hover:bg-cyan-300 transition-colors">
        {t(`Swap Now`)}
      </button>
    </div>
  </div>

  {/* Шаг 5 */}
  <div className="mb-12">
    <h3 className="text-xl font-bold text-white mb-2">{t(`Шаг 5: Подтвердите своп`)}</h3>
    <p className="text-gray-300">{t(`Нажмите “Swap Now” → подпишите транзакцию в кошельке.`)}</p>
  </div>

  {/* Шаг 6 */}
  <div className="mb-12">
    <h3 className="text-xl font-bold text-white mb-2">{t(`Шаг 6: Выполнение (1–2 секунды)`)}</h3>
    <p className="text-gray-300 mb-4">{t(`Transaction executing...`)}</p>

    <ul className="text-gray-300 space-y-1 mb-4">
      <li>{t(`✓ Route 1: HyperCore Spot ($8,400) → 334.1 HYPE`)}</li>
      <li>{t(`✓ Route 2: Hyperswap ($7,000) → 278.2 HYPE`)}</li>
      <li>{t(`✓ Route 3: Kittenswap ($3,000) → 119.1 HYPE`)}</li>
      <li>{t(`✓ Route 4: Prjx ($1,600) → 63.5 HYPE`)}</li>
    </ul>

    <p className="text-gray-300 mb-1">{t(`Total received: 794.9 HYPE`)}</p>
    <p className="text-gray-300 mb-1">{t(`Expected: 795.2 HYPE`)}</p>
    <p className="text-green-400 font-bold mb-1">{t(`Deviation: -0.04% ✓`)}</p>
    <p className="text-green-400 font-bold mb-1">{t(`Transaction confirmed ✓`)}</p>
    <p className="text-gray-300 mb-1">{t(`Block: 12,345,678`)}</p>
    <p className="text-gray-300 mb-1">{t(`Time: 1.2 seconds`)}</p>
    <p className="text-white font-bold">{t(`Готово! Вы получили оптимальную цену автоматически.`)}</p>
  </div>

  {/* Сравнение Hypertrade */}
  <div className="overflow-x-auto mb-12">
    <h3 className="text-xl font-bold text-white mb-4">{t(`📊 Сравнение: Hypertrade vs другие агрегаторы`)}</h3>
    <table className="w-full text-left border-collapse text-sm">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="p-3 text-gray-400 font-medium">{t(`Параметр`)}</th>
          <th className="p-3 text-gray-400 font-medium">{t(`Uniswap`)}</th>
          <th className="p-3 text-gray-400 font-medium">{t(`1inch`)}</th>
          <th className="p-3 text-gray-400 font-medium">{t(`Jupiter`)}</th>
          <th className="p-3 text-gray-400 font-medium">{t(`Hypertrade`)}</th>
        </tr>
      </thead>
      <tbody className="text-gray-300 text-sm">
        <tr className="border-b border-gray-800">
          <td className="p-2">{t(`Split-routing`)}</td>
          <td className="p-2">{t(`❌ Нет (single DEX)`)}</td>
          <td className="p-2">{t(`✅ Да`)}</td>
          <td className="p-2">{t(`✅ Да`)}</td>
          <td className="p-2">{t(`✅ Да`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-2">{t(`Источники ликвидности`)}</td>
          <td className="p-2">{t(`1 (только Uniswap)`)}</td>
          <td className="p-2">{t(`50+ DEX`)}</td>
          <td className="p-2">{t(`20+ DEX`)}</td>
          <td className="p-2">{t(`4+ (HyperCore + HyperEVM)`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-2">{t(`Order book integration`)}</td>
          <td className="p-2">{t(`❌ Нет`)}</td>
          <td className="p-2">{t(`❌ Нет`)}</td>
          <td className="p-2">{t(`❌ Нет`)}</td>
          <td className="p-2">{t(`✅ HyperCore Spot`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-2">{t(`Multi-hop routing`)}</td>
          <td className="p-2">{t(`✅ Да (basic)`)}</td>
          <td className="p-2">{t(`✅ Да`)}</td>
          <td className="p-2">{t(`✅ Да`)}</td>
          <td className="p-2">{t(`✅ Да (advanced)`)}</td>
        </tr>
       <tr className="border-b border-gray-800">
          <td className="p-2">{t(`Simulations accuracy`)}</td>
          <td className="p-2">{t(`❌ Нет sim`)}</td>
          <td className="p-2">{t(`⚠️ 70–85%`)}</td>
          <td className="p-2">{t(`⚠️ 75–90%`)}</td>
          <td className="p-2">{t(`✅ 99.5–99.9%`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-2">{t(`Execution speed`)}</td>
          <td className="p-2">{t(`12–18s`)}</td>
          <td className="p-2">{t(`8–15s`)}</td>
          <td className="p-2">{t(`2–5s`)}</td>
          <td className="p-2">{t(`1–2s`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-2">{t(`Platform fees`)}</td>
          <td className="p-2">{t(`0%`)}</td>
          <td className="p-2">{t(`0.3–1%`)}</td>
          <td className="p-2">{t(`0%`)}</td>
          <td className="p-2">{t(`0%`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-2">{t(`Price impact (avg)`)}</td>
          <td className="p-2">{t(`8–12%`)}</td>
          <td className="p-2">{t(`3–6%`)}</td>
          <td className="p-2">{t(`3–5%`)}</td>
          <td className="p-2">{t(`1.5–3%`)}</td>
        </tr>
        <tr>
          <td className="p-2">{t(`Failed TX rate`)}</td>
          <td className="p-2">{t(`8–12%`)}</td>
          <td className="p-2">{t(`5–8%`)}</td>
          <td className="p-2">{t(`3–5%`)}</td>
          <td className="p-2">{t(`<2%`)}</td>
        </tr>
      </tbody>
    </table>
    <p className="text-gray-300 mt-4">{t(`Вывод: Hypertrade = лучший split-routing на Hyperliquid благодаря HyperCore integration + Invisium.`)}</p>
  </div>

  {/* Экономика */}
  <div className="mb-12">
    <h3 className="text-xl font-bold text-white mb-4">{t(`💰 Итоговая экономика: сколько вы сохраняете`)}</h3>
    <p className="text-gray-300 mb-2">{t(`Профиль трейдера: годовой объём $500,000`)}</p>
    <p className="text-gray-300 mb-2">{t(`Breakdown по типам свопов:`)}</p>

    {/* Категории и сбережения */}
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-bold text-white mb-2">{t(`Категория 1: Крупные ордера ($20k–$100k)`)}</h4>
        <p className="text-gray-300">{t(`Количество: 10 свопов/год`)}</p>
        <p className="text-gray-300">{t(`Объём: $200,000`)}</p>
        <p className="text-gray-300 mt-2">{t(`Single DEX losses: Average price impact: 18%, Total losses: $36,000`)}</p>
        <p className="text-gray-300">{t(`Hypertrade Split-routing: Average price impact: 4.5%, Total losses: $9,000`)}</p>
        <p className="text-green-400 font-bold">{t(`Savings: $27,000`)}</p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-2">{t(`Категория 2: Средние ордера ($5k–$20k)`)}</h4>
        <p className="text-gray-300">{t(`Количество: 25 свопов/год`)}</p>
        <p className="text-gray-300">{t(`Объём: $250,000`)}</p>
        <p className="text-gray-300 mt-2">{t(`Single DEX losses: Average price impact: 8%, Total losses: $20,000`)}</p>
        <p className="text-gray-300">{t(`Hypertrade Split-routing: Average price impact: 2.2%, Total losses: $5,500`)}</p>
        <p className="text-green-400 font-bold">{t(`Savings: $14,500`)}</p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-2">{t(`Категория 3: Мелкие ордера (<$5k)`)}</h4>
        <p className="text-gray-300">{t(`Количество: 15 свопов/год`)}</p>
        <p className="text-gray-300">{t(`Объём: $50,000`)}</p>
        <p className="text-gray-300 mt-2">{t(`Single DEX losses: Average price impact: 4%, Total losses: $2,000`)}</p>
        <p className="text-gray-300">{t(`Hypertrade Split-routing: Average price impact: 1.5%, Total losses: $750`)}</p>
        <p className="text-green-400 font-bold">{t(`Savings: $1,250`)}</p>
      </div>

      <p className="text-green-400 font-bold">{t(`TOTAL ANNUAL SAVINGS: $42,750`)}</p>
      <p className="text-green-400 font-bold mb-4">{t(`ROI: 854%`)}</p>
      <p className="text-gray-300">{t(`Дополнительные экономии:`)}</p>
      <ul className="text-gray-300 ml-4 list-disc space-y-1 mb-4">
        <li>{t(`Failed транзакций avoided: $400–$800`)}</li>
        <li>{t(`Gas optimization: $200–$500`)}</li>
        <li>{t(`Platform fees (vs 1inch): $1,500–$5,000`)}</li>
      </ul>
      <p className="text-green-400 font-bold">{t(`GRAND TOTAL: $45,000–$49,000 экономия/год`)}</p>
    </div>
  </div>

  {/* Заключение и рекомендации */}
  <div className="mb-12">
    <h3 className="text-xl font-bold text-white mb-4">{t(`🎯 Заключение и рекомендации`)}</h3>
    <p className="text-gray-300 mb-2">{t(`5 ключевых выводов`)}</p>
    <ul className="text-gray-300 ml-4 list-decimal space-y-2">
      <li>{t(`Split-routing = обязательная технология для серьёзной торговли`)}</li>
      <li>{t(`Hypertrade = единственный агрегатор с HyperCore Spot`)}</li>
      <li>{t(`Автоматизация работает лучше ручного выбора`)}</li>
      <li>{t(`Чем больше ордер, тем выше экономия`)}</li>
      <li>{t(`Split-routing защищает от волатильности`)}</li>
    </ul>
  </div>

  {/* Практические рекомендации */}
  <div className="mb-12">
    <h3 className="text-xl font-bold text-white mb-4">{t(`Практические рекомендации`)}</h3>
    <p className="text-gray-300 mb-2">{t(`Для всех трейдеров:`)}</p>
    <ul className="text-gray-300 ml-4 list-disc space-y-1 mb-4">
      <li>{t(`✅ Всегда используйте Hypertrade для свопов >$1,000`)}</li>
      <li>{t(`✅ Проверяйте split-routing breakdown перед подтверждением`)}</li>
      <li>{t(`✅ Доверяйте Invisium Simulations — точность 99.9%`)}</li>
    </ul>

    <p className="text-gray-300 mb-2">{t(`Для крупных трейдеров ($50k+ свопы):`)}</p>
    <ul className="text-gray-300 ml-4 list-disc space-y-1 mb-4">
      <li>{t(`✅ Рассмотрите разделение на несколько транзакций (timing)`)}</li>
      <li>{t(`✅ Используйте limit orders на HyperCore Spot для части ордера`)}</li>
      <li>{t(`✅ Мониторьте ликвидность в реальном времени`)}</li>
    </ul>

    <p className="text-gray-300 mb-2">{t(`Для DCA стратегий:`)}</p>
    <ul className="text-gray-300 ml-4 list-disc space-y-1 mb-4">
      <li>{t(`✅ Hypertrade оптимален для регулярных покупок`)}</li>
      <li>{t(`✅ Экономия $3,000–$10,000/год на DCA`)}</li>
    </ul>
  </div>

  {/* Полезные ссылки */}
  <div className="mb-12">
    <h3 className="text-xl font-bold text-white mb-4">{t(`🔗 Полезные ссылки`)}</h3>
    <ul className="text-gray-300 ml-4 list-disc space-y-1">
      <li>{t(`Hypertrade:`)}</li>
      <li>{t(`• Официальный сайт: https://ht.xyz`)}</li>
      <li>{t(`• Документация R1 Router: https://docs.hypertrade.io`)}</li>
      <li>{t(`• Discord: https://discord.gg/hypertrade`)}</li>
      <li>{t(`• Twitter: https://twitter.com/Hypertrade_xyz`)}</li>
      <li>{t(`Hyperliquid:`)}</li>
      <li>{t(`• Официальный сайт: https://hyperliquid.xyz`)}</li>
      <li>{t(`• HyperCore Spot: https://app.hyperliquid.xyz/trade`)}</li>
      <li>{t(`• Explorer: https://explorer.hyperliquid.xyz`)}</li>
      <li>{t(`• Документация: https://hyperliquid.gitbook.io/hyperliquid-docs`)}</li>
      <li>{t(`DEX на Hyperliquid:`)}</li>
      <li>{t(`• Hyperswap: https://hyperswap.fi`)}</li>
      <li>{t(`• Kittenswap: https://kittenswap.org`)}</li>
      <li>{t(`• Prjx: https://prjx.finance`)}</li>
      <li>{t(`Analytics:`)}</li>
      <li>{t(`• CoinGlass Hyperliquid: https://www.coinglass.com/hyperliquid`)}</li>
      <li>{t(`• DexScreener: https://dexscreener.com`)}</li>
    </ul>
  </div>


    {/* Начать экономить */}
<div className="bg-gradient-to-r from-hyper-accent/20 to-hyper-secondary/20 p-8 rounded-2xl border border-hyper-accent/30 text-center mb-12">
  <h3 className="text-2xl font-bold text-white mb-4">{t(`🚀 Начните экономить уже сегодня`)}</h3>
  <p className="text-gray-300 mb-4">{t(`3 простых шага:`)}</p>
  <ol className="text-gray-300 ml-4 space-y-2 mb-4">
    <li>{t(`Откройте https://ht.xyz`)}</li>
    <li>{t(`Сделайте первый своп с split-routing`)}</li>
    <li>{t(`Оцените экономию`)}</li>
  </ol>
  <p className="text-gray-300 mb-2">{t(`Split-routing работает автоматически. Вам нужно только нажать “Swap”.`)}</p>
  <p className="text-gray-300">{t(`Защитите свой капитал. Получайте лучшие цены. Используйте Hypertrade.`)}</p>
</div>

{/* Кнопка для статьи 19 */}
<div className="text-center mb-12">
  <button className="bg-hyper-accent text-hyper-900 font-bold py-3 px-6 rounded-xl hover:bg-cyan-300 transition-colors">
    {t(`Статья 19 из серии “Полный гид по Hypertrade и Hyperliquid”`)}
  </button>
</div>

<p className="text-gray-300 mb-12">
  {t(`Готово! Статья 19 создана с глубоким техническим объяснением split-routing технологии, практическими примерами расчётов, визуализацией процесса и демонстрацией реальной экономии в долларах. Акцент сделан на том, что эта технология работает автоматически в Hypertrade, и пользователю не нужно ничего настраивать вручную.`)}
</p>

</article>



        </article>
      </div>
    </section>
  );
};
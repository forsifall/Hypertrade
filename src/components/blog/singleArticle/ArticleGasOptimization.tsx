"use client"
import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { AlertCircle, ArrowLeft, Calendar, Clock, Cpu, Layers, Search, Zap, Wallet, LineChart, Shield, Timer, TrendingDown, BarChart3, Bell, FileText, Users } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { useTranslation } from "react-i18next";

export const ArticleGasOptimization = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "gas-optimization-hyperliquid");
  
          const { t } = useTranslation();

  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-15"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label="Назад к статьям" />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-green-400 mb-4">
             <span className="bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">{post.category}</span>
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

          {/* Введение */}
         <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" /> {t(`Введение: почему gas fees важны`)}
</h2>

<p>{t(`Представьте: вы активный трейдер на Hyperliquid, делаете 10 свапов в день. Каждый swap стоит 2 HYPE (~$5) gas fee.`)}</p>

<p>{t(`Расходы на gas:`)}</p>

<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`10 swaps/день × $5 = $50/день`)}</li>
  <li>{t(`$50/день × 30 дней = $1,500/месяц`)}</li>
  <li>{t(`$1,500/месяц × 12 месяцев = $18,000/год 😱`)}</li>
</ul>

<p>{t(`Теперь представьте, что можно снизить gas на 40%:`)}</p>
<p className="mb-6">{t(`$18,000 × 40% = $7,200 экономии/год 💰`)}</p>

<p>{t(`Для крупного трейдера с объёмом $1M/месяц:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`Gas fees могут составлять $3,000-5,000/месяц`)}</li>
  <li>{t(`Оптимизация на 50% = $18,000-30,000/год экономии`)}</li>
</ul>

<p>{t(`Хорошая новость: на Hyperliquid gas fees намного ниже, чем на Ethereum (где один swap может стоить $20-100). Но оптимизация всё равно важна, особенно для активных трейдеров.`)}</p>

<p className="mt-6">{t(`Что вы узнаете из этой статьи:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`✅ Как работает gas на Hyperliquid (HYPE vs. ETH)`)}</li>
  <li>{t(`✅ Факторы, влияющие на стоимость транзакций`)}</li>
  <li>{t(`✅ Оптимальное время для торговли (когда gas дешевле)`)}</li>
  <li>{t(`✅ Техники оптимизации: batching, gas limit, выбор DEX`)}</li>
  <li>{t(`✅ Сравнение gas costs между разными операциями`)}</li>
  <li>{t(`✅ Инструменты мониторинга gas fees`)}</li>
  <li>{t(`✅ Практические стратегии для экономии 30-50%`)}</li>
</ul>

<p>{t(`Цель: помочь вам минимизировать затраты на gas и увеличить чистую прибыль от торговли.`)}</p>

{/* Как работает gas */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <AlertCircle className="text-red-400" /> {t(`Как работает gas на Hyperliquid`)}
</h2>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t(`Основы: что такое gas?`)}</h3>
<p>{t(`Gas — это плата за выполнение операций на блокчейне (вычисления, хранение данных).`)}</p>
<p>{t(`На Hyperliquid:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`Gas оплачивается в HYPE (нативный токен)`)}</li>
  <li>{t(`1 HYPE ≈ $2.50 (цена меняется)`)}</li>
  <li>{t(`Средний swap: 1.5-3 HYPE (~$4-8)`)}</li>
</ul>

<p>{t(`Формула gas cost:`)}</p>
<p className="mb-6">{t(`Total Gas Cost = Gas Used × Gas Price`)}</p>

<p>{t(`Где:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`Gas Used = количество "единиц gas" (зависит от сложности операции)`)}</li>
  <li>{t(`Gas Price = цена за единицу gas в HYPE (устанавливается сетью)`)}</li>
</ul>

<p>{t(`Пример:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`Simple swap USDC → ETH:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mb-2">
    <li>{t(`Gas Used: 150,000 units`)}</li>
    <li>{t(`Gas Price: 0.00001 HYPE/unit`)}</li>
    <li>{t(`Total: 150,000 × 0.00001 = 1.5 HYPE (~$3.75)`)}</li>
  </ul>
  <li>{t(`Complex multi-hop swap USDC → HYPE → ETH → ARB:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mb-6">
    <li>{t(`Gas Used: 350,000 units`)}</li>
    <li>{t(`Gas Price: 0.00001 HYPE/unit`)}</li>
    <li>{t(`Total: 350,000 × 0.00001 = 3.5 HYPE (~$8.75)`)}</li>
  </ul>
</ul>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t(`Hyperliquid vs. Ethereum gas`)}</h3>
<div className="overflow-x-auto mb-12 not-prose">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-4 text-gray-400 font-medium">{t(`Параметр`)}</th>
        <th className="p-4 text-gray-400 font-medium">{t(`Hyperliquid`)}</th>
        <th className="p-4 text-gray-400 font-medium">{t(`Ethereum`)}</th>
      </tr>
    </thead>
    <tbody className="text-sm">
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Gas token`)}</td>
        <td className="p-4 text-gray-300">{t(`HYPE`)}</td>
        <td className="p-4 text-gray-300">{t(`ETH`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t(`Simple swap`)}</td>
        <td className="p-4 text-gray-300">{t(`1.5-3 HYPE (~$4-8)`)}</td>
        <td className="p-4 text-gray-300">{t(`0.003-0.02 ETH (~$8-50)`)}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Complex swap`)}</td>
        <td className="p-4 text-gray-300">{t(`3-6 HYPE (~$8-15)`)}</td>
        <td className="p-4 text-gray-300">{t(`0.01-0.05 ETH (~$25-125)`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t(`Approval`)}</td>
        <td className="p-4 text-gray-300">{t(`0.8-1.2 HYPE (~$2-3)`)}</td>
        <td className="p-4 text-gray-300">{t(`0.001-0.005 ETH (~$3-12)`)}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Transfer`)}</td>
        <td className="p-4 text-gray-300">{t(`0.5-0.8 HYPE (~$1-2)`)}</td>
        <td className="p-4 text-gray-300">{t(`0.0005-0.002 ETH (~$1-5)`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t(`Block time`)}</td>
        <td className="p-4 text-gray-300">{t(`~0.5 seconds`)}</td>
        <td className="p-4 text-gray-300">{t(`~12 seconds`)}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Finality`)}</td>
        <td className="p-4 text-gray-300">{t(`~1-2 seconds`)}</td>
        <td className="p-4 text-gray-300">{t(`~12-15 minutes`)}</td>
      </tr>
      <tr className="bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Peak vs. off-peak`)}</td>
        <td className="p-4 text-gray-300">{t(`1.2-1.5× разница`)}</td>
        <td className="p-4 text-gray-300">{t(`3-10× разница`)}</td>
      </tr>
    </tbody>
  </table>
</div>

<p>{t(`Вывод: Hyperliquid дешевле и быстрее Ethereum, но оптимизация всё равно важна.`)}</p>
          {/* Далее секция факторов и примеров split-routing можно сверстать в том же стиле */}
          

           {/* Факторы gas */}
         <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" /> {t(`Факторы, влияющие на стоимость gas`)}
</h2>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t(`1. Сложность операции`)}</h3>
<p>{t(`Разные операции потребляют разное количество gas:`)}</p>

<div className="overflow-x-auto mb-6 not-prose">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-4 text-gray-400 font-medium">{t(`Операция`)}</th>
        <th className="p-4 text-gray-400 font-medium">{t(`Gas Used (units)`)}</th>
        <th className="p-4 text-gray-400 font-medium">{t(`Примерная стоимость (HYPE)`)}</th>
        <th className="p-4 text-gray-400 font-medium">{t(`Стоимость (USD)`)}</th>
      </tr>
    </thead>
    <tbody className="text-sm">
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Simple transfer (HYPE/USDC)`)}</td>
        <td className="p-4 text-gray-300">{t(`50,000`)}</td>
        <td className="p-4 text-gray-300">{t(`0.5`)}</td>
        <td className="p-4 text-gray-300">{t(`$1.25`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t(`Token approval`)}</td>
        <td className="p-4 text-gray-300">{t(`80,000`)}</td>
        <td className="p-4 text-gray-300">{t(`0.8`)}</td>
        <td className="p-4 text-gray-300">{t(`$2.00`)}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Simple swap (1 DEX)`)}</td>
        <td className="p-4 text-gray-300">{t(`150,000`)}</td>
        <td className="p-4 text-gray-300">{t(`1.5`)}</td>
        <td className="p-4 text-gray-300">{t(`$3.75`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t(`Split-routing swap (2 DEX)`)}</td>
        <td className="p-4 text-gray-300">{t(`220,000`)}</td>
        <td className="p-4 text-gray-300">{t(`2.2`)}</td>
        <td className="p-4 text-gray-300">{t(`$5.50`)}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Multi-hop swap (3+ hops)`)}</td>
        <td className="p-4 text-gray-300">{t(`350,000`)}</td>
        <td className="p-4 text-gray-300">{t(`3.5`)}</td>
        <td className="p-4 text-gray-300">{t(`$8.75`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t(`Limit order (HyperCore Spot)`)}</td>
        <td className="p-4 text-gray-300">{t(`100,000`)}</td>
        <td className="p-4 text-gray-300">{t(`1.0`)}</td>
        <td className="p-4 text-gray-300">{t(`$2.50`)}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Cancel order`)}</td>
        <td className="p-4 text-gray-300">{t(`40,000`)}</td>
        <td className="p-4 text-gray-300">{t(`0.4`)}</td>
        <td className="p-4 text-gray-300">{t(`$1.00`)}</td>
      </tr>
      <tr className="bg-hyper-800/20">
        <td className="p-4 text-white">{t(`NFT mint/transfer`)}</td>
        <td className="p-4 text-gray-300">{t(`120,000`)}</td>
        <td className="p-4 text-gray-300">{t(`1.2`)}</td>
        <td className="p-4 text-gray-300">{t(`$3.00`)}</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t(`Почему split-routing дороже:`)}</h3>

<p>{t(`Simple swap (1 DEX):`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`1. Approve token (если нужно)`)}</li>
  <li>{t(`2. Call router.swap()`)}</li>
  <li>{t(`3. Transfer tokens`)}</li>
</ul>

<p>{t(`Split-routing (2 DEX):`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`1. Approve token (если нужно)`)}</li>
  <li>{t(`2. Call router.swapSplit()`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mb-2">
    <li>{t(`- Sub-call: DEX1.swap() (60% ордера)`)}</li>
    <li>{t(`- Sub-call: DEX2.swap() (40% ордера)`)}</li>
  </ul>
  <li>{t(`3. Aggregate results`)}</li>
  <li>{t(`4. Transfer tokens`)}</li>
</ul>

<p>{t(`Дополнительные операции = больше gas`)}</p>
<p className="mb-6">{t(`Но: несмотря на +30-50% к gas cost, split-routing экономит 1-5% на price impact, что многократно перекрывает дополнительный gas.`)}</p>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t(`Пример:`)}</h3>
<p>{t(`Swap 50,000 USDC → ETH`)}</p>

<p className="mb-2">{t(`Single DEX:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`- Gas: 1.5 HYPE ($3.75)`)}</li>
  <li>{t(`- Price impact: 2.8%`)}</li>
  <li>{t(`- Loss: 50,000 × 2.8% = $1,400`)}</li>
  <li>{t(`- Total cost: $1,403.75`)}</li>
</ul>

<p className="mb-2">{t(`Split-routing (Hypertrade):`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`- Gas: 2.2 HYPE ($5.50)`)}</li>
  <li>{t(`- Price impact: 0.51%`)}</li>
  <li>{t(`- Loss: 50,000 × 0.51% = $255`)}</li>
  <li>{t(`- Total cost: $260.50`)}</li>
</ul>

<p className="mb-6">{t(`Экономия: $1,403.75 - $260.50 = $1,143.25 💰`)}</p>
<p>{t(`Вывод: не экономьте на gas, если это увеличивает price impact.`)}</p>

{/* 2. Network congestion */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" /> {t(`2. Network congestion (загруженность сети)`)}
</h2>

<p className="mb-6">{t(`Чем больше транзакций в сети, тем выше gas price.`)}</p>
<p className="mb-6">{t(`Hyperliquid имеет два “пиковых” периода:`)}</p>

<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`📈 Peak hours (высокий gas):`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mb-2">
    <li>{t(`• 12:00-20:00 UTC (дневная сессия США/Европы)`)}</li>
    <li>{t(`• Gas price: 1.2-1.5× выше базового`)}</li>
  </ul>
  <li>{t(`📉 Off-peak hours (низкий gas):`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mb-6">
    <li>{t(`• 00:00-08:00 UTC (азиатская ночь)`)}</li>
    <li>{t(`• Gas price: 0.8-1.0× базового (нормальный или ниже)`)}</li>
  </ul>
</ul>

<p className="mb-6">{t(`График типичного дня:`)}</p>

<div className="bg-hyper-800/30 border border-gray-700 rounded-xl p-6 mb-6">
  <div className="grid grid-cols-7 gap-2 text-gray-300 text-xs mb-4">
    <span className="text-center">{t(`0:00`)}</span>
    <span className="text-center">{t(`4:00`)}</span>
    <span className="text-center">{t(`8:00`)}</span>
    <span className="text-center">{t(`12:00`)}</span>
    <span className="text-center">{t(`16:00`)}</span>
    <span className="text-center">{t(`20:00`)}</span>
    <span className="text-center">{t(`24:00 UTC`)}</span>
  </div>

  <div className="relative h-32 w-full bg-gray-900/20 rounded-lg overflow-hidden">
    {/* Lines for grid */}
    <div className="absolute inset-0 flex flex-col justify-between">
      <span className="text-gray-500 text-xs">{t(`1.5×`)}</span>
      <span className="text-gray-500 text-xs">{t(`1.2×`)}</span>
      <span className="text-gray-500 text-xs">{t(`1.0×`)}</span>
      <span className="text-gray-500 text-xs">{t(`0.8×`)}</span>
    </div>

    {/* Gas price line */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline
        points="0,90 100,75 200,60 300,50 400,35 500,50 600,75 700,90"
        stroke="#FACC15" 
        strokeWidth="2"
        fill="none"
      />
    </svg>
  </div>

  <p className="text-gray-400 text-xs mt-2">{t(`Gas Price (multiplier)`)}</p>
</div>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">{t(`Пример:`)}</h3>
<p className="mb-2">{t(`Swap 10,000 USDC → ETH`)}</p>

<p className="mb-2">{t(`Peak time (16:00 UTC):`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`- Base gas: 1.5 HYPE`)}</li>
  <li>{t(`- Multiplier: 1.4×`)}</li>
  <li>{t(`- Total: 1.5 × 1.4 = 2.1 HYPE ($5.25)`)}</li>
</ul>

<p className="mb-2">{t(`Off-peak time (04:00 UTC):`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`- Base gas: 1.5 HYPE`)}</li>
  <li>{t(`- Multiplier: 0.9×`)}</li>
  <li>{t(`- Total: 1.5 × 0.9 = 1.35 HYPE ($3.38)`)}</li>
</ul>

<p className="mb-6">{t(`Экономия: $5.25 - $3.38 = $1.87 (35.6%)`)}</p>
<p className="mb-6">{t(`Для активного трейдера (10 свапов/день):`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`Peak time: 10 × $5.25 = $52.50/день`)}</li>
  <li>{t(`Off-peak time: 10 × $3.38 = $33.80/день`)}</li>
</ul>
<p className="mb-6">{t(`Ежедневная экономия: $18.70`)}</p>
<p className="mb-6">{t(`Месячная экономия: $18.70 × 30 = $561`)}</p>
<p className="mb-6">{t(`Годовая экономия: $561 × 12 = $6,732 💰`)}</p>

<hr className="border-gray-700 my-12" />

{/* 3. Gas limit */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" /> {t(`3. Gas limit`)}
</h2>

<p className="mb-6">{t(`Gas limit — это максимальное количество gas, которое вы готовы потратить на транзакцию.`)}</p>
<p className="mb-6">{t(`Две крайности:`)}</p>

<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`❌ Слишком низкий gas limit:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mb-2">
    <li>{t(`• Транзакция не выполнится (out of gas error)`)}</li>
    <li>{t(`• Вы теряете весь gas (он списывается, но swap не происходит)`)}</li>
  </ul>
  <li>{t(`❌ Слишком высокий gas limit:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mb-6">
    <li>{t(`• Вы переплачиваете (особенно если операция оказывается проще, чем ожидалось)`)}</li>
  </ul>
</ul>

<p className="mb-6">{t(`Optimal gas limit:`)}</p>

<div className="overflow-x-auto mb-6 not-prose">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-4 text-gray-400 font-medium">{t(`Операция`)}</th>
        <th className="p-4 text-gray-400 font-medium">{t(`Recommended Gas Limit`)}</th>
      </tr>
    </thead>
    <tbody className="text-sm">
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Simple swap`)}</td>
        <td className="p-4 text-gray-300">{t(`180,000`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t(`Split-routing swap`)}</td>
        <td className="p-4 text-gray-300">{t(`280,000`)}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Multi-hop swap`)}</td>
        <td className="p-4 text-gray-300">{t(`400,000`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t(`Token approval`)}</td>
        <td className="p-4 text-gray-300">{t(`100,000`)}</td>
      </tr>
      <tr className="bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Transfer`)}</td>
        <td className="p-4 text-gray-300">{t(`65,000`)}</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t(`Как установить gas limit в MetaMask:`)}</h3>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`1. Перед подтверждением транзакции нажмите “Edit” (gas settings)`)}</li>
  <li>{t(`2. Выберите “Advanced”`)}</li>
  <li>{t(`3. Установите “Gas Limit”: например, 180,000 для simple swap`)}</li>
  <li>{t(`4. НЕ меняйте gas limit без понимания — используйте рекомендованные значения`)}</li>
</ul>

<p className="mb-12">{t(`Hypertrade автоматически устанавливает оптимальный gas limit для каждого типа операции.`)}</p>

<div className="space-y-8 not-prose mb-12">

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`4. Priority fee (tip)`)}</h2>
<p className="text-gray-300 mb-6">{t(`Priority fee — это дополнительная плата, чтобы ваша транзакция обработалась быстрее.`)}</p>

<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`Base fee: обязательная часть gas (устанавливается протоколом)`)}</li>
  <li>{t(`Priority fee (tip): опциональная доплата валидаторам`)}</li>
</ul>

<p className="text-gray-300 mb-6">{t(`Когда использовать priority fee:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`✅ Срочные транзакции:`)}</li>
  <ul className="list-disc list-inside ml-6 mb-4">
    <li>{t(`Арбитраж (нужно выполнить за секунды)`)}</li>
    <li>{t(`Panic sell (рынок падает, нужно выйти быстро)`)}</li>
    <li>{t(`Покупка NFT (limited supply, конкурируете с другими)`)}</li>
  </ul>
  <li>{t(`❌ Обычные свапы:`)}</li>
  <ul className="list-disc list-inside ml-6 mb-4">
    <li>{t(`Нет смысла переплачивать`)}</li>
    <li>{t(`Hyperliquid и так быстрый (1-2 секунды)`)}</li>
  </ul>
</ul>

<p className="text-gray-300 mb-6">{t(`Рекомендация: для 95% транзакций используйте стандартный priority fee (0 или минимальный).`)}</p>

<hr className="border-gray-700 my-8" />

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Оптимальное время для торговли`)}</h2>
<p className="text-gray-300 mb-6">{t(`Лучшее время для минимизации gas`)}</p>

<p className="text-gray-300 mb-4">{t(`📉 Дешевле всего:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`Выходные (Сб-Вс) — на 15-25% ниже будних дней`)}</li>
  <li>{t(`Азиатская ночь (00:00-08:00 UTC) — на 20-30% ниже пиков`)}</li>
  <li>{t(`Праздники (Christmas, New Year) — на 30-40% ниже обычного`)}</li>
</ul>

<p className="text-gray-300 mb-4">{t(`📈 Дороже всего:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`Будние дни 12:00-20:00 UTC — пик активности`)}</li>
  <li>{t(`Крупные события (FED announcements, major news) — всплеск на 50-100%`)}</li>
  <li>{t(`NFT минты / токен launches — локальный всплеск на 200-300%`)}</li>
</ul>

<p className="text-gray-300 mb-4">{t(`Практическая стратегия:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`✅ Для несрочных свапов:`)}</li>
  <ul className="list-disc list-inside ml-6 mb-4">
    <li>{t(`Торгуйте в off-peak hours (00:00-08:00 UTC)`)}</li>
    <li>{t(`Или в выходные`)}</li>
  </ul>
  <li>{t(`✅ Для срочных свапов:`)}</li>
  <ul className="list-disc list-inside ml-6 mb-4">
    <li>{t(`Используйте Hypertrade Invisium для предсказания gas cost`)}</li>
    <li>{t(`Решите, стоит ли переплата срочности`)}</li>
  </ul>
</ul>

<p className="text-gray-300 mb-4">{t(`Пример:`)}</p>
<p className="text-gray-300 mb-4">{t(`Вы хотите купить 5 ETH на $12,500`)}</p>

<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`Несрочно (можете подождать 6 часов):`)}</li>
  <ul className="list-disc list-inside ml-6 mb-4">
    <li>{t(`Торгуйте в 04:00 UTC`)}</li>
    <li>{t(`Gas: 1.35 HYPE ($3.38)`)}</li>
  </ul>
  <li>{t(`Срочно (рынок растёт, нужно купить сейчас):`)}</li>
  <ul className="list-disc list-inside ml-6 mb-4">
    <li>{t(`Торгуйте в 16:00 UTC`)}</li>
    <li>{t(`Gas: 2.1 HYPE ($5.25)`)}</li>
    <li>{t(`Переплата: $1.87`)}</li>
  </ul>
</ul>

<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t(`Но если ETH вырос на 2% за эти 6 часов:`)}</li>
  <ul className="list-disc list-inside ml-6 mb-4">
    <li>{t(`Упущенная прибыль: $12,500 × 2% = $250`)}</li>
    <li>{t(`$1.87 переплаты gas << $250 упущенной прибыли`)}</li>
  </ul>
</ul>

<p className="text-gray-300 mb-12">{t(`Вывод: срочность оправдана ✅`)}</p>

</div>

{/* Заголовок статьи */}
<h1 className="text-3xl md:text-2xl font-bold text-white leading-tight mb-12">
  {t(`Мониторинг gas цен в реальном времени`)}
</h1>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" /> {t(`Инструменты`)}
</h2>

<ul className="list-disc list-inside space-y-4 text-gray-300">
  <li>
    <p className="font-bold">{t(`Hyperliquid Explorer Gas Tracker:`)}</p>
    <p>{t(`URL: https://explorer.hyperliquid.xyz/gas`)}</p>
    <p>{t(`Показывает: текущий gas price, chart за 24 часа`)}</p>
  </li>
  <li>
    <p className="font-bold">{t(`Hypertrade Gas Estimator:`)}</p>
    <p>{t(`Встроен в https://ht.xyz`)}</p>
    <p>{t(`Показывает: gas cost для вашего конкретного swap`)}</p>
  </li>
  <li>
    <p className="font-bold">{t(`DeFi Pulse Gas Tracker (для сравнения с Ethereum):`)}</p>
    <p>{t(`URL: https://www.defipulse.com/gas`)}</p>
  </li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Clock className="text-yellow-400" /> {t(`Как использовать`)}
</h2>

<ol className="list-decimal list-inside space-y-3 text-gray-300">
  <li>{t(`Проверьте текущий gas price`)}</li>
  <li>{t(`Если >1.3× базового → дождитесь снижения (если несрочно)`)}</li>
  <li>{t(`Если <1.0× базового → отличное время для торговли`)}</li>
</ol>

<hr className="my-12 border-gray-700" />

<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Zap className="text-yellow-400" /> {t(`Техники оптимизации gas`)}
</h2>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t(`1. Batching (батчинг транзакций)`)}</h3>
<p className="text-gray-300 mb-4">{t(`Идея: объединить несколько операций в одну транзакцию.`)}</p>

<p className="text-gray-300 font-bold">{t(`Пример без батчинга:`)}</p>
<p className="text-gray-300 mb-4">{t(`Вы хотите:`)}</p>
<ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
  <li>{t(`Approve USDC`)}</li>
  <li>{t(`Swap USDC → ETH`)}</li>
  <li>{t(`Transfer ETH на другой wallet`)}</li>
</ul>

<p className="text-gray-300 mb-4">{t(`3 отдельные транзакции:`)}</p>
<ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
  <li>{t(`Approve: 0.8 HYPE`)}</li>
  <li>{t(`Swap: 1.5 HYPE`)}</li>
  <li>{t(`Transfer: 0.5 HYPE`)}</li>
  <li className="font-bold text-red-400">{t(`Итого: 2.8 HYPE ($7.00)`)}</li>
</ul>

<p className="text-gray-300 mb-4">{t(`С батчингом:`)}</p>
<ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
  <li>{t(`1 транзакция, включающая все операции:`)}</li>
  <li className="font-bold text-green-400">{t(`Total: 2.2 HYPE ($5.50)`)}</li>
</ul>

<p className="text-gray-300 mb-4">{t(`Экономия: $7.00 - $5.50 = $1.50 (21.4%)`)}</p>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t(`Как использовать батчинг:`)}</h3>
<ul className="list-disc list-inside space-y-2 text-gray-300 mb-12">
  <li>{t(`✅ Hypertrade автоматически батчит операции где возможно:`)}</li>
  <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
    <li>{t(`Approval + Swap в одной транзакции (если это первый swap токена)`)}</li>
    <li>{t(`Split-routing (несколько sub-swaps в одной транзакции)`)}</li>
  </ul>
  <li>{t(`✅ Для manual batching (advanced):`)}</li>
  <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
    <li>{t(`Используйте Multicall contract (для разработчиков)`)}</li>
    <li>{t(`Пример: https://docs.hypertrade.io/batching`)}</li>
  </ul>
</ul>

<h1 className="text-2xl md:text-2xl font-bold text-white leading-tight mb-12">
  {t(`2. Limit orders вместо market swaps`)}
</h1>

<p className="text-gray-300 mb-6">{t(`HyperCore Spot (Order Book) vs. AMM DEX (Hyperswap):`)}</p>

<div className="overflow-x-auto mb-8">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-4 text-gray-400 font-medium">{t(`Параметр`)}</th>
        <th className="p-4 text-gray-400 font-medium">{t(`HyperCore Spot (Limit Order)`)}</th>
        <th className="p-4 text-gray-400 font-medium">{t(`AMM (Market Swap)`)}</th>
      </tr>
    </thead>
    <tbody className="text-sm">
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Gas cost`)}</td>
        <td className="p-4 text-gray-300">{t(`1.0 HYPE (~$2.50)`)}</td>
        <td className="p-4 text-gray-300">{t(`1.5-3 HYPE (~$4-8)`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t(`Price impact`)}</td>
        <td className="p-4 text-gray-300">{t(`0% (торгуете с другим трейдером)`)}</td>
        <td className="p-4 text-gray-300">{t(`0.5-5% (зависит от ордера)`)}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Execution`)}</td>
        <td className="p-4 text-gray-300">{t(`Может занять минуты/часы/дни`)}</td>
        <td className="p-4 text-gray-300">{t(`Мгновенно (1-2 сек)`)}</td>
      </tr>
      <tr className="bg-hyper-800/20">
        <td className="p-4 text-white">{t(`Slippage`)}</td>
        <td className="p-4 text-gray-300">{t(`0% (точная цена)`)}</td>
        <td className="p-4 text-gray-300">{t(`0.1-2% (unexpected)`)}</td>
      </tr>
    </tbody>
  </table>
</div>

         <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Когда использовать limit orders:`)}</h2>

          <ul className="list-disc list-inside space-y-3 text-gray-300 mb-8">
            <li>{t(`✅ Вы НЕ торопитесь:`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`DCA стратегия (регулярные покупки)`)}</li>
              <li>{t(`Долгосрочные входы/выходы`)}</li>
              <li>{t(`Вы готовы ждать лучшую цену`)}</li>
            </ul>
            <li>{t(`✅ Крупные ордера (>$50,000):`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Limit order позволяет избежать high price impact`)}</li>
              <li>{t(`Gas экономия небольшая, но избежание impact = большая экономия`)}</li>
            </ul>
          </ul>

          <p className="text-gray-300 mb-6">{t(`Пример:`)}</p>
          <p className="text-gray-300 mb-6">{t(`Вы хотите купить 50 ETH ($125,000)`)}</p>

          <p className="text-gray-300 font-bold mb-3">{t(`Market swap (AMM):`)}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
            <li>{t(`Gas: 2.5 HYPE ($6.25)`)}</li>
            <li>{t(`Price impact: 3.2%`)}</li>
            <li>{t(`Loss: $125,000 × 3.2% = $4,000`)}</li>
            <li>{t(`Total cost: $4,006.25`)}</li>
          </ul>

          <p className="text-gray-300 font-bold mb-3">{t(`Limit order (HyperCore Spot):`)}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 mb-6">
            <li>{t(`Gas: 1.0 HYPE ($2.50)`)}</li>
            <li>{t(`Price impact: 0%`)}</li>
            <li>{t(`Loss: $0`)}</li>
            <li>{t(`Total cost: $2.50`)}</li>
            <li>{t(`Но: может занять 1-6 часов`)}</li>
          </ul>

          <p className="text-gray-300 mb-8">{t(`Экономия: $4,003.75 💰`)}</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Как разместить limit order:`)}</h2>

          <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-12">
            <li>{t(`Перейдите на HyperCore Spot`)}</li>
            <li>{t(`Выберите пару (например, ETH/USDC)`)}</li>
            <li>{t(`Установите Limit order type`)}</li>
            <li>{t(`Введите цену (например, 1 ETH = 2,480 USDC)`)}</li>
            <li>{t(`Введите количество`)}</li>
            <li>{t(`Нажмите “Place Order”`)}</li>
          </ol>

          <p className="text-gray-300 mb-12">{t(`Если рынок достигнет вашей цены → ордер исполнится автоматически (gas уже списан при размещении).`)}</p>

          {/* Оптимизация approvals */}
          <h1 className="text-2xl md:text-2xl font-bold text-white leading-tight mb-12">
            {t(`3. Оптимизация approvals`)}
          </h1>

          <p className="text-gray-300 mb-6">{t(`Approval — это разрешение контракту тратить ваши токены.`)}</p>
          <p className="text-gray-300 mb-6">{t(`Две стратегии:`)}</p>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">{t(`Стратегия A: Unlimited approval (одноразово)`)}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
            <li>{t(`Approve: unlimited (∞ USDC)`)}</li>
            <li>{t(`Gas: 0.8 HYPE ($2.00) — один раз`)}</li>
          </ul>

          <p className="text-gray-300 mb-4">{t(`Преимущества:`)}</p>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300 mb-6">
            <li>{t(`✅ Один approval на всю жизнь`)}</li>
            <li>{t(`✅ Последующие swaps не требуют approval`)}</li>
          </ul>

          <p className="text-gray-300 mb-4">{t(`Недостатки:`)}</p>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300 mb-8">
            <li>{t(`❌ Риск безопасности (если контракт скомпрометирован)`)}</li>
          </ul>

         <h3 className="text-xl font-bold text-white mt-6 mb-3">{t(`Стратегия B: Limited approval (каждый раз)`)}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
            <li>{t(`Approve: точная сумма (например, 10,000 USDC)`)}</li>
            <li>{t(`Gas: 0.8 HYPE ($2.00) — каждый swap`)}</li>
          </ul>

          <p className="text-gray-300 mb-4">{t(`Преимущества:`)}</p>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300 mb-6">
            <li>{t(`✅ Безопаснее (контракт может потратить только разрешённую сумму)`)}</li>
          </ul>

          <p className="text-gray-300 mb-4">{t(`Недостатки:`)}</p>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300 mb-8">
            <li>{t(`❌ Дополнительный gas на каждый swap`)}</li>
          </ul>

          <p className="text-gray-300 mb-6">{t(`Расчёт для активного трейдера:`)}</p>
          <p className="text-gray-300 mb-6">{t(`Вы делаете 100 swaps USDC в год`)}</p>

          <ul className="list-disc list-inside space-y-1 text-gray-300 mb-6">
            <li>{t(`Unlimited approval:`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Gas: 0.8 HYPE ($2.00) один раз`)}</li>
              <li>{t(`Total: $2.00`)}</li>
            </ul>
            <li>{t(`Limited approval:`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Gas: 0.8 HYPE × 100 = 80 HYPE ($200)`)}</li>
              <li>{t(`Total: $200`)}</li>
            </ul>
          </ul>

          <p className="text-gray-300 mb-6">{t(`Разница: $198 экономии с unlimited 💰`)}</p>

          <p className="text-gray-300 mb-12">{t(`Но: риск безопасности выше`)}</p>

          <p className="text-gray-300 mb-6">{t(`Рекомендация:`)}</p>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300 mb-8">
            <li>{t(`Для крупных сумм (>$50k в wallet): используйте limited approval`)}</li>
            <li>{t(`Для активной торговли с малыми балансами (<$10k): unlimited approval экономит gas`)}</li>
          </ul>

          <p className="text-gray-300 mb-12">{t(`Как отозвать approvals:`)}</p>
          <p className="text-gray-300 mb-12">{t(`Используйте Revoke.cash для проверки и отзыва старых approvals (не поддерживает Hyperliquid напрямую, но концепция та же — проверяйте через HyperExplorer).`)}</p>


         {/* Раздел 4 */}
          <h1 className="text-2xl md:text-2xl font-bold text-white leading-tight mb-12">
            {t(`4. Выбор между Split-routing и Single DEX`)}
          </h1>

          <p className="text-gray-300 mb-6">{t(`Hypertrade предлагает split-routing, но это не всегда самый дешёвый вариант по gas.`)}</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Когда split-routing выгоден:`)}</h2>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 mb-8">
            <li>{t(`✅ Крупные ордера (>$10,000):`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Экономия на price impact >> дополнительный gas`)}</li>
            </ul>
            <li>{t(`✅ Низкая ликвидность пары:`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Single DEX даст high impact`)}</li>
              <li>{t(`Split-routing снижает impact значительно`)}</li>
            </ul>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Когда single DEX дешевле:`)}</h2>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 mb-8">
            <li>{t(`✅ Малые ордера (<$1,000):`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Price impact небольшой (<0.3%)`)}</li>
              <li>{t(`Дополнительный gas split-routing не оправдан`)}</li>
            </ul>
            <li>{t(`✅ Высокая ликвидность пары:`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Один DEX имеет 80%+ всей ликвидности`)}</li>
              <li>{t(`Split даёт минимальную выгоду`)}</li>
            </ul>
          </ul>

          <p className="text-gray-300 mb-6">{t(`Пример:`)}</p>
          <p className="text-gray-300 mb-6">{t(`Swap 500 USDC → ETH`)}</p>

          <ul className="list-disc list-inside space-y-1 text-gray-300 mb-6">
            <li>{t(`Single DEX (Hyperswap):`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Gas: 1.5 HYPE ($3.75)`)}</li>
              <li>{t(`Price impact: 0.05%`)}</li>
              <li>{t(`Loss: 500 × 0.05% = $0.25`)}</li>
              <li>{t(`Total cost: $4.00`)}</li>
            </ul>
            <li>{t(`Split-routing (Hypertrade):`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Gas: 2.2 HYPE ($5.50)`)}</li>
              <li>{t(`Price impact: 0.03%`)}</li>
              <li>{t(`Loss: 500 × 0.03% = $0.15`)}</li>
              <li>{t(`Total cost: $5.65`)}</li>
            </ul>
          </ul>

          <p className="text-gray-300 mb-12">{t(`Single DEX дешевле на $1.65 ✅`)}</p>

          <p className="text-gray-300 mb-12">{t(`Hypertrade автоматически выбирает оптимальный маршрут, но вы можете:`)}</p>
          <ol className="list-decimal list-inside ml-6 space-y-2 text-gray-300 mb-12">
            <li>{t(`Нажать “Compare Routes” в интерфейсе`)}</li>
            <li>{t(`Посмотреть single DEX vs. split-routing варианты`)}</li>
            <li>{t(`Выбрать вручную, если хотите минимизировать gas`)}</li>
          </ol>

          {/* Раздел 5 */}
          <h1 className="text-2xl md:text-2xl font-bold text-white leading-tight mb-12">
            {t(`5. Использование HyperCore Spot для крупных ордеров`)}
          </h1>

          <p className="text-gray-300 mb-6">{t(`HyperCore Spot (Order Book) — это centralized exchange на Hyperliquid (но non-custodial).`)}</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Преимущества для gas:`)}</h2>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 mb-8">
            <li>{t(`✅ Ниже gas cost:`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Limit order: 1.0 HYPE (~$2.50)`)}</li>
              <li>{t(`Market order: 1.2 HYPE (~$3.00)`)}</li>
              <li>{t(`vs. 1.5-3 HYPE на AMM`)}</li>
            </ul>
            <li>{t(`✅ 0% price impact:`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Вы торгуете с другими трейдерами`)}</li>
              <li>{t(`Нет “съедания” ликвидности пула`)}</li>
            </ul>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Недостатки:`)}</h2>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 mb-8">
            <li>{t(`❌ Execution не гарантирован:`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Limit order может не исполниться (если цена не достигнута)`)}</li>
              <li>{t(`Market order может иметь slippage (если недостаточно ликвидности в книге)`)}</li>
            </ul>
            <li>{t(`❌ Меньший выбор пар:`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`HyperCore Spot поддерживает только основные пары`)}</li>
              <li>{t(`AMM DEX имеют больше long-tail токенов`)}</li>
            </ul>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Когда использовать HyperCore Spot:`)}</h2>
          <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 mb-8">
            <li>{t(`✅ Крупные ордера (>$50k): экономия на price impact огромная`)}</li>
            <li>{t(`✅ Основные пары (USDC/ETH, USDC/HYPE, ETH/HYPE)`)}</li>
            <li>{t(`✅ Вы не торопитесь: готовы подождать исполнения limit order`)}</li>
          </ul>

          <p className="text-gray-300 mb-6">{t(`Пример:`)}</p>
          <p className="text-gray-300 mb-6">{t(`Swap 100,000 USDC → ETH`)}</p>

          <ul className="list-disc list-inside space-y-1 text-gray-300 mb-6">
            <li>{t(`AMM (Hyperswap) market swap:`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Gas: 2.8 HYPE ($7.00)`)}</li>
              <li>{t(`Price impact: 4.8%`)}</li>
              <li>{t(`Loss: 100,000 × 4.8% = $4,800`)}</li>
              <li>{t(`Total cost: $4,807`)}</li>
            </ul>
            <li>{t(`HyperCore Spot limit order:`)}</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
              <li>{t(`Gas: 1.0 HYPE ($2.50)`)}</li>
              <li>{t(`Price impact: 0%`)}</li>
              <li>{t(`Loss: $0`)}</li>
              <li>{t(`Total cost: $2.50`)}</li>
              <li>{t(`Execution time: 1-3 hours`)}</li>
            </ul>
          </ul>

          <p className="text-gray-300 mb-12">{t(`Экономия: $4,804.50 💰💰💰`)}</p>
          <p className="text-gray-300 mb-12">{t(`Вывод: для крупных ордеров HyperCore Spot — безусловный лидер по экономии.`)}</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Сравнение gas costs для разных сценариев`)}</h2>

<div className="space-y-12 not-prose mb-12">
  {/* Сценарий 1 */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`Сценарий 1: Малый трейдер ($1,000/месяц объём)`)}</h3>
    
    <p className="text-gray-300 mb-4">{t(`Профиль:`)}</p>
    <ul className="list-disc list-inside text-gray-300 mb-6">
      <li>{t(`10 свапов/месяц по $100`)}</li>
      <li>{t(`Использует Hypertrade (split-routing где выгодно)`)}</li>
    </ul>

    <p className="text-gray-300 mb-2">{t(`Gas costs:`)}</p>
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-2 text-gray-400">{t(`Операция`)}</th>
            <th className="p-2 text-gray-400">{t(`Количество`)}</th>
            <th className="p-2 text-gray-400">{t(`Gas/операция`)}</th>
            <th className="p-2 text-gray-400">{t(`Total Gas`)}</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-300">
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Approvals (2 токена)`)}</td>
            <td className="p-2">2</td>
            <td className="p-2">0.8 HYPE</td>
            <td className="p-2">1.6 HYPE</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Simple swaps`)}</td>
            <td className="p-2">8</td>
            <td className="p-2">1.5 HYPE</td>
            <td className="p-2">12.0 HYPE</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Split-routing swaps`)}</td>
            <td className="p-2">2</td>
            <td className="p-2">2.2 HYPE</td>
            <td className="p-2">4.4 HYPE</td>
          </tr>
          <tr className="bg-hyper-800/20">
            <td className="p-2 font-bold">{t(`Total`)}</td>
            <td className="p-2"></td>
            <td className="p-2"></td>
            <td className="p-2 font-bold">18 HYPE</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-gray-300 mb-2">{t(`Стоимость: 18 HYPE × $2.50 = $45/месяц ($540/год)`)}</p>
    <p className="text-gray-300 mb-4">{t(`% от объёма: $45 / $1,000 = 4.5%`)}</p>

    <p className="text-gray-300 mb-2">{t(`Оптимизация:`)}</p>
    <ul className="list-disc list-inside text-gray-300">
      <li>{t(`Торговать в off-peak hours: -30% → $31.50/месяц ($378/год)`)}</li>
      <li>{t(`Использовать limit orders где возможно: -20% → $36/месяц ($432/год)`)}</li>
      <li>{t(`Итоговая экономия: $108-162/год`)}</li>
    </ul>
  </div>

  {/* Сценарий 2 */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`Сценарий 2: Активный трейдер ($50,000/месяц объём)`)}</h3>

    <p className="text-gray-300 mb-4">{t(`Профиль:`)}</p>
    <ul className="list-disc list-inside text-gray-300 mb-6">
      <li>{t(`50 свапов/месяц, средний swap $1,000`)}</li>
      <li>{t(`Использует Hypertrade + HyperCore Spot для крупных`)}</li>
    </ul>

    <p className="text-gray-300 mb-2">{t(`Gas costs:`)}</p>
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-2 text-gray-400">{t(`Операция`)}</th>
            <th className="p-2 text-gray-400">{t(`Количество`)}</th>
            <th className="p-2 text-gray-400">{t(`Gas/операция`)}</th>
            <th className="p-2 text-gray-400">{t(`Total Gas`)}</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-300">
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Approvals (5 токенов)`)}</td>
            <td className="p-2">5</td>
            <td className="p-2">0.8 HYPE</td>
            <td className="p-2">4.0 HYPE</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Simple swaps`)}</td>
            <td className="p-2">30</td>
            <td className="p-2">1.5 HYPE</td>
            <td className="p-2">45.0 HYPE</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Split-routing swaps`)}</td>
            <td className="p-2">15</td>
            <td className="p-2">2.2 HYPE</td>
            <td className="p-2">33.0 HYPE</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Limit orders (HyperCore)`)}</td>
            <td className="p-2">5</td>
            <td className="p-2">1.0 HYPE</td>
            <td className="p-2">5.0 HYPE</td>
          </tr>
          <tr className="bg-hyper-800/20">
            <td className="p-2 font-bold">{t(`Total`)}</td>
            <td className="p-2"></td>
            <td className="p-2"></td>
            <td className="p-2 font-bold">87 HYPE</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-gray-300 mb-2">{t(`Стоимость: 87 HYPE × $2.50 = $217.50/месяц ($2,610/год)`)}</p>
    <p className="text-gray-300 mb-4">{t(`% от объёма: $217.50 / $50,000 = 0.44%`)}</p>

    <p className="text-gray-300 mb-2">{t(`Оптимизация:`)}</p>
    <ul className="list-disc list-inside text-gray-300">
      <li>{t(`Off-peak trading: -30% → $152.25/месяц ($1,827/год)`)}</li>
      <li>{t(`Больше limit orders: -15% → $184.88/месяц ($2,219/год)`)}</li>
      <li>{t(`Итоговая экономия: $391-783/год`)}</li>
    </ul>
  </div>

  {/* Сценарий 3 */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`Сценарий 3: Кит ($1,000,000/месяц объём)`)}</h3>

    <p className="text-gray-300 mb-4">{t(`Профиль:`)}</p>
    <ul className="list-disc list-inside text-gray-300 mb-6">
      <li>{t(`100 свапов/месяц, средний swap $10,000`)}</li>
      <li>{t(`80% через HyperCore Spot (limit orders)`)}</li>
      <li>{t(`20% через Hypertrade (срочные market swaps)`)}</li>
    </ul>

    <p className="text-gray-300 mb-2">{t(`Gas costs:`)}</p>
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-2 text-gray-400">{t(`Операция`)}</th>
            <th className="p-2 text-gray-400">{t(`Количество`)}</th>
            <th className="p-2 text-gray-400">{t(`Gas/операция`)}</th>
            <th className="p-2 text-gray-400">{t(`Total Gas`)}</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-300">
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Approvals (10 токенов)`)}</td>
            <td className="p-2">10</td>
            <td className="p-2">0.8 HYPE</td>
            <td className="p-2">8.0 HYPE</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Limit orders (HyperCore)`)}</td>
            <td className="p-2">80</td>
            <td className="p-2">1.0 HYPE</td>
            <td className="p-2">80.0 HYPE</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Split-routing swaps`)}</td>
            <td className="p-2">20</td>
            <td className="p-2">2.5 HYPE</td>
            <td className="p-2">50.0 HYPE</td>
          </tr>
          <tr className="bg-hyper-800/20">
            <td className="p-2 font-bold">{t(`Total`)}</td>
            <td className="p-2"></td>
            <td className="p-2"></td>
            <td className="p-2 font-bold">138 HYPE</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-gray-300 mb-2">{t(`Стоимость: 138 HYPE × $2.50 = $345/месяц ($4,140/год)`)}</p>
<p className="text-gray-300 mb-2">{t(`% от объёма: $345 / $1,000,000 = 0.035%`)}</p>

<p className="text-gray-300 mb-2">{t(`Оптимизация:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4">
  <li>{t(`Off-peak для limit orders: -20% → $276/месяц ($3,312/год)`)}</li>
  <li>{t(`Batching approvals: -10% → $310.50/месяц ($3,726/год)`)}</li>
  <li>{t(`Итоговая экономия: $414-828/год`)}</li>
</ul>

<p className="text-gray-300">{t(`Важно: для китов gas cost минимален относительно объёма (0.035%). Главная экономия — это price impact (где HyperCore Spot экономит $10,000-50,000/месяц).`)}</p>
</div>
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" /> {t(`Инструменты мониторинга и оптимизации`)}
</h2>

<div className="space-y-12 not-prose mb-12">
  {/* Hyperliquid Gas Tracker */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`1. Hyperliquid Gas Tracker`)}</h3>
    <p className="text-gray-300 mb-2">{t(`URL: https://explorer.hyperliquid.xyz/gas`)}</p>
    <p className="text-gray-300 mb-2">{t(`Что показывает:`)}</p>
    <ul className="list-disc list-inside text-gray-300 mb-4">
      <li>{t(`Текущий gas price (в Gwei или HYPE/unit)`)}</li>
      <li>{t(`График за 24 часа / 7 дней / 30 дней`)}</li>
      <li>{t(`Средний, минимальный, максимальный gas price`)}</li>
      <li>{t(`Прогноз на следующие 6 часов`)}</li>
    </ul>
    <p className="text-gray-300 mb-2">{t(`Как использовать:`)}</p>
    <ol className="list-decimal list-inside text-gray-300">
      <li>{t(`Проверьте текущий gas price`)}</li>
      <li>{t(`Сравните с average 24h`)}</li>
      <li>{t(`Если выше average → дождитесь снижения (если несрочно)`)}</li>
      <li>{t(`Если ниже average → хорошее время для торговли`)}</li>
    </ol>
  </div>

  {/* Hypertrade Gas Estimator */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`2. Hypertrade Gas Estimator`)}</h3>
    <p className="text-gray-300 mb-2">{t(`Встроен в https://ht.xyz`)}</p>
    <p className="text-gray-300 mb-2">{t(`Что показывает:`)}</p>
    <ul className="list-disc list-inside text-gray-300 mb-4">
      <li>{t(`Gas cost для вашего конкретного swap`)}</li>
      <li>{t(`Перед выполнением транзакции`)}</li>
    </ul>
    <p className="text-gray-300 mb-2">{t(`Пример:`)}</p>
    <pre className="bg-hyper-800/50 text-gray-300 p-4 rounded mb-4">
      {t(`You will swap: 10,000 USDC → ETH

Route: 60% HyperCore Spot + 40% Hyperswap
Gas cost: 2.3 HYPE (~$5.75)

Compare:
- Single DEX: 1.5 HYPE (~$3.75) [Gas: +$2.00, but Impact: +$150]
- Recommendation: Split-routing (saves $148 total)`)}
    </pre>
  </div>

  {/* Gas Alerts */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`3. Gas Alerts (Telegram/Discord боты)`)}</h3>
    <p className="text-gray-300 mb-2">{t(`Настройте уведомления, когда gas price падает ниже порога.`)}</p>
    <p className="text-gray-300 mb-2">{t(`Пример бота:`)}</p>
    <pre className="bg-hyper-800/50 text-gray-300 p-4 rounded mb-4">
      {t(`@HyperliquidGasBot (Telegram)

Команда: /setalert 0.9

Бот отправит сообщение, когда gas price < 0.9× базового:

🔔 Gas Alert!
Current gas price: 0.85× base
This is a good time to trade!
https://ht.xyz`)}
    </pre>
    <p className="text-gray-300 mb-2">{t(`Как настроить:`)}</p>
    <ol className="list-decimal list-inside text-gray-300">
      <li>{t(`Найдите бота в Telegram/Discord`)}</li>
      <li>{t(`Установите threshold (например, 0.9× base)`)}</li>
      <li>{t(`Получайте уведомления`)}</li>
    </ol>
  </div>

  {/* Portfolio trackers */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`4. Portfolio trackers с gas analytics`)}</h3>
    <p className="text-gray-300 mb-2">{t(`CoinTracker, Koinly, Delta — показывают ваши затраты на gas за период.`)}</p>
    <p className="text-gray-300 mb-2">{t(`Пример отчёта:`)}</p>
    <pre className="bg-hyper-800/50 text-gray-300 p-4 rounded mb-4">
      {t(`Your Hyperliquid Activity (Last 30 Days)

Total swaps: 45
Total volume: $78,000
Total gas spent: 105 HYPE ($262.50)

Gas breakdown:
- Approvals: 12 HYPE (11%)
- Swaps: 88 HYPE (84%)
- Transfers: 5 HYPE (5%)

Average gas/swap: 2.33 HYPE ($5.83)

💡 Optimization tip:
Trade during off-peak hours to save ~30% ($78.75/month)`)}
    </pre>
  </div>
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" /> {t(`Практические стратегии экономии`)}
</h2>

<div className="space-y-12 not-prose mb-12">
  {/* Стратегия 1 */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`Стратегия 1: “Off-Peak Trader”`)}</h3>
    <p className="text-gray-300 mb-2">{t(`Принцип: торгуйте только в часы низкого gas.`)}</p>
    <p className="text-gray-300 mb-2">{t(`Реализация:`)}</p>
    <ol className="list-decimal list-inside text-gray-300 mb-2">
      <li>{t(`Определите ваши несрочные свапы (например, DCA, ребалансировка)`)}</li>
      <li>{t(`Установите Gas Alert (threshold: <0.95× base)`)}</li>
      <li>{t(`Выполняйте свапы только когда получаете alert`)}</li>
    </ol>
    <p className="text-gray-300 mb-2">{t(`Результат:`)}</p>
    <ul className="list-disc list-inside text-gray-300">
      <li>{t(`Экономия 25-35% на gas`)}</li>
      <li>{t(`Для трейдера с $50k/месяц объём: $600-800/год экономии`)}</li>
    </ul>
  </div>

  {/* Стратегия 2 */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`Стратегия 2: “Whale Limit Orders”`)}</h3>
    <p className="text-gray-300 mb-2">{t(`Принцип: для крупных ордеров всегда используйте HyperCore Spot limit orders.`)}</p>
    <p className="text-gray-300 mb-2">{t(`Реализация:`)}</p>
    <ol className="list-decimal list-inside text-gray-300 mb-2">
      <li>{t(`Крупный ордер (>$20k) → НЕ market swap`)}</li>
      <li>{t(`Разместите limit order на HyperCore Spot по целевой цене`)}</li>
      <li>{t(`Подождите 1-6 часов исполнения`)}</li>
    </ol>
    <p className="text-gray-300 mb-2">{t(`Результат:`)}</p>
    <ul className="list-disc list-inside text-gray-300">
      <li>{t(`Экономия на gas: 30-50%`)}</li>
      <li>{t(`Экономия на price impact: 1,000-10,000× больше, чем экономия на gas`)}</li>
      <li>{t(`Для кита с $1M/месяц объём: $30,000-50,000/месяц экономии`)}</li>
    </ul>
  </div>

  {/* Стратегия 3 */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`Стратегия 3: “Batch Everything”`)}</h3>
    <p className="text-gray-300 mb-2">{t(`Принцип: накапливайте операции и выполняйте батчем.`)}</p>
    <p className="text-gray-300 mb-2">{t(`Реализация:`)}</p>
    <ol className="list-decimal list-inside text-gray-300 mb-2">
      <li>{t(`Вместо 10 малых свапов ($500 каждый) в течение дня`)}</li>
      <li>{t(`Накопите → сделайте 2 крупных свапа ($2,500 каждый)`)}</li>
      <li>{t(`Используйте Hypertrade (split-routing эффективнее для крупных)`)}</li>
    </ol>
    <p className="text-gray-300 mb-2">{t(`Результат:`)}</p>
    <ul className="list-disc list-inside text-gray-300">
      <li>{t(`Экономия на gas: 15-25% (меньше транзакций)`)}</li>
      <li>{t(`Экономия на price impact: split-routing эффективнее`)}</li>
      <li>{t(`Для активного трейдера: $300-500/год экономии`)}</li>
    </ul>
  </div>

  {/* Стратегия 4 */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`Стратегия 4: “Limited Approvals for Security”`)}</h3>
    <p className="text-gray-300 mb-2">{t(`Принцип: используйте limited approvals для безопасности, но оптимизируйте частоту.`)}</p>
    <p className="text-gray-300 mb-2">{t(`Реализация:`)}</p>
    <ol className="list-decimal list-inside text-gray-300 mb-2">
      <li>{t(`Для часто используемых токенов (USDC, ETH): unlimited approval`)}</li>
      <li>{t(`Для редких токенов: limited approval каждый раз`)}</li>
      <li>{t(`Регулярно проверяйте approvals (раз в месяц) и отзывайте старые`)}</li>
    </ol>
    <p className="text-gray-300 mb-2">{t(`Результат:`)}</p>
    <ul className="list-disc list-inside text-gray-300">
      <li>{t(`Баланс между безопасностью и экономией gas`)}</li>
      <li>{t(`Экономия: $100-200/год для активного трейдера`)}</li>
    </ul>
  </div>

  {/* Чек-лист */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`Чек-лист оптимизации gas`)}</h3>
    <p className="text-gray-300 mb-2">{t(`Распечатайте и следуйте перед каждым крупным swap:`)}</p>
    <p className="text-gray-300 mb-2">{t(`Перед swap:`)}</p>
    <ul className="list-disc list-inside text-gray-300 mb-4">
      <li>{t(`[ ] Проверил текущий gas price (explorer.hyperliquid.xyz/gas)`)}</li>
      <li>{t(`[ ] Swap несрочный? → Жду off-peak hours (00:00-08:00 UTC)`)}</li>
      <li>{t(`[ ] Swap >$20,000? → Рассмотрел limit order на HyperCore Spot`)}</li>
      <li>{t(`[ ] Проверил route в Hypertrade (Compare Routes)`)}</li>
      <li>{t(`[ ] Выбрал оптимальный маршрут (balance между gas и price impact)`)}</li>
      <li>{t(`[ ] Установил адекватный slippage (1-2% для большинства пар)`)}</li>
    </ul>
    <p className="text-gray-300 mb-2">{t(`Параметры транзакции:`)}</p>
    <ul className="list-disc list-inside text-gray-300 mb-4">
      <li>{t(`[ ] Gas limit: использую рекомендованный (не меняю вручную)`)}</li>
      <li>{t(`[ ] Priority fee: стандартный (не переплачиваю, если не срочно)`)}</li>
      <li>{t(`[ ] Approval: проверил, нужен ли (если первый swap токена)`)}</li>
    </ul>
    <p className="text-gray-300 mb-2">{t(`После swap:`)}</p>
    <ul className="list-disc list-inside text-gray-300">
      <li>{t(`[ ] Записал gas cost в трекер (для анализа)`)}</li>
      <li>{t(`[ ] Сравнил с ожидаемым (если сильно отличается → проверить причину)`)}</li>
      <li>{t(`[ ] Отметил время (для понимания паттернов gas price)`)}</li>
    </ul>
  </div>

  {/* Заключение и таблица */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`Заключение: ключевые takeaways`)}</h3>
    <p className="text-gray-300 mb-4">{t(`Основные принципы экономии gas:`)}</p>
    <ol className="list-decimal list-inside text-gray-300 mb-4">
      <li>{t(`Торгуйте в off-peak hours (00:00-08:00 UTC, выходные) → экономия 25-35%`)}</li>
      <li>{t(`Используйте HyperCore Spot для крупных ордеров (>$20k) → экономия на gas 30-50% + огромная экономия на price impact`)}</li>
      <li>{t(`Батчите операции где возможно → экономия 15-25%`)}</li>
      <li>{t(`Не экономьте на gas, если это увеличивает price impact → $2 дополнительного gas может сэкономить $200+ на impact`)}</li>
      <li>{t(`Используйте Hypertrade — автоматическая оптимизация маршрута и gas limit`)}</li>
    </ol>

    <p className="text-gray-300 mb-4">{t(`Экономия для разных типов трейдеров:`)}</p>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-4 text-gray-400 font-medium">{t(`Профиль`)}</th>
            <th className="p-4 text-gray-400 font-medium">{t(`Объём/месяц`)}</th>
            <th className="p-4 text-red-400 font-medium">{t(`Без оптимизации`)}</th>
            <th className="p-4 text-green-400 font-medium">{t(`С оптимизацией`)}</th>
            <th className="p-4 text-yellow-400 font-medium">{t(`Экономия/год`)}</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr className="border-b border-gray-800 bg-hyper-800/20">
            <td className="p-4 text-white">{t(`Малый`)}</td>
            <td className="p-4 text-gray-300">{t(`$1,000`)}</td>
            <td className="p-4 text-red-300">{t(`$540/год`)}</td>
            <td className="p-4 text-green-300">{t(`$378/год`)}</td>
            <td className="p-4 text-yellow-300 font-bold">{t(`$162`)}</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-4 text-white">{t(`Средний`)}</td>
            <td className="p-4 text-gray-300">{t(`$10,000`)}</td>
            <td className="p-4 text-red-300">{t(`$1,080/год`)}</td>
            <td className="p-4 text-green-300">{t(`$756/год`)}</td>
            <td className="p-4 text-yellow-300 font-bold">{t(`$324`)}</td>
          </tr>
          <tr className="border-b border-gray-800 bg-hyper-800/20">
            <td className="p-4 text-white">{t(`Активный`)}</td>
            <td className="p-4 text-gray-300">{t(`$50,000`)}</td>
            <td className="p-4 text-red-300">{t(`$2,610/год`)}</td>
            <td className="p-4 text-green-300">{t(`$1,827/год`)}</td>
            <td className="p-4 text-yellow-300 font-bold">{t(`$783`)}</td>
          </tr>
          <tr className="bg-hyper-800/20">
            <td className="p-4 text-white">{t(`Кит`)}</td>
            <td className="p-4 text-gray-300">{t(`$1,000,000`)}</td>
            <td className="p-4 text-red-300">{t(`$4,140/год`)}</td>
            <td className="p-4 text-green-300">{t(`$3,312/год`)}</td>
            <td className="p-4 text-yellow-300 font-bold">{t(`$828`)}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-gray-300 mt-6">{t(`Важно: для китов главная экономия — это price impact (десятки тысяч долларов/месяц), а не gas ($300-800/год).`)}</p>

    <p className="text-gray-300 mt-6">{t(`Начните экономить сегодня:`)}</p>
    <ol className="list-decimal list-inside text-gray-300">
      <li>{t(`🕐 Проверяйте gas price перед каждым swap: explorer.hyperliquid.xyz/gas`)}</li>
      <li>{t(`📊 Используйте Hypertrade для автоматической оптимизации: https://ht.xyz`)}</li>
      <li>{t(`📈 Для крупных ордеров используйте HyperCore Spot: https://hyperliquid.xyz/trade`)}</li>
      <li>{t(`⏰ Торгуйте в off-peak где возможно (00:00-08:00 UTC)`)}</li>
      <li>{t(`📝 Отслеживайте затраты на gas (CoinTracker, Koinly)`)}</li>
    </ol>

    <p className="text-gray-300 mt-4">{t(`Оптимизация gas — это привычка, а не разовое действие. Следуйте принципам выше, и вы сэкономите сотни или тысячи долларов в год! 💰`)}</p>
  </div>
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" /> {t(`Ресурсы и инструменты`)}
</h2>

<div className="space-y-8 not-prose mb-12">
  {/* Мониторинг gas */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`📊 Мониторинг gas:`)}</h3>
    <ul className="list-disc list-inside text-gray-300 space-y-1">
      <li>{t(`Hyperliquid Gas Tracker: https://explorer.hyperliquid.xyz/gas`)}</li>
      <li>{t(`Hypertrade Gas Estimator: встроен в https://ht.xyz`)}</li>
    </ul>
  </div>

  {/* Инструменты */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`🛠️ Инструменты:`)}</h3>
    <ul className="list-disc list-inside text-gray-300 space-y-1">
      <li>{t(`Hypertrade (оптимизированный routing): https://ht.xyz`)}</li>
      <li>{t(`HyperCore Spot (limit orders): https://hyperliquid.xyz/trade`)}</li>
      <li>{t(`Revoke.cash (проверка approvals): https://revoke.cash`)}</li>
    </ul>
  </div>

  {/* Документация */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`📚 Документация:`)}</h3>
    <ul className="list-disc list-inside text-gray-300 space-y-1">
      <li>{t(`Gas optimization guide: https://docs.hypertrade.io/gas-optimization`)}</li>
      <li>{t(`HyperCore Spot docs: https://docs.hyperliquid.xyz`)}</li>
      <li>{t(`Batching guide: https://docs.hypertrade.io/batching`)}</li>
    </ul>
  </div>

 {/* Сообщество */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`💬 Сообщество:`)}</h3>
    <ul className="list-disc list-inside text-gray-300 space-y-1">
      <li>{t(`Discord (#gas-optimization): https://discord.gg/hypertrade`)}</li>
      <li>{t(`Twitter: @Hypertrade_xyz`)}</li>
      <li>{t(`Telegram: @HypertradeOfficial`)}</li>
    </ul>
  </div>

  {/* Поддержка */}
  <div className="bg-hyper-800/20 border border-hyper-accent/20 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">{t(`📧 Поддержка:`)}</h3>
    <ul className="list-disc list-inside text-gray-300 space-y-1">
      <li>{t(`support@hypertrade.io`)}</li>
      <li>{t(`tech@hypertrade.io`)}</li>
    </ul>
  </div>
</div>


        </article>
      </div>

    </section>
  );
};
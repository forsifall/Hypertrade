"use client"
import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { BarChart, Calendar, Clock, Cpu, Eye, LineChart, PieChart, TrendingUp, Zap, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { useTranslation } from "react-i18next";

export const ArticleLiquidityAnalysis = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "liquidity-analysis-guide");
  
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
           <div className="flex flex-wrap gap-4 text-sm font-medium text-blue-400 mb-4">
             <span className="bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">{post.category}</span>
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

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">
    {t(`Как читать графики ликвидности и выбирать лучшее время для обмена`)}
  </h2>

  <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-hyper-accent pl-6 italic">
    {t(`📊 Почему понимание ликвидности — ваше главное конкурентное преимущество`)}
  </p>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8">
    <p>{t(`Представьте две ситуации:`)}</p>

    <div className="mt-4 space-y-3">
      <div className=" p-4 rounded-xl">
        <h4 className="text-red-400 font-bold mb-2">{t(`Трейдер А (не анализирует ликвидность):`)}</h4>
        <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
          <li>{t(`Делает своп $20,000 в 21:00 UTC (low liquidity)`)}</li>
          <li>{t(`Price impact: 8.5%`)}</li>
          <li>{t(`Slippage: 6.2%`)}</li>
          <li>{t(`Потеря: $1,700`)}</li>
        </ul>
      </div>

      <div className=" p-4 rounded-xl">
        <h4 className="text-green-400 font-bold mb-2">{t(`Трейдер Б (анализирует ликвидность):`)}</h4>
        <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
          <li>{t(`Делает тот же своп в 15:00 UTC (peak liquidity)`)}</li>
          <li>{t(`Price impact: 2.1%`)}</li>
          <li>{t(`Slippage: 1.4%`)}</li>
          <li>{t(`Потеря: $280`)}</li>
        </ul>
      </div>
    </div>

    <p className="mt-4 font-bold text-white">{t(`Разница: $1,420 на ОДНОЙ транзакции.`)}</p>
    <p className="mt-2 font-bold text-white">{t(`Годовая разница (50 свопов):`)}</p>
    <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
      <li>{t(`Трейдер А: потери $85,000`)}</li>
      <li>{t(`Трейдер Б: потери $14,000`)}</li>
      <li>{t(`Экономия: $71,000/год просто за знание КОГДА торговать`)}</li>
    </ul>
  </div>

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Сегодня вы научитесь:`)}</h3>
  <ul className="text-sm text-gray-300 list-disc list-inside space-y-1 mb-8">
    <li>{t(`Читать графики ликвидности (order book depth, AMM pool depth)`)}</li>
    <li>{t(`Определять оптимальное время для свопа`)}</li>
    <li>{t(`Анализировать spread и market depth`)}</li>
    <li>{t(`Использовать Hypertrade для максимальной эффективности`)}</li>
  </ul>

  <p className="text-gray-300 mb-12 italic">{t(`Это не теория. Это практические навыки, которые сэкономят вам десятки тысяч долларов.`)}</p>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`🧠 Что такое ликвидность: фундаментальное понимание`)}</h2>
  
  <h3 className="text-lg font-semibold text-white mt-4 mb-2">{t(`Определение`)}</h3>
  <p className="text-gray-300 mb-6">{t(`Ликвидность = возможность быстро купить или продать актив БЕЗ значительного влияния на его цену.`)}</p>

  <h4 className="font-bold text-white mb-2">{t(`Высокая ликвидность:`)}</h4>
  <p className="text-gray-300 mb-4">{t(`Пример: BTC/USDT на Binance`)}</p>
  <ul className="text-sm text-gray-300 list-disc list-inside mb-6">
    <li>{t(`Order book: $100M в пределах 0.1% от mid-price`)}</li>
    <li>{t(`Своп $1M → price impact <0.2%`)}</li>
    <li>{t(`Мгновенное исполнение`)}</li>
  </ul>
  <p className="text-gray-300 mb-8">{t(`Результат: Можно купить/продать крупные суммы без потерь`)}</p>

  <h4 className="font-bold text-white mb-2">{t(`Низкая ликвидность:`)}</h4>
  <p className="text-gray-300 mb-4">{t(`Пример: LOW_CAP_TOKEN/USDC на малом DEX`)}</p>
  <ul className="text-sm text-gray-300 list-disc list-inside mb-6">
    <li>{t(`Order book: $50k в пределах 1% от mid-price`)}</li>
    <li>{t(`Своп $50k → price impact 25%`)}</li>
    <li>{t(`Может не исполниться вообще`)}</li>
  </ul>
  <p className="text-gray-300 mb-8">{t(`Результат: Крупные свопы вызывают огромные потери`)}</p>

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Два типа ликвидности на Hyperliquid`)}</h3>

  <h4 className="font-semibold text-white mt-4 mb-2">{t(`1. Order Book Liquidity (HyperCore Spot)`)}</h4>
  <p className="text-gray-300 mb-2">{t(`Order Book = список всех buy/sell ордеров по разным ценам`)}</p>

  <pre className="bg-hyper-800/50 p-4 rounded-xl mb-6 overflow-x-auto text-sm text-gray-300">
{t(`Пример HYPE/USDC:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ASKS (sell orders):
Price: $25.10 | Size: 500 HYPE | Total: $12,550
Price: $25.05 | Size: 1,200 HYPE | Total: $30,060
Price: $25.03 | Size: 2,000 HYPE | Total: $50,060
Price: $25.02 | Size: 800 HYPE | Total: $20,016
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MID-PRICE: $25.00 (средняя между best ask и best bid)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BIDS (buy orders):
Price: $24.98 | Size: 900 HYPE | Total: $22,482
Price: $24.95 | Size: 1,500 HYPE | Total: $37,425
Price: $24.90 | Size: 2,500 HYPE | Total: $62,250
Price: $24.85 | Size: 1,000 HYPE | Total: $24,850
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}
  </pre>

  <p className="text-gray-300 mb-6">{t(`Key metrics:`)}</p>
  <ul className="text-sm text-gray-300 list-disc list-inside mb-8">
    <li>{t(`Spread: $25.02 - $24.98 = $0.04 (0.16%)`)}</li>
    <li>{t(`Depth within 0.2%: $112,626 (обе стороны)`)}</li>
  </ul>

  <h4 className="font-semibold text-white mt-4 mb-2">{t(`2. AMM Pool Liquidity (Hyperswap, Kittenswap, Prjx)`)}</h4>
  <p className="text-gray-300 mb-2">{t(`AMM Pool = smart contract с двумя токенами, цена определяется формулой`)}</p>

  <pre className="bg-hyper-800/50 p-4 rounded-xl mb-8 overflow-x-auto text-sm text-gray-300">
{t(`Пример HYPE/USDC pool:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reserve HYPE: 50,000 tokens
Reserve USDC: $1,250,000
Current price: $1,250,000 / 50,000 = $25.00

Constant Product: k = 50,000 × 1,250,000 = 62,500,000,000

Если купить 1,000 HYPE:
New HYPE reserve: 49,000
New USDC reserve: 62,500,000,000 / 49,000 = $1,275,510
USDC spent: $25,510
Price impact: 2.04%
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}
  </pre>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`📈 Как читать графики ликвидности: пошаговое руководство`)}</h2>

  <h4 className="font-semibold text-white mt-4 mb-2">{t(`1. Order Book Depth Chart (Depth Chart)`)}</h4>
  <p className="text-gray-300 mb-2">{t(`Что это: Визуализация order book, показывающая кумулятивную ликвидность на разных ценовых уровнях.`)}</p>
  <p className="text-gray-300 mb-4">{t(`Как выглядит:`)}</p>

  <div className="mb-8">
  <h3 className="text-xl font-bold text-white mb-4">{t(`Cumulative Liquidity / Orderbook`)}</h3>

  <div className="relative flex items-end gap-2 h-48 border-l border-b border-gray-700 px-4">
    {/* Bid side (buyers) */}
    {[
      { price: "$24.50", liquidity: 50, color: "bg-green-500" },
      { price: "$25.00", liquidity: 100, color: "bg-green-500" },
      { price: "$25.50", liquidity: 150, color: "bg-green-500" },
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-center">
        <div
          className={`${item.color} w-6 rounded-t`}
          style={{ height: `${(item.liquidity / 150) * 100}px` }}
        ></div>
        <span className="text-gray-300 text-xs mt-1">{t(item.price)}</span>
      </div>
    ))}

    {/* Ask side (sellers) */}
    {[
      { price: "$24.50", liquidity: 150, color: "bg-red-500" },
      { price: "$25.00", liquidity: 100, color: "bg-red-500" },
      { price: "$25.50", liquidity: 50, color: "bg-red-500" },
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-center">
        <div
          className={`${item.color} w-6 rounded-t`}
          style={{ height: `${(item.liquidity / 150) * 100}px` }}
        ></div>
        <span className="text-gray-300 text-xs mt-1">{t(item.price)}</span>
      </div>
    ))}
  </div>

  {/* Current price marker */}

</div>

  <h4 className="font-semibold text-white mt-4 mb-2">{t(`Интерпретация:`)}</h4>
  <ul className="text-sm text-gray-300 list-disc list-inside mb-6">
    <li>{t(`Признаки ВЫСОКОЙ ликвидности:`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`Плавные, симметричные кривые с обеих сторон`)}</li>
      <li>{t(`Большой кумулятивный объём ($500k+ в ±2%)`)}</li>
      <li>{t(`Узкий spread (current price близко к обеим кривым)`)}</li>
    </ul>
    <li className="mt-2">{t(`Пример:`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`Mid-price: $25.00`)}</li>
      <li>{t(`Liquidity within ±0.5%: $800,000`)}</li>
      <li>{t(`→ Можно свопать $50k с impact <1%`)}</li>
    </ul>

    <li className="mt-4">{t(`Признаки НИЗКОЙ ликвидности:`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`Резкие, несимметричные кривые`)}</li>
      <li>{t(`Малый кумулятивный объём ($10k-$50k в ±2%)`)}</li>
      <li>{t(`Широкий spread (large gap между bid/ask)`)}</li>
    </ul>
    <li className="mt-2">{t(`Пример:`)}</li>
    <ul className="list-disc list-inside ml-6">
      <li>{t(`Mid-price: $25.00`)}</li>
      <li>{t(`Liquidity within ±0.5%: $30,000`)}</li>
      <li>{t(`→ Своп $20k вызовет impact 10-15%`)}</li>
    </ul>
  </ul>

</article>


      <article className="prose prose-invert prose-lg max-w-none">

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Практический пример: анализ HyperCore Spot depth chart`)}</h2>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`Шаг 1: Откройте график`)}</h3>
  <p className="text-gray-300 mb-4">
    {t(`На https://app.hyperliquid.xyz/trade → выберите пару (например, HYPE/USDC) → вкладка “Depth”`)}
  </p>

 <h3 className="text-xl font-bold text-white mt-6 mb-2">
  {t(`Шаг 2: Оцените симметрию`)}
</h3>

<p className="text-gray-300 mb-4">{t(`Хорошая ликвидность (симметричный график):`)}</p>

<div className="flex items-end gap-4 mb-6 h-28 border-b border-gray-700">
  {/* Bid */}
  <div className="flex flex-col items-center">
    <div
      className="w-12 bg-green-500 rounded-t"
      style={{ height: `${(500 / 500) * 70}px` }}
    ></div>
    <span className="text-gray-300 text-sm mt-1">
      {t(`$500k`)}
    </span>
    <span className="text-gray-400 text-xs mt-0.5">
      {t(`Bid`)}
    </span>
  </div>
  {/* Ask */}
  <div className="flex flex-col items-center">
    <div
      className="w-12 bg-blue-500 rounded-t"
      style={{ height: `${(480 / 500) * 70}px` }}
    ></div>
    <span className="text-gray-300 text-sm mt-1">
      {t(`$480k`)}
    </span>
    <span className="text-gray-400 text-xs mt-0.5">
      {t(`Ask`)}
    </span>
  </div>
</div>

<p className="text-gray-300 mb-4">{t(`Плохая ликвидность (несимметричный):`)}</p>

<div className="flex items-end gap-4 mb-6 h-28 border-b border-gray-700">
  {/* Bid */}
  <div className="flex flex-col items-center">
    <div
      className="w-12 bg-green-500 rounded-t"
      style={{ height: `${(100 / 600) * 70}px` }}
    ></div>
    <span className="text-gray-300 text-sm mt-1">
      {t(`$100k`)}
    </span>
    <span className="text-gray-400 text-xs mt-0.5">
      {t(`Bid`)}
    </span>
  </div>
  {/* Ask */}
  <div className="flex flex-col items-center">
    <div
      className="w-12 bg-blue-500 rounded-t"
      style={{ height: `${(600 / 600) * 70}px` }}
    ></div>
    <span className="text-gray-300 text-sm mt-1">
      {t(`$600k`)}
    </span>
    <span className="text-gray-400 text-xs mt-0.5">
      {t(`Ask`)}
    </span>
  </div>
</div>

<p className="text-gray-300 text-sm">
  {t(`Ratio (Bid / Ask):`)} 1.04 — {t(`близко к 1.0 (идеально)`)} <br />
  {t(`Ratio (Bid / Ask):`)} 0.17 — {t(`дисбаланс (давление на снижение цены)`)}
</p>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`Шаг 3: Измерьте глубину`)}</h3>
  <p className="text-gray-300 mb-4">{t(`Критические зоны для разных размеров свопа:`)}</p>

  <ul className="text-sm text-gray-300 list-disc list-inside mb-6 space-y-2">
    <li>
      {t(`Своп $5,000:`)}
      <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
        <li>{t(`Проверьте liquidity в пределах ±0.5% от mid-price`)}</li>
        <li>{t(`Нужно: минимум $50k`)}</li>
        <li>{t(`Если меньше: ожидайте impact >3%`)}</li>
      </ul>
    </li>
    <li>
      {t(`Своп $20,000:`)}
      <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
        <li>{t(`Проверьте liquidity в пределах ±1% от mid-price`)}</li>
        <li>{t(`Нужно: минимум $200k`)}</li>
        <li>{t(`Если меньше: ожидайте impact >5%`)}</li>
      </ul>
    </li>
    <li>
      {t(`Своп $50,000:`)}
      <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
        <li>{t(`Проверьте liquidity в пределах ±2% от mid-price`)}</li>
        <li>{t(`Нужно: минимум $500k`)}</li>
        <li>{t(`Если меньше: разделите на части`)}</li>
      </ul>
    </li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`Шаг 4: Проверьте spread`)}</h3>
  <p className="text-gray-300 mb-2">{t(`Spread = Best Ask - Best Bid`)}</p>

  <div className="bg-hyper-800/30 p-4 rounded-xl mb-4 border border-gray-700">
    <p className="text-gray-300 mb-2 font-semibold">{t(`Узкий spread (хорошо):`)}</p>
    <p className="text-gray-300 mb-1">{t(`Best Bid: $24.99`)}</p>
    <p className="text-gray-300 mb-1">{t(`Best Ask: $25.01`)}</p>
    <p className="text-gray-300 mb-1">{t(`Spread: $0.02 (0.08%)`)}</p>
    <p className="text-gray-300">{t(`→ Low-cost entry/exit`)}</p>
  </div>

  <div className="bg-hyper-800/30 p-4 rounded-xl mb-8 border border-gray-700">
    <p className="text-gray-300 mb-2 font-semibold">{t(`Широкий spread (плохо):`)}</p>
    <p className="text-gray-300 mb-1">{t(`Best Bid: $24.80`)}</p>
    <p className="text-gray-300 mb-1">{t(`Best Ask: $25.20`)}</p>
    <p className="text-gray-300 mb-1">{t(`Spread: $0.40 (1.6%)`)}</p>
    <p className="text-gray-300">{t(`→ Instant loss 1.6% на entry`)}</p>
  </div>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`2. AMM Liquidity Pool Analysis`)}</h2>

  <p className="text-gray-300 mb-4">{t(`Что анализировать:`)}</p>
  <p className="text-gray-300 mb-4">{t(`Пример Hyperswap HYPE/USDC pool:`)}</p>

  <pre className="bg-hyper-800/50 p-4 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TVL (Total Value Locked): $5,000,000
24h Volume: $800,000
APY для LP: 15.2%
Fee tier: 0.3%

Reserves:
HYPE: 100,000 tokens
USDC: $2,500,000
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}
  </pre>

  <p className="text-gray-300 mb-4">{t(`Формула для расчёта price impact:`)}</p>
  <pre className="bg-hyper-800/50 p-4 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`Price Impact = (Amount_In / Reserve_In) / (1 + Amount_In / Reserve_In)`)}
  </pre>

  <p className="text-gray-300 mb-4">{t(`Пример:`)}</p>
  <pre className="bg-hyper-800/50 p-4 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`Своп: $50,000 USDC → HYPE
Reserve USDC: $2,500,000

Impact = ($50,000 / $2,500,000) / (1 + $50,000 / $2,500,000)
       = 0.02 / 1.02
       = 0.0196 = 1.96%

Expected output:
No impact: $50,000 / $25 = 2,000 HYPE
With impact: 2,000 × (1 - 0.0196) = 1,961 HYPE
Loss: 39 HYPE = $975`)}
  </pre>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`Правило для AMM pools:`)}</h3>
  <pre className="bg-hyper-800/50 p-4 rounded-xl mb-12 text-sm text-gray-300 overflow-x-auto">
{t(`TVL пула	Безопасный размер свопа	Ожидаемый impact
<$500k	<$5k	2–5%
$500k–$2M	$5k–$20k	1–3%
$2M–$10M	$20k–$100k	0.5–2%
>$10M	$100k+	0.2–1%
Safe rule: Своп не должен превышать 2% от TVL пула для impact <2%`)}
  </pre>

</article>

<article className="prose prose-invert prose-lg max-w-none">

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`⏰ Лучшее время для торговли: временной анализ ликвидности`)}</h2>

  <p className="text-gray-300 mb-4">{t(`Глобальный паттерн ликвидности (24-часовой цикл)`)}</p>
  <p className="text-gray-300 mb-6">{t(`Данные основаны на анализе Hyperliquid + глобальных крипто-рынков:`)}</p>

  <p className="text-gray-300 mb-2 font-semibold">{t(`LIQUIDITY HEATMAP (UTC time):`)}</p>
<div className="bg-hyper-800/50 p-6 rounded-xl mb-8 text-gray-300 space-y-4">
  {[
    {
      time: "00:00-04:00 UTC (Asia Early Morning)",
      liquidity: 40,
      volume: "Low",
      spread: "+50% wider",
      status: "🔴 AVOID (unless emergency)",
      color: "bg-red-500",
    },
    {
      time: "04:00-08:00 UTC (Asia Morning / EU Pre-market)",
      liquidity: 70,
      volume: "Medium",
      spread: "+20% wider",
      status: "🟡 ACCEPTABLE",
      color: "bg-yellow-400",
    },
    {
      time: "08:00-12:00 UTC (EU Morning / US Pre-market)",
      liquidity: 80,
      volume: "High",
      spread: "Normal",
      status: "🟢 GOOD",
      color: "bg-green-500",
    },
    {
      time: "12:00-16:00 UTC (EU Afternoon / US Morning) ⭐",
      liquidity: 100,
      volume: "Very High",
      spread: "Tightest",
      status: "🟢 OPTIMAL",
      color: "bg-green-600",
    },
    {
      time: "16:00-20:00 UTC (US Afternoon / Asia Pre-market)",
      liquidity: 90,
      volume: "High",
      spread: "+10% wider",
      status: "🟢 GOOD",
      color: "bg-green-500",
    },
    {
      time: "20:00-24:00 UTC (US Evening / Asia Night)",
      liquidity: 60,
      volume: "Medium-Low",
      spread: "+30% wider",
      status: "🟡 ACCEPTABLE (caution)",
      color: "bg-yellow-400",
    },
  ].map((item, i) => (
    <div key={i} className="space-y-1">
      <div className="flex justify-between items-center text-sm font-semibold">
        <span>{item.time}</span>
        <span>{item.status}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
        <div
          className={`${item.color} h-4`}
          style={{ width: `${item.liquidity}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400">
        <span>Volume: {item.volume}</span>
        <span>Spread: {item.spread}</span>
      </div>
    </div>
  ))}

  <p className="mt-4 text-sm text-gray-300 font-bold">
    Вывод: OPTIMAL window = 12:00–16:00 UTC
  </p>
</div>
  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`Практический тест: ликвидность в разное время`)}</h3>
  <p className="text-gray-300 mb-4">{t(`Эксперимент на HYPE/USDC (HyperCore Spot):`)}</p>

  <p className="text-gray-300 mb-2 font-semibold">{t(`Время: 03:00 UTC (Asia early morning)`)}</p>
  <pre className="bg-hyper-800/50 p-4 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Order book depth (±0.5%): $180,000
Best bid: $24.90
Best ask: $25.10
Spread: $0.20 (0.8%)

Своп $20,000:
Expected impact: 5.2%
Loss: $1,040`)}
  </pre>

  <p className="text-gray-300 mb-2 font-semibold">{t(`Время: 14:00 UTC (EU/US overlap) ⭐`)}</p>
  <pre className="bg-hyper-800/50 p-4 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Order book depth (±0.5%): $850,000
Best bid: $24.98
Best ask: $25.02
Spread: $0.04 (0.16%)

Своп $20,000:
Expected impact: 1.1%
Loss: $220

SAVINGS: $820 просто за выбор правильного времени!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}
  </pre>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`Недельный паттерн`)}</h3>
  <p className="text-gray-300 mb-2 font-semibold">{t(`WEEKLY LIQUIDITY PATTERN:`)}</p>
  <div className="bg-hyper-800/50 p-6 rounded-xl mb-8 text-gray-300 space-y-4">
  {[
    { day: "Monday", value: 80, note: "post-weekend recovery", color: "bg-green-500" },
    { day: "Tuesday", value: 100, note: "PEAK", color: "bg-green-600" },
    { day: "Wednesday", value: 100, note: "PEAK", color: "bg-green-600" },
    { day: "Thursday", value: 95, note: "", color: "bg-green-500" },
    { day: "Friday", value: 85, note: "начало снижения", color: "bg-yellow-400" },
    { day: "Saturday", value: 65, note: "", color: "bg-orange-400" },
    { day: "Sunday", value: 55, note: "LOWEST", color: "bg-red-500" },
  ].map((item, i) => (
    <div key={i} className="space-y-1">
      <div className="flex justify-between items-center text-sm font-semibold">
        <span>{item.day}</span>
        <span>
          {item.value}% {item.note && `(${item.note})`}
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
        <div className={`${item.color} h-4`} style={{ width: `${item.value}%` }} />
      </div>
    </div>
  ))}

  <p className="mt-4 text-sm text-gray-300 font-bold">
    Optimal days: Tuesday–Thursday
  </p>
  <p className="text-sm text-gray-300 font-bold">
    Avoid: Saturday–Sunday (если не срочно)
  </p>
</div>
</article>

<article className="prose prose-invert prose-lg max-w-none">

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`🎯 Практическое руководство: анализ перед свопом`)}</h2>

  <p className="text-gray-300 mb-4">{t(`Чек-лист для каждой транзакции`)}</p>

  <pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`□ 1. Проверьте текущее время
     ✓ OPTIMAL: 12:00–16:00 UTC, Tue–Thu
     ⚠️ ACCEPTABLE: 08:00–20:00 UTC, Mon–Fri
     ✗ AVOID: 00:00–04:00 UTC, Sat–Sun

□ 2. Откройте depth chart (HyperCore Spot)
     ✓ Depth в ±1% > $500k для свопа $50k
     ✗ Depth в ±1% < $200k → WAIT или split order

□ 3. Проверьте spread
     ✓ Spread <0.3% → good liquidity
     ⚠️ Spread 0.3–0.8% → acceptable
     ✗ Spread >0.8% → WAIT for better conditions

□ 4. Проверьте AMM pool TVL (if using AMM)
     ✓ TVL > 50× your swap size
     ⚠️ TVL 20–50× your swap size
     ✗ TVL < 20× your swap size → HIGH IMPACT

□ 5. Оцените expected price impact
     ✓ Impact <2% → execute
     ⚠️ Impact 2–5% → consider splitting
     ✗ Impact >5% → SPLIT or WAIT

□ 6. Используйте Hypertrade Invisium Simulation
     ✓ Simulation accuracy 99.5%+
     ✓ Auto price impact calculation
     ✓ Warning if anomaly detected`)}
  </pre>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`Пример 1: Анализ перед крупным свопом`)}</h3>
  <p className="text-gray-300 mb-2">{t(`Цель: Купить $100,000 HYPE`)}</p>

  <pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`Шаг 1: Время check
Current time: 18:30 UTC Friday
Liquidity: 85% of peak (acceptable, но не optimal)

Decision: Можно выполнить, но лучше подождать до Tuesday 14:00
→ Potential savings: $500–$1,500

Шаг 2: Depth analysis (HyperCore Spot)
Open: https://app.hyperliquid.xyz/trade → HYPE/USDC → Depth chart

Liquidity within ±1%: $650,000
Liquidity within ±2%: $1,200,000

Analysis:
Swap size: $100,000
Depth requirement: >$500k for <3% impact
Available: $650,000 ✓

Expected impact: ~2.8%`)}
  </pre>

  <pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`Шаг 3: AMM pool check (Hyperswap)
HYPE/USDC pool:
TVL: $8,000,000
24h volume: $1,200,000

Pool health: ✓ GOOD
Swap size vs TVL: $100k / $8M = 1.25% ✓
Expected pool impact: ~1.8%`)}
  </pre>

  <pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`Шаг 4: Spread analysis
Best bid: $24.96
Best ask: $25.04
Spread: $0.08 (0.32%)

Status: ⚠️ Slightly wide (optimal <0.2%)
Reason: Friday evening, liquidity declining

Action: Consider waiting until Tuesday`)}
  </pre>

  <pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`Шаг 5: Hypertrade simulation
Open: https://ht.xyz
Input: $100,000 USDC → HYPE

Invisium Simulation:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Expected output: 3,984 HYPE
Average price: $25.10
Total impact: 2.4%

Split-routing breakdown:
├─ HyperCore Spot: $40,000 (40%) → 1,594 HYPE
├─ Hyperswap: $35,000 (35%) → 1,393 HYPE
├─ Kittenswap: $15,000 (15%) → 597 HYPE
└─ Prjx: $10,000 (10%) → 398 HYPE

Warning: ⚠️ Spread currently wider than usual
Recommendation: Consider executing on Tuesday 14:00 UTC
Potential additional savings: $800–$1,200
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}
  </pre>

  <pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`FINAL DECISION:
Option A: Execute now (Friday 18:30)
Expected loss: $2,400 (2.4% impact)

Option B: Wait until Tuesday 14:00
Expected loss: $1,200–$1,600 (1.2–1.6% impact)
Savings: $800–$1,200

RECOMMENDATION: Wait (если не срочно)`)}
  </pre>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`🚀 Как Hypertrade упрощает анализ ликвидности`)}</h3>

  <pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`1. Автоматическое сканирование всех источников
Без Hypertrade:
Вам нужно вручную:
1. Открыть HyperCore Spot → проверить order book
2. Открыть Hyperswap → проверить pool TVL
3. Открыть Kittenswap → проверить pool TVL
4. Открыть Prjx → проверить pool TVL
5. Рассчитать impact для каждого
6. Оптимизировать распределение
7. Выполнить multiple транзакции

Time: 10–15 минут
Risk: Human error в расчётах

С Hypertrade:
1. Откройте https://ht.xyz
2. Введите swap details
3. Нажмите "Get Quote"

Hypertrade автоматически:
✓ Сканирует все 4+ источника ликвидности
✓ Рассчитывает optimal split-routing
✓ Запускает Invisium Simulation (99.9% accuracy)
✓ Показывает expected output + impact
✓ Выполняет atomic swap в 1 транзакцию`)}
  </pre>


  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`2. Invisium Simulations: real-time liquidity check`)}</h3>

<pre className="bg-hyper-800/50 p-6 rounded-xl mb-12 text-sm text-gray-300 overflow-x-auto">
{t(`Что делает Invisium:
Pre-execution simulation process:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Create virtual blockchain copy
   └─ Exact state of all DEX pools + order books

2. Simulate your swap
   ├─ Calculate price impact on each DEX
   ├─ Account for pending transactions
   ├─ Include current gas costs
   └─ Detect potential frontrun attempts

3. Return accurate quote:
   Expected output: 3,984 HYPE
   Simulated output: 3,981 HYPE (99.92% accuracy)
   Price impact: 2.4%
   Slippage within tolerance: ✓

4. If anomaly detected:
   ⚠️ WARNING: Unusual liquidity condition
   Recommendation: Wait 15–30 minutes
   Expected improvement: 0.5–1.2% better rate`)}
</pre>

</article>

<article className="prose prose-invert prose-lg max-w-none">

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Практическое значение:`)}</h2>

<pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`Без simulation (обычный DEX):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Expected: 4,000 HYPE
Actual: 3,650 HYPE (8.75% deviation)
Reason: Frontrun + liquidity shift
Loss: $8,750

С Invisium (Hypertrade):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Expected: 3,984 HYPE
Simulated: 3,981 HYPE
Actual: 3,979 HYPE (0.13% deviation)
Reason: Accurate pre-execution check
Loss: $125 (93% reduction!)

SAVINGS: $8,625 on single swap`)}
</pre>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`3. Real-time liquidity alerts`)}</h2>

<pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`Hypertrade interface показывает:
Liquidity Health Indicators:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟢 OPTIMAL CONDITIONS
   Current time: 14:25 UTC Tuesday
   Liquidity level: 98% of daily peak
   Spread: 0.14% (tight)
   Recommendation: Execute now

🟡 ACCEPTABLE CONDITIONS
   Current time: 19:30 UTC Friday
   Liquidity level: 82% of daily peak
   Spread: 0.42% (moderate)
   Recommendation: Acceptable, but Tuesday better

🔴 POOR CONDITIONS
   Current time: 02:15 UTC Sunday
   Liquidity level: 48% of daily peak
   Spread: 1.2% (wide)
   Recommendation: Wait for Monday 12:00+
   Potential improvement: 1.5–3% better rate
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}
</pre>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t(`📊 Сравнение: ручной анализ vs Hypertrade`)}
</h2>

<div className="overflow-x-auto mb-6">
  <table className="min-w-full text-sm text-gray-300 border-collapse">
    <thead>
      <tr className="border-b border-gray-600">
        <th className="text-left px-4 py-2">Задача</th>
        <th className="text-left px-4 py-2">Ручной анализ</th>
        <th className="text-left px-4 py-2">Hypertrade</th>
        <th className="text-left px-4 py-2">Экономия времени / результат</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-700">
      <tr>
        <td className="px-4 py-2">Scan all DEX liquidity</td>
        <td className="px-4 py-2">5 минут</td>
        <td className="px-4 py-2">0.5 секунды</td>
        <td className="px-4 py-2">99.8%</td>
      </tr>
      <tr>
        <td className="px-4 py-2">Calculate price impact</td>
        <td className="px-4 py-2">3 минуты</td>
        <td className="px-4 py-2">0.2 секунды</td>
        <td className="px-4 py-2">99.9%</td>
      </tr>
      <tr>
        <td className="px-4 py-2">Optimize routing</td>
        <td className="px-4 py-2">5 минут</td>
        <td className="px-4 py-2">0.3 секунды</td>
        <td className="px-4 py-2">99.9%</td>
      </tr>
      <tr>
        <td className="px-4 py-2">Pre-execution simulation</td>
        <td className="px-4 py-2">❌ Невозможно</td>
        <td className="px-4 py-2">✅ 1 секунда</td>
        <td className="px-4 py-2">N/A</td>
      </tr>
      <tr>
        <td className="px-4 py-2">Execute atomic swap</td>
        <td className="px-4 py-2">Multiple TX</td>
        <td className="px-4 py-2">1 TX</td>
        <td className="px-4 py-2">4–10× fewer clicks</td>
      </tr>
      <tr>
        <td className="px-4 py-2">Accuracy</td>
        <td className="px-4 py-2">70–85%</td>
        <td className="px-4 py-2">99.5–99.9%</td>
        <td className="px-4 py-2">~15–30% better</td>
      </tr>
      <tr>
        <td className="px-4 py-2">Total time</td>
        <td className="px-4 py-2">13–15 минут</td>
        <td className="px-4 py-2">~2 секунды</td>
        <td className="px-4 py-2">99.8%</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="text-sm text-gray-300 space-y-1">
  <p>Годовая экономия (50 свопов):</p>
  <ul className="list-disc list-inside ml-4">
    <li>Saved time: 11 часов</li>
    <li>Accuracy gain: $7,500–$15,000 (лучшие цены)</li>
    <li>Error prevention: $2,000–$5,000 (avoid mistakes)</li>
    <li>Total: $9,500–$20,000 value/год</li>
  </ul>
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`💡 10 практических советов по анализу ликвидности`)}</h2>

<pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`1. Всегда проверяйте spread перед свопом
Tight spread (<0.3%):
✓ Good liquidity
✓ Low cost entry/exit
✓ Execute confidently

Wide spread (>0.8%):
✗ Poor liquidity
✗ Instant loss 0.8–2%
✗ Wait for better conditions`)}
</pre>

<pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`2. Правило “2% от TVL”
Для AMM pools:
Своп размер / TVL ≤ 2% → безопасно

Пример:
TVL: $5M
Safe swap size: ≤$100k
Your swap: $50k ✓ OK

If your swap $150k → split на 2 части`)}
</pre>

<pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`3. Используйте временные зоны в ваших интересах
Asian hours (02:00–08:00 UTC):
→ Best for: мелкие свопы (<$5k)
→ Avoid: крупные ордера

EU/US overlap (12:00–16:00 UTC):
→ Best for: ЛЮБЫЕ размеры
→ Peak liquidity

US evening (20:00–24:00 UTC):
→ Best for: средние свопы ($5k–$20k)
→ Caution: крупные ордера`)}
</pre>

<pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`4. Проверяйте order book imbalance
Balanced order book (здоровый рынок):
Bid liquidity: $500k
Ask liquidity: $480k
Ratio: 1.04 ✓

Imbalanced (предупреждающий знак):
Bid liquidity: $150k
Ask liquidity: $600k
Ratio: 0.25 ✗

Interpretation:
- Больше sellers → downward pressure
- Может быть дамп → wait before buying`)}
</pre>

<pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`5. Мониторьте 24h volume / TVL ratio
Healthy ratio (AMM pool):
24h Volume / TVL = 0.3–1.0

Пример:
TVL: $5M
24h Volume: $2M
Ratio: 0.4 ✓ GOOD (активная торговля)

Unhealthy:
TVL: $5M
24h Volume: $200k
Ratio: 0.04 ✗ LOW ACTIVITY
→ Potential для high slippage`)}
</pre>

<pre className="bg-hyper-800/50 p-6 rounded-xl mb-12 text-sm text-gray-300 overflow-x-auto">
{t(`6. Разделяйте крупные ордера по времени
Вместо:
$100k в одну транзакцию

Лучше:
- $25k сейчас
- $25k через 30 минут
- $25k через 1 час
- $25k через 2 часа

Benefit:
- Liquidity восстанавливается между свопами
- Меньше cumulative impact
- Избегаете frontrun (менее очевидный паттерн)`)}
</pre>

</article>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`7. Обращайте внимание на volatility spikes`)}</h2>
<pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`Во время high volatility:
- Spread расширяется на 200–500%
- Liquidity уходит из order book
- AMM pools становятся shallow

Action:
⏸️ PAUSE trading на 30–60 минут
→ Wait for volatility to settle
→ Liquidity вернётся
→ Spread нормализуется`)}
</pre>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`8. Используйте limit orders на HyperCore Spot`)}</h2>
<pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`Если не срочно:

Market order:
Price: $25.00 (expected)
Execution: $25.15 (actual)
Slippage: 0.6%

Limit order:
Price: $25.00 (fixed)
Execution: $25.00 or NO FILL
Slippage: 0% (но риск not filling)

Strategy:
- Set limit order at good price
- Wait 30 минут – 2 часа
- If не заполнился → adjust slightly`)}
</pre>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`9. Проверяйте liquidity после major news`)}</h2>
<pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`After Fed announcement, макростатистика:

Immediate (0–30 минут):
- Extreme volatility
- Liquidity DROPS 40–60%
- Spread widens 3–5×
→ ❌ AVOID trading

After 30–60 минут:
- Volatility normalizing
- Liquidity recovering
- Spread narrowing
→ ⚠️ CAUTIOUS trading

After 2+ часа:
- Market stabilized
- Liquidity back to normal
- Spread normal
→ ✓ SAFE to trade`)}
</pre>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`10. Документируйте паттерны для вашего токена`)}</h2>
<pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`Create personal liquidity journal:

Token: HYPE/USDC
Best time: Tue–Thu, 13:00–17:00 UTC
Worst time: Sat–Sun, 00:00–06:00 UTC

Typical depth:
Peak hours: $800k–$1.2M (±1%)
Off-peak: $200k–$400k (±1%)

Spread range:
Tight: 0.12–0.25%
Normal: 0.3–0.5%
Wide: 0.8–1.5% (AVOID)

Learned insights:
- Friday evening liquidity drops sharply
- Tuesday 14:00 UTC = most consistent depth
- After US market open (14:30 UTC) → spike activity`)}
</pre>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`🎯 Итоговая стратегия: complete workflow`)}</h2>
<pre className="bg-hyper-800/50 p-6 rounded-xl mb-6 text-sm text-gray-300 overflow-x-auto">
{t(`Pre-Swap Checklist (Гарантированно лучший результат)
30 секунд перед КАЖДЫМ свопом:

□ 1. TIME CHECK
     Current time: __:__ UTC
     Day: _______
     Status: 🟢 OPTIMAL / 🟡 OK / 🔴 WAIT

□ 2. OPEN HYPERTRADE
     https://ht.xyz
     Input swap details

□ 3. RUN INVISIUM SIMULATION
     Expected output: _______
     Price impact: ____%
     Liquidity health: 🟢 / 🟡 / 🔴

□ 4. CHECK WARNINGS
     Any alerts? Y / N
     If YES → read recommendation

□ 5. MAKE DECISION
     ✓ Execute now
     ⏸️ Wait for better time
     ✂️ Split into parts

□ 6. EXECUTE THROUGH HYPERTRADE
     Confirm transaction
     Monitor execution

□ 7. DOCUMENT RESULTS
     Expected: _______
     Actual: _______
     Deviation: ____%
     Satisfied: Y / N`)}
</pre>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`🔗 Полезные ссылки`)}</h2>

<div className="bg-hyper-800/50 p-6 rounded-xl mb-6 space-y-4">
  <div>
    <h4 className="text-lg font-bold text-white mb-2">{t(`Hypertrade & Tools:`)}</h4>
    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
      <li>
        {t(`Hypertrade (optimal liquidity routing):`)}{" "}
        <a href="https://ht.xyz" className="text-hyper-accent underline" target="_blank" rel="noreferrer">{t(`https://ht.xyz`)}</a>
      </li>
      <li>
        {t(`Hypertrade Docs:`)}{" "}
        <a href="https://docs.hypertrade.io" className="text-hyper-accent underline" target="_blank" rel="noreferrer">{t(`https://docs.hypertrade.io`)}</a>
      </li>
      <li>
        {t(`Invisium Technology:`)}{" "}
        <a href="https://invisium.com" className="text-hyper-accent underline" target="_blank" rel="noreferrer">{t(`https://invisium.com`)}</a>
      </li>
    </ul>
  </div>

  <div>
    <h4 className="text-lg font-bold text-white mb-2">{t(`Hyperliquid:`)}</h4>
    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
      <li>
        {t(`HyperCore Spot (order book):`)}{" "}
        <a href="https://app.hyperliquid.xyz/trade" className="text-hyper-accent underline" target="_blank" rel="noreferrer">{t(`https://app.hyperliquid.xyz/trade`)}</a>
      </li>
      <li>
        {t(`Explorer:`)}{" "}
        <a href="https://explorer.hyperliquid.xyz" className="text-hyper-accent underline" target="_blank" rel="noreferrer">{t(`https://explorer.hyperliquid.xyz`)}</a>
      </li>
      <li>
        {t(`Hyperliquid Docs:`)}{" "}
        <a href="https://hyperliquid.gitbook.io" className="text-hyper-accent underline" target="_blank" rel="noreferrer">{t(`https://hyperliquid.gitbook.io`)}</a>
      </li>
    </ul>
  </div>

  <div>
    <h4 className="text-lg font-bold text-white mb-2">{t(`DEX на Hyperliquid:`)}</h4>
    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
      <li>
        {t(`Hyperswap:`)}{" "}
        <a href="https://hyperswap.fi" className="text-hyper-accent underline" target="_blank" rel="noreferrer">{t(`https://hyperswap.fi`)}</a>
      </li>
      <li>
        {t(`Kittenswap:`)}{" "}
        <a href="https://kittenswap.org" className="text-hyper-accent underline" target="_blank" rel="noreferrer">{t(`https://kittenswap.org`)}</a>
      </li>
      <li>
        {t(`Prjx:`)}{" "}
        <a href="https://prjx.finance" className="text-hyper-accent underline" target="_blank" rel="noreferrer">{t(`https://prjx.finance`)}</a>
      </li>
    </ul>
  </div>

  <div>
    <h4 className="text-lg font-bold text-white mb-2">{t(`Analytics:`)}</h4>
    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
      <li>
        {t(`CoinGlass (Hyperliquid):`)}{" "}
        <a href="https://www.coinglass.com/hyperliquid" className="text-hyper-accent underline" target="_blank" rel="noreferrer">{t(`https://www.coinglass.com/hyperliquid`)}</a>
      </li>
      <li>
        {t(`DexScreener:`)}{" "}
        <a href="https://dexscreener.com" className="text-hyper-accent underline" target="_blank" rel="noreferrer">{t(`https://dexscreener.com`)}</a>
      </li>
    </ul>
  </div>
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`🚀 Начните экономить прямо сейчас`)}</h2>

<div className="bg-hyper-800/50 p-6 rounded-xl mb-12 space-y-6 text-sm text-gray-300">
  <div>
    <h4 className="font-bold text-white mb-2">{t(`1. Выберите OPTIMAL время для вашего следующего свопа`)}</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>{t(`Check current time vs optimal window (12:00–16:00 UTC, Tue–Thu)`)}</li>
      <li>{t(`If not optimal → calendar reminder for better time`)}</li>
      <li>{t(`Potential savings: $200–$2,000 per swap`)}</li>
    </ul>
  </div>

 <div>
    <h4 className="font-bold text-white mb-2">{t(`2. Используйте Hypertrade для автоматического анализа`)}</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>
        <a href="https://ht.xyz" className="text-hyper-accent underline" target="_blank" rel="noreferrer">{t(`https://ht.xyz`)}</a>
      </li>
      <li>{t(`Run Invisium Simulation EVERY time`)}</li>
      <li>{t(`Trust the liquidity health indicator`)}</li>
      <li>{t(`Potential savings: $500–$3,000 per swap (accuracy)`)}</li>
    </ul>
  </div>

  <div>
    <h4 className="font-bold text-white mb-2">{t(`3. Создайте personal liquidity journal`)}</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>{t(`Document best/worst times for YOUR tokens`)}</li>
      <li>{t(`Track spread patterns`)}</li>
      <li>{t(`Record impact vs swap size`)}</li>
      <li>{t(`Continuous optimization → $5,000–$15,000/year`)}</li>
    </ul>
  </div>

<Link href="https://ht.xyz/">
  <button className="bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20 mt-4">
    {t(`Начать экономить`)}
  </button></Link>
</div>

<p className="text-gray-300 mb-8">
  {t(`Понимание ликвидности = 5–15% лучшие цены на каждом свопе.
На годовом объёме $500,000 это $25,000–$75,000 экономии.
Начните анализировать. Начните экономить. Используйте `)}
{<a style={{color: "rgb(0 229 255 / var(--tw-text-opacity))"}} href={`/${lang}`}>Hypertrade</a>}
</p>

        </article>
      </div>
    </section>
  );
};
"use client"
/* eslint-disable */
// @ts-nocheck
import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { PieChart, Zap, Target, BarChart, Layers, DollarSign, TrendingDown, Shield, Cpu, Navigation, CheckCircle, AlertCircle, Clock, Calendar, Users, ArrowRight, Hash, XCircle, TrendingUp, Droplets, AlertTriangle, Activity, Repeat, PlayCircle, Info, ChevronRight, Search, GitBranch, Droplet, PartyPopper } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { useTranslation } from "react-i18next";


// --- Single Blog Article Component (Split-Routing) ---
export const ArticleSplitRouting = ({lang}:{lang:Language}) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr:any) => curr.id === "split-routing-guide");
  
    const { t } = useTranslation();

  return (
    <>
     <section className="bg-hyper-900 min-h-screen pb-20">
  {/* Header */}
  <div className="h-64 md:h-80 w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-hyper-900 relative">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
      <BackButton label={"Вернуться назад"} />
      <div className="flex flex-wrap gap-4 text-sm font-medium text-hyper-accent mb-4">
       <span className="bg-hyper-accent/10 px-3 py-1 rounded-full border border-hyper-accent/20">
  {t("Статья")}
</span>
<span className="flex items-center gap-1 text-gray-400">
  <Clock size={14} /> {t("10 мин")}
</span>
<span className="flex items-center gap-1 text-gray-400">
  <Calendar size={14} /> {t("14.12.2025")}
</span>
</div>
<h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
  {t("Как работает split-routing в Hypertrade: максимизация прибыли через разделение ордеров")}
</h1>
</div>
</div>

<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
  <article className="prose prose-invert prose-lg max-w-none">
    {/* Intro */}
    <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-hyper-accent pl-6 italic">
      {t("Вы обмениваете")} <span className="text-white font-medium">100,000 USDC</span> {t("на ETH и ожидаете получить")} <span className="text-white font-medium">40 ETH</span> {t("по цене рынка.")}  
      {t("Но после свапа получаете лишь")} <span className="text-red-400 font-semibold">38.2 ETH</span>.
      <br /><br />
      {t("Потерянные")} <span className="text-red-400 font-semibold">1.8 ETH ($4,500)</span> {t("— это")}<span className="text-white font-medium"> {t("price impact")}</span>, {t("вызванный тем, что крупный ордер резко смещает цену в пуле.")}
    </p>

    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
      <AlertCircle className="text-red-400" />
      {t("Проблема традиционных DEX")}
    </h2>

    <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl not-prose mb-10">
      <ul className="space-y-3 text-gray-300 text-sm">
        <li>❌ {t("Весь ордер исполняется в одном пуле → высокий price impact")}</li>
        <li>❌ {t("Чем больше ордер — тем хуже цена (slippage curve)")}</li>
        <li>❌ {t("Ликвидность других DEX игнорируется")}</li>
      </ul>
    </div>

    <div className="overflow-x-auto not-prose mb-12">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-4 text-gray-400 font-medium">{t("Размер ордера")}</th>
            <th className="p-4 text-gray-400 font-medium">{t("Price Impact")}</th>
            <th className="p-4 text-red-400 font-medium">{t("Потери")}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-800 bg-hyper-800/20">
            <td className="p-4 text-white">1,000 USDC</td>
            <td className="p-4 text-gray-300">0.05%</td>
            <td className="p-4 text-red-300">-$0.50</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-4 text-white">10,000 USDC</td>
            <td className="p-4 text-gray-300">0.5%</td>
            <td className="p-4 text-red-300">-$50</td>
          </tr>
          <tr className="border-b border-gray-800 bg-hyper-800/20">
            <td className="p-4 text-white">50,000 USDC</td>
            <td className="p-4 text-gray-300">2.8%</td>
            <td className="p-4 text-red-300">-$1,400</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-4 text-white">100,000 USDC</td>
            <td className="p-4 text-gray-300">4.5%</td>
            <td className="p-4 text-red-400 font-bold">-$4,500</td>
          </tr>
          <tr className="bg-red-900/20">
            <td className="p-4 text-white">500,000 USDC</td>
            <td className="p-4 text-red-300 font-bold">18.2%</td>
            <td className="p-4 text-red-400 font-bold">-$91,000 ❌</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
      <Zap className="text-yellow-400" />
      {t("Решение: Split-Routing")}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
      <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
        <ul className="space-y-3 text-sm text-gray-300">
          <li>✅ {t("Разделение ордера на части")}</li>
          <li>✅ {t("Исполнение на нескольких DEX")}</li>
          <li>✅ {t("Price impact снижается до 0.5–1.5%")}</li>
          <li>✅ {t("Экономия 1–5% на крупном обмене")}</li>
          <li>✅ {t("Полностью автоматический процесс")}</li>
        </ul>
      </div>

      <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl text-center">
        <p className="text-green-300 font-bold text-lg mb-2">
          {t("Экономия на ордере $100,000")}
        </p>
        <p className="text-3xl font-bold text-white">$1,000 – $5,000</p>
        <p className="text-xs text-gray-400 mt-2">
          {t("Один клик «Swap»")}
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-white mt-12 mb-6">
      {t("Что такое split-routing?")}
    </h2>

    <p className="text-gray-300 mb-6">
      <span className="text-white font-medium">{t("Split-routing")}</span> {t("— это технология интеллектуального разделения ордера и его исполнения через несколько источников ликвидности для получения лучшей средней цены.")}
    </p>

    <div className="space-y-6 not-prose mb-12">
      <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-white mb-2">
          {t("Как работает split-routing")}
        </h3>
        <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2">
          <li>{t("Анализ ликвидности всех доступных DEX")}</li>
          <li>{t("Расчёт оптимального распределения ордера")}</li>
          <li>{t("Параллельное исполнение частей")}</li>
          <li>{t("Лучший средний курс для пользователя")}</li>
        </ol>
      </div>

       <div className="bg-hyper-800/50 border border-gray-700 p-6 rounded-xl">
  <h4 className="font-bold text-white mb-2">{t("Аналогия из реальной жизни")}</h4>
  <p className="text-sm text-gray-400 m-0">
    {t("Вместо одного обменника с плохим курсом вы идёте в несколько сразу. Hypertrade делает это автоматически, мгновенно и в одной транзакции.")}
  </p>
</div>
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-8">
  {t("Как работает split-routing: технические детали")}
</h2>

{/* Step 1 */}
<h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
  <Search className="text-hyper-accent" />
  {t("Этап 1: Scanning — сканирование ликвидности")}
</h3>

<p className="text-gray-300 mb-6">
  {t("После ввода параметров обмена (")}
  <span className="text-white font-medium">100,000 USDC → ETH</span>
  {t(") маршрутизатор ")}
  <span className="text-white font-medium">Hypertrade Router R1</span>
  {t(" анализирует все доступные источники ликвидности для пары USDC/ETH.")}
</p>

<div className="space-y-4 not-prose mb-10">
  <div className="bg-hyper-800/30 border border-gray-700 p-5 rounded-xl">
    <h4 className="font-bold text-white mb-2">{t("HyperCore Spot (Order Book)")}</h4>
    <ul className="text-sm text-gray-300 space-y-1">
      <li>{t("• Лучший ask: 1 ETH = 2,498 USDC")}</li>
      <li>{t("• Глубина до +0.5% slippage: ~150,000 USDC")}</li>
      <li>{t("• Глубина до +1% slippage: ~300,000 USDC")}</li>
    </ul>
  </div>

  <div className="bg-hyper-800/30 border border-gray-700 p-5 rounded-xl">
    <h4 className="font-bold text-white mb-2">{t("Hyperswap (AMM)")}</h4>
    <ul className="text-sm text-gray-300 space-y-1">
      <li>{t("• Цена: 2,500 USDC")}</li>
      <li>{t("• TVL: 1.2M USDC + 480 ETH")}</li>
      <li>{t("• Ликвидность: средняя")}</li>
    </ul>
  </div>

  <div className="bg-hyper-800/30 border border-gray-700 p-5 rounded-xl">
    <h4 className="font-bold text-white mb-2">{t("Kittenswap (AMM)")}</h4>
    <ul className="text-sm text-gray-300 space-y-1">
      <li>{t("• Цена: 2,502 USDC")}</li>
      <li>{t("• TVL: 800k USDC + 320 ETH")}</li>
      <li>{t("• Ликвидность: низкая")}</li>
    </ul>
  </div>

  <div className="bg-hyper-800/30 border border-gray-700 p-5 rounded-xl">
    <h4 className="font-bold text-white mb-2">{t("Prjx (AMM)")}</h4>
    <ul className="text-sm text-gray-300 space-y-1">
      <li>{t("• Цена: 2,505 USDC")}</li>
      <li>{t("• TVL: 400k USDC + 160 ETH")}</li>
      <li>{t("• Ликвидность: очень низкая")}</li>
    </ul>
  </div>
</div>

<p className="text-sm text-gray-400 italic mb-12">
  {t("Вывод: лучшая ликвидность находится на HyperCore Spot, но её недостаточно для исполнения всего ордера без существенного price impact.")}
</p>

{/* Step 2 */}
<h3 className="text-xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
  <AlertCircle className="text-red-400" />
  {t("Этап 2: Price Impact Calculation")}
</h3>

<p className="text-gray-300 mb-6">
  {t("Далее Hypertrade рассчитывает, как меняется цена при увеличении размера ордера на каждом DEX. Важный момент — ")}
  <span className="text-white font-medium">{t("price impact растёт нелинейно")}</span>
  .
</p>

<div className="overflow-x-auto not-prose mb-12">
  <table className="w-full text-sm border-collapse">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-4 text-gray-400">{t("DEX")}</th>
        <th className="p-4 text-gray-400">{t("Размер ордера")}</th>
        <th className="p-4 text-gray-400">{t("Impact")}</th>
        <th className="p-4 text-gray-400">{t("Средняя цена")}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t("HyperCore")}</td>
        <td className="p-4 text-gray-300">{t("100,000 USDC")}</td>
        <td className="p-4 text-yellow-300">{t("0.6%")}</td>
        <td className="p-4 text-gray-300">{t("2,515")}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t("Hyperswap")}</td>
        <td className="p-4 text-gray-300">{t("100,000 USDC")}</td>
        <td className="p-4 text-red-300">{t("4.5%")}</td>
        <td className="p-4 text-gray-300">{t("2,613")}</td>
      </tr>
      <tr className="bg-red-900/20">
        <td className="p-4 text-white">{t("Kittenswap")}</td>
        <td className="p-4 text-gray-300">{t("100,000 USDC")}</td>
        <td className="p-4 text-red-400 font-bold">{t("15.3%")}</td>
        <td className="p-4 text-red-300">{t("2,883 ❌")}</td>
      </tr>
    </tbody>
  </table>
</div>

<p className="text-red-300 font-medium mb-12">
  {t("Важный вывод: удвоение ордера может утроить price impact.")}
</p>

{/* Step 3 */}
<h3 className="text-xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
  <Cpu className="text-purple-400" />
  {t("Этап 3: Optimization — поиск оптимального распределения")}
</h3>

<p className="text-gray-300 mb-6">
  {t("Hypertrade применяет алгоритм оптимизации, минимизирующий суммарный impact по всем маршрутам:")}
</p>

<div className="bg-hyper-800/40 border border-gray-700 p-6 rounded-xl not-prose mb-10">
  <p className="text-sm text-gray-300 font-mono">
    {t("Minimize: Σ (Impactᵢ × Amountᵢ)")} <br />
    {t("Subject to: Σ Amountᵢ = 100,000 USDC")}
  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-12">
  <div className="bg-green-900/10 border border-green-900/30 p-5 rounded-xl">
    <h4 className="text-green-400 font-bold mb-2">{t("55% — HyperCore")}</h4>
    <p className="text-sm text-gray-300">{t("21.94 ETH · Impact 0.3%")}</p>
  </div>
  <div className="bg-green-900/10 border border-green-900/30 p-5 rounded-xl">
    <h4 className="text-green-400 font-bold mb-2">{t("35% — Hyperswap")}</h4>
    <p className="text-sm text-gray-300">{t("13.83 ETH · Impact 1.2%")}</p>
  </div>
  <div className="bg-green-900/10 border border-green-900/30 p-5 rounded-xl">
    <h4 className="text-green-400 font-bold mb-2">{t("10% — Kittenswap")}</h4>
    <p className="text-sm text-gray-300">{t("3.96 ETH · Impact 0.9%")}</p>
  </div>
</div>

{/* Comparison */}
<h3 className="text-xl font-bold text-white mt-12 mb-6">
  {t("Сравнение результатов")}
</h3>


<div className="overflow-x-auto not-prose mb-12">
  <table className="w-full text-sm border-collapse">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-4 text-gray-400">{t("Вариант")}</th>
        <th className="p-4 text-gray-400">{t("ETH")}</th>
        <th className="p-4 text-gray-400">{t("Impact")}</th>
        <th className="p-4 text-gray-400">{t("Разница")}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t("Только Hyperswap")}</td>
        <td className="p-4 text-gray-300">{t("38.2")}</td>
        <td className="p-4 text-red-300">{t("4.5%")}</td>
        <td className="p-4 text-gray-400">{t("—")}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t("HyperCore Spot")}</td>
        <td className="p-4 text-gray-300">{t("39.1")}</td>
        <td className="p-4 text-yellow-300">{t("0.9%")}</td>
        <td className="p-4 text-green-300">{t("+$2,250")}</td>
      </tr>
      <tr className="bg-green-900/20">
        <td className="p-4 text-white font-bold">{t("Split-routing")}</td>
        <td className="p-4 text-white font-bold">{t("39.73")}</td>
        <td className="p-4 text-green-300 font-bold">{t("0.67%")}</td>
        <td className="p-4 text-green-400 font-bold">{t("+$3,825 ✅")}</td>
      </tr>
    </tbody>
  </table>
</div>

{/* Step 4 */}
<h3 className="text-xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
  <Zap className="text-yellow-400" />
  {t("Этап 4: Execution")}
</h3>

<ul className="text-gray-300 text-sm space-y-2 mb-8">
  <li>{t("• Все части объединяются в одну атомарную транзакцию")}</li>
  <li>{t("• Исполнение параллельно на всех DEX")}</li>
  <li>{t("• Время: 5–10 секунд")}</li>
  <li>{t("• Gas: ~2.5–4 HYPE")}</li>
</ul>

{/* Step 5 */}
<h3 className="text-xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
  <CheckCircle className="text-green-400" />
  {t("Этап 5: Verification")}
</h3>

<ul className="text-gray-300 text-sm space-y-2">
  <li>{t("✅ Получено ≥ minAmountOut")}</li>
  <li>{t("✅ Все маршруты выполнены успешно")}</li>
  <li>{t("✅ При ошибке транзакция откатывается (revert)")}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-8">
  {t("Почему split-routing эффективнее одного большого ордера")}
</h2>

{/* Section 1: Нелинейный рост price impact */}
<h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-2">
  <Layers className="text-hyper-secondary" /> {t("1. Нелинейный рост price impact")}
</h3>
<p className="text-gray-300 mb-4">
  {t("На AMM price impact растёт быстрее, чем размер ордера. Например:")}
</p>

<div className="overflow-x-auto not-prose mb-6">
  <table className="w-full text-sm border-collapse">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-4 text-gray-400">{t("Размер ордера")}</th>
        <th className="p-4 text-gray-400">{t("Price Impact")}</th>
        <th className="p-4 text-gray-400">{t("Потери")}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t("10,000 USDC")}</td>
        <td className="p-4 text-gray-300">{t("0.5%")}</td>
        <td className="p-4 text-gray-300">{t("- $50")}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t("20,000 USDC")}</td>
        <td className="p-4 text-red-300">{t("1.2%")}</td>
        <td className="p-4 text-red-300">{t("- $240")}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t("40,000 USDC")}</td>
        <td className="p-4 text-red-400">{t("3.1%")}</td>
        <td className="p-4 text-red-400">{t("- $1,240")}</td>
      </tr>
      <tr className="bg-red-900/20">
        <td className="p-4 text-white">{t("80,000 USDC")}</td>
        <td className="p-4 text-red-500 font-bold">{t("8.5%")}</td>
        <td className="p-4 text-red-500 font-bold">{t("- $6,800")}</td>
      </tr>
    </tbody>
  </table>
</div>

<p className="text-gray-300 mb-8">
  {t("AMM использует формулу ")} <span className="text-white font-mono">{t("x × y = k")}</span>
  {t(", где x — USDC, y — ETH, k — константа. Разделение ордера на несколько частей значительно снижает суммарный price impact.")}
</p>

{/* Section 2: Агрегация ликвидности */}
<h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-2">
  <Layers className="text-hyper-accent" /> {t("2. Агрегация фрагментированной ликвидности")}
</h3>

<p className="text-gray-300 mb-6">
  {t("На Hyperliquid ликвидность распределена между несколькими DEX. Split-routing позволяет использовать почти всю ликвидность, минимизируя price impact:")}
</p>

<ul className="text-gray-300 text-sm list-disc list-inside mb-6">
  <li>{t("HyperCore Spot: 40%")}</li>
  <li>{t("Hyperswap: 35%")}</li>
  <li>{t("Kittenswap: 20%")}</li>
  <li>{t("Prjx: 5%")}</li>
</ul>

<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-12 not-prose">
  <p className="text-sm text-gray-300">
    {t("Традиционный DEX (Hyperswap): доступ к $1.75M → ордер $100k → impact 4.5%")}<br/>
    {t("Hypertrade Split-routing: доступ к $4.5M → ордер $100k → impact 0.67%")}<br/>
    {t("Разница: impact ↓ 6.7×")}
  </p>
</div>

{/* Section 3: Разные механизмы ценообразования */}
<h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-2">
  <Layers className="text-yellow-400" /> {t("3. Учёт разных механизмов ценообразования")}
</h3>

<p className="text-gray-300 mb-6">
  {t("HyperCore Spot использует Order Book, а AMM-пулы Hyperswap/Kittenswap имеют нелинейный price impact. Split-routing комбинирует преимущества:")}
</p>

<ul className="text-gray-300 text-sm list-disc list-inside mb-12">
  <li>{t("Малые части ордера (10–50k) → Order Book, низкий impact")}</li>
  <li>{t("Средние части (50–100k) → AMM, глубокие пулы")}</li>
  <li>{t("Крупные (меньше 100k) → распределение между всеми источниками")}</li>
</ul>

{/* Real Examples */}
<h2 className="text-2xl font-bold text-white mt-12 mb-8">
  {t("Реальные примеры экономии с split-routing")}
</h2>

{/* Example 1 */}
<h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-2">
  <Search className="text-hyper-accent" /> {t("Пример 1: Ордер $50,000 (средний трейдер)")}
</h3>

<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 not-prose">
  <p className="text-gray-300 text-sm mb-3">
    {t("Вариант A: Hyperswap без split-routing → Impact: 2.8%, получите 19.45 ETH, потери $1,375")}
  </p>
  <p className="text-gray-300 text-sm mb-3">
    {t("Вариант B: Hypertrade split-routing → Распределение: 60% HyperCore Spot (11.97 ETH), 40% Hyperswap (7.89 ETH)")}<br/>
    {t("Итог: 19.86 ETH, Impact: 0.51%, потери $350 → 💰 Экономия: $1,025")}
  </p>
</div>

{/* Example 2 */}
<h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-2">
  <Navigation className="text-blue-400" /> {t("Пример 2: Ордер $200,000 (кит)")}
</h3>

<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 not-prose">
  <p className="text-gray-300 text-sm mb-3">
    {t("Вариант A: Hyperswap → Impact 12.8%, получите 70.92 ETH, потери $22,700")}
  </p>
  <p className="text-gray-300 text-sm mb-3">
    {t("Вариант B: HyperCore Spot only → Impact 2.1%, получите 78.34 ETH, потери $4,150")}
  </p>
  <p className="text-gray-300 text-sm">
    {t("Вариант C: Hypertrade split-routing → Распределение: 45% HyperCore, 35% Hyperswap, 15% Kittenswap, 5% Prjx")}<br/>
    {t("Итог: 78.52 ETH, Impact 1.45%, потери $3,700 → 💰 Экономия: $19,000 vs Hyperswap")}
  </p>
</div>

{/* Example 3 */}
<h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-2">
  <CheckCircle className="text-green-400" /> {t("Пример 3: DCA-стратегия ($10k еженедельно)")}
</h3>

<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-12 not-prose">
  <p className="text-gray-300 text-sm mb-3">
    {t("Hyperswap без split-routing → средний impact 0.5%, годовые потери $2,600")}
  </p>
  <p className="text-gray-300 text-sm">
    {t("Hypertrade split-routing → средний impact 0.12%, годовые потери $624 → 💰 Годовая экономия $1,976")}
  </p>
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-8">
  {t("Когда split-routing даёт максимальную выгоду")}
</h2>

{/* Section 1: Крупные ордера */}
<h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-2">
  <Layers className="text-hyper-accent" /> {t("1. Крупные ордера (>$20,000)")}
</h3>

<div className="overflow-x-auto not-prose mb-6">
  <table className="w-full text-sm border-collapse">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-4 text-gray-400">{t("Размер ордера")}</th>
        <th className="p-4 text-gray-400">{t("Экономия без split")}</th>
        <th className="p-4 text-gray-400">{t("Экономия со split")}</th>
        <th className="p-4 text-gray-400">{t("Выгода")}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t("$5,000")}</td>
        <td className="p-4 text-gray-300">{t("-$25")}</td>
        <td className="p-4 text-gray-300">{t("-$10")}</td>
        <td className="p-4 text-green-300">{t("+$15 (0.3%)")}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t("$10,000")}</td>
        <td className="p-4 text-gray-300">{t("-$50")}</td>
        <td className="p-4 text-gray-300">{t("-$18")}</td>
        <td className="p-4 text-green-300">{t("+$32 (0.32%)")}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t("$20,000")}</td>
        <td className="p-4 text-red-300">{t("-$240")}</td>
        <td className="p-4 text-red-300">{t("-$50")}</td>
        <td className="p-4 text-green-300">{t("+$190 (0.95%)")}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t("$50,000")}</td>
        <td className="p-4 text-red-300">{t("-$1,375")}</td>
        <td className="p-4 text-red-300">{t("-$350")}</td>
        <td className="p-4 text-green-300">{t("+$1,025 (2.05%)")}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t("$100,000")}</td>
        <td className="p-4 text-red-400">{t("-$4,500")}</td>
        <td className="p-4 text-red-400">{t("-$800")}</td>
        <td className="p-4 text-green-300">{t("+$3,700 (3.7%)")}</td>
      </tr>
      <tr className="bg-yellow-900/20">
        <td className="p-4 text-white">{t("$500,000")}</td>
        <td className="p-4 text-red-500 font-bold">{t("-$91,000")}</td>
        <td className="p-4 text-red-500 font-bold">{t("-$8,500")}</td>
        <td className="p-4 text-green-400 font-bold">{t("+$82,500 (16.5%) 🔥")}</td>
      </tr>
    </tbody>
  </table>
</div>

<p className="text-gray-300 mb-8">
  {t("Вывод: для ордеров >$50k split-routing критически важен.")}
</p>

{/* Section 2: Низкая ликвидность */}
<h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-2">
  <Layers className="text-red-400" /> {t("2. Низкая ликвидность в отдельных пулах")}
</h3>
<p className="text-gray-300 mb-6">
  {t("Если основной пул имеет TVL $500k-1M, а ваш ордер $100k+, то:")}
</p>
<ul className="text-gray-300 text-sm list-disc list-inside mb-6">
  <li>{t("Без split: impact 10-20% ❌")}</li>
  <li>{t("Со split: доступ к другим пулам снижает impact до 1-3% ✅")}</li>
</ul>
<p className="text-gray-300 mb-8">
  {t("Индикатор: если ваш ордер >5% от TVL основного пула → обязательно используйте split-routing.")}
</p>

{/* Section 3: Волатильные пары */}
<h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-2">
  <Layers className="text-yellow-400" /> {t("3. Волатильные пары (не stablecoins)")}
</h3>
<p className="text-gray-300 mb-6">
  {t("Для пар типа ETH/HYPE, HYPE/ARB: price impact выше → split-routing снижает потери:")}
</p>
<p className="text-gray-300 mb-8">
  {t("Пример: обмен 50,000 USDC → HYPE:")}<br/>
  {t("Без split: impact 5.5%, потери $2,750")}<br/>
  {t("Со split: impact 1.8%, потери $900 → экономия $1,850 (3.7%)")}
</p>

{/* Section 4: Фрагментированная ликвидность */}
<h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-2">
  <Layers className="text-blue-400" /> {t("4. Фрагментированная ликвидность")}
</h3>
<p className="text-gray-300 mb-6">
  {t("Если ликвидность распределена между несколькими DEX (~30-40% на каждом), split-routing максимизирует выгоду:")}
</p>
<ul className="text-gray-300 text-sm list-disc list-inside mb-8">
  <li>{t("Один DEX >70% → выгода небольшая (0.2-0.5%)")}</li>
  <li>{t("Равномерное распределение 30-40-30% → выгода высокая (1-5%)")}</li>
</ul>

{/* Section 5: Частые трейдеры */}
<h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-2">
  <Layers className="text-green-400" /> {t("5. Частые трейдеры (>10 сделок/мес)")}
</h3>
<p className="text-gray-300 mb-6">
  {t("Даже небольшая экономия на одной сделке накапливается:")}
</p>
<p className="text-gray-300 mb-12">
  {t("Пример: 20 сделок по $10k/мес")}<br/>
  {t("Без split: потери $50 × 20 = $1,000/мес")}<br/>
  {t("Со split: потери $12 × 20 = $240/мес → экономия $760/мес = $9,120/год")}
</p>

<h2 className="text-2xl font-bold text-white mt-12 mb-8">
  {t("Как Hypertrade выбирает оптимальное распределение")}
</h2>

{/* Algorithm description */}
<p className="text-gray-300 mb-6">
  {t("Hypertrade Router R1 использует динамическое программирование и численную оптимизацию:")}
</p>

<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 not-prose">
  <p className="text-gray-300 text-sm mb-3">
    {t("1. Строит функцию price impact для каждого DEX (AMM или Order Book)")}
  </p>
  <p className="text-gray-300 text-sm mb-3">
    {t("2. Перебирает возможные распределения (0%,5%,…100%), вычисляет total_impact")}
  </p>
  <p className="text-gray-300 text-sm mb-3">
    {t("3. Учитывает gas cost каждого hop: если выгода от split < gas → использовать один DEX")}
  </p>
  <p className="text-gray-300 text-sm">
    {t("Результат: оптимальное распределение минимизирует total_cost = price_impact + gas_cost")}
  </p>
</div>

<p className="text-gray-300 mb-12">
  {t("Факторы влияния: размер ордера, TVL пулов, текущий price impact, gas cost, slippage tolerance.")}
</p>

<article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 prose prose-invert prose-lg max-w-none">

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Сравнение split-routing с другими технологиями")}</h2>
  <div className="overflow-x-auto mb-8">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="p-4 text-gray-400 font-medium">{t("Технология")}</th>
          <th className="p-4 text-gray-400 font-medium">{t("Описание")}</th>
          <th className="p-4 text-gray-400 font-medium">{t("Преимущества")}</th>
          <th className="p-4 text-gray-400 font-medium">{t("Недостатки")}</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4 text-white">{t("Single DEX swap")}</td>
          <td className="p-4 text-gray-300">{t("Весь ордер на одном DEX")}</td>
          <td className="p-4 text-gray-300">{t("Простота, низкий gas")}</td>
          <td className="p-4 text-red-300">{t("Высокий price impact для крупных ордеров")}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4 text-white">{t("Manual split")}</td>
          <td className="p-4 text-gray-300">{t("Вы вручную делите ордер на части")}</td>
          <td className="p-4 text-gray-300">{t("Полный контроль")}</td>
          <td className="p-4 text-red-300">{t("Требует времени, нескольких транзакций, высокий gas")}</td>
        </tr>
       <tr className="border-b border-gray-800 bg-hyper-800/20">
  <td className="p-4 text-white">{t("DEX Aggregator (без split)")}</td>
  <td className="p-4 text-gray-300">{t("Поиск лучшего DEX, но без разделения")}</td>
  <td className="p-4 text-gray-300">{t("Лучше, чем single DEX")}</td>
  <td className="p-4 text-red-300">{t("Не использует всю ликвидность")}</td>
</tr>
<tr className="border-b border-gray-800">
  <td className="p-4 text-white">{t("Split-routing (1inch, Matcha)")}</td>
  <td className="p-4 text-gray-300">{t("Разделение между DEX")}</td>
  <td className="p-4 text-gray-300">{t("Снижение impact")}</td>
  <td className="p-4 text-red-300">{t("Комиссия 0.3-1%, не все источники ликвидности")}</td>
</tr>
<tr className="bg-hyper-800/20">
  <td className="p-4 text-white">{t("Hypertrade Split-routing")}</td>
  <td className="p-4 text-gray-300">{t("Разделение + Hyperliquid native")}</td>
  <td className="p-4 text-green-300 font-bold">{t("Минимальный impact, 0% platform fee, доступ ко всей ликвидности Hyperliquid")}</td>
  <td className="p-4 text-red-300">{t("Работает только на Hyperliquid")}</td>
</tr>
</tbody>
</table>
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Почему Hypertrade split-routing лучше конкурентов на Hyperliquid?")}</h2>
<ul className="list-disc pl-6 text-gray-300 space-y-2">
  <li>{t("✅ 0% platform fee (1inch берёт 0.3-1% от экономии)")}</li>
  <li>{t("✅ Интеграция HyperCore Spot (Order Book) + AMM DEXes")}</li>
  <li>{t("✅ Invisium Simulations показывают точный результат до выполнения")}</li>
  <li>{t("✅ Один native router для всей экосистемы")}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Как использовать split-routing на Hypertrade: пошаговая инструкция")}</h2>
<p className="text-gray-300 mb-6">{t("Хорошая новость: split-routing работает автоматически! Вам не нужно ничего настраивать — Hypertrade сам выберет оптимальное распределение.")}</p>

<div className="space-y-8 mb-12">
{[
  {
    step: t("Шаг 1: Откройте Hypertrade"),
    desc: t("Перейдите на https://ht.xyz и подключите кошелёк.")
  },
  {
    step: t("Шаг 2: Введите параметры обмена"),
    desc: (
      <ul className="list-disc pl-6 text-gray-300 space-y-1">
        <li>{t("Token to sell: USDC")}</li>
        <li>{t("Token to buy: ETH")}</li>
        <li>{t("Amount: 50,000 USDC")}</li>
      </ul>
    )
  },
  {
    step: t("Шаг 3: Дождитесь анализа"),
    desc: (
      <p>{t("⏱️ Hypertrade автоматически сканирует ликвидность на всех DEX, рассчитывает оптимальный split и запускает Invisium Simulation (занимает 2-4 секунды).")}</p>
    )
  },
  {
    step: t("Шаг 4: Проверьте результат"),
    desc: (
      <ul className="list-disc pl-6 text-gray-300 space-y-1">
        <li>{t("💰 You will receive: 19.86 ETH (vs. 19.45 ETH on single DEX)")}</li>
        <li>{t("📊 Price Impact: 0.51% (vs. 2.8% on single DEX)")}</li>
        <li>{t("💡 You save +$1,025 (+2.05%)")}</li>
        <li>{t("🔀 Route (Split-Routing): 60% via HyperCore Spot → 11.97 ETH, 40% via Hyperswap → 7.89 ETH")}</li>
        <li>{t("⛽ Network Fee: ~2.8 HYPE (~$7)")}</li>
      </ul>
    )
  },
  {
    step: t("Шаг 5: (Опционально) Посмотрите детали"),
    desc: (
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-gray-400 font-medium">{t("DEX")}</th>
              <th className="p-4 text-gray-400 font-medium">{t("Share")}</th>
              <th className="p-4 text-gray-400 font-medium">{t("Entry Price")}</th>
              <th className="p-4 text-gray-400 font-medium">{t("Exit Price")}</th>
              <th className="p-4 text-gray-400 font-medium">{t("Average Price")}</th>
              <th className="p-4 text-gray-400 font-medium">{t("Price Impact")}</th>
              <th className="p-4 text-gray-400 font-medium">{t("Output")}</th>
              <th className="p-4 text-gray-400 font-medium">{t("Gas")}</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-800 bg-hyper-800/20">
              <td className="p-4 text-white">{t("HyperCore Spot")}</td>
              <td className="p-4 text-gray-300">{t("60%, 30,000 USDC")}</td>
              <td className="p-4 text-gray-300">{t("1 ETH = 2,498 USDC")}</td>
              <td className="p-4 text-gray-300">{t("1 ETH = 2,505 USDC")}</td>
              <td className="p-4 text-gray-300">{t("2,506.7 USDC/ETH")}</td>
              <td className="p-4 text-gray-300">{t("0.25%")}</td>
              <td className="p-4 text-white">{t("11.97 ETH")}</td>
              <td className="p-4 text-gray-300">{t("~1.2 HYPE")}</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-4 text-white">{t("Hyperswap")}</td>
              <td className="p-4 text-gray-300">{t("40%, 20,000 USDC")}</td>
              <td className="p-4 text-gray-300">{t("1 ETH = 2,500 USDC")}</td>
              <td className="p-4 text-gray-300">{t("1 ETH = 2,524 USDC")}</td>
              <td className="p-4 text-gray-300">{t("2,535 USDC/ETH")}</td>
              <td className="p-4 text-gray-300">{t("0.9%")}</td>
              <td className="p-4 text-white">{t("7.89 ETH")}</td>
              <td className="p-4 text-gray-300">{t("~1.6 HYPE")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    step: t("Шаг 6: Подтвердите swap"),
    desc: (
      <ul className="list-disc pl-6 text-gray-300 space-y-1">
        <li>{t("Нажмите “Swap”")}</li>
        <li>{t("Approve токен (если первый раз)")}</li>
        <li>{t("Confirm в MetaMask")}</li>
        <li>{t("Дождитесь выполнения (5-10 секунд)")}</li>
        <li>{t("Все части ордера выполняются параллельно в одной транзакции")}</li>
      </ul>
    )
  },
  {
    step: t("Шаг 7: Проверьте результат"),
    desc: (
      <ul className="list-disc pl-6 text-gray-300 space-y-1">
        <li>{t("✅ Swap Successful!")}</li>
        <li>{t("Sent: 50,000 USDC")}</li>
        <li>{t("Received: 19.84 ETH")}</li>
        <li>{t("🎉 You saved $1,020 compared to single DEX!")}</li>
        <li>{t("Transaction: 0xabc123...")}</li>
      </ul>
    )
  }
].map((item, idx) => (
  <div key={idx} className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-3">{item.step}</h3>
    {item.desc}
  </div>
))}
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Часто задаваемые вопросы (FAQ)")}</h2>
<div className="space-y-6 mb-12">
{[
  { q: t("Что такое split-routing?"), a: t("Split-routing — это технология автоматического разделения вашего ордера на несколько частей и выполнения каждой части на разных DEX для минимизации price impact и достижения лучшей средней цены.") },
  { q: t("Нужно ли мне настраивать split-routing вручную?"), a: t("Нет. Hypertrade автоматически рассчитывает оптимальное распределение для каждого ордера. Вы просто нажимаете «Swap», и всё работает.") },
  { q: t("Сколько стоит split-routing?"), a: t("0% platform fee. Вы платите только: Gas cost (~2-4 HYPE вместо ~1.5 HYPE для single DEX), Комиссии DEX (0.1-0.3%, заложены в price impact). Дополнительный gas cost $2-5 многократно перекрывается экономией на price impact ($100-5,000).") },
  { q: t("Всегда ли split-routing лучше одного DEX?"), a: t("Почти всегда, но есть исключения: Очень малые ордера (<$1,000): выгода $1-5, дополнительный gas $2-3 → может быть невыгодно; Один DEX имеет >90% ликвидности: split даёт небольшую выгоду (<0.1%). Hypertrade автоматически определяет, когда split выгоден, и использует single DEX, если это лучше.") },
  { q: t("Сколько частей может быть в split?"), a: t("От 1 до 4-5 частей, в зависимости от доступных источников ликвидности, размера ордера и gas cost. Для большинства ордеров оптимально 2-3 части.") },
  { q: t("Что, если один из DEX не выполнит свою часть?"), a: t("Вся транзакция атомарна — либо все части выполняются успешно, либо всё отменяется (revert). Вы теряете только gas (~2-4 HYPE), но не теряете основные токены.") },
  { q: t("Можно ли выбрать split вручную?"), a: t("В текущей версии нет. Hypertrade автоматически выбирает оптимальный split. Если нужен custom split, можно сделать несколько отдельных swap вручную или использовать Hypertrade API для интеграции.") },
  { q: t("Split-routing работает для всех пар токенов?"), a: t("Да, для любой пары с ликвидностью на нескольких DEX. Если ликвидность есть только на одном DEX, Hypertrade использует single DEX swap.") },
  { q: t("Учитывает ли split-routing мою slippage tolerance?"), a: t("Да. Hypertrade устанавливает minAmountOut на основе симулированного результата split-routing и вашего slippage tolerance (например, 1%). Если фактический результат хуже минимума → транзакция отменяется.") },
  { q: t("Как split-routing сравнивается с 1inch или Matcha?"), a: (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="p-4 text-gray-400 font-medium">{t("Параметр")}</th>
          <th className="p-4 text-gray-400 font-medium">{t("1inch / Matcha")}</th>
          <th className="p-4 text-gray-400 font-medium">{t("Hypertrade")}</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4 text-white">{t("Split-routing")}</td>
          <td className="p-4 text-gray-300">{t("Да")}</td>
          <td className="p-4 text-green-300 font-bold">{t("Да")}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4 text-white">{t("Блокчейны")}</td>
          <td className="p-4 text-gray-300">{t("Multi-chain")}</td>
          <td className="p-4 text-gray-300">{t("Только Hyperliquid")}</td>
        </tr>
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4 text-white">{t("Platform fee")}</td>
          <td className="p-4 text-gray-300">{t("0.3-1%")}</td>
          <td className="p-4 text-green-300 font-bold">{t("0% ✅")}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4 text-white">{t("Invisium Simulations")}</td>
          <td className="p-4 text-gray-300">{t("Нет")}</td>
          <td className="p-4 text-green-300 font-bold">{t("Да ✅")}</td>
        </tr>
           <tr className="border-b border-gray-800 bg-hyper-800/20">
  <td className="p-4 text-white">{t("Order Book интеграция")}</td>
  <td className="p-4 text-gray-300">{t("Частично")}</td>
  <td className="p-4 text-green-300 font-bold">{t("HyperCore Spot ✅")}</td>
</tr>
<tr className="border-b border-gray-800">
  <td className="p-4 text-white">{t("Оптимальность для Hyperliquid")}</td>
  <td className="p-4 text-gray-300">{t("Средняя")}</td>
  <td className="p-4 text-green-300 font-bold">{t("Лучшая ✅")}</td>
</tr>
</tbody>
</table>
) }
].map((faq, idx) => (
  <div key={idx} className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-hyper-accent">
    <h4 className="font-bold text-white mb-2">{faq.q}</h4>
    <p className="text-gray-400 text-sm">{faq.a}</p>
  </div>
))}
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Заключение: split-routing — обязательный инструмент для крупных трейдеров")}</h2>
<ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
  <li>{t("Split-routing снижает price impact в 3-10 раз для крупных ордеров")}</li>
  <li>{t("Экономия $100-5,000 на каждой сделке (1-5% от суммы)")}</li>
  <li>{t("Работает автоматически — не требует настройки")}</li>
  <li>{t("0% platform fee — вы платите только минимальный дополнительный gas")}</li>
  <li>{t("Незаменим для ордеров меньше $20,000")}</li>
</ul>

<h3 className="text-xl font-bold text-white mb-4">{t("Для кого split-routing критически важен:")}</h3>
<ul className="list-disc pl-6 text-gray-300 space-y-2 mb-12">
  <li>{t("🐋 Киты (ордера меньше $100k): экономия $3,000-20,000 на сделке")}</li>
  <li>{t("📊 DCA-инвесторы: экономия $1,000-3,000/год на регулярных покупках")}</li>
  <li>{t("💼 Фонды и маркет-мейкеры: минимизация slippage для крупных позиций")}</li>
  <li>{t("⚡ Активные трейдеры: экономия $5,000-10,000/год при частых сделках")}</li>
</ul>

<div className="bg-gradient-to-r from-hyper-accent/20 to-hyper-secondary/20 p-8 rounded-2xl border border-hyper-accent/30 text-center not-prose mt-12">
  <h3 className="text-2xl font-bold text-white mb-4">{t("Начните экономить с Hypertrade")}</h3>
  <ol className="list-decimal pl-6 text-gray-300 space-y-2 mb-4">
    <li>{t("🚀 Откройте ")}
      {<a style={{color: "rgb(0 229 255 / var(--tw-text-opacity))"}} href={`https://ht.xyz`}>https://ht.xyz</a>}
    </li>
    <li>{t("🔗 Подключите кошелёк (MetaMask, WalletConnect)")}</li>
    <li>{t("💰 Пополните HYPE для gas (5-10 HYPE)")}</li>
    <li>{t("🔄 Сделайте первый swap — split-routing включится автоматически")}</li>
  </ol>
  <p className="text-gray-300">{t("Экономьте 1-5% на каждом крупном обмене → $1,000-50,000/год в зависимости от объёма торговли.")}</p>
  </div>

</article>

    </article>
  </div>  
</section>
    </>
  );
};
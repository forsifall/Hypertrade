"use client"
import BackButton from "@/components/ui/BackButton";
import { BarChart3, BookOpen, CircleDollarSign, Coins, Cpu, Globe, Layers, PieChart, Shield, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { Language } from "@/app/translations";
import { useTranslation } from "react-i18next";

export const ArticleDexComparison = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "dex-comparison-hyperliquid");
  
            const { t } = useTranslation();

  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-15"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label="Назад к статьям" />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-purple-400 mb-4">
             <span className="bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">{post.category}</span>
             <span className="flex items-center gap-1 text-gray-400"><BookOpen size={14} /> {post.readTime}</span>
             <span className="flex items-center gap-1 text-gray-400"><Coins size={14} /> {post.date}</span>
           </div>
           <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
             {post.title}
           </h1>
        </div>
      </div>

 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
  <article className="prose prose-invert prose-lg max-w-none">

  <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-hyper-accent pl-6 italic">
    {t(`Hyperliquid — это высокопроизводительный Layer 1 блокчейн, специально разработанный для децентрализованных финансов (DeFi). В отличие от большинства блокчейнов, где DEX появляются хаотично, Hyperliquid имеет продуманную экосистему из нескольких ключевых площадок для торговли.`)}
  </p>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    {t(`Основные игроки:`)}
  </h2>
  <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-12">
    <li>{t(`HyperCore Spot — нативный Order Book (книга заявок) от команды Hyperliquid`)}</li>
    <li>{t(`Hyperswap — крупнейший AMM DEX (Uniswap V2 fork`)}</li>
    <li>{t(`Kittenswap — второй по величине AMM с уникальными фичами`)}</li>
    <li>{t(`Prjx — нишевый AMM с фокусом на новые токены`)}</li>
    <li>{t(`Hypertrade — DEX-агрегатор, объединяющий все вышеперечисленные`)}</li>
  </ul>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    {t(`Ликвидность (Total Value Locked) в экосистеме:`)}
  </h2>
  <p className="text-gray-300 mb-6">{t(`Общий TVL Hyperliquid DeFi: ~$850M (декабрь 2024)`)}</p>

  <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-12">
    <li>{t(`HyperCore Spot: $420M (49.4%)`)}</li>
    <li>{t(`Hyperswap: $280M (32.9%)`)}</li>
    <li>{t(`Kittenswap: $120M (14.1%)`)}</li>
    <li>{t(`Prjx: $30M (3.5%)`)}</li>
  </ul>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    {t(`Зачем нужен этот обзор:`)}
  </h2>
  <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-12">
    <li>{t(`✅ Понять сильные и слабые стороны каждого DEX`)}</li>
    <li>{t(`✅ Выбрать оптимальную площадку для ваших нужд`)}</li>
    <li>{t(`✅ Сравнить комиссии, ликвидность, функционал`)}</li>
    <li>{t(`✅ Узнать, когда использовать Hypertrade (агрегатор) vs. прямое подключение`)}</li>
  </ul>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    {t(`Кому будет полезно:`)}
  </h2>
  <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-12">
    <li>{t(`📊 Трейдерам — выбор лучшей площадки для конкретной пары`)}</li>
    <li>{t(`💧 Liquidity providers — куда добавлять ликвидность для максимального APY`)}</li>
    <li>{t(`🛠️ Разработчикам — интеграция DEX в dApps`)}</li>
    <li>{t(`🔍 Исследователям — понимание экосистемы Hyperliquid`)}</li>
  </ul>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    {t(`HyperCore Spot: нативная книга заявок`)}
  </h2>

  <p className="text-gray-300 mb-6">{t(`HyperCore Spot — это централизованная книга заявок (Order Book), встроенная в сам блокчейн Hyperliquid. Это не AMM, а классическая биржевая модель, как на CEX (Binance, Coinbase), но полностью non-custodial.`)}</p>
  <p className="text-gray-300 mb-6">{t(`Официальный сайт: https://hyperliquid.xyz/trade`)}</p>

  <h3 className="text-xl font-bold text-white mt-6 mb-4">{t(`Основные характеристики:`)}</h3>
  <table className="w-full text-left border-collapse mb-12">
    <tbody>
      <tr className="border-b border-gray-700">
        <td className="p-4 text-gray-300">{t(`Тип`)}</td>
        <td className="p-4 text-white">{t(`Order Book (CEX-like)`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 text-gray-300">{t(`TVL`)}</td>
        <td className="p-4 text-white">{t(`~$420M`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 text-gray-300">{t(`Доля рынка`)}</td>
        <td className="p-4 text-white">{t(`49.4%`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 text-gray-300">{t(`Maker fee`)}</td>
        <td className="p-4 text-white">{t(`0% (получаете rebate)`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 text-gray-300">{t(`Taker fee`)}</td>
        <td className="p-4 text-white">{t(`0.02-0.05%`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 text-gray-300">{t(`Доступные пары`)}</td>
        <td className="p-4 text-white">{t(`15+ (только мажоры)`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 text-gray-300">{t(`Средний spread`)}</td>
        <td className="p-4 text-white">{t(`0.01-0.05%`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 text-gray-300">{t(`Глубина ликвидности`)}</td>
        <td className="p-4 text-white">{t(`Высокая (top 3 пары)`)}</td>
      </tr>
      <tr>
        <td className="p-4 text-gray-300">{t(`Gas cost`)}</td>
        <td className="p-4 text-white">{t(`1.0 HYPE (~$2.50) для limit order`)}</td>
      </tr>
    </tbody>
  </table>

  <h3 className="text-xl font-bold text-white mt-6 mb-4">{t(`Как работает Order Book`)}</h3>
  <p className="text-gray-300 mb-6">{t(`В отличие от AMM, где вы торгуете против пула ликвидности (x × y = k), Order Book работает как традиционная биржа:`)}</p>

  <pre className="bg-hyper-800/20 p-6 rounded-xl text-gray-300 mb-6 overflow-x-auto">
{t(`Книга заявок USDC/ETH:

Asks (продажа ETH):
Price      Amount    Total
2,502 USDC  5.2 ETH   $13,010
2,501 USDC  8.7 ETH   $21,759
2,500 USDC 15.3 ETH   $38,250 ← Best Ask

----------------------------------------

2,499 USDC 12.1 ETH   $30,238 ← Best Bid
2,498 USDC  9.4 ETH   $23,481
2,497 USDC  6.8 ETH   $16,980

Bids (покупка ETH):
`)}
  </pre>

  <h4 className="text-lg font-bold text-white mt-6 mb-2">{t(`Когда вы размещаете:`)}</h4>
  <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-12">
    <li>{t(`Market order (купить/продать по лучшей доступной цене) → Taker fee 0.02-0.05%`)}</li>
    <li>{t(`Limit order (купить/продать по конкретной цене) → Maker fee 0% (или даже получаете rebate)`)}</li>
  </ul>

  <h4 className="text-lg font-bold text-white mt-6 mb-2">{t(`Исполнение:`)}</h4>
  <pre className="bg-hyper-800/20 p-6 rounded-xl text-gray-300 mb-12 overflow-x-auto">
{t(`Market Buy 10 ETH:

Заберёте:
- 15.3 ETH @ 2,500 USDC (частично)
Цена исполнения: 2,500 USDC/ETH
Total: 10 ETH за 25,000 USDC

Limit Buy 10 ETH @ 2,495 USDC:
Размещается в книге → ждёт, пока кто-то продаст по 2,495
Может исполниться через минуты/часы/дни (или не исполниться)
`)}
  </pre>

   <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    {t(`Преимущества HyperCore Spot`)}
  </h2>

  <ul className="pl-6 text-gray-300 space-y-4 mb-12 list-none">
    <li>
      {t(`✅ 0% maker fee (или даже негативная комиссия — rebate):`)}
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`Вы размещаете limit order на $100,000`)}</li>
        <li>{t(`Ордер исполнился → вы получаете rebate $5-10`)}</li>
        <li>{t(`(Биржа платит вам за добавление ликвидности)`)}</li>
      </ul>
    </li>

    <li>
      {t(`✅ Минимальный price impact:`)}
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`Покупка 100 ETH ($250,000) на HyperCore Spot:`)}</li>
        <li>{t(`- Price impact: 0.1-0.3% (благодаря глубокой книге)`)}</li>
      </ul>
      <p className="mt-2 text-gray-300">{t(`vs. AMM:`)}</p>
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`- Price impact: 5-10% (из-за формулы x × y = k)`)}</li>
      </ul>
      <p className="mt-2 text-gray-300 font-bold">{t(`Экономия: $12,000-25,000 на одной сделке 💰`)}</p>
    </li>

    <li>
      {t(`✅ Лучшие цены для крупных ордеров:`)}
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`• Order Book идеален для китов (ордера >$50k)`)}</li>
        <li>{t(`• Нет проскальзывания за пределы spread (если ликвидности достаточно)`)}</li>
      </ul>
    </li>

    <li>
      {t(`✅ Профессиональные инструменты:`)}
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`• Advanced charting (TradingView интеграция)`)}</li>
        <li>{t(`• Stop-loss / Take-profit orders`)}</li>
        <li>{t(`• API для алгоритмической торговли`)}</li>
        <li>{t(`• WebSocket для real-time данных`)}</li>
      </ul>
    </li>

    <li>
      {t(`✅ Низкий gas cost:`)}
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`Limit order: 1.0 HYPE (~$2.50)`)}</li>
        <li>{t(`Market order: 1.2 HYPE (~$3.00)`)}</li>
      </ul>
      <p className="mt-2 text-gray-300">{t(`vs. AMM swap: 1.5-3 HYPE (~$4-8)`)}</p>
    </li>
  </ul>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    {t(`Недостатки HyperCore Spot`)}
  </h2>

  <ul className="pl-6 text-gray-300 space-y-4 mb-12 list-none">
    <li>
      {t(`❌ Execution не гарантирован:`)}
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`Вы разместили limit buy @ 2,480 USDC`)}</li>
        <li>{t(`Текущая цена: 2,500 USDC`)}</li>
        <li>{t(`Если цена не упадёт до 2,480 → ордер не исполнится`)}</li>
        <li>{t(`Вы упустите возможность, если цена вырастет`)}</li>
      </ul>
    </li>

    <li>
      {t(`❌ Требует понимания Order Book:`)}
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`Новичкам сложнее, чем AMM “введи сумму и свапни”`)}</li>
        <li>{t(`Нужно понимать: bid/ask, spread, depth, slippage`)}</li>
      </ul>
    </li>

    <li>
      {t(`❌ Ограниченный выбор пар:`)}
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`HyperCore Spot: 15+ пар (только мажоры)`)}</li>
        <li>{t(`USDC/ETH, USDC/HYPE, ETH/BTC, etc.`)}</li>
        <li>{t(`AMM DEX: 100+ пар (включая long-tail токены)`)}</li>
        <li>{t(`Экзотические альткоины доступны только на AMM`)}</li>
      </ul>
    </li>

    <li>
      {t(`❌ Фрагментированная ликвидность для малых пар:`)}
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`Пара USDC/RARE_TOKEN на HyperCore Spot:`)}</li>
        <li>{t(`Bid-Ask spread: 2-5% (широкий)`)}</li>
        <li>{t(`Depth: $5,000 (низкая)`)}</li>
        <li>{t(`Может быть лучше использовать AMM`)}</li>
      </ul>
      <p className="mt-2 text-gray-300">{t(`vs. мажорные пары (USDC/ETH):`)}</p>
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`Spread: 0.01-0.05% (узкий)`)}</li>
        <li>{t(`Depth: $500k+ (высокая)`)}</li>
      </ul>
    </li>
  </ul>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    {t(`Когда использовать HyperCore Spot`)}
  </h2>

  <ul className="pl-6 text-gray-300 space-y-4 mb-12 list-none">
    <li>
      {t(`✅ Крупные ордера (>$20,000):`)}
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`Минимальный price impact`)}</li>
        <li>{t(`Экономия на maker fee (или rebate)`)}</li>
      </ul>
    </li>

    <li>
      {t(`✅ Мажорные пары:`)}
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`USDC/ETH, USDC/HYPE, ETH/BTC`)}</li>
      </ul>
    </li>

    <li>
      {t(`✅ Вы не торопитесь:`)}
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`Limit orders могут исполняться часами`)}</li>
        <li>{t(`Готовы подождать лучшую цену`)}</li>
      </ul>
    </li>

    <li>
      {t(`✅ Профессиональная торговля:`)}
      <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
        <li>{t(`API, WebSocket, advanced orders`)}</li>
      </ul>
    </li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-6 mb-4">{t(`Пример использования:`)}</h3>

  <pre className="bg-hyper-800/20 p-6 rounded-xl text-gray-300 mb-12 overflow-x-auto">
{t(`Кит хочет купить 200 ETH ($500,000):

HyperCore Spot limit order @ 2,490 USDC:
- Gas: 1.0 HYPE ($2.50)
- Maker fee: 0% (или rebate -0.01%)
- Price impact: ~0.2%
- Total cost: $1,000 (impact) - $50 (rebate) + $2.50 (gas) = $952.50

vs. AMM market swap:
- Gas: 3.5 HYPE ($8.75)
- Taker fee: 0.3%
- Price impact: 8.5%
- Total cost: $42,500 (impact) + $1,500 (fee) + $8.75 (gas) = $44,008.75

Экономия с HyperCore Spot: $43,056 💰💰💰`)}
  </pre>

   <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`2. Hyperswap: крупнейший AMM на Hyperliquid`)}</h2>

  <p className="text-gray-300 mb-6">{t(`Обзор`)}</p>

  <p className="text-gray-300 mb-6">{t(`Hyperswap — это первый и крупнейший Automated Market Maker (AMM) на Hyperliquid, работающий по модели Uniswap V2 (константное произведение: x × y = k).`)}</p>

  <p className="text-gray-300 mb-6">{t(`Официальный сайт: https://hyperswap.xyz`)}</p>

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Основные характеристики:`)}</h3>

  <ul className="pl-6 text-gray-300 space-y-2 mb-12 list-none">
    <li>{t(`Тип: AMM (Uniswap V2 fork)`)}</li>
    <li>{t(`TVL: ~$280M`)}</li>
    <li>{t(`Доля рынка: 32.9%`)}</li>
    <li>{t(`Swap fee: 0.3% (стандарт)`)}</li>
    <li>{t(`LP reward: 0.25% (из 0.3% fee)`)}</li>
    <li>{t(`Protocol fee: 0.05% (команде Hyperswap)`)}</li>
    <li>{t(`Доступные пары: 80+`)}</li>
    <li>{t(`Импермантный убыток: Да (как у всех AMM)`)}</li>
    <li>{t(`Gas cost: 1.5-2 HYPE (~$4-5) для swap`)}</li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Как работает AMM`)}</h3>

  <p className="text-gray-300 mb-4">{t(`Automated Market Maker использует математическую формулу вместо книги заявок:`)}</p>

<pre className="bg-hyper-800/20 p-6 rounded-xl text-gray-300 mb-6 overflow-x-auto">{t(`Формула: x × y = k (константное произведение)`)}</pre>

<p className="text-gray-300 mb-4">{t(`Где:`)}</p>

<ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
  <li>{t(`x = количество токена A в пуле`)}</li>
  <li>{t(`y = количество токена B в пуле`)}</li>
  <li>{t(`k = константа (не меняется)`)}</li>
</ul>

<p className="text-gray-300 mb-4">{t(`Пример пула USDC/ETH:`)}</p>

<ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
  <li>{t(`x = 1,000,000 USDC`)}</li>
  <li>{t(`y = 400 ETH`)}</li>
  <li>{t(`k = 1,000,000 × 400 = 400,000,000`)}</li>
</ul>

<p className="text-gray-300 mb-4">{t(`Цена ETH = x / y = 1,000,000 / 400 = 2,500 USDC`)}</p>

<p className="text-gray-300 mb-4">{t(`Когда вы свапаете:`)}</p>

<ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
  <li>{t(`Вы хотите купить 10 ETH:`)}</li>
  <li>{t(`Новое состояние пула:`)}</li>
  <li>{t(`y_new = k / x_new`)}</li>
  <li>{t(`y_new = 400,000,000 / (1,000,000 + amount_in)`)}</li>
  <li>{t(`Вы получите:`)}</li>
  <li>{t(`ETH_out = y - y_new`)}</li>
  <li>{t(`С учётом fee 0.3%:`)}</li>
  <li>{t(`Фактически получите ETH_out × 0.997`)}</li>
</ul>

<p className="text-gray-300 mb-4">{t(`Price impact:`)}</p>

<ul className="pl-6 text-gray-300 space-y-2 mb-12 list-none">
  <li>{t(`Чем больше ваш ордер относительно пула, тем хуже цена:`)}</li>
  <li>{t(`Пул: 1,000,000 USDC × 400 ETH`)}</li>
  <li>{t(`Купить 1 ETH:`)}</li>
  <li>{t(`- Price impact: ~0.25%`)}</li>
  <li>{t(`- Средняя цена: 2,506 USDC/ETH`)}</li>
  <li>{t(`Купить 40 ETH (10% пула):`)}</li>
  <li>{t(`- Price impact: ~10%`)}</li>
  <li>{t(`- Средняя цена: 2,750 USDC/ETH 😱`)}</li>
  <li>{t(`Купить 200 ETH (50% пула):`)}</li>
  <li>{t(`- Price impact: ~100%`)}</li>
  <li>{t(`- Средняя цена: 5,000 USDC/ETH 💀`)}</li>
</ul>

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Преимущества Hyperswap`)}</h3>

<ul className="pl-6 text-gray-300 space-y-4 mb-12 list-none">
  <li>
    {t(`✅ Крупнейший TVL среди AMM на Hyperliquid:`)}
    <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
      <li>{t(`TVL: $280M`)}</li>
      <li>{t(`→ Лучшая ликвидность для большинства пар`)}</li>
      <li>{t(`→ Ниже price impact для средних ордеров`)}</li>
    </ul>
  </li>

  <li>
    {t(`✅ Широкий выбор пар (80+):`)}
    <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
      <li>{t(`• Мажорные: USDC/ETH, USDC/HYPE, ETH/BTC`)}</li>
      <li>{t(`• Альткоины: ARB, OP, UNI, AAVE, etc.`)}</li>
      <li>{t(`• Long-tail токены: новые проекты на Hyperliquid`)}</li>
    </ul>
  </li>

  <li>
    {t(`✅ Мгновенное исполнение:`)}
    <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
      <li>{t(`Market swap:`)}</li>
      <li>{t(`1. Нажали "Swap"`)}</li>
      <li>{t(`2. Подтвердили в кошельке`)}</li>
      <li>{t(`3. Получили токены через 1-2 секунды ✅`)}</li>
      <li>{t(`vs. Limit order на HyperCore:`)}</li>
      <li>{t(`Может ждать часами/днями`)}</li>
    </ul>
  </li>

  <li>
    {t(`✅ Простой UX:`)}
    <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
      <li>{t(`1. Выбрать токены (From / To)`)}</li>
      <li>{t(`2. Ввести сумму`)}</li>
      <li>{t(`3. Нажать "Swap"`)}</li>
      <li>{t(`Нет нужды понимать Order Book, bid/ask, etc.`)}</li>
    </ul>
  </li>

  <li>
    {t(`✅ LP rewards (для провайдеров ликвидности):`)}
    <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
      <li>{t(`Добавили $10,000 в пул USDC/ETH:`)}</li>
      <li>{t(`- APY: 15-30% (зависит от volume пары)`)}</li>
      <li>{t(`- Доход от swap fees: 0.25% × volume`)}</li>
      <li>{t(`За год: $1,500-3,000 дохода 💰`)}</li>
      <li>{t(`(но есть impermanent loss — см. недостатки)`)}</li>
    </ul>
  </li>

  <li>
    {t(`✅ Популярность:`)}
    <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
      <li>{t(`• Самый используемый AMM на Hyperliquid`)}</li>
      <li>{t(`• Большое сообщество`)}</li>
      <li>{t(`• Активная разработка`)}</li>
    </ul>
  </li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Недостатки Hyperswap`)}</h2>

<ul className="pl-6 text-gray-300 space-y-4 mb-12 list-none">
  <li>
    {t(`❌ Price impact для крупных ордеров:`)}
    <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
      <li>{t(`Купить 50 ETH ($125,000) на Hyperswap:`)}</li>
      <li>{t(`- Price impact: 4-6%`)}</li>
      <li>{t(`- Loss: $5,000-7,500 💸`)}</li>
      <li>{t(`vs. HyperCore Spot:`)}</li>
      <li>{t(`- Price impact: 0.2-0.5%`)}</li>
      <li>{t(`- Loss: $250-625`)}</li>
      <li>{t(`Разница: $4,750-6,875 убытка`)}</li>
    </ul>
  </li>

  <li>
    {t(`❌ Swap fee 0.3% (всегда):`)}
    <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
      <li>{t(`Swap $10,000:`)}</li>
      <li>{t(`Fee: $10,000 × 0.3% = $30`)}</li>
      <li>{t(`vs. HyperCore Spot (maker):`)}</li>
      <li>{t(`Fee: $0 (или rebate -$10)`)}</li>
      <li>{t(`Для активного трейдера (100 свапов по $10k/год):`)}</li>
      <li>{t(`Hyperswap fees: $3,000/год`)}</li>
      <li>{t(`HyperCore fees: $0/год (или -$1,000 rebate)`)}</li>
      <li>{t(`Разница: $3,000-4,000/год 💸`)}</li>
    </ul>
  </li>

  <li>
    {t(`❌ Impermanent Loss для LP:`)}
    <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
      <li>{t(`Вы добавили $10,000 в пул USDC/ETH (50/50):`)}</li>
      <li>{t(`- 5,000 USDC`)}</li>
      <li>{t(`- 2 ETH @ 2,500 USDC`)}</li>
      <li>{t(`Через месяц ETH вырос до 3,500 USDC (+40%):`)}</li>
      <li>{t(`Если держали токены:`)}</li>
      <li>{t(`- 5,000 USDC`)}</li>
      <li>{t(`- 2 ETH × 3,500 = 7,000 USDC`)}</li>
      <li>{t(`- Total: $12,000 (+20%)`)}</li>
      <li>{t(`В пуле (с учётом rebalancing):`)}</li>
      <li>{t(`- Новый баланс: ~6,455 USDC + 1.55 ETH`)}</li>
      <li>{t(`- Total: $11,882 (+18.8%)`)}</li>
      <li>{t(`Impermanent Loss: $12,000 - $11,882 = $118 (1.2%)`)}</li>
      <li>{t(`(Плюс вы получили LP fees, которые могут компенсировать)`)}</li>
    </ul>
  </li>

  <li>
    {t(`❌ MEV уязвимость (sandwich attacks):`)}
    <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
      <li>{t(`Ваш крупный swap виден в mempool`)}</li>
      <li>{t(`MEV-боты делают:`)}</li>
      <li>{t(`1. Frontrun: покупают перед вами → цена растёт`)}</li>
      <li>{t(`2. Ваш swap исполняется по худшей цене`)}</li>
      <li>{t(`3. Backrun: боты продают → цена падает, они в прибыли`)}</li>
      <li>{t(`Вы теряете 0.5-2% дополнительно к price impact`)}</li>
    </ul>
  </li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Когда использовать Hyperswap`)}</h2>

<ul className="pl-6 text-gray-300 space-y-4 mb-12 list-none">
  <li>
    {t(`✅ Средние ордера ($1,000-20,000):`)}
    <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
      <li>{t(`• Price impact приемлемый (0.5-2%)`)}</li>
      <li>{t(`• Мгновенное исполнение`)}</li>
    </ul>
  </li>

    <li>
  {t(`✅ Long-tail токены:`)}
  <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
    <li>{t(`• Многие доступны только на Hyperswap`)}</li>
    <li>{t(`• HyperCore Spot может не иметь пары`)}</li>
  </ul>
</li>

<li>
  {t(`✅ Вы торопитесь:`)}
  <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
    <li>{t(`• Нужен немедленный swap`)}</li>
    <li>{t(`• Не готовы ждать limit order`)}</li>
  </ul>
</li>

<li>
  {t(`✅ Провайдинг ликвидности:`)}
  <ul className="pl-6 mt-2 space-y-2 text-gray-300 list-none">
    <li>{t(`• Высокие APY (15-50% на популярных парах)`)}</li>
    <li>{t(`• Но понимаете impermanent loss`)}</li>
  </ul>
</li>

<p className="text-gray-300 mb-6">{t(`Пример использования:`)}</p>

<p className="text-gray-300 mb-4">{t(`Активный трейдер хочет купить 5 ETH ($12,500):`)}</p>

<ul className="pl-6 text-gray-300 space-y-2 mb-12 list-none">
  <li>{t(`Hyperswap market swap:`)}</li>
  <li>{t(`- Gas: 1.8 HYPE ($4.50)`)}</li>
  <li>{t(`- Swap fee: 0.3% = $37.50`)}</li>
  <li>{t(`- Price impact: 0.8% = $100`)}</li>
  <li>{t(`- Total cost: $142`)}</li>
  <li>{t(`- Execution: 2 секунды ✅`)}</li>
  <li>{t(`vs. HyperCore Spot limit order:`)}</li>
  <li>{t(`- Gas: 1.0 HYPE ($2.50)`)}</li>
  <li>{t(`- Maker fee: 0% (или rebate)`)}</li>
  <li>{t(`- Price impact: 0%`)}</li>
  <li>{t(`- Total cost: $2.50 (или -$5 rebate)`)}</li>
  <li>{t(`- Execution: 1-3 часа ⏱️`)}</li>
  <li>{t(`Hyperswap дороже на $139.50, но мгновенно`)}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`3. Kittenswap: инновационный AMM с уникальными фичами`)}</h2>

<p className="text-gray-300 mb-6">{t(`Обзор`)}</p>
<p className="text-gray-300 mb-6">{t(`Kittenswap — второй по величине AMM на Hyperliquid, известный инновационными фичами и более низкими комиссиями для определённых пар.`)}</p>
<p className="text-gray-300 mb-6">{t(`Официальный сайт: https://kittenswap.xyz`)}</p>

<p className="text-gray-300 mb-4">{t(`Основные характеристики:`)}</p>
<div className="overflow-x-auto mb-12">
  <table className="w-full text-left border-collapse">
    <tbody className="text-sm text-gray-300">
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`Тип`)}</td>
        <td className="p-4">{t(`AMM (Uniswap V2 + улучшения)`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`TVL`)}</td>
        <td className="p-4">{t(`~$120M`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`Доля рынка`)}</td>
        <td className="p-4">{t(`14.1%`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`Swap fee`)}</td>
        <td className="p-4">{t(`0.2-0.25% (ниже Hyperswap!)`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`LP reward`)}</td>
        <td className="p-4">{t(`0.17-0.20%`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`Protocol fee`)}</td>
        <td className="p-4">{t(`0.03-0.05%`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`Доступные пары`)}</td>
        <td className="p-4">{t(`50+`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`Уникальные фичи`)}</td>
        <td className="p-4">{t(`Dynamic fees, LP incentives`)}</td>
      </tr>
      <tr>
        <td className="p-4 font-medium">{t(`Gas cost`)}</td>
        <td className="p-4">{t(`1.5-2 HYPE (~$4-5)`)}</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Уникальные особенности Kittenswap`)}</h2>

<h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`1. Dynamic Fees (динамические комиссии)`)}</h3>
<p className="text-gray-300 mb-4">{t(`В отличие от фиксированных 0.3% (Hyperswap), Kittenswap адаптирует комиссию в зависимости от волатильности:`)}</p>

<ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
  <li>{t(`Стабильные пары (USDC/USDT):`)}</li>
  <li className="pl-6">{t(`- Fee: 0.05% (в 6 раз ниже Hyperswap!)`)}</li>
  <li className="pl-6">{t(`- Для swap $10,000: $5 fee vs. $30 на Hyperswap`)}</li>
  <li>{t(`Волатильные пары (ETH/ALT):`)}</li>
  <li className="pl-6">{t(`- Fee: 0.3% (как Hyperswap)`)}</li>
  <li>{t(`Экстремально волатильные (мемкоины):`)}</li>
  <li className="pl-6">{t(`- Fee: 0.5% (защита LP от IL)`)}</li>
  <li>{t(`Преимущество: экономия для трейдеров стабильных пар, защита LP на волатильных.`)}</li>
</ul>

<h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`2. Concentrated Liquidity (beta)`)}</h3>
<p className="text-gray-300 mb-4">{t(`Kittenswap тестирует Uniswap V3 style concentrated liquidity:`)}</p>

<ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
  <li>{t(`Традиционный пул (Hyperswap): Ликвидность распределена от $0 до $∞`)}</li>
  <li>{t(`Concentrated liquidity (Kittenswap):`)}</li>
  <li className="pl-6">{t(`LP выбирает диапазон цен (например, ETH $2,400-2,600)`)}</li>
  <li className="pl-6">{t(`→ Ликвидность концентрируется в этом диапазоне`)}</li>
  <li className="pl-6">{t(`→ LP получает больше fees (если цена в диапазоне)`)}</li>
  <li className="pl-6">{t(`→ Трейдеры получают меньший price impact`)}</li>
  <li>{t(`Статус: в beta, доступно для 5 пар.`)}</li>
</ul>

<h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`3. LP Incentive Programs`)}</h3>
<p className="text-gray-300 mb-4">{t(`Kittenswap регулярно проводит liquidity mining кампании с дополнительными наградами:`)}</p>

<ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
  <li>{t(`Пул USDC/HYPE:`)}</li>
  <li className="pl-6">{t(`- Base APY: 20% (от swap fees)`)}</li>
  <li className="pl-6">{t(`- Incentive program: +15% в $KITTEN токенах`)}</li>
  <li className="pl-6">{t(`- Total APY: 35% 🔥`)}</li>
  <li>{t(`vs. Hyperswap (тот же пул):`)}</li>
  <li className="pl-6">{t(`- APY: 20% (только swap fees)`)}</li>
  <li>{t(`$KITTEN token:`)}</li>
  <li className="pl-6">{t(`• Governance token Kittenswap`)}</li>
  <li className="pl-6">{t(`• Стейкинг для долевого получения protocol fees`)}</li>
  <li className="pl-6">{t(`• Vote на добавление новых пар`)}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Преимущества Kittenswap`)}</h2>

<ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
  <li>{t(`✅ Ниже комиссии для стабильных пар:`)}</li>
  <li className="pl-6">{t(`Swap 10,000 USDC → USDT:`)}</li>
  <li className="pl-6">{t(`Kittenswap: 0.05% = $5 fee`)}</li>
  <li className="pl-6">{t(`Hyperswap: 0.3% = $30 fee`)}</li>
  <li className="pl-6">{t(`Экономия: $25 (83%) 💰`)}</li>

  <li>{t(`✅ Инновационные фичи:`)}</li>
  <li className="pl-6">{t(`• Dynamic fees`)}</li>
  <li className="pl-6">{t(`• Concentrated liquidity (beta)`)}</li>
  <li className="pl-6">{t(`• LP incentives`)}</li>

  <li>{t(`✅ Активная команда:`)}</li>
  <li className="pl-6">{t(`• Регулярные обновления`)}</li>
  <li className="pl-6">{t(`• Быстрое добавление новых токенов`)}</li>
  <li className="pl-6">{t(`• Responsive поддержка`)}</li>

  <li>{t(`✅ Более высокие APY для LP (благодаря incentives):`)}</li>
  <li className="pl-6">{t(`Kittenswap: 25-45% APY (с incentives)`)}</li>
  <li className="pl-6">{t(`Hyperswap: 15-30% APY (только fees)`)}</li>

  <li>{t(`✅ Governance token ($KITTEN):`)}</li>
  <li className="pl-6">{t(`Держатели $KITTEN получают:`)}</li>
  <li className="pl-12">{t(`- Долю protocol fees (staking rewards)`)}</li>
  <li className="pl-12">{t(`- Голосование по развитию протокола`)}</li>
  <li className="pl-12">{t(`- Early access к новым фичам`)}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Недостатки Kittenswap`)}</h2>

<ul className="pl-6 text-gray-300 space-y-2 mb-12 list-none">
  <li>{t(`❌ Меньший TVL, чем Hyperswap:`)}</li>
  <li className="pl-6">{t(`Kittenswap: $120M TVL`)}</li>
  <li className="pl-6">{t(`Hyperswap: $280M TVL`)}</li>
  <li className="pl-6">{t(`→ Для некоторых пар ликвидность ниже`)}</li>
  <li className="pl-6">{t(`→ Price impact может быть выше`)}</li>

  <li>{t(`❌ Меньше пар (50 vs. 80 на Hyperswap):`)}</li>
  <li className="pl-6">{t(`Экзотические токены могут отсутствовать`)}</li>
  <li className="pl-6">{t(`Нужно проверять доступность перед swap`)}</li>

  <li>{t(`❌ Concentrated liquidity (beta) может быть сложной:`)}</li>
  <li className="pl-6">{t(`LP должен активно управлять позицией:`)}</li>
  <li className="pl-12">{t(`- Выбрать правильный диапазон цен`)}</li>
  <li className="pl-12">{t(`- Rebalancing при выходе цены из диапазона`)}</li>
  <li className="pl-6">{t(`Для новичков сложнее, чем традиционный пул`)}</li>

  <li>{t(`❌ $KITTEN token волатильность:`)}</li>
  <li className="pl-6">{t(`LP incentives в $KITTEN:`)}</li>
  <li className="pl-12">{t(`- Токен может упасть на 30-50% → фактическая APY ниже`)}</li>
  <li className="pl-12">{t(`- Риск для LP, не желающих держать $KITTEN`)}</li>
  </ul>
</ul>

    <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Когда использовать Kittenswap`)}</h2>

<ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
  <li>{t(`✅ Стабильные пары (USDC/USDT, USDC/DAI):`)}</li>
  <li className="pl-6">{t(`• Комиссия 0.05% vs. 0.3% на Hyperswap`)}</li>
  <li className="pl-6">{t(`• Экономия 83%`)}</li>

  <li>{t(`✅ Вы LP и хотите максимизировать APY:`)}</li>
  <li className="pl-6">{t(`• Incentive programs дают +10-20% APY`)}</li>
  <li className="pl-6">{t(`• Но нужно быть готовым к волатильности $KITTEN`)}</li>

  <li>{t(`✅ Поддержка инноваций:`)}</li>
  <li className="pl-6">{t(`• Если верите в будущее Kittenswap`)}</li>
  <li className="pl-6">{t(`• Хотите участвовать в governance`)}</li>
</ul>

<p className="text-gray-300 mb-6">{t(`Пример использования:`)}</p>
<p className="text-gray-300 mb-4">{t(`DeFi-деген хочет стейблить прибыль:`)}</p>
<p className="text-gray-300 mb-4">{t(`Swap 50,000 USDC → USDT`)}</p>

<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6">
  <h4 className="text-lg font-bold text-white mb-2">{t(`Kittenswap:`)}</h4>
  <ul className="pl-6 text-gray-300 space-y-1 list-none">
    <li>{t(`- Fee: 0.05% = $25`)}</li>
    <li>{t(`- Gas: 1.8 HYPE ($4.50)`)}</li>
    <li>{t(`- Total: $29.50`)}</li>
  </ul>
</div>

<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6">
  <h4 className="text-lg font-bold text-white mb-2">{t(`Hyperswap:`)}</h4>
  <ul className="pl-6 text-gray-300 space-y-1 list-none">
    <li>{t(`- Fee: 0.3% = $150`)}</li>
    <li>{t(`- Gas: 1.8 HYPE ($4.50)`)}</li>
    <li>{t(`- Total: $154.50`)}</li>
  </ul>
</div>

<p className="text-gray-300 mb-12">{t(`Экономия с Kittenswap: $125 (81%) 💰`)}</p>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`4. Prjx: нишевый DEX для новых токенов`)}</h2>

<p className="text-gray-300 mb-6">{t(`Обзор`)}</p>
<p className="text-gray-300 mb-6">{t(`Prjx — небольшой AMM с фокусом на новые токены и ранние запуски проектов на Hyperliquid.`)}</p>
<p className="text-gray-300 mb-6">{t(`Официальный сайт: https://prjx.xyz`)}</p>

<p className="text-gray-300 mb-4">{t(`Основные характеристики:`)}</p>
<div className="overflow-x-auto mb-12">
  <table className="w-full text-left border-collapse">
    <tbody className="text-sm text-gray-300">
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`Тип`)}</td>
        <td className="p-4">{t(`AMM (Uniswap V2)`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`TVL`)}</td>
        <td className="p-4">{t(`~$30M`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`Доля рынка`)}</td>
        <td className="p-4">{t(`3.5%`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`Swap fee`)}</td>
        <td className="p-4">{t(`0.3-0.5%`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`LP reward`)}</td>
        <td className="p-4">{t(`0.25-0.42%`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`Доступные пары`)}</td>
        <td className="p-4">{t(`30+ (много новых токенов)`)}</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4 font-medium">{t(`Focus`)}</td>
        <td className="p-4">{t(`Early-stage проекты`)}</td>
      </tr>
      <tr>
        <td className="p-4 font-medium">{t(`Gas cost`)}</td>
        <td className="p-4">{t(`1.5-2 HYPE`)}</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Преимущества Prjx`)}</h2>
<ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
  <li>{t(`✅ Early access к новым токенам:`)}</li>
  <li className="pl-6">{t(`Новый проект запускается на Hyperliquid:`)}</li>
  <li className="pl-6">{t(`1. Prjx часто первый добавляет пару`)}</li>
  <li className="pl-6">{t(`2. Вы можете купить до листинга на Hyperswap/Kittenswap`)}</li>
  <li className="pl-6">{t(`3. Потенциал early gains 🚀`)}</li>

  <li>{t(`✅ Низкие требования для листинга:`)}</li>
  <li className="pl-6">{t(`Проекты могут добавить свой токен на Prjx легче, чем на Hyperswap`)}</li>
  <li className="pl-6">{t(`→ Больше разнообразия`)}</li>
  <li className="pl-6">{t(`→ Больше "gem" токенов (но и больше рисков)`)}</li>

  <li>{t(`✅ Комьюнити-ориентированный:`)}</li>
  <li className="pl-6">{t(`Prjx активно работает с новыми проектами:`)}</li>
  <li className="pl-12">{t(`- Liquidity bootstrapping`)}</li>
  <li className="pl-12">{t(`- Marketing support`)}</li>
  <li className="pl-12">{t(`- Community building`)}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Недостатки Prjx`)}</h2>
<ul className="pl-6 text-gray-300 space-y-2 mb-12 list-none">
  <li>{t(`❌ Очень низкий TVL ($30M):`)}</li>
  <li className="pl-6">{t(`Большинство пар имеют TVL $50k-500k`)}</li>
  <li className="pl-6">{t(`→ Высокий price impact даже для средних ордеров`)}</li>
  <li className="pl-6">{t(`Swap $5,000 на Prjx:`)}</li>
  <li className="pl-12">{t(`- Price impact: 3-8% 😱`)}</li>
  <li className="pl-6">{t(`vs. Hyperswap (тот же токен):`)}</li>
  <li className="pl-12">{t(`- Price impact: 0.5-1.5%`)}</li>

  <li>{t(`❌ Высокий риск скамов:`)}</li>
  <li className="pl-6">{t(`Новые токены на Prjx:`)}</li>
  <li className="pl-12">{t(`- Многие не прошли audit`)}</li>
  <li className="pl-12">{t(`- Rugpull риск высокий`)}</li>
  <li className="pl-12">{t(`- Honeypot токены возможны`)}</li>
  <li className="pl-6">{t(`⚠️ DYOR (Do Your Own Research) обязательно!`)}</li>

  <li>{t(`❌ Низкая ликвидность:`)}</li>
  <li className="pl-6">{t(`Попытка продать $10,000 токена:`)}</li>
  <li className="pl-12">{t(`- Может не хватить ликвидности`)}</li>
  <li className="pl-12">{t(`- Slippage 10-20%`)}</li>
  <li className="pl-12">{t(`- Или вообще невозможно продать`)}</li>

  <li>{t(`❌ Малое количество пар:`)}</li>
  <li className="pl-6">{t(`Prjx: 30+ пар (в основном новые/нишевые)`)}</li>
  <li className="pl-6">{t(`Hyperswap: 80+ пар (мажоры + альткоины)`)}</li>
  <li className="pl-6">{t(`Если токен не новый → лучше использовать Hyperswap`)}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Когда использовать Prjx`)}</h2>

<ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
  <li>{t(`✅ Вы охотитесь за “gems”:`)}</li>
  <li className="pl-6">{t(`• Готовы к высокому риску`)}</li>
  <li className="pl-6">{t(`• DYOR каждый токен`)}</li>
  <li className="pl-6">{t(`• Малые суммы ($100-1,000)`)}</li>

  <li>{t(`✅ Новый токен доступен только на Prjx:`)}</li>
  <li className="pl-6">{t(`• Пока нет на Hyperswap/Kittenswap`)}</li>
  <li className="pl-6">{t(`• Вы хотите early entry`)}</li>

  <li>{t(`❌ НЕ используйте для:`)}</li>
  <li className="pl-6">{t(`• Крупных ордеров (>$5,000)`)}</li>
  <li className="pl-6">{t(`• Мажорных токенов (ETH, HYPE — они есть на Hyperswap с лучшей ликвидностью)`)}</li>
  <li className="pl-6">{t(`• Если не готовы к 100% потере (скам-риск)`)}</li>
</ul>

<p className="text-gray-300 mb-6">{t(`Пример использования:`)}</p>
<p className="text-gray-300 mb-4">{t(`Degen-трейдер ищет 10-100x токены:`)}</p>

<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6">
  <h4 className="text-lg font-bold text-white mb-2">{t(`Новый токен $GEM на Prjx:`)}</h4>
  <ul className="pl-6 text-gray-300 space-y-1 list-none">
    <li>{t(`- Market cap: $500k`)}</li>
    <li>{t(`- TVL пула: $50k`)}</li>
    <li>{t(`- Покупка: $500 (0.1% TVL)`)}</li>
    <li>{t(`- Price impact: 2%`)}</li>
  </ul>
</div>

<ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
  <li>{t(`Риски:`)}</li>
  <li className="pl-6">{t(`✅ Если токен x10 → $5,000 прибыль`)}</li>
  <li className="pl-6">{t(`❌ Если rugpull → -$500 убыток`)}</li>
</ul>

<ul className="pl-6 text-gray-300 space-y-2 mb-12 list-none">
  <li>{t(`Стратегия:`)}</li>
  <li className="pl-6">{t(`- Малые суммы ($500-1,000)`)}</li>
  <li className="pl-6">{t(`- Диверсификация (10 токенов × $500 = $5,000)`)}</li>
  <li className="pl-6">{t(`- 1 успех x10 окупает 9 неудач`)}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`5. Hypertrade: DEX-агрегатор, объединяющий всё`)}</h2>

<p className="text-gray-300 mb-6">{t(`Обзор`)}</p>
<p className="text-gray-300 mb-6">{t(`Hypertrade — это не отдельный DEX, а агрегатор, который объединяет все вышеперечисленные площадки (HyperCore Spot, Hyperswap, Kittenswap, Prjx) для нахождения лучшего маршрута и лучшей цены.`)}</p>
<p className="text-gray-300 mb-6">{t(`Официальный сайт: https://ht.xyz`)}</p>

<p className="text-gray-300 mb-4">{t(`Основные характеристики:`)}</p>
  <div className="overflow-x-auto mb-12">
    <table className="w-full text-left border-collapse">
      <tbody className="text-sm text-gray-300">
        <tr className="border-b border-gray-700">
          <td className="p-4 font-medium">{t(`Тип`)}</td>
          <td className="p-4">{t(`DEX Aggregator`)}</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="p-4 font-medium">{t(`Интегрированные DEX`)}</td>
          <td className="p-4">{t(`HyperCore Spot, Hyperswap, Kittenswap, Prjx`)}</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="p-4 font-medium">{t(`Platform fee`)}</td>
          <td className="p-4">{t(`0%`)}</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="p-4 font-medium">{t(`Доступные пары`)}</td>
          <td className="p-4">{t(`100+ (все из интегрированных DEX)`)}</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="p-4 font-medium">{t(`Split-routing`)}</td>
          <td className="p-4">{t(`Да`)}</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="p-4 font-medium">{t(`Invisium Simulations`)}</td>
          <td className="p-4">{t(`Да (точность 99.5-99.9%)`)}</td>
        </tr>
        <tr>
          <td className="p-4 font-medium">{t(`Gas cost`)}</td>
          <td className="p-4">{t(`1.5-3.5 HYPE (зависит от маршрута)`)}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Как работает Hypertrade`)}</h2>
  <ol className="pl-6 text-gray-300 list-decimal space-y-2 mb-12">
    <li>{t(`Когда вы вводите swap (например, 10,000 USDC → ETH):`)}</li>
    <li className="pl-6">{t(`Router R1 сканирует все DEX:`)}</li>
    <li className="pl-12">{t(`o HyperCore Spot: какая лучшая цена в книге заявок?`)}</li>
    <li className="pl-12">{t(`o Hyperswap: какой price impact в пуле?`)}</li>
    <li className="pl-12">{t(`o Kittenswap: какая комиссия? какой impact?`)}</li>
    <li className="pl-12">{t(`o Prjx: есть ли пара? какая ликвидность?`)}</li>
    <li className="pl-6">{t(`Рассчитывает возможные маршруты:`)}</li>
    <li className="pl-12">{t(`o Direct: 100% через Hyperswap`)}</li>
    <li className="pl-12">{t(`o Split: 60% Hyperswap + 40% Kittenswap`)}</li>
    <li className="pl-12">{t(`o Multi-hop: USDC → HYPE → ETH (через разные DEX)`)}</li>
    <li className="pl-12">{t(`o HyperCore: limit order @ целевая цена`)}</li>
    <li className="pl-6">{t(`Invisium симулирует каждый маршрут:`)}</li>
    <li className="pl-12">{t(`o Запускает виртуальную транзакцию`)}</li>
    <li className="pl-12">{t(`o Видит точный результат (amount out, gas cost)`)}</li>
    <li className="pl-6">{t(`Выбирает лучший (максимальный output - gas cost):`)}</li>
    <li className="pl-12">{t(`Вариант 1 (Hyperswap only): 3.980 ETH - $4.50 gas = 3.978 ETH`)}</li>
    <li className="pl-12">{t(`Вариант 2 (Split 60/40): 4.012 ETH - $6.50 gas = 4.008 ETH ✅`)}</li>
    <li className="pl-12">{t(`Вариант 3 (Multi-hop): 3.995 ETH - $9.00 gas = 3.989 ETH`)}</li>
    <li className="pl-12">{t(`Лучший: Вариант 2 (Split-routing)`)}</li>
    <li className="pl-12">{t(`Показывает вам:`)}</li>
    <li className="pl-16">{t(`💰 You will receive: 4.008 ETH`)}</li>
    <li className="pl-16">{t(`📊 Price Impact: 0.52%`)}</li>
    <li className="pl-16">{t(`💡 You save +$75 vs. single DEX`)}</li>
    <li className="pl-12">{t(`🔀 Route:`)}</li>
    <li className="pl-16">{t(`60% via Hyperswap → 2.405 ETH`)}</li>
    <li className="pl-16">{t(`40% via Kittenswap → 1.603 ETH`)}</li>
    <li className="pl-12">{t(`Выполняет в одной транзакции:`)}</li>
    <li className="pl-16">{t(`o Все части swap происходят атомарно`)}</li>
    <li className="pl-16">{t(`o Либо всё успешно, либо всё отменяется (revert)`)}</li>
  </ol>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Преимущества Hypertrade`)}</h2>
  <ul className="pl-6 text-gray-300 space-y-2 mb-12 list-none">
    <li>{t(`✅ 0% platform fee:`)}</li>
    <li className="pl-6">{t(`Hypertrade не добавляет свою комиссию`)}</li>
    <li className="pl-6">{t(`Вы платите только:`)}</li>
    <li className="pl-12">{t(`- Gas (1.5-3.5 HYPE)`)}</li>
    <li className="pl-12">{t(`- Комиссии DEX (0.05-0.3%, заложены в price)`)}</li>

    <li>{t(`vs. другие агрегаторы:`)}</li>
    <li className="pl-6">{t(`1inch: 0.3-1% platform fee`)}</li>
    <li className="pl-6">{t(`Matcha: 0% fee, но positive slippage забирают`)}</li>

    <li>{t(`✅ Invisium Simulations (точность 99.5-99.9%):`)}</li>
    <li className="pl-6">{t(`Традиционный DEX: показывает ~ориентировочную котировку`)}</li>
    <li className="pl-6">{t(`Hypertrade: симулирует транзакцию → показывает точный результат`)}</li>
    <li className="pl-6">{t(`Точность 99.9% = вы знаете, что получите ДО выполнения`)}</li>

    <li>{t(`✅ Split-routing минимизирует price impact:`)}</li>
    <li className="pl-6">{t(`Swap 50,000 USDC → ETH:`)}</li>
    <li className="pl-12">{t(`Single DEX (Hyperswap):`)}</li>
    <li className="pl-16">{t(`- Price impact: 2.8%`)}</li>
    <li className="pl-16">{t(`- Loss: $1,400`)}</li>
    <li className="pl-12">{t(`Hypertrade split-routing:`)}</li>
    <li className="pl-16">{t(`- Price impact: 0.51%`)}</li>
    <li className="pl-16">{t(`- Loss: $255`)}</li>
    <li className="pl-12">{t(`Экономия: $1,145 💰`)}</li>

    <li>{t(`✅ Автоматический выбор лучшего DEX:`)}</li>
    <li className="pl-6">{t(`Вам не нужно вручную проверять:`)}</li>
    <li className="pl-12">{t(`- Hyperswap vs. Kittenswap`)}</li>
    <li className="pl-12">{t(`- Order Book vs. AMM`)}</li>
    <li className="pl-12">{t(`- Multi-hop vs. direct`)}</li>
    <li className="pl-6">{t(`Hypertrade делает это за вас автоматически`)}</li>

    <li>{t(`✅ Доступ ко всем токенам:`)}</li>
    <li className="pl-6">{t(`Hypertrade имеет доступ к парам на всех DEX:`)}</li>
    <li className="pl-12">{t(`- 100+ пар`)}</li>
    <li className="pl-12">{t(`- Включая новые токены (через Prjx)`)}</li>
    <li className="pl-12">{t(`- Включая мажоры (через HyperCore Spot)`)}</li>
  </ul>


<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Недостатки Hypertrade`)}</h2>

  <ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
    <li>{t(`❌ Чуть выше gas cost (если используется split-routing):`)}</li>
    <li className="pl-6">{t(`Simple swap (Hyperswap direct): 1.5 HYPE ($3.75)`)}</li>
    <li className="pl-6">{t(`Split-routing (Hypertrade): 2.2 HYPE ($5.50)`)}</li>
    <li className="pl-6">{t(`Дополнительно: +$1.75 gas`)}</li>
    <li className="pl-6">{t(`Но: экономия на price impact >> дополнительный gas`)}</li>
    <li className="pl-6">{t(`Для ордеров >$5,000 split-routing всегда выгоден`)}</li>

    <li>{t(`❌ Нет limit orders (пока):`)}</li>
    <li className="pl-6">{t(`HyperCore Spot позволяет размещать limit orders`)}</li>
    <li className="pl-6">{t(`Hypertrade (пока) только market swaps`)}</li>
    <li className="pl-6">{t(`Roadmap: добавление limit orders в Q1 2025`)}</li>

    <li>{t(`❌ Зависимость от интегрированных DEX:`)}</li>
    <li className="pl-6">{t(`Если Hyperswap/Kittenswap имеют downtime:`)}</li>
    <li className="pl-12">{t(`→ Hypertrade не может использовать эти источники`)}</li>
    <li className="pl-12">{t(`→ Маршруты могут быть не оптимальными`)}</li>
    <li className="pl-6">{t(`(Но это редкость — Hyperliquid стабилен)`)}</li>
  </ul>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Когда использовать Hypertrade`)}</h2>

  <ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
    <li>{t(`✅ ВСЕГДА (почти):`)}</li>
    <li className="pl-6">{t(`Hypertrade автоматически выбирает лучший вариант:`)}</li>
    <li className="pl-12">{t(`• Если single DEX лучше → использует его`)}</li>
    <li className="pl-12">{t(`• Если split-routing выгоднее → использует split`)}</li>
    <li className="pl-12">{t(`• Если multi-hop эффективнее → использует multi-hop`)}</li>
    <li className="pl-6">{t(`Вам не нужно думать — просто используйте Hypertrade.`)}</li>

    <li>{t(`✅ Особенно важно для:`)}</li>
    <li className="pl-6">{t(`• Крупных ордеров (>$10,000) — split-routing критичен`)}</li>
    <li className="pl-6">{t(`• Активных трейдеров — экономия 0.5-2% × 100 свапов = $500-2,000/год`)}</li>
    <li className="pl-6">{t(`• Новичков — не нужно разбираться в каждом DEX`)}</li>

    <li>{t(`❌ Когда НЕ использовать:`)}</li>
    <li className="pl-6">{t(`• Вы хотите limit order → используйте HyperCore Spot напрямую`)}</li>
    <li className="pl-6">{t(`• Вы LP и добавляете ликвидность → используйте конкретный DEX`)}</li>
  </ul>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Сравнительная таблица всех DEX`)}</h2>

  <div className="overflow-x-auto mb-12">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="p-4 text-gray-400 font-medium">{t(`Параметр`)}</th>
          <th className="p-4 text-gray-400 font-medium">{t(`HyperCore Spot`)}</th>
          <th className="p-4 text-gray-400 font-medium">{t(`Hyperswap`)}</th>
          <th className="p-4 text-gray-400 font-medium">{t(`Kittenswap`)}</th>
          <th className="p-4 text-gray-400 font-medium">{t(`Prjx`)}</th>
          <th className="p-4 text-gray-400 font-medium">{t(`Hypertrade`)}</th>
        </tr>
      </thead>
      <tbody className="text-sm text-gray-300">
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4">{t(`Тип`)}</td>
          <td className="p-4">{t(`Order Book`)}</td>
          <td className="p-4">{t(`AMM`)}</td>
          <td className="p-4">{t(`AMM`)}</td>
          <td className="p-4">{t(`AMM`)}</td>
          <td className="p-4">{t(`Aggregator`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4">{t(`TVL`)}</td>
          <td className="p-4">{t(`$420M`)}</td>
          <td className="p-4">{t(`$280M`)}</td>
          <td className="p-4">{t(`$120M`)}</td>
          <td className="p-4">{t(`$30M`)}</td>
          <td className="p-4">{t(`N/A (агрегирует)`)}</td>
        </tr>
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4">{t(`Комиссия`)}</td>
          <td className="p-4">{t(`0-0.05%`)}</td>
          <td className="p-4">{t(`0.3%`)}</td>
          <td className="p-4">{t(`0.05-0.3%`)}</td>
          <td className="p-4">{t(`0.3-0.5%`)}</td>
          <td className="p-4">{t(`0% платформы`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4">{t(`Price impact`)}</td>
          <td className="p-4">{t(`Низкий`)}</td>
          <td className="p-4">{t(`Средний`)}</td>
          <td className="p-4">{t(`Средний`)}</td>
          <td className="p-4">{t(`Высокий`)}</td>
          <td className="p-4">{t(`Минимальный`)}</td>
        </tr>
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4">{t(`Gas cost`)}</td>
          <td className="p-4">{t(`1.0-1.2 HYPE`)}</td>
          <td className="p-4">{t(`1.5-2 HYPE`)}</td>
          <td className="p-4">{t(`1.5-2 HYPE`)}</td>
          <td className="p-4">{t(`1.5-2 HYPE`)}</td>
          <td className="p-4">{t(`1.5-3.5 HYPE`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4">{t(`Execution`)}</td>
          <td className="p-4">{t(`Может ждать`)}</td>
          <td className="p-4">{t(`Мгновенно`)}</td>
          <td className="p-4">{t(`Мгновенно`)}</td>
          <td className="p-4">{t(`Мгновенно`)}</td>
          <td className="p-4">{t(`Мгновенно`)}</td>
        </tr>
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4">{t(`Пары`)}</td>
          <td className="p-4">{t(`15+ (мажоры)`)}</td>
          <td className="p-4">{t(`80+`)}</td>
          <td className="p-4">{t(`50+`)}</td>
          <td className="p-4">{t(`30+ (новые)`)}</td>
          <td className="p-4">{t(`100+ (все)`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4">{t(`Limit orders`)}</td>
          <td className="p-4">{t(`✅ Да`)}</td>
          <td className="p-4">{t(`❌ Нет`)}</td>
          <td className="p-4">{t(`❌ Нет`)}</td>
          <td className="p-4">{t(`❌ Нет`)}</td>
          <td className="p-4">{t(`⚠️ Roadmap`)}</td>
        </tr>
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4">{t(`Split-routing`)}</td>
          <td className="p-4">{t(`N/A`)}</td>
          <td className="p-4">{t(`N/A`)}</td>
          <td className="p-4">{t(`N/A`)}</td>
          <td className="p-4">{t(`N/A`)}</td>
          <td className="p-4">{t(`✅ Да`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4">{t(`Simulations`)}</td>
          <td className="p-4">{t(`❌ Нет`)}</td>
          <td className="p-4">{t(`❌ Нет`)}</td>
          <td className="p-4">{t(`❌ Нет`)}</td>
          <td className="p-4">{t(`❌ Нет`)}</td>
          <td className="p-4">{t(`✅ Invisium`)}</td>
        </tr>
        <tr className="bg-hyper-800/20">
          <td className="p-4">{t(`Лучше для`)}</td>
          <td className="p-4">{t(`Киты, лимитники`)}</td>
          <td className="p-4">{t(`Средние ордера`)}</td>
          <td className="p-4">{t(`Стейблы, LP`)}</td>
          <td className="p-4">{t(`Gem hunting`)}</td>
          <td className="p-4">{t(`Все`)}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Рекомендации по выбору DEX`)}</h2>

  <ul className="pl-6 text-gray-300 space-y-2 mb-6 list-none">
    <li>{t(`Для разных типов трейдеров:`)}</li>

    <li className="pl-6">{t(`🐋 Киты (ордера >$50,000):`)}</li>
    <li className="pl-12">{t(`1. HyperCore Spot (приоритет):`)}</li>
    <li className="pl-16">{t(`• Limit orders для минимизации impact`)}</li>
    <li className="pl-16">{t(`• 0% maker fee (или rebate)`)}</li>
    <li className="pl-16">{t(`• Терпение: 1-6 часов на исполнение`)}</li>
    <li className="pl-12">{t(`2. Hypertrade (если срочно):`)}</li>
    <li className="pl-16">{t(`• Split-routing минимизирует impact`)}</li>
    <li className="pl-16">{t(`• Мгновенное исполнение`)}</li>
    <li className="pl-12">{t(`НЕ используйте: Hyperswap/Kittenswap напрямую (слишком высокий impact).`)}</li>

    <li className="pl-6">{t(`📊 Активные трейдеры ($10,000-50,000/месяц):`)}</li>
    <li className="pl-12">{t(`Hypertrade (основной):`)}</li>
    <li className="pl-16">{t(`• Автоматическая оптимизация каждого swap`)}</li>
    <li className="pl-16">{t(`• Экономия $500-2,000/год`)}</li>
    <li className="pl-12">{t(`HyperCore Spot (для несрочных):`)}</li>
    <li className="pl-16">{t(`• Если готовы подождать лучшую цену`)}</li>

    <li className="pl-6">{t(`💼 Средние трейдеры ($1,000-10,000/месяц):`)}</li>
    <li className="pl-12">{t(`Hypertrade (80% свапов):`)}</li>
    <li className="pl-16">{t(`• Удобство + автоматическая оптимизация`)}</li>
    <li className="pl-12">{t(`Kittenswap (для стейблов):`)}</li>
    <li className="pl-16">{t(`• Комиссия 0.05% vs. 0.3%`)}</li>
    <li className="pl-16">{t(`• Swap USDC ⇄ USDT, USDC ⇄ DAI`)}</li>

    <li className="pl-6">{t(`🎲 Degen-трейдеры (gem hunting):`)}</li>
    <li className="pl-12">{t(`Prjx (новые токены):`)}</li>
    <li className="pl-16">{t(`• Early access`)}</li>
    <li className="pl-16">{t(`• Малые суммы ($100-1,000)`)}</li>
    <li className="pl-16">{t(`• DYOR обязательно`)}</li>
    <li className="pl-12">{t(`Hypertrade (для выхода):`)}</li>
    <li className="pl-16">{t(`• Когда токен листится на Hyperswap`)}</li>
    <li className="pl-16">{t(`• Лучшая ликвидность для продажи`)}</li>

    <li className="pl-6">{t(`💧 Liquidity Providers:`)}</li>
    <li className="pl-12">{t(`Kittenswap (максимальная APY):`)}</li>
    <li className="pl-16">{t(`• Incentive programs: +10-20% APY`)}</li>
    <li className="pl-16">{t(`• Dynamic fees защищают от IL`)}</li>
    <li className="pl-12">{t(`Hyperswap (стабильность):`)}</li>
    <li className="pl-16">{t(`• Крупнейший TVL → стабильные fees`)}</li>
    <li className="pl-16">{t(`• 15-30% APY без дополнительных рисков`)}</li>
    <li className="pl-12">{t(`HyperCore Spot (N/A для LP):`)}</li>
    <li className="pl-16">{t(`• Order Book не имеет LP пулов`)}</li>
  </ul>

   <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Практические кейсы`)}</h2>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`Кейс 1: Swing trader покупает 50 ETH`)}</h3>
  <p className="text-gray-300 mb-4">{t(`Профиль: крупный ордер, не срочно, хочет лучшую цену.`)}</p>
  <p className="text-gray-300 mb-2">{t(`Стратегия:`)}</p>
  <ul className="pl-6 text-gray-300 space-y-1 mb-4 list-none">
    <li>{t(`1. Разместить limit order на HyperCore Spot @ 2,485 USDC (текущая цена 2,500)`)}</li>
    <li>{t(`2. Подождать 2-6 часов исполнения`)}</li>
    <li>{t(`3. Если не исполнился → использовать Hypertrade (split-routing)`)}</li>
  </ul>
  <p className="text-gray-300 mb-2">{t(`Результат:`)}</p>
  <ul className="pl-6 text-gray-300 space-y-1 mb-6 list-none">
    <li>{t(`HyperCore limit order исполнился @ 2,485:`)}</li>
    <li className="pl-6">{t(`- Купил 50 ETH за 124,250 USDC`)}</li>
    <li className="pl-6">{t(`- Gas: 1.0 HYPE ($2.50)`)}</li>
    <li className="pl-6">{t(`- Maker fee: 0% (или rebate -$120)`)}</li>
    <li className="pl-6">{t(`- Total cost: -$117.50 (получил rebate!)`)}</li>
    <li>{t(`vs. Hyperswap market:`)}</li>
    <li className="pl-6">{t(`- Купил бы 50 ETH за 130,500 USDC (impact 4.8%)`)}</li>
    <li className="pl-6">{t(`- Gas: 2.5 HYPE ($6.25)`)}</li>
    <li className="pl-6">{t(`- Fee: 0.3% = $391.50`)}</li>
    <li className="pl-6">{t(`- Total cost: $6,250 + $397.75 = $6,647.75`)}</li>
    <li>{t(`Экономия: $6,765 💰💰💰`)}</li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`Кейс 2: DCA-инвестор покупает ETH еженедельно`)}</h3>
  <p className="text-gray-300 mb-2">{t(`Профиль: покупает $1,000 ETH каждый понедельник (52 раза/год).`)}</p>
  <p className="text-gray-300 mb-2">{t(`Стратегия:`)}</p>
  <ul className="pl-6 text-gray-300 space-y-1 mb-4 list-none">
    <li>{t(`Используйте Hypertrade:`)}</li>
    <li className="pl-6">{t(`• Автоматическая оптимизация каждого swap`)}</li>
    <li className="pl-6">{t(`• Средняя экономия 1.2% на swap`)}</li>
  </ul>
  <p className="text-gray-300 mb-2">{t(`Результат:`)}</p>
  <ul className="pl-6 text-gray-300 space-y-1 mb-4 list-none">
    <li>{t(`Без Hypertrade (Hyperswap):`)}</li>
    <li className="pl-6">{t(`- 52 свапа × $1,000 = $52,000/год`)}</li>
    <li className="pl-6">{t(`- Fees: 52 × $3 (0.3%) = $156`)}</li>
    <li className="pl-6">{t(`- Price impact: 52 × $5 (0.5%) = $260`)}</li>
    <li className="pl-6">{t(`- Total cost: $416`)}</li>
    <li>{t(`С Hypertrade:`)}</li>
    <li className="pl-6">{t(`- 52 свапа × $1,000 = $52,000/год`)}</li>
    <li className="pl-6">{t(`- Fees: аналогично (платятся DEX)`)}</li>
    <li className="pl-6">{t(`- Price impact: 52 × $2 (0.2%, благодаря split) = $104`)}</li>
    <li className="pl-6">{t(`- Gas: 52 × $1.5 extra = $78`)}</li>
    <li className="pl-6">{t(`- Total cost: $260 + $78 = $338`)}</li>
    <li>{t(`Экономия: $416 - $338 = $78/год`)}</li>
    <li>{t(`Но: лучшие маршруты дают +0.8% average return`)}</li>
    <li className="pl-6">{t(`→ $52,000 × 0.8% = $416/год дополнительно`)}</li>
    <li>{t(`Итоговая выгода: $416 + $78 = $494/год 💰`)}</li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`Кейс 3: Gem hunter ищет 100x токены`)}</h3>
  <p className="text-gray-300 mb-2">{t(`Профиль: малые суммы ($500), высокий риск, новые токены.`)}</p>
  <p className="text-gray-300 mb-2">{t(`Стратегия:`)}</p>
  <ul className="pl-6 text-gray-300 space-y-1 mb-4 list-none">
    <li>{t(`1. Мониторинг новых листингов на Prjx (Discord, Twitter)`)}</li>
    <li>{t(`2. DYOR каждого токена:`)}</li>
    <li className="pl-6">{t(`o Whitepaper`)}</li>
    <li className="pl-6">{t(`o Команда`)}</li>
    <li className="pl-6">{t(`o Tokenomics`)}</li>
    <li className="pl-6">{t(`o Contract audit`)}</li>
    <li>{t(`3. Купить малую сумму ($500) на Prjx`)}</li>
    <li>{t(`4. Если токен листится на Hyperswap → продать через Hypertrade (лучшая ликвидность)`)}</li>
  </ul>
  <p className="text-gray-300 mb-2">{t(`Результат (пример):`)}</p>
  <ul className="pl-6 text-gray-300 space-y-1 mb-6 list-none">
    <li>{t(`10 токенов × $500 = $5,000 вложено`)}</li>
    <li>{t(`Результаты:`)}</li>
    <li className="pl-6">{t(`- 7 токенов: rugpull или -80% → -$3,500 убыток`)}</li>
    <li className="pl-6">{t(`- 2 токена: 0-50% → $0-250 прибыль`)}</li>
    <li className="pl-6">{t(`- 1 токен: x15 → $7,500 прибыль`)}</li>
    <li>{t(`Итого: $7,500 + $250 - $3,500 = $4,250 прибыль (+85% ROI)`)}</li>
    <li>{t(`Ключ: диверсификация + малые суммы + DYOR`)}</li>
  </ul>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Заключение: какой DEX выбрать?`)}</h2>
  <p className="text-gray-300 mb-2">{t(`TL;DR рекомендации:`)}</p>
  <ul className="pl-6 text-gray-300 space-y-1 mb-4 list-none">
    <li>{t(`Для 90% пользователей:`)}</li>
    <li className="pl-6">{t(`• 🏆 Используйте Hypertrade — автоматически выбирает лучший вариант`)}</li>
    <li>{t(`Для специфических случаев:`)}</li>
    <li className="pl-6">{t(`• 🐋 Крупные ордера (>$50k): HyperCore Spot limit orders`)}</li>
    <li className="pl-6">{t(`• 💱 Стейблы (USDC⇄USDT): Kittenswap (fee 0.05%)`)}</li>
    <li className="pl-6">{t(`• 💧 Liquidity providing: Kittenswap (максимальная APY) или Hyperswap (стабильность)`)}</li>
    <li className="pl-6">{t(`• 🎲 Gem hunting: Prjx (новые токены, высокий риск)`)}</li>
  </ul>
  <p className="text-gray-300 mb-4">{t(`Почему Hypertrade — лучший выбор:`)}</p>
  <ul className="pl-6 text-gray-300 space-y-1 mb-6 list-none">
    <li>{t(`✅ 0% platform fee — нет дополнительных комиссий`)}</li>
    <li>{t(`✅ Invisium Simulations — точность 99.5-99.9%`)}</li>
    <li>{t(`✅ Split-routing — минимальный price impact`)}</li>
    <li>{t(`✅ Доступ ко всем DEX — 100+ пар`)}</li>
    <li>{t(`✅ Автоматическая оптимизация — не нужно думать`)}</li>
  </ul>
  <p className="text-gray-300 mb-12">{t(`Начните использовать прямо сейчас: https://ht.xyz 🚀`)}</p>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Ресурсы`)}</h2>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`📊 Официальные сайты:`)}</h3>
  <ul className="pl-6 text-gray-300 space-y-2 list-disc mb-6">
    <li>{t(`HyperCore Spot: https://hyperliquid.xyz/trade`)}</li>
    <li>{t(`Hyperswap: https://hyperswap.xyz`)}</li>
    <li>{t(`Kittenswap: https://kittenswap.xyz`)}</li>
    <li>{t(`Prjx: https://prjx.xyz`)}</li>
    <li>{t(`Hypertrade: https://ht.xyz`)}</li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`📚 Документация:`)}</h3>
  <ul className="pl-6 text-gray-300 space-y-2 list-disc mb-6">
    <li>{t(`Hyperliquid Docs: https://docs.hyperliquid.xyz`)}</li>
    <li>{t(`Hypertrade Docs: https://docs.hypertrade.io`)}</li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`📈 Аналитика:`)}</h3>
  <ul className="pl-6 text-gray-300 space-y-2 list-disc mb-6">
    <li>{t(`DeFiLlama (TVL tracking): https://defillama.com/chain/Hyperliquid`)}</li>
    <li>{t(`Dune Analytics: https://dune.com/hyperliquid`)}</li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(`💬 Сообщества:`)}</h3>
  <ul className="pl-6 text-gray-300 space-y-2 list-disc mb-12">
    <li>{t(`Hypertrade Discord: https://discord.gg/hypertrade`)}</li>
    <li>{t(`Hyperliquid Discord: https://discord.gg/hyperliquid`)}</li>
    <li>{t(`Twitter: @Hypertrade_xyz`)}</li>
  </ul>


</article>
 </div>
    
    </section>
  );
};
"use client"
import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { ArrowRight, Calculator, Cpu, Layers, TrendingUp, Zap, CheckCircle, BarChart, DollarSign, PieChart, Route, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { useTranslation } from "react-i18next";

export const ArticleMultiHopRouting = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "multi-hop-routing-guide");
  
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
           <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-400 mb-4">
             <span className="bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">{post.category}</span>
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

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Стратегии использования промежуточных токенов для оптимизации свопов`)}</h2>
<p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-hyper-accent pl-6 italic">{t(`🧩 Скрытая механика, которая экономит 3–15% на каждом свопе`)}</p>

<h3 className="text-xl font-bold text-white mt-6 mb-4">{t(`Представьте две ситуации:`)}</h3>

<div className=" p-6 rounded-xl border border-gray-700 mb-6">
  <h4 className="font-bold text-red-400 mb-2">{t(`Трейдер А (прямой своп):`)}</h4>
  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
    <li>{t(`Swap: TOKEN_A → TOKEN_B (direct)`)}</li>
    <li>{t(`Pool: TOKEN_A/TOKEN_B`)}</li>
    <li>{t(`Liquidity: $50,000 (LOW)`)}</li>
    <li>{t(`Price impact: 12.5%`)}</li>
    <li>{t(`Your swap: $10,000`)}</li>
    <li>{t(`Loss: $1,250`)}</li>
  </ul>
</div>

<div className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 mb-6">
  <h4 className="font-bold text-green-400 mb-2">{t(`Трейдер Б (multi-hop через промежуточный токен):`)}</h4>
  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
    <li>{t(`Swap: TOKEN_A → HYPE → TOKEN_B (2-hop)`)}</li>
    <li className="mt-2 font-bold">{t(`Hop 1: TOKEN_A → HYPE`)}</li>
    <li>{t(`Pool: TOKEN_A/HYPE`)}</li>
    <li>{t(`Liquidity: $500,000 (HIGH)`)}</li>
    <li>{t(`Price impact: 1.2%`)}</li>
    <li className="mt-2 font-bold">{t(`Hop 2: HYPE → TOKEN_B`)}</li>
    <li>{t(`Pool: HYPE/TOKEN_B`)}</li>
    <li>{t(`Liquidity: $300,000 (MEDIUM)`)}</li>
    <li>{t(`Price impact: 2.8%`)}</li>
    <li className="mt-2 font-bold">{t(`Combined impact: 4.0%`)}</li>
    <li>{t(`Your swap: $10,000`)}</li>
    <li>{t(`Loss: $400`)}</li>
    <li className="text-yellow-400 font-bold mt-2">{t(`SAVINGS: $850 (68% reduction!)`)}</li>
  </ul>
  <p className="text-gray-300 mt-2">{t(`Разница: $850 на ОДНОЙ транзакции просто за использование промежуточного токена.`)}</p>
</div>

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Статистика:`)}</h3>
<ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mb-6">
  <li>{t(`3–15% экономия на большинстве свопов через multi-hop routing`)}</li>
  <li>{t(`$15,000–$75,000 годовая экономия для трейдера с объёмом $500k`)}</li>
  <li>{t(`80% токенов на DEX имеют лучшую ликвидность через промежуточные пары`)}</li>
</ul>

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Сегодня вы узнаете:`)}</h3>
<ul className="list-decimal list-inside text-sm text-gray-300 space-y-1 mb-6">
  <li>{t(`Что такое multi-hop routing и как он работает`)}</li>
  <li>{t(`Как выбирать оптимальные промежуточные токены`)}</li>
  <li>{t(`Когда multi-hop лучше direct swap`)}</li>
  <li>{t(`Как Hypertrade автоматизирует этот процесс`)}</li>
</ul>

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`🧠 Что такое multi-hop routing`)}</h3>
<p className="text-gray-300 mb-6">{t(`Определение`)}</p>
<p className="text-gray-300 mb-6">{t(`Multi-hop routing (многошаговая маршрутизация) = разбиение свопа на несколько последовательных обменов через промежуточные токены для получения лучшей итоговой цены.`)}</p>
<p className="text-gray-300 mb-6">{t(`Простая аналогия:`)}</p>

<div className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 mb-6">
  <p className="text-gray-300 font-bold mb-2">{t(`Direct exchange (прямой обмен):`)}</p>
  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
    <li>{t(`RUB → JPY напрямую`)}</li>
    <li>{t(`Exchange rate: 1.2 (плохой курс, мало кто торгует)`)}</li>
    <li>{t(`Комиссия: 5%`)}</li>
    <li>{t(`Итого: потеря 6.2%`)}</li>
  </ul>
  <p className="text-gray-300 font-bold mt-2">{t(`Multi-hop (через промежуточную валюту):`)}</p>
  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
    <li>{t(`RUB → USD → JPY`)}</li>
    <li>{t(`Step 1: RUB → USD (rate 1.5, комиссия 1%)`)}</li>
    <li>{t(`Step 2: USD → JPY (rate 1.4, комиссия 1%)`)}</li>
    <li>{t(`Итого: потеря 2%`)}</li>
    <li className="text-yellow-400 font-bold">{t(`Экономия: 4.2%`)}</li>
  </ul>
  <p className="text-gray-300 mt-2">{t(`То же самое в криптовалютах.`)}</p>
</div>

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Почему multi-hop работает`)}</h3>
<p className="text-gray-300 mb-4">{t(`Фундаментальная причина: фрагментация ликвидности`)}</p>

<div className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 mb-6">
  <h4 className="text-white font-bold mb-2">{t(`Major pairs (high liquidity):`)}</h4>
  <p className="text-gray-300">{t(`USDC/HYPE: $400M TVL`)}</p>
  <p className="text-gray-300">{t(`HYPE/ETH: $200M TVL`)}</p>
  <p className="text-gray-300">{t(`USDC/ETH: $150M TVL`)}</p>

  <h4 className="text-white font-bold mt-4 mb-2">{t(`Minor pairs (low liquidity):`)}</h4>
  <p className="text-gray-300">{t(`TOKEN_A/TOKEN_B: $20k TVL ← проблема!`)}</p>
  <p className="text-gray-300">{t(`TOKEN_C/TOKEN_D: $50k TVL`)}</p>
  <p className="text-gray-300">{t(`TOKEN_E/TOKEN_F: $80k TVL`)}</p>

  <p className="text-gray-300 mt-2">{t(`Проблема: Большинство токенов НЕ имеют прямых пар друг с другом или имеют очень низкую ликвидность.`)}</p>
  <p className="text-gray-300">{t(`Решение: Используйте “мостовые” токены (bridge tokens) с высокой ликвидностью ко многим другим токенам.`)}</p>
</div>

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Примеры multi-hop paths`)}</h3>
<ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mb-6">
  <li>{t(`1-hop (direct swap): TOKEN_A → TOKEN_B`)}</li>
  <li>{t(`2-hop (через 1 промежуточный токен): TOKEN_A → HYPE → TOKEN_B`)}</li>
  <li>{t(`3-hop (через 2 промежуточных токена): TOKEN_A → HYPE → ETH → TOKEN_B`)}</li>
  <li>{t(`4+ hops (редко, только для экстремальных случаев): TOKEN_A → HYPE → ETH → USDC → TOKEN_B`)}</li>
</ul>

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`📊 Математика multi-hop: почему это работает`)}</h3>
<p className="text-gray-300 mb-4">{t(`Для 2-hop пути: Combined Impact = Impact₁ + Impact₂ + (Impact₁ × Impact₂)`)}</p>

<div className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 mb-6">
  <p className="text-gray-300 font-bold mb-2">{t(`Пример:`)}</p>
  <p className="text-gray-300">{t(`Hop 1: TOKEN_A → HYPE (impact 1.5%)`)}</p>
  <p className="text-gray-300">{t(`Hop 2: HYPE → TOKEN_B (impact 2.5%)`)}</p>
  <p className="text-gray-300">{t(`Combined = 1.5% + 2.5% + (0.015 × 0.025) = 4% + 0.0375% = 4.0375%`)}</p>
  <p className="text-gray-300">{t(`vs Direct swap: 12.5%`)}</p>
  <p className="text-yellow-400 font-bold">{t(`Savings: 8.46%`)}</p>
  <p className="text-gray-300 mt-2">{t(`Правило: Если combined impact (многошаговый) < direct impact → используйте multi-hop.`)}</p>
</div>

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Практический пример расчётов`)}</h3>
<div className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 mb-12">
  <p className="text-gray-300 font-bold mb-2">{t(`Цель: Своп $20,000 TOKEN_A → TOKEN_B`)}</p>
  <p className="text-red-400 font-bold mb-1">{t(`Option 1: Direct swap`)}</p>
  <p className="text-gray-300 mb-1">{t(`Pool: TOKEN_A/TOKEN_B`)}</p>
  <p className="text-gray-300 mb-1">{t(`TVL: $80,000`)}</p>
  <p className="text-gray-300 mb-1">{t(`Swap size / TVL: 25%`)}</p>
  <p className="text-gray-300 mb-1">{t(`Price impact calculation (AMM formula): Impact = (20,000 / 80,000) / (1 + 20,000 / 80,000) = 0.25 / 1.25 = 0.20 = 20% ← КАТАСТРОФА!`)}</p>
  <p className="text-gray-300 mb-1">{t(`Expected output: No impact: 4,000 TOKEN_B`)}</p>
  <p className="text-gray-300 mb-1">{t(`With impact: 3,200 TOKEN_B`)}</p>
  <p className="text-gray-300 mb-1">{t(`Loss: 800 TOKEN_B = $16,000`)}</p>

  <p className="text-green-400 font-bold mt-2 mb-1">{t(`Option 2: Multi-hop (TOKEN_A → HYPE → TOKEN_B)`)}</p>
  <p className="text-gray-300 mb-1">{t(`Hop 1: TOKEN_A → HYPE`)}</p>
  <p className="text-gray-300 mb-1">{t(`Pool TVL: $500,000`)}</p>
  <p className="text-gray-300 mb-1">{t(`Swap / TVL: 4%`)}</p>
  <p className="text-gray-300 mb-1">{t(`Impact: (20,000 / 500,000) / (1 + 20,000 / 500,000) = 0.04 / 1.04 = 0.0385 = 3.85%`)}</p>
  <p className="text-gray-300 mb-1">{t(`Output: $19,230 worth of HYPE`)}</p>

  <p className="text-gray-300 mb-1">{t(`Hop 2: HYPE → TOKEN_B`)}</p>
  <p className="text-gray-300 mb-1">{t(`Pool TVL: $300,000`)}</p>
  <p className="text-gray-300 mb-1">{t(`Swap / TVL: 6.4%`)}</p>
  <p className="text-gray-300 mb-1">{t(`Impact: (19,230 / 300,000) / (1 + 19,230 / 300,000) = 0.064 / 1.064 = 0.0602 = 6.02%`)}</p>
  <p className="text-gray-300 mb-1">{t(`Output: $18,072 worth of TOKEN_B = 3,614 TOKEN_B`)}</p>

  <p className="text-yellow-400 font-bold mt-2 mb-1">{t(`Combined impact: (20,000 - 18,072) / 20,000 = 9.64%`)}</p>
  <p className="text-yellow-400 font-bold mb-1">{t(`Loss: 386 TOKEN_B = $7,720`)}</p>
  <p className="text-green-400 font-bold">{t(`vs Direct loss: $16,000`)}</p>
  <p className="text-green-400 font-bold">{t(`SAVINGS: $8,280 (52% меньше потерь!)`)}</p>
</div>
</article>


<article className="prose prose-invert prose-lg max-w-none">

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`🎯 Критерии выбора промежуточных токенов`)}</h2>

  <h3 className="text-xl font-bold text-white mt-6 mb-4">{t(`1. Высокая ликвидность (главный критерий)`)}</h3>
  <p className="text-gray-300 mb-4">{t(`Идеальные bridge tokens на Hyperliquid:`)}</p>

  <div className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 mb-6">
    <h4 className="text-white font-bold mb-2">{t(`Tier 1 (BEST bridge tokens):`)}</h4>
    <pre className="text-sm text-gray-300 mb-2">{t(`HYPE:  $800M+ total liquidity
       50+ trading pairs
       24h volume: $200M+
       → UNIVERSAL bridge token

USDC:  $500M+ total liquidity
       40+ trading pairs
       24h volume: $150M+
       → Stablecoin bridge

ETH:   $300M+ total liquidity (wrapped)
       30+ trading pairs
       24h volume: $80M+
       → Major crypto bridge`)}</pre>

    <h4 className="text-white font-bold mt-4 mb-2">{t(`Tier 2 (GOOD bridge tokens):`)}</h4>
    <pre className="text-sm text-gray-300">{t(`BTC (wrapped): $100M+ liquidity
SOL (wrapped): $80M+ liquidity
USDT:          $60M+ liquidity`)}</pre>

    <p className="text-gray-300 mt-4">{t(`Почему HYPE = лучший bridge token на Hyperliquid:`)}</p>
    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
      <li>{t(`Нативный токен → максимальная ликвидность`)}</li>
      <li>{t(`Пары со всеми major и большинством minor токенов`)}</li>
      <li>{t(`Lowest fees на HyperCore Spot (0.05% taker)`)}</li>
      <li>{t(`Deepest order books`)}</li>
    </ul>
  </div>

  <h3 className="text-xl font-bold text-white mt-6 mb-4">{t(`2. Количество торговых пар`)}</h3>
  <p className="text-gray-300 mb-2">{t(`Checklist для bridge token:`)}</p>
  <ul className="list-disc list-inside text-sm text-gray-300 space-y-2 mb-6">
    <li>{t(`✓ EXCELLENT (>40 пар):
  → Может связать почти любые токены
  → Примеры: HYPE, USDC`)}</li>
    <li>{t(`⚠️ GOOD (20–40 пар):
  → Может связать major и многие minor токены
  → Примеры: ETH, BTC (wrapped)`)}</li>
    <li>{t(`✗ POOR (<20 пар):
  → Ограниченное применение
  → НЕ подходит как universal bridge`)}</li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-6 mb-4">{t(`3. Spread и fees`)}</h3>
  <p className="text-gray-300 mb-2">{t(`Для bridge token важен TIGHT SPREAD:`)}</p>
  <pre className="text-sm text-gray-300 mb-2">{t(`HYPE/USDC:
Best bid: $24.98
Best ask: $25.02
Spread: 0.16% ✓ EXCELLENT

TOKEN_X/USDC:
Best bid: $9.80
Best ask: $10.20
Spread: 4% ✗ TOO WIDE`)}</pre>
  <p className="text-gray-300 mb-6">{t(`Правило: Bridge token должен иметь spread <0.5% со всеми major tokens`)}</p>

  <h3 className="text-xl font-bold text-white mt-6 mb-4">{t(`4. Volatility consideration`)}</h3>
  <p className="text-gray-300 mb-2">{t(`Low-volatility bridge tokens (предпочтительнее для multi-hop):`)}</p>
  <pre className="text-sm text-gray-300 mb-2">{t(`USDC, USDT: ~0% volatility
→ Предсказуемый результат
→ No additional risk`)}</pre>

  <p className="text-gray-300 mb-2">{t(`High-volatility bridge tokens (use cautiously):`)}</p>
  <pre className="text-sm text-gray-300 mb-2">{t(`HYPE, ETH, BTC: 2–8% daily volatility
→ Price может измениться между hops
→ Но: deep liquidity компенсирует риск`)}</pre>

  <p className="text-gray-300 mb-6">{t(`Extreme volatility (AVOID as bridge):`)}</p>
  <pre className="text-sm text-gray-300 mb-6">{t(`Meme coins, micro-caps: 20–200% daily
→ NEVER use as intermediate token
Best practice: Используйте HYPE или USDC как default bridge tokens на Hyperliquid.`)}</pre>

  <h3 className="text-xl font-bold text-white mt-6 mb-4">{t(`🔍 Когда использовать multi-hop vs direct swap`)}</h3>
  <p className="text-gray-300 mb-2">{t(`Decision Tree`)}</p>
  <pre className="text-sm text-gray-300 mb-6">{t(`START: Нужен своп TOKEN_A → TOKEN_B
    ↓
┌───────────────────────────────────────┐
│ Существует прямая пара A/B?           │
└───────┬───────────────────────────┬───┘
        NO                          YES
        ↓                            ↓
    MULTI-HOP                    ┌─────────────────────┐
    обязателен                   │ Ликвидность >20×    │
                                 │ размер свопа?       │
                                 └──────┬──────────┬───┘
                                      YES         NO
                                       ↓           ↓
                                 ┌──────────┐  MULTI-HOP
                                 │ Impact   │  вероятно лучше
                                 │ <2%?     │
                                 └────┬──┬──┘
                                    YES NO
                                     ↓   ↓
                                  DIRECT MULTI-HOP
                                   SWAP  лучше`)}</pre>

</article>

<article className="prose prose-invert prose-lg max-w-none">

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Практические сценарии`)}</h2>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6">
    <h3 className="text-xl font-bold text-white mb-3">{t(`Scenario 1: Major токены (HYPE, ETH, BTC)`)}</h3>
    <p className="text-gray-300 mb-2">{t(`Swap: HYPE → ETH ($50,000)`)}</p>
    <pre className="text-sm text-gray-300 mb-2">{t(`Direct pair analysis:
HYPE/ETH pool: $200M TVL
Swap / TVL: 0.025%
Expected impact: <0.5%`)}</pre>
    <pre className="text-sm text-gray-300 mb-2">{t(`Multi-hop analysis:
HYPE → USDC → ETH
Combined pools: $600M+ TVL
Expected impact: <0.3%`)}</pre>
    <pre className="text-sm text-gray-300">{t(`Decision: DIRECT SWAP
Reason: Прямая пара достаточно глубокая
Savings from multi-hop: ~0.2% = $100
Gas cost for extra hop: ~$4
Net benefit: $96 (marginal)
Verdict: Direct проще и достаточно эффективен`)}</pre>
  </div>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6">
    <h3 className="text-xl font-bold text-white mb-3">{t(`Scenario 2: Mid-cap к mid-cap`)}</h3>
    <p className="text-gray-300 mb-2">{t(`Swap: TOKEN_C → TOKEN_D ($10,000)`)}</p>
    <pre className="text-sm text-gray-300 mb-2">{t(`Direct pair analysis:
TOKEN_C/TOKEN_D pool: $50k TVL
Swap / TVL: 20%
Expected impact: 16.7% ← КАТАСТРОФА!`)}</pre>
    <pre className="text-sm text-gray-300 mb-2">{t(`Multi-hop analysis:
TOKEN_C → HYPE → TOKEN_D
Pool 1 (C/HYPE): $500k TVL → impact 2%
Pool 2 (HYPE/D): $300k TVL → impact 3.3%
Combined impact: 5.4%`)}</pre>
    <pre className="text-sm text-gray-300">{t(`Decision: MULTI-HOP обязателен
Savings: 16.7% - 5.4% = 11.3% = $1,130!
Extra gas: $4
Net benefit: $1,126`)}</pre>
  </div>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6">
    <h3 className="text-xl font-bold text-white mb-3">{t(`Scenario 3: Exotic к exotic token`)}</h3>
    <p className="text-gray-300 mb-2">{t(`Swap: RARE_A → RARE_B ($5,000)`)}</p>
    <pre className="text-sm text-gray-300 mb-2">{t(`Direct pair: НЕ СУЩЕСТВУЕТ

Multi-hop options:
Option 1 (2-hop): RARE_A → HYPE → RARE_B
  Pool1: $100k TVL → impact 5%
  Pool2: $80k TVL → impact 6.25%
  Combined: 11.5%

Option 2 (3-hop): RARE_A → HYPE → USDC → RARE_B
  Pool1: $100k TVL → impact 5%
  Pool2: $400M TVL → impact ~0%
  Pool3: $60k TVL → impact 8.3%
  Combined: 13.4%

Option 3 (3-hop alt): RARE_A → USDC → HYPE → RARE_B
  Pool1: $120k TVL → impact 4.2%
  Pool2: $400M TVL → impact ~0%
  Pool3: $250k TVL → impact 2%
  Combined: 6.25%

Decision: Option 3 (3-hop alternative)
Reason: Максимизирует использование deep liquidity в USDC`)}</pre>
  </div>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`🚀 Как Hypertrade автоматически оптимизирует multi-hop routing`)}</h2>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6">
    <h3 className="text-xl font-bold text-white mb-3">{t(`Без Hypertrade (ручной анализ):`)}</h3>
    <pre className="text-sm text-gray-300 mb-2">{t(`Ваша задача:
1. Проверить существование прямой пары ✗
2. Найти все возможные промежуточные токены
   → HYPE, USDC, ETH, BTC, SOL, USDT... (20+ вариантов)
3. Для каждого промежуточного токена:
   - Проверить ликвидность пары A/intermediate
   - Проверить ликвидность пары intermediate/B
   - Рассчитать combined impact
4. Сравнить все варианты
5. Выбрать оптимальный
6. Выполнить multiple транзакции

Time: 20–30 минут
Error probability: 40–60% (human calculation mistakes)`)}</pre>
  </div>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6">
    <h3 className="text-xl font-bold text-white mb-3">{t(`С Hypertrade R1 Router:`)}</h3>
    <pre className="text-sm text-gray-300">{t(`1. Введите: TOKEN_A → TOKEN_B, amount
2. Нажмите: "Get Quote"

Hypertrade автоматически:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Сканирует 1000+ возможных путей за 0.5 секунды
✓ Проверяет 1-hop, 2-hop, 3-hop, 4-hop маршруты
✓ Анализирует ликвидность каждого pool/order book
✓ Рассчитывает price impact для КАЖДОГО пути
✓ Учитывает gas costs
✓ Запускает Invisium Simulation (99.9% accuracy)
✓ Возвращает OPTIMAL путь

Time: ~1–2 секунды
Accuracy: 99.5–99.9%`)}</pre>
  </div>

</article>



<article className="prose prose-invert prose-lg max-w-none">

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`2. Динамическая оптимизация маршрута`)}</h2>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6">
    <h3 className="text-xl font-bold text-white mb-3">{t(`Hypertrade R1 routing algorithm:`)}</h3>

    <pre className="text-sm text-gray-300 mb-4">{t(`Step 1: Path Discovery
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generate all possible paths:
- Direct: TOKEN_A → TOKEN_B
- 2-hop: TOKEN_A → [HYPE, USDC, ETH, BTC] → TOKEN_B
- 3-hop: TOKEN_A → X → Y → TOKEN_B
- 4-hop: TOKEN_A → X → Y → Z → TOKEN_B

Total paths generated: 1,000–5,000`)}</pre>

    <pre className="text-sm text-gray-300 mb-4">{t(`Step 2: Liquidity Filtering
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Remove paths with:
✗ Insufficient liquidity (<5× swap size)
✗ Too wide spread (>3%)
✗ Excessive hops (>4)

Remaining paths: 20–100`)}</pre>

    <pre className="text-sm text-gray-300 mb-4">{t(`Step 3: Impact Calculation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
For each remaining path:
- Calculate price impact per hop
- Sum combined impact
- Add gas costs
- Account for volatility risk (if applicable)`)}</pre>

    <pre className="text-sm text-gray-300 mb-4">{t(`Step 4: Invisium Simulation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Top 3 paths → run virtual execution:
- Pre-simulate on Hyperliquid state copy
- Verify actual output vs theoretical
- Detect anomalies (frontrun attempts, etc.)`)}</pre>

    <pre className="text-sm text-gray-300">{t(`Step 5: Selection
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Select path with:
MAX(Expected Output - Gas Costs - Slippage)

Return optimal route to user`)}</pre>
  </div>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`3. Комбинирование multi-hop + split-routing`)}</h2>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6">
    <p className="text-gray-300 mb-4">{t(`Уникальное преимущество Hypertrade: Можно комбинировать MULTI-HOP и SPLIT-ROUTING одновременно.`)}</p>
    <p className="text-gray-300 mb-4">{t(`Пример: Swap: $50,000 TOKEN_A → TOKEN_B`)}</p>

    <pre className="text-sm text-gray-300 mb-4">{t(`Optimal execution:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Route 1 (40% = $20,000):
TOKEN_A → HYPE → TOKEN_B (2-hop)
├─ HyperCore Spot: A → HYPE
└─ Hyperswap: HYPE → B
Expected output: 8,100 TOKEN_B
Impact: 4.5%

Route 2 (35% = $17,500):
TOKEN_A → USDC → HYPE → TOKEN_B (3-hop)
├─ Kittenswap: A → USDC
├─ HyperCore Spot: USDC → HYPE
└─ Prjx: HYPE → B
Expected output: 7,050 TOKEN_B
Impact: 5.2%

Route 3 (25% = $12,500):
TOKEN_A → TOKEN_B (direct, частично)
└─ Prjx: A → B (low liquidity, но лучшая цена на tail)
Expected output: 4,950 TOKEN_B
Impact: 7.8%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total expected output: 20,100 TOKEN_B
Average impact: 5.5%

vs Best single-path (2-hop только):
Expected: 18,500 TOKEN_B
Impact: 7.5%

Multi-path + multi-hop advantage: +1,600 TOKEN_B
Savings: $8,000 (16% better!)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Вывод: Hypertrade использует ОБЕATOOLS для максимальной оптимизации.`)}</pre>
  </div>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`📊 Реальные кейсы: multi-hop savings`)}</h2>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6">
    <h3 className="text-xl font-bold text-white mb-3">{t(`Кейс 1: Exotic token своп`)}</h3>
    <p className="text-gray-300 mb-4">{t(`Setup: Swap: RARE_TOKEN → ANOTHER_RARE ($10,000)`)}</p>
    <p className="text-gray-300 mb-4">{t(`Direct pair: НЕ существует`)}</p>

    <pre className="text-sm text-gray-300 mb-4">{t(`Анализ путей:
Path 1 (2-hop): RARE → HYPE → ANOTHER_RARE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hop 1: RARE → HYPE
Pool TVL: $200k
Impact: 5%
Output: $9,500 worth HYPE

Hop 2: HYPE → ANOTHER_RARE
Pool TVL: $150k
Impact: 6.3%
Output: $8,901 worth ANOTHER_RARE

Total impact: 10.99%
Loss: $1,099`)}</pre>

   <pre className="text-sm text-gray-300">{t(`Path 2 (3-hop): RARE → USDC → HYPE → ANOTHER_RARE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hop 1: RARE → USDC
Pool TVL: $300k
Impact: 3.3%
Output: $9,670 USDC

Hop 2: USDC → HYPE
Pool TVL: $400M (massive!)
Impact: ~0%
Output: $9,670 HYPE

Hop 3: HYPE → ANOTHER_RARE
Pool TVL: $150k
Impact: 6.5%
Output: $9,041 worth ANOTHER_RARE

Total impact: 9.59%
Loss: $959

SAVINGS: Path 2 vs Path 1 = $140 (14% reduction!)`)}</pre>
  </div>

</article>



<article className="prose prose-invert prose-lg max-w-none">

  <p className="text-gray-300 mb-6">{t(`Hypertrade выбрал Path 2 автоматически.`)}</p>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Кейс 2: Large mid-cap своп`)}</h2>
  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6">
    <p className="text-gray-300 mb-4">{t(`Setup: Swap: TOKEN_C → TOKEN_D ($100,000)`)}</p>
    <p className="text-gray-300 mb-4">{t(`Direct pair: Существует, но shallow liquidity`)}</p>

    <pre className="text-sm text-gray-300 mb-4">{t(`Comparison:
Option A: Direct swap через Hyperswap
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pool TVL: $500k
Swap / TVL: 20%
Price impact: 16.7%
Loss: $16,700

Option B: Multi-hop через HYPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Path: TOKEN_C → HYPE → TOKEN_D

Hop 1: C → HYPE
Pool TVL: $5M
Impact: 2%
Output: $98,000 HYPE

Hop 2: HYPE → D
Pool TVL: $3M
Impact: 3.3%
Output: $94,766 worth TOKEN_D

Total impact: 5.23%
Loss: $5,234

SAVINGS: $11,466 (69% reduction!)

Extra gas cost: $4
Net savings: $11,462

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Option C: Hypertrade combined approach
Split + Multi-hop hybrid:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
40% ($40k): C → HYPE → D (2-hop, HyperCore+Hyperswap)
35% ($35k): C → USDC → D (2-hop, Kittenswap+Prjx)
25% ($25k): C → D direct (Hyperswap, partial)

Combined impact: 4.1%
Loss: $4,100

Total savings vs direct: $12,600 (76% reduction!)
Total savings vs simple multi-hop: $1,134 (additional optimization)`)}</pre>
  </div>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Кейс 3: Stablecoin arbitrage через multi-hop`)}</h2>
  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6">
    <p className="text-gray-300 mb-4">{t(`Setup: Goal: USDT → USDC ($50,000)`)}</p>
    <p className="text-gray-300 mb-4">{t(`Reason: Slight depeg, arbitrage opportunity`)}</p>

    <pre className="text-sm text-gray-300 mb-4">{t(`Analysis:
Direct USDT/USDC:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pool exists, but shallow: $200k TVL
Swap / TVL: 25%
Impact: 20% (!)
→ UNPROFITABLE даже при depeg 0.5%

Multi-hop: USDT → HYPE → USDC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hop 1: USDT → HYPE
Pool TVL: $100M
Impact: <0.1%
Output: $49,950 HYPE

Hop 2: HYPE → USDC
Pool TVL: $400M
Impact: <0.1%
Output: $49,900 USDC

Total impact: 0.2%
Loss: $100

USDC depeg benefit: +0.5% = +$250
Net arbitrage profit: $150 ✓

vs Direct: Would lose $10,000 on impact alone!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Conclusion: Multi-hop made arbitrage possible.`)}</pre>
  </div>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`💡 10 практических советов по multi-hop routing`)}</h2>

  <div className="space-y-6 not-prose mb-12">
    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t(`1. Всегда проверяйте, может ли multi-hop улучшить цену`)}</h3>
      <p className="text-gray-300 mb-2">{t(`Before EVERY swap >$5,000:`)}</p>
      <pre className="text-sm text-gray-300">{t(`□ Check if direct pair exists
□ If yes: check TVL vs swap size ratio
□ If ratio >20× → direct probably OK
□ If ratio <20× → test multi-hop alternatives
□ Use Hypertrade to auto-compare`)}</pre>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t(`2. HYPE = default bridge token на Hyperliquid`)}</h3>
      <p className="text-gray-300 mb-2">{t(`When in doubt, route through HYPE:`)}</p>
      <pre className="text-sm text-gray-300">{t(`✓ Deepest liquidity ($800M+)
✓ Most trading pairs (50+)
✓ Lowest fees (0.05% on HyperCore Spot)
✓ Native token → no bridge risk

Default strategy:
ANY_TOKEN → HYPE → ANY_OTHER_TOKEN`)}</pre>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t(`3. Избегайте >4 hops`)}</h3>
      <p className="text-gray-300 mb-2">{t(`Optimal hop count:`)}</p>
      <pre className="text-sm text-gray-300">{t(`1-hop (direct): BEST (если liquidity достаточна)
2-hop: EXCELLENT (most common optimal)
3-hop: GOOD (для exotic tokens)
4-hop: ACCEPTABLE (rare cases)
5+ hops: ❌ AVOID (diminishing returns + gas costs)

Reason:
- Each hop adds ~0.05–0.3% fees
- Each hop adds complexity risk
- Marginal benefit decreases after 3 hops`)}</pre>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t(`4. Учитывайте gas costs в multi-hop`)}</h3>
      <p className="text-gray-300 mb-2">{t(`Gas cost breakdown на Hyperliquid:`)}</p>
      <pre className="text-sm text-gray-300">{t(`1-hop (direct): ~$4–6
2-hop: ~$6–10
3-hop: ~$10–15
4-hop: ~$15–20

Break-even analysis:
Если multi-hop экономит >$20, то даже 4-hop оправдан
Если экономия <$10, выбирайте проще маршрут

Hypertrade автоматически учитывает gas в расчёте`)}</pre>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t(`5. Для stablecoins предпочитайте direct swaps`)}</h3>
      <p className="text-gray-300 mb-2">{t(`USDC → USDT:`)}</p>
      <pre className="text-sm text-gray-300">{t(`Direct обычно лучше (tight spread, deep pool)

Исключение:
Если direct pool TVL <$1M → route through HYPE:
USDC → HYPE → USDT`)}</pre>
    </div>
  </div>

</article>


<article className="prose prose-invert prose-lg max-w-none">

  <div className="space-y-6 not-prose mb-12">
    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t(`6. Комбинируйте multi-hop с order splitting`)}</h3>
      <p className="text-gray-300 mb-2">{t(`Large swap ($50k+):`)}</p>
      <pre className="text-sm text-gray-300">{t(`Instead of:
- 100% через один multi-hop путь

Do:
- 50% через Path A (2-hop: TOKEN → HYPE → TARGET)
- 30% через Path B (3-hop: TOKEN → USDC → HYPE → TARGET)
- 20% через Path C (direct, если exists)

Benefit:
- Diversification снижает риск одного pool
- Использует multiple источники ликвидности
- Hypertrade делает это автоматически`)}</pre>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t(`7. Мониторьте volatility промежуточных токенов`)}</h3>
      <p className="text-gray-300 mb-2">{t(`Во время high volatility (VIX crypto >40):`)}</p>
      <pre className="text-sm text-gray-300">{t(`⚠️ CAUTION: Multi-hop через volatile bridge tokens

Example:
TOKEN_A → ETH → TOKEN_B

If ETH волатильность 15%/день:
- Price может измениться between hops
- Может вызвать unexpected slippage

Solution:
- Используйте stablecoin bridge (USDC) вместо ETH
- OR используйте direct swap (если возможно)
- Hypertrade Invisium Simulation учитывает это`)}</pre>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t(`8. Для DCA стратегий используйте консистентные пути`)}</h3>
      <pre className="text-sm text-gray-300">{t(`Если делаете регулярные покупки (DCA):

✓ Use SAME multi-hop path каждый раз
✓ Документируйте результаты
✓ Optimize путь раз в месяц

Benefit:
- Predictable результаты
- Легче track performance
- Можете optimize на основе истории

Example DCA path:
USDC → HYPE → TARGET_TOKEN (2-hop)
Every week, $1,000
Track average impact over time`)}</pre>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t(`9. Проверяйте liquidity ОБОИХ pools в 2-hop`)}</h3>
      <pre className="text-sm text-gray-300">{t(`Common mistake:
Checking only first hop liquidity

Correct approach:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Path: TOKEN_A → HYPE → TOKEN_B

Check both:
1. TOKEN_A/HYPE pool: TVL $500k ✓
2. HYPE/TOKEN_B pool: TVL $50k ✗ ← BOTTLENECK!

If second hop is bottleneck:
→ Try different path (e.g., через USDC)
→ OR split order по времени
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}</pre>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t(`10. Доверяйте Hypertrade автоматизации`)}</h3>
      <pre className="text-sm text-gray-300">{t(`Manual optimization:
- 20–30 минут анализа
- 40–60% chance of suboptimal choice
- Human calculation errors

Hypertrade R1 Router:
- 1–2 секунды анализа
- 99.5–99.9% optimal selection
- Invisium 99.9% accuracy

ROI Hypertrade auto-routing:
$500k/year volume:
- Manual: потери $25k–$50k (suboptimal paths)
- Hypertrade: потери $8k–$15k
- SAVINGS: $17k–$35k/year

Just use Hypertrade. Let it optimize.`)}</pre>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t(`🎓 Итоговая стратегия: workflow`)}</h3>
     <pre className="text-sm text-gray-300">{t(`Pre-Swap Multi-Hop Analysis (если делаете вручную)
□ Step 1: Check direct pair
     EXISTS: Go to Step 2
     NOT EXISTS: Multi-hop обязателен → Step 3

□ Step 2: Evaluate direct pair liquidity
     TVL / Swap size > 20: Direct probably OK
     TVL / Swap size < 20: Test multi-hop → Step 3

□ Step 3: Identify bridge token candidates
     Priority order:
     1. HYPE (always first choice)
     2. USDC (for stablecoin swaps)
     3. ETH (for major crypto swaps)
     4. Other major tokens

□ Step 4: Calculate combined impact
     For each potential path:
     - Calculate impact per hop
     - Sum combined impact
     - Add gas costs

□ Step 5: Compare all options
     Select: MIN(Total Cost)

□ Step 6: Execute
     Manually: Multiple TX (complex)
     OR use Hypertrade: 1 atomic TX ✓`)}</pre>
    </div>
  </div>

</article>





<article className="prose prose-invert prose-lg max-w-none">

  <div className="space-y-6 not-prose mb-12">

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t(`Recommended Workflow (с Hypertrade)`)}</h3>
      <pre className="text-sm text-gray-300">{t(`□ Step 1: Open https://ht.xyz

□ Step 2: Input swap details
     From: TOKEN_A
     To: TOKEN_B
     Amount: $_____

□ Step 3: Click "Get Quote"
     Hypertrade automatically:
     ✓ Tests 1000+ paths
     ✓ Selects optimal multi-hop route
     ✓ Runs Invisium Simulation
     ✓ Shows expected output

□ Step 4: Review route breakdown
     Example display:
     "Optimal route (2-hop):
     TOKEN_A → HYPE (HyperCore Spot)
     → TOKEN_B (Hyperswap)
     Expected: 10,458 tokens
     Impact: 2.3%"

□ Step 5: Confirm and execute
     1 transaction = atomic execution
     All hops happen in single TX

□ Step 6: Verify result
     Expected: 10,458 tokens
     Actual: 10,454 tokens
     Deviation: -0.04% ✓ Excellent!`)}</pre>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl overflow-x-auto">
      <h3 className="text-xl font-bold text-white mb-3">{t(`📊 Comparison: Manual vs Hypertrade multi-hop`)}</h3>
      <table className="w-full text-left border-collapse text-sm text-gray-300">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-2">{t(`Метрика`)}</th>
            <th className="p-2">{t(`Manual Analysis`)}</th>
            <th className="p-2">{t(`Hypertrade R1`)}</th>
            <th className="p-2">{t(`Improvement`)}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Time to analyze`)}</td>
            <td className="p-2">{t(`20–30 min`)}</td>
            <td className="p-2">{t(`1–2 sec`)}</td>
            <td className="p-2">{t(`99.9% faster`)}</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Paths tested`)}</td>
            <td className="p-2">{t(`3–10`)}</td>
            <td className="p-2">{t(`1,000–5,000`)}</td>
            <td className="p-2">{t(`100–500× more`)}</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Accuracy`)}</td>
            <td className="p-2">{t(`40–60% optimal`)}</td>
            <td className="p-2">{t(`99.5–99.9%`)}</td>
            <td className="p-2">{t(`~60% better`)}</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Execution`)}</td>
            <td className="p-2">{t(`Multiple TX`)}</td>
            <td className="p-2">{t(`1 atomic TX`)}</td>
            <td className="p-2">{t(`Much simpler`)}</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="p-2">{t(`Gas optimization`)}</td>
            <td className="p-2">{t(`Manual estimate`)}</td>
            <td className="p-2">{t(`Auto-calculated`)}</td>
            <td className="p-2">{t(`Built-in`)}</td>
          </tr>
         <tr className="border-b border-gray-800">
  <td className="p-2">{t(`Simulation`)}</td>
  <td className="p-2">{t(`❌ No`)}</td>
  <td className="p-2">{t(`✅ Invisium 99.9%`)}</td>
  <td className="p-2">{t(`Huge advantage`)}</td>
</tr>
<tr className="border-b border-gray-800">
  <td className="p-2">{t(`Combined split+multi-hop`)}</td>
  <td className="p-2">{t(`❌ Too complex`)}</td>
  <td className="p-2">{t(`✅ Automatic`)}</td>
  <td className="p-2">{t(`Unique feature`)}</td>
</tr>
<tr>
  <td className="p-2">{t(`Average savings`)}</td>
  <td className="p-2">{t(`Baseline`)}</td>
  <td className="p-2">{t(`+$500–$3,000/swap`)}</td>
  <td className="p-2">{t(`Significant`)}</td>
</tr>
</tbody>
</table>
<p className="text-gray-300 mt-4">{t(`Годовая экономия (50 swaps, $500k volume):
• Manual optimization: ~$10,000/year
• Hypertrade auto-optimization: ~$25,000–$50,000/year
• Additional benefit: +$15,000–$40,000/year`)}</p>
</div>

<div className="space-y-8 not-prose mb-12">

{/* Полезные ссылки */}
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

{/* Начните экономить через multi-hop routing */}
<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
  <h3 className="text-xl font-bold text-white mb-4">{t(`🚀 Начните экономить через multi-hop routing`)}</h3>

  <div className="space-y-4 text-gray-300 text-sm">
    <div className="space-y-2">
      <p className="font-semibold">{t(`1. Используйте Hypertrade для ВСЕХ свопов`)}</p>
      <ul className="list-disc list-inside">
        <li>{t(`Автоматический multi-hop analysis`)}</li>
        <li>{t(`Комбинированный split + multi-hop`)}</li>
        <li>{t(`Invisium 99.9% accuracy`)}</li>
        <li>{t(`0% platform fees`)}</li>
      </ul>
    </div>

    <div className="space-y-2">
      <p className="font-semibold">{t(`2. Понимайте базовые принципы`)}</p>
      <ul className="list-disc list-inside">
        <li>{t(`Direct хорош для major pairs с deep liquidity`)}</li>
        <li>{t(`Multi-hop лучше для exotic и low-liquidity pairs`)}</li>
        <li>{t(`HYPE = универсальный bridge token на Hyperliquid`)}</li>
        <li>{t(`2–3 hops обычно optimal`)}</li>
      </ul>
    </div>

    <div className="space-y-2">
      <p className="font-semibold">{t(`3. Документируйте и оптимизируйте`)}</p>
      <ul className="list-disc list-inside">
        <li>{t(`Track savings from multi-hop routing`)}</li>
        <li>{t(`Compare expected vs actual results`)}</li>
        <li>{t(`Continuous improvement`)}</li>
      </ul>
    </div>
  </div>

  <p className="text-gray-300 mt-4">{t(`Multi-hop routing = 3–15% экономия на большинстве свопов.
На $500k годовом объёме это $15,000–$75,000.
Перестаньте терять деньги на direct swaps. Используйте Hypertrade.`)}</p>
</div>

</div>

  </div>

</article>
        </article>
      </div>
    </section>
  );
};
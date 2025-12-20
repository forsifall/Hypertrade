"use client"
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
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { useTranslation } from "react-i18next";

// --- Single Blog Article Component (Developer Integration) ---
export const ArticleDeveloperIntegration = ({ lang }: { lang: Language }) => {
  const post = getBlogPosts(lang).find(
    // eslint-disable-next-line
    (curr: any) => curr.id === "developer-integration-guide"
  );

    const { t } = useTranslation();

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
  {/* Intro */}
  <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-hyper-accent pl-6 italic">
    {t(
      `Интеграция Hypertrade в ваш dApp — это самый быстрый способ добавить лучшие swap-курсы и полноценный обмен токенов в экосистеме Hyperliquid без разработки собственного DEX-агрегатора.`
    )}
  </p>

  {/* Why integrate */}
  <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <Layers className="text-hyper-secondary" />
    {t(`Зачем интегрировать Hypertrade в ваш dApp?`)}
  </h2>

  <p>
    {t(
      `Если вы разрабатываете decentralized application (dApp) на Hyperliquid — DeFi-протокол, wallet, portfolio tracker, NFT marketplace или любой другой продукт — вашим пользователям необходим быстрый и выгодный обмен токенов прямо внутри приложения.`
    )}
  </p>

  {/* Problem */}
  <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <AlertCircle className="text-red-400" />
    {t(`Проблема разработки собственного swap-функционала`)}
  </h2>

  <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl my-8 not-prose">
    <ul className="space-y-3 text-sm text-gray-300">
      <li>
        {t(
          `❌ Интеграция каждого DEX по отдельности (Hyperswap, Kittenswap, HyperCore Spot, Prjx)`
        )}
      </li>
      <li>{t(`❌ Разработка алгоритмов маршрутизации для поиска лучшей цены`)}</li>
      <li>{t(`❌ Постоянное обновление контрактов и API`)}</li>
      <li className="font-bold text-red-300">
        {t(`❌ Недели или месяцы разработки и тестирования`)}
      </li>
    </ul>
  </div>

  {/* Solution */}
  <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <Zap className="text-yellow-400" />
    {t(`Решение: интеграция Hypertrade за 30–60 минут`)}
  </h2>

  <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl my-8 not-prose">
    <ul className="space-y-3 text-sm text-gray-300">
      <li>{t(`✅ Доступ ко всем DEX Hyperliquid через единый API`)}</li>
      <li>
        {t(
          `✅ Автоматическая оптимизация маршрутов (split-routing, price comparison)`
        )}
      </li>
      <li>{t(`✅ Invisium Simulations — точные котировки (99.5–99.9%)`)}</li>
      <li>{t(`✅ 0% platform fee — вся экономия остаётся пользователям`)}</li>
      <li>{t(`✅ Постоянные обновления и поддержка новых DEX`)}</li>
      <li>{t(`✅ REST API, TypeScript / JavaScript SDK, React hooks`)}</li>
    </ul>
  </div>

  {/* Benefits for users */}
  <h2 className="text-2xl font-bold text-white mt-12 mb-6">
    {t(`Что получают ваши пользователи`)}
  </h2>

  <div className="space-y-6 not-prose mb-12">
    {[
      {
        title: t("Лучшие курсы обмена"),
        content: t(
          "Экономия от 0.5% до 5% на каждом swap за счёт агрегации ликвидности."
        ),
      },
      {
        title: t("Минимальный price impact"),
        content: t(
          "Split-routing распределяет ордер между DEX для лучшей цены."
        ),
      },
      {
        title: t("Полная прозрачность"),
        content: t(
          "Детали маршрута и симуляция результата перед подтверждением."
        ),
      },
      {
        title: t("Удобный UX"),
        content: t("Обмен токенов в один клик без выхода из приложения."),
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-hyper-accent"
      >
        <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
        <p className="text-gray-400 text-sm">{item.content}</p>
      </div>
    ))}
  </div>

  {/* Benefits for dApp */}
  <h2 className="text-2xl font-bold text-white mt-12 mb-6">
    {t(`Что получает ваш dApp`)}
  </h2>

  <div className="space-y-6 not-prose mb-12">
    {[
      t(
        "Дополнительную ценность для пользователей (swap без выхода из приложения)"
      ),
      t("Опциональные referral fees — делитесь комиссиями с Hypertrade"),
      t("Повышение retention и времени взаимодействия с продуктом"),
      t("Сильную экономию времени разработки и поддержки"),
    ].map((text, idx) => (
      <div
        key={idx}
        className="bg-hyper-800/30 p-4 rounded-lg border border-gray-700"
      >
        <p className="text-gray-300 text-sm m-0">{text}</p>
      </div>
    ))}
  </div>

  {/* Use cases */}
  <h2 className="text-2xl font-bold text-white mt-12 mb-6">
    {t(`Примеры интеграции Hypertrade`)}
  </h2>

  <ul className="list-disc pl-6 text-gray-300">
    <li>{t(`DeFi Dashboard — встроенный swap для ребалансировки портфеля`)}</li>
    <li>{t(`Wallet — нативная функция обмена токенов`)}</li>
    <li>{t(`NFT Marketplace — конвертация ETH ⇄ USDC для покупки NFT`)}</li>
    <li>{t(`Yield Optimizer — автоматический swap для входа в фарминг`)}</li>
    <li>{t(`Trading Bot — API для автоматизированных стратегий`)}</li>
  </ul>
</article>

{/* Быстрый старт */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Zap className="text-hyper-accent" /> {t(`Быстрый старт: интеграция за 30 минут`)}
</h2>

{/* Шаг 1 */}
<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 not-prose">
  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
    <CheckCircle size={20} className="text-green-400" /> {t(`Шаг 1: Установка SDK`)}
  </h3>

  <p className="text-gray-300 mb-4">{t(`Для TypeScript/JavaScript проектов:`)}</p>
  <pre className="bg-hyper-900 p-4 rounded-lg text-sm text-gray-200 overflow-x-auto mb-4">
    npm install @hypertrade/sdk # или yarn add @hypertrade/sdk
  </pre>

  <p className="text-gray-300 mb-4">{t(`Для React приложений:`)}</p>
  <pre className="bg-hyper-900 p-4 rounded-lg text-sm text-gray-200 overflow-x-auto mb-4">
    npm install @hypertrade/sdk @hypertrade/react-hooks
  </pre>

  <p className="text-gray-300 mb-2">{t(`Для других языков:`)}</p>
  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
    <li>{t(`Python SDK — в разработке (ETA Q1 2025)`)}</li>
    <li>{t(`REST API — работает со всеми языками (см. ниже)`)}</li>
  </ul>
</div>

       {/* Шаг 2 */}
<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 not-prose">
  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
    <AlertCircle size={20} className="text-yellow-400" /> {t(
      "Шаг 2: Получение API ключа (опционально)"
    )}
  </h3>

  <p className="text-gray-300 font-semibold mb-2">{t("Публичный API (без регистрации):")}</p>
  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-4">
    <li>{t("✅ Доступен для всех")}</li>
    <li>{t("✅ Rate limit: 100 requests/minute")}</li>
    <li>{t("✅ Подходит для большинства dApps")}</li>
  </ul>

  <p className="text-gray-300 font-semibold mb-2">{t("API ключ (с регистрацией):")}</p>
  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-4">
    <li>{t("✅ Rate limit: 1000 requests/minute")}</li>
    <li>{t("✅ Приоритетная обработка запросов")}</li>
    <li>{t("✅ Доступ к referral program")}</li>
    <li>{t("✅ Детальная аналитика использования")}</li>
  </ul>

  <p className="text-gray-300 font-semibold mb-2">{t("Получение API ключа:")}</p>
  <ol className="list-decimal list-inside text-gray-400 text-sm space-y-1">
    <li>{t("Перейдите на https://docs.hypertrade.io/api-keys")}</li>
    <li>{t("Подключите wallet (MetaMask)")}</li>
    <li>{t("Заполните форму (название dApp, контакты, ожидаемый объём)")}</li>
    <li>{t("Получите API key и secret")}</li>
  </ol>
</div>

{/* Шаг 3 */}
<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 not-prose">
  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
    <Cpu size={20} className="text-purple-400" /> {t("Шаг 3: Базовая интеграция (React пример)")}
  </h3>

  <p className="text-gray-300 mb-4">{t("Простейший пример — встроенный swap виджет:")}</p>

  <pre className="bg-hyper-900 p-4 rounded-lg text-sm text-gray-200 overflow-x-auto mb-4">
    {`import { HypertradeSwapWidget } from '@hypertrade/react-hooks';

function MyApp() {
  return (
    <div>
      <h1>My DeFi Dashboard</h1>
      
      {/* Встроенный swap виджет */}
      <HypertradeSwapWidget
        defaultTokenIn="USDC"
        defaultTokenOut="ETH"
        theme="dark" // или "light"
        onSwapSuccess={(result) => {
          console.log('Swap completed:', result);
          // Обновите баланс пользователя, покажите уведомление, etc.
        }}
      />
    </div>
  );
}`}
  </pre>

  <p className="text-green-400 font-bold">{t("Результат: полнофункциональный swap интерфейс за 5 строк кода.")}</p>
</div>

{/* Шаг 4 */}
<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 not-prose">
  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
    <Layers size={20} className="text-hyper-accent" /> {t("Шаг 4: Кастомизация UI")}
  </h3>

  <p className="text-gray-300 mb-4">{t("Если вам нужен больший контроль над UI:")}</p>

  <pre className="bg-hyper-900 p-4 rounded-lg text-sm text-gray-200 overflow-x-auto mb-6">
    {`import { useHypertrade, useQuote, useSwap } from '@hypertrade/react-hooks';
import { useState } from 'react';

function CustomSwapInterface() {
  const [tokenIn, setTokenIn] = useState('USDC');
  const [tokenOut, setTokenOut] = useState('ETH');
  const [amountIn, setAmountIn] = useState('1000');

  // Получить котировку
  const { data: quote, isLoading } = useQuote({
    tokenIn,
    tokenOut,
    amountIn,
    slippage: 1.0, // 1%
  });

  // Выполнить swap
  const { swap, isSwapping } = useSwap();

  const handleSwap = async () => {
    try {
      const result = await swap({
        tokenIn,
        tokenOut,
        amountIn,
        quote: quote.route, // использовать найденный маршрут
      });
      
      console.log('Swap success:', result);
      alert(\`Received \${result.amountOut} \${tokenOut}\`);
    } catch (error) {
      console.error('Swap failed:', error);
      alert('Swap failed: ' + error.message);
    }
  };

  return (
    <div className="custom-swap">
      <h2>Swap Tokens</h2>
      
      {/* Input */}
      <div>
        <label>From:</label>
        <input 
          type="number" 
          value={amountIn} 
          onChange={(e) => setAmountIn(e.target.value)} 
        />
        <select value={tokenIn} onChange={(e) => setTokenIn(e.target.value)}>
          <option value="USDC">USDC</option>
          <option value="ETH">ETH</option>
          <option value="HYPE">HYPE</option>
        </select>
      </div>

      {/* Output (котировка) */}
      <div>
        <label>To (estimated):</label>
        {isLoading ? (
          <p>Loading quote...</p>
        ) : (
          <p>{quote?.amountOut} {tokenOut}</p>
        )}
      </div>

      {/* Детали */}
      {quote && (
        <div className="quote-details">
          <p>Price Impact: {quote.priceImpact}%</p>
          <p>Min. Received: {quote.minAmountOut} {tokenOut}</p>
          <p>Route: {quote.route.map(r => r.dex).join(' → ')}</p>
          <p>You save:  vs. single DEX</p>
        </div>
      )}

      {/* Swap button */}
      <button 
        onClick={handleSwap} 
        disabled={isSwapping || !quote}
      >
        {isSwapping ? 'Swapping...' : 'Swap'}
      </button>
    </div>
  );
}`}
  </pre>

  <p className="text-green-400 font-bold">{t("Результат: полный контроль над UI при использовании логики Hypertrade.")}</p>
</div>

{/* API Reference */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Cpu className="text-purple-400" size={20} /> {t("API Reference: основные endpoints")}
</h2>

       <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 not-prose">
  <p className="text-gray-300 mb-4 font-semibold">{t("Base URL:")}</p>
  <pre className="bg-hyper-900 p-4 rounded-lg text-sm text-gray-200 overflow-x-auto mb-6">
    https://api.hypertrade.io/v1
  </pre>

  <p className="text-gray-300 mb-4">{t("Все запросы поддерживают:")}</p>
  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-6">
    <li>{t("Content-Type: application/json")}</li>
    <li>
      {t("Authorization: Bearer YOUR_API_KEY (опционально, для увеличенного rate limit)")}
    </li>
  </ul>

  <hr className="border-gray-700 my-6" />

  {/* 1. GET /quote */}
  <h3 className="text-xl font-bold text-white mb-4">{t("1. GET /quote — получить котировку")}</h3>
  <p className="text-gray-300 mb-2">{t("Описание: получить лучший маршрут и ожидаемый результат для swap.")}</p>

  <p className="text-gray-300 font-semibold mb-2">{t("Parameters:")}</p>
  <pre className="bg-hyper-900 p-4 rounded-lg text-sm text-gray-200 overflow-x-auto mb-4">
{`Parameter	Type	Required	Description
tokenIn	string	Yes	Contract address или symbol (например, “USDC” или “0x…”)
tokenOut	string	Yes	Contract address или symbol
amountIn	string	Yes	Сумма в smallest units (например, “1000000000” для 1000 USDC с 6 decimals)
slippage	number	No	Slippage tolerance в % (default: 1.0)
userAddress	string	No	Адрес пользователя (для персонализированных маршрутов)`}
  </pre>

  <p className="text-gray-300 font-semibold mb-2">{t("Example Request:")}</p>
  <pre className="bg-hyper-900 p-4 rounded-lg text-sm text-gray-200 overflow-x-auto mb-4">
{`curl -X GET "https://api.hypertrade.io/v1/quote?tokenIn=USDC&tokenOut=ETH&amountIn=10000000000&slippage=1.0" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
  </pre>

  <p className="text-gray-300 font-semibold mb-2">{t("Example Response:")}</p>
  <pre className="bg-hyper-900 p-4 rounded-lg text-sm text-gray-200 overflow-x-auto mb-4">
{`{
  "success": true,
  "data": { ... }
}`}
  </pre>

  <p className="text-gray-300 font-semibold mb-2">{t("Response Fields:")}</p>
  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-6">
    <li>{t("amountOut — ожидаемое количество выходных токенов (wei/smallest units)")}</li>
    <li>{t("amountOutHuman — человекочитаемый формат (с учётом decimals)")}</li>
    <li>{t("minAmountOut — минимум с учётом slippage (защита от unexpected slippage)")}</li>
    <li>{t("priceImpact — price impact в % (0.51% в примере)")}</li>
    <li>{t("route[] — детали маршрута (какие DEX, какой % ордера, какой impact на каждом)")}</li>
    <li>{t("savings — сколько экономите vs. best single DEX")}</li>
  </ul>

  <hr className="border-gray-700 my-6" />

  {/* 2. POST /swap */}
  <h3 className="text-xl font-bold text-white mb-4">{t("2. POST /swap — выполнить swap")}</h3>
  <p className="text-gray-300 mb-2">{t("Описание: построить транзакцию для выполнения swap.")}</p>

  <p className="text-gray-300 font-semibold mb-2">{t("Request Body:")}</p>
  <pre className="bg-hyper-900 p-4 rounded-lg text-sm text-gray-200 overflow-x-auto mb-4">
{`{
  "tokenIn": "USDC",
  "tokenOut": "ETH",
  "amountIn": "10000000000",
  "slippage": 1.0,
  "userAddress": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "route": { /* route object from /quote */ }
}`}
  </pre>

  <p className="text-gray-300 font-semibold mb-2">{t("Example Request:")}</p>
  <pre className="bg-hyper-900 p-4 rounded-lg text-sm text-gray-200 overflow-x-auto mb-4">
{`curl -X POST "https://api.hypertrade.io/v1/swap" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{ ... }'`}
  </pre>

  <p className="text-gray-300 font-semibold mb-2">{t("Example Response:")}</p>
  <pre className="bg-hyper-900 p-4 rounded-lg text-sm text-gray-200 overflow-x-auto mb-4">
{`{
  "success": true,
  "data": { ... }
}`}
  </pre>

  <p className="text-gray-300 font-semibold mb-2">{t("Response Fields:")}</p>
  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-6">
    <li>{t("to — адрес Hypertrade Router contract")}</li>
    <li>{t("data — encoded transaction data")}</li>
    <li>{t("value — ETH value (обычно “0”, если не покупаете native token)")}</li>
    <li>{t("gasLimit — рекомендуемый gas limit")}</li>
    <li>{t("gasPrice — рекомендуемый gas price (в wei)")}</li>
  </ul>

  <p className="text-gray-300 font-semibold mb-2">{t("Использование:")}</p>
  <pre className="bg-hyper-900 p-4 rounded-lg text-sm text-gray-200 overflow-x-auto">
{`const tx = await wallet.sendTransaction({
  to: swapData.to,
  data: swapData.data,
  value: swapData.value,
  gasLimit: swapData.gasLimit,
  gasPrice: swapData.gasPrice,
});

const receipt = await tx.wait();
console.log('Swap completed:', receipt);`}
  </pre>
</div>

{/* GET /tokens */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" /> {t("3. GET /tokens — список поддерживаемых токенов")}
</h2>
       <p>
  {t("Описание: получить список всех токенов, доступных для swap на Hyperliquid.")}
</p>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t("Parameters:")}</h3>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>
    <strong>{t("Parameter:")}</strong> {t("chainId")}
  </li>
  <li>
    <strong>{t("Type:")}</strong> {t("number")}
  </li>
  <li>
    <strong>{t("Required:")}</strong> {t("No")}
  </li>
  <li>
    <strong>{t("Description:")}</strong> {t("Chain ID (default: 998 для Hyperliquid)")}
  </li>
</ul>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t("Example Request:")}</h3>
<pre className="bg-hyper-800/30 text-gray-200 p-4 rounded-xl border border-gray-700">
  {`curl -X GET "https://api.hypertrade.io/v1/tokens?chainId=998"`}
</pre>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t("Example Response:")}</h3>
<pre className="bg-hyper-800/30 text-gray-200 p-4 rounded-xl border border-gray-700 overflow-x-auto">
  {`{
"success": true,
"data": [
  {
    "symbol": "USDC",
    "name": "USD Coin",
    "address": "0x...",
    "decimals": 6,
    "logoURI": "https://...",
    "verified": true
  },
  {
    "symbol": "ETH",
    "name": "Wrapped Ether",
    "address": "0x...",
    "decimals": 18,
    "logoURI": "https://...",
    "verified": true
  },
  {
    "symbol": "HYPE",
    "name": "Hyperliquid",
    "address": "0x...",
    "decimals": 18,
    "logoURI": "https://...",
    "verified": true
  }
]
}`}
</pre>

{/* GET /price */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Zap className="text-yellow-400" /> {t("4. GET /price — текущая цена токена")}
</h2>
<p>{t("Описание: получить текущую рыночную цену токена в USDC.")}</p>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t("Parameters:")}</h3>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>
    <strong>{t("Parameter:")}</strong> {t("token")}
  </li>
  <li>
    <strong>{t("Type:")}</strong> {t("string")}
  </li>
  <li>
    <strong>{t("Required:")}</strong> {t("Yes")}
  </li>
  <li>
    <strong>{t("Description:")}</strong> {t("Symbol или contract address")}
  </li>
</ul>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t("Example Request:")}</h3>
<pre className="bg-hyper-800/30 text-gray-200 p-4 rounded-xl border border-gray-700">
  {`curl -X GET "https://api.hypertrade.io/v1/price?token=ETH"`}
</pre>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t("Example Response:")}</h3>
<pre className="bg-hyper-800/30 text-gray-200 p-4 rounded-xl border border-gray-700 overflow-x-auto">
  {`{
"success": true,
"data": {
  "token": "ETH",
  "priceUSD": 2500.45,
  "change24h": 3.2,
  "volume24h": 125000000,
  "timestamp": 1702345678
}
}`}
</pre>

{/* GET /liquidity */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" />{" "}
  {t("5. GET /liquidity — ликвидность пары")}
</h2>
<p>{t("Описание: получить информацию о ликвидности для торговой пары.")}</p>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t("Parameters:")}</h3>
<ul className="list-disc list-inside text-gray-300 mb-6">
  <li>{t("Parameter: tokenA")}</li>
  <li>{t("Type: string")}</li>
  <li>{t("Required: Yes")}</li>
  <li>{t("Description: First token")}</li>
  <li>{t("Parameter: tokenB")}</li>
  <li>{t("Type: string")}</li>
  <li>{t("Required: Yes")}</li>
  <li>{t("Description: Second token")}</li>
</ul>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t("Example Request:")}</h3>
<pre className="bg-hyper-800/30 text-gray-200 p-4 rounded-xl border border-gray-700">
  {`curl -X GET "https://api.hypertrade.io/v1/liquidity?tokenA=USDC&tokenB=ETH"`}
</pre>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t("Example Response:")}</h3>
<pre className="bg-hyper-800/30 text-gray-200 p-4 rounded-xl border border-gray-700 overflow-x-auto">
  {`{
"success": true,
"data": {
  "pair": "USDC/ETH",
  "totalLiquidityUSD": 5200000,
  "sources": [
    {
      "dex": "HyperCore Spot",
      "liquidityUSD": 2100000,
      "percentage": 40.4
    },
    {
      "dex": "Hyperswap",
      "liquidityUSD": 1800000,
      "percentage": 34.6
    },
    {
      "dex": "Kittenswap",
      "liquidityUSD": 1300000,
      "percentage": 25.0
    }
  ],
  "timestamp": 1702345678
}
}`}
</pre>

{/* GET /status */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Zap className="text-yellow-400" /> {t("6. GET /status — статус API")}
</h2>
<p>{t("Описание: проверить здоровье API и доступность сервисов.")}</p>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t("Example Request:")}</h3>
<pre className="bg-hyper-800/30 text-gray-200 p-4 rounded-xl border border-gray-700">
  {`curl -X GET "https://api.hypertrade.io/v1/status"`}
</pre>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t("Example Response:")}</h3>
        <pre className="bg-hyper-800/30 text-gray-200 p-4 rounded-xl border border-gray-700 overflow-x-auto">
  {`{
"success": true,
"data": {
  "status": "operational",
  "version": "1.2.4",
  "uptime": "99.98%",
  "services": {
    "router": "operational",
    "invisium": "operational",
    "hypercore": "operational",
    "hyperswap": "operational",
    "kittenswap": "operational"
  },
  "latency": {
    "quote": "120ms",
    "swap": "850ms"
  }
}
}`}
</pre>

{/* Установка */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" /> {t("Установка:")}
</h2>
<pre className="bg-hyper-800/30 text-gray-200 p-4 rounded-xl border border-gray-700 overflow-x-auto">
  {`npm install @hypertrade/sdk ethers`}
</pre>

{/* Инициализация */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Zap className="text-yellow-400" /> {t("Инициализация:")}
</h2>
<pre className="bg-hyper-800/30 text-gray-200 p-4 rounded-xl border border-gray-700 overflow-x-auto">
  {`import { HypertradeSDK } from '@hypertrade/sdk';
import { ethers } from 'ethers';

// Подключение к Hyperliquid
const provider = new ethers.JsonRpcProvider('https://api.hyperliquid.xyz/evm');
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// Инициализация SDK
const hypertrade = new HypertradeSDK({
  provider,
  signer,
  apiKey: 'YOUR_API_KEY', // опционально
  chainId: 998, // Hyperliquid
});`}
</pre>

{/* Основные методы */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <AlertCircle className="text-red-400" /> {t("Основные методы:")}
</h2>
<pre className="bg-hyper-800/30 text-gray-200 p-4 rounded-xl border border-gray-700 overflow-x-auto">
  {`1. getQuote() — получить котировку
const quote = await hypertrade.getQuote({
  tokenIn: 'USDC',
  tokenOut: 'ETH',
  amountIn: ethers.parseUnits('1000', 6), // 1000 USDC (6 decimals)
  slippage: 1.0, // 1%
});

console.log('You will receive:', ethers.formatUnits(quote.amountOut, 18), 'ETH');
console.log('Price impact:', quote.priceImpact, '%');
console.log('Route:', quote.route.map(r => \`\${r.percentage}% via \${r.dex}\`));`}
</pre>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t("2. executeSwap() — выполнить swap")}
</h2>
<pre className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 overflow-x-auto">
  {`try {
  const tx = await hypertrade.executeSwap({
    tokenIn: 'USDC',
    tokenOut: 'ETH',
    amountIn: ethers.parseUnits('1000', 6),
    slippage: 1.0,
    deadline: Math.floor(Date.now() / 1000) + 600, // 10 минут
  });

  console.log('Transaction sent:', tx.hash);
  
  const receipt = await tx.wait();
  console.log('Swap completed!');
  console.log('Gas used:', receipt.gasUsed.toString());
  
} catch (error) {
  console.error('Swap failed:', error);
}`}
</pre>

<hr className="my-8 border-gray-700" />

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t("3. approveToken() — approve токен")}
</h2>
<p className="text-gray-300 mb-4">{t("Перед первым swap токена нужно дать approval Hypertrade Router:")}</p>
<pre className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 overflow-x-auto">
  {`// Проверить, нужен ли approval
const allowance = await hypertrade.checkAllowance('USDC');
const amountIn = ethers.parseUnits('1000', 6);

if (allowance < amountIn) {
  console.log('Approval needed...');
  
  const approveTx = await hypertrade.approveToken('USDC', amountIn);
  await approveTx.wait();
  
  console.log('Approval successful!');
}

// Теперь можно делать swap
const swapTx = await hypertrade.executeSwap({ ... });`}
</pre>
<p className="text-gray-400 italic mt-2">{t("Рекомендация: используйте limited approval (точная сумма или сумма + 10%), а не unlimited.")}</p>

<hr className="my-8 border-gray-700" />

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t("4. getTokens() — список токенов")}
</h2>
<pre className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 overflow-x-auto">
  {`const tokens = await hypertrade.getTokens();

console.log('Available tokens:');
tokens.forEach(token => {
  console.log(\`\${token.symbol} (\${token.name}): \${token.address}\`);
});`}
</pre>

<hr className="my-8 border-gray-700" />

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t("5. getPrice() — текущая цена")}
</h2>
<pre className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 overflow-x-auto">
  {`const ethPrice = await hypertrade.getPrice('ETH');
console.log('ETH price:', ethPrice.priceUSD, 'USD');
console.log('24h change:', ethPrice.change24h, '%');`}
</pre>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t("6. simulateSwap() — симуляция без выполнения")}
</h2>
<p className="text-gray-300 mb-4">{t("Полезно для тестирования:")}</p>
<pre className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 overflow-x-auto">
  {`const simulation = await hypertrade.simulateSwap({
    tokenIn: 'USDC',
    tokenOut: 'ETH',
    amountIn: ethers.parseUnits('10000', 6), // крупный ордер
    slippage: 1.0,
});

console.log('Simulated result:');
console.log('Amount out:', ethers.formatUnits(simulation.amountOut, 18), 'ETH');
console.log('Price impact:', simulation.priceImpact, '%');
console.log('Gas cost:', simulation.gasCostUSD, 'USD');

// Проверить, выполнится ли swap
if (simulation.success) {
    console.log('✅ Swap will succeed');
} else {
    console.error('❌ Swap will fail:', simulation.error);
}`}
</pre>

<hr className="my-8 border-gray-700" />

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t("React Hooks Reference")}
</h2>
      <p className="text-gray-300 mb-4">{t("Установка:")}</p>
<pre className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 overflow-x-auto">
  {`npm install @hypertrade/react-hooks ethers wagmi`}
</pre>

<p className="text-gray-300 mt-5 mb-4">{t("Setup Provider:")}</p>
<pre className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 overflow-x-auto">
  {`import { HypertradeProvider } from '@hypertrade/react-hooks';
import { WagmiConfig } from 'wagmi';

function App() {
    return (
        <WagmiConfig config={wagmiConfig}>
            <HypertradeProvider apiKey="YOUR_API_KEY">
                <YourApp />
            </HypertradeProvider>
        </WagmiConfig>
    );
}`}
</pre>

<hr className="my-8 border-gray-700" />

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t("1. useQuote() — получение котировки")}
</h2>
<pre className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 overflow-x-auto">
  {`import { useQuote } from '@hypertrade/react-hooks';

function SwapInterface() {
    const [amountIn, setAmountIn] = useState('1000');

    const { 
        data: quote, 
        isLoading, 
        error 
    } = useQuote({
        tokenIn: 'USDC',
        tokenOut: 'ETH',
        amountIn,
        slippage: 1.0,
        enabled: amountIn !== '', // fetch только когда amount введён
    });

    if (isLoading) return <p>{t("Loading quote...")}</p>;
    if (error) return <p>{t("Error:")} {error.message}</p>;

    return (
        <div>
            <p>{t("You will receive:")} {quote.amountOutHuman} ETH</p>
            <p>{t("Price impact:")} {quote.priceImpact}%</p>
        </div>
    );
}`}
</pre>

<p className="text-gray-400 italic mt-2">{t(`Features:
• Автоматический refetch каждые 10 секунд
• Debounce для amountIn (не спамит API при вводе)
• Кеширование результатов`)}</p>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t("2. useSwap() — выполнение swap")}
</h2>
<pre className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 overflow-x-auto">
  {`import { useSwap } from '@hypertrade/react-hooks';

function SwapButton({ quote }) {
    const { 
        swap, 
        isSwapping, 
        isSuccess, 
        error 
    } = useSwap();

    const handleSwap = async () => {
        try {
            const result = await swap({
                tokenIn: 'USDC',
                tokenOut: 'ETH',
                amountIn: '1000',
                quote: quote.route,
            });

            console.log(${t("'Swap completed:'")}, result);
            alert(\`${t("Received")} \${result.amountOut} ETH\`);
        } catch (err) {
            console.error(${t("'Swap failed:'")}, err);
        }
    };

    return (
        <button onClick={handleSwap} disabled={isSwapping}>
            {isSwapping ? t("Swapping...") : t("Swap")}
        </button>
    );
}`}
</pre>

<hr className="my-8 border-gray-700" />

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t("3. useApproval() — управление approvals")}
</h2>
<pre className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 overflow-x-auto">
  {`import { useApproval } from '@hypertrade/react-hooks';

function ApprovalButton({ token, amount }) {
    const { 
        needsApproval, 
        approve, 
        isApproving 
    } = useApproval(token, amount);

    if (!needsApproval) {
        return <p>{t("✅ Token approved")}</p>;
    }

    return (
        <button onClick={approve} disabled={isApproving}>
            {isApproving ? t("Approving...") : t("Approve USDC")}
        </button>
    );
}`}
</pre>

<hr className="my-8 border-gray-700" />

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t("4. useTokens() — список токенов")}
</h2>
<pre className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 overflow-x-auto">
  {`import { useTokens } from '@hypertrade/react-hooks';

function TokenSelector({ onSelect }) {
    const { data: tokens, isLoading } = useTokens();

    if (isLoading) return <p>{t("Loading tokens...")}</p>;

    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            {tokens.map(token => (
                <option key={token.address} value={token.symbol}>
                    {token.symbol} - {token.name}
                </option>
            ))}
        </select>
    );
}`}
</pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" />{" "}
  {t("5. useBalance() — баланс токена")}
</h2>

<pre className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 overflow-x-auto mb-12">
  {`import { useBalance } from '@hypertrade/react-hooks';

function BalanceDisplay({ token }) {
  const { balance, isLoading } = useBalance(token);

  if (isLoading) return <p>{t("Loading balance...")}</p>;

  return (
    <p>{t("Balance:")} {balance} {token}</p>
  );
}`}
</pre>

{/* Best Practices Section */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Zap className="text-yellow-400" /> {t("Best Practices для интеграции")}
</h2>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t("1. Обработка ошибок")}</h3>
<p className="mb-4">{t("Всегда обрабатывайте возможные ошибки:")}</p>
<pre className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 overflow-x-auto mb-6">
  {`try {
  const quote = await hypertrade.getQuote({ ... });
} catch (error) {
  if (error.code === 'INSUFFICIENT_LIQUIDITY') {
    alert(${t("'Not enough liquidity for this swap'")});
  } else if (error.code === 'HIGH_PRICE_IMPACT') {
    alert(\`${t("Price impact")} \${error.impact}% ${t("is too high. Consider splitting the order.")}\`);
  } else if (error.code === 'USER_REJECTED') {
    console.log(${t("'User cancelled transaction'")});
  } else {
    console.error(${t("'Unexpected error:'")}, error);
    alert(${t("'Swap failed. Please try again.'")});
  }
}`}
</pre>

<p className="mb-4">{t("Типичные коды ошибок:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-12">
  <li>{t("INSUFFICIENT_LIQUIDITY — недостаточная ликвидность")}</li>
  <li>{t("HIGH_PRICE_IMPACT — price impact >10%")}</li>
  <li>{t("SLIPPAGE_EXCEEDED — фактическая цена хуже, чем minAmountOut")}</li>
  <li>{t("INSUFFICIENT_BALANCE — недостаточно токенов у пользователя")}</li>
  <li>{t("INSUFFICIENT_GAS — недостаточно HYPE для gas")}</li>
  <li>{t("USER_REJECTED — пользователь отклонил транзакцию в кошельке")}</li>
  <li>{t("NETWORK_ERROR — проблема с RPC или API")}</li>
  <li>{t("RATE_LIMIT_EXCEEDED — превышен rate limit")}</li>
</ul>

<h3 className="text-xl font-bold text-white mt-12 mb-3">{t("2. UX рекомендации")}</h3>

<p className="mb-2">{t("✅ Показывайте loading states:")}</p>
<pre className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 overflow-x-auto mb-6">
  {`{isLoading && <Spinner />}
{quote && <QuoteDetails quote={quote} />}`}
</pre>

<p className="mb-2">{t("✅ Показывайте детали маршрута:")}</p>
<pre className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 overflow-x-auto mb-6">
  {`<div className="route-details">
  <h4>{t("Route:")}</h4>
  {quote.route.map((hop, index) => (
    <div key={index}>
      {hop.percentage}% via {hop.dex} (impact: {hop.priceImpact}%)
    </div>
  ))}
</div>`}
</pre>

<p className="mb-2">{t("✅ Показывайте экономию:")}</p>
<pre className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 overflow-x-auto mb-6">
  {`{quote.savings && (
  <p className="savings">
    💰 ${t("You save")} vs. single DEX
  </p>
)}`}
</pre>

<p className="mb-2">{t("✅ Предупреждайте о high price impact:")}</p>
<pre className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 overflow-x-auto mb-6">
  {`{quote.priceImpact > 3 && (
  <Warning>
    ⚠️ ${t("High price impact")} ({quote.priceImpact}%). 
    ${t("Consider splitting your order.")} 
  </Warning>
)}`}
</pre>

<p className="mb-2">{t("✅ Показывайте прогресс транзакции:")}</p>
<pre className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 overflow-x-auto mb-12">
  {`{isSwapping && (
  <div className="tx-progress">
    <Spinner />
    <p>{t("Swap in progress...")}</p>
    <p>{t("Transaction hash:")} {tx.hash}</p>
    <a href={\`https://explorer.hyperliquid.xyz/tx/\${tx.hash}\`} target="_blank">
      ${t("View on Explorer")}
    </a>
  </div>
)}`}
</pre>

{/* Gas Optimization Section */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" /> {t("3. Gas optimization")}
</h2>

<p className="mb-4">{t("✅ Estimate gas перед выполнением:")}</p>
<pre className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 overflow-x-auto mb-6">
  {`const gasEstimate = await hypertrade.estimateGas({
  tokenIn: 'USDC',
  tokenOut: 'ETH',
  amountIn: amount,
});

console.log(${t("'Estimated gas cost:'")}, gasEstimate.gasCostUSD, 'USD');

// Предупредить пользователя, если gas высокий
if (gasEstimate.gasCostUSD > 10) {
  const confirm = window.confirm(
    \`${t("Gas cost is high")} ($\${gasEstimate.gasCostUSD}). ${t("Continue?")}\`
  );
  if (!confirm) return;
}`}
</pre>

<p className="mb-4">{t("✅ Batch approvals для нескольких токенов:")}</p>
<pre className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 overflow-x-auto mb-12">
  {`// Вместо отдельных approvals для каждого токена
const tokensToApprove = ['USDC', 'ETH', 'HYPE'];

const approvals = await Promise.all(
  tokensToApprove.map(token => hypertrade.approveToken(token, amount))
);

await Promise.all(approvals.map(tx => tx.wait()));
console.log(${t("'All tokens approved'")});`}
</pre>

{/* Security Best Practices Section */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <AlertCircle className="text-red-400" />{" "}
  {t("4. Security best practices")}
</h2>

      <p className="mb-4">{t("✅ Валидация пользовательского ввода:")}</p>
<pre className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 overflow-x-auto mb-6">
  {`function validateAmount(amount: string, decimals: number): boolean {
  // Проверка формата
  if (!/^\\d+\\.?\\d*$/.test(amount)) {
    throw new Error(${t("'Invalid amount format'")});
  }

  // Проверка range
  const parsed = parseFloat(amount);
  if (parsed <= 0) {
    throw new Error(${t("'Amount must be positive'")});
  }
  if (parsed > 1e18) {
    throw new Error(${t("'Amount too large'")});
  }

  return true;
}`}
</pre>

<p className="mb-4">{t("✅ Проверка contract address:")}</p>
<pre className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 overflow-x-auto mb-6">
  {`// Проверить, что tokenIn/tokenOut — это легитимные токены
const verifiedTokens = await hypertrade.getTokens();
const isTokenInVerified = verifiedTokens.some(t => t.symbol === tokenIn);
const isTokenOutVerified = verifiedTokens.some(t => t.symbol === tokenOut);

if (!isTokenInVerified || !isTokenOutVerified) {
  throw new Error(${t("'Token not verified'")});
}`}
</pre>

<p className="mb-4">{t("✅ Rate limiting:")}</p>
<pre className="bg-hyper-800/30 p-6 rounded-xl border border-gray-700 overflow-x-auto mb-12">
  {`// Ограничение количества запросов от одного пользователя
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 минута
  max: 20, // максимум 20 запросов
  message: ${t("'Too many requests, please try again later.'")},
});

app.use('/api/swap', limiter);`}
</pre>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t("5. Аналитика и мониторинг")}
</h2>

<div className="space-y-6 mb-12">
  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-3">
      {t("✅ Логирование swap событий:")}
    </h3>
    <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto text-sm">
      {`const result = await hypertrade.executeSwap({ ... });`}
    </pre>
    <p className="text-gray-300 mt-4 mb-2">{t("// Отправить событие в вашу аналитику")}</p>
    <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto text-sm">
      {`analytics.track('Swap Completed', {
  tokenIn: 'USDC',
  tokenOut: 'ETH',
  amountIn: '1000',
  amountOut: result.amountOut,
  priceImpact: result.priceImpact,
  gasCostUSD: result.gasCostUSD,
  savings: result.savings,
  userAddress: user.address,
  timestamp: Date.now(),
});`}
    </pre>
  </div>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-3">
      {t("✅ Мониторинг ошибок:")}
    </h3>
    <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto text-sm">
      {`try {
  await hypertrade.executeSwap({ ... });
} catch (error) {
  // ${t("Отправить в Sentry / error tracking")}
  Sentry.captureException(error, {
    tags: {
      component: 'swap',
      tokenIn: 'USDC',
      tokenOut: 'ETH',
    },
    user: { address: user.address },
  });

  throw error;
}`}
    </pre>
  </div>
</div>

<hr className="my-12 border-gray-700" />

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t("Referral Program: монетизация интеграции")}
</h2>

<div className="space-y-6 mb-12">
  <h3 className="text-xl font-bold text-white mb-3">
    {t("Как это работает:")}
  </h3>
  <ol className="list-decimal list-inside text-gray-300 space-y-2">
    <li>{t("Вы интегрируете Hypertrade в свой dApp")}</li>
    <li>{t("Регистрируетесь в referral program: https://docs.hypertrade.io/referral")}</li>
    <li>{t("Получаете referral code")}</li>
    <li>{t("Передаёте referral code в каждом swap запросе")}</li>
    <li>{t("Получаете % от объёма свапов, сделанных через ваш dApp")}</li>
  </ol>

  <h3 className="text-xl font-bold text-white mt-6 mb-3">
    {t("Пример интеграции:")}
  </h3>
  <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto text-sm">
    {`const hypertrade = new HypertradeSDK({
  provider,
  signer,
  apiKey: 'YOUR_API_KEY',
  referralCode: 'YOUR_REFERRAL_CODE', // ваш уникальный код
});

// Все swaps автоматически засчитываются как ваши referrals
const tx = await hypertrade.executeSwap({ ... });`}
  </pre>

  <h3 className="text-xl font-bold text-white mt-6 mb-3">
    {t("Условия программы:")}
  </h3>
  <ul className="list-disc list-inside text-gray-300 space-y-2">
    <li>{t("Минимальный объём: $100,000/месяц")}</li>
    <li>{t("Комиссия: 0.05-0.15% от объёма (зависит от объёма)")}</li>
    <li>{t("Выплаты: ежемесячно в USDC или HYPE")}</li>
    <li>{t("Трекинг: real-time dashboard с аналитикой")}</li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-6 mb-3">
    {t("Пример расчёта:")}
  </h3>
  <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto text-sm">
    {t(`Ваш dApp генерирует $5M объёма swap/месяц
Комиссия: 0.1%
Ваш доход: $5,000/месяц ($60,000/год)`)}
  </pre>
  <p className="text-gray-300 mt-2">{t("Подробнее: https://docs.hypertrade.io/referral")}</p>
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">
  {t("Примеры интеграции")}
</h2>

      <div className="space-y-8 mb-12 not-prose">
  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-white mb-4">
      {t("Пример 1: DeFi Dashboard")}
    </h3>
    <p className="text-gray-300 mb-4">{t("Use case: пользователь хочет ребалансировать портфель (продать 30% ETH, купить USDC).")}</p>

    <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto text-sm">
      {`function PortfolioRebalance() {
  const [portfolio, setPortfolio] = useState({
    ETH: 10.5,
    USDC: 5000,
    HYPE: 2000,
  });

  const handleRebalance = async () => {
    // Продать 30% ETH
    const ethToSell = portfolio.ETH * 0.3; // 3.15 ETH

    const quote = await hypertrade.getQuote({
      tokenIn: 'ETH',
      tokenOut: 'USDC',
      amountIn: ethers.parseUnits(ethToSell.toString(), 18),
      slippage: 1.0,
    });

    console.log(${t("'Will receive:'")}, quote.amountOutHuman, 'USDC');

    const tx = await hypertrade.executeSwap({
      tokenIn: 'ETH',
      tokenOut: 'USDC',
      amountIn: ethers.parseUnits(ethToSell.toString(), 18),
      slippage: 1.0,
    });

    await tx.wait();

    // Обновить портфель
    setPortfolio({
      ETH: portfolio.ETH - ethToSell,
      USDC: portfolio.USDC + parseFloat(quote.amountOutHuman),
      HYPE: portfolio.HYPE,
    });

    alert(${t("'Rebalance complete!'")});
  };

  return (
    <div>
      <h2>{t("Portfolio Rebalance")}</h2>
      <p>{t("ETH:")} {portfolio.ETH}</p>
      <p>{t("USDC:")} {portfolio.USDC}</p>
      <button onClick={handleRebalance}>{t("Rebalance (Sell 30% ETH)")}</button>
    </div>
  );
}`}
    </pre>
  </div>
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Пример 2: NFT Marketplace")}</h2>

<div className="space-y-8 mb-12 not-prose">
  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
    <p className="text-gray-300 mb-4">{t("Use case: пользователь хочет купить NFT за ETH, но у него только USDC.")}</p>

    <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto text-sm">
      {`function NFTPurchase({ nftPrice }) {
  const [userBalance, setUserBalance] = useState({ USDC: 5000, ETH: 0.5 });

  const handleBuyNFT = async () => {
    const ethNeeded = nftPrice; // например, 2.5 ETH

    if (userBalance.ETH >= ethNeeded) {
      // Достаточно ETH, можно покупать сразу
      await purchaseNFT(ethNeeded);
    } else {
      // Недостаточно ETH → swap USDC → ETH
      const ethShortage = ethNeeded - userBalance.ETH; // 2.0 ETH нужно докупить

      const quote = await hypertrade.getQuote({
        tokenIn: 'USDC',
        tokenOut: 'ETH',
        amountOut: ethers.parseUnits(ethShortage.toString(), 18), // reversed quote
        slippage: 1.0,
      });

      console.log(${t("'Need to swap:'")}, quote.amountInHuman, 'USDC');

      // Подтверждение у пользователя
      const confirm = window.confirm(
        \`${t("You need")} \${ethShortage} ETH. ${t("Swap")} \${quote.amountInHuman} USDC?\`
      );
      if (!confirm) return;

      // Выполнить swap
      const tx = await hypertrade.executeSwap({
        tokenIn: 'USDC',
        tokenOut: 'ETH',
        amountIn: quote.amountIn,
        slippage: 1.0,
      });

      await tx.wait();

      // Обновить баланс
      setUserBalance({
        USDC: userBalance.USDC - parseFloat(quote.amountInHuman),
        ETH: userBalance.ETH + ethShortage,
      });

      // Теперь купить NFT
      await purchaseNFT(ethNeeded);
    }
  };

  return (
    <div>
      <h2>{t("Buy NFT")}</h2>
      <p>{t("Price:")} {nftPrice} ETH</p>
      <p>{t("Your balance:")} {userBalance.ETH} ETH, {userBalance.USDC} USDC</p>
      <button onClick={handleBuyNFT}>{t("Buy NFT")}</button>
    </div>
  );
}`}
    </pre>
  </div>
</div>

<hr className="my-12 border-gray-700" />

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Пример 3: Trading Bot")}</h2>

<div className="space-y-8 mb-12 not-prose">
  <p className="text-gray-300 mb-4">{t("Use case: автоматический DCA (Dollar Cost Averaging) — покупка ETH на $1000 каждый понедельник.")}</p>

  <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto text-sm">
    {`import cron from 'node-cron';

// Каждый понедельник в 10:00 UTC
cron.schedule('0 10 * * 1', async () => {
  console.log(${t("'Running weekly DCA...'")});

  try {
    const amountUSDC = 1000;

    const quote = await hypertrade.getQuote({
      tokenIn: 'USDC',
      tokenOut: 'ETH',
      amountIn: ethers.parseUnits(amountUSDC.toString(), 6),
      slippage: 1.0,
    });

    console.log(${t("'Will buy:'")}, quote.amountOutHuman, 'ETH for', amountUSDC, 'USDC');
    console.log(${t("'Price:'")}, amountUSDC / parseFloat(quote.amountOutHuman), 'USDC/ETH');

    const tx = await hypertrade.executeSwap({
      tokenIn: 'USDC',
      tokenOut: 'ETH',
      amountIn: ethers.parseUnits(amountUSDC.toString(), 6),
      slippage: 1.0,
    });

    await tx.wait();
    console.log(${t("'DCA successful! Tx:'")}, tx.hash);

    // Отправить уведомление
    await sendNotification(\`${t("DCA executed: Bought")} \${quote.amountOutHuman} ETH\`);

  } catch (error) {
    console.error(${t("'DCA failed:'")}, error);
    await sendErrorAlert(${t("'DCA failed'")}, error);
  }
});`}
  </pre>
</div>

<h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
  {t("Troubleshooting: частые проблемы")}
</h1>

    {/* Problem 1 */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
          <AlertCircle className="text-red-400" />{" "}
          {t(`Проблема 1: “Insufficient liquidity”`)}
        </h2>
        <p>{t(`Причина: недостаточная ликвидность для ордера.`)}</p>
        <p className="font-bold mt-2">{t(`Решение:`)}</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>{t(`Уменьшите размер ордера`)}</li>
          <li>{t(`Разделите на несколько частей`)}</li>
          <li>{t(`Попробуйте другую пару (например, USDC → HYPE → ETH вместо прямого USDC → ETH)`)}</li>
        </ul>
        <pre className="bg-hyper-800/50 p-4 rounded-xl border border-gray-700 my-6 overflow-x-auto">
          {`if (error.code === 'INSUFFICIENT_LIQUIDITY') {
  // Попробовать уменьшить ордер на 20%
  const newAmount = originalAmount * 0.8;
  const quote = await hypertrade.getQuote({ ...params, amountIn: newAmount });
}`}
        </pre>

        {/* Problem 2 */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
          <AlertCircle className="text-red-400" />{" "}
          {t(`Проблема 2: “High price impact”`)}
        </h2>
        <p>{t(`Причина: ваш ордер слишком большой относительно ликвидности.`)}</p>
        <p className="font-bold mt-2">{t(`Решение:`)}</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>{t(`Используйте split-routing (Hypertrade делает автоматически)`)}</li>
          <li>{t(`Разделите ордер на несколько транзакций с интервалом`)}</li>
          <li>{t(`Используйте limit order на HyperCore Spot`)}</li>
        </ul>
        <pre className="bg-hyper-800/50 p-4 rounded-xl border border-gray-700 my-6 overflow-x-auto">
          {`if (quote.priceImpact > 5) {
  console.warn('High price impact! Consider splitting order.');
  
  // Автоматическое разделение на 3 части
  const partSize = originalAmount / 3;
  
  for (let i = 0; i < 3; i++) {
    const tx = await hypertrade.executeSwap({ ...params, amountIn: partSize });
    await tx.wait();
    
    // Подождать 30 секунд перед следующей частью
    if (i < 2) await sleep(30000);
  }
}`}
        </pre>

        {/* Problem 3 */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
          <AlertCircle className="text-red-400" />{" "}
          {t(`Проблема 3: “Slippage exceeded”`)}
        </h2>
        <p>{t(`Причина: цена изменилась между получением котировки и выполнением swap.`)}</p>
        <p className="font-bold mt-2">{t(`Решение:`)}</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>{t(`Увеличьте slippage tolerance`)}</li>
          <li>{t(`Получите новую котировку перед swap`)}</li>
          <li>{t(`Используйте Invisium Simulations для более точного предсказания`)}</li>
        </ul>
        <pre className="bg-hyper-800/50 p-4 rounded-xl border border-gray-700 my-6 overflow-x-auto">
          {`try {
  const tx = await hypertrade.executeSwap({ ...params, slippage: 1.0 });
} catch (error) {
  if (error.code === 'SLIPPAGE_EXCEEDED') {
    // Попробовать с увеличенным slippage
    console.log('Retrying with higher slippage...');
    const tx = await hypertrade.executeSwap({ ...params, slippage: 2.0 });
  }
}`}
        </pre>

        {/* Problem 4 */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
          <AlertCircle className="text-red-400" />{" "}
          {t(`Проблема 4: “Insufficient gas”`)}
        </h2>
        <p>{t(`Причина: недостаточно HYPE для gas.`)}</p>
        <p className="font-bold mt-2">{t(`Решение:`)}</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>{t(`Проверьте баланс HYPE перед swap`)}</li>
          <li>{t(`Предупредите пользователя`)}</li>
        </ul>
        <pre className="bg-hyper-800/50 p-4 rounded-xl border border-gray-700 my-6 overflow-x-auto">
          {`const hypeBalance = await provider.getBalance(userAddress);
const minHypeNeeded = ethers.parseUnits('5', 18); // минимум 5 HYPE

if (hypeBalance < minHypeNeeded) {
  alert('Insufficient HYPE for gas. Please add at least 5 HYPE to your wallet.');
  return;
}`}
        </pre>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
          <AlertCircle className="text-red-400" />{" "}
          {t(`Проблема 5: Rate limit exceeded`)}
        </h2>

        <p>{t(`Причина: слишком много запросов к API.`)}</p>
        <p className="font-bold mt-2">{t(`Решение:`)}</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>{t(`Получите API key для увеличенного лимита`)}</li>
          <li>{t(`Используйте debounce для пользовательского ввода`)}</li>
          <li>{t(`Кешируйте котировки на 5-10 секунд`)}</li>
        </ul>

        <pre className="bg-hyper-800/50 p-4 rounded-xl border border-gray-700 my-6 overflow-x-auto">
          {`import debounce from 'lodash.debounce';

// Debounce для избежания спама API
const debouncedGetQuote = debounce(async (params) => {
  const quote = await hypertrade.getQuote(params);
  setQuote(quote);
}, 500); // 500ms задержка

// При вводе пользователем
const handleAmountChange = (newAmount) => {
  setAmount(newAmount);
  debouncedGetQuote({ ...params, amountIn: newAmount });
};`}
        </pre>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Заключение: начните интеграцию сегодня`)}</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
  {/* Преимущества */}
  <div className="bg-hyper-800/30 border border-gray-700 rounded-xl p-6">
    <h3 className="text-xl font-bold text-white mb-4">{t(`Преимущества интеграции Hypertrade:`)}</h3>
    <ul className="space-y-2 text-gray-300">
      <li>{t(`✅ 30-60 минут до первого работающего swap`)}</li>
      <li>{t(`✅ 0% platform fee — вся экономия пользователям`)}</li>
      <li>{t(`✅ Лучшие курсы на Hyperliquid (split-routing, Invisium)`)}</li>
      <li>{t(`✅ Простой API — REST + TypeScript SDK + React hooks`)}</li>
      <li>{t(`✅ Полная документация и примеры кода`)}</li>
      <li>{t(`✅ Referral program — монетизация интеграции`)}</li>
      <li>{t(`✅ Поддержка — Discord, email, Telegram`)}</li>
    </ul>
  </div>

  {/* Следующие шаги */}
  <div className="bg-hyper-800/30 border border-gray-700 rounded-xl p-6">
    <h3 className="text-xl font-bold text-white mb-4">{t(`Следующие шаги:`)}</h3>
    <ol className="list-decimal pl-6 space-y-2 text-gray-300">
      <li>{t(`📚 Изучите документацию: https://docs.hypertrade.io`)}</li>
      <li>{t(`🔑 Получите API key: https://docs.hypertrade.io/api-keys`)}</li>
      <li>{t(`💻 Установите SDK: npm install @hypertrade/sdk`)}</li>
      <li>{t(`🚀 Интегрируйте в свой dApp (используйте примеры выше)`)}</li>
      <li>{t(`🧪 Тестируйте на Hyperliquid testnet`)}</li>
      <li>{t(`🎉 Запускайте на mainnet`)}</li>
    </ol>
  </div>
</div>








{/* Ресурсы и поддержка */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
  <div className="bg-hyper-800/20 border border-gray-700 rounded-xl p-6">
    <h3 className="text-lg font-bold text-white mb-3">{t(`📚 Документация:`)}</h3>
    <ul className="space-y-1 text-gray-300 text-sm">
      <li>{t(`API Reference: https://docs.hypertrade.io/api`)}</li>
      <li>{t(`SDK Docs: https://docs.hypertrade.io/sdk`)}</li>
      <li>{t(`React Hooks: https://docs.hypertrade.io/react-hooks`)}</li>
      <li>{t(`Examples: https://github.com/hypertrade/examples`)}</li>
    </ul>
  </div>

  <div className="bg-hyper-800/20 border border-gray-700 rounded-xl p-6">
    <h3 className="text-lg font-bold text-white mb-3">{t(`💬 Поддержка:`)}</h3>
    <ul className="space-y-1 text-gray-300 text-sm">
      <li>{t(`Discord (dev channel): https://discord.gg/hypertrade`)}</li>
      <li>{t(`Twitter: @Hypertrade_xyz`)}</li>
      <li>{t(`Email: developers@hypertrade.io`)}</li>
      <li>{t(`Telegram: @HypertradeDev`)}</li>
    </ul>

    <h3 className="text-lg font-bold text-white mt-4 mb-2">{t(`🎁 Referral Program:`)}</h3>
    <ul className="space-y-1 text-gray-300 text-sm">
      <li>{t(`Регистрация: https://docs.hypertrade.io/referral`)}</li>
      <li>{t(`Dashboard: https://app.hypertrade.io/referrals`)}</li>
    </ul>
  </div>
</div>

{/* FAQ */}
<h2 className="text-2xl font-bold text-white mb-6">
  {t(`💡 FAQ для разработчиков`)}
</h2>

<div className="space-y-4">
  {/* Вопрос 1 */}
  <details className="border border-gray-700 rounded-lg">
    <summary className="cursor-pointer list-none p-4 flex items-center justify-between font-bold">
      <span>
        {t(`Бесплатно ли использование API?`)}
      </span>
      <svg className="text-cyan-400 w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </summary>

    <div className="p-4 pt-2">
      <p className="mb-4">
        {t(`Да, публичный API бесплатен с ограничением 100 requests/minute. Для увеличенного лимита (1000 req/min) получите бесплатный API key.`)}
      </p>
    </div>
  </details>

  {/* Вопрос 2 */}
  <details className="border border-gray-700 rounded-lg">
    <summary className="cursor-pointer list-none p-4 flex items-center justify-between font-bold">
      <span>
        {t(`Нужен ли мне backend для интеграции?`)}
      </span>
      <svg className="text-cyan-400 w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </summary>

    <div className="p-4 pt-2">
      <p className="mb-4">
        {t(`Нет, SDK работает полностью на frontend (в браузере). Backend нужен только для автоматических ботов или серверных интеграций.`)}
      </p>
    </div>
  </details>

  {/* Вопрос 3 */}
  <details className="border border-gray-700 rounded-lg">
    <summary className="cursor-pointer list-none p-4 flex items-center justify-between font-bold">
      <span>
        {t(`Какие блокчейны поддерживаются?`)}
      </span>
      <svg className="text-cyan-400 w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </summary>

    <div className="p-4 pt-2">
      <p className="mb-4">
        {t(`Только Hyperliquid (HyperEVM, chainId 998). Поддержка других чейнов не планируется.`)}
      </p>
    </div>
  </details>

  {/* Вопрос 4 */}
  <details className="border border-gray-700 rounded-lg">
    <summary className="cursor-pointer list-none p-4 flex items-center justify-between font-bold">
      <span>
        {t(`Могу ли я кастомизировать UI?`)}
      </span>
      <svg className="text-cyan-400 w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </summary>

    <div className="p-4 pt-2">
      <p className="mb-4">
        {t(`Да, SDK даёт полный контроль. Вы можете использовать готовый виджет или создать свой UI с нуля.`)}
      </p>
    </div>
  </details>

  {/* Вопрос 5 */}
  <details className="border border-gray-700 rounded-lg">
    <summary className="cursor-pointer list-none p-4 flex items-center justify-between font-bold">
      <span>
        {t(`Как работает referral program?`)}
      </span>
      <svg className="text-cyan-400 w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </summary>

    <div className="p-4 pt-2">
      <p className="mb-4">
        {t(`Вы получаете 0.05-0.15% от объёма свапов, сделанных через ваш dApp. Минимальный объём: $100k/месяц. Выплаты ежемесячно.`)}
      </p>
    </div>
  </details>

  {/* Вопрос 6 */}
  <details className="border border-gray-700 rounded-lg">
    <summary className="cursor-pointer list-none p-4 flex items-center justify-between font-bold">
      <span>
        {t(`Есть ли testnet?`)}
      </span>
      <svg className="text-cyan-400 w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </summary>

    <div className="p-4 pt-2">
      <p className="mb-4">
        {t(`Да, используйте Hyperliquid testnet для тестирования. API endpoint: https://api.hypertrade.io/v1/testnet`)}
      </p>
    </div>
  </details>

  {/* Вопрос 7 */}
  <details className="border border-gray-700 rounded-lg">
    <summary className="cursor-pointer list-none p-4 flex items-center justify-between font-bold">
      <span>
        {t(`Могу ли я использовать API без SDK?`)}
      </span>
      <svg className="text-cyan-400 w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </summary>

    <div className="p-4 pt-2">
      <p className="mb-4">
        {t(`Да, REST API работает с любым языком (Python, Go, Rust, etc.). SDK — это просто удобная обёртка.`)}
      </p>
    </div>
  </details>

  {/* Вопрос 8 */}
  <details className="border border-gray-700 rounded-lg">
    <summary className="cursor-pointer list-none p-4 flex items-center justify-between font-bold">
      <span>
        {t(`Как часто обновляется котировка?`)}
      </span>
      <svg className="text-cyan-400 w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </summary>

    <div className="p-4 pt-2">
      <p className="mb-4">
        {t(`API обновляет котировки в реальном времени (каждые 1-2 секунды). В SDK есть встроенный polling.`)}
      </p>
    </div>
  </details>

  {/* Вопрос 9 */}
  <details className="border border-gray-700 rounded-lg">
    <summary className="cursor-pointer list-none p-4 flex items-center justify-between font-bold">
      <span>
        {t(`Что делать, если у меня проблема?`)}
      </span>
      <svg className="text-cyan-400 w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </summary>

    <div className="p-4 pt-2">
      <p className="mb-4">
        {t(`Напишите в Discord (#dev-support) или на developers@hypertrade.io. Среднее время ответа: 2-6 часов.`)}
      </p>
    </div>
  </details>

  {/* Вопрос 10 */}
  <details className="border border-gray-700 rounded-lg">
    <summary className="cursor-pointer list-none p-4 flex items-center justify-between font-bold">
      <span>
        {t(`Есть ли примеры кода?`)}
      </span>
      <svg className="text-cyan-400 w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </summary>

    <div className="p-4 pt-2">
      <p className="mb-4">
        {t(`Да, смотрите `)}
        <a href="https://github.com/hypertrade/examples" className="text-hyper-accent underline" target="_blank" rel="noreferrer">
          https://github.com/hypertrade/examples
        </a>
        {t(` — там 10+ примеров для разных use cases.`)}
      </p>
    </div>
  </details>
</div>



      </div>
    </section>
  );
};

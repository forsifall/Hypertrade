"use client"
import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { AlertTriangle, Clock, Calendar, Shield, Zap, Target, Lock, PieChart, DollarSign, Cpu, AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { useTranslation } from "react-i18next";

// --- Single Blog Article Component (MEV Protection) ---
// eslint-disable-next-line
export const ArticleMEVProtection = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "mev-protection-guide");

    const { t } = useTranslation();

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className="h-64 md:h-80 w-full bg-gradient-to-r from-red-900 via-orange-900 to-hyper-900 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
          <BackButton label={post?.backButtonLabel || "Назад"} />
          <div className="flex flex-wrap gap-4 text-sm font-medium text-red-400 mb-4">
            <span className="bg-red-400/10 px-3 py-1 rounded-full border border-red-400/20">{post?.category}</span>
            <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> {post?.readTime}</span>
            <span className="flex items-center gap-1 text-gray-400"><Calendar size={14} /> {post?.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {post?.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">
       
         <article className="prose prose-invert prose-lg max-w-none">
  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("MEV-защита при торговле на DEX: как не потерять деньги")}</h2>

  <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-hyper-accent pl-6 italic">
    {t(`💸 Невидимый враг, который крадёт ваши деньги`)}
  </p>

  <p>{t(`Представьте ситуацию:`)}</p>
  <p>{t(`Вы делаете своп $20,000 USDC → ETH на Uniswap.`)}</p>
  <p>{t(`Ожидаемая цена: 6.5 ETH`)}</p>
  <p>{t(`Вы нажимаете “Confirm”…`)}</p>
  <p>{t(`Но получаете только 6.1 ETH.`)}</p>
  <p>{t(`Потеря: 0.4 ETH = $1,200`)}</p>
  <p>{t(`Куда делись ваши деньги?`)}</p>
  <p>{t(`Их украл MEV-бот через sandwich attack за 2 секунды до того, как ваша транзакция подтвердилась.`)}</p>

  <hr className="my-8 border-gray-700" />

  <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("Холодная статистика:")}</h3>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
    <li>{t(`$1.38 МИЛЛИАРДА извлечено через MEV на Ethereum с 2020 года (данные Flashbots)`)}</li>
    <li>{t(`Средняя потеря на своп: 0.1–5% от суммы транзакции`)}</li>
    <li>{t(`80–90% MEV идёт от sandwich-атак на обычных трейдеров`)}</li>
    <li>{t(`Ежедневные потери: $2–8 миллионов от розничных трейдеров`)}</li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("На личном уровне:")}</h3>
  <p>{t(`Трейдер с годовым объёмом $500,000:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
    <li>{t(`Потери на MEV: $2,500–$25,000/год`)}</li>
    <li>{t(`Эти деньги идут MEV-ботам, а не вам`)}</li>
  </ul>

  <p>{t(`Сегодня мы разберём:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-12">
    <li>{t(`ЧТО такое MEV и почему это угроза`)}</li>
    <li>{t(`КАК работают sandwich-атаки пошагово`)}</li>
    <li>{t(`КАК защититься (практические стратегии)`)}</li>
    <li>{t(`ПОЧЕМУ Hypertrade на Hyperliquid обеспечивает лучшую защиту`)}</li>
  </ul>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("🧠 Что такое MEV: простыми словами")}</h2>

  <h3 className="text-xl font-bold text-white mt-6 mb-4">{t("Определение")}</h3>
  <p>{t(`MEV (Maximal Extractable Value) = максимальная стоимость, которую можно извлечь из блокчейна через манипуляцию порядком транзакций.`)}</p>

  <h3 className="text-xl font-bold text-white mt-6 mb-4">{t("Простая аналогия:")}</h3>
  <p>{t(`Представьте очередь в магазине. Вы стоите третьим. У кассы распродажа последнего iPhone со скидкой 50%.`)}</p>
  <p>{t(`Обычная ситуация:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
    <li>{t(`Человек 1 покупает iPhone`)}</li>
    <li>{t(`Человек 2 не успевает (товар закончился)`)}</li>
    <li>{t(`Вы не получаете ничего`)}</li>
  </ul>
  <p>{t(`MEV-ситуация:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
    <li>{t(`Кто-то платит охраннику $100`)}</li>
    <li>{t(`Охранник пропускает его ПЕРЕД вами`)}</li>
    <li>{t(`Он покупает iPhone с вашей скидкой`)}</li>
    <li>{t(`Вы платите полную цену (или не получаете товар)`)}</li>
  </ul>
  <p>{t(`В блокчейне:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-12">
    <li>{t(`“Охранник” = майнер/валидатор, который решает порядок транзакций в блоке`)}</li>
    <li>{t(`“Взятка” = более высокая gas fee`)}</li>
    <li>{t(`“Скидка” = выгодная цена токена, которую вы нашли`)}</li>
  </ul>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Почему MEV существует")}</h2>
  <p>{t(`Фундаментальная проблема публичных блокчейнов:`)}</p>
  <p>{t(`Ваш swap процесс на Ethereum:`)}</p>

  <h3 className="text-lg font-bold text-white mt-6 mb-2">{t("Шаг 1:")}</h3>
  <p>{t(`Вы создаёте транзакцию "Купить 10 ETH по цене $3,000"`)}</p>

  <h3 className="text-lg font-bold text-white mt-4 mb-2">{t("Шаг 2:")}</h3>
  <p>{t(`Транзакция попадает в MEMPOOL (публичный пул ожидания)`)}</p>
  <p>{t(`⚠️ КАЖДЫЙ видит эту транзакцию`)}</p>
  <p>{t(`⚠️ MEV-боты сканируют mempool 24/7`)}</p>

  <h3 className="text-lg font-bold text-white mt-4 mb-2">{t("Шаг 3:")}</h3>
  <p>{t(`MEV-бот видит вашу транзакцию:`)}</p>
  <p>{t(`"О! Кто-то покупает 10 ETH. Я могу купить ПЕРЕД ним, подняв цену, а затем продать ЕМУ по завышенной цене!"`)}</p>

  <h3 className="text-lg font-bold text-white mt-4 mb-2">{t("Шаг 4:")}</h3>
  <p>{t(`MEV-бот платит БОЛЬШЕ gas, чтобы его транзакции выполнились ДО и ПОСЛЕ вашей`)}</p>

  <h3 className="text-lg font-bold text-white mt-4 mb-2">{t("Шаг 5:")}</h3>
  <p>{t(`Майнер видит:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
    <li>{t(`Ваша TX: gas 50 Gwei`)}</li>
    <li>{t(`MEV-бот TX: gas 200 Gwei`)}</li>
    <li>{t(`Майнер выбирает MEV-бота (больше profit)`)}</li>
  </ul>

  <h3 className="text-lg font-bold text-white mt-4 mb-2">{t("Шаг 6: Порядок в блоке")}</h3>
  <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-8">
    <li>{t(`MEV-бот покупает ETH (frontrun)`)}</li>
    <li>{t(`ВЫ покупаете ETH (жертва)`)}</li>
    <li>{t(`MEV-бот продаёт ETH (backrun)`)}</li>
  </ol>

  <p>{t(`Результат:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-12">
    <li>{t(`MEV-бот: +$1,500 profit`)}</li>
    <li>{t(`ВЫ: -$1,500 потеря (хуже цена)`)}</li>
    <li>{t(`Майнер: +$300 (высокая gas fee от бота)`)}</li>
  </ul>
</article>


<article className="prose prose-invert prose-lg max-w-none">

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("🔪 Типы MEV-атак: как вас грабят")}</h2>

  <div className="space-y-8 not-prose mb-12">
    {/* Sandwich Attack */}
    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t("1. Sandwich Attack (сэндвич-атака) — 80% всех MEV")}</h3>
      <p className="text-gray-300 mb-4">{t(`Самая распространённая и опасная атака.`)}</p>
      <p className="text-gray-300 mb-4">{t(`Как работает:`)}</p>

      <pre className="bg-gray-900/20 p-4 rounded mb-4 text-sm text-gray-200 whitespace-pre-wrap">{t(`Ваша планируемая транзакция:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Своп: $50,000 USDC → TOKEN_X
Ожидаемая цена: $10.00/token
Slippage tolerance: 3%
Minimum price: $9.70/token
Expected output: 5,000 tokens

Ваша TX попадает в mempool (публично видна)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}</pre>

      <p className="text-gray-300 mb-4">{t(`MEV-бот детектирует вашу TX за 0.5 секунды:`)}</p>

      <pre className="bg-gray-900/20 p-4 rounded mb-4 text-sm text-gray-200 whitespace-pre-wrap">{t(`Анализ бота:
"Victim swap: $50k
Pool liquidity: $200k
Expected price impact: 20%
Slippage tolerance: 3%
→ PROFITABLE TARGET ✓"`)}</pre>

      <p className="text-gray-300 mb-4">{t(`Бот создаёт 2 транзакции:`)}</p>

    <pre className="bg-gray-900/20 p-4 rounded mb-4 text-sm text-gray-200 whitespace-pre-wrap">{t(`TX1 (FRONTRUN) — покупка перед вами:
- Покупает 2,000 tokens за $20,000
- Gas fee: 500 Gwei (очень высокая)
- Price after: $10.50/token (цена выросла!)

Ваша TX (VICTIM):
- Покупаете 5,000 tokens
- Но цена уже $10.50 (не $10.00)
- Платите: $52,500 (вместо $50,000)
- Gas fee: 50 Gwei (обычная)

TX2 (BACKRUN) — продажа после вас:
- Бот продаёт 2,000 tokens обратно
- Price after: ~$10.20/token
- Получает: $20,400
- Gas fee: 500 Gwei

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Итоговый баланс:

MEV-бот:
Revenue: $20,400
Cost: $20,000 + $200 (gas)
PROFIT: +$200

ВЫ:
Planned: 5,000 tokens за $50,000
Actual: 4,762 tokens за $50,000
LOSS: -$2,380 (238 tokens потеряно)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ключевой момент: Вы заплатили $50,000, но получили меньше токенов, чем ожидали. Разница ушла MEV-боту.`)}</pre>
    </div>

    {/* Frontrunning */}
    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t("2. Frontrunning (фронтраннинг) — 15% MEV")}</h3>
      <p className="text-gray-300 mb-4">{t(`Опережающая покупка:`)}</p>

      <pre className="bg-gray-900/20 p-4 rounded mb-4 text-sm text-gray-200 whitespace-pre-wrap">{t(`Вы обнаружили арбитраж:
TOKEN_A на DEX1: $100
TOKEN_A на DEX2: $110
Profit potential: $10/token × 1,000 = $10,000

Вы создаёте транзакцию покупки на DEX1...

MEV-бот видит:
"Арбитраж! Я куплю ПЕРЕД ним!"`)}</pre>

      <p className="text-gray-300 mb-4">{t(`Результат:`)}</p>
      <pre className="bg-gray-900/20 p-4 rounded mb-4 text-sm text-gray-200 whitespace-pre-wrap">{t(`1. Бот покупает 1,000 tokens на DEX1 (frontrun)
2. Цена вырастает до $108
3. ВАША транзакция выполняется по $108
4. Арбитраж больше не выгоден ($108 vs $110 = $2)

Бот:
- Купил по $100
- Продал вам по $108
- Profit: $8,000

ВЫ:
- Потеряли арбитражную возможность
- Купили по завышенной цене
- Loss: $8,000 упущенной прибыли`)}</pre>
    </div>

    {/* Backrunning */}
    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-3">{t("3. Backrunning (бэкраннинг) — 5% MEV")}</h3>
      <p className="text-gray-300 mb-4">{t(`Эксплуатация вашей транзакции:`)}</p>

      <pre className="bg-gray-900/20 p-4 rounded mb-4 text-sm text-gray-200 whitespace-pre-wrap">{t(`Вы делаете крупный своп:
$100,000 USDC → ETH

Ваша транзакция двигает рынок:
Price before: $3,000
Price after your TX: $3,050 (price impact)

MEV-бот:
Видит изменение цены и делает арбитраж:
- Покупает ETH на другом DEX по $3,000
- Продаёт на этом DEX по $3,050
- Profit: $50 × 33 ETH = $1,650

Вы непреднамеренно создали прибыль для бота.`)}</pre>
    </div>
  </div>
</article>


        <article className="prose prose-invert prose-lg max-w-none">

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("📊 Статистика MEV: масштаб проблемы")}</h2>

  <div className="space-y-8 not-prose mb-12">

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">

      <p className="text-gray-300 mb-2">{t(`Глобальные цифры (Ethereum)`)}</p>
      <p className="text-gray-300 mb-4">{t(`Период: 2020–2025`)}</p>

      <p className="text-gray-300 mb-4">{t(`Total MEV extracted: $1.38 BILLION`)}</p>

      <p className="text-gray-300 mb-2">{t(`Breakdown by type:`)}</p>
      <pre className="bg-gray-900/20 p-4 rounded mb-4 text-sm text-gray-200 whitespace-pre-wrap">{t(`Sandwich attacks:    $1.10B (80%)
Frontrunning:        $207M (15%)
Backrunning:         $69M (5%)

Average daily MEV:   $2–8 million
Peak MEV day:        $23.5 million (May 2021, during bull run)
Active MEV bots:     2,000–5,000 daily
Success rate:        60–75%
Average profit/attack: $200–$1,500
Источник: Flashbots MEV-Explore`)}</pre>

      <h3 className="text-xl font-bold text-white mb-3 mt-6">{t(`Потери пользователей`)}</h3>
      <p className="text-gray-300 mb-2">{t(`По размеру транзакции:`)}</p>

      <div className="overflow-x-auto mb-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-gray-400 font-medium">{t(`Размер свопа`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Средняя MEV-потеря`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`% от суммы`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Годовая потеря (50 свопов)`)}</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-300">
            <tr className="border-b border-gray-800 bg-hyper-800/20">
              <td className="p-4 text-white">{t("$1,000")}</td>
              <td className="p-4">{t("$5–$20")}</td>
              <td className="p-4">{t("0.5–2%")}</td>
              <td className="p-4">{t("$250–$1,000")}</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-4 text-white">{t("$5,000")}</td>
              <td className="p-4">{t("$50–$150")}</td>
              <td className="p-4">{t("1–3%")}</td>
              <td className="p-4">{t("$2,500–$7,500")}</td>
            </tr>
            <tr className="border-b border-gray-800 bg-hyper-800/20">
              <td className="p-4 text-white">{t("$10,000")}</td>
              <td className="p-4">{t("$150–$500")}</td>
              <td className="p-4">{t("1.5–5%")}</td>
              <td className="p-4">{t("$7,500–$25,000")}</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-4 text-white">{t("$50,000")}</td>
              <td className="p-4">{t("$1,000–$3,500")}</td>
              <td className="p-4">{t("2–7%")}</td>
              <td className="p-4">{t("$50,000–$175,000")}</td>
            </tr>
            <tr className="bg-hyper-800/20">
              <td className="p-4 text-white">{t("$100,000")}</td>
              <td className="p-4">{t("$3,000–$8,000")}</td>
              <td className="p-4">{t("3–8%")}</td>
              <td className="p-4">{t("$150,000–$400,000")}</td>
            </tr>
          </tbody>
        </table>
      </div>








      <p className="text-gray-300 mb-2">{t(`Факторы, увеличивающие MEV-риск:`)}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>{t(`✗ Низкая ликвидность токена (high price impact)`)}</li>
        <li>{t(`✗ Высокий slippage tolerance (>2%)`)}</li>
        <li>{t(`✗ Большой размер транзакции`)}</li>
        <li>{t(`✗ Медленный блокчейн (Ethereum 12s vs Hyperliquid 1s)`)}</li>
        <li>{t(`✗ Публичный mempool`)}</li>
      </ul>

      <h3 className="text-xl font-bold text-white mb-3 mt-6">{t(`Кейс: реальная sandwich-атака на Ethereum`)}</h3>
      <pre className="bg-gray-900/20 p-4 rounded mb-4 text-sm text-gray-200 whitespace-pre-wrap">{t(`Transaction hash: 0x7d...3f (April 2023)
Victim transaction:
Swap: 500 ETH → USDC
Expected: $1,500,000 USDC
Slippage: 2%

MEV attack:
Frontrun:  Bot bought 200 ETH
Victim:    Bought 500 ETH at inflated price
Backrun:   Bot sold 200 ETH

Victim loss: $37,500 (2.5%)
Bot profit:  $35,200
Miner tip:   $2,300

Total value extracted: $37,500
Time: 13 seconds (1 Ethereum block)
Жертва даже не знала, что потеряла $37,500.`)}</pre>

      <h3 className="text-xl font-bold text-white mb-3 mt-6">{t(`🛡️ Стратегии защиты от MEV`)}</h3>

      <div className="space-y-6 not-prose mb-12">

        <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
          <h4 className="text-lg font-bold text-white mb-3">{t(`Стратегия 1: Правильный slippage tolerance`)}</h4>

          <pre className="bg-gray-900/20 p-4 rounded mb-4 text-sm text-gray-200 whitespace-pre-wrap">{t(`Проблема:
Высокий slippage = приглашение для MEV-ботов.

Пример атаки:
Ваш slippage: 5%
Entry price: $10.00
Minimum price: $9.50 (готовы принять до -5%)

MEV-бот видит:
"Victim готов потерять до $0.50/token.
Я могу забрать $0.40, оставив ему $0.10 потери
→ Он не откатит транзакцию!"

Бот frontrun:
Price becomes: $9.60/token

Ваш результат:
Вы получаете tokens по $9.60 (в пределах tolerance)
НО: Без бота цена была бы $9.95
Real loss: $0.35/token = 3.5%`)}</pre>

          <p className="text-gray-300 mb-2">{t(`Правильные настройки:`)}</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-4 text-gray-400 font-medium">{t(`Тип токена`)}</th>
                  <th className="p-4 text-gray-400 font-medium">{t(`Рекомендуемый slippage`)}</th>
                  <th className="p-4 text-gray-400 font-medium">{t(`Почему`)}</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-300">
                <tr className="border-b border-gray-800 bg-hyper-800/20">
                  <td className="p-4 text-white">{t(`Стейблкоины`)}</td>
                  <td className="p-4">{t("0.1–0.3%")}</td>
                  <td className="p-4">{t("Минимальная волатильность, высокая ликвидность")}</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-white">{t(`Major токены (BTC, ETH, HYPE)`)}</td>
                  <td className="p-4">{t("0.5–1%")}</td>
                  <td className="p-4">{t("Средняя ликвидность, приемлемая волатильность")}</td>
                </tr>
                <tr className="border-b border-gray-800 bg-hyper-800/20">
                  <td className="p-4 text-white">{t(`Mid-cap`)}</td>
                  <td className="p-4">{t("1–2%")}</td>
                  <td className="p-4">{t("Умеренная ликвидность")}</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-white">{t(`Low-cap`)}</td>
                  <td className="p-4">{t("2–4%")}</td>
                  <td className="p-4">{t("Низкая ликвидность, но НЕ ВЫШЕ 4%")}</td>
                </tr>
                <tr className="bg-hyper-800/20">
                  <td className="p-4 text-white">{t(`Мем-коины`)}</td>
                  <td className="p-4">{t("4–8% МАКСИМУМ")}</td>
                  <td className="p-4">{t("Экстремальная волатильность, НО >8% = suicide")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <pre className="bg-gray-900/20 p-4 rounded mb-4 text-sm text-gray-200 whitespace-pre-wrap">{t(`КРИТИЧЕСКОЕ ПРАВИЛО:
НИКОГДА не используйте slippage >10%
Slippage >10% = 95% вероятность sandwich-атаки
Средняя потеря: 8–10% от суммы свопа`)}</pre>
        </div>

        {/* Далее Стратегия 2 можно вставить аналогично */}
      </div>
            <article className="prose prose-invert prose-lg max-w-none">

  <div className="space-y-8 not-prose mb-12">

    {/* Стратегия 2 */}
    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h4 className="text-lg font-bold text-white mb-3">{t(`Стратегия 2: Разделение крупных ордеров`)}</h4>

      <p className="text-gray-300 mb-2">{t(`Почему это работает:`)}</p>
      <p className="text-gray-300 mb-4">{t(`MEV-боты предпочитают крупные свопы (больше profit).`)}</p>
      <p className="text-gray-300 mb-2">{t(`Сравнение:`)}</p>

      <div className="overflow-x-auto mb-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-gray-400 font-medium">{t(`Сценарий`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Размер свопа`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Price impact`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`MEV bot profit potential`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Вероятность sandwich`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Expected loss`)}</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-300">
            <tr className="border-b border-gray-800 bg-hyper-800/20">
              <td className="p-4 text-white">{t(`A`)}</td>
              <td className="p-4 text-white">{t("$100,000")}</td>
              <td className="p-4">{t("15%")}</td>
              <td className="p-4">{t("$5,000–$8,000")}</td>
              <td className="p-4">{t("85%")}</td>
              <td className="p-4">{t("$7,500")}</td>
            </tr>
            <tr className="bg-hyper-800/20">
              <td className="p-4 text-white">{t(`B`)}</td>
              <td className="p-4 text-white">{t("$20,000 × 5")}</td>
              <td className="p-4">{t("3–4% per swap")}</td>
              <td className="p-4">{t("$300–$600 per swap")}</td>
              <td className="p-4">{t("20%")}</td>
              <td className="p-4">{t("$600")}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-300 mb-2">{t(`Экономия: $6,900`)}</p>
      <p className="text-gray-300 mb-2">{t(`Практическая рекомендация:`)}</p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-gray-400 font-medium">{t(`Размер ордера`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Стратегия разделения`)}</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-300">
            <tr className="border-b border-gray-800 bg-hyper-800/20">
              <td className="p-4 text-white">{t(`$10k–$25k`)}</td>
              <td className="p-4">{t(`Можно одной транзакцией (с правильным slippage)`)}</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-4 text-white">{t(`$25k–$50k`)}</td>
              <td className="p-4">{t(`Разделить на 2 части (интервал 5–15 минут)`)}</td>
            </tr>
            <tr className="border-b border-gray-800 bg-hyper-800/20">
              <td className="p-4 text-white">{t(`$50k–$100k`)}</td>
              <td className="p-4">{t(`Разделить на 3–4 части (интервал 15–30 минут)`)}</td>
            </tr>
            <tr className="bg-hyper-800/20">
              <td className="p-4 text-white">{t(`$100k+`)}</td>
              <td className="p-4">{t(`Разделить на 5–10 частей (интервал 30–60 минут)`)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

   {/* Стратегия 3 */}
    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h4 className="text-lg font-bold text-white mb-3">{t(`Стратегия 3: Использование limit orders (когда доступно)`)}</h4>

      <p className="text-gray-300 mb-2">{t(`На HyperCore Spot (Hyperliquid):`)}</p>

      <pre className="bg-gray-900/20 p-4 rounded mb-4 text-sm text-gray-200 whitespace-pre-wrap">{t(`Market order (уязвим к MEV):
"Купить сейчас по любой цене до $10.50"
→ MEV-бот видит и атакует

Limit order (защита от MEV):
"Купить только по цене $10.00 или лучше"
→ Бот не может изменить вашу цену исполнения
→ Либо $10.00, либо ордер не исполнится`)}</pre>

      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>{t(`✓ Нет price impact от вашего ордера`)}</li>
        <li>{t(`✓ Нет slippage (точная цена)`)}</li>
        <li>{t(`✓ MEV-боты не могут манипулировать`)}</li>
        <li>{t(`✗ Может не исполниться (если рынок не достигнет вашей цены)`)}</li>
        <li>{t(`✗ Требует терпения`)}</li>
      </ul>
    </div>

    {/* Стратегия 4 */}
    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h4 className="text-lg font-bold text-white mb-3">{t(`Стратегия 4: Private mempool / MEV protection RPC`)}</h4>

      <p className="text-gray-300 mb-2">{t(`Проблема публичного mempool:`)}</p>
      <p className="text-gray-300 mb-4">{t(`Все видят вашу транзакцию ДО подтверждения.`)}</p>

      <pre className="bg-gray-900/20 p-4 rounded mb-4 text-sm text-gray-200 whitespace-pre-wrap">{t(`Обычный путь (Ethereum):
Вы → Public Mempool → MEV-боты видят → Атака
        ⚠️ ВИДИМО

Private mempool (Flashbots Protect):
Вы → Private Relay → Напрямую майнеру → Блок
        ✓ СКРЫТО от ботов

Результат:
MEV-боты НЕ видят транзакцию заранее
→ Не могут атаковать`)}</pre>

      <p className="text-gray-300 mb-2">{t(`Доступные решения:`)}</p>

      <div className="overflow-x-auto mb-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-gray-400 font-medium">{t(`Сервис`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Блокчейн`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Эффективность`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Стоимость`)}</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-300">
            <tr className="border-b border-gray-800 bg-hyper-800/20">
              <td className="p-4 text-white">{t(`Flashbots Protect`)}</td>
              <td className="p-4">{t("Ethereum")}</td>
              <td className="p-4">{t("85–95% защита")}</td>
              <td className="p-4">{t("Free (но может не исполниться)")}</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-4 text-white">{t(`CoW Swap`)}</td>
              <td className="p-4">{t("Ethereum, Gnosis")}</td>
              <td className="p-4">{t("90–98% защита")}</td>
              <td className="p-4">{t("0% fee")}</td>
            </tr>
            <tr className="border-b border-gray-800 bg-hyper-800/20">
              <td className="p-4 text-white">{t(`1inch Fusion`)}</td>
              <td className="p-4">{t("Ethereum, BSC")}</td>
              <td className="p-4">{t("80–90% защита")}</td>
              <td className="p-4">{t("0% fee")}</td>
            </tr>
            <tr className="bg-hyper-800/20">
              <td className="p-4 text-white">{t(`MEV Blocker`)}</td>
              <td className="p-4">{t("Ethereum")}</td>
              <td className="p-4">{t("75–85% защита")}</td>
              <td className="p-4">{t("Free")}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>{t(`Не 100% гарантия (некоторые боты имеют доступ)`)}</li>
        <li>{t(`Медленнее исполнение (ждёт next block)`)}</li>
        <li>{t(`Может не исполниться вообще`)}</li>
      </ul>
    </div>
          <div className="space-y-8 not-prose mb-12">

    {/* Стратегия 5 */}
    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h4 className="text-lg font-bold text-white mb-3">{t(`Стратегия 5: Timing (выбор времени)`)}</h4>

      <p className="text-gray-300 mb-4">{t(`MEV-активность коррелирует с волатильностью и объёмом.`)}</p>

      <p className="text-gray-300 mb-2 font-semibold">{t(`Опасные времена (HIGH MEV activity):`)}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>
          {t(`US market hours (14:00–21:00 UTC)`)}
          <ul className="list-inside list-disc text-gray-400 ml-5 mt-1 space-y-1">
            <li>{t(`Высокий объём торговли`)}</li>
            <li>{t(`MEV bots наиболее активны`)}</li>
            <li>{t(`Вероятность атаки: 70–80%`)}</li>
          </ul>
        </li>
        <li>
          {t(`Major news/events (Fed, макростатистика)`)}
          <ul className="list-inside list-disc text-gray-400 ml-5 mt-1 space-y-1">
            <li>{t(`Экстремальная волатильность`)}</li>
            <li>{t(`Боты на maximum alert`)}</li>
            <li>{t(`Вероятность атаки: 80–90%`)}</li>
          </ul>
        </li>
        <li>
          {t(`Сразу после крупных движений цены`)}
          <ul className="list-inside list-disc text-gray-400 ml-5 mt-1 space-y-1">
            <li>{t(`Арбитраж opportunities`)}</li>
            <li>{t(`Боты сканируют каждую TX`)}</li>
            <li>{t(`Вероятность атаки: 75–85%`)}</li>
          </ul>
        </li>
      </ul>

      <p className="text-gray-300 mb-2 font-semibold">{t(`Безопасные времена (LOW MEV activity):`)}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>
          {t(`Asian hours (2:00–10:00 UTC)`)}
          <ul className="list-inside list-disc text-gray-400 ml-5 mt-1 space-y-1">
            <li>{t(`Низкий объём торговли`)}</li>
            <li>{t(`Меньше ботов активны`)}</li>
            <li>{t(`Вероятность атаки: 30–40%`)}</li>
          </ul>
        </li>
        <li>
          {t(`Weekends (Saturday–Sunday)`)}
          <ul className="list-inside list-disc text-gray-400 ml-5 mt-1 space-y-1">
            <li>{t(`Retail traders offline`)}</li>
            <li>{t(`Меньше конкуренции`)}</li>
            <li>{t(`Вероятность атаки: 40–50%`)}</li>
          </ul>
        </li>
        <li>
          {t(`Stable market conditions`)}
          <ul className="list-inside list-disc text-gray-400 ml-5 mt-1 space-y-1">
            <li>{t(`Низкая волатильность`)}</li>
            <li>{t(`Меньше арбитража`)}</li>
            <li>{t(`Вероятность атаки: 35–45%`)}</li>
          </ul>
        </li>
      </ul>

      <p className="text-gray-300 mb-2 font-semibold">{t(`Практическая рекомендация:`)}</p>
      <p className="text-gray-300">{t(`Если не срочно → торгуйте в Asian hours или выходные.`)}</p>
    </div>

  </div>
  </div>
</article>
    </div>
  </div>
</article>

<article className="prose prose-invert prose-lg max-w-none">

  <div className="space-y-8 not-prose mb-12">

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h4 className="text-lg font-bold text-white mb-3">{t(`🚀 Почему Hyperliquid + Hypertrade = лучшая MEV-защита`)}</h4>

      <p className="text-gray-300 mb-4">{t(`Архитектурное преимущество: HyperBFT Consensus`)}</p>

      <p className="text-gray-300 mb-2 font-semibold">{t(`Проблема Ethereum:`)}</p>
      <p className="text-gray-300 mb-2">{t(`Ethereum (Proof of Stake):`)}</p>
      <pre className="text-gray-400 bg-hyper-900/50 p-4 rounded mb-4">
{t(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Block time: 12 секунд
Finality: 12–15 минут (2 epochs)

MEV window:
├─ TX в mempool: 6–12 секунд (ВИДИМО ботам)
├─ Боты frontrun: 5–10 секунд
├─ Ваша TX исполняется: по худшей цене
└─ Боты backrun: забирают profit

Total MEV exposure: 12+ секунд`)}
      </pre>

      <p className="text-gray-300 mb-2 font-semibold">{t(`Решение Hyperliquid:`)}</p>
      <p className="text-gray-300 mb-2">{t(`Hyperliquid (HyperBFT):`)}</p>
      <pre className="text-gray-400 bg-hyper-900/50 p-4 rounded mb-4">
{t(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Block time: ~1 секунда
Finality: 1 блок (~1 секунда)

MEV window:
├─ TX подтверждается МГНОВЕННО
├─ Боты не успевают среагировать
└─ Нет времени для frontrun/backrun

Total MEV exposure: <1 секунда`)}
      </pre>

      <p className="text-gray-300 mb-2 font-semibold">{t(`Математика:`)}</p>
      <p className="text-gray-300 mb-4">{t(`MEV вероятность ∝ Exposure time`)}</p>
      <pre className="text-gray-400 bg-hyper-900/50 p-4 rounded mb-4">
{t(`Ethereum:  12s exposure → 70% MEV risk
Hyperliquid: 1s exposure → 5% MEV risk

Reduction: 93% lower MEV risk`)}
      </pre>

      <p className="text-gray-300 mb-2 font-semibold">{t(`Преимущество 2: Deterministic ordering (HyperBFT)`)}</p>
      <p className="text-gray-300 mb-2">{t(`Ethereum:`)}</p>
      <p className="text-gray-400 mb-4">{t(`Майнеры выбирают порядок транзакций на основе gas fees → MEV-боты платят больше → получают приоритет.`)}</p>

      <p className="text-gray-300 mb-2">{t(`Hyperliquid HyperBFT:`)}</p>
      <pre className="text-gray-400 bg-hyper-900/50 p-4 rounded mb-4">
{t(`Transaction ordering rules:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Order by timestamp (FIFO — first in, first out)
   └─ Кто раньше отправил, тот раньше исполняется

2. Validators НЕ могут изменять порядок
   └─ Консенсус гарантирует честность

3. Higher gas НЕ даёт приоритета
   └─ MEV-боты не могут "купить" frontrun`)}
      </pre>

      <p className="text-gray-300 mb-2 font-semibold">{t(`Результат:`)}</p>
      <p className="text-gray-300 mb-4">{t(`Ваша транзакция исполняется В ПОРЯДКЕ поступления, а не на основе взяток валидаторам.`)}</p>

      <p className="text-gray-300 mb-2 font-semibold">{t(`Practical impact:`)}</p>
      <pre className="text-gray-400 bg-hyper-900/50 p-4 rounded mb-4">
{t(`Без FIFO ordering (Ethereum):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ваша TX:      50 Gwei gas, timestamp 10:00:00.100
MEV bot TX:   500 Gwei gas, timestamp 10:00:00.300

Порядок в блоке:
1. MEV bot (higher gas) ← frontrun
2. Ваша TX ← victim

С FIFO ordering (Hyperliquid):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ваша TX:      timestamp 10:00:00.100
MEV bot TX:   timestamp 10:00:00.300

Порядок в блоке:
1. Ваша TX (earlier timestamp) ← ЗАЩИЩЕНЫ
2. MEV bot ← слишком поздно

MEV bot не может атаковать, даже если платит больше gas.`)}
      </pre>

      <p className="text-gray-300 mb-2 font-semibold">{t(`Преимущество 3: Invisium Simulations от Hypertrade`)}</p>
      <p className="text-gray-300 mb-2">{t(`Обычные DEX aggregators:`)}</p>
      <p className="text-gray-400 mb-4">{t(`Показывают estimate price → реальная цена может отличаться на 3–8%.`)}</p>

      <p className="text-gray-300 mb-2">{t(`Hypertrade с Invisium:`)}</p>
      <pre className="text-gray-400 bg-hyper-900/50 p-4 rounded mb-4">
{t(`Pre-execution simulation process:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Создать виртуальную копию Hyperliquid state

2. Симулировать ваш своп в sandbox:
   ├─ Включить все pending транзакции
   ├─ Рассчитать price impact
   ├─ Проверить slippage
   └─ Detect potential MEV attempts

3. Если симуляция показывает аномалию:
   ⚠️ "Detected potential frontrun attempt
       Simulated price: $10.50
       Expected price: $10.00
       Deviation: 5% (SUSPICIOUS)
       
       Recommendation: Wait 10–30 seconds or increase slippage"

4. Если simulation clear:
   ✓ Execute with minAmountOut guarantee
   ✓ Transaction reverts if output < minAmountOut

Accuracy: 99.5–99.9%`)}
      </pre>

      <p className="text-gray-300 mb-2 font-semibold">{t(`Real example:`)}</p>
      <pre className="text-gray-400 bg-hyper-900/50 p-4 rounded mb-4">
{t(`User swap: $20,000 USDC → TOKEN_X

Without Invisium:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Expected: 2,000 tokens
Actual: 1,840 tokens (8% loss to MEV)
User doesn't know they were attacked

With Invisium (Hypertrade):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Simulation: 1,850 tokens (unusual deviation detected)
Warning: "Simulated output 7.5% below expected
          Potential MEV activity detected
          Recommendation: Retry in 15 seconds"

User waits 15 seconds → retries
New simulation: 1,995 tokens ✓
Execution: 1,994 tokens
Savings: $3,100 (avoided MEV attack)`)}
      </pre>

    </div>

  </div>
</article>



<article className="prose prose-invert prose-lg max-w-none">

  <div className="space-y-8 not-prose mb-12">

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">

      <h4 className="text-lg font-bold text-white mb-3">{t(`Преимущество 4: 0% platform fees = меньше MEV-мотивации`)}</h4>

      <p className="text-gray-300 mb-2">{t(`Почему это важно:`)}</p>
      <p className="text-gray-300 mb-4">{t(`MEV-боты атакуют, когда:`)}</p>

      <ul className="list-disc list-inside text-gray-300 mb-4">
        <li>{t(`High slippage tolerance (можно украсть больше)`)}</li>
        <li>{t(`High fees (жертва уже теряет деньги → менее чувствительна)`)}</li>
      </ul>

      <p className="text-gray-300 mb-2 font-semibold">{t(`Сравнение:`)}</p>

     <pre className="text-gray-400 bg-hyper-900/50 p-4 rounded mb-4">
{t(`1inch (Ethereum):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Platform fee: 0.3%
Gas fee: $10–$50
Slippage: 2%

Total user cost: 2.3% + gas
→ Пользователи устанавливают high slippage (3–5%)
   чтобы компенсировать fees
→ MEV-боты видят high tolerance
→ АТАКУЮТ

Hypertrade (Hyperliquid):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Platform fee: 0%
Gas fee: $4–$8
Slippage: 0.5–1% (можно afford низкий)

Total user cost: 0.5–1% + gas
→ Пользователи используют tight slippage
→ MEV-боты видят low tolerance
→ НЕ СТОИТ атаковать (profit < gas cost)`)}
      </pre>

      <h4 className="text-lg font-bold text-white mb-3">{t(`Преимущество 5: Split-routing снижает price impact`)}</h4>

      <p className="text-gray-300 mb-2">{t(`Как это защищает от MEV:`)}</p>

      <pre className="text-gray-400 bg-hyper-900/50 p-4 rounded mb-4">
{t(`Single-path swap (vulnerable):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
$50,000 через один DEX

Price impact: 15%
MEV bot sees: "HUGE impact → я могу frontrun и забрать 8–10%"
MEV profit potential: $4,000–$5,000
→ ВЫСОКИЙ приоритет для атаки

Split-routing (Hypertrade):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
$50,000 разделён на:
- $20,000 через HyperCore Spot (impact 0.5%)
- $15,000 через Hyperswap (impact 4%)
- $10,000 через Kittenswap (impact 6%)
- $5,000 через Prjx (impact 10%)

Combined impact: 3.5%
MEV bot sees: "Low impact per route → profit $200–$400"
→ НИЗКИЙ приоритет (не стоит gas + риск)

MEV attack probability:
Single-path: 75%
Split-routing: 15%

Reduction: 80% lower MEV risk`)}
      </pre>

      <h4 className="text-lg font-bold text-white mb-3">{t(`📊 Сравнительная таблица: MEV protection`)}</h4>

      <div className="overflow-x-auto not-prose mb-4">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-2 text-gray-400 font-medium">{t(`Параметр`)}</th>
              <th className="p-2 text-gray-400 font-medium">{t(`Ethereum + Uniswap`)}</th>
              <th className="p-2 text-gray-400 font-medium">{t(`Ethereum + 1inch`)}</th>
              <th className="p-2 text-gray-400 font-medium">{t(`Solana + Jupiter`)}</th>
              <th className="p-2 text-gray-400 font-medium">{t(`Hyperliquid + Hypertrade`)}</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-gray-800 bg-hyper-800/20">
              <td className="p-2">{t(`Block time`)}</td>
              <td className="p-2">12s</td>
              <td className="p-2">12s</td>
              <td className="p-2">0.4s</td>
              <td className="p-2">~1s</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-2">{t(`Finality`)}</td>
              <td className="p-2">12–15 min</td>
              <td className="p-2">12–15 min</td>
              <td className="p-2">&lt;1s</td>
              <td className="p-2">~1s</td>
            </tr>
            <tr className="border-b border-gray-800 bg-hyper-800/20">
              <td className="p-2">{t(`MEV exposure window`)}</td>
              <td className="p-2">12s</td>
              <td className="p-2">12s</td>
              <td className="p-2">0.4s</td>
              <td className="p-2">&lt;1s</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-2">{t(`FIFO ordering`)}</td>
              <td className="p-2">❌ No (gas-based)</td>
              <td className="p-2">❌ No</td>
              <td className="p-2">⚠️ Partial</td>
              <td className="p-2">✅ Yes (HyperBFT)</td>
            </tr>
            <tr className="border-b border-gray-800 bg-hyper-800/20">
              <td className="p-2">{t(`Private mempool`)}</td>
              <td className="p-2">⚠️ Optional (Flashbots)</td>
              <td className="p-2">⚠️ Optional</td>
              <td className="p-2">❌ No</td>
              <td className="p-2">✅ Built-in</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-2">{t(`Pre-execution simulation`)}</td>
              <td className="p-2">❌ No</td>
              <td className="p-2">⚠️ Estimate only</td>
              <td className="p-2">⚠️ Basic</td>
              <td className="p-2">✅ Invisium 99.9% accurate</td>
            </tr>
            <tr className="border-b border-gray-800 bg-hyper-800/20">
              <td className="p-2">{t(`Split-routing`)}</td>
              <td className="p-2">❌ No</td>
              <td className="p-2">✅ Yes</td>
              <td className="p-2">✅ Yes</td>
              <td className="p-2">✅ Yes (+ HyperCore)</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-2">{t(`Platform fees`)}</td>
              <td className="p-2">0%</td>
              <td className="p-2">0.3–1%</td>
              <td className="p-2">0%</td>
              <td className="p-2">0%</td>
            </tr>
            <tr className="border-b border-gray-800 bg-hyper-800/20">
              <td className="p-2">{t(`MEV attack probability`)}</td>
              <td className="p-2">70–80%</td>
              <td className="p-2">50–60%</td>
              <td className="p-2">40–50%</td>
              <td className="p-2">&lt;5%</td>
            </tr>
            <tr className="bg-hyper-800/20">
              <td className="p-2">{t(`Average MEV loss (on $10k swap)`)}</td>
              <td className="p-2">$500–$800</td>
              <td className="p-2">$200–$400</td>
              <td className="p-2">$100–$300</td>
              <td className="p-2">$10–$50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-300 mb-4 font-semibold">{t(`Вывод: Hyperliquid + Hypertrade = 93–95% снижение MEV-риска vs Ethereum.`)}</p>

      <h4 className="text-lg font-bold text-white mb-3">{t(`💡 Практический чеклист: защита от MEV`)}</h4>

      <p className="text-gray-300 mb-2">{t(`Для всех трейдеров`)}</p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>{t(`1. Используйте МИНИМАЛЬНЫЙ slippage tolerance
     - Стейблы: 0.1–0.3%
     - Major: 0.5–1%
     - Mid-cap: 1–2%
     - НИКОГДА >10%`)}</li>

        <li>{t(`2. Разделяйте крупные ордера
     - $50k+: минимум 3 части
     - $100k+: минимум 5 частей
     - Интервал: 15–30 минут`)}</li>

       <li>{t(`3. Торгуйте в безопасное время
     - Избегайте US market hours (14:00–21:00 UTC)
     - Предпочитайте Asian hours или выходные`)}</li>

        <li>{t(`4. Проверяйте executed price vs expected
     - Если отклонение >2% → возможная MEV-атака
     - Документируйте для анализа`)}</li>

        <li>{t(`5. Используйте Hypertrade на Hyperliquid
     - HyperBFT защита встроена
     - Invisium обнаруживает аномалии
     - Split-routing снижает impact`)}</li>
      </ul>

    </div>

  </div>
</article>



<article className="prose prose-invert prose-lg max-w-none">

  <div className="space-y-8 not-prose mb-12">

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">

      <h4 className="text-lg font-bold text-white mb-3">{t(`Для крупных трейдеров ($50k+ свопы)`)}</h4>

      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
        <li>{t(`1. ОБЯЗАТЕЛЬНО используйте split-routing
     - Hypertrade автоматически оптимизирует`)}</li>

        <li>{t(`2. Комбинируйте limit orders + market orders
     - HyperCore Spot: limit orders (70% ордера)
     - AMM pools: market orders (30% ордера)`)}</li>

        <li>{t(`3. Мониторьте mempool activity (если доступно)
     - Высокая активность → отложите своп на 30–60 мин`)}</li>

        <li>{t(`4. Используйте private RPC endpoints
     - Flashbots Protect (Ethereum)
     - Hyperliquid: встроенная защита`)}</li>

        <li>{t(`5. Never announce trades publicly
     - Не публикуйте в Twitter/Discord до выполнения
     - MEV-боты сканируют social media`)}</li>
      </ul>

      <h4 className="text-lg font-bold text-white mb-3">{t(`🎯 Реальные кейсы: MEV на Hyperliquid vs Ethereum`)}</h4>

      <h5 className="text-white font-semibold mb-2">{t(`Кейс 1: Своп $50,000 USDC → HYPE`)}</h5>

      <p className="text-gray-300 mb-2">{t(`На Ethereum (Uniswap):`)}</p>
      <pre className="text-gray-400 bg-hyper-900/50 p-4 rounded mb-4">
{t(`Expected output: 2,000 HYPE @ $25.00
Slippage setting: 2%

Execution:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Block time: 12 seconds
MEV bot detected large swap in mempool

Frontrun: Bot bought 500 HYPE
Price impact: +4%
Your execution: 1,920 HYPE @ $26.04
Backrun: Bot sold 500 HYPE

Result:
Expected: 2,000 HYPE
Actual: 1,920 HYPE
Loss: 80 HYPE = $2,000 (4%)

MEV bot profit: $1,800
Gas costs: $200
Net MEV extraction: $1,600`)}
      </pre>

      <p className="text-gray-300 mb-2">{t(`На Hyperliquid (Hypertrade):`)}</p>
      <pre className="text-gray-400 bg-hyper-900/50 p-4 rounded mb-4">
{t(`Expected output: 2,000 HYPE @ $25.00
Slippage setting: 0.8%

Execution через Invisium + Split-routing:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pre-simulation: 1,998 HYPE (99.9% accuracy)
Block finality: ~1 second

Split-routing:
├─ HyperCore Spot: $20,000 → 800 HYPE @ $25.00
├─ Hyperswap: $18,000 → 719 HYPE @ $25.03
├─ Kittenswap: $8,000 → 318 HYPE @ $25.16
└─ Prjx: $4,000 → 159 HYPE @ $25.16

Total: 1,996 HYPE
Deviation from sim: -0.1% ✓

Result:
Expected: 2,000 HYPE
Actual: 1,996 HYPE
Loss: 4 HYPE = $100 (0.2% slippage, NO MEV)

Savings vs Ethereum: $1,900
Вывод: 95% снижение потерь на Hyperliquid.`)}
      </pre>

      <h5 className="text-white font-semibold mb-2">{t(`Кейс 2: Мем-коин своп (высокий риск MEV)`)}</h5>

      <pre className="text-gray-400 bg-hyper-900/50 p-4 rounded mb-4">
{t(`Ethereum (высокий slippage 8%):
Swap: $10,000 → MEME_TOKEN
Expected: 100,000 tokens @ $0.10

Mempool exposure: 12 seconds
Multiple MEV bots compete

Sandwich attack:
- Frontrun: 5 bots total 50 ETH
- Your TX executes at inflated price
- Backrun: 5 bots profit

Result:
Expected: 100,000 tokens
Actual: 85,000 tokens
Loss: 15,000 tokens = $1,500 (15% !!!)

MEV extraction: $1,400
Your realized loss: 15%

Hyperliquid (slippage 5%, но HyperBFT защита):
Swap: $10,000 → MEME_TOKEN
Expected: 100,000 tokens @ $0.10

Invisium simulation: 95,500 tokens (4.5% impact)
Block finality: <1 second

FIFO ordering:
- MEV bot attempts frontrun
- But your TX timestamp earlier
- Validator executes YOUR TX first (HyperBFT rule)
- MEV bot TX executes AFTER (too late)

Result:
Expected: 100,000 tokens
Actual: 95,200 tokens
Loss: 4,800 tokens = $480 (4.8% slippage, NO MEV)

Savings vs Ethereum: $1,020
MEV attack: PREVENTED by HyperBFT`)}
      </pre>
     <h4 className="text-lg font-bold text-white mb-3">{t(`🔐 Заключение: комплексная MEV-защита`)}</h4>        
<ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">         
  <li>{t(`1. Архитектура блокчейна = первая линия защиты • Hyperliquid HyperBFT: sub-second finality + FIFO ordering • 93% снижение MEV exposure vs Ethereum`)}</li>         
  <li>{t(`2. Smart contract design = вторая линия • Hypertrade Invisium Simulations: 99.9% pre-execution accuracy • Auto-revert если output < minAmountOut`)}</li>         
  <li>{t(`3. Routing optimization = третья линия • Split-routing снижает price impact на 60–80% • Меньше impact = меньше MEV profit = меньше атак`)}</li>         
  <li>{t(`4. User behavior = четвёртая линия • Tight slippage tolerance (0.5–2%) • Order splitting для крупных свопов • Timing (избегать peak hours`)}</li>         
  <li>{t(`5. Transparency = постоянный мониторинг • Проверяйте executed vs expected price • Документируйте отклонения >2% • Переключайтесь на защищённые платформы`)}</li>       
</ul>        

<h4 className="text-lg font-bold text-white mb-3">{t(`Итоговая экономика`)}</h4>        

<pre className="text-gray-400 bg-hyper-900/50 p-4 rounded mb-4"> 
{t(`Годовой объём торговли: $500,000 Платформа: Ethereum + Uniswap ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ MEV exposure: 70–80% Average MEV loss per swap: $250–$500 50 swaps/year: $12,500–$25,000 потерь  Платформа: Hyperliquid + Hypertrade ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ MEV exposure: <5% Average MEV loss per swap: $10–$50 50 swaps/year: $500–$2,500 потерь  SAVINGS: $10,000–$22,500/год ROI: 400–900%`)}       
</pre>      

</div>    
</div> 
</article>    

<article className="prose prose-invert prose-lg max-w-none">    
<div className="space-y-8 not-prose mb-12">      
<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">        

<h4 className="text-lg font-bold text-white mb-3">{t(`🔗 Полезные ссылки`)}</h4>        
<p className="text-gray-300 mb-2">{t(`Hypertrade & Hyperliquid:`)}</p>       

<ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">         
  <li>{t(`Hypertrade (MEV-protected swaps): https://ht.xyz`)}</li>         
  <li>{t(`Hypertrade Docs: https://docs.hypertrade.io`)}</li>         
  <li>{t(`Hyperliquid: https://hyperliquid.xyz`)}</li>         
  <li>{t(`HyperBFT Technical Docs: https://hyperliquid.gitbook.io`)}</li>         
  <li>{t(`Explorer: https://explorer.hyperliquid.xyz`)}</li>       
</ul>        

<p className="text-gray-300 mb-2">{t(`MEV Research & Education:`)}</p>       
<ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">         
  <li>{t(`Flashbots MEV-Explore: https://explore.flashbots.net`)}</li>         
  <li>{t(`MEV.day (статистика): https://mev.day`)}</li>         
  <li>{t(`a16z MEV Guide: https://a16zcrypto.com/posts/article/mev-explained`)}</li>       
</ul>        

<p className="text-gray-300 mb-2">{t(`MEV Protection Tools (Ethereum):`)}</p>       
<ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">         
  <li>{t(`Flashbots Protect RPC: https://docs.flashbots.net/flashbots-protect`)}</li>         
  <li>{t(`CoW Swap (intent-based): https://cow.fi`)}</li>         
  <li>{t(`MEV Blocker: https://mevblocker.io`)}</li>       
</ul>        

<hr className="border-gray-700 my-6" />        

<h4 className="text-lg font-bold text-white mb-3">{t(`🚀 Начните торговать БЕЗ MEV-риска сегодня`)}</h4>       
<p className="text-gray-300 mb-2">{t(`3 шага к защите:`)}</p>        

<ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">         
  <li>{t(`1. Переключитесь на Hyperliquid + Hypertrade o https://ht.xyz o Встроенная HyperBFT защита o Invisium Simulations 99.9% accuracy o 0% platform fees`)}</li>          
  <li>{t(`2. Настройте правильный slippage o Major токены: 0.5–1% o Mid-cap: 1–2% o НИКОГДА >10%`)}</li>          
  <li>{t(`3. Разделяйте крупные ордера o $50k+: минимум 3 части o $100k+: минимум 5 частей`)}</li>       
</ul>        

<p className="text-gray-300 mb-4">{t(`MEV-боты крадут $2–8 миллионов ЕЖЕДНЕВНО от розничных трейдеров.`)}</p>       
<p className="text-gray-300 mb-4 font-semibold">{t(`Не будьте жертвой. Защитите свой капитал. Используйте Hypertrade.`)}</p>        

<hr className="border-gray-700 my-6" />        

<p className="text-gray-300 font-light">{t(`Статья 20 из серии “Полный гид по Hypertrade и Hyperliquid”`)}</p>      

</div>    
</div>  
</article>   

<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">   
{/* 🔗 Полезные ссылки */}   
<div className="bg-hyper-800/30 border border-gray-700 rounded-xl p-6 mb-8">     
<h3 className="text-xl font-bold text-white mb-4">{t(`🔗 Полезные ссылки`)}</h3>

   <div className="mb-4">
  <h4 className="text-white font-semibold mb-2">{t(`Hypertrade & Hyperliquid:`)}</h4>
  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
    <li>{t(`Hypertrade (MEV-protected swaps): https://ht.xyz`)}</li>
    <li>{t(`Hypertrade Docs: https://docs.hypertrade.io`)}</li>
    <li>{t(`Hyperliquid: https://hyperliquid.xyz`)}</li>
    <li>{t(`HyperBFT Technical Docs: https://hyperliquid.gitbook.io`)}</li>
    <li>{t(`Explorer: https://explorer.hyperliquid.xyz`)}</li>
  </ul>
</div>

<div className="mb-4">
  <h4 className="text-white font-semibold mb-2">{t(`MEV Research & Education:`)}</h4>
  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
    <li>{t(`Flashbots MEV-Explore: https://explore.flashbots.net`)}</li>
    <li>{t(`MEV.day (статистика): https://mev.day`)}</li>
    <li>{t(`a16z MEV Guide: https://a16zcrypto.com/posts/article/mev-explained`)}</li>
  </ul>
</div>

<div>
  <h4 className="text-white font-semibold mb-2">{t(`MEV Protection Tools (Ethereum):`)}</h4>
  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
    <li>{t(`Flashbots Protect RPC: https://docs.flashbots.net/flashbots-protect`)}</li>
    <li>{t(`CoW Swap (intent-based): https://cow.fi`)}</li>
    <li>{t(`MEV Blocker: https://mevblocker.io`)}</li>
  </ul>
</div>
</div>

{/* 🚀 Начните торговать БЕЗ MEV-риска сегодня */}
<div className="bg-hyper-800/30 border border-gray-700 rounded-xl p-6 mb-8">
  <h3 className="text-xl font-bold text-white mb-4">{t(`🚀 Начните торговать БЕЗ MEV-риска сегодня`)}</h3>
  <p className="text-gray-300 mb-2">{t(`3 шага к защите:`)}</p>

  <ol className="list-decimal list-inside text-gray-300 text-sm space-y-2 mb-4">
    <li>
      {t(`Переключитесь на Hyperliquid + Hypertrade`)}
      <ul className="list-disc list-inside ml-4 text-gray-400 text-xs space-y-1 mt-1">
        <li>{t(`https://ht.xyz`)}</li>
        <li>{t(`Встроенная HyperBFT защита`)}</li>
        <li>{t(`Invisium Simulations 99.9% accuracy`)}</li>
        <li>{t(`0% platform fees`)}</li>
      </ul>
    </li>
    <li>
      {t(`Настройте правильный slippage`)}
      <ul className="list-disc list-inside ml-4 text-gray-400 text-xs space-y-1 mt-1">
        <li>{t(`Major токены: 0.5–1%`)}</li>
        <li>{t(`Mid-cap: 1–2%`)}</li>
        <li>{t(`НИКОГДА >10%`)}</li>
      </ul>
    </li>
    <li>
      {t(`Разделяйте крупные ордера`)}
      <ul className="list-disc list-inside ml-4 text-gray-400 text-xs space-y-1 mt-1">
        <li>{t(`$50k+: минимум 3 части`)}</li>
        <li>{t(`$100k+: минимум 5 частей`)}</li>
      </ul>
    </li>
  </ol>

  <p className="text-gray-300 italic">{t(`MEV-боты крадут $2–8 миллионов ЕЖЕДНЕВНО от розничных трейдеров.`)}</p>
  <p className="text-gray-300 italic">{t(`Не будьте жертвой. Защитите свой капитал. Используйте Hypertrade.`)}</p>
</div>

{/* Кнопка Статья 20 из серии */}
<div className="text-center">
  <button className="bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
    {t(`Статья 20 из серии “Полный гид по Hypertrade и Hyperliquid”`)}
  </button>
</div>
</div>


        </article>
      </div>
    </section>
  );
};
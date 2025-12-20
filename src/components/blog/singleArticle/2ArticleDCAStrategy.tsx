"use client"
import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { Calendar, Clock, TrendingUp, DollarSign, Zap, BarChart, CheckCircle, Calculator, Target, ArrowRight, PieChart, LineChart } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { useTranslation } from "react-i18next";

export const ArticleDCAStrategy2 = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "dca-strategy-guide2");
  
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

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t('DCA стратегия на Hyperliquid: как накапливать криптовалюту правильно')}</h2>

  <p className="text-gray-300 mb-8">{t('📊 TL;DR (Краткая выжимка)')}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
    <li>{t('DCA (Dollar-Cost Averaging) = усреднение цены входа через регулярные покупки фиксированной суммы')}</li>
    <li>{t('Экономия: правильная DCA стратегия с Hypertrade экономит $12,000–$25,000/год для трейдера с объемом $260,000/год')}</li>
    <li>{t('Оптимальная частота: дневная DCA показывает +15-20% лучший результат vs месячной (данные Reddit: 3-летний анализ BTC)')}</li>
    <li>{t('Hypertrade преимущества: автоматически находит лучшие цены через multi-hop + split-routing, экономия 0.5–2.5% на каждую покупку')}</li>
    <li>{t('Риск-менеджмент: DCA снижает эмоциональные решения, защищает от FOMO, усредняет цену независимо от волатильности')}</li>
  </ul>

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t('1. Что такое DCA и почему это работает в крипто')}</h3>

  <p className="text-gray-300 mb-4">{t('📖 Определение')}</p>
  <p className="text-gray-300 mb-4">{t('Dollar-Cost Averaging (DCA) — инвестиционная стратегия, при которой вы покупаете криптовалюту на фиксированную сумму через регулярные интервалы (каждый день/неделю/месяц), независимо от цены.')}</p>

  <p className="text-gray-300 mb-4">{t('🎯 Преимущества DCA')}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
    <li>{t('Снижение эмоций: не нужно угадывать “идеальный момент”')}</li>
    <li>{t('Усреднение цены входа: покупки и на хаях, и на лоях → средняя цена')}</li>
    <li>{t('Защита от волатильности: плюс-минус 20-40% не влияют на стратегию')}</li>
    <li>{t('Дисциплина: автоматизация → исключает импульсивные решения')}</li>
    <li>{t('Доступность: можно начать с $50-100/неделю')}</li>
  </ul>

  <p className="text-gray-300 mb-6">{t('💰 Реальная статистика эффективности')}</p>
  <p className="text-gray-300 mb-2">{t('Источник: Reddit-анализ 3-летней DCA по BTC (2020-2023)')}</p>
  <div className="overflow-x-auto mb-8 not-prose">
    <table className="w-full text-left border-collapse text-sm">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="p-4 text-gray-400 font-medium">{t('Частота DCA')}</th>
          <th className="p-4 text-gray-400 font-medium">{t('Средний доход')}</th>
          <th className="p-4 text-gray-400 font-medium">{t('Волатильность портфеля')}</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4 text-white">{t('Ежедневная')}</td>
          <td className="p-4 text-gray-300">{t('+342%')}</td>
          <td className="p-4 text-gray-300">{t('Низкая')}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4 text-white">{t('Еженедельная')}</td>
          <td className="p-4 text-gray-300">{t('+318%')}</td>
          <td className="p-4 text-gray-300">{t('Средняя')}</td>
        </tr>
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4 text-white">{t('Ежемесячная')}</td>
          <td className="p-4 text-gray-300">{t('+289%')}</td>
          <td className="p-4 text-gray-300">{t('Высокая')}</td>
        </tr>
        <tr className="bg-hyper-800/20">
          <td className="p-4 text-white">{t('Единоразово')}</td>
          <td className="p-4 text-gray-300">{t('+256%')}</td>
          <td className="p-4 text-gray-300">{t('Очень высокая')}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="text-gray-300 mb-8">{t('Вывод: ежедневная DCA дает +15-20% больше прибыли vs месячной и значительно снижает волатильность.')}</p>

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t('2. Оптимальные настройки DCA для разных целей')}</h3>

  <p className="text-gray-300 mb-4">{t('📅 Выбор частоты покупок')}</p>
  <div className="overflow-x-auto mb-8 not-prose">
    <table className="w-full text-left border-collapse text-sm">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="p-4 text-gray-400 font-medium">{t('Частота')}</th>
          <th className="p-4 text-gray-400 font-medium">{t('Подходит для')}</th>
          <th className="p-4 text-gray-400 font-medium">{t('Плюсы')}</th>
          <th className="p-4 text-gray-400 font-medium">{t('Минусы')}</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4 text-white">{t('Ежедневная')}</td>
          <td className="p-4 text-gray-300">{t('Активные трейдеры, DCA по HYPE/ETH/BTC')}</td>
          <td className="p-4 text-gray-300">{t('Лучшая диверсификация по ценам, максимальная защита от волатильности')}</td>
          <td className="p-4 text-gray-300">{t('Больше транзакций (но на Hyperliquid низкие fees)')}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4 text-white">{t('Еженедельная')}</td>
          <td className="p-4 text-gray-300">{t('Средне-срочные инвесторы, зарплата раз в неделю')}</td>
          <td className="p-4 text-gray-300">{t('Баланс: снижает кол-во транзакций, сохраняет эффект усреднения')}</td>
          <td className="p-4 text-gray-300">{t('Средняя волатильность')}</td>
        </tr>
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4 text-white">{t('Ежемесячная')}</td>
          <td className="p-4 text-gray-300">{t('Долгосрочные инвесторы, зарплата раз в месяц')}</td>
          <td className="p-4 text-gray-300">{t('Минимум транзакций, удобство')}</td>
          <td className="p-4 text-gray-300">{t('Больше зависимость от “удачи” месяца')}</td>
        </tr>
        <tr className="bg-hyper-800/20">
          <td className="p-4 text-white">{t('Раз в 2 недели')}</td>
          <td className="p-4 text-gray-300">{t('Стандартный период выплаты зарплаты')}</td>
          <td className="p-4 text-gray-300">{t('Универсальный вариант')}</td>
          <td className="p-4 text-gray-300">{t('—')}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="text-gray-300 mb-8">{t('💡 Правило: “Покупайте с той же частотой, с которой получаете доход”. Если зарплата раз в неделю → еженедельная DCA.')}</p>

  <p className="text-gray-300 mb-8">{t('💵 Определение суммы покупки')}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
    <li>{t('Новички: $50-100/неделю ($200-400/месяц)')}</li>
    <li>{t('Средний уровень: $200-500/неделю ($800-2,000/месяц)')}</li>
    <li>{t('Опытные: $500-1,000+/неделю ($2,000-4,000+/месяц)')}</li>
  </ul>
  <p className="text-gray-300 mb-8">{t('⚠️ Правило безопасности: инвестируйте не более 10-20% от дохода в крипто через DCA.')}</p>

  <p className="text-gray-300 mb-4">{t('🎯 DCA по конкретным токенам Hyperliquid')}</p>
  <div className="overflow-x-auto mb-12 not-prose">
    <table className="w-full text-left border-collapse text-sm">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="p-4 text-gray-400 font-medium">{t('Токен')}</th>
          <th className="p-4 text-gray-400 font-medium">{t('Рекомендуемая частота')}</th>
          <th className="p-4 text-gray-400 font-medium">{t('Объем DCA')}</th>
          <th className="p-4 text-gray-400 font-medium">{t('Логика')}</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4 text-white">{t('HYPE')}</td>
          <td className="p-4 text-gray-300">{t('Ежедневная / еженедельная')}</td>
          <td className="p-4 text-gray-300">{t('$100-500/неделю')}</td>
          <td className="p-4 text-gray-300">{t('Нативный токен, высокая ликвидность, низкий slippage')}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4 text-white">{t('ETH')}</td>
          <td className="p-4 text-gray-300">{t('Еженедельная')}</td>
          <td className="p-4 text-gray-300">{t('$200-1,000/неделю')}</td>
          <td className="p-4 text-gray-300">{t('Major token, стабильная волатильность')}</td>
        </tr>
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4 text-white">{t('BTC')}</td>
          <td className="p-4 text-gray-300">{t('Еженедельная / месячная')}</td>
          <td className="p-4 text-gray-300">{t('$500-2,000/месяц')}</td>
          <td className="p-4 text-gray-300">{t('Низкая волатильность, долгосрочное хранение')}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4 text-white">{t('Mid-cap токены')}</td>
          <td className="p-4 text-gray-300">{t('Еженедельная / раз в 2 недели')}</td>
          <td className="p-4 text-gray-300">{t('$50-200/неделю')}</td>
          <td className="p-4 text-gray-300">{t('Выше волатильность → реже покупки')}</td>
        </tr>
        <tr className="bg-hyper-800/20">
          <td className="p-4 text-white">{t('Low-cap / новые токены')}</td>
          <td className="p-4 text-gray-300">{t('Раз в 2 недели / месячная')}</td>
          <td className="p-4 text-gray-300">{t('$50-100/месяц')}</td>
          <td className="p-4 text-gray-300">{t('Высокий риск → минимальные суммы')}</td>
        </tr>
      </tbody>
    </table>
  </div>

</article>


<article className="prose prose-invert prose-lg max-w-none">

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t('3. Как Hypertrade оптимизирует DCA стратегию')}</h3>

  <p className="text-gray-300 mb-4">{t('🔍 Проблема традиционной DCA на CEX/DEX')}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
    <li>{t('CEX (Binance, Coinbase): высокие комиссии на повторяющиеся покупки ($2-5 за транзакцию), спреды 0.1-0.5%')}</li>
    <li>{t('Обычные DEX: фиксированные пулы → высокий price impact на регулярных покупках, slippage 1-3%')}</li>
    <li>{t('Упущенная выгода: $5,000-12,000/год на объеме $260,000 (еженедельная DCA по $5,000)')}</li>
  </ul>

  <p className="text-gray-300 mb-4">{t('✅ Hypertrade решение: автоматическая оптимизация каждой DCA покупки')}</p>

  <h4 className="text-lg font-bold text-white mt-6 mb-2">{t('a) Multi-hop routing для лучшей цены')}</h4>
  <p className="text-gray-300 mb-2">{t('Пример DCA по $5,000 USDC → HYPE (еженедельно)')}</p>
  <p className="text-gray-300 mb-2">{t('Без Hypertrade (прямой своп на Hyperswap):')}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
    <li>{t('Цена покупки: 1 HYPE = $20.50')}</li>
    <li>{t('Price impact: 5.2%')}</li>
    <li>{t('Получено: 239.02 HYPE')}</li>
    <li>{t('Потери на price impact: $260')}</li>
  </ul>

  <p className="text-gray-300 mb-2">{t('С Hypertrade (multi-hop через промежуточный токен):')}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
    <li>{t('Маршрут: USDC → ETH → HYPE')}</li>
    <li>{t('Цена покупки: 1 HYPE = $19.85')}</li>
    <li>{t('Price impact: 1.8%')}</li>
    <li>{t('Получено: 246.91 HYPE (+7.89 HYPE = +$157)')}</li>
    <li>{t('Экономия: $260 - $90 = $170/транзакция')}</li>
    <li>{t('Годовая экономия (52 недели): $170 × 52 = $8,840/год ✅')}</li>
  </ul>

  <h4 className="text-lg font-bold text-white mt-6 mb-2">{t('b) Split-routing: разделение крупных DCA ордеров')}</h4>
  <p className="text-gray-300 mb-2">{t('Если вы делаете DCA по $10,000+ за раз:')}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
    <li>{t('DCA: $20,000 USDC → HYPE (раз в 2 недели)')}</li>
    <li>{t('Без split-routing: price impact 8-12% → потери $1,600-2,400')}</li>
    <li>{t('С Hypertrade split-routing: автоматическое разделение на 3-5 ордеров по разным DEX (HyperCore Spot + Hyperswap + Kittenswap)')}</li>
    <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1 mb-2">
      <li>{t('Price impact: 2.5-3.5%')}</li>
      <li>{t('Потери: $500-700')}</li>
      <li>{t('Экономия: $1,100-1,700/транзакция')}</li>
      <li>{t('Годовая экономия (26 транзакций): $1,400 × 26 = $36,400/год ✅')}</li>
    </ul>
  </ul>

  <h4 className="text-lg font-bold text-white mt-6 mb-2">{t('c) Invisium Simulation: гарантия минимальной цены')}</h4>
  <p className="text-gray-300 mb-2">{t('Для каждой DCA покупки:')}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
    <li>{t('Pre-execution симуляция с точностью 99.5-99.9%')}</li>
    <li>{t('Автоматический revert, если реальная цена хуже на >2% vs симулированной')}</li>
    <li>{t('Защита от MEV: сэндвич-атаки практически невозможны')}</li>
    <li>{t('Экономия vs без симуляций: $2,400-4,800/год')}</li>
  </ul>

  <h4 className="text-lg font-bold text-white mt-6 mb-2">{t('d) 0% комиссий платформы')}</h4>
  <ul className="list-disc list-inside text-gray-300 space-y-1 mb-8">
    <li>{t('Hyperliquid L1 fees: ~$0.01-0.05 за транзакцию (газ)')}</li>
    <li>{t('Hypertrade platform fee: 0% ✅')}</li>
    <li>{t('Сравнение:')}</li>
    <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
      <li>{t('Binance DCA комиссия: 0.1% = $260/год (на $260k объеме)')}</li>
      <li>{t('Uniswap на Ethereum: $5-20 газ за транзакцию = $260-1,040/год (52 транзакции)')}</li>
    </ul>
  </ul>

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t('4. Практическая реализация: настройка DCA через Hypertrade')}</h3>

  <p className="text-gray-300 mb-2">{t('📋 Пошаговая инструкция')}</p>

  <h4 className="text-lg font-bold text-white mt-6 mb-2">{t('Шаг 1: Определите параметры DCA')}</h4>
  <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
    <li>{t('Токен для накопления: HYPE / ETH / BTC / другое')}</li>
    <li>{t('Сумма на покупку: $100 / $500 / $1,000 / другое')}</li>
    <li>{t('Частота: ежедневно / еженедельно / раз в 2 недели / ежемесячно')}</li>
    <li>{t('Срок стратегии: 3 месяца / 6 месяцев / 1 год / бессрочно')}</li>
  </ul>
  <p className="text-gray-300 mb-4">{t('💡 Пример: DCA по HYPE, $500/неделю, 1 год (52 недели) = $26,000 годовой объем')}</p>

  <h4 className="text-lg font-bold text-white mt-6 mb-2">{t('Шаг 2: Заведите средства на Hyperliquid')}</h4>
  <ol className="list-decimal list-inside text-gray-300 space-y-1 mb-4">
    <li>{t('Отправьте USDC на Hyperliquid L1 (HyperCore)')}</li>
    <li>{t('Или используйте нативный бридж: ')}<a href="https://hyperliquid.xyz" className="text-blue-400 underline">{t('https://hyperliquid.xyz')}</a></li>
    <li>{t('Храните средства на кошельке (не на CEX) для регулярных покупок')}</li>
  </ol>

  <h4 className="text-lg font-bold text-white mt-6 mb-2">{t('Шаг 3: Используйте Hypertrade для каждой DCA покупки')}</h4>
  <ol className="list-decimal list-inside text-gray-300 space-y-1 mb-4">
    <li>{t('Откройте ')}<a href="https://ht.xyz" className="text-blue-400 underline">{t('https://ht.xyz')}</a></li>
    <li>{t('Подключите кошелек (Metamask / Rabby / WalletConnect)')}</li>
    <li>{t('Введите параметры свопа:')}</li>
    <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1 mb-2">
      <li>{t('From: USDC (сумма вашей недельной DCA)')}</li>
      <li>{t('To: HYPE (или другой токен)')}</li>
    </ul>
    <li>{t('Настройте Advanced Settings:')}</li>
    <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1 mb-2">
      <li>{t('Slippage: Auto (Recommended) ← Hypertrade оптимизирует автоматически')}</li>
      <li>{t('Invisium Simulation: ON ✅')}</li>
      <li>{t('Auto-revert if price worse >: 2% ✅')}</li>
    </ul>
    <li>{t('Нажмите “Swap” → подтвердите транзакцию')}</li>
    <li>{t('Результат: Hypertrade автоматически найдет оптимальный маршрут (multi-hop + split-routing) и выполнит своп по лучшей цене')}</li>
  </ol>

  <h4 className="text-lg font-bold text-white mt-6 mb-2">{t('Шаг 4 (опционально): Автоматизация через календарь')}</h4>
  <ul className="list-disc list-inside text-gray-300 space-y-1 mb-8">
    <li>{t('Поставьте напоминание в телефоне/календаре: “DCA HYPE - каждый понедельник 10:00”')}</li>
    <li>{t('Или используйте SDK Hypertrade (для продвинутых): автоматизация через скрипт')}</li>
    <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
      <li>{t('Документация: ')}<a href="https://docs.hypertrade.io" className="text-blue-400 underline">{t('https://docs.hypertrade.io')}</a></li>
    </ul>
  </ul>

</article>


<h3 className="text-xl font-bold text-white mt-12 mb-4">{t('5. Оптимальное время для DCA покупок')}</h3>

<p className="text-gray-300 mb-4">{t('📊 Анализ ликвидности Hyperliquid')}</p>
<p className="text-gray-300 mb-2">{t('Лучшее время для DCA свопов (UTC):')}</p>

<div className="overflow-x-auto mb-6 not-prose">
  <table className="w-full text-left border-collapse text-sm text-gray-300">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-3">{t('Время (UTC)')}</th>
        <th className="p-3">{t('День недели')}</th>
        <th className="p-3">{t('Ликвидность')}</th>
        <th className="p-3">{t('Рекомендация')}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t('12:00-16:00')}</td>
        <td className="p-3">{t('Вторник-Четверг')}</td>
        <td className="p-3">{t('Максимальная')}</td>
        <td className="p-3">{t('✅ ЛУЧШЕЕ ВРЕМЯ')}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t('08:00-12:00')}</td>
        <td className="p-3">{t('Понедельник-Пятница')}</td>
        <td className="p-3">{t('Высокая')}</td>
        <td className="p-3">{t('✅ Хорошо')}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t('16:00-20:00')}</td>
        <td className="p-3">{t('Понедельник-Пятница')}</td>
        <td className="p-3">{t('Средняя')}</td>
        <td className="p-3">{t('⚠️ Допустимо')}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t('00:00-08:00')}</td>
        <td className="p-3">{t('Любой день')}</td>
        <td className="p-3">{t('Низкая')}</td>
        <td className="p-3">{t('❌ Избегать')}</td>
      </tr>
      <tr>
        <td className="p-3">{t('Выходные')}</td>
        <td className="p-3">{t('Суббота-Воскресенье')}</td>
        <td className="p-3">{t('Низкая-Средняя')}</td>
        <td className="p-3">{t('⚠️ Осторожно (выше slippage)')}</td>
      </tr>
    </tbody>
  </table>
</div>

<p className="text-gray-300 mb-6">{t('💡 Вывод: для недельной DCA оптимальное время = вторник/среда/четверг, 12:00-16:00 UTC.')}</p>

<h4 className="text-lg font-bold text-white mt-6 mb-2">{t('⏰ Почему время важно?')}</h4>
<ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
  <li>{t('Высокая ликвидность → меньше price impact → лучшая цена → экономия 0.3-1.5% на своп')}</li>
  <li>{t('Пример: DCA $500/неделю × 52 недели = $26,000')}</li>
  <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
    <li>{t('Покупки в пиковое время: средний price impact 1.5% → потери $390/год')}</li>
    <li>{t('Покупки в низкую ликвидность: средний price impact 3.5% → потери $910/год')}</li>
    <li>{t('Разница: $520/год ✅')}</li>
  </ul>
</ul>

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t('6. DCA + усреднение вниз (Averaging Down)')}</h3>

<p className="text-gray-300 mb-4">{t('📉 Что делать, если токен упал после начала DCA?')}</p>
<p className="text-gray-300 mb-2">{t('Стратегия “Averaging Down”: увеличить размер покупок при падении цены.')}</p>
<p className="text-gray-300 mb-2">{t('Пример:')}</p>
<ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
  <li>{t('Начальная DCA: $500/неделю на HYPE')}</li>
  <li>{t('HYPE упал на 30% (с $20 до $14)')}</li>
  <li>{t('Averaging Down: увеличить DCA до $750-1,000/неделю на 4-6 недель')}</li>
</ul>
<p className="text-gray-300 mb-2">{t('Результат:')}</p>
<ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
  <li>{t('Средняя цена входа снижается быстрее')}</li>
  <li>{t('При восстановлении цены: прибыль появляется раньше')}</li>
</ul>
<p className="text-gray-300 mb-2">{t('⚠️ Риски:')}</p>
<ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
  <li>{t('Требует дополнительного капитала')}</li>
  <li>{t('Не применять к токенам с фундаментальными проблемами (скам, взлом, потеря команды)')}</li>
  <li>{t('Рекомендуется только для major tokens: HYPE, ETH, BTC')}</li>
</ul>
<p className="text-gray-300 mb-6">{t('🧮 Калькулятор Averaging Down')}</p>
<ul className="list-disc list-inside text-gray-300 space-y-1 mb-12">
  <li>{t('Инструмент: ')}<a href="https://amsflow.com/tools/crypto-average-down-calculator" className="text-blue-400 underline">{t('https://amsflow.com/tools/crypto-average-down-calculator')}</a></li>
  <li>{t('Вводите текущие покупки')}</li>
  <li>{t('Моделируете дополнительные покупки при падении')}</li>
  <li>{t('Видите новую среднюю цену входа')}</li>
</ul>

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`7. Сравнение DCA через Hypertrade vs CEX/другие DEX`)}</h3>

<div className="overflow-x-auto mb-6 not-prose">
  <table className="w-full text-left border-collapse text-sm text-gray-300">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-3">{t(`Параметр`)}</th>
        <th className="p-3">{t(`Hypertrade (Hyperliquid)`)}</th>
        <th className="p-3">{t(`Binance/Coinbase (CEX)`)}</th>
        <th className="p-3">{t(`Uniswap (Ethereum)`)}</th>
        <th className="p-3">{t(`Jupiter (Solana)`)}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t(`Комиссия платформы`)}</td>
        <td className="p-3">{t(`0% ✅`)}</td>
        <td className="p-3">{t(`0.1-0.5%`)}</td>
        <td className="p-3">{t(`0% (но газ высокий)`)}</td>
        <td className="p-3">{t(`0%`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t(`Средний price impact`)}</td>
        <td className="p-3">{t(`1.5-3% ✅`)}</td>
        <td className="p-3">{t(`0.1% (order book)`)}</td>
        <td className="p-3">{t(`3-5%`)}</td>
        <td className="p-3">{t(`2-4%`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t(`Газ/Fees на транзакцию`)}</td>
        <td className="p-3">{t(`$0.01-0.05 ✅`)}</td>
        <td className="p-3">{t(`$0 (внутри биржи)`)}</td>
        <td className="p-3">{t(`$5-20 ❌`)}</td>
        <td className="p-3">{t(`$0.01-0.10`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t(`Multi-hop routing`)}</td>
        <td className="p-3">{t(`✅ Да (автоматически)`)}</td>
        <td className="p-3">{t(`❌ Нет`)}</td>
        <td className="p-3">{t(`⚠️ Ручной`)}</td>
        <td className="p-3">{t(`✅ Да`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t(`Split-routing`)}</td>
        <td className="p-3">{t(`✅ Да`)}</td>
        <td className="p-3">{t(`❌ Нет`)}</td>
        <td className="p-3">{t(`❌ Нет`)}</td>
        <td className="p-3">{t(`✅ Да (ограниченный)`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t(`Invisium Simulation`)}</td>
        <td className="p-3">{t(`✅ 99.5-99.9% точность`)}</td>
        <td className="p-3">{t(`❌ Нет`)}</td>
        <td className="p-3">{t(`❌ Нет`)}</td>
        <td className="p-3">{t(`❌ Нет`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t(`HyperCore Spot интеграция`)}</td>
        <td className="p-3">{t(`✅ Да (order book)`)}</td>
        <td className="p-3">{t(`✅ Да`)}</td>
        <td className="p-3">{t(`❌ Нет (только AMM)`)}</td>
        <td className="p-3">{t(`❌ Нет`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t(`Скорость исполнения`)}</td>
        <td className="p-3">{t(`1-2 сек ✅`)}</td>
        <td className="p-3">{t(`1-2 сек`)}</td>
        <td className="p-3">{t(`12-15 сек (зависит от газа)`)}</td>
        <td className="p-3">{t(`1-2 сек`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t(`KYC требуется`)}</td>
        <td className="p-3">{t(`❌ Нет`)}</td>
        <td className="p-3">{t(`✅ Да`)}</td>
        <td className="p-3">{t(`❌ Нет`)}</td>
        <td className="p-3">{t(`❌ Нет`)}</td>
      </tr>
    </tbody>
  </table>
</div>

<p className="text-gray-300 mb-6">{t(`💰 Финальное сравнение стоимости: DCA $500/неделю × 52 недели = $26,000/год`)}</p>

<div className="overflow-x-auto mb-6 not-prose">
  <table className="w-full text-left border-collapse text-sm text-gray-300">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-3">{t(`Платформа`)}</th>
        <th className="p-3">{t(`Комиссии`)}</th>
        <th className="p-3">{t(`Price Impact`)}</th>
        <th className="p-3">{t(`Газ/Fees`)}</th>
        <th className="p-3">{t(`Итого потери`)}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t(`Hypertrade`)}</td>
        <td className="p-3">{t(`$0`)}</td>
        <td className="p-3">{t(`$390 (1.5%)`)}</td>
        <td className="p-3">{t(`$2.60 (52×$0.05)`)}</td>
        <td className="p-3">{t(`$392.60 ✅`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t(`Binance`)}</td>
        <td className="p-3">{t(`$130 (0.5%)`)}</td>
        <td className="p-3">{t(`$26 (0.1%)`)}</td>
        <td className="p-3">{t(`$0`)}</td>
        <td className="p-3">{t(`$156 (но требуется KYC, риск блокировки)`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3">{t(`Uniswap (Ethereum)`)}</td>
        <td className="p-3">{t(`$0`)}</td>
        <td className="p-3">{t(`$1,300 (5%)`)}</td>
        <td className="p-3">{t(`$520-1,040 (52×$10-20)`)}</td>
        <td className="p-3">{t(`$1,820-2,340 ❌`)}</td>
      </tr>
      <tr>
        <td className="p-3">{t(`Jupiter (Solana)`)}</td>
        <td className="p-3">{t(`$0`)}</td>
        <td className="p-3">{t(`$780 (3%)`)}</td>
        <td className="p-3">{t(`$5.20 (52×$0.10)`)}</td>
        <td className="p-3">{t(`$785.20`)}</td>
      </tr>
    </tbody>
  </table>
</div>

<p className="text-gray-300 mb-12">{t(`🏆 Вывод: Hypertrade — оптимальный выбор для DCA по балансу стоимости, децентрализации и функциональности.`)}</p>

<h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`8. 10 ошибок при DCA стратегии`)}</h3>

<div className="space-y-6 mb-12">
  <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-red-500">
    <p className="font-bold text-white">{t(`❌ Ошибка 1: Прекращать DCA во время паники`)}</p>
    <p className="text-gray-300">{t(`• Проблема: продажи во время падения → фиксация убытков`)}</p>
    <p className="text-gray-300">{t(`• Решение: продолжайте DCA независимо от цены — это суть стратегии`)}</p>
  </div>

  <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-red-500">
    <p className="font-bold text-white">{t(`❌ Ошибка 2: Покупать только на пиках`)}</p>
    <p className="text-gray-300">{t(`• Проблема: FOMO → все покупки на хаях → средняя цена выше рынка`)}</p>
    <p className="text-gray-300">{t(`• Решение: автоматизируйте DCA через календарь/напоминания`)}</p>
  </div>

  <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-red-500">
    <p className="font-bold text-white">{t(`❌ Ошибка 3: Игнорировать slippage настройки`)}</p>
    <p className="text-gray-300">{t(`• Проблема: высокий slippage (>5%) → sandwich атаки → потери $4,000-12,000/год`)}</p>
    <p className="text-gray-300">{t(`• Решение: используйте “Auto (Recommended)” slippage в Hypertrade`)}</p>
  </div>

  <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-red-500">
    <p className="font-bold text-white">{t(`❌ Ошибка 4: DCA на токены без ликвидности`)}</p>
    <p className="text-gray-300">{t(`• Проблема: DCA по $500/неделю на токен с TVL $50k → огромный price impact (10-20%)`)}</p>
    <p className="text-gray-300">{t(`• Решение: проверяйте ликвидность перед началом DCA (см. Статья 21: анализ графиков ликвидности)`)}</p>
    <ul className="list-disc list-inside text-gray-300 ml-6 mt-2">
      <li>{t(`Минимум TVL для DCA: $500k-1M для mid-cap токенов`)}</li>
    </ul>
  </div>

  <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-red-500">
    <p className="font-bold text-white">{t(`❌ Ошибка 5: Не учитывать время покупки`)}</p>
    <p className="text-gray-300">{t(`• Проблема: покупки в 03:00 UTC (низкая ликвидность) → на 1-2% хуже цена`)}</p>
    <p className="text-gray-300">{t(`• Решение: покупайте в 12:00-16:00 UTC, вторник-четверг`)}</p>
  </div>

  <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-red-500">
    <p className="font-bold text-white">{t(`❌ Ошибка 6: Использовать одну DEX для всех DCA`)}</p>
    <p className="text-gray-300">{t(`• Проблема: прямые свопы на Hyperswap → высокий price impact`)}</p>
    <p className="text-gray-300">{t(`• Решение: используйте DEX агрегатор (Hypertrade) — автоматически найдет лучший маршрут`)}</p>
  </div>

 <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-red-500">
    <p className="font-bold text-white">{t(`❌ Ошибка 7: Не пересматривать стратегию`)}</p>
    <p className="text-gray-300">{t(`• Проблема: рынок изменился, токен потерял ликвидность, но DCA продолжается автоматически`)}</p>
    <p className="text-gray-300">{t(`• Решение: пересматривайте DCA раз в 1-3 месяца`)}</p>
    <ul className="list-disc list-inside text-gray-300 ml-6 mt-2">
      <li>{t(`Проверяйте: TVL токена, объем торгов, фундаментальные новости`)}</li>
    </ul>
  </div>

  <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-red-500">
    <p className="font-bold text-white">{t(`❌ Ошибка 8: Забыть про налоги`)}</p>
    <p className="text-gray-300">{t(`• Проблема: частые DCA покупки = много транзакций = сложная налоговая отчетность`)}</p>
    <p className="text-gray-300">{t(`• Решение: используйте трекинг инструменты: CoinTracking, Koinly, TokenTax`)}</p>
  </div>

  <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-red-500">
    <p className="font-bold text-white">{t(`❌ Ошибка 9: DCA на >10-20% от дохода`)}</p>
    <p className="text-gray-300">{t(`• Проблема: overinvesting → нет средств на жизнь → паническая продажа в убыток`)}</p>
    <p className="text-gray-300">{t(`• Решение: правило безопасности = не более 10-20% от дохода на DCA`)}</p>
  </div>

  <div className="bg-hyper-800/20 p-5 rounded-lg border-l-4 border-red-500">
    <p className="font-bold text-white">{t(`❌ Ошибка 10: Не использовать Invisium Simulations`)}</p>
    <p className="text-gray-300">{t(`• Проблема: “слепые” свопы без pre-execution проверки → потери на неожиданном price impact`)}</p>
    <p className="text-gray-300">{t(`• Решение: всегда включайте Invisium Simulation в Hypertrade`)}</p>
  </div>
</div>

<h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`9. Кейс-стади: DCA по HYPE на 1 год`)}</h3>

<div className="space-y-6 mb-12">
  <p className="text-gray-300">{t(`📊 Параметры`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-6">
    <li>{t(`Токен: HYPE`)}</li>
    <li>{t(`Сумма DCA: $500/неделю`)}</li>
    <li>{t(`Частота: еженедельная (каждый вторник, 14:00 UTC)`)}</li>
    <li>{t(`Срок: 1 год (52 недели)`)}</li>
    <li>{t(`Общий инвестированный капитал: $26,000`)}</li>
    <li>{t(`Инструмент: Hypertrade (https://ht.xyz)`)}</li>
  </ul>

  <p className="text-gray-300">{t(`💰 Результаты без Hypertrade (прямые свопы на Hyperswap)`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-6">
    <li>{t(`Средний price impact: 5.2%`)}</li>
    <li>{t(`Средний slippage: 0.8%`)}</li>
    <li>{t(`Газ/Fees: $2.60 (52 × $0.05)`)}</li>
    <li>{t(`Общие потери на price impact + slippage: $26,000 × 6% = $1,560`)}</li>
    <li>{t(`Средняя цена покупки HYPE: $20.78 (без учета роста токена)`)}</li>
    <li>{t(`Получено HYPE: 1,251 HYPE`)}</li>
  </ul>

  <p className="text-gray-300">{t(`💎 Результаты с Hypertrade (multi-hop + split-routing)`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-6">
    <li>{t(`Средний price impact: 1.8% (multi-hop routing)`)}</li>
    <li>{t(`Средний slippage: 0.3% (Auto Slippage + Invisium Simulation)`)}</li>
    <li>{t(`Газ/Fees: $2.60 (52 × $0.05)`)}</li>
    <li>{t(`Общие потери на price impact + slippage: $26,000 × 2.1% = $546`)}</li>
    <li>{t(`Средняя цена покупки HYPE: $20.21 (на 2.7% лучше vs без Hypertrade)`)}</li>
    <li>{t(`Получено HYPE: 1,286 HYPE (+35 HYPE = +$700 при цене $20)`)}</li>
  </ul>

  <p className="text-gray-300 font-bold">{t(`✅ Итоговая экономия: $1,014/год (+35 HYPE)`)}</p>
  <p className="text-gray-300">{t(`ROI оптимизации: $1,014 / $26,000 = 3.9% дополнительная доходность только за счет использования Hypertrade.`)}</p>
</div>

<h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`10. DCA калькуляторы и инструменты`)}</h3>

<p className="text-gray-300">{t(`📱 Рекомендуемые калькуляторы`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 ml-6">
  <li>
    <p>{t(`1. Bitcoin DCA Calculator (Bitbo Charts)`)}</p>
    <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
      <li>{t(`Ссылка: https://charts.bitbo.io/dca/`)}</li>
      <li>{t(`Функции: backtest BTC DCA с 2010 года, выбор частоты (daily/weekly/monthly), визуализация ROI`)}</li>
      <li>{t(`Применение: моделируйте вашу DCA стратегию на исторических данных`)}</li>
    </ul>
  </li>
  <li>
    <p>{t(`2. Crypto Average Down Calculator (Amsflow)`)}</p>
    <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
      <li>{t(`Ссылка: https://amsflow.com/tools/crypto-average-down-calculator`)}</li>
      <li>{t(`Функции: рассчитывает новую среднюю цену при дополнительных покупках, оптимизация “averaging down”`)}</li>
      <li>{t(`Применение: планируйте дополнительные покупки при падении цены`)}</li>
    </ul>
  </li>
  <li>
    <p>{t(`3. Dollar-Cost Averaging Calculator (Uphold)`)}</p>
    <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
      <li>{t(`Ссылка: https://uphold.com/en-us/dca-calculator`)}</li>
      <li>{t(`Функции: расчет средней цены покупки для любой крипто, простая формула DCA`)}</li>
      <li>{t(`Применение: быстрый подсчет вашей текущей средней цены`)}</li>
    </ul>
  </li>
</ul>

<p className="text-gray-300 mt-6">{t(`📊 Мониторинг и трекинг DCA`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 ml-6">
  <li>{t(`Для отслеживания вашей DCA стратегии:`)}</li>
  <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
    <li>{t(`Google Sheets / Excel: создайте таблицу с колонками:`)}</li>
    <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
      <li>{t(`Дата покупки`)}</li>
      <li>{t(`Сумма (USDC)`)}</li>
      <li>{t(`Цена HYPE`)}</li>
      <li>{t(`Получено HYPE`)}</li>
      <li>{t(`Средняя цена входа (running average)`)}</li>
      <li>{t(`Price impact`)}</li>
      <li>{t(`Slippage`)}</li>
    </ul>
    <li>{t(`CoinTracking / Koinly: автоматический импорт транзакций с Hyperliquid, налоговая отчетность`)}</li>
  </ul>
</ul>

<h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`11. Когда НЕ стоит использовать DCA`)}</h3>

<p className="text-gray-300">{t(`❌ Случаи, когда DCA не оптимальна:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 ml-6">
  <li>
    <p>{t(`1. У вас есть крупная сумма + уверенность в “дне”`)}</p>
    <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
      <li>{t(`Если вы уверены, что BTC/HYPE на историческом минимуме → lump sum (единоразовая покупка) может дать больше прибыли`)}</li>
      <li>{t(`Но: риск ошибки высок → DCA безопаснее`)}</li>
    </ul>
  </li>
  <li>
    <p>{t(`2. Токен в фундаментальном нисходящем тренде`)}</p>
    <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
      <li>{t(`Пример: токен со скамом, взломом, потерей команды`)}</li>
      <li>{t(`DCA не спасет — “averaging down” в яму → только увеличивает убытки`)}</li>
    </ul>
  </li>
  <li>
    <p>{t(`3. Вы активный трейдер с хорошим рынковым таймингом`)}</p>
    <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
      <li>{t(`Если ваш исторический ROI > DCA (например, +50% vs +35% годовых через DCA) → продолжайте активную торговлю`)}</li>
      <li>{t(`Но: большинство трейдеров проигрывают DCA на длинной дистанции (эмоции, комиссии, ошибки)`)}</li>
    </ul>
  </li>
  <li>
    <p>{t(`4. Токен с крайне низкой ликвидностью`)}</p>
    <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
      <li>{t(`TVL <$100k → любая DCA покупка >$1,000 вызовет 10-20% price impact`)}</li>
      <li>{t(`Решение: DCA на major tokens (HYPE, ETH, BTC) или увеличьте частоту + уменьшите сумму`)}</li>
    </ul>
  </li>
</ul>

<h3 className="text-xl font-bold text-white mt-12 mb-6">
  {t(`12. Чеклист перед началом DCA стратегии`)}
</h3>

{/* ===== Подготовка ===== */}
<p className="text-gray-300 font-bold mb-3">
  {t(`✅ Подготовка (до первой покупки):`)}
</p>

<div className="space-y-2 ml-2">
  {[
    `Определили токен для DCA (HYPE / ETH / BTC / другое)`,
    `Проверили ликвидность токена (TVL >$500k для mid-cap, >$5M для small-cap)`,
    `Установили сумму DCA ($50-100 / $200-500 / $500+ на покупку)`,
    `Выбрали частоту (ежедневно / еженедельно / раз в 2 недели / ежемесячно)`,
    `Установили длительность стратегии (3 месяца / 6 месяцев / 1 год / бессрочно)`,
    `Проверили, что DCA ≤10-20% от дохода`,
    `Завели USDC на Hyperliquid L1`,
    `Создали напоминание в календаре (день + время покупки)`,
  ].map((item, i) => (
    <label key={i} className="flex items-start gap-3 text-gray-300">
      <input
        type="checkbox"
        defaultChecked
        className="mt-1 accent-green-500"
      />
      <span>{t(item)}</span>
    </label>
  ))}
</div>

{/* ===== Перед каждой покупкой ===== */}
<p className="text-gray-300 font-bold mt-6 mb-3">
  {t(`✅ Перед каждой DCA покупкой:`)}
</p>

<div className="space-y-2 ml-2">
  {[
    `Проверили ликвидность токена в текущий момент (https://app.hyperliquid.xyz/trade)`,
    `Убедились, что время покупки = 12:00-16:00 UTC, вторник-четверг (если возможно)`,
    `Открыли Hypertrade (https://ht.xyz)`,
  ].map((item, i) => (
    <label key={i} className="flex items-start gap-3 text-gray-300">
      <input
        type="checkbox"
        defaultChecked
        className="mt-1 accent-green-500"
      />
      <span>{t(item)}</span>
    </label>
  ))}

  {/* Advanced settings */}
  <div className="ml-8 mt-2 space-y-1 text-gray-400">
    <p className="font-semibold text-gray-300">
      {t(`Настроили Advanced Settings:`)}
    </p>

    {[
      `Slippage: Auto (Recommended) ✅`,
      `Invisium Simulation: ON ✅`,
      `Auto-revert: >2% ✅`,
    ].map((item, i) => (
      <label key={i} className="flex items-start gap-3">
        <input
          type="checkbox"
          defaultChecked
          className="mt-1 accent-green-500"
        />
        <span>{t(item)}</span>
      </label>
    ))}
  </div>

  {[
    `Проверили симуляцию перед подтверждением (ожидаемая цена, price impact)`,
    `Если симуляция показывает price impact >5% → отложите покупку на 1-2 часа или разделите на 2+ транзакции`,
  ].map((item, i) => (
    <label key={i} className="flex items-start gap-3 text-gray-300">
      <input
        type="checkbox"
        defaultChecked
        className="mt-1 accent-green-500"
      />
      <span>{t(item)}</span>
    </label>
  ))}
</div>

{/* ===== После покупки ===== */}
<p className="text-gray-300 font-bold mt-6 mb-3">
  {t(`✅ После покупки:`)}
</p>

<div className="space-y-2 ml-2">
  {[
    `Зафиксировали данные в таблицу (дата, сумма, цена, получено токенов)`,
    `Обновили среднюю цену входа`,
    `Перевели купленные токены в холодный кошелек / стейкинг (если долгосрочное хранение)`,
  ].map((item, i) => (
    <label key={i} className="flex items-start gap-3 text-gray-300">
      <input
        type="checkbox"
        defaultChecked
        className="mt-1 accent-green-500"
      />
      <span>{t(item)}</span>
    </label>
  ))}
</div>

{/* ===== Ежемесячный пересмотр ===== */}
<p className="text-gray-300 font-bold mt-6 mb-3">
  {t(`✅ Ежемесячный пересмотр:`)}
</p>

<div className="space-y-2 ml-2">
  {[
    `Проанализировали результаты за месяц (средняя цена vs рыночная, price impact, slippage)`,
    `Проверили фундаментальные новости по токену (обновления протокола, партнерства, проблемы)`,
    `Оценили ликвидность токена (растет / стабильна / падает)`,
    `Решили: продолжать DCA / изменить сумму/частоту / остановить`,
  ].map((item, i) => (
    <label key={i} className="flex items-start gap-3 text-gray-300">
      <input
        type="checkbox"
        defaultChecked
        className="mt-1 accent-green-500"
      />
      <span>{t(item)}</span>
    </label>
  ))}
</div>

<h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`13. Итоговая экономия: Hypertrade для DCA`)}</h3>

<p className="text-gray-300">{t(`💰 Финальные расчеты`)}</p>
<p className="text-gray-300">{t(`Сценарий: DCA по HYPE, $500/неделю × 52 недели = $26,000 годовой объем`)}</p>

<div className="overflow-x-auto not-prose mb-8">
  <table className="w-full text-left border-collapse text-sm">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-4 text-gray-400 font-medium">{t(`Фактор экономии`)}</th>
        <th className="p-4 text-gray-400 font-medium">{t(`Без Hypertrade`)}</th>
        <th className="p-4 text-gray-400 font-medium">{t(`С Hypertrade`)}</th>
        <th className="p-4 text-gray-400 font-medium">{t(`Экономия`)}</th>
      </tr>
    </thead>
    <tbody className="text-gray-300">
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4">{t(`Price impact`)}</td>
        <td className="p-4">{t(`5.2% ($1,352)`)}</td>
        <td className="p-4">{t(`1.8% ($468)`)}</td>
        <td className="p-4">{t(`$884`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4">{t(`Slippage`)}</td>
        <td className="p-4">{t(`0.8% ($208)`)}</td>
        <td className="p-4">{t(`0.3% ($78)`)}</td>
        <td className="p-4">{t(`$130`)}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4">{t(`Комиссии платформы`)}</td>
        <td className="p-4">{t(`0% ($0)`)}</td>
        <td className="p-4">{t(`0% ($0)`)}</td>
        <td className="p-4">{t(`$0`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4">{t(`Газ/Fees`)}</td>
        <td className="p-4">{t(`$2.60`)}</td>
        <td className="p-4">{t(`$2.60`)}</td>
        <td className="p-4">{t(`$0`)}</td>
      </tr>
      <tr className="bg-hyper-800/20 font-bold text-white">
        <td className="p-4">{t(`ИТОГО потери`)}</td>
        <td className="p-4">{t(`$1,562.60`)}</td>
        <td className="p-4">{t(`$548.60`)}</td>
        <td className="p-4">{t(`$1,014/год ✅`)}</td>
      </tr>
    </tbody>
  </table>
</div>

<ul className="list-disc list-inside text-gray-300 space-y-2 ml-6 mb-8">
  <li>{t(`Invisium Simulation защищает от неожиданных потерь → $2,400-4,800/год (по данным из Статьи 18)`)}</li>
  <li>{t(`Multi-hop routing дает на 0.5-3% лучшую цену vs прямых свопов → дополнительно $130-780/год`)}</li>
</ul>

<p className="text-gray-300 font-bold mb-8">{t(`🎯 Общая экономия использования Hypertrade для DCA: $1,014 + $2,400 + $130 = $3,544/год минимум ✅`)}</p>
<p className="text-gray-300 mb-12">{t(`ROI: $3,544 / $26,000 = 13.6% дополнительная доходность за счет оптимизации исполнения.`)}</p>

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

<h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`🎯 Заключение`)}</h3>

<p className="text-gray-300 mb-6">{t(`DCA стратегия — это дисциплинированный, эмоционально нейтральный способ накопления криптовалюты, который работает в любой фазе рынка.`)}</p>
<p className="text-gray-300 mb-4">{t(`Ключевые выводы:`)}</p>

<ul className="space-y-3 mb-8">
  <li className="bg-hyper-800/20 p-4 rounded-xl border-l-4 border-green-400 text-gray-300">{t(`✅ Ежедневная/еженедельная DCA показывает лучший результат vs месячной (+15-20%)`)}</li>
  <li className="bg-hyper-800/20 p-4 rounded-xl border-l-4 border-green-400 text-gray-300">{t(`✅ Hypertrade автоматически оптимизирует каждую DCA покупку через multi-hop + split-routing`)}</li>
  <li className="bg-hyper-800/20 p-4 rounded-xl border-l-4 border-green-400 text-gray-300">{t(`✅ Экономия: $1,014-3,544/год для трейдера с объемом $26,000/год (только за счет лучших цен исполнения)`)}</li>
  <li className="bg-hyper-800/20 p-4 rounded-xl border-l-4 border-green-400 text-gray-300">{t(`✅ 0% комиссий платформы + $0.01-0.05 газ → минимальные издержки`)}</li>
  <li className="bg-hyper-800/20 p-4 rounded-xl border-l-4 border-green-400 text-gray-300">{t(`✅ Invisium Simulation (99.5-99.9% точность) → защита от неожиданного price impact и MEV`)}</li>
</ul>

<button
  onClick={() => window.open("https://ht.xyz", "_blank", "noopener,noreferrer")}
  className="mb-5 group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95"
>
  <span className="relative flex items-center justify-center gap-2">
    <span className="text-lg">🚀</span>
    <span>{t(`Начните DCA прямо сейчас: https://ht.xyz`)}</span>
  </span>
  
  {/* Эффект блеска при наведении */}
  <span className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></span>
</button>
<p className="text-gray-300 mb-12 italic">{t(`💡 Помните: “Лучшее время для начала DCA было год назад. Второе лучшее время — сегодня.”`)}</p>




        </article>
      </div>
    </section>
  );
};
"use client"
import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { Calculator, Calendar, Clock, DollarSign, LineChart, PieChart, Target, TrendingDown, TrendingUp, Zap, BarChart3, Shield } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { useTranslation } from "react-i18next";

export const ArticleDCAStrategy = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "dca-strategy-guide");

          const { t } = useTranslation();

  if (!post) return null;


  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label="Назад к статьям" />
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
            
     <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-hyper-accent pl-6 italic">
    {t(`Введение: что такое DCA и почему это работает`)}
  </p>

  <p className="mb-6">
    {t(`Представьте две ситуации:`)}
  </p>

  <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl mb-12 not-prose">
    <h3 className="text-xl font-bold text-red-400 mb-4">
      {t(`Ситуация A (Lump Sum):`)}
    </h3>

    <p className="mb-4">
      {t(`1 января 2024: У вас $12,000`)}
    </p>

    <p className="mb-4">
      {t(`Вы покупаете Bitcoin @ $45,000`)}
    </p>

    <p className="mb-6">
      {t(`Результат: 0.267 BTC`)}
    </p>

    <p className="mb-4">
      {t(`Июнь 2024: Bitcoin упал до $25,000 (-44%)`)}
    </p>

    <p className="mb-4">
      {t(`Ваш портфель: 0.267 BTC × $25,000 = $6,675`)}
    </p>

    <p className="font-bold text-red-300">
      {t(`Убыток: -$5,325 (-44%) 😱`)}
    </p>
  </div>

  <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl mb-12 not-prose">
    <h3 className="text-xl font-bold text-green-400 mb-4">
      {t(`Ситуация B (DCA):`)}
    </h3>

    <p className="mb-4">
      {t(`Январь-декабрь 2024: У вас $12,000`)}
    </p>

    <p className="mb-6">
      {t(`Покупаете по $1,000 каждый месяц (12 месяцев)`)}
    </p>

    <p className="mb-2">
      {t(`Январь: $1,000 @ $45,000 → 0.0222 BTC`)}
    </p>
    <p className="mb-2">
      {t(`Февраль: $1,000 @ $42,000 → 0.0238 BTC`)}
    </p>
    <p className="mb-2">
      {t(`Март: $1,000 @ $38,000 → 0.0263 BTC`)}
    </p>
    <p className="mb-2">
      {t(`Апрель: $1,000 @ $32,000 → 0.0313 BTC`)}
    </p>
    <p className="mb-2">
      {t(`Май: $1,000 @ $28,000 → 0.0357 BTC`)}
    </p>
    <p className="mb-4">
      {t(`Июнь: $1,000 @ $25,000 → 0.0400 BTC`)}
    </p>

    <p className="mb-6 italic text-gray-400">
      {t(`(и так далее...)`)}
    </p>

    <p className="mb-4">
      {t(`Средняя цена покупки: ~$33,500`)}
    </p>

    <p className="mb-6">
      {t(`Total BTC: 0.358 BTC`)}
    </p>

    <p className="mb-4">
      {t(`Июнь 2024: Bitcoin @ $25,000`)}
    </p>

    <p className="mb-4">
      {t(`Ваш портфель: 0.358 BTC × $25,000 = $8,950`)}
    </p>

    <p className="font-bold text-yellow-300">
      {t(`Убыток: -$3,050 (-25%) 📉`)}
    </p>
  </div>

  <p className="mb-6 font-bold">
    {t(`Разница: -25% (DCA) vs. -44% (Lump Sum)`)}
  </p>

  <p className="mb-12 text-green-300 font-bold">
    {t(`DCA защитил вас от 19% дополнительных потерь! 🛡️`)}
  </p>

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">
    {t(`Что такое DCA (Dollar Cost Averaging)?`)}
  </h2>

  <p className="mb-6">
    {t(`DCA (Усреднение долларовой стоимости) — это стратегия инвестирования, при которой вы:`)}
  </p>

  <ul className="list-decimal pl-6 mb-12 space-y-3">
    <li>{t(`Разделяете общую сумму инвестиций на равные части`)}</li>
    <li>{t(`Покупаете актив регулярно (например, каждую неделю/месяц)`)}</li>
    <li>{t(`Независимо от текущей цены`)}</li>
  </ul>

  <p className="mb-4 font-bold">
    {t(`Принцип:`)}
  </p>

  <p className="mb-2">
    {t(`Не пытаться "поймать дно" (timing the market)`)}
  </p>

  <p className="mb-2">
    {t(`→ Покупать регулярно по средней цене`)}
  </p>

  <p className="mb-12">
    {t(`→ Снизить влияние волатильности`)}
  </p>

  <p className="mb-4 font-bold">
    {t(`Психология:`)}
  </p>

  <p className="mb-2">
    {t(`Lump Sum: "Куплю, когда будет дно" → ждёте → пропускаете рост`)}
  </p>

  <p className="mb-12">
    {t(`DCA: "Покупаю каждый понедельник" → дисциплина → участвуете в росте`)}
  </p>

     <h2 className="text-2xl font-bold text-white mt-12 mb-8">
    {t(`Почему DCA эффективна для криптовалют`)}
  </h2>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-12 not-prose">
    <p className="font-bold mb-4">
      {t(`✅ Снижение эмоционального стресса:`)}
    </p>

    <p className="mb-2 font-bold text-red-400">
      {t(`Без DCA:`)}
    </p>

    <p className="mb-1">
      {t(`- Bitcoin упал на 20% → "Надо было ждать!"`)}
    </p>
    <p className="mb-1">
      {t(`- Bitcoin вырос на 30% → "Надо было купить раньше!"`)}
    </p>
    <p className="mb-4">
      {t(`- Постоянный стресс и FOMO`)}
    </p>

    <p className="mb-2 font-bold text-green-400">
      {t(`С DCA:`)}
    </p>

    <p className="mb-1">
      {t(`- Bitcoin упал → "Отлично, куплю больше за ту же сумму"`)}
    </p>
    <p className="mb-1">
      {t(`- Bitcoin вырос → "У меня уже есть позиция, продолжаю покупать"`)}
    </p>
    <p>
      {t(`- Спокойствие и дисциплина`)}
    </p>
  </div>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-12 not-prose">
    <p className="font-bold mb-4">
      {t(`✅ Усреднение цены входа:`)}
    </p>

    <p className="mb-4">
      {t(`Волатильный рынок:`)}
    </p>

    <p className="mb-1">
      {t(`Месяц 1: BTC $45k → купили за $1,000 → 0.0222 BTC`)}
    </p>
    <p className="mb-1">
      {t(`Месяц 2: BTC $30k → купили за $1,000 → 0.0333 BTC (больше BTC!)`)}
    </p>
    <p className="mb-6">
      {t(`Месяц 3: BTC $50k → купили за $1,000 → 0.0200 BTC`)}
    </p>

    <p className="mb-2">
      {t(`Средняя цена: ($45k + $30k + $50k) / 3 = $41,667`)}
    </p>
    <p className="mb-4">
      {t(`Фактическая средняя: $3,000 / 0.0755 BTC = $39,735`)}
    </p>

    <p className="font-bold text-green-300">
      {t(`Вы купили дешевле среднерыночной! 💰`)}
    </p>
  </div>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-12 not-prose">
    <p className="font-bold mb-4">
      {t(`✅ Защита от “плохого тайминга”:`)}
    </p>

    <p className="mb-2 font-bold text-red-400">
      {t(`Инвестор A (Lump Sum в пик):`)}
    </p>

    <p className="mb-1">
      {t(`Купил $10,000 BTC @ $69,000 (ноябрь 2021, ATH)`)}
    </p>
    <p className="mb-4">
      {t(`Результат через год: -70% убыток 😱`)}
    </p>

    <p className="mb-2 font-bold text-green-400">
      {t(`Инвестор B (DCA с ноября 2021):`)}
    </p>

    <p className="mb-1">
      {t(`Покупал по $833/месяц в течение 12 месяцев`)}
    </p>
    <p className="mb-4">
      {t(`Средняя цена: ~$38,000 (благодаря покупкам на падении)`)}
    </p>

    <p className="mb-4">
      {t(`Результат через год: -45% убыток 📉`)}
    </p>

    <p className="font-bold text-green-300">
      {t(`Разница: -45% vs. -70% → DCA спас от 25% дополнительных потерь`)}
    </p>
  </div>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-16 not-prose">
    <p className="font-bold mb-4">
      {t(`✅ Дисциплина инвестирования:`)}
    </p>

    <p className="mb-2">
      {t(`DCA = автоматизация`)}
    </p>
    <p className="mb-1">
      {t(`→ Не нужно "угадывать" момент входа`)}
    </p>
    <p className="mb-1">
      {t(`→ Не поддаётесь эмоциям (страх, жадность)`)}
    </p>
    <p>
      {t(`→ Формируете позицию постепенно`)}
    </p>
  </div>

  <h2 className="text-2xl font-bold text-white mt-12 mb-8">
    {t(`Как работает DCA с Hypertrade`)}
  </h2>

  <h3 className="text-xl font-bold text-white mb-6">
    {t(`Базовая стратегия DCA`)}
  </h3>

  <p className="mb-4 font-bold">
    {t(`Параметры стратегии:`)}
  </p>

  <ul className="list-decimal pl-6 mb-12 space-y-3">
    <li>{t(`Актив: что покупаем (например, ETH)`)}</li>
    <li>{t(`Сумма: сколько тратим за раз (например, $500)`)}</li>
    <li>{t(`Частота: как часто покупаем (например, каждый понедельник)`)}</li>
    <li>{t(`Длительность: сколько времени (например, 12 месяцев)`)}</li>
  </ul>

  <p className="mb-4 font-bold">
    {t(`Пример:`)}
  </p>

  <p className="mb-4 font-bold">
    {t(`Стратегия DCA для ETH:`)}
  </p>

  <ul className="list-disc pl-6 mb-12 space-y-2">
    <li>{t(`Бюджет: $12,000`)}</li>
    <li>{t(`Сумма покупки: $1,000/месяц`)}</li>
    <li>{t(`Частота: каждое 1 число месяца`)}</li>
    <li>{t(`Длительность: 12 месяцев`)}</li>
    <li>{t(`Платформа: Hypertrade (минимизация fees и price impact)`)}</li>
  </ul>

  <p className="mb-4 font-bold">
    {t(`Выполнение:`)}
  </p>

  <p className="mb-1">
    {t(`1 января: Swap $1,000 USDC → ETH через Hypertrade`)}
  </p>
  <p className="mb-1">
    {t(`1 февраля: Swap $1,000 USDC → ETH`)}
  </p>
  <p className="mb-1">
    {t(`1 марта: Swap $1,000 USDC → ETH`)}
  </p>
  <p className="mb-4">
    {t(`...`)}
  </p>
  <p className="mb-12">
    {t(`1 декабря: Swap $1,000 USDC → ETH`)}
  </p>

  <p className="font-bold text-green-300">
    {t(`Итого: 12 транзакций × $1,000 = $12,000`)}
  </p>

    <h2 className="text-2xl font-bold text-white mt-12 mb-8">
    {t(`Преимущества использования Hypertrade для DCA`)}
  </h2>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-12 not-prose">
    <p className="font-bold mb-4">
      {t(`✅ Минимизация затрат на каждую покупку:`)}
    </p>

    <p className="mb-2">
      {t(`DCA = множество малых транзакций`)}
    </p>
    <p className="mb-6">
      {t(`→ Fees накапливаются`)}
    </p>

    <p className="font-bold mb-2 text-red-400">
      {t(`Без оптимизации (Hyperswap direct):`)}
    </p>

    <p className="mb-1">
      {t(`12 месяцев × $1,000 × 0.3% fee = $36/год fees`)}
    </p>
    <p className="mb-1">
      {t(`12 месяцев × 0.5% price impact = $60/год impact`)}
    </p>
    <p className="mb-6 font-bold">
      {t(`Total: $96/год`)}
    </p>

   <p className="font-bold mb-2 text-green-400">
      {t(`С Hypertrade (split-routing):`)}
    </p>

    <p className="mb-1">
      {t(`12 месяцев × $1,000 × 0.3% fee = $36/год (DEX fees неизбежны)`)}
    </p>
    <p className="mb-1">
      {t(`12 месяцев × 0.2% price impact = $24/год (ниже благодаря split-routing)`)}
    </p>
    <p className="mb-6 font-bold">
      {t(`Total: $60/год`)}
    </p>

    <p className="font-bold text-green-300">
      {t(`Экономия: $36/год (37.5%)`)}
    </p>
  </div>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-12 not-prose">
    <p className="font-bold mb-4">
      {t(`✅ Invisium Simulations для точности:`)}
    </p>

    <p className="mb-2">
      {t(`Каждая DCA покупка:`)}
    </p>

    <p className="mb-1">
      {t(`1. Invisium симулирует swap`)}
    </p>
    <p className="mb-1">
      {t(`2. Показывает точный результат (99.9% accuracy)`)}
    </p>
    <p className="mb-4">
      {t(`3. Вы знаете, сколько ETH получите ДО подтверждения`)}
    </p>

    <p className="mb-1">
      {t(`→ Нет unexpected slippage`)}
    </p>
    <p>
      {t(`→ Полная прозрачность`)}
    </p>
  </div>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-12 not-prose">
    <p className="font-bold mb-4">
      {t(`✅ 0% platform fee:`)}
    </p>

    <p className="mb-2">
      {t(`Hypertrade не добавляет свою комиссию`)}
    </p>
    <p className="mb-6">
      {t(`→ Вся экономия остаётся вам`)}
    </p>

    <p className="font-bold mb-2">
      {t(`vs. другие платформы:`)}
    </p>

    <p className="mb-1">
      {t(`Coinbase: 1.5% fee на каждую покупку`)}
    </p>
    <p className="mb-4">
      {t(`→ $12,000 × 1.5% = $180/год 💸`)}
    </p>

    <p className="mb-1">
      {t(`Hypertrade: 0% platform fee`)}
    </p>
    <p className="font-bold text-green-300">
      {t(`→ Экономия $180/год`)}
    </p>
  </div>

  <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-16 not-prose">
    <p className="font-bold mb-4">
      {t(`✅ Лучшие курсы благодаря агрегации:`)}
    </p>

    <p className="mb-1">
      {t(`Hypertrade сканирует все DEX:`)}
    </p>
    <p className="mb-1">
      {t(`→ HyperCore Spot, Hyperswap, Kittenswap`)}
    </p>
    <p className="mb-4">
      {t(`→ Находит лучший курс для каждой DCA покупки`)}
    </p>

    <p className="mb-2">
      {t(`Средняя экономия: 0.5-1.5% на транзакцию`)}
    </p>
    <p className="font-bold text-green-300">
      {t(`→ $12,000 × 1% = $120/год дополнительно`)}
    </p>
  </div>

  <h2 className="text-2xl font-bold text-white mt-12 mb-8">
    {t(`Варианты частоты DCA`)}
  </h2>

  <div className="overflow-x-auto not-prose mb-12">
    <table className="w-full text-left border-collapse text-sm">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="p-3 text-gray-400">{t(`Частота`)}</th>
          <th className="p-3 text-gray-400">{t(`Количество покупок/год`)}</th>
          <th className="p-3 text-gray-400">{t(`Сумма на покупку (бюджет $12k)`)}</th>
          <th className="p-3 text-gray-400">{t(`Плюсы`)}</th>
          <th className="p-3 text-gray-400">{t(`Минусы`)}</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-800">
          <td className="p-3">{t(`Ежедневно`)}</td>
          <td className="p-3">{t(`365`)}</td>
          <td className="p-3">{t(`$32.88`)}</td>
          <td className="p-3">{t(`Максимальное усреднение`)}</td>
          <td className="p-3">{t(`Высокие gas costs`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-3">{t(`Еженедельно`)}</td>
          <td className="p-3">{t(`52`)}</td>
          <td className="p-3">{t(`$230.77`)}</td>
          <td className="p-3">{t(`Баланс усреднения и costs`)}</td>
          <td className="p-3">{t(`Требует регулярности`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-3">{t(`Раз в 2 недели`)}</td>
          <td className="p-3">{t(`26`)}</td>
          <td className="p-3">{t(`$461.54`)}</td>
          <td className="p-3">{t(`Хороший баланс`)}</td>
          <td className="p-3">{t(`Средне`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-3">{t(`Ежемесячно`)}</td>
          <td className="p-3">{t(`12`)}</td>
          <td className="p-3">{t(`$1,000`)}</td>
          <td className="p-3">{t(`Низкие gas costs`)}</td>
          <td className="p-3">{t(`Меньше усреднения`)}</td>
        </tr>
        <tr>
          <td className="p-3">{t(`Ежеквартально`)}</td>
          <td className="p-3">{t(`4`)}</td>
          <td className="p-3">{t(`$3,000`)}</td>
          <td className="p-3">{t(`Минимальные costs`)}</td>
          <td className="p-3">{t(`Близко к lump sum`)}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="font-bold mb-4">
    {t(`Рекомендация для большинства:`)}
  </p>

  <p className="mb-2">
    {t(`• Еженедельно или раз в 2 недели — оптимальный баланс`)}
  </p>
  <p className="mb-12">
    {t(`• Ежемесячно — если budget ограничен или хотите минимизировать gas`)}
  </p>

  <p className="font-bold mb-4">
    {t(`Пример расчёта gas costs:`)}
  </p>

  <p className="font-bold mb-2">
    {t(`Ежедневная DCA (365 покупок):`)}
  </p>

  <p className="mb-1">
    {t(`- Gas: 365 × 1.8 HYPE × $2.50 = $1,642.50/год`)}
  </p>
  <p className="mb-6">
    {t(`- Слишком дорого для бюджета $12,000 ❌`)}
  </p>

  <p className="font-bold mb-2">
    {t(`Еженедельная DCA (52 покупки):`)}
  </p>

  <p className="mb-1">
    {t(`- Gas: 52 × 1.8 HYPE × $2.50 = $234/год`)}
  </p>
  <p className="mb-6">
    {t(`- Приемлемо (1.95% бюджета) ✅`)}
  </p>

  <p className="font-bold mb-2">
    {t(`Ежемесячная DCA (12 покупок):`)}
  </p>

  <p className="mb-1">
    {t(`- Gas: 12 × 1.8 HYPE × $2.50 = $54/год`)}
  </p>
  <p className="mb-12">
    {t(`- Минимально (0.45% бюджета) ✅✅`)}
  </p>

  <h2 className="text-2xl font-bold text-white mt-12 mb-8">
    {t(`Настройка DCA стратегии: пошаговое руководство`)}
  </h2>

  <h3 className="text-xl font-bold text-white mb-6">
    {t(`Шаг 1: Определите параметры стратегии`)}
  </h3>

  <p className="font-bold mb-4">
    {t(`Задайте себе вопросы:`)}
  </p>

  <p className="mb-1">{t(`1. Какой актив покупать?`)}</p>
  <p className="mb-1">{t(`o ETH (стабильный, ликвидный)`)}</p>
  <p className="mb-1">{t(`o BTC (wrapped на Hyperliquid)`)}</p>
  <p className="mb-1">{t(`o HYPE (нативный токен)`)}</p>
  <p className="mb-4">{t(`o Альткоины (более рискованные)`)}</p>

  <p className="mb-1">{t(`2. Сколько инвестировать?`)}</p>
  <p className="mb-1">{t(`3. Правило: инвестируйте только "лишние" деньги`)}</p>
  <p className="mb-1">{t(`4. - Не emergency fund`)}</p>
  <p className="mb-1">{t(`5. - Не деньги на обязательные расходы`)}</p>
  <p className="mb-1">{t(`6. - Горизонт: минимум 12 месяцев`)}</p>
  <p className="mb-1">{t(`7. Как часто покупать?`)}</p>
  <p className="mb-1">{t(`8. Зависит от:`)}</p>
  <p className="mb-1">{t(`9. - Бюджета (малый → ежемесячно, крупный → еженедельно)`)}</p>
  <p className="mb-1">{t(`10. - Волатильности актива (высокая → чаще)`)}</p>
  <p className="mb-1">{t(`11. - Вашей дисциплины (чаще = больше возможностей "пропустить")`)}</p>
  <p className="mb-1">{t(`12. Как долго продолжать?`)}</p>
  <p className="mb-1">{t(`13. Минимум: 6-12 месяцев`)}</p>
  <p className="mb-1">{t(`14. Оптимально: 12-24 месяца`)}</p>
  <p className="mb-12">{t(`15. Долгосрочно: бесконечно (как пенсионный план)`)}</p>

  <p className="font-bold mb-4">
    {t(`Пример стратегии:`)}
  </p>

  <p className="mb-1">{t(`Актив: ETH`)}</p>
  <p className="mb-1">{t(`Бюджет: $10,000`)}</p>
  <p className="mb-1">{t(`Сумма: $200/неделя`)}</p>
  <p className="mb-1">{t(`Частота: каждый понедельник 10:00 UTC`)}</p>
  <p className="mb-1">{t(`Длительность: 50 недель (~1 год)`)}</p>
  <p>{t(`Платформа: Hypertrade (https://ht.xyz`)}</p>

     <h3 className="text-xl font-bold text-white mt-12 mb-6">
    {t(`Шаг 2: Подготовка средств`)}
  </h3>

  <p className="font-bold mb-2">{t(`Опция A: Держать всё в USDC`)}</p>

  <p className="font-bold mb-2">{t(`Преимущества:`)}</p>
  <p className="mb-1">{t(`✅ Деньги готовы к DCA покупкам`)}</p>
  <p className="mb-6">{t(`✅ USDC стабильный (не теряете на волатильности)`)}</p>

  <p className="font-bold mb-2">{t(`Недостатки:`)}</p>
  <p className="mb-6">{t(`❌ Нет yield (0% доход пока ждёте)`)}</p>

  <p className="font-bold mb-2">{t(`Рекомендация:`)}</p>
  <p className="mb-12">{t(`- Подходит для краткосрочной DCA (6-12 месяцев)`)}</p>

  <p className="font-bold mb-2">{t(`Опция B: Стейкинг USDC (если доступен на Hyperliquid)`)}</p>

  <p className="font-bold mb-2">{t(`Преимущества:`)}</p>
  <p className="mb-1">{t(`✅ Получаете yield пока ждёте (3-6% APY)`)}</p>
  <p className="mb-6">{t(`✅ Деньги всё равно в USDC`)}</p>

  <p className="font-bold mb-2">{t(`Недостатки:`)}</p>
  <p className="mb-1">{t(`❌ Нужно unstake перед каждой DCA покупкой`)}</p>
  <p className="mb-6">{t(`❌ Дополнительный gas cost`)}</p>

  <p className="font-bold mb-2">{t(`Рекомендация:`)}</p>
  <p className="mb-12">{t(`- Подходит для долгосрочной DCA (12-24+ месяцев)`)}</p>

  <p className="font-bold mb-2">{t(`Пример:`)}</p>
  <p className="mb-1">{t(`Бюджет DCA: $10,000 USDC`)}</p>

  <p className="font-bold mb-2">{t(`Опция A (держать в кошельке):`)}</p>
  <p className="mb-1">{t(`- Yield: 0%`)}</p>
  <p className="mb-6">{t(`- Через год: $10,000`)}</p>

  <p className="font-bold mb-2">{t(`Опция B (stake USDC @ 5% APY):`)}</p>
  <p className="mb-1">{t(`- Средний баланс за год: $5,000 (половина уже потрачена на DCA)`)}</p>
  <p className="mb-1">{t(`- Yield: $5,000 × 5% = $250/год`)}</p>
  <p className="mb-1">{t(`- Unstake gas: 50 × $2 = $100`)}</p>
  <p className="mb-6">{t(`- Net profit: $150/год`)}</p>

  <p className="font-bold text-green-300 mb-12">{t(`Выгода опции B: +$150 💰`)}</p>

  <h3 className="text-xl font-bold text-white mt-12 mb-6">
    {t(`Шаг 3: Настройка автоматизации (опции)`)}
  </h3>

  <p className="font-bold mb-2">{t(`Опция A: Ручное выполнение`)}</p>
  <p className="mb-1">{t(`Каждый понедельник:`)}</p>
  <p className="mb-1">{t(`1. Открыть https://ht.xyz`)}</p>
  <p className="mb-1">{t(`2. Connect wallet`)}</p>
  <p className="mb-1">{t(`3. Swap $200 USDC → ETH`)}</p>
  <p className="mb-6">{t(`4. Confirm`)}</p>

  <p className="mb-1">{t(`Время: 2-3 минуты/неделю`)}</p>
  <p className="font-bold mb-2">{t(`Плюсы:`)}</p>
  <p className="mb-1">{t(`• ✅ Полный контроль`)}</p>
  <p className="mb-6">{t(`• ✅ Можете скорректировать сумму (если цена особенно привлекательна)`)}</p>

  <p className="font-bold mb-2">{t(`Минусы:`)}</p>
  <p className="mb-1">{t(`• ❌ Требует дисциплины`)}</p>
  <p className="mb-1">{t(`• ❌ Легко “пропустить” неделю`)}</p>
  <p className="mb-6">{t(`• ❌ Подвержены эмоциям (“может подожду, цена упадёт”)`)}</p>

  <p className="font-bold mb-2">{t(`Опция B: Smart Contract автоматизация (для разработчиков)`)}</p>

  <pre className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-6 overflow-x-auto text-sm not-prose">
{t(`// Псевдокод для автоматической DCA
contract DCA_Executor {
  address user;
  uint256 amountPerPeriod = 200 USDC;
  uint256 frequency = 7 days;
  uint256 lastExecution;

  function executeDCA() external {
    require(block.timestamp >= lastExecution + frequency);
    
    // Вызов Hypertrade Router для swap
    IHypertradeRouter.swap(
      tokenIn: USDC,
      tokenOut: ETH,
      amountIn: amountPerPeriod,
      recipient: user
    );
    
    lastExecution = block.timestamp;
  }
}`)}
  </pre>

  <p className="font-bold mb-2">{t(`Плюсы:`)}</p>
  <p className="mb-1">{t(`• ✅ Полная автоматизация (не нужно помнить)`)}</p>
  <p className="mb-1">{t(`• ✅ Эмоции исключены`)}</p>
  <p className="mb-6">{t(`• ✅ Выполняется точно по расписанию`)}</p>

  <p className="font-bold mb-2">{t(`Минусы:`)}</p>
  <p className="mb-1">{t(`• ❌ Требует технических навыков (или использование готового решения)`)}</p>
  <p className="mb-1">{t(`• ❌ Gas costs на deployment контракта`)}</p>
  <p className="mb-6">{t(`• ❌ Нужно держать USDC в контракте (trust issue)`)}</p>

  <p className="font-bold mb-2">{t(`Статус на Hypertrade:`)}</p>
  <p className="mb-1">{t(`• 🔧 В разработке: Hypertrade DCA Bot (планируется Q1 2025)`)}</p>
  <p className="mb-1">{t(`• Пользователи смогут настроить DCA в 3 клика`)}</p>
  <p className="mb-6">{t(`• Контракт будет audit для безопасности`)}</p>


   <h3 className="text-xl font-bold text-white mt-12 mb-6">
    {t(`Опция C: Боты и сервисы (third-party)`)}
  </h3>

  <p className="mb-2">{t(`Для Hyperliquid пока нет специализированных DCA ботов, но можно использовать:`)}</p>

  <p className="font-bold mb-2">{t(`1. Telegram боты (custom):`)}</p>
  <p className="mb-1">{t(`o Напоминают вам о DCA`)}</p>
  <p className="mb-6">{t(`o Вы выполняете вручную через Hypertrade`)}</p>

  <p className="font-bold mb-2">{t(`2. Trading боты с DCA функцией:`)}</p>
  <p className="mb-1">{t(`o Настройка: token, amount, frequency`)}</p>
  <p className="mb-1">{t(`o Бот выполняет автоматически`)}</p>
  <p className="mb-6">{t(`o ⚠️ Проверяйте безопасность бота (audit, репутация)`)}</p>

  <p className="font-bold mb-2">{t(`Рекомендация:`)}</p>
  <p className="mb-1">{t(`• Пока нет официального Hypertrade DCA Bot → используйте ручное выполнение`)}</p>
  <p className="mb-6">{t(`• Устанавливайте календарные напоминания (Google Calendar, iOS Reminders)`)}</p>

  <h3 className="text-xl font-bold text-white mt-12 mb-6">
    {t(`Шаг 4: Отслеживание прогресса`)}
  </h3>

  <p className="font-bold mb-2">{t(`Метрики для трекинга:`)}</p>
  <p className="mb-1">{t(`1. Количество покупок:`)}</p>
  <p className="mb-1">{t(`2. Цель: 52 (еженедельная DCA за год)`)}</p>
  <p className="mb-1">{t(`3. Выполнено: 28 (через 6 месяцев)`)}</p>
  <p className="mb-1">{t(`4. Прогресс: 53.8%`)}</p>
  <p className="mb-1">{t(`5. Средняя цена покупки:`)}</p>
  <p className="mb-1">{t(`6. Total потрачено: $5,600`)}</p>
  <p className="mb-1">{t(`7. Total получено: 2.15 ETH`)}</p>
  <p className="mb-1">{t(`8. Средняя цена: $5,600 / 2.15 = $2,604.65/ETH`)}</p>
  <p className="mb-1">{t(`9. Текущая стоимость портфеля:`)}</p>
  <p className="mb-1">{t(`10. Количество ETH: 2.15`)}</p>
  <p className="mb-1">{t(`11. Текущая цена ETH: $2,800`)}</p>
  <p className="mb-1">{t(`12. Стоимость портфеля: 2.15 × $2,800 = $6,020`)}</p>
  <p className="mb-1">{t(`13. ROI (Return on Investment):`)}</p>
  <p className="mb-1">{t(`14. Вложено: $5,600`)}</p>
  <p className="mb-1">{t(`15. Текущая стоимость: $6,020`)}</p>
  <p className="mb-6">{t(`16. ROI: ($6,020 - $5,600) / $5,600 = 7.5% ✅`)}</p>

  <p className="font-bold mb-2">{t(`Сравнение с Lump Sum:`)}</p>
  <p className="mb-1">{t(`17. Если бы купили всё в начале (6 месяцев назад):`)}</p>
  <p className="mb-1">{t(`18. $5,600 @ $2,500/ETH = 2.24 ETH`)}</p>
  <p className="mb-1">{t(`19. Текущая стоимость: 2.24 × $2,800 = $6,272`)}</p>
  <p className="mb-1">{t(`20.`)}</p>
  <p className="mb-1">{t(`21. DCA результат: $6,020`)}</p>
  <p className="mb-1">{t(`22. Lump Sum результат: $6,272`)}</p>
  <p className="mb-1">{t(`23.`)}</p>
  <p className="mb-1">{t(`24. Разница: -$252 (-4%)`)}</p>
  <p className="mb-6">{t(`25. → В этом случае Lump Sum лучше`)}</p>
  <p className="mb-6">{t(`26. (но DCA снизил риск)`)}</p>

  <h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`Инструменты для трекинга:`)}</h3>
  <p className="mb-1">{t(`• Spreadsheet (Google Sheets / Excel):`)}</p>
  <p className="mb-1">{t(`• Столбцы:`)}</p>
  <p className="mb-6">{t(`• Date | Amount Spent | ETH Price | ETH Bought | Total ETH | Avg Price | Portfolio Value | ROI`)}</p>

  <p className="mb-1">{t(`• Portfolio trackers:`)}</p>
  <p className="mb-1">{t(`o CoinTracker — автоматический импорт транзакций`)}</p>
  <p className="mb-1">{t(`o Delta / Blockfolio — мобильные приложения`)}</p>
  <p className="mb-6">{t(`o Hypertrade Dashboard (если доступно) — встроенная аналитика`)}</p>

  <p className="mb-1">{t(`• DCA калькуляторы:`)}</p>
  <p className="mb-1">{t(`o dcabtc.com — визуализация исторических DCA результатов`)}</p>
  <p className="mb-6">{t(`o costavg.com — калькулятор DCA для любого актива`)}</p>

  <h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`DCA vs. Lump Sum: когда что лучше`)}</h3>
  <p className="font-bold mb-2">{t(`Сравнение стратегий`)}</p>

  <div className="overflow-x-auto mb-12 not-prose">
    <table className="w-full text-left border-collapse text-sm">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="p-4 text-gray-400 font-medium">{t(`Параметр`)}</th>
          <th className="p-4 text-gray-400 font-medium">{t(`DCA (Усреднение)`)}</th>
          <th className="p-4 text-gray-400 font-medium">{t(`Lump Sum (Всё сразу)`)}</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-800">
          <td className="p-4 text-white">{t(`Риск`)}</td>
          <td className="p-4 text-gray-300">{t(`Низкий`)}</td>
          <td className="p-4 text-gray-300">{t(`Высокий`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4 text-white">{t(`Эмоциональный стресс`)}</td>
          <td className="p-4 text-gray-300">{t(`Низкий`)}</td>
          <td className="p-4 text-gray-300">{t(`Высокий`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4 text-white">{t(`Средняя доходность`)}</td>
          <td className="p-4 text-gray-300">{t(`Средняя`)}</td>
          <td className="p-4 text-gray-300">{t(`Выше (в bull market)`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4 text-white">{t(`Защита от падений`)}</td>
          <td className="p-4 text-gray-300">{t(`Высокая`)}</td>
          <td className="p-4 text-gray-300">{t(`Нет`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4 text-white">{t(`Простота`)}</td>
          <td className="p-4 text-gray-300">{t(`Требует дисциплины`)}</td>
          <td className="p-4 text-gray-300">{t(`Проще (один раз)`)}</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4 text-white">{t(`Gas costs`)}</td>
          <td className="p-4 text-gray-300">{t(`Выше (много транзакций)`)}</td>
          <td className="p-4 text-gray-300">{t(`Ниже (одна транзакция)`)}</td>
        </tr>
        <tr>
          <td className="p-4 text-white">{t(`Лучше в`)}</td>
          <td className="p-4 text-gray-300">{t(`Bear / Sideways markets`)}</td>
          <td className="p-4 text-gray-300">{t(`Bull markets`)}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`Исторический анализ (на примере Bitcoin)`)}</h3>

  <p className="font-bold mb-2">{t(`Сценарий 1: Bull Market (2020-2021)`)}</p>
  <p className="mb-1">{t(`Бюджет: $10,000`)}</p>
  <p className="mb-1">{t(`Период: январь 2020 - декабрь 2020`)}</p>

  <p className="font-bold mb-1">{t(`Lump Sum (январь 2020 @ $7,200):`)}</p>
  <p className="mb-1">{t(`- Купили: 1.389 BTC`)}</p>
  <p className="mb-1">{t(`- Декабрь 2020: BTC @ $29,000`)}</p>
  <p className="mb-1">{t(`- Стоимость: $40,281`)}</p>
  <p className="mb-6">{t(`- ROI: +302.8% 🚀`)}</p>

  <p className="font-bold mb-1">{t(`DCA (ежемесячно $833):`)}</p>
  <p className="mb-1">{t(`- Средняя цена: ~$10,500`)}</p>
  <p className="mb-1">{t(`- Купили: 0.952 BTC`)}</p>
  <p className="mb-1">{t(`- Декабрь 2020: BTC @ $29,000`)}</p>
  <p className="mb-6">{t(`- Стоимость: $27,608`)}</p>
  <p className="mb-6">{t(`- ROI: +176.1% 📈`)}</p>

  <p className="mb-12">{t(`Вывод: Lump Sum лучше на 126.7% (Bull market = Lump Sum wins)`)}</p>

  <p className="font-bold mb-2">{t(`Сценарий 2: Bear Market (2022)`)}</p>
  <p className="mb-1">{t(`Бюджет: $10,000`)}</p>
  <p className="mb-1">{t(`Период: январь 2022 - декабрь 2022`)}</p>

  <p className="font-bold mb-1">{t(`Lump Sum (январь 2022 @ $47,000):`)}</p>
  <p className="mb-1">{t(`- Купили: 0.213 BTC`)}</p>
  <p className="mb-1">{t(`- Декабрь 2022: BTC @ $16,500`)}</p>
  <p className="mb-1">{t(`- Стоимость: $3,515`)}</p>
  <p className="mb-6">{t(`- ROI: -64.9% 💀`)}</p>

  <p className="mb-1">{t(`Но:`)}</p>
  <p className="mb-1">{t(`- DCA снижает риск на 35-50%`)}</p>
  <p className="mb-1">{t(`- DCA защищает от "плохого тайминга" (покупка на пике)`)}</p>
  <p className="mb-6">{t(`- DCA психологически легче выполнять`)}</p>

  <h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`Когда использовать DCA:`)}</h3>
  <p className="mb-1">{t(`✅ У вас регулярный доход (зарплата, бизнес):`)}</p>
  <p className="mb-1">{t(`Каждый месяц откладываете часть зарплаты на инвестиции`)}</p>
  <p className="mb-6">{t(`→ DCA естественная стратегия`)}</p>

  <p className="mb-1">{t(`✅ Рынок волатильный / неопределённый:`)}</p>
  <p className="mb-1">{t(`Не уверены, растёт или падает`)}</p>
  <p className="mb-6">{t(`→ DCA усредняет риск`)}</p>

  <p className="mb-1">{t(`✅ Вы новичок в крипто:`)}</p>
  <p className="mb-1">{t(`Боитесь "купить на пике"`)}</p>
  <p className="mb-6">{t(`→ DCA снижает эмоциональный стресс`)}</p>

  <p className="mb-1">{t(`✅ У вас крупная сумма, но боитесь рисковать:`)}</p>
  <p className="mb-1">{t(`$50,000 готовы инвестировать`)}</p>
  <p className="mb-1">{t(`Но рынок на ATH (all-time high)`)}</p>
  <p className="mb-6">{t(`→ DCA за 12-24 месяца снижает риск падения`)}</p>

  <h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`Когда использовать Lump Sum:`)}</h3>
  <p className="mb-1">{t(`✅ Явный bear market (дно):`)}</p>
  <p className="mb-1">{t(`Bitcoin упал на 70-80% от ATH`)}</p>
  <p className="mb-6">{t(`Все паникуют → лучшее время для Lump Sum`)}</p>

  <p className="mb-1">{t(`✅ У вас есть conviction в долгосрочный рост:`)}</p>
  <p className="mb-1">{t(`Вы верите, что актив вырастет x10`)}</p>
  <p className="mb-6">{t(`→ Lump Sum даст максимальную прибыль`)}</p>

  <p className="mb-1">{t(`✅ Минимизация gas costs критична:`)}</p>
  <p className="mb-1">{t(`Малый бюджет ($500-1,000)`)}</p>
  <p className="mb-6">{t(`→ DCA будет "съедена" gas fees → Лучше сделать 1-2 Lump Sum покупки`)}</p>

  <h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`Продвинутые DCA стратегии`)}</h3>
  <p className="font-bold mb-2">{t(`1. Value-Based DCA (на основе оценки)`)}</p>
  <p className="mb-1">{t(`Идея: покупать больше, когда актив “дешёвый”, и меньше, когда “дорогой”.`)}</p>
  <p className="mb-1">{t(`Метрики для оценки:`)}</p>
  <p className="mb-1">{t(`• RSI (Relative Strength Index):`)}</p>
  <p className="mb-1">{t(`• RSI < 30 → "Oversold" (перепродано) → покупайте 1.5× больше`)}</p>
  <p className="mb-1">{t(`• RSI 30-70 → Нормально → покупайте обычную сумму`)}</p>
  <p className="mb-1">{t(`• RSI > 70 → "Overbought" (перекуплено) → покупайте 0.5× меньше`)}</p>
  <p className="mb-1">{t(`• Цена относительно MA (Moving Average):`)}</p>
  <p className="mb-1">{t(`• Цена < 200-day MA → Ниже долгосрочного тренда → покупайте больше`)}</p>
  <p className="mb-1">{t(`• Цена > 200-day MA → Выше тренда → покупайте меньше`)}</p>
  <p className="mb-6">{t(`Пример: Базовая DCA: $1,000/месяц`)}</p>

  <p className="mb-1">{t(`Январь: ETH @ $2,800, RSI = 65 → купить $1,000`)}</p>
  <p className="mb-1">{t(`Февраль: ETH @ $2,200, RSI = 28 → купить $1,500 (oversold!)`)}</p>
  <p className="mb-1">{t(`Март: ETH @ $3,500, RSI = 78 → купить $500 (overbought)`)}</p>
  <p className="mb-1">{t(`Апрель: ETH @ $2,600, RSI = 52 → купить $1,000`)}</p>
  <p className="mb-6">{t(`Итого за 4 месяца: $4,000 (как и при обычной DCA) Но: больше ETH куплено на низах → лучшая средняя цена`)}</p>

  <p className="font-bold mb-2">{t(`2. DCA + Rebalancing`)}</p>
  <p className="mb-1">{t(`Идея: DCA в несколько активов с периодической ребалансировкой портфеля.`)}</p>
  <p className="mb-1">{t(`Пример портфеля:`)}</p>
  <p className="mb-1">{t(`Целевая аллокация:`)}</p>
  <p className="mb-1">{t(`- 50% ETH`)}</p>
  <p className="mb-1">{t(`- 30% BTC`)}</p>
  <p className="mb-6">{t(`- 20% HYPE`)}</p>

  <p className="mb-1">{t(`Месячный бюджет: $1,000 → $500 ETH, $300 BTC, $200 HYPE`)}</p>
  <p className="mb-1">{t(`Rebalancing раз в квартал:`)}</p>
  <p className="mb-1">{t(`Через 3 месяца:`)}</p>
  <p className="mb-1">{t(`ETH вырос на 40% → теперь 60% портфеля`)}</p>
  <p className="mb-1">{t(`BTC упал на 10% → теперь 25% портфеля`)}</p>
  <p className="mb-1">{t(`HYPE стабильный → 15% портфеля`)}</p>
  <p className="mb-1">{t(`Rebalancing:`)}</p>
  <p className="mb-1">{t(`- Продать часть ETH`)}</p>
  <p className="mb-1">{t(`- Купить больше BTC и HYPE`)}</p>
  <p className="mb-6">{t(`- Восстановить 50/30/20 аллокацию`)}</p>

  <p className="mb-1">{t(`Следующие 3 месяца DCA:`)}</p>
  <p className="mb-6">{t(`- Продолжать $500/$300/$200 покупки`)}</p>
  <p className="mb-1">{t(`Преимущества:`)}</p>
  <p className="mb-1">{t(`• Автоматически “sell high, buy low” (продаёте выросший актив, покупаете упавший)`)}</p>
  <p className="mb-1">{t(`• Диверсификация снижает риск`)}</p>
  <p className="mb-1">{t(`• Дисциплинированный подход`)}</p>
  <p className="mb-6">{t(`3. Leveraged DCA (для опытных)`)}</p>

  <p className="mb-1">{t(`⚠️ ВНИМАНИЕ: Высокий риск! Только для опытных трейдеров.`)}</p>
  <p className="mb-1">{t(`Идея: использовать leverage (плечо) для увеличения позиции DCA.`)}</p>
  <p className="mb-1">{t(`Пример:`)}</p>
  <p className="mb-1">{t(`Обычная DCA: $1,000/месяц → покупаете ETH spot`)}</p>
  <p className="mb-1">{t(`Leveraged DCA (2× leverage): $1,000/месяц → открываете long позицию 2× на HyperCore Perpetuals`)}</p>
  <p className="mb-1">{t(`→ Эффект как если бы купили на $2,000`)}</p>
  <p className="mb-1">{t(`Если ETH вырос на 50%:`)}</p>
  <p className="mb-1">{t(`Spot DCA: +50% доходность`)}</p>
  <p className="mb-6">{t(`Leveraged DCA: +100% доходность (2× leverage)`)}</p>
  <p className="mb-1">{t(`Если ETH упал на 30%:`)}</p>
  <p className="mb-1">{t(`Spot DCA: -30% убыток`)}</p>
  <p className="mb-6">{t(`Leveraged DCA: -60% убыток (или ликвидация!)`)}</p>

  <p className="mb-1">{t(`Риски:`)}</p>
  <p className="mb-1">{t(`• ❌ Ликвидация при большом падении`)}</p>
  <p className="mb-1">{t(`• ❌ Funding fees (платежи каждые 8 часов)`)}</p>
  <p className="mb-1">{t(`• ❌ Эмоциональный стресс`)}</p>
  <p className="mb-6">{t(`Рекомендация: НЕ используйте leverage для DCA, если не понимаете риски полностью.`)}</p>


   <h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`4. DCA с Take-Profit уровнями`)}</h3>

  <p className="mb-1">{t(`Идея: накапливать через DCA, но фиксировать прибыль на определённых уровнях.`)}</p>
  <p className="mb-6">{t(`Стратегия: DCA ETH в течение 12 месяцев`)}</p>

  <p className="font-bold mb-2">{t(`Take-Profit targets:`)}</p>
  <p className="mb-1">{t(`- Если ETH +50% от средней цены → продать 25% позиции`)}</p>
  <p className="mb-1">{t(`- Если ETH +100% → продать ещё 25%`)}</p>
  <p className="mb-1">{t(`- Если ETH +200% → продать ещё 25%`)}</p>
  <p className="mb-6">{t(`- Оставшиеся 25% → hold long-term`)}</p>

  <p className="font-bold mb-2">{t(`Пример:`)}</p>
  <p className="mb-1">{t(`Средняя цена DCA: $2,500`)}</p>
  <p className="mb-1">{t(`Накоплено: 10 ETH`)}</p>

  <p className="mb-1">{t(`ETH достиг $3,750 (+50%):`)}</p>
  <p className="mb-1">{t(`→ Продать 2.5 ETH за $9,375`)}</p>
  <p className="mb-6">{t(`→ Зафиксировать прибыль $3,125`)}</p>

  <p className="mb-1">{t(`ETH достиг $5,000 (+100%):`)}</p>
  <p className="mb-1">{t(`→ Продать ещё 2.5 ETH за $12,500`)}</p>
  <p className="mb-6">{t(`→ Зафиксировать прибыль $6,250`)}</p>

  <p className="mb-1">{t(`Итого зафиксировано: $9,375 прибыли`)}</p>
  <p className="mb-1">{t(`Осталось: 5 ETH для дальнейшего роста`)}</p>

  <p className="font-bold mb-2">{t(`Преимущества:`)}</p>
  <p className="mb-1">{t(`• Снижаете риск (“take some chips off the table”)`)}</p>
  <p className="mb-1">{t(`• Психологически легче держать оставшуюся позицию`)}</p>
  <p className="mb-6">{t(`• Балансируете между HODL и profit-taking`)}</p>

  <hr className="border-gray-700 my-8" />

  <h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`Калькулятор DCA: практические расчёты`)}</h3>

  <p className="font-bold mb-2">{t(`Пример 1: Консервативная стратегия (12 месяцев)`)}</p>
  <p className="mb-1">{t(`Параметры:`)}</p>
  <p className="mb-1">{t(`Актив: ETH`)}</p>
  <p className="mb-1">{t(`Бюджет: $6,000`)}</p>
  <p className="mb-1">{t(`Сумма: $500/месяц`)}</p>
  <p className="mb-1">{t(`Частота: ежемесячно (1 число)`)}</p>
  <p className="mb-1">{t(`Длительность: 12 месяцев`)}</p>

  <p className="mb-1">{t(`Симуляция (гипотетические цены):`)}</p>
  <div className="overflow-x-auto mb-6">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="p-2 text-gray-400 font-medium">{t(`Месяц`)}</th>
          <th className="p-2 text-gray-400 font-medium">{t(`Цена ETH`)}</th>
          <th className="p-2 text-gray-400 font-medium">{t(`Потрачено`)}</th>
          <th className="p-2 text-gray-400 font-medium">{t(`ETH куплено`)}</th>
          <th className="p-2 text-gray-400 font-medium">{t(`Total ETH`)}</th>
          <th className="p-2 text-gray-400 font-medium">{t(`Средняя цена`)}</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr><td className="p-2 text-white">{t(`Янв`)}</td><td className="p-2 text-gray-300">{t(`$2,500`)}</td><td className="p-2 text-gray-300">{t(`$500`)}</td><td className="p-2 text-gray-300">{t(`0.2000`)}</td><td className="p-2 text-gray-300">{t(`0.2000`)}</td><td className="p-2 text-gray-300">{t(`$2,500`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`Фев`)}</td><td className="p-2 text-gray-300">{t(`$2,300`)}</td><td className="p-2 text-gray-300">{t(`$500`)}</td><td className="p-2 text-gray-300">{t(`0.2174`)}</td><td className="p-2 text-gray-300">{t(`0.4174`)}</td><td className="p-2 text-gray-300">{t(`$2,398`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`Мар`)}</td><td className="p-2 text-gray-300">{t(`$2,100`)}</td><td className="p-2 text-gray-300">{t(`$500`)}</td><td className="p-2 text-gray-300">{t(`0.2381`)}</td><td className="p-2 text-gray-300">{t(`0.6555`)}</td><td className="p-2 text-gray-300">{t(`$2,288`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`Апр`)}</td><td className="p-2 text-gray-300">{t(`$2,400`)}</td><td className="p-2 text-gray-300">{t(`$500`)}</td><td className="p-2 text-gray-300">{t(`0.2083`)}</td><td className="p-2 text-gray-300">{t(`0.8638`)}</td><td className="p-2 text-gray-300">{t(`$2,315`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`Май`)}</td><td className="p-2 text-gray-300">{t(`$2,800`)}</td><td className="p-2 text-gray-300">{t(`$500`)}</td><td className="p-2 text-gray-300">{t(`0.1786`)}</td><td className="p-2 text-gray-300">{t(`1.0424`)}</td><td className="p-2 text-gray-300">{t(`$2,396`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`Июн`)}</td><td className="p-2 text-gray-300">{t(`$3,000`)}</td><td className="p-2 text-gray-300">{t(`$500`)}</td><td className="p-2 text-gray-300">{t(`0.1667`)}</td><td className="p-2 text-gray-300">{t(`1.2091`)}</td><td className="p-2 text-gray-300">{t(`$2,478`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`Июл`)}</td><td className="p-2 text-gray-300">{t(`$2,700`)}</td><td className="p-2 text-gray-300">{t(`$500`)}</td><td className="p-2 text-gray-300">{t(`0.1852`)}</td><td className="p-2 text-gray-300">{t(`1.3943`)}</td><td className="p-2 text-gray-300">{t(`$2,513`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`Авг`)}</td><td className="p-2 text-gray-300">{t(`$2,600`)}</td><td className="p-2 text-gray-300">{t(`$500`)}</td><td className="p-2 text-gray-300">{t(`0.1923`)}</td><td className="p-2 text-gray-300">{t(`1.5866`)}</td><td className="p-2 text-gray-300">{t(`$2,522`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`Сен`)}</td><td className="p-2 text-gray-300">{t(`$2,900`)}</td><td className="p-2 text-gray-300">{t(`$500`)}</td><td className="p-2 text-gray-300">{t(`0.1724`)}</td><td className="p-2 text-gray-300">{t(`1.7590`)}</td><td className="p-2 text-gray-300">{t(`$2,559`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`Окт`)}</td><td className="p-2 text-gray-300">{t(`$3,200`)}</td><td className="p-2 text-gray-300">{t(`$500`)}</td><td className="p-2 text-gray-300">{t(`0.1563`)}</td><td className="p-2 text-gray-300">{t(`1.9153`)}</td><td className="p-2 text-gray-300">{t(`$2,610`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`Ноя`)}</td><td className="p-2 text-gray-300">{t(`$3,400`)}</td><td className="p-2 text-gray-300">{t(`$500`)}</td><td className="p-2 text-gray-300">{t(`0.1471`)}</td><td className="p-2 text-gray-300">{t(`2.0624`)}</td><td className="p-2 text-gray-300">{t(`$2,665`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`Дек`)}</td><td className="p-2 text-gray-300">{t(`$3,100`)}</td><td className="p-2 text-gray-300">{t(`$500`)}</td><td className="p-2 text-gray-300">{t(`0.1613`)}</td><td className="p-2 text-gray-300">{t(`2.2237`)}</td><td className="p-2 text-gray-300">{t(`$2,698`)}</td></tr>
      </tbody>
    </table>
  </div>

  <p className="mb-1">{t(`Итого:`)}</p>
  <p className="mb-1">{t(`Вложено: $6,000`)}</p>
  <p className="mb-1">{t(`Накоплено: 2.2237 ETH`)}</p>
  <p className="mb-1">{t(`Средняя цена покупки: $2,698/ETH`)}</p>
  <p className="mb-1">{t(`Текущая цена (декабрь): $3,100`)}</p>
  <p className="mb-1">{t(`Стоимость портфеля: 2.2237 × $3,100 = $6,893`)}</p>
  <p className="mb-6">{t(`ROI: +14.9% ✅`)}</p>

  <p className="mb-1">{t(`Сравнение с Lump Sum (январь):`)}</p>
  <p className="mb-1">{t(`Lump Sum @ $2,500:`)}</p>
  <p className="mb-1">{t(`$6,000 / $2,500 = 2.4 ETH`)}</p>
  <p className="mb-1">{t(`Стоимость (декабрь): 2.4 × $3,100 = $7,440`)}</p>
  <p className="mb-6">{t(`ROI: +24.0%`)}</p>

  <p className="mb-6">{t(`Разница: Lump Sum лучше на +9.1% Но: DCA снизил risk (не зависело от удачи "купить в начале")`)}</p>

  <p className="font-bold mb-2">{t(`Пример 2: Агрессивная стратегия (еженедельная DCA)`)}</p>
  <p className="mb-1">{t(`Параметры:`)}</p>
  <p className="mb-1">{t(`Актив: ETH`)}</p>
  <p className="mb-1">{t(`Бюджет: $10,000`)}</p>
  <p className="mb-1">{t(`Сумма: $200/неделя`)}</p>
  <p className="mb-1">{t(`Частота: каждый понедельник`)}</p>
  <p className="mb-1">{t(`Длительность: 50 недель`)}</p>

  <p className="mb-1">{t(`Симуляция (первые 12 недель):`)}</p>
  <div className="overflow-x-auto mb-6">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="p-2 text-gray-400 font-medium">{t(`Неделя`)}</th>
          <th className="p-2 text-gray-400 font-medium">{t(`Цена ETH`)}</th>
          <th className="p-2 text-gray-400 font-medium">{t(`Потрачено`)}</th>
          <th className="p-2 text-gray-400 font-medium">{t(`ETH куплено`)}</th>
          <th className="p-2 text-gray-400 font-medium">{t(`Total ETH`)}</th>
          <th className="p-2 text-gray-400 font-medium">{t(`Средняя цена`)}</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr><td className="p-2 text-white">{t(`1`)}</td><td className="p-2 text-gray-300">{t(`$2,500`)}</td><td className="p-2 text-gray-300">{t(`$200`)}</td><td className="p-2 text-gray-300">{t(`0.0800`)}</td><td className="p-2 text-gray-300">{t(`0.0800`)}</td><td className="p-2 text-gray-300">{t(`$2,500`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`2`)}</td><td className="p-2 text-gray-300">{t(`$2,450`)}</td><td className="p-2 text-gray-300">{t(`$200`)}</td><td className="p-2 text-gray-300">{t(`0.0816`)}</td><td className="p-2 text-gray-300">{t(`0.1616`)}</td><td className="p-2 text-gray-300">{t(`$2,475`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`3`)}</td><td className="p-2 text-gray-300">{t(`$2,600`)}</td><td className="p-2 text-gray-300">{t(`$200`)}</td><td className="p-2 text-gray-300">{t(`0.0769`)}</td><td className="p-2 text-gray-300">{t(`0.2385`)}</td><td className="p-2 text-gray-300">{t(`$2,516`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`4`)}</td><td className="p-2 text-gray-300">{t(`$2,400`)}</td><td className="p-2 text-gray-300">{t(`$200`)}</td><td className="p-2 text-gray-300">{t(`0.0833`)}</td><td className="p-2 text-gray-300">{t(`0.3218`)}</td><td className="p-2 text-gray-300">{t(`$2,486`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`5`)}</td><td className="p-2 text-gray-300">{t(`$2,300`)}</td><td className="p-2 text-gray-300">{t(`$200`)}</td><td className="p-2 text-gray-300">{t(`0.0870`)}</td><td className="p-2 text-gray-300">{t(`0.4088`)}</td><td className="p-2 text-gray-300">{t(`$2,445`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`6`)}</td><td className="p-2 text-gray-300">{t(`$2,500`)}</td><td className="p-2 text-gray-300">{t(`$200`)}</td><td className="p-2 text-gray-300">{t(`0.0800`)}</td><td className="p-2 text-gray-300">{t(`0.4888`)}</td><td className="p-2 text-gray-300">{t(`$2,455`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`7`)}</td><td className="p-2 text-gray-300">{t(`$2,700`)}</td><td className="p-2 text-gray-300">{t(`$200`)}</td><td className="p-2 text-gray-300">{t(`0.0741`)}</td><td className="p-2 text-gray-300">{t(`0.5629`)}</td><td className="p-2 text-gray-300">{t(`$2,489`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`8`)}</td><td className="p-2 text-gray-300">{t(`$2,800`)}</td><td className="p-2 text-gray-300">{t(`$200`)}</td><td className="p-2 text-gray-300">{t(`0.0714`)}</td><td className="p-2 text-gray-300">{t(`0.6343`)}</td><td className="p-2 text-gray-300">{t(`$2,524`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`9`)}</td><td className="p-2 text-gray-300">{t(`$2,600`)}</td><td className="p-2 text-gray-300">{t(`$200`)}</td><td className="p-2 text-gray-300">{t(`0.0769`)}</td><td className="p-2 text-gray-300">{t(`0.7112`)}</td><td className="p-2 text-gray-300">{t(`$2,532`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`10`)}</td><td className="p-2 text-gray-300">{t(`$2,550`)}</td><td className="p-2 text-gray-300">{t(`$200`)}</td><td className="p-2 text-gray-300">{t(`0.0784`)}</td><td className="p-2 text-gray-300">{t(`0.7896`)}</td><td className="p-2 text-gray-300">{t(`$2,533`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`11`)}</td><td className="p-2 text-gray-300">{t(`$2,700`)}</td><td className="p-2 text-gray-300">{t(`$200`)}</td><td className="p-2 text-gray-300">{t(`0.0741`)}</td><td className="p-2 text-gray-300">{t(`0.8637`)}</td><td className="p-2 text-gray-300">{t(`$2,548`)}</td></tr>
        <tr><td className="p-2 text-white">{t(`12`)}</td><td className="p-2 text-gray-300">{t(`$2,900`)}</td><td className="p-2 text-gray-300">{t(`$200`)}</td><td className="p-2 text-gray-300">{t(`0.0690`)}</td><td className="p-2 text-gray-300">{t(`0.9327`)}</td><td className="p-2 text-gray-300">{t(`$2,576`)}</td></tr>
      </tbody>
    </table>
  </div>

 <p className="mb-1">{t(`После 50 недель (полный DCA):`)}</p>
<p className="mb-1">{t(`Вложено: $10,000`)}</p>
<p className="mb-1">{t(`Накоплено: ~3.85 ETH (зависит от цен)`)}</p>
<p className="mb-1">{t(`Средняя цена: ~$2,597/ETH`)}</p>
<p className="mb-1">{t(`Текущая цена: $3,000`)}</p>
<p className="mb-1">{t(`Стоимость портфеля: 3.85 × $3,000 = $11,550`)}</p>
<p className="mb-6">{t(`ROI: +15.5% ✅`)}</p>

<p className="mb-1">{t(`Gas costs: 50 × $4.50 = $225`)}</p>
<p className="mb-6">{t(`Net ROI: +13.3%`)}</p>

<p className="font-bold mb-2">{t(`Преимущества еженедельной DCA:`)}</p>
<p className="mb-1">{t(`• Больше точек входа → лучшее усреднение`)}</p>
<p className="mb-1">{t(`• Защита от недельной волатильности`)}</p>
<p className="mb-6">{t(`• Дисциплина (каждый понедельник = привычка`)}</p>

<h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`Психология DCA: как оставаться дисциплинированным`)}</h3>

<h4 className="text-lg font-bold text-red-400 mt-8 mb-2">{t(`❌ Ошибка 1: Пропуск покупок`)}</h4>
<p className="mb-2">{t(`Проблема:`)}</p>
<p className="mb-6">{t(`"Цена выросла на 20%, подожду коррекции"`)}</p>
<p className="mb-1">{t(`→ Коррекции нет → цена растёт дальше`)}</p>
<p className="mb-1">{t(`→ Пропустили несколько недель DCA`)}</p>
<p className="mb-1 mb-6">{t(`→ Средняя цена входа хуже`)}</p>
<p className="font-bold mb-1">{t(`Решение:`)}</p>
<p className="mb-6">{t(`DCA = дисциплина. Покупайте ВСЕГДА по расписанию. Если очень хотите "подождать" → уменьшите сумму, но НЕ пропускайте.`)}</p>
<hr className="border-gray-700 my-6" />

<h4 className="text-lg font-bold text-red-400 mt-8 mb-2">{t(`❌ Ошибка 2: Увеличение суммы на “дипах”`)}</h4>
<p className="mb-2">{t(`Проблема:`)}</p>
<p className="mb-6">{t(`"Цена упала на 30%! Куплю в 3 раза больше!"`)}</p>
<p className="mb-1">{t(`→ Потратили весь бюджет раньше срока`)}</p>
<p className="mb-1">{t(`→ Если цена упадёт ещё → нечем покупать`)}</p>
<p className="font-bold mb-1">{t(`Решение:`)}</p>
<p className="mb-6">{t(`Придерживайтесь плана. Если хотите "покупать дипы": → Используйте Value-Based DCA (заранее запланируйте 1.5× на RSI < 30) → Но не тратьте весь бюджет импульсивно`)}</p>
<hr className="border-gray-700 my-6" />

<h4 className="text-lg font-bold text-red-400 mt-8 mb-2">{t(`❌ Ошибка 3: Паническая продажа`)}</h4>
<p className="mb-2">{t(`Проблема:`)}</p>
<p className="mb-6">{t(`Рынок падает -50% от вашей средней цены "Всё пропало! Продам пока не упало ещё больше"`)}</p>
<p className="mb-1">{t(`→ Продали в минусе`)}</p>
<p className="mb-1">{t(`→ Через месяц рынок восстановился`)}</p>
<p className="font-bold mb-1">{t(`Решение:`)}</p>
<p className="mb-6">{t(`DCA = долгосрочная стратегия (минимум 12 месяцев). Если продаёте в минусе → вся DCA была бесполезна. Установите цель: "Продам только через X лет или при Y% прибыли"`)}</p>
<hr className="border-gray-700 my-6" />

<h4 className="text-lg font-bold text-red-400 mt-8 mb-2">{t(`❌ Ошибка 4: Попытка “улучшить” стратегию`)}</h4>
<p className="mb-2">{t(`Проблема:`)}</p>
<p className="mb-6">{t(`"Может лучше покупать по вторникам? Или раз в 10 дней?" → Постоянно меняете параметры → Нет последовательности → нет усреднения`)}</p>
<p className="font-bold mb-1">{t(`Решение:`)}</p>
<p className="mb-6">{t(`Выберите параметры ОДИН РАЗ в начале. Придерживайтесь 6-12 месяцев. Только потом анализируйте и корректируйте.`)}</p>
<hr className="border-gray-700 my-6" />

<h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`Mindset для успешной DCA`)}</h3>
<p className="mb-2">{t(`✅ Принцип 1: “Set it and forget it”`)}</p>
<p className="mb-6">{t(`Настройте DCA: - Актив: ETH - Сумма: $500/месяц - День: 1 число`)}</p>
<p className="mb-6">{t(`Установите календарное напоминание → Выполняйте механически → НЕ анализируйте "стоит ли покупать сегодня"`)}</p>

<p className="mb-2">{t(`✅ Принцип 2: “Time in the market > Timing the market”`)}</p>
<p className="mb-6">{t(`Невозможно предсказать дно → Лучше быть в рынке регулярно → Чем пытаться "поймать" идеальный момент`)}</p>

<p className="mb-2">{t(`✅ Принцип 3: “Drawdowns — это возможность”`)}</p>
<p className="mb-6">{t(`Рынок упал -30%? → Отлично! Вы покупаете больше токенов за ту же сумму → Когда рынок восстановится → вы в большей прибыли`)}</p>

<p className="mb-2">{t(`✅ Принцип 4: “Не проверяйте портфель каждый день”`)}</p>
<p className="mb-6">{t(`Частая проверка → эмоциональные решения → "Продам, цена упала" → "Куплю больше, цена растёт" Проверяйте раз в месяц (когда делаете DCA) → Оцените прогресс → Продолжайте по плану`)}</p>
<hr className="border-gray-700 my-6" />

<h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`Заключение: DCA с Hypertrade — оптимальная стратегия`)}</h3>
<p className="mb-6">{t(`Почему DCA работает:`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`✅ Снижает риск плохого тайминга (-23% защита в bear markets)`)}</li>
  <li>{t(`✅ Усредняет цену входа (покупаете больше на низах)`)}</li>
  <li>{t(`✅ Дисциплинирует (регулярные покупки без эмоций)`)}</li>
  <li>{t(`✅ Психологически легче (нет стресса “поймать дно”)`)}</li>
  <li>{t(`✅ Подходит для регулярного дохода (зарплата → DCA)`)}</li>
</ul>

<p className="mb-6">{t(`Почему Hypertrade для DCA:`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`✅ 0% platform fee → вся экономия вам`)}</li>
  <li>{t(`✅ Лучшие курсы через агрегацию DEX`)}</li>
  <li>{t(`✅ Минимальный price impact (split-routing)`)}</li>
  <li>{t(`✅ Invisium Simulations → точность 99.9%`)}</li>
  <li>{t(`✅ Низкие gas costs → оптимизация каждой транзакции`)}</li>
</ul>

<p className="mb-6">{t(`Рекомендованная стратегия:`)}</p>
<p className="mb-6">{t(`Для большинства инвесторов: Актив: ETH (или BTC, HYPE) Бюджет: 10-20% ежемесячного дохода Частота: ежемесячно (минимальный gas cost) Длительность: минимум 12 месяцев, оптимально 24-36 Платформа: Hypertrade (https://ht.xyz) Mindset: "Set it and forget it"`)}</p>

<p className="mb-6">{t(`Начните DCA сегодня:`)}</p>
<ol className="list-decimal list-inside mb-6 text-gray-300">
  <li>{t(`💰 Определите бюджет (сумму, которую готовы инвестировать регулярно)`)}</li>
  <li>{t(`📅 Выберите частоту (еженедельно/ежемесячно)`)}</li>
  <li>{t(`🎯 Выберите актив (ETH, BTC, HYPE)`)}</li>
  <li>{t(`🔗 Используйте Hypertrade: https://ht.xyz`)}</li>
  <li>{t(`⏰ Установите напоминание (календарь)`)}</li>
  <li>{t(`🚀 Начните первую покупку (прямо сейчас!) Следующая покупка через неделю/месяц. Повторяйте. Profit. 💰`)}</li>
</ol>

<h3 className="text-xl font-bold text-white mt-12 mb-6">{t(`Ресурсы`)}</h3>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`📊 Калькуляторы: DCA Bitcoin Calculator: https://dcabtc.com, Cost Averaging Calculator: https://costavg.com`)}</li>
  <li>{t(`📚 Исследования: Vanguard: “Dollar-cost averaging just means taking risk later”, CoinGecko Research: “DCA vs Lump Sum in Crypto Markets”`)}</li>
  <li>{t(`🛠️ Инструменты: Hypertrade (DCA execution): https://ht.xyz, CoinTracker (portfolio tracking): https://cointracker.io, TradingView (price alerts): https://tradingview.com`)}</li>
  <li>{t(`💬 Сообщество: Hypertrade Discord: https://discord.gg/hypertrade, r/DCA (Reddit): обсуждения DCA стратегий, Twitter: @Hypertrade_xyz`)}</li>
</ul>

        </article>
    </div>
        

   

    </section>
  );
};
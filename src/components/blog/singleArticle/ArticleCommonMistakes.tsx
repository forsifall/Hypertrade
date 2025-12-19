"use client"
import BackButton from "@/components/ui/BackButton";
import { AlertTriangle, Shield, Zap, CheckCircle, XCircle, Lock, DollarSign, Settings, Eye, FileText, Search, BarChart, Users, Clock, Calendar, Fingerprint, Wallet } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { Language } from "@/app/translations";
import { useTranslation } from "react-i18next";

// --- Single Blog Article Component (Common Mistakes) ---
export const ArticleCommonMistakes = ({lang}:{lang:Language}) => {
        {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr:any) => curr.id === "common-dex-mistakes");
  
      const { t } = useTranslation();

  // Добавляем проверку, чтобы избежать ошибок при отсутствии данных
  if (!post) {
    return <div>Статья не найдена</div>;
  }
  
  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className="h-64 md:h-80 w-full bg-gradient-to-r from-amber-900 via-orange-900 to-hyper-900 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
          <BackButton label={post.backButton} />
          <div className="flex flex-wrap gap-4 text-sm font-medium text-hyper-accent mb-4">
            <span className="bg-hyper-accent/10 px-3 py-1 rounded-full border border-hyper-accent/20">{post.category}</span>
            <span className="flex items-center gap-1 text-gray-400">
              <Clock size={14} /> {post.readTime}
            </span>
            <span className="flex items-center gap-2 text-gray-400">
              <Calendar size={14} /> {post.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-300 mt-4">{post.subtitle}</p>
        </div>
      </div>

    
 <section className="bg-hyper-900 min-h-screen pb-20">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
    <article className="prose prose-invert prose-lg max-w-none">
      {/* Введение */}
     <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
        {t("Как избежать распространённых ошибок при использовании DEX-агрегаторов")}
      </h1>

      <p className="text-xl text-gray-300 leading-relaxed font-light mb-14 border-l-4 border-hyper-accent pl-6 italic">
        {t("Введение: почему ошибки на DEX стоят дорого")}
      </p>

      <p className="mb-6">
        {t("Представьте ситуацию: вы решили обменять $50,000 USDC на ETH через DEX-агрегатор. Всё кажется простым — выбрали токены, нажали «Swap», подтвердили в кошельке…")}<br />
        {t("И потеряли $2,500 из-за одной ошибки.")}
      </p>

      <h2 className="text-2xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
        {t("❌ Реальные примеры дорогостоящих ошибок:")}
      </h2>

      <ul className="space-y-4 text-sm text-gray-300 mb-12">
        <li>{t("Ошибка #1: Установили slippage tolerance 10% «на всякий случай» → MEV-бот «украл» $2,500 через sandwich attack")}</li>
        <li>{t("Ошибка #2: Дали unlimited approval неизвестному контракту → через месяц кошелёк опустошён ($50,000 украдено)")}</li>
        <li>{t("Ошибка #3: Проигнорировали предупреждение о high price impact (15%) → потеряли $7,500 на одном swap")}</li>
        <li>{t("Ошибка #4: Перешли по фишинговой ссылке «hypert-rade.xyz» → подписали malicious transaction → всё потеряно")}</li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-16 mb-8">
        {t("Статистика потерь в DeFi (2024):")}
      </h2>

      <ul className="space-y-4 text-sm text-gray-300 mb-10">
        <li className="text-red-400">{t("🔴 $1.2 миллиарда украдено через фишинг и скамы")}</li>
        <li className="text-red-400">{t("🔴 $800 миллионов потеряно из-за неправильных настроек")}</li>
        <li className="text-red-400">{t("🔴 $400 миллионов — потери от MEV-атак")}</li>
        <li className="text-red-400">{t("🔴 $200 миллионов — ошибки пользователей")}</li>
      </ul>

      <p className="mb-10">
        {t("Хорошая новость: 95% этих потерь можно избежать, если знать типичные ошибки и как их предотвратить.")}
      </p>

      <h2 className="text-2xl font-bold text-white mt-16 mb-8">
        {t("Что вы узнаете из этой статьи:")}
      </h2>

      <ul className="space-y-4 text-sm text-gray-300 mb-10">
        <li className="text-green-400">{t("✅ 15 самых распространённых ошибок")}</li>
        <li className="text-green-400">{t("✅ Реальные примеры с цифрами")}</li>
        <li className="text-green-400">{t("✅ Практические советы по защите")}</li>
        <li className="text-green-400">{t("✅ Чек-листы безопасности")}</li>
        <li className="text-green-400">{t("✅ Инструменты проверки")}</li>
      </ul>

      <p className="mb-14">
        {t("Цель: защитить ваши средства и помочь избежать потерь, которые уже понесли тысячи других трейдеров.")}
      </p>

      {/* Категория 1 */}
      <h2 className="text-2xl font-bold text-white mt-20 mb-8 flex items-center gap-3">
        {t("Категория 1: Ошибки безопасности и защиты средств")}
      </h2>

      {/* Ошибка #1 */}
      <h3 className="text-xl font-bold text-white mt-12 mb-6">
        {t("Ошибка #1: Неограниченные approvals (Unlimited Token Approvals)")}
      </h3>

      <p className="font-bold text-white mb-4">{t("Суть проблемы:")}</p>

      <p className="mb-6">
        {t("Когда вы делаете первый swap токена (например, USDC), DEX-агрегатор просит вас approve контракту потратить ваши токены.")}<br />
        {t("По умолчанию многие агрегаторы просят unlimited approval:")}
      </p>

      <pre style={{overflow: "hidden",}} className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-10">
<p>{t("Approve: 11579208923731619542357098500868790785 USDC")}</p>
      </pre>

      <p className="font-bold text-white mb-4">{t("Почему это опасно:")}</p>

      <ul className="space-y-4 text-sm text-gray-300 mb-10">
        <li className="text-red-400">{t("❌ Контракт скомпрометирован → кража токенов")}</li>
        <li className="text-red-400">{t("❌ Approval фишинговому сайту")}</li>
        <li className="text-red-400">{t("❌ Старые approvals — скрытая уязвимость")}</li>
      </ul>

      <p className="font-bold text-white mb-4">{t("Реальный пример:")}</p>

      <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl my-10 not-prose">
        <p className="text-red-400 font-bold mb-4 border-b border-red-900/30 pb-2">
          {t("Взлом DEX Router")}
        </p>
        <div className="space-y-4 text-sm text-gray-300">
          <div className="flex justify-between">
            <span>{t("Пострадавших пользователей")}</span>
            <span className="font-bold text-red-300">{t("2,000+")}</span>
          </div>
          <div className="flex justify-between border-t border-red-900/30 pt-3">
            <span>{t("Украдено средств")}</span>
            <span className="font-bold text-red-300">{t("150,000 USDC")}</span>
          </div>
        </div>
        <div className="text-center bg-red-900/20 text-red-300 py-1 rounded mt-3 text-xs font-bold">
          {t("Причина: unlimited approval")}
        </div>
      </div>

      <p className="font-bold text-white mb-4">{t("Как избежать:")}</p>

      <ul className="space-y-4 text-sm text-gray-300 mb-10">
        <li className="text-green-400">
          {t("✅ Limited approvals — только нужная сумма (10,500 USDC вместо ∞)")}
        </li>
      </ul>

      <p className="font-bold text-white mb-4">{t("Как настроить в Hypertrade:")}</p>

      <ol className="space-y-3 text-sm text-gray-300 list-decimal list-inside mb-12">
        <li>{t("⚙️ Settings")}</li>
        <li>{t("Token Approval")}</li>
        <li>{t("Exact / Custom amount")}</li>
        <li>{t("+5–10% запас")}</li>
      </ol>

      <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl my-12 not-prose">
        <p className="text-green-400 font-bold mb-4 border-b border-green-900/30 pb-2">
          {t("Рекомендации")}
        </p>
        <div className="space-y-4 text-sm text-gray-300">
          <p>{t("• Revoke.cash")}</p>
          <p>{t("• HyperExplorer")}</p>
        </div>
        <div className="text-center bg-green-900/20 text-green-300 py-1 rounded mt-3 text-xs font-bold">
          {t("Проверяйте раз в 1–3 месяца")}
        </div>
      </div>

      <p className="text-yellow-400 mt-10">
        {t("Экономия: предотвращение потери всех токенов ($10,000 – $1,000,000+)")}
      </p>
    </article>
  </div>
</section>


<section className="bg-hyper-900 min-h-screen pb-20">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
    <article className="prose prose-invert prose-lg max-w-none">

      {/* Ошибка #7 */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
        {t("Ошибка #7: Неправильный выбор gas settings")}
      </h2>
      <p>{t("Суть проблемы:")}</p>
      <p>
        {t("На Hyperliquid gas оплачивается в HYPE, и стоимость относительно стабильна (~1.5-3 HYPE на swap).")}<br />
        {t("Но ошибки всё равно возможны:")}
      </p>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>{t("❌ Недостаточно HYPE в кошельке:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Транзакция отменяется с ошибкой “insufficient funds for gas”")}</li>
            <li>{t("Вы теряете время и должны повторить")}</li>
          </ul>
        </li>
        <li>{t("❌ Слишком низкий gas limit (на других чейнах):")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Транзакция выполняется частично и отменяется (revert)")}</li>
            <li>{t("Вы теряете gas, но не получаете токены")}</li>
          </ul>
        </li>
        <li>{t("❌ Слишком высокий gas price (Priority Fee) на Ethereum:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Вы переплачиваете в 2-10 раз")}</li>
            <li>{t("Для swap на $1,000 может быть разница $20 vs. $200 gas")}</li>
          </ul>
        </li>
      </ul>

      <p>{t("Как избежать:")}</p>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>{t("✅ Всегда держите достаточно HYPE для gas:")}
          <br />{t("Рекомендация для Hyperliquid:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Минимум 10-20 HYPE на кошельке для комфортного трейдинга")}</li>
            <li>{t("Одна транзакция: ~1.5-3 HYPE")}</li>
            <li>{t("Если делаете 10 свапов в день → держите 30-50 HYPE")}</li>
          </ul>
        </li>
        <li>{t("Где купить HYPE:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("CEX: Binance, OKX, Bybit")}</li>
            <li>{t("DEX: через https://ht.xyz (swap USDC → HYPE)")}</li>
          </ul>
        </li>
        <li>{t("✅ Используйте стандартные gas settings Hypertrade:")}
          <br />{t("Hypertrade автоматически устанавливает оптимальный gas для Hyperliquid.")}<br />
          {t("НЕ меняйте gas limit или gas price вручную без понимания, что делаете.")}
        </li>
        <li>{t("✅ Для Ethereum и EVM-чейнов: используйте “Medium” gas:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Low — транзакция может зависнуть на часы ❌")}</li>
            <li>{t("Medium — оптимальный баланс (выполнение за 1-5 минут) ✅")}</li>
            <li>{t("High — переплата в 2-3 раза ❌")}</li>
          </ul>
          {t("Исключение: если нужно срочно (например, арбитраж, panic sell) → используйте High или даже Custom (увеличенный priority fee).")}
        </li>
        <li>{t("✅ Мониторьте gas prices перед крупными транзакциями:")}
          <br />{t("Для Ethereum:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("ETH Gas Station — текущие цены gas")}</li>
            <li>{t("Etherscan Gas Tracker — рекомендации по gas")}</li>
          </ul>
          {t("Лучшее время для транзакций на Ethereum:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Выходные (Сб-Вс) — gas на 30-50% ниже")}</li>
            <li>{t("Ночь по UTC (2:00-6:00 UTC) — минимальная активность")}</li>
            <li>{t("Избегайте: пики NFT минтов, крупных DEX торгов → gas взлетает в 5-10 раз")}</li>
          </ul>
        </li>
      </ul>
      <p>{t("Экономия: $10-200 на каждой транзакции (для Ethereum) или предотвращение ошибок (для Hyperliquid)")}</p>

      {/* Ошибка #8 */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
        {t("Ошибка #8: Не использование Invisium Simulations")}
      </h2>
      <p>{t("Суть проблемы:")}</p>
      <p>
        {t("Многие пользователи не смотрят на результаты симуляции или не понимают, что они означают.")}<br />
        {t("Hypertrade показывает:")}
      </p>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>{t("💰 You will receive: 19.86 ETH (Simulated with 99.8% accuracy)")}</li>
        <li>{t("⚠️ Min. received (1% slippage): 19.66 ETH")}</li>
        <li>{t("📊 Price Impact: 0.51%")}</li>
        <li>{t("💡 You save +$1,025 vs. single DEX")}</li>
      </ul>
      <p>
        {t("Пользователь игнорирует и просто нажимает «Swap» → не замечает, что:")}<br />
        {t("• Price impact выше ожидаемого")}<br />
        {t("• Экономия меньше, чем могла бы быть")}<br />
        {t("• Можно улучшить результат, изменив параметры")}
      </p>
      <p>{t("Как избежать:")}</p>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>{t("✅ ВСЕГДА внимательно изучайте результаты Invisium Simulation:")}
          <br />{t("Перед подтверждением swap проверьте:")}
          <ol className="list-decimal list-inside text-gray-400 space-y-1">
            <li>{t("“You will receive” — итоговое количество токенов")}
              <ul className="list-disc list-inside text-gray-400">
                <li>{t("Соответствует ли вашим ожиданиям?")}</li>
                <li>{t("Если намного меньше → проверьте price impact")}</li>
              </ul>
            </li>
            <li>{t("“Min. received” — минимум с учётом slippage")}
              <ul className="list-disc list-inside text-gray-400">
                <li>{t("Разница с “You will receive” должна быть 0.5-2%")}</li>
                <li>{t("Если разница меньше 3% → slippage tolerance слишком высокий")}</li>
              </ul>
            </li>
            <li>{t("“Price Impact” — влияние вашего ордера на цену")}
              <ul className="list-disc list-inside text-gray-400">
                <li>{t("&lt;1% — отлично ✅")}</li>
                <li>{t("1-3% — хорошо ⚠️")}</li>
                <li>{t("3% — рассмотрите разделение ордера 🔴")}</li>
              </ul>
            </li>
            <li>{t("“You save” — экономия vs. single DEX")}
              <ul className="list-disc list-inside text-gray-400">
                <li>{t("Проверьте, что split-routing действительно выгоден")}</li>
                <li>{t("Если экономия &lt;$10 на крупном ордере → что-то не так")}</li>
              </ul>
            </li>
            <li>{t("“Route Details” — распределение ордера")}
              <ul className="list-disc list-inside text-gray-400">
                <li>{t("Нажмите, чтобы увидеть, через какие DEX проходит обмен")}</li>
                <li>{t("Убедитесь, что маршрут логичен")}</li>
              </ul>
            </li>
          </ol>
        </li>
        <li>{t("✅ Сравните с альтернативными маршрутами:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Маршрут 1 (рекомендуемый): 19.86 ETH | Impact 0.51%")}</li>
            <li>{t("Маршрут 2: 19.75 ETH | Impact 0.38% (lower impact, но меньше output)")}</li>
            <li>{t("Маршрут 3: 19.92 ETH | Impact 1.2% (больше output, но higher impact)")}</li>
          </ul>
          {t("Выберите маршрут в зависимости от ваших приоритетов:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Максимальный output → Маршрут 3 (если готовы к higher impact)")}</li>
            <li>{t("Минимальный impact → Маршрут 2 (если price impact критичен)")}</li>
            <li>{t("Баланс → Маршрут 1 (рекомендация Hypertrade)")}</li>
          </ul>
        </li>
        <li>{t("✅ Если результат симуляции не устраивает:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Измените сумму (уменьшите для снижения impact)")}</li>
            <li>{t("Измените slippage tolerance")}</li>
            <li>{t("Попробуйте в другое время (когда ликвидность выше)")}</li>
            <li>{t("Используйте limit order вместо market swap")}</li>
          </ul>
        </li>
      </ul>
      <p>{t("Экономия: оптимизация каждого swap для максимальной выгоды ($50-500 на сделку)")}</p>

      {/* Категория 3 */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-6">
        {t("Категория 3: Ошибки при работе с токенами")}
      </h2>

      {/* Ошибка #9 */}
      <h3 className="text-xl font-bold text-white mt-8 mb-4">{t("Ошибка #9: Покупка скам-токенов или honeypots")}</h3>
      <p>{t("Суть проблемы:")}</p>
      <p>
        {t("На DEX любой может создать токен и добавить ликвидность. Злоумышленники создают скам-токены:")}
      </p>
      <p>{t("Типы скамов:")}</p>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>{t("1. Honeypot — вы можете купить, но не можете продать:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Код контракта блокирует продажи (или требует специальное разрешение)")}</li>
            <li>{t("Вы теряете 100% вложений")}</li>
          </ul>
        </li>
        <li>{t("2. Rug pull — разработчики удаляют ликвидность после сбора денег:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Цена токена падает на 99.9%")}</li>
            <li>{t("Вы не можете продать (нет ликвидности)")}</li>
          </ul>
        </li>
        <li>{t("3. High tax tokens — скрытые комиссии 30-99% на покупку/продажу:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Вы покупаете за 1,000 USDC")}</li>
            <li>{t("В кошельке появляется токенов на $100")}</li>
            <li>{t("Комиссия забрала $900")}</li>
          </ul>
        </li>
        <li>{t("4. Фейковые токены — поддельные копии известных токенов:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Выглядят как USDT, но это “USDT-fake” (другой контракт)")}</li>
            <li>{t("Цена манипулируется создателями")}</li>
          </ul>
        </li>
      </ul>

     <p>{t("Реальный пример:")}</p>
      <p>
        {t("Токен: PEPE 2.0 (новый мем-токен)")}<br />
        {t("Пользователь купил на $5,000")}<br />
        {t("Цена выросла на 300% → в кошельке $20,000")}<br />
        {t("Попытка продать → ошибка Transaction failed")}<br />
        {t("Проверка контракта: Honeypot (функция sell заблокирована)")}<br />
        {t("Результат: потеря $5,000")}
      </p>

      <p>{t("Как избежать:")}</p>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>{t("✅ Проверяйте токен ПЕРЕД покупкой:")}
          <br />{t("Обязательные проверки:")}
          <ol className="list-decimal list-inside text-gray-400 space-y-1">
            <li>{t("Contract Address — проверьте на Hyperliquid Explorer:")}
              <ul className="list-disc list-inside text-gray-400">
                <li>{t("https://explorer.hyperliquid.xyz")}</li>
                <li>{t("Убедитесь, что это официальный токен (сравните адрес с официальным сайтом проекта)")}</li>
              </ul>
            </li>
            <li>{t("Token Info — проверьте на CoinGecko / CoinMarketCap:")}
              <ul className="list-disc list-inside text-gray-400">
                <li>{t("Есть ли токен в списке?")}</li>
                <li>{t("Какая market cap, volume?")}</li>
                <li>{t("Если нет в списке → очень рискованно")}</li>
              </ul>
            </li>
            <li>{t("Liquidity (TVL) — проверьте ликвидность пула:")}
              <ul className="list-disc list-inside text-gray-400">
                <li>{t("Минимум $50,000-100,000 для безопасной торговли")}</li>
                <li>{t("Если TVL &lt;$10,000 → высокий риск rug pull")}</li>
              </ul>
            </li>
            <li>{t("Liquidity Lock — заблокирована ли ликвидность?")}
              <ul className="list-disc list-inside text-gray-400">
                <li>{t("Проверьте через Team Finance или Unicrypt (для EVM)")}</li>
                <li>{t("Если ликвидность НЕ заблокирована → разработчики могут забрать её в любой момент")}</li>
              </ul>
            </li>
            <li>{t("Honeypot Check — проверьте, можно ли продать:")}
              <ul className="list-disc list-inside text-gray-400">
                <li>{t("HoneyPot.is (для Ethereum, BSC)")}</li>
                <li>{t("Token Sniffer (для мультичейн)")}</li>
                <li>{t("Для Hyperliquid: пока нет специализированного инструмента → будьте крайне осторожны с новыми токенами")}</li>
              </ul>
            </li>
          </ol>
        </li>
        <li>{t("✅ Торгуйте только проверенными токенами:")}
          <br />{t("“Безопасные” токены на Hyperliquid:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("HYPE — нативный токен")}</li>
            <li>{t("USDC — stablecoin")}</li>
            <li>{t("ETH — wrapped Ethereum")}</li>
            <li>{t("BTC — wrapped Bitcoin")}</li>
            <li>{t("Крупные проекты с market cap &gt;$50M и проверенной репутацией")}</li>
          </ul>
          {t("Избегайте:")}
          <ul className="list-disc list-inside text-gray-400">
            <li>{t("Токены, появившиеся &lt;1 недели назад")}</li>
            <li>{t("Токены без официального сайта/whitepaper")}</li>
            <li>{t("Токены с обещаниями “1000x gains”")}</li>
            <li>{t("Токены, рекламируемые в Telegram/Discord спам-группах")}</li>
          </ul>
        </li>
        <li>{t("✅ Используйте малые суммы для тестирования:")}
          <br />{t("Если вы всё равно хотите купить новый токен (на свой риск):")}
          <ol className="list-decimal list-inside text-gray-400 space-y-1">
            <li>{t("Купите на минимальную сумму ($10-50)")}</li>
            <li>{t("Попробуйте СРАЗУ продать (тестовая продажа 10%)")}</li>
            <li>{t("Если продажа успешна → токен не honeypot (но rug pull всё ещё возможен)")}</li>
            <li>{t("Если продажа не прошла → НЕ ПОКУПАЙТЕ больше, это honeypot")}</li>
          </ol>
        </li>
      </ul>
      <p>{t("Экономия: предотвращение потери 100% вложений в скам-токены (потенциально $500-50,000)")}</p>

    </article>
  </div>
</section>

    <section className="bg-hyper-900 min-h-screen pb-20">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
    <article className="prose prose-invert prose-lg max-w-none">

     <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Ошибка #10: Неправильный адрес токена (fake tokens)")}</h2>
      <p className="text-gray-300 mb-4">{t("Суть проблемы: Существуют поддельные копии популярных токенов с похожими названиями:")}</p>
      <p className="text-gray-300 mb-4">
        {t("Настоящий USDC:")}<br/>
        {t("Contract: 0xA0b8...1234 (официальный)")}<br/>
        {t("Symbol: USDC")}<br/>
        {t("Name: USD Coin")}
      </p>
      <p className="text-gray-300 mb-4">
        {t("Поддельный USDC:")}<br/>
        {t("Contract: 0xB1c9...5678 (скам)")}<br/>
        {t("Symbol: USDC")}<br/>
        {t("Name: USD Coin (поддельный)")}
      </p>
      <p className="text-gray-300 mb-4">
        {t("В интерфейсе Hypertrade / MetaMask они выглядят одинаково, но это разные токены.")}
      </p>
      <p className="text-gray-300 font-bold mb-4">{t("Что происходит:")}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>{t("Вы случайно выбираете поддельный USDC")}</li>
        <li>{t("Покупаете его за настоящий USDC")}</li>
        <li>{t("Цена поддельного USDC манипулируется создателями")}</li>
        <li>{t("Вы не можете продать или получаете за него копейки")}</li>
      </ul>
      <p className="text-gray-300 font-bold mb-4">{t("Реальный пример:")}</p>
      <p className="text-gray-300 mb-4">
        {t("Пользователь хотел купить USDT на Hyperliquid")}<br/>
        {t("В списке токенов выбрал USDT (первый в списке)")}<br/>
        {t("Купил на 10,000 USDC")}
      </p>
      <p className="text-gray-300 mb-4">
        {t("Через час обнаружил, что это не настоящий USDT:")}<br/>
        {t("- Адрес контракта отличается")}<br/>
        {t("- Цена не 1:1 с USDC, а 0.001:1")}<br/>
        {t("- Настоящая стоимость купленных токенов: $10")}
      </p>
      <p className="text-gray-300 mb-4 font-bold">{t("Потеря: $9,990")}</p>
      <p className="text-gray-300 font-bold mb-4">{t("Как избежать:")}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>{t("✅ ВСЕГДА проверяйте contract address перед первой покупкой токена")}</li>
      </ul>
      <p className="text-gray-300 mb-4 font-bold">{t("Как проверить в Hypertrade:")}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>{t("Выберите токен в списке")}</li>
        <li>{t("Нажмите на ⓘ (иконка информации) рядом с названием")}</li>
        <li>{t("Скопируйте contract address")}</li>
        <li>{t("Сравните с официальным адресом на:")}
          <ul className="list-disc list-inside text-gray-400 ml-5">
            <li>{t("Официальном сайте проекта")}</li>
            <li>{t("CoinGecko / CoinMarketCap")}</li>
            <li>{t("Hyperliquid Explorer")}</li>
          </ul>
        </li>
      </ul>
      <p className="text-gray-300 mb-4 font-bold">{t("Пример для USDC:")}</p>
      <p className="text-gray-300 mb-4">
        {t("Официальный USDC на Hyperliquid:")}<br/>
        {t("Contract: [проверьте на docs.hyperliquid.xyz]")}
      </p>
      <p className="text-gray-300 mb-4 font-bold">{t("Перед покупкой:")}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>{t("Скопируйте адрес из Hypertrade")}</li>
        <li>{t("Сравните с официальным")}</li>
        <li>{t("Если совпадают → это настоящий USDC ✅")}</li>
        <li>{t("Если отличаются → это подделка ❌")}</li>
      </ul>
      <p className="text-gray-300 mb-4 font-bold">{t("✅ Добавьте проверенные токены в “Favorite” / “Watchlist”:")}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>{t("После проверки токена один раз:")}
          <ul className="list-disc list-inside text-gray-400 ml-5">
            <li>{t("Добавьте его в избранное (⭐) в Hypertrade")}</li>
            <li>{t("Используйте ТОЛЬКО токены из избранного")}</li>
            <li>{t("Это предотвратит случайный выбор подделки")}</li>
          </ul>
        </li>
      </ul>
      <p className="text-gray-300 mb-4 font-bold">{t("✅ Будьте осторожны с токенами, не входящими в “Default List”:")}</p>
      <p className="text-gray-300 mb-4">
        {t("Hypertrade показывает verified tokens (проверенные) в основном списке.")}<br/>
        {t("Если токена нет в списке, и вы добавляете его вручную по адресу:")}
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>{t("⚠️ Дважды проверьте адрес")}</li>
        <li>{t("Убедитесь, что это официальный токен")}</li>
        <li>{t("Начните с малой суммы")}</li>
      </ul>
      <p className="text-gray-300 mb-4 font-bold">{t("✅ Используйте “Import Token” только из надёжных источников:")}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>{t("Берите адрес ТОЛЬКО с официального сайта проекта")}</li>
        <li>{t("НЕ копируйте адреса из Telegram/Discord сообщений")}</li>
        <li>{t("Проверьте адрес на нескольких источниках (CoinGecko, official website, Explorer)")}</li>
      </ul>
      <p className="text-gray-300 mb-4 font-bold">
        {t("Экономия: предотвращение потери 90-100% вложений в поддельные токены (потенциально $500-50,000)")}
      </p>

      {/* Ошибка #11 */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Ошибка #11: Отправка токенов на неправильный адрес")}</h2>
      <p className="text-gray-300 mb-4">{t("Суть проблемы: Blockchain-транзакции необратимы. Если вы отправили токены на:")}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>{t("❌ Неправильный адрес → потеряны навсегда")}</li>
        <li>{t("❌ Адрес контракта (не поддерживающего токены) → потеряны навсегда")}</li>
        <li>{t("❌ Адрес на другом блокчейне → потеряны (например, отправили USDC с Ethereum на Hyperliquid адрес → они не придут)")}</li>
      </ul>
      <p className="text-gray-300 mb-4 font-bold">{t("Реальный пример:")}</p>
      <p className="text-gray-300 mb-4">
        {t("Пользователь хотел отправить 50,000 USDC на свой другой кошелёк")}<br/>
        {t("Скопировал адрес из clipboard")}<br/>
        {t("Вставил в поле To:")}<br/>
        {t("НО в clipboard был адрес из предыдущей транзакции (чужой кошелёк)")}<br/>
        {t("Нажал Send → 50,000 USDC ушли на незнакомый адрес")}<br/>
        {t("Результат: потеря $50,000 навсегда")}
      </p>
      <p className="text-gray-300 font-bold mb-4">{t("Как избежать:")}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>{t("✅ ВСЕГДА проверяйте адрес получателя дважды")}</li>
      </ul>
      <p className="text-gray-300 mb-4 font-bold">{t("Метод “Check First and Last 6 Characters”:")}</p>
      <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">
        <li>{t("Скопируйте адрес из надёжного источника")}</li>
        <li>{t("Вставьте в поле “To:”")}</li>
        <li>{t("Проверьте первые 6 символов: 0xA0b8...")}</li>
        <li>{t("Проверьте последние 6 символов: ...f1234a")}</li>
        <li>{t("Если оба совпадают с оригиналом → скорее всего правильный адрес")}</li>
      </ol>
      <p className="text-gray-300 mb-4">
        {t("Почему не проверять весь адрес?")}<br/>
        {t("• Слишком долго")}<br/>
        {t("• Легко пропустить ошибку в середине")}<br/>
        {t("Почему первые и последние 6?")}<br/>
        {t("• Clipboard hijackers обычно меняют средние символы")}<br/>
        {t("• Проверка начала + конца ловит 99% подмен")}
      </p>
     <p className="text-gray-300 mb-4 font-bold">{t("✅ Используйте адресную книгу (Address Book):")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Сохраните проверенные адреса в Address Book")}</li>
  <li>{t('Добавьте метки (labels): “Мой второй кошелёк”, “Binance deposit”, etc.')}</li>
  <li>{t("Всегда выбирайте из Address Book, а не вставляйте вручную")}</li>
</ul>
<p className="text-gray-300 mb-4 font-bold">{t("✅ Тестовая транзакция для крупных сумм:")}</p>
<ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Перед отправкой меньше $10,000 отправьте $10-50 тестовую транзакцию")}</li>
  <li>{t("Проверьте, что токены пришли на нужный адрес")}</li>
  <li>{t("Только после подтверждения отправляйте основную сумму")}</li>
</ol>
<p className="text-gray-300 mb-4">
  {t("Дополнительные $2-5 gas на тестовую транзакцию многократно перекрываются защитой от потери $10,000-1,000,000.")}
</p>
<p className="text-gray-300 mb-4 font-bold">{t("✅ Проверьте, что адрес совместим с блокчейном:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Hyperliquid / EVM адреса начинаются с 0x... (42 символа)")}</li>
  <li>{t("Bitcoin адреса начинаются с 1..., 3..., или bc1...")}</li>
  <li>{t("Solana адреса — base58 (32-44 символа, БЕЗ 0x)")}</li>
  <li>{t("Если формат адреса не совпадает с блокчейном → НЕ ОТПРАВЛЯЙТЕ")}</li>
</ul>
<p className="text-gray-300 mb-4 font-bold">{t("✅ Остерегайтесь clipboard hijackers:")}</p>
<p className="text-gray-300 mb-4">
  {t("Вредоносное ПО может подменять адрес в буфере обмена:")}<br/>
  {t("1. Вы копируете: 0xA0b8...f1234a")}<br/>
  {t("2. Вредонос подменяет на: 0xB1c9...e5678b (адрес хакера)")}<br/>
  {t("3. Вы вставляете и отправляете → токены уходят хакеру")}
</p>
<p className="text-gray-300 mb-4">
  {t("Защита:")}<br/>
  {t("• Используйте антивирус (Windows Defender, Malwarebytes)")}<br/>
  {t("• Проверяйте адрес ПОСЛЕ вставки (первые и последние 6 символов)")}<br/>
  {t("• Для крупных сумм используйте hardware wallet (Ledger, Trezor)")}
</p>
<p className="text-gray-300 mb-4 font-bold">
  {t("Экономия: предотвращение безвозвратной потери токенов (потенциально $1,000-1,000,000)")}
</p>

{/* Ошибка #12 */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Ошибка #12: FOMO (Fear of Missing Out) покупки")}</h2>
<p className="text-gray-300 mb-4">{t("Суть проблемы: FOMO — эмоциональная покупка из-за страха упустить прибыль:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Вы видите, что токен вырос на 200% за день")}</li>
  <li>{t("Все обсуждают его в Twitter / Telegram")}</li>
  <li>{t("Вы боитесь упустить ещё +500%")}</li>
  <li>{t("Покупаете на пике цены")}</li>
</ul>
<p className="text-gray-300 mb-4 font-bold">{t("Что происходит потом:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Цена корректируется на 50-80% (это нормально после памп-ов)")}</li>
  <li>{t("Вы в убытке -50-80%")}</li>
  <li>{t("Вы продаёте в панике (panic sell) → фиксируете убыток")}</li>
  <li>{t("Через неделю цена восстанавливается, но вы уже вышли")}</li>
</ul>
<p className="text-gray-300 mb-4 font-bold">{t("Реальный пример:")}</p>
<p className="text-gray-300 mb-4">
  {t("Токен XYZ: +300% за 24 часа")}<br/>
  {t("Пользователь купил на $10,000 на пике (цена $1.50)")}<br/>
  {t("Через 2 часа: -60% коррекция (цена $0.60)")}<br/>
  {t("Пользователь в панике продал: получил $4,000")}<br/>
  {t("Потеря: -$6,000")}<br/>
  {t("Через 3 дня: цена восстановилась до $1.80")}<br/>
  {t("Если бы держал: прибыль +$2,000 (вместо убытка -$6,000)")}
</p>
<p className="text-gray-300 mb-4 font-bold">{t("Как избежать:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("✅ НЕ покупайте на пике волатильности:")}
    <ul className="list-disc list-inside text-gray-400 ml-5">
      <li>{t("Признаки, что токен на пике FOMO:")}</li>
      <li>{t("+100-500% рост за 24 часа")}</li>
      <li>{t("Массовые обсуждения в соцсетях")}</li>
      <li>{t("“To the moon! 🚀” повсюду")}</li>
      <li>{t("Volume в 10-50 раз выше обычного")}</li>
      <li>{t("→ Это ХУДШЕЕ время для покупки.")}</li>
    </ul>
  </li>
  <li>{t("✅ Дождитесь коррекции (pullback):")}
    <ul className="list-disc list-inside text-gray-400 ml-5">
      <li>{t("После любого пампа следует коррекция 30-70%.")}</li>
      <li>{t("Стратегия:")}
        <ul className="list-disc list-inside text-gray-400 ml-5">
          <li>{t("Вы видите токен +300%")}</li>
          <li>{t("Добавьте в watchlist, но НЕ покупайте")}</li>
          <li>{t("Дождитесь коррекции (обычно 1-3 дня)")}</li>
          <li>{t("Покупайте на падении -40-60% от пика")}</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>{t("✅ Используйте DCA (Dollar Cost Averaging):")}
    <ul className="list-disc list-inside text-gray-400 ml-5">
      <li>{t("Вместо покупки всей суммы сразу, разделите на части:")}</li>
      <li>{t("Планируемая покупка: $10,000")}</li>
      <li>{t("DCA стратегия:")}
        <ul className="list-disc list-inside text-gray-400 ml-5">
          <li>{t("$2,000 сейчас (цена $1.00)")}</li>
          <li>{t("$2,000 через 1 день (цена $0.85)")}</li>
          <li>{t("$2,000 через 3 дня (цена $0.70)")}</li>
          <li>{t("$2,000 через 7 дней (цена $0.75)")}</li>
          <li>{t("$2,000 через 14 дней (цена $0.80)")}</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>{t("✅ Игнорируйте шум в соцсетях:")}
    <ul className="list-disc list-inside text-gray-400 ml-5">
      <li>{t("НЕ принимайте решения на основе Twitter/Telegram шума")}</li>
      <li>{t("НЕ следуйте за “influencers” без собственного анализа")}</li>
      <li>{t("Помните: когда все кричат “buy”, умные деньги продают")}</li>
    </ul>
  </li>
</ul>
<p className="text-gray-300 mb-4 font-bold">
  {t("Экономия: предотвращение убытков от покупок на пике (потенциально -50-80% или $5,000-80,000)")}
</p>

{/* Ошибка #13 */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Ошибка #13: Panic selling (паническая продажа)")}</h2>
<p className="text-gray-300 mb-4">{t("Суть проблемы: Противоположность FOMO — вы продаёте в панике, когда цена падает:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Токен падает -20-40%")}</li>
  <li>{t("Вы боитесь, что упадёт до нуля")}</li>
  <li>{t("Продаёте в убытке")}</li>
  <li>{t("Через несколько дней цена восстанавливается")}</li>
</ul>
<p className="text-gray-300 mb-4 font-bold">{t("Результат: вы зафиксировали убыток вместо того, чтобы просто подождать.")}</p>
<p className="text-gray-300 mb-4 font-bold">{t("Реальный пример:")}</p>
<p className="text-gray-300 mb-4">
  {t("Купили ETH на $50,000 (цена $2,500/ETH)")}<br/>
  {t("Рынок упал на -30%: ETH = $1,750")}<br/>
  {t("Портфель: -$15,000 убыток")}<br/>
  {t("Паническая продажа: продали всё за $35,000")}<br/>
  {t("Зафиксированный убыток: -$15,000")}<br/>
  {t("Через 2 недели: ETH восстановился до $2,600")}<br/>
  {t("Если бы держали: +$2,000 прибыль (вместо убытка -$15,000)")}
</p>
<p className="text-gray-300 mb-4 font-bold">{t("Как избежать:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("✅ Установите stop-loss ДО покупки:")}</li>
</ul>
      <p className="text-gray-300 mb-4">
  {t("Stop-loss — автоматическая продажа при падении цены ниже определённого уровня.")}<br/>
  {t("Правило:")}
</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Определите максимальный приемлемый убыток (например, -15-20%)")}</li>
  <li>{t("Установите stop-loss на этом уровне")}</li>
  <li>{t("НЕ ОТМЕНЯЙТЕ stop-loss в панике")}</li>
</ul>
<p className="text-gray-300 mb-4 font-bold">{t("Пример:")}</p>
<p className="text-gray-300 mb-4">
  {t("Купили ETH за $2,500")}<br/>
  {t("Stop-loss: $2,125 (-15%)")}<br/>
  {t("Если цена упадёт до $2,125 → автоматическая продажа")}<br/>
  {t("Максимальный убыток: -15% (вместо -30-50% при панической продаже позже)")}
</p>
<p className="text-gray-300 mb-4 font-bold">{t("Где установить stop-loss на Hyperliquid:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("HyperCore Spot — поддерживает stop-loss orders (используйте напрямую)")}</li>
  <li>{t("Hypertrade — пока нет встроенных stop-loss (используйте HyperCore Spot или сторонние боты)")}</li>
</ul>
<p className="text-gray-300 mb-4 font-bold">{t("✅ НЕ проверяйте цены каждые 5 минут:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Чем чаще смотрите на цену, тем выше вероятность panic sell")}</li>
  <li>{t("Ежедневная волатильность ±5-10% — нормально")}</li>
  <li>{t("Вы видите -5% → паникуете → продаёте")}</li>
  <li>{t("Через час цена +8% → вы упустили прибыль")}</li>
</ul>
<p className="text-gray-300 mb-4">
  {t("Рекомендация:")}<br/>
  {t("• Проверяйте цены 1-2 раза в день (утром и вечером)")}<br/>
  {t("• Для долгосрочных инвестиций — 1-2 раза в неделю")}
</p>
<p className="text-gray-300 mb-4 font-bold">{t("✅ Помните об временном горизонте:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Краткосрочные падения (дни, недели) — неважны")}</li>
  <li>{t("Долгосрочный тренд (месяцы, годы) — важен")}</li>
</ul>
<p className="text-gray-300 mb-4 font-bold">{t("Исторический факт:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Bitcoin падал на -80-90% несколько раз (2018, 2022)")}</li>
  <li>{t("Те, кто держали (HODL), заработали +1000-10,000%")}</li>
  <li>{t("Те, кто продавали в панике, зафиксировали убыток")}</li>
</ul>
<p className="text-gray-300 mb-4 font-bold">{t("✅ Используйте “Rule of 72 Hours”:")}</p>
<ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Подождите 72 часа")}</li>
  <li>{t("Переоцените ситуацию через 3 дня")}</li>
  <li>{t("В 90% случаев паника пройдёт, и решение изменится")}</li>
</ol>
<p className="text-gray-300 mb-4 font-bold">
  {t("Экономия: предотвращение фиксации убытков на -20-50% (потенциально $5,000-100,000)")}
</p>

{/* Ошибка #14 */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Ошибка #14: Игнорирование market conditions")}</h2>
<p className="text-gray-300 mb-4">{t("Суть проблемы: Рынок имеет разные фазы:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("🟢 Bull Market (рост) — большинство токенов растут")}</li>
  <li>{t("🔴 Bear Market (падение) — большинство токенов падают")}</li>
  <li>{t("🟡 Sideways (боковик) — цены стабильны")}</li>
</ul>
<p className="text-gray-300 mb-4">{t("Ошибка: использовать одинаковую стратегию во всех условиях:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("В bull market держать cash → упускать прибыль")}</li>
  <li>{t("В bear market покупать агрессивно → накапливать убытки")}</li>
  <li>{t("Игнорировать макроэкономические события (FED, regulations)")}</li>
</ul>
<p className="text-gray-300 mb-4 font-bold">{t("Реальный пример:")}</p>
<p className="text-gray-300 mb-4">
  {t("Ноябрь 2021: Bull market пик")}<br/>
  {t("Пользователь активно покупал альткоины")}<br/>
  {t("Декабрь 2021 - ноябрь 2022: Bear market (-80% падение)")}<br/>
  {t("Пользователь продолжал buy the dip каждые -10%")}<br/>
  {t("Результат:")}<br/>
  {t("- Вложил $100,000 в течение года")}<br/>
  {t("- Портфель стоит $15,000")}<br/>
  {t("- Убыток: -$85,000")}
</p>
<p className="text-gray-300 mb-4 font-bold">
  {t("Правильная стратегия: перейти в cash/stablecoins с декабря 2021 → избежать 90% убытка")}
</p>
<p className="text-gray-300 mb-4 font-bold">{t("Как избежать:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("✅ Определите текущую фазу рынка:")}</li>
</ul>

<p className="text-gray-300 mb-4 font-bold">{t("Индикаторы Bull Market:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Bitcoin +20-50% за месяц")}</li>
  <li>{t("Altcoins растут сильнее Bitcoin (altcoin season)")}</li>
  <li>{t("Новости позитивные (institutional adoption, etc.)")}</li>
  <li>{t("Fear & Greed больше 60 (Greed / Extreme Greed)")}</li>
</ul>

<p className="text-gray-300 mb-4 font-bold">{t("Индикаторы Bear Market:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Bitcoin -20-50% за месяц")}</li>
  <li>{t("Altcoins падают сильнее Bitcoin (-50-80%)")}</li>
  <li>{t("Новости негативные (regulations, hacks, bankruptcies)")}</li>
  <li>{t("Fear & Greed Index меньше 40 (Fear / Extreme Fear)")}</li>
</ul>
<p className="text-gray-300 mb-4">{t("Проверка: Alternative.me Fear & Greed Index")}</p>

    <p className="text-gray-300 mb-4 font-bold">{t("✅ Адаптируйте стратегию:")}</p>
<table className="table-auto text-gray-300 mb-4">
  <thead>
    <tr>
      <th className="px-2 py-1">{t("Фаза рынка")}</th>
      <th className="px-2 py-1">{t("Стратегия")}</th>
      <th className="px-2 py-1">{t("Allocation")}</th>
      <th className="px-2 py-1">{t("Risk Level")}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-2 py-1">{t("Bull Market")}</td>
      <td className="border px-2 py-1">{t("Агрессивная покупка")}</td>
      <td className="border px-2 py-1">{t("70-80% crypto, 20-30% stablecoins")}</td>
      <td className="border px-2 py-1">{t("High")}</td>
    </tr>
    <tr>
      <td className="border px-2 py-1">{t("Bear Market")}</td>
      <td className="border px-2 py-1">{t("Защита капитала, DCA")}</td>
      <td className="border px-2 py-1">{t("20-30% crypto, 70-80% stablecoins")}</td>
      <td className="border px-2 py-1">{t("Low")}</td>
    </tr>
    <tr>
      <td className="border px-2 py-1">{t("Sideways")}</td>
      <td className="border px-2 py-1">{t("Swing trading, выборочные покупки")}</td>
      <td className="border px-2 py-1">{t("40-60% crypto, 40-60% stablecoins")}</td>
      <td className="border px-2 py-1">{t("Medium")}</td>
    </tr>
    <tr>
      <td className="border px-2 py-1">{t("Неопределённость")}</td>
      <td className="border px-2 py-1">{t("Ожидание, кэш")}</td>
      <td className="border px-2 py-1">{t("10-20% crypto, 80-90% stablecoins")}</td>
      <td className="border px-2 py-1">{t("Very Low")}</td>
    </tr>
  </tbody>
</table>

<p className="text-gray-300 mb-4 font-bold">{t("✅ Следите за макроэкономическими событиями:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("FED interest rate decisions — повышение ставок обычно негативно для крипты")}</li>
  <li>{t("Inflation reports (CPI) — высокая инфляция → FED повышает ставки → крипта падает")}</li>
  <li>{t("Regulations — новые законы могут резко изменить рынок")}</li>
  <li>{t("Major hacks / bankruptcies — FTX, Luna crash → bear market")}</li>
</ul>
<p className="text-gray-300 mb-4">{t("Календарь событий: CoinMarketCal")}</p>

<p className="text-gray-300 mb-4 font-bold">{t("✅ Используйте “Cash is a Position”:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Находиться в stablecoins (USDC, USDT) — это ТОЖЕ позиция, а не “упущенная прибыль”")}</li>
  <li>
    {t("В bear market:")}
    <ul className="list-disc list-inside text-gray-400 ml-5">
      <li>{t("Держать cash → правильно (вы избегаете -50-80% потерь)")}</li>
      <li>{t("“Покупать дип” → неправильно (дип продолжается месяцами)")}</li>
    </ul>
  </li>
</ul>
<p className="text-gray-300 mb-4 font-bold">
  {t('Золотое правило: “Preservation of capital is more important than making profits.”')}<br/>
  {t("Экономия: предотвращение убытков в неблагоприятных рыночных условиях (-50-80% или $10,000-200,000)")}
</p>

{/* Ошибка #15 */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Ошибка #15: Не отслеживание результатов")}</h2>
<p className="text-gray-300 mb-4">{t("Суть проблемы: Многие трейдеры не ведут учёт своих сделок:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("Не знают реальную прибыль/убыток")}</li>
  <li>{t("Не понимают, какие ошибки повторяются")}</li>
  <li>{t("Не видят, какие стратегии работают")}</li>
  <li>{t("Переоценивают успехи, недооценивают потери (confirmation bias)")}</li>
</ul>
<p className="text-gray-300 mb-4 font-bold">{t("Результат: повторение одних и тех же ошибок месяцами/годами.")}</p>
<p className="text-gray-300 mb-4 font-bold">{t("Реальный пример:")}</p>
<p className="text-gray-300 mb-4">
  {t("Трейдер думает, что он в плюсе за год")}<br/>
  {t("Без учёта:")}<br/>
  {t("- Я сделал много прибыльных сделок! ✅")}<br/>
  {t("- Убытков было немного ❌ (на самом деле много мелких)")}<br/>
  {t("С учётом (после подсчёта):")}<br/>
  {t("- Прибыльные сделки: +$15,000")}<br/>
  {t("- Убыточные сделки: -$22,000")}<br/>
  {t("- Gas fees: -$3,000")}<br/>
  {t("- Итого: -$10,000 убыток ❌")}<br/>
  {t("Вывод: стратегия НЕ работает, нужно менять подход")}
</p>
<p className="text-gray-300 mb-4 font-bold">{t("Как избежать:")}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("✅ Ведите торговый журнал (Trading Journal):")}
    <ul className="list-disc list-inside text-gray-400 ml-5">
      <li>{t("Записывайте каждую сделку: Дата, Пара, Сумма, Цена входа, Цена выхода, P&L, Gas, Причина сделки, Ошибки")}</li>
      <li>{t("Анализируйте раз в неделю/месяц:")}
        <ul className="list-disc list-inside text-gray-400 ml-5">
          <li>{t("Какие сделки были прибыльными? Почему?")}</li>
          <li>{t("Какие сделки были убыточными? Какие ошибки?")}</li>
          <li>{t("Какие паттерны повторяются?")}</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>{t("✅ Используйте инструменты автоматического трекинга:")}
    <ul className="list-disc list-inside text-gray-400 ml-5">
      <li>{t("Hypertrade Dashboard — история свапов и сбережения")}</li>
      <li>{t("Hyperliquid Explorer — проверка истории транзакций")}</li>
      <li>{t("CoinTracker / Koinly / Delta / Blockfolio — автоматический импорт транзакций, расчёт P&L")}</li>
    </ul>
  </li>
  <li>{t("✅ Рассчитывайте “Real P&L” (реальную прибыль):")}
    <ul className="list-disc list-inside text-gray-400 ml-5">
      <li>{t("Учитывайте ВСЕ затраты: gas, fees, налоги")}</li>
    </ul>
  </li>
  <li>{t("✅ Установите KPI (Key Performance Indicators):")}
    <ul className="list-disc list-inside text-gray-400 ml-5">
      <li>{t("Win Rate больше 60%")}</li>
      <li>{t("Average Win / Average Loss больше 2:1")}</li>
      <li>{t("Sharpe Ratio больше 1.0")}</li>
      <li>{t("Max Drawdown меньше 20%")}</li>
    </ul>
  </li>
</ul>
<p className="text-gray-300 mb-4 font-bold">{t("Экономия: улучшение стратегии → увеличение прибыли на 20-50% ($5,000-50,000/год)")}</p>

{/* Чек-лист безопасности */}
<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Чек-лист безопасности перед каждым swap")}</h2>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
  <li>{t("🔒 Проверка URL, SSL, подключение кошелька к официальному сайту")}</li>
  <li>{t("💰 Проверка token contract address, Invisium Simulation, slippage, gas")}</li>
  <li>{t("⚠️ Проверка предупреждений MetaMask, honeypot/scam")}</li>
  <li>{t("📝 Финальная проверка: правильный токен, сумма, approval, готовность подтвердить")}</li>
</ul>

      {/* Заключение */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Заключение: как избежать 95% ошибок")}</h2>
      <p className="text-gray-300 mb-4">
        {t("15 ошибок, которых нужно избегать: ")}<br/>
        {t("1. ❌ Unlimited token approvals → ✅ Ограниченные approvals + проверка")}<br/>
        {t("2. ❌ Фишинговые сайты → ✅ Проверка URL, закладки")}<br/>
        {t("3. ❌ Ненадёжные RPC → ✅ Только официальные RPC")}<br/>
        {t("4. ❌ Игнорирование предупреждений → ✅ Внимательно читать")}<br/>
        {t("5. ❌ Неправильный slippage → ✅ Адекватный slippage (0.5-2%), Invisium")}<br/>
        {t("6. ❌ Игнорирование high price impact → ✅ Разделение ордеров")}<br/>
        {t("7. ❌ Неправильный gas → ✅ Достаточно HYPE, стандартные настройки")}<br/>
        {t("8. ❌ Не использование симуляций → ✅ Invisium перед swap")}<br/>
        {t("9. ❌ Покупка скам-токенов → ✅ Проверка контракта, ликвидности, honeypot")}<br/>
        {t("10. ❌ Fake tokens → ✅ Проверка contract address, verified lists")}<br/>
        {t("11. ❌ Неправильный адрес → ✅ Проверка первых+последних 6 символов, тестовая транзакция")}<br/>
        {t("12. ❌ FOMO покупки → ✅ Ожидание коррекции, DCA, игнорирование шума")}<br/>
        {t("13. ❌ Panic selling → ✅ Stop-loss ДО покупки, правило 72 часов")}<br/>
        {t("14. ❌ Игнорирование рынка → ✅ Адаптация стратегии к фазе рынка")}<br/>
        {t("15. ❌ Не отслеживание → ✅ Торговый журнал, KPI, анализ ошибок")}
      </p>

      {/* Ресурсы и поддержка */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t("Ресурсы и поддержка")}</h2>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>{t("📚 Документация и обучение:")}
          <ul className="list-disc list-inside text-gray-400 ml-5">
            <li>{t("Официальный сайт: https://ht.xyz")}</li>
            <li>{t("Security guide: https://docs.hypertrade.io/security")}</li>
            <li>{t("Technical docs: https://docs.hypertrade.io")}</li>
          </ul>
        </li>
        <li>{t("🛡️ Инструменты проверки:")}
          <ul className="list-disc list-inside text-gray-400 ml-5">
            <li>{t("Revoke.cash, HoneyPot.is, Token Sniffer, Pocket Universe, Hyperliquid Explorer")}</li>
          </ul>
        </li>
        <li>{t("💬 Сообщество и поддержка:")}
          <ul className="list-disc list-inside text-gray-400 ml-5">
            <li>{t("Discord, Twitter, Telegram")}</li>
          </ul>
        </li>
        <li>{t("📧 Официальная поддержка:")}
          <ul className="list-disc list-inside text-gray-400 ml-5">
            <li>{t("support@hypertrade.io")}</li>
            <li>{t("security@hypertrade.io")}</li>
            <li>{t("tech@hypertrade.io")}</li>
          </ul>
        </li>
      </ul>
      <p className="text-gray-300 mb-8 font-bold">{t("⚠️ ВАЖНО: Официальная поддержка НИКОГДА не пишет первой в личные сообщения и НЕ просит seed phrase / private key!")}</p>
    </article>
  </div>
</section>


    </section>
  );
};
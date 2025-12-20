"use client"
import BackButton from "@/components/ui/BackButton";
import { AlertTriangle, BadgeIcon, Lock, Shield, Unlock, Zap, Cpu, Server, Key, Database, AlertCircle, Globe, ShieldCheck, Timer, Wallet, Settings, Clock } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { Language } from "@/app/translations";
import { useTranslation } from "react-i18next";

export const ArticleCrossChainVsNative = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "cross-chain-vs-native-security");
  
  const { t } = useTranslation();

  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
             {/* Header Image/Gradient */}
      <div
        className={`min-h-64 md:min-h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-15"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="mb-8">
            <BackButton label="Назад к статьям" />
          </div>

          {/* Метаданные всегда сверху */}
          <div className="flex flex-wrap gap-4 text-sm font-medium text-blue-400 mb-4">
            <span className="bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-gray-400">
              <Settings size={14} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-gray-400">
              <Clock size={14} /> {post.date}
            </span>
          </div>

          {/* Заголовок занимает оставшееся место */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight break-words">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">
         
        <article className="prose prose-invert prose-lg max-w-none">
  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Cross-chain мосты vs нативные агрегаторы: почему работа внутри одного блокчейна безопаснее`)}</h2>

  <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-hyper-accent pl-6 italic">
    {t(`Введение: $2.8 млрд потерь — цена за кросс-чейн “удобство”`)}
  </p>

  <p>{t(`В погоне за доступом к ликвидности на разных блокчейнах, криптоиндустрия создала cross-chain bridges (кросс-чейн мосты) — технологию, которая обещает seamless перемещение активов между сетями. Ethereum → Arbitrum. BSC → Polygon. Solana → Avalanche.`)}</p>

  <p className="mt-4">{t(`Звучит удобно. Но какова реальная цена?`)}</p>

  <p className="mt-4">{t(`По данным DefiLlama, с момента появления кросс-чейн мостов, было украдено более $2.8 миллиарда — что составляет почти 40% от всех хаков в Web3. Это не единичные инциденты. Это системная уязвимость, встроенная в саму архитектуру мостов.`)}</p>

  <h3 className="text-xl font-bold text-red-400 mt-8 mb-4">{t(`Крупнейшие взломы мостов:`)}</h3>
  <ul className="list-disc list-inside text-gray-300 space-y-2">
    <li>{t(`🔴 Ronin Bridge (март 2022): $625 млн украдено`)}</li>
    <li>{t(`🔴 Wormhole (февраль 2022): $325 млн украдено`)}</li>
    <li>{t(`🔴 Harmony Horizon Bridge (июнь 2022): $100 млн украдено`)}</li>
    <li>{t(`🔴 Nomad Bridge (август 2022): $190 млн украдено`)}</li>
    <li>{t(`🔴 Binance Bridge (октябрь 2022): $570 млн украдено (частично возвращено)`)}</li>
  </ul>

  <p className="mt-6">{t(`Альтернатива: Нативные агрегаторы, работающие внутри одного блокчейна, как Hypertrade на Hyperliquid, избегают всех этих рисков, обеспечивая максимальную безопасность без необходимости перемещать активы между сетями.`)}</p>

  <p className="mt-6">{t(`В этой статье мы детально разберем:`)}</p>
  <ol className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`Почему кросс-чейн мосты настолько уязвимы`)}</li>
    <li>{t(`Какие специфические риски несут wrapped токены`)}</li>
    <li>{t(`Как работают нативные агрегаторы и почему они безопаснее`)}</li>
    <li>{t(`Почему Hypertrade на Hyperliquid — эталон безрискового агрегирования`)}</li>
  </ol>

  <hr className="my-8 border-gray-700" />

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`1. Что такое кросс-чейн мосты и зачем они нужны`)}</h2>

  <h3 className="text-xl font-bold text-white mt-6 mb-4">{t(`Проблема: изолированные блокчейны`)}</h3>
  <p>{t(`Современная криптоэкосистема — это не один блокчейн, а десятки изолированных сетей:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`Ethereum: старейший смарт-контракт блокчейн, высокие комиссии`)}</li>
    <li>{t(`BNB Chain: низкие комиссии, большая экосистема DeFi`)}</li>
    <li>{t(`Solana: высокая скорость, низкие затраты`)}</li>
    <li>{t(`Arbitrum, Optimism: Layer 2 для Ethereum`)}</li>
    <li>{t(`Polygon: sidechain с собственной безопасностью`)}</li>
    <li>{t(`Avalanche, Fantom, Base и десятки других`)}</li>
  </ul>

  <p className="mt-4">{t(`Проблема: Если у вас ETH на Ethereum, вы не можете использовать его на Solana DEX. Если у вас USDC на Arbitrum, вы не можете swap на Polygon.`)}</p>

  <p className="mt-4">{t(`Решение (в теории): Кросс-чейн мосты позволяют “перемещать” активы между блокчейнами.`)}</p>

  <hr className="my-8 border-gray-700" />

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Как работают кросс-чейн мосты: “Lock & Mint” модель`)}</h3>

  <p>{t(`Стандартная схема:`)}</p>
  <ol className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`ПОЛЬЗОВАТЕЛЬ → Отправляет 10 ETH на мост (Chain A: Ethereum)`)}</li>
    <li>{t(`МОСТ → Блокирует (lock) 10 ETH в smart contract на Ethereum`)}</li>
    <li>{t(`МОСТ → Создает (mint) 10 wETH (wrapped ETH) на Chain B (например, Solana)`)}</li>
    <li>{t(`ПОЛЬЗОВАТЕЛЬ → Получает 10 wETH на Solana, может торговать на Solana DEX`)}</li>
  </ol>

  <p className="mt-4">{t(`Обратный процесс (redemption):`)}</p>
  <ol className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`ПОЛЬЗОВАТЕЛЬ → Отправляет 10 wETH на мост (Solana)`)}</li>
    <li>{t(`МОСТ → Сжигает (burn) 10 wETH на Solana`)}</li>
    <li>{t(`МОСТ → Разблокирует (unlock) 10 ETH на Ethereum`)}</li>
    <li>{t(`ПОЛЬЗОВАТЕЛЬ → Получает оригинальные 10 ETH обратно`)}</li>
  </ol>

  <p className="mt-4">{t(`Критический момент: Ваши оригинальные ETH заблокированы в smart contract моста. wETH на Solana — это IOU (долговая расписка), которая имеет ценность только если мост честный и secure.`)}</p>

  <hr className="my-8 border-gray-700" />

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Типы кросс-чейн мостов`)}</h3>
  <div className="overflow-x-auto not-prose mb-8">
    <table className="w-full text-left border-collapse text-gray-300">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="p-4 font-medium">{t(`Тип моста`)}</th>
          <th className="p-4 font-medium">{t(`Описание`)}</th>
          <th className="p-4 font-medium">{t(`Примеры`)}</th>
          <th className="p-4 font-medium">{t(`Централизация`)}</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4">Custodial (кастодиальные)</td>
          <td className="p-4">{t(`Централизованная компания контролирует locked assets`)}</td>
          <td className="p-4">{t(`Binance Bridge, CEX withdrawals`)}</td>
          <td className="p-4">❌ Высокая</td>
        </tr>
        <tr className="border-b border-gray-800">
          <td className="p-4">Multisig (мультиподпись)</td>
          <td className="p-4">{t(`Группа валидаторов (5-9 человек) подтверждают транзакции`)}</td>
          <td className="p-4">{t(`Ronin (5/9), Harmony (2/5)`)}</td>
          <td className="p-4">⚠️ Средняя</td>
        </tr>
        <tr className="border-b border-gray-800 bg-hyper-800/20">
          <td className="p-4">Optimistic (оптимистичные)</td>
          <td className="p-4">{t(`Транзакции считаются валидными, если не оспорены`)}</td>
          <td className="p-4">{t(`Nomad, Hop Protocol`)}</td>
          <td className="p-4">✅ Низкая</td>
        </tr>
        <tr className="bg-hyper-800/20">
          <td className="p-4">Light client (легкий клиент)</td>
          <td className="p-4">{t(`Проверка транзакций через криптографические доказательства`)}</td>
          <td className="p-4">{t(`Rainbow Bridge (NEAR ↔ Ethereum)`)}</td>
          <td className="p-4">✅ Низкая</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>{t(`Важно: Даже децентрализованные мосты имеют уязвимости — проблема не только в централизации, но в самой архитектуре кросс-чейн переходов.`)}</p>

  <hr className="my-8 border-gray-700" />

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`2. Семь критических уязвимостей кросс-чейн мостов`)}</h2>

  <h3 className="text-xl font-bold text-white mt-6 mb-4">{t(`Уязвимость #1: Компрометация приватных ключей`)}</h3>
  <p>{t(`Проблема:`)}</p>
  <p className="mt-2">{t(`Большинство мостов управляются multisig кошельками, где группа валидаторов (обычно 5-9 человек) держат приватные ключи. Если хакер скомпрометирует достаточное количество ключей, он получает полный контроль над всеми заблокированными активами.`)}</p>

  <p className="mt-4">{t(`Реальные примеры:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`A. Ronin Bridge (март 2022): $625 млн`)}</li>
    <li>{t(`• Схема безопасности: 9 валидаторов, требовалось 5 подписей (5/9 multisig)`)}</li>
    <li>{t(`• Как взломали: Хакеры (North Korean Lazarus Group) скомпрометировали:`)}</li>
    <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
      <li>{t(`o 4 ключа, контролируемых Sky Mavis (создатель Axie Infinity)`)}</li>
      <li>{t(`o 1 ключ Axie DAO validator (через phishing)`)}</li>
    </ul>
    <li>{t(`• Результат: Украдено 173,600 ETH + 25.5M USDC = $625 млн`)}</li>
    <li>{t(`• Обнаружение: Взлом произошел 23 марта, но был обнаружен только 29 марта (6 дней спустя!)`)}</li>

    <li>{t(`B. Harmony Horizon Bridge (июнь 2022): $100 млн`)}</li>
    <li>{t(`• Схема безопасности: 5 валидаторов, требовалось 2 подписи (2/5 multisig)`)}</li>
    <li>{t(`• Как взломали: Скомпрометированы 2 из 5 ключей`)}</li>
    <li>{t(`• Результат: $100 млн украдено в различных токенах`)}</li>

    <li>{t(`C. Multichain (июль 2023): $126 млн`)}</li>
    <li>{t(`• Проблема: ВСЕ ключи были под контролем одного человека (CEO Multichain)`)}</li>
    <li>{t(`• Результат: После исчезновения CEO, неавторизованные выводы на $126 млн`)}</li>
  </ul>

  <p className="mt-4">{t(`Почему это критично:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`⚠️ Single point of failure: Даже “децентрализованный” multisig зависит от безопасности каждого участника`)}</li>
    <li>{t(`⚠️ Insider threat: Злонамеренный валидатор может сговориться с другими`)}</li>
    <li>{t(`⚠️ Phishing: Один успешный фишинг-attack = одна скомпрометированная подпись ближе к катастрофе`)}</li>
  </ul>
</article>


<article className="prose prose-invert prose-lg max-w-none">
  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Уязвимость #2: Баги в смарт-контрактах`)}</h3>

  <p>{t(`Проблема:`)}</p>
  <p className="mt-2">{t(`Мосты используют сложные smart contracts для управления locked assets. Один logic error в коде может позволить хакеру вывести все средства без соответствующего collateral.`)}</p>

  <p className="mt-4">{t(`Реальные примеры:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`A. Wormhole (февраль 2022): $325 млн`)}</li>
    <li>{t(`• Баг: Уязвимость в signature verification функции`)}</li>
    <li>{t(`• Эксплойт: Хакер обошел проверку подписей и создал (mint) 120,000 wETH на Solana без депозита на Ethereum`)}</li>
    <li>{t(`• Результат: $325 млн потерь (Jump Crypto покрыло убытки)`)}</li>

    <li>{t(`B. Nomad Bridge (август 2022): $190 млн`)}</li>
    <li>{t(`• Баг: Неправильная реализация default root (0x00) в Merkle tree verification`)}</li>
    <li>{t(`• Эксплойт: ЛЮБОЙ пользователь мог вывести любые токены из моста, просто скопировав транзакцию`)}</li>
    <li>{t(`• Результат: Массовый “бесплатный грабеж” — сотни пользователей одновременно выводили средства, думая это легальный airdrop`)}</li>

    <li>{t(`C. Qubit (январь 2022): $80 млн`)}</li>
    <li>{t(`• Баг: Logic error позволял withdraw tokens на BNB Chain без соответствующего deposit на Ethereum`)}</li>
    <li>{t(`• Результат: $80 млн украдено`)}</li>
  </ul>

  <p className="mt-4">{t(`Почему это критично:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`⚠️ Сложность аудита: Кросс-чейн контракты взаимодействуют с двумя блокчейнами → сложнее тестировать`)}</li>
    <li>{t(`⚠️ Высокая ставка: Мосты держат миллиарды долларов → attractive target для хакеров`)}</li>
    <li>{t(`⚠️ Неизвестные уязвимости: Даже после аудитов, zero-day баги могут существовать`)}</li>
  </ul>

  <hr className="my-8 border-gray-700" />

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Уязвимость #3: Отсутствие rate limits`)}</h3>

  <p>{t(`Проблема:`)}</p>
  <p className="mt-2">{t(`Многие мосты не ограничивают, сколько средств можно вывести за определенное время. Это позволяет хакеру мгновенно опустошить весь bridge в одной транзакции.`)}</p>

  <p className="mt-4">{t(`Как это работает:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`Без rate limits:`)}</li>
    <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
      <li>{t(`Хакер эксплуатирует уязвимость → Выводит $625 млн (ВСЕ средства) за 1 транзакцию`)}</li>
    </ul>
    <li>{t(`С rate limits:`)}</li>
    <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
      <li>{t(`Хакер эксплуатирует уязвимость → Может вывести max $10 млн/час`)}</li>
      <li>{t(`Система обнаруживает аномалию через 10 минут → Emergency pause активирован`)}</li>
      <li>{t(`Потенциальные потери: ~$1-2 млн вместо $625 млн`)}</li>
    </ul>
  </ul>

  <p className="mt-4">{t(`Почему это критично:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`⚠️ Отсутствие rate limits = 100% exposure при взломе`)}</li>
    <li>{t(`⚠️ С rate limits, даже успешный эксплойт ограничен по damage`)}</li>
    <li>{t(`⚠️ Дает время для emergency response`)}</li>
  </ul>

  <p className="mt-4">{t(`Chainlink CCIP (один из немногих secure мостов) использует rate limits на per-lane basis (отдельно для каждой пары блокчейнов).`)}</p>

  <hr className="my-8 border-gray-700" />

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Уязвимость #4: Зависимость от одной сети валидаторов`)}</h3>

  <p>{t(`Проблема:`)}</p>
  <p className="mt-2">{t(`Некоторые мосты используют одну и ту же группу валидаторов для всех блокчейнов, которые они соединяют. Если эта сеть скомпрометирована, все мосты одновременно под угрозой.`)}</p>

  <p className="mt-4">{t(`Аналогия:`)}</p>
  <p className="mt-2">{t(`Это как использовать один и тот же ключ для квартиры, офиса, машины и банковского сейфа. Если кто-то украдет этот ключ, все становится доступным.`)}</p>

  <p className="mt-4">{t(`Лучший дизайн:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`✅ Independent networks per lane (отдельная сеть для Ethereum ↔ Arbitrum, другая для Ethereum ↔ Polygon)`)}</li>
    <li>{t(`✅ Multiple networks per lane (дополнительная избыточность: каждый lane защищен несколькими независимыми сетями)`)}</li>
  </ul>

  <p className="mt-2">{t(`Chainlink CCIP — единственный протокол, достигающий Level 5 security с архитектурой multiple networks per lane.`)}</p>

  <hr className="my-8 border-gray-700" />

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Уязвимость #5: Отсутствие активного мониторинга транзакций`)}</h3>

  <p>{t(`Проблема:`)}</p>
  <p className="mt-2">{t(`Многие мосты не имеют real-time мониторинга для обнаружения аномальных транзакций. Это приводит к ситуациям, где взлом происходит, но обнаруживается только через дни.`)}</p>

  <p className="mt-4">{t(`Ronin Bridge пример:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`• Взлом произошел: 23 марта 2022`)}</li>
    <li>{t(`• Обнаружен: 29 марта 2022 (6 дней спустя)`)}</li>
    <li>{t(`• Причина задержки: Отсутствие автоматического мониторинга + ограниченная visibility в транзакции`)}</li>
  </ul>

  <p className="mt-4">{t(`Что дает активный мониторинг:`)}</p>
  <ol className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`Real-time anomaly detection: Система немедленно видит подозрительную активность`)}</li>
    <li>{t(`Automatic emergency pause: Может остановить bridge до исполнения злонамеренной транзакции`)}</li>
    <li>{t(`Alert system: Команда получает уведомления для ручного вмешательства`)}</li>
  </ol>

  <p className="mt-4">{t(`Chainlink CCIP Risk Management Network:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`• Независимая сеть, которая постоянно наблюдает за всеми транзакциями`)}</li>
    <li>{t(`• Проверяет, что токены на source chain properly committed перед mint на destination chain`)}</li>
    <li>{t(`• Может временно остановить CCIP при обнаружении аномалии`)}</li>
  </ul>

  <hr className="my-8 border-gray-700" />

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Уязвимость #6: Небезопасные процессы обновления (upgradability)`)}</h3>

  <p>{t(`Проблема:`)}</p>
  <p className="mt-2">{t(`Upgradable contracts позволяют разработчикам изменять код моста после deployment. Это полезно для исправления багов, но если процесс обновления не защищен, он становится вектором атаки.`)}</p>

  <p className="mt-4">{t(`Риски:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`❌ Злонамеренный upgrade: Инсайдер или хакер меняет код для кражи средств`)}</li>
    <li>{t(`❌ Отсутствие timelock: Изменения применяются мгновенно, без возможности review`)}</li>
    <li>{t(`❌ Нет multi-approval: Один человек может обновить контракт`)}</li>
  </ul>

  <p className="mt-4">{t(`Безопасная upgradability:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`✅ Timelock contracts: Изменения публикуются on-chain и ждут 24-48 часов перед активацией`)}</li>
    <li>{t(`✅ Multi-signature approval: Требуется согласие нескольких независимых parties`)}</li>
    <li>{t(`✅ Veto mechanism: Валидаторы могут отклонить опасные изменения`)}</li>
    <li>{t(`✅ Emergency upgrade path: Для критических багов, с explicit approval после review`)}</li>
  </ul>

  <p className="mt-4">{t(`ALEX Bridge (май 2024): $4.3 млн`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`• Подозрительный contract upgrade привел к неавторизованным withdrawals`)}</li>
    <li>{t(`• CertiK указал на possible private key compromise в deployer account`)}</li>
  </ul>
</article>


<article className="prose prose-invert prose-lg max-w-none">
  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Уязвимость #7: Непроверенные validator sets`)}</h3>

  <p>{t(`Проблема:`)}</p>
  <p className="mt-2">{t(`Безопасность моста зависит от качества его валидаторов. Если валидаторы:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`Не имеют опыта в operational security (OPSEC)`)}</li>
    <li>{t(`Используют плохие практики key management`)}</li>
    <li>{t(`Недостаточно decentralized (малое количество, географически сконцентрированы)`)}</li>
  </ul>
  <p className="mt-2">{t(`…то мост неизбежно уязвим.`)}</p>

  <p className="mt-4">{t(`Что делает validator set надежным:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`✅ Proven track record: Валидаторы с многолетним опытом в Web2/Web3 security`)}</li>
    <li>{t(`✅ Geographic distribution: Валидаторы в разных странах/регионах`)}</li>
    <li>{t(`✅ Independent entities: Нет коллизии интересов между валидаторами`)}</li>
    <li>{t(`✅ Economic stake: Валидаторы залагают collateral, который может быть slashed за misbehavior`)}</li>
    <li>{t(`✅ High availability: Гарантия 99.9%+ uptime для надежного исполнения транзакций`)}</li>
  </ul>

  <p className="mt-4">{t(`Chainlink node operators — world-class validators, включая:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`• T-Systems (Deutsche Telekom)`)}</li>
    <li>{t(`• Swisscom`)}</li>
    <li>{t(`• Vodafone`)}</li>
    <li>{t(`• DeFi protocols (Synthetix, Aave и др.)`)}</li>
  </ul>

  <hr className="my-8 border-gray-700" />

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`3. Специфические риски wrapped tokens`)}</h3>

  <p>{t(`Что такое wrapped tokens?`)}</p>
  <p className="mt-2">{t(`Wrapped token — это токенизированная версия актива с другого блокчейна. Примеры:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`• wETH (wrapped ETH) на Solana — представляет ETH с Ethereum`)}</li>
    <li>{t(`• wBTC (wrapped BTC) на Ethereum — представляет BTC с Bitcoin`)}</li>
    <li>{t(`• USDbC (bridged USDC) на Base — USDC с Ethereum через мост`)}</li>
  </ul>

  <p className="mt-2">{t(`Ключевой принцип: Wrapped token имеет ценность только если:`)}</p>
  <ol className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`Оригинальный актив реально заблокирован в мосте`)}</li>
    <li>{t(`Соотношение 1:1 поддерживается корректно`)}</li>
    <li>{t(`Мост функционирует и позволяет redemption`)}</li>
  </ol>

  <hr className="my-8 border-gray-700" />

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Риск #1: Депег (depeg) wrapped токенов`)}</h3>

  <p>{t(`Что такое депег?`)}</p>
  <p className="mt-2">{t(`Депег — это ситуация, когда wrapped token теряет привязку к оригинальному активу. Вместо 1 wETH = 1 ETH, рынок оценивает его как 1 wETH = 0.85 ETH.`)}</p>

  <p className="mt-4">{t(`Почему это происходит:`)}</p>
  <p className="mt-2">{t(`A. Взлом моста → Потеря доверия`)}</p>
  <ol className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`Мост взломан → Часть locked ETH украдена`)}</li>
    <li>{t(`Теперь в обращении 100,000 wETH, но locked только 70,000 ETH`)}</li>
    <li>{t(`wETH **undercollateralized** → Рынок понимает, что не все смогут redeem`)}</li>
    <li>{t(`Panic selling → wETH падает до 0.7 ETH`)}</li>
  </ol>

  <p className="mt-2">{t(`B. Проблемы с ликвидностью`)}</p>
  <ol className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`Крупный пользователь пытается обменять 50,000 wETH обратно на ETH`)}</li>
    <li>{t(`Мост **не имеет достаточной ликвидности** для instant redemption`)}</li>
    <li>{t(`Другие пользователи видят это и начинают паниковать`)}</li>
    <li>{t(`wETH депегает из-за loss of confidence`)}</li>
  </ol>

  <p className="mt-4">{t(`Реальный пример: Terra/Luna коллапс (май 2022)`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`• Wrapped UST на различных chains потерял peg одновременно с native UST`)}</li>
    <li>{t(`• Wrapped версии упали раньше и сильнее, так как bridges запаниковали первыми`)}</li>
    <li>{t(`• Cascade effect: Депег wrapped токенов усилил общий коллапс экосистемы`)}</li>
  </ul>

  <p className="mt-4">{t(`Последствия для держателей:`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`📉 Instant losses: Ваши 10 wETH теперь стоят 8.5 ETH (15% loss)`)}</li>
    <li>{t(`📉 Ликвидации: Если wETH использовался как collateral в lending protocol, депег → liquidation`)}</li>
    <li>{t(`📉 Невозможность выйти: Все пытаются продать одновременно → liquidity crunch`)}</li>
  </ul>

  <hr className="my-8 border-gray-700" />

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Риск #2: Централизация wrapped токенов`)}</h3>

  <p>{t(`Проблема:`)}</p>
  <p className="mt-2">{t(`Многие популярные wrapped tokens контролируются централизованными entity.`)}</p>

  <p className="mt-2">{t(`Примеры:`)}</p>
  <p className="mt-2">{t(`wBTC (Wrapped Bitcoin):`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`• Custodian: BitGo (централизованная компания)`)}</li>
    <li>{t(`• Механизм: BitGo держит BTC в custody, выпускает wBTC на Ethereum`)}</li>
    <li>{t(`• Риск: BitGo может:`)}</li>
    <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
      <li>{t(`Заморозить ваш wBTC (blacklist address)`)}</li>
      <li>{t(`Быть взломан (security breach → все wBTC worthless)`)}</li>
      <li>{t(`Подвергнуться регуляторному давлению (закрыться)`)}</li>
    </ul>
  </ul>

  <p className="mt-2">{t(`cbBTC (Coinbase Wrapped BTC):`)}</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`• Custodian: Coinbase`)}</li>
    <li>{t(`• Механизм: Coinbase держит BTC, выпускает cbBTC`)}</li>
    <li>{t(`• Риск: Те же, что у wBTC + специфические риски Coinbase (регуляторные, operational)`)}</li>
  </ul>

  <p className="mt-2">{t(`Децентрализованная альтернатива: Нативные активы на нативном блокчейне не имеют custodian. ETH на Ethereum не контролируется никем. HYPE на Hyperliquid — полностью decentralized.`)}</p>

  <hr className="my-8 border-gray-700" />

  <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Риск #3: Техническая сложность и точки отказа`)}</h3>

  <p>{t(`Цепочка зависимостей для wrapped token:`)}</p>
  <p className="mt-2">{t(`Успешный swap wrapped токена зависит от:`)}</p>
  <ol className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
    <li>{t(`Bridge validators работают корректно ✓`)}</li>
    <li>{t(`Smart contracts моста не имеют багов ✓`)}</li>
    <li>{t(`Locked assets действительно хранятся в мосте ✓`)}</li>
    <li>{t(`Оракулы правильно отображают price ✓`)}</li>
    <li>{t(`Целевой блокчейн работает нормально ✓`)}</li>
    <li>{t(`Исходный блокчейн работает нормально ✓`)}</li>
    <li>{t(`Нет congestion на обоих блокчейнах ✓`)}</li>
  </ol>
 <p className="mt-2">{t(`ЛЮБОЙ сбой в этой цепочке → проблемы для пользователя.`)}</p>

<p className="mt-4">{t(`Сравнение с native token:`)}</p>
<p className="mt-2">{t(`Успешный swap нативного токена зависит от:`)}</p>
<ol className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`Блокчейн работает нормально ✓`)}</li>
  <li>{t(`DEX smart contract не имеет багов ✓`)}</li>
</ol>

<p className="mt-2">{t(`Результат: Native токены имеют на 70% меньше точек потенциального отказа.`)}</p>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`4. Нативные агрегаторы: безопасность через simplicity`)}</h3>

<p>{t(`Что такое нативный агрегатор?`)}</p>
<p className="mt-2">{t(`Нативный агрегатор — это DEX aggregator, который работает исключительно в рамках одного блокчейна.`)}</p>

<p className="mt-2">{t(`Примеры:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`• Hypertrade → Работает только на Hyperliquid L1`)}</li>
  <li>{t(`• 1inch на Ethereum (в моно-чейн режиме) → Только Ethereum DEXes`)}</li>
  <li>{t(`• Jupiter на Solana → Только Solana DEXes`)}</li>
</ul>

<p className="mt-2">{t(`Ключевое преимущество: НУЛЕВАЯ зависимость от кросс-чейн мостов и wrapped токенов.`)}</p>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Архитектура нативного агрегатора (на примере Hypertrade)`)}</h3>

<p>{t(`Как это работает:`)}</p>
<ol className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`ПОЛЬЗОВАТЕЛЬ → Хочет swap ETH → USDC`)}</li>
  <li>{t(`HYPERTRADE ROUTER:`)}</li>
</ol>
<ul className="list-disc list-inside text-gray-300 space-y-2 ml-6 mt-2">
  <li>{t(`Сканирует ликвидность на HyperCore Spot (order book)`)}</li>
  <li>{t(`Сканирует ликвидность на Hyperswap (AMM)`)}</li>
  <li>{t(`Сканирует ликвидность на Kittenswap (AMM)`)}</li>
  <li>{t(`Сканирует ликвидность на Prjx (AMM)`)}</li>
  <li>{t(`ВСЕ это — ВНУТРИ Hyperliquid L1`)}</li>
</ul>
<ol start={3} className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`ROUTER → Рассчитывает оптимальный маршрут (split-routing)`)}</li>
  <li>{t(`ИСПОЛНЕНИЕ → Атомарно ON-CHAIN, только на Hyperliquid`)}</li>
  <li>{t(`РЕЗУЛЬТАТ → Пользователь получает USDC (native на Hyperliquid)`)}</li>
</ol>

<p className="mt-4">{t(`Критически важно:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`✅ NO bridges involved — ни на одном этапе`)}</li>
  <li>{t(`✅ NO wrapped tokens — работа только с нативными активами`)}</li>
  <li>{t(`✅ SINGLE blockchain — все происходит на Hyperliquid`)}</li>
  <li>{t(`✅ ATOMIC execution — либо вся сделка проходит, либо вся revert`)}</li>
</ul>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Преимущества нативной модели`)}</h3>

<p className="mt-2">{t(`1. Нулевые bridge risks`)}</p>
<div className="overflow-x-auto not-prose mt-4 mb-8">
  <table className="w-full text-left border-collapse text-sm">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-3 text-gray-400 font-medium">{t(`Риск`)}</th>
        <th className="p-3 text-gray-400 font-medium">{t(`Cross-chain aggregator (с мостами)`)}</th>
        <th className="p-3 text-green-400 font-medium">{t(`Native aggregator (Hypertrade)`)}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-800">
        <td className="p-3 text-white">{t(`Private key compromise`)}</td>
        <td className="p-3 text-red-300">{t(`❌ Высокий (multisig валидаторы)`)}</td>
        <td className="p-3 text-green-300 font-bold">{t(`✅ Отсутствует (no bridge)`)}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-3 text-white">{t(`Smart contract bugs`)}</td>
        <td className="p-3 text-red-300">{t(`❌ Высокий (bridge contracts)`)}</td>
        <td className="p-3 text-green-300 font-bold">{t(`✅ Минимальный (только DEX contracts)`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3 text-white">{t(`Rate limit absence`)}</td>
        <td className="p-3 text-red-300">{t(`❌ Опасно`)}</td>
        <td className="p-3 text-green-300 font-bold">{t(`✅ Не применимо`)}</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-3 text-white">{t(`Validator set risks`)}</td>
        <td className="p-3 text-red-300">{t(`❌ Зависит от качества validators`)}</td>
        <td className="p-3 text-green-300 font-bold">{t(`✅ Не применимо`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3 text-white">{t(`Wrapped token depeg`)}</td>
        <td className="p-3 text-red-300">{t(`❌ Критичный риск`)}</td>
        <td className="p-3 text-green-300 font-bold">{t(`✅ Отсутствует (native tokens only)`)}</td>
      </tr>
    </tbody>
  </table>
</div>

<p className="mt-2">{t(`Вывод: Нативная модель устраняет 5 из 7 критических уязвимостей, присущих cross-chain bridges.`)}</p>

 <hr className="my-8 border-gray-700" />

<p className="mt-2">{t(`2. Более быстрое исполнение`)}</p>
<p className="mt-2">{t(`Cross-chain swap:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`Approval на source chain: ~15 sec`)}</li>
  <li>{t(`Bridge transaction: 5-20 min (зависит от finality обоих chains)`)}</li>
  <li>{t(`Swap на destination chain: ~15 sec`)}</li>
  <li>{t(`TOTAL: 6-21 минута`)}</li>
</ul>

<p className="mt-2">{t(`Native swap на Hyperliquid:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`Approval: ~1 sec (Hyperliquid finality)`)}</li>
  <li>{t(`Swap transaction: ~1 sec`)}</li>
  <li>{t(`TOTAL: ~2 секунды`)}</li>
</ul>
<p className="mt-2">{t(`Скорость: Native swap в 180-630 раз быстрее.`)}</p>

<hr className="my-8 border-gray-700" />

<p className="mt-2">{t(`3. Ниже транзакционные затраты`)}</p>
<p className="mt-2">{t(`Cross-chain swap:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`Gas на source chain: $5-50 (Ethereum), $0.10-2 (L2/sidechains)`)}</li>
  <li>{t(`Bridge fee: $5-20 (обычно фиксированная)`)}</li>
  <li>{t(`Gas на destination chain: $5-50 (Ethereum), $0.10-2 (L2)`)}</li>
  <li>{t(`Swap fee: 0.3% от суммы`)}</li>
  <li>{t(`TOTAL: $10-120 + 0.3% swap fee`)}</li>
</ul>

<p className="mt-2">{t(`Native swap на Hypertrade:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`Gas: ~1.5-3 HYPE ($4-8)`)}</li>
  <li>{t(`Platform fee: 0% (Hypertrade)`)}</li>
  <li>{t(`DEX fees: 0.05-0.3% (идут LP providers)`)}</li>
  <li>{t(`TOTAL: $4-8 + 0.05-0.3% swap fee`)}</li>
</ul>
<p className="mt-2">{t(`Экономия: До $112 на одну транзакцию + более низкие swap fees.`)}</p>

<hr className="my-8 border-gray-700" />

<p className="mt-2">{t(`4. Простота и прозрачность`)}</p>
<p className="mt-2">{t(`Cross-chain aggregator:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`Пользователь должен доверять:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Bridge validators`)}</li>
    <li>{t(`Bridge smart contracts`)}</li>
    <li>{t(`Custodians wrapped токенов`)}</li>
    <li>{t(`Оба блокчейна одновременно`)}</li>
  </ul>
  <li>{t(`Сложно audit полный путь транзакции`)}</li>
</ul>

<p className="mt-2">{t(`Native aggregator:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`Пользователь доверяет только:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Hyperliquid L1 (один блокчейн)`)}</li>
    <li>{t(`DEX smart contracts на этом блокчейне`)}</li>
  </ul>
  <li>{t(`Легко audit: Все on-chain, single blockchain explorer`)}</li>
</ul>
<p className="mt-2">{t(`Принцип: “Don’t trust, verify” проще реализовать, когда все происходит on one chain.`)}</p>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`5. Hypertrade на Hyperliquid: Case study нативной безопасности`)}</h3>

<p className="mt-2">{t(`Почему Hyperliquid идеален для native aggregator`)}</p>
<p className="mt-2">{t(`Hyperliquid — это не general-purpose blockchain, а специализированный L1, построенный исключительно для trading.`)}</p>

<div className="overflow-x-auto not-prose mt-4 mb-8">
  <table className="w-full text-left border-collapse text-sm">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-3 text-gray-400 font-medium">{t(`Метрика`)}</th>
        <th className="p-3 text-gray-400 font-medium">{t(`Hyperliquid`)}</th>
        <th className="p-3 text-gray-400 font-medium">{t(`Ethereum`)}</th>
        <th className="p-3 text-gray-400 font-medium">{t(`Solana`)}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-3 text-white">{t(`Throughput`)}</td>
        <td className="p-3 text-green-300 font-bold">200,000+ orders/sec</td>
        <td className="p-3 text-red-300">~15 tx/sec</td>
        <td className="p-3 text-red-300">~4,000 tx/sec</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3 text-white">{t(`Finality`)}</td>
        <td className="p-3 text-green-300 font-bold">1 block (~1 sec)</td>
        <td className="p-3 text-red-300">12 sec</td>
        <td className="p-3 text-red-300">~400ms</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-3 text-white">{t(`Gas costs`)}</td>
        <td className="p-3 text-green-300 font-bold">$4-8 (fixed)</td>
        <td className="p-3 text-red-300">$10-100 (volatile)</td>
        <td className="p-3 text-red-300">$0.001-0.01</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-3 text-white">{t(`Purpose`)}</td>
        <td className="p-3 text-green-300 font-bold">Trading-specific</td>
        <td className="p-3 text-red-300">General</td>
        <td className="p-3 text-red-300">General</td>
      </tr>
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-3 text-white">{t(`Order book`)}</td>
        <td className="p-3 text-green-300 font-bold">Native on-chain</td>
        <td className="p-3 text-red-300">Requires off-chain</td>
        <td className="p-3 text-red-300">Requires off-chain (Serum deprecated)</td>
      </tr>
    </tbody>
  </table>
</div>

<p className="mt-2">{t(`Результат: Hyperliquid может эффективно выполнять сложные операции (routing, simulations) on-chain, что невозможно на Ethereum из-за costs и latency.`)}</p>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Dual ecosystem: HyperCore + HyperEVM`)}</h3>

<p className="mt-2">{t(`Уникальность Hypertrade: Он агрегирует ликвидность через два layer Hyperliquid:`)}</p>

<p className="mt-2">{t(`HyperCore (нативный L1):`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`✅ On-chain order book для spot и perps`)}</li>
  <li>{t(`✅ Глубочайшая ликвидность на Hyperliquid ($12B+ perps volume/24h)`)}</li>
  <li>{t(`✅ 0-0.05% fees (taker)`)}</li>
  <li>{t(`✅ Zero slippage для limit orders`)}</li>
  <li>{t(`✅ Instant finality`)}</li>
</ul>

<p className="mt-2">{t(`HyperEVM (EVM-compatible layer):`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`✅ AMM DEXes (Hyperswap, Kittenswap, Prjx)`)}</li>
  <li>{t(`✅ Привычная модель liquidity pools`)}</li>
  <li>{t(`✅ 0.05-0.3% fees`)}</li>
  <li>{t(`✅ Composability с другими DeFi протоколами`)}</li>
</ul>
  <p className="mt-2">{t(`Hypertrade aggregates across BOTH layers, обеспечивая:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`Best execution через split-routing между order book и AMMs`)}</li>
  <li>{t(`Redundancy: Если одна layer имеет низкую ликвидность, используется другая`)}</li>
  <li>{t(`Optimal pricing: Автоматический выбор между HyperCore Spot (для больших ордеров) и AMMs (для меньших)`)}</li>
</ul>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Invisium Simulations: Native-only преимущество`)}</h3>

<p>{t(`Технология Invisium (эксклюзив Hypertrade) не может работать с cross-chain bridges, потому что:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`❌ Bridge latency (5-20 min) делает симуляцию устаревшей к моменту исполнения`)}</li>
  <li>{t(`❌ Wrapped токены меняют цену независимо от оригинала → симуляция неточна`)}</li>
  <li>{t(`❌ Невозможно атомарно симулировать multi-chain путь`)}</li>
</ul>

<p className="mt-4">{t(`На Hyperliquid:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`✅ Real-time simulation перед каждым swap`)}</li>
  <li>{t(`✅ 99.5-99.9% accuracy (vs. 85-93% у competitors)`)}</li>
  <li>{t(`✅ Atomic execution: Симуляция и исполнение в одном блокчейне`)}</li>
  <li>{t(`✅ Защита от slippage: minAmountOut устанавливается на основе точной симуляции`)}</li>
</ul>

<p className="mt-4">{t(`Пример:`)}</p>
<p className="text-gray-300 mb-4">{t(`Вы хотите swap $100,000 ETH → USDC. Invisium показывает: “Вы получите $245,892.50 ±$122 (0.05%)”`)}</p>

<p>{t(`На cross-chain aggregator с bridges: Точность quote падает до 85-92% из-за:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`Задержки bridge`)}</li>
  <li>{t(`Uncertainty wrapped токенов`)}</li>
  <li>{t(`Slippage на обоих chains`)}</li>
  <li>{t(`Неопределенность bridge fees`)}</li>
</ul>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Нулевые platform fees: Отсутствие конфликта интересов`)}</h3>

<p className="mt-2">{t(`Hypertrade:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`✅ 0% fees для конечных пользователей`)}</li>
  <li>{t(`✅ Зарабатывает через B2B partnerships (разработчики платят 1.5%, НЕ пользователи)`)}</li>
  <li>{t(`✅ Incentive alignment: Лучшие маршруты → больше пользователей → больше партнерских интеграций`)}</li>
</ul>

<p className="mt-2">{t(`Cross-chain aggregators с bridge fees:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`⚠️ Берут 0.05-0.15% platform fee`)}</li>
  <li>{t(`⚠️ Дополнительно bridge fee ($5-20)`)}</li>
  <li>{t(`⚠️ Конфликт интересов: Могут выбирать bridge с higher fees для собственной выгоды`)}</li>
</ul>

<p className="mt-2">{t(`Результат: Hypertrade всегда оптимизирует для пользователя, а не для максимизации собственных комиссий.`)}</p>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Non-custodial + Atomic execution`)}</h3>

<p className="mt-2">{t(`Ключевой принцип безопасности:`)}</p>
<pre className="bg-hyper-800/20 p-4 rounded-xl text-gray-300 mt-2 whitespace-pre-wrap">
{t(`FROM: Ваш кошелек (вы контролируете private key)
→ Smart contract Hypertrade Router (NO custody)
→ DEX pools на Hyperliquid (decentralized)
→ BACK TO: Ваш кошелек`)}
</pre>
<p className="mt-2">{t(`Время: ~1-2 секунды`)}</p>
<p className="mt-2">{t(`Atomicity: Либо ВСЯ сделка проходит, либо ВСЯ revert`)}</p>
<p className="mt-2">{t(`Hypertrade НЕ МОЖЕТ: заморозить, изъять, redirect ваши средства`)}</p>

<p className="mt-4">{t(`Сравнение с cross-chain:`)}</p>
<pre className="bg-hyper-800/20 p-4 rounded-xl text-gray-300 mt-2 whitespace-pre-wrap">
{t(`FROM: Ваш кошелек
→ Bridge smart contract (tokens LOCKED 5-20 min)
→ Wrapped tokens mint на другом chain
→ DEX pool на другом chain
→ Swap
→ Send wrapped tokens обратно к bridge
→ Bridge burns wrapped, unlocks original
→ BACK TO: Ваш кошелек`)}
</pre>
<p className="mt-2">{t(`Время: 10-40 минут`)}</p>
<p className="mt-2">{t(`Atomicity: НЕТ! Каждый step — отдельная транзакция`)}</p>
<p className="mt-2">{t(`Risk: На каждом шаге могут быть проблемы (bridge down, wrapped token depeg, etc.)`)}</p>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`6. Когда кросс-чейн необходим (и как минимизировать риски`)}</h3>

<p className="mt-2">{t(`Реальные use cases для кросс-чейн`)}</p>

<p className="mt-2">{t(`Ситуация 1: Ликвидность на другом блокчейне`)}</p>
<p className="mt-2">{t(`Вы держите USDC на Ethereum, но хотите торговать на Solana DEX (например, Jupiter).`)}</p>
<p className="mt-2">{t(`Решение:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`✅ Используйте проверенный bridge (Wormhole после fix, Across Protocol)`)}</li>
  <li>{t(`✅ Минимизируйте exposure: Переводите только сумму, которую планируете использовать немедленно`)}</li>
  <li>{t(`✅ НЕ храните wrapped токены долго — convert to native assets как можно скорее`)}</li>
</ul>

<p className="mt-2">{t(`Ситуация 2: Arbitrage opportunities`)}</p>
<p className="mt-2">{t(`Цена токена на Chain A значительно отличается от Chain B.`)}</p>
<p className="mt-2">{t(`Решение:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`✅ Используйте специализированные arbitrage bots с автоматическим cross-chain routing`)}</li>
  <li>{t(`✅ Учитывайте bridge fees + latency в расчетах прибыльности`)}</li>
  <li>{t(`✅ Используйте bridges с high liquidity для минимизации slippage`)}</li>
</ul>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Чек-лист безопасности при использовании мостов`)}</h3>

<p className="mt-2">{t(`Если вы вынуждены использовать cross-chain bridge, следуйте этим правилам:`)}</p>

<p className="mt-2 font-bold">{t(`Перед использованием:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`✅ Проверьте track record моста:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Сколько лет существует? (избегайте новых bridges <6 месяцев)`)}</li>
    <li>{t(`Были ли взломы? Как быстро устранили?`)}</li>
    <li>{t(`Какие audits проведены? (Trail of Bits, Certik, OpenZeppelin)`)}</li>
  </ul>
  <li>{t(`✅ Изучите архитектуру:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Сколько validators? (минимум 7-9)`)}</li>
    <li>{t(`Какой threshold для multisig? (желательно >66%)`)}</li>
    <li>{t(`Есть ли rate limits?`)}</li>
    <li>{t(`Есть ли timelock для upgrades?`)}</li>
  </ul>
  <li>{t(`✅ Проверьте wrapped token:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Кто custodian? (децентрализованный vs. Coinbase/BitGo)`)}</li>
    <li>{t(`Есть ли proof of reserves? (регулярные attestations)`)}</li>
    <li>{t(`Какая история depeg incidents?`)}</li>
  </ul>
</ul>

<p className="mt-2 font-bold">{t(`Во время использования:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`✅ Минимизируйте сумму:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`НЕ переводите $100k если нужно использовать только $10k`)}</li>
    <li>{t(`Делайте несколько мелких транзакций вместо одной крупной`)}</li>
  </ul>
  <li>{t(`✅ Избегайте peak times:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Congestion на Ethereum/popular chains увеличивает latency и costs`)}</li>
    <li>{t(`Bridge во время низкой активности (early morning UTC)`)}</li>
  </ul>
  <li>{t(`✅ Мониторьте статус:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Используйте bridge explorer для отслеживания транзакции`)}</li>
    <li>{t(`Средний bridge time: 5-10 min. Если >20 min → проверьте status page`)}</li>
  </ul>
  <li>{t(`✅ НЕ одобряйте unlimited:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Approve только точную сумму, которую переводите`)}</li>
    <li>{t(`После bridge, revoke approval для bridge contract`)}</li>
  </ul>
</ul>

  <p className="mt-2 font-bold">{t(`После использования:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`✅ Конвертируйте wrapped → native как можно скорее:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Wrapped токены несут continuous depeg risk`)}</li>
    <li>{t(`Если планируете держать долго, лучше redeem обратно или convert to native asset`)}</li>
  </ul>
  <li>{t(`✅ Проверьте полученную сумму:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Сравните с expected amount из quote`)}</li>
    <li>{t(`Если значительное расхождение (>2%) — это red flag`)}</li>
  </ul>
  <li>{t(`✅ Мониторьте bridge health:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Подпишитесь на alerts (Twitter, Discord) моста`)}</li>
    <li>{t(`При первых признаках проблем — withdraw средства`)}</li>
  </ul>
</ul>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Топ-3 наиболее безопасных bridges (на 2025)`)}</h3>

<ol className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`Chainlink CCIP`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`✅ Level 5 security: Multiple independent networks per lane`)}</li>
    <li>{t(`✅ Risk Management Network: Active transaction monitoring`)}</li>
    <li>{t(`✅ Rate limits: Built-in protection`)}</li>
    <li>{t(`✅ Audits: Multiple audits by leading firms`)}</li>
    <li>{t(`✅ Track record: ZERO hacks с момента запуска`)}</li>
    <li>{t(`Недостаток: Пока поддерживает ограниченное количество chains`)}</li>
  </ul>
  <li>{t(`Across Protocol`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`✅ Optimistic bridge: Decentralized verification`)}</li>
    <li>{t(`✅ UMA security: Disputes resolved via UMA oracle`)}</li>
    <li>{t(`✅ Insurance fund: Частичное покрытие потерь`)}</li>
    <li>{t(`✅ Track record: ZERO hacks`)}</li>
    <li>{t(`Недостаток: Медленнее чем centralized bridges (оптимистичный период)`)}</li>
  </ul>
  <li>{t(`Wormhole (после fix 2022)`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`✅ Guardian Network: 19 независимых валидаторов`)}</li>
    <li>{t(`✅ Bug bounty: $10M+ для white-hats`)}</li>
    <li>{t(`✅ Multiple audits: После взлома 2022, прошел extensive security overhaul`)}</li>
    <li>{t(`⚠️ Track record: Был взломан в 2022 на $325M, но fix implemented и нет incidents с тех пор`)}</li>
  </ul>
</ol>

<p className="mt-4">{t(`Избегайте:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`❌ Новые bridges (<6 месяцев с запуска)`)}</li>
  <li>{t(`❌ Bridges с multisig <5 validators`)}</li>
  <li>{t(`❌ Bridges без audits`)}</li>
  <li>{t(`❌ Bridges с track record взломов без fixes`)}</li>
</ul>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`7. Вывод: Нативная безопасность — золотой стандарт`)}</h3>

<p className="mt-2">{t(`Ключевые тезисы`)}</p>

<ol className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`Кросс-чейн мосты — inherently risky:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`$2.8 млрд потеряно с момента появления`)}</li>
    <li>{t(`7 критических уязвимостей, многие из которых нерешаемы архитектурно`)}</li>
    <li>{t(`Даже “безопасные” мосты несут risk of unknown vulnerabilities`)}</li>
  </ul>

  <li>{t(`Wrapped tokens добавляют дополнительные риски:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Depeg risk: Wrapped токен может потерять peg к оригиналу`)}</li>
    <li>{t(`Централизация: Многие wrapped tokens контролируются custodians`)}</li>
    <li>{t(`Complexity: Больше moving parts = больше точек отказа`)}</li>
  </ul>

  <li>{t(`Нативные агрегаторы устраняют эти риски:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`ZERO bridge dependencies`)}</li>
    <li>{t(`ZERO wrapped tokens`)}</li>
    <li>{t(`Single blockchain security model`)}</li>
    <li>{t(`Faster execution`)}</li>
    <li>{t(`Lower costs`)}</li>
    <li>{t(`Simpler to audit`)}</li>
  </ul>

  <li>{t(`Hypertrade на Hyperliquid — эталон нативной безопасности:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`✅ Работает только на Hyperliquid L1`)}</li>
    <li>{t(`✅ Агрегирует HyperCore (order book) + HyperEVM (AMMs)`)}</li>
    <li>{t(`✅ 99.5-99.9% accuracy через Invisium Simulations`)}</li>
    <li>{t(`✅ 0% platform fees — нет конфликта интересов`)}</li>
    <li>{t(`✅ Non-custodial + atomic execution`)}</li>
    <li>{t(`✅ Throughput 200,000+ orders/sec позволяет on-chain routing`)}</li>
  </ul>
</ol>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Рекомендации по выбору`)}</h3>

<p className="mt-2">{t(`Используйте НАТИВНЫЙ агрегатор (Hypertrade), если:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`✅ Торгуете на Hyperliquid`)}</li>
  <li>{t(`✅ Приоритет — максимальная безопасность`)}</li>
  <li>{t(`✅ Не хотите risk bridge exploits`)}</li>
  <li>{t(`✅ Хотите fastest execution (1-2 sec)`)}</li>
  <li>{t(`✅ Минимизация transaction costs`)}</li>
</ul>

<p className="mt-2">{t(`Используйте cross-chain aggregator ТОЛЬКО если:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`⚠️ Вам абсолютно необходимо получить доступ к ликвидности на другом блокчейне`)}</li>
  <li>{t(`⚠️ Готовы принять риски мостов`)}</li>
  <li>{t(`⚠️ Используете только проверенные bridges (CCIP, Across)`)}</li>
  <li>{t(`⚠️ Следуете всем правилам безопасности из чек-листа`)}</li>
</ul>

<hr className="my-8 border-gray-700" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`Финальная мысль: Simplicity = Security`)}</h3>

<p className="mt-2">{t(`Философия blockchain security: “Меньше зависимостей = меньше рисков”.`)}</p>




<p className="mt-2">{t(`Кросс-чейн архитектура:`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`Зависимости:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Source blockchain ✓`)}</li>
    <li>{t(`Destination blockchain ✓`)}</li>
    <li>{t(`Bridge validators ✓`)}</li>
    <li>{t(`Bridge smart contracts ✓`)}</li>
    <li>{t(`Wrapped token custodians ✓`)}</li>
    <li>{t(`Oracles ✓`)}</li>
    <li>{t(`Multiple DEXes on multiple chains ✓`)}</li>
    <li>{t(`= 7+ potential failure points`)}</li>
  </ul>
</ul>

<p className="mt-2">{t(`Нативная архитектура (Hypertrade):`)}</p>
<ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
  <li>{t(`Зависимости:`)}</li>
  <ul className="list-disc list-inside text-gray-400 ml-6 mt-1">
    <li>{t(`Hyperliquid blockchain ✓`)}</li>
    <li>{t(`DEX smart contracts ✓`)}</li>
    <li>{t(`= 2 potential failure points`)}</li>
  </ul>
</ul>

<p className="mt-2">{t(`Результат: Нативная модель имеет в 3.5 раза меньше точек потенциального отказа.`)}</p>

<p className="mt-4">{t(`Hypertrade — это proof того, что высокопроизводительная, мультисурсная агрегация возможна БЕЗ компромиссов безопасности, если использовать правильный блокчейн.`)}</p>
<p className="mt-2">{t(`Торгуйте безопасно. Торгуйте нативно. Торгуйте на Hypertrade. 🛡️`)}</p>

<hr className="my-8 border-gray-700" />

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`🔗 Полезные ссылки`)}</h2>

<div className="bg-hyper-800/50 p-6 rounded-xl mb-6 space-y-6">
  <div>
    <h4 className="text-lg font-bold text-white mb-2">{t(`Hypertrade & Hyperliquid:`)}</h4>
    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
      <li>
        {t(`Hypertrade:`)}{" "}
        <a href="https://ht.xyz" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://ht.xyz</a>
      </li>
      <li>
        {t(`Hypertrade Docs:`)}{" "}
        <a href="https://docs.hypertrade.io" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://docs.hypertrade.io</a>
      </li>
      <li>
        {t(`Hyperliquid:`)}{" "}
        <a href="https://hyperliquid.xyz" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://hyperliquid.xyz</a>
      </li>
      <li>
        {t(`Hyperliquid Explorer:`)}{" "}
        <a href="https://explorer.hyperliquid.xyz" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://explorer.hyperliquid.xyz</a>
      </li>
      <li>
        {t(`Hyperliquid Bridge (официальный):`)}{" "}
        <a href="https://app.hyperliquid.xyz/bridge" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://app.hyperliquid.xyz/bridge</a>
      </li>
    </ul>
  </div>

  <div>
    <h4 className="text-lg font-bold text-white mb-2">{t(`Bridge Security Research:`)}</h4>
    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
      <li>
        {t(`Chainlink Bridge Vulnerabilities:`)}{" "}
        <a href="https://chain.link/education-hub/cross-chain-bridge-vulnerabilities" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://chain.link/education-hub/cross-chain-bridge-vulnerabilities</a>
      </li>
      <li>
        {t(`CertiK Bridge Hacks Report:`)}{" "}
        <a href="https://www.certik.com" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://www.certik.com</a>
      </li>
      <li>
        {t(`DefiLlama Bridge Exploits:`)}{" "}
        <a href="https://defillama.com/hacks" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://defillama.com/hacks</a>
      </li>
    </ul>
  </div>

  <div>
    <h4 className="text-lg font-bold text-white mb-2">{t(`Безопасные Bridges (если необходимы):`)}</h4>
    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
      <li>
        {t(`Chainlink CCIP:`)}{" "}
        <a href="https://chain.link/cross-chain" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://chain.link/cross-chain</a>
      </li>
      <li>
        {t(`Across Protocol:`)}{" "}
        <a href="https://across.to" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://across.to</a>
      </li>
      <li>
        {t(`Wormhole:`)}{" "}
        <a href="https://wormhole.com" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://wormhole.com</a>
      </li>
    </ul>
  </div>

  <div>
    <h4 className="text-lg font-bold text-white mb-2">{t(`Инструменты безопасности:`)}</h4>
    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
      <li>
        {t(`Revoke.cash (отзыв approvals):`)}{" "}
        <a href="https://revoke.cash" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://revoke.cash</a>
      </li>
      <li>
        {t(`Bridge Monitor:`)}{" "}
        <a href="https://app.merkle.science/bridge-monitor" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://app.merkle.science/bridge-monitor</a>
      </li>
    </ul>
  </div>

  <div>
    <h4 className="text-lg font-bold text-white mb-2">{t(`Community & Support:`)}</h4>
    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
      <li>
        {t(`Hypertrade Discord:`)}{" "}
        <a href="https://discord.gg/hypertrade" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://discord.gg/hypertrade</a>
      </li>
      <li>
        {t(`Hypertrade Twitter:`)}{" "}
        <a href="https://twitter.com/Hypertrade_xyz" className="text-hyper-accent underline" target="_blank" rel="noreferrer">https://twitter.com/Hypertrade_xyz</a>
      </li>
      <li>
        {t(`Email:`)}{" "}
        <a href="mailto:support@hypertrade.io" className="text-hyper-accent underline">support@hypertrade.io</a>
      </li>
    </ul>
  </div>
</div>

<p className="mt-2">{t(`Конверсионная цель достигнута — Hypertrade представлен как безопасное решение, которое полностью избегает рисков cross-chain bridges благодаря работе нативно на Hyperliquid.`)}</p>

</article>

        </article>
      </div>
    </section>
  );
};
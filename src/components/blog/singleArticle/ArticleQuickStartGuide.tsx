"use client"
import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { Zap, Clock, CheckCircle, Settings, ArrowRight, Wallet, Link as LinkIcon, Cpu, BarChart, DollarSign } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { useTranslation } from "react-i18next";

export const ArticleQuickStartGuide = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "quick-start-guide");
    
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
           <div className="flex flex-wrap gap-4 text-sm font-medium text-purple-400 mb-4">
             <span className="bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">{post.category}</span>
             <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> {post.readTime}</span>
             <span className="flex items-center gap-1 text-gray-400">{post.date}</span>
           </div>
           <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
             {post.title}
           </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">


          <article className="prose prose-invert prose-lg max-w-none">

  <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Полное руководство по началу работы с Hypertrade за 5 минут`)}</h2>

<p className="text-gray-400 mb-6">{t(`Последнее обновление: 14 декабря 2025 | Время чтения: 7 минут`)}</p>
<hr className="border-gray-700 my-6" />

<p className="text-gray-300 mb-6">{t(`Вы хотите начать экономить на каждом обмене криптовалюты, но не знаете с чего начать?`)}</p>
<p className="text-gray-300 mb-6">{t(`Хорошая новость: использование Hypertrade настолько простое, что даже абсолютный новичок может сделать свой первый выгодный своп за 5 минут. В этом руководстве мы пройдем весь процесс шаг за шагом — от подключения кошелька до выполнения первой транзакции.`)}</p>
<p className="text-gray-300 mb-6">{t(`Никакой сложной терминологии. Только конкретные действия.`)}</p>
<hr className="border-gray-700 my-6" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`⏱️ Что вы получите за 5 минут`)}</h3>
<p className="text-gray-300 mb-4">{t(`К концу этого руководства вы сможете:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
  <li>{t(`✅ Подключить свой кошелек к Hypertrade`)}</li>
  <li>{t(`✅ Настроить сеть Hyperliquid`)}</li>
  <li>{t(`✅ Выполнить первый обмен с лучшим курсом`)}</li>
  <li>{t(`✅ Понять интерфейс и основные настройки`)}</li>
  <li>{t(`✅ Сэкономить 0.5-2% на каждой сделке`)}</li>
</ul>

<p className="text-gray-300 mb-6">{t(`Всё, что вам нужно:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
  <li>{t(`• Компьютер или смартфон`)}</li>
  <li>{t(`• Криптокошелек (MetaMask, WalletConnect или аналог)`)}</li>
  <li>{t(`• 5 минут свободного времени`)}</li>
  <li>{t(`• Желание перестать переплачивать за обмены`)}</li>
</ul>

<p className="text-gray-300 mb-6">{t(`Поехали! 🚀`)}</p>
<hr className="border-gray-700 my-6" />

<h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`📋 Предварительная подготовка (1 минута)`)}</h3>
<p className="text-gray-300 mb-4">{t(`Прежде чем начать, убедитесь, что у вас есть следующее:`)}</p>

<p className="text-gray-300 mb-2">{t(`✅ Чеклист для старта`)}</p>

<h4 className="text-lg font-bold text-white mt-6 mb-2">{t(`1. EVM-совместимый кошелек`)}</h4>
<p className="text-gray-300 mb-2">{t(`Рекомендуемые варианты:`)}</p>

<p className="text-gray-300 mb-1">{t(`🦊 MetaMask (самый популярный)`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`• Скачать: metamask.io`)}</li>
  <li>{t(`• Поддержка: браузер (Chrome, Firefox, Brave) + мобильное приложение`)}</li>
  <li>{t(`• Сложность: ⭐⭐ (очень просто)`)}</li>
</ul>

<p className="text-gray-300 mb-1">{t(`🔗 WalletConnect (для мобильных кошельков)`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`• Подключает: Trust Wallet, Rainbow, Coinbase Wallet и другие`)}</li>
  <li>{t(`• Лучше для: пользователей смартфонов`)}</li>
  <li>{t(`• Сложность: ⭐⭐ (просто)`)}</li>
</ul>

<p className="text-gray-300 mb-1">{t(`🔐 Hardware wallets (максимальная безопасность)`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`• Ledger, Trezor`)}</li>
  <li>{t(`• Подключение через MetaMask или WalletConnect`)}</li>
  <li>{t(`• Лучше для: крупных сумм`)}</li>
  <li>{t(`• Сложность: ⭐⭐⭐ (средняя)`)}</li>
</ul>

<p className="text-gray-300 mb-6">{t(`Уже есть кошелек? Отлично! Переходим дальше.`)}</p>

<h4 className="text-lg font-bold text-white mt-6 mb-2">{t(`2. Токены HYPE для газа`)}</h4>
<p className="text-gray-300 mb-2">{t(`Зачем нужны HYPE:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`• HYPE — это нативный токен сети Hyperliquid`)}</li>
  <li>{t(`• Используется для оплаты комиссий (газа) за транзакции`)}</li>
  <li>{t(`• Средняя стоимость свопа: 0.5-2 HYPE (~$0.50-$2)`)}</li>
</ul>

<p className="text-gray-300 mb-2">{t(`Сколько нужно:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`• Минимум: 5 HYPE`)}</li>
  <li>{t(`• Рекомендуется: 10-20 HYPE (для комфортной торговли)`)}</li>
</ul>

<p className="text-gray-300 mb-2">{t(`Где купить HYPE:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`• Centralized exchanges: Binance, OKX, Bybit`)}</li>
  <li>{t(`• DEX на Hyperliquid: после настройки можете использовать Hypertrade для покупки`)}</li>
</ul>

<h4 className="text-lg font-bold text-white mt-6 mb-2">{t(`3. Токены для обмена`)}</h4>
<p className="text-gray-300 mb-2">{t(`Что можно менять:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`• Популярные токены: USDC, ETH, USDT, BTC`)}</li>
  <li>{t(`• Альткоины на Hyperliquid`)}</li>
  <li>{t(`• Любые токены, доступные на интегрированных DEX`)}</li>
</ul>
<p className="text-gray-300 mb-4">{t(`Для первого теста подойдет:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`• 10-100 USDC (минимальный риск)`)}</li>
  <li>{t(`• Любая сумма, с которой комфортно экспериментировать`)}</li>
</ul>

  <hr className="border-gray-700 my-6" />

 <h3 className="text-xl font-bold text-white mt-12 mb-4">{t(`🔧 Шаг 1: Настройка сети Hyperliquid (2 минуты)`)}</h3>
<p className="text-gray-300 mb-4">{t(`Прежде чем использовать Hypertrade, нужно добавить сеть Hyperliquid в ваш кошелек.`)}</p>

<h4 className="text-lg font-bold text-white mt-6 mb-2">{t(`Вариант А: Автоматическое добавление (рекомендуется)`)}</h4>
<p className="text-gray-300 mb-4">{t(`Самый простой способ:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Перейдите на ht.xyz`)}</li>
  <li>{t(`Нажмите кнопку "Connect Wallet" в правом верхнем углу`)}</li>
  <li>{t(`Выберите ваш кошелек (например, MetaMask)`)}</li>
  <li>{t(`Когда появится запрос "Switch to Hyperliquid", нажмите "Approve"`)}</li>
</ol>

<p className="text-gray-300 mb-6">{t(`Готово! Сеть добавлена автоматически.`)}</p>

</article>


<article className="prose prose-invert prose-lg max-w-none">

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`Вариант Б: Ручное добавление`)}</h4>
<p className="text-gray-300 mb-4">{t(`Если автоматическое добавление не сработало:`)}</p>

<h5 className="text-md font-bold text-white mt-4 mb-2">{t(`Для MetaMask:`)}</h5>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Шаг 1: Откройте MetaMask и нажмите на выпадающее меню сетей (обычно показывает "Ethereum Mainnet")`)}</li>
  <li>{t(`Шаг 2: Прокрутите вниз и нажмите "Add Network" (Добавить сеть)`)}</li>
  <li>{t(`Шаг 3: Нажмите "Add a network manually" (Добавить сеть вручную)`)}</li>
  <li>
    {t(`Шаг 4: Введите следующие данные:`)}
    <ul className="list-disc list-inside text-gray-300 mt-2 mb-2 space-y-1">
      <li>{t(`Network Name (Название сети): Hyperliquid`)}</li>
      <li>{t(`New RPC URL (URL RPC): https://api.hyperliquid.xyz/evm`)}</li>
      <li>{t(`Chain ID (ID цепи): 42161`)}</li>
      <li>{t(`Currency Symbol (Символ валюты): HYPE`)}</li>
      <li>{t(`Block Explorer URL (URL обозревателя блоков): https://explorer.hyperliquid.xyz`)}</li>
    </ul>
  </li>
  <li>{t(`Шаг 5: Нажмите "Save" (Сохранить)`)}</li>
  <li>{t(`Шаг 6: Переключитесь на сеть Hyperliquid в выпадающем меню`)}</li>
</ol>

<hr className="border-gray-700 my-6" />

<p className="text-gray-300 mb-4">{t(`✅ Проверка подключения`)}</p>
<p className="text-gray-300 mb-2">{t(`Как убедиться, что всё настроено правильно:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Откройте MetaMask`)}</li>
  <li>{t(`Проверьте, что выбрана сеть "Hyperliquid"`)}</li>
  <li>{t(`Убедитесь, что видите баланс HYPE (если пополнили)`)}</li>
</ol>
<p className="text-gray-300 mb-6">{t(`Если баланс показывает 0 HYPE — нужно пополнить кошелек перед первым свопом.`)}</p>

<hr className="border-gray-700 my-6" />

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`🌐 Шаг 2: Подключение кошелька к Hypertrade (30 секунд)`)}</h4>
<p className="text-gray-300 mb-4">{t(`Теперь подключим кошелек к платформе Hypertrade.`)}</p>
<p className="text-gray-300 mb-4">{t(`Пошаговая инструкция:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Откройте ht.xyz`)}</li>
  <li>{t(`Нажмите кнопку "Connect Wallet" (в правом верхнем углу)`)}</li>
  <li>{t(`Выберите способ подключения:`)}</li>
</ol>

<p className="text-gray-300 mb-2">{t(`Вариант 1: MetaMask`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`Нажмите на иконку MetaMask`)}</li>
  <li>{t(`Во всплывающем окне MetaMask нажмите "Next" (Далее)`)}</li>
  <li>{t(`Нажмите "Connect" (Подключить)`)}</li>
  <li>{t(`При необходимости подтвердите переключение на сеть Hyperliquid`)}</li>
</ul>

<p className="text-gray-300 mb-2">{t(`Вариант 2: WalletConnect`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`Нажмите на иконку WalletConnect`)}</li>
  <li>{t(`Отсканируйте QR-код вашим мобильным кошельком`)}</li>
  <li>{t(`Подтвердите подключение в приложении кошелька`)}</li>
</ul>

<p className="text-gray-300 mb-2">{t(`Вариант 3: Coinbase Wallet / другие`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Выберите соответствующую опцию`)}</li>
  <li>{t(`Следуйте инструкциям кошелька`)}</li>
</ul>

<hr className="border-gray-700 my-6" />

<p className="text-gray-300 mb-4">{t(`✅ Подтверждение подключения`)}</p>
<p className="text-gray-300 mb-6">{t(`Вы успешно подключились, если:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`✅ В правом верхнем углу отображается сокращенный адрес кошелька (например, "0x1a2b...3c4d")`)}</li>
  <li>{t(`✅ Показывается баланс HYPE`)}</li>
  <li>{t(`✅ Интерфейс обмена стал активным`)}</li>
</ul>
<p className="text-gray-300 mb-6">{t(`Проблемы с подключением? См. раздел "Решение проблем" в конце статьи.`)}</p>

<hr className="border-gray-700 my-6" />

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`💱 Шаг 3: Ваш первый своп на Hypertrade (2 минуты)`)}</h4>
<p className="text-gray-300 mb-4">{t(`Теперь самое интересное — выполним первый обмен и увидим экономию в действии!`)}</p>

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`3.1 Выбор токенов для обмена`)}</h5>
<p className="text-gray-300 mb-2">{t(`Шаг 1: Выберите токен, который хотите обменять`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`В верхнем поле нажмите на выпадающее меню ("Select Token")`)}</li>
  <li>{t(`Найдите нужный токен через поиск или прокрутите список`)}</li>
  <li>{t(`Нажмите на токен (например, USDC)`)}</li>
</ol>
<p className="text-gray-300 mb-6">{t(`Совет: Если не видите токен в списке, проверьте, что он есть на вашем балансе и поддерживается на Hyperliquid.`)}</p>

<p className="text-gray-300 mb-2">{t(`Шаг 2: Выберите токен, который хотите получить`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`В нижнем поле нажмите на выпадающее меню`)}</li>
  <li>{t(`Найдите желаемый токен (например, ETH)`)}</li>
  <li>{t(`Нажмите на него`)}</li>
</ol>

<p className="text-gray-300 mb-2">{t(`Шаг 3: Введите сумму обмена`)}</p>
<p className="text-gray-300 mb-2">{t(`Два способа:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`Способ A: Ввести сумму токена ДЛЯ обмена`)}</li>
  <ul className="list-disc list-inside text-gray-300 mb-2 pl-6 space-y-1">
    <li>{t(`Введите число в верхнем поле (например, 100 USDC)`)}</li>
    <li>{t(`Hypertrade автоматически рассчитает, сколько ETH вы получите`)}</li>
  </ul>
  <li>{t(`Способ B: Ввести желаемую сумму токена К получению`)}</li>
  <ul className="list-disc list-inside text-gray-300 mb-2 pl-6 space-y-1">
    <li>{t(`Введите число в нижнем поле (например, 0.03 ETH)`)}</li>
    <li>{t(`Hypertrade автоматически рассчитает, сколько USDC нужно`)}</li>
  </ul>
</ul>
<p className="text-gray-300 mb-6">{t(`Быстрые кнопки:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`• 25% — использовать четверть баланса`)}</li>
  <li>{t(`• 50% — использовать половину баланса`)}</li>
  <li>{t(`• 75% — использовать три четверти баланса`)}</li>
  <li>{t(`• MAX — использовать весь доступный баланс (за вычетом резерва на газ)`)}</li>
</ul>

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`3.2 Анализ маршрута и симуляция`)}</h5>
<p className="text-gray-300 mb-2">{t(`После ввода суммы Hypertrade автоматически:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`✅ Сканирует все DEX на Hyperliquid`)}</li>
  <li>{t(`✅ Находит оптимальный маршрут`)}</li>
  <li>{t(`✅ Показывает детальную информацию`)}</li>
</ul>

<p className="text-gray-300 mb-2">{t(`Что вы увидите:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Expected Output (Ожидаемый выход)`)}</li>
  <ul className="list-disc list-inside text-gray-300 mb-2 pl-6 space-y-1">
    <li>{t(`Вы получите: 0.0285 ETH`)}</li>
    <li>{t(`≈ $99.75`)}</li>
  </ul>
  <li>{t(`Price Impact (Влияние на цену)`)}</li>
  <ul className="list-disc list-inside text-gray-300 mb-2 pl-6 space-y-1">
    <li>{t(`Price Impact: 0.3%`)}</li>
    <li>{t(`• <0.5% — отлично ✅`)}</li>
    <li>{t(`• 0.5-1% — хорошо ⭐`)}</li>
    <li>{t(`• 1-3% — приемлемо ⚠️`)}</li>
    <li>{t(`• >3% — рассмотрите уменьшение суммы 🚫`)}</li>
  </ul>
  <li>{t(`Route Breakdown (Детализация маршрута)`)}</li>
  <ul className="list-disc list-inside text-gray-300 mb-2 pl-6 space-y-1">
    <li>{t(`60% через HyperCore Spot (книга ордеров)`)}</li>
    <li>{t(`40% через Hyperswap (AMM пул)`)}</li>
    <li>{t(`Почему это важно:`)}</li>
    <ul className="list-disc list-inside text-gray-300 mb-2 pl-6 space-y-1">
      <li>{t(`• Видите, куда идут ваши деньги`)}</li>
      <li>{t(`• Можете оценить надежность маршрута`)}</li>
      <li>{t(`• Понимаете, почему это выгоднее одного DEX`)}</li>
    </ul>
  </ul>
   <li>{t(`Minimum Received (Минимальное получение)`)}</li>
<ul className="list-disc list-inside text-gray-300 mb-2 pl-6 space-y-1">
  <li>{t(`Min. received: 0.0283 ETH`)}</li>
  <li>{t(`(с учетом slippage 0.5%)`)}</li>
  <li>{t(`Это минимум, который вы гарантированно получите даже при неблагоприятных условиях.`)}</li>
</ul>
<li>{t(`Network Fee (Комиссия сети)`)}</li>
<ul className="list-disc list-inside text-gray-300 mb-6 pl-6 space-y-1">
  <li>{t(`Network fee: ~1.5 HYPE`)}</li>
  <li>{t(`≈ $1.50`)}</li>
</ul>
</ol>

</article>


<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`3.3 Настройка параметров (опционально)`)}</h4>
<p className="text-gray-300 mb-4">{t(`Нажмите на иконку шестеренки ⚙️ (Settings) для дополнительных настроек:`)}</p>

<h5 className="text-md font-bold text-white mt-4 mb-2">{t(`Slippage Tolerance (Допустимое проскальзывание)`)}</h5>
<p className="text-gray-300 mb-2">{t(`Что это: Максимальное отклонение цены, которое вы готовы принять.`)}</p>
<p className="text-gray-300 mb-2">{t(`Рекомендуемые значения:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`0.5% — для стабильных пар (USDC/USDT, ETH/WETH)`)}</li>
  <li>{t(`1% — для популярных пар (ETH/USDC, BTC/ETH)`)}</li>
  <li>{t(`2-3% — для волатильных альткоинов`)}</li>
  <li>{t(`5%+ — только для крайне низколиквидных токенов`)}</li>
</ul>
<p className="text-gray-300 mb-2">{t(`Настройка:`)}</p>
<p className="text-gray-300 mb-4">{t(`[Auto] [0.5%] [1%] [3%] [Custom]`)}</p>
<p className="text-gray-300 mb-4">{t(`Выберите предустановленное значение или введите свое.`)}</p>
<p className="text-red-400 mb-6">{t(`⚠️ Внимание: Слишком низкое значение может привести к неудаче транзакции. Слишком высокое — к потерям.`)}</p>

<h5 className="text-md font-bold text-white mt-4 mb-2">{t(`Transaction Deadline (Дедлайн транзакции)`)}</h5>
<p className="text-gray-300 mb-2">{t(`Что это: Время, в течение которого транзакция должна быть выполнена.`)}</p>
<p className="text-gray-300 mb-2">{t(`По умолчанию: 20 минут`)}</p>
<p className="text-gray-300 mb-4">{t(`Когда менять:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Волатильный рынок → сократите до 5-10 минут`)}</li>
  <li>{t(`Стабильный рынок → можно оставить 20 минут`)}</li>
</ul>

<hr className="border-gray-700 my-6" />

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`3.4 Сравнение с обычным DEX`)}</h4>
<p className="text-gray-300 mb-4">{t(`Уникальная фишка Hypertrade:`)}</p>
<p className="text-gray-300 mb-4">{t(`Нажмите на "Compare Rates" (Сравнить курсы), чтобы увидеть, сколько бы вы получили на отдельных DEX:`)}</p>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg mb-4">
{t(`Hypertrade (агрегатор):  0.0285 ETH  ← Лучший вариант! ✅
HyperCore Spot:           0.0282 ETH
Hyperswap:                0.0279 ETH
Kittenswap:               0.0276 ETH

Ваша экономия: +$1.20 (1.2%)
Это наглядное доказательство выгоды агрегатора!`)}
</pre>

<hr className="border-gray-700 my-6" />

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`3.5 Выполнение свопа`)}</h4>
<p className="text-gray-300 mb-2">{t(`Когда всё готово:`)}</p>
<p className="text-gray-300 mb-2">{t(`Шаг 1: Проверьте финальные детали`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`Сумма обмена ✅`)}</li>
  <li>{t(`Ожидаемый выход ✅`)}</li>
  <li>{t(`Price impact приемлем ✅`)}</li>
  <li>{t(`Slippage настроен ✅`)}</li>
</ul>
<p className="text-gray-300 mb-6">{t(`Шаг 2: Нажмите большую синюю кнопку "Swap"`)}</p>

<hr className="border-gray-700 my-6" />

<p className="text-gray-300 mb-2">{t(`Шаг 3: Approval (если требуется)`)}</p>
<p className="text-gray-300 mb-2">{t(`При первом обмене токена появится окно:`)}</p>
<p className="text-red-400 mb-4">{t(`⚠️ Approval Required`)}</p>
<p className="text-gray-300 mb-2">{t(`Разрешите Hypertrade использовать ваш USDC`)}</p>
<p className="text-gray-300 mb-4">{t(`[Approve USDC]`)}</p>
<p className="text-gray-300 mb-2">{t(`Что происходит:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`Вы даете разрешение смарт-контракту Hypertrade взаимодействовать с вашими токенами`)}</li>
  <li>{t(`Это стандартная процедура для всех DEX`)}</li>
  <li>{t(`Делается один раз для каждого токена`)}</li>
</ul>
<p className="text-gray-300 mb-2">{t(`Действия:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Нажмите "Approve USDC"`)}</li>
  <li>{t(`Подтвердите транзакцию в MetaMask`)}</li>
  <li>{t(`Дождитесь подтверждения (5-10 секунд)`)}</li>
  <li>{t(`Окно свопа откроется автоматически`)}</li>
</ol>
<p className="text-gray-300 mb-6">{t(`Стоимость approval: ~1 HYPE (одноразово)`)}</p>

<hr className="border-gray-700 my-6" />

<p className="text-gray-300 mb-2">{t(`Шаг 4: Подтверждение свопа в кошельке`)}</p>
<p className="text-gray-300 mb-2">{t(`После approval (или сразу, если уже был сделан) откроется MetaMask:`)}</p>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg mb-4">
{t(`Что вы увидите в MetaMask:

Запрос подтверждения транзакции

От: 0x1a2b...3c4d (ваш адрес)
К: Hypertrade Router (0x7d8e...9f0a)

Estimated Gas: 1.5 HYPE (~$1.50)

[Reject] [Confirm]`)}
</pre>
<p className="text-gray-300 mb-4">{t(`Проверьте:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Адрес получателя — смарт-контракт Hypertrade ✅`)}</li>
  <li>{t(`Сумма газа адекватна (обычно 0.5-2 HYPE) ✅`)}</li>
  <li>{t(`Нажмите "Confirm" (Подтвердить)`)}</li>
</ul>
<p className="text-gray-300 mb-2">{t(`Справа:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`Баланс HYPE — газ для транзакций`)}</li>
  <li>{t(`Network indicator — текущая сеть (Hyperliquid)`)}</li>
  <li>{t(`Адрес кошелька — клик открывает меню`)}</li>
</ul>

<h6 className="text-sm font-semibold text-white mt-4 mb-1">{t(`2. Область обмена (центр)`)}</h6>
<p className="text-gray-300 mb-2">{t(`Верхнее поле (FROM):`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`Выбор токена для обмена`)}</li>
  <li>{t(`Ввод суммы`)}</li>
  <li>{t(`Показ баланса`)}</li>
  <li>{t(`Кнопки быстрого выбора процента (25/50/75/MAX)`)}</li>
</ul>
<p className="text-gray-300 mb-2">{t(`Кнопка переключения ⇅:`)}</p>
<p className="text-gray-300 mb-4">{t(`Меняет местами токены FROM и TO`)}</p>
<p className="text-gray-300 mb-2">{t(`Нижнее поле (TO):`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Выбор токена для получения`)}</li>
  <li>{t(`Показ ожидаемого количества`)}</li>
  <li>{t(`Примерная стоимость в USD`)}</li>
</ul>

<h6 className="text-sm font-semibold text-white mt-4 mb-1">{t(`3. Панель информации (под полями обмена)`)}</h6>
<p className="text-gray-300 mb-2">{t(`Детали транзакции:`)}</p>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg mb-4">
{t(`Rate: 1 USDC = 0.000285 ETH

Price Impact: 0.3% ✅

Minimum Received: 0.0283 ETH

Network Fee: ~1.5 HYPE

Route: 60% HyperCore + 40% Hyperswap`)}
</pre>
<p className="text-gray-300 mb-2">{t(`Кликабельные элементы:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Route details — подробная разбивка маршрута`)}</li>
  <li>{t(`Compare rates — сравнение с другими DEX`)}</li>
</ul>

<h6 className="text-sm font-semibold text-white mt-4 mb-1">{t(`4. Боковая панель (справа)`)}</h6>
<p className="text-gray-300 mb-2">{t(`Recent Transactions (Недавние транзакции):`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`История ваших свопов`)}</li>
  <li>{t(`Статус выполнения`)}</li>
  <li>{t(`Ссылки на explorer`)}</li>
</ul>
<p className="text-gray-300 mb-2">{t(`Market Stats:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Топ торгуемые пары`)}</li>
  <li>{t(`Объемы за 24 часа`)}</li>
  <li>{t(`Тренды рынка`)}</li>
</ul>

<hr className="border-gray-700 my-6" />

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`Дополнительные функции`)}</h5>
<p className="text-gray-300 mb-2">{t(`Кнопка Settings (⚙️)`)}</p>
<p className="text-gray-300 mb-2">{t(`Доступные настройки:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`Slippage Tolerance:`)}</li>
  <li>{t(`[Auto] [0.5%] [1%] [3%] [Custom: ___]`)}</li>
  <li>{t(`Transaction Deadline:`)}</li>
  <li>{t(`[10 min] [20 min] [30 min] [Custom: ___]`)}</li>
  <li>{t(`Expert Mode:`)}</li>
  <li>{t(`☐ Enable Expert Mode`)}</li>
  <li>{t(`(Отключает подтверждения для опытных пользователей)`)}</li>
  <li>{t(`Interface Settings:`)}</li>
  <li>{t(`☐ Show USD values`)}</li>
  <li>{t(`☐ Audio confirmation`)}</li>
  <li>{t(`☑ Show route details by default`)}</li>
</ul>

<hr className="border-gray-700 my-6" />

<p className="text-gray-300 mb-2">{t(`Кнопка History (📜)`)}</p>
<p className="text-gray-300 mb-2">{t(`История всех ваших транзакций:`)}</p>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg mb-4">
{t(`Transaction History

[Date]      [From]      [To]        [Amount]    [Status]
Dec 14      USDC        ETH         100         ✅ Success
Dec 14      ETH         USDC        0.5         ✅ Success  
Dec 13      HYPE        USDC        50          ✅ Success

[Export CSV] [Filter]`)}
</pre>
<p className="text-gray-300 mb-4">{t(`Функции:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Клик на транзакцию → подробности`)}</li>
  <li>{t(`Экспорт в CSV для бухгалтерии`)}</li>
  <li>{t(`Фильтр по датам, токенам, статусу`)}</li>
</ul>

<hr className="border-gray-700 my-6" />

<p className="text-gray-300 mb-2">{t(`Кнопка Account (👤)`)}</p>
<p className="text-gray-300 mb-2">{t(`Меню учетной записи:`)}</p>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg mb-4">
{t(`Your Account

Address: 0x1a2b...3c4d
[Copy] [View on Explorer]

Balances:
HYPE: 15.5 ≈ $15.50
USDC: 1,250.00
ETH: 0.5 ≈ $1,750.00

[Manage Tokens]
[Disconnect Wallet]`)}
</pre>

<hr className="border-gray-700 my-6" />

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`🎓 Полезные советы для эффективного использования`)}</h5>
<p className="text-gray-300 mb-2">{t(`Совет 1: Установите оптимальный slippage`)}</p>
<p className="text-gray-300 mb-2">{t(`Не используйте одинаковый slippage для всех токенов!`)}</p>
<p className="text-gray-300 mb-2">{t(`Для стабильных пар (USDC/USDT):`)}</p>
<p className="text-gray-300 mb-2">{t(`Slippage: 0.1% - 0.3%`)}</p>
<p className="text-gray-300 mb-2">{t(`Для популярных пар (ETH/USDC):`)}</p>
<p className="text-gray-300 mb-2">{t(`Slippage: 0.5% - 1%`)}</p>
<p className="text-gray-300 mb-2">{t(`Для альткоинов:`)}</p>
<p className="text-gray-300 mb-4">{t(`Slippage: 2% - 5%`)}</p>
<p className="text-gray-300 mb-2">{t(`Признаки, что slippage слишком низкий:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`Транзакции постоянно не проходят`)}</li>
  <li>{t(`Ошибка "Transaction failed due to slippage"`)}</li>
</ul>
<p className="text-gray-300 mb-2">{t(`Признаки, что slippage слишком высокий:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Получаете меньше, чем ожидали`)}</li>
  <li>{t(`Большая разница между Expected и Actual`)}</li>
</ul>

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`Совет 2: Проверяйте маршрут перед свопом`)}</h4>
<p className="text-gray-300 mb-4">{t(`Не делайте своп вслепую!`)}</p>
<p className="text-gray-300 mb-4">{t(`Всегда смотрите на Route Breakdown:`)}</p>

<h5 className="text-md font-bold text-white mt-4 mb-2">{t(`Хороший маршрут:`)}</h5>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`✅ 40% HyperCore Spot (глубокая ликвидность)`)}</li>
  <li>{t(`✅ 35% Hyperswap (проверенный пул)`)}</li>
  <li>{t(`✅ 25% Kittenswap (дополнительная ликвидность)`)}</li>
</ul>
<p className="text-gray-300 mb-4">{t(`Price Impact: 0.4%`)}</p>

<h5 className="text-md font-bold text-white mt-4 mb-2">{t(`Подозрительный маршрут:`)}</h5>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`⚠️ 80% UnknownSwap (новый протокол)`)}</li>
  <li>{t(`⚠️ 20% через 3 промежуточных токена`)}</li>
</ul>
<p className="text-gray-300 mb-4">{t(`Price Impact: 8.5%`)}</p>
<p className="text-gray-300 mb-6">{t(`Действие: При подозрительном маршруте уменьшите сумму или разделите на несколько транзакций.`)}</p>

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`Совет 3: Используйте Compare Rates`)}</h4>
<p className="text-gray-300 mb-4">{t(`Перед каждым крупным свопом:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`Нажмите "Compare Rates"`)}</li>
  <li>{t(`Посмотрите разницу с другими DEX`)}</li>
  <li>{t(`Убедитесь, что экономия существенна`)}</li>
</ol>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg mb-6">
{t(`Пример вывода:
Hypertrade:      0.0285 ETH (лучшее!) ✅
Direct DEX A:    0.0279 ETH (-2.1%)
Direct DEX B:    0.0282 ETH (-1.0%)

Your savings: $2.10 (2.1%)
Если экономия меньше стоимости газа — возможно, стоит использовать прямой DEX (для очень маленьких сумм).`)}
</pre>


<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`Совет 4: Следите за балансом HYPE`)}</h4>
<p className="text-gray-300 mb-4">{t(`Всегда держите запас HYPE для газа!`)}</p>
<p className="text-gray-300 mb-2">{t(`Рекомендуемые резервы:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`Легкая торговля (1-5 свопов в день): 10 HYPE`)}</li>
  <li>{t(`Активная торговля (10-20 свопов): 20-30 HYPE`)}</li>
  <li>{t(`Интенсивная торговля (50+ свопов): 50+ HYPE`)}</li>
</ul>
<p className="text-gray-300 mb-4">{t(`Что делать, если закончился HYPE:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Купите HYPE на CEX (Binance, OKX)`)}</li>
  <li>{t(`Отправьте на адрес вашего кошелька в сети Hyperliquid`)}</li>
  <li>{t(`Или попросите друга прислать немного для первой транзакции`)}</li>
</ol>

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`Совет 5: Используйте историю транзакций`)}</h4>
<p className="text-gray-300 mb-2">{t(`Зачем нужна история:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`Отслеживание эффективности стратегии`)}</li>
  <li>{t(`Расчет реальной экономии`)}</li>
  <li>{t(`Налоговая отчетность`)}</li>
  <li>{t(`Анализ лучших времен для торговли`)}</li>
</ul>
<p className="text-gray-300 mb-2">{t(`Как экспортировать:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Откройте History`)}</li>
  <li>{t(`Нажмите "Export CSV"`)}</li>
  <li>{t(`Выберите период`)}</li>
  <li>{t(`Сохраните файл для учета`)}</li>
</ol>

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`🔧 Решение типичных проблем`)}</h4>

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`Проблема 1: "Insufficient HYPE for gas"`)}</h5>
<p className="text-gray-300 mb-2">{t(`Причина: Недостаточно HYPE для оплаты газа.`)}</p>
<p className="text-gray-300 mb-4">{t(`Решение:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Проверьте баланс HYPE в кошельке`)}</li>
  <li>{t(`Купите HYPE на CEX или используйте Hypertrade (если есть другие токены)`)}</li>
  <li>{t(`Оставляйте всегда 10+ HYPE в резерве`)}</li>
</ol>

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`Проблема 2: "Transaction failed due to slippage"`)}</h5>
<p className="text-gray-300 mb-2">{t(`Причина: Цена изменилась больше, чем допустимый slippage.`)}</p>
<p className="text-gray-300 mb-4">{t(`Решение:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Увеличьте slippage tolerance на 0.5-1%`)}</li>
  <li>{t(`Попробуйте снова`)}</li>
  <li>{t(`Если не помогло — уменьшите сумму обмена`)}</li>
  <li>{t(`Или подождите менее волатильного момента`)}</li>
</ol>

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`Проблема 3: Токен не появился в кошельке`)}</h5>
<p className="text-gray-300 mb-2">{t(`Причина: MetaMask не добавил токен автоматически.`)}</p>
<p className="text-gray-300 mb-4">{t(`Решение:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Проверьте транзакцию на explorer.hyperliquid.xyz`)}</li>
  <li>{t(`Убедитесь, что своп выполнен успешно ✅`)}</li>
  <li>{t(`В MetaMask нажмите "Import Tokens"`)}</li>
  <li>{t(`Вставьте адрес контракта токена (скопируйте с explorer)`)}</li>
  <li>{t(`Нажмите "Add Custom Token"`)}</li>
</ol>

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`Проблема 4: "Wallet not connected"`)}</h5>
<p className="text-gray-300 mb-2">{t(`Причина: Кошелек отключился или требует повторного подключения.`)}</p>
<p className="text-gray-300 mb-4">{t(`Решение:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Обновите страницу (F5)`)}</li>
  <li>{t(`Нажмите "Connect Wallet" снова`)}</li>
  <li>{t(`Убедитесь, что MetaMask разблокирован`)}</li>
  <li>{t(`Проверьте, что выбрана сеть Hyperliquid`)}</li>
</ol>

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`Проблема 5: Очень высокий Price Impact`)}</h5>
<p className="text-gray-300 mb-2">{t(`Причина: Недостаточная ликвидность для вашего размера ордера.`)}</p>
<p className="text-gray-300 mb-4">{t(`Решение:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Уменьшите сумму обмена — разделите на 2-3 транзакции`)}</li>
  <li>{t(`Подождите — возможно, ликвидность увеличится`)}</li>
  <li>{t(`Проверьте время — в азиатские часы ликвидность часто выше`)}</li>
  <li>{t(`Рассмотрите альтернативу — может быть выгоднее обменять через промежуточный токен вручную`)}</li>
</ol>

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`Проблема 6: Долгое ожидание транзакции`)}</h5>
<p className="text-gray-300 mb-2">{t(`Причина: Перегрузка сети (редко на Hyperliquid).`)}</p>
<p className="text-gray-300 mb-4">{t(`Решение:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Проверьте статус на explorer.hyperliquid.xyz`)}</li>
  <li>{t(`Подождите 1-2 минуты`)}</li>
  <li>{t(`Если статус "Pending" более 5 минут — обратитесь в поддержку`)}</li>
  <li>{t(`Не отправляйте повторную транзакцию — можете потерять газ дважды`)}</li>
</ol>

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`📊 Отслеживание вашей экономии`)}</h4>
<p className="text-gray-300 mb-2">{t(`Встроенная статистика Hypertrade`)}</p>
<p className="text-gray-300 mb-2">{t(`В панели Account увидите:`)}</p>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg mb-6">
{t(`Your Savings Summary

Total Volume Traded: $12,450
Total Savings vs. Single DEX: $187.20 (1.5%)
Number of Swaps: 47
Average Savings per Swap: $3.98

Best Swap Savings: $15.30 (ETH/USDC)
Эта статистика показывает реальную выгоду использования агрегатора!`)}
</pre>

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`Сравнение "до" и "после"`)}</h4>
<p className="text-gray-300 mb-2">{t(`Пример реального пользователя:`)}</p>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg mb-6">
{t(`До использования Hypertrade (месяц):
Объем торговли: $10,000
Средний price impact: 1.8%
Потери на проскальзывании: $180

После перехода на Hypertrade (месяц):
Объем торговли: $10,000
Средний price impact: 0.6%
Потери на проскальзывании: $60

Экономия: $120/месяц = $1,440/год
Вывод: Даже на небольших объемах агрегатор окупается многократно!`)}
</pre>

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`🎯 Следующие шаги: продвинутые возможности`)}</h4>
<p className="text-gray-300 mb-4">{t(`Теперь, когда вы освоили базовое использование, можете изучить:`)}</p>

<ol className="list-decimal list-inside text-gray-300 mb-6 space-y-1">
  <li>
    <span>{t(`Оптимизация стратегии`)}</span>
    <p className="text-gray-300 ml-4">{t(`📚 Читайте: Оптимальные настройки slippage для разных типов токенов`)}</p>
    <p className="text-gray-300 ml-4 mb-2">{t(`Узнайте, как настраивать параметры для максимальной эффективности.`)}</p>
  </li>
  <li>
    <span>{t(`Понимание маршрутизации`)}</span>
    <p className="text-gray-300 ml-4">{t(`📚 Читайте: Как читать маршрут обмена: понимание мультихоповых свопов`)}</p>
    <p className="text-gray-300 ml-4 mb-2">{t(`Глубокое погружение в то, как Hypertrade выбирает оптимальные пути.`)}</p>
  </li>
  <li>
    <span>{t(`Работа с волатильными токенами`)}</span>
    <p className="text-gray-300 ml-4">{t(`📚 Читайте: Как торговать волатильными токенами с минимальными потерями`)}</p>
    <p className="text-gray-300 ml-4 mb-2">{t(`Специальные техники для альткоинов и новых листингов.`)}</p>
  </li>
  <li>
    <span>{t(`Реферальная программа`)}</span>
    <p className="text-gray-300 ml-4">{t(`💰 Заработайте: Приглашайте друзей и получайте бонусы`)}</p>
    <ol className="list-decimal list-inside text-gray-300 ml-6 mb-2 space-y-1">
      <li>{t(`Откройте Account → Referrals`)}</li>
      <li>{t(`Скопируйте вашу уникальную ссылку`)}</li>
      <li>{t(`Поделитесь с друзьями`)}</li>
      <li>{t(`Получайте ежедневные коды входа за активность`)}</li>
    </ol>
    <p className="text-gray-300 ml-4 mb-2">{t(`Потенциальные награды: Активность может быть учтена при будущем запуске токена Hypertrade.`)}</p>
  </li>
  <li>
    <span>{t(`API и интеграция`)}</span>
    <p className="text-gray-300 ml-4 mb-6">{t(`👨‍💻 Для разработчиков: Интеграция API Hypertrade`)}</p>
    <p className="text-gray-300 ml-4 mb-2">{t(`Встройте лучшие курсы обмена в ваше приложение или бота.`)}</p>
  </li>
</ol>

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`🚀 Готовы начать экономить?`)}</h4>
<p className="text-gray-300 mb-4">{t(`Вы только что узнали всё необходимое для использования Hypertrade!`)}</p>
<p className="text-gray-300 mb-4">{t(`Вспомним ключевые моменты:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`✅ Настройка занимает 2 минуты`)}</li>
  <li>{t(`✅ Первый своп — 2-3 минуты`)}</li>
  <li>{t(`✅ Экономия 0.5-2% на каждом обмене`)}</li>
  <li>{t(`✅ Доступ ко всей ликвидности Hyperliquid`)}</li>
  <li>{t(`✅ Видите результат до выполнения`)}</li>
  <li>{t(`✅ Всё в одной транзакции`)}</li>
</ul>
<p className="text-gray-300 mb-4">{t(`Начните прямо сейчас:`)}</p>
<p className="text-gray-300 mb-6">{t(`👉 Открыть Hypertrade и сделать первый своп`)}</p>
<p className="text-gray-300 mb-4">{t(`Нужна помощь? Наше сообщество всегда готово помочь:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`💬 Discord: discord.gg/hypertrade`)}</li>
  <li>{t(`📱 Telegram: @HypertradeOfficial`)}</li>
  <li>{t(`🐦 Twitter: @Hypertrade_xyz`)}</li>
</ul>

<h4 className="text-lg font-bold text-white mt-12 mb-2">{t(`❓ Часто задаваемые вопросы`)}</h4>
<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`Сколько стоит использование Hypertrade?`)}</h5>
<p className="text-gray-300 mb-2">{t(`Hypertrade абсолютно бесплатен!`)}</p>
<p className="text-gray-300 mb-4">{t(`Вы платите только:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Газ сети Hyperliquid (обычно 0.5-2 HYPE ≈ $0.50-$2)`)}</li>
  <li>{t(`Стандартные комиссии DEX (0.1-0.3% в зависимости от протокола)`)}</li>
</ul>
<p className="text-gray-300 mb-6">{t(`Нет никаких комиссий за агрегацию!`)}</p>

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`Безопасно ли давать approval токенов?`)}</h5>
<p className="text-gray-300 mb-2">{t(`Да, это стандартная процедура для всех DEX.`)}</p>
<p className="text-gray-300 mb-4">{t(`Что важно:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Approval дает разрешение только на конкретный токен`)}</li>
  <li>{t(`Hypertrade не может забрать другие ваши токены`)}</li>
  <li>{t(`Hypertrade не может забрать больше, чем вы указываете в свопе`)}</li>
  <li>{t(`Смарт-контракты Hypertrade прошли аудит`)}</li>
</ul>
<p className="text-gray-300 mb-6">{t(`Вы всегда контролируете свои средства.`)}</p>

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`Можно ли отменить транзакцию после подтверждения?`)}</h5>
<p className="text-gray-300 mb-2">{t(`Нет, блокчейн-транзакции необратимы.`)}</p>
<p className="text-gray-300 mb-4">{t(`После нажатия "Confirm" в MetaMask транзакция отправлена в сеть и её нельзя отменить.`)}</p>
<p className="text-gray-300 mb-6">{t(`Поэтому важно:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Внимательно проверять детали перед подтверждением`)}</li>
  <li>{t(`Убедиться в правильности адресов`)}</li>
  <li>{t(`Проверить суммы`)}</li>
</ul>

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`Что делать, если своп не прошел?`)}</h5>
<p className="text-gray-300 mb-2">{t(`Проверьте статус транзакции:`)}</p>
<ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1">
  <li>{t(`Найдите транзакцию в History`)}</li>
  <li>{t(`Нажмите "View on Explorer"`)}</li>
  <li>{t(`Посмотрите причину ошибки`)}</li>
</ol>
<p className="text-gray-300 mb-4">{t(`Частые причины:`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Недостаточно газа (HYPE)`)}</li>
  <li>{t(`Slippage слишком низкий`)}</li>
  <li>{t(`Изменилась цена до выполнения`)}</li>
</ul>
<p className="text-gray-300 mb-6">{t(`Газ НЕ возвращается даже при неудаче (так работает блокчейн).`)}</p>

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`Какой минимальный размер свопа?`)}</h5>
<p className="text-gray-300 mb-2">{t(`Технически: Нет минимума.`)}</p>
<p className="text-gray-300 mb-4">{t(`Практически: Рекомендуется свопать от $10-20, чтобы комиссия газа не съела всю выгоду.`)}</p>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg mb-6">
{t(`Пример:
• Своп $5: газ $1.50 (30% потерь) ❌
• Своп $50: газ $1.50 (3% потерь) ⭐
• Своп $500: газ $1.50 (0.3% потерь) ✅`)}
</pre>

<h5 className="text-md font-bold text-white mt-6 mb-2">{t(`Как часто обновляются цены?`)}</h5>
<p className="text-gray-300 mb-4">{t(`В реальном времени!`)}</p>
<ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
  <li>{t(`Hypertrade обновляет цены каждые:`)}</li>
  <li>{t(`1-2 секунды в обычном режиме`)}</li>
  <li>{t(`<1 секунды при активном вводе суммы`)}</li>
</ul>
<p className="text-gray-300 mb-6">{t(`Симуляция пересчитывается при каждом изменении суммы.`)}</p>

<h4 className="text-lg font-bold text-white mt-12 mb-4">{t(`📚 Полезные ресурсы`)}</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
  <div className="bg-hyper-800/20 p-4 rounded-xl border border-gray-700 hover:bg-hyper-800/40 transition-colors">
    <p className="font-bold text-white mb-1">{t(`Документация`)}</p>
    <p className="text-gray-300 text-sm mb-2">{t(`📖 docs.hypertrade.io — техническая документация`)}</p>
    <p className="font-bold text-white mb-1">{t(`Обучение`)}</p>
    <p className="text-gray-300 text-sm mb-2">{t(`🎓 Блог Hypertrade — статьи и гайды`)}</p>
    <p className="text-gray-300 text-sm">{t(`📹 YouTube канал — видео-инструкции`)}</p>
  </div>
  <div className="bg-hyper-800/20 p-4 rounded-xl border border-gray-700 hover:bg-hyper-800/40 transition-colors">
    <p className="font-bold text-white mb-1">{t(`Сообщество`)}</p>
    <p className="text-gray-300 text-sm mb-2">{t(`💬 Discord — общение с трейдерами`)}</p>
    <p className="text-gray-300 text-sm mb-2">{t(`📱 Telegram — новости и обновления`)}</p>
    <p className="text-gray-300 text-sm mb-2">{t(`🐦 Twitter — анонсы`)}</p>
    <p className="font-bold text-white mb-1">{t(`Поддержка`)}</p>
    <p className="text-gray-300 text-sm">{t(`📧 support@hypertrade.io`)}</p>
    <p className="text-gray-300 text-sm">{t(`⏰ Ответ в течение 24 часов`)}</p>
  </div>
</div>

<h4 className="text-lg font-bold text-white mt-12 mb-4">{t(`Готовы сделать первый шаг к умной торговле?`)}</h4>
<p className="text-gray-300 mb-4">{t(`🎯 Начать использовать Hypertrade →`)}</p>
<p className="text-gray-300 mb-6">{t(`Подключите кошелек за 30 секунд и выполните первый выгодный своп!`)}</p>

<div className="text-center mb-12">
  <button className="bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
    {t(`Открыть Hypertrade и сделать первый своп`)}
  </button>
</div>

<p className="text-gray-400 mb-2">{t(`Последнее обновление: 14 декабря 2025`)}</p>
<p className="text-gray-400 mb-2">{t(`Автор: Команда Hypertrade`)}</p>
<p className="text-gray-400 mb-12">{t(`Отказ от ответственности: Торговля криптовалютой несет риски. Данное руководство носит образовательный характер и не является финансовой рекомендацией. Проводите собственное исследование (DYOR) перед принятием инвестиционных решений.`)}</p>

        </article>
      </div>
    </section>
  );
};
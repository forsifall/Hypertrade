"use client"
import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { DollarSign, TrendingUp, Users, Share2, BarChart, Zap, Target, CheckCircle, Clock, Calendar, Rocket, Award, AlertCircle, Layers } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { useTranslation } from "react-i18next";

// --- Single Blog Article Component (Referral Program) ---
export const ArticleReferralProgram = ({lang}:{lang:Language}) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr:any) => curr.id === "referral-program-guide");
  
    const { t } = useTranslation();

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div className="h-64 md:h-80 w-full bg-gradient-to-r from-amber-900 via-yellow-900 to-hyper-900 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
           <BackButton label={post.backButton} />
           <div className="flex flex-wrap gap-4 text-sm font-medium text-hyper-accent mb-4">
             <span className="bg-hyper-accent/10 px-3 py-1 rounded-full border border-hyper-accent/20">{post.category}</span>
             <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> {post.readTime}</span>
             <span className="flex items-center gap-1 text-gray-400"><Calendar size={14} /> {post.date}</span>
           </div>
           <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
             {post.title}
           </h1>
           <p className="text-xl text-gray-300 mt-4">{post.subtitle}</p>
        </div>
      </div>


  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
       <article className="prose prose-invert prose-lg max-w-none">
         <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-hyper-accent pl-6 italic">
  {t(`Полное руководство по реферальной программе Hypertrade: как зарабатывать на привлечении трейдеров, сколько платят за рефералов, стратегии продвижения. Начните зарабатывать пассивный доход от объёма торговли.`)}
</p>

<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" /> {t(`Введение: что такое реферальная программа Hypertrade`)}
</h2>
<p>{t(`Представьте, что вы получаете пассивный доход каждый раз, когда кто-то использует Hypertrade для обмена криптовалюты — и вам не нужно ничего делать после привлечения пользователя.`)}</p>
<p className="mb-6">{t(`Именно так работает реферальная программа Hypertrade.`)}</p>

<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Zap className="text-yellow-400" /> {t(`Как это работает`)}
</h2>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`🔗 Вы получаете уникальную реферальную ссылку (например: https://ht.xyz?ref=YOUR_CODE)`)}</li>
  <li>{t(`📢 Вы делитесь ссылкой с аудиторией (Twitter, YouTube, Telegram, блог, Discord и т.д.)`)}</li>
  <li>{t(`💰 Ваши рефералы используют Hypertrade для свапов`)}</li>
  <li>{t(`💵 Вы получаете % от объёма торговли каждого реферала навсегда (lifetime commissions)`)}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <CheckCircle className="text-green-400" /> {t(`Ключевые особенности программы`)}
</h2>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`✅ Lifetime commissions — вы получаете доход от реферала всё время, пока он торгует`)}</li>
  <li>{t(`✅ 0.05-0.15% от объёма торговли — процент зависит от вашего уровня`)}</li>
  <li>{t(`✅ Без ограничений по количеству рефералов`)}</li>
  <li>{t(`✅ Прозрачная статистика — real-time dashboard с аналитикой`)}</li>
  <li>{t(`✅ Ежемесячные выплаты в USDC или HYPE`)}</li>
  <li>{t(`✅ Минимальная выплата: $100`)}</li>
  <li>{t(`✅ Нет KYC для базового уровня (<$10,000/месяц)`)}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <AlertCircle className="text-red-400" /> {t(`Сколько можно заработать`)}
</h2>
<div className="overflow-x-auto mb-12">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-4 text-gray-400 font-medium">{t(`Рефералов`)}</th>
        <th className="p-4 text-gray-400 font-medium">{t(`Средний объём/реферал`)}</th>
        <th className="p-4 text-red-400 font-medium">{t(`Общий объём/месяц`)}</th>
        <th className="p-4 text-green-400 font-medium">{t(`Ваш доход (0.1%)`)}</th>
        <th className="p-4 text-green-400 font-medium">{t(`Годовой доход`)}</th>
      </tr>
    </thead>
    <tbody className="text-sm">
      <tr className="border-b border-gray-800 bg-hyper-800/20">
        <td className="p-4 text-white">{t(`10`)}</td>
        <td className="p-4 text-gray-300">{t(`$10,000`)}</td>
        <td className="p-4 text-gray-300">{t(`$100,000`)}</td>
        <td className="p-4 text-green-300 font-bold">{t(`$100`)}</td>
        <td className="p-4 text-green-300 font-bold">{t(`$1,200`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t(`50`)}</td>
        <td className="p-4 text-gray-300">{t(`$20,000`)}</td>
        <td className="p-4 text-gray-300">{t(`$1,000,000`)}</td>
        <td className="p-4 text-green-300 font-bold">{t(`$1,000`)}</td>
        <td className="p-4 text-green-300 font-bold">{t(`$12,000`)}</td>
      </tr>
      <tr className="bg-hyper-800/20">
        <td className="p-4 text-white">{t(`200`)}</td>
        <td className="p-4 text-gray-300">{t(`$25,000`)}</td>
        <td className="p-4 text-gray-300">{t(`$5,000,000`)}</td>
        <td className="p-4 text-green-300 font-bold">{t(`$5,000`)}</td>
        <td className="p-4 text-green-300 font-bold">{t(`$60,000`)}</td>
      </tr>
      <tr className="border-b border-gray-800">
        <td className="p-4 text-white">{t(`500`)}</td>
        <td className="p-4 text-gray-300">{t(`$30,000`)}</td>
        <td className="p-4 text-gray-300">{t(`$15,000,000`)}</td>
        <td className="p-4 text-green-300 font-bold">{t(`$15,000`)}</td>
        <td className="p-4 text-green-300 font-bold">{t(`$180,000 🔥`)}</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Реальный кейс`)}</h2>
<p className="text-gray-300 mb-4">{t(`Crypto influencer с 50,000 подписчиков в Twitter:`)}</p>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`Привлёк 300 активных трейдеров`)}</li>
  <li>{t(`Средний объём: $30,000/месяц на реферала`)}</li>
  <li>{t(`Общий объём: $9M/месяц`)}</li>
  <li>{t(`Доход: $9,000/месяц ($108,000/год)`)}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Время на привлечение и ROI`)}</h2>
<ul className="list-disc list-inside mb-12 text-gray-300">
  <li>{t(`1 твит в неделю (5 минут)`)}</li>
  <li>{t(`ROI: бесконечный (пассивный доход)`)}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Кто может зарабатывать`)}</h2>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`✅ Crypto influencers (Twitter, YouTube, TikTok)`)}</li>
  <li>{t(`✅ Crypto communities (Telegram, Discord серверы)`)}</li>
  <li>{t(`✅ Блогеры и авторы контента (Medium, Substack, личные блоги)`)}</li>
  <li>{t(`✅ Разработчики dApps (интеграция Hypertrade в ваше приложение)`)}</li>
  <li>{t(`✅ Трейдеры с аудиторией (обучение, сигналы, аналитика)`)}</li>
  <li>{t(`✅ Обычные пользователи (рекомендации друзьям, семье)`)}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Не нужно`)}</h2>
<ul className="list-disc list-inside mb-12 text-gray-300">
  <li>{t(`❌ Технические навыки`)}</li>
  <li>{t(`❌ Инвестиции (регистрация бесплатна)`)}</li>
  <li>{t(`❌ Опыт в маркетинге`)}</li>
  <li>{t(`❌ Большая аудитория (даже 10 активных рефералов = $100-500/месяц)`)}</li>
</ul>

<h2 className="text-3xl flex gap-3 items-center md:text-3xl font-bold text-white leading-tight">
  {t(`Как работает реферальная программа: детали`)}
</h2>

<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Layers className="text-hyper-secondary" /> {t(`Структура комиссий`)}
</h2>
<p className="text-gray-300 mb-6">{t(`Hypertrade платит процент от объёма торговли ваших рефералов, а не от комиссий платформы.`)}</p>
<p className="text-gray-300 mb-6">{t(`Почему это выгоднее:`)}</p>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t(`Типичная реферальная программа (% от комиссий):`)}</h3>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`Реферал делает swap на $10,000`)}</li>
  <li>{t(`Комиссия платформы: 0.3% = $30`)}</li>
  <li>{t(`Ваша доля: 30% от $30 = $9`)}</li>
</ul>

<h3 className="text-xl font-bold text-white mt-6 mb-3">{t(`Hypertrade (% от объёма):`)}</h3>
<ul className="list-disc list-inside mb-6 text-gray-300">
  <li>{t(`Реферал делает swap на $10,000`)}</li>
  <li>{t(`Ваша комиссия: 0.1% от $10,000 = $10`)}</li>
  <li>{t(`Разница: +11% больше 🎉`)}</li>
</ul>

<h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
  <Zap className="text-yellow-400" /> {t(`Уровни программы`)}
</h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-4 text-gray-400 font-medium">{t(`Уровень`)}</th>
                  <th className="p-4 text-gray-400 font-medium">{t(`Объём торговли рефералов/месяц`)}</th>
                  <th className="p-4 text-gray-400 font-medium">{t(`Ваша комиссия`)}</th>
                  <th className="p-4 text-gray-400 font-medium">{t(`Бонусы`)}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-800 bg-hyper-800/20">
                  <td className="p-4 text-white">{t(`Bronze`)}</td>
                  <td className="p-4 text-gray-300">{t(`$0 - $100,000`)}</td>
                  <td className="p-4 text-gray-300">{t(`0.05%`)}</td>
                  <td className="p-4 text-gray-300">{t(`-`)}</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-white">{t(`Silver`)}</td>
                  <td className="p-4 text-gray-300">{t(`$100,000 - $500,000`)}</td>
                  <td className="p-4 text-gray-300">{t(`0.07%`)}</td>
                  <td className="p-4 text-gray-300">{t(`Priority support`)}</td>
                </tr>
                <tr className="border-b border-gray-800 bg-hyper-800/20">
                  <td className="p-4 text-white">{t(`Gold`)}</td>
                  <td className="p-4 text-gray-300">{t(`$500,000 - $2,000,000`)}</td>
                  <td className="p-4 text-gray-300">{t(`0.10%`)}</td>
                  <td className="p-4 text-gray-300">{t(`+Custom dashboard`)}</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-white">{t(`Platinum`)}</td>
                  <td className="p-4 text-gray-300">{t(`$2,000,000 - $10,000,000`)}</td>
                  <td className="p-4 text-gray-300">{t(`0.12%`)}</td>
                  <td className="p-4 text-gray-300">{t(`+Dedicated manager`)}</td>
                </tr>
                <tr className="bg-hyper-800/20">
                  <td className="p-4 text-white">{t(`Diamond`)}</td>
                  <td className="p-4 text-gray-300">{t(`>$10,000,000`)}</td>
                  <td className="p-4 text-gray-300">{t(`0.15%`)}</td>
                  <td className="p-4 text-gray-300">{t(`+Custom deals, co-marketing`)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Примеры дохода по уровням`)}</h2>
          <ul className="list-disc list-inside mb-12 text-gray-300">
            <li>{t(`Bronze ($50k объём): 50 активных трейдеров × $1,000/месяц = $50,000 → Ваш доход: $25/месяц`)}</li>
            <li>{t(`Silver ($300k объём): 150 трейдеров × $2,000/месяц = $300,000 → Ваш доход: $210/месяц ($2,520/год)`)}</li>
            <li>{t(`Gold ($1M объём): 200 трейдеров × $5,000/месяц = $1,000,000 → Ваш доход: $1,000/месяц ($12,000/год)`)}</li>
            <li>{t(`Platinum ($5M объём): 500 трейдеров × $10,000/месяц = $5,000,000 → Ваш доход: $6,000/месяц ($72,000/год) 🔥`)}</li>
            <li>{t(`Diamond ($20M объём): 1,000 активных китов × $20,000/месяц = $20,000,000 → Ваш доход: $30,000/месяц ($360,000/год) 💎`)}</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Lifetime commissions`)}</h2>
          <p className="text-gray-300 mb-6">{t(`Критически важно: вы получаете доход от реферала всё время, пока он использует Hypertrade.`)}</p>
          <p className="text-gray-300 mb-6">{t(`Пример:`)}</p>
          <ul className="list-disc list-inside mb-6 text-gray-300">
            <li>{t(`Месяц 1: Вы привели 10 рефералов`)}</li>
            <li>{t(`Месяц 2: Вы привели ещё 15 рефералов (итого 25)`)}</li>
            <li>{t(`Месяц 3: Вы не привели новых рефералов`)}</li>
          </ul>
          <p className="text-gray-300 mb-6">{t(`Ваш доход в месяц 3: = доход от 10 рефералов (месяц 1) + доход от 15 рефералов (месяц 2) + доход от 25 рефералов (месяц 3) = доход от всех 25 рефералов ✅`)}</p>
          <p className="text-gray-300 mb-6">{t(`Lifetime commissions = пассивный доход растёт каждый месяц`)}</p>
          <p className="text-gray-300 mb-6">{t(`Через год: Вы привели 200 рефералов за год, Средний объём: $5,000/месяц на реферала, Общий объём: 200 × $5,000 = $1,000,000/месяц`)}</p>
          <p className="text-gray-300 mb-12">{t(`Ваш доход (Gold уровень, 0.10%): $1,000/месяц. Вы больше не привлекаете новых рефералов, но: - Получаете $1,000/месяц пассивно - Если рефералы увеличат объём → ваш доход растёт - Это продолжается годами 💰`)}</p>
        
      <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(`Как начать: пошаговая инструкция`)}</h2>

  <div className="space-y-8 mb-12">

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-4">{t(`Шаг 1: Регистрация в программе`)}</h3>
      <ol className="list-decimal list-inside text-gray-300 space-y-2">
        <li>{t(`Перейдите на https://ht.xyz/referral (или https://app.hypertrade.io/referrals)`)}</li>
        <li>{t(`Нажмите “Join Referral Program”`)}</li>
        <li>{t(`Подключите wallet (MetaMask, WalletConnect)`)}</li>
        <li>
          {t(`Заполните форму:`)}
          <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
            <li>{t(`Ваше имя / nickname`)}</li>
            <li>{t(`Email для связи`)}</li>
            <li>{t(`Telegram / Twitter (опционально)`)}</li>
            <li>{t(`Как планируете продвигать (blog, Twitter, YouTube, etc.)`)}</li>
          </ul>
        </li>
        <li>{t(`Примите условия программы`)}</li>
        <li>{t(`Нажмите “Create Referral Code”`)}</li>
      </ol>
      <p className="mt-4 text-gray-300">{t(`Вы получите:`)}</p>
      <ul className="list-none space-y-1 text-gray-300 ml-4 mt-2">
        <li>{t(`✅ Уникальный referral code (например: CRYPTO_MASTER)`)}</li>
        <li>{t(`✅ Реферальную ссылку: https://ht.xyz?ref=CRYPTO_MASTER`)}</li>
        <li>{t(`✅ Доступ к dashboard с аналитикой`)}</li>
      </ul>
      <p className="mt-2 text-gray-400 italic">{t(`Время регистрации: 2-3 минуты.`)}</p>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-4">{t(`Шаг 2: Получение реферальных материалов`)}</h3>
      <p className="text-gray-300 mb-2">{t(`После регистрации вы получаете доступ к Marketing Kit:`)}</p>
      <p className="text-gray-400 mb-2">{t(`📦 Что входит:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>
          {t(`Баннеры и изображения:`)}
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>{t(`Размеры: 728×90, 300×250, 1200×628 (Twitter/Facebook)`)}</li>
            <li>{t(`Форматы: PNG, JPG, SVG`)}</li>
            <li>{t(`Темы: light и dark mode`)}</li>
          </ul>
        </li>
        <li>
          {t(`Готовые тексты:`)}
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>{t(`Твиты (280 символов)`)}</li>
            <li>{t(`Посты для Telegram`)}</li>
            <li>{t(`Описания для YouTube`)}</li>
            <li>{t(`Email templates`)}</li>
          </ul>
        </li>
        <li>
          {t(`Видео:`)}
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>{t(`Explainer видео (30 сек, 1 мин, 3 мин)`)}</li>
            <li>{t(`Screen recordings (как использовать Hypertrade)`)}</li>
            <li>{t(`Testimonials`)}</li>
          </ul>
        </li>
      <li>
          {t(`Landing pages:`)}
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>{t(`Готовые landing pages для разных аудиторий`)}</li>
            <li>{t(`Кастомизируемые шаблоны`)}</li>
          </ul>
        </li>
      </ul>
      <p className="mt-2 text-gray-300">{t(`Скачать Marketing Kit: https://docs.hypertrade.io/referral/marketing-kit`)}</p>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-4">{t(`Шаг 3: Делитесь реферальной ссылкой`)}</h3>
      <p className="text-gray-300 mb-2">{t(`Основные каналы продвижения:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-2">
        <li>
          {t(`Twitter (самый эффективный для crypto)`)}  
          <p className="text-gray-300 mt-1">{t(`Стратегия:`)}</p>
          <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
            <li>{t(`✅ Регулярные твиты (3-5 раз в неделю):`)}</li>
            <li>{t(`💡 Пример твита #1 (образовательный):`)}</li>
            <li>{t(`🔥 Знаете ли вы, что на DEX-свапах можно экономить 1-5%?`)}</li>
            <li>{t(`Hypertrade находит лучшие курсы на Hyperliquid через:`)}</li>
            <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
              <li>{t(`✅ Split-routing`)}</li>
              <li>{t(`✅ Invisium симуляции (точность 99.9%)`)}</li>
              <li>{t(`✅ 0% комиссия платформы`)}</li>
            </ul>
            <li>{t(`Попробуйте: https://ht.xyz?ref=YOUR_CODE`)}</li>
            <li>{t(`#Hyperliquid #DeFi #Crypto`)}</li>
            <li>{t(`💡 Пример твита #2 (личный опыт):`)}</li>
            <li>{t(`Только что сэкономил $250 на одном свапе благодаря @Hypertrade_xyz 🎉`)}</li>
            <li>{t(`50,000 USDC → ETH:`)}</li>
            <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
              <li>{t(`- Single DEX: 19.45 ETH`)}</li>
              <li>{t(`- Hypertrade: 19.86 ETH`)}</li>
              <li>{t(`- Разница: +0.41 ETH ($1,025) 🔥`)}</li>
            </ul>
            <li>{t(`За год это $12,000+ экономии 💰`)}</li>
            <li>{t(`https://ht.xyz?ref=YOUR_CODE`)}</li>
            <li>{t(`✅ Ретвитите официальный аккаунт @Hypertrade_xyz с вашим комментарием + реф. ссылкой`)}</li>
            <li>{t(`✅ Thread (цепочка твитов) раз в 1-2 недели с подробным гайдом`)}</li>
            <li>{t(`✅ Добавьте реф. ссылку в bio Twitter:`)}</li>
            <li>{t(`Bio: Crypto trader | DeFi enthusiast`)}</li>
            <li>{t(`💰 Save 1-5% on every swap: https://ht.xyz?ref=YOUR_CODE`)}</li>
          </ul>
        </li>
      </ul>

      <p className="mt-2 text-gray-300">{t(`Ожидаемый результат:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`• 1,000 подписчиков → 5-10 рефералов/месяц`)}</li>
        <li>{t(`• 10,000 подписчиков → 30-50 рефералов/месяц`)}</li>
        <li>{t(`• 100,000 подписчиков → 200-500 рефералов/месяц`)}</li>
      </ul>
    </div>

  </div>


<div className="space-y-8 mb-12">

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-4">{t(`3. Telegram (лучший для community)`)}</h3>
      <p className="text-gray-300 mb-2">{t(`Стратегии:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-2">
        <li>{t(`✅ Создайте канал/группу с фокусом на DeFi / Hyperliquid:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`Название: "Hyperliquid Alpha | DeFi Tips"`)}</li>
        </ul>
        <li>{t(`Пост 1-2 раза в день:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`- Новости Hyperliquid`)}</li>
          <li>{t(`- Обучающие посты про DeFi`)}</li>
          <li>{t(`- Личный опыт торговли`)}</li>
          <li>{t(`- Каждый 3-й пост: упоминание Hypertrade + реф. ссылка`)}</li>
        </ul>
        <li>{t(`Закреплённое сообщение:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`"💰 Save 1-5% on swaps: https://ht.xyz?ref=YOUR_CODE"`)}</li>
        </ul>
        <li>{t(`✅ Активность в других группах:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`• Комментируйте в Hyperliquid / DeFi группах`)}</li>
          <li>{t(`• Когда кто-то спрашивает про свапы → рекомендуйте Hypertrade`)}</li>
          <li>{t(`• НЕ спамьте — давайте ценность, упоминайте естественно`)}</li>
        </ul>
        <li>{t(`Пример полезного комментария:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`Пользователь: "Где лучше всего свапать USDC на ETH на Hyperliquid?"`)}</li>
          <li>{t(`Ваш ответ:`)}</li>
          <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
            <li>{t(`"Я использую Hypertrade — он автоматически находит лучший курс`)}</li>
            <li>{t(`через split-routing по всем DEX (Hyperswap, Kittenswap, HyperCore Spot).`)}</li>
            <li>{t(`Обычно экономлю 0.5-2% на каждом свапе.`)}</li>
            <li>{t(`Попробуй: https://ht.xyz?ref=YOUR_CODE`)}</li>
            <li>{t(`P.S. 0% комиссия платформы, в отличие от других агрегаторов."`)}</li>
          </ul>
        </ul>
      </ul>
      <p className="mt-2 text-gray-300">{t(`Ожидаемый результат:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`• Канал 500 участников → 5-10 активных рефералов`)}</li>
        <li>{t(`• Канал 5,000 участников → 50-100 рефералов`)}</li>
        <li>{t(`• Канал 50,000 участников → 500-1,000 рефералов`)}</li>
      </ul>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-4">{t(`4. Blog / Medium (лучший для SEO и долгосрочного трафика)`)}</h3>
      <p className="text-gray-300 mb-2">{t(`Типы статей:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`✅ Tutorial: “How to Use Hypertrade: Complete Guide”`)}</li>
        <li>{t(`✅ Comparison: “Hypertrade vs. 1inch vs. Jupiter: Which is Best?”`)}</li>
        <li>{t(`✅ Case study: “How I Saved $5,000 in 3 Months Using Hypertrade”`)}</li>
        <li>{t(`✅ Listicle: “10 Tips to Save Money on DeFi Swaps”`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`• Hyperliquid Official Discord`)}</li>
          <li>{t(`• DeFi communities`)}</li>
          <li>{t(`• Trading groups`)}</li>
        </ul>
        <li>{t(`Пример полезного сообщения:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`В канале #trading-discussion:`)}</li>
          <li>{t(`"Btw, для тех, кто часто свапает на Hyperliquid — попробуйте Hypertrade.`)}</li>
          <li>{t(`Он агрегирует ликвидность со всех DEX и обычно даёт курс на 1-2% лучше.`)}</li>
          <li>{t(`Сэкономил уже ~$3,000 за последние 3 месяца 💰`)}</li>
          <li>{t(`https://ht.xyz?ref=YOUR_CODE`)}</li>
          <li>{t(`P.S. 0% комиссия платформы, работает с HyperCore Spot тоже."`)}</li>
        </ul>
      </ul>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-4">{t(`6. Email список (если есть)`)}</h3>
      <p className="text-gray-300 mb-2">{t(`Стратегия:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`✅ Email #1: Анонс Hypertrade (что это, почему полезно)`)}</li>
        <li>{t(`✅ Email #2: Tutorial (как использовать, с скриншотами)`)}</li>
        <li>{t(`✅ Email #3: Результаты (ваш личный опыт, сколько сэкономили)`)}</li>
        <li>{t(`✅ Email #4: Reminder через 2 недели`)}</li>
      </ul>
      <p className="mt-2 text-gray-300 mb-2">{t(`Пример темы письма:`)}</p>
      <pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg overflow-x-auto">
{t(`Subject: How I Save $500/Month on Crypto Swaps

Hi [Name],

I've been using a new DEX aggregator called Hypertrade and wanted to share 
because it's been a game-changer for my trading costs.

Here's what happened:
- Last month I did 50 swaps on Hyperliquid
- Average swap: $10,000
- Average savings vs. single DEX: 1.2%
- Total savings: $6,000 🔥

The best part? It's super easy to use and has 0% platform fee.

Try it: https://ht.xyz?ref=YOUR_CODE

Cheers,
[Your Name]`)}
      </pre>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-4">{t(`Шаг 4: Мониторинг результатов`)}</h3>
      <p className="text-gray-300 mb-2">{t(`Dashboard: https://app.hypertrade.io/referrals/dashboard`)}</p>
      <p className="text-gray-300 mb-2">{t(`Метрики, которые вы видите:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`📊 Overview:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`• Total referrals (количество привлечённых пользователей)`)}</li>
          <li>{t(`• Active referrals (активные в последние 30 дней)`)}</li>
          <li>{t(`• Total volume (общий объём торговли всех рефералов)`)}</li>
          <li>{t(`• Your earnings (ваш заработок: месяц, всё время)`)}</li>
        </ul>
        <li>{t(`📊 Detailed Stats:`)}</li>
        <pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg overflow-x-auto">
{t(`Metric\tThis Month\tAll Time
New referrals\t15\t120
Active referrals\t80\t120
Total volume\t$2.5M\t$18M
Your earnings\t$2,500\t$18,000
Avg volume/referral\t$31,250\t$150,000
Conversion rate\t12%\t15%`)}
        </pre>
        <li>{t(`📊 Top Referrals:`)}</li>
        <pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg overflow-x-auto">
{t(`User\tVolume (30d)\tYour Earnings
0xAbc…123\t$250,000\t$250
0xDef…456\t$180,000\t$180
0xGhi…789\t$120,000\t$120`)}
        </pre>
        <li>{t(`Это помогает:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`• Понять, какие каналы работают лучше`)}</li>
          <li>{t(`• Найти “whale” рефералов (крупные трейдеры)`)}</li>
          <li>{t(`• Оптимизировать стратегию продвижения`)}</li>
        </ul>
      </ul>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-4">{t(`Шаг 5: Получение выплат`)}</h3>
      <p className="text-gray-300 mb-2">{t(`Выплаты: ежемесячно, 1-5 числа каждого месяца.`)}</p>
      <p className="text-gray-300 mb-2">{t(`Процесс:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`1. Минимальная сумма: $100`)}</li>
        <li>{t(`2. Вы выбираете: USDC или HYPE`)}</li>
        <li>{t(`3. Автоматическая отправка на ваш wallet (указанный при регистрации)`)}</li>
        <li>{t(`4. Email уведомление о выплате`)}</li>
      </ul>
      <p className="mt-2 text-gray-300 mb-2">{t(`Пример:`)}</p>
      <pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg overflow-x-auto">
{t(`Date: December 5, 2024
Subject: Your Hypertrade Referral Payment

Hi CRYPTO_MASTER,

Your referral earnings for November 2024 have been sent!

💰 Amount: $2,500 USDC
📊 Referral volume: $2,500,000
🔗 TX: 0xabc123...

Keep up the great work! 🚀

---
Hypertrade Referral Team
Налоги:
• KYC не требуется для выплат <$10,000/месяц
• Вы сами отвечаете за налоги в вашей юрисдикции
• Hypertrade не удерживает налоги автоматически`)}
      </pre>
    </div>

  </div>


  <div className="space-y-8 mb-12">

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-4">{t(`Продвинутые стратегии для увеличения дохода`)}</h3>

      <h4 className="text-lg font-bold text-hyper-accent mb-2">{t(`Стратегия 1: Фокус на “whale” рефералов`)}</h4>
      <p className="text-gray-300 mb-2">{t(`Один кит = 100 обычных пользователей.`)}</p>
      <p className="text-gray-300 mb-2">{t(`Как найти китов:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`✅ Активность в Hyperliquid:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`• Мониторьте крупные транзакции на Explorer`)}</li>
          <li>{t(`• Находите адреса с высокими объёмами`)}</li>
          <li>{t(`• Пишите им напрямую (если публичный контакт)`)}</li>
        </ul>
        <li>{t(`✅ Crypto Twitter:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`• Ищите трейдеров, постящих скриншоты с крупными позициями`)}</li>
          <li>{t(`• Комментируйте с ценностью + упоминанием Hypertrade`)}</li>
        </ul>
        <li>{t(`✅ DeFi communities:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`• Участвуйте в обсуждениях`)}</li>
          <li>{t(`• Станьте “помощником” — отвечайте на вопросы`)}</li>
          <li>{t(`• Упоминайте Hypertrade естественно`)}</li>
        </ul>
      </ul>

     <p className="text-gray-300 mb-2">{t(`Пример дохода от 1 кита:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`Кит делает $500,000 объёма/месяц`)}</li>
        <li>{t(`Ваша комиссия (0.10%): $500/месяц`)}</li>
        <li>{t(`Годовой доход от 1 реферала: $6,000`)}</li>
      </ul>

      <p className="text-gray-300 mb-2">{t(`vs. 100 обычных пользователей по $5,000/месяц:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`Объём: 100 × $5,000 = $500,000`)}</li>
        <li>{t(`Ваша комиссия: $500/месяц`)}</li>
        <li>{t(`Эффективность: привлечь 1 кита = привлечь 100 обычных пользователей.`)}</li>
      </ul>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h4 className="text-lg font-bold text-hyper-accent mb-2">{t(`Стратегия 2: Создание контент-хаба`)}</h4>
      <p className="text-gray-300 mb-2">{t(`Цель: стать “go-to source” для информации про Hypertrade / Hyperliquid.`)}</p>
      <p className="text-gray-300 mb-2">{t(`Что создать:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`1. YouTube канал: еженедельные видео про DeFi, Hyperliquid, trading tips`)}</li>
        <li>{t(`2. Twitter: ежедневные твиты, threads, engagement`)}</li>
        <li>{t(`3. Blog / Medium: подробные гайды, сравнения, кейс-стади`)}</li>
        <li>{t(`4. Telegram канал: daily updates, новости, quick tips`)}</li>
        <li>{t(`5. Discord сервер: community для обсуждений, support`)}</li>
      </ul>

      <p className="text-gray-300 mb-2">{t(`Реф. ссылка везде:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`• YouTube описание`)}</li>
        <li>{t(`• Twitter bio + закреплённый твит`)}</li>
        <li>{t(`• Blog footer`)}</li>
        <li>{t(`• Telegram закреплённое сообщение`)}</li>
        <li>{t(`• Discord welcome message`)}</li>
      </ul>

      <p className="text-gray-300 mb-2">{t(`Преимущества:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`• Compound effect: контент работает годами (особенно YouTube, blog)`)}</li>
        <li>{t(`• Authority: вы становитесь экспертом → больше trust → больше кликов`)}</li>
        <li>{t(`• Multiple touchpoints: пользователь видит вас в нескольких местах → выше конверсия`)}</li>
      </ul>

      <p className="text-gray-300 mb-2">{t(`Пример:`)}</p>
      <pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg overflow-x-auto">
{t(`YouTuber "DeFi Master" (20,000 подписчиков):

Контент:
- 2 видео/неделю про DeFi
- Hypertrade упоминается в 50% видео
- Реф. ссылка в каждом описании

Результаты за год:
- 100 видео опубликовано
- 500,000 views суммарно
- 1,200 рефералов привлечено
- Средний объём: $15,000/месяц
- Доход: $1,200 × $15,000 × 0.10% = $18,000/месяц 🔥`)}
      </pre>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h4 className="text-lg font-bold text-hyper-accent mb-2">{t(`Стратегия 3: Партнёрство с другими influencers`)}</h4>
      <p className="text-gray-300 mb-2">{t(`Идея: объединиться с другими crypto influencers для взаимного продвижения.`)}</p>
      <p className="text-gray-300 mb-2">{t(`Как это работает:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`1. Найдите complementary influencers:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`o Вы: DeFi analyst`)}</li>
          <li>{t(`o Партнёр: NFT trader`)}</li>
          <li>{t(`o Аудитории разные, но обе могут использовать Hypertrade`)}</li>
        </ul>
        <li>{t(`2. Договоритесь о взаимном продвижении:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`o Вы упоминаете их контент + их реф. ссылку`)}</li>
          <li>{t(`o Они упоминают ваш контент + вашу реф. ссылку`)}</li>
        </ul>
        <li>{t(`3. Создайте joint content:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`o Совместный Twitter Space`)}</li>
          <li>{t(`o Podcast эпизод`)}</li>
          <li>{t(`o YouTube коллаб`)}</li>
        </ul>
      </ul>

      <p className="text-gray-300 mb-2">{t(`Пример:`)}</p>
      <pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg overflow-x-auto">
{t(`Вы (10k подписчиков) + Партнёр (15k подписчиков)

Joint Twitter Space: "How to Save Money on DeFi Swaps"
- 1,000 слушателей
- Вы оба упоминаете Hypertrade
- Вы оба даёте свои реф. ссылки в закреплённом твите

Результат:
- Вы привлекли 50 рефералов из его аудитории
- Партнёр привлёк 30 рефералов из вашей аудитории
- Win-win 🤝`)}
      </pre>
    </div>

  </div>

  <div className="space-y-8 mb-12">

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h4 className="text-lg font-bold text-hyper-accent mb-2">{t(`Стратегия 4: Paid ads (для опытных)`)}</h4>
      <p className="text-gray-300 mb-2">{t(`Если у вас есть budget для рекламы, можно масштабировать быстрее.`)}</p>

      <p className="text-gray-300 mb-2">{t(`Каналы:`)}</p>
      <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
        <li>{t(`✅ Twitter Ads:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`• Таргетинг: crypto followers, DeFi keywords`)}</li>
          <li>{t(`• Формат: promoted tweets с реф. ссылкой`)}</li>
          <li>{t(`• Budget: $500-1,000/месяц → 50-100 рефералов`)}</li>
        </ul>
        <li>{t(`✅ Google Ads:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`• Keywords: “Hyperliquid DEX”, “best DEX aggregator”, “Hypertrade alternative”`)}</li>
          <li>{t(`• Landing page: ваш blog post + CTA с реф. ссылкой`)}</li>
          <li>{t(`• Budget: $1,000-2,000/месяц → 100-200 рефералов`)}</li>
        </ul>
        <li>{t(`✅ YouTube Ads:`)}</li>
        <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
          <li>{t(`• Таргетинг: crypto channels viewers`)}</li>
          <li>{t(`• Формат: skippable video ads (15-30 сек)`)}</li>
          <li>{t(`• Budget: $1,500-3,000/месяц → 150-300 рефералов`)}</li>
        </ul>
      </ul>

      <p className="text-gray-300 mb-2">{t(`ROI расчёт:`)}</p>
      <pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg overflow-x-auto">
{t(`Budget: $1,000/месяц на Twitter Ads
Привлечено: 80 рефералов
Средний объём: $8,000/месяц
Ваш доход (0.10%): 80 × $8,000 × 0.10% = $640/месяц

Месяц 1: -$360 (убыток)
Месяц 2: +$640 (рефералы продолжают торговать, новых ads нет)
Месяц 3: +$640
...
Месяц 12: +$640

Итого за год: $640 × 11 - $360 = $6,680 прибыль 💰
ROI: 568%
Важно: paid ads имеют смысл только если LTV (lifetime value) реферала >$100.`)}
      </pre>
    </div>

    <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
      <h4 className="text-lg font-bold text-hyper-accent mb-2">{t(`Стратегия 5: Gamification для вашей аудитории`)}</h4>
      <p className="text-gray-300 mb-2">{t(`Идея: создайте конкурс/челлендж для вашей аудитории с призами.`)}</p>

      <p className="text-gray-300 mb-2">{t(`Пример:`)}</p>
      <pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg overflow-x-auto">
{t(`"Hypertrade Savings Challenge"`)}
      </pre>

     <p className="text-gray-300 mb-2">{t(`Правила:`)}</p>
<ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
  <li>{t(`1. Используйте Hypertrade через мою реф. ссылку`)}</li>
  <li>{t(`2. Делайте скриншот экономии (показывает "You save $X")`)}</li>
  <li>{t(`3. Постите в Twitter с хэштегом #HypertradeSavings`)}</li>
  <li>{t(`4. Топ-3 по сумме экономии за месяц получают призы`)}</li>
</ul>

<p className="text-gray-300 mb-2">{t(`Призы:`)}</p>
<ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
  <li>{t(`🥇 1 место: $500 USDC`)}</li>
  <li>{t(`🥈 2 место: $300 USDC`)}</li>
  <li>{t(`🥉 3 место: $200 USDC`)}</li>
</ul>

<p className="text-gray-300 mb-2">{t(`Спонсор: я (из своего referral дохода)`)}</p>

<p className="text-gray-300 mb-2">{t(`Результаты:`)}</p>
<ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
  <li>{t(`Участники: 150 человек`)}</li>
  <li>{t(`Ваши затраты на призы: $1,000`)}</li>
  <li>{t(`Новые рефералы: 120 (из 150, остальные уже были)`)}</li>
  <li>{t(`Средний объём: $10,000/месяц`)}</li>
  <li>{t(`Ваш доход (0.10%): 120 × $10,000 × 0.10% = $1,200/месяц`)}</li>
</ul>

<p className="text-gray-300 mb-2">{t(`Месяц 1: +$200 ($1,200 - $1,000 призы)`)}</p>
<p className="text-gray-300 mb-2">{t(`Месяц 2+: +$1,200/месяц (призы уже выплачены)`)}</p>

<p className="text-gray-300 mb-2">{t(`Итого за год: $1,200 × 11 + $200 = $13,400 💰`)}</p>
<p className="text-gray-300 mb-2">{t(`ROI: 1,240%`)}</p>

<h4 className="text-lg font-bold text-hyper-accent mb-2">{t(`Типичные ошибки и как их избежать`)}</h4>

<h5 className="text-white font-bold mt-4 mb-2">{t(`Ошибка 1: Спам реф. ссылкой везде`)}</h5>
<p className="text-gray-400 mb-2">{t(`❌ Неправильно:`)}</p>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg overflow-x-auto">
{t(`Комментарий в Telegram:
"Use Hypertrade! https://ht.xyz?ref=YOUR_CODE"
(без контекста, без ценности)`)}
</pre>
<p className="text-gray-400 mb-2">{t(`✅ Правильно:`)}</p>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg overflow-x-auto">
{t(`Комментарий в Telegram (в ответ на вопрос):
"Для свапов на Hyperliquid я использую Hypertrade — он автоматически 
находит лучший курс через split-routing. Обычно экономлю 1-2%.

Вот ссылка: https://ht.xyz?ref=YOUR_CODE

Плюс у них есть Invisium симуляции, которые показывают точный результат 
до выполнения (точность 99.9%)."
Разница: второй вариант даёт ценность и контекст, а не просто спамит ссылку.`)}
</pre>

<h5 className="text-white font-bold mt-4 mb-2">{t(`Ошибка 2: Не отслеживание метрик`)}</h5>
<p className="text-gray-400 mb-2">{t(`❌ Неправильно: постить реф. ссылку и надеяться на лучшее.`)}</p>
<p className="text-gray-400 mb-2">{t(`✅ Правильно: отслеживать, какие каналы работают:`)}</p>
<p className="text-gray-400 mb-2">{t(`Отслеживание:`)}</p>
<ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
  <li>{t(`Twitter: добавьте UTM параметры (?ref=YOUR_CODE&utm_source=twitter)`)}</li>
  <li>{t(`YouTube: другой UTM (?ref=YOUR_CODE&utm_source=youtube)`)}</li>
  <li>{t(`Blog: (?ref=YOUR_CODE&utm_source=blog)`)}</li>
</ul>
<p className="text-gray-400 mb-2">{t(`Через месяц смотрите в dashboard:`)}</p>
<ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
  <li>{t(`Какой источник привёл больше рефералов?`)}</li>
  <li>{t(`Какой источник привёл более активных рефералов (высокий volume)?`)}</li>
</ul>
<p className="text-gray-400 mb-2">{t(`Оптимизация:`)}</p>
<ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
  <li>{t(`Фокусируйтесь на топ-2 каналах`)}</li>
  <li>{t(`Игнорируйте неэффективные каналы`)}</li>
</ul>

<h5 className="text-white font-bold mt-4 mb-2">{t(`Ошибка 3: Забыть про follow-up`)}</h5>
<p className="text-gray-400 mb-2">{t(`❌ Неправильно: привели реферала → забыли про него.`)}</p>
<p className="text-gray-400 mb-2">{t(`✅ Правильно: периодически напоминайте о Hypertrade:`)}</p>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg overflow-x-auto">
{t(`Email/DM рефералу через 2 недели:
"Hey! Как тебе Hypertrade? Удалось сэкономить на свапах?

Кстати, вот несколько tips для максимальной экономии:
1. Используй Compare Routes для выбора лучшего маршрута
2. Установи slippage 1-2% (не больше, чтобы избежать MEV)
3. Торгуй в пиковые часы (12-20 UTC) для лучшей ликвидности

Дай знать если есть вопросы! 👍"
Результат: реактивация неактивных рефералов → +10-20% к доходу.`)}
</pre>

<h5 className="text-white font-bold mt-4 mb-2">{t(`Ошибка 4: Не использовать визуальный контент`)}</h5>
<p className="text-gray-400 mb-2">{t(`❌ Неправильно: только текстовые посты.`)}</p>
<p className="text-gray-400 mb-2">{t(`✅ Правильно: добавляйте визуалы:`)}</p>
<ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
  <li>{t(`Скриншоты экономии (показывайте “You save $X”)`)}</li>
  <li>{t(`Screen recording (как использовать Hypertrade)`)}</li>
  <li>{t(`Инфографика (сравнение с конкурентами)`)}</li>
  <li>{t(`Memes (crypto community любит мемы 😄)`)}</li>
</ul>
<p className="text-gray-400 mb-2">{t(`Статистика: посты с визуалами получают 3-5× больше engagement.`)}</p>

<h5 className="text-white font-bold mt-4 mb-2">{t(`Ошибка 5: Обещать нереалистичные результаты`)}</h5>
<p className="text-gray-400 mb-2">{t(`❌ Неправильно:`)}</p>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg overflow-x-auto">
{t(`"Hypertrade will make you rich! 1000x gains guaranteed!"`)}
</pre>
<p className="text-gray-400 mb-2">{t(`✅ Правильно:`)}</p>
<pre className="bg-hyper-800/20 text-gray-300 p-4 rounded-lg overflow-x-auto">
{t(`"Hypertrade helps you save 1-5% on every swap. Over time, this adds up.
For a trader with $50k/month volume, that's $500-2,500/year savings."
Важно: будьте честными и реалистичными. Это строит trust и увеличивает конверсию.`)}
</pre>

<h4 className="text-lg font-bold text-hyper-accent mb-4">{t(`FAQ по реферальной программе`)}</h4>

<h5 className="text-white font-bold mt-4 mb-2">{t(`1. Сколько я могу заработать?`)}</h5>
<p className="text-gray-400 mb-2">{t(`Зависит от количества и активности рефералов. Примеры:`)}</p>
<ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
  <li>{t(`10 рефералов × $10k/месяц = $100/месяц (Bronze)`)}</li>
  <li>{t(`200 рефералов × $25k/месяц = $5,000/месяц (Platinum)`)}</li>
  <li>{t(`1,000 рефералов × $30k/месяц = $30,000/месяц (Diamond) 💎`)}</li>
</ul>

<h5 className="text-white font-bold mt-4 mb-2">{t(`2. Как долго я получаю комиссию?`)}</h5>
<p className="text-gray-400">{t(`Навсегда (lifetime commissions), пока реферал использует Hypertrade.`)}</p>

<h5 className="text-white font-bold mt-4 mb-2">{t(`3. Нужен ли KYC?`)}</h5>
<p className="text-gray-400">{t(`Нет для выплат <$10,000/месяц. Для больших сумм может потребоваться.`)}</p>

<h5 className="text-white font-bold mt-4 mb-2">{t(`4. Когда выплаты?`)}</h5>
<p className="text-gray-400">{t(`Ежемесячно, 1-5 числа. Минимум: $100.`)}</p>

<h5 className="text-white font-bold mt-4 mb-2">{t(`5. Можно ли использовать несколько реф. кодов?`)}</h5>
<p className="text-gray-400">{t(`Нет, один wallet = один реф. код.`)}</p>

<h5 className="text-white font-bold mt-4 mb-2">{t(`6. Что, если реферал уже использовал Hypertrade без реф. ссылки?`)}</h5>
<p className="text-gray-400">{t(`К сожалению, первый визит без реф. ссылки = нет комиссии. Поэтому важно, чтобы первый визит был через вашу ссылку.`)}</p>

<h5 className="text-white font-bold mt-4 mb-2">{t(`7. Можно ли самому быть своим рефералом?`)}</h5>
<p className="text-gray-400">{t(`Нет, self-referrals запрещены. Hypertrade отслеживает это и может заблокировать аккаунт.`)}</p>

<h5 className="text-white font-bold mt-4 mb-2">{t(`8. Есть ли ограничение на количество рефералов?`)}</h5>
<p className="text-gray-400">{t(`Нет, вы можете привлекать неограниченное количество.`)}</p>

<h5 className="text-white font-bold mt-4 mb-2">{t(`9. Что делать, если я не получил выплату?`)}</h5>
<p className="text-gray-400">{t(`Свяжитесь с support: referrals@hypertrade.io или Discord (#referral-support).`)}</p>

<h5 className="text-white font-bold mt-4 mb-2">{t(`10. Можно ли использовать paid ads?`)}</h5>
<p className="text-gray-400">{t(`Да, но запрещено:`)}</p>
<ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
  <li>{t(`Brand bidding (ставки на “Hypertrade” в Google Ads)`)}</li>
  <li>{t(`Фишинговые сайты`)}</li>
  <li>{t(`Спам`)}</li>
      </ul>

    </div>

{/* Заключение */}
<div className="space-y-8 mb-12">

  {/* Основные преимущества */}
  <div className="bg-hyper-800/40 border border-gray-700 p-6 rounded-xl shadow-md">
   <h4 className="text-xl font-bold text-hyper-accent mb-4">{t(`Заключение: начните зарабатывать сегодня`)}</h4>

<p className="text-gray-300 mb-4">{t(`Почему реферальная программа Hypertrade выгодна:`)}</p>
<ul className="list-disc list-inside ml-6 text-gray-400 space-y-2">
  <li>{t(`✅ Пассивный доход — lifetime commissions, вы получаете доход годами`)}</li>
  <li>{t(`✅ 0.05-0.15% от объёма — выше, чем у большинства конкурентов`)}</li>
  <li>{t(`✅ 0% инвестиций — регистрация бесплатна`)}</li>
  <li>{t(`✅ Прозрачная аналитика — real-time dashboard`)}</li>
  <li>{t(`✅ Ежемесячные выплаты в USDC или HYPE`)}</li>
  <li>{t(`✅ Marketing kit — готовые материалы для продвижения`)}</li>
  <li>{t(`✅ Нет ограничений по количеству рефералов`)}</li>
</ul>

<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl shadow-md">
  <h4 className="text-lg font-bold text-hyper-accent mb-4">{t(`Кто может зарабатывать:`)}</h4>
  <ul className="list-inside ml-6 text-gray-400 space-y-2">
    <li>{t(`🐦 Crypto influencers (Twitter, YouTube, TikTok)`)}</li>
    <li>{t(`💬 Community leaders (Telegram, Discord)`)}</li>
    <li>{t(`✍️ Content creators (блогеры, авторы)`)}</li>
    <li>{t(`💻 Разработчики (интеграция в dApps)`)}</li>
    <li>{t(`📊 Трейдеры (друзья, семья, коллеги)`)}</li>
    <li>{t(`👥 Все (даже без аудитории — начните с друзей)`)}</li>
  </ul>
</div>

<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl shadow-md">
  <h4 className="text-lg font-bold text-hyper-accent mb-4">{t(`Начните прямо сейчас:`)}</h4>
  <ol className="list-decimal list-inside ml-6 text-gray-400 space-y-2">
    <li>{t(`🔗 Зарегистрируйтесь: https://ht.xyz/referral`)}</li>
    <li>{t(`📥 Скачайте Marketing Kit: https://docs.hypertrade.io/referral/marketing-kit`)}</li>
    <li>{t(`📢 Поделитесь реф. ссылкой в ваших каналах`)}</li>
    <li>{t(`📊 Отслеживайте результаты: https://app.hypertrade.io/referrals/dashboard`)}</li>
    <li>{t(`💰 Получайте ежемесячные выплаты`)}</li>
  </ol>
  <p className="text-gray-300 mt-4">{t(`Начните сегодня и создайте источник пассивного дохода на годы вперёд! 🚀`)}</p>
</div>

<div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl shadow-md">
  <h4 className="text-lg font-bold text-hyper-accent mb-4">{t(`Ресурсы и поддержка`)}</h4>

  <p className="text-gray-300 mb-2">{t(`📚 Документация:`)}</p>
  <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1 mb-4">
    <li>{t(`Referral Program Guide: https://docs.hypertrade.io/referral`)}</li>
    <li>{t(`Marketing Kit: https://docs.hypertrade.io/referral/marketing-kit`)}</li>
    <li>{t(`Dashboard: https://app.hypertrade.io/referrals/dashboard`)}</li>
  </ul>

  <p className="text-gray-300 mb-2">{t(`💬 Сообщество:`)}</p>
  <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1 mb-4">
    <li>{t(`Discord (#referral-program): https://discord.gg/hypertrade`)}</li>
    <li>{t(`Twitter: @Hypertrade_xyz`)}</li>
    <li>{t(`Telegram: @HypertradeReferrals`)}</li>
  </ul>

  <p className="text-gray-300 mb-2">{t(`📧 Поддержка:`)}</p>
  <ul className="list-disc list-inside ml-6 text-gray-400 space-y-1">
    <li>{t(`Общие вопросы: referrals@hypertrade.io`)}</li>
    <li>{t(`Технические проблемы: support@hypertrade.io`)}</li>
    <li>{t(`Партнёрство (Diamond уровень): partnerships@hypertrade.io`)}</li>
  </ul>
</div>
  </div>

</div>

  </div>

    </article>
  </div>
 
    
    </section>
  );
};
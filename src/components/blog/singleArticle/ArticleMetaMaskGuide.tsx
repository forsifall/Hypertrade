"use client";
import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import {
  CheckCircle,
  Settings,
  Link as LinkIcon,
  Zap,
  AlertCircle,
  Clock,
  Smartphone,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { useTranslation } from "react-i18next";

export const ArticleMetaMaskGuide = ({ lang }: { lang: Language }) => {

  const post = getBlogPosts(lang).find(
        /* eslint-disable-next-line */
    (curr: any) => curr.id === "metamask-guide"
  );

  const { t } = useTranslation();

  if (!post) return null;

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      {/* Header Image/Gradient */}
      <div
        className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
          <BackButton label={post.backButton} />
          <div className="flex flex-wrap gap-4 text-sm font-medium text-amber-400 mb-4">
            <span className="bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-gray-400">
              <Clock size={14} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-gray-400">
              {post.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">
          <article className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
              {t(`Как подключить MetaMask к Hyperliquid: пошаговая инструкция`)}
            </h1>

            <p className="text-sm text-gray-400 mb-12">
              {t(
                `Последнее обновление: 14 декабря 2025 | Время чтения: 6 минут`
              )}
            </p>

            <p className="mb-6">
              {t(
                `Хотите начать торговать на Hyperliquid, но не знаете, как подключить MetaMask?`
              )}
            </p>

            <p className="mb-6">
              {t(
                `Вы не одиноки. Каждый день сотни пользователей сталкиваются с этим вопросом. Хорошая новость: настройка занимает всего 3-5 минут, и после прочтения этого руководства вы сможете сделать это с закрытыми глазами.`
              )}
            </p>

            <p className="mb-6">
              {t(
                `В этой статье мы покажем три способа подключения MetaMask к сети Hyperliquid — от самого простого (один клик) до продвинутого (ручная настройка с пониманием каждого параметра).`
              )}
            </p>

            <p className="mb-12 font-medium text-hyper-accent">
              {t(
                `Бонус: В конце вы найдете решения всех типичных проблем при подключении.`
              )}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">
              {t(`📋 Что вам понадобится (чеклист за 1 минуту)`)}
            </h2>

            <p className="mb-6">
              {t(`Перед началом убедитесь, что у вас есть:`)}
            </p>

            <p className="font-bold mb-4">{t(`✅ Обязательные требования`)}</p>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`1. Браузер MetaMask`)}
            </h3>

            <ul className="mb-6">
              <li>{t(`✅ Google Chrome (рекомендуется)`)}</li>
              <li>{t(`✅ Firefox`)}</li>
              <li>{t(`✅ Brave`)}</li>
              <li>{t(`✅ Microsoft Edge`)}</li>
              <li>{t(`❌ Safari (ограниченная поддержка)`)}</li>
            </ul>

            <p className="mb-12 underline cursor-pointer">
              {t(`Еще не установлен? Скачать MetaMask`)}
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`2. Установленное расширение MetaMask`)}
            </h3>

            <p className="mb-4 font-medium">{t(`Как проверить:`)}</p>

            <ul className="mb-6">
              <li>
                {t(`Посмотрите на панель расширений браузера (справа вверху)`)}
              </li>
              <li>{t(`Найдите оранжевую иконку лисы 🦊`)}</li>
            </ul>

            <p className="mb-4 font-medium">{t(`Если не установлен:`)}</p>

            <ol className="mb-12">
              <li>{t(`Перейдите на metamask.io`)}</li>
              <li>{t(`Нажмите "Download"`)}</li>
              <li>{t(`Выберите ваш браузер`)}</li>
              <li>{t(`Следуйте инструкциям установки`)}</li>
            </ol>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`3. Созданный кошелек MetaMask`)}
            </h3>

            <p className="mb-4">
              {t(`Уже есть кошелек? Отлично! Переходите к следующему разделу.`)}
            </p>

            <p className="mb-4 font-medium">
              {t(`Нет кошелька? Создайте за 2 минуты:`)}
            </p>

            <ol className="mb-6">
              <li>{t(`Откройте расширение MetaMask`)}</li>
              <li>{t(`Нажмите "Create a Wallet"`)}</li>
              <li>{t(`Придумайте надежный пароль`)}</li>
              <li>{t(`ВАЖНО: Запишите seed-фразу (12 слов) на бумаге`)}</li>
              <li>{t(`Подтвердите seed-фразу`)}</li>
              <li>{t(`Готово!`)}</li>
            </ol>

            <div className="bg-red-900/20 border border-red-900/40 p-6 rounded-xl mb-12">
              <p className="font-bold text-red-400 mb-4">
                {t(`⚠️ КРИТИЧЕСКИ ВАЖНО:`)}
              </p>
              <ul>
                <li>{t(`Никогда не делитесь seed-фразой ни с кем`)}</li>
                <li>{t(`Не храните её в цифровом виде`)}</li>
                <li>{t(`Не делайте скриншоты`)}</li>
                <li>{t(`Запишите на бумаге и храните в безопасном месте`)}</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`4. Токены HYPE для газа (опционально на этапе подключения)`)}
            </h3>

            <p className="mb-6">
              {t(
                `Для подключения кошелька токены не нужны. Но для первой транзакции понадобятся HYPE для оплаты газа.`
              )}
            </p>

            <p className="font-medium mb-2">{t(`Где купить HYPE:`)}</p>

            <ul className="mb-4">
              <li>{t(`Centralized exchanges: Binance, OKX, Bybit`)}</li>
              <li>{t(`После подключения: через Hypertrade`)}</li>
            </ul>

            <p className="mb-12">
              {t(`Сколько нужно: 10-20 HYPE для комфортного старта (~$10-$20)`)}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">
              {t(`🚀 Способ 1: Автоматическое подключение (рекомендуется)`)}
            </h2>

            <p className="mb-6 font-medium">
              {t(`Самый простой и быстрый способ — займет 1 минуту!`)}
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Шаг 1: Перейдите на Hypertrade`)}
            </h3>

            <p className="mb-12">{t(`Откройте в браузере: ht.xyz`)}</p>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Шаг 2: Нажмите "Connect Wallet"`)}
            </h3>

            <p className="mb-12">
              {t(
                `Найдите кнопку "Connect Wallet" в правом верхнем углу и нажмите её.`
              )}
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Шаг 3: Выберите MetaMask`)}
            </h3>

            <p className="mb-4">{t(`Появится окно выбора кошелька:`)}</p>

            <ul className="mb-6">
              <li>{t(`🦊 MetaMask          ← Выберите это`)}</li>
              <li>{t(`🔗 WalletConnect`)}</li>
              <li>{t(`💼 Coinbase Wallet`)}</li>
              <li>{t(`🔐 Ledger`)}</li>
            </ul>

            <p className="mb-12">{t(`Нажмите на MetaMask.`)}</p>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Шаг 4: Подтвердите подключение в MetaMask`)}
            </h3>

            <p className="mb-6">
              {t(`Автоматически откроется всплывающее окно MetaMask:`)}
            </p>

            <div className="bg-hyper-800/40 p-6 rounded-xl mb-6 text-sm">
              <p className="mb-4">
                {t(`ht.xyz хочет подключиться к вашему кошельку`)}
              </p>

              <p className="mb-2">{t(`Это приложение хотело бы:`)}</p>

              <ul className="mb-4">
                <li>{t(`✓ Просматривать адреса ваших аккаунтов`)}</li>
                <li>{t(`✓ Запрашивать подтверждение транзакций`)}</li>
              </ul>

              <p className="mb-4">{t(`Аккаунт: Account 1 (0x1a2b...3c4d)`)}</p>

              <p>{t(`[Cancel] [Next]`)}</p>
            </div>

            <p className="mb-12">{t(`Нажмите "Next" (Далее)`)}</p>

            <p className="mb-4">{t(`Появится второй экран подтверждения:`)}</p>

            <div className="bg-hyper-800/40 p-6 rounded-xl mb-6 text-sm">
              <p className="mb-4">{t(`Подключить к ht.xyz?`)}</p>

              <p className="mb-2">{t(`Это даст ht.xyz разрешение на:`)}</p>

              <ul className="mb-4">
                <li>{t(`Просмотр адресов ваших аккаунтов`)}</li>
                <li>{t(`Предложение транзакций для подтверждения`)}</li>
              </ul>

              <p>{t(`[Back] [Connect]`)}</p>
            </div>

            <p className="mb-12 font-medium">
              {t(`Нажмите "Connect" (Подключить)`)}
            </p>
          </article>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">
              {t(`Шаг 5: Добавление сети Hyperliquid`)}
            </h2>

            <p className="mb-6">
              {t(`После подключения появится ещё одно окно:`)}
            </p>

            <div className="bg-hyper-800/40 border border-gray-700 p-6 rounded-xl mb-6 text-sm">
              <p className="mb-4 font-medium text-red-400">
                {t(`⚠️ Разрешить этому сайту добавить сеть?`)}
              </p>

              <p className="mb-2">{t(`Название сети: Hyperliquid`)}</p>
              <p className="mb-2">
                {t(`URL RPC: https://api.hyperliquid.xyz/evm`)}
              </p>
              <p className="mb-2">{t(`Chain ID: 42161`)}</p>
              <p className="mb-4">{t(`Символ валюты: HYPE`)}</p>

              <p>{t(`[Cancel] [Approve]`)}</p>
            </div>

            <p className="mb-12 font-medium">
              {t(`Нажмите "Approve" (Одобрить)`)}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">
              {t(`Шаг 6: Переключение на сеть Hyperliquid`)}
            </h2>

            <p className="mb-6">
              {t(`Последний шаг — система предложит переключиться:`)}
            </p>

            <div className="bg-hyper-800/40 border border-gray-700 p-6 rounded-xl mb-6 text-sm">
              <p className="mb-4">{t(`Переключиться на Hyperliquid?`)}</p>

              <p className="mb-4">
                {t(`Эта сеть была добавлена. Переключиться сейчас?`)}
              </p>

              <p>{t(`[Cancel] [Switch Network]`)}</p>
            </div>

            <p className="mb-12 font-medium">
              {t(`Нажмите "Switch Network" (Переключить сеть)`)}
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-12 mb-6">
              {t(`✅ Готово!`)}
            </h2>

            <p className="mb-6 font-medium">
              {t(`Вы успешно подключились к Hyperliquid!`)}
            </p>

            <p className="mb-4 font-bold">
              {t(`Проверка успешного подключения:`)}
            </p>

            <p className="mb-2">
              {t(`В правом верхнем углу Hypertrade теперь отображается:`)}
            </p>

            <ul className="mb-6">
              <li>{t(`✅ Ваш адрес кошелька (сокращенный): 0x1a2b...3c4d`)}</li>
              <li>{t(`✅ Сеть: Hyperliquid`)}</li>
              <li>{t(`✅ Баланс HYPE (если есть)`)}</li>
            </ul>

            <p className="mb-2">{t(`В расширении MetaMask:`)}</p>

            <ul className="mb-12">
              <li>
                {t(`✅ В выпадающем меню сетей показывается "Hyperliquid"`)}
              </li>
              <li>{t(`✅ Символ валюты: HYPE`)}</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">
              {t(`🔧 Способ 2: Ручное добавление сети через MetaMask`)}
            </h2>

            <p className="mb-6">
              {t(
                `Если автоматическое подключение не сработало, добавьте сеть вручную.`
              )}
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Шаг 1: Откройте MetaMask`)}
            </h3>

            <p className="mb-12">
              {t(`Нажмите на иконку расширения MetaMask 🦊 в браузере.`)}
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Шаг 2: Откройте меню сетей`)}
            </h3>

            <p className="mb-4">
              {t(`Нажмите на выпадающее меню сетей в верхней части окна.`)}
            </p>

            <p className="mb-4">{t(`По умолчанию может быть выбрано:`)}</p>

            <ul className="mb-12">
              <li>{t(`"Ethereum Mainnet"`)} </li>
              <li>{t(`"Goerli Test Network"`)} </li>
              <li>{t(`Или другая сеть`)}</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Шаг 3: Нажмите "Add Network"`)}
            </h3>

            <p className="mb-4">
              {t(`Прокрутите список сетей вниз до конца и нажмите:`)}
            </p>

            <p className="mb-2">{t(`"Add Network" (Добавить сеть)`)}</p>
            <p className="mb-12">
              {t(`или "Add a network manually" (Добавить сеть вручную)`)}
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Шаг 4: Введите данные сети Hyperliquid`)}
            </h3>

            <p className="mb-6">
              {t(
                `Откроется форма добавления сети. Внимательно введите следующие данные:`
              )}
            </p>

            <div className="bg-hyper-800/40 border border-gray-700 p-6 rounded-xl mb-12 text-sm">
              <p className="mb-2">{t(`Network Name (Название сети):`)}</p>
              <p className="mb-4 font-medium">{t(`Hyperliquid`)}</p>

              <p className="mb-2">{t(`New RPC URL (URL RPC):`)}</p>
              <p className="mb-4 font-medium">
                {t(`https://api.hyperliquid.xyz/evm`)}
              </p>

              <p className="mb-2">{t(`Chain ID (ID цепи):`)}</p>
              <p className="mb-4 font-medium">{t(`42161`)}</p>

              <p className="mb-2">{t(`Currency Symbol (Символ валюты):`)}</p>
              <p className="mb-4 font-medium">{t(`HYPE`)}</p>

              <p className="mb-2">
                {t(`Block Explorer URL (URL обозревателя блоков):`)}
              </p>
              <p className="font-medium">
                {t(`https://explorer.hyperliquid.xyz`)}
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-6">
              {t(`📝 Детальное объяснение каждого поля:`)}
            </h3>

            <p className="font-bold mb-2">{t(`Network Name:`)}</p>
            <ul className="mb-6">
              <li>{t(`Просто название для вашего удобства`)}</li>
              <li>
                {t(`Можно написать любое, но рекомендуется "Hyperliquid"`)}
              </li>
            </ul>

            <p className="font-bold mb-2">{t(`New RPC URL:`)}</p>
            <ul className="mb-6">
              <li>
                {t(`Адрес узла, через который MetaMask общается с блокчейном`)}
              </li>
              <li>{t(`Критически важно: вводите точно без ошибок`)}</li>
              <li>{t(`Проверьте https:// в начале`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Chain ID:`)}</p>
            <ul className="mb-6">
              <li>{t(`Уникальный идентификатор сети`)}</li>
              <li>{t(`Для Hyperliquid: 42161`)}</li>
              <li>{t(`Не путайте с другими сетями!`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Currency Symbol:`)}</p>
            <ul className="mb-6">
              <li>{t(`Символ нативного токена сети`)}</li>
              <li>{t(`Для Hyperliquid: HYPE`)}</li>
              <li>{t(`Будет отображаться как единица баланса`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Block Explorer URL:`)}</p>
            <ul className="mb-12">
              <li>{t(`Ссылка на обозреватель блоков`)}</li>
              <li>{t(`Используется для просмотра транзакций`)}</li>
              <li>{t(`Опционально, но рекомендуется`)}</li>
            </ul>
          </article>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">
              {t(`Шаг 5: Сохраните настройки`)}
            </h2>

            <p className="mb-12">
              {t(
                `После ввода всех данных нажмите кнопку "Save" (Сохранить) внизу формы.`
              )}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">
              {t(`Шаг 6: Переключитесь на сеть Hyperliquid`)}
            </h2>

            <p className="mb-4">
              {t(
                `MetaMask автоматически предложит переключиться на новую сеть:`
              )}
            </p>

            <div className="bg-hyper-800/40 border border-gray-700 p-6 rounded-xl mb-6 text-sm">
              <p className="mb-4">{t(`Переключиться на Hyperliquid?`)}</p>

              <p>{t(`[Cancel] [Switch Network]`)}</p>
            </div>

            <p className="mb-4 font-medium">{t(`Нажмите "Switch Network"`)}</p>

            <p className="mb-12">
              {t(`Или переключите вручную через выпадающее меню сетей.`)}
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-12 mb-6">
              {t(`✅ Проверка успешного добавления`)}
            </h2>

            <p className="mb-4">{t(`В MetaMask должно отображаться:`)}</p>

            <ol className="mb-6">
              <li>{t(`В выпадающем меню: Название "Hyperliquid" ✅`)}</li>
              <li>{t(`Баланс: 0 HYPE (если еще не пополняли)`)}</li>
              <li>{t(`При отправке: Комиссия будет в HYPE`)}</li>
            </ol>

            <p className="mb-4">
              {t(`Попробуйте переключаться между сетями:`)}
            </p>

            <ul className="mb-12">
              <li>{t(`Ethereum Mainnet → MetaMask показывает ETH`)}</li>
              <li>{t(`Hyperliquid → MetaMask показывает HYPE`)}</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">
              {t(
                `📱 Способ 3: Подключение через мобильное приложение MetaMask`
              )}
            </h2>

            <p className="mb-6">
              {t(
                `Используете MetaMask на смартфоне? Вот как подключиться к Hyperliquid.`
              )}
            </p>

            <p className="font-bold mb-2">{t(`Предварительные требования`)}</p>

            <ul className="mb-12">
              <li>{t(`✅ Установлено приложение MetaMask (iOS/Android)`)}</li>
              <li>{t(`✅ Создан кошелек`)}</li>
              <li>{t(`✅ Кошелек разблокирован`)}</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-6">
              {t(
                `Вариант А: Автоматическое добавление через браузер приложения`
              )}
            </h3>

            <ol className="mb-6">
              <li>{t(`Шаг 1: Откройте приложение MetaMask`)}</li>
              <li>
                {t(`Шаг 2: Нажмите на иконку "Browser" (🌐) внизу экрана`)}
              </li>
              <li>{t(`Шаг 3: Введите в адресную строку: ht.xyz`)}</li>
              <li>
                {t(`Шаг 4: На сайте Hypertrade нажмите "Connect Wallet"`)}
              </li>
              <li>{t(`Шаг 5: Выберите "MetaMask"`)}</li>
              <li>{t(`Шаг 6: Подтвердите:`)}</li>
            </ol>

            <ul className="mb-6">
              <li>{t(`Подключение кошелька ✅`)}</li>
              <li>{t(`Добавление сети Hyperliquid ✅`)}</li>
              <li>{t(`Переключение на Hyperliquid ✅`)}</li>
            </ul>

            <p className="mb-12 font-medium">
              {t(`Готово! Сеть добавлена автоматически.`)}
            </p>

            <h3 className="text-xl font-bold text-white mb-6">
              {t(`Вариант Б: Ручное добавление в мобильном приложении`)}
            </h3>

            <ol className="mb-6">
              <li>
                {t(
                  `Шаг 1: Откройте MetaMask и нажмите на ☰ (меню) в левом верхнем углу`
                )}
              </li>
              <li>{t(`Шаг 2: Выберите "Settings" (⚙️ Настройки)`)}</li>
              <li>{t(`Шаг 3: Нажмите "Networks" (Сети)`)}</li>
              <li>{t(`Шаг 4: Нажмите "Add Network" (+ Добавить сеть)`)}</li>
              <li>{t(`Шаг 5: Введите данные:`)}</li>
            </ol>

            <div className="bg-hyper-800/40 border border-gray-700 p-6 rounded-xl mb-6 text-sm">
              <p className="mb-2">{t(`Network Name: Hyperliquid`)}</p>
              <p className="mb-2">
                {t(`RPC URL: https://api.hyperliquid.xyz/evm`)}
              </p>
              <p className="mb-2">{t(`Chain ID: 42161`)}</p>
              <p className="mb-2">{t(`Symbol: HYPE`)}</p>
              <p>{t(`Block Explorer: https://explorer.hyperliquid.xyz`)}</p>
            </div>

            <ol start={6} className="mb-12">
              <li>{t(`Шаг 6: Нажмите "Add" (Добавить)`)}</li>
              <li>
                {t(`Шаг 7: Переключитесь на сеть Hyperliquid через меню сетей`)}
              </li>
            </ol>

            <h3 className="text-xl font-bold text-green-400 mb-6">
              {t(`✅ Проверка на мобильном`)}
            </h3>

            <p className="mb-4">{t(`В приложении MetaMask:`)}</p>

            <ul className="mb-12">
              <li>{t(`Переключите сеть на Hyperliquid`)}</li>
              <li>{t(`Баланс должен показываться в HYPE`)}</li>
              <li>{t(`При нажатии "Send" (Отправить) комиссия в HYPE`)}</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">
              {t(`🎯 Что делать после подключения`)}
            </h2>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`1. Пополните кошелек токенами HYPE`)}
            </h3>

            <p className="font-bold mb-2">{t(`Зачем нужны HYPE:`)}</p>

            <ul className="mb-4">
              <li>{t(`Оплата газа за все транзакции на Hyperliquid`)}</li>
              <li>
                {t(
                  `Без HYPE не сможете делать свопы, переводы и другие операции`
                )}
              </li>
            </ul>

            <p className="font-bold mb-2">{t(`Как получить HYPE:`)}</p>

            <p className="font-medium mb-2">{t(`Способ 1: Купить на CEX`)}</p>

            <ol className="mb-4">
              <li>{t(`Зарегистрируйтесь на Binance, OKX или Bybit`)}</li>
              <li>{t(`Купите HYPE`)}</li>
              <li>
                {t(`Выведите на адрес вашего кошелька в сети Hyperliquid`)}
              </li>
            </ol>

            <p className="mb-12 text-red-400 font-medium">
              {t(
                `⚠️ ВАЖНО: При выводе обязательно выберите сеть Hyperliquid! Если отправите в другую сеть (Ethereum, BSC), токены будут потеряны.`
              )}
            </p>

            <p className="font-medium mb-2">
              {t(`Способ 2: Купить через Hypertrade`)}
            </p>

            <ol className="mb-4">
              <li>{t(`Перейдите на ht.xyz`)}</li>
              <li>{t(`Подключите кошелек (уже сделали ✅)`)}</li>
              <li>{t(`Обменяйте USDC, ETH или другие токены на HYPE`)}</li>
            </ol>

            <p className="font-bold mb-2">{t(`Рекомендуемое количество:`)}</p>

            <ul className="mb-12">
              <li>{t(`Минимум: 5 HYPE (для нескольких транзакций)`)}</li>
              <li>{t(`Оптимально: 10-20 HYPE (на месяц легкой торговли)`)}</li>
              <li>{t(`Много торгуете: 50+ HYPE`)}</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`2. Добавьте часто используемые токены`)}
            </h3>

            <p className="mb-4">
              {t(`По умолчанию MetaMask показывает только HYPE.`)}
            </p>

            <p className="mb-4">{t(`Чтобы видеть другие токены:`)}</p>

            <ol className="mb-6">
              <li>{t(`Шаг 1: Откройте MetaMask`)}</li>
              <li>{t(`Шаг 2: Прокрутите список активов вниз`)}</li>
              <li>
                {t(`Шаг 3: Нажмите "Import Tokens" (Импортировать токены)`)}
              </li>
              <li>{t(`Шаг 4: Введите адрес контракта токена`)}</li>
            </ol>

            <p className="font-bold mb-2">
              {t(`Популярные токены на Hyperliquid:`)}
            </p>

            <ul className="mb-4">
              <li>{t(`USDC: 0x[адрес контракта USDC]`)}</li>
              <li>{t(`ETH: 0x[адрес контракта ETH]`)}</li>
              <li>{t(`USDT: 0x[адрес контракта USDT]`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Где найти адреса:`)}</p>

            <ul className="mb-12">
              <li>{t(`На explorer.hyperliquid.xyz`)}</li>
              <li>{t(`В документации проекта токена`)}</li>
              <li>
                {t(
                  `На CoinGecko или CoinMarketCap (проверьте правильную сеть!)`
                )}
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`3. Настройте отображение баланса`)}
            </h3>

            <p className="mb-4">{t(`Для удобства:`)}</p>

            <ol className="mb-6">
              <li>{t(`Шаг 1: В MetaMask нажмите ⚙️ (Settings)`)}</li>
              <li>{t(`Шаг 2: Выберите "General" (Общие)`)}</li>
              <li>{t(`Шаг 3: Включите опции:`)}</li>
            </ol>

            <ul className="mb-4">
              <li>{t(`☑ Show fiat on testnets (Показывать фиат)`)}</li>
              <li>{t(`☑ Show hex data (Показывать hex данные)`)}</li>
              <li>{t(`☑ Show conversion on test networks`)}</li>
            </ul>

            <ol start={4} className="mb-6">
              <li>{t(`Шаг 4: Вернитесь и выберите "Security & Privacy"`)}</li>
              <li>{t(`Шаг 5: Убедитесь:`)}</li>
            </ol>

            <ul className="mb-12">
              <li>{t(`☑ Show balance and token price checker`)}</li>
            </ul>

            <p className="font-medium">
              {t(`Теперь MetaMask будет показывать баланс в долларах США.`)}
            </p>
          </article>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              {t(`4. Создайте резервную копию`)}
            </h2>

            <p className="text-red-400 font-bold mb-6">
              {t(`Критически важно для безопасности!`)}
            </p>

            <p className="font-bold mb-4">{t(`Что сделать:`)}</p>

            <ol className="mb-6">
              <li>{t(`Проверьте seed-фразу:`)}</li>
            </ol>

            <ul className="mb-6">
              <li>{t(`MetaMask → Settings → Security & Privacy`)}</li>
              <li>{t(`"Reveal Secret Recovery Phrase"`)}</li>
              <li>{t(`Введите пароль`)}</li>
              <li>{t(`Убедитесь, что записали правильно`)}</li>
            </ul>

            <ol start={2} className="mb-6">
              <li>{t(`Экспортируйте приватные ключи важных аккаунтов:`)}</li>
            </ol>

            <ul className="mb-6">
              <li>{t(`Нажмите на три точки возле аккаунта`)}</li>
              <li>{t(`"Account Details"`)}</li>
              <li>{t(`"Export Private Key"`)}</li>
              <li>{t(`Сохраните в безопасном месте`)}</li>
            </ul>

            <p className="text-red-400 font-bold mb-4">
              {t(`⚠️ НИКОГДА НЕ ДЕЛИТЕСЬ:`)}
            </p>

            <ul className="mb-12">
              <li>{t(`Seed-фразой (12 слов)`)}</li>
              <li>{t(`Приватными ключами`)}</li>
              <li>{t(`Паролем от MetaMask`)}</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              {t(`5. Выполните тестовую транзакцию`)}
            </h2>

            <p className="mb-4">
              {t(`Перед крупными суммами проверьте всё на маленькой:`)}
            </p>

            <ol className="mb-6">
              <li>{t(`Перейдите на ht.xyz`)}</li>
              <li>{t(`Сделайте небольшой своп (например, $10)`)}</li>
              <li>{t(`Убедитесь, что транзакция прошла успешно`)}</li>
              <li>{t(`Проверьте баланс в MetaMask`)}</li>
            </ol>

            <p className="mb-12 font-medium">
              {t(
                `Если всё работает — можете спокойно работать с крупными суммами.`
              )}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">
              {t(`🔧 Решение типичных проблем`)}
            </h2>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Проблема 1: "Unable to connect to network"`)}
            </h3>

            <p className="font-bold mb-2">{t(`Симптомы:`)}</p>

            <ul className="mb-6">
              <li>{t(`MetaMask не может подключиться к Hyperliquid`)}</li>
              <li>{t(`Постоянно показывается ошибка подключения`)}</li>
              <li>{t(`Баланс не загружается`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Причины и решения:`)}</p>

            <p className="font-medium mb-2">
              {t(`Причина 1: Неправильный RPC URL`)}
            </p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-12">
              <li>{t(`Проверьте RPC URL: https://api.hyperliquid.xyz/evm`)}</li>
              <li>{t(`Убедитесь, что нет лишних пробелов`)}</li>
              <li>{t(`Проверьте https:// в начале`)}</li>
            </ol>

            <p className="font-medium mb-2">
              {t(`Причина 2: Временные проблемы с RPC`)}
            </p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-12">
              <li>{t(`Попробуйте альтернативный RPC (если доступен)`)}</li>
              <li>{t(`Подождите 5-10 минут и попробуйте снова`)}</li>
              <li>{t(`Проверьте статус сети на status.hyperliquid.xyz`)}</li>
            </ol>

            <p className="font-medium mb-2">
              {t(`Причина 3: Блокировка фаерволом или VPN`)}
            </p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-12">
              <li>{t(`Отключите VPN`)}</li>
              <li>{t(`Проверьте настройки фаервола`)}</li>
              <li>{t(`Попробуйте другую сеть Wi-Fi/мобильный интернет`)}</li>
            </ol>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Проблема 2: "Chain ID mismatch"`)}
            </h3>

            <p className="font-bold mb-2">{t(`Симптомы:`)}</p>

            <ul className="mb-4">
              <li>{t(`Ошибка: "Chain ID doesn't match"`)}</li>
              <li>{t(`Не могу переключиться на сеть`)}</li>
            </ul>

            <p className="mb-2">{t(`Причина: Неправильно введен Chain ID`)}</p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-12">
              <li>{t(`Откройте настройки сети в MetaMask`)}</li>
              <li>{t(`Проверьте Chain ID: должно быть 42161`)}</li>
              <li>{t(`Если указано другое число — исправьте`)}</li>
              <li>{t(`Сохраните и попробуйте снова`)}</li>
            </ol>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Проблема 3: Сеть добавлена, но не отображаются токены`)}
            </h3>

            <p className="font-bold mb-2">{t(`Симптомы:`)}</p>

            <ul className="mb-6">
              <li>{t(`Сеть Hyperliquid подключена ✅`)}</li>
              <li>{t(`Но баланс показывает 0 по всем токенам`)}</li>
              <li>{t(`Вы уверены, что токены есть`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Причины и решения:`)}</p>

            <p className="font-medium mb-2">
              {t(`Причина 1: Токены не добавлены в MetaMask`)}
            </p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-12">
              <li>{t(`Нажмите "Import Tokens"`)}</li>
              <li>{t(`Введите адрес контракта токена`)}</li>
              <li>{t(`Токен появится в списке`)}</li>
            </ol>

            <p className="font-medium mb-2">
              {t(`Причина 2: Смотрите на другой аккаунт`)}
            </p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-12">
              <li>{t(`Проверьте выбранный аккаунт в MetaMask`)}</li>
              <li>{t(`Переключитесь на правильный аккаунт`)}</li>
              <li>{t(`Проверьте адрес на explorer.hyperliquid.xyz`)}</li>
            </ol>

            <p className="font-medium mb-2">
              {t(`Причина 3: Токены в другой сети`)}
            </p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-12">
              <li>
                {t(`Убедитесь, что отправили токены именно в сеть Hyperliquid`)}
              </li>
              <li>{t(`Проверьте транзакцию отправки`)}</li>
              <li>
                {t(`Если отправили в другую сеть — могут потребоваться мосты`)}
              </li>
            </ol>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Проблема 4: "Недостаточно средств для газа"`)}
            </h3>

            <p className="font-bold mb-2">{t(`Симптомы:`)}</p>

            <ul className="mb-4">
              <li>{t(`Ошибка: "Insufficient funds for gas"`)}</li>
              <li>{t(`Не могу выполнить транзакцию`)}</li>
            </ul>

            <p className="mb-2">{t(`Причина: Нет HYPE для оплаты газа`)}</p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-4">
              <li>{t(`Купите HYPE на CEX (Binance, OKX)`)}</li>
              <li>{t(`Выведите на ваш адрес в сети Hyperliquid`)}</li>
              <li>{t(`Или попросите друга отправить немного HYPE`)}</li>
            </ol>

            <p className="mb-12 font-medium">
              {t(`Минимум для первой транзакции: 2-3 HYPE`)}
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Проблема 5: MetaMask постоянно переключается на Ethereum`)}
            </h3>

            <p className="font-bold mb-2">{t(`Симптомы:`)}</p>

            <ul className="mb-6">
              <li>{t(`Выбираете Hyperliquid`)}</li>
              <li>{t(`Через секунду MetaMask переключается на Ethereum`)}</li>
              <li>{t(`Не удается зафиксировать Hyperliquid`)}</li>
            </ul>

            <p className="mb-2">
              {t(`Причина: Сайт или dApp пытается переключить сеть`)}
            </p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-12">
              <li>{t(`Закройте все вкладки с dApps`)}</li>
              <li>{t(`Переключите на Hyperliquid вручную`)}</li>
              <li>{t(`Откройте только ht.xyz`)}</li>
              <li>{t(`Подключите кошелек заново`)}</li>
            </ol>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Проблема 6: "This network is already added"`)}
            </h3>

            <p className="font-bold mb-2">{t(`Симптомы:`)}</p>

            <ul className="mb-6">
              <li>{t(`Пытаетесь добавить Hyperliquid`)}</li>
              <li>{t(`Ошибка: "Эта сеть уже добавлена"`)}</li>
              <li>{t(`Но не видите её в списке`)}</li>
            </ul>

            <p className="mb-2">{t(`Причина: Сеть добавлена, но скрыта`)}</p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-12">
              <li>{t(`Откройте MetaMask`)}</li>
              <li>{t(`Settings → Networks`)}</li>
              <li>{t(`Найдите Hyperliquid в списке`)}</li>
              <li>{t(`Если не активна — активируйте`)}</li>
              <li>
                {t(
                  `Если Chain ID отличается — это дубликат, удалите и добавьте заново`
                )}
              </li>
            </ol>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Проблема 7: Медленная загрузка баланса`)}
            </h3>

            <p className="font-bold mb-2">{t(`Симптомы:`)}</p>

            <ul className="mb-6">
              <li>{t(`Баланс загружается 30+ секунд`)}</li>
              <li>{t(`Или вообще не загружается`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Причины и решения:`)}</p>

            <p className="font-medium mb-2">{t(`Причина 1: Перегрузка RPC`)}</p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol>
              <li>{t(`Подождите несколько минут`)}</li>
              <li>{t(`Обновите страницу`)}</li>
              <li>{t(`Попробуйте позже`)}</li>
            </ol>
          </article>

          <article className="prose prose-invert prose-lg max-w-none">
            <p className="font-medium mb-2">
              {t(`Причина 2: Медленный интернет`)}
            </p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-12">
              <li>{t(`Проверьте скорость интернета`)}</li>
              <li>{t(`Переключитесь на более быстрое соединение`)}</li>
              <li>{t(`Перезагрузите роутер`)}</li>
            </ol>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`Проблема 8: "Ошибка RPC" при отправке транзакции`)}
            </h3>

            <p className="font-bold mb-2">{t(`Симптомы:`)}</p>

            <ul className="mb-6">
              <li>{t(`Пытаетесь отправить транзакцию`)}</li>
              <li>{t(`Ошибка: "RPC Error"`)}</li>
              <li>{t(`Транзакция не выполняется`)}</li>
            </ul>

            <p className="font-bold mb-4">{t(`Причины и решения:`)}</p>

            <p className="font-medium mb-2">
              {t(`Причина 1: Неправильные параметры газа`)}
            </p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-12">
              <li>{t(`В MetaMask нажмите "Edit" возле Gas Fee`)}</li>
              <li>{t(`Выберите "Market" или увеличьте Gas Limit`)}</li>
              <li>{t(`Попробуйте снова`)}</li>
            </ol>

            <p className="font-medium mb-2">{t(`Причина 2: Nonce конфликт`)}</p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-12">
              <li>{t(`Settings → Advanced → Reset Account`)}</li>
              <li>{t(`Это сбросит nonce (не удалит средства!)`)}</li>
              <li>{t(`Попробуйте транзакцию снова`)}</li>
            </ol>

            <p className="font-medium mb-2">
              {t(`Причина 3: Проблемы на стороне RPC`)}
            </p>

            <p className="text-green-400 font-bold mb-2">{t(`✅ Решение:`)}</p>

            <ol className="mb-12">
              <li>{t(`Подождите 10-15 минут`)}</li>
              <li>{t(`Проверьте статус сети`)}</li>
              <li>{t(`Попробуйте альтернативный RPC`)}</li>
            </ol>

            <h3 className="text-xl font-bold text-white mb-6">
              {t(`🔐 Советы по безопасности`)}
            </h3>

            <p className="font-bold mb-2">{t(`1. Проверяйте адрес сайта`)}</p>

            <p className="mb-4">
              {t(`Всегда убедитесь, что используете официальный домен:`)}
            </p>

            <p className="text-green-400 font-bold mb-2">
              {t(`✅ Правильно:`)}
            </p>

            <ul className="mb-6">
              <li>{t(`https://ht.xyz (Hypertrade)`)}</li>
              <li>{t(`https://metamask.io (MetaMask)`)}</li>
              <li>{t(`https://hyperliquid.xyz (Hyperliquid)`)}</li>
            </ul>

            <p className="text-red-400 font-bold mb-2">
              {t(`❌ Мошеннические сайты:`)}
            </p>

            <ul className="mb-6">
              <li>{t(`ht-xyz.com`)}</li>
              <li>{t(`hypertrade.net`)}</li>
              <li>{t(`metmask.io (опечатка!)`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Как проверить:`)}</p>

            <ul className="mb-12">
              <li>{t(`Смотрите на замок 🔒 слева от адреса`)}</li>
              <li>{t(`Проверяйте правильность написания`)}</li>
              <li>{t(`Добавьте в закладки правильные адреса`)}</li>
            </ul>

            <p className="font-bold mb-2">
              {t(`2. Не подписывайте подозрительные транзакции`)}
            </p>

            <p className="font-bold mb-2">{t(`Признаки мошенничества:`)}</p>

            <ul className="mb-6">
              <li>
                {t(`❌ Запрос на подписание сообщения от неизвестного сайта`)}
              </li>
              <li>
                {t(
                  `❌ Транзакция на большую сумму, которую вы не инициировали`
                )}
              </li>
              <li>{t(`❌ Множественные approval на все ваши токены`)}</li>
              <li>{t(`❌ Странные адреса получателей`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Что делать при подозрении:`)}</p>

            <ol className="mb-12">
              <li>{t(`Отклоните транзакцию (Reject)`)}</li>
              <li>{t(`Закройте подозрительный сайт`)}</li>
              <li>{t(`Проверьте approval через revoke.cash`)}</li>
            </ol>

            <p className="font-bold mb-2">
              {t(`3. Регулярно проверяйте разрешения (Approvals)`)}
            </p>

            <p className="mb-2">
              {t(
                `Что это: Когда вы даете разрешение dApp использовать ваши токены, оно остается активным.`
              )}
            </p>

            <p className="font-bold mb-2">{t(`Как проверить:`)}</p>

            <ol className="mb-6">
              <li>{t(`Зайдите на revoke.cash`)}</li>
              <li>{t(`Подключите MetaMask`)}</li>
              <li>{t(`Выберите сеть Hyperliquid`)}</li>
              <li>{t(`Посмотрите список активных approvals`)}</li>
            </ol>

            <p className="font-bold mb-2">{t(`Что отозвать:`)}</p>

            <ul className="mb-6">
              <li>
                {t(`❌ Approvals для сайтов, которыми больше не пользуетесь`)}
              </li>
              <li>{t(`❌ Подозрительные или неизвестные контракты`)}</li>
              <li>{t(`❌ Неограниченные approvals (unlimited)`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Что оставить:`)}</p>

            <ul className="mb-12">
              <li>{t(`✅ Hypertrade (если часто используете)`)}</li>
              <li>{t(`✅ Другие проверенные dApps, которыми пользуетесь`)}</li>
            </ul>

            <p className="font-bold mb-2">
              {t(`4. Используйте hardware wallet для крупных сумм`)}
            </p>

            <p className="mb-4">{t(`Если храните $1,000+:`)}</p>

            <p className="mb-4">
              {t(`Рассмотрите подключение Ledger или Trezor:`)}
            </p>

            <ol className="mb-6">
              <li>{t(`Купите hardware wallet`)}</li>
              <li>{t(`Настройте его`)}</li>
              <li>{t(`Подключите к MetaMask`)}</li>
              <li>
                {t(`Все транзакции будут требовать физического подтверждения`)}
              </li>
            </ol>

            <p className="font-bold mb-2">{t(`Преимущества:`)}</p>

            <ul className="mb-12">
              <li>{t(`Приватные ключи никогда не покидают устройство`)}</li>
              <li>{t(`Защита от вредоносного ПО`)}</li>
              <li>{t(`Физическое подтверждение каждой транзакции`)}</li>
            </ul>

            <p className="font-bold mb-4">
              {t(`5. Не храните seed-фразу в цифровом виде`)}
            </p>

            <p className="text-red-400 font-bold mb-2">{t(`НИКОГДА:`)}</p>

            <ul className="mb-6">
              <li>{t(`❌ Не сохраняйте в Notes/Notepad`)}</li>
              <li>{t(`❌ Не делайте скриншоты`)}</li>
              <li>{t(`❌ Не отправляйте по email/мессенджерам`)}</li>
              <li>{t(`❌ Не храните в облачных сервисах`)}</li>
              <li>{t(`❌ Не фотографируйте на телефон`)}</li>
            </ul>

            <p className="text-green-400 font-bold mb-2">{t(`ТОЛЬКО:`)}</p>

            <ul className="mb-12">
              <li>{t(`✅ Пишите на бумаге`)}</li>
              <li>{t(`✅ Храните в сейфе`)}</li>
              <li>
                {t(`✅ Рассмотрите металлические носители (Cryptosteel)`)}
              </li>
              <li>{t(`✅ Создайте несколько копий в разных местах`)}</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-6">
              {t(`📊 Сравнение способов подключения`)}
            </h3>

            <div className="overflow-x-auto not-prose mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="p-4 text-gray-400 font-medium">
                      {t(`Характеристика`)}
                    </th>
                    <th className="p-4 text-gray-400 font-medium">
                      {t(`Автоматический`)}
                    </th>
                    <th className="p-4 text-gray-400 font-medium">
                      {t(`Ручной`)}
                    </th>
                    <th className="p-4 text-gray-400 font-medium">
                      {t(`Мобильный`)}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-800 bg-hyper-800/20">
                    <td className="p-4 text-white">{t(`Сложность`)}</td>
                    <td className="p-4">{t(`⭐ Легко`)}</td>
                    <td className="p-4">{t(`⭐⭐ Средне`)}</td>
                    <td className="p-4">{t(`⭐⭐ Средне`)}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-white">{t(`Время`)}</td>
                    <td className="p-4">{t(`1 минута`)}</td>
                    <td className="p-4">{t(`3 минуты`)}</td>
                    <td className="p-4">{t(`2 минуты`)}</td>
                  </tr>
                  <tr className="border-b border-gray-800 bg-hyper-800/20">
                    <td className="p-4 text-white">{t(`Риск ошибки`)}</td>
                    <td className="p-4">{t(`Низкий`)}</td>
                    <td className="p-4">{t(`Средний`)}</td>
                    <td className="p-4">{t(`Низкий`)}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-white">
                      {t(`Понимание процесса`)}
                    </td>
                    <td className="p-4">{t(`Низкое`)}</td>
                    <td className="p-4">{t(`Высокое`)}</td>
                    <td className="p-4">{t(`Среднее`)}</td>
                  </tr>
                  <tr className="bg-hyper-800/20">
                    <td className="p-4 text-white">{t(`Рекомендуется для`)}</td>
                    <td className="p-4">{t(`Новичков`)}</td>
                    <td className="p-4">{t(`Опытных`)}</td>
                    <td className="p-4">{t(`Мобильных`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-medium mb-12">
              {t(
                `Наша рекомендация: Начните с автоматического метода. Если не работает — используйте ручной.`
              )}
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`✅ Чеклист успешного подключения`)}
            </h3>

            <p className="mb-6">
              {t(
                `Пройдитесь по этому списку, чтобы убедиться, что всё настроено правильно:`
              )}
            </p>

            <p className="font-bold mb-2">{t(`Базовая настройка`)}</p>

            <ul className="mb-6">
              <li>{t(`MetaMask установлен и кошелек создан`)}</li>
              <li>{t(`Сеть Hyperliquid добавлена в MetaMask`)}</li>
              <li>{t(`В выпадающем меню показывается "Hyperliquid"`)}</li>
              <li>{t(`Символ валюты: HYPE`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Подключение к Hypertrade`)}</p>

            <ul className="mb-6">
              <li>{t(`Открыт сайт ht.xyz`)}</li>
              <li>{t(`Кошелек подключен (адрес отображается вверху)`)}</li>
              <li>{t(`Баланс HYPE виден (даже если 0)`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Пополнение`)}</p>

            <ul className="mb-6">
              <li>{t(`Есть минимум 5 HYPE для газа`)}</li>
              <li>{t(`Есть токены для обмена (USDC, ETH и т.д.)`)}</li>
              <li>{t(`Все токены отображаются в MetaMask`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Безопасность`)}</p>

            <ul className="mb-12">
              <li>
                {t(
                  `Seed-фраза записана на бумаге и хранится в безопасном месте`
                )}
              </li>
              <li>{t(`Не делились seed-фразой ни с кем`)}</li>
              <li>
                {t(`Проверили, что используете правильный сайт (ht.xyz)`)}
              </li>
              <li>
                {t(
                  `Понимаете, что подписываете перед подтверждением транзакций`
                )}
              </li>
            </ul>

            <p className="font-bold mb-12">
              {t(
                `Всё отмечено? Поздравляем! Вы полностью готовы к торговле на Hyperliquid через Hypertrade! 🎉`
              )}
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              {t(`🚀 Следующие шаги`)}
            </h3>

            <p className="mb-4">
              {t(
                `Теперь, когда MetaMask подключен к Hyperliquid, вы готовы начать экономить на обменах!`
              )}
            </p>

            <ol className="mb-6">
              <li>{t(`Сделайте первый своп`)}</li>
            </ol>

            <p className="font-bold mb-2">
              {t(
                `📚 Следующая статья: Полное руководство по началу работы с Hypertrade за 5 минут`
              )}
            </p>

            <p className="mb-12">
              {t(`Пошаговая инструкция вашего первого выгодного обмена.`)}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">
              {t(`2. Пополните кошелек HYPE`)}
            </h2>

            <p className="font-bold mb-2">{t(`Где купить:`)}</p>

            <ul className="mb-6">
              <li>{t(`🏦 CEX: Binance, OKX, Bybit`)}</li>
              <li>{t(`💱 DEX: Hypertrade (обменяйте USDC на HYPE)`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Сколько нужно:`)}</p>

            <ul className="mb-12">
              <li>{t(`Минимум: 5 HYPE`)}</li>
              <li>{t(`Рекомендуется: 10-20 HYPE`)}</li>
            </ul>

            <hr className="border-gray-700 mb-12" />

            <h2 className="text-2xl font-bold text-white mb-6">
              {t(`3. Узнайте о выгодах агрегатора`)}
            </h2>

            <p className="mb-4">
              {t(
                `📚 Читайте: Что такое DEX-агрегатор и зачем он нужен трейдеру`
              )}
            </p>

            <p className="mb-12">
              {t(
                `Поймите, почему Hypertrade экономит ваши деньги на каждом обмене.`
              )}
            </p>

            <hr className="border-gray-700 mb-12" />

            <h2 className="text-2xl font-bold text-white mb-6">
              {t(`4. Присоединитесь к сообществу`)}
            </h2>

            <p className="mb-4">{t(`Есть вопросы? Нужна помощь?`)}</p>

            <ul className="mb-12">
              <li>
                {t(`💬 Discord: discord.gg/hypertrade — живое общение 24/7`)}
              </li>
              <li>
                {t(`📱 Telegram: @HypertradeOfficial — новости и поддержка`)}
              </li>
              <li>{t(`🐦 Twitter: @Hypertrade_xyz — анонсы и обновления`)}</li>
            </ul>

            <hr className="border-gray-700 mb-12" />

            <h2 className="text-2xl font-bold text-white mb-6">
              {t(`🎯 Готовы начать экономить?`)}
            </h2>

            <ul className="mb-6">
              <li>{t(`MetaMask подключен ✅`)}</li>
              <li>{t(`Hyperliquid настроен ✅`)}</li>
            </ul>

            <p className="font-bold mb-4">
              {t(`Пора делать первый выгодный своп! 🚀`)}
            </p>

            <p className="mb-4">
              {t(`👉 Открыть Hypertrade и начать торговать`)}
            </p>

            <p className="mb-12">
              {t(
                `Увидьте разницу в цене по сравнению с обычным DEX уже на первой транзакции!`
              )}
            </p>

            <hr className="border-gray-700 mb-12" />

            <h2 className="text-2xl font-bold text-white mb-6">
              {t(`💡 Часто задаваемые вопросы`)}
            </h2>

            <p className="font-bold mb-2">
              {t(`Можно ли использовать один MetaMask для нескольких сетей?`)}
            </p>

            <p className="mb-4">
              {t(`Да! MetaMask поддерживает множество сетей одновременно:`)}
            </p>

            <ul className="mb-4">
              <li>{t(`Ethereum`)}</li>
              <li>{t(`Hyperliquid`)}</li>
              <li>{t(`BSC`)}</li>
              <li>{t(`Polygon`)}</li>
              <li>{t(`И многие другие`)}</li>
            </ul>

            <p className="mb-12">
              {t(`Просто переключайтесь между ними через выпадающее меню.`)}
            </p>

            <hr className="border-gray-700 mb-12" />

            <p className="font-bold mb-2">
              {t(`Нужно ли платить за добавление сети?`)}
            </p>

            <p className="mb-4">
              {t(
                `Нет! Добавление сети Hyperliquid в MetaMask абсолютно бесплатно.`
              )}
            </p>

            <p className="mb-2">{t(`Вы платите только:`)}</p>

            <ul className="mb-12">
              <li>{t(`Газ за транзакции (после пополнения HYPE)`)}</li>
              <li>{t(`Никаких комиссий за само подключение`)}</li>
            </ul>

            <hr className="border-gray-700 mb-12" />

            <p className="font-bold mb-4">
              {t(`Безопасно ли хранить средства в MetaMask?`)}
            </p>

            <p className="mb-4">
              {t(`Относительно безопасно, но зависит от вас:`)}
            </p>

            <p className="font-bold mb-2">{t(`Безопасно, если:`)}</p>

            <ul className="mb-4">
              <li>{t(`✅ Seed-фраза хранится надежно (бумага, не цифра)`)}</li>
              <li>{t(`✅ Используете надежный пароль`)}</li>
              <li>{t(`✅ Не подписываете подозрительные транзакции`)}</li>
              <li>{t(`✅ Проверяете approvals регулярно`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Риски:`)}</p>

            <ul className="mb-6">
              <li>{t(`❌ Потеря seed-фразы = потеря средств`)}</li>
              <li>{t(`❌ Вредоносное ПО на компьютере`)}</li>
              <li>{t(`❌ Фишинговые сайты`)}</li>
            </ul>

            <p className="mb-12">
              {t(`Для крупных сумм ($5,000+): Используйте hardware wallet.`)}
            </p>

            <hr className="border-gray-700 mb-12" />

            <p className="font-bold mb-4">
              {t(`Что делать, если забыл пароль от MetaMask?`)}
            </p>

            <p className="font-bold mb-2">{t(`Есть seed-фраза?`)}</p>

            <ol className="mb-4">
              <li>{t(`Удалите расширение MetaMask`)}</li>
              <li>{t(`Установите заново`)}</li>
              <li>{t(`Выберите "Import using seed phrase"`)}</li>
              <li>{t(`Введите 12 слов`)}</li>
              <li>{t(`Создайте новый пароль`)}</li>
            </ol>

            <p className="mb-12">
              {t(
                `Нет seed-фразы? К сожалению, доступ к кошельку потерян навсегда. Seed-фраза — единственный способ восстановления.`
              )}
            </p>

            <hr className="border-gray-700 mb-12" />

            <p className="font-bold mb-4">
              {t(`Могу ли я использовать тот же адрес в разных сетях?`)}
            </p>

            <p className="mb-4">
              {t(
                `Да! Ваш адрес кошелька (0x...) работает во всех EVM-совместимых сетях:`
              )}
            </p>

            <ul className="mb-4">
              <li>{t(`Ethereum`)}</li>
              <li>{t(`Hyperliquid`)}</li>
              <li>{t(`BSC`)}</li>
              <li>{t(`Polygon`)}</li>
            </ul>

            <p className="font-bold mb-2">
              {t(`Но ВНИМАНИЕ: Токены в разных сетях — это разные активы!`)}
            </p>

            <ul className="mb-12">
              <li>{t(`USDC на Ethereum ≠ USDC на Hyperliquid`)}</li>
              <li>{t(`Нужен мост для перемещения между сетями`)}</li>
            </ul>

            <hr className="border-gray-700 mb-12" />

            <p className="font-bold mb-4">
              {t(`Как удалить сеть Hyperliquid из MetaMask?`)}
            </p>

            <p className="mb-2">{t(`Если нужно удалить:`)}</p>

            <ol className="mb-6">
              <li>{t(`Откройте MetaMask`)}</li>
              <li>{t(`Settings → Networks`)}</li>
              <li>{t(`Найдите Hyperliquid`)}</li>
              <li>{t(`Нажмите "Delete"`)}</li>
              <li>{t(`Подтвердите удаление`)}</li>
            </ol>

            <p className="mb-12">
              {t(`Можно добавить обратно в любой момент!`)}
            </p>

            <hr className="border-gray-700 mb-12" />

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">
              {t(`Почему Chain ID именно 42161?`)}
            </h2>

            <p className="mb-4">
              {t(`Chain ID — это уникальный номер сети в экосистеме Ethereum.`)}
            </p>

            <ul className="mb-6">
              <li>{t(`Ethereum Mainnet: 1`)}</li>
              <li>{t(`BSC: 56`)}</li>
              <li>{t(`Polygon: 137`)}</li>
              <li>{t(`Hyperliquid: 42161`)}</li>
            </ul>

            <p className="mb-12">
              {t(
                `Это технический идентификатор, гарантирующий, что транзакции не смешиваются между разными сетями.`
              )}
            </p>

            <hr className="border-gray-700 mb-12" />

            <h2 className="text-2xl font-bold text-white mb-6">
              {t(`📚 Дополнительные ресурсы`)}
            </h2>

            <p className="font-bold mb-2">{t(`Официальная документация`)}</p>

            <ul className="mb-6">
              <li>{t(`📖 MetaMask Documentation`)}</li>
              <li>{t(`📖 Hyperliquid Docs`)}</li>
              <li>{t(`📖 Hypertrade Docs`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Видео-инструкции`)}</p>

            <ul className="mb-6">
              <li>{t(`📹 YouTube: Настройка MetaMask`)}</li>
              <li>{t(`📹 YouTube: Первый своп на Hypertrade`)}</li>
            </ul>

            <p className="font-bold mb-2">{t(`Поддержка`)}</p>

            <ul className="mb-12">
              <li>{t(`📧 support@hypertrade.io`)}</li>
              <li>{t(`💬 Discord: discord.gg/hypertrade`)}</li>
              <li>{t(`📱 Telegram: @HypertradeSupport`)}</li>
            </ul>

            <hr className="border-gray-700 mb-12" />

            <p className="font-bold mb-4">
              {t(`Эта статья была полезной? 👍 Да 👎 Нет`)}
            </p>

            <p className="mb-6">
              {t(
                `Поделитесь с друзьями, кто хочет начать торговать на Hyperliquid:`
              )}
            </p>

            <p className="mb-12">
              {t(`Twitter Telegram Discord Копировать ссылку`)}
            </p>

            <hr className="border-gray-700 mb-12" />

            <p className="mb-2">{t(`Последнее обновление: 14 декабря 2025`)}</p>

            <p className="mb-6">{t(`Автор: Команда Hypertrade`)}</p>

            <p className="text-sm text-gray-400 mb-12">
              {t(
                `Отказ от ответственности: Данное руководство носит образовательный характер. Всегда проверяйте официальные источники и будьте осторожны с приватными ключами и seed-фразами.`
              )}
            </p>
          </article>
        </article>
      </div>
    </section>
  );
};

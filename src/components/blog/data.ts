import { BlogPost, Language } from "../types";

export const getBlogPosts = (lang: Language): BlogPost[] => {
  if (lang === 'ru') {
    return [
      {
        id: "dex-aggregator-explained",
        title: "Что такое DEX-агрегатор и зачем он нужен трейдеру",
        excerpt: "Представьте приложение, которое проверяет все магазины за секунду. Именно так работают DEX-агрегаторы.",
        date: "10 Декабря 2025",
        category: "Обучение",
        readTime: "8 мин",
        imageColor: "from-blue-600 to-indigo-900"
      },
      {
        id: "invisium-tech-deepdive",
        title: "Что такое Invisium и как это экономит ваши деньги",
        excerpt: "Подробный разбор нашей технологии предварительной симуляции свопов.",
        date: "10 Марта 2024",
        category: "Технологии",
        readTime: "5 мин",
        imageColor: "from-purple-600 to-pink-500"
      },
      {
        id: "hyperliquid-guide",
        title: "Гайд: Торговля на Hyperliquid для новичков",
        excerpt: "Полное руководство по экосистеме Hyperliquid. Как настроить MetaMask и купить HYPE.",
        date: "28 Февраля 2024",
        category: "Обучение",
        readTime: "7 мин",
        imageColor: "from-green-600 to-emerald-500"
      },
    ];
  } else {
    return [
      {
        id: "dex-aggregator-explained",
        title: "What is a DEX Aggregator and Why Traders Need It",
        excerpt: "Imagine an app that checks all stores in a second. That's how DEX aggregators work. Learn how to save up to $2000 a year.",
        date: "December 10, 2025",
        category: "Education",
        readTime: "8 min",
        imageColor: "from-blue-600 to-indigo-900"
      },
      {
        id: "invisium-tech-deepdive",
        title: "What is Invisium and How It Saves You Money",
        excerpt: "A deep dive into our pre-swap simulation technology. Learn how to avoid hidden slippage.",
        date: "March 10, 2024",
        category: "Technology",
        readTime: "5 min",
        imageColor: "from-purple-600 to-pink-500"
      },
      {
        id: "hyperliquid-guide",
        title: "Guide: Trading on Hyperliquid for Beginners",
        excerpt: "Complete guide to the Hyperliquid ecosystem. How to set up MetaMask and buy HYPE.",
        date: "February 28, 2024",
        category: "Education",
        readTime: "7 min",
        imageColor: "from-green-600 to-emerald-500"
      },
    ];
  }
};
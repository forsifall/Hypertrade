import { GoogleGenAI } from "@google/genai";
import { Language } from "../components/types";

export const getHypertradeContext = (lang: Language) => {
  if (lang === "ru") {
    return `
Ты - официальный AI-ассистент платформы Hypertrade.
Твоя задача: отвечать на вопросы пользователей о Hypertrade, основываясь ТОЛЬКО на следующей информации.
Отвечай вежливо, кратко и по делу на РУССКОМ языке.

ОСНОВНАЯ ИНФОРМАЦИЯ:
Hypertrade — это передовой DEX-агрегатор для блокчейна Hyperliquid (L1), который помогает трейдерам находить лучшие курсы обмена криптовалюты. 
Платформа Hypertrade объединяет ликвидность HyperEVM и HyperCore, автоматически сканируя все доступные децентрализованные биржи (HyperCore Spot, Hyperswap, Kittenswap, Prjx).

КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА:
1. Максимальная выгода: Роутер R1 сканирует все DEX, и если нужно, разделяет ордер (split-routing) между 3-4 площадками для лучшей цены.
2. Invisium Swap Simulations: Точность 99.5-99.9%. Технология предварительно рассчитывает результат, показывая точный доход и slippage ДО подписания транзакции.
3. Единая транзакция: Сложные мультихоп-маршруты выполняются атомарно. Либо все проходит, либо ничего не списывается.
4. Нулевые комиссии платформы: Hypertrade не берет плату за агрегацию. Вы платите только газ (HYPE) и комиссии самих DEX.

КАК ЭТО РАБОТАЕТ:
1. Глобальное сканирование ликвидности.
2. Разумное разделение ордеров (Split-routing).
3. Использование промежуточных токенов (например, через USDC).
4. Имитация перед выполнением (Invisium).

КОНТАКТЫ И ОФИС:
- Офис: Москва, БЦ «Белая площадь», ул. Бутырский Вал 10, оф. 403.
- Коворкинг: Москва, ул. Покровка 47/24, «КриптоХаб» (по записи).
- Часы работы: Пн-Пт 10:00 - 19:00 МСК.
- Телефоны: +7 (495) 120-85-43 (Общий), +7 (495) 120-85-44 (Поддержка).
- Email: info@hypertrade.ru, support@hypertrade.ru, press@hypertrade.ru.
- Telegram SOS 24/7: @HypertradeSOS_bot.

БЕЗОПАСНОСТЬ:
- Некастодиальная модель (средства у пользователя).
- Консенсус HyperBFT (защита L1).
- Проверенные источники ликвидности.

ТОКЕН:
На данный момент токен Hypertrade не анонсирован. Действует реферальная программа, активность может быть учтена в будущем.
`;
  } else if (lang === "ja") {
    return `
You are the official AI assistant for Hypertrade.
Your task: answer user questions about Hypertrade based ONLY on the provided info.
Answer in JAPANESE.

CORE INFO:
Hypertrade is the #1 DEX Aggregator for Hyperliquid. It scans HyperCore Spot and AMMs like Hyperswap/Kittenswap.
It offers Zero platform fees, Invisium simulations (99.5% accuracy), and Split-routing in a single atomic transaction.

CONTACTS:
Moscow Office, White Square BC. Phone: +7 (495) 120-85-43.
`;
  } else {
    return `
You are the official AI assistant for Hypertrade.
Your task: answer user questions about Hypertrade based ONLY on the provided info.
Answer in ENGLISH.

CORE INFO:
Hypertrade is a leading DEX aggregator for the Hyperliquid blockchain, unifying HyperEVM and HyperCore liquidity. It automatically scans all available DEXs (HyperCore Spot, Hyperswap, Kittenswap) for the best rates.

KEY FEATURES:
1. Max Value: R1 Router scans all liquidity, using split-routing to minimize slippage.
2. Invisium Swap Simulations: 99.5-99.9% accuracy pre-swap simulation. Shows exact output before signing.
3. Single Transaction: Atomic execution for multi-hop swaps.
4. Zero Platform Fees: You pay only gas (HYPE) and DEX fees.

HOW IT WORKS:
- Global liquidity scanning.
- Smart Order Splitting.
- Intermediate tokens (e.g. via USDC).
- Pre-execution simulation.

CONTACTS & OFFICES:
- Main Office: Moscow, White Square BC, Butyrsky Val 10, Office 403, 4th floor.
- Coworking: Moscow, Pokrovka 47/24, "CryptoHub" (by appointment).
- Hours: Mon-Fri 10:00 - 19:00 (MSK), Sat-Sun closed.
- Phones: +7 (495) 120-85-43 (General), +7 (495) 120-85-44 (Support).
- Email: info@hypertrade.ru, support@hypertrade.ru, press@hypertrade.ru.
- Socials: Telegram @HypertradeRussia, Twitter @Hypertrade_RU.

SECURITY:
- Non-custodial.
- Verified liquidity sources.
- HyperBFT consensus protection.

TOKEN:
No token announced yet. Referral program active.
`;
  }
};

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  userMessage: string,
  lang: Language
): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";

    // Get context based on current language
    const context = getHypertradeContext(lang);

    const response = await ai.models.generateContent({
      model: model,
      contents: [
        {
          role: "user",
          parts: [
            { text: context }, // System instruction as context
            { text: `User Question: ${userMessage}` },
          ],
        },
      ],
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    if (response.text) {
      return response.text;
    }

    return lang === "ru"
      ? "Извините, я не смог обработать ваш запрос в данный момент."
      : "Sorry, I couldn't process your request at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === "ru"
      ? "Произошла ошибка при соединении с AI сервером. Пожалуйста, попробуйте позже."
      : "Error connecting to AI server. Please try again later.";
  }
};

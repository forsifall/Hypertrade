import { Language } from "@/components/types";

// Определяем тип только для навигации
export type NavTranslation = {
  about: string;
  blog: string;
  advantages: string;
  integrations: string;
  faq: string;
  contacts: string;
  connectWallet: string;
  menu: string;
};

export const NAV_TRANSLATIONS: Record<Language, NavTranslation> = {
  en: {
    about: "About Us",
    blog: "Blog",
    advantages: "Advantages",
    integrations: "Integrations",
    faq: "FAQ",
    contacts: "Contacts",
    connectWallet: "Connect Wallet",
    menu: "Menu"
  },
  ru: {
    about: "О нас",
    blog: "Блог",
    advantages: "Преимущества",
    integrations: "Интеграции",
    faq: "FAQ",
    contacts: "Контакты",
    connectWallet: "Подключить кошелек",
    menu: "Меню"
  },
  ja: {
    about: "私たちについて",
    blog: "ブログ",
    advantages: "利点",
    integrations: "統合",
    faq: "よくある質問",
    contacts: "連絡先",
    connectWallet: "ウォレット接続",
    menu: "メニュー"
  }
};


export const TRANSLATIONS = {
  en: {
    nav: NAV_TRANSLATIONS.en,
  },
  ru: {
    nav: NAV_TRANSLATIONS.ru,
  },
  ja: {
    nav: NAV_TRANSLATIONS.ja,
  }
};

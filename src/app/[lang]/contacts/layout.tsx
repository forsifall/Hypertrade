import { Metadata } from "next";

function getContactsMetadata(lang: string): Metadata {
  const metadataByLang = {
    ru: {
      title: "Контакты",
      description:
        "Офис Hypertrade в Москве, телефоны, электронная почта, экстренная поддержка 24/7, актуальные ссылки на Telegram, Discord и Twitter. Юридический адрес и часы работы.",
      keywords:
        "контакты Hypertrade, офис Москва, телефон поддержки, Telegram Hypertrade, Discord Hypertrade, юридический адрес, экстренная поддержка, связь с Hypertrade",
      ogTitle: "Контакты Hypertrade — Офис в Москве и поддержка",
      ogDescription:
        "Телефоны, адрес офиса, электронная почта, ссылки на соцсети и Telegram-бот для экстренной поддержки 24/7.",
      twitterTitle: "Контакты Hypertrade — Офис в Москве и поддержка",
      twitterDescription:
        "Телефоны, адрес офиса, электронная почта, ссылки на соцсети и Telegram-бот для экстренной поддержки 24/7.",
    },
    en: {
      title: "Contacts",
      description:
        "Hypertrade office in Moscow, phone numbers, email, 24/7 emergency support, up-to-date links to Telegram, Discord and Twitter. Legal address and business hours.",
      keywords:
        "Hypertrade contacts, Moscow office, support phone, Telegram Hypertrade, Discord Hypertrade, legal address, emergency support, contact Hypertrade",
      ogTitle: "Hypertrade Contacts — Moscow Office and Support",
      ogDescription:
        "Phone numbers, office address, email, social media links and Telegram bot for 24/7 emergency support.",
      twitterTitle: "Hypertrade Contacts — Moscow Office and Support",
      twitterDescription:
        "Phone numbers, office address, email, social media links and Telegram bot for 24/7 emergency support.",
    },
    ja: {
      title: "お問い合わせ",
      description:
        "モスクワのHypertradeオフィス、電話番号、メール、24時間365日緊急サポート、Telegram、Discord、Twitterへの最新リンク。所在地と営業時間。",
      keywords:
        "Hypertradeお問い合わせ, モスクワオフィス, サポート電話, Telegram Hypertrade, Discord Hypertrade, 所在地, 緊急サポート, Hypertrade連絡先",
      ogTitle: "Hypertradeお問い合わせ — モスクワオフィスとサポート",
      ogDescription:
        "電話番号、オフィス住所、メール、ソーシャルメディアリンク、24時間365日緊急サポート用Telegramボット。",
      twitterTitle: "Hypertradeお問い合わせ — モスクワオフィスとサポート",
      twitterDescription:
        "電話番号、オフィス住所、メール、ソーシャルメディアリンク、24時間365日緊急サポート用Telegramボット。",
    },
  };

  const meta =
    metadataByLang[lang as keyof typeof metadataByLang] || metadataByLang.ru;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      locale: lang === "ru" ? "ru_RU" : lang === "en" ? "en_US" : "ja_JP",
    },
    twitter: {
      title: meta.twitterTitle,
      description: meta.twitterDescription,
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = (await params).lang;
  return getContactsMetadata(lang);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

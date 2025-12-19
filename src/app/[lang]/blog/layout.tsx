import { Metadata } from "next";
import Script from 'next/script'

function getBlogMetadata(lang: string): Metadata {
  const metadataByLang = {
    ru: {
      title: "Блог Hypertrade",
      description:
        "Последние новости, обновления платформы Hypertrade и обучающие гайды по торговле в экосистеме Hyperliquid.",
      keywords:
        "блог Hypertrade, новости Hyperliquid, гайды по DeFi, обучение трейдингу, DEX-агрегатор, обновления платформы",
      ogTitle: "Блог Hypertrade — Новости и гайды по Hyperliquid",
      ogDescription:
        "Актуальные статьи о DEX-агрегаторах, технологии Invisium и руководства для трейдеров на Hyperliquid.",
      twitterTitle: "Блог Hypertrade — Новости и гайды по Hyperliquid",
      twitterDescription:
        "Актуальные статьи о DEX-агрегаторах, технологии Invisium и руководства для трейдеров на Hyperliquid.",
    },
    en: {
      title: "Hypertrade Blog",
      description:
        "Latest news, Hypertrade platform updates and educational guides for trading in the Hyperliquid ecosystem.",
      keywords:
        "Hypertrade blog, Hyperliquid news, DeFi guides, trading education, DEX aggregator, platform updates",
      ogTitle: "Hypertrade Blog — News and Guides for Hyperliquid",
      ogDescription:
        "Current articles about DEX aggregators, Invisium technology and guides for traders on Hyperliquid.",
      twitterTitle: "Hypertrade Blog — News and Guides for Hyperliquid",
      twitterDescription:
        "Current articles about DEX aggregators, Invisium technology and guides for traders on Hyperliquid.",
    },
    ja: {
      title: "Hypertradeブログ",
      description:
        "最新ニュース、Hypertradeプラットフォームの更新、Hyperliquidエコシステムでの取引に関する教育ガイド。",
      keywords:
        "Hypertradeブログ, Hyperliquidニュース, DeFiガイド, 取引教育, DEXアグリゲーター, プラットフォーム更新",
      ogTitle: "Hypertradeブログ — Hyperliquidのニュースとガイド",
      ogDescription:
        "DEXアグリゲーター、Invisium技術、Hyperliquidでのトレーダー向けガイドに関する最新記事。",
      twitterTitle: "Hypertradeブログ — Hyperliquidのニュースとガイド",
      twitterDescription:
        "DEXアグリゲーター、Invisium技術、Hyperliquidでのトレーダー向けガイドに関する最新記事。",
    },
  };

  const meta =
    metadataByLang[lang as keyof typeof metadataByLang] || metadataByLang.ru;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      type: "website",
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
  return getBlogMetadata(lang);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>

  

  {children}
  </>;
}

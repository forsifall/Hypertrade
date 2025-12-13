import { Metadata } from "next";

function getIntegrationsMetadata(lang: string): Metadata {
  const metadataByLang = {
    ru: {
      title: "Интеграция Hyperliquid",
      description:
        "Hypertrade объединяет HyperCore Spot, Hyperswap, Kittenswap и новые DEX. Получите доступ к самой глубокой ликвидности экосистемы Hyperliquid через один агрегатор.",
      keywords:
        "интеграции Hypertrade, HyperCore Spot, Hyperswap, Kittenswap, ликвидность Hyperliquid, маршрутизатор DEX, экосистема Hyperliquid",
      ogTitle: "Интеграции Hypertrade — Все DEX экосистемы Hyperliquid",
      ogDescription:
        "Доступ к ликвидности HyperCore Spot, Hyperswap, Kittenswap через один роутер. Расширяющаяся сеть интегрированных DEX.",
      twitterTitle: "Интеграции Hypertrade — Все DEX экосистемы Hyperliquid",
      twitterDescription:
        "Доступ к ликвидности HyperCore Spot, Hyperswap, Kittenswap через один роутер. Расширяющаяся сеть интегрированных DEX.",
    },
    en: {
      title: "Hyperliquid Integration",
      description:
        "Hypertrade combines HyperCore Spot, Hyperswap, Kittenswap and new DEXs. Get access to the deepest liquidity of the Hyperliquid ecosystem through one aggregator.",
      keywords:
        "Hypertrade integrations, HyperCore Spot, Hyperswap, Kittenswap, Hyperliquid liquidity, DEX router, Hyperliquid ecosystem",
      ogTitle: "Hypertrade Integrations — All DEXs of Hyperliquid Ecosystem",
      ogDescription:
        "Access to HyperCore Spot, Hyperswap, Kittenswap liquidity through one router. Expanding network of integrated DEXs.",
      twitterTitle:
        "Hypertrade Integrations — All DEXs of Hyperliquid Ecosystem",
      twitterDescription:
        "Access to HyperCore Spot, Hyperswap, Kittenswap liquidity through one router. Expanding network of integrated DEXs.",
    },
    ja: {
      title: "Hyperliquid統合",
      description:
        "HypertradeはHyperCore Spot、Hyperswap、Kittenswapおよび新規DEXを統合します。1つのアグリゲーターでHyperliquidエコシステムの最も深い流動性にアクセスできます。",
      keywords:
        "Hypertrade統合, HyperCore Spot, Hyperswap, Kittenswap, Hyperliquid流動性, DEXルーター, Hyperliquidエコシステム",
      ogTitle: "Hypertrade統合 — Hyperliquidエコシステムの全DEX",
      ogDescription:
        "1つのルーターでHyperCore Spot、Hyperswap、Kittenswapの流動性にアクセス。拡大する統合DEXネットワーク。",
      twitterTitle: "Hypertrade統合 — Hyperliquidエコシステムの全DEX",
      twitterDescription:
        "1つのルーターでHyperCore Spot、Hyperswap、Kittenswapの流動性にアクセス。拡大する統合DEXネットワーク。",
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
  return getIntegrationsMetadata(lang);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from "next";

function getAdvantagesMetadata(lang: string): Metadata {
  const metadataByLang = {
    ru: {
      title: "Преимущества Hypertrade",
      description:
        "Максимальная выгода от свопов, симуляция Invisium с точностью 99.5%, мультихоп в одной транзакции и нулевые комиссии платформы. Узнайте все преимущества DEX-агрегатора Hypertrade.",
      keywords:
        "преимущества Hypertrade, выгода от свопа, технология Invisium, мультихоп транзакция, нулевые комиссии, DEX-агрегатор Hyperliquid",
      ogTitle: "Почему трейдеры выбирают Hypertrade — Преимущества платформы",
      ogDescription:
        "Максимальная выгода, симуляция Invisium 99.5%, мультихоп в 1 транзакции, 0% комиссий. Все плюсы агрегатора для Hyperliquid.",
      twitterTitle:
        "Почему трейдеры выбирают Hypertrade — Преимущества платформы",
      twitterDescription:
        "Максимальная выгода, симуляция Invisium 99.5%, мультихоп в 1 транзакции, 0% комиссий. Все плюсы агрегатора для Hyperliquid.",
    },
    en: {
      title: "Hypertrade Advantages",
      description:
        "Maximum profit from swaps, Invisium simulation with 99.5% accuracy, multihop in one transaction, and zero platform fees. Discover all benefits of the Hypertrade DEX aggregator.",
      keywords:
        "Hypertrade advantages, swap profit, Invisium technology, multihop transaction, zero fees, DEX aggregator Hyperliquid",
      ogTitle: "Why Traders Choose Hypertrade — Platform Advantages",
      ogDescription:
        "Maximum profit, Invisium simulation 99.5%, multihop in 1 transaction, 0% fees. All benefits of the Hyperliquid aggregator.",
      twitterTitle: "Why Traders Choose Hypertrade — Platform Advantages",
      twitterDescription:
        "Maximum profit, Invisium simulation 99.5%, multihop in 1 transaction, 0% fees. All benefits of the Hyperliquid aggregator.",
    },
    ja: {
      title: "Hypertradeの利点",
      description:
        "スワップからの最大利益、精度99.5%のInvisiumシミュレーション、1取引でのマルチホップ、プラットフォーム手数料0%。Hypertrade DEXアグリゲーターのすべての利点をご紹介します。",
      keywords:
        "Hypertrade利点, スワップ利益, Invisium技術, マルチホップ取引, 手数料ゼロ, DEXアグリゲーターHyperliquid",
      ogTitle: "トレーダーがHypertradeを選ぶ理由 — プラットフォームの利点",
      ogDescription:
        "最大利益、Invisiumシミュレーション99.5%、1取引でのマルチホップ、手数料0%。Hyperliquidアグリゲーターのすべての利点。",
      twitterTitle: "トレーダーがHypertradeを選ぶ理由 — プラットフォームの利点",
      twitterDescription:
        "最大利益、Invisiumシミュレーション99.5%、1取引でのマルチホップ、手数料0%。Hyperliquidアグリゲーターのすべての利点。",
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
  return getAdvantagesMetadata(lang);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

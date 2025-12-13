import { Metadata } from "next";

function getFaqMetadata(lang: string): Metadata {
  const metadataByLang = {
    ru: {
      title: "вопросы о Hypertrade",
      description:
        "Ответы на главные вопросы о Hypertrade: комиссии, безопасность, поддержка токенов, симуляция Invisium, запуск токена, начало работы и отличия от обычного DEX.",
      keywords:
        "FAQ Hypertrade, часто задаваемые вопросы, безопасность Hypertrade, комиссии Hypertrade, токен HYPE, симуляция Invisium, как начать, токен Hypertrade",
      ogTitle: "FAQ по Hypertrade — Ответы на вопросы о DEX-агрегаторе",
      ogDescription:
        "Все о комиссиях, безопасности, поддержке токенов, технологии Invisium и начале работы с агрегатором Hypertrade на Hyperliquid.",
      twitterTitle: "FAQ по Hypertrade — Ответы на вопросы о DEX-агрегаторе",
      twitterDescription:
        "Все о комиссиях, безопасности, поддержке токенов, технологии Invisium и начале работы с агрегатором Hypertrade на Hyperliquid.",
    },
    en: {
      title: "Questions about Hypertrade",
      description:
        "Answers to main questions about Hypertrade: fees, security, token support, Invisium simulation, token launch, getting started and differences from regular DEX.",
      keywords:
        "FAQ Hypertrade, frequently asked questions, Hypertrade security, Hypertrade fees, HYPE token, Invisium simulation, how to start, Hypertrade token",
      ogTitle: "Hypertrade FAQ — Answers to Questions about DEX Aggregator",
      ogDescription:
        "Everything about fees, security, token support, Invisium technology and getting started with Hypertrade aggregator on Hyperliquid.",
      twitterTitle:
        "Hypertrade FAQ — Answers to Questions about DEX Aggregator",
      twitterDescription:
        "Everything about fees, security, token support, Invisium technology and getting started with Hypertrade aggregator on Hyperliquid.",
    },
    ja: {
      title: "Hypertradeに関する質問",
      description:
        "Hypertradeに関する主要な質問への回答：手数料、セキュリティ、トークンサポート、Invisiumシミュレーション、トークンローンチ、開始方法、通常のDEXとの違い。",
      keywords:
        "FAQ Hypertrade, よくある質問, Hypertradeセキュリティ, Hypertrade手数料, HYPEトークン, Invisiumシミュレーション, 開始方法, Hypertradeトークン",
      ogTitle: "Hypertrade FAQ — DEXアグリゲーターに関する質問への回答",
      ogDescription:
        "手数料、セキュリティ、トークンサポート、Invisium技術、HyperliquidでのHypertradeアグリゲーターの開始方法に関するすべて。",
      twitterTitle: "Hypertrade FAQ — DEXアグリゲーターに関する質問への回答",
      twitterDescription:
        "手数料、セキュリティ、トークンサポート、Invisium技術、HyperliquidでのHypertradeアグリゲーターの開始方法に関するすべて。",
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
  return getFaqMetadata(lang);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

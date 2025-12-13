import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/other/ChatWidget";

function getRootMetadata(lang: string): Metadata {
  const metadataByLang = {
    ru: {
      defaultTitle: "Hypertrade — Лучший DEX-агрегатор для Hyperliquid",
      description:
        "Торгуйте выгоднее с Hypertrade. Находите лучшие курсы для свопа токенов в сети Hyperliquid, объединяя ликвидность HyperEVM и HyperCore.",
      keywords:
        "DEX агрегатор, Hyperliquid, DeFi, обмен криптовалюты, Hypertrade, HyperEVM, HyperCore, лучший курс, своп, трейдинг",
      ogTitle: "Hypertrade — Лучший DEX-агрегатор для Hyperliquid",
      ogDescription:
        "Находите оптимальные курсы обмена в сети Hyperliquid. Передовой агрегатор ликвидности для трейдеров DeFi.",
      twitterTitle: "Hypertrade — Лучший DEX-агрегатор для Hyperliquid",
      twitterDescription:
        "Находите оптимальные курсы обмена в сети Hyperliquid. Передовой агрегатор ликвидности.",
    },
    en: {
      defaultTitle: "Hypertrade — Best DEX Aggregator for Hyperliquid",
      description:
        "Trade better with Hypertrade. Find the best rates for token swaps on Hyperliquid, combining HyperEVM and HyperCore liquidity.",
      keywords:
        "DEX aggregator, Hyperliquid, DeFi, cryptocurrency exchange, Hypertrade, HyperEVM, HyperCore, best rate, swap, trading",
      ogTitle: "Hypertrade — Best DEX Aggregator for Hyperliquid",
      ogDescription:
        "Find optimal exchange rates on Hyperliquid network. Advanced liquidity aggregator for DeFi traders.",
      twitterTitle: "Hypertrade — Best DEX Aggregator for Hyperliquid",
      twitterDescription:
        "Find optimal exchange rates on Hyperliquid network. Advanced liquidity aggregator for DeFi traders.",
    },
    ja: {
      defaultTitle: "Hypertrade — Hyperliquid向け最高のDEXアグリゲーター",
      description:
        "Hypertradeでより良い取引を。HyperEVMとHyperCoreの流動性を組み合わせ、Hyperliquidで最良のトークンスワップレートを見つけます。",
      keywords:
        "DEXアグリゲーター, Hyperliquid, DeFi, 暗号通貨交換, Hypertrade, HyperEVM, HyperCore, 最良レート, スワップ, 取引",
      ogTitle: "Hypertrade — Hyperliquid向け最高のDEXアグリゲーター",
      ogDescription:
        "Hyperliquidネットワークでの最適な為替レートを見つけます。DeFiトレーダー向けの高度な流動性アグリゲーター。",
      twitterTitle: "Hypertrade — Hyperliquid向け最高のDEXアグリゲーター",
      twitterDescription:
        "Hyperliquidネットワークでの最適な為替レートを見つけます。DeFiトレーダー向けの高度な流動性アグリゲーター。",
    },
  };

  const meta =
    metadataByLang[lang as keyof typeof metadataByLang] || metadataByLang.ru;

  return {
    title: {
      default: meta.defaultTitle,
      template: "%s | Hypertrade DEX Aggregator",
    },
    description: meta.description,
    keywords: meta.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "ru" ? "ru_RU" : lang === "en" ? "en_US" : "ja_JP",
      siteName: "Hypertrade",
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitterTitle,
      description: meta.twitterDescription,
    },
    category: "finance",
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = (await params).lang;
  return getRootMetadata(lang);
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line
  params: Promise<{ lang: any }>;
}) {
  const lang = (await params).lang;

  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer lang={lang}></Footer>
        <ChatWidget lang={lang} />
      </body>
    </html>
  );
}

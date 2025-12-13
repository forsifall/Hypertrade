import { Metadata } from "next";

function getAboutMetadata(lang: string) {
  const metadataByLang = {
    ru: {
      title: 'О нас',
      description: 'Узнайте о технологии агрегации Hypertrade: как Smart Router R1 анализирует DEXы Hyperliquid, разделяет ордера и использует Invisium для лучшей цены. Познакомьтесь с нашей командой.',
      keywords: 'технология Hypertrade, агрегатор DEX, Hyperliquid, роутер R1, Invisium, команда Hypertrade, как работает Hypertrade',
      ogTitle: 'О платформе Hypertrade — Технология и команда',
      ogDescription: 'Как работает самый эффективный DEX-агрегатор для Hyperliquid. Подробно о технологии и создателях Hypertrade.',
      twitterTitle: 'О платформе Hypertrade — Технология и команда',
      twitterDescription: 'Как работает самый эффективный DEX-агрегатор для Hyperliquid. Подробно о технологии и создателях Hypertrade.',
    },
    en: {
      title: 'About Us',
      description: 'Learn about Hypertrade aggregation technology: how Smart Router R1 analyzes Hyperliquid DEXs, splits orders, and uses Invisium for the best price. Meet our team.',
      keywords: 'Hypertrade technology, DEX aggregator, Hyperliquid, router R1, Invisium, Hypertrade team, how Hypertrade works',
      ogTitle: 'About Hypertrade Platform — Technology and Team',
      ogDescription: 'How the most efficient DEX aggregator for Hyperliquid works. Details about technology and creators of Hypertrade.',
      twitterTitle: 'About Hypertrade Platform — Technology and Team',
      twitterDescription: 'How the most efficient DEX aggregator for Hyperliquid works. Details about technology and creators of Hypertrade.',
    },
    ja: {
      title: '会社概要',
      description: 'Hypertradeのアグリゲーション技術について：Smart Router R1がHyperliquidのDEXを分析し、注文を分割し、最良の価格を得るためにInvisiumを使用する方法。チームの紹介。',
      keywords: 'Hypertrade技術, DEXアグリゲーター, Hyperliquid, ルーターR1, Invisium, Hypertradeチーム, Hypertradeの仕組み',
      ogTitle: 'Hypertradeプラットフォームについて — 技術とチーム',
      ogDescription: 'Hyperliquid向け最も効率的なDEXアグリゲーターの仕組み。Hypertradeの技術と創設者について詳しく説明。',
      twitterTitle: 'Hypertradeプラットフォームについて — 技術とチーム',
      twitterDescription: 'Hyperliquid向け最も効率的なDEXアグリゲーターの仕組み。Hypertradeの技術と創設者について詳しく説明。',
    }
  };

  return metadataByLang[lang as keyof typeof metadataByLang] || metadataByLang.ru;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const lang = (await params).lang;
  const meta = getAboutMetadata(lang);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      locale: lang === 'ru' ? 'ru_RU' : lang === 'en' ? 'en_US' : 'ja_JP',
    },
    twitter: {
      title: meta.twitterTitle,
      description: meta.twitterDescription,
    },
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

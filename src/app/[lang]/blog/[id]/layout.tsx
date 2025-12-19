import { Language } from "@/app/translations";
import { getBlogPosts } from "@/components/blog/data";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: Language; id: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang, id } = await params;

  const posts = getBlogPosts(lang);

  // eslint-disable-next-line
  const post = posts.find((p:any) => p.id === id);

  if (!post) {
    return {
      title:
        lang === "ru"
          ? "Статья не найдена"
          : lang === "en"
          ? "Article not found"
          : "記事が見つかりません",
      robots: {
        index: false,
      },
    };
  }

  // Получаем метаданные родителя (из layout.tsx)
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.excerpt,
    keywords: `${post.category}, DEX-агрегатор, Hyperliquid, трейдинг`,
    openGraph: {
      type: "article",
      locale: lang === "ru" ? "ru_RU" : lang === "en" ? "en_US" : "ja_JP",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      tags: [post.category],
      // images: [`/blog-images/${post.id}.jpg`, ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      // images: [`/blog-images/${post.id}.jpg`],
    },
    other: {
      "article:section": post.category,
    },
  };
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

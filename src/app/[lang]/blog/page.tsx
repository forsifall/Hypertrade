import { Language } from "@/app/translations";
import BlogPage from "@/components/blog/BlogPage";

export default async function Blog({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;

  return (
    <>
     <BlogPage lang={lang}></BlogPage>
    </>
  );
}

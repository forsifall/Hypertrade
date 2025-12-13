import { getDictionary, Language } from "@/app/translations";
import AboutPage from "@/components/about";

export default async function About({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const translationData = getDictionary(lang);

  return (
    <>
      <AboutPage translationData={translationData}></AboutPage>
    </>
  );
}

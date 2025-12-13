import { getDictionary, Language } from "@/app/translations";
import AdvantagesPage from "@/components/Advantages";

export default async function Advantages({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const translationData = getDictionary(lang);

  return (
    <>
      <AdvantagesPage translationData={translationData} />
    </>
  );
}

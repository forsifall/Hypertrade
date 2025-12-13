import { getDictionary, Language } from "@/app/translations";
import IntegrationsPage from "@/components/Integrations";

export default async function Integrations({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const translationData = getDictionary(lang);

  return (
    <>
      <IntegrationsPage translationData={translationData} />
    </>
  );
}

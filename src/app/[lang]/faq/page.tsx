import { Language } from "@/app/translations";
import { FAQ } from "@/components/FAQ/FAQ";

export default async function FaqPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;

  return (
    <>
      <FAQ lang={lang} />
    </>
  );
}

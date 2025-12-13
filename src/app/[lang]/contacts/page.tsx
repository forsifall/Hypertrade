import { Language } from "@/app/translations";
import { Contacts } from "@/components/Contacts";

export default async function ContactsPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;

  return (
    <>
      <Contacts lang={lang} />
    </>
  );
}

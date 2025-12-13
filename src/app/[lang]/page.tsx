import { Hero } from "@/components/home/Hero";
import { getDictionary, Language } from "../translations";
import { WhatIsHypertrade } from "@/components/home/WhatIsHypertrade";
import AdvantagesPage from "@/components/Advantages";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { HowToUse } from "@/components/home/HowToUse";
import IntegrationsPage from "@/components/Integrations";
import {SecurityAndReferral} from "@/components/home/SecurityAndReferral"
import { FAQ } from "@/components/FAQ/FAQ";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import { CTA } from "@/components/home/CTA";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
   const translationData = getDictionary(lang);

  return (
    <>
      <Hero lang={lang} />
      <WhatIsHypertrade lang={lang} />
      <AdvantagesPage translationData={translationData} />
      <ComparisonTable lang={lang} />
      <HowToUse lang={lang} />
      <IntegrationsPage  translationData={translationData}/>
      <SecurityAndReferral lang={lang} />
      <FAQ lang={lang} />
      <BlogPreviewSection lang={lang} />
      <CTA lang={lang} />
    </>
  );
}

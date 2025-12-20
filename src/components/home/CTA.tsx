import { getDictionary, Language } from "@/app/translations";
import Link from "next/link";

// --- CTA Section ---
export function CTA({ lang }: { lang: Language }) {
  const translationData = getDictionary(lang);
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-hyper-accent/10 to-hyper-secondary/10 z-0"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{translationData.cta.title}</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {translationData.cta.subtitle}
        </p>
        <Link href='https://ht.xyz/' className="bg-hyper-accent hover:bg-cyan-300 text-hyper-900 font-bold py-4 px-12 rounded-xl text-xl transition-all transform hover:scale-105 shadow-xl shadow-cyan-500/30">
          {translationData.cta.btn}
        </Link>
        <p className="mt-6 text-sm text-gray-500">
          {translationData.cta.footer} <Link href='https://ht.xyz/' className="text-hyper-accent">ht.xyz</Link>
        </p>
      </div>
    </section>
  );
}

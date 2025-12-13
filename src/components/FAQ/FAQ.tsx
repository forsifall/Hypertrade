import { getDictionary } from "@/app/translations";
import { FaqItem, Language } from "../types";
import {AccordionItem} from "./AccordionItem";

// --- FAQ ---
export const FAQ = ({lang}: {lang: Language}) => {
  const translationData = getDictionary(lang);
  const faqs = translationData.faq.items;
  return (
    <section id="faq" className="py-20 bg-hyper-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{translationData.faq.title}</h2>
        <div className="glass-panel rounded-2xl p-6 sm:p-8">
          {faqs.map((faq: FaqItem, idx: number) => (
            <AccordionItem key={idx} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};
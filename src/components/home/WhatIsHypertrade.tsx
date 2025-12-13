import { getDictionary } from "@/app/translations";
import { Language } from "../types";

// --- What Is Hypertrade Section (New) ---
export function WhatIsHypertrade({ lang }: { lang: Language }) {
  const translationData = getDictionary(lang);

  return (
    <section className="py-20 bg-hyper-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {translationData.whatIs.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {translationData.whatIs.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* eslint-disable-next-line */}
          {translationData.whatIs.steps.map((step: any, idx: number) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-xl border border-gray-800 hover:border-hyper-accent/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

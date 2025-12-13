import { getDictionary, Language } from "@/app/translations";

// --- How to Use Section ---
export function HowToUse ({ lang }: { lang: Language })  {
      const translationData = getDictionary(lang);
  return (
    <section className="py-20 bg-hyper-900">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{translationData.howTo.title}</h2>
        <p className="text-gray-400">{translationData.howTo.subtitle}</p>
      </div>
      
      <div className="space-y-12">
        {/* eslint-disable-next-line */}
        {translationData.howTo.steps.map((step: any, idx: number) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 items-start relative">
            {idx !== translationData.howTo.steps.length - 1 && (
              <div className="absolute left-6 top-16 bottom-[-32px] w-px bg-gray-800 hidden md:block"></div>
            )}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-hyper-secondary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-900/50 z-10">{idx + 1}</div>
            <div className="bg-hyper-800/30 p-6 rounded-xl border border-gray-800 w-full hover:border-gray-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
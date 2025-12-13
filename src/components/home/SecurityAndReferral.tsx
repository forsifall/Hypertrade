import { getDictionary } from "@/app/translations";
import { Language } from "../types";
import { Shield } from "lucide-react";

// --- Security & Referral ---
export function SecurityAndReferral ({ lang }: { lang: Language }) {
    const translationData = getDictionary(lang);

  return (
    <section className="py-20 bg-hyper-900 relative overflow-hidden">
    <div className="absolute left-0 bottom-0 w-full h-1/2 bg-hyper-secondary/5 blur-[100px] pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Security */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <Shield className="text-green-400" size={32} />
            {translationData.security.title}
          </h2>
          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-white text-lg mb-2">{translationData.security.nonCustodial}</h4>
              <p className="text-sm text-gray-400">{translationData.security.nonCustodialDesc}</p>
            </div>
            <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-white text-lg mb-2">{translationData.security.consensus}</h4>
              <p className="text-sm text-gray-400">{translationData.security.consensusDesc}</p>
            </div>
            <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-white text-lg mb-2">{translationData.security.transparency}</h4>
              <p className="text-sm text-gray-400">{translationData.security.transparencyDesc}</p>
            </div>
          </div>
        </div>

        {/* Referral */}
        <div className="glass-panel rounded-2xl p-8 border border-hyper-secondary/30 bg-gradient-to-br from-hyper-800 to-hyper-900 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{translationData.security.referralTitle}</h2>
          <p className="text-gray-300 mb-8 text-lg">
            {translationData.security.referralDesc}
          </p>
          <div className="bg-hyper-950/50 p-6 rounded-xl border border-dashed border-gray-600 mb-8">
            <p className="text-xs text-yellow-400 font-mono mb-2 tracking-widest">{translationData.security.tokenStatus}</p>
            <p className="text-sm text-gray-400 font-medium">
              {translationData.security.tokenStatusDesc}
            </p>
          </div>
          <button className="w-full bg-white text-hyper-900 font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors shadow-lg">
            {translationData.security.referralBtn}
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}
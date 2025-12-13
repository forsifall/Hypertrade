import { getDictionary, Language } from "@/app/translations";
import { ArrowRightLeft, CheckCircle, Search } from "lucide-react";
import Link from "next/link";

// --- Hero Section ---
export function Hero({lang}: {lang: Language}) {
  const translationData = getDictionary(lang);
  
  return (
    <section className="relative pt-32 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
    {/* Background Effects */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-hyper-secondary/10 blur-[120px] rounded-full -z-10" />
    <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-hyper-accent/10 blur-[100px] rounded-full -z-10" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hyper-accent/10 border border-hyper-accent/20 text-hyper-accent text-xs font-semibold mb-8 animate-fade-in-up">
        <span className="w-2 h-2 rounded-full bg-hyper-accent animate-pulse"></span>
        {translationData.hero.badge}
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
        {translationData.hero.titlePrefix}<span className="gradient-text">{translationData.hero.titleHighlight}</span><br />
        {translationData.hero.titleSuffix}
      </h1>
      
      <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
        {translationData.hero.description}
      </p>

      {/* Hero Features List */}
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-gray-400 text-sm md:text-base max-w-4xl mx-auto">
        {translationData.hero.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center gap-2">
            <CheckCircle className="text-hyper-accent flex-shrink-0" size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-hyper-accent hover:bg-cyan-300 text-hyper-900 font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
          {translationData.hero.ctaPrimary}
          <ArrowRightLeft size={20} />
        </button>
        <Link href={`/${lang}/about`}
          className="glass-panel hover:bg-white/5 border-gray-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
        >
          <Search size={20} />
          {translationData.hero.ctaSecondary}
        </Link>
      </div>

      {/* Stats / Trust Badges */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto opacity-80">
        <div className="border border-white/10 p-4 rounded-lg bg-hyper-800/50">
          <div className="text-hyper-accent font-bold text-2xl">0%</div>
          <div className="text-xs text-gray-400 uppercase">{translationData.hero.stats.fees}</div>
        </div>
        <div className="border border-white/10 p-4 rounded-lg bg-hyper-800/50">
          <div className="text-hyper-accent font-bold text-2xl">99.9%</div>
          <div className="text-xs text-gray-400 uppercase">{translationData.hero.stats.accuracy}</div>
        </div>
        <div className="border border-white/10 p-4 rounded-lg bg-hyper-800/50">
          <div className="text-hyper-accent font-bold text-2xl">1 Тх</div>
          <div className="text-xs text-gray-400 uppercase">{translationData.hero.stats.swaps}</div>
        </div>
        <div className="border border-white/10 p-4 rounded-lg bg-hyper-800/50">
          <div className="text-hyper-accent font-bold text-2xl">HyperBFT</div>
          <div className="text-xs text-gray-400 uppercase">{translationData.hero.stats.security}</div>
        </div>
      </div>
    </div>
  </section>
  )
}
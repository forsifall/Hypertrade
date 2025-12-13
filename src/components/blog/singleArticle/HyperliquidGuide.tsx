import BackButtonNoArticle from "@/components/ui/BackButtonNoArticle";
import { Cpu } from "lucide-react";

// eslint-disable-next-line
export default function HyperliquidGuide({translationData}:{translationData:any}) {
  return (
    <div className="pt-40 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center animate-fade-in-up">
      <div className="w-16 h-16 bg-hyper-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
        <Cpu className="text-gray-500" size={32} />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-white">
        {translationData.blog.underConstruction}
      </h2>
      <p className="text-gray-400 mb-8 max-w-md">
        {translationData.blog.underConstructionDesc}
      </p>
      <BackButtonNoArticle label={translationData.articleDex.back} />
    </div>
  );
}

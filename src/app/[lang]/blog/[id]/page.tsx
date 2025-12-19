// "use client"

import { getDictionary, Language } from "@/app/translations";
import { ArticleDCAStrategy2 } from "@/components/blog/singleArticle/2ArticleDCAStrategy";
import { ArticleSplitRouting2 } from "@/components/blog/singleArticle/Article2SplitRouting";
import { ArticleArbitrageGuide } from "@/components/blog/singleArticle/ArticleArbitrageGuide";
import { ArticleCommonMistakes } from "@/components/blog/singleArticle/ArticleCommonMistakes";
import { ArticleComparison } from "@/components/blog/singleArticle/ArticleComparison";
import { ArticleCrossChainVsNative } from "@/components/blog/singleArticle/ArticleCrossChainVsNative";
import { ArticleDCAStrategy } from "@/components/blog/singleArticle/ArticleDCAStrategy";
import { ArticleDeveloperIntegration } from "@/components/blog/singleArticle/ArticleDeveloperIntegration";
import { ArticleDexComparison } from "@/components/blog/singleArticle/ArticleDexComparison";
import { ArticleGasOptimization } from "@/components/blog/singleArticle/ArticleGasOptimization";
import { ArticleHypeToken } from "@/components/blog/singleArticle/ArticleHypeToken";
import { ArticleInvisiumSimulations } from "@/components/blog/singleArticle/ArticleInvisiumSimulations ";
import { ArticleLiquidityAnalysis } from "@/components/blog/singleArticle/ArticleLiquidityAnalysis";
import { ArticleMetaMaskGuide } from "@/components/blog/singleArticle/ArticleMetaMaskGuide";
import { ArticleMEVProtection } from "@/components/blog/singleArticle/ArticleMEVProtection";
import { ArticleMultiHopRouting } from "@/components/blog/singleArticle/ArticleMultiHopRouting";
import { ArticleQuickStartGuide } from "@/components/blog/singleArticle/ArticleQuickStartGuide";
import { ArticleReferralProgram } from "@/components/blog/singleArticle/ArticleReferralProgram";
import { ArticleRoutingSecurity } from "@/components/blog/singleArticle/ArticleRoutingSecurity";
import { ArticleSlippageSettings } from "@/components/blog/singleArticle/ArticleSlippageSettings";
import { ArticleSplitRouting } from "@/components/blog/singleArticle/ArticleSplitRouting";
import { ArticleVolatileTokens } from "@/components/blog/singleArticle/ArticleVolatileTokens";
import { ArticleDexAggregator } from "@/components/blog/singleArticle/DexAggregator";
import HyperliquidGuide from "@/components/blog/singleArticle/HyperliquidGuide";
import InvisiumTechDeepdive from "@/components/blog/singleArticle/InvisiumTechDeepdive";
import ArticlePriceImpact from "@/components/blog/singleArticle/PriceImpact";
// import "../../../../i18n";

export default async function ArticleSingle({params}:{params:Promise<{id:string, lang:Language}>}) {

  const {id,lang} = await params;
    const translationData = getDictionary(lang);

  const selectCurrentArticle = () => {
    switch(id) {
        case "dex-aggregator-explained":
            return <ArticleDexAggregator translationData={translationData} />
        case "invisium-tech-deepdive":
            return <InvisiumTechDeepdive translationData={translationData} />
        case "hyperliquid-guide":
            return <HyperliquidGuide translationData={translationData} />
        case "price-impact-guide":
            return <ArticlePriceImpact lang={lang} />
        case "invisium-simulations":
            return <ArticleInvisiumSimulations lang={lang} />
        case "split-routing-guide":
            return <ArticleSplitRouting lang={lang} />
        case "dex-aggregator-comparison":
            return <ArticleComparison lang={lang} />
        case "common-dex-mistakes":
            return <ArticleCommonMistakes lang={lang} />
        case "developer-integration-guide":
            return <ArticleDeveloperIntegration lang={lang} />
        case "referral-program-guide":
            return <ArticleReferralProgram lang={lang} />
        case "gas-optimization-hyperliquid":
            return <ArticleGasOptimization lang={lang} />
        case "dex-comparison-hyperliquid":
            return <ArticleDexComparison lang={lang} />
        case "routing-security-comparison":
            return <ArticleRoutingSecurity lang={lang} />
        case "dca-strategy-guide":
            return <ArticleDCAStrategy lang={lang} />
        case "cross-chain-vs-native-security":
            return <ArticleCrossChainVsNative lang={lang} />
        case "arbitrage-guide-hyperliquid":
            return <ArticleArbitrageGuide lang={lang} />
        case "slippage-settings-guide":
            return <ArticleSlippageSettings lang={lang} />
        case "volatile-tokens-trading":
            return <ArticleVolatileTokens lang={lang} />
        case "split-routing-guide2":
            return <ArticleSplitRouting2 lang={lang} />
        case "mev-protection-guide":
            return <ArticleMEVProtection lang={lang} />
        case "liquidity-analysis-guide":
            return <ArticleLiquidityAnalysis lang={lang} />
        case "multi-hop-routing-guide":
            return <ArticleMultiHopRouting lang={lang} />
        case "dca-strategy-guide2":
            return <ArticleDCAStrategy2 lang={lang} />
        case "quick-start-guide":
            return <ArticleQuickStartGuide lang={lang} />
        case "metamask-guide":
            return <ArticleMetaMaskGuide lang={lang} />
        case "hype-token":
            return <ArticleHypeToken lang={lang} />
    }
  } 

  return (
    <>
     {selectCurrentArticle()}
    </>
  );
}

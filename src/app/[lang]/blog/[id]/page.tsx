import { getDictionary, Language } from "@/app/translations";
import { ArticleDexAggregator } from "@/components/blog/singleArticle/DexAggregator";
import HyperliquidGuide from "@/components/blog/singleArticle/HyperliquidGuide";
import InvisiumTechDeepdive from "@/components/blog/singleArticle/InvisiumTechDeepdive";

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
    }
  } 

  return (
    <>
     {selectCurrentArticle()}
    </>
  );
}

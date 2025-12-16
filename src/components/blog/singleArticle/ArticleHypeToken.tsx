import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { AlertCircle, Calendar, Clock, Layers, ShoppingCart, Zap } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";

// eslint-disable-next-line
export const ArticleHypeToken = ({ lang }: { lang: Language }) => {
    {/* eslint-disable-next-line */}
  const post = getBlogPosts(lang).find((curr: any) => curr.id === "hype-token");

  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
      <div className={`h-64 md:h-80 w-full bg-gradient-to-r ${post.imageColor} relative`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
          <BackButton label="Back" />
          <div className="flex flex-wrap gap-4 text-sm font-medium text-hyper-accent mb-4">
            <span className="bg-hyper-accent/10 px-3 py-1 rounded-full border border-hyper-accent/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-gray-400">
              <Clock size={14} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-gray-400">
              <Calendar size={14} /> {post.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 border-l-4 border-hyper-accent pl-6 italic">
            {post.intro}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Layers className="text-hyper-secondary" /> {post.whatIs.title}
          </h2>
          <p>{post.whatIs.text}</p>

          <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
            <h4 className="font-bold text-white mb-2">{post.whatIs.analogyTitle}</h4>
            <p className="text-sm text-gray-400 m-0">{post.whatIs.analogyText}</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <AlertCircle className="text-red-400" /> {post.whyNeeded.title}
          </h2>
          <ul>
            {post.whyNeeded.list.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> {post.amount.title}
          </h2>

          <div className="space-y-6 not-prose mb-12">
            {/* eslint-disable-next-line */}
            {post.amount.levels.map((lvl: any, i: number) => (
              <div key={i} className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-2">{lvl.label}</h3>
                <p className="text-gray-400">{lvl.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <ShoppingCart className="text-green-400" /> {post.whereBuy.title}
          </h2>

          {post.whereBuy.paragraphs.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">
            {post.mistakes.title}
          </h2>
          <ul>
            {post.mistakes.list.map((m: string, i: number) => (
              <li key={i}>{m}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">
            {post.summary.title}
          </h2>
          <p className="text-gray-300 mb-8">{post.summary.text}</p>

          <div className="bg-gradient-to-r from-hyper-accent/20 to-hyper-secondary/20 p-8 rounded-2xl border border-hyper-accent/30 text-center not-prose mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              {post.cta.title}
            </h3>
            <Link
              href={`/${lang}`}
              className="inline-block bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
            >
              {post.cta.button}
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

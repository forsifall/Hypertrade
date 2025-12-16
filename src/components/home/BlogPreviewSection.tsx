import { getDictionary, Language } from "@/app/translations";
import { getBlogPosts } from "../blog/data";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

// --- Blog Preview Slider Section ---
export function BlogPreviewSection({ lang }: { lang: Language }) {
  const posts = getBlogPosts(lang);
  const translationData = getDictionary(lang);
  return (
    <section className="py-20 bg-hyper-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-white">
              {translationData.blog.latest}
            </h2>
            <p className="text-gray-400">{translationData.blog.latestDesc}</p>
          </div>
          <Link href={`/${lang}/blog`}
            // onClick={() => onNavigate("blog")}
            className="hidden md:flex items-center gap-2 text-hyper-accent hover:text-white transition-colors font-medium"
          >
            {translationData.blog.viewAll} <ArrowRight size={20} />
          </Link>
        </div>

        {/* Slider Container */}
        <div className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide snap-x">
          {/* eslint-disable-next-line */}
          {posts.map((post:any) => (
            <Link href={`/${lang}/blog/${post.id}`}
              key={post.id}
              className="min-w-[300px] md:min-w-[350px] snap-center glass-panel rounded-xl overflow-hidden cursor-pointer hover:border-hyper-accent/50 transition-all hover:-translate-y-1 group flex flex-col"
            >
              {/* Image */}
              <div
                className={`h-40 w-full bg-gradient-to-br ${post.imageColor} relative`}
              >
                <div className="absolute top-3 left-3 bg-black/50 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10 uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Calendar size={12} /> {post.date}
                </div>
                <h3 className="font-bold text-white text-lg mb-2 leading-tight group-hover:text-hyper-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-3 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="text-xs font-semibold text-hyper-accent flex items-center gap-1 mt-auto">
                  {translationData.blog.readMore} <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-6 text-center md:hidden">
           <Link href={`/${lang}/blog`}
            // onClick={() => onNavigate("blog")}
            className="inline-flex items-center gap-2 text-hyper-accent hover:text-white transition-colors font-medium"
          >
            {translationData.blog.viewAll} <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

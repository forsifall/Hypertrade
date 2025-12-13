import { Calendar, Clock, ExternalLink } from "lucide-react";
import { getBlogPosts } from "./data";
import { getDictionary, Language } from "@/app/translations";
import Link from "next/link";

// --- Blog Page Content ---
// eslint-disable-next-line
export default function BlogPage ({ lang }: { lang: Language }) {
  const posts = getBlogPosts(lang);
  const translationData = getDictionary(lang);

  return (
    <section className="py-20 bg-hyper-900 min-h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {translationData.blog.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {translationData.blog.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="glass-panel rounded-2xl overflow-hidden hover:border-hyper-accent/50 transition-all group flex flex-col h-full cursor-pointer hover:-translate-y-1 duration-300"
            >
              <Link href={`/${lang}/blog/${post.id}`}>
                {/* Image Placeholder */}
                <div
                  className={`h-48 w-full bg-gradient-to-br ${post.imageColor} relative group-hover:brightness-110 transition-all`}
                >
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-hyper-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-700/50">
                    <button className="text-sm font-semibold text-hyper-accent hover:text-white transition-colors flex items-center gap-1">
                      {translationData.blog.readMore} <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

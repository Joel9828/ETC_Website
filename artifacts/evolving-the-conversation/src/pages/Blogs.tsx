import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { useState } from "react";

interface BlogPost {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
  categories: string[];
}

export function Blogs() {
  const { t } = useLanguage();
  const posts = t('blogs.posts') as unknown as BlogPost[];
  const categories = t('blogs.categories') as { value: string; label: string }[];
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredPosts = activeCategory === "all"
    ? posts
    : posts.filter((post) => post.categories?.includes(activeCategory));

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <section className="bg-primary text-white py-24 text-center">
        <h1 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-widest">
          {t('blogs.title')}
        </h1>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-heading font-bold text-sm uppercase tracking-widest text-primary mb-4">
              {t('blogs.filterLabel')}
            </p>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setActiveCategory(category.value)}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
                    activeCategory === category.value
                      ? "border-primary bg-primary text-white"
                      : "border-primary/20 bg-white text-primary hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col group">
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-xs text-accent font-semibold tracking-widest uppercase mb-3">{post.date}</p>
                  <h3 className="font-heading font-extrabold text-xl text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-8 flex-grow text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 border-2 border-primary text-primary font-heading font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-200 self-start"
                  >
                    {t('blogs.readMore')} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <p className="py-12 text-center text-lg text-gray-500">{t('blogs.noPosts')}</p>
          )}
        </div>
      </section>
    </div>
  );
}

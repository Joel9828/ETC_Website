import { useLanguage } from "@/context/LanguageContext";
import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar } from "lucide-react";

interface BlogPostData {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
}

export function BlogPost() {
  const { t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();

  const posts = t('blogs.posts') as unknown as BlogPostData[];
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center gap-6 px-4">
        <p className="font-heading font-bold text-2xl text-primary text-center">{t('blogs.postNotFound')}</p>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> {t('blogs.postNotFoundBack')}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Hero Image */}
      <div className="relative w-full h-64 sm:h-80 md:h-[420px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
      </div>

      {/* Article */}
      <article className="max-w-2xl mx-auto w-full px-4 sm:px-6 py-14">

        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline mb-8 block"
        >
          <ArrowLeft className="w-4 h-4" /> {t('blogs.backToBlogs')}
        </Link>

        {/* Date */}
        <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
          <Calendar className="w-3.5 h-3.5" />
          {post.date}
        </div>

        {/* Title */}
        <h1 className="font-heading font-black text-3xl md:text-4xl text-primary leading-tight mb-10 uppercase tracking-wide">
          {post.title}
        </h1>

        {/* Body */}
        <div className="flex flex-col gap-6">
          {post.body.map((para, i) => (
            <p key={i} className="text-gray-700 text-base leading-[1.85] tracking-[0.01em]">
              {para}
            </p>
          ))}
        </div>
      </article>

      {/* CTA Banner */}
      <section className="bg-gradient-to-br from-[#0B1B3F] via-[#13284F] to-[#1E3A6E] text-white py-20 mt-auto">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center gap-8">
          <h2 className="font-heading font-black text-3xl md:text-4xl uppercase tracking-wide leading-tight">
            {t('blogs.ctaTitle')}
          </h2>
          <a
            href="https://koalendar.com/e/professional-english-consultation-or-consulta-corporativa-de-ingles-profesional"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border-2 border-white text-white font-heading font-black text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-primary transition-all duration-200"
          >
            {t('blogs.ctaBtn')}
          </a>
        </div>
      </section>
    </div>
  );
}

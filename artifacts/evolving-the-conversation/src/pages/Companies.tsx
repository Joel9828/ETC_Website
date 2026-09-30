import { useLanguage } from "@/context/LanguageContext";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Building2, ClipboardCheck, Presentation, UserRoundCheck, CheckCircle2 } from "lucide-react";

export function Companies() {
  const { t } = useLanguage();
  const offerIcons = [Building2, ClipboardCheck, Presentation, UserRoundCheck];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary bg-gradient-to-br from-[#0B1B3F] via-[#13284F] to-[#1E3A6E] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider leading-tight mb-8 drop-shadow-lg">
            {t('companies.hero.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading font-bold max-w-3xl leading-tight mb-6">
            {t('companies.hero.subheading')}
          </h2>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl leading-relaxed drop-shadow-md mb-10">
            {t('companies.hero.body')}
          </p>
          <CTAButton href="/contact">{t('companies.hero.btn')}</CTAButton>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary mb-8 leading-tight">
            {t('companies.problem.title')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('companies.problem.body')}
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-primary bg-gradient-to-br from-[#1E3A6E] to-[#0B1B3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="mb-16">{t('companies.offer.title')}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t('companies.offer.cards').map((card: { title: string; body: string }, index: number) => {
              const Icon = offerIcons[index];
              return (
                <div key={card.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                  <Icon className="w-12 h-12 text-accent mb-6" />
                  <h3 className="font-heading font-bold text-2xl mb-4">{card.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="text-primary mb-8">{t('companies.different.title')}</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {t('companies.different.items').map((item: string) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-4 text-gray-700">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-accent" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="text-primary mb-16">{t('companies.who.title')}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t('companies.who.items').map((item: string) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-accent mt-0.5" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Companies Can Expect */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="text-primary mb-16">{t('companies.expect.title')}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t('companies.expect.items').map((item: string) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-100 p-5">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-accent mt-0.5" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-heading font-bold leading-tight">
            {t('companies.callout')}
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 bg-white text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-primary uppercase tracking-wide leading-tight mb-6">
            {t('companies.closing.title')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            {t('companies.closing.body')}
          </p>
          <CTAButton href="/contact">{t('companies.closing.btn')}</CTAButton>
        </div>
      </section>
    </div>
  );
}